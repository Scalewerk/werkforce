#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { isAbsolute, normalize, relative, resolve, sep } from "node:path";

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
  return ["file-task","move-stage","record-receipt","queue-decision","decide","signoff","sendback","dispatch","report","note","project","import-v1"].includes(argv[1]);
}
const KERNEL_VERBS=["file-task","move-stage","record-receipt","queue-decision","decide","signoff","sendback","dispatch","report","note","project","import-v1"];
function allowedKernelCommand(hq, input) {
  // Claude Code's Bash payload carries a command string, never argv (live-parity
  // finding, 2026-07-27 cutover). Accept exactly one strictly-shaped canonical
  // invocation: the HQ launcher (quoted-absolute or HQ-relative), a known verb,
  // and no shell chaining/redirection/substitution anywhere in the command.
  const command=String(input.command||"");
  if (/[;|&<>`]|\$\(/.test(command)) return false;
  const m=command.match(/^\s*(?:"([^"]+)"|'([^']+)'|(\S+))\s+([a-z0-9-]+)\b/);
  if (!m) return false;
  const bin=m[1]||m[2]||m[3], verb=m[4];
  if (resolve(hq,bin)!==resolve(hq,"os/werkforce-kernel")) return false;
  return KERNEL_VERBS.includes(verb);
}
function presentsKernelControl(input) {
  if (Array.isArray(input.argv) && typeof input.argv[0]==="string" &&
      /(?:^|[/\\])werkforce-kernel(?:$|[-_.])/.test(input.argv[0])) return true;
  const command=String(input.command||"");
  return /(?:^|[\s"'`])(?:[^\s"'`]*[/\\])?werkforce-kernel(?:$|[-_.\s"'`])/.test(command);
}
export function decide(input) {
  const hq=resolve(input.hq||process.cwd()), tool=String(input.tool_name||"");
  const body=input.tool_input||{};
  if (/^(Edit|Write)$/.test(tool)) {
    const p=body.file_path||body.path;
    if (protectedPath(hq,p)) return {allow:false,reason:"Denied: lifecycle truth is kernel-owned. Use os/werkforce-kernel <verb>."};
    return {allow:true};
  }
  if (tool==="Bash") {
    if (allowedKernel(hq,body)) return {allow:true};
    if (allowedKernelCommand(hq,body)) return {allow:true};
    if (presentsKernelControl(body))
      return {allow:false,reason:"Denied: kernel-control path does not match the canonical HQ launcher."};
    const command=String(body.command||"");
    if (new RegExp(mutationWords,"i").test(command)) {
      const candidates=[...command.matchAll(/["']([^"']+)["']/g)].map(m=>m[1]).concat(command.split(/\s+/));
      if (candidates.some(p=>protectedPath(hq,p.replace(/^["']|["']$/g,""))))
        return {allow:false,reason:"Denied: lifecycle truth is kernel-owned. Use os/werkforce-kernel <verb>."};
      if (/(?:events\.jsonl|board\.md|worklog\.md|decision-log\.md|operator-reviews\.md|audit-log\.md|fleet\.md|writer-receipts)/.test(command))
        return {allow:false,reason:"Denied: lifecycle truth is kernel-owned. Use os/werkforce-kernel <verb>."};
    }
  }
  return {allow:true};
}
if (import.meta.url===`file://${process.argv[1]}`) {
  let input={}; try { input=JSON.parse(readFileSync(0,"utf8")||"{}"); } catch { process.stdout.write(JSON.stringify({allow:false,reason:"Denied: malformed hook input"})+"\n"); process.exit(0); }
  process.stdout.write(JSON.stringify(decide(input))+"\n");
}
