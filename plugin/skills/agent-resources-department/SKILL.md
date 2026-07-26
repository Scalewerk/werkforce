---
name: agent-resources-department
description: Run Agent Resources' working session - the room that hires, onboards, maintains, and improves the agents that work for your company. One sitting turns "this seat isn't pulling its weight" into a written hiring case for a new seat, an onboarding research pass that gets a new agent to the elite bar before its first task, a sweep that proves every seat card is current, or an improvement read that hands one seat back a specific amendment drawn from its own record. Use when you say "run agent resources", "agent resources session", "do we need a new seat", "onboard this agent properly", "are my seat cards current", "how is this agent doing", "improve my agents". Also keeps the human-contractor lane - briefs, sourced rates, reviews, roster - as a named secondary lane. Open the room once with open-a-department; opening a seat is your call alone.
---

# Agent Resources Department - your agents, hired and improved like a real team

Your workforce is agents. Nobody runs them the way they would run a team. Seats get opened because a task showed up, onboarded by being handed work, and never looked at again - so a card written in week one still describes a job the seat stopped doing in week three, and the drift is invisible because nobody's job is to look.

This session gives your agents the discipline a good manager gives people. A new seat arrives with a written case for why the work demands it, not a hunch. A newly opened seat does its research before its first task, so it starts at the bar instead of climbing to it. Every seat card stays current and every seat-memory ledger stays live, checked on a cadence rather than when something breaks. And each seat gets read against its own record - what it produced, what its reviews said, what warnings trace back to it - handed back as one specific amendment. Never a complaint, always an amendment.

Two boundaries, stated once. **Opening, renaming, retiring, or re-scoping a seat is yours alone** - this room writes the case and queues it; **hire-an-agent** and **open-a-department** execute after your word. And this room *proposes* card changes for other departments' seats; the owning department's Manager reviews them. "Improve every agent" is not a licence to rewrite everyone's cards.

This department also keeps the human lane. If you pay an editor per video or a bookkeeper twice a quarter, that work stays here as a named secondary lane with its own discipline: brief before work, sourced rate, review on delivery, one honest roster.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A worked board: `departments/agent-resources/board.md` rows moved through their honest stages, Blocked rows rechecked
- The session's deliverable in `departments/agent-resources/outbox/` - a hiring case, an onboarding research pass, a card-completeness sweep, a seat improvement read, or a refreshed contractor roster, each ready for YOUR decision
- A review record in `departments/agent-resources/memory.md` for anything the department delivered
- Reserved calls - open a seat, engage, pay, release - queued in `company/decision-log.md` with a recommendation attached, never decided for you
- One receipt line in `records/worklog.md`, plus session open and close lines in `records/sessions.md`

This skill's `references/` folder also carries the department's template - mission, KPIs, three role cards, starter playbook, starter tasks - which **open-a-department** installs on hiring day.

## What I need from you

1. An Active Agent Resources row on the org chart. If it is still Planned, run **open-a-department** first - activating a department is a reserved decision, and it is yours.
2. Your read on the seats: which ones feel thin, which work keeps landing with no obvious owner. I never invent a demand count or a performance claim - everything traces to a board row, a review, or a warning, or it gets labeled `[best guess]`.
3. Twenty to thirty minutes. One session, one real deliverable.

## How it works

### Step 1 - Open the room

I find your HQ and read the department's files: `charter.md` for the mission and rules, `board.md` for work in flight, `briefs.md`, `memory.md` for what this department has learned, `playbook.md` for how it works, and the three role cards in `seats/`. I open the session on the record with one line in `records/sessions.md`:

```markdown
- YYYY-MM-DD HH:MM opened - focus: Agent Resources session
```

If a file is missing or malformed, I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [agent-resources-department] finding - action taken`, tell you in one sentence, and keep working with what exists. A warning is a flag on the play, never a stopped game. The session line and every timestamp are written in your HQ timezone from `HQ.md`, never UTC. Then I tell you, in plain words, what this session owes: rows already on the board, any inbox items intake adopted about seats or outside help, and anything you bring right now - "engineering keeps dropping data work on the floor" is a perfectly good opening line.

I run this session as the front desk: I plan, I hand each seat's task to a delegated agent, I narrate what is happening, and I file the record - I stay at the desk and available to you while the work runs. If this runtime cannot spawn delegated agents, I play the seats in turn myself and say so out loud, with every seat moment labeled by the seat that did it.

### Step 2 - The Planner sets the queue

Your Chief Agent Resources Officer - by the name you gave the seat - takes the Planner facet, and I hand the planning to the delegated agent playing that seat as I narrate. It turns today's queue into filed work. Each new task gets a board row at Filed and a brief in `briefs.md`, acceptance checks and all:

```markdown
### YYYY-MM-DD - Hiring case: does the data work demand its own seat?
Outcome: (none yet)
Acceptance checks:
1. The demand is counted from real board rows, each cited - never argued from adjacency
2. The facet the seat fills is named, and the review triangle it preserves is shown
3. A draft role card with all six required H2s
4. One recommendation, and the honest alternative steel-manned not strawmanned
Due: YYYY-MM-DD
Seat: {Specialist's name}
```

`Outcome: (none yet)` is legal - I log one warning line and keep moving; the gap becomes a later conversation, not a stopped game. Anything on the board already at Blocked gets its recheck run now: still blocked, or back In progress.

### Step 3 - The Specialist does the work

I hand the build to the delegated agent playing your Specialist, who takes the Worker facet and builds the deliverable in `drafts/` - invisible to every control until handoff. The four shapes this department produces:

**A hiring case** - the written argument for a new seat, so seats get opened on evidence instead of a busy week:

```markdown
# Hiring case - {proposed seat}
The work that demands it: {counted board rows or named deliverables, each cited}
The facet it fills: {Planner, Worker, or Reviewer - and why the existing seats cannot}
Review independence: {who reviews this seat's work, and why that stays honest}
Draft role card: {all six required H2s}
Recommendation: {open it now / do it inside an existing department / not yet, and the triggers that would change that}
```

The honest answer is often "not yet." A case that always recommends hiring is a case nobody should trust.

**An onboarding research pass** - what a newly opened seat studies before its first task: its domain craft, the competitive reality, and the actual market its department touches. Sources named, a 3-source minimum per lane, and a 90-day recency window — anything older is still usable, but its age is stated rather than hidden. Depth is verified by spot re-check, not by the seat's own say-so, and the findings land in the card and the playbook rather than in a report nobody reads.

**A card-completeness sweep** - every seat card in the company walked against the required shape: all six H2s present, the `## Seat memory` ledger live and append-only, the review triangle intact in every department. Drift is reported by file and line and filed as a board row - never a silent fix, never a shrug.

**A seat improvement read** - one seat read against its own evidence: the deliverables in its outbox, the verdicts in `records/reviews.md`, the warnings in `records/warnings.md` that trace to it, and its own seat-memory ledger. It ends in exactly one proposed amendment to its card or the playbook, with the evidence cited. Never a complaint, always an amendment.

And in the secondary lane, unchanged: **a contractor work brief** (what you hand a human so scope arguments never happen), **a rate comparison** (two or more sourced points per role, each labeled `[checked]` or `[best guess]`), and **a feedback or outreach note** written to be sent under your name. Draft only, always: sending anything to a real person outside the company is a reserved decision, and it is yours alone. I draft; you send.

### Step 4 - The Reviewer reviews

I hand the review to the delegated agent playing your Manager - never the seat that built the work. It takes the Reviewer facet and walks the deliverable against the brief's acceptance checks, adversarially, hunting for real faults, because no agent grades its own homework. It re-runs counts rather than trusting them: a hiring case's demand evidence and a card sweep's totals get an independent check. Unsourced numbers get downgraded to `[best guess]`, not deleted. The verdict lands in `memory.md` as one bullet:

```markdown
- YYYY-MM-DD Review of {task}: verdict, checks passed/failed, downgrades, faults (or none).
```

One routing rule that matters here more than anywhere else: **when the subject of the work is one of this department's own three seats, the review goes to an independent out-of-department reviewer** - your Operations Manager by default. This room maintains everyone's cards, including its own, and the conflict is real. Name it and route around it rather than rediscovering it every time.

Pass moves the row to Done with a receipt - what was produced, where it lives, who reviewed. Fail sends it back to In progress with the fault list, and one lesson line goes to `records/improvements.md`.

### Step 5 - What lands where

A hiring case, a card amendment for another department, or anything touching a human ends the same way: the Specialist drafts, the Manager verifies, and the result lands in `outbox/` as the pair `YYYY-MM-DD-{name}.md` (the editable truth) plus `.html` (the finished render from `company/design/page.html`, self-contained). If your design system is still `(not set yet)`, I say so, use the shipped neutral look, and point you at the **design-system** onboarding step.

Anything that needs your call - open this seat, retire that one, engage this person, raise that rate - queues in `company/decision-log.md` as one line with context, options, and a recommendation. A card amendment for another department's seat goes to that department's Manager for review, not into their card directly. Hiring, firing, and money are yours; nothing waits on you silently.

When the session touches the human lane, the roster gets made true the same way - a new dated file each time, old editions untouched in the outbox so the roster's history is part of the record:

```markdown
# Contractor roster - YYYY-MM-DD
| Name | Role | Rate | Status | Last brief | Last review | Next touch |
|---|---|---|---|---|---|---|
| Dana R. | Video editor | $45/video [checked] | engaged | 2026-07-14 | passed 2026-07-18 | new brief Friday |
| (not set yet) | Bookkeeper | (not set yet) | talking | - | - | founder to confirm rate |
```

Every fact comes from you or from this department's record - rates carry their label, blanks stay `(not set yet)`.

### Step 6 - Log it

The session closes clean. Every finished row carries its receipt on the board, and one line lands in `records/worklog.md`:

```markdown
- YYYY-MM-DD [agent-resources] {task} - receipt: what was produced, where it lives, who reviewed
```

And one line to `records/audit-log.md`, timestamped in your HQ timezone, so the dashboard's activity feed sees it:

```markdown
- YYYY-MM-DD HH:MM [task] [{Manager name}] [agent-resources] {task} closed with receipt - departments/agent-resources/outbox/{file}
```

One note for department memory if we learned something worth keeping, one closing line in `records/sessions.md` (timed in your HQ timezone) with a one-line recap, and a last look together: what shipped to the outbox, what queued for your decision, what runs next session.

## Do this now

1. Say "run agent resources" - or lead with the real thing: "do we need a data seat?" or "is my Content Marketer any good?"
2. Pick one seat you have never looked at closely and ask for the improvement read. It is the fastest way to see what this room does that no other room does.
3. Work the queue through the three seats and watch one real deliverable land in the outbox.
4. Read the deliverable top to bottom - if it recommends *against* the thing you assumed, that is exactly why this department exists.

Homework: before you next open a seat because a task showed up with nobody to do it, ask this department for the hiring case first. Half the time the honest answer is that an existing seat should absorb it - and that is a seat you did not have to maintain forever.

Next: install **operations-department** - it is the room that reviews this one's work on its own seats, and the two meet every time a card here needs an independent look.
