---
name: marketing-content
description: One content piece made end-to-end in your company's voice - a blog post, article, case study, guide, or script - angle drawn from your profile and business model, drafted in the department's drafts folder, self-checked, then reviewed by a seat that did not write it, with every claim tested against what you can actually deliver today. Use when you say "write a blog post", "draft an article", "make one content piece", "write a case study", "turn this idea into a piece", "write it in my voice", "finish this draft properly". Run marketing-department to decide which pieces and why; run this when one piece needs making well.
---

# Marketing Content - one piece, made properly, in your voice

The internet is drowning in content that reads fine and sells nothing. It fails for two reasons, and neither is bad writing: it speaks in nobody's voice, and it makes claims the company behind it cannot back. A piece that sounds like everyone sounds like no one; a piece that promises what you cannot deliver today costs you the trust it was supposed to build.

This skill makes ONE piece and makes it well: a brief with checks written before a word of copy exists, an angle pulled from your actual profile and business model, a draft in your voice, a self-check, and then an adversarial review by a seat that did not write it - every claim labeled and tested against your capability floor. One piece through the full loop beats five pieces through none. The boundaries are clean: **marketing-department** runs the room and decides which pieces and why; **social-posts** takes a finished piece and spreads it across platforms; this skill is the craftsman in between.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- One finished content piece in `departments/marketing/outbox/` as the pair `YYYY-MM-DD-<slug>.md` (editable truth) + `YYYY-MM-DD-<slug>.html` (finished render from your design system) - full text ready to use, plus its claims list and check map
- A brief in `departments/marketing/briefs.md` with numbered acceptance checks, written before the draft
- Every claim in the piece carrying one of the four labels and squared against the capability floor in `company/business-model.md` - nothing promised that sits under "Not yet"
- A review record in `departments/marketing/memory.md` - a pass by a seat that did not write the piece
- The board row moved to Done with a receipt, and one line in `records/worklog.md`

## What I need from you

1. An installed HQ. Marketing showing Active on `company/org-chart.md` is the happy path; if the room is unstaffed, I append one warning line, tell you in one sentence, and keep going - the piece files under `departments/marketing/` and is waiting there when **open-a-department** staffs the room.
2. The seed: a brief handed down from **marketing-department**, or just your topic in a sentence or two - "a post about why X keeps failing for people like our customers" is plenty.
3. Two minutes on the acceptance checks before I draft. You approve what the piece must do; the seats do the rest.

## How it works

The session you talk to is the desk. When a seat's work starts, the desk hands that task to a delegated agent and stays here with you, so you can redirect or drop something new in the inbox while work runs - and every seat moment is labeled with the seat that did it. If your AI runtime cannot spawn a delegated agent, the desk plays each seat in turn and says so out loud. The three seats are the same three the charter names: Planner (writes the brief and its checks), Worker (drafts the piece), Reviewer (reviews adversarially, and never reviews its own work).

### Step 1 - Take the brief, or write one

If **marketing-department** already briefed this piece, I read that entry in `briefs.md` and the matching board row, and we go straight to the angle. If you came here with a bare idea, the desk hands the Planner seat the brief first - written before any copy exists, appended to `departments/marketing/briefs.md`:

```markdown
### YYYY-MM-DD - {piece title}
Outcome: O{n} (or "(none yet)" - I log one warning line and keep moving)
Acceptance checks:
1. Speaks to {ideal customer from business-model.md} about {their problem in their words}
2. Makes exactly one point and one call to action, both true of what we deliver today
3. Every factual claim carries its label; zero invented numbers, quotes, or results
Due: YYYY-MM-DD
Seat: {Worker's given name}
```

The piece also goes on `board.md` as a Filed row and moves to In progress when drafting starts. If anything in the department is missing or malformed, I append one dated line to `records/warnings.md` (`- YYYY-MM-DD [marketing-content] finding - action taken`), tell you in one sentence, and keep working. A warning is a flag on the play, never a stopped game.

### Step 2 - Find the angle

An angle is not a topic - it is the one specific thing this piece says to one specific reader. I read `company/profile.md` for who you are and how you sound, and `company/business-model.md` for who buys, why they buy, and how customers find you. Then I propose 2-3 angles, each in one sentence: the reader, the claim, the reason they should care coming from you. You pick one, or tell me what all three missed.

The angle test is simple: could a competitor publish this piece unchanged? If yes, it is not your piece yet. Your proof, your customers' problem in their words, your way of working - something in the angle has to be yours.

### Step 3 - Draft it in drafts/

The Worker seat writes the piece in `departments/marketing/drafts/` - invisible to controls until handoff, which is exactly what a work-in-progress deserves. The voice comes from "How we sound" in your profile; the structure serves the one point; the length is whatever the checks require and not a paragraph more. Every statement of fact about your business goes in carrying its label - `[checked]`, `[did it]`, `[best guess]`, `[from memory]` - and I never invent metrics, quotes, testimonials, or results. A claim with no source is a claim that gets cut, not softened.

Scope stays on the brief. If the draft surfaces a great idea for a second piece, that idea goes to `inbox.md` as one line - it does not sneak into this one.

### Step 4 - The capability-floor check

Before anyone reviews the writing, the claims get squared against `company/business-model.md`, section "What we can deliver today": **Yes** (proven), **Now** (can do on request), **Not yet** (do not claim). Every promise, call to action, and value claim in the piece must sit on Yes or Now. A claim resting on Not yet gets reworded to what is true today or cut entirely, with one warning line on the record. If the capability floor is still `(not set yet)`, I say so in one sentence, keep every claim conservative, and log the gap - **business-model** fills that section properly.

This is the check that separates marketing from wishful thinking. Your content can be ambitious about the reader's future; it cannot be ambitious about your present.

### Step 5 - Review by a seat that did not write it

Now the Reviewer seat takes over - a different delegated agent than the one that wrote the piece, honestly labeled, because no agent grades its own homework. The Reviewer tests the piece against each numbered check, hunting real faults: off-voice sentences, a second point smuggled in, a label the evidence cannot carry, a call to action that outruns the floor. Each finding cites the exact line and the check it fails. Faults go back to the Worker to fix and we iterate to zero; labels get downgraded on the spot when the evidence is thin. Then one review record lands in `departments/marketing/memory.md`:

```markdown
- YYYY-MM-DD Review of {piece title}: passed, checks 1-3 passed, one label downgraded to [best guess], faults: none.
```

The finished piece moves from `drafts/` to the outbox as the pair the filing law in `os/formats.md` requires: `departments/marketing/outbox/YYYY-MM-DD-<slug>.md` (the editable truth) and `YYYY-MM-DD-<slug>.html` (the finished render, self-contained, built from `company/design/page.html`) - so the piece can be read as a plain file or handed over looking finished. If your design system is `(not set yet)`, I say so, render with the shipped neutral look, and point you to the **design-system** onboarding step so your next piece carries your brand; **design-department** owns that look, this skill only fills it. The markdown is shaped so a reviewer - or you, six months from now - can verify any claim without rereading everything:

```markdown
# {Piece title}
Date: YYYY-MM-DD | Brief: {task name} | Seat: {Worker's given name}

## The piece
{full text, ready to use}

## Claims and sources
- {each factual claim} - {its label} - {where it came from, incl. its capability-floor line}

## Check map
1. Check 1 - satisfied at {the exact section or line}
```

One thing said plainly: this piece is a draft until you decide otherwise. Publishing it, posting it, sending it anywhere outside the company is a reserved decision - it queues in `company/decision-log.md` with a recommendation attached. I draft; you send.

### Step 6 - Log it

The board row moves to Done, its Receipt cell filled - what was produced, where it lives, who reviewed - and one line goes to `records/worklog.md`:

```markdown
- YYYY-MM-DD [marketing] {piece title} - receipt: outbox/YYYY-MM-DD-{slug}.md + .html, reviewed by {Reviewer's given name}
```

And the same act lands one line in the master audit log, `records/audit-log.md`, timestamped in your HQ timezone from `HQ.md` (never UTC):

```markdown
- YYYY-MM-DD HH:MM [task] [{Reviewer's given name}] [marketing] content piece "{piece title}" reviewed and filed - departments/marketing/outbox/YYYY-MM-DD-{slug}.html
```

Then I hand you the short version: the piece, the one claim I want you to double-check yourself, and what is queued for your decision.

## Do this now

1. Say "make one content piece" and give me the brief or the bare idea.
2. Approve the acceptance checks and pick the angle - that is your two minutes.
3. Read the finished piece in the outbox, starting with the Claims and sources section.
4. Decide whether it goes out into the world - that decision is yours alone, always.

Homework: open `company/business-model.md` and read "What we can deliver today" out loud. If it is blank or stale, fix it before your next piece - every claim your content will ever make stands on that floor.

Next: I read your HQ state and name the one thing worth doing next - if `company/onboarding.md` still has steps open, that Next step comes first (a design system so your renders carry your brand, or **business-model** if the floor is thin). Once your HQ is set and this piece has passed review, that next action is **social-posts** - it turns the finished piece into platform-native posts without rewriting the truth of it.
