---
name: customer-book
description: Every customer and every lead gets one plain file in your HQ - who they are, what stage they sit in, what was promised, what was paid, and when the next touch is due - so nobody who showed interest ever silently goes cold. Use when you say "add a lead", "add a customer", "who needs a touch", "update the client book", "move them to paid", "what did we promise them", "show me the book". Open a file the moment a real name shows interest; sales-department runs its weekly pipeline pass over this same book, and monthly-close tallies it.
---

# Customer Book - one file per name, so nobody goes cold

Most small companies do not lose deals to rejection; they lose them to silence. Someone says "this sounds interesting," life happens for two weeks, and by the time anyone remembers, the interest is gone. The customer book is the cure: one short file per name in `company/customers/`, holding exactly five facts - stage, what was promised, what was paid, when the next touch is due - plus a dated history of everything that actually happened. Deals die of silence, not rejection.

This is your CRM, except it is plain files you own, readable in any text editor, and every other part of your workforce reads the same book. The book records what people actually said and did - never what we hope they meant. A stage moves on evidence, a promise is written in their words, and a blank stays blank until something real fills it.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- One file per customer or lead at `company/customers/<slug>.md` - the exact shape `os/formats.md` names, nothing extra
- A book walk on demand: every name, its stage, and who needs a touch today, overdue names first
- Stage moves that only happen on something the customer said or did, each one recorded as a dated History line
- The promised-vs-delivered read: every open promise checked against a receipt, so you know what is owed before the customer has to remind you
- Outreach drafts filed in a department outbox for YOU to send - I draft; you send

One boundary map, so the book stays one book: **sales-department** runs its weekly pipeline pass over these files, **client-delivery-department** reads them to start onboarding, **customer-care** builds the onboarding paths and churn watchlists, and **monthly-close** is the only skill that turns Paid lines into `company/metrics.md`. This skill owns the files themselves.

## What I need from you

1. An installed HQ (run **install-your-werkforce** first if there is none).
2. A real name and how they showed up - a reply, a referral, a call, a form.
3. For money and promises: the actual words and numbers. I write down what happened, not what we wish had happened.

## How it works

### Step 1 - Add a name

Tell me who they are and how they arrived. I create `company/customers/<slug>.md` - slug is the name in lowercase kebab-case - in the exact lawful shape:

```markdown
# {Customer or lead name}
Stage: lead
Promised: (not set yet)
Paid: (not set yet)
Next touch: (not set yet)

## History
- {{DATE}} Added to the book - {how they showed up, in one line}.
```

The six stages, exactly: `lead | talking | promised | paid | delivered | dormant`. New names start at `lead` unless the facts already put them further - someone who paid you last month enters at `paid`, with the History saying so. If a file for that slug already exists, I do not overwrite it; I show you what is there and we update it instead. `Next touch:` gets a date and an action before we finish - a name with no next touch is how silence starts.

### Step 2 - Walk the book

Say "who needs a touch" and I read every file in `company/customers/` and give you the honest board, `[checked]` because I just read it:

```markdown
OVERDUE  - Acme Co (talking) - next touch was 2026-07-14: send the revised scope
TODAY    - Rivera Design (promised) - confirm the start date
NO TOUCH - Ben Okafor (lead) - no next touch set
UPCOMING - Sana Iqbal (paid) - 2026-07-24: two-week check-in
DORMANT  - 3 names resting - say "show dormant" to see them
```

Overdue first, then today, then names missing a next touch entirely - those are the leaks. For each name we pick one of three moves: set or reset the next touch, draft the touch now (Step 5), or move the name to `dormant` with a History line saying why. Dormant is honest rest, not deletion - dormant names keep their file and can wake any day.

### Step 3 - Move a stage

A stage moves only when the customer said or did something real. "They seemed excited" keeps a name at `talking`; "they said yes to the March package at $1,500" moves it to `promised` - and their words go in the file. Two edits, every time: the `Stage:` line changes in place, and one dated History line records what happened and why the stage moved:

```markdown
Stage: promised
Promised: March package - two pages plus setup, $1,500, start by 2026-08-01

## History
- 2026-07-20 Said yes on the call: "let's do the March package" - start by Aug 1. Stage: talking -> promised.
```

The two flips with house rules: `paid` happens only when you tell me money actually arrived - amount and where you saw it ("$1,500, my payment dashboard") - because monthly-close will tally these lines and a flattered Paid line becomes a false number in your metrics. `delivered` wants a receipt - an outbox file or a worklog line that proves the work exists; if you delivered it yourself and tell me to flip it, the flip proceeds on your word - the History line records your word as the evidence, and I append one warning line to `records/warnings.md` noting there is no receipt on file. And when the evidence points the wrong way - they went quiet, the budget vanished, the answer was really a no - I say so and recommend `dormant`. A true zero beats a flattering guess; keeping names that will never answer just hides the real state of your book.

### Step 4 - The promised-vs-delivered read

Say "what did we promise" and I check every name at `promised` or `paid`: the `Promised:` line against the evidence that it was delivered - a receipt in `records/worklog.md`, a file in a department outbox, a History line saying it shipped. What comes back is the debt list:

```markdown
- Rivera Design: promised two pages plus setup by Aug 1 - no receipt yet, 12 days left [checked]
- Sana Iqbal: promised the audit - delivered 2026-07-10, receipt in worklog [checked]
- Acme Co: promised "a quick look at their funnel" - no due date was ever set [checked]
```

An open promise with no receipt and a near date is your real to-do list - it outranks everything else, because it is owed to a person who paid or is about to. If a promise has no due date, we set one now and append the History line. When Client Delivery is open, this read is exactly what its onboarding checklist starts from.

### Step 5 - Draft the touch

When a name needs a message, I draft it - in your voice from `company/profile.md`, grounded in that customer's History so it reads like you remember them, because the file does. The draft lands as a file in a department outbox: `departments/sales/outbox/{{DATE}}-<slug>-touch.md` before the money, `departments/client-delivery/outbox/` after. If neither department is open yet, I give you the draft right here, append one line to `records/warnings.md` as `- {{DATE}} [customer-book] no department outbox for outreach draft - handed to founder in session`, and keep moving - **open-a-department** gives drafts a proper home.

Then the line that never bends: I draft; you send. Sending anything to a real person outside the company is a reserved decision, yours alone - the one pause in this whole skill. Once you tell me it went out, the History line records it: `- {{DATE}} Sent the follow-up (founder sent). Next touch: 2026-07-27.`

### Step 6 - Log it

Before I close, I tell you the book pass is done and the record is being squared. Every session with the book ends with the record straight: each touched file carries its dated History line, each edited header line holds the current truth, and every name we discussed has a `Next touch:` with a date - or an honest `(not set yet)` plus one warning line in `records/warnings.md` so the gap is on the record, not in your head. If the session produced a deliverable - a debt list you acted on, a batch of drafts in an outbox - I append one line to `records/worklog.md`:

```markdown
- {{DATE}} [company] Customer book pass - receipt: {N} files updated in company/customers/, {what was drafted or flagged}, reviewed by {{FOUNDER}}
```

Then I append one line to the master audit log, `records/audit-log.md`, timestamped in your HQ's timezone from `HQ.md` (never UTC):

```markdown
- {{DATE}} {{HH:MM}} [note] [customer-book] [company] Customer book pass - {N} files updated, {what moved} - company/customers/
```

That done, I say what changed and where it landed - which files moved, which touches are drafted and waiting on you.

## Do this now

1. Name the three people most likely to pay you something this quarter - we open their files right now, real History from day one.
2. Say "who needs a touch" and look at the overdue list without flinching.
3. Pick the one name where silence is costing you most, and have me draft the touch.

Homework: open `company/customers/` in your text editor tonight and read one file top to bottom - if the History would embarrass you in front of that customer, it is fiction, and tomorrow we fix it to what actually happened.

Next: install **sales-department** - it runs the weekly pipeline pass over this book, so the walking happens on a cadence instead of when you remember.
