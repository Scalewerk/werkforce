#!/bin/sh
# Guard launcher. The shell is the one runtime Claude Code guarantees to a hook
# (every hook command is run through bash on every platform); node/python are
# NOT guaranteed - the native Windows installer bundles its JS runtime inside the
# claude binary and does not expose `node` on the hook shell's PATH.
#
# So: resolve a JS runtime for the .mjs guard passed as $1. If one is found, exec
# it (stdin, and the guard's exit 2 block signal, pass straight through). If none
# is found, exit 0 SILENTLY - guards are fail-open by law, so a runtime-less box
# degrades to no guarding rather than to error noise. Zero output on this path.
#
# Only node-family runtimes are probed: the guards are JavaScript (.mjs), which
# python cannot execute. Shipping .py twins would be dead weight for a box that
# (per the evidence) has neither node nor python.
SCRIPT="$1"
[ -n "$SCRIPT" ] || exit 0

for rt in node node.exe nodejs; do
  if command -v "$rt" >/dev/null 2>&1; then
    exec "$rt" "$SCRIPT"
  fi
done

# No JS runtime on PATH - degrade silently.
exit 0
