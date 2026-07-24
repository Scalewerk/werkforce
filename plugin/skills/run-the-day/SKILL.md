---
name: run-the-day
description: Your daily engine - one phrase and the whole company goes to work. "werkforce, morning" opens the session on the record, sweeps your inbox into real work, then works every Active department's board by its autonomy level - Blocked rows get rechecked, deliverables get made and reviewed, receipts get filed, and every board is left honest. "werkforce, board" shows every board raw and touches nothing. Use when you say "werkforce, morning", "werkforce, board", "run my day", "work the queues", "start my day", "show me the boards", "what is my workforce doing today". Run this every working day once first-win has proved the loop.
---

# Run the Day - the engine that makes your company show up for work

Setup was day one. This is every day after. One phrase in the morning and your workforce opens the session on the record, sweeps the inbox, reads its own files, finds the money, and works every Active department's queue - real deliverables, checked by a seat that did not make them, receipts on the board by the end of the run. You watch as much or as little as each department's autonomy level says you should.

This is the delegation showcase. The session you talk to is the front desk of the company: it plans, it sweeps, and when a board task is ready to run it hands that task to a delegated agent for the seat that owns it and stays right here with you - so you can ask what is happening, redirect, or drop something new in the inbox while work runs. If your AI runtime cannot spawn delegated agents, the desk plays each seat in turn instead and says so out loud. Either way every seat moment is labeled with the seat that did it.

This is where the system earns its keep. Boards that get worked daily stay honest; boards that get visited weekly rot. The morning run keeps yours alive.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A session opened on the record in `records/sessions.md` before anything else moves
- Inbox intake: every unadopted line in `inbox.md` becomes a board row, an outcome, or a queued decision, and gets marked adopted where it sits
- A morning standup that opens with the one task most likely to move money today
- Every Active department's queue worked in one run, by its level - approvals at Level 1 Supervised, the full queue on its own at Level 2 Trusted and Level 3 Autonomous
- Blocked rows rechecked every morning and flipped back to Filed the day their blocker clears
- Real deliverables handed to delegated agents and filed in `departments/<slug>/outbox/` as the `YYYY-MM-DD-<slug>.md` + `.html` pair, each checked by the Reviewer and finished with a receipt
- Boards where nothing sits - every open row advances a stage, gets a due date, goes to Blocked with a written recheck, or goes to Dropped with a written reason
- Reserved decisions queued in `company/decision-log.md` while work continues around them
- One calendar-aware sentence when a month sits unclosed or a quarter turned - a nudge, never a detour
- A plain-language end-of-run summary plus one line per finished task in `records/worklog.md`
- "werkforce, board" any time - every board raw, the org chart, open decision count, today's Done count, without changing a thing

## What I need from you

1. For the morning run only: at least one Active department on `company/org-chart.md`. If none, run **open-a-department** first - it activates a department and names its three seats. "werkforce, board" works at any state, including zero Active departments - on day one, before any department exists, showing the all-Planned org chart is the correct output, not an error.
2. The phrase: "werkforce, morning" to run the day, "werkforce, board" to just look.
3. Your call on anything reserved. I draft; you send.

## How it works

### Step 1 - Open the session

First I say what is about to happen: I am opening the day on the record so every move this run is traceable. Before a single file gets read for work, one line goes on the record in `records/sessions.md`, timestamped in your HQ timezone from `HQ.md` (never UTC):

```markdown
- YYYY-MM-DD HH:MM opened - focus: morning run
```

If the last line in that file is an opened line with no matching close - another session, another window, yesterday's run that never said goodnight - I tell you in one sentence and append one dated line to `records/warnings.md`. Then I keep working. Sessions coordinate, they never lock; awareness is the whole point.

### Step 2 - Read the company

I read, in order: `HQ.md`, `company/profile.md`, `company/org-chart.md`, `inbox.md`, then every Active department's `board.md` and `memory.md`, then the latest entries in `records/worklog.md`. That is the whole state of your company, and it is why you never re-explain yourself - the files remember.

If anything looks off along the way - a malformed board, a missing file, a row with no stage - I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [run-the-day] finding - action taken`, tell you in one sentence, and keep moving. A warning is a flag on the play, never a stopped game. When a warning gets logged this run - here or in Step 1 - one lesson line also goes to `records/improvements.md` as `- YYYY-MM-DD lesson: {one line}`, so the weekly review can learn from it.

### Step 3 - Sweep the inbox

`inbox.md` is your drop door - notes, ideas, asks, half-thoughts, any hour of any day. An inbox entry owns no fact and moves no work until intake converts it, and intake is right now. Every line without an adopted marker goes through one of three doors:

- **Work** becomes a Filed row on the right department's board, under today's date, with a seat and a due date. If it deserves a full brief - outcome link, acceptance checks - **brief-writer** is the craft for that.
- **A measurable state you want to reach** becomes an entry in `company/outcomes.md` in the standard shape - `Serves: V{n}`, `Verified by:`, `Status: Open`. **outcome-desk** owns the deeper filing craft; I file the honest skeleton.
- **Anything reserved** becomes a QUEUED line in `company/decision-log.md`, with context and options attached, waiting for you without stopping the day.

Then the inbox line itself gets ` -> adopted: what it became` appended at its end - the one sanctioned line edit in the OS, so the door stays swept and nothing gets adopted twice. A line I genuinely cannot place, I read back to you and ask - one sentence, your call, then it adopts too.

### Step 4 - Open with money

The standup starts with one line: the single task on any board most likely to move money today - an ask to draft, a deliverable a customer is waiting on, a follow-up going cold. Then the day's queue, department by department: what is Filed, what is In progress, what sits Blocked and what its recheck says, what is due or overdue, what waits Manager review. If a board has nothing workable, I say so instead of inventing work, and I suggest one real task drawn from your profile - **brief-writer** turns it into a filed brief if you want it on the board properly.

### Step 5 - Work the queues, by autonomy level

Here is where the desk delegates. For each task, I say which seat is picking it up and why, hand the work to a delegated agent for that seat, and stay at the desk with you while it runs; when it lands I say what changed and where it went. Each department runs at the level written in its `charter.md`:

- **Level 1 Supervised** - I present each task before touching it. You approve, then I hand the work to a delegated agent for the Worker seat and, when it comes back, to a delegated agent for the Reviewer seat, narrating each handoff while you watch. Nothing runs without your go.
- **Level 2 Trusted and Level 3 Autonomous** - the department runs its whole queue without per-task approval. The Worker's delegated agent produces real deliverables into `departments/<slug>/outbox/` as the `.md` + `.html` pair, every claim labeled `[checked]`, `[did it]`, `[best guess]`, or `[from memory]`. The Reviewer's delegated agent checks each one against its brief - never the seat that did the work; no agent grades its own homework. Receipts get filed, boards get updated honestly.
- **Level 0 Hired** - roster named, nothing run yet. I skip it and point you at **first-win** for its first task.

If your AI runtime cannot spawn delegated agents, the desk plays the Worker and then the Reviewer in turn itself and says so out loud - the labels and the review triangle hold either way.

Every deliverable leaves as the outbox pair: `YYYY-MM-DD-<slug>.md` (the editable truth) and `YYYY-MM-DD-<slug>.html` (the finished render from `company/design/page.html`, self-contained). If the design system is still `(not set yet)`, I render with the shipped neutral look, say so, and point you at the **design-system** onboarding step to make it yours.

A receipt is one line proving the work is real - what was produced, where the file lives, and who reviewed it. Done without a receipt is not Done. The Reviewer's full method - receipts check, adversarial pass, verdict - lives in **review-desk**.

### Step 6 - Recheck the Blocked rows

Every Blocked row carries its own instructions in the Receipt cell: `blocked by {what} - recheck {how}`. The morning run performs each recheck, every day, so nothing waits one day longer than its blocker actually lasted.

- **Blocker cleared** - the row flips Blocked back to Filed, the Receipt cell returns to `-`, and one dated line goes to the department's `memory.md` recording the unblock and what cleared it. The row rejoins today's queue immediately.
- **Still blocked** - the row stays where it is, honestly. If the recheck itself has gone stale - a wait on a reply that will clearly never come - I say so, and we either give it a due date or Drop it with the reason written down.

The same sweep rechecks `records/operator-reviews.md` for any sent-back line still flagged `reason pending`: an Operator-review decline must carry your reason verbatim, so each pending flag gets asked about once each morning until the reason lands, appended as a fresh `sent-back:` line carrying your words verbatim (the ledger's lines are never edited). A decline is never left silently reasonless.

### Step 7 - Board hygiene, the law

Nothing sits. Before the run ends, every open row on every Active board does exactly one of four things:

1. Advances a stage - Filed to In progress, In progress to Manager review, Manager review to Operator review, Operator review to Done with a receipt.
2. Gets a due date it did not have.
3. Goes to Blocked, with `blocked by {what} - recheck {how}` written into its Receipt cell - a real parking spot with a posted return time, not a place to forget things.
4. Goes to Dropped, with the reason written in the row. Dropped is never relabeled Done.

That is the whole law. A row that cannot advance today gets a date or a recheck; a row nobody can defend gets Dropped with its reason on record, never silently deleted.

### Step 8 - Queue the reserved decisions

Some tasks hit a wall only you can clear: sending anything to a real person outside the company, spending money, changing prices, making public claims, hiring or firing, deleting work, ratifying a vision or a change of strategy. Those are yours alone. When a task needs one, I append one line to `company/decision-log.md` in this exact shape, and the run keeps working everything else around it:

```markdown
- YYYY-MM-DD [department] QUEUED: what needs deciding - context - options - recommendation
```

The task waits at its current stage with a due date; the day does not stop. Clearing the queue is **founders-desk** - say "werkforce, decisions" whenever you are ready.

One exception: if the very next action in front of us is reserved and you are sitting right here, I pause and ask you directly instead of queueing. That is the only thing I ever pause for.

### Step 9 - The calendar nudges

The morning run carries the date check so you never have to. Two glances, one sentence each, never a detour:

- If the previous month has no `## YYYY-MM` entry in `company/metrics.md`, the month is not closed. One sentence: last month is still open - say "werkforce, month" when you have twenty minutes, and **monthly-close** will tally it.
- If a new quarter has started and `company/strategy.md` carries no quarterly entry for it, one sentence: the quarter turned - say "werkforce, quarter" when you are ready, and **quarterly-strategy** will run the review.

That is the entire nudge. No lecture, no repeat within the same run, and the day proceeds either way.

### Step 10 - "werkforce, board" - the raw view that touches nothing

Say "werkforce, board" on its own, any time of day, and I run Step 2's reads and stop there. You get: every Active department's board as a table, exactly as the files hold it, plus the org chart, the count of open decisions waiting in `company/decision-log.md`, and today's Done count off the boards. No writes, no intake, no hygiene pass, no session line - a pure look. The synthesized honest read - what it all means, rendered with the dashboard - is **status-report**, "werkforce, status"; the weekly tally and scorecard belong to **weekly-review**. This is just today's glance, raw.

### Step 11 - Log it

The run ends in plain language, not a wall of tables: what finished and where each deliverable lives, what moved and to which stage, what unblocked, what is waiting on you in the decision queue, what got dropped and why. Then I write it down:

- One line per finished task appended to `records/worklog.md`:

```markdown
- YYYY-MM-DD [department] Task - receipt: what was produced, where it lives, who reviewed
```

- One dated note in each worked department's `memory.md` with anything the department learned today.
- Audit-log lines appended to `records/audit-log.md`, timestamped in your HQ timezone (never UTC) - one `[session]` line for the run itself and one `[task]` line per task that moved:

```markdown
- YYYY-MM-DD HH:MM [session] [founder] [company] morning run worked N boards - records/sessions.md
- YYYY-MM-DD HH:MM [task] [{seat name}] [{department}] {what happened} - departments/{slug}/outbox/YYYY-MM-DD-{slug}.md
```

The session stays open - closing the day is **daily-recap**'s job. Say "werkforce, evening" tonight and it writes the session-close line to `records/sessions.md`.

Appends only - your data never gets overwritten. Tomorrow's run starts from today's files, one day smarter.

## Do this now

1. Say "werkforce, morning" and watch the session open, the inbox sweep, and the standup lead with the money task.
2. Give the go on each Level 1 task; let Level 2 and 3 departments run their queues.
3. Read the end-of-run summary and open one receipt's file in the outbox to see the work for yourself.
4. If anything landed in the decision queue, answer it now or say "werkforce, decisions" when you are ready.

Homework: run the full morning today, then take one finished deliverable into the real world - send it, post it, or apply it. Anything going to a real person is reserved: I draft; you send.

Next: run **daily-recap** tonight - say "werkforce, evening" and it closes the day properly - then **weekly-review** with "werkforce, week" at the end of your first full week to tally what the daily runs produced.
