#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";

const protectedPatterns = [
  /^records\/events\.jsonl$/,
  /^departments\/[^/]+\/board\.md$/,
  /^records\/worklog\.md$/,
  /^company\/decision-log\.md$/,
  /^records\/operator-reviews\.md$/,
  /^records\/audit-log\.md$/,
  /^records\/fleet\.md$/,
  /^records\/writer-receipts(?:\/|$)/,
];
const mutationWords = String.raw`(?:>>|>|tee\b|sed\s+-i(?:\.\w+)?|perl\s+-pi|writeFileSync|open\([^)]*,\s*["']w|cp\b|mv\b|dd\b|truncate\b|install\b|ln\s+-s)`;
// Every denial names the guard version, so a stale armed copy identifies
// itself in its own message (the 0.1.2 field reports carried a 0.1.0-only
// message, which is how the stale-guard vector was proven).
const GUARD_VERSION="0.1.2";
const deny=r=>({allow:false,reason:`${r} [kernel guard ${GUARD_VERSION}]`});
const KERNEL_VERBS=["file-task","move-stage","record-receipt","queue-decision","decide","signoff","sendback","dispatch","report","note","project","import-v1"];

// The HQ is never taken from an unverified root: a directory only counts as the
// HQ if os/werkforce-kernel actually exists inside it. Candidates are tried in
// order and the first that verifies wins; cwd is the LAST resort, not the
// default - a session rooted anywhere (OneDrive, Desktop, Windows) must still
// resolve the same HQ (live-install finding, 2026-07-27, first external HQ).
function findHqFrom(start) {
  if (!start || typeof start !== "string") return null;
  let dir;
  try { dir = resolve(start); } catch { return null; }
  // A session rooted one level ABOVE the HQ (the folder holding werkforce/) is
  // the common external layout, so the conventional child is probed first.
  if (existsSync(join(dir, "werkforce", "os", "werkforce-kernel"))) return join(dir, "werkforce");
  for (let i = 0; i < 64; i++) {
    if (existsSync(join(dir, "os", "werkforce-kernel"))) return dir;
    const up = dirname(dir);
    if (up === dir) return null;
    dir = up;
  }
  return null;
}
export function resolveHq(input) {
  const body = input.tool_input || {};
  const command = String(body.command || "");
  const candidates = [];
  if (input.hq) candidates.push(input.hq);
  const mhq = command.match(/--hq(?:=|\s+)(?:"([^"]+)"|'([^']+)'|(\S+))/);
  if (mhq) candidates.push(mhq[1] || mhq[2] || mhq[3]);
  const p = body.file_path || body.path;
  if (p && typeof p === "string" && isAbsolute(p)) candidates.push(dirname(resolve(p)));
  const mbin = command.match(/(?:"([^"]+[/\\]werkforce-kernel)"|'([^']+[/\\]werkforce-kernel)'|(\S+[/\\]werkforce-kernel)(?=\s|$))/);
  if (mbin) {
    const bin = mbin[1] || mbin[2] || mbin[3];
    if (isAbsolute(bin)) candidates.push(dirname(bin));
  }
  if (input.cwd) candidates.push(input.cwd);
  candidates.push(process.cwd());
  for (const c of candidates) {
    const hq = findHqFrom(c);
    if (hq) return hq;
  }
  return null;
}

function protectedPath(hq, p) {
  if (!p || typeof p !== "string") return false;
  const abs=isAbsolute(p)?resolve(p):resolve(hq,p);
  const rel=relative(hq,abs).split(sep).join("/");
  return !rel.startsWith("../") && protectedPatterns.some(re=>re.test(rel));
}
function allowedKernel(hq, input) {
  const argv=input.argv;
  if (!Array.isArray(argv) || argv.length<2) return false;
  if (resolve(argv[0])!==resolve(hq,"os/werkforce-kernel")) return false;
  return KERNEL_VERBS.includes(argv[1]);
}

// Shell-aware split of a Bash command into words, strict enough to validate the
// one canonical shape: launcher, verb, flags. Validation covers ONLY the
// launcher path and the verb - quoted argument values are opaque prose and no
// character inside them (pipes in a --row cell, semicolons in a --note) may
// deny the command (prose-sensitivity fix, 2026-07-27, three same-day denials).
// What still denies, quoted or not: `$(` and backticks (live inside double
// quotes in real shells) and, unquoted only, chaining/redirection operators.
function splitCommand(command) {
  const tokens = []; let cur = ""; let inTok = false; let i = 0;
  while (i < command.length) {
    const ch = command[i];
    if (ch === "'") {
      const end = command.indexOf("'", i + 1);
      if (end === -1) return { bad: "an unbalanced single quote" };
      cur += command.slice(i + 1, end); inTok = true; i = end + 1; continue;
    }
    if (ch === '"') {
      let j = i + 1, body = "";
      for (; j < command.length && command[j] !== '"'; j++) {
        // POSIX semantics: inside double quotes a backslash escapes only
        // $ ` " \ - before anything else it is a LITERAL character. The 0.1.1
        // handler ate every backslash, which mangled quoted Windows launcher
        // paths ("C:\HQ\os\werkforce-kernel" -> "C:HQoswerkforce-kernel"),
        // so kernel-control was never detected and unknown verbs were
        // admitted (first external install, 0.1.2 regression, 2026-07-27).
        if (command[j] === "\\" && j + 1 < command.length) {
          const nx = command[j + 1];
          if (nx === '"' || nx === "\\" || nx === "$" || nx === "`") { body += nx; j++; continue; }
          body += command[j]; continue;
        }
        if (command[j] === "`") return { bad: "a backtick inside double quotes (command substitution runs even when quoted)" };
        if (command[j] === "$" && command[j + 1] === "(") return { bad: "a $( substitution inside double quotes (it runs even when quoted)" };
        body += command[j];
      }
      if (j >= command.length) return { bad: "an unbalanced double quote" };
      cur += body; inTok = true; i = j + 1; continue;
    }
    if (/\s/.test(ch)) { if (inTok) { tokens.push(cur); cur = ""; inTok = false; } i++; continue; }
    if (ch === "`" ) return { bad: "an unquoted backtick" };
    if (ch === "$" && command[i + 1] === "(") return { bad: "an unquoted $( substitution" };
    if (/[;|&<>()]/.test(ch)) return { bad: `an unquoted shell operator '${ch}'` };
    if (ch === "\\" && (command[i + 1] === " " || command[i + 1] === '"' || command[i + 1] === "'")) {
      cur += command[i + 1]; inTok = true; i += 2; continue;
    }
    cur += ch; inTok = true; i++;
  }
  if (inTok) tokens.push(cur);
  return { tokens };
}
function checkKernelCommand(hq, command) {
  const s = splitCommand(command);
  if (s.bad) return { ok: false, why: `the command carries ${s.bad}; a kernel invocation must be a single un-chained command` };
  const [bin, verb] = s.tokens || [];
  if (!bin) return { ok: false, why: "the command is empty" };
  if (resolve(hq, bin) !== resolve(hq, "os/werkforce-kernel"))
    return { ok: false, why: `'${bin}' does not resolve to the canonical launcher os/werkforce-kernel under the HQ at ${hq}` };
  if (!KERNEL_VERBS.includes(verb || ""))
    return { ok: false, why: `'${verb || "(none)"}' is not a known kernel verb` };
  return { ok: true };
}
// A command is kernel-control only when a werkforce-kernel path sits in an
// EXECUTED position - the first token, or the second behind an interpreter.
// The kernel's name appearing inside a prose argument (a commit message, a
// grep pattern, an inline script) is never control (review correction 1,
// 2026-07-27: `git commit -m "fix os/werkforce-kernel guard"` was denied).
// When the command cannot be tokenized (chaining, unbalanced quotes) the old
// whole-string match is kept as the conservative fallback - such commands are
// already outside the canonical shape, and the denial names the parse fault.
const KERNEL_NAME=/(?:^|[/\\])werkforce-kernel(?:$|[-_.])/;
function presentsKernelControl(input) {
  if (Array.isArray(input.argv) && typeof input.argv[0]==="string" &&
      KERNEL_NAME.test(input.argv[0])) return true;
  const command=String(input.command||"");
  if (!command) return false;
  const s=splitCommand(command);
  if (!s.bad) {
    const t=s.tokens||[];
    if (t[0] && KERNEL_NAME.test(t[0])) return true;
    if (t[0] && /^(?:node|nodejs|bash|sh|zsh|dash|python[0-9.]*)$/.test(t[0]) &&
        t[1] && KERNEL_NAME.test(t[1])) return true;
    return false;
  }
  return /(?:^|[\s"'`])(?:[^\s"'`]*[/\\])?werkforce-kernel(?:$|[-_.\s"'`])/.test(command);
}
export function decide(input) {
  const tool=String(input.tool_name||"");
  const body=input.tool_input||{};
  const hq=resolveHq(input);
  if (/^(Edit|Write)$/.test(tool)) {
    // No verified HQ above this file means the file is not under any kernel's
    // ledgers - protected paths are never computed from an unverified root.
    if (!hq) return {allow:true};
    const p=body.file_path||body.path;
    if (protectedPath(hq,p)) return deny("Denied: lifecycle truth is kernel-owned. Use os/werkforce-kernel <verb>.");
    return {allow:true};
  }
  if (tool==="Bash") {
    if (presentsKernelControl(body)) {
      if (!hq) return deny("Denied: kernel-control command, but no Werkforce HQ could be located (no os/werkforce-kernel found walking up from --hq, the launcher path, cwd). Pass --hq <path-to-HQ> or run the canonical launcher by absolute path.");
      if (allowedKernel(hq,body)) return {allow:true};
      const chk=checkKernelCommand(hq,String(body.command||""));
      if (chk.ok) return {allow:true};
      return deny(`Denied: ${chk.why}.`);
    }
    if (!hq) return {allow:true};
    const command=String(body.command||"");
    if (new RegExp(mutationWords,"i").test(command)) {
      const candidates=[...command.matchAll(/["']([^"']+)["']/g)].map(m=>m[1]).concat(command.split(/\s+/));
      if (candidates.some(p=>protectedPath(hq,p.replace(/^["']|["']$/g,""))))
        return deny("Denied: lifecycle truth is kernel-owned. Use os/werkforce-kernel <verb>.");
      if (/(?:events\.jsonl|board\.md|worklog\.md|decision-log\.md|operator-reviews\.md|audit-log\.md|fleet\.md|writer-receipts)/.test(command))
        return deny("Denied: lifecycle truth is kernel-owned. Use os/werkforce-kernel <verb>.");
    }
  }
  return {allow:true};
}
if (import.meta.url===`file://${process.argv[1]}`) {
  let input={}; try { input=JSON.parse(readFileSync(0,"utf8")||"{}"); } catch { process.stdout.write(JSON.stringify(deny("Denied: malformed hook input"))+"\n"); process.exit(0); }
  process.stdout.write(JSON.stringify(decide(input))+"\n");
}
