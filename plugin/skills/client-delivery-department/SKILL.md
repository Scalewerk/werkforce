---
name: client-delivery-department
description: Run Client Delivery's working session today and walk out with every paying customer honestly served - an onboarding checklist for the newest one, a promised-vs-delivered read across every open promise, and handover artifacts that prove the work. Planned by the Chief Delivery Officer seat, worked by the Client Delivery Specialist, checked by the Client Delivery Manager. Use when you say "run client delivery", "delivery session", "onboard my new customer", "what did we promise", "delivery status", "build the handover", "work the delivery board". Open Client Delivery with open-a-department first; then run this room whenever money has changed hands.
---

# Client Delivery Department - the room where promises get kept

Selling makes promises; this room keeps them. The fastest way to lose a
customer you worked hard to win is silence after payment - and the fastest way
to earn the referral that feeds your next sale is delivery so visible the
customer can point at it. Your Client Delivery department runs on one honest
question, asked out loud: what did we promise, and where is the proof it was
delivered?

This skill runs that loop as one Client Delivery session. Your three seats each
play their part - the Chief Delivery Officer plans and writes the acceptance
checks, the Client Delivery Specialist does the delivery work, the Client
Delivery Manager tries to tear it apart before it reaches a customer. I run the
session as the desk you talk to: I hand each seat's task to a delegated agent
and stay here with you while the work runs, narrating what each seat did. If
this runtime cannot spawn delegated agents, I play the seats in turn, in this
one session, and say so out loud - either way every seat moment is labeled with
the seat that did it. (One reading note: Chief Delivery Officer, Client Delivery
Specialist, and Client Delivery Manager are this department's role titles - the
seat words underneath them are Planner, Worker, Reviewer.) No seat grades its
own homework, nothing reaches Done without a receipt, and nothing reaches a real
customer without your say-so - selling belongs to Sales; this room keeps what
was sold.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- One worked session of `departments/client-delivery/` - the board moved,
  Blocked rows rechecked
- An onboarding checklist for your newest paid customer in
  `departments/client-delivery/outbox/YYYY-MM-DD-<slug>.md` - activation
  defined, every step ending in a dated checkpoint you can observe
- The promised-vs-delivered read: every open promise from `company/customers/`
  with its honest status - delivered with receipt, on track, or behind
- Handover artifacts for finished work - what was produced, where it lives,
  what the customer does next
- Customer messages as drafts only - the founder sends, every time
- A review record in `memory.md`, receipts on the board, one line each in
  `records/sessions.md` and `records/worklog.md`

## What I need from you

1. Client Delivery showing Active on `company/org-chart.md` with its three
   seats named. If it is still Planned, run **open-a-department** first - it
   consumes this skill's references and staffs the room.
2. At least one customer at `paid` in `company/customers/` - **customer-book**
   owns that shelf and this room reads it.
3. About thirty minutes. You confirm what was actually promised where the files
   are silent - I never guess a promise into existence.

## How it works

### Step 1 - Open the room

I append the session-open line to `records/sessions.md` - `- YYYY-MM-DD HH:MM
opened - focus: client delivery session` (every timestamp I write or speak is
in your HQ timezone from `HQ.md`, never UTC) - then read the department in one
pass: `charter.md`, `board.md`, `playbook.md`, `memory.md`, and the three role
cards in `seats/`. Blocked rows get their recheck run first. If anything is
malformed or missing, I append one dated line to `records/warnings.md`, tell you
in one sentence, and keep moving. A warning is a flag on the play, never a
stopped game.

### Step 2 - Plan the session (Planner facet - your Chief Delivery Officer)

I hand the planning to a delegated agent playing the Chief Delivery Officer seat
and stay at the desk with you. (If the runtime cannot spawn a delegated agent, I
play this seat in turn and say so.) It reads `company/customers/` for every name
at `paid` and every open promise, then picks the session's work: the newest
customer's onboarding, the promise most behind, or the handover most overdue.
The brief goes to `briefs.md` before any work exists - outcome served, numbered
acceptance checks, due, Seat - and lands on `board.md` as a Filed row.
Onboarding checks are observable on purpose: a checkpoint is something the
customer DID, never something they felt. Then I tell you what got filed and for
whom before the work begins.

### Step 3 - Do the delivery work (Worker facet - your Client Delivery Specialist)

I hand the brief to a delegated agent playing the Client Delivery Specialist
seat and stay at the desk. (Same fallback: if delegated agents are unavailable,
I play this seat in turn and say so.) It builds in `drafts/`, invisible to every
control until handoff: the onboarding checklist with dated checkpoints, the
promised-vs-delivered table naming its evidence per row - a receipt, an outbox
file, or the honest word "behind" - and the handover artifact for anything
finished. Status claims carry their labels; a promise with no written record
gets flagged to you, not papered over. Craft boundary: care rhythms, churn
watchlists, and check-in sequences are **customer-care**'s craft; this room
delivers the work itself.

### Step 4 - Ship to the outbox, queue the messages

Finished pieces move from drafts to `departments/client-delivery/outbox/` as a
pair under today's date: `YYYY-MM-DD-<slug>.md` is the editable truth, and I
render `YYYY-MM-DD-<slug>.html` from `company/design/page.html` so what you hand
off is polished, not raw notes. (If your design system is `(not set yet)`, I say
so, use the shipped neutral template, and point you to the design-system
onboarding step - **design-system** owns `company/design/`.) Anything meant for
the customer's eyes - the welcome note, the status update, the handover message
- stays a draft and gets a QUEUED line in `company/decision-log.md`. Sending to
a real customer is a reserved decision: I draft; you send.

### Step 5 - Check the work (Reviewer facet - your Client Delivery Manager)

I hand the finished draft to a delegated agent playing the Client Delivery
Manager seat - a different seat than the one that built, because no agent grades
its own homework - and stay at the desk. (Same fallback: if delegated agents are
unavailable, I play this seat in turn and say so.) It tests every acceptance
check, audits the promised-vs-delivered table against the customer files and the
worklog, and hunts the gap that embarrasses you later: the checkpoint nobody can
observe, the "delivered" with no receipt. Verdict and faults go to `memory.md`;
faults go back to the builder seat for another round until one comes back clean;
the board row moves to Done only with a receipt. If a review refuses a close,
one lesson line also goes to `records/improvements.md`, and if you direct a
close past the review it proceeds with one honest warning line - seat laws bind
seats, never you.

### Step 6 - Log it

One line to `records/worklog.md` with the receipt, then one line to
`records/audit-log.md` in the master-log shape, timestamped in your HQ timezone:

```markdown
- YYYY-MM-DD HH:MM [task] [{Client Delivery Manager's name}] [client-delivery] {task} shipped to outbox, reviewed to zero faults - departments/client-delivery/outbox/YYYY-MM-DD-<slug>.md
```

Then the session-close line goes to `records/sessions.md` - `- YYYY-MM-DD HH:MM
closed - {one-line recap}` - and each customer touched gets a dated History line
in their file under `company/customers/`. I close by reading you the day in
three beats: what shipped, what is queued for your verdict, what the next
session should pick up.

## Do this now

1. Say "run client delivery" and let the room open.
2. Tell me the newest customer who paid and what they were promised, in one
   sentence each - I check it against the files.
3. Approve the session's brief and watch the loop run.
4. Read the promised-vs-delivered table top to bottom - it is the truest page
   in your company today.

Homework: pick your last finished piece of client work and ask where its
handover artifact lives. If the answer is "in the emails somewhere", this room
has its next task.

Next: run **customer-care** when delivery is current - kept promises earn the
right to a care rhythm that keeps customers from quietly drifting.
