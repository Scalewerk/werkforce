#!/bin/bash
# WerkforceOS checkup v3 - reads your HQ and reports its health.
# Prints OK and WARN lines, appends WARNs to records/warnings.md, always exits 0.
# A warning is a flag on the play, never a stopped game.
set -u

# HQ target - explicit beats guessing (multi-HQ safety). Precedence:
#   1. --hq <path>         (this run)
#   2. $WERKFORCE_HQ        (env, for a fixed HQ)
#   3. ./werkforce/HQ.md    (an HQ under the current folder)
#   4. $HOME/werkforce      (the last-resort default)
# An explicit target that has no HQ.md is a hard error, never a silent fall
# back to ~/werkforce - that fallback was the root cause of the 25-line stray
# append during the 3.1 migration (lesson 2026-07-22).
HQ_FLAG=""
while [ $# -gt 0 ]; do
  case "$1" in
    --hq) HQ_FLAG="${2:-}"; shift 2 ;;
    --hq=*) HQ_FLAG="${1#--hq=}"; shift ;;
    -h|--help)
      echo "usage: checkup.sh [--hq <path-to-HQ>]"
      echo "  --hq <path>   check this HQ explicitly (dir containing HQ.md)."
      echo "                Also settable via WERKFORCE_HQ. Without either,"
      echo "                checkup uses ./werkforce, else ~/werkforce."
      exit 0 ;;
    *) echo "checkup.sh: unknown argument: $1" >&2; exit 2 ;;
  esac
done

TARGET="${HQ_FLAG:-${WERKFORCE_HQ:-}}"
if [ -n "$TARGET" ]; then
  TARGET="${TARGET%/}"
  if [ -f "$TARGET/HQ.md" ]; then
    HQ="$TARGET"
  else
    echo "WARN explicit HQ target '$TARGET' has no HQ.md - refusing to fall back to another HQ; check the path"
    exit 0
  fi
elif [ -f "./werkforce/HQ.md" ]; then
  HQ="./werkforce"
elif [ -f "$HOME/werkforce/HQ.md" ]; then
  HQ="$HOME/werkforce"
else
  echo "WARN no HQ found (no --hq/WERKFORCE_HQ, no werkforce/HQ.md here, none at ~/werkforce) - run install-your-werkforce to create one"
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
# Every check family prints at least one line per run (0.1.1 rule: absence is
# loud) - a family with nothing to say prints its OK summary, a family that
# cannot run prints a NOTE naming the missing prerequisite.
FMT_N=0
for f in records/audit-log.md records/worklog.md records/warnings.md records/sessions.md \
         records/improvements.md records/reviews.md company/decision-log.md; do
  if [ -f "$HQ/$f" ]; then
    FMT_N=$((FMT_N + 1))
    if ! grep -q '<!--' "$HQ/$f"; then
      warn "$f has lost its format comment - shapes may drift; see os/formats.md"
    fi
  fi
done
if [ "$FMT_N" -gt 0 ]; then
  ok "format comments: $FMT_N record files checked"
else
  echo "NOTE format comments: no record files found to check"
fi

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
if [ ! -f "$HQ/company/org-chart.md" ]; then
  echo "NOTE org chart: company/org-chart.md missing, org-chart shape checks skipped"
fi
if [ -f "$HQ/company/org-chart.md" ]; then
  grep -qi "Lead.*Specialist.*Reviewer" "$HQ/company/org-chart.md" && \
    warn "org-chart.md uses phase-1 seat words (Lead/Specialist/Reviewer) - run upgrade-your-werkforce"
  grep -qi "| Executive | Contributor | Manager |" "$HQ/company/org-chart.md" && \
    warn "org-chart.md uses v2 seat words (Executive/Contributor/Manager) - run upgrade-your-werkforce; the current facets are Planner, Worker, Reviewer"
  grep -q "| Founder |" "$HQ/company/org-chart.md" || warn "org-chart.md has no Founder governance row"
  for dept in Engineering Marketing Sales Product Design "Client Delivery" Finance \
              Operations Legal "Information Security" Strategy; do
    grep -q "^| $dept |" "$HQ/company/org-chart.md" || warn "org-chart.md missing the $dept row"
  done
  # People & Talent became Agent Resources. The rename is offered, never forced, so
  # for one version EITHER name satisfies this check and an install that declined
  # the migration is not nagged about it.
  grep -q "^| Agent Resources |" "$HQ/company/org-chart.md" || \
    grep -q "^| People & Talent |" "$HQ/company/org-chart.md" || \
    warn "org-chart.md missing the Agent Resources row (or its pre-rename People & Talent row)"
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
  ok "org chart: shape checks ran (governance row, twelve departments, 6-column rows)"
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
  MANIFEST_N=0
  while IFS= read -r entry; do
    p=$(echo "$entry" | sed 's/^- //' | sed 's/ .*//')
    MANIFEST_N=$((MANIFEST_N + 1))
    case "$p" in
      */) [ -d "$HQ/$p" ] || warn "manifest expects folder $p - not found" ;;
      *.*) [ -f "$HQ/$p" ] || warn "manifest expects $p - not found" ;;
      *) [ -f "$HQ/$p" ] || [ -d "$HQ/$p" ] || warn "manifest expects $p - not found" ;;
    esac
  done < <(awk '/^## Expected tree/{f=1; next} /^## /{f=0} f && /^- /' "$HQ/os/manifest.md")
  if [ "$MANIFEST_N" -gt 0 ]; then
    ok "manifest drift: $MANIFEST_N expected-tree entries checked"
  else
    echo "NOTE manifest drift: os/manifest.md has no '## Expected tree' entries to check"
  fi
else
  echo "NOTE manifest drift: os/manifest.md missing, manifest checks skipped"
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
    # kernel/ ships with the 0.1.0 Starter kernel (kernel/dist, kernel/schema)
    # and sits in the manifest's Expected tree - it is not drift.
    os|company|departments|records|skills|archive|kernel) : ;;
    *) warn "filing law: unexpected top-level folder $top/ - the HQ has one home per fact; no skill invents a new top-level folder" ;;
  esac
done

# 3. Departments
DEPT_COUNT=0
SEATCARD_N=0
RENDER_N=0
BOARD_N=0
if [ -d "$HQ/departments" ]; then
  for d in "$HQ/departments"/*/; do
    [ -d "$d" ] || continue
    name="$(basename "$d")"
    # A renamed department leaves a forwarding stub at its old path so the ledger
    # lines and receipt paths that can never be corrected still resolve in one hop.
    # A stub holds nothing but MOVED.md and is not a department - checking it for a
    # charter, a board, and an Active org-chart row reports eight faults that are
    # all the stub doing its job.
    if [ -f "${d}MOVED.md" ] && [ ! -f "${d}charter.md" ]; then
      ok "departments/$name/ is a forwarding stub (MOVED.md) - not checked as a department"
      continue
    fi
    DEPT_COUNT=$((DEPT_COUNT + 1))
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
        SEATCARD_N=$((SEATCARD_N + 1))
        cardname="$(basename "$card")"
        for h2 in "## Mission" "## What excellent looks like" "## How this seat works" \
                  "## Boundaries" "## Anti-patterns" "## Escalation"; do
          grep -qF "$h2" "$card" || warn "departments/$name/seats/$cardname is missing the \"$h2\" section - every seat card carries all six H2s"
        done
      done
    fi

    # Deliverables ship the .md + .html pair (finished render beside the source), and the render
    # must stay current with its markdown - the .md is the authority, the .html a derived view.
    if [ -d "${d}outbox" ]; then
      for md in "${d}outbox"/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-*.md; do
        [ -f "$md" ] || continue
        RENDER_N=$((RENDER_N + 1))
        html="${md%.md}.html"
        if [ -f "$html" ]; then
          if [ "$md" -nt "$html" ]; then
            warn "departments/$name/outbox/$(basename "$md") is newer than its .html render - the render is stale and should be regenerated from this markdown before the deliverable ships"
          fi
        else
          warn "departments/$name/outbox/$(basename "$md") has no .html render - a deliverable ships as the .md + .html pair"
        fi

        # Technical-burden phrasing - founder-facing deliverables should never tell the founder
        # to run git, merge a PR, read CI, or edit a file directly (charter §14, "plain language").
        # A blunt phrase match, not judgment - false positives are possible and fine, this WARNs
        # and never blocks.
        if grep -Eiq 'run git|git (commit|push|merge|rebase)|merge (the |this )?(pr|pull request)\b|open a pull request|read (the )?ci\b|edit the file at|edit [^ ]*\.(ts|py|sh|mjs)\b' "$md"; then
          warn "departments/$name/outbox/$(basename "$md") reads like it asks the founder to touch git/CI/code directly - founder-facing text should describe the outcome in plain language, never the plumbing"
        fi
      done
    fi

    # Org chart should know this department
    if [ -f "$HQ/company/org-chart.md" ]; then
      case "$name" in
        agent-resources) pretty="Agent Resources" ;;
        # Pre-rename slug: still recognised so an install that declined the
        # Agent Resources migration keeps passing this check.
        people-and-talent) pretty="People & Talent" ;;
        *) pretty="$(echo "$name" | tr '-' ' ')" ;;
      esac
      if ! grep -i "$pretty" "$HQ/company/org-chart.md" | grep -qi "Active"; then
        warn "departments/$name exists but org-chart.md has no Active row for it"
      fi
    fi

    # Board shape and hygiene
    if [ -f "${d}board.md" ]; then
      BOARD_N=$((BOARD_N + 1))
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
if [ "$DEPT_COUNT" -gt 0 ]; then
  if [ "$SEATCARD_N" -gt 0 ]; then ok "seat cards: $SEATCARD_N cards checked for the six H2s"; else echo "NOTE seat cards: no seat cards found under any departments/*/seats/ - nothing to check"; fi
  if [ "$RENDER_N" -gt 0 ]; then ok "deliverable renders: $RENDER_N outbox deliverables checked for a current .html render"; else echo "NOTE deliverable renders: no dated .md deliverables found in any outbox/ - nothing to check"; fi
  if [ "$BOARD_N" -gt 0 ]; then ok "task tables: $BOARD_N boards checked (columns, receipts, stale In progress, Blocked hygiene)"; else echo "NOTE task tables: no board.md found in any department - nothing to check"; fi
fi

# 4. Hook health - every registered hook script exists, can run, and has a footprint.
# Lesson 2026-07-24: both of this HQ's hooks sat non-executable for a full day and their
# fail-open design hid it - a dead tripwire looks exactly like a quiet one. WARN-only per
# the enforcement floor: nothing found here ever blocks a turn.
# Two channels are read: hooks registered in settings files, and hooks a plugin registers
# in its own hooks/hooks.json (which never appear in any settings file). A command's
# script is found by scanning its tokens for the ones that name a real path - so the
# common wrapper forms (bash "<script>", node "<script>", bash launcher.sh guard.mjs)
# are probed, not skipped, and a launcher and its payload each get their own line.
# "Since install" is read as "since the hook script was last changed" (its mtime) - the
# honest proxy this script can actually see. NOTE lines are neither OK nor WARN: they mark
# a hook the probe deliberately cannot judge.
note() { echo "NOTE $1"; }

hook_mtime_date() { date -r "$1" +%F 2>/dev/null || stat -c %y "$1" 2>/dev/null | cut -c1-10; }

# Evidence that a hook has actually run. Two signals, weakest last, each labelled in the
# line it prints. Signal 1: the hook declares where its footprints land, with a
#   `# checkup-evidence: <path or glob, relative to the HQ>`
# comment in its own source; a matching file newer than the script proves a successful run.
# Signal 2: a dated `[<script-name>]` line in records/warnings.md on or after the script's
# date - a fail-loud hook that wrote a warning certainly ran, though that run reported
# trouble. No signal is NOT proof the hook is dead; it is the honest absence of proof.
hook_footprint() {
  script="$1"; stem="$(basename "$script")"; stem="${stem%.*}"
  decl="$(grep -m1 -E '^(#|//)[[:space:]]*checkup-evidence:' "$script" 2>/dev/null \
          | sed -E 's%^(#|//)[[:space:]]*checkup-evidence:[[:space:]]*%%')"
  HOOK_DECLARED="$([ -n "$decl" ] && echo 1 || echo 0)"
  if [ -n "$decl" ]; then
    newest="$(find "$HQ"/$decl -type f -newer "$script" 2>/dev/null | head -1)"
    if [ -n "$newest" ]; then
      echo "has fired since its last change [checked: declared footprint $decl holds $(basename "$newest"), newer than the script]"
      return 0
    fi
  fi
  sdate="$(hook_mtime_date "$script")"
  if [ -f "$WARNINGS_FILE" ] && \
     grep -F "[$stem]" "$WARNINGS_FILE" 2>/dev/null | awk -v d="${sdate:-0000-00-00}" '$2 >= d' | grep -q .; then
    echo "has fired since its last change [checked: records/warnings.md carries a dated [$stem] line on or after $sdate - it ran, and that run reported trouble]"
    return 0
  fi
  return 1
}

HOOK_SETTINGS=()
HOOK_SETTINGS_N=0   # bash 3.2 refuses ${#arr[@]} on an empty array under set -u
HOOK_SETTINGS_SEEN=""
HQ_PARENT="$(cd "$HQ/.." 2>/dev/null && pwd || echo "")"
# Every hook surface Claude Code honors is probed, not just settings.json:
# a standalone .claude/hooks.json (where the kernel PreToolUse wrapper is
# armed) never appears in any settings file, and a probe that skips it can
# print "no hooks found" on an HQ whose guard is actively denying writes
# (a beta customer's 0.1.0 upgrade, 2026-07-27). The probe also names every file it
# read, so a blind probe can never read as clean.
for s in "$HQ/.claude/settings.json" "$HQ/.claude/settings.local.json" "$HQ/.claude/hooks.json" \
         "$HQ_PARENT/.claude/settings.json" "$HQ_PARENT/.claude/settings.local.json" "$HQ_PARENT/.claude/hooks.json" \
         "$HOME/.claude/settings.json" "$HOME/.claude/settings.local.json" "$HOME/.claude/hooks.json"; do
  [ -f "$s" ] || continue
  case "$HOOK_SETTINGS_SEEN" in *"|$s|"*) continue ;; esac   # the same file can sit on two of these paths
  HOOK_SETTINGS_SEEN="$HOOK_SETTINGS_SEEN|$s|"
  HOOK_SETTINGS+=("$s"); HOOK_SETTINGS_N=$((HOOK_SETTINGS_N + 1))
done

if [ "$HOOK_SETTINGS_N" -eq 0 ]; then
  note "hook probe read 0 files - none of settings.json / settings.local.json / hooks.json exist under $HQ/.claude, ${HQ_PARENT:-<no parent>}/.claude, or $HOME/.claude - no hooks to probe"
elif ! command -v python3 >/dev/null 2>&1; then
  note "python3 not found - the hook probe needs it to read hook commands safely, so hooks were not probed this run"
else
  # Rows: channel <tab> source <tab> event <tab> kind <tab> path
  # kind: direct | via:<launcher> | INLINE | VARPATH | PARSEFAIL | NOINSTALLED
  # The reader lives in its own variable rather than inline in a $( ) command
  # substitution: bash 3.2 scans a here-document body for quotes when the heredoc sits
  # inside $( ), so one apostrophe in a comment breaks the whole script.
  HOOK_PY=""
  read -r -d "" HOOK_PY <<'PY' || true
import json, os, shlex, sys

def emit(*fields):
    print("\t".join(str(f) for f in fields))

def walk(obj, channel, source, root=None, projdir=None):
    hooks = obj.get("hooks") or {}
    if not isinstance(hooks, dict):
        return
    for event, groups in hooks.items():
        if not isinstance(groups, list):
            continue
        for group in groups:
            if not isinstance(group, dict):
                continue
            for hook in group.get("hooks") or []:
                if not (isinstance(hook, dict) and hook.get("type") == "command" and hook.get("command")):
                    continue
                cmd = hook["command"]
                if root:
                    cmd = cmd.replace("${CLAUDE_PLUGIN_ROOT}", root).replace("$CLAUDE_PLUGIN_ROOT", root)
                # $CLAUDE_PROJECT_DIR in a project-level hook file is by
                # definition the folder holding that .claude/ - expanding it is
                # how the kernel guard's own registration gets verified rather
                # than punted as VARPATH (review correction 2, 2026-07-27).
                if projdir:
                    q = '"' + projdir + '"'   # keep quoting: the project path may hold spaces
                    cmd = cmd.replace('"${CLAUDE_PROJECT_DIR}"', q).replace('"$CLAUDE_PROJECT_DIR"', q)
                    cmd = cmd.replace("${CLAUDE_PROJECT_DIR}", projdir).replace("$CLAUDE_PROJECT_DIR", projdir)
                try:
                    toks = shlex.split(cmd)
                except ValueError:
                    toks = cmd.split()
                if not toks:
                    continue
                # Every token that names a path is a script this probe can check. The
                # first token is the command itself (its exec bit matters); a later one
                # is run through that launcher (its exec bit does not).
                found = [(i, t) for i, t in enumerate(toks) if "/" in t]
                if not found:
                    emit(channel, source, event, "INLINE", cmd[:60])
                    continue
                for i, tok in found:
                    if "$" in tok:
                        emit(channel, source, event, "VARPATH", tok)
                        continue
                    kind = "direct" if i == 0 else "via:" + os.path.basename(toks[0])
                    emit(channel, source, event, kind, os.path.abspath(os.path.expanduser(tok)))

enabled = {}
for path in sys.argv[1:]:
    try:
        with open(path) as fh:
            data = json.load(fh)
    except Exception:
        emit("settings", path, "-", "PARSEFAIL", "-")
        continue
    # Project dir is knowable only for a project-level .claude/ file; in a
    # user-level ~/.claude file the variable stays unexpandable (VARPATH).
    pdir = os.path.dirname(os.path.abspath(path))
    pdir = os.path.dirname(pdir) if os.path.basename(pdir) == ".claude" else None
    if pdir == os.path.expanduser("~"):
        pdir = None
    walk(data, "settings", path, projdir=pdir)
    for key, on in (data.get("enabledPlugins") or {}).items():
        enabled.setdefault(key, on)   # settings were collected most-specific first

# Plugin-provided hooks: registered in the plugin's own hooks/hooks.json, never in a
# settings file. Only plugins the settings actually enable are probed.
if any(enabled.values()):
    ip = os.path.expanduser("~/.claude/plugins/installed_plugins.json")
    try:
        with open(ip) as fh:
            installed = json.load(fh).get("plugins") or {}
    except Exception:
        installed = {}
        emit("plugin", ip, "-", "NOINSTALLED", "-")
    for key, on in sorted(enabled.items()):
        if not on:
            continue
        for entry in installed.get(key) or []:
            root = entry.get("installPath")
            if not root:
                continue
            hj = os.path.join(root, "hooks", "hooks.json")
            if not os.path.isfile(hj):
                continue
            try:
                with open(hj) as fh:
                    data = json.load(fh)
            except Exception:
                emit("plugin", key, "-", "PARSEFAIL", hj)
                continue
            walk(data, "plugin", "%s %s" % (key, entry.get("version", "?")), root)
PY
  note "hook probe read these files: ${HOOK_SETTINGS[*]} (plus hooks/hooks.json of each enabled plugin)"
  HOOK_ROWS="$(printf '%s\n' "$HOOK_PY" | python3 - "${HOOK_SETTINGS[@]}" 2>/dev/null || true)"

  HOOK_SEEN=""
  HOOK_TOTAL=0
  PLUGIN_SILENT=0
  PLUGIN_SILENT_LIST=""
  while IFS=$'\t' read -r channel source event kind path; do
    [ -n "${kind:-}" ] || continue
    case "$kind" in
      PARSEFAIL)
        warn "hook settings $source could not be parsed as JSON - its hooks cannot be probed, and may not be loading either"
        continue ;;
      NOINSTALLED)
        note "plugins are enabled but $source could not be read - plugin-provided hooks were not probed"
        continue ;;
      INLINE)
        note "hook on $event runs an inline command, not a script file - not probed: $path"
        continue ;;
      VARPATH)
        note "hook on $event uses a variable this probe cannot expand ($path) - not probed"
        continue ;;
    esac
    case "$HOOK_SEEN" in *"|$path|"*) continue ;; esac   # one script, one report, however many events it sits on
    HOOK_SEEN="$HOOK_SEEN|$path|"
    HOOK_TOTAL=$((HOOK_TOTAL + 1))
    hname="$(basename "$path")"
    where="$([ "$channel" = plugin ] && echo "plugin $source" || echo "$(basename "$source")")"
    if [ ! -f "$path" ]; then
      warn "hook $hname is registered on $event by $where but its script is not on disk: $path"
      continue
    fi
    # The executable bit only matters when the hook command runs the script itself.
    # A script handed to bash/node/python by a launcher runs mode 644 by design -
    # every plugin ships them that way - and warning about it would be noise.
    if [ "$kind" = direct ]; then
      ok "hook $hname present ($where, $event)"
      if [ -x "$path" ]; then
        ok "hook $hname is executable"
      else
        warn "hook $hname is NOT executable ($(ls -l "$path" | awk '{print $1}')) - it is registered but cannot run, and a fail-open hook makes that silent. Fix: chmod +x \"$path\", then fire it once to confirm"
      fi
    else
      ok "hook $hname present ($where, $event) - run through ${kind#via:}, so its executable bit is not required"
    fi
    # hook_footprint runs inside command substitution below, so assignments it
    # makes cannot reach this shell. Read the declaration in the caller too:
    # the branch at :492 must never depend on a subshell-local variable.
    decl="$(grep -m1 -E '^(#|//)[[:space:]]*checkup-evidence:' "$path" 2>/dev/null \
            | sed -E 's%^(#|//)[[:space:]]*checkup-evidence:[[:space:]]*%%')"
    HOOK_DECLARED="$([ -n "$decl" ] && echo 1 || echo 0)"
    if evidence="$(hook_footprint "$path")"; then
      ok "hook $hname $evidence"
    elif [ "$channel" = plugin ] && [ "$HOOK_DECLARED" -eq 0 ]; then
      # Silent-by-design collapse keys on the hook having made no checkup-evidence
      # declaration at all, not on channel=plugin alone - a plugin guard that never
      # declared a footprint is indistinguishable from one designed to pass silently,
      # so it is counted into one line rather than repeated per hook: a wall of
      # identical notes is how a report stops being read.
      PLUGIN_SILENT=$((PLUGIN_SILENT + 1))
      PLUGIN_SILENT_LIST="$PLUGIN_SILENT_LIST $hname"
    elif [ "$channel" = plugin ]; then
      warn "hook $hname declares a checkup-evidence footprint ($decl) but no trace matching it was found [unknown] - it may be running silently and leaving no trace, or it may be dead. Fire it once by hand as an install check, or fix the declared path"
    else
      warn "hook $hname shows no evidence it has fired since its last change [unknown] - it may be running silently and leaving no trace, or it may be dead. Fire it once by hand as an install check, or give it a '# checkup-evidence: <path>' line naming where its output lands"
    fi
  done <<< "$HOOK_ROWS"
  [ "$HOOK_TOTAL" -eq 0 ] && note "no hook scripts found to probe in the $HOOK_SETTINGS_N files read above or in enabled plugins"
  if [ "$PLUGIN_SILENT" -gt 0 ]; then
    note "$PLUGIN_SILENT plugin-provided hook scripts are installed and registered but leave no footprint this HQ can read - a plugin guard is silent when it passes, so whether each has fired is [unknown]: reported for visibility, not judged -$PLUGIN_SILENT_LIST"
  fi
fi

# Tree-authority tripwire (integrity review 2026-07-25, Part 3 M-2). TREES.md
# declares which copies of Werkforce content are frozen or dead; any file
# under one of those paths newer than its declared freeze date is a
# wrong-tree write happening in real time, not after the fact. Warn-only,
# same as every other check here - it never blocks.
if [ -f "$HQ/TREES.md" ]; then
  TREES_WARN=0
  while IFS='|' read -r _ rawpath role _writer frozen acked _rest; do
    path="$(echo "$rawpath" | sed -e 's/^ *//' -e 's/ *$//')"
    role="$(echo "$role" | sed -e 's/^ *//' -e 's/ *$//')"
    frozen="$(echo "$frozen" | sed -e 's/^ *//' -e 's/ *$//')"
    acked="$(echo "$acked" | sed -e 's/^ *//' -e 's/ *$//')"
    case "$role" in frozen|dead) ;; *) continue ;; esac
    [ -n "$frozen" ] && [ "$frozen" != "—" ] || continue
    resolved="$path"
    case "$path" in
      werkforce/*) resolved="$HQ/${path#werkforce/}" ;;
      *"(abs)"*) resolved="$(echo "$path" | sed 's/ (abs)//')" ;;
    esac
    resolved="${resolved/#\~/$HOME}"
    [ -e "$resolved" ] || continue
    # A verified heal (content confirmed unchanged post-freeze, receipt
    # named in the Acknowledged-through cell) advances the effective
    # baseline past "Frozen since" for this row only — TREES.md hardening,
    # row C, 2026-07-26. "Frozen since" itself never changes; a row with no
    # acknowledgment keeps warning forever, which is the honest default.
    baseline="$frozen"
    baseline_note=""
    if [ -n "$acked" ] && [ "$acked" != "—" ]; then
      acked_date="$(echo "$acked" | awk '{print $1}')"
      baseline="$acked_date"
      baseline_note=", acknowledged through $acked_date per TREES.md"
    fi
    newest="$(find "$resolved" -type f -newermt "$baseline 23:59:59" 2>/dev/null | head -1)"
    if [ -n "$newest" ]; then
      warn "tree-authority: '$resolved' is declared $role (since $frozen in TREES.md$baseline_note) but has a file written after that date: $newest"
      TREES_WARN=$((TREES_WARN + 1))
    fi
  done < <(grep '^|' "$HQ/TREES.md" | tail -n +3)
  [ "$TREES_WARN" -eq 0 ] && ok "tree-authority: no frozen/dead tree in TREES.md has been written to since its freeze date"
else
  note "TREES.md not found - tree-authority tripwire skipped (upgrade-your-werkforce seeds it; fresh 0.1.1+ installs place it)"
fi

echo
echo "Checkup done: $OK_COUNT ok, $WARN_COUNT warnings. Warnings are logged in records/warnings.md - nothing is blocked."
exit 0
