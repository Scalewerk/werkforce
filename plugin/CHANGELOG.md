# Werkforce plugin — changelog

All notable changes to the Werkforce plugin. Versions track the pack (semver);
each HQ's `os/VERSION` governs the instance separately.

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
