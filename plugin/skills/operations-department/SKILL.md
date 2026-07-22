---
name: operations-department
description: Operations is the department that keeps the company itself running - one session that audits every active department's playbook for stale SOPs and missing steps, inventories your tool stack with sourced costs and renewal dates, and walks out with a ranked fix-list where every gap names its evidence and its owner. Use when you say "run operations", "operations session", "audit our SOPs", "which playbooks are stale", "check our tool stack", "what keeps breaking behind the scenes", "build the fix-list". Open the Operations row with open-a-department first; run this monthly, before small frictions grow into breakdowns.
---

# Operations Department - the session that services your company's own machinery

Every other department works ON your business - this one works on the company itself. Playbooks go stale quietly. SOPs that earned their stripes sit marked (candidate) forever, and work that gets done every week never gets written down at all. Tools renew themselves on a card nobody is watching. None of it is an emergency, which is exactly why nobody looks - until the day it is.

This session is the look. It reads what your departments actually did - their memories, their boards, their outboxes - against what their playbooks say they do, checks every tool against its cost, and hands you one ranked page of gaps. One law keeps this room honest with its neighbors: Operations names gaps, it never fixes them in someone else's files. Each department owns its own playbook content, and the record spine belongs to **record-keeping** - this room finds what is broken and routes it to whoever owns the wrench.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A worked board: Filed rows briefed and started, Blocked rows rechecked, finished rows closed with receipts on `departments/operations/board.md`
- The ranked fix-list in `departments/operations/outbox/` - every gap with the file line that proves it, the owner who fixes it, and the smallest fix
- The SOP audit inside it: promotion-ready candidates flagged to their owners, stale candidates questioned, missing playbook steps named with a drafted proposal attached
- The tool stack checklist: every tool with its job, its sourced cost, its renewal date, and a keep/question verdict - any buy or cancel queued in `company/decision-log.md`, never done
- Fixes routed without trespassing: rows on Operations' own board for what it owns, one `inbox.md` line each for what other rooms own
- A review record in `departments/operations/memory.md` and one receipt line in `records/worklog.md`

Three standing boundaries, said once and honored always: each department owns its playbook content - **teach-your-workforce** is where SOPs get authored and promoted, this room only flags them. **record-keeping** owns the record spine's hygiene. **werkforce-checkup** owns file-shape and tree drift - this room audits whether the machinery works, not whether the files are shaped right.

## What I need from you

1. An Active Operations row. If `company/org-chart.md` still says Planned, run **open-a-department** and pick Operations - activating a department is a hire, and hiring is yours.
2. Your tool list, when the session asks: what the company pays for or depends on, what each costs, when each renews. From your billing emails, your card statement, or your head - you name the source, I write it down verbatim.
3. Twenty to thirty minutes, monthly. A short regular session keeps the machinery honest better than a big rare one.

## How it works

### Step 1 - Open the room

I open the session with one line in `records/sessions.md` (dated and timed in your HQ timezone from `HQ.md`, never UTC), then read the department: `departments/operations/charter.md` for the mission and the three seats, `board.md` for what is in flight, `memory.md` for what past audits found, and the role cards in `seats/`. Anything machinery-shaped sitting adopted from your inbox joins the queue. If the Operations row is not Active, I tell you in one sentence and point you at **open-a-department** - and if you direct me to keep working anyway, I do, with one dated warning line in `records/warnings.md`. A warning is a flag on the play, never a stopped game.

I run this session as the front desk: I plan, I hand each seat's task to a delegated agent, I narrate what is happening, and I file the record - I stay at the desk and available to you while the work runs. Your COO plans, your Operations Specialist audits, your Operations Manager checks, and no seat grades its own homework. If this runtime cannot spawn delegated agents, I play the seats in turn myself and say so out loud - every seat moment stays labeled with the seat that did it.

### Step 2 - The COO plans the queue

I hand the planning to the delegated agent playing your COO and narrate as it works. Speaking as `[{COO name}]`, it walks the board top to bottom. Blocked rows first - most Operations blocks are an owner who has not answered yet, so the recheck is one question, and a row that unblocks goes back to In progress with its Receipt cell back to `-`. Then each task that starts today gets its brief appended to `departments/operations/briefs.md`:

```markdown
### YYYY-MM-DD - {task name}
Outcome: O{n} (or "(none yet)" - I log one warning line and keep moving)
Acceptance checks:
1. Every named gap cites the file line that proves it - no impressions, no evidence-free findings.
2. {the check that proves this specific task is done}
Due: YYYY-MM-DD
Seat: {Operations Specialist's name}
```

If the board is empty, the COO proposes from the playbook and the starter tasks - the full SOP audit plus the tool checklist is almost always the right first pass.

### Step 3 - The Specialist audits the machinery

I hand the audit to the delegated agent playing your Operations Specialist. Speaking as `[{Specialist name}]`, it walks every Active department in `company/org-chart.md`, reading only - playbook, memory, board, outbox. Three hunts per department:

- **Promotion-ready**: a `(candidate)` SOP that a passed review in `memory.md` actually cited. It earned `(proven)` - the owning department flips the marker, so it gets flagged, not edited.
- **Stale**: a `(candidate)` that months of Done rows never touched. Untested or dead weight - the owner gets asked which.
- **Missing step**: work that keeps finishing with no SOP covering how. I name the gap with the board rows as evidence and draft the smallest SOP that would cover it, as a proposal the owner adopts or rejects - never written into their playbook from here.

Then the tool stack. You hand me the list and the numbers; every cost and renewal date ends with its source in parentheses, in your words, and a figure from memory gets `[best guess]` because a true zero beats a flattering guess. Everything lands in one deliverable, built in `departments/operations/drafts/` - invisible to every control until handoff:

```markdown
# Operations fix-list - {company} - YYYY-MM-DD

## SOP audit
- [{department}] SOP {n} "{first words}" - candidate cited in the passed review of {task} on {date} - promotion-ready, owner flips the marker [checked]
- [{department}] {work that keeps finishing} has no SOP - missing step, proposal drafted below (board rows {dates}) [checked]

## Tool stack
| Tool | Job | Cost | Source | Renewal | Verdict |
|---|---|---|---|---|---|
| {tool} | {what it does for us} | {amount} | (from {your source, your words}) | {date} | keep / question / replace |

## The fix-list, ranked by what breaks first
1. {gap} - evidence: {file line} - owner: {department or founder} - smallest fix: {one line}
```

Any verdict that would move money - cancel a tool, buy a replacement, pay a renewal worth questioning - stops at framing: one QUEUED line to `company/decision-log.md` with context, options, and a recommendation. **spend-guard** runs before money moves, full stop.

### Step 4 - The Reviewer tries to break it

I hand the review to the delegated agent playing your Operations Manager - never the seat that built the work. Speaking as `[{Manager name}]`, it reviews adversarially. The top-ranked findings get spot-checked at the source: it opens the cited playbook, memory line, or board row, and any gap the file does not actually show gets struck. Every cost gets checked for a named source, every fix for a named owner, every claim label tested against its evidence - an unearned `[checked]` gets downgraded on the spot. Verdict in one line. A pass renders the fix-list as the outbox pair - `YYYY-MM-DD-operations-fix-list.md` (the editable truth) plus `YYYY-MM-DD-operations-fix-list.html` (the finished render from `company/design/page.html`, self-contained) - flips the board row to Done with a real receipt naming what was produced, where it lives, and who reviewed, and lands the review record in `memory.md`. If your design system is still `(not set yet)`, I say so, use the shipped neutral look, and point you at the **design-system** onboarding step. A fail names the specific faults, the row goes to In review, and one lesson line goes to `records/improvements.md`. If you, the founder, direct a close past a failed check, it proceeds - with one honest warning line saying so.

### Step 5 - Route the fixes

A fix-list nobody acts on is decoration. Fixes Operations itself owns - its own playbook, its own cadence, the next audit - go straight onto `departments/operations/board.md` as Filed rows. Every fix owned by another room becomes one line in `inbox.md`, naming the gap and its owner, so intake routes it on the next morning run and no other department's board ever gets written from this room. An empty fix-list gets said plainly, in the outbox, with the audit trail that earned it - an honest "the machinery is fine" is a real deliverable.

### Step 6 - Log it

I append one line to `records/worklog.md`:

```markdown
- YYYY-MM-DD [operations] {task} - receipt: {what was produced}, departments/operations/outbox/{file}, reviewed by {Manager name}
```

And one line to `records/audit-log.md`, timestamped in your HQ timezone, so the dashboard's activity feed sees it:

```markdown
- YYYY-MM-DD HH:MM [task] [{Manager name}] [operations] {task} closed with receipt - departments/operations/outbox/{file}
```

Then a dated note to `departments/operations/memory.md` with what this audit learned about the machinery, and the session-close line to `records/sessions.md` (timed in your HQ timezone).

## Do this now

1. Say "run operations" - I will open the room and read the board.
2. Have your billing emails or card statement open in another window; the tool checklist wants real costs and renewal dates, taken from the source rather than from memory.
3. Walk out with the ranked fix-list in the outbox, every fix routed to its owner.

Homework: open the fix-list and read item one out loud. If it surprised you, that is the session paying for itself - and if it did not, ask yourself why nobody had fixed it yet, then watch the inbox line get routed tomorrow morning.

Next: install **teach-your-workforce** - the first time this audit flags a promotion-ready SOP or drafts a missing one, that is the skill the owning department uses to adopt it properly.
