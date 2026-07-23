---
name: werkforce-checkup
description: The Monday health check for your workforce HQ - one wake phrase walks the whole tree and reports what has drifted in plain OK and WARN lines, and nothing it finds ever stops work. It catches missing files, manifest drift, boards that disagree with the worklog, Blocked tasks nobody has rechecked, receipts pointing at files that do not exist, and decisions sitting unanswered - then logs every finding and offers safe repairs that wait for your one-word OK. Use when you say "werkforce, checkup", "health check my HQ", "is anything broken", "check my workforce", "audit my HQ", "something feels off", "run a checkup". Run this every Monday and always before a department graduates a level.
---

# Werkforce Checkup - the health check that warns and never blocks

Every system drifts. A file gets moved by accident, a board loses its columns, a department goes quiet and nobody notices until a week is gone. Most health checks fail in the other direction: they find a problem and lock the doors, so people stop running them. This one never blocks. It looks at everything, tells you the truth in plain lines, writes every finding down, and keeps the company moving. A warning is a flag on the play, never a stopped game.

This skill checks the health of the system, not the quality of the work - **review-desk** owns judging deliverables. Think building inspector, not art critic.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- The script report: OK and WARN lines from `scripts/checkup.sh` covering the OS spine, the whole HQ tree (including the audit log, the onboarding checklist, and the design system), manifest drift, format-comment drift, sessions hygiene, timestamps that look like UTC/Zulu, the filing law's one-home rule, the org chart's twelve rows, seat cards missing any of their six H2s, deliverables missing their `.html` render, and every board's shape and staleness - including Blocked rows
- The coherence read on top: the mismatches no script can judge, checked by me file against file
- One dated line per finding appended to `records/warnings.md`, and one plain sentence to you per finding
- Lesson and fix lines appended to `records/improvements.md` - the checkup is how the company learns, not just how it worries
- Safe repairs offered on your one-word OK - a recreated seed file, a fixed board column row, a restored format comment - never a deletion, ever
- One line in `records/worklog.md` recording the checkup and its counts

## What I need from you

1. An HQ. If no `werkforce/HQ.md` exists here or at `~/werkforce/`, the script says so gently and points you at **install-your-werkforce** - that is the one thing I cannot repair from here.
2. Two minutes to read the findings with me.
3. A one-word OK, or a no, on each repair I offer. No is a fine answer - the flag stays logged and nothing stops.

## How it works

### Step 1 - Run the script

This skill ships with `scripts/checkup.sh` - plain bash, deterministic, no judgment calls, and it exits clean no matter what it finds. I run it with the working folder set to the one that contains your `werkforce/` (or your home folder when HQ lives at `~/werkforce/`), calling the script by its full path inside this skill's folder:

```bash
cd <folder that contains werkforce/>   # or cd ~ when HQ is ~/werkforce/
bash "<this skill's folder>/scripts/checkup.sh"
```

It walks the tree and prints one line per check - `OK` for healthy, `WARN` for drifted - across these fronts:

- **The OS spine.** `os/VERSION` present (absent means a 1.x HQ - it points you at **upgrade-your-werkforce**, gently), plus `os/charter.md`, `os/formats.md`, and `os/manifest.md` in place.
- **The core tree.** Every core file - `HQ.md`, `inbox.md`, the company files, `company/onboarding.md` (owned by the **onboarding** skill), `company/design/design-system.md` and `page.html` (owned by **design-system**), `records/audit-log.md`, the other records files, `skills/STANDARD.md` and `skills/CATALOG.md` - plus the `company/customers/`, `company/design/`, and `archive/` folders.
- **Manifest drift.** Anything the manifest's Expected tree promises that is no longer on disk. The manifest is what this version installed; a gap there is drift by definition.
- **Format comments.** Record files - the audit log included - that have lost their in-file format comment. The comment is the operative shape law at working time - lose it and shapes start to wander; the master copy lives in `os/formats.md`.
- **Timestamps.** Any audit-log or session line whose time reads as UTC or Zulu instead of the HQ timezone from `HQ.md` - a timestamp you have to convert in your head is a defect.
- **The filing law.** Any unexpected top-level folder in the HQ - one home per fact means no skill invents a new top-level folder beyond `os`, `company`, `departments`, `records`, `skills`, and `archive`.
- **Blank vitals.** A mostly-blank `company/profile.md` or `company/business-model.md` gets one informational line pointing at the skill that fills it. Information, never judgment - blanks are honest.
- **The org chart.** The Founder governance row, all twelve department rows by name, and every Departments row carrying exactly its six columns. It also spots pre-v3 seat words - phase-1 (Lead / Specialist / Reviewer) and v2 (Executive / Contributor / Manager) - and points at **upgrade-your-werkforce**; the current facets are Planner, Worker, Reviewer.
- **Sessions hygiene.** More than one extra opened line in `records/sessions.md` means a session did not close clean - the session you are in right now does not count. Awareness, never a lock.

Then it inspects every department folder: charter, playbook, briefs, board, and memory present, plus `seats/` and `outbox/`. It deliberately never looks inside `drafts/` - work in progress is invisible to controls until handoff, and the script honors that. Each seat card in `seats/` is checked for all six H2s the format law requires (Mission, What excellent looks like, How this seat works, Boundaries, Anti-patterns, Escalation) - a card missing any is a warning, because every seat is defined to the bar of an elite hire. Each finished deliverable in `outbox/` is checked for its `.html` render beside the `.md` source - a deliverable ships as the pair. Each board gets the full pass: the standard column row present, Done rows without a receipt, tasks sitting In progress past a week, Blocked rows that do not say what blocks them (`blocked by X - recheck Y` belongs in the Receipt cell), and Blocked rows older than a week - a block wants a recheck, not a burial.

Every WARN it prints, it also appends to `records/warnings.md` itself, dated - unless warnings.md itself is the missing file, in which case the findings live in the printout until you OK its recreation. It exits 0 always - a wall of warnings and a spotless run end the same way, with you informed and nothing stopped. I show you the output as-is, then sum it up in a sentence.

### Step 2 - The coherence read

The script checks shapes; I check whether the story holds together - whether the org chart and the departments on disk agree in meaning, not just in structure. These are the six things bash cannot judge, and every one of these findings is `[checked]` - I looked at the files just now, never from memory:

- **Org chart vs reality.** The chart says a department is Active but its charter is missing or empty - or a full, staffed charter exists for a row the chart still calls Planned. And deeper than presence: the names in the chart's seat cells should be the same names in the department's `seats/` cards and charter table. Two files telling two stories about who works here is the drift that costs the most.
- **Boards vs worklog.** A board shows Done rows that `records/worklog.md` never recorded, or the worklog names finished work no board shows.
- **Decisions sitting.** Items QUEUED in `company/decision-log.md` with no DECIDED line for more than a week. Your workforce keeps working around them, but every one is a door only you can open.
- **A quiet memory.** An Active department whose `memory.md` has no dated entry in two weeks. Active departments learn; silence usually means the loop stopped turning.
- **Ghost receipts.** A Receipt cell or worklog line that names a file which does not exist in the outbox. A receipt that points at nothing is not proof of anything.
- **The independence negative proof.** Every Active department should have recorded its once-per-department negative proof - one deliberate self-review attempt that the Reviewer refused, receipt kept in the department's `memory.md`. If an Active department never recorded it, I say so and offer to run it now: the desk submits one self-review attempt to a delegated agent holding the Reviewer seat, confirms the refusal lands in the record, and keeps the receipt. Run once per department, not on every task.

### Step 3 - Every finding gets a line and a sentence

Each finding - from the script or from the coherence read - becomes exactly one dated line appended to `records/warnings.md`, in the standard format:

```markdown
- YYYY-MM-DD [werkforce-checkup] finding - action taken
```

For example:

```markdown
- 2026-07-20 [werkforce-checkup] marketing board shows Done "Prospect email" but worklog has no entry - flagged, work continues
```

And each one gets a single plain sentence to you - "your marketing board and your worklog disagree about the prospect email" - no jargon, no drama, no scolding. When a finding teaches something - a drift that keeps recurring, a habit worth changing - I also append one lesson line to `records/improvements.md`:

```markdown
- YYYY-MM-DD lesson: Done rows keep landing without receipts - close tasks through review, not by editing the board
```

The warnings file is your company's flight recorder and the improvements file is its classroom; the weekly review reads the classroom and proposes exactly one change. Nothing in either file ever stops work.

### Step 4 - Safe repairs, on your OK

Some findings I can fix on the spot. A repair qualifies as safe only if it restores structure the format law already defines - it never deletes, and it never rewrites your words. The three kinds I offer:

- **Recreate a missing seed file, empty.** A `records/warnings.md` reduced to its H1 and comment, a fresh `board.md` carrying only the header, the two comment lines, and the standard column row, an empty `outbox/` folder. Structure only - I never invent content to fill them.
- **Fix a broken board column row** back to `| Task | Stage | Seat | Filed | Due | Receipt |`, stages `Filed | In progress | Blocked | Manager review | Operator review | Done | Dropped`. I touch the scaffold line only, never your task rows.
- **Restore a lost format comment** by copying it back from `os/formats.md`, the single format authority. The comment is law, not your words - restoring it is putting the sign back on the door.

I offer each repair one at a time - what I would write and where - and wait for your one-word OK before touching anything. Every applied repair gets a `fix:` line in `records/improvements.md`. Say no and the flag simply stays logged. What is never on the table: deleting anything - deleting work is a reserved decision, and a checkup is not the place for it. Pre-v3 vocabulary (phase-1 Lead/Specialist/Reviewer, or v2 Executive/Contributor/Manager) is also not mine to repair - that is a migration, and **upgrade-your-werkforce** owns it, with a backup first. And when two files disagree about the facts, I do not guess which side is right - the charter's rule is that the owning file wins, so I flag it, you tell me, or the flag stands until you do.

### Step 5 - Log it

I append one line to `records/worklog.md` so the checkup itself has a receipt:

```markdown
- YYYY-MM-DD [company] Werkforce checkup - receipt: N ok / M warnings / K repairs, findings in records/warnings.md, reviewed by the founder
```

And one line to the master audit log, `records/audit-log.md`, timed in your HQ timezone (never UTC):

```markdown
- YYYY-MM-DD HH:MM [session] [werkforce-checkup] [company] checkup run - N ok / M warnings / K repairs - records/warnings.md
```

Then the rhythm that keeps this useful: run "werkforce, checkup" every Monday morning, before the day's first wake phrase - and run one before any graduation - the Level 3 checklist requires a checkup within the last seven days, findings read.

## Do this now

1. Say "werkforce, checkup" and let the script walk your HQ.
2. Read the OK and WARN lines with me, plus the coherence read.
3. OK the repairs you want, skip the rest, and get back to work - nothing here blocks you.

Homework: put the rhythm on your calendar today - "werkforce, checkup" every Monday morning. Then open `records/warnings.md` and read your flags end to end once; five minutes in the flight recorder tells you more about your company than an hour of guessing.

Next: run **autonomy-ladder** - a clean checkup is what earns Level 3.
