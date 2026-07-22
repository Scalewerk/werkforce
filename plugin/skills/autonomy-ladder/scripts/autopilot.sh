#!/bin/bash
# WerkforceOS autopilot - runs your workforce's daily session on its own.
# Level 3 - Autonomous only: set this up with the autonomy-ladder skill, which
# copies this file next to your werkforce/ folder. It finds your AI runtime and
# hands it the same morning wake phrase you would say yourself. Same words,
# same rules, same files - whether it runs by hand or on a schedule.
set -u

# Scheduled runs (cron) start with a bare PATH - add the usual runtime homes.
PATH="$PATH:/usr/local/bin:/opt/homebrew/bin:$HOME/.local/bin"
export PATH

cd "$(dirname "$0")"

if [ ! -f "./werkforce/HQ.md" ]; then
  echo "No werkforce/HQ.md next to this script. Put werkforce-autopilot.sh beside your werkforce/ folder."
  exit 1
fi

LOG_DIR="./werkforce/records"
LOG_FILE="$LOG_DIR/autopilot-$(date +%F).log"
mkdir -p "$LOG_DIR"

PROMPT='werkforce, morning - autopilot run. Run the full day only for departments whose charter reads Level 3 - Autonomous: work the queued tasks on each of their boards, move stages honestly, have the Manager seat check anything finished, file receipts, append one entry per finished task to werkforce/records/worklog.md in its standard format, and update that department'"'"'s memory. For departments at Level 2 or below, read their boards and note what is waiting in your summary, but do not work their tasks. Queue every reserved decision in werkforce/company/decision-log.md instead of acting on it - never send anything to a real person, never spend money, never change prices, never make public claims, never activate or close a department or seat, never delete work, never ratify a vision or a change of strategy. Finish with a short plain-language summary of what got done and what needs me.'

echo "Autopilot run $(date '+%F %T')" >> "$LOG_FILE"

if command -v claude >/dev/null 2>&1; then
  claude -p "$PROMPT" --permission-mode acceptEdits --output-format text >> "$LOG_FILE" 2>&1
elif command -v codex >/dev/null 2>&1; then
  codex exec "$PROMPT" -s workspace-write --skip-git-repo-check >> "$LOG_FILE" 2>&1
else
  echo "No AI runtime found on PATH. Install your runtime, then run this again." | tee -a "$LOG_FILE"
  exit 1
fi

echo "Autopilot finished $(date '+%F %T'). Task receipts are in werkforce/records/worklog.md, the day's summary and full log in $LOG_FILE" >> "$LOG_FILE"
tail -3 "$LOG_FILE"
