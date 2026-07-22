---
name: backup-your-werkforce
description: Your entire HQ - every board, ledger, charter, and customer file - packed into one dated archive sitting NEXT TO your werkforce/ folder, verified before it earns the name backup, from one plain command you can re-run any morning without me. Use when you say "back up my werkforce", "make a backup", "backup my HQ", "save a copy of everything", "snapshot my company files", "backup before I change anything", "protect my werkforce". Run it before any upgrade or restore - those skills run it for you automatically - and on any day the work mattered.
---

# Backup Your Werkforce - one command between you and losing everything

Your company lives in plain files. That is the superpower - your workforce remembers because the files remember - and it is also the whole risk surface: one bad sync, one wrong delete, one dying disk, and the memory goes with it. The answer is not a service or a subscription. It is one dated archive, made in one command, sitting right next to your HQ where you can see it.

Here is the standard this skill holds you to: an archive you have not looked inside is a hope, not a backup. So every run verifies - the archive gets listed, the soul file gets found in the listing, and only then does the file take its real name. A half-written archive never gets to wear it.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- `werkforce-backup-YYYY-MM-DD.tar.gz` - the whole HQ in one file, dated today, sitting NEXT TO your `werkforce/` folder, never inside it
- A verification pass on the record: the archive listed, `HQ.md` confirmed inside, file count and size read back to you
- One receipt line in `records/worklog.md` - the backup is itself a piece of finished work, so it goes on the record like one
- The exact command, shown to you once and re-runnable forever - plain bash, stock Mac, no tools to install, and the archive opens anywhere plain files open

## What I need from you

1. An installed HQ. That is it - this skill asks you nothing and touches nothing inside the HQ except its record lines - one worklog receipt, plus a warning and lesson line only if a verify fails.

## How it works

### Step 1 - Find the HQ, pick the landing spot

I locate your HQ the standard way - `werkforce/` under the current folder if `werkforce/HQ.md` exists there, otherwise `~/werkforce/`. The archive lands in the folder that CONTAINS the HQ, never inside it. That placement is a firm rule: a backup stored inside the thing it protects gets swallowed by the next backup, bloats every archive after it, and dies with the folder it was meant to survive. Next to it, it is a sibling - visible in your file browser, easy to copy to a drive or cloud folder, untouched by anything the workforce does.

If today's archive already exists - you ran a backup this morning and again tonight - the newer run replaces it. One archive per date, and the freshest one wins; I say so in one sentence when it happens.

### Step 2 - Run the one command

This is the whole machine. I run it for you, and I show it to you, because the day you need it most might be a day I am not open:

```bash
HQ="$PWD/werkforce"; [ -f "$HQ/HQ.md" ] || HQ="$HOME/werkforce"
DEST="$(dirname "$HQ")/werkforce-backup-$(date +%Y-%m-%d).tar.gz"
tar -czf "$DEST.part" -C "$(dirname "$HQ")" "$(basename "$HQ")" \
  && tar -tzf "$DEST.part" | grep -q "HQ.md" \
  && mv "$DEST.part" "$DEST" \
  && echo "backup verified: $DEST"
```

Read it once, top to bottom. It finds the HQ, packs the whole folder, checks the archive actually lists and actually contains your soul file, and only then renames it from `.part` to its real name. If any link in that chain fails, no file ever claims to be a backup - you get a `.part` leftover and an honest failure instead of a file that falsely claims to be a backup.

### Step 3 - Verify out loud

Trust is earned per run, never carried over from last time. After the command finishes I list the archive and read the evidence back to you, labeled the way every claim in your company is labeled:

- `[checked]` the archive exists at its dated path, next to the HQ
- `[checked]` `HQ.md` is inside it, plus the file count and archive size
- A spot-list of the crown jewels: `os/`, `company/`, `departments/`, `records/`

If verification fails - the archive will not list, or the soul file is missing from it - I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [backup-your-werkforce] finding - action taken`, add one lesson line to `records/improvements.md`, tell you in one sentence, and keep moving: usually one clean re-run fixes it, and I offer that immediately. A warning is a flag on the play, never a stopped game - but an unverified archive never gets called a backup, and I will not log a receipt for one.

### Step 4 - Backups before big moves, automatically

Two moments in this pack are dangerous enough that backing up first is not a suggestion, it is the opening move: **upgrade-your-werkforce** and **restore-your-werkforce** both run this skill before they touch anything. You do not have to remember it; the system remembers for you. If **upgrade-your-werkforce** arrives and today's verified backup already exists, it reuses that one instead of making a second. **restore-your-werkforce** never reuses one: it always takes a fresh pre-restore snapshot of the current state first, so work done since this morning survives the restore.

Beyond the automatic moments, the honest cadence is simple: back up on any day the HQ changed in a way you would hate to lose - a department opened, a customer promised, a week reviewed. Old dated archives cost almost nothing to keep; I never delete one, and pruning them is yours alone, because deleting work is a reserved decision.

One boundary line, so the two halves never blur: this skill MAKES archives. **restore-your-werkforce** puts one back - and it pauses for your explicit say-so first, because a restore overwrites the living HQ, and that call is yours.

### Step 5 - Log it

Before I file it, I tell you in one sentence that the archive is verified and I am recording the receipt. One line to `records/worklog.md`, append-only, in the standard shape:

```markdown
- YYYY-MM-DD [company] HQ backup - receipt: werkforce-backup-YYYY-MM-DD.tar.gz next to the HQ, {N} files, HQ.md verified in listing, reviewed by {founder}
```

And one line lands in the master audit log, `records/audit-log.md`, in the shape `os/formats.md` pins - timestamped in the HQ timezone from `HQ.md`, never UTC:

```markdown
- YYYY-MM-DD HH:MM [backup] [{founder}] [company] HQ backup verified, {N} files, HQ.md confirmed inside - werkforce-backup-YYYY-MM-DD.tar.gz next to the HQ
```

You are the reviewer of record - you saw the verification read back and the archive is sitting where you can see it. Then I tell you the one sentence that matters: your company can now survive this machine.

## Do this now

1. Say "back up my werkforce" and watch the whole thing happen - command, verify, receipt - in under a minute.
2. Open the folder that contains your HQ and look at the dated archive with your own eyes.
3. Copy that one file somewhere that is not this disk - a cloud folder, a USB stick, an email to yourself. One copy on one machine is still one failure away from zero.

Homework: run the command from Step 2 yourself, by hand, in your own terminal, without me - tomorrow morning. The day you can back up your company without help is the day the backup habit actually belongs to you.

Next: install **restore-your-werkforce** - the other half. A backup is not fully proven until you have practiced restoring it.
