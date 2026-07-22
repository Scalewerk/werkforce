---
name: fix-it
description: 'When something your workforce built breaks - a page, an automation, a document, a process - this is the repair discipline: see it fail before touching anything, change one thing at a time, prove the cause with evidence instead of re-rolling and hoping, verify the fix the exact way the thing failed, and leave a blameless postmortem line so the company never trips over this twice. Use when you say "fix it", "it broke", "this stopped working", "the page is down", "my automation failed", "why did this break", "run a postmortem". Run it the moment something breaks - fresh evidence is half the fix.'
---

# Fix It - repair what broke, then teach the company why

Something your workforce built has stopped working. The tempting move is to tear it up and rebuild - re-roll the page, regenerate the document, rewrite the automation and hope the new one lands better. That is gambling, not fixing. A re-roll that happens to work teaches you nothing, and the same failure comes back next month wearing a different shirt.

This skill runs the mechanic's discipline instead: reproduce the failure so we both see it with our own eyes, form one hypothesis, change one thing, and verify the fix the same way the thing failed. Then the part most people skip - one blameless line in the record saying what broke, why, and what now prevents it. The fix repairs the deliverable; the postmortem line repairs the company.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- The broken thing working again - verified by re-running the exact steps that showed it failing, not by "should be fine now"
- A cause you can point at, backed by observed evidence - never "probably" and never a lucky re-roll
- One `fix:` line in `records/improvements.md` - what broke, why, what now prevents it - which the weekly review reads
- A mechanical prevention where one exists: an acceptance check, a playbook SOP marked `(candidate)`, or a filed board row - never "be more careful"
- One line in `records/worklog.md` with the repair's receipt
- If a board task was stuck on this: its row flipped to Blocked with a recheck note while we work, and unblocked when we finish

## What I need from you

1. Point me at what broke - a file path in your HQ, a page, an automation, a document, or a process that went sideways - and tell me what you saw, in your own words.
2. Anything you still have from the moment it failed: the error text, a screenshot, the output, the bad version. Do not tidy anything up first - the mess is the evidence.

## How it works

### Step 1 - Stop the bleeding, save the evidence

Two questions before any diagnosis. First: is this hurting anyone right now - a customer-facing page down, a broken link in something already sent? If yes, the first move is making the pain stop, not understanding the bug - usually by undoing the most recent change, because reversing what just changed beats inventing a fix under pressure. If stopping the bleeding requires a reserved decision - sending a correction to a real person, spending money, deleting work - it queues in `company/decision-log.md` with my recommendation attached, and that queue is the one thing that waits on you.

Second: what evidence exists right now? I capture it before anything else touches it - the exact error text, the failing output, a copy of the broken file saved to the owning department's `drafts/` - because rebuilds and cleanups destroy evidence, and the postmortem gets written from records, never from memory.

If a board task is stuck on this, its row goes to Blocked with `blocked by {what} - recheck {how}` in the Receipt cell, so the board tells the truth while we work. Anything odd I find along the way gets one dated line in `records/warnings.md` as `- YYYY-MM-DD [fix-it] finding - action taken`, one sentence to you, and we keep moving. A warning is a flag on the play, never a stopped game.

### Step 2 - See it fail

Nothing gets changed until the failure has been reproduced - a fix without a reproduced failure is a guess wearing a toolbelt. What reproduction looks like depends on what broke:

- A **page**: open it and walk the exact path that fails - which link, which view, which device
- An **automation or script**: run it and capture the real output, top to bottom
- A **document**: find the wrong line and the source it should have matched
- A **process**: walk the playbook SOP step by step and mark the exact step where reality left the script

The desk - the session you are talking to - hands the reproduction to the seat that owns the broken work as a delegated agent and stays with you, so you can watch and redirect while it runs; if your runtime cannot spawn a delegated agent, the desk reproduces the failure itself and says so out loud. Either way the work is labeled with the seat that did it.

I record the reproduction steps and the failing output verbatim - the error actually emitted, not the error we expected. That real message is the raw material for everything after; a paraphrase of what it probably said diagnoses nothing.

If the failure will not reproduce, I say so plainly. We can still make a change, but it gets labeled honestly - a mitigation attempt `[best guess]`, never called a fix - and the improvements line says the cause was not confirmed. A true zero beats a flattering guess.

### Step 3 - One hypothesis, one change

Now the discipline that separates fixing from flailing. I form **one** hypothesis that explains every piece of observed evidence - not the most convenient piece - and before touching anything, I name what we would see if it is right and what we would see if it is wrong. Then the smallest change that tests it, and the exact reproduction runs again.

- Hypothesis confirmed and failure gone: on to Step 4.
- Hypothesis wrong: the change gets fully backed out, we re-observe the failure as it now stands, and form a new single hypothesis. Never a second guess stacked on an unconfirmed first one - that is how a broken page becomes a haunted one.
- No attempt is ever repeated unchanged. Every retry differs from the last for a stated reason, or it does not happen.

If the same failure survives three honest hypotheses, we are stuck, and stuck gets declared, not hidden: one warning line, an honest note of what was tried and observed, and the question queued to `company/decision-log.md` with my best recommendation. Grinding in circles is not a strategy; it is a slow way to lie about progress.

### Step 4 - Verify it the way it failed

Fixed means one thing: the exact steps from Step 2 that showed the failure now show it working - same page, same click path, same run, same document line - and I watched it happen `[checked]`. "Should work now" is not a state of the world; it is a hope with good posture. The cause statement earns its place the same way: it names the evidence that backs it, so anyone reading the record later can see why we believe it.

If a fix keeps failing the reproduction, we go back to Step 3 - or declare stuck honestly. We never ship "probably fixed."

### Step 5 - Make it not happen again

Blameless is the law here, and it is practical, not polite: if the cause statement points at a person or a seat - "the Worker rushed it" - the analysis is not done, because a person-shaped cause means a mechanism is missing. Somebody being more careful next time is not a mechanism. So we ask: what check, had it existed, would have caught this before it shipped?

The answer becomes something mechanical, sized to the failure: a new acceptance check the Planner adds to briefs like this one, a line in the owning department's `playbook.md` as a numbered SOP marked `(candidate)`, or - when the prevention is real work of its own - a fresh row Filed on the department board so it cannot evaporate into good intentions. Small failures deserve small preventions; not every stumble needs a new rule, and I will say so when it does not.

### Step 6 - Log it

The postmortem line - the whole incident in one honest breath, appended to `records/improvements.md`:

```markdown
- YYYY-MM-DD fix: {what broke} - {why, per the evidence} - {what now prevents it}
```

The weekly review reads this file and proposes exactly one change, which is how a single bad Tuesday becomes a permanently smarter company. Then the repair goes on the record in `records/worklog.md`:

```markdown
- YYYY-MM-DD [department] Fixed {what} - receipt: cause and fix, where the repaired work lives, verified by re-running the failure, reviewed by {who}
```

And one line to the master audit log, `records/audit-log.md`, timestamped in the HQ timezone from `HQ.md` - never UTC - in the shape `os/formats.md` pins (the type is `note`; there is no `fix` type):

```markdown
- YYYY-MM-DD HH:MM [note] [{seat or founder}] [{department}] Fixed {what}, cause confirmed by evidence - records/improvements.md
```

And if a board row went to Blocked in Step 1, it comes back - stage restored, Receipt cell back to `-` - so the board tells the truth again. Appends only, under today's date; nothing about the original failure gets edited away. The record keeps the scar, because the scar is the lesson.

One boundary worth naming: I fix broken work. Judging whether finished work is good belongs to **review-desk**, and the health of the HQ files themselves belongs to **werkforce-checkup**. And nobody in this building owns blame - that is the one job that stays unstaffed.

## Do this now

1. Say "fix it" and point me at the thing that broke - the sooner after the failure, the better the evidence.
2. Hand over whatever you saw when it failed, untidied.
3. Watch the loop run: see it fail, one change, see it pass - then read your postmortem line out loud.

Homework: open `records/improvements.md` and read your last few `fix:` lines in a row - if the same thing keeps breaking, that is not bad luck, that is a missing mechanism, and it is your next board row.

Next: run **review-desk** on the repaired deliverable if it is headed anywhere important - a fix proves the failure is gone; a review proves the work is good.
