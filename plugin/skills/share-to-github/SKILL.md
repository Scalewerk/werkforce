---
name: share-to-github
description: An optional window into your company - your boards and outcomes mirrored to a GitHub repo you own, so you can check work from your phone and drop ideas back without opening a terminal. The HQ stays the only truth; GitHub is a view of it, refreshed idempotently through a map so nothing ever doubles up, and if GitHub is unreachable your work never even slows down. Use when you say "share to github", "mirror my board", "put my boards on github", "set up the github mirror", "refresh the mirror", "sweep my github inbox", "check the mirror". Set it up any time after your first department is open - it is a convenience, never a requirement.
---

# Share to GitHub - a window on the building, never a second building

Your HQ is plain files on your machine, and that is its superpower - but files on your machine are hard to glance at from a phone in a checkout line. This skill gives you a window: your department boards and company outcomes mirrored as issues in a GitHub repo you own, each one wearing its exact board stage, each Done carrying its receipt right on the issue. Open the GitHub app anywhere and see your company working.

One law makes this safe, and I will repeat it until it bores you: the mirror is a view, never the truth. The HQ owns every fact; GitHub only reflects it. The flow runs one way, HQ to GitHub, and when the two ever disagree - someone hand-edited an issue, a label drifted - the HQ wins and the mirror gets corrected to match it on the next refresh. Nothing you do on GitHub can move work in your company, with one deliberate exception: a labeled idea you drop from your phone gets swept into `inbox.md`, where intake decides what it becomes - same door as every other idea.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- Your chosen boards and outcomes mirrored as issues in a repo you own - one issue per task or outcome, never a duplicate, refreshed on demand
- `records/github-map.md` - this skill's one state file: which repos we mirror, which item maps to which issue, and what is queued to apply
- A single status vocabulary - each issue carries a label with the exact board stage word (`stage: In progress`, `stage: Blocked`), plus a tier label (`tier: task` or `tier: outcome`); labels are for finding things, never for deciding things
- Receipts where reviewers can see them - when a task reaches Done, its receipt lands as a comment on the issue before the issue closes; Dropped closes as not planned, never as done
- The phone sweep - issues you label `inbox` in the mirror repo become lines in `inbox.md`, ready for intake on your next morning run
- A workforce that never stalls on GitHub - every mirror intent is recorded at home first, so an outage, a rate limit, or a missing login costs you nothing but a warning line

This skill owns `records/github-map.md` and every `gh` call in your workforce - no other skill touches GitHub. **status-report** is the sibling view at home (`records/dashboard.html`); **run-the-day** does the intake that converts swept inbox lines into real work.

## What I need from you

1. The `gh` command line tool, installed and signed in (`gh auth login`) - and if it is missing or signed out, I say so in one sentence, log one warning line, and your day continues untouched; the mirror just waits.
2. A GitHub repo you own to mirror into. I strongly recommend a private one - your boards name your customers and your prices.
3. Your pick of what to mirror: one department board, several, the outcomes file, or all of it. Start with one board.

## How it works

### Step 1 - First run: you approve the footprint

The first time ever, before anything leaves your machine, I stop and ask - because putting your company's work on an outside service is an external footprint, and external footprints are yours to approve. I tell you exactly what would be visible where: task names, stages, receipts, outcome statements, in the repo you name. I recommend a private repo out loud, and if the repo you point at is public, I say so plainly before you confirm. This pause happens once; your confirmation goes on the record and every later refresh runs without asking.

On your yes, I create `records/github-map.md` if it does not exist:

```markdown
# GitHub map - what we mirror and where it landed
<!-- Skill-owned (share-to-github only). "## Repos we mirror" (one bullet per owner/repo - unlisted repo gets a warning, not a write), "## Map" (one line per item: "{department}/{task or O-id} <-> {owner/repo}#{N}"), "## Pending" (intents drained idempotently, then " -> applied YYYY-MM-DD" appended). -->

## Repos we mirror
- {owner}/{repo}

## Map

## Pending
```

That "Repos we mirror" list is a hard fence: I only ever write to a repo on it. Asked to mirror somewhere unlisted, I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [share-to-github] finding - action taken`, tell you in one sentence, and write nothing - you add the repo deliberately, or we stop there.

### Step 2 - Record first, mirror second

On every refresh I read your chosen boards and `company/outcomes.md`, compare them against the Map, and write what needs mirroring into `## Pending` - at home, before a single call leaves the machine:

```markdown
## Pending
- mirror marketing/Draft the welcome message -> {owner}/{repo} (stage: Filed)
- update marketing/One-page prospect list -> {owner}/{repo}#12 (stage: Done, receipt attached)
```

This ordering is the whole reliability story. The intent is on the record the moment it exists, so nothing about your mirror depends on GitHub being reachable right now. If `gh` is missing, signed out, or the network is down, the Pending lines simply wait - one warning line, one sentence to you, work continues. The next refresh drains them.

### Step 3 - Drain the queue, idempotently

Now the `gh` calls, one Pending line at a time, and the Map is the memory that makes re-runs safe:

- **A new item** - no Map line yet - becomes one new issue: the task or outcome name as the title, the brief or outcome statement in the body, a `stage:` label with the exact board word, a `tier:` label. Then one line joins the Map: `{department}/{task or O-id} <-> {owner}/{repo}#{N}`. An item already in the Map is NEVER created again - if the refresh dies halfway and runs twice, you get zero duplicates, guaranteed by the file, not by luck.
- **A changed item** - Map line exists, stage moved - gets its `stage:` label updated to the new board word. One vocabulary, both sides, always: the mirror never invents a status the board does not have.
- **Done** gets the receipt posted as an issue comment - what was produced, where it lives, who reviewed - and then the issue closes as completed. The evidence sits on the issue where anyone you share the repo with can see it.
- **Dropped** closes as not planned. Dropped is never relabeled done - not on the board, not on the mirror.

Each drained line gets ` -> applied YYYY-MM-DD` appended and stays put - the Pending section is a ledger of intents, and applied lines are its history. A line that fails to apply keeps waiting, unmarked, for the next run.

And if I find the mirror drifted - an issue hand-edited, relabeled, or closed out of step with the board - I do not negotiate. The HQ is the authority; I set the issue back to match the board and note the correction in one warning line. You cannot break your company from your phone, and neither can anyone you shared the repo with.

### Step 4 - The phone sweep

The one thing that flows back, and it flows into a door, not onto a board. Standing in that checkout line, you open the GitHub app, create an issue in the mirror repo - "idea: offer the audit as a standalone" - and label it `inbox`. On my next run I sweep every open `inbox`-labeled issue: each becomes one dated line in `inbox.md` in your own words, and the issue gets a comment saying it was swept, then closes.

The sweep never files work, never touches a board, never creates an outcome - that would make GitHub an author of facts, and it is a view. Your swept lines wait in `inbox.md` like every other drop, and intake on your next **run-the-day** turns each into a board row, an outcome, or a queued decision, and marks it adopted. Same door for every idea, no matter which pocket it came from.

### Step 5 - Log it

Every refresh ends with one line appended to `records/worklog.md`:

```markdown
- YYYY-MM-DD [company] GitHub mirror refresh - receipt: {n} issues created, {n} updated, {n} inbox lines swept, map current in records/github-map.md, reviewed by {founder}
```

And one line to the master audit log, `records/audit-log.md`, with the time in your HQ timezone (never UTC):

```markdown
- YYYY-MM-DD HH:MM [note] [share-to-github] [company] GitHub mirror refreshed - {n} created, {n} updated, {n} swept - records/github-map.md
```

Warnings, if any, are already in `records/warnings.md` with one lesson line in `records/improvements.md` - flags on the play, never a stopped game. Then I tell you the honest state in one sentence: what is live on the mirror, what is still Pending, and why.

## Do this now

1. Run `gh auth status` in your terminal - signed in, or two minutes from it with `gh auth login`.
2. Create one private repo for the mirror, or pick one you already own.
3. Say "share to github", pick one board to start, and approve the footprint when I ask.
4. Open the GitHub app on your phone and look at your board living there. Then label one test idea `inbox` and watch tomorrow's morning run convert it.

Homework: open `records/github-map.md` after your first refresh and read the Map section - every line is one item of yours and exactly one issue, and that file is the reason a hundred refreshes will never create issue number one hundred and one.

Next: install **status-report** if you have not - the mirror is the view you carry in your pocket; "werkforce, status" is the honest synthesized read at home, and you want both.
