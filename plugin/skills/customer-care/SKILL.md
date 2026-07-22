---
name: customer-care
description: Keep the customers you already won - every paid name gets an onboarding path that ends in an observable checkpoint (they DID the thing, not felt good about it), a churn watchlist that names the response to every silence, and check-in drafts sitting ready for you to send. Use when you say "build the onboarding path", "check in on a customer", "churn watchlist", "this customer went quiet", "keep this customer", "care plan for this account", "are my customers getting value". Run it the week a customer pays; customer-book owns the files, this skill owns the care.
---

# Customer Care - the customer you keep costs nothing to win

Every founder knows the price of winning a customer - the outreach, the calls, the proposal, the wait. Almost nobody prices what it costs to lose one, because losing is quiet. No angry email, no cancellation call. They just stop showing up, and by the time you notice, the relationship is a memory. Most churn starts as a silence nobody had a planned response to.

Care, the way this skill builds it, is not warmth and it is not vibes. It is three concrete assets per customer: a path from "paid" to "got real value", where every step ends in something you can observe them DO - not something they feel; a watchlist of the signals that come before leaving, each with a response already named; and check-in drafts written before you need them. One honesty rule holds the whole thing up: I only ever record what you observed or what the customer said or did. No invented sentiment, no guessed usage, no "they seem happy". A true zero beats a flattering guess.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A care plan per customer - onboarding path plus churn watchlist in one file - shipped as the outbox pair `departments/client-delivery/outbox/YYYY-MM-DD-<slug>-care-plan.md` (the editable truth) and its `.html` render
- An activation checkpoint per customer: the observable behavior that means they got first real value, defined so anyone can answer "did it happen?" yes or no
- A churn watchlist where every signal - silence past a stated window, a missed checkpoint, an unanswered check-in - carries a named response, decided calm instead of improvised worried
- Check-in drafts in your voice, grounded in that customer's real History, filed in the outbox for YOU to send - I draft; you send
- The care record itself: dated History lines in `company/customers/<slug>.md`, founder-observed facts only

The boundary map, so nothing gets owned twice: **customer-book** owns the customer files - stages, Promised, Paid; I append care lines to History and touch nothing in the header - the next checkpoint date rides in the appended History line, and **customer-book**'s walk picks it up from there (or you set `Next touch:` yourself via customer-book). **client-delivery-department** runs the room where delivery happens against what was promised; my care plans land in its outbox and its board works them. **sales-department** wins the customer; I keep them.

## What I need from you

1. An installed HQ with at least one name in `company/customers/` - run **customer-book** first if the book is empty.
2. What this customer actually bought, in plain words, if their file does not already say.
3. Your observations: what they did, what they said, when you last heard from them. I build from what happened, never from what we hope.

## How it works

The care plan is real seat work, so I run it the way the charter says: I am the front desk, and I hand the drafting to a delegated agent - the Worker who builds the path and watchlist, the Reviewer who reads it back against the customer's file - while I stay here with you to relay progress and take anything new you drop in. If your runtime cannot spawn a delegated agent, I play the seats in turn myself and say so out loud. Either way every seat moment is labeled with the seat that did it.

### Step 1 - Pick the account

I read `company/customers/` and list every name at `paid` or `promised` - these are the people care applies to, and paid names with no care plan come first. We pick one; care is per-customer because a path built for "customers in general" fits nobody. I read their whole file - what they bought, every History line - so the plan starts from their reality, not a template's. If the book is empty or the file is thin, I append one line to `records/warnings.md` as `- YYYY-MM-DD [customer-care] finding - action taken`, tell you in one sentence, and we keep moving - you can tell me the facts right now and the plan gets built the same. A warning is a flag on the play, never a stopped game.

### Step 2 - Name the checkpoint

Before any path gets designed, we define what "activated" means for this customer: the single observable behavior that proves they got first real value from what they bought. The test is brutal and simple - it must be something they DID, that you can see happened, answerable yes or no. "They love the dashboard" fails. "They logged in and ran their first report" passes. "They feel onboarded" fails. "They sent us their brand assets and approved the first draft" passes. If the checkpoint cannot be observed, we redefine it until it can - a checkpoint nobody can check is a feeling wearing a costume. This one line becomes the destination the whole path points at.

### Step 3 - Build the path

Now the onboarding path: the smallest sequence of customer actions that reaches the checkpoint. Not your delivery tasks - those live on Client Delivery's board - but the things THEY do, each step ending in something observable with an expected-by date, so a missed step is visible the day it goes missing instead of the month after. I write the care plan file to `departments/client-delivery/outbox/YYYY-MM-DD-<slug>-care-plan.md`:

```markdown
# Care plan - {Customer name}
Bought: {what they paid for, in their file's words}
Activated when: {the observable checkpoint from Step 2}

## Onboarding path
| Step | Customer does | How we know it happened | Expected by |
|---|---|---|---|
| 1 | Sends the intake answers | The answers arrive in writing | {date} |
| 2 | Reviews the first deliverable | They reply with approval or changes | {date} |
| 3 | {the activation checkpoint itself} | {how you observe it} | {date} |
```

Three to five steps is the whole path - any longer and customers stop finishing it. The plan ships as a pair: the `.md` above is the editable truth, and I render a self-contained `.html` beside it from `company/design/page.html` so it leaves the building looking finished. If the design system is `(not set yet)`, I say so, use the shipped neutral look, and point you at the design-system onboarding step - **design-system** owns `company/design/`. If Client Delivery is not open yet, I hand you the plan in session, append one warning line saying so, and keep moving - **open-a-department** gives it a proper home later.

### Step 4 - Write the watchlist

Churn announces itself before it happens - in silence, not in words. So the same care plan file gets a watchlist: the observable signals that this customer is drifting, each with a threshold and a response you decided while calm. No signal is a mood; every signal is a behavior with a date attached:

```markdown
## Churn watchlist
| Signal | Threshold | Response |
|---|---|---|
| Silence | No reply or contact for {N} days | Draft the check-in; founder sends |
| Missed checkpoint | A path step {N}+ days past expected-by | Draft the nudge naming the step; offer help, not guilt |
| Unanswered check-in | {N} days after a sent check-in | Draft the short honest note: "still want this?" - queue for founder |
```

The thresholds are yours to set - I suggest defaults from what they bought and how fast the path moves, and you say the numbers. Every response is draft-shaped on purpose: the watchlist tells you when to act and hands you the words, and the sending stays yours. When a signal fires on a later pass, the response is already written down - you follow what you decided while calm instead of improvising while worried.

### Step 5 - Run the care pass

This is the step you repeat. Say "check in on {name}" or "run the care pass" and I walk each account with a care plan against its path: which checkpoints happened, which are coming due, which watchlist signals have fired - all of it `[checked]` against the file and YOUR observations, because you are the only source of what this customer did. I ask, I never assume: if you have not observed a step, it is not done, and I write the gap, not a guess. Each finding lands as a dated History line in `company/customers/<slug>.md`, append-only:

```markdown
- YYYY-MM-DD Care: hit step 2 (approved the draft, founder confirmed). Next checkpoint: first report by 2026-08-01.
- YYYY-MM-DD Care: silence signal fired - 10 days no contact. Check-in drafted to outbox; founder to send.
```

Fired signals get their response drafted immediately - a check-in, a nudge, a still-want-this note - in your voice from `company/profile.md`, grounded in their History so it reads like you remember them, filed as `departments/client-delivery/outbox/YYYY-MM-DD-<slug>-check-in.md`. Then the line that never bends: I draft; you send. Sending anything to a real person outside the company is a reserved decision, yours alone - the one pause in this whole skill. When you tell me it went out, the History line records it along with the next checkpoint date - **customer-book**'s walk reads that date from History (or you update `Next touch:` through customer-book), so this account shows alive.

### Step 6 - Log it

Before I close, I tell you the care pass is done and I am squaring the record. Each account we touched carries its dated History lines, the care plan pair exists where the receipt says, and I append one line to `records/worklog.md`:

```markdown
- YYYY-MM-DD [client-delivery] Care pass on {N} accounts - receipt: care plans and check-in drafts in departments/client-delivery/outbox/, History updated in company/customers/, reviewed by {founder}
```

Then one line to the master audit log, `records/audit-log.md`, timestamped in your HQ's timezone from `HQ.md` (never UTC):

```markdown
- YYYY-MM-DD HH:MM [task] [customer-care] [client-delivery] Care pass on {N} accounts - {signals fired} - departments/client-delivery/outbox/
```

I finish by naming what changed and where it landed. If a signal fired and the response was drafted but not yet sent, that is not a loose end - it is a queued decision, and it stays visible until you make it.

## Do this now

1. Say "build the onboarding path" for your most recently paid customer - checkpoint, path, and watchlist in one sitting.
2. Answer one question honestly: when did you last hear from each paying customer? Any answer over two weeks means a signal already fired.
3. Have me draft the check-in for the quietest account, and send it today.

Homework: open the care plan file tonight and read the checkpoint line out loud - if you cannot picture literally watching the customer do it, it is still a feeling, and tomorrow we sharpen it into a behavior.

Next: install **client-delivery-department** - it runs the room where these care plans become board work on a cadence, instead of when you remember to worry.
