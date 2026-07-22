---
name: restore-your-werkforce
description: The panic button with a brain - when your HQ is broken, half-deleted, or mangled by a bad edit, I list your backups, take an automatic backup of the current state first, then stop and wait for your explicit go before anything gets replaced, because a restore deletes work and that decision is yours alone. Then I restore, verify the tree against os/manifest.md, and put the receipt on the record. Use when you say "restore my werkforce", "roll back my HQ", "something got deleted", "my werkforce is broken", "restore from backup", "go back to yesterday", "undo the damage". Run backup-your-werkforce regularly so this skill has something to reach for.
---

# Restore Your Werkforce - the panic button that thinks before it fires

Something went wrong. A file got mangled, a folder got deleted, an edit went somewhere it should never have gone - and now you want yesterday back. Good news: if you have been running **backup-your-werkforce**, yesterday still exists as a dated file, and this skill walks it home safely. That skill owns making backups; this one owns bringing them back - and only this one.

Here is the part most restore buttons get wrong: restoring is not just recovery, it is also destruction. Replacing your current HQ with an older copy deletes everything written since that backup - boards, worklog lines, customer notes, all of it. Deleting work is one of the seven reserved decisions, so this skill has exactly one pause in it, and it is that one. Before the pause I protect you twice over: I back up the broken present (even a broken present is worth keeping), and I show you precisely what a restore would erase. Then I wait for your word. One more thing worth hearing on a calm day: a backup you have never restored is a hope, not a backup - which is why this skill also runs fire drills into a scratch folder, no panic required.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

If the HQ is too broken for those files to open, that is exactly the moment this skill exists for - I skip the pleasantries and go straight to your backups.

## What you get

- A dated list of every backup I can find, each one checked to be readable - not just present
- An automatic pre-restore backup of your current HQ, taken before anything moves, so the restore itself is undoable
- A plain-language damage report: exactly which files a restore would erase or roll back
- One pause, at the one reserved decision - and a restore that runs only on your explicit go
- The restored tree verified against `os/manifest.md`, with any gap named out loud
- The full paper trail: your go in `company/decision-log.md`, the receipt in `records/worklog.md`, the lesson in `records/improvements.md`

## What I need from you

1. At least one backup - the dated files **backup-your-werkforce** writes NEXT TO your `werkforce/` folder, or any backup file or folder you point me at.
2. Which moment you want back - I will show you the dated list and you pick.
3. Your explicit go before the swap. Nothing replaces anything until you say so.

## How it works

### Step 1 - Find the backups and prove they are real

I look in the folder that CONTAINS your HQ - the home **backup-your-werkforce** uses, where `werkforce-backup-*.tar.gz` files sit next to the `werkforce/` folder - plus anywhere you point me. For each candidate I do more than check it exists: I read its listing to prove it opens and actually contains an HQ:

```
tar -tzf ~/werkforce-backup-2026-07-14.tar.gz | head
```

Then you get the honest menu, newest first:

```
1. 2026-07-19  werkforce-backup-2026-07-19.tar.gz   412K  readable [checked]
2. 2026-07-14  werkforce-backup-2026-07-14.tar.gz   398K  readable [checked]
3. 2026-07-07  werkforce-backup-2026-07-07.tar.gz   371K  UNREADABLE - skipped
```

A backup that will not open gets one dated line in `records/warnings.md` - `- YYYY-MM-DD [restore-your-werkforce] backup {name} unreadable - offered next-newest instead` - one sentence to you, and we keep moving with the next-newest. A warning is a flag on the play, never a stopped game. If no backups exist at all, I say so in one sentence, log the warning, and point you at **backup-your-werkforce** - there is nothing to restore and nothing to pause over, and today becomes the day your backup habit starts.

You pick the moment you want back. Newest is the usual answer; older is right when the damage crept in days ago.

### Step 2 - Back up the broken present

Before one byte moves, I take an automatic backup of the HQ exactly as it stands, clearly labeled so it never gets mistaken for a clean one:

```
tar -czf ~/werkforce-pre-restore-2026-07-20-0930.tar.gz -C ~ werkforce
```

This is not optional and I do not ask - it costs seconds and it makes the restore itself reversible. If the restore turns out to be the wrong call, or the "broken" HQ held a paragraph you wrote an hour ago and still want, the pre-restore backup has it. The panic button gets its own undo before it ever fires.

### Step 3 - The damage report, then the pause

Now I show you exactly what this restore trades away. Files touched since your chosen backup was taken are the work a restore erases or rolls back, and I find them by age:

```
find ~/werkforce -type f -newer ~/werkforce-backup-2026-07-14.tar.gz
```

You get it in plain language, not a file dump:

```
Restoring 2026-07-14 rolls your HQ back 6 days. Since then:
- records/worklog.md gained 4 lines (3 Marketing tasks, 1 Sales draft) - those lines vanish
- departments/marketing/board.md has 2 rows now at Done - they return to In progress
- company/customers/acme.md was updated 2026-07-18 - it reverts to the older version
- inbox.md gained 3 notes - gone
Everything above is preserved in the pre-restore backup either way.
```

And then I stop. Replacing current work is deleting work - a reserved decision, yours alone. I make no recommendation disguised as a countdown; I ask plainly: **"Restore from 2026-07-14 and erase the work listed above - yes or no?"** Anything short of a clear yes means no restore. "Wait", "hmm", "let me look at the board first" - all of those mean I hold position, HQ untouched, as long as you need. There is no timeout on a reserved decision.

If instead you want to rescue one file rather than the whole HQ - say, just that customer page - tell me, and I pull the single file out of the backup into a scratch folder for you to compare and copy from. No swap, no pause needed, nothing deleted.

### Step 4 - Restore, carefully

On your explicit go, your decision goes on the record first, in `company/decision-log.md`:

```
- 2026-07-20 [company] DECIDED: restore HQ from werkforce-backup-2026-07-14.tar.gz - reason: {your words}; pre-restore backup at werkforce-pre-restore-2026-07-20-0930.tar.gz next to the HQ (re: restore-your-werkforce pause)
```

Then the swap - and even now, nothing is deleted in place. I extract the backup into a fresh scratch folder, confirm the extraction completed whole, and only then swap it in: the current HQ steps aside, the restored tree takes its place. If extraction fails midway, your HQ never moved - I warn, and we pick another backup. The failure mode of a careful restore is "nothing happened", never "now both copies are broken".

### Step 5 - Verify against the manifest

A restore is not done because the files copied - it is done when the tree checks out. I open the restored `os/manifest.md` and walk its Expected tree, confirming every listed file and folder is present and every ledger and board opens clean. Then the state checks: if `os/VERSION` in the restored HQ is missing or older than your pack, I say so and point you at **upgrade-your-werkforce** - one warning line, never a block. Any gap gets the same treatment:

```
- 2026-07-20 [restore-your-werkforce] restored tree missing records/reviews.md (listed in manifest) - reseeded empty with header
```

Safe repairs like reseeding an empty ledger I do on the spot and tell you; anything judgment-shaped goes to you in one sentence. When the walk ends clean, I say the sentence you have been waiting for: your HQ is back, verified, and the checkup agrees.

### Step 6 - The fire drill (run it calm, before you ever need it)

The source discipline behind this skill is blunt: a backup nobody ever restored is unproven, and unproven is a bad thing to discover mid-panic. So once a month, ask me for a fire drill. I take your newest backup and restore it into a scratch folder - a practice HQ, the sanctioned sandbox, invisible to controls and nowhere near your real record - then run the same manifest walk from Step 5 against it. Real HQ untouched, no pause needed because nothing real is at risk, and you learn on a calm Tuesday whether your safety net holds weight. The drill's one-line result goes in `records/worklog.md` like any other finished work.

### Step 7 - Log it

The receipt lands in the restored `records/worklog.md`:

```
- 2026-07-20 [company] Restored HQ from werkforce-backup-2026-07-14.tar.gz - receipt: tree verified against os/manifest.md, pre-restore backup at werkforce-pre-restore-2026-07-20-0930.tar.gz next to the HQ, reviewed by {founder}
```

And one line in the master audit log, `records/audit-log.md`, timed in your HQ timezone (never UTC/Zulu):

```
- 2026-07-20 09:34 [backup] [restore-your-werkforce] [company] restored HQ from werkforce-backup-2026-07-14.tar.gz - records/worklog.md
```

And one lesson line in `records/improvements.md` - `- 2026-07-20 lesson: needed a restore because {what happened} - {what would prevent it}` - because a company that needed the panic button once should need it less next time. You are the reviewer of record on this one: restoring was your reserved decision, and you just made it well.

## Do this now

1. If you are mid-panic: say "restore my werkforce" and let Step 1 show you the menu. Breathe - the pre-restore backup means even this is reversible.
2. If you are calm: say "fire drill" and watch your newest backup prove itself in a scratch folder.
3. Either way, check the dated archives sitting next to your `werkforce/` folder - if the newest one is older than your last week of real work, run **backup-your-werkforce** today.

Homework: put the fire drill on your calendar, first Monday of every month, five minutes. The day you need this skill for real, you want to already know the answer.

Next: run **backup-your-werkforce** on a rhythm - after any big session, before any upgrade. This skill can only hand you back a moment you bothered to keep.
