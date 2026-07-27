#!/usr/bin/env node
// Acceptance suite for the kernel guard (run: node guard-tests.mjs).
// Covers the two 0.1.1 guard fixes:
//  - cwd-independent HQ resolution (sessions rooted at the HQ, its parent, an
//    unrelated dir, and Windows-style paths on Windows node)
//  - prose-insensitive canonical-command validation (pipes/semicolons inside
//    quoted --row/--note values never deny; real chaining still does), with
//    denial messages naming the actual failed condition.
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, sep } from "node:path";
import { decide, resolveHq } from "./guard.mjs";

const scratch = mkdtempSync(join(tmpdir(), "werkforce-guard-test-"));
const hq = join(scratch, "My Werkforce", "werkforce");
mkdirSync(join(hq, "os"), { recursive: true });
mkdirSync(join(hq, "records"), { recursive: true });
writeFileSync(join(hq, "os", "werkforce-kernel"), "#!/bin/sh\n");
const desktop = join(scratch, "Desktop");
mkdirSync(desktop, { recursive: true });
const K = join(hq, "os", "werkforce-kernel");
// The guard's last-resort candidate is process.cwd(); pin it to the scratch
// area so the tree the suite runs FROM can never satisfy a resolution case.
process.chdir(desktop);

let fails = 0;
function t(name, got, want) {
  const ok = got === want;
  if (!ok) fails++;
  console.log(`${ok ? "PASS" : "FAIL"} ${name}${ok ? "" : ` (got ${JSON.stringify(got)}, want ${JSON.stringify(want)})`}`);
}
const bash = (command, cwd) => decide({ tool_name: "Bash", cwd, tool_input: { command } });
const edit = (file_path, cwd) => decide({ tool_name: "Edit", cwd, tool_input: { file_path } });

// --- HQ resolution, cwd-independent ---
t("resolve: session rooted at HQ", resolveHq({ cwd: hq, tool_input: {} }), hq);
t("resolve: session rooted at HQ parent", resolveHq({ cwd: join(hq, ".."), tool_input: {} }), hq);
t("resolve: unrelated dir via absolute launcher path",
  resolveHq({ cwd: desktop, tool_input: { command: `"${K}" note --row B1` } }), hq);
t("resolve: unrelated dir via --hq flag",
  resolveHq({ cwd: desktop, tool_input: { command: `os/werkforce-kernel note --row B1 --hq "${hq}"` } }), hq);
t("resolve: unrelated dir via Edit file_path",
  resolveHq({ cwd: desktop, tool_input: { file_path: join(hq, "records", "worklog.md") } }), hq);
t("resolve: unrelated dir, no clue anywhere", resolveHq({ cwd: desktop, tool_input: {} }), null);
// Windows-style paths are native path syntax on Windows node (sep = "\\"), so
// the join()-built paths above ARE the Windows cases there. On POSIX node the
// suite additionally proves a backslashed token neither crashes nor denies as
// the misleading kernel-control message.
if (sep === "\\") {
  console.log("NOTE running on Windows node - all cases above exercised Windows-style paths natively");
}

// --- canonical commands allowed from anywhere, prose-insensitive ---
t("allow: quoted-absolute launcher from Desktop cwd",
  bash(`"${K}" note --row B12 --note "checked"`, desktop).allow, true);
t("allow: relative launcher with HQ cwd",
  bash(`os/werkforce-kernel move-stage --row B12 --stage Done`, hq).allow, true);
t("allow: pipes in a quoted --row cell (0.1.1 regression, the reproduced denial class)",
  bash(`"${K}" file-task --row "| ENG-x | manifest-drift, format-comment, org-chart, seat-card, deliverable-render, or task-table | Filed |"`, desktop).allow, true);
t("allow: semicolon and ampersand in a quoted --note",
  bash(`"${K}" note --row B12 --note "either manifest-drift or task-table; formats & shapes"`, hq).allow, true);
t("allow: greater-than in a quoted --note",
  bash(`"${K}" note --row B12 --note "families > 6"`, hq).allow, true);

// --- what must still deny, each with its actual reason ---
const dChain = bash(`"${K}" note --row B12 > /tmp/out`, hq);
t("deny: unquoted redirection", dChain.allow, false);
t("deny reason names the operator", /unquoted shell operator '>'/.test(dChain.reason || ""), true);
const dSub = bash(`"${K}" note --row "x $(rm -rf /) y"`, hq);
t("deny: $( inside double quotes (runs in real shells)", dSub.allow, false);
t("deny reason names the substitution", /\$\( substitution/.test(dSub.reason || ""), true);
const dVerb = bash(`"${K}" frobnicate --row B12`, hq);
t("deny: unknown verb", dVerb.allow, false);
t("deny reason names the verb", /'frobnicate' is not a known kernel verb/.test(dVerb.reason || ""), true);
const dImp = bash(`/tmp/evil/werkforce-kernel note --row B12`, hq);
t("deny: imposter launcher", dImp.allow, false);
t("deny reason names the launcher mismatch", /does not resolve to the canonical launcher/.test(dImp.reason || ""), true);
const dNoHq = bash(`os/werkforce-kernel note --row B12`, desktop);
t("deny: kernel-control with no locatable HQ", dNoHq.allow, false);
t("deny reason says no HQ located", /no Werkforce HQ could be located/.test(dNoHq.reason || ""), true);

// --- protected paths computed against the verified root, never cwd ---
t("deny: Edit HQ worklog from Desktop cwd (ledger stays protected off-root)",
  edit(join(hq, "records", "worklog.md"), desktop).allow, false);
t("allow: Edit unprotected HQ file from Desktop cwd",
  edit(join(hq, "records", "notes.md"), desktop).allow, true);
t("allow: Edit outside any HQ (no unverified-root protection)",
  edit(join(desktop, "worklog.md"), desktop).allow, true);
// A backslashed path token on POSIX node: no crash, no kernel-control misfire.
t("posix: backslashed token does not crash or misdeny",
  bash(`echo C:\\Users\\testuser\\notes.txt`, desktop).allow, true);

rmSync(scratch, { recursive: true, force: true });
console.log(fails === 0 ? "\nAll guard acceptance cases passed." : `\n${fails} case(s) FAILED.`);
process.exit(fails === 0 ? 0 : 1);
