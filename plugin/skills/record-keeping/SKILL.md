---
name: record-keeping
description: Your company runs on files, and this is the housekeeping that keeps those files worth trusting - a weekly hygiene pass over the record spine that spot-checks every ledger for edited history, curates stale memory with dated lines instead of deletions, checks each file's format comment against the law in os/formats.md, and names what is ready for the archive. Nothing it finds ever stops work. Use when you say "record keeping", "check my records", "clean up my records", "tidy my memory files", "has this history been edited", "my records look off", "run a records pass". Run it weekly alongside your Monday checkup, or the moment a record reads wrong.
---

# Record-Keeping - the hygiene pass that keeps your records worth trusting

Run this when a record reads wrong - a date out of order in the worklog, a memory note that contradicts what you remember deciding, a numbered playbook that jumps from P4 to P6 - or simply once a week, because record rot is quiet. Your workforce remembers because the files remember, and that only works while the files stay honest: ledgers that were never rewritten, memory that was curated instead of hoarded, format comments that still match the law. This pass keeps that true.

One boundary up front, so nothing overlaps: **werkforce-checkup** is the building inspector for the whole HQ - tree, boards, coherence. This skill goes one level deeper on the record spine itself - the ledgers, the memory files, the format comments - and it never judges what the records say. The content belongs to the skills and seats that wrote it; I only keep it trustworthy. And when something is ready to leave the working set, **archive-work** owns the actual move - I just name the candidates.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A ledger integrity read over the ledger spine - `records/audit-log.md` (the master log, guarded first and hardest), inbox, worklog, warnings, decision log, strategy, briefs, memory, sessions, reviews, improvements, visions, playbooks, metrics, seat memory, and each customer file's History section - with every sign of edited history flagged, and every flaw corrected the legal way: a dated correction line appended, never a rewrite
- A memory curation pass: stale notes superseded with fresh dated lines, near-duplicate notes reconciled, numbers that should live in their owning file pointed there instead - nothing deleted, ever
- A format comment check: each record file's in-file comment compared against `os/formats.md`, drift flagged, restoration offered on your one-word OK
- A short archive candidate list, named and ready to hand to **archive-work**
- One dated line per finding in `records/warnings.md`, a lesson line in `records/improvements.md` where one is earned, and one worklog line proving the pass happened

## What I need from you

1. An HQ with records in it. A young HQ passes fast - that is a good sign, not a wasted run.
2. Ten minutes to read the findings with me. Every flag gets one plain sentence.
3. A one-word OK, or a no, on each correction I offer. No is a fine answer - the flag stays logged and nothing stops.

## How it works

### Step 1 - The ledger pass

A ledger is append-only: lines are added under dates, never edited, never deleted. History that has been touched leaves fingerprints, and I hunt for them, file by file - every finding here is `[checked]`, because I am reading the files right now. I start with `records/audit-log.md`, the master log: every action the system has ever taken lands there as one timestamped line, so it is the append-only file that matters most, and it is guarded hardest - a line altered or missing above its old end of file is the most serious finding this pass can raise. From there I walk the rest of the spine:

- **Dates running backward mid-file.** An append-only file reads like a tape - a 2026-06-02 line sitting below a 2026-07-01 line means someone wrote into the past.
- **Numbering gaps.** Playbooks jumping P4 to P6, outcomes skipping O3, a vision missing from the count. Outcomes is a living file, so there only the missing O number - a deletion's fingerprint - gets checked, never its edited lines. Retired visions stay visible with a dated `Retired:` line - a hole means a deletion.
- **A ledger that shrank.** A worklog or warnings file shorter than the counts a past weekly review cited. Records grow; they do not slim down.
- **Receipts orphaned by edits.** A board's Done receipt or a worklog line pointing at wording that no longer exists where it says it lives.

If you have a backup from **backup-your-werkforce**, point me at it and I run the strongest check there is: yesterday's ledger should read as an exact opening stretch of today's - everything since is new lines at the end, and nothing above them changed. Any difference above the old end of file is edited history, named line by line - with one exemption: an inbox line that gained a ` -> adopted:` tail is the one sanctioned line edit in the OS, not edited history.

When I find edited history, the repair is never a rewrite - that would be a second edit on top of the first. The legal correction is one appended, dated line that tells the truth about the record itself:

```markdown
- YYYY-MM-DD [record-keeping] correction: the 2026-06-14 entry above was altered after the fact - original wording unrecoverable, flagged in records/warnings.md, history stands as-is from here
```

The flaw stays visible, the correction sits under it, and the tape keeps rolling. That is what makes a ledger a ledger: not that it is perfect, but that it never pretends.

### Step 2 - The memory pass

Ledgers must never be touched; memory must be tended. Department `memory.md` files and the `## Seat memory` sections in `seats/` are still append-only - but curation happens the append-only way, and three habits keep memory lean instead of hoarded:

- **Supersede, never delete.** A note that is no longer true gets a fresh dated line naming it: `- YYYY-MM-DD the 2026-05-20 note about pricing is stale - the offer changed; current pricing lives in company/business-model.md.` The old line stays; the new line wins. A future reader sees the correction happen instead of wondering what disappeared.
- **One topic, one living thread.** Two notes about the same fact will eventually disagree. When I find near-duplicates, I propose one dated line that reconciles them and names which earlier lines it supersedes.
- **Pointers beat copies.** A memory line that copies a number starts aging the moment it lands. Every fact has one owning file - pricing lives in the business model, stage in the customer file, finished work in the worklog. Where a note copied a fact it does not own, I propose a superseding line that points at the owner instead.

Memory is continuity, never current truth - a well-curated memory file tells the next session where to look, not what to believe. Every superseding line I write, I write only on your OK, and I draft it in the file's own plain style: one line, one date, no headings.

### Step 3 - The format comment check

Every seed record carries a comment line copied from `os/formats.md` - at working time, that in-file comment is the operative rule for anyone touching the file. I read each record's comment against the law and flag drift: a comment that went missing, got reworded, or - the dangerous one - now states the wrong kind, like a ledger whose comment invites in-place edits. Ledger law applied to a living file, or the reverse, is how good records go bad by accident.

For each drifted comment I show you the line as it stands, the line the law prescribes, and restore it on your one-word OK. Scaffold only - I touch the comment line and never an entry. If `os/formats.md` itself looks edited, that is above this skill's pay grade: the format law changes only through **upgrade-your-werkforce**, so it gets a warning line and one sentence to you, and nothing else from me.

### Step 4 - Name the archive candidates

Working records should carry the working set, not the museum. I scan for what is ready to move and hand you a short list:

- Board tables where finished history outweighs live work - long runs of Done and Dropped rows below just a few active ones
- Outbox files past their season - delivered, receipted in the worklog, and untouched for a quarter or more

Naming is where my job ends. The move itself - into `archive/` with a dated worklog note, never a deletion - belongs to **archive-work**, and I finish this step by pointing you at it with the list in hand. If nothing qualifies, I say so and move on; a young company with nothing to archive is exactly on schedule.

### Step 5 - Log it

Every finding from every pass has already landed as one dated line in `records/warnings.md`:

```markdown
- YYYY-MM-DD [record-keeping] finding - action taken
```

And because a control that warned is a company that just learned something, each warning also earns one lesson line in `records/improvements.md`:

```markdown
- YYYY-MM-DD lesson: worklog entry was edited after the fact - corrections go in as new dated lines, never edits
```

The weekly review reads that file and proposes exactly one change - which is how a hygiene finding becomes a habit fix instead of a recurring flag. Then the pass lands in the master log, `records/audit-log.md`, as one `[note]` line in the pinned shape - the time in your HQ timezone from `HQ.md`, never UTC:

```markdown
- YYYY-MM-DD HH:MM [note] [record-keeping] [company] records pass: N ledgers clean, M findings corrected, K comments restored - records/warnings.md
```

And the pass gets its own receipt in `records/worklog.md`:

```markdown
- YYYY-MM-DD [company] Record-keeping pass - receipt: N ledgers clean / M findings corrected by appended line / K comments restored / archive candidates named, findings in records/warnings.md, reviewed by the founder
```

Nothing in this pass ever blocks work, and nothing in it ever deletes - deleting work is a reserved decision, and housekeeping is not the place for it. A warning is a flag on the play, never a stopped game.

## Do this now

1. Say "run a records pass" and let me walk the spine - ledgers, memory, comments, archive candidates.
2. Read the findings with me, one plain sentence each.
3. OK the correction lines and comment restorations you want, skip the rest, and hand the archive list to **archive-work** if there is one.

Homework: pick your busiest ledger - probably `records/worklog.md` - and read it top to bottom once. If the tape reads clean and in order, that is your company's history holding itself together; put this pass on the calendar right after your Monday checkup and keep it that way.

Next: run **backup-your-werkforce** - a dated backup is what turns next week's ledger pass from a spot check into proof.
