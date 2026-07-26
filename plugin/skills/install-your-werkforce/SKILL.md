---
name: install-your-werkforce
description: Builds your company HQ from nothing in about five minutes - the full operating system your workforce runs on, as plain files you own. You answer four questions (your werkforce's type, its name, your name, your timezone) and walk away with your soul file, an operating charter, an org chart holding all twelve departments and your governance seats, an inbox, the company files (profile, business model or role scorecard, design system, visions, outcomes, strategy, playbooks, metrics, decisions, customers), and the records your workforce writes as it works - including the master audit log. Use when you say "install my werkforce", "set up my workforce", "build my HQ", "install the OS", "start my company system", "set up my agentic workforce". Run this once, first, before everything else.
---

# Install Your Werkforce - the day your company gets an operating system

Most people bolt AI onto their business one chat at a time, and every chat starts
from zero. You are about to do something different: give your company a real
operating system - a folder of plain files that holds who you are, who works for
you, what they are doing, and what got done. Your workforce remembers because
the files remember - no subscriptions beyond the one you have, no APIs, nothing
to host.

Five minutes from now you will have an HQ with twelve departments defined and
honestly empty, a constitution every agent obeys, and a board you can look at.
Staffing it comes next; today the company gets its bones.

## Personalization

This is the setup skill, so there is nothing to read yet - this run CREATES your
HQ. I ask you exactly four things (your werkforce's type, its name, your name,
and your timezone) and never invent anything else: every field I cannot fill
from your answers stays "(not set yet)" until you give me something real.

## What you get

- `werkforce/HQ.md` - your soul file: wake phrases, standing orders, and the
  timezone every timestamp in the HQ is written in
- `werkforce/os/` - the operating charter (`charter.md`), the format law
  (`formats.md`), the manifest, the version file, and `type.md` (the B45 lens
  for your werkforce type) - copied in exactly as shipped, so every HQ of the
  same type runs the same OS
- `werkforce/company/` - org chart (governance seats + all twelve departments,
  every one Planned), onboarding checklist, profile, business model (`job`
  type gets a role scorecard instead - same capability-floor shape), the design
  system and its house page template, visions, outcomes, strategy ledger,
  playbooks, metrics, decision log, and an empty `customers/` folder
- `werkforce/inbox.md` - drop anything here any time; it becomes work at intake
- `werkforce/records/` - the master audit log, worklog, warnings, reviews,
  sessions, improvements, artifact registry
- `werkforce/skills/` - your own skill shelf, with its standard and catalog
- `werkforce/archive/` - where retired work goes instead of being deleted
- The founding line in `records/audit-log.md` and `records/worklog.md`: your
  company's first receipt

## What I need from you

1. Where your HQ lives. Home folder is the default (`~/werkforce/`); a business
   folder works too if you deliberately want a separate HQ per business. A
   scratch folder makes a practice HQ - practice never touches the real record.
2. Your werkforce's type: **business** (the default - a company you sell
   through) or **job** (a W2 role, run alongside or instead of a business
   HQ). This is asked before the name, because the name question's own
   wording depends on it. (A third type, **personal**, is on the roadmap but
   not yet installable - see below.)
3. Its name - your company name for `business`, or your employer and role for
   `job`.
4. Your name.
5. Your timezone, in plain words ("Eastern Time", "Pacific", "London"). I record
   it as a named zone (for example `America/New_York (EST/EDT)`) so every
   timestamp your workforce ever writes is in your time, never UTC.

**`personal` is not available yet.** The design behind this setting
(departments/product/outbox/2026-07-24-b45-werkforce-type-design.md) held the
`personal` roster back for a founder conversation - nine proposed departments
with no deployed evidence. If you ask for `personal`, I say so plainly and
ask you to pick `business` or `job` for now, or wait.

## How it works

### Step 1 - Confirm the ground

I tell you exactly where the HQ will be created and what that means, in one
sentence. If a `werkforce/HQ.md` already exists there, I stop building and say
so - reinstalling over a living HQ is never done silently; **upgrade-your-werkforce**
is the path for an existing HQ.

### Step 2 - Four questions

Your werkforce's type, its name, your name, and your timezone. Type comes
second, before the name, because the name question reads differently by type
("your company name" for `business`, "your employer and role" for `job`).
That is the whole interview - everything else in the OS starts honest and
empty.

### Step 3 - Build the tree

I create the folders and copy the OS in from this skill's own references -
byte-for-byte for the shared files, your answers and today's date filled into
the templates. Which seed variant I copy depends on the type you named in
Step 2; the folders and every other file are identical across types. I say
what I am writing as I go:

- `os/charter.md`, `os/formats.md`, `os/manifest.md`, `os/VERSION` - copied
  verbatim from `references/os/`, every type
- `os/type.md` - copied verbatim from `references/types/<type>.md` (the B45
  lens: apex title, roster note, vocabulary map for your type)
- `HQ.md` - from `references/seeds/HQ.md.tmpl` (`business`) or
  `references/seeds/HQ-job.md.tmpl` (`job`), with `{{COMPANY}}`, `{{FOUNDER}}`,
  `{{TIMEZONE}}`, `{{DATE}}` filled; the `job` variant carries one extra
  standing order, the W2 employment boundary
- `company/org-chart.md` - from `references/seeds/org-chart.md.tmpl`
  (`business`, apex seat `Chief Executive Officer`) or
  `references/seeds/org-chart-job.md.tmpl` (`job`, apex seat `Chief of
  Staff`) - same twelve department rows either way
- `company/profile.md` - from `references/seeds/profile.md.tmpl` (`business`)
  or `references/seeds/profile-job.md.tmpl` (`job`, headings carry the
  accountability lens - "What I'm accountable for", "Who I serve", "Track
  record")
- `company/onboarding.md` - from `references/seeds/onboarding.md.tmpl`
  (`business`) or `references/seeds/onboarding-job.md.tmpl` (`job`, step 3
  points at the role scorecard instead of the business model, step 9
  activates the Chief of Staff)
- `company/business-model.md` (`business` only, from
  `references/seeds/business-model.md.tmpl`) or `company/role-scorecard.md`
  (`job` only, from `references/seeds/role-scorecard.md.tmpl` - same
  Yes/Now/Not-yet capability-floor shape, job's grounding equivalent per the
  the job-type design's Q1 recommendation)
- `company/decision-log.md`, `company/design/design-system.md` - from
  `references/seeds/*.tmpl`, identical across types
- `inbox.md`, `company/visions.md`, `company/outcomes.md`,
  `company/strategy.md`, `company/playbooks.md`, `company/metrics.md`,
  `records/audit-log.md`, `records/worklog.md`, `records/operator-reviews.md`,
  `records/warnings.md`, `records/reviews.md`, `records/sessions.md`,
  `records/improvements.md`, `records/artifact-registry.md` - copied verbatim
  from `references/seeds/`, identical across types
- `skills/STANDARD.md` and `skills/CATALOG.md` - from
  `references/seeds/skills-STANDARD.md` and `skills-CATALOG.md`
- empty folders: `company/customers/`, `company/design/`, `departments/`,
  `archive/`

Choosing `business` produces the same tree this skill always produced, plus
the one added `Werkforce type: business` line in `HQ.md` and the new
`os/type.md` file - no vocabulary, roster, or apex change.

The design system starts every value at "(not set yet)"; the **design-system**
skill fills it later and generates `company/design/page.html`, the house
template every rendered page is built from. Nothing that already exists is ever
overwritten - if a file is already there I leave it, note it in one sentence,
and keep going.

### Step 4 - Place the manifest

I copy `references/os/manifest.md` to `os/manifest.md` - the pack version,
every skill this version ships, and every state file it expects - and note
the type you chose alongside it. The checkup reads it later to tell you when
something drifted - a warning, never a stop.

### Step 5 - The tour, in one minute

I show you the org chart - your governance seats (you as Founder, the apex
seat still Planned under your type's title - CEO for `business`, Chief of
Staff for `job`) and twelve departments, every one defined and none staffed.
That is not emptiness; that is headroom. Then the nine wake phrases from
HQ.md, and the one habit that matters: anything on your mind goes in
`inbox.md`, any time, and becomes real work at the morning intake.

### Step 6 - Log it

I write the first two lines of your company's permanent record. The master audit
log gets the founding entry, timestamped in your timezone:

```markdown
- {{DATE}} {{HH:MM}} [install] [founder] [company] Installed the Werkforce OS - werkforce/
```

And the worklog gets the founding receipt:

```markdown
- {{DATE}} [company] Installed the Werkforce OS - receipt: HQ tree at werkforce/, os charter and formats in place, org chart with 12 departments Planned, design system seeded, manifest written, reviewed by {{FOUNDER}}
```

And one opening line to `records/sessions.md`, because the habit starts now.

## Do this now

1. Say "install my werkforce" and confirm where HQ lives.
2. Answer the four questions.
3. Say **"werkforce, board"** and look at your whole company - honestly empty,
   ready to staff.

Homework: open `werkforce/os/charter.md` in any text editor and read it once,
top to bottom - it is short, and it is the constitution your whole workforce
runs on.

Keeping current: if you added Werkforce as a Claude Code plugin
(`/plugin marketplace add sys-werkforce/werkforce`), Claude Code keeps
auto-update OFF for third-party marketplaces by default - so new releases will
not reach you on their own. Turn it on once now: run `/plugin`, open the
**Marketplaces** tab, select `werkforce`, and choose **Enable auto-update** (or
pull a release by hand any time with `/plugin marketplace update werkforce`).
When a new pack lands, say **"upgrade my werkforce"** to migrate your HQ to it -
additively, backup first, nothing lost.

Next: run **onboarding** - it opens `company/onboarding.md` and walks you step
by numbered step, starting with **company-profile** (a ten-minute interview that
teaches every future agent to sound like you), through your first department and
your first win, until every setup step shows Done.
