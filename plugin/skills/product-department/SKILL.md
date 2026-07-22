---
name: product-department
description: Run Product's working session - pin down what you actually sell, what is in and out of the current version, and what customers have asked for, then ship a reviewed roadmap one-pager to the outbox with a receipt. Price changes never happen here; every one queues to your decision log, because changing prices is yours alone. Use when you say "run product", "product session", "update the roadmap", "what is in this version", "define the offer", "what did customers ask for", "work the product board". Open the Product row with open-a-department first; then run this any day the offer feels fuzzy.
---

# Product Department - the room where you decide what you sell

Most solo founders carry the product in their head, and heads leak. The offer comes out slightly different in every proposal, the "current version" grows a feature every time someone asks nicely, and three months in, nobody - including you - can say in one paragraph what the company actually sells. That is not a sales problem or a marketing problem. It is a Product problem: the definition has no home.

This session gives it one. Product owns three written things: the definition of the offer, the edges of the current version (what is in, what is out), and the roadmap that answers every customer ask with in, next, or not planned. One session produces one deliverable - a roadmap one-pager in the outbox, reviewed, with a receipt. One boundary holds the whole time: this department defines what you sell; **offers-and-proposals** drafts the sales-facing artifact that sells it, and any price move queues to you.

I run the session as the desk you talk to: I hand each seat's task to a delegated agent and stay here with you while the work runs, narrating what each seat did. If this runtime cannot spawn delegated agents, I play the seats in turn, in this one session, and say so out loud - either way every seat moment is labeled with the seat that did it. (One reading note: Chief Product Officer, Product Specialist, and Product Manager are this department's role titles - the seat words underneath them are Planner, Worker, Reviewer.) No seat grades its own homework, and nothing reaches Done without a receipt.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A worked board: Filed rows picked up, Blocked rows rechecked, work moved through review honestly
- The ask list: every product ask from `company/customers/` and `inbox.md`, each line with its source quoted and a claim label
- The session deliverable: `departments/product/outbox/YYYY-MM-DD-product-roadmap.md` - what we sell, In the current version, Next, Not planned - reviewed by the Product Manager before it lands
- Any price question queued to `company/decision-log.md` with a recommendation attached - never decided here
- The record kept: review line in `departments/product/memory.md`, receipt on the board, one line in `records/worklog.md`, session lines in `records/sessions.md`

## What I need from you

1. An Active Product row. If `company/org-chart.md` shows Product as Planned, run **open-a-department** first - it hires the three seats this session plays.
2. Ten focused minutes at the start: you are the founder in the room, and in a company your size you are also the best source of market truth I have.
3. Answers when the files go quiet. Where customers and the business model are silent, I ask you - I never fill product gaps with guesses.

## How it works

### Step 1 - Open the room

I open one line in `records/sessions.md` (`- YYYY-MM-DD HH:MM opened - focus: Product session`; every timestamp I write or speak is in your HQ timezone from `HQ.md`, never UTC), then read the department: `departments/product/charter.md` for mission and KPIs, `board.md` for what is in flight, `playbook.md` for how this department works, and the three seat cards in `seats/`. If an earlier session line sits unclosed, I tell you in one sentence and keep working - awareness, never a lock.

If Product is not Active yet, I append one dated line to `records/warnings.md` (`- YYYY-MM-DD [product-department] finding - action taken`), tell you in one sentence, and point you to **open-a-department** - a warning is a flag on the play, never a stopped game.

### Step 2 - Read what customers actually asked for

Before anyone plans anything, we ground the session in real demand. I read `company/business-model.md` for what the company claims it can deliver (Yes / Now / Not yet), then walk `company/customers/` histories and `inbox.md` for product asks - features requested, complaints, "can it also" questions. Each one lands on the ask list with its source quoted:

```markdown
- "Can I get the report as a spreadsheet too?" - customers/acme-co.md, 2026-07-14 [checked]
- Two leads asked about a monthly option - inbox.md 2026-07-18 [checked]
```

I read the inbox for signal only - adopting an inbox line into work is intake's job, so anything here that should become a task gets flagged for your next morning run. And where the files are silent, I ask you directly: what have people been asking you for? Your answer goes on the list labeled honestly - a true zero beats a flattering guess.

### Step 3 - Work the queue in seat facets

Now the board, three seats, one session, each seat's task handed to a delegated agent while I stay at the desk with you and narrate. (If this runtime cannot spawn delegated agents, I play the seats in turn and say so.) The disambiguation up front: the seat words are Planner, Worker, Reviewer - and in this department those seats are the Chief Product Officer, the Product Specialist, and the Product Manager, by the names you gave them.

**The Planner plans.** The Chief Product Officer reviews Filed rows, rechecks any Blocked row against its `blocked by {what} - recheck {how}` note, and writes the brief for what runs today - outcome served (or `Outcome: (none yet)` with one warning line), numbered falsifiable acceptance checks, due date, seat. A brief born from a customer's ask is written in the customer's own words and marked `Type: story`. This seat never closes work on its own initiative.

**The Worker builds.** I hand the brief to a delegated agent playing the Product Specialist, which works in `drafts/` - invisible to controls until handoff - grounding every line in the files or your answers, labeling every claim `[checked]`, `[did it]`, `[best guess]`, or `[from memory]`. The handoff names where the draft lives and which checks it claims to pass. It is a handoff, never a self-declared Done.

**The Reviewer reviews.** I hand the finished draft to a delegated agent playing the Product Manager - never the author, because no seat grades its own homework - which walks the acceptance checks one by one, chases every cited source, and hunts the department's signature fault: a promise past the current version's edge. The review record goes to `memory.md` as one line: verdict, checks passed and failed, downgrades, faults or none. If the close is refused, one lesson line also goes to `records/improvements.md`. If you direct a close anyway, it proceeds immediately with one honest warning line - seat laws bind seats, not you.

### Step 4 - The roadmap one-pager

The session's named deliverable, and it ships as the outbox pair. The Specialist drafts it in `drafts/`, the Product Manager reviews it, and it lands as `departments/product/outbox/YYYY-MM-DD-product-roadmap.md` - the editable truth - alongside `YYYY-MM-DD-product-roadmap.html`, the finished render I compile from `company/design/page.html` so what you hand off is polished, not raw notes. (If your design system is `(not set yet)`, I say so, use the shipped neutral template, and point you to the design-system onboarding step - **design-system** owns `company/design/`, and **onboarding** tracks when that step is due.) The markdown page reads:

```markdown
# {{COMPANY}} product roadmap - {{DATE}}

What we sell: {{ONE_PARAGRAPH_OFFER_DEFINITION}} [checked]

## In the current version
- {{WHAT_A_BUYER_GETS_TODAY}} (business-model.md: Yes) [checked]

## Next
- {{ITEM}} - asked for by {{WHO}} ({{SOURCE_FILE_OR_INBOX_LINE}})

## Not planned
- {{ITEM}} - {{ONE_LINE_REASON}}
```

Three rules make this page worth having. Every line names its source - a customer file, an inbox line, or you. The In list is the company's promise edge: anything any department wants to claim in a proposal or a post gets checked against it. And "Not planned" is said out loud with a reason, because an honest no today beats a broken maybe next quarter.

This page is the internal truth. When you want the version a prospect reads - the offer stacked, priced, and persuasive - that is **offers-and-proposals**, and it drafts from this definition rather than reinventing it.

### Step 5 - Price moves queue to you

Anywhere this session touches price - a customer balking, a margin looking thin, the Chief Product Officer wanting to test a higher number - the department's move is always the same: recommend, never change. Changing prices is one of your seven reserved decisions, so the question goes to `company/decision-log.md`:

```markdown
- {{DATE}} [product] QUEUED: change {{OFFER}} price from {{CURRENT}} to {{PROPOSED}} - context: {{WHY, citing named business-model fields}} - options: keep / change / test on next deal - recommendation: {{THE_CALL_AND_THE_REASON}}
```

Nothing waits on you silently - the queue line exists the moment the question does, and **founders-desk** walks you through the verdict whenever you are ready. Until you decide, every draft in this company keeps carrying the current price.

### Step 6 - Log it

The session closes on the record. For each finished piece of work, one line to `records/worklog.md`:

```markdown
- {{DATE}} [product] {{TASK}} - receipt: roadmap one-pager at departments/product/outbox/{{DATE}}-product-roadmap.md, reviewed by {{PRODUCT_MANAGER_NAME}}
```

And one line appends to `records/audit-log.md` in the master-log shape, timestamped in your HQ timezone:

```markdown
- YYYY-MM-DD HH:MM [task] [{{PRODUCT_MANAGER_NAME}}] [product] roadmap one-pager shipped to outbox, reviewed to zero faults - departments/product/outbox/{{DATE}}-product-roadmap.md
```

The board rows show their true stages with receipts on the Done ones, anything learned goes to `departments/product/memory.md` under today's date, and I close the session line in `records/sessions.md` with a one-line recap. Then I read you the state of the room in three sentences: what shipped, what is queued for you, what runs next session.

## Do this now

1. Say "run product" and let me open the room and read the board.
2. Answer the demand question honestly: what have customers actually asked for? Watch it land on the ask list with sources.
3. Take the roadmap draft through review to the outbox - one page, every line sourced.
4. Look at `company/decision-log.md` before you stand up: if a price question got queued, it is waiting with a recommendation, not a shrug.

Homework: open the roadmap one-pager and read the "Not planned" section twice - if nothing is in it, the roadmap is still a wish list, and next session starts by saying no to something.

Next: install **offers-and-proposals** - now that Product owns what you sell, it can draft the version a buyer actually reads, without inventing a single claim.
