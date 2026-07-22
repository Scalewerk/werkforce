---
name: people-department
description: Run People & Talent's working session - the room that manages the humans around your company. Contractors, freelancers, virtual assistants - one sitting turns "I should really deal with that" into a written work brief ready to send, a rate comparison with every number sourced, an honest review of delivered work, and a contractor roster in the outbox that tells the truth. Use when you say "run people and talent", "people session", "draft a contractor brief", "compare freelancer rates", "review my contractor's work", "who works for me right now", "update the contractor roster". Open the room once with open-a-department; agent seats belong to hire-an-agent - this desk owns the humans.
---

# People & Talent Department - the humans around your company, run like a department

Your workforce is agents, but your company still touches humans: the editor you pay per video, the assistant who clears the inbox, the bookkeeper you message twice a quarter. Right now those relationships probably live in your head - what you agreed to pay, what you actually asked for, whether the last delivery was any good. That is fine until the day it is not: a scope argument with no brief to point at, a rate you cannot remember agreeing to, a contractor you keep rehiring on vibes.

This session gives the humans the same discipline your agents get. Work starts with a written brief. Rates get checked against real numbers before you commit. Deliveries get reviewed against what was asked. And one roster file always tells the truth about who does what for what money. One boundary, stated once: this room manages people who invoice you - **hire-an-agent** owns the agent seats on your org chart, and this department never touches them.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A worked board: `departments/people-and-talent/board.md` rows moved through their honest stages, Blocked rows rechecked
- The session's deliverable in `departments/people-and-talent/outbox/` - a contractor work brief, a rate comparison, a drafted feedback note, or all three, each ready for YOUR send decision
- `departments/people-and-talent/outbox/YYYY-MM-DD-contractor-roster.md` - the one-page truth about every human working for you
- A review record in `departments/people-and-talent/memory.md` for anything a contractor delivered
- Reserved calls - engage, pay, release - queued in `company/decision-log.md` with a recommendation attached, never decided for you
- One receipt line in `records/worklog.md`, plus session open and close lines in `records/sessions.md`

This skill's `references/` folder also carries the department's template - mission, KPIs, three role cards, starter playbook, starter tasks - which **open-a-department** installs on hiring day.

## What I need from you

1. An Active People & Talent row on the org chart. If it is still Planned, run **open-a-department** first - activating a department is a reserved decision, and it is yours.
2. The facts about your humans: names, roles, agreed rates, what they were asked to do. I never invent any of it - a person I have no facts for gets `(not set yet)`, not fiction.
3. Twenty to thirty minutes. One session, one real deliverable.

## How it works

### Step 1 - Open the room

I find your HQ and read the department's files: `charter.md` for the mission and rules, `board.md` for work in flight, `briefs.md`, `memory.md` for what this department has learned, `playbook.md` for how it works, and the three role cards in `seats/`. I open the session on the record with one line in `records/sessions.md`:

```markdown
- YYYY-MM-DD HH:MM opened - focus: People & Talent session
```

If a file is missing or malformed, I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [people-department] finding - action taken`, tell you in one sentence, and keep working with what exists. A warning is a flag on the play, never a stopped game. The session line and every timestamp are written in your HQ timezone from `HQ.md`, never UTC. Then I tell you, in plain words, what this session owes: rows already on the board, any inbox items intake adopted about contractors or outside help, and anything you bring right now - "I need someone to edit these videos" is a perfectly good opening line.

I run this session as the front desk: I plan, I hand each seat's task to a delegated agent, I narrate what is happening, and I file the record - I stay at the desk and available to you while the work runs. If this runtime cannot spawn delegated agents, I play the seats in turn myself and say so out loud, with every seat moment labeled by the seat that did it.

### Step 2 - The Planner sets the queue

Your Chief Human Resources Officer - by the name you gave the seat - takes the Planner facet, and I hand the planning to the delegated agent playing that seat as I narrate. It turns today's queue into filed work. Each new task gets a board row at Filed and a brief in `briefs.md`, acceptance checks and all:

```markdown
### YYYY-MM-DD - Rate comparison for video editing
Outcome: (none yet)
Acceptance checks:
1. At least two comparison rates, each with a named source
2. One recommendation with the reasoning in two sentences
3. Every number labeled [checked] or [best guess] - no naked figures
Due: YYYY-MM-DD
Seat: {Specialist's name}
```

`Outcome: (none yet)` is legal - I log one warning line and keep moving; the gap becomes a later conversation, not a stopped game. Anything on the board already at Blocked gets its recheck run now: still blocked, or back In progress.

### Step 3 - The Specialist does the work

I hand the build to the delegated agent playing your Specialist, who takes the Worker facet and builds the deliverable in `drafts/` - invisible to every control until handoff. The three shapes this department produces most:

**A contractor work brief** - what you hand a human so scope arguments never happen:

```markdown
# Work brief - {task} for {contractor name}
What we need: {the outcome in plain words}
Deliverable: {exactly what comes back, in what format}
Done means: {numbered checks the work must pass}
Deadline: {date}
Rate: {agreed number, or "to be agreed" - never assumed}
```

**A rate comparison** - two or more sourced points per role, each line naming where the number came from (a marketplace listing, a past invoice, a quote you received), each labeled `[checked]` or `[best guess]`. I never invent a market rate; a true zero beats a flattering guess.

**A feedback or outreach note** - written to be sent under your name, so it is specific, fair, and free of anything you would wince at. Draft only, always: sending anything to a real person outside the company is a reserved decision, and it is yours alone. I draft; you send.

### Step 4 - The Reviewer reviews

I hand the review to the delegated agent playing your Manager - never the seat that built the work. It takes the Reviewer facet and walks the deliverable against the brief's acceptance checks, adversarially, hunting for real faults, because no agent grades its own homework. Unsourced numbers get downgraded to `[best guess]`, not deleted. The verdict lands in `memory.md` as one bullet:

```markdown
- YYYY-MM-DD Review of {task}: verdict, checks passed/failed, downgrades, faults (or none).
```

Pass moves the row to Done with a receipt - what was produced, where it lives, who reviewed. Fail sends it back to In progress with the fault list, and one lesson line goes to `records/improvements.md`. If a contractor's delivered work is on the docket, it gets the same treatment: their delivery against their brief, check by check, verdict on the record - so your next rehire decision reads evidence, not memory.

### Step 5 - The roster

Every session that touches a human ends by making the roster true. The Specialist drafts today's edition, the Manager verifies it against the record - engaged people present, reviews reflected, released people marked - and only then does it land in the outbox as the pair `YYYY-MM-DD-contractor-roster.md` (the editable truth) plus `YYYY-MM-DD-contractor-roster.html` (the finished render from `company/design/page.html`, self-contained). If your design system is still `(not set yet)`, I say so, use the shipped neutral look, and point you at the **design-system** onboarding step. The markdown:

```markdown
# Contractor roster - YYYY-MM-DD
| Name | Role | Rate | Status | Last brief | Last review | Next touch |
|---|---|---|---|---|---|---|
| Dana R. | Video editor | $45/video [checked] | engaged | 2026-07-14 | passed 2026-07-18 | new brief Friday |
| (not set yet) | Bookkeeper | (not set yet) | talking | - | - | founder to confirm rate |
```

Every fact comes from you or from this department's record - rates carry their label, blanks stay `(not set yet)`. Old editions stay in the outbox untouched; each refresh is a new dated file, so the roster's history is part of the record. If anything on the roster needs a founder decision - engage this person, raise that rate, part ways with another - it queues in `company/decision-log.md` as one line with context, options, and a recommendation. Money and hiring are yours; nothing waits on you silently.

### Step 6 - Log it

The session closes clean. Every finished row carries its receipt on the board, and one line lands in `records/worklog.md`:

```markdown
- YYYY-MM-DD [people-and-talent] {task} - receipt: what was produced, where it lives, who reviewed
```

And one line to `records/audit-log.md`, timestamped in your HQ timezone, so the dashboard's activity feed sees it:

```markdown
- YYYY-MM-DD HH:MM [task] [{Manager name}] [people-and-talent] {task} closed with receipt - departments/people-and-talent/outbox/{file}
```

One note for department memory if we learned something worth keeping, one closing line in `records/sessions.md` (timed in your HQ timezone) with a one-line recap, and a last look together: what shipped to the outbox, what queued for your decision, what runs next session.

## Do this now

1. Say "run people and talent" - or lead with the real thing: "draft a brief for my editor" or "am I overpaying my VA?"
2. Give me the humans: who works for you now, what they do, what you pay them. Honest blanks are fine.
3. Work the queue through the three seats and watch one real deliverable land in the outbox.
4. Read the roster file top to bottom - if any row surprises you, that is exactly why this department exists.

Homework: before you next hand any task to any human, ask this department for the brief first - one session-in, contractors stop guessing what you meant, and you stop paying for the wrong deliverable.

Next: install **finance-department** - your contractors' invoices and your cash live in that room, and the two departments meet at every rate you approve.
