---
name: install-dependencies
description: Install the runtimes Werkforce's governance guards need - chiefly Node - on the operator's own machine, but ONLY on their explicit in-session go-ahead, never automatically and never silently, because installing software on someone's computer is a consent-gated act. I detect your platform and package manager honestly (winget or choco on Windows, brew on Mac, apt/dnf/pacman on Linux), show you the exact command before running it, and if no package manager exists I hand you the manual steps instead of guessing. Use when you say "install dependencies", "install node", "set up my runtime", "the guards say node is missing", "fix the missing runtime", "install-dependencies", or when the boot banner reports Werkforce's guards are idle for want of Node. Run it once per machine; re-run is safe and simply confirms the runtime is already present.
---

# Install Dependencies - the runtime your guards need, installed only with your word

Werkforce's skills and boot banner run on the shell alone. Its **governance guards** - the ones that block an accidental delete of your HQ, hold an external send for your sign-off, and warn when a board reads "Done" with no receipt - are written in JavaScript and need a **Node** runtime on your machine's PATH. The native Windows Claude Code installer bundles its own runtime inside the app and does not expose `node` to hooks, so on a fresh Windows box the guards sit idle until Node is installed. This skill installs it.

One rule sits above everything here: **installing software on your computer is your call, not mine.** I never auto-install, never install silently, and never run a package manager without showing you the exact command first and waiting for your explicit go-ahead in this session. That is the same reserved-decision law that governs deletes and external sends.

## What I do, in order

1. **Detect your platform** honestly - Windows, Mac, or Linux - from the shell, and report what I found. If I cannot tell, I say so and ask.
2. **Check whether Node is already present.** If `node --version` (or `node.exe` / `nodejs`) answers, the guards already work and I stop here - nothing to install.
3. **Detect your package manager** by presence, not assumption:
   - Windows: `winget` first, then `choco`.
   - Mac: `brew`.
   - Linux: `apt-get`, then `dnf`, then `pacman`.
   I run only `command -v <tool>` to check - a detection probe never changes anything.
4. **Show you the exact command** I would run, and why, and wait. Nothing installs before you say go.
5. **On your go-ahead, run it** - once, in the foreground, with its output visible so you see exactly what happened.
6. **Verify** with `node --version`. If it answers, the guards are live from the next session start. If it does not, I report the failure plainly and fall back to the manual instructions below.

## The commands I offer (never run without your go-ahead)

| Platform | Package manager | Command |
|---|---|---|
| Windows | winget | `winget install OpenJS.NodeJS.LTS` |
| Windows | choco | `choco install nodejs-lts -y` |
| Mac | brew | `brew install node` |
| Linux | apt | `sudo apt-get update && sudo apt-get install -y nodejs` |
| Linux | dnf | `sudo dnf install -y nodejs` |
| Linux | pacman | `sudo pacman -S --noconfirm nodejs` |

`sudo` on Linux will prompt for your password in your own terminal - that is the OS asking you directly, another consent gate I do not bypass.

## When there is no package manager

If I find no package manager for your platform, I do not guess or pipe a script from the internet. I hand you the manual path instead:

- **Windows / Mac / Linux:** download the LTS installer from the official site, `https://nodejs.org/en/download`, run it, and reopen Claude Code. Then re-run this skill and I will confirm `node --version` answers.

That is a deliberate degrade: an honest set of instructions beats an unsafe automatic install.

## What this does not do

- It does not touch your HQ files, boards, or ledgers - it installs a runtime, nothing more.
- It does not install anything beyond what the guards need (Node). It is not a general package installer.
- It does not run in the background or on a schedule. One explicit run, one visible result.

## After it works

Nothing else to configure. The next time a session starts, `session-start.sh` finds Node, the boot banner stops showing the "guards are idle" note, and the guards enforce normally. If you ever move to a machine without Node, run this again.
