---
name: hire-an-agent
description: Grow a department that is already working - add a second Worker when volume climbs, rename an agent when your taste changes, or sharpen a role card with a specialty. I write the new card into the department's seats/ folder, keep the charter and org chart telling one story, restate the law that keeps quality honest - the Reviewer never reviews their own work - and log the hire. Use when you say "hire an agent", "add a seat", "rename my agent", "we need another Worker", "sharpen this role card", "grow the team". Run this after open-a-department has a department Active - that skill builds the team; this one grows it.
---

# Hire an Agent - grow the team the work already earned

In a normal company, growing the team means job posts, interviews, and a month of waiting. Here it means one new file and one honest row. An agent is its role card - a mission, its boundaries, how the seat works, all in one file under `departments/<slug>/seats/` - and the moment the card exists, the seat can work. That makes hiring cheap, which is exactly why the rule matters: you hire when the work demands it, not because a bigger roster looks nicer on the org chart.

Three reasons bring founders here. A name stops fitting and you want it changed - your team, your taste. Volume outgrows one Worker and the queue needs a second pair of hands. Or a seat has been generalizing and you want its card sharpened to a specialty. All three are five-minute changes, and all three end the same way: with the one law of the loop restated and intact.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A full role card for any new hire at `departments/<slug>/seats/<role-slug>.md` - mission, boundaries, working method, plus that seat's own `## This seat` lines and its append-only `## Seat memory`
- A new row in the seat table of `departments/<slug>/charter.md` - facet, role title, name, and a one-line pointer to the full card
- `company/org-chart.md` updated whenever a facet's holder changed, so the chart and the charter tell the same story
- A dated note in `departments/<slug>/memory.md` recording what changed and why - past receipts keep the old name, so nothing is erased
- The hire recorded in `company/decision-log.md`, one `[hire]` line in `records/audit-log.md`, and one line in `records/worklog.md`
- The Reviewer law checked and restated after every change of seats

## What I need from you

1. The Active department and the change - a new seat, a rename, or a sharpened role card.
2. The name (say the word and I will offer three) and the specialty in one plain sentence.
3. Your say-so. Hiring is a reserved decision - it belongs to you alone, so I move only on your word.

## How it works

### Step 1 - Read the charter

First I say what I am about to do: read the department's current shape before changing anything. I find your HQ, then read `departments/<slug>/charter.md`, the `seats/` folder, and `company/org-chart.md` for the department you name. I confirm the department is Active and the three seats - Planner, Worker, Reviewer - sit where the charter says they do, each with a card in `seats/`. (One reading note: "Account Executive" is a Sales role title; the seat words are Planner, Worker, Reviewer.) If anything looks off - a Planned department, a seat table missing a Reviewer, a name that differs between charter and org chart, a seat row whose card file is missing - I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [hire-an-agent] finding - action taken`, tell you in one sentence, and keep moving. A warning is a flag on the play, never a stopped game.

### Step 2 - Make the change

Three doors - pick yours.

- **A new seat.** For when volume grew. You give me the name, the facet, and the specialty; almost every new hire is a second Worker - two Workers, one Reviewer is a healthy shape. The role title follows the department's own titles (a second Content Marketer in Marketing, an Account Executive in Sales, a `{Department} Specialist` in the other nine); the specialty lives in the card, never in the title. The card itself comes from one of two places:

  - a standard role: I copy the card verbatim - byte for byte - from the department skill's `references/seats/` folder, exactly as **open-a-department** did on opening day;
  - a custom specialty with no reference card: I write the card fresh by the uniform rule, to the bar of an elite hire, from your one-sentence specialty and `company/profile.md` - never from invention. Every role card carries the same six H2s the format law names, so the card is exhaustive and the Reviewer has falsifiable statements to hold work to:

```markdown
# {{ROLE_TITLE}} - role card

## Mission
{{WHAT_THIS_SEAT_OWNS_IN_ONE_OR_TWO_SENTENCES}}

## What excellent looks like
{{4-8 FALSIFIABLE_STATEMENTS_OF_WHAT_THIS_SEAT'S_WORK_MEETS_BEFORE_IT_IS_OFFERED}}

## How this seat works
{{THE_WORKING_METHOD_TOOLS_AND_CADENCE_IN_A_FEW_PLAIN_LINES}}

## Boundaries
{{WHAT_IT_NEVER_DOES - reserved decisions stay the founder's}}

## Anti-patterns
{{THE_NAMED_FAILURE_MODES_THE_REVIEWER_CHECKS_FOR}}

## Escalation
{{EXACTLY_WHEN_THIS_SEAT_STOPS_AND_QUEUES_A_DECISION_OR_ASKS_THE_FOUNDER}}
```

  Either way the card lands at `departments/<slug>/seats/<role-slug>.md` - and if that filename is already taken by the first holder of the title, the specialty joins the slug (`content-marketer-email.md`), so every hire keeps a file of their own. Then I append the two sections that make it THIS hire:

```markdown
## This seat
Name: {{GIVEN_NAME}}
Hired: {{DATE}}

## Seat memory
```

  Then one row appended to the charter's seat table, in its exact shape:

```markdown
| Worker | {{ROLE_TITLE}} | {{NAME}} | does the work - specialty: {{ONE_LINE_SPECIALTY}}; full card in seats/{{role-slug}}.md |
```

  And because a facet's holders just changed, the department's Worker cell in `company/org-chart.md` now carries both given names. The new seat starts working at the department's current autonomy level - no reset, no probation.

- **A rename.** Your taste changed, and it is your team. A rename updates the name everywhere it currently appears: the charter's seat table, the department's cell in `company/org-chart.md`, and the `Name:` line under `## This seat` in the seat's own file. Board rows filed from today carry the new name in their Seat cell; rows already on the board keep the name they were filed under - old rows stay, history is history. Then two dated lines: `{{OLD_NAME}} is now {{NEW_NAME}}` appended to that seat's `## Seat memory`, and the same note to `departments/<slug>/memory.md`. Old receipts and worklog lines keep the old name - the record is history, and history stays true.

- **A sharpened role card.** The seat and name stay put; the card gets truer. In `seats/<role-slug>.md` I sharpen the `## Mission` to name the specialty, update the one-line pointer in the charter's seat table to match, and append a dated line to `## Seat memory` and to `memory.md` saying what sharpened and why. The seat's boundaries never loosen in a sharpening - a sharper card owns less, more deeply.

### Step 3 - Restate the law

Whenever seats change, the law gets said out loud: no agent grades its own homework - the Reviewer never reviews work they did themselves, and a department always keeps a Reviewer distinct from whoever produced the thing under review. After the change I check the roster against it. A second Worker makes this easier, not harder: two Workers, one Reviewer, nobody grading their own homework. If a change would ever leave the department without a distinct Reviewer, I append a dated warning to `records/warnings.md`, tell you plainly, and propose the fix - filling that seat is a hiring decision, so it lands on your desk while everything else keeps moving.

### Step 4 - Log it

Four appends, never an overwrite - and I say what each one records as it lands:

- One dated line in `departments/<slug>/memory.md` - what changed and why, in plain words.
- One dated line in `company/decision-log.md`, in the standard decided shape - `- YYYY-MM-DD [<slug>] DECIDED: hired {{NAME}} as second Worker - founder's call, decided live (re: volume outgrew one Worker)` - because you made a hiring decision today, and the record should say so.
- One `[hire]` line in `records/audit-log.md`, the master log, in the pinned shape (time in your HQ timezone from `HQ.md`, never UTC):

```markdown
- YYYY-MM-DD HH:MM [hire] [founder] [<slug>] hired {{NAME}} as second Worker - departments/<slug>/seats/{{role-slug}}.md
```

- One line in `records/worklog.md` in the standard shape:

```markdown
- YYYY-MM-DD [<slug>] Hired {{NAME}} as second Worker - receipt: role card at departments/<slug>/seats/{{role-slug}}.md, charter seat row added, org-chart cell updated, reviewed by {{FOUNDER}}
```

Then I read the updated seat table back to you. That is your team, one seat bigger or one name truer than it was ten minutes ago.

## Do this now

1. Say "hire an agent" and name the department and the change - hire, rename, or sharpen.
2. Give me the name and the specialty in one sentence, or ask for three name ideas and pick one.
3. Read the updated seat table back, then open the new card in `seats/` and read it once. It should feel like your team, because it is.

Homework: give the new or renamed seat its first task today - run **brief-writer** (it turns a ramble into a filed brief) and put that brief in the new seat's name, so the hire proves itself before dinner.

Next: run **autonomy-ladder** when the team is set and you want them running alone.
