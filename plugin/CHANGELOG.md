# Changelog — Werkforce Starter

## 0.1.1 — 2026-07-27 (fix batch from the first external install's 0.1.0 upgrade)

- The kernel guard now finds the HQ on its own, wherever the session is rooted
  (OneDrive, Desktop, Windows paths), instead of trusting the current folder -
  so canonical kernel commands work and the real ledgers stay protected.
- Canonical kernel commands are no longer denied for what their prose arguments
  contain - pipes in a board row or a semicolon in a note pass; real command
  chaining still does not - and every denial now names the actual failed
  condition. A guard acceptance suite ships beside the guard.
- The checkup's hook probe now reads every hook surface Claude Code honors,
  including .claude/hooks.json, and names every file it read - a blind probe
  can never read as clean again.
- Every promised checkup family (manifest drift, format comments, org chart,
  seat cards, deliverable renders, task tables) now prints at least one OK line
  per run, or a NOTE saying why it was skipped - absence is loud.
- The checkup no longer flags the kernel/ folder the 0.1.0 pack itself
  installs as an unexpected top-level folder.
- The connect-a-tool skill ships - the onboarding checklist's step 6 named it,
  but the 0.1.0 pack left it out (it was founder-signed on 2026-07-25 and
  excluded from the 3.3 assembly only by the signed-content boundary). The pack
  now holds 72 skills.
- The upgrade now seeds TREES.md and verifies every file it promises
  (records/artifact-registry.md included) actually landed, reporting any still
  missing by name; fresh installs place TREES.md too.

## 0.1.0 — 2026-07-27 (Werkforce Starter v0 — the line renumbers; supersedes the briefly-published 3.4.0, history below unchanged; os schema 0.1)

Public label: **Werkforce Starter v0**.

- Added the independent Starter kernel launcher, bundle, schema, guard, Claude
  wrapper/adapter, and Codex adapter.
- Added fresh-install kernel placement and Claude PreToolUse arming.
- Added the backup-first, additive 3.x migration with founder-gated
  `import-v1`; import is never automatic.
- Corrected `upgrade-your-werkforce` to name OS 3.4 as current and to treat any
  3.x HQ as a supported additive-migration origin.
- Kept `THIRD_PARTY_NOTICES` in the Starter Tier artifact so its retained
  installed-artifact acceptance suite remains runnable after delivery.
- Carried the live Claude Bash command-shape fix and its six acceptance cases.
- Folded the atomic sign-off worklog append and Article-16 format correction.
- Carried the delayed Option B note and corrected the version triple - now pack
  0.1.0, OS 0.1, and manifest 0.1.0 under the Starter renumbering.
- Added the internal-tier exclusion control and the `pack-3.3` rename carrier.

## 3.3.0 — 2026-07-25

The full 71-skill public plugin baseline used for this release.
