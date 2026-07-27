---
name: upgrade-your-werkforce
description: Bring an older HQ up to the current operating system - session-led, strictly additive, with you watching every move. I read os/VERSION to see where your HQ stands, back everything up first, add the files the new version expects, modernize the seat words, keep every legacy department you built, and stamp the new version only after the migration record is on the worklog. Use when you say "upgrade my werkforce", "migrate my HQ", "bring my HQ up to date", "is my HQ on the latest version", "run the upgrade", "my workforce files look old", "update my operating system". Run it once after installing a newer pack - a second run is safe and finds nothing left to do.
---

# Upgrade Your Werkforce - the migration that adds and never subtracts

Upgrades have a bad reputation because most of them are demolitions: the new version moves in by throwing the old one out. Your HQ cannot be treated that way - those files are your company's memory, and some of them hold months of decisions, receipts, and hard-won lessons. So this migration runs under one law: everything the new version needs gets ADDED, and nothing you already have gets deleted or overwritten. Your boards keep their rows, your charters keep their names, your worklog keeps every line.

The version stamp lives in `os/VERSION` - one line, only this skill ever writes it. The current operating system is `3.4`. An HQ with no VERSION file is a first-generation HQ, a `2.0` HQ is an older origin, and any `3.x` HQ is a supported origin for the additive migration to 3.4 - none is a problem; each is just a starting point this migration climbs from. You watch the whole migration happen, change by change, and the record of what moved goes on the worklog before the new version number does. If anything ever looks wrong afterward, the dated backup from minute one takes you straight back.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A dated, verified backup of your whole HQ before a single byte changes
- Every file the current version expects added from the shipped seeds - every file you already have left exactly as it is
- The OS files refreshed from the current references: `os/charter.md`, `os/formats.md`, `os/manifest.md`, and `os/VERSION` stamped to `3.4` (the constitution and the format law only ever change through this skill)
- A `Werkforce type:` line added to `HQ.md` and `os/type.md` copied in - `business` by default on no answer, `job` only on your explicit confirmation after I say what I see on your org chart (B45; see Step 3)
- A `Timezone:` line added to `HQ.md` from your answer - so every date the system writes and speaks is in your time, never UTC
- The v3 additions seeded from the shipped seeds: `records/audit-log.md` (the master audit log), `company/onboarding.md` (with the steps your HQ has already completed marked Done from the evidence on disk), and `company/design/` (the design system, owned by **design-system**)
- `company/org-chart.md` grown to the full shape: the Governance table, plus a Planned row for each of the twelve standard departments it was missing
- The 3.2 full official seat names OFFERED, never applied on my own initiative - `CEO` -> `Chief Executive Officer`, and `CTO`/`CMO`/`CRO` written out where they name a seat on your org chart, charters, and role cards - shown cell by cell and moved only if you say yes, because that roster is yours
- Seat words modernized in place to the current facets - **Planner**, **Worker**, **Reviewer** - mapped from whatever older words your HQ carried, with role titles left untouched and the old words still understood forever
- Every department you built that is not one of the twelve kept and marked as a legacy department, its files untouched
- Role cards seeded into `departments/<slug>/seats/` wherever a matching department skill ships them
- A dated migration record in `records/worklog.md` and one `[upgrade]` line in `records/audit-log.md`, with `os/VERSION` stamped last

## What I need from you

1. An HQ, any version. No VERSION file means first-generation, `2.0` means one generation back - both are exactly what this skill is for.
2. The current pack installed, so the shipped seeds and role cards are on hand to copy from. If you run Werkforce as a Claude Code plugin, Claude Code keeps auto-update OFF for third-party marketplaces by default, so a new release does not arrive on its own - pull it first with `/plugin marketplace update werkforce`, and turn auto-update on once (run `/plugin`, open the **Marketplaces** tab, select `werkforce`, choose **Enable auto-update**) so future releases arrive automatically. Only a pack this skill can already see carries the new seeds it migrates you to.
3. Your timezone, once - the current version records it in `HQ.md` so every date speaks your time; I ask you for it plainly during the run.
4. Ten minutes of your attention. This migration is session-led on purpose: you see every change as it lands, and the things that involve your company's identity - your timezone, names on the org chart, anything about retiring a department - go through you.

## How it works

### Step 1 - Read the version, then look before touching

I read `os/VERSION`. If it already matches the current version, I tell you so in one sentence and stop - a finished migration run twice changes nothing, ever. If it is absent or older, I do not trust the stamp alone: I walk the actual tree and compare what is really there against what the current version expects. Files beat labels - if the stamp and the folder disagree, I believe the folder, append one dated line to `records/warnings.md`, and plan from what actually exists.

I also read `records/worklog.md` for the migration records of earlier runs, because anything you have already declined stays declined - an offer you turned down is not put back in front of you on the next run.

Then I show you the change list before anything moves: every file to be added, every table to be grown, every word to be mapped, every legacy department to be kept. You read it, you say go. Nothing in this migration is a surprise by design.

### Step 2 - Backup first, always

Before the first change, the whole HQ goes into a dated archive - **backup-your-werkforce** owns this move, and I run it now (its sibling **restore-your-werkforce** owns the road back). If that skill is not installed, I do the same thing directly:

```bash
HQ="$PWD/werkforce"; [ -f "$HQ/HQ.md" ] || HQ="$HOME/werkforce"
DEST="$(dirname "$HQ")/werkforce-backup-$(date +%Y-%m-%d).tar.gz"
tar -czf "$DEST" -C "$(dirname "$HQ")" "$(basename "$HQ")" \
  && tar -tzf "$DEST" | grep -q "HQ.md" && echo "backup verified: $DEST"
```

I verify the listing shows your real files, tell you where the archive lives, and only then proceed. Backup-first is the default, not a gate on you: if the backup cannot be made (disk full, no destination) and you wave it through, or you say "skip the backup, migrate now", the migration proceeds on your word - with one dated warning line in `records/warnings.md` naming the law bypassed, and one lesson line in `records/improvements.md` so the missing net gets fixed for next time.

### Step 3 - Add what is missing, refresh the OS

Now the additive pass. Before I say what happens, one sentence on what is about to happen and why: your HQ gains every file the current version expects, and its operating system files are brought up to the current law - and nothing you authored is touched.

For every founder-data file the current version expects, one rule decides everything: if it exists, it is skipped - never merged, never "improved", never overwritten; if it is missing, it is added from the shipped seed, byte for byte where the seed is verbatim, with your company's name filled in where the seed is a template. Typically that means some of:

- `inbox.md`, `company/business-model.md`, `company/visions.md`, `company/outcomes.md`, `company/strategy.md`, `company/playbooks.md`, `company/metrics.md`, `company/decision-log.md`, and the `company/customers/` folder
- `records/sessions.md` and `records/improvements.md`, plus the `skills/` library with its STANDARD and CATALOG, and the `archive/` folder

The v3 additions land here too, seeded from the shipped references and skipped if they already exist:

- `records/audit-log.md` - the master audit log, seeded with its header and format comment. From this migration onward every action lands one timestamped line here; the migration itself writes the first one in Step 7.
- `records/operator-reviews.md` - the 3.1 addition: the append-only ledger where every founder sign-off and send-back at the desk is recorded, and the data source the review-gap analysis reads. Seeded with its header and format comment, skipped if it already exists.
- `records/artifact-registry.md` - the ledger where every published claude.ai artifact URL is recorded (the artifact mandate, founder law 2026-07-23). Seeded with its header and format comment, skipped if it already exists - and your HQ's existing registry, if you already had one, is exactly that case: untouched.
- `company/design/design-system.md` and `company/design/page.html` - the company design system that every rendered deliverable reads, owned by the **design-system** skill. Seeded at the neutral shipped look with unknowns left `(not set yet)`; the onboarding step points you at design-system to make it yours.
- `company/onboarding.md` - the numbered onboarding checklist, owned by the **onboarding** skill. I seed it, then mark each step Done only where the thing it builds already exists on disk (a filled profile, an Active department), so a mature HQ does not get told to redo work it finished long ago; the earliest unfinished step is set to `Next`.

Four OS files are refreshed rather than skipped, because the constitution and the format law only ever change through this skill: `os/charter.md` and `os/formats.md` are copied exactly from the current references, `os/manifest.md` is rewritten to the current pack version and expected tree, and `os/VERSION` is stamped last of all in Step 7. Your founder data is never touched by this refresh - only the OS spine moves.

**The werkforce type (B45, new in this build).** Every HQ this skill touches gets exactly one of three outcomes, decided in this order, and lands here in Step 3 - before `os/VERSION` is stamped in Step 7, so a half-finished migration is still readable:

1. **`HQ.md` already carries a `Werkforce type:` line.** Your answer, once given, is never asked again - but I still check that `os/type.md` exists and matches the line, and add it from `references/types/<type>.md` if it is missing. A half-migrated HQ that gained the line in an earlier, interrupted run but never got its lens file does not stay broken forever; this is the one thing that "changes" in this case, and only when the file is actually absent.
2. **No `Werkforce type:` line, and nothing on the org chart suggests otherwise.** I ask once. **Silence default: `business`.** No answer, or an explicit decline, becomes a `business` HQ and gains only the `Werkforce type: business` line plus `os/type.md` - zero other bytes move. This is the whole safety story: every pre-B45 HQ in the world is a `business` HQ until its founder says otherwise.
3. **No `Werkforce type:` line, but the org chart's apex-seat cell already holds a non-CEO title** (the pattern the early job-type HQ was hand-patched into before this setting existed). I *say what I see* - name the cell and its title - and ask; I never infer and silently write `job`. **Silence default: same as case 2 - `business`.** No answer, or an explicit decline, still becomes a `business` HQ; the only difference from case 2 is that the migration record notes the apex-title evidence I saw and that you were asked and declined, so a later run does not ask again on the same evidence. If you confirm `job`, I add the `Werkforce type: job` line, copy `os/type.md` from `references/types/job.md`, and add `company/role-scorecard.md` from its seed **only if that file does not already exist** - same skip-if-present rule as every other founder-data file in this step. **I do not re-head your existing `company/profile.md` or rewrite its "What we sell"-style headings to the job vocabulary**, even after you confirm `job` - your own words under a shipped heading are founder-authored divergence, untouchable by this migration. Re-heading an existing profile is offered as a separate, one-at-a-time edit you approve later, never bundled into the type confirmation.

`personal` is never offered by this migration - the the job-type design holds that profile behind a founder conversation that has not happened, so no upgrade path infers or offers it.

One scaffold gets refreshed on every board: the comment line at the top that names the stages. The 3.1 stage law is `Filed | In progress | Blocked | Manager review | Operator review | Done | Dropped` - `In review` is renamed to `Manager review` and a new `Operator review` stage sits between it and `Done`, because in 3.1 `Done` means operator-signed, not the Reviewer's word alone. I rewrite that one comment line to the current law.

The 3.0 -> 3.1 step also makes one narrow, sanctioned edit inside the task table - the only one this migration performs without asking you first: every board row whose Stage cell reads `In review` is renamed to `Manager review` - same task, same seat, same meaning (the Reviewer's gate), just the current word. No row moves stage otherwise, and I show you each rename before it lands.

Existing `Done` rows are grandfathered. A row already at `Done` predates the operator-sign-off gate, so I never reopen it or push it back to `Operator review` - it stays `Done`, and the migration record notes those rows as `operator-signed-by-grandfather` so the history is honest about why they carry no operator-review line. A grandfathered `Done` row is never retroactively reopened without your explicit say-so as founder.

### Step 4 - The org chart grows

Your org chart gains its full shape without losing a cell:

- If there is no `## Governance` table, it is added - Founder, Active, your name; CEO, Planned. The CEO seat arriving as Planned changes nothing until you choose to activate it.
- Each of the twelve standard departments missing from the table gets its row, status Planned: Engineering, Marketing, Sales, Product, Design, Client Delivery, Finance, Agent Resources, Operations, Legal, Information Security, Strategy. A Planned row is a job posting, not a hire - **open-a-department** still owns activation, and hiring stays a reserved decision.
- Every row you already have keeps its status, its names, and its autonomy level exactly as written - the one thing that can change a name is the offer below, and only if you say yes to it.

**The 3.1 -> 3.2 step offers the full official seat names - offered, never forced.** In 3.2 a seat's official name is written out in full: the org-chart governance row reads `Chief Executive Officer`, and the three department heads that were still abbreviated read `Chief Technology Officer`, `Chief Marketing Officer`, and `Chief Revenue Officer`, matching every other department head, which shipped spelled out all along - Chief Product Officer, Chief Financial Officer, General Counsel, and the rest. This is a naming law about official names only. Everyday prose is untouched: "the CMO reviews it" is still correct in 3.2, and your wake phrases - "activate my CEO" - are unchanged.

Your `company/org-chart.md` is yours. It is the roster of your company with your people's names in it, so this migration never rewrites it on its own initiative. Instead I show you the exact cells and the exact replacement text, and ask you once. The offer covers:

- the `## Governance` table's `Seat` cell, `CEO` -> `Chief Executive Officer` - that cell is the schema's own row label, not anybody's name
- any `## Departments` seat cell that holds `CTO`, `CMO`, or `CRO` as the agent's name, which is true of every HQ that named its seats after their titles
- the matching department charter's three-seats table `Role` cell, so the charter and the chart never say different things
- the matching role card's `# CTO - role card` header, and its `## This seat` `Name:` line where that line holds the abbreviation rather than a person's name

Say yes and those cells move together, so no two files disagree afterward. Say no and every one of them stays exactly as you wrote it - and your no is written into the migration record as a decline, which is the one place a later run looks before it makes this offer again. Once the record carries your answer, you are not asked twice. The honest limit: if it does not carry your answer - an interrupted run, a record that never got written - a re-run asks once more rather than quietly deciding for you. Either answer leaves the rest alone: a seat cell holding a person's name is never touched, the seat-card file names already in your HQ stay exactly as they are (this migration renames no files), statuses and autonomy levels and hire dates are untouched, the seat words stay Planner, Worker, Reviewer, and every line already written under `records/` keeps its old wording - ledgers are append-only, and history gets quoted, never corrected.

**The 3.2 -> 3.3 step offers the Agent Resources rename - offered, never forced.** In 3.3 the People & Talent department becomes **Agent Resources**, and its subject changes with its name: it hires, onboards, maintains, and continuously improves the agent seats in your company, and keeps human-contractor work as a named secondary lane. The three seats become Chief Agent Resources Officer, Agent Resources Specialist, and Agent Resources Manager.

What the offer covers depends entirely on what your HQ actually holds, and I look before I ask:

- **A Planned row and no department folder** - the common case. This is a one-line edit: the `## Departments` row's name cell, `People & Talent` -> `Agent Resources`. Nothing else exists to move.
- **An Active department with a folder.** Then the offer is the whole migration, and I show you every part of it before you answer: the charter's mission and KPIs replaced with the four-lane text, the playbook's SOPs replaced (your contractor SOPs kept, renumbered beneath the new ones), the three seat cards retitled, the folder moved from `departments/people-and-talent/` to `departments/agent-resources/` with all its outbox files and ledgers carried intact, and a `MOVED.md` stub left behind so every ledger line and receipt path that points at the old folder still resolves in one hop.

Say yes and all of it moves together, so no two files disagree afterward. Say no and everything stays exactly as you built it - and your no is written into the migration record as a decline, so a later run does not ask again. **For one version, `werkforce-checkup` accepts either name without warning**, so an HQ that declines is never nagged about it.

The limits are the same ones that govern every migration here, and they matter more in this one because it moves a folder. No dated outbox file is renamed - a dated deliverable is a receipt, and receipts are quoted, never corrected. No ledger line is rewritten: `records/` keeps every word it already carries, including the old department name and the old seat names, which is why the MOVED stub exists. Closed board rows keep their Seat cells; only open rows are updated. And every seat card's `## Seat memory` section moves byte-identical, so its pre-rename bullets still say "People & Talent Specialist" - that is correct and intended.

If your HQ runs a real contractor bench through this department, the honest note is that nothing about the human lane is being removed - it stays, in writing, as a named secondary lane. If you would rather it lived in Operations instead, that is a re-home rather than a rename, and it is your call to make separately.

### Step 5 - Seat words map, legacy departments stay

Seat words have modernized twice. The first-generation words were Lead, Specialist, and Reviewer; the second generation was Executive, Contributor, and Manager. The current facets are **Planner** (plans the work and writes every brief and its acceptance checks), **Worker** (does the work, labels claims, files receipts), and **Reviewer** (reviews adversarially, never their own work). Same three jobs, current names - and one reading note worth saying out loud: "Account Executive" is a Sales role title; the seat words are Planner, Worker, Reviewer. Role titles never change - Sales Manager, Engineering Manager, Content Manager, "{Department} Manager", and every C-suite title stay exactly as they are; only the facet word on the chair moves.

I map whatever older words your HQ carried to the current three, in place, across the files that carry them: org-chart seat columns (`Executive/Contributor/Manager` or `Lead/Specialist/Reviewer` become `Planner/Worker/Reviewer`), each department charter's seat table, and any board row whose Seat cell holds a seat word instead of a given name - that cell gets the given name of the agent holding that seat, read from the charter, because boards name people, not job titles. Your agents keep their names through all of it; only the label on the chair changes. And the old words are never broken: say "ask the Executive" next month and every skill understands you, answers as the Planner, and adds one gentle synonym note - a warning, never a refusal.

Then two additions where they fit:

- **Role cards.** For each Active department matching one of the twelve, I seed `departments/<slug>/seats/<role-slug>.md` from that department skill's shipped role cards - the card copied verbatim, then `## This seat` with the agent's existing given name and hire date from the charter, then an empty `## Seat memory`. A seats file that already exists is skipped, like everything else - and "already exists" is judged by the seat, not by the file name. That distinction matters now that some shipped cards carry their full official name (`chief-technology-officer.md` where an older HQ holds `seats/cto.md`): a plain name-match would hand you a second card for a seat you already have. It does not. Where your HQ already holds that seat's card under any name, I skip it and leave your file exactly where it is.
- **Legacy departments.** Any department you built that is not one of the twelve - a first-generation Content department is the classic case - STAYS. Its row is kept and marked `(legacy department)`, its charter, board, and memory are untouched, and one dated line goes to `records/warnings.md` noting the chart carries rows beyond the standard twelve. If you want to retire one someday, that is closing a department - a reserved decision - so I QUEUE it in `company/decision-log.md` with a recommendation attached and **archive-work** does the moving after you decide. A migration never fires anyone.

### Step 6 - Your timezone, on the record

Before I ask, one sentence on why: the current version writes and speaks every date in your own time - board dates, audit lines, session stamps, "due Friday 3pm" - never UTC, never Zulu, so nothing needs converting in your head. Older HQs never captured this, so I ask you plainly: what timezone do you live in? You answer in your words ("Eastern", "America/New_York", "London"), and I append one line to `HQ.md` right under `Founder:`:

```markdown
Timezone: America/New_York (EST/EDT)
```

If `HQ.md` already carries a `Timezone:` line, I leave it exactly as written and skip the question - your identity is never overwritten. This one line is what makes every timestamp the migration and every skill after it writes speak your time, which is why it lands before the audit-log line does.

### Step 7 - Log it

Every change from this session becomes one dated migration record appended to `records/worklog.md`, and the list is complete - a change that is not on the record did not earn its place:

```markdown
- YYYY-MM-DD [company] Migrated HQ 2.0 -> 3.0 - receipt: backup werkforce-backup-YYYY-MM-DD.tar.gz verified; refreshed os/charter.md, os/formats.md, os/manifest.md; seeded records/audit-log.md, company/onboarding.md (N steps marked Done from evidence), company/design/; added Timezone line to HQ.md; org chart gained Governance table and N Planned rows; seat words mapped to Planner/Worker/Reviewer across N charters and N boards; N legacy departments kept and marked; role cards seeded for N departments; reviewed by {founder}
```

A 3.0 -> 3.1 minor step is smaller and its record says exactly what moved:

```markdown
- YYYY-MM-DD [company] Migrated HQ 3.0 -> 3.1 - receipt: backup werkforce-backup-YYYY-MM-DD.tar.gz verified; refreshed os/formats.md, os/manifest.md; seeded records/operator-reviews.md; refreshed the stage-comment line on N boards to the 7-stage law; renamed N task-row Stage cells In review -> Manager review across N boards; N existing Done rows grandfathered as operator-signed-by-grandfather (not reopened); reviewed by {founder}
```

A 3.1 -> 3.2 step that made the full official seat names offer says which way you answered, explicitly, in the same record - the decline is the one place a later run looks before it makes the offer again, so it needs its own field rather than living in prose:

```markdown
- YYYY-MM-DD [company] Migrated HQ 3.1 -> 3.2 - receipt: backup werkforce-backup-YYYY-MM-DD.tar.gz verified; refreshed os/formats.md, os/manifest.md; full official seat names offer: declined (org-chart Seat/Role cells and role-card headers left as written) | accepted (N cells renamed across org chart, N charters, N role cards) | not offered (no abbreviated seat cell found); reviewed by {founder}
```

Any run that lands a werkforce-type outcome (B45) says which one, explicitly, in the same record - never silently:

```markdown
- YYYY-MM-DD [company] Migrated HQ ... - receipt: ...; werkforce type set to business (no answer, default applied) | werkforce type set to job (org chart apex cell read "{title}", founder confirmed) | werkforce type line already present, unchanged; reviewed by {founder}
```

The migration also writes the first line into the master audit log it just seeded, `records/audit-log.md`, timed in your new HQ timezone:

```markdown
- YYYY-MM-DD HH:MM [upgrade] [upgrade-your-werkforce] [company] migrated HQ 2.0 -> 3.0 - records/worklog.md
```

Then, last of all, `os/VERSION` gets its one line - `3.4`. Last on purpose: if a migration is ever interrupted halfway, the HQ never claims a version it has not earned - the next run reads the old stamp, sees what already landed, skips it, and finishes the rest. Done means the record shows it, and the stamp comes after the record.

## Do this now

1. Say "upgrade my werkforce" and let me read your VERSION and walk your tree.
2. Read the change list end to end before you say go - it is short, and every line on it will happen.
3. Watch the migration land, then read the migration record in `records/worklog.md` against what you saw.

Homework: open the backup archive listing once and confirm your real files are in it, then note where it lives - that archive is your undo button for everything that happened today.

Next: run **werkforce-checkup** - a fresh migration deserves a clean bill of health, and the checkup will tell you in plain OK and WARN lines whether the upgraded tree holds together.

## Werkforce Starter v0 kernel migration (3.x -> 3.4)

This MINOR migration is additive and always starts with **backup-your-werkforce**.
List and verify the backup archive before writing. Then copy the shipped kernel
payload into the existing HQ: `os/werkforce-kernel`, `kernel/dist/`,
`kernel/schema/`, and `os/hooks/kernel/` (including `claude-hook.sh`,
`claude-adapter.mjs`, `codex-adapter.mjs`, `guard.mjs`, and `policy.json`).
Preserve founder-authored files, boards, ledgers, events, and unrelated hook
settings. Arm the Claude PreToolUse wrapper additively; never replace an existing
hook configuration wholesale.

After the files are installed, offer the founder one separate, explicit step:
`os/werkforce-kernel import-v1`. Explain what it imports, show the source and
backup, and wait for the founder's yes. **Never auto-import.** A decline or no
answer leaves the existing 3.x HQ running unchanged except for the installed,
inactive kernel files. Stamp `os/VERSION` `3.4` only after the backup, file
installation, hook check, migration record, and any founder-approved import have
completed successfully.
