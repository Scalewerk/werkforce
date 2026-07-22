#!/bin/bash
# WerkforceOS checkup v3 - reads your HQ and reports its health.
# Prints OK and WARN lines, appends WARNs to records/warnings.md, always exits 0.
# A warning is a flag on the play, never a stopped game.
set -u

# Locate HQ: werkforce/ under the current folder, else ~/werkforce
if [ -f "./werkforce/HQ.md" ]; then
  HQ="./werkforce"
elif [ -f "$HOME/werkforce/HQ.md" ]; then
  HQ="$HOME/werkforce"
else
  echo "WARN no HQ found (no werkforce/HQ.md here and none at ~/werkforce) - run install-your-werkforce to create one"
  exit 0
fi

TODAY="${WERKFORCE_DATE:-$(date +%F)}"
CUTOFF="$(date -v-7d +%F 2>/dev/null || date -d '7 days ago' +%F 2>/dev/null || echo "$TODAY")"
WARNINGS_FILE="$HQ/records/warnings.md"
WARN_COUNT=0
OK_COUNT=0

ok() { echo "OK   $1"; OK_COUNT=$((OK_COUNT + 1)); }
warn() {
  echo "WARN $1"
  WARN_COUNT=$((WARN_COUNT + 1))
  if [ -f "$WARNINGS_FILE" ]; then
    printf -- "- %s [werkforce-checkup] %s - noted, work continues\n" "$TODAY" "$1" >> "$WARNINGS_FILE"
  fi
}

# 0. OS version - absent means a 1.x HQ
if [ -f "$HQ/os/VERSION" ]; then
  ok "os/VERSION present ($(head -1 "$HQ/os/VERSION"))"
else
  warn "no os/VERSION - this looks like a 1.x HQ; run upgrade-your-werkforce when ready"
fi

# 1. Core tree
for f in HQ.md inbox.md os/charter.md os/formats.md os/manifest.md \
         company/profile.md company/business-model.md company/org-chart.md \
         company/visions.md company/outcomes.md company/strategy.md \
         company/playbooks.md company/metrics.md company/decision-log.md \
         company/onboarding.md company/design/design-system.md company/design/page.html \
         records/audit-log.md records/worklog.md records/warnings.md records/reviews.md \
         records/sessions.md records/improvements.md \
         skills/STANDARD.md skills/CATALOG.md; do
  if [ -f "$HQ/$f" ]; then ok "$f present"; else warn "$f missing"; fi
done
[ -d "$HQ/company/customers" ] || warn "company/customers/ missing"
[ -d "$HQ/company/design" ] || warn "company/design/ missing - run design-system to set up your look"
[ -d "$HQ/archive" ] || warn "archive/ missing"

# 1b. Record files still carry their format comment (the operative law)
for f in records/audit-log.md records/worklog.md records/warnings.md records/sessions.md \
         records/improvements.md records/reviews.md company/decision-log.md; do
  if [ -f "$HQ/$f" ] && ! grep -q '<!--' "$HQ/$f"; then
    warn "$f has lost its format comment - shapes may drift; see os/formats.md"
  fi
done

# 2. Profile and business model emptiness (information, not judgment)
if [ -f "$HQ/company/profile.md" ]; then
  blanks=$(grep -c "(not set yet)" "$HQ/company/profile.md" 2>/dev/null || true)
  [ "${blanks:-0}" -gt 3 ] && warn "company/profile.md has $blanks blank fields - run company-profile to fill what you can"
fi
if [ -f "$HQ/company/business-model.md" ]; then
  blanks=$(grep -c "(not set yet)" "$HQ/company/business-model.md" 2>/dev/null || true)
  [ "${blanks:-0}" -gt 6 ] && warn "company/business-model.md is mostly blank - run business-model when you have 20 minutes"
fi

# 2b. Org chart shape - governance rows + the twelve departments, 6 columns each
if [ -f "$HQ/company/org-chart.md" ]; then
  grep -qi "Lead.*Specialist.*Reviewer" "$HQ/company/org-chart.md" && \
    warn "org-chart.md uses phase-1 seat words (Lead/Specialist/Reviewer) - run upgrade-your-werkforce"
  grep -qi "| Executive | Contributor | Manager |" "$HQ/company/org-chart.md" && \
    warn "org-chart.md uses v2 seat words (Executive/Contributor/Manager) - run upgrade-your-werkforce; the current facets are Planner, Worker, Reviewer"
  grep -q "| Founder |" "$HQ/company/org-chart.md" || warn "org-chart.md has no Founder governance row"
  for dept in Engineering Marketing Sales Product Design "Client Delivery" Finance \
              "People & Talent" Operations Legal "Information Security" Strategy; do
    grep -q "^| $dept |" "$HQ/company/org-chart.md" || warn "org-chart.md missing the $dept row"
  done
  # every Departments-table row carries exactly the 6 standard columns
  in_dept=0
  while IFS= read -r line; do
    case "$line" in
      "## Departments"*) in_dept=1; continue ;;
      "## "*) in_dept=0; continue ;;
    esac
    [ "$in_dept" -eq 1 ] || continue
    case "$line" in \|*) ;; *) continue ;; esac
    case "$line" in \|---*|\|-*) continue ;; esac
    pipes=$(printf '%s' "$line" | tr -cd '|' | wc -c | tr -d ' ')
    if [ "$pipes" -ne 7 ]; then
      rowname=$(echo "$line" | awk -F'|' '{print $2}' | sed 's/^ *//;s/ *$//' | cut -c1-30)
      warn "org-chart.md row \"$rowname\" has $((pipes - 1)) columns instead of 6"
    fi
  done < "$HQ/company/org-chart.md"
fi

# 2c. Sessions hygiene - unclosed sessions from before today
if [ -f "$HQ/records/sessions.md" ]; then
  opens=$(grep -c ' opened - ' "$HQ/records/sessions.md" 2>/dev/null || true)
  closes=$(grep -c ' closed - ' "$HQ/records/sessions.md" 2>/dev/null || true)
  if [ "${opens:-0}" -gt "$(( ${closes:-0} + 1 ))" ]; then
    warn "records/sessions.md shows $opens opened vs $closes closed - a session may not have closed clean (coordinate, never lock)"
  fi
fi

# 2d. Manifest drift - expected files that are gone
if [ -f "$HQ/os/manifest.md" ]; then
  while IFS= read -r entry; do
    p=$(echo "$entry" | sed 's/^- //' | sed 's/ .*//')
    case "$p" in
      */) [ -d "$HQ/$p" ] || warn "manifest expects folder $p - not found" ;;
      *.*) [ -f "$HQ/$p" ] || warn "manifest expects $p - not found" ;;
      *) [ -f "$HQ/$p" ] || [ -d "$HQ/$p" ] || warn "manifest expects $p - not found" ;;
    esac
  done < <(awk '/^## Expected tree/{f=1; next} /^## /{f=0} f && /^- /' "$HQ/os/manifest.md")
fi

# 2e. Timestamps speak the HQ timezone, never UTC/Zulu
for f in records/audit-log.md records/sessions.md; do
  if [ -f "$HQ/$f" ]; then
    if grep -Eq '[0-9]{2}:[0-9]{2}(:[0-9]{2})?Z|[0-9]{2}:[0-9]{2} *(UTC|Zulu|GMT)|T[0-9]{2}:[0-9]{2}[0-9:]*Z' "$HQ/$f"; then
      warn "$f has timestamps that look like UTC/Zulu - times must be written in the HQ timezone from HQ.md"
    fi
  fi
done

# 2f. Filing law - no unexpected top-level folders in the HQ
for d in "$HQ"/*/; do
  [ -d "$d" ] || continue
  top="$(basename "$d")"
  case "$top" in
    os|company|departments|records|skills|archive) : ;;
    *) warn "filing law: unexpected top-level folder $top/ - the HQ has one home per fact; no skill invents a new top-level folder" ;;
  esac
done

# 3. Departments
DEPT_COUNT=0
if [ -d "$HQ/departments" ]; then
  for d in "$HQ/departments"/*/; do
    [ -d "$d" ] || continue
    DEPT_COUNT=$((DEPT_COUNT + 1))
    name="$(basename "$d")"
    for f in charter.md playbook.md briefs.md board.md memory.md; do
      if [ -f "$d$f" ]; then ok "departments/$name/$f present"; else warn "departments/$name/$f missing"; fi
    done
    [ -d "${d}outbox" ] || warn "departments/$name/outbox/ missing"
    [ -d "${d}seats" ] || warn "departments/$name/seats/ missing - role cards live there"
    # drafts/ is deliberately not inspected - drafts are invisible to controls

    # Seat cards carry all six H2s from os/formats.md (the elite-hire bar)
    if [ -d "${d}seats" ]; then
      for card in "${d}seats"/*.md; do
        [ -f "$card" ] || continue
        cardname="$(basename "$card")"
        for h2 in "## Mission" "## What excellent looks like" "## How this seat works" \
                  "## Boundaries" "## Anti-patterns" "## Escalation"; do
          grep -qF "$h2" "$card" || warn "departments/$name/seats/$cardname is missing the \"$h2\" section - every seat card carries all six H2s"
        done
      done
    fi

    # Deliverables ship the .md + .html pair (finished render beside the source)
    if [ -d "${d}outbox" ]; then
      for md in "${d}outbox"/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-*.md; do
        [ -f "$md" ] || continue
        [ -f "${md%.md}.html" ] || warn "departments/$name/outbox/$(basename "$md") has no .html render - a deliverable ships as the .md + .html pair"
      done
    fi

    # Org chart should know this department
    if [ -f "$HQ/company/org-chart.md" ]; then
      case "$name" in
        people-and-talent) pretty="People & Talent" ;;
        *) pretty="$(echo "$name" | tr '-' ' ')" ;;
      esac
      if ! grep -i "$pretty" "$HQ/company/org-chart.md" | grep -qi "Active"; then
        warn "departments/$name exists but org-chart.md has no Active row for it"
      fi
    fi

    # Board shape and hygiene
    if [ -f "${d}board.md" ]; then
      if ! grep -q "| Task | Stage | Seat | Filed | Due | Receipt |" "${d}board.md"; then
        warn "departments/$name/board.md is missing the standard column row"
      fi
      # Done rows need a real receipt
      while IFS= read -r line; do
        task="$(echo "$line" | awk -F'|' '{print $2}' | sed 's/^ *//;s/ *$//' | cut -c1-40)"
        receipt="$(echo "$line" | awk -F'|' '{print $7}' | sed 's/^ *//;s/ *$//')"
        if [ -z "$receipt" ] || [ "$receipt" = "-" ]; then
          warn "departments/$name board: Done task \"$task\" has no receipt"
        fi
      done < <(grep -E '^\|.*\| *Done *\|' "${d}board.md" 2>/dev/null || true)
      # Stale In progress
      while IFS= read -r line; do
        task="$(echo "$line" | awk -F'|' '{print $2}' | sed 's/^ *//;s/ *$//' | cut -c1-40)"
        filed="$(echo "$line" | awk -F'|' '{print $5}' | sed 's/^ *//;s/ *$//')"
        case "$filed" in
          [0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9])
            if [ "$filed" \< "$CUTOFF" ]; then
              warn "departments/$name board: \"$task\" has sat In progress since $filed"
            fi ;;
        esac
      done < <(grep -E '^\|.*\| *In progress *\|' "${d}board.md" 2>/dev/null || true)
      # Stale Blocked rows - a block wants a recheck, not a burial
      while IFS= read -r line; do
        task="$(echo "$line" | awk -F'|' '{print $2}' | sed 's/^ *//;s/ *$//' | cut -c1-40)"
        filed="$(echo "$line" | awk -F'|' '{print $5}' | sed 's/^ *//;s/ *$//')"
        receipt="$(echo "$line" | awk -F'|' '{print $7}' | sed 's/^ *//;s/ *$//')"
        case "$receipt" in
          blocked*|Blocked*) : ;;
          *) warn "departments/$name board: Blocked task \"$task\" does not say what blocks it (blocked by X - recheck Y)" ;;
        esac
        case "$filed" in
          [0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9])
            if [ "$filed" \< "$CUTOFF" ]; then
              warn "departments/$name board: \"$task\" has been Blocked since $filed - time to recheck"
            fi ;;
        esac
      done < <(grep -E '^\|.*\| *Blocked *\|' "${d}board.md" 2>/dev/null || true)
    fi
  done
fi
[ "$DEPT_COUNT" -eq 0 ] && warn "no departments opened yet - run open-a-department when you're ready to hire"

echo
echo "Checkup done: $OK_COUNT ok, $WARN_COUNT warnings. Warnings are logged in records/warnings.md - nothing is blocked."
exit 0
