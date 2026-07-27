#!/bin/bash
# WerkforceOS installer (Claude edition) - copies every skill to where Claude
# Code looks for skills. This pack installs ONLY to the Claude discovery tree;
# the Codex edition of the pack owns its own tree. Safe to run again anytime:
# it refreshes pack skills, never touches anything else.
set -u

PACK_DIR="$(cd "$(dirname "$0")" && pwd)"
SKILLS_SRC="$PACK_DIR/skills"
CLAUDE_DEST="${CLAUDE_SKILLS_DIR:-$HOME/.claude/skills}"
HQ_DEST="${WERKFORCE_HQ:-}"

if [ ! -d "$SKILLS_SRC" ]; then
  echo "Could not find the skills folder next to this installer. Unzip the pack first, then run install.sh from inside the unzipped folder."
  exit 1
fi

# Founder-minted skills (grow-a-skill) live in the HQ's skills/ shelf and are
# installed right next to the pack's own - pack first, so pack names win.
HQ_SKILLS=""
if [ -d "./werkforce/skills" ] && [ -f "./werkforce/HQ.md" ]; then
  HQ_SKILLS="$(pwd)/werkforce/skills"
elif [ -d "$HOME/werkforce/skills" ]; then
  HQ_SKILLS="$HOME/werkforce/skills"
fi

install_to() {
  dest="$1"
  mkdir -p "$dest"
  count=0
  for skill in "$SKILLS_SRC"/*/; do
    name="$(basename "$skill")"
    [ -f "$skill/SKILL.md" ] || continue
    rm -rf "${dest:?}/$name"
    cp -R "$skill" "$dest/$name"
    count=$((count + 1))
  done
  if [ -n "$HQ_SKILLS" ]; then
    for skill in "$HQ_SKILLS"/*/; do
      [ -d "$skill" ] || continue
      name="$(basename "$skill")"
      [ -f "$skill/SKILL.md" ] || continue
      [ -d "$SKILLS_SRC/$name" ] && continue   # pack names win
      rm -rf "${dest:?}/$name"
      cp -R "$skill" "$dest/$name"
      count=$((count + 1))
    done
  fi
  echo "$count"
}

echo "Installing your agentic workforce (Claude edition)..."
echo

n1=$(install_to "$CLAUDE_DEST")
echo "  $n1 skills installed to $CLAUDE_DEST"

# Install the independent Starter kernel when an HQ target is present. Fresh
# installs can pass WERKFORCE_HQ explicitly; an existing ./werkforce or
# ~/werkforce is detected additively. Founder files and ledgers are untouched.
if [ -z "$HQ_DEST" ]; then
  if [ -d "./werkforce" ]; then HQ_DEST="$(pwd)/werkforce"
  elif [ -d "$HOME/werkforce" ]; then HQ_DEST="$HOME/werkforce"
  fi
fi
if [ -n "$HQ_DEST" ]; then
  mkdir -p "$HQ_DEST/os/hooks/kernel" "$HQ_DEST/kernel/dist" "$HQ_DEST/kernel/schema"
  cp "$PACK_DIR/os/werkforce-kernel" "$HQ_DEST/os/werkforce-kernel"
  chmod +x "$HQ_DEST/os/werkforce-kernel"
  cp "$PACK_DIR/kernel/dist/werkforce-kernel.mjs" "$HQ_DEST/kernel/dist/werkforce-kernel.mjs"
  cp "$PACK_DIR/kernel/schema/werkforce.event.v2.json" "$HQ_DEST/kernel/schema/werkforce.event.v2.json"
  cp "$PACK_DIR/hooks/kernel/"* "$HQ_DEST/os/hooks/kernel/"
  chmod +x "$HQ_DEST/os/hooks/kernel/claude-hook.sh"
  echo "  Starter kernel installed to $HQ_DEST"

  # Fresh-install hook registration is additive and idempotent. The adapter is
  # run through node directly (not the bash wrapper) so the same registration
  # works on Windows; since 0.1.1 the guard resolves the HQ itself and needs
  # no cwd pinning. Existing unrelated settings are never rewritten here.
  mkdir -p "$HQ_DEST/.claude"
  HOOK_FILE="$HQ_DEST/.claude/hooks.json"
  if [ ! -f "$HOOK_FILE" ]; then
    cat > "$HOOK_FILE" <<'EOF'
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write|Bash",
        "hooks": [
          {
            "type": "command",
            "command": "node \"$CLAUDE_PROJECT_DIR\"/os/hooks/kernel/claude-adapter.mjs"
          }
        ]
      }
    ]
  }
}
EOF
    echo "  Claude PreToolUse kernel guard armed at $HOOK_FILE"
  else
    echo "  Existing $HOOK_FILE preserved; arm the kernel wrapper there if it is not already registered."
  fi
fi

echo
if command -v claude >/dev/null 2>&1; then
  echo "Found on this machine: Claude Code. You're ready."
else
  echo "Note: the claude command was not found on your PATH yet. The skills are"
  echo "in place - as soon as Claude Code is installed, they'll just work."
fi

echo
echo "Next step: open a fresh Terminal (it starts in your home folder), type claude, and say:  install my werkforce"
