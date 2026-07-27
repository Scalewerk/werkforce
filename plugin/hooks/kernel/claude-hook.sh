#!/bin/sh
# Werkforce Starter kernel enforcement hook (PreToolUse).
# The guard resolves the HQ from cwd; this wrapper pins cwd to the HQ root.
HERE=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
HQ=$(CDPATH= cd -- "$HERE/../../.." && pwd)
cd "$HQ" || exit 0
exec node "$HERE/claude-adapter.mjs"
