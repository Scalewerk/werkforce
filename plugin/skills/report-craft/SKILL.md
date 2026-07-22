---
name: report-craft
description: Turn the numbers already on your record into a report a busy reader can act on - answer first, evidence next, appendix last, tables where they beat prose, and simple honest charts with no truncated axes or 3D junk, rendered as a self-contained file when a figure earns it. Every number names its source and every claim wears its label. Use when you say "write a report", "turn these numbers into a report", "make a chart of this", "client report", "summarize the quarter", "one-pager from my metrics", "visualize this". Run it after the record has numbers - monthly-close, customer-book, and the worklog own those; this skill shapes them.
---

# Report Craft - the answer on page one, every number wearing its source

Most reports are written in the order the work happened, which is the one order no reader needs. The person you are writing for came with a question - how did the month go, should we renew, did the launch work - and a good report answers it in the first paragraph, backs it with evidence in the middle, and parks everything else in an appendix for the one reader in ten who wants it. That shape is not a style preference. It is respect for the reader's time, and it is the whole skill.

The boundary is clean and it protects you: this skill never produces a number, it shapes numbers that already live on your record - `company/metrics.md`, `company/customers/`, `records/worklog.md`, the boards. **monthly-close** writes the metrics; **customer-book** keeps the client truth; this skill quotes them, names where each figure came from, and never dresses a guess up as a fact. A report full of sourced numbers and one honest blank beats a complete report you cannot defend.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- One report drafted in the owning department's `drafts/` - answer-first structure, sourced numbers, labeled claims - then, after an independent review, shipped to `outbox/` as the `.md` + `.html` pair (the render built from `company/design/page.html`)
- Every number followed by its source in parentheses, the way `company/metrics.md` already does it - a number I cannot trace gets said out loud, never smoothed over
- Tables exactly where a table beats prose, and prose everywhere else
- When a figure genuinely earns its place: a simple, honest chart as a self-contained HTML/SVG file next to the report - zero-based axes, labeled units, a title that states the takeaway
- Claim labels carried into the report itself, so a reader can tell `[checked]` from `[best guess]` at a glance
- One dated line in the department's `memory.md` recording what the report found

## What I need from you

1. The question and the reader: who is this for, and what will they decide after reading it?
2. Where the numbers live, if they are not already on the record - a file you point at, or your own words. I will pull everything I can from `company/metrics.md`, `company/customers/`, `records/worklog.md`, and the boards first.
3. Which department owns it, so the draft lands in the right `drafts/` folder.

## How it works

### Step 1 - Name the reader and the question

Every report answers exactly one question for exactly one reader - your client Dana deciding whether to renew, you deciding whether the quarter worked, a partner deciding whether to refer. We name both before a word gets written, because they set everything downstream: what counts as the answer, which evidence earns the middle, and what gets banished to the appendix. A report for a client and a report for yourself about the same month are two different documents, and pretending otherwise produces the mushy middle thing that serves neither.

### Step 2 - Pull the numbers from the record

Before structure comes grounding. I read the files that own the facts - `company/metrics.md` for the monthly numbers, `company/customers/<slug>.md` for promised, paid, and stage, `records/worklog.md` for what actually finished, the department board for what is in flight - and build the report's fact base from them. Three laws govern this step:

- Every number in the report ends with its source in parentheses, in plain words: `(from company/metrics.md, 2026-06)`, `(from Dana's customer file)`, `(founder's estimate, said today)`.
- Every statement about the state of your business carries its claim label - `[checked]` I read the file just now, `[did it]` I did the work this session, `[best guess]` inferred, `[from memory]` recalled and possibly stale. Labels ride into the finished report; a reader deserves to know which sentences are load-bearing.
- A number that exists nowhere gets written as `(not on the record)` and the sentence around it goes honest - "revenue for March was not recorded" - and one dated line goes to `records/warnings.md` as `- YYYY-MM-DD [report-craft] finding - action taken`. I tell you in one sentence and keep writing. A true zero beats a flattering guess, and a warning is a flag on the play, never a stopped game.

### Step 3 - Answer first, evidence next, appendix last

Now the shape. Every report this skill produces follows the same three-part spine, whatever its length:

```markdown
# {Specific title that states the finding, not the topic}

{The answer, in the first paragraph. The reader who stops here still knows
the outcome, the one number that matters, and what you recommend.}

## Evidence
{The middle: the numbers behind the answer, each with its source and label.
Prose carries the argument; tables carry the comparisons; a chart appears
only where it beats both. Every figure sits next to the sentence it proves.}

## Appendix
{Everything a careful reader might want and a busy reader never will:
full data tables, method notes, the list of what was excluded and why.}
```

The title test is the same as the chart test: "March Report" fails, "March: two new clients covered the churn - net revenue up" passes. The cover test proves the opening: hide everything after paragraph one, and the reader should still know the result. And the body is prose-first - short lists only where the content genuinely enumerates, never bullet confetti standing in for sentences.

### Step 4 - Tables where they beat prose

A table earns its place when the reader will compare - three customers across four columns, this month against last, promised against paid. It loses to prose when there is one fact per row, because "Revenue was 4,200 (from company/metrics.md)" reads faster as a sentence than as a one-line table. The working test: if the reader's eye wants to move both across and down, table; if it only moves down, it was a list wearing borders, and if the items are three or fewer it was a sentence all along. Tables in reports keep the same discipline as everywhere else in your HQ - a header row, units in the header cell, sources in the cells or one shared source named directly above.

### Step 5 - A chart only when it earns it, and honest when it does

Most report numbers do not need a chart - a sentence or a small table says it faster. A chart earns its place when the shape of the data IS the finding: a trend turning, one segment dwarfing the rest, a gap opening between promised and paid. When one earns it, I build it as a self-contained HTML/SVG file - no outside services, no libraries fetched from anywhere, opens by double-clicking - saved next to the report as `YYYY-MM-DD-{slug}-figure.html`, and the report states the figure's takeaway in prose right beside it. The honesty rules are not negotiable:

- Bars and areas start at zero. A truncated axis manufactures drama the data does not hold; if there is a real reason to truncate, the caption says so in plain words.
- No 3D, no gradients, no decoration - every mark on the chart encodes a value or it goes.
- Axes labeled with units, every point in the stated range plotted - inconvenient data never quietly dropped.
- The chart title states the takeaway, not the topic: "Revenue" fails, "Paid caught up to promised in June" passes.
- One chart per finding, never a wall of figures back to back.

I render it and look at it before it ships - labels readable, nothing overlapping, the numbers on the figure matching the record they came from.

### Step 6 - Hand it off like any other deliverable

The desk hands the drafting to a delegated agent for the owning department and stays with you while it runs; if this runtime cannot spawn a delegated agent, I play the seat in turn and say so out loud. The finished draft lands in the owning department's `drafts/` folder, where the normal law applies: drafts are invisible to controls until handoff, and the Reviewer seat - never the seat that wrote it - reviews before anything is called Done. **review-desk** owns that verdict, and this skill never grades its own homework.

After a passed review the report ships as the standard outbox pair: `departments/<slug>/outbox/YYYY-MM-DD-{slug}.md` (the editable truth) plus `YYYY-MM-DD-{slug}.html` (the finished, self-contained render), with any figure file beside them. The render is built from your house template at `company/design/page.html` so the report wears your company's look. If your design system is still `(not set yet)`, I say so in one sentence, render with the shipped neutral template, and point you at the **design-system** onboarding step so the next report comes out branded. The markdown stays the truth; the `.html` is GENERATED and legally overwritten. I state where I filed both files as I file them.

If the report is headed to a real person outside the company, the standing law is said out loud: I draft, you send - sending is a reserved decision, and **send-guard** gives it the final check.

### Step 7 - Log it

A report worth writing found something, and the finding outlives the file. I append one dated line to the owning department's `memory.md`:

```markdown
- YYYY-MM-DD Report {slug}: one-line finding - sources: metrics.md / customer files / worklog.
```

And one line to the master audit log, `records/audit-log.md`, stamped in your HQ timezone (the `Timezone:` line in `HQ.md` governs - never UTC):

```markdown
- YYYY-MM-DD HH:MM [task] [{reviewer}] [{slug}] Report {slug} reviewed and filed - departments/{slug}/outbox/YYYY-MM-DD-{slug}.html
```

Memory is a ledger - the line appends under its date, nothing above it changes - and the weekly review reads it, which is how one report quietly sharpens the next month's questions.

## Do this now

1. Name the one question someone keeps asking you about your business - that is your first report.
2. Say "write a report" and point me at the reader; I will pull the numbers from your record and show you which ones exist and which are blank.
3. Read the finished first paragraph with everything below it covered. If you still know the answer, it shipped right.

Homework: open the last report or update you sent anyone and check three things - does paragraph one carry the answer, does every number name a source, and would any chart in it survive the zero-axis rule? Whatever fails is exactly what this skill fixes.

Next: install **branded-pages** - it takes any finished report and renders it as a clean, house-style page you would be proud to put in front of a client, with the markdown staying the single source of truth.
