---
name: show-receipts
description: The truth discipline of your whole workforce - the claim labels every agent must use, and an audit that puts any report, board, or message under the light. Teach mode tours the labels in two minutes; audit mode re-verifies every [checked] claim, re-checks stale memory against the live files, marks what has no backing, and hands back a receipts-checked version with honest downgrades. Use when you say "show me receipts", "is this real", "audit this report", "did my workforce actually do this", "check these claims", "teach me the labels". Run this early so the labels become habit, and any time a report sounds better than your week felt.
---

# Show Receipts - trust the reports because you can check them

A workforce becomes dangerous when it is confidently wrong and you steer the business on it. That is why every claim in your HQ carries one of five evidence labels - a plain marker of how much weight the sentence can hold - and why Done on any board requires a receipt. This skill is where that discipline lives: learn the labels in two minutes, or point me at anything your workforce produced and I will audit every claim in it.

The rule that makes it all work: an unlabeled claim is a [best guess] wearing a suit. Strip the suit, check the claim, and what survives is a report you can act on without re-checking it yourself.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- The claim labels, each with one concrete example, learned in a two-minute tour
- The memory rule that keeps old files from posing as today's truth
- A receipts-checked version of any report, board, or message, saved as a new file in the department's outbox - the original is never touched
- Every `[checked]` claim re-verified against its source, right now, not trusted on its label
- One dated line in `records/warnings.md` for every claim that said more than it could prove, plus one lesson line in `records/improvements.md` when the audit found real slippage
- One line in `records/worklog.md` proving the audit itself happened, with its own receipt

## What I need from you

1. Pick a door: say "teach me the labels" for the tour, or point me at the thing to audit - a file path inside your HQ, or text pasted straight into the chat.
2. Nothing else. Zeros and blanks are welcome here - honesty is the whole point.

## How it works

### Step 1 - Pick the door

I read your HQ, then ask one question if you have not already answered it: learn or audit? If anything in the HQ looks off along the way - a missing file, a malformed board - I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [show-receipts] finding - action taken`, tell you in one sentence, and keep moving. A warning is a flag on the play, never a stopped game.

### Step 2 - Teach mode: the labels in two minutes

Every factual claim any agent makes carries exactly one of these:

- `[checked]` I verified it just now. Example: "Three tasks reached Done this week [checked] - I opened `departments/marketing/board.md` and counted before writing this sentence."
- `[did it]` I performed the action myself this session. Example: "Drafted the prospect email and saved it [did it] - `departments/sales/outbox/2026-07-20-prospect-email.md`."
- `[best guess]` inferred, not verified. Example: "Tuesday looks like your strongest posting day [best guess] - inferred from two good Tuesdays, which is a hunch, not a finding."
- `[from memory]` recalled from files, may be stale. Example: "Your offer is priced at $500 [from memory] - recalled from `company/profile.md`, and it may have changed since that was written."
- `[unknown]` not verified or not knowable, and unknown stays unknown. Example: "Whether last month's invoice cleared is [unknown] - I have not opened the bank feed this session, so I will not guess." A mutable claim recalled but not read this turn is spoken as `[unknown]`, never dressed up as `[checked]`.

The `[from memory]` label carries its own law, and it is worth saying twice: memory is continuity, never current truth. Files remember so your workforce does not start from zero each morning - but anything mutable that matters gets re-checked at the live source before it is asserted as now. "The client was at the promised stage last week [from memory]" is honest; "the client is at promised, let me quote them the price" without opening `company/customers/` is a guess in a memory costume.

And the receipt, the label's big sibling: a receipt is one line proving the work is real - what was produced, where the file lives, and who reviewed it. No receipt, no Done. Filing receipts is the Worker's craft; the labels are how every seat, Planner to Reviewer, keeps its sentences honest.

Why so strict? Because you make real decisions on these reports - what to send, what to drop, where the next hour goes. A true zero beats a flattering guess: a zero tells you exactly where you stand, while a flattering guess steers you into a wall slowly and politely.

That is the tour. Want to see it bite? Point me at any report and we go straight to Step 3.

### Step 3 - Audit mode: collect every claim

Point me at any file in your HQ - a report in an outbox, a board, a memory note - or paste a message your workforce sent you. I read it fresh and list every factual claim with the label it carries. Any claim with no label gets treated as `[best guess]` from this moment on, because an unlabeled claim is a [best guess] wearing a suit.

### Step 4 - Re-verify, then downgrade honestly

Label by label, no exceptions:

- `[checked]` - I go look at the source again, right now. If the board really shows it, the file really contains it, the count really adds up, the claim keeps its label. If not, it is downgraded and the gap is named plainly: "claimed 5 sends drafted, the outbox holds 3."
- `[did it]` - the thing itself must exist: the file in the outbox, the row on the board, the line in the log. Found, it stands. Missing, it drops to `[best guess]` with a note saying nothing was found on disk.
- `[from memory]` - I open the file it recalls from. If the file agrees, it stands. If the file says otherwise or says nothing, the claim gets corrected or marked "no backing found." And when a memory claim is being asserted as the current state of something mutable - a price, a customer's stage, this week's numbers - agreeing with an old file is not enough: I re-check the live authority for that fact and the claim either upgrades to `[checked]` or gets rewritten as what it really is, a recollection.
- `[best guess]` - honest already. It stays, clearly marked, so nobody downstream mistakes it for a fact.
- `[unknown]` - honest already, like `[best guess]`: it names a gap rather than papering over one, so it stays as written. If the gap is now cheaply closeable, I close it and the claim upgrades to `[checked]`; otherwise unknown stays unknown.

The record spine gets read too, when the claims call for it. A claim about work done or time spent - "we ran three sessions on this", "the follow-ups went out Tuesday" - gets checked against `records/sessions.md` and `records/worklog.md`, because sessions and receipts are where that truth lives. A claim that a lesson was captured or a fix landed gets checked against `records/improvements.md`. A report that says "we learned from last week" while the improvements ledger sits silent is over-claiming, and it gets marked like anything else.

Boards get two extra checks. Any row sitting at Done with an empty Receipt column gets flagged - Done without a receipt is a claim with no backing. And any row at Blocked must carry `blocked by {what} - recheck {how}` in its Receipt cell; a Blocked row with a bare `-` is a stall with no story, and it gets flagged so the recheck actually happens.

I never delete or soften the original. The audit is a second document, not an edit.

### Step 5 - Write the receipts-checked version

I say what is about to land and where, then write a new file to the owning department's outbox, named `YYYY-MM-DD-receipts-checked-<slug>.md` - the original stays exactly as it was. The checked version carries every claim with its earned label, every downgrade shown in the open ("was [checked], now [best guess] - the source does not show this"), every unbacked claim marked "no backing found", and every zero written as a zero. Because it is a deliverable you will actually read, it ships as the outbox pair - the `.md` truth plus a self-contained `.html` render from `company/design/page.html`. If your design system is still `(not set yet)`, I say so, use the shipped neutral look, and point you at the **design-system** onboarding step. If you pasted text with no home in the HQ, I put the checked version in the chat and offer to file it under whichever department owns it.

One boundary: I audit whether claims are true, not whether the work is good. For a full quality review - acceptance checks, an adversarial pass, a verdict - that is **review-desk**, the Reviewer's seat as a service.

### Step 6 - Log it

For every claim that said more than it could prove, I append one line to `records/warnings.md`:

```markdown
- YYYY-MM-DD [show-receipts] report claimed "5 follow-ups sent [checked]", outbox holds 3 drafts - downgraded in receipts-checked version
```

And because a warning is how the company learns, an audit that found real slippage also appends one lesson line to `records/improvements.md`:

```markdown
- YYYY-MM-DD lesson: sales reports over-claimed sends twice this month - label at draft time, not report time
```

Then I append the audit itself to `records/worklog.md` in the standard shape:

```markdown
- YYYY-MM-DD [department] Receipts audit of {{FILE}} - receipt: receipts-checked version, outbox/YYYY-MM-DD-receipts-checked-{{slug}}.md, reviewed by the founder
```

And the master audit log gets its line - if it is not in the audit log, the system did not do it. I append to `records/audit-log.md` in the pinned shape, timestamped in your HQ timezone from `HQ.md` (never UTC):

```markdown
- YYYY-MM-DD HH:MM [note] [show-receipts] [{department}] receipts audit of {{FILE}}, {{N}} claims downgraded - outbox/YYYY-MM-DD-receipts-checked-{{slug}}.md
```

Appends only, under today's date - your data never gets overwritten. The warnings are not punishments; they are your workforce's honesty growing a paper trail.

## Do this now

1. Say "teach me the labels" and take the two-minute tour.
2. Then say "audit this report" and point me at the most impressive thing your workforce told you this week.
3. Read the receipts-checked version next to the original and see exactly what survived.

Homework: run one audit today on a real deliverable or board, and read every warning line it produced out loud - what your workforce over-claims tells you exactly where to tighten it.

Next: run **review-desk** when you want the full Reviewer pass on any deliverable - receipts check plus an adversarial read plus a verdict, from a seat that never grades its own homework.
