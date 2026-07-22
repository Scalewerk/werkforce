---
name: weekly-review
description: Your workforce's honest weekly tally - what actually got Done, what sat all week, which warnings repeat, and whether each department is on pace to graduate the autonomy ladder. Every number is counted from your files, never estimated, and if nothing got done the review says so in the first line. Reads what the company learned in records/improvements.md, measures last week's change, and proposes exactly one change for your yes. Use when you say "werkforce, week", "weekly review", "how did the week go", "run my review", "score my departments", "what got done this week", "is my department on pace". Run this once a week, after the last board of the week closes and before you plan the next one.
---

# Weekly Review - the week the files can prove

By Friday your memory of the week is a mood. The files have no mood. Every finished task left a receipt in `records/worklog.md`, every flag landed in `records/warnings.md`, every lesson landed in `records/improvements.md`, every stalled item is still sitting on a board with a date next to it. This skill reads all of it and tells you the week as the record shows it - Done counts, sat items by name, repeat warnings, decisions still waiting on you - then checks whether last week's change happened and proposes exactly one change for next week.

This is the founder's fifteen minutes. **run-the-day** works the boards every morning; this skill answers the only two weekly questions that matter: is the work real, and is each department earning more rope? And it improves the company the only way anything really improves - one change at a time, measured the week after.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- The honest week in one first line - and if nothing got Done, that line says so
- A tally counted only from the record: `records/worklog.md`, `records/warnings.md`, every Active department's `board.md`, and `company/decision-log.md`
- A department scorecard - one line per Active department: Done count, rework count, oldest sitting item, autonomy level and days at it
- A plain autonomy verdict per department - on pace, ahead, or behind the 30-day calendar - and the one thing that would move it
- The week's lessons read out of `records/improvements.md`, last week's change measured, and exactly ONE new change proposed for your yes
- A one-sentence nudge if the calendar says the month or the quarter is due - never a detour
- The whole review appended to `records/reviews.md` under today's date - next week's baseline

## What I need from you

1. Fifteen minutes at the end of your week - same day, same time, ideally.
2. One answer the files cannot hold: of everything that shipped this week, what did you actually use? Used means sent, posted, applied, followed.
3. A yes or no on the one change - or your own change in its place. Your call is final.

## How it works

### Step 1 - Read the record

"werkforce, week" wakes this skill. I find your HQ and read, in order: `records/worklog.md`, `records/warnings.md`, `records/improvements.md`, `company/org-chart.md` for the list of Active departments, every Active department's `board.md` and `charter.md`, `company/decision-log.md`, and the last entry in `records/reviews.md`. Everything dated after that last entry is this week. First review ever? Then the week starts at your oldest dated line, and I say so.

This wake also carries the calendar check. If a month has ended and `company/metrics.md` has no `## YYYY-MM` entry for it yet, I say so in one sentence: "the month is ready to close - say 'werkforce, month' when you want it." If a quarter has turned and `company/strategy.md` shows no entry since the boundary, the sentence is "the quarter is due - say 'werkforce, quarter' when you have an hour." A nudge is one sentence, never a stop; the weekly review runs either way.

If a file is missing or a board is malformed, I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [weekly-review] finding - action taken`, plus one lesson line to `records/improvements.md`, tell you in one sentence, and keep counting what I can read. A warning never stops the review.

### Step 2 - Tally honestly

I count only what the files show. Every number below is `[checked]` - counted in this session, never recalled, never estimated:

- **Done per department** - worklog entries this week, and whether each receipt is intact: what was produced, where it lives, who reviewed it. A Done row without a receipt gets named, plus a warning line.
- **Sat all week** - every board row that never changed stage since the last review, named with its days at that stage. Not "a few things stalled" - names.
- **Blocked** - every row sitting at Blocked, with what it waits on straight from its Receipt cell (`blocked by {what} - recheck {how}`) and whether anyone actually ran the recheck this week. A blocker nobody rechecked is a sat item wearing a better excuse.
- **Warnings** - how many this week, and whether any finding repeats from before the last review. A repeat gets named as a repeat.
- **Decisions** - queued vs decided in `company/decision-log.md`. Anything queued for more than a week gets named.
- **Used** - your answer to the one question: which shipped work you actually used. Shipped work you never used still counts as zero.

If nothing got done, the review's first line says exactly that. A true zero beats a flattering guess.

### Step 3 - The department scorecard

One line per Active department:

```markdown
| Department | Done | Rework | Oldest sitting item | Autonomy |
|---|---|---|---|---|
| Marketing | 4 | 1 | offer teardown - 6 days at Filed | Level 1 - Supervised, day 9 |
```

Rework counts tasks the Reviewer sent back this week, wherever the record shows it - board notes, `memory.md`, `briefs.md`. Where the record is silent, the column reads `-`, never a guess. Days at level come from the charter's graduation record.

### Step 4 - Autonomy progress

For each Active department I read the graduation record in `charter.md` and check its graduation checklist against the 30-day calendar - both live with **autonomy-ladder**, which owns graduation itself; this skill only measures. The verdict is plain: **on pace**, **ahead**, or **behind** - plus the one thing that would move it, for example "behind - two Done rows have thin receipts; a clean receipt week is what graduates Level 1 - Supervised to Level 2 - Trusted." If **autonomy-ladder** is not installed yet, I judge from the graduation record and days at level alone, and I say that is what I did.

### Step 5 - The hill-climb: one change

First, the pattern. I say "the logs show X" only when they do - like "the logs show every task that finished had a due date, and every task that sat did not." If one week is too little data to call a pattern, the review says that instead, and next week's entry deepens the record.

Then I open `records/improvements.md` and read every line dated this week - lesson lines from warnings and refused closes, fix lines from repairs, idea lines, intervention lines where you overrode a seat law. That file is your company telling you, in its own dated handwriting, where it keeps stubbing its toe. A lesson that appears twice outranks an idea that appears once.

Before proposing anything new, I measure the last change: the previous review entry names it, and this week's record shows whether it happened and what it moved. That verdict goes in today's entry - no proposing change two while change one sits unmeasured.

Then exactly one adjustment for next week - one, not three - drawn from the strongest signal in the improvements file and the tally. Small enough to actually do, concrete enough that next week's review can check whether it happened and whether it helped. You say yes, or you replace it with your own; what lands in the file is yours. One change a week, measured the week after - that is how a company climbs a hill without falling off it.

### Step 6 - Log it

I append the whole review to `records/reviews.md` under a dated heading - append only, nothing overwritten, and this file takes writes from the weekly review and the monthly close only:

```markdown
## YYYY-MM-DD - weekly review

Verdict: {{the honest week in one line}}

### Tally
- Done: {{n}} tasks, receipts intact {{n}}/{{n}}
- Sat all week: {{task - days at stage, or "none"}}
- Blocked: {{task - blocked by what, recheck run or not, or "none"}}
- Warnings: {{n}} raised, repeats: {{named, or "none"}}
- Decisions: {{n}} queued, {{n}} decided
- Improvements logged: {{n}} ({{lesson/fix/idea/intervention counts, or "none"}})
- Used by {{FOUNDER}}: {{what, or "nothing shipped was used"}}

### Scorecard
| Department | Done | Rework | Oldest sitting item | Autonomy |
|---|---|---|---|---|
| {{department}} | {{n}} | {{n or -}} | {{task - days at stage}} | Level {{n}} - {{level name}}, day {{n}} |

### Autonomy
- {{department}}: {{on pace | ahead | behind}} - {{what would move it}}

### Pattern
{{"the logs show X" or "one week is too little data to call a pattern"}}

### Last week's change
{{happened and what it moved | did not happen - why the record says so | "first review, nothing to measure yet"}}

### One change
{{exactly one adjustment for next week - Founder said yes, or Founder replaced it with their own}}
```

Then one line goes to `records/audit-log.md`, timestamped in your HQ timezone from `HQ.md` (never UTC), so the week's review shows up in the dashboard's activity feed:

```markdown
- YYYY-MM-DD HH:MM [review] [weekly-review] [company] weekly review filed - one change proposed - records/reviews.md
```

I read the entry back to you in one screen, and the review is done. Next week's run starts exactly here - and the first thing it measures is the change you just approved.

## Do this now

1. Say "werkforce, week" and let me read the record.
2. Answer the one question - what shipped work did you actually use?
3. Approve the one change, or set your own, then read the entry in `records/reviews.md`.

Homework: put a recurring slot on your real calendar - same day, same time, every week - named "werkforce, week".

Next: run **autonomy-ladder** when the scorecard says a department is ready to graduate.
