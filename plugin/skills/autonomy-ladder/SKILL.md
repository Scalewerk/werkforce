---
name: autonomy-ladder
description: The 30-day path from first hire to a department that runs itself. Four autonomy levels - Hired, Supervised, Trusted, Autonomous - with a pass-or-fail graduation checklist for each promotion, checked against real receipts on the board, never vibes. Owns the week-by-week calendar, the graduation record in the charter, and the Level 3 autopilot setup. Demotion is free and shameless. Use when you say "autonomy ladder", "what level is my department", "promote my department", "graduate my department", "put it on autopilot", "set up autopilot", "can it run itself yet". Run this after your first win, then at every weekly review until your first department is Autonomous.
---

# Autonomy Ladder - four levels, thirty days, one department that runs itself

Every promise in this pack lands here. Departments, boards, and receipts are worth little if you still have to drive every task forever. The ladder is how you stop driving: four levels, each one a measured amount of trust, each promotion earned by work you can point at on the board.

Nothing on this ladder moves on vibes. A department graduates when its receipts say it can and you say go. Every graduation is written down, dated, and reversible.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- The four levels in plain language, and your department's current level read from `departments/<slug>/charter.md` - `[checked]`, never assumed
- A pass-or-fail graduation checklist for each promotion, verified against `board.md`, `records/worklog.md`, `records/warnings.md`, `records/sessions.md`, `records/improvements.md`, and `company/decision-log.md`
- Every graduation on paper: an appended line in the charter's Graduation record, the Autonomy column updated in `company/org-chart.md`, one line in `records/worklog.md`
- The 30-day calendar from install to a self-running first department, week by week
- At Level 3: `werkforce-autopilot.sh` installed beside your `werkforce/` folder, run once together, logging to `records/autopilot-YYYY-MM-DD.log`

## What I need from you

1. An Active department with work behind it - if you have none, run **open-a-department** (it opens one and names the seats) and **first-win** (one real task through the loop) first.
2. Honest answers about rework, warnings, and how often you had to override a seat - a true zero beats a flattering guess.
3. Your "go" at every graduation. Promotion is always your call, never mine.

## How it works

### Step 1 - Know the four levels

**Level 0 - Hired: roster named, nothing run yet.** Nothing changes in your day. The department exists on the org chart, the seats have names, and that is all. This level costs nothing and produces nothing - move up from it as soon as you can.

**Level 1 - Supervised: you trigger each task, you see everything.** The slowest level and the most instructive one. You say what runs, then watch the desk hand each seat's task to a delegated agent - the Planner files the brief, the Worker does the work, the Reviewer tears at it - and stay available the whole time; if your runtime cannot spawn delegated agents, the desk plays the seats in turn and says so. You spend real attention every morning, and in exchange you learn exactly what your workforce's work looks like before you trust it with a whole day.

**Level 2 - Trusted: the department runs its whole day's queue on one wake phrase.** You say "werkforce, morning" and the queue works itself. Your job changes shape here: you stop directing tasks and start reading receipts, and the morning takes minutes instead of hours.

**Level 3 - Autonomous: the department runs on autopilot; you handle the decision queue and the weekly review.** The department works whether you open a session or not. What remains yours is exactly what was always yours: reserved decisions, queued for "werkforce, decisions", and the weekly look at the whole machine with "werkforce, week". Autonomy never touches the reserved list - external sends, spending, pricing, public claims, hiring and firing, deleting work, and ratifying a vision or a change of strategy stay with you at every level.

### Step 2 - Find today's level

I read the Autonomy line and the Graduation record in `departments/<slug>/charter.md`, then check the Autonomy column in `company/org-chart.md` agrees. If they disagree, I trust the charter, fix the org chart, append one dated line to `records/warnings.md` as `- YYYY-MM-DD [autonomy-ladder] finding - action taken`, and keep moving. A warning never stops work.

### Step 3 - Run the graduation checklist

Each promotion has a short checklist. I verify every item against the real files and give you a plain pass or fail per line - no partial credit, no rounding up.

**Level 0 to Level 1 - Hired to Supervised:**
1. Department opened - charter, playbook, board, briefs, memory, seats/, drafts/, and outbox/ exist.
2. Seats named - Planner, Worker, and Reviewer each have a given name in the charter's seat table.
3. Board live - `board.md` carries the standard table, even if empty.

You normally pass this one the day you open the department - **open-a-department** graduates you to Level 1 as part of opening. I only re-check it here.

**Level 1 to Level 2 - Supervised to Trusted:**
1. Five tasks Done on the board, each with a receipt in the Receipt column saying what was produced, where it lives, and who reviewed.
2. At most one of those five needed rework - sent back by the Reviewer and fixed.
3. Any Blocked rows are honest - each carries `blocked by {what} - recheck {how}` in its Receipt cell, not a shrug. Stuck work told straight is evidence for you; stuck work hidden is evidence against.
4. An intervention read of `records/improvements.md` - at most one `intervention:` line naming this department across those five tasks. Every founder override proceeds, that is the law - but each one was you doing the driving, and an intervention-heavy week is not Trusted evidence, however good the receipts look.
5. You say go.

**Level 2 to Level 3 - Trusted to Autonomous:**
1. Ten more tasks Done, spread across five or more Trusted days.
2. A clean read of `records/warnings.md` - no warning naming this department in the last seven days, and no finding about it that repeats across weeks.
3. A clean read of `records/sessions.md` - the Trusted days show their session lines opened AND closed. A trail of unclosed opens means days that ended untidily, and a department cannot run alone on habits it has not shown.
4. A clean read of `records/improvements.md` - the recent entries about this department are lessons and fixes, with zero `intervention:` lines in the last seven days. A department still being overridden is a department still being driven.
5. A checkup run within the last seven days, findings read.
6. The decision queue used correctly at least once - a reserved matter queued in `company/decision-log.md` instead of acted on.
7. You say go.

If a check fails, I name it plainly, log the warning line, and the department keeps working at its current level - nothing stops, the checklist just waits. And it is your company: if you hear the failed checks and still say go, I graduate the department and record exactly which checks were skipped, in both the Graduation record and `records/warnings.md`.

### Step 4 - The 30-day calendar

- **Week 1, days 1 to 7 - build and supervise.** Install the HQ (**install-your-werkforce**), fill the profile (**company-profile**), open your first department (**open-a-department**), and put one real task through the loop the same day (**first-win**). Then daily Supervised mornings: you trigger each task, you see everything. By the end of the week the board should show five Done rows with receipts.
- **Week 2, days 8 to 14 - graduate to Trusted.** Run the Level 1 to 2 checklist, say go, and from that morning on one wake phrase runs the day: "werkforce, morning".
- **Week 3, days 15 to 21 - Trusted consistency.** The department works its queue every day while you read receipts, and you run your first weekly review with "werkforce, week" (**weekly-review** owns that ritual).
- **Week 4, days 22 to 30 - graduate to Autonomous.** Run the Level 2 to 3 checklist, say go, set up autopilot (next step), and let the department run its first self-running week while you handle "werkforce, decisions" and the review.

Follow this calendar and you are on trajectory to a fully autonomous first department inside 30 days. If a week slips, the calendar slips with it - the checks never bend to the date.

### Step 5 - Set up autopilot (Level 3 only)

This skill's folder ships `scripts/autopilot.sh`. When a department graduates to Level 3, I copy it to the folder that contains your `werkforce/` folder, name the copy `werkforce-autopilot.sh`, and make it executable:

```bash
cp "<this skill's folder>/scripts/autopilot.sh" "<folder that contains werkforce/>/werkforce-autopilot.sh"
chmod +x "<folder that contains werkforce/>/werkforce-autopilot.sh"
```

The angle brackets are placeholders - I substitute the real paths on your machine when we run this together. Then we run it once, right now, and read what it wrote: the day's summary lands at the end of the run log, `records/autopilot-YYYY-MM-DD.log` - `records/worklog.md` gets only the standard receipt line per finished task, same as any live session. The script finds your AI runtime and hands it the same morning wake phrase you would say yourself - same words, same rules, same files. And it works only departments whose charter reads Level 3 - Autonomous; departments at Level 2 and below are read-only, noted in the summary, never worked.

From there, two honest ways to keep it running:

- **You press the button (recommended).** Run `werkforce-autopilot.sh` each morning yourself. One command with your coffee - full autonomy minus the alarm clock.
- **The clock presses it.** First we pick the slot, and the slot has one rule: it avoids your own hours. Sessions coordinate, they never lock - an autopilot run opens and closes its own line in `records/sessions.md` like any working session, and if it wakes while you are mid-session it will warn about the open line and keep working. Legal, but messy, and the mess is avoidable: tell me when you are reliably away from the desk, and that is when it runs. Then I run this one line after your OK - no editor to get lost in, nothing to learn:

```
(crontab -l 2>/dev/null; echo "0 8 * * 1-5 <full path to werkforce-autopilot.sh>") | crontab -
```

That reads: at 8:00 every weekday morning, run the autopilot - and `0 8` is only the example; your slot is whatever hour we just picked. The script hardens its own PATH so scheduled runs find your AI runtime. Undoing it is just as easy: `crontab -l` shows the schedule any time, and if you say stop, I remove that line the same way - one command, nothing left behind.

Either way, autopilot obeys the same laws as a live session: reserved decisions queue in `company/decision-log.md`, nothing goes to a real person without you, and every claim carries its label. I draft; you send.

### Step 6 - Log it

Every rung leaves a paper trail. On each graduation I write these lines:

1. Append to the Graduation record in `departments/<slug>/charter.md` and update the charter's Autonomy line to match:

```markdown
- YYYY-MM-DD Graduated to Level 2 - Trusted. Five Done with receipts, one rework, no interventions, founder said go.
```

2. Update the department's Autonomy column in `company/org-chart.md`.
3. Append one line to `records/worklog.md`:

```markdown
- YYYY-MM-DD [department] Graduation to Level 2 - Trusted - receipt: graduation recorded, departments/<slug>/charter.md, approved by the founder
```

4. Append one line to the master audit log, `records/audit-log.md`, in the shape `os/formats.md` pins - timestamped in the HQ timezone from `HQ.md`, never UTC:

```markdown
- YYYY-MM-DD HH:MM [note] [{founder}] [<slug>] Graduated to Level 2 - Trusted, founder said go - departments/<slug>/charter.md
```

**Demotion is honest and free.** If a week goes wrong - receipts thin out, warnings pile up about this department, intervention lines return to `records/improvements.md`, the autopilot log reads like fiction - drop the department one level and note it the same way: `- YYYY-MM-DD Dropped to Level 1 - Supervised. Reason: ...`, org chart updated, no shame, no ceremony. Trust you cannot withdraw was never trust. Climb again next week.

## Do this now

1. Say "autonomy ladder" and I will read your charter and org chart and name your department's current level.
2. Run the graduation checklist for the next rung with me - pass or fail per item, straight from the files.
3. Put the 30-day calendar against today's date and name the day your next graduation lands.

Homework: run today at your current level - Supervised means you trigger one real task and watch the loop; Trusted means you say "werkforce, morning" and read every receipt afterward. Then note your next graduation date in `departments/<slug>/memory.md` under today's date.

Next: run **weekly-review** - graduations happen at reviews, and "werkforce, week" is where the ladder gets climbed.
