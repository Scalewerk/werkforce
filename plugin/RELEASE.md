# Werkforce Starter v0 — 0.1.0

Werkforce Starter v0 is the final pre-Academy release for the founder and the
first external install. It keeps the complete public 3.3.0 plugin surface and adds the independent
Starter kernel without importing v-next internals.

## What changed

- The Starter kernel now ships as the HQ launcher, compiled bundle, event
  schema, Claude wrapper and adapter, Codex adapter, guard, and policy.
- Fresh installs place the kernel in the HQ and arm the Claude PreToolUse guard
  when no project hook file exists.
- Existing 3.x HQs migrate additively: backup first, install kernel files, then
  offer `import-v1` as a separate founder-gated step. Import never runs
  automatically.
- The live Claude command-shape fix is included. Canonical quoted-absolute and
  relative launcher calls are allowed; imposters, chains, unknown verbs, and
  metacharacter commands are denied.
- The operator sign-off path includes the worklog in its atomic receipt motion.
- The shipped format seed now matches Article 16.
- The delayed release-note carry and the pack/OS/manifest version triple are
  resolved at 0.1.0 / 3.4 / 0.1.0.
- The release path has a real internal-skill exclusion gate.
- The canonical next-cut carrier is named `pack-3.3`; historical `pack-3.1`
  remains intact as recovery evidence.

## Honest limits

Browser-observation checks are machine-blocked on this builder. Deterministic
HTML assertions run; the deliberately renamed `OFFLINE-*` Playwright browser
directories are not changed or reinstalled.

This candidate is unsigned and not pushed. Manager review is still required.
