---
name: sales-department
description: 'Run Sales'' working session today and walk out with your pipeline honestly worked - every name in your customer book staged with evidence, the overdue touches surfaced, and warm outreach drafted for you to send. Referral- and partnerships-first: warm introductions earned by delivered work, never cold blasting. Planned by the CRO seat, worked by the Account Executive, checked by the Sales Manager. Use when you say "run sales", "sales session", "work my pipeline", "run a pipeline pass", "draft my follow-ups", "work the sales board", "pipeline pass". Open Sales with open-a-department first; then run this room every week.'
---

# Sales Department - the room where interest becomes money, warmly

Most small-company sales dies one of two deaths: the pipeline nobody looks at,
or the cold blast nobody answers. Your Sales department runs a third way -
referral- and partnerships-first. The people most likely to pay you are the
ones your delivered work can reach through a warm introduction, and the
pipeline is worked from evidence, not vibes: every name has a stage backed by
something real and a next touch with a date.

This skill runs one Sales session. Your three seats each play their part - the
CRO plans the motion and writes the acceptance checks, the Account Executive
works the book and drafts the outreach, the Sales Manager tears at the work
before it counts. I run the session as the desk you talk to: I hand each seat's
task to a delegated agent and stay here with you while the work runs, narrating
what each seat did. If this runtime cannot spawn delegated agents, I play the
seats in turn, in this one session, and say so out loud - either way every seat
moment is labeled with the seat that did it. By the end your pipeline is current
and your outreach drafts sit in the outbox waiting on the only send button that
exists: yours. (One reading note, since the words collide: Account Executive is
a Sales role title; the seat words are Planner, Worker, Reviewer.) No seat
grades its own homework, and nothing customer-facing ever sends itself.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- One worked session of `departments/sales/` - the board moved, Blocked rows rechecked
- The pipeline pass over `company/customers/` - every name's stage confirmed
  against evidence, next touches set, the overdue names named
- Outreach drafts as the outbox pair in `departments/sales/outbox/` -
  `YYYY-MM-DD-<slug>.md` (the editable truth) plus `YYYY-MM-DD-<slug>.html`
  (the finished render in your company design system) - warm introduction asks,
  follow-ups, referral thank-yous - drafts only, every time
- Sends queued in `company/decision-log.md` - sending anything to a real person
  outside the company is yours alone
- A review record in `memory.md`, receipts on the board, one line each in
  `records/sessions.md` and `records/worklog.md`

## What I need from you

1. Sales showing Active on `company/org-chart.md` with its three seats named.
   If it is still Planned, run **open-a-department** first - it consumes this
   skill's references and staffs the room.
2. A customer book with at least one real name in it - **customer-book** owns
   that shelf; if it is empty I will offer to start it from what you tell me.
3. About thirty minutes. You approve the plan and send what you choose to send.

## How it works

### Step 1 - Open the room

First I get us on the record so the session exists before any work does. I find
your HQ and append one line to `records/sessions.md`:
`- YYYY-MM-DD HH:MM opened - focus: sales session` (every timestamp I write or
speak is in your HQ timezone from `HQ.md`, never UTC). Then I read the
department in one pass: `charter.md`, `board.md`, `playbook.md`, `memory.md`,
and the three role cards in `seats/`. Blocked rows get their recheck run first -
if the blocker cleared, the row moves back and the worklog gets a line. If
anything is malformed or missing, I append one dated line to
`records/warnings.md`, tell you in one sentence, and keep moving. A warning is
a flag on the play, never a stopped game.

### Step 2 - Plan the motion (Planner facet - your CRO)

I hand the planning to a delegated agent playing the CRO seat and stay at the
desk with you; if the runtime cannot spawn one, I play the seat in turn and say
so. The CRO picks this week's motion with you: the pipeline pass plus ONE warm
motion - a referral ask, a partner introduction path, or the follow-up batch,
whichever the book says is ripest. The CRO writes the brief to `briefs.md`
before any draft exists - outcome served, numbered acceptance checks someone
else could fail it on, due date, and the Worker's given name in the Seat line -
and the work lands on `board.md` as a Filed row. I read the brief back to you in
a sentence before the work starts.

### Step 3 - Work the book (Worker facet - your Account Executive)

I hand the brief to a delegated agent playing the Account Executive seat and
stay at the desk (same fallback: if delegated agents are unavailable, I play
the seat in turn and say so). The seat walks every name in `company/customers/`:
stage confirmed against its evidence (a `promised` with no promise on record
gets flagged, not assumed), `Next touch:` set with a date, the three most
overdue names put in front of you. Then the week's drafts get written in
`drafts/` - short, human, in your voice from `company/profile.md`, each one
anchored to something true from the History lines. No invented familiarity, no
manufactured urgency; claims carry their labels. Craft boundaries: a partner
note is **partner-outreach**'s craft; call prep and debriefs
are **discovery-calls**'; this room decides who and why.

### Step 4 - Ship drafts, queue sends

Finished drafts move to the outbox as a pair: `YYYY-MM-DD-<slug>.md` is the
editable truth, and I render `YYYY-MM-DD-<slug>.html` from
`company/design/page.html` so what you hand off is polished, not raw notes. (If
your design system is `(not set yet)`, I say so, use the shipped neutral
template, and point you to the design-system onboarding step - **design-system**
owns `company/design/`.) Every draft that would reach a real person gets a
QUEUED line in `company/decision-log.md` naming the recipient and the ask. I
draft; you send. Before you do, **send-guard** is the one-minute check worth
running.

### Step 5 - Check the work (Reviewer facet - your Sales Manager)

I hand the finished drafts to a delegated agent playing the Sales Manager seat -
never the seat that wrote them, because no agent grades its own homework - and
stay at the desk (same fallback if delegated agents are unavailable). The review
is adversarial: every acceptance check re-tested, stage moves audited against
evidence, drafts read for overclaiming against `company/business-model.md`'s
"What we can deliver today", and any drift from warm motion into cold-outbound
volume flagged by name. Faults go back to the drafting seat for another round
until a round comes back clean. Verdict and faults go to `memory.md` as the
review record; the board row moves to Done only with a receipt.

### Step 6 - Log it

One line appends to `records/worklog.md` with the receipt - what was drafted,
where it lives, who reviewed. And one line appends to `records/audit-log.md` in
the master-log shape, timestamped in your HQ timezone:

```markdown
- YYYY-MM-DD HH:MM [task] [{Sales Manager's name}] [sales] {motion} drafted to outbox, reviewed to zero faults - departments/sales/outbox/YYYY-MM-DD-<slug>.md
```

Anything the session taught worth keeping goes to `memory.md` under today's
date. Then the session closes: `- YYYY-MM-DD HH:MM closed - {one-line recap}`
in `records/sessions.md`, and I read you the day in three beats - what got
drafted, what is queued for your send, what next week's session should pick up.

## Do this now

1. Say "run sales" and let the room open.
2. Walk the pipeline pass with me - confirm or correct the stages I read back.
3. Pick the week's one warm motion and approve its brief.
4. Read the drafts in the outbox and send only what you would say yourself.

Homework: open `company/customers/` and count the names sitting at `talking`
with no next-touch date - each one is money going cold politely.

Next: if your HQ is still finding its feet, `company/onboarding.md` names the
step that comes first - **onboarding** owns that checklist. Otherwise, if the
book is thin, run **customer-book** to put every real name you have on the
shelf - the pipeline pass only works on names that exist.
