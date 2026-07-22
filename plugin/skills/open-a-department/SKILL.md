---
name: open-a-department
description: One row of your org chart goes from Planned to Active today - this is the hiring moment. Pick one of the twelve departments your company shipped with, give your three agents real names for their Planner, Worker, and Reviewer seats, and walk away with a charter, role cards, a playbook, a live board, and the first tasks already Filed. Use when you say "open a department", "make my first hire", "staff my marketing", "activate sales", "hire my team", "open my first department", "start a department". Run this right after install-your-werkforce, and run first-win the same day.
---

# Open a Department - the day your company makes its first hire

Your org chart is twelve departments, every one of them Planned. Planned means defined but unstaffed - a job posting nobody has answered. Today one row turns Active, and it happens the way real hiring happens: a mission gets written down, three seats get filled by name, each hire gets a role card in their own file, the way the work gets done goes in a playbook, and real tasks land on a board before anyone goes home.

The part people remember is the names. You are not activating a module; you are hiring a Planner who plans, a Worker who does, and a Reviewer who checks, and you will talk to them by name every working day from now on. Nobody shows up for a function; people show up for names.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- One row of `company/org-chart.md` flipped from Planned to Active - your three given names in the Planner, Worker, and Reviewer cells, autonomy `1 - Supervised`, and nothing else on the chart touched
- `departments/<slug>/charter.md` - the mission, KPIs, the three-seat table with role titles, department rules, and the graduation record
- `departments/<slug>/seats/` - one file per hire: the full six-H2 role card copied verbatim from the department reference, who holds the seat, and that seat's own memory
- `departments/<slug>/playbook.md` - the SOPs this department works by from day one, every one marked `(candidate)` until a review proves it
- `departments/<slug>/board.md` seeded, with 1-3 starter tasks sitting at Filed under today's date
- `departments/<slug>/briefs.md`, `departments/<slug>/memory.md`, an empty `drafts/` folder for work in progress, and an empty `outbox/` folder for finished deliverables
- One line in `records/worklog.md` - the hire, on the record, with a receipt

## What I need from you

1. An installed HQ. If there is none, run **install-your-werkforce** first - it builds the tree and the org chart this skill flips.
2. Your pick: which department opens today. One is plenty for today.
3. Three names. Real ones, like new hires.

## How it works

### Step 1 - Pick the department

I read `company/org-chart.md` and show you the roster - twelve departments, in the order they sit on the chart:

| Department | Led by | What it exists to do |
|---|---|---|
| Engineering | CTO | your website, tools, and automations |
| Marketing | CMO | gets you seen by the right people |
| Sales | CRO | turns interest into money - referrals and partnerships first |
| Product | Chief Product Officer | what you sell and where it goes next |
| Design | Chief Experience Officer | how everything looks and feels |
| Client Delivery | Chief Delivery Officer | keeps every promise you sold |
| Finance | Chief Financial Officer | invoices, cash, runway |
| People & Talent | Chief Human Resources Officer | contractors and helping hands |
| Operations | Chief Operating Officer | the company's own machinery |
| Legal | General Counsel | contracts and renewals, in plain language |
| Information Security | Chief Information Security Officer | accounts, access, and customer data |
| Strategy | Chief Strategy Officer | the market, watched honestly |

Every one of these comes fully specified. Each department has a sibling skill of its own - **marketing-department**, **sales-department**, **engineering-department**, and so on (People & Talent lives in **people-department**, Information Security in **security-department**) - and that skill ships a `references/` folder next to its SKILL.md holding five things I consume today:

- `references/mission-and-kpis.md` - the mission line and the KPIs the charter carries
- `references/seats/` - three role cards, one per seat, each exhaustive to the elite-hire bar with the six H2s the format law names (Mission, What excellent looks like, How this seat works, Boundaries, Anti-patterns, Escalation)
- `references/playbook.md` - the starter SOPs, 5-8 of them
- `references/starter-tasks.md` - five starter task ideas built for this mission
- `references/level-3.md` - what this department looks like fully autonomous, so you can see where this is headed before you name anyone

That last file is worth thirty seconds right now: I read you the Level 3 picture for the department you picked. Day one is not that - but that is the destination, and every receipt from today forward is a step toward it.

If you pick **Sales**, **Client Delivery**, or any customer-facing room, one thing gets said out loud before we go further, and it goes in the charter too: we draft, you send - sending anything to a real person outside the company is a reserved decision, and it is yours alone.

If the org chart is missing or malformed, or the row you picked is already Active, I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [open-a-department] finding - action taken`, tell you in one sentence, and keep moving - re-staffing an Active row or picking another department, your call. A warning is a flag on the play, never a stopped game.

**Want a department that is not on the chart?** Still welcome. I append its row to `company/org-chart.md` as Planned first - the chart always tells the truth before we staff anything - then we write the mission, KPIs, and SOPs together from three short questions: what this department exists to do, what its work looks like, and how you would know it is winning. Its role cards follow the same uniform rule the standard nine use, each carrying the six H2s the format law names: the Planner takes a title you choose (a C-suite style name, or simply `{Department} Executive`), the Worker is `{Department} Specialist`, and the Reviewer is `{Department} Manager`. Nothing gets invented about your business; the questions supply structure, `company/profile.md` supplies the facts.

### Step 2 - The naming ceremony

This is the fun part, so we do it properly. Three seats, three hires, and you name each one like a person joining your company - because from today, that is how you will treat them:

- **Planner** - plans the work and writes every brief, including the acceptance checks that will prove the work is done. Never closes work on its own initiative.
- **Worker** - does the work. Hands in deliverables with every claim labeled and files the receipts.
- **Reviewer** - reviews the work adversarially, hunting for real faults - and never reviews work it did itself. No agent grades its own homework.

Each seat also carries a role title from its card - in Marketing your Planner is the CMO, your Worker the Content Marketer, your Reviewer the Content Manager; in Sales it is the CRO, the Account Executive, and the Sales Manager. One reading note so nothing trips you later: "Account Executive" is a Sales role title; the seat words are Planner, Worker, Reviewer.

Named seats matter because they make every task traceable - you always know who planned it, who built it, and who checked it. Pick names you will enjoy saying every morning - people you would actually hire, characters you love, whatever makes you grin. I echo the roster back to you: "{{NAME_1}} is your CMO and plans, {{NAME_2}} makes, {{NAME_3}} checks." Say it out loud once. That is your team.

The moment the names exist, this department is Hired - Level 0 on the autonomy ladder. The rest of this session takes it to Level 1.

### Step 3 - Build the department

I create `departments/<slug>/` and write the files, skipping anything that already exists - your data never gets overwritten. First the charter, in the exact shape `os/formats.md` names:

```markdown
# {{DEPARTMENT}} - charter

Mission: {{ONE_LINE_MISSION}}
Opened: {{DATE}} | Autonomy: Level 1 - Supervised

## KPIs
- {{FROM_MISSION_AND_KPIS}}

## The three seats
| Seat | Role | Name | Role card |
|---|---|---|---|
| Planner | CMO | {{NAME_1}} | plans the work, writes every brief and its checks - full card in seats/cmo.md |
| Worker | Content Marketer | {{NAME_2}} | does the work, labels claims, files receipts - full card in seats/content-marketer.md |
| Reviewer | Content Manager | {{NAME_3}} | reviews adversarially; never reviews their own work - full card in seats/content-manager.md |

## Department rules
1. {{FOUNDER}} owns all reserved decisions. We draft; {{FOUNDER}} sends.
2. Every task lives on board.md and finishes with a receipt.
3. No agent grades its own homework - Done takes the Reviewer's review.
4. What we learn goes in memory.md under today's date.

## Graduation record
- {{DATE}} Opened at Level 1 - Supervised.
```

(The Role column shows Marketing's titles as the example - yours come from the department you picked.) The mission and KPIs come straight from `references/mission-and-kpis.md`, or from our custom interview.

Then the hires get their own files. For each of the three, I copy the role card from the department skill's `references/seats/` verbatim - byte for byte, all six H2s (Mission, What excellent looks like, How this seat works, Boundaries, Anti-patterns, Escalation) untouched, so each seat lands defined to the bar of an elite hire - into `departments/<slug>/seats/<role-slug>.md`, then append the two sections that make it THIS hire:

```markdown
## This seat
Name: {{GIVEN_NAME}}
Hired: {{DATE}}

## Seat memory
```

Seat memory is that agent's own append-only ledger - dated one-line bullets, written by that seat only. Today it is an empty heading; in a month it is the reason your CMO remembers what worked. Renaming a seat or adding one later belongs to **hire-an-agent** - today we hire the standard three.

Then the rest of the department, in one pass:

- `playbook.md` - the H1 `# {{DEPARTMENT}} playbook`, one intro sentence adapting it to your company, then the reference SOPs copied as a numbered list - the numbering stays, each item stays one short paragraph, each ends `(candidate)`. A marker flips to `(proven)` only after a review cites the SOP in a passed deliverable - never on day one, never on hope.
- `briefs.md` - seeded as one line plus its comment, `# {{DEPARTMENT}} briefs`, append-only from here on: every filed brief lands as a dated `### YYYY-MM-DD - {task name}` entry with its Outcome, numbered acceptance checks, due date, and seat.
- `board.md` - the exact board every department runs:

```markdown
# {{DEPARTMENT}} board
<!-- Stages: Filed | In progress | Blocked | In review | Done | Dropped -->
<!-- Receipt is "-" until Done; a Done receipt says what was produced, where it lives, who reviewed. A Blocked row carries "blocked by {what} - recheck {how}" in its Receipt cell until unblocked (then "-" again). Dropped is never relabeled Done. -->

| Task | Stage | Seat | Filed | Due | Receipt |
|---|---|---|---|---|---|
```

Blocked is a real stage, not a shrug: a Blocked row names what it waits on and how to recheck, so the morning run can test the blocker instead of staring at it. And Dropped is never relabeled Done.

- `memory.md` - seeded exactly as:

```markdown
# {{DEPARTMENT}} memory - what this department learns
<!-- One line per note: "- YYYY-MM-DD what we learned." No headings, no sub-bullets. -->
- {{DATE}} Department opened. Planner {{NAME_1}}, Worker {{NAME_2}}, Reviewer {{NAME_3}}.
```

- `drafts/` - an empty folder where work in progress lives. Nothing in drafts/ reaches the record or gets read by any control until it is handed off - agents get the same privacy to think that you would want.
- `outbox/` - an empty folder today. Every finished deliverable lands here as `YYYY-MM-DD-<slug>.md`.

### Step 4 - Flip the row

Now the org chart tells the truth. The chart is a living file, so I edit exactly one row in `company/org-chart.md` - status to Active, the three given names into the Planner, Worker, and Reviewer cells, autonomy to `1 - Supervised` - and touch nothing else on the chart, not a header, not a neighboring row:

```markdown
| Marketing | Active | Priya | Marcus | Elena | 1 - Supervised |
```

Given names on the chart, role titles in the charter - the chart answers "who works here," the charter answers "as what." Level 1 - Supervised means you trigger each task and you see everything. That is exactly right for a department on its first day. **autonomy-ladder** owns the climb from here - Trusted, then Autonomous - each step earned with receipts, never assumed.

### Step 5 - File the first work

The last piece of opening day is real work on the board. The department's `references/starter-tasks.md` carries five starter task ideas built for this mission - pick 1 to 3 that your business actually needs this week, and the Planner puts each one on `board.md` as a Filed row under today's date:

```markdown
| Task | Stage | Seat | Filed | Due | Receipt |
|---|---|---|---|---|---|
| Draft a one-page channel plan for our first channel | Filed | Marcus | 2026-07-20 | 2026-07-21 | - |
| Two-week content calendar with working titles | Filed | Marcus | 2026-07-20 | 2026-07-22 | - |
```

Filed is a real stage, not a wish list: each row has a name, a seat, and a due date, and the full brief gets written the moment the work starts - that is **first-win**'s opening move. If this is Sales or any customer-facing room, the tasks are draft-shaped on purpose: messages, replies, and sequences end up in the outbox for you to send, because sending is yours alone.

### Step 6 - Log it

First I append one `[hire]` line to `records/audit-log.md`, the master log every action lands in - in the pinned shape, with the time in your HQ timezone from `HQ.md`, never UTC:

```markdown
- {{DATE}} HH:MM [hire] [founder] [<slug>] opened the {{DEPARTMENT}} department at Level 1 - Supervised - departments/<slug>/charter.md
```

Then one line to `records/worklog.md` in the standard shape:

```markdown
- {{DATE}} [<slug>] Opened the {{DEPARTMENT}} department - receipt: charter, seats/, playbook, board, briefs, memory, drafts/, and outbox/ at departments/<slug>/, org-chart row Active at Level 1 - Supervised, reviewed by {{FOUNDER}}
```

You are the reviewer of record on this one - hiring is a reserved decision, and you just made it. Then I show you the flipped org chart, and for the first time it has an Active row with three names on it. From tomorrow, the room itself is run by its own department skill - **marketing-department** if you opened Marketing, and so on - where the desk you talk to hands each seat's task to a delegated agent and stays with you while the work runs (and, if your AI runtime cannot spawn delegated agents, plays the seats in turn and says so out loud). This skill's job ends when the door is open.

## Do this now

1. Say "open a department" and pick your row - one of the twelve, or a new one of your own.
2. Name your three hires and hear the roster read back.
3. Watch the department get built, then pick 1-3 starter tasks for the board.
4. Look at the org chart - one row Active, three names, work Filed. That happened in one sitting.

Homework: open `departments/<slug>/seats/` and read all three role cards once, top to bottom - then look at the Filed rows and decide which task goes through the loop first, because that is happening today, not tomorrow.

Next: run **first-win** now, in this same session if you can - it takes one Filed task all the way to Done with a receipt, and it is the onboarding step that follows this one in `company/onboarding.md` (the **onboarding** skill keeps that checklist). Do not end day one without it.
