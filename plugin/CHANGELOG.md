# Werkforce plugin — changelog

All notable changes to the Werkforce plugin. Versions track the pack (semver);
each HQ's `os/VERSION` governs the instance separately.

## 3.1.0 - 2026-07-23

The founder's sign-off becomes a real stage. Work is not Done until you say so.

- **Your review is now a step on every board.** The old task path was Filed → In
  progress → In review → Done. As of 3.1 it is **Filed → In progress → (Blocked as
  parking) → Manager review → Operator review → Done**, plus **Dropped**. "In
  review" is renamed **Manager review** (your workforce's own review triangle), and
  a new **Operator review** stage sits in front of Done — that stage is *you*.
  Nothing reads Done until it has been signed off at Operator review.
- **A new skill walks your sign-off queue.** Say **"werkforce, sign-offs"** (or
  "operator review") and your workforce reads every board for rows waiting at
  Operator review, shows you each finished deliverable one at a time, and records
  your call. A sign-off flips the row to Done with a receipt. A send-back reopens
  the row to In progress and writes your reason — verbatim — into a new file,
  `records/operator-reviews.md`, so nothing is ever lost or guessed.
- **The boards gain the full 7-stage scaffold.** run-the-day, first-win,
  open-a-department, status-report, werkforce-checkup, install-your-werkforce, and
  upgrade-your-werkforce all now understand the Operator-review stage and the
  operator-reviews.md record. New HQs are seeded with it; existing HQs get it on
  update (see MIGRATION).
- **The checkup safety rail from 3.0.5 is included.** `checkup.sh --hq <path>` (and
  `WERKFORCE_HQ`) ship here too — 3.1 is a superset of 3.0.5, so updating to 3.1
  carries that fix forward. You do not need 3.0.5 separately if you take 3.1.

**Why it matters.** Until now "Done" meant your workforce's own triangle passed it —
your sign-off was a convention (SOP 14), not a structural gate. 3.1 makes the
founder boundary part of the machine: the board itself will not call anything Done
without your recorded sign-off, and every send-back keeps your reason on the record.

---

### MIGRATION — what happens to a live 3.0 HQ when you update

This is a **schema move** (`os/VERSION` 3.0 → 3.1), so unlike a patch it changes
your HQ's structure. It is designed to be **additive and safe**, but it is a real
migration and it is worth knowing exactly what runs.

- **Nothing changes until you update.** A 3.0 HQ keeps working untouched. The new
  workflow arrives only when you pull 3.1 and run the upgrade.
- **How you take it (two surfaces):**
  1. **Marketplace / plugin install:** `claude plugin update werkforce` pulls the
     3.1 plugin. This refreshes the skills you run.
  2. **Your HQ files:** say **"upgrade my werkforce"**. The `upgrade-your-werkforce`
     skill backs up your HQ first (backup-your-werkforce), then **additively** adds
     the 7-stage scaffold to your boards, creates `records/operator-reviews.md` if
     it is missing, modernizes the seat/stage wording, stamps `os/VERSION` to 3.1,
     and writes the migration to the worklog. It **keeps every department and every
     row you already built** — it does not rewrite history or drop legacy work.
- **What you should see afterward.** Each board carries the Operator-review stage,
  `records/operator-reviews.md` exists, `os/VERSION` reads 3.1, and the command
  center regenerates with the new stage.
- **If anything looks wrong, roll back.** The pre-migration backup restores your
  boards exactly. The plugin can revert with `claude plugin update` back to the
  prior version. There is no destructive step to unwind.

## 3.0.4 — 2026-07-22

Banner regression fix + operator-consented dependency install.

- **Fix: the boot banner is now unkillable.** On the founder's 3.0.3 PC re-test the
  session was silent — no banner, no error. Cause: the banner echo sat *after*
  version parsing and a `for` loop over `$PWD`, under `set -u`; on his shell a
  silent abort (an unset var, an odd cwd, or a Windows-style `C:\...` path) killed
  the script before the echo ran. `session-start.sh` now prints the banner on its
  **first two executable lines**, with **no `set -u`**, before any parsing — and
  normalizes a Windows-style `CLAUDE_PLUGIN_ROOT` (backslashes → forward slashes)
  defensively. Everything else is best-effort enrichment that can never suppress
  the banner.
- **Feature: runtime offer at session start.** When no Node runtime is found,
  SessionStart now prints a single, one-time install offer (winget / brew / apt
  commands, plus a pointer to the new skill) instead of leaving the operator to
  guess why the guards are idle. Printed once at boot, never on every tool call.
- **Feature: `install-dependencies` skill.** Detects platform and package manager
  honestly (winget/choco, brew, apt/dnf/pacman), shows the exact command, and
  installs Node **only on the operator's explicit in-session go-ahead** — never
  auto, never silent (installing software is consent-gated by law). Degrades to
  manual instructions when no package manager exists.

## 3.0.3 — 2026-07-22

Windows compatibility fix, round two. The 3.0.2 Node port failed on the founder's
PC re-test: "SessionStart:startup hook error — /usr/bin/bash: line 1: node:
command not found". His Claude Code is the **native Windows installer**, which
bundles its JS runtime inside the claude binary and does **not** expose `node` on
the hook shell's PATH — so the "node is guaranteed" assumption (true for npm
installs) was false. The one runtime Claude Code guarantees a hook is the **shell**
itself (every hook command runs through bash).

- **Every hook now launches through a POSIX-sh wrapper.** `hook-exec.sh` resolves
  a JS runtime (`node`/`node.exe`/`nodejs`) and, if found, execs the `.mjs` guard
  (stdin and the exit-2 block signal pass straight through). If **no** runtime is
  found it **exits 0 silently** — guards are fail-open by law, so a runtime-less
  box degrades to no guarding rather than to error noise.
- **The boot banner now prints from pure sh** (`session-start.sh`) using only
  shell builtins — no node, python, jq, grep, or sed — so the banner and plugin
  version **always** appear, even on a box with no JS runtime. The constitution
  body is appended via `session-start.mjs body` only when a runtime is present.
- Net effect: **zero error noise on a Windows box with neither node nor python**,
  banner still shows. Guard logic (the `.mjs` files) is unchanged.

Note: python is not in the runtime probe — the guards are JavaScript (`.mjs`),
which python cannot execute; shipping `.py` twins would be dead weight for a box
that has neither runtime.

## 3.0.2 — 2026-07-22

Windows compatibility fix. Found live by a founder's stranger-path install on a
Windows PC: hooks failed with "Python was not found" and the SessionStart banner
never printed, so no constitution or version was injected.

- **Hooks ported to Node (cross-platform).** Every hook now runs `node` against a
  `.mjs` script instead of `bash` + `jq`. Node is guaranteed present wherever
  Claude Code was installed via npm; `bash` and `jq` are not shipped on Windows.
  JSON payloads are parsed natively (no `jq` dependency). Behavior is identical:
  guard-delete, guard-send, guard-codex-collision block (exit 2); guard-receipts
  and guard-claims warn only; session-start injects the constitution + version.
  All guards remain fail-open (any error exits 0 and never blocks a session).
- **Removed** the superseded `hooks/scripts/*.sh` scripts.

No skill content changed; all 68 skills ship unchanged.

## 3.0.1 — 2026-07-22

Initial single-plugin release: 68 skills + governance hooks, wrapped in a
Werkforce-owned marketplace, validated by `claude plugin validate`.
