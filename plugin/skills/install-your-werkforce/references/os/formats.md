# The format law - the exact shape of every file in your HQ

One shape per file, written here once. Seed files carry a comment line copied
from this law; at working time the comment inside the file you are editing is
the operative rule, and the checkup warns when a file's comment has drifted from
this law. Kinds: LEDGER (append-only, lines never edited), LIVING (edit the
named cell or field in place, nothing else), GENERATED (derived, legally
overwritten).

## HQ.md - LIVING
H1 `# {company} - Workforce HQ`, `Founder:`, `Timezone:` (the founder's named
timezone, for example `America/New_York (EST/EDT)` - every timestamp anywhere
in the HQ is written and spoken in this timezone, never UTC), and `Opened:`
lines, `## Wake phrases` (the nine, verbatim from the seed), `## Standing
orders` (numbered; additions append at the end, numbered on).

## inbox.md - LEDGER
H1 plus comment. One line per drop: `- YYYY-MM-DD note/idea/ask in your own
words`. Intake marks a line adopted by appending ` -> adopted: what it became`
at line end (the one sanctioned line edit in the OS). An inbox entry owns no
fact until intake converts it.

## os/charter.md, os/formats.md - shipped verbatim; never edited by skills
Changes arrive only through upgrade-your-werkforce, recorded in the worklog.

## os/manifest.md - LIVING (rewritten by install/upgrade only)
H1, `Pack version:` line, `## Skills installed` (one bullet per skill name),
`## Expected tree` (one bullet per state file/folder this version installs).

## os/VERSION
One line, the OS state version (for example `3.0`). Absent file means a 1.x HQ.
Only upgrade-your-werkforce rewrites it.

## company/onboarding.md - LIVING (status words edit in place)
H1 `# {company} - onboarding`, one comment line, then a numbered list - one
line per onboarding step, in the fixed order the onboarding skill teaches:
`{n}. {skill-name} - {what it sets up} - Status: Done (YYYY-MM-DD) | Next |
Later`. Exactly one step is `Next` at any time. The onboarding skill is the
sole writer; it flips a step to Done only when the thing the step builds
actually exists in the HQ.

## company/design/design-system.md - LIVING
H1 `# {company} - design system`, then H2s in order: Palette (named colors
with hex values), Type (font stack, scale), Voice on the page (how headings
and captions sound), Layout rules, Components (cards, tables, callouts,
buttons). Unknowns stay `(not set yet)`. Sole authority for how every rendered
HTML deliverable and the dashboard look; if the founder has an existing brand
or design system, its values are recorded here (with the source named), never
invented.

## company/design/page.html - GENERATED
The house page template the design system compiles to: one self-contained HTML
file (inline CSS, no external requests) that rendering skills copy and fill.
Regenerated whenever design-system.md changes; never hand-edited.

## company/profile.md - LIVING
H1 `# {company} - profile`, then H2s in order: Who we are, What we sell, Who we
sell to, How we sound, Proof we point to. Unknowns stay `(not set yet)` - never
invented.

## company/business-model.md - LIVING
H1, then H2s in order: Ideal customer, Offer ladder and pricing, How customers
find us, Unit economics, Constraints right now, What we can deliver today.
The last section holds three bullet lists: Yes (proven), Now (can do on
request), Not yet (do not claim). Every filled line ends with its source in
parentheses, in your words ("from my Stripe dashboard", "founder's estimate").
Blanks stay `(not set yet)`.

## company/visions.md - LEDGER
H1 plus comment. One H2 per vision: `## V{n} - {short name}`, one paragraph
(the direction), then `Ratified: YYYY-MM-DD by {founder}.` A superseded vision
gets a dated `Retired:` line appended and stays visible.

## company/outcomes.md - LIVING (status lines append)
H1 plus comment. One H2 per outcome: `## O{n} - {measurable state}`, then
`Serves: V{n}` (or `(none yet)` with a warning logged), `Verified by: {who
checks, looking at what}` (default `founder`), `Status: Open`. Status words
are exactly `Open`, `Reached`, or `Dropped`; a change appends a new line
`Status: {word} (YYYY-MM-DD) - {one-line reason}` and the old line stays.
Only the named verifier's evidence flips a status to Reached - and a
founder-directed flip always proceeds, with one warning line.

## company/strategy.md - LEDGER
H1 plus comment. Dated H2 entries `## YYYY-MM-DD - {topic}` containing either a
recommendation (`Recommendation:` with reasons citing business-model fields,
then `Founder's verdict: Ratified|Declined|Pending - reason`) or a deliberation
(seat-prefixed turns like `[CEO]`, `[CMO]` as bullets, ending in `Joint
recommendation:` and the verdict line). Deliberation transcripts live here and
nowhere else.

## company/playbooks.md - LEDGER
H1 plus comment. One H2 per playbook: `## P{n} - {situation in one line}`, then
labeled lines `Pattern:` / `Evidence:` (a file, receipt, or source) /
`Fails when:` / `Fits when:`. Corrections append as one dated line under the
entry: `Correction (YYYY-MM-DD): {what changed}` - a playbook that stopped
being true gets corrected, never deleted.

## company/metrics.md - LEDGER
H1 plus comment. One H2 per month `## YYYY-MM`; one bullet per number:
`- {metric}: {value} (from {named source})`. Sole writer: the monthly close.
Numbers come from you or files you point at - never invented.

## company/org-chart.md - LIVING
H1 `# {company} - Org chart`, comment lines, `## Governance` table
`| Seat | Status | Name |` with exactly two rows (Founder - always Active;
CEO - Planned until activated). `## Departments` table, exactly these columns:
`| Department | Status | Planner | Worker | Reviewer | Autonomy |`
Exactly twelve rows in this order: Engineering, Marketing, Sales, Product,
Design, Client Delivery, Finance, People & Talent, Operations, Legal,
Information Security, Strategy. Status `Planned` or `Active`; seat cells hold
given names (`-` when Planned); Autonomy `-` or `{0-3} - {Hired|Supervised|
Trusted|Autonomous}`.

## company/decision-log.md - LEDGER
H1 plus comment. Line types:
`- YYYY-MM-DD [department] QUEUED: what needs deciding - context - options -
recommendation` / `- YYYY-MM-DD [ceo] EVAL re: {ask} - endorse or challenge -
reasons citing the business model` / `- YYYY-MM-DD [department] DECIDED: choice
- reason (re: the ask)`. `[company]` for company-level queues; a decided company
queue closes with `[company] DECIDED`. Big moves get their checklist and written
undo plan inside the QUEUED line's context. Lines are never edited or deleted.

## company/customers/<slug>.md - LIVING header + LEDGER history
H1 `# {Customer or lead name}`, then lines `Stage: lead|talking|promised|paid|
delivered|dormant`, `Promised:`, `Paid:`, `Next touch:` (edited in place), then
`## History` - dated one-line bullets, append-only.

## departments/<slug>/charter.md - LIVING (graduation lines append)
H1 `# {Department} - charter`, `Mission:` line, `Opened: {date} | Autonomy:
Level {n} - {name}` line, `## KPIs` bullets, `## The three seats` table
`| Seat | Role | Name | Role card |` rows Planner / Worker / Reviewer
(Role = the role title, for example CMO; Role card = one line; the full card
lives in seats/), `## Department rules` numbered, `## Graduation record` dated
bullets, append-only.

## departments/<slug>/seats/<role-slug>.md - role card + LEDGER memory
The role card copied verbatim from the department's reference: H1
`# {Role title} - role card`, then H2s in order: `## Mission`, `## What
excellent looks like` (the elite-hire bar: 4-8 falsifiable statements of what
this seat's work meets before it is offered), `## How this seat works` (method,
tools, cadence), `## Boundaries` (what this seat never does), `## Anti-patterns`
(named failure modes the Reviewer checks for), `## Escalation` (exactly when
this seat stops and queues a decision or asks the founder). Then `## This seat`
(`Name: {given name}`, `Hired: {date}`) and `## Seat memory` - dated one-line
bullets, append-only, written by this seat only. A card missing any H2 is a
checkup warning - every seat is defined to the bar of an elite hire, in full.

## departments/<slug>/board.md - LIVING
H1 `# {Department} board`, two comment lines (stages; receipt law), one table:
`| Task | Stage | Seat | Filed | Due | Receipt |`
Stages exactly: `Filed | In progress | Blocked | Manager review | Operator
review | Done | Dropped`. The live flow is Filed -> In progress -> [Blocked is a
parking lot off In progress] -> Manager review -> Operator review -> Done, with
Dropped reachable from any stage. `Manager review` is the Reviewer's gate (the
old `In review`, renamed); a task that passes it moves to `Operator review`,
where it waits for the founder's sign-off at the desk. `Done` means
operator-signed - the founder signed it off - never the Reviewer's word alone.
Seat = the agent's given name. Receipt is `-` until Done; a Done row's receipt
says what was produced, where it lives, who reviewed. A Blocked row carries
`blocked by {what} - recheck {how}` in its Receipt cell until unblocked (then
`-` again). An operator send-back returns the row from `Operator review` to `In
progress` and is recorded verbatim in records/operator-reviews.md. Dropped is
never relabeled Done.

## departments/<slug>/briefs.md - LEDGER
H1 plus comment. Dated H3 entries matching board task names:
`### YYYY-MM-DD - {task name}`, then `Outcome:` (`O{n}` or `(none yet)` - the
skill logs one warning and keeps moving) / `Acceptance checks:` (numbered, each
falsifiable) / `Due:` / `Seat:` / optional `Type: story` when written in the
customer's language.

## departments/<slug>/playbook.md - LIVING
H1 `# {Department} playbook`, one intro sentence, then a numbered list of SOPs,
one short paragraph each, each ending `(candidate)` or `(proven)`. The marker
flips to `(proven)` only after a review cites the SOP in a passed deliverable.
Never restructured into headings.

## departments/<slug>/memory.md - LEDGER
H1 plus comment. One line per note: `- YYYY-MM-DD what we learned.` No
headings, no sub-bullets. Review records are one bullet:
`- YYYY-MM-DD Review of {task}: verdict, checks passed/failed, downgrades,
faults (or none).`

## departments/<slug>/drafts/ - invisible until handoff
Work in progress. No control reads it; nothing here reaches the record until it
moves to outbox/ or a board receipt names it.

## departments/<slug>/outbox/
Finished deliverables. Each deliverable is a pair: `YYYY-MM-DD-{slug}.md` (the
editable truth) plus `YYYY-MM-DD-{slug}.html` (the finished render in the
company design system, self-contained, from `company/design/page.html`). The
markdown is LIVING truth; the render is GENERATED and legally overwritten. A
deliverable handed to the founder is the .html - polished, not raw notes.

## records/audit-log.md - LEDGER (the master audit log)
H1 plus comment. One line per action or event, from install onward, written by
whichever skill acted, at the moment it acts:
`- YYYY-MM-DD HH:MM [{type}] [{owner}] [{scope}] {what happened} - {pointer}`.
Times are in the HQ timezone (never UTC). `{type}` is exactly one of:
`install | onboarding | task | review | decision | send | spend | hire |
warning | session | skill | archive | backup | upgrade | note`. `{owner}` is
the acting seat's given name, `founder`, or the skill name. `{scope}` is a
department slug or `company`. `{pointer}` names where the evidence lives.
Filterable by date, type, owner, and scope by construction - the dashboard's
activity view reads this file. If an action is not here, it did not happen.

## records/worklog.md - LEDGER
H1 plus comment. One line per finished piece of work:
`- YYYY-MM-DD [department] Task - receipt: what was produced, where it lives,
who reviewed`. `[company]` for HQ-level work; migration and upgrade records land
here too.

## records/operator-reviews.md - LEDGER (append-only, the review-gap data source)
H1 plus comment. One line per operator decision at the desk, appended the moment
the founder signs off or sends a task back:
`- YYYY-MM-DD [department] TASK-ID signed-off | sent-back: {operator's reasons
verbatim}`. A signed-off line ends after `signed-off` (the task moves to Done); a
sent-back line carries the founder's reasons word for word after `sent-back:` so
the review-gap analysis can read why work bounced. Written only when the founder
speaks at the founders-desk; the operator-review queue page shows the decision
but never writes here (generated-view law holds - no write-back forms). Lines are
never edited or deleted.

## records/warnings.md - LEDGER
H1 plus comment. `- YYYY-MM-DD [skill-name] finding - action taken`. A warning
never stops work.

## records/reviews.md - LEDGER
H1 plus comment. Written by the weekly review, the monthly close, and the
quarterly strategy review only, under dated H2 headings. Task reviews live in
each department's memory.md.

## records/sessions.md - LEDGER
H1 plus comment. `- YYYY-MM-DD HH:MM opened - focus: {what}` and
`- YYYY-MM-DD HH:MM closed - {one-line recap}`, times in the HQ timezone. An
unclosed foreign line gets a warning, never a lock.

## records/improvements.md - LEDGER
H1 plus comment. `- YYYY-MM-DD lesson|fix|idea|intervention: {one line}` -
lesson when a control warned or a close was refused, fix when something got
repaired, idea for a capability the company wants, intervention when the
founder overrode a seat law. The weekly review reads this file and proposes
exactly one change.

## records/github-map.md - skill-owned (share-to-github only)
H1 plus comment, three H2 sections: `## Repos we mirror` (one bullet per
owner/repo - an unlisted repo gets a warning, not a write), `## Map` (one line
per mirrored item: `{department}/{task or O-id} <-> {owner/repo}#{N}`),
`## Pending` (mirror intents not yet applied; drained idempotently, then marked
applied by appending ` -> applied YYYY-MM-DD`).

## records/dashboard.html - GENERATED
The company dashboard - one self-contained HTML page in the company design
system, rewritten wholesale by status-report on every run and openable by
double-click. It is the project-management face of the HQ: header (company,
generated-at stamp in the HQ timezone, how to refresh), department boards with
stage counts and task rows, the decision queue waiting on the founder, open
outcomes with status, recent deliverables with clickable file links, a
filterable activity feed read from records/audit-log.md (filter by date, type,
owner, scope), and a "recommended next actions" strip. Refreshing = saying
"werkforce, status" (or running the refresh command printed in the page
footer); the page says so. Never hand-edited; never treated as a source of
truth.

## skills/ - the founder's own skill library
`STANDARD.md` (the craft bar and hostile tests - shipped verbatim),
`CATALOG.md` (LIVING - one table row per minted skill: name, what it does,
lifecycle candidate|proven, honest residual risk), one folder per minted skill.
A skill flips to proven only after a reviewed deliverable used it; never
self-promoted.

## archive/
Retired board tables and old outbox files, moved here by archive-work with a
dated worklog note. Nothing in the OS is ever deleted.

## The filing law - every file has one home, findable without hunting

When any skill produces a file, it files it by this table and says where it
put it, in one sentence, at the moment it files it:

- Deliverables (a thing made for the founder or a customer) ->
  `departments/{slug}/outbox/YYYY-MM-DD-{slug}.md` + `.html` pair.
- Work in progress -> `departments/{slug}/drafts/` (invisible to controls).
- Company-level facts -> the owning file under `company/` (never a new file).
- History and evidence -> the owning ledger under `records/`.
- Founder-minted tools -> `werkforce/skills/{name}/`.
- Retired work -> `archive/`, moved by archive-work only.

Names carry the date first (`YYYY-MM-DD-`), then a plain-words slug that says
what the file is without opening it. No skill invents a new top-level folder,
a second home for an existing fact, or a clever name. The founder never hunts:
the dashboard's deliverables list, the board's Receipt cells, and the audit
log's pointers all name exact paths.
