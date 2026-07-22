#!/bin/sh
# SessionStart wrapper.
#
# The banner is printed FIRST, on the very first executable lines, before any
# parsing that could abort - and with NO `set -u`. 3.0.3 regressed here: the
# banner sat after version parsing and a `for` over $PWD, so on the founder's
# shell a silent abort (an unset var under set -u, an odd cwd, or a Windows-style
# path) killed the script before the echo ever ran - a silent session, no banner.
# Everything below the banner is best-effort enrichment that must never suppress
# it. Pure sh: shell builtins only, so the banner never depends on a runtime.

echo "=== Werkforce is booted ==="
echo "The constitution below is in force. Read before you write; the HQ record outranks memory."

ROOT="${CLAUDE_PLUGIN_ROOT:-}"
# Normalize a Windows-style root (C:\...\plugin) to forward slashes so file
# probes resolve. Best-effort: if tr is absent the original path is kept.
ROOT2=$(printf '%s' "$ROOT" | tr '\\' '/' 2>/dev/null)
[ -n "$ROOT2" ] && ROOT="$ROOT2"

# Plugin version - parsed from plugin.json with pure sh parameter expansion.
PJ="$ROOT/.claude-plugin/plugin.json"
if [ -f "$PJ" ]; then
  while IFS= read -r line || [ -n "$line" ]; do
    case "$line" in
      *'"version"'*)
        t="${line#*\": \"}"
        echo "plugin version: ${t%%\"*}"
        break
        ;;
    esac
  done < "$PJ"
fi

# HQ note - only when a werkforce HQ is present in the cwd tree or home.
HQ=""
for c in "${PWD:-.}/werkforce/HQ.md" "${HOME:-}/werkforce/HQ.md"; do
  [ -n "$c" ] && [ -f "$c" ] && HQ="$c" && break
done
if [ -n "$HQ" ]; then
  HQDIR="${HQ%/HQ.md}"
  OS_VER=""
  [ -f "$HQDIR/os/VERSION" ] && IFS= read -r OS_VER < "$HQDIR/os/VERSION"
  echo "An HQ is present at $HQDIR (os/VERSION ${OS_VER:-unknown})."
fi
echo

# Constitution body needs a JS runtime; the guards are JavaScript too. If a
# runtime is present, append the body. If not, print ONE install offer (once,
# here at session start - never on every tool call) and carry on clean.
RT=""
for c in node node.exe nodejs; do
  command -v "$c" >/dev/null 2>&1 && RT="$c" && break
done
if [ -n "$RT" ]; then
  "$RT" "$ROOT/hooks/scripts/session-start.mjs" body 2>/dev/null
else
  echo "NOTE: Werkforce's governance guards are idle - no Node runtime was found on PATH. Skills and this banner work without it; only the guards need Node."
  echo "      Install Node:  winget install OpenJS.NodeJS.LTS  (Windows) |  brew install node  (Mac) |  sudo apt install nodejs  (Linux)"
  echo "      Or run the install-dependencies skill and I will detect your package manager and install it with your go-ahead."
fi
exit 0
