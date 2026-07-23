---
name: what-now
description: Lost, back after a break, or staring at your workforce unsure what to touch first? I read your HQ files, tell you where you stand in one honest sentence, and name the single next step with the exact words to say - never a menu. It works even before an HQ exists, so it is a fine first thing to ever say to your new workforce. Use when you say "what now", "what should I do", "I'm lost", "where was I", "what's next", "where do I start". Run this any time you sit down cold and want the day pointed in one direction.
---

# What Now - one step, never a menu

Every founder gets lost in their own system eventually. You step away for a week, sit back down, and the folder stares at you - boards, records, departments, all talking at once. The fix is not another dashboard. It is one voice that reads the actual files and says: here is where you are, here is the one thing to do next, here are the words to say. I point; the skill I point at does the work.

This also works when there is nothing to read yet. No HQ is not falling behind - it is standing at the front door, and I hold it open. Lost is just unread state.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- Where you stand in one honest sentence, read from your real files, every claim labeled `[checked]`, `[did it]`, `[best guess]`, or `[from memory]`
- One next step, picked by a first-match cascade - never a menu of options
- The exact words to say to take that step, ready to say back as-is
- The rest of the pack introduced one skill at a time, only as your files earn it - no catalog, ever
- Anything that looks off during the read becomes one dated line in `records/warnings.md` - a flag on the play, never a stopped game
- A route that works from zero: no HQ is itself a state, and it gets the warmest branch of all

## What I need from you

1. Nothing but the words. Say "what now" and give me thirty seconds to read.

## How it works

### Step 1 - Read the state

I find your HQ - the `werkforce/` folder under the current folder if `werkforce/HQ.md` exists there, otherwise `~/werkforce/` - and read what is actually on disk. `os/VERSION` comes first, because its absence changes everything below it. Then `company/onboarding.md` - the numbered setup checklist the **onboarding** skill owns, because an unfinished onboarding step always outranks everything else I could name. Then `os/manifest.md`, so I know exactly which skills are installed and only ever point you at one that exists - that is what makes this router capability-aware, not a script reciting a fixed list. Then `HQ.md`, `inbox.md` (counting lines not yet marked adopted), `company/profile.md`, `company/business-model.md`, `company/org-chart.md`, `company/visions.md`, `company/outcomes.md`, `company/decision-log.md` (counting QUEUED lines with no DECIDED answer), every Active department's `board.md` and `charter.md` - all six stages, Blocked included - plus `records/worklog.md` and `records/reviews.md`. A missing or malformed file never stops me: it becomes one dated line in `records/warnings.md` and I keep reading. No HQ at all is not an error - it is the first branch below.

### Step 2 - Walk the cascade, first match wins

I check these in order and stop at the first match. Every answer carries its why in one sentence.

1. **No HQ anywhere** - no `werkforce/HQ.md` here and none at `~/werkforce/`. Then welcome. You have not missed anything - you are at day zero of your own agentic workforce: real files on your machine, departments with named seats, work that finishes with receipts, and it all remembers you because the files remember. Ten minutes stands it up. Why: everything else needs a home before it can exist. Say: "install my werkforce".
2. **An HQ with no `os/VERSION` file** - a real HQ, built before the current tree. Why: every skill below this line reads the current shapes, so the upgrade comes first - it is session-led and additive, it backs everything up before touching a byte, keeps your old departments, and deletes nothing. Say: "upgrade my werkforce".
3. **An onboarding step still open** - `company/onboarding.md` shows a step marked `Next` (or the file exists and any step is not yet Done). Why: onboarding is the numbered path to an optimally configured company, exactly one step is Next at a time, and a half-finished setup outranks anything downstream of it - I name that step's skill in the exact words its line implies, and only if `os/manifest.md` shows it installed. Say: the words for that step, for example "set up my company profile". The **onboarding** skill owns this checklist and walks you step by step if you'd rather it drive.
4. **HQ exists but the profile is mostly "(not set yet)"** - blanks outnumber real answers in `company/profile.md`, and no onboarding checklist is tracking it. Why: agents writing for a business they cannot see produce generic work. Say: "set up my company profile".
5. **No Active department** - every row of the Departments table on `company/org-chart.md` still reads Planned. Why: a workforce with no staffed department has nobody to hand work to. Say: "open a department".
6. **An Active department but zero Done tasks ever** - an Active department exists, but no board shows a single Done row. Why: a department that has never finished anything is still a theory, and a true zero beats a flattering guess - so we go end yours today. Say: "first win".
7. **Reserved decisions waiting on you** - QUEUED lines in `company/decision-log.md` with no DECIDED answer. Why: a reserved decision is the one thing in this whole OS that legally pauses work, and nothing should ever wait on you silently. Say: "werkforce, decisions".
8. **Work sitting at Manager review** - rows waiting on a verdict on any Active board. Why: finishing beats starting - each of those rows is one adversarial Reviewer pass away from Done, and no agent grades its own homework. Say: "run the review desk".
9. **Open work or an unread inbox** - rows at Filed, In progress, or Blocked on any Active board, or inbox lines not yet adopted. Why: filed work ages badly, a Blocked row carries its own recheck instruction right in its Receipt cell, and an inbox entry owns no fact until intake converts it - the morning run handles all three in its opening pass. Say: "werkforce, morning".
10. **The company makes things but the money is unwritten** - profile set, a department Active, yet `company/business-model.md` is mostly "(not set yet)". Why: your agents can now produce work, but who buys it, at what price, and what you can honestly deliver today live nowhere - and every offer, claim, and strategy call downstream reads that file. Say: "set up my business model".
11. **No ratified vision** - `company/visions.md` holds no vision with a Ratified line. Why: departments without a standing direction each optimize their own corner. The CEO drafts; you ratify - that decision is yours alone. Say: "draft a vision".
12. **Visions without outcomes** - a ratified vision stands, but `company/outcomes.md` is empty or every outcome is closed. Why: a vision with no measurable outcome under it is a poster, not a direction - an outcome names the state to reach and who verifies it. Say: "outcome desk".
13. **Seven or more days since the last entry in `records/reviews.md`.** Why: a workforce nobody reviews drifts, quietly. Say: "werkforce, week".
14. **A department whose graduation checklist reads complete** - the charter's graduation record shows every requirement met for the next level, say Level 1 - Supervised earned all the way to Level 2 - Trusted. Why: the department has already earned the next level, and the only thing left is granting it. Say: "autonomy ladder".
15. **Otherwise** - the state is healthy, so I show you the board and name the one task most likely to move money, with one sentence on why that task and not another. Say: "werkforce, morning" and go work it.

There is a law underneath this cascade: you meet the pack one skill at a time, as your files earn it. I only ever name a skill `os/manifest.md` says is installed - the manifest is my catalog, and I read it so I never point you at something that is not there. Day one is a handful of skills - **install-your-werkforce**, **onboarding**, **company-profile**, **design-system**, **open-a-department**, **first-win**, **run-the-day**, **review-desk**, **founders-desk**, and this one. **business-model**, **ceo-seat**, and **outcome-desk** do not come up until a profile and a first Active department exist, because before that they would be homework about a company that is not real yet. More departments and the craft skills arrive later still, when a board or a playbook actually calls for them. I never hand you the catalog.

This same read - `os/manifest.md` plus HQ state, onboarding.md first - is the engine every other skill borrows for its closing "Next" line. When a skill finishes and names your single recommended next action, it is running this cascade. Here it is the whole job; there it is the last line.

### Step 3 - Answer in three lines

The whole answer arrives in this shape, and never as a menu:

```
Where you are: {{one honest sentence from your files, claims labeled}}
Next step: {{the one step}} - {{why, in one sentence}}
Say: "{{the exact words}}"
```

A real example:

```
Where you are: Marketing is Active with 3 tasks at Filed and 1 Blocked past its recheck [checked]; two inbox lines await intake [checked]; the decision queue is empty [checked].
Next step: run the day - filed work ages badly, and the morning run does intake and the Blocked recheck in its opening pass.
Say: "werkforce, morning"
```

Notice both branch 9 and branch 13 could have matched there - the earlier one won, because a matched branch that has to wait will still be true tomorrow. If you want the runner-up anyway, ask and I name exactly one more. Still one at a time, still not a menu.

### Step 4 - Log it

Anything that looked wrong during the read is already one dated line each in `records/warnings.md`, in the standard shape: `- YYYY-MM-DD [what-now] finding - action taken`, and each such warning also gets one `[warning]` line in `records/audit-log.md`, timestamped in your HQ timezone (never UTC):

```markdown
- YYYY-MM-DD HH:MM [warning] [what-now] [company] {finding} - records/warnings.md
```

Orientation itself earns no worklog line - `records/worklog.md` is for finished tasks with receipts - and a clean read with nothing wrong writes nothing at all; pointing is not an action to log. The moment the step I named finishes something real, that skill writes the lines, and tomorrow's "what now" reads a better state because of it. If there was no HQ to read, there is nothing to write yet, and that is fine.

## Do this now

1. Say "what now".
2. Read the three lines back - if the first line does not sound like your business, correct me and I re-read.
3. Say the exact words on the third line, today, while the pointing is fresh.

Homework: take the named step all the way to its end before the day closes - and if it lands anywhere near sending, spending, or pricing, that decision is yours alone, I draft and you send. Then say "what now" tomorrow and notice the answer changed. That change is your progress, measured.

Next: run **install-your-werkforce** if the cascade sent you to the front door - it is where most journeys start, and every other branch assumes it already ran.
