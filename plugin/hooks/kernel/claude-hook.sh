#!/bin/sh
# Werkforce Starter kernel enforcement hook (PreToolUse).
# Legacy wrapper: since 0.1.1 the guard resolves the HQ itself (cwd-independent,
# Windows-safe) and hooks.json runs claude-adapter.mjs directly. Kept only for
# installs that still register this path; pinning cwd remains harmless.
HERE=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
HQ=$(CDPATH= cd -- "$HERE/../../.." && pwd)
cd "$HQ" || exit 0
exec node "$HERE/claude-adapter.mjs"
