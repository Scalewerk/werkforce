---
name: first-win
description: Day-one proof that your workforce is real - put one business task through the whole loop today, in this session. The Planner files the brief with its acceptance checks, the Worker does the work, the Reviewer tears at it, and the board shows Done with a receipt. The task is drawn from your actual offer and audience, never a toy example, so you end the day holding a deliverable you can use immediately. Use when you say "first win", "run my first task", "prove this works", "put a real task through the loop", "give my workforce its first job", "do real work today". Run this the same day you open your first department, before the daily loop takes over.
---

# First Win - one real task through the whole loop, today

You have an HQ, a department, three named seats - and none of it has done real work yet. Today it works. One task your business needs before the day ends goes through the full loop in this session - brief, work, review, Done - and you finish holding the file.

Not a demo, not a sample. The task comes from your real offer and your real audience, and the deliverable is something you can send, post, or apply the moment we finish. Setup is a promise; a receipt is proof.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- One brief appended to `departments/<slug>/briefs.md` under today's date - outcome, acceptance checks, due, seat
- A finished deliverable as the outbox pair - `departments/<slug>/outbox/YYYY-MM-DD-<slug>.md` (editable truth) plus its `.html` render in your company design system - every claim labeled
- A board row that traveled Filed to In progress to Manager review to Operator review to Done, with a receipt in the Receipt column
- One line in `records/worklog.md` - the first entry of your company's track record
- Proof you can point at - real work, checked by a seat that did not do it, finished today

## What I need from you

1. One Active department. If none exists yet, run **open-a-department** (it activates a department and names its three seats) - or say the word and I will open one with you right now and come straight back here.
2. Ten minutes and one real task - from your board, or from three quick questions.
3. Your call on anything reserved. I draft; you send.

## How it works

### Step 1 - Confirm an Active department

I read `company/org-chart.md` and use the department you point at, or the only Active one if there is just one. If nothing is Active, one line: run **open-a-department**, or tell me to open one now and we continue the moment it exists. If anything else looks off along the way - a malformed board, a missing file - I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [first-win] finding - action taken`, tell you in one sentence, and keep moving. A warning never stops the work.

While I am there, one reading note so the seat words never trip you: Account Executive is a Sales role title; the seat words for every department's three seats are **Planner** (plans the work, writes every brief), **Worker** (does the work), and **Reviewer** (reviews it). Those are the three seats about to run this loop.

Here is how the loop actually runs from my side. I am the desk you are talking to - I plan, narrate, and file the record, and I hand each seat's task to a delegated agent so the work happens beside us while I stay right here for you. If your AI runtime cannot spawn delegated agents, I play the seats in turn myself and say so out loud. Either way, every seat moment is labeled with the seat that did it, so you always know who is speaking.

### Step 2 - Pick the task

Two doors:

- **From the board.** If `departments/<slug>/board.md` has a task at Filed, we take the best one - the smallest task with a real payoff today.
- **From you.** Otherwise I ask three questions, no more: what does the business need today, who is it for, and what does done look like? Real means it uses your actual offer and audience from `company/profile.md` - a message for a real prospect, a page for your real offer, a checklist for your real delivery. Never a toy example. If the profile is blank where I need it, I ask you now rather than inventing.

### Step 3 - The Planner files the brief

I hand the planning to the Planner and say so - what is about to happen is the brief that will govern the whole task. The Planner appends to `departments/<slug>/briefs.md` under a dated heading that matches the board task name, in the exact shape `os/formats.md` gives every brief:

```markdown
### YYYY-MM-DD - {{TASK NAME}}

Outcome: (none yet)
Acceptance checks:
1. {{falsifiable - a stranger could mark it pass or fail}}
2. {{falsifiable}}
Due: today
Seat: {{WORKER NAME}}
```

`Outcome:` names an outcome from `company/outcomes.md` when one exists - `O1`, `O2` - because every task should serve something bigger. On day one you almost certainly have none filed yet, and that is fine: `(none yet)` is legal, I append one warning line to `records/warnings.md`, and we keep moving. Tracing degrades, it never gates - the gap becomes a later conversation with **outcome-desk**, not a stopped game. A brief written in your customer's own words may also carry `Type: story`.

Two to four acceptance checks, each one falsifiable. "Make it good" is not a check; "under 150 words with one clear ask" is. Reserved decisions stay with you throughout - we draft, you send. Then the board row moves to In progress - and if the task came from the interview, the Planner adds the row first, with the Worker's given name in the Seat cell. I tell you the brief is filed and where it landed before we move on.

### Step 4 - The Worker does the work, for real

I hand the brief to the Worker and say what is coming - the real deliverable, not a plan for one. The Worker reads the brief and produces it - the actual words, the actual list, the actual page - and writes it to `departments/<slug>/outbox/YYYY-MM-DD-<slug>.md`, the editable truth. Every claim in it carries one of the four labels: `[checked]` I verified it just now, `[did it]` I performed the action myself this session, `[best guess]` inferred, not verified, `[from memory]` recalled from files, may be stale.

Then the deliverable gets its finished face: a self-contained `departments/<slug>/outbox/YYYY-MM-DD-<slug>.html` rendered from `company/design/page.html`, so what you hold looks shipped, not raw. If your design system is still `(not set yet)`, I say so plainly, use the shipped neutral look, and point you at the **design-system** onboarding step to make it yours - the markdown stays the truth either way. When both files land in the outbox, the board row moves to Manager review, and I tell you it is ready for the Reviewer.

### Step 5 - The Reviewer checks it

I hand the deliverable to the Reviewer - a different seat from the one that made it, because no agent grades its own homework. Fresh hostile read, brief in hand:

- Each acceptance check gets a plain pass or fail, one by one.
- Every `[checked]` claim gets re-verified by looking again, not by trusting the label.
- Faults get named plainly - "check 2 fails, there is no ask in the message", not "could be stronger".

Failed checks go back to the Worker to fix, and the Reviewer reads the fix fresh. We loop until every check passes.

Because this is the department's very first reviewed task, I also run the independence negative proof once - here and now, not on every future task. The Reviewer deliberately attempts a self-review (grading a piece of work as if it were its own maker), the seat law refuses that attempt, and I keep the recorded refusal as evidence that "no agent grades its own homework" is real and enforced. This proof runs exactly once per department: at first-win when the department's first task is reviewed, and it is re-verified at **werkforce-checkup** only if the refusal was never recorded. After that the department is proven independent and we never repeat it.

### Step 6 - Done, with a receipt

A receipt is one line proving the work is real - what was produced, where the file lives, and who reviewed it. The board row moves to Done with the receipt in the Receipt column:

```markdown
<!-- Stages: Filed | In progress | Blocked | Manager review | Operator review | Done | Dropped -->
<!-- Receipt is "-" until Done; a Done receipt says what was produced, where it lives, who reviewed. A Blocked row carries "blocked by {what} - recheck {how}" in its Receipt cell until unblocked. -->
| Task | Stage | Seat | Filed | Due | Receipt |
|---|---|---|---|---|---|
| Prospect email draft | Done | Marcus | 2026-07-20 | 2026-07-20 | email draft, outbox/2026-07-20-prospect-email.md, reviewed by Elena |
```

The Seat cell holds the Worker's given name, and the receipt names the Reviewer by name too. One stage you did not need today: Blocked. It exists for work waiting on something outside the room - a Blocked row carries `blocked by {what} - recheck {how}` in its Receipt cell until it is unblocked, so stuck work stays visible instead of dying quietly. Your first win should never touch it, but your board knows how.

Then I show you the receipt and the file, and I say it plainly: that is your workforce's first completed work. Open the outbox file and read it - it is yours.

### Step 7 - Log it

I append one line to `records/worklog.md` in the standard shape:

```markdown
- YYYY-MM-DD [department] Task - receipt: what was produced, where it lives, who reviewed
```

and two dated bullets to `departments/<slug>/memory.md`: the review record in its one-line shape - `- YYYY-MM-DD Review of {task}: verdict, checks passed/failed, downgrades, faults (or none).` - and one note with what the department learned from its first task, including that the independence negative proof was recorded. Nothing goes to `records/reviews.md` - that file belongs to the weekly review and the monthly close alone; task reviews live in department memory.

Then the master audit log gets its lines - if it is not in the audit log, the system did not do it. I append to `records/audit-log.md` in the pinned shape, timestamped in your HQ timezone from `HQ.md` (never UTC), one line per action that happened - the task and its review at least:

```markdown
- YYYY-MM-DD HH:MM [task] [{Worker name}] [{department}] first-win deliverable produced - departments/{slug}/outbox/YYYY-MM-DD-{slug}.md
- YYYY-MM-DD HH:MM [review] [{Reviewer name}] [{department}] first task reviewed, independence proof recorded - departments/{slug}/memory.md
```

Appends only - your data never gets overwritten.

One more line, and only when it applies: if the finished deliverable is meant to reach a real person outside the company - an email, a message, a post - its send gets queued the moment it is Done, as one QUEUED line in `company/decision-log.md` naming what would be sent and to whom. Every send-shaped deliverable gets its queue line at Done; nothing waits on you silently, and nothing goes out without you.

## Do this now

1. Say "first win" and let me check the org chart for an Active department.
2. Point me at a Filed task, or answer three questions and we make one.
3. Watch the loop run - brief, work, review - and read the receipt at the end.

Homework: use the deliverable today - send it, post it, apply it. Sending anything to a real person is a reserved decision, so that step is yours alone: I draft; you send.

Next: I read `company/onboarding.md` and name the one step now showing Next. Right after first-win that is usually building your dashboard - say "werkforce, status" so **status-report** renders the PM view of everything you just proved. Once onboarding shows every step Done, run **run-the-day** and say "werkforce, morning" tomorrow - your workforce picks up the board exactly where today left off.
