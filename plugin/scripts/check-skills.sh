#!/bin/bash
# check-skills.sh - structural unit checks over every shipped SKILL.md:
#   1. frontmatter present (opens with ---)
#   2. name: present and kebab-case
#   3. description: present and carries a trigger block ("Use when" / "use when")
#   4. body under the length law (< 500 lines)
# Prints one FAIL line per violation; exits non-zero if any fail. CI-able.
set -u
SKILLS_DIR="$(cd "$(dirname "$0")/../skills" && pwd)"
fails=0
count=0

for d in "$SKILLS_DIR"/*/; do
  f="$d/SKILL.md"
  [ -f "$f" ] || continue
  count=$((count + 1))
  name_dir="$(basename "$d")"

  head -1 "$f" | grep -q '^---' || { echo "FAIL [$name_dir] no frontmatter fence on line 1"; fails=$((fails+1)); }

  name="$(awk -F': *' '/^name:/{print $2; exit}' "$f" | tr -d ' ')"
  if [ -z "$name" ]; then
    echo "FAIL [$name_dir] missing name:"; fails=$((fails+1))
  elif ! printf '%s' "$name" | grep -Eq '^[a-z0-9]+(-[a-z0-9]+)*$'; then
    echo "FAIL [$name_dir] name not kebab-case: '$name'"; fails=$((fails+1))
  fi

  desc="$(awk -F'description: *' '/^description:/{print $2; exit}' "$f")"
  if [ -z "$desc" ]; then
    echo "FAIL [$name_dir] missing description:"; fails=$((fails+1))
  elif ! printf '%s' "$desc" | grep -Eiq 'use when|say this|always'; then
    echo "FAIL [$name_dir] description has no trigger block (no 'Use when'/'always')"; fails=$((fails+1))
  fi

  lines="$(wc -l < "$f" | tr -d ' ')"
  [ "$lines" -ge 500 ] && { echo "FAIL [$name_dir] body $lines lines (>= 500 length law)"; fails=$((fails+1)); }
done

echo "---"
echo "checked: $count skills · failures: $fails"
[ "$fails" -eq 0 ] && echo "STRUCTURAL CHECKS CLEAN" && exit 0
exit 1
