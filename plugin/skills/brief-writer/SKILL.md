---
name: brief-writer
description: Turn a ramble into a brief your department can execute without you in the room - one measurable outcome, acceptance checks a hostile Reviewer pass could not shake, fences flagged before they bite, filed on the board today. You talk, I play it back, we tighten it, it lands as Filed. Use when you say "file a brief", "write this up for the team", "turn this into a task", "brief the department", "put this on the board", "get this off my plate", "hand this off". Run this any time work needs to leave your head - a good brief names WHAT done looks like and lets the department decide HOW.
---

# Brief Writer - work leaves your head as a brief, not a hope

Every founder knows this failure: you describe a task out loud in thirty seconds, someone nods, and two days later the wrong thing comes back. The person was never the problem - the task lived in your head and only a blurry copy left it. A brief fixes that. It is the smallest document that lets a department run without you: what will exist when it is done, how anyone can check it, and where the fences are.

One rule above all: the brief says WHAT done looks like, the department decides HOW. A brief that dictates the method is just you doing the work with extra steps. You own the destination and the tests. Your Planner plans, your Worker builds, your Reviewer checks - they own the route. (Account Executive is a Sales role title; the seat words are Planner, Worker, Reviewer.) Writing briefs is the Planner facet's defining move, and this skill runs that move for one task, fast; **plan-desk** owns the Planner craft in depth - outcome to falsifiable checks to smallest plan - when you want to sharpen the skill itself.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- Your ramble turned into a complete brief in the exact shape your format law (`os/formats.md`) sets: Outcome line, numbered acceptance checks, Due, Seat by given name
- The brief traced upward to an outcome in `company/outcomes.md` - or filed honestly with `Outcome: (none yet)` and one warning line, never a gate
- The full text appended to `departments/<slug>/briefs.md` under a dated heading
- A new row on `departments/<slug>/board.md` at Filed - or at Blocked, told honestly, when the work is waiting on something
- Checks tightened until each one would survive a hostile review - because your Reviewer will read them with a red pen
- Any reserved decision the task will bump into written into the checks now, not discovered mid-task

## What I need from you

1. One Active department to file into. If none exists, run **open-a-department** (it activates a department and names its Planner, Worker, and Reviewer) - or say the word and I open one with you now and come straight back.
2. Your ramble. Talk the way you would talk to a sharp employee in a hallway - do not organize it, that is my job.
3. Two minutes to pressure-test the checks with me before it files.

## How it works

### Step 1 - Find the department

I read `company/org-chart.md` and file into the department you name, or the only Active one if there is just one. I also open `company/outcomes.md`, because every brief tries to trace upward to an outcome - **outcome-desk** owns that file; I only read it. If something looks off along the way - a malformed board table, a missing briefs.md that I have to create fresh - I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [brief-writer] finding - action taken`, tell you in one sentence, and keep moving. A warning is a flag on the play, never a stopped game.

### Step 2 - You ramble

Say everything on your mind about the task: what is bugging you, what you wish existed, who it is for, when you need it. Half-sentences are fine. Contradictions are fine - I will surface them instead of guessing. If a detail I need is missing, I ask one or two short questions; I never fill a blank with an invention.

### Step 3 - I play it back as a draft brief

Drafting a brief is the Planner facet's work, so from the desk I hand it to a delegated agent wearing the Planner seat and stay right here with you while it drafts - if your runtime cannot spawn a delegated agent, I play the Planner myself, in turn, and say so out loud. Either way the turn is labeled Planner. The Planner drafts it in the exact shape every brief in your HQ uses - the shape `os/formats.md` writes into law:

```markdown
### YYYY-MM-DD - {{TASK NAME}}

Outcome: {{O{n} from company/outcomes.md - or (none yet)}}
Acceptance checks:
1. {{falsifiable, and names HOW it gets checked}}
2. {{falsifiable, and names HOW it gets checked}}
Due: {{a real date you give me - I never invent one}}
Seat: {{a given name - usually your Worker}}
```

The parts, and what each one is for:

- **Outcome** - the `O{n}` this task serves, straight from `company/outcomes.md`, so the work traces upward: task to outcome to vision. When no outcome fits yet, the line reads `Outcome: (none yet)` and the brief files and runs today - I append one warning line to `records/warnings.md`, one lesson line to `records/improvements.md`, and the gap becomes a later conversation with **outcome-desk**, not a stopped game. Tracing degrades; it never gates.
- **Acceptance checks** - 2 to 5, numbered, each falsifiable, each naming HOW it gets checked. "Make it good" is not a check. "Under 150 words - checked by word count" is. Every check names how it gets checked, or it is not a check yet.
- **The fences live in the checks** - what NOT to do becomes a falsifiable check of its own, and any reserved decision the task will bump into gets flagged there now, not later. Reserved decisions - sending anything to a real person outside the company, spending money, changing prices, making public claims, hiring or firing (activating or closing a department or seat), deleting work, ratifying a vision or a change of strategy - stay with you. Naming the bump in the brief means the Worker queues the question instead of stalling on it or, worse, answering it.
- **Due and Seat** - a real date, and the given name of the agent doing the work - usually your Worker, never the Reviewer who will review it. No agent grades its own homework, and no brief sets one up to.
- **Type: story** - one optional extra line. When the brief is written in your customer's own words ("As a new customer, I open one email and know exactly what happens next"), add `Type: story` under the Seat line. Same law, same checks - just told from the buyer's side of the counter.

Notice what the brief never contains: the method. No "use this structure", no "start with a question", no step-by-step. The department decides how.

### Step 4 - Tighten until hostile-proof

Your Reviewer will read these checks with a red pen - that is the whole job of **review-desk**, which checks work and never does it. So before filing, we put each check through one test: could a hostile reviewer mark it pass AND fail on the same deliverable? If yes, it is not a check yet.

- Weak: "The email is short and friendly."
- Hostile reviewer: "Short by whose watch? Friendly says who?"
- Tight: "Under 150 words - checked by word count. Exactly one ask - checked by counting the asks."

We loop until every check holds. Here is a finished brief, so you know what the bar looks like:

```markdown
### 2026-07-20 - Welcome email for new customers

Outcome: O2
Acceptance checks:
1. Under 150 words - checked by running a word count on the final draft.
2. Exactly one ask and one link - checked by counting every ask and link.
3. Zero placeholders - checked by searching the draft for brackets and "TBD".
4. Matches the company voice - checked by the Reviewer reading it line by
   line against the voice notes in company/profile.md.
5. Draft only, and zero pricing language - checked by confirming the file
   sits in outbox/ unsent and searching it for prices. This email will bump
   into "what did I pay for", and sending and pricing are both reserved -
   flag the question, do not answer it.
Due: 2026-07-21
Seat: Marcus
```

Five checks, five methods, two fences folded into check 5, zero instructions on how to write the email. That is a brief a department can execute without you.

### Step 5 - Log it

I append the full brief to `departments/<slug>/briefs.md` under a dated heading matching the board task name - appends only, your earlier briefs are never touched. Then I add the row to `departments/<slug>/board.md`:

```markdown
| Task | Stage | Seat | Filed | Due | Receipt |
|---|---|---|---|---|---|
| Welcome email for new customers | Filed | Marcus | 2026-07-20 | 2026-07-21 | - |
```

Filed is the honest default. But some work is real and cannot start yet - it is waiting on a client's assets, an answer sitting in your decision queue, another task's output. That brief files at **Blocked** instead, and the row says exactly why in its Receipt cell, in the shape `blocked by {what} - recheck {how}`:

```markdown
| Case study page for Acme | Blocked | Marcus | 2026-07-20 | 2026-07-25 | blocked by Acme's quote approval - recheck the inbox each morning |
```

A Blocked row is not a parked wish - it carries its own recheck instruction, **run-the-day** rechecks it every morning, and the moment it clears the Receipt cell goes back to `-` and the work moves. Filing Blocked beats filing a lie called Filed.

Last, so the action is on the master record, I append one line to `records/audit-log.md` in the shape `os/formats.md` pins - timestamped in your HQ.md timezone, never UTC - and tell you it landed:

```markdown
- 2026-07-20 14:30 [task] [Amara] [marketing] Brief filed: Welcome email for new customers - departments/marketing/briefs.md
```

The owner is the Planner's given name, the scope is the department slug, and the pointer names the briefs file the full text lives in.

And that is where my job ends. Filing is this skill; executing belongs to the department - **run-the-day** works the queue, and the receipt lands when the work is real.

## Do this now

1. Say "file a brief" and name a department, or let me use your Active one.
2. Ramble the task at me - voice-memo energy, zero structure.
3. Tighten the checks with me until each one is hostile-proof, and pick the outcome it serves - or file `(none yet)` honestly.
4. Read the filed brief and the new row on the board - Filed, or Blocked with its recheck written down.

Homework: file one real brief today for something you would normally just do yourself - then keep your hands off it. The whole point is that it runs without you.

Next: run **run-the-day** and say "werkforce, morning" tomorrow - watch the department pick your brief off the board and put it through the loop.
