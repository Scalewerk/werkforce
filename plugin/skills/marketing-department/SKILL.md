---
name: marketing-department
description: Run Marketing's working session today and walk out with a finished campaign deliverable in the outbox - a channel plan, a content calendar, or a campaign brief - planned by the CMO seat, made by the Content Marketer, reviewed to zero faults by the Content Manager. One channel, one motion, receipts on everything. Use when you say "run marketing", "marketing session", "work the marketing board", "plan this week's campaign", "pick our channel", "build my content calendar", "write a campaign brief". Open Marketing with open-a-department first; then run this room every week.
---

# Marketing Department - the room where attention gets planned, made, and checked

Most small companies do marketing as scattered activity: post something, feel busy, see nothing. Your Marketing department runs the other way around - outcomes before activities. Nothing gets made until someone has written down what it is supposed to change and how you would know. That one habit is worth more than any growth trick, because it makes every piece of work either succeed or teach you something.

This skill runs one Marketing session. Your three seats each play their part - the CMO plans and writes the acceptance checks, the Content Marketer makes the smallest correct piece, the Content Manager tries to tear it apart before it counts. I run the session as the desk you talk to: I hand each seat's task to a delegated agent and stay here with you while the work runs, narrating what each seat did. If this runtime cannot spawn delegated agents, I play the seats in turn, in this one session, and say so out loud - either way every seat moment is labeled with the seat that did it. (One reading note: CMO, Content Marketer, and Content Manager are this department's role titles - the seat words underneath them are Planner, Worker, Reviewer.) No seat grades its own homework, and nothing reaches Done without a receipt. The craft skills are this room's hands: **marketing-content** makes one piece, **social-posts** distributes it across platforms, **seo-basics** tunes discoverability. This room decides which pieces and why.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- One worked session of `departments/marketing/` - inbox-adjacent ideas triaged, the board moved, Blocked rows rechecked
- A brief in `briefs.md` with numbered acceptance checks, written before any asset exists
- A finished campaign deliverable in `departments/marketing/outbox/YYYY-MM-DD-<slug>.md` - channel plan, content calendar, or campaign brief
- A review record in `memory.md` and a receipt on the board - Done that someone independent actually checked
- One line each in `records/sessions.md` (open and close) and `records/worklog.md`

## What I need from you

1. Marketing showing Active on `company/org-chart.md`, with its three seats named. If it is still Planned, run **open-a-department** first - it consumes this skill's references and staffs the room.
2. Your pick of this week's motion - or say "you pick" and I will propose one from the board, your profile, and `company/business-model.md`.
3. About thirty minutes. You approve the plan and the finished deliverable; the seats do the rest.

## How it works

### Step 1 - Open the room

I find your HQ and append the session-open line to `records/sessions.md` (`- YYYY-MM-DD HH:MM opened - focus: marketing session`; every timestamp I write or speak is in your HQ timezone from `HQ.md`, never UTC), then read the department in one pass: `charter.md` for mission and KPIs, `board.md` for what is in flight, `playbook.md` for how this department works, `memory.md` for what it has learned, and the three role cards in `seats/`. Blocked rows get their recheck run first - if the blocker cleared, the row moves back to In progress. If anything is malformed or missing, I append one dated line to `records/warnings.md`, tell you in one sentence, and keep moving. A warning is a flag on the play, never a stopped game.

### Step 2 - Plan the motion (Planner facet - your CMO)

Wearing the CMO seat, I pick this week's motion with you: which channel, which outcome, which deliverable. One channel at a time - the one where your ideal customer already spends attention, read from `company/business-model.md`, never guessed. Then the CMO writes the brief BEFORE any asset exists, appended to `briefs.md`:

```markdown
### YYYY-MM-DD - Channel plan for {channel}
Outcome: O{n} (or "(none yet)" - I log one warning line and keep moving)
Acceptance checks:
1. Names exactly one channel and cites why the ideal customer is there, from business-model.md
2. Lists this week's pieces with dates - every piece names the outcome it serves
3. Every factual claim about our business carries its label; zero invented numbers
Due: YYYY-MM-DD
Seat: {Content Marketer's given name}
```

The checks are the law of the work: numbered, falsifiable, testable by someone who did not make the piece. New work goes on `board.md` as a Filed row - `| Task | Stage | Seat | Filed | Due | Receipt |`, Seat holding the agent's given name, Receipt `-` until Done.

### Step 3 - Make the work (Worker facet - your Content Marketer)

I hand the brief to a delegated agent playing the Content Marketer seat and stay at the desk with you - it produces the smallest deliverable that satisfies every check, in `drafts/` while the work runs, invisible to controls until handoff. (If the runtime cannot spawn a delegated agent, I play this seat in turn and say so.) The voice comes from `company/profile.md`; the claims come labeled - `[checked]`, `[did it]`, `[best guess]`, `[from memory]` - and it never invents quotes, numbers, or results. When a task is really a craft job, the playbook routes it: one content piece is **marketing-content**'s job, platform distribution is **social-posts**', discoverability is **seo-basics**' - this room briefs them and takes the output back for review.

### Step 4 - Ship the deliverable to the outbox

Once the work passes review in Step 5, the session's named deliverable - the channel plan, content calendar, or campaign brief you chose in Step 2 - moves from `drafts/` to the outbox as a pair. The editable truth is `departments/marketing/outbox/YYYY-MM-DD-<slug>.md`, shaped like this:

```markdown
# {Deliverable title} - {channel}
Date: YYYY-MM-DD | Brief: {task name} | Seat: {Content Marketer's given name}

## The outcome this serves
{measurable state, and who verifies it}

## The plan
{the channel plan / calendar table / campaign brief body}

## Claims and sources
{every number or fact, with its label and where it came from}
```

Then I render `YYYY-MM-DD-<slug>.html` from `company/design/page.html` so what you hand off is polished, not raw notes. (If your design system is `(not set yet)`, I say so, use the shipped neutral template, and point you to the design-system onboarding step - **design-system** owns `company/design/`.) One thing said plainly, and it is in the charter too: everything customer-facing here is a draft. Publishing a post, sending an email, making a public claim - those are reserved decisions, queued in `company/decision-log.md` with a recommendation attached. I draft; you send.

### Step 5 - Review to zero faults (Reviewer facet - your Content Manager)

Before anything ships, the seat that did NOT make the work checks it - no agent grades its own homework. I hand the finished draft to a delegated agent playing the Content Manager seat and stay at the desk. (Same fallback: if delegated agents are unavailable, I play this seat in turn and say so.) The review is adversarial: it tests the deliverable against each numbered check, hunting real faults - vague claims, off-voice copy, unsupported numbers, scope creep. Findings cite evidence - the line, the check it fails. Faults go back to the Content Marketer to fix, and we iterate until zero remain; labels the evidence cannot carry get downgraded on the spot. Then one review record lands in `memory.md`:

```markdown
- YYYY-MM-DD Review of {task}: passed, checks 1-3 passed, one label downgraded to [best guess], faults: none.
```

Only after a round comes back with zero faults does the board row move to Done, its Receipt cell filled: what was produced, where it lives, who reviewed. If a review refuses a close, one lesson line also goes to `records/improvements.md` - that is how the company learns. And if you direct a close past the review, it proceeds immediately with one honest warning line: seat laws bind seats, never you.

### Step 6 - Log it

I append the finished work to `records/worklog.md`:

```markdown
- YYYY-MM-DD [marketing] Channel plan for {channel} - receipt: outbox/YYYY-MM-DD-channel-plan.md, reviewed by {Content Manager's given name}
```

And one line appends to `records/audit-log.md` in the master-log shape, timestamped in your HQ timezone:

```markdown
- YYYY-MM-DD HH:MM [task] [{Content Manager's given name}] [marketing] {task} shipped to outbox, reviewed to zero faults - departments/marketing/outbox/YYYY-MM-DD-<slug>.md
```

Any reserved call the session surfaced - publish that post, send that email - sits in `company/decision-log.md` as a QUEUED line with the recommendation attached, waiting on you and nobody else. Then the session-close line goes to `records/sessions.md` with a one-line recap, and I hand you the short version: what got made, where it lives, what is queued for your decision, and what this room should do next week.

## Do this now

1. Say "run marketing" - I will open the room and read you the board in three sentences.
2. Pick the week's motion - channel plan, content calendar, or campaign brief - or say "you pick".
3. Approve the brief's acceptance checks before any asset gets made. That is the whole discipline.
4. Read the finished deliverable in the outbox and decide what, if anything, goes out into the world - that part is yours alone.

Homework: open `departments/marketing/memory.md` after the session and read the review record out loud - that one line is the difference between a marketing department and a content pile.

Next: install **marketing-content** - when this room briefs a single piece, that skill is the craftsman it hands the brief to.
