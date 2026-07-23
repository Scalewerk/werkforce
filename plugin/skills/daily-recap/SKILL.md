---
name: daily-recap
description: Close the day in five minutes and walk away with an honest record - what actually finished (cross-checked against the worklog, never recalled from memory), what stays In progress or Blocked overnight, tomorrow's queue in one list, one lesson if the day taught one, and the session-close line that lets tomorrow open clean. Reads every board; moves nothing without being asked. Use when you say "werkforce, evening", "close the day", "close out my day", "end my day", "evening recap", "what got done today", "wrap up tonight". Run it at the end of every working day that run-the-day opened.
---

# Daily Recap - close the day so tomorrow opens clean

The morning run opens your company; this closes it. Not with more work - with an honest read of the work that happened. In five minutes you hear what finished and where it lives, what stays open overnight and why, what tomorrow already owes, and the day gets its closing line on the record. Then you stop, because the record is holding everything so you do not have to.

One rule shapes the whole recap: it is generated from the day's real files, never written from memory. If the boards and the worklog say three things finished, the recap says three - not four because the day felt bigger. A day where nothing finished gets an honest quiet recap, not filler. A true zero beats a flattering guess. And a day that closes on the record beats a day that just trails off: an unclosed session ages into a stale warning tomorrow, while a closed one hands the morning a clean start.

**run-the-day** plans and works the day; this skill closes it. Nothing here advances a stage, sets a due date, or drops a row - unless you ask for a specific change out loud.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- The finished list, cross-checked: today's Done rows matched against `records/worklog.md` - every finish traces to a receipt, and a finish that cannot is flagged, never invented
- The overnight picture: what stays In progress, and every Blocked row read back with its `blocked by {what} - recheck {how}` note
- Tomorrow's queue in one list - overdue first, then due, then Blocked rechecks, then rows waiting Manager review - plus the count of decisions waiting on you
- One lesson line appended to `records/improvements.md`, only on a day that taught one
- The session-close line in `records/sessions.md`, so tomorrow's open finds a clean record
- Zero board changes - a pure read, unless you ask me to touch something specific

## What I need from you

1. An HQ with at least one Active department. Any state of the boards is legal - a quiet day closes the same way a big one does.
2. The phrase: "werkforce, evening". Five minutes, then you are done.

## How it works

### Step 1 - Read the day's record

I read `records/sessions.md` for today's open line, every Active department's `board.md`, today's entries in `records/worklog.md`, and the open count in `company/decision-log.md`. That is the whole day, as the files kept it.

If anything looks off - a missing file, a malformed board, no open line for a day that clearly ran - I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [daily-recap] finding - action taken`, tell you in one sentence, and keep moving. A warning is a flag on the play, never a stopped game.

### Step 2 - What finished, cross-checked

Every board row that reached Done today gets matched against `records/worklog.md`. A finish counts when both halves agree: the row carries its receipt, and the worklog carries its line. Then I tell you what finished in plain outcomes - what was produced and where the file lives, `[checked]` because I am reading it off the record right now - not a recitation of board rows.

When the halves disagree - a Done row with no worklog line, or a receipt pointing at a file that is not there - I flag it in one sentence and log the warning. I never backfill the record from memory; if you hand me the real receipt, I append the missing worklog line with it, and that is the only write this step ever makes.

If nothing finished today, the recap says so in one sentence and moves on. That is an honest close, not a failure.

### Step 3 - The overnight picture

Next, what stays open while you sleep: each In progress row with its seat and due date, and each Blocked row read back with its note - `blocked by {what} - recheck {how}` in the Receipt cell. A Blocked row missing that note gets one warning line, because a block nobody wrote down is a block nobody will recheck. I also count what waits in `company/decision-log.md`: "{n} decisions are queued on you - say 'werkforce, decisions' when you are ready." Clearing them is **founders-desk**'s job, tonight or tomorrow, your call.

### Step 4 - Tomorrow's queue

One list, ordered so the morning can start at the top:

```markdown
Tomorrow's queue - {{DATE+1}}
1. {task} - OVERDUE since {date} ({department}, {seat})
2. {task} - due tomorrow ({department}, {seat})
3. Recheck: {blocked task} - {recheck how} ({department})
4. Manager review: {task} - waiting on {Reviewer name} ({department})
```

This is a handover note, not a plan - the plan is **run-the-day**'s opening move tomorrow, made with fresh eyes and the money question. I do not reorder boards, set dates, or drop rows to make the list tidier. If you look at the queue and say "drop row three" or "push that due date", I make exactly that change and note it; anything reserved still queues to `company/decision-log.md`.

### Step 5 - One lesson, if the day taught one

If today held a teachable moment - a control warned, a review refused a close, the same task got blocked twice, a deliverable took three times its estimate - I name it in one sentence and append one line to `records/improvements.md`:

```markdown
- YYYY-MM-DD lesson: {what the day taught, in one line}
```

One lesson at most, and zero is common - most days just run. This is not journaling for its own sake: **weekly-review** reads this file at week's end and proposes exactly one change, and tonight's line is the raw material it works from.

### Step 6 - Log it

The last act of the day is its closing line, appended to `records/sessions.md`, timestamped in your HQ's timezone from `HQ.md` (never UTC):

```markdown
- YYYY-MM-DD HH:MM closed - {one-line recap}
```

The recap half names the day's headline in your language - "landing page draft done and in review, two decisions queued" - so the sessions ledger reads like a company diary at one line per entry. If today never got an open line, I log one warning and write the close line anyway; if I find someone else's unclosed line, I log one warning and tell you in a sentence - awareness, never a lock. Closed on the record means tomorrow's morning run starts clean instead of opening on a stale, dangling day.

Then I append one line to the master audit log, `records/audit-log.md`, same HQ timezone, so the day's close is on the record the dashboard reads:

```markdown
- YYYY-MM-DD HH:MM [session] [daily-recap] [company] Day closed - {N} finished, {N} open overnight, {N} decisions queued - records/sessions.md
```

Then I stop. The day is closed; the files are holding it.

## Do this now

1. Say "werkforce, evening" tonight, even if the day feels too small to close.
2. Read the finished list and open one receipt's file - see for yourself that the record and the work agree.
3. Glance at tomorrow's queue, then walk away. The plan is tomorrow's job.

Homework: run this three evenings in a row. By the third, the whole close takes under five minutes, and `records/sessions.md` starts reading like the diary of a company that actually runs.

Next: run **run-the-day** tomorrow with "werkforce, morning" - it opens the day this skill just closed, and at week's end **weekly-review** tallies what these evenings put on the record.
