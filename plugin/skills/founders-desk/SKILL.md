---
name: founders-desk
description: Seven calls never leave your hands - external sends, spending money, changing prices, public claims, hiring and firing, deleting work, ratifying visions and strategy - and this desk is where they wait for you. Departments queue them in company/decision-log.md and keep working; I walk the queue oldest first with the CEO's evaluation under each ask and a written runbook before any big move executes. Use when you say "werkforce, decisions", "what's waiting on me", "show my decision queue", "what needs my call", "clear my queue", "am I the bottleneck". Run this daily once any department is Active.
---

# Founder's Desk - the seven calls that are yours alone

Here is the deal at the heart of your workforce: your departments plan, draft, build, and check their own work all day, and in exchange, seven decisions never leave your hands. This skill is your side of that deal. You are the Founder of this company - you own the direction and the reserved calls; the departments own the boards.

The mechanism that makes this livable is the decision queue. Nothing waits on you in the moment, and nothing happens without you where it counts. Work streams past the desk; decisions wait on it.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- The reserved list - the seven decisions that are yours forever, each with the reason why
- A decision queue in `company/decision-log.md` that fills while your departments work and empties when you say "werkforce, decisions"
- The CEO's evaluation attached under each ask - an EVAL line that endorses or challenges, citing your business model - whenever the CEO seat is active
- A written runbook before any big move executes: the checklist and the undo plan, inside the QUEUED line's context, so you always know what happens, in what order, and how to roll it back
- A workforce that never stalls: any agent that hits a reserved decision queues it and keeps working everything else
- A permanent paper trail: every decision lands as its own dated DECIDED line, and the original ask stays on the page forever

## What I need from you

1. An HQ with at least one Active department - **install-your-werkforce** and **open-a-department** handle that if it's missing.
2. A few minutes at the desk. Most decisions take one sentence.
3. Plain answers. "Yes", "no", and "not yet" all count - "not yet" keeps the line honestly waiting instead of silently forgotten.

## How it works

### Step 1 - Learn the reserved list

Seven decisions, and only the founder ever makes them:

1. **Sending anything to a real person outside the company** - your reputation rides on every send, and reputation is not delegable.
2. **Spending money** - it is your money, so every dollar out is your call.
3. **Changing prices** - a price is a public promise about value, and your promises are yours to make.
4. **Making public claims** - the company speaks in your name, and what it says in public, you answer for.
5. **Hiring or firing (activating or closing a department or seat)** - the shape of your company is a people call, and people calls belong to the founder.
6. **Deleting work** - finished work is company memory, and only you may erase memory.
7. **Ratifying a vision or a change of strategy** - the CEO drafts and recommends direction, executives deliberate it, but the company points where you say it points. Nobody else ratifies.

The pattern behind all seven: money, reputation, people, and direction are yours alone. Everything else is delegable - and should be.

### Step 2 - How the queue fills

Any agent in any department that runs into a reserved decision does exactly two things. First, it appends one line to `company/decision-log.md` in the shape `os/formats.md` sets:

```markdown
- YYYY-MM-DD [department] QUEUED: what needs deciding - context - options - recommendation
```

Second, it keeps working everything else on its board. If a task cannot move another inch without your call, its board row goes to Blocked with `blocked by decision - recheck decision log` in the Receipt cell - visible, honest, and rechecked every morning run - while every other row keeps moving. That is the whole protocol. No department stalls its day because you were in a meeting, and no agent ever "helpfully" makes a reserved call to keep things moving.

If the decision log is missing or malformed when an agent goes to write, it appends `- YYYY-MM-DD [the running skill] finding - action taken` to `records/warnings.md`, adds one lesson line to `records/improvements.md`, creates or repairs what is safe to fix, and keeps going. A warning is a flag on the play, never a stopped game.

### Step 3 - "werkforce, decisions" empties it

Say the phrase and I open the queue, oldest first - the oldest ask has waited longest and is most likely blocking something. A queue item is open when no later DECIDED line references it. For each open item you get:

- **The ask** in one sentence, with its context and options.
- **The CEO's EVAL line**, read to you right under the ask - if your org chart shows the CEO seat Active. The CEO does not decide; it evaluates, and its line is already in the log:

```markdown
- YYYY-MM-DD [ceo] EVAL re: {ask} - endorse or challenge - reasons citing the business model
```

  An endorse tells you the ask fits your offer ladder, your prices, and your capability floor. A challenge tells you exactly which business-model field it collides with. If the CEO seat is still Planned, I say so in one sentence and offer **ceo-seat** - and then we keep walking the queue exactly as before; an advisor is an upgrade, never a gate.

- **My recommendation**, always labeled `[best guess]` - a recommendation, never a decision.
- **What unblocks** the moment you decide - which task, which board, which draft.

You answer in a sentence. The log is append-only - nothing is ever rewritten - so I append a NEW dated line in the exact shape from `os/formats.md`, and the original QUEUED line stays as it was:

```markdown
- 2026-07-20 [sales] DECIDED: send the Sam draft as written - he went quiet a week ago and the ask is clean (re: the 2026-07-19 ask)
```

Then I un-stick whatever was waiting: the Blocked row moves back to In progress with `-` in its Receipt cell, the draft comes off hold, the department picks the task back up on its next run. "Not yet" is a legal answer too - nothing gets appended, the item simply stays open, and it greets you again next time. And when the decided item is a ratification - a vision or a strategy change - the verdict also lands where strategy law says it lives: a new dated `Founder's verdict:` line appended at the end of that entry in `company/strategy.md`, the earlier `Pending` line staying visible above it.

### Step 4 - The big-move runbook

Some reserved decisions are one inch of consequence: send one email, approve one small draft. Others are a cliff - the launch send to your whole list, the first real spend, the price change on your public page. For a big move, one more law applies before anything executes: **the runbook gets written into the QUEUED line's context first.** The checklist - what happens, in what order - and the written undo plan - how we roll it back if it goes wrong:

```markdown
- 2026-07-20 [marketing] QUEUED: send the launch email to the full list? - runbook: 1) final read of outbox/2026-07-20-launch.md 2) send to the 42 names in the client book 3) note the send in each customer file; undo: correction draft ready at outbox/2026-07-20-launch-correction.md, and the list is untouched until you press send - options: send, edit first, hold - recommendation: send [best guess]
```

No runbook, no execution - if a big move reaches the desk without one, I write it with the queuing department before you decide, as a fresh QUEUED line carrying the full context - and the eventual DECIDED line references the original ask's date too, so the runbook-less line closes instead of sitting open forever. This is not bureaucracy; it is the difference between "I think it went out" and knowing exactly what happened and exactly how to walk it back. An undo plan that says "this cannot be undone" is itself valuable - you deserve to know that BEFORE the click, not after.

### Step 5 - The drafts law, in one story

Your Sales department gets a brief: follow up with Sam, the prospect who went quiet. The Planner files it with acceptance checks, the Worker writes the actual email - subject line, body, the ask - and the Reviewer tears at it until every check passes. Each of those seats runs as a delegated agent the department's desk hands the work to while it stays available; if the runtime cannot spawn delegated agents, the desk plays the seats in turn and says so. The finished draft lands in `departments/sales/outbox/`, the board shows Done with a receipt, and one line lands on your desk:

```markdown
- 2026-07-20 [sales] QUEUED: send the follow-up to Sam? - draft in outbox/2026-07-20-sam-follow-up.md - options: send as is, edit first, hold - recommendation: send as is [best guess]
```

Notice what did NOT happen: nobody emailed Sam. The department did every ounce of the work and stopped exactly one inch short of the send. Tomorrow you read the draft, the CEO's EVAL if the seat is active, say "send it", a DECIDED line lands in the log referencing that ask, and you press send yourself. That inch never shrinks - at Level 1 Supervised and at Level 3 Autonomous alike, the send button stays yours forever. I draft; you send.

### Step 6 - Log it

Before I close, I say what I am recording and where. After a desk session I append one line to `records/worklog.md`:

```markdown
- YYYY-MM-DD [company] Decision queue session - receipt: N lines DECIDED in company/decision-log.md, waiting tasks un-stuck on their boards
```

And one line to the master audit log, `records/audit-log.md`, timestamped in the HQ timezone from `HQ.md` - never UTC - in the shape `os/formats.md` pins (the type is `decision`):

```markdown
- YYYY-MM-DD HH:MM [decision] [founder] [company] N reserved decisions cleared at the desk - company/decision-log.md
```

The asks, the EVALs, and the answers all stay in `company/decision-log.md` for good - appends only, never edits, never deletions. A year from now you can read every call you made, what your CEO thought of it, and exactly why you decided.

## Do this now

1. Read the reserved list once more - seven items, and they are the whole deal.
2. Say "werkforce, decisions" and see what's waiting. An empty queue is a fine first answer.
3. Decide the oldest line in one sentence and watch the waiting work un-stick.

Homework: end today with an empty queue - every open item decided or honestly deferred with a plain "not yet", nothing silently sitting. That habit keeps you the Founder instead of the bottleneck.

Next: run **run-the-day** so the queue fills and empties as part of every morning - "werkforce, morning" flags waiting decisions at standup, and this desk clears them. When you want an advisor's read attached to every ask, **ceo-seat** activates the evaluation line you saw in Step 3.
