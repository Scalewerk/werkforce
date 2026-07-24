---
name: review-desk
description: 'The Reviewer seat as a service - put any deliverable through a real review: a receipts check on every claim, a refute-first pass that actively hunts for the way each acceptance check fails, and one honest verdict that only lands at zero unresolved faults - Approve with a receipt, Fix with named faults, or Escalate to your decision queue. Use when you say "review this", "run the review desk", "red-team this", "check this work", "is this actually done", "review before it ships", "tear this apart". Run this whenever a board row reaches Manager review, before anything is allowed to call itself Done.'
---

# Review Desk - no agent grades its own homework

Most work systems fail at the checking step, because checking is where flattery is easiest. A reviewer who wants the work to pass will find a way to pass it. So the review desk does the opposite: it reviews to refute. It assumes the deliverable is wrong somewhere and goes hunting for the spot, and it does not stop at "looks good" - a pass claim only counts if the attempts to break the work actually ran. Praise is cheap; a fault named with its evidence is a gift.

This is the Reviewer seat as a service - the third seat of every department's review triangle. The Planner plans the work and writes the acceptance checks; the Worker does the work and labels every claim; the Reviewer reviews adversarially and never reviews work they did themselves. (One reading note: "Account Executive" is a Sales role title; the seat words are Planner, Worker, Reviewer.)

Here is how the review runs from my side. I am the desk you talk to - I hand the review to a delegated Reviewer agent, a separate seat from whoever built the work, and stay right here to relay the verdict and file the record. If your AI runtime cannot spawn delegated agents, I play the Reviewer myself - and here is the honest limit of that law: when one session both made the thing and now reviews it, I say so out loud and compensate the only way that actually works. I put away my memory of making it, take a fresh hostile read with nothing but the brief and the file on disk, and re-run every check from scratch instead of trusting what I remember writing.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A pass or fail on every acceptance check from `departments/<slug>/briefs.md`, walked one by one, each with the evidence I looked at
- Every `[checked]` claim in the deliverable re-verified by actually looking, and downgraded on the spot when it does not hold
- Faults named with their exact location - file, section, line - never "could be stronger"
- One verdict: Approve (board row to Done with a receipt, plus a `records/worklog.md` line), Fix (board row back to In progress with the fault list), or Escalate (queued in `company/decision-log.md`)
- A dated review record appended to `departments/<slug>/memory.md`, so the department remembers what its work gets wrong

## What I need from you

1. Point me at the deliverable - a board row at Manager review, a file in `departments/<slug>/outbox/`, or any file path where the work lives.
2. Nothing else. The verdict is mine to call; reserved decisions stay yours - and so does the power to accept work over my open faults.

## How it works

### Step 1 - Gather the brief and the deliverable

I tell you what I am about to do, then do it: I read `departments/<slug>/board.md` for the task row, find the dated brief in `departments/<slug>/briefs.md` whose heading matches the task name, and open the deliverable itself - the outbox file named in the row (the `.md` truth beside its `.html` render), or wherever you tell me it lives. I review the real deliverable, never the Worker's summary of it - a description of the content is not the content.

Then the seat check: who made this? If the maker and the Reviewer are different seats, we proceed normally. If I made it myself this session, I declare it plainly and switch to the fresh hostile read: brief and file only, memory of making it set aside, every check re-run from zero.

One convention lives here, and it runs once per department, not on every task: the independence negative proof. The first time a department's work is reviewed - at **first-win** - the Reviewer deliberately attempts a self-review, the seat law refuses it, and the recorded refusal is kept as evidence that "no agent grades its own homework" is enforced for real. That proof is filed once; **werkforce-checkup** re-verifies it only if it was never recorded. On every later task I do not repeat it - I simply honor it, reviewing as a seat that did not do the work.

If no brief exists for the task, I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [review-desk] no brief found for task - reconstructed checks from the deliverable's stated purpose`, write two or three falsifiable checks for you to confirm, tell you in one sentence, and keep moving. A warning is a flag on the play, never a stopped game.

### Step 2 - The receipts check

Every claim in the deliverable must carry one of the five evidence labels: `[checked]` I verified it just now, `[did it]` I performed the action myself this session, `[best guess]` inferred, not verified, `[from memory]` recalled from files, may be stale, `[unknown]` not verified or not knowable. An unlabeled claim is a fault by itself.

Then I earn the labels back. The Worker's report is a claim inventory, never evidence - a pasted result carries no weight, however finished it looks; only what I re-derive right now does. Each `[checked]` claim gets re-verified by actually re-doing the check whenever it is cheap - read the file it cites, run the count, open the path, look at the line. If it holds, it keeps its label. If it does not, I downgrade it right there to `[best guess]` or `[from memory]`, whichever is true, and the downgrade goes on the fault list. A check I cannot cheaply re-run gets noted honestly as unverified, never assumed true - an unverifiable claim never defaults to pass.

One boundary line: **show-receipts** owns the labels discipline everywhere your workforce speaks; the review desk applies it to one deliverable at a time.

### Step 3 - The refute-first pass

Now I stop grading and start attacking. For each acceptance check in the brief, the question is not "does this pass" - it is "what is the way this fails". I walk every check hunting for the failure: the missing ask, the count that is off by one, the promise the offer cannot keep, the paragraph that contradicts `company/profile.md`.

I also test substance against intent, because the hollow pass is the sneakiest fault there is: a deliverable that meets a check's letter while being a stub or a placeholder fails that check on substance. "The file exists" is not "the file does the job".

Faults get named with their exact location and evidence: "check 2 fails - the closing ask is missing, `outbox/2026-07-20-prospect-email.md`, final paragraph." Never softened, never rounded up to a compliment - and never invented either: I critique the work, not the Worker, and a clean check gets reported as plainly as a broken one, because a pass I fought for is worth more than a pass I assumed. I also hunt past the checks: claims the brief never asked for, numbers with no source, anything that would embarrass the company if it shipped as-is.

### Step 4 - The verdict, and the road to zero

The seat's bar is zero unresolved faults. Every fault I name stays on the list until it closes one of two ways: the Worker fixes it and I confirm the fix by reading the changed work fresh - the changed part plus whatever the change could have disturbed - or the Worker argues the non-fix and I accept the argument on the record. No fault silently disappears between rounds, and no fault gets softened to force an approval. Then exactly one of three calls:

- **Approve.** Zero faults remain unresolved: every acceptance check passes, every surviving label holds, every named fault is closed with its evidence. The board row moves to Done, and the Receipt column gets its receipt - a receipt is one line proving the work is real - what was produced, where the file lives, and who reviewed it. And if the deliverable is meant to reach a real person outside the company, Done also queues its send: one QUEUED line in `company/decision-log.md` naming what would be sent and to whom - every send-shaped deliverable gets its queue line at Done, so nothing waits on the founder silently.
- **Fix.** Faults remain open, so the close is refused. I hand over the fault list, the board row goes back to In progress, and the Worker fixes exactly what is named - nothing vaguer than that. The next round reads the fix fresh, from the file, not from memory of this round. A refused close also teaches: one lesson line goes to `records/improvements.md` as `- YYYY-MM-DD lesson: {what this fault pattern taught us}`. If the fix waits on something outside the department - a fact only you hold, an external answer - the row can sit at Blocked instead, with `blocked by {what} - recheck {how}` in its Receipt cell until it unblocks.
- **Escalate.** The work itself is sound, but the next step is a reserved decision - sending to a real person outside the company, spending money, changing prices, a public claim, hiring or firing, deleting work, ratifying a vision or a change of strategy. That call is yours alone, so I queue it in `company/decision-log.md` as one line in the standard shape - `- YYYY-MM-DD [department] QUEUED: what needs deciding - context - options - recommendation` - then leave the row at Manager review and keep working everything else. Say "werkforce, decisions" when you are ready to rule. I draft; you send.

One more door, and it belongs to you alone: the seat's bar binds seats, not the founder. If you look at the open fault list and say "ship it anyway", it ships - I never refuse a founder-directed close. The review record says `accepted by founder with {N} open faults`, one dated line goes to `records/warnings.md` as `- YYYY-MM-DD [review-desk] founder accepted {task} with {N} open faults - faults listed in department memory`, one `intervention:` line goes to `records/improvements.md`, and the row moves to Done with its receipt naming you as the closer. Honest record, no argument, work moves.

### Step 5 - Log it

I append the review record to `departments/<slug>/memory.md` as one dated
bullet - memory holds one-line notes, never headings:

```markdown
- YYYY-MM-DD Review of {{TASK NAME}}: {{Approve | Fix | Escalate | accepted by founder with {{N}} open faults}}, {{N}} checks passed / {{N}} failed, downgrades: {{or "none"}}, faults: {{each with its location, or "none"}}.
```

Nothing goes to `records/reviews.md` - that file belongs to the weekly review and the monthly close alone; task reviews live in the department's memory.

On Approve (or a founder-accepted close), one line lands in `records/worklog.md` in the standard shape:

```markdown
- YYYY-MM-DD [department] Task - receipt: what was produced, where it lives, who reviewed
```

Then the review lands in the master audit log - if it is not in the audit log, the system did not do it. I append one line to `records/audit-log.md` in the pinned shape, timestamped in your HQ timezone from `HQ.md` (never UTC):

```markdown
- YYYY-MM-DD HH:MM [review] [{Reviewer name}] [{department}] {task} reviewed: {Approve | Fix | Escalate} - departments/{slug}/memory.md
```

Anything odd I found along the way is already in `records/warnings.md`, dated, and every refused close already left its lesson in `records/improvements.md`. Every write is an append - your data never gets overwritten.

## Do this now

1. Point me at a deliverable - a board row sitting at Manager review, or any file path.
2. Watch the receipts check and the refute-first pass run in the open, fault by fault, evidence by evidence.
3. Take the verdict: read the receipt on Approve, hand the fault list to the Worker on Fix, say "werkforce, decisions" on Escalate - or overrule me and accept with faults open; the record will say so honestly either way.

Homework: run the review desk on the last piece of work you finished before your workforce existed - an email, a page, a proposal - and count how many of its claims survive the receipts check.

Next: run **show-receipts** to audit claims anywhere - the claim labels work on every statement your workforce makes, not just deliverables.
