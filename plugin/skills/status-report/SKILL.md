---
name: status-report
description: One honest, synthesized read of your whole company in a single sitting - every board's live counts, what is Blocked and for how long, outcome progress, the decision queue waiting on you, recent deliverables, this week's activity - every claim labeled - then a fresh records/dashboard.html, your company's control panel, regenerated whole and openable by double-click. Use when you say "werkforce, status", "status report", "how is the company doing", "give me the honest read", "where does everything stand", "what's blocked", "regenerate the dashboard". Run it any time; it reads everything and changes nothing except the dashboard it legally overwrites.
---

# Status Report - the one read that tells you the truth about your whole company

Your company's truth is scattered across a dozen files on purpose - one authority per fact. The boards know what is in flight. The outcomes file knows what you are trying to reach. The decision log knows what is waiting on you. The audit log knows everything that has happened. Each file is right about its own thing, and none of them can tell you how the company is doing. That is this skill's job: read all of them fresh, in one pass, and hand you the synthesis - not a pile of files, a picture.

Two rules make the picture trustworthy. First, every number is counted from the actual rows this run - nothing is remembered, nothing is estimated, and a true zero beats a flattering guess. Second, absence is a stated fact, not a gap: an empty decision queue says "empty", a department with no Blocked work says so, and a file I could not read gets named out loud instead of quietly skipped. Sibling boundary in one line: "werkforce, board" (run-the-day) shows you the raw boards untouched - this skill synthesizes across everything and regenerates the dashboard.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- The synthesized read at the desk: board counts per department, Blocked items with ages, outcome progress, decision queue depth, recent deliverables, recent activity, autonomy levels - every claim labeled
- `records/dashboard.html` regenerated whole - your company's control panel: department boards, the decision queue, open outcomes, clickable deliverable links, and a filterable activity feed read from the audit log - one self-contained page, no internet needed, opens by double-clicking, legally overwritten every run
- One line in `records/worklog.md` and one line in `records/audit-log.md` with the receipt
- Zero changes to anything else - this is a read, not an intervention

## What I need from you

1. An installed HQ with at least one Active department. If nothing is Active yet, I will still report honestly - the report and the dashboard will just be short.
2. Nothing else. No questions, no interview. Say the phrase and read.

## How it works

### Step 1 - Read everything fresh

I tell you I am reading the whole record, then I read it in one pass, live, this
run - which is why every number below earns `[checked]` instead of
`[from memory]`:

- `HQ.md` - your company name and the Timezone line every stamp on the page is written in
- `company/org-chart.md` - which departments are Active, and each one's autonomy level
- every `departments/<slug>/board.md` - the live rows, stage by stage, with Receipt cells
- `company/outcomes.md` - each outcome's latest Status line
- `company/decision-log.md` - QUEUED lines with no matching DECIDED line
- `company/customers/` - stages and next touches, for the bottom-line read
- every `departments/<slug>/outbox/` - the recent `.html` deliverables to link
- `records/audit-log.md` - the activity feed the dashboard renders and filters
- `records/worklog.md` and `records/sessions.md` - what finished, and how fresh the record itself is
- `company/onboarding.md` - if the HQ is not yet fully set up, so the closing next action points at the right step
- `company/design/design-system.md` - the palette and type the dashboard is styled in

Memory is continuity, never current truth - so nothing in this report comes from what I remember about your company. If any of these files is missing or malformed, I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [status-report] finding - action taken`, tell you in one sentence, and report on what I could read. A board I cannot parse still shows up - as a named gap, not a silent hole. A warning is a flag on the play, never a stopped game.

### Step 2 - The read at the desk

Then I speak the synthesis at the desk, in this exact shape:

```markdown
# {{COMPANY}} - status - {{DATE}}

## Boards
| Department | Filed | In progress | Blocked | In review | Done | Dropped | Total |
|---|---|---|---|---|---|---|---|
| Marketing | 2 | 1 | 1 | 1 | 4 | 0 | 9 |
All counts [checked] - counted from the live boards this run.

## Blocked ({{N}} items)
- [marketing] "Landing page rewrite" - Blocked, on the board 6 days (filed {{DATE}}) - blocked by
  waiting on brand photos - recheck when the photo folder lands [checked]
(or: - Nothing is Blocked anywhere. [checked])

## Outcomes
- O1 - {{measurable state}}: Status Open since {{DATE}}, serves V1, verified by founder [checked]
(or: - No outcomes filed yet. Outcome-desk files the first one. [checked])

## Decision queue: {{N}} waiting on you
- oldest: {{DATE}} [sales] QUEUED: {{what}} - waiting {{N}} days [checked]
(or: - The queue is empty. Nothing is waiting on you. [checked])

## Recent deliverables
- {{DATE}} [marketing] {{title}} - departments/marketing/outbox/{{file}}.html [checked]
(or: - No deliverables in the outboxes yet. [checked])

## Recent activity: {{N}} events in the last 7 days
- {{DATE HH:MM}} [review] [Ada] [marketing] passed the launch email [checked]

## Autonomy
- Marketing: Level 1 - Supervised [checked]

## The honest bottom line
{{2-3 sentences: what is moving, what is stuck, the single thing most worth
your attention. Judgment gets its own label: [best guess].}}
```

The mechanics of the counts, stated plainly. A board row counts toward exactly one stage column, taken from its Stage cell as written. A Blocked item's age is days from its Filed date to today - time on the board, not time Blocked, because the board records no blocked-since date - and its line carries the `blocked by {what} - recheck {how}` text from its Receipt cell - the recheck itself belongs to the morning run, not to this report. Decision queue depth is QUEUED lines with no DECIDED line answering them. A row I cannot classify counts toward its board's total and no stage bucket, with one warning line - the report states what it actually knows rather than forcing the numbers to reconcile. Every stamp is written in the Timezone from HQ.md, never UTC. And the bottom line is the one place opinion is allowed, which is exactly why it wears `[best guess]` while everything above it wears `[checked]`.

### Step 3 - Regenerate the dashboard

I say I am rewriting the dashboard, then I rewrite `records/dashboard.html`
wholesale from `references/dashboard-template.html` - the shipped template with
`{{TOKENS}}` and marked `<!-- SECTION -->` blocks I fill from the same counting
pass. It is a GENERATED file - a derived view, legally overwritten on every run,
never hand-edited, never a source of truth. If you edited it by hand since last
time, those edits are gone now and that is the law working as intended - the
truth lives in the markdown files, and the dashboard is a rendering of them. The
first line inside the file says so:

```html
<!-- GENERATED by status-report on {{DATE}} - legally overwritten every run.
     Never hand-edit; never a source of truth. The record lives in the markdown files. -->
```

I style it from `company/design/design-system.md` - I overwrite the template's
five `--wf-*` color values with your palette. If the design system is
`(not set yet)`, I say so in one sentence, leave the template's neutral defaults
as shipped, and point you at the **design-system** onboarding step so your next
dashboard wears your brand. Either way the page is completely self-contained:
one file, styles written inline, one small block of vanilla inline JavaScript
for the activity-feed filters, no external fonts, no scripts fetched from
anywhere, no images, no network requests of any kind. It opens by double-clicking
on any machine, works offline forever from `file://`, and is readable on a phone.

The page is your company's control panel, built for the eye instead of the terminal:

- a header: your company name, `generated {{DATE TIME}} {{TIMEZONE}}` in the founder's timezone, and how to refresh
- a "Recommended next actions" strip - the one to three moves most worth making, drawn from HQ state
- a "Waiting on you" decision queue - the count big, then each QUEUED-with-no-DECIDED line oldest first
- department boards - one card per Active department: the six stage counts (Blocked visually loud) plus a task table with Receipt links
- open outcomes with their current status
- recent deliverables - clickable relative links into `departments/*/outbox/`
- an activity feed rendered from `records/audit-log.md`, with client-side filters (type, owner, scope, and a date range) that run in the inline JavaScript over data embedded at generation time - no network
- a footer that says, exactly, refresh by saying "werkforce, status"

Every number on the page is the same number from Step 2 - one counting pass, two renderings, never two competing versions of the truth. I close by telling you the dashboard was written and its exact path.

### Step 4 - Log it

I append one line to `records/worklog.md`:

```markdown
- {{DATE}} [company] Status report - receipt: synthesized read delivered at the
  desk, records/dashboard.html regenerated, reviewed by {{FOUNDER}}
```

And one line to `records/audit-log.md`, in the pinned shape, timestamped in the HQ timezone:

```markdown
- {{DATE}} {{HH:MM}} [session] [status-report] [company] status read delivered, dashboard regenerated - records/dashboard.html
```

You are the reviewer of record - a status report's review is you reading it. If the report surfaced anything that needs acting on, the actions have homes: Blocked rechecks belong to the morning run, queued decisions to **founders-desk**, and structural drift to **werkforce-checkup**. This skill points; those skills move.

## Do this now

1. Say "werkforce, status" and read the report top to bottom - it takes two minutes.
2. Look hardest at two numbers: the oldest Blocked age and the decision queue depth. Those are the two places where waiting is costing you.
3. Double-click `records/dashboard.html` and look at your company as a page - then filter the activity feed by any department to see just its trail.

Homework: say "werkforce, status" again at the end of the week and compare the two bottom lines - the difference between them is what your company actually did.

Next: if the queue had anything in it, run **founders-desk** now - queued decisions are the one thing in this whole report that only you can move. If your HQ is not yet fully set up, `company/onboarding.md` names the step that comes first instead.
