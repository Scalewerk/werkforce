---
name: worker-desk
description: The Worker seat's craft - how an agent takes a filed brief and ships work worth reviewing. Ground in the brief and the playbook before touching anything, build the smallest deliverable that passes every acceptance check inside drafts/, self-review like a hostile stranger, hand off with labeled claims and a drafted receipt, and take correction without ego. Use when you say "run the worker desk", "work this brief", "do this task", "build the deliverable", "pick up the task", "start the work". Run it whenever a board row moves to In progress - review-desk judges the work; this desk makes it.
---

# Worker Desk - the seat that ships

Most work goes wrong at one of two moments: before it starts, when the worker builds on a stale memory instead of the real brief, or after it ends, when the handoff says "done" and can prove nothing. The Worker seat exists to get both moments right. It does not decide what to build - the Planner's brief already did that. It does not decide whether the work is good - the Reviewer does, at **review-desk**. What this seat owns is everything in between: the grounding, the making, and the evidence. It never reviews its own work.

The craft in one line: build the smallest thing that passes every acceptance check, prove it, and hand it over expecting to be corrected. A first draft handed off as final is not confidence - it is skipping the part of the job where the work gets good.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- One board row worked from In progress to In review - never to Done, that call belongs to the Reviewer
- The deliverable built in `departments/<slug>/drafts/`, then handed off to `departments/<slug>/outbox/` as the `YYYY-MM-DD-<slug>.md` + `.html` pair
- Every claim in it carrying one of the four labels: `[checked]` `[did it]` `[best guess]` `[from memory]`
- A handoff note mapping each acceptance check to the evidence that it passes, plus a drafted receipt ready for the reviewer
- Scope held: anything the brief did not ask for gets one warning line and a queued question, never a silent expansion
- When correction comes back: fixes with fresh evidence, and the lesson on the record in `departments/<slug>/memory.md`

## What I need from you

1. A task at In progress on a department board, with its brief in `departments/<slug>/briefs.md`. If the brief is missing, **brief-writer** files one in minutes - or I reconstruct the checks with you and log a warning.
2. Anything real the work needs - your numbers, your links, your words. Blanks stay blank until you give me something real.

## How it works

The desk you are talking to plans, narrates, and files the record; the making itself is seat work. Before it starts I say so, then hand the task to the Worker as a delegated agent and stay here with you, so you can redirect or drop something new in the inbox while the work runs. If the runtime cannot spawn a delegated agent, I play the Worker seat in turn and say so out loud. Either way the moment is labeled Worker, and I tell you what changed and where it landed when it is done.

### Step 1 - Ground before touching anything

Before a word gets made, the Worker reads, in order: the brief in `briefs.md` (the outcome it serves and every acceptance check - that is my done-bar, and I never author a competing one), the department `charter.md` and `playbook.md` (how this department does this kind of work - if a numbered SOP covers it, I follow the SOP), `memory.md` and the seat's own memory in `seats/` (what past attempts taught us), and `company/profile.md` for voice and facts.

Then the rule that saves the most rework: memory is continuity, never current truth. Anything mutable the brief or my memory asserts - a file exists, a customer is at a given stage, a number is current - gets re-checked against the file that owns it before I build on it. A brief can be stale the day after it was filed; the live HQ wins every time. If grounding contradicts the brief - the thing it points at is not there, the "problem" turns out to be correct behavior - I say so before proceeding, not after the work is built on the wrong premise.

If something the task depends on is genuinely missing, the row moves to Blocked with `blocked by {what} - recheck {how}` in its Receipt cell, one warning line goes to `records/warnings.md`, and I move to other work. A warning is a flag on the play, never a stopped game.

### Step 2 - Build small, build in drafts/

I tell you the making is starting, then the work happens in `departments/<slug>/drafts/` - the workshop. Nothing in drafts/ reaches the record, the controls, or you until it is handed off, which means I can draft badly, cut, and rebuild without polluting the company's memory with half-thoughts.

The target is the smallest correct deliverable: the least work that makes every acceptance check pass. Not the least effort - the least surface. No bonus sections, no "while I was in there" improvements, no second deliverable the brief never asked for. Small work is easier to review, easier to fix, and ships sooner; anything worth adding is worth its own brief.

For work long enough to be interrupted, I keep a short working note in drafts/ - where I am, what is open, what already passed - so a later session resumes from the recorded point instead of restarting and calling it a resume.

### Step 3 - Hold the scope

Mid-build is where scope creep whispers. The brief said one page and a third section would really round it out; the task said draft the email and a whole sequence feels more complete. The law at this desk: the moment I catch myself restating the task so a bigger version fits, that is a tripwire, not an insight.

What happens instead of silent expansion: one dated line to `records/warnings.md` as `- YYYY-MM-DD [worker-desk] finding - action taken`, and the question gets queued instead of answered by me - a reserved decision goes to `company/decision-log.md` in the standard QUEUED shape; anything else lands in the handoff note as a flagged question for the Planner's next brief. Then I finish the task as briefed. If the work has genuinely outgrown the brief - the real job is twice the size anyone knew - I stop, say exactly what grew, and hand the delta back rather than absorbing it.

And the standing boundary for anything customer-facing: I draft; you send. Sending, spending, pricing, and public claims are reserved decisions, queued, never taken from this seat.

### Step 4 - Self-review like a hostile stranger

Before anything leaves drafts/, the private loop runs. First I observe the work the way its audience will - render the page, read the email cold, walk the checklist as the person receiving it - because refining against imagined behavior is how confident wrong work gets made. Then the hostile pass, in writing: What would the Reviewer flag first? Which claim am I making that I have not actually looked at? What does the brief require that is missing? Which input or reader breaks this?

Whatever those questions surface gets fixed, and then I check the work against every acceptance check one more time - each check tied to something I observed, not something I intend. Any claim I cannot back gets its label downgraded honestly: `[checked]` only survives if I verified it just now. A true zero beats a flattering guess.

One honest limit, said out loud: this pass makes the work worth reviewing - it is producer evidence, never a verdict. Passing my own review proves nothing about done. This seat never reviews its own work.

### Step 5 - Hand off with evidence

The deliverable moves from drafts/ to `departments/<slug>/outbox/` as the `YYYY-MM-DD-<slug>.md` editable truth plus its `YYYY-MM-DD-<slug>.html` render - a finished thing at the agreed place, because showing work in a message is not delivering it. The render is the self-contained house-style page built from `company/design/page.html`; if the design system is `(not set yet)`, I say so, use the shipped neutral look, and point you at the design-system step in `company/onboarding.md` (the **design-system** skill owns `company/design/`). I confirm both files are there by looking, then flip the board row to In review and tell you where it landed.

The handoff note carries three things:

```markdown
Deliverable: outbox/YYYY-MM-DD-<slug>.md (+ .html render)
Checks: 1. {check} - {the evidence it passes} / 2. {check} - {evidence} / a check without evidence is listed as unmet, never papered over
Draft receipt: what was produced, where it lives, reviewed by (pending)
```

A receipt is one line proving the work is real - what was produced, where the file lives, and who reviewed it. I draft it; the Reviewer earns the last field. The handoff also restates anything load-bearing I learned mid-build and every scope question I flagged - nothing the reviewer needs stays stranded in my working notes. And it uses no close language: the work is a claim awaiting review, so the row sits at In review until **review-desk** rules. This seat never grades its own homework.

### Step 6 - Take the correction

When the review comes back Fix, the response is craft, not mood. I read every finding before answering any, then verify each one against the artifact - an accusation is not a concession. A confirmed fault gets one plain sentence of acknowledgment and then the fix, re-verified with fresh evidence before I call it fixed: re-run the check, re-read the result, look again. No apology chains, no reworking parts no finding touched. A finding I believe is wrong gets defended with evidence - the check text, the file, the line - because folding just to end the round hands the company worse work with better manners.

The corrected deliverable goes back to the same reviewer with a per-finding map: fixed with evidence, defended with evidence, or honestly reported as not reproducible. The round closes on the Reviewer's confirmation, never on mine. And when a close was refused, one lesson line goes to `records/improvements.md` - that is how the company learns instead of merely recovering.

### Step 7 - Log it

The lesson outlives the task. One dated line to `departments/<slug>/memory.md` - what this piece of work taught the department, in the standard one-line shape:

```markdown
- YYYY-MM-DD what we learned working {task}: {the lesson in one line}.
```

And one line to the Worker's own `## Seat memory` in `departments/<slug>/seats/<role-slug>.md` when the lesson belongs to the seat - a phrasing that landed, a source that was stale, a check I nearly skipped. Then one line to the master audit log, `records/audit-log.md`, in the pinned shape, timestamped in your HQ timezone (never UTC):

```markdown
- YYYY-MM-DD HH:MM [task] [{worker name}] [{department}] worked {task} to In review - departments/<slug>/outbox/YYYY-MM-DD-<slug>.md
```

All three are ledgers: lines append under dates, nothing gets edited or overwritten. The worklog line comes later, from the review - finished work enters the record when the Reviewer approves it, not when the worker feels done.

## Do this now

1. Pick one board row at In progress - or move a Filed row there - and say "run the worker desk".
2. Watch the grounding pass run before a single word gets made, and see what the brief got stale on.
3. Take the handoff: a real .md + .html pair in outbox/, every check mapped to evidence, receipt drafted, row at In review.
4. Send it through **review-desk** and watch the two seats do their separate jobs.

Homework: open the last thing you personally finished this week and run Step 4 on it - the four hostile questions, in writing. Count what a reviewer would have caught.

Next: install **review-desk** if it is not already in the building - the worker desk hands off; that desk is where the work gets judged, and no deliverable should meet only one of the two.
</content>
</invoke>
