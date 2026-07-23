---
name: archive-work
description: Move stale work OUT of the working set, never out of existence. Done and Dropped board rows older than an age you choose ride to a dated archive table, outbox files past their season move to archive mirrors, and every batch lands as a worklog line - boards stay lean, history stays complete, and nothing is ever deleted. I only suggest candidates; you confirm the batch before a single row moves. Use when you say "archive old work", "my board is getting long", "archive my boards", "tidy the outbox", "move the done rows", "clean out finished work", "archive this department". Run it quarterly, or the moment your morning board read starts to scroll.
---

# Archive Work - out of the working set, never out of existence

Run this when a board stops fitting on one screen - when the morning read scrolls past forty Done rows to find the three that are live, or the outbox holds every deliverable since the department opened. That is not a mess; it is success piling up in the wrong room. A healthy office moves closed files to the cabinet in the back, and it never shreds them. Same law here: your HQ has an `archive/` folder for exactly this, and deleting work is a reserved decision this skill never asks you to make - because it never deletes anything, full stop.

Two boundaries up front. **record-keeping** runs the hygiene pass that names archive candidates; I am the mover it hands them to - either skill can start the conversation, but the move itself happens here. And I never judge what mattered: a Dropped experiment and your biggest Done win ride to the archive with equal care, stages unchanged, receipts intact. The archive is the full history, not the highlight reel.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- Lean boards: every `departments/<slug>/board.md` carrying only live work plus its recent history, with Done and Dropped rows older than your chosen age moved out
- A complete archive: `archive/departments/<slug>/board-archive.md` holding every moved row under a dated heading, exact columns preserved, plus `archive/departments/<slug>/outbox/` mirroring old outbox files under their original names
- A candidate report before anything moves - each candidate with its reason, each near-miss skipped with its reason
- One worklog line per department touched, naming what moved and where it now lives
- Zero deletions. Every row and file that leaves the working set is verified readable in the archive before it goes

## What I need from you

1. An HQ with at least one active department. A board with nothing old enough to move is a fine result - I say so and stop.
2. Your age line: how old a finished row must be before it leaves the board. I suggest 30 days; your call, and you can change it every run.
3. One OK on the batch. Moving your work product is your decision to confirm, not mine to assume - I propose, you approve, then I move.

## How it works

### Step 1 - Set the age and the scope

You pick the cutoff: rows whose Filed date is older than N days AND whose stage is Done or Dropped become candidates. If a past run set an age, I remind you of it `[from memory]` and you keep it or change it. Then the scope - one department, or every active department in one pass. For the outbox, the same age applies: a deliverable file dated older than the cutoff is a candidate for the mirror.

### Step 2 - The candidate report - nothing moves yet

I read everything before I touch anything: every in-scope board, every outbox listing, the existing archive files. All findings are `[checked]` - I am looking at the files right now, not remembering them. Then you get the full report:

- **Candidates**, one line each with the reason: `Done, filed 2026-04-02, 109 days old` or `outbox file dated 2026-03-15, past the cutoff`
- **Skips**, one line each with the reason. The hard exclusions never become candidates: rows at Filed, In progress, Blocked, or Manager review are live work and untouchable at any age; a Done or Dropped row younger than the cutoff stays as recent history; an outbox file named by a receipt on a row still sitting on the board stays put until that row itself is old enough to move - a receipt must never point at a file the board cannot find.

When in doubt, I skip and say why. Leaving one extra row costs you a slightly longer board; moving the wrong thing costs you trust in the archive. Under-archiving is always the safe error, so it is the one I make. And if a board reads malformed or the report cannot be trusted, I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [archive-work] finding - action taken`, tell you in one sentence, and nothing moves - a failed read means an untouched HQ, never a half-done batch.

### Step 3 - You confirm the batch

The report is a proposal, not a countdown. You OK the whole batch, strike any line off it, or say no - and no is a complete answer that costs nothing, since nothing has moved. A struck row gets one skip line with `founder kept it` as the reason, so next quarter's run remembers why it is still there.

### Step 4 - The move, copy-then-verify

Order of operations is the whole safety story: the archive copy is written first, read back and verified, and only then does the original leave the working set. If verification fails at any point, the original stays exactly where it was, the warning gets its line, and I tell you in one sentence.

Board rows land in `archive/departments/<slug>/board-archive.md` - created on first use, append-only from then on, rows never edited once they arrive:

```markdown
# {Department} board archive
<!-- Rows arrive here from board.md via archive-work, under a dated heading. Never edited, never deleted. -->

## Archived YYYY-MM-DD - rows older than N days
| Task | Stage | Seat | Filed | Due | Receipt |
|---|---|---|---|---|---|
| Draft the welcome message for new buyers | Done | Priya | 2026-04-02 | 2026-04-03 | welcome draft in outbox, reviewed by Elena |
```

Every cell rides over exactly as it stood on the board - and Dropped is never relabeled Done, in the archive any more than anywhere else. Then, because `board.md` is a living file, the moved rows come out of its table in place; the archive entry plus the worklog line ARE the history of that edit. The table shape, the comment lines, and every remaining row stay untouched.

Outbox files move to `archive/departments/<slug>/outbox/` under their original `YYYY-MM-DD-<slug>.md` (or `.html` for rendered pages) names - a mirror, so any old worklog receipt that names a file stays one obvious hop from finding it: same department, same filename, `archive/` in front.

### Step 5 - Log it

Before I write the record, I tell you in one sentence that the move is done and I am about to file its receipt. Each department touched gets one line in `records/worklog.md`, and that line is the batch's receipt:

```markdown
- YYYY-MM-DD [<slug>] Archived stale work - receipt: 12 Done and 3 Dropped rows to archive/departments/<slug>/board-archive.md, 4 outbox files to archive/departments/<slug>/outbox/, cutoff 30 days, confirmed by {founder}
```

And one line lands in the master audit log, `records/audit-log.md`, in the shape `os/formats.md` pins - timestamped in the HQ timezone from `HQ.md`, never UTC:

```markdown
- YYYY-MM-DD HH:MM [archive] [{founder}] [<slug>] Archived 12 Done and 3 Dropped rows plus 4 outbox files - archive/departments/<slug>/board-archive.md
```

Then I read you the after-state in one sentence per board: what is still on it, and how far back its history now reaches before the archive takes over. If any skip or failed verification earned a warning along the way, it also gets one lesson line in `records/improvements.md` - that is how a near-miss this quarter becomes a smoother run next quarter. A warning is a flag on the play, never a stopped game.

## Do this now

1. Say "archive old work" and pick your scope - the longest board is the right first target.
2. Set the age. If you are unsure, take 30 days; you can tighten or loosen it next run.
3. Read the candidate report, strike anything you want kept, and OK the batch.
4. Open the archive file once and see your history sitting there, complete and readable.

Homework: open the board you just slimmed and read it top to bottom - it should take seconds now. Then put this run on your calendar for the start of next quarter, because boards regrow at exactly the speed your company works.

Next: install **backup-your-werkforce** - a dated backup of the whole HQ is the belt to the archive's suspenders, and the two together mean your history is safe twice over.
