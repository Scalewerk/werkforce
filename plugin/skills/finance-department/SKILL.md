---
name: finance-department
description: Finance stops being a shoebox of receipts and becomes a working desk - one session that drafts your invoices (drafts only - sending and spending stay yours), builds a cash snapshot with a runway line where every number names its source, and stages the figures monthly-close will carry into the record. Use when you say "run finance", "finance session", "draft an invoice", "cash snapshot", "how much runway do we have", "who still owes us", "where does the money stand". Open the Finance row with open-a-department first; run this any week money moved or should have.
---

# Finance Department - the session where your money tells the truth

Most founders know their money the way they know the weather - a general feeling, checked properly only when it turns bad. This session replaces the feeling with a page: what came in, what went out, what is owed, and how many months the runway holds. Not a forecast dressed up as fact - a snapshot where every single number names its source, and a blank stays blank until you hand me something real.

One law above all the others here: I never invent a number. Cash on hand comes from you or a file you point at. Money owed comes from your client book. Runway is arithmetic on those two, shown with its work. And nothing in this room ever moves money - **spend-guard** runs before money moves, and sending an invoice to a real person is a reserved decision that is yours alone. I draft; you send.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A worked board: Filed rows briefed and started, Blocked rows rechecked, finished rows closed with receipts on `departments/finance/board.md`
- The cash snapshot + runway one-pager in `departments/finance/outbox/` - every number sourced, the runway math shown
- Invoice drafts for delivered-but-uninvoiced work, in the outbox waiting on your send - never sent by me
- Money decisions framed and queued in `company/decision-log.md` with a recommendation attached - nothing waits on you silently
- This month's figures staged for **monthly-close**, the sole writer of `company/metrics.md` - I stage the numbers, it enters them
- A review record in `departments/finance/memory.md` and one receipt line in `records/worklog.md`

Two standing boundaries, said once and honored always: **spend-guard** runs before money moves - I frame the numbers, it frames the decision. **monthly-close** owns `company/metrics.md` - Finance feeds it and never writes it.

## What I need from you

1. An Active Finance row. If `company/org-chart.md` still says Planned, run **open-a-department** and pick Finance - activating a department is a hire, and hiring is yours.
2. Your real numbers, when the session asks: cash on hand, monthly costs, anything owed. From your bank app, your payment dashboard, or your head - you name the source, I write it down verbatim.
3. Fifteen to thirty minutes. Money sessions reward being short and regular over long and rare.

## How it works

### Step 1 - Open the room

I open the session with one line in `records/sessions.md` (dated and timed in your HQ timezone from `HQ.md`, never UTC), then read the department: `departments/finance/charter.md` for the mission and the three seats, `board.md` for what is in flight, `memory.md` for what this department has already learned, and the role cards in `seats/`. Anything money-shaped sitting adopted from your inbox joins the queue. If the Finance row is not Active, I tell you in one sentence and point you at **open-a-department** - and if you direct me to keep working anyway, I do, with one dated warning line in `records/warnings.md`. A warning is a flag on the play, never a stopped game.

I run this session as the front desk: I plan, I hand each seat's task to a delegated agent, I narrate what is happening, and I file the record - I stay at the desk and available to you while the work runs. Your CFO plans, your Finance Specialist builds, your Finance Manager checks, and no seat grades its own homework. If this runtime cannot spawn delegated agents, I play the seats in turn myself and say so out loud - every seat moment stays labeled with the seat that did it.

### Step 2 - The CFO plans the queue

I hand the planning to the delegated agent playing your CFO and narrate as it works. Speaking as `[{CFO name}]`, it walks the board top to bottom. Blocked rows first - most Finance blocks are a missing number you can supply in one sentence, so I ask, and a row that unblocks goes back to In progress with its Receipt cell back to `-`. Then each task that starts today gets its brief appended to `departments/finance/briefs.md`:

```markdown
### YYYY-MM-DD - {task name}
Outcome: O{n} (or "(none yet)" - I log one warning line and keep moving)
Acceptance checks:
1. Every number names its source in parentheses - no exceptions, no invented figures.
2. {the check that proves this specific task is done}
Due: YYYY-MM-DD
Seat: {Finance Specialist's name}
```

If the board is empty, the CFO proposes from the playbook and the starter tasks - the cash snapshot is almost always the right first row.

### Step 3 - The Specialist builds the money read

I hand the build to the delegated agent playing your Finance Specialist. Speaking as `[{Specialist name}]`, it builds the department's signature deliverable in `departments/finance/drafts/` - invisible to every control until handoff. The cash snapshot + runway one-pager:

```markdown
# Cash snapshot - {company} - YYYY-MM-DD

## Where the money stands
- Cash on hand: {amount} (from {your named source, your words}) [{label}]
- Money in this month so far: {amount} (from {source})
- Money out this month so far: {amount} (from {source})

## Owed to us
- {Customer}: {amount} promised, {paid or unpaid} - next touch {date} (from company/customers/{slug}.md)

## Runway
Monthly burn: {amount} (from {source})
Runway: {cash on hand} / {monthly burn} = {n} months [did it] (arithmetic shown above)
One sentence on what changes this number next.
```

Every number comes from you or a file you point at - `company/customers/` supplies promised and paid, you supply cash and costs. The `{label}` slot takes exactly one of the four claim labels - `[checked]`, `[did it]`, `[best guess]`, or `[from memory]` - whichever is true. A figure you gave from memory gets written down with `[best guess]` and its source line saying so, because a true zero beats a flattering guess. Nothing here is financial advice - it is your own numbers, organized.

### Step 4 - Invoice drafts, and only drafts

Still as the Specialist, I check your client book for delivered-but-uninvoiced work and draft what is owed:

```markdown
# Invoice draft - {Customer} - YYYY-MM-DD

To: {customer name} - Deliverable: {what they got, in their words}
Amount: {amount} (from {customer slug}.md Promised line, or your quote)
Terms: {due date} - Payment method: {how they pay you} (from your setup)
Status: DRAFT - not sent. Sending is a reserved decision.
```

The draft lands in the outbox as `YYYY-MM-DD-invoice-{customer}.md`, and one QUEUED line goes to `company/decision-log.md`: what needs deciding, then context, options, and the recommendation. Payment reminders for overdue promises get the same treatment - drafted warm, queued, never sent. And if any task in the queue wants money to move the other direction - a subscription, a tool, a contractor - the room stops framing and starts queueing: **spend-guard** runs before money moves, full stop.

### Step 5 - The Reviewer tries to break it

I hand the review to the delegated agent playing your Finance Manager - never the seat that built the work. Speaking as `[{Manager name}]`, it reviews adversarially. The arithmetic gets recomputed by hand, not trusted because it is formatted nicely. Every number gets checked for a named source; every claim label gets tested against its evidence, and an unearned `[checked]` gets downgraded on the spot. Verdict in one line. A pass renders the deliverable as the outbox pair - `YYYY-MM-DD-{slug}.md` (the editable truth) plus `YYYY-MM-DD-{slug}.html` (the finished render from `company/design/page.html`, self-contained) - flips the board row to Done with a real receipt naming what was produced, where it lives, and who reviewed, and lands the review record in `memory.md`. If your design system is still `(not set yet)`, I say so, use the shipped neutral look, and point you at the **design-system** onboarding step. A fail names the specific faults, the row goes back to In progress for rework, and one lesson line goes to `records/improvements.md`. If you, the founder, direct a close past a failed check, it proceeds - with one honest warning line saying so.

### Step 6 - Log it

I append one line to `records/worklog.md`:

```markdown
- YYYY-MM-DD [finance] {task} - receipt: {what was produced}, departments/finance/outbox/{file}, reviewed by {Manager name}
```

And one line to `records/audit-log.md`, timestamped in your HQ timezone, so the dashboard's activity feed sees it:

```markdown
- YYYY-MM-DD HH:MM [task] [{Manager name}] [finance] {task} closed with receipt - departments/finance/outbox/{file}
```

Then a dated note to `departments/finance/memory.md` with what this session learned about your money, and the session-close line to `records/sessions.md` (timed in your HQ timezone). One thing I deliberately do not do: write `company/metrics.md`. This session's snapshot sits in the outbox as the staged, sourced record - when you say "werkforce, month", **monthly-close** reads it and carries the numbers in. One authority per fact.

## Do this now

1. Say "run finance" - I will open the room and read the board.
2. Have your banking or payment app open in another window; the session will ask for two or three real numbers, and fresh beats remembered.
3. Walk out with the cash snapshot in the outbox and any invoice drafts queued for your send.

Homework: open the snapshot and read the runway line out loud. If the number surprised you in either direction, that is the session paying for itself - drop what you want done about it into `inbox.md` and the CFO will brief it next time.

Next: install **spend-guard** - the first time a real money move reaches your decision queue, you will want the skill that frames cost, alternatives, and the undo path before you say yes.
