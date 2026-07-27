---
name: connect-a-tool
description: Map where your work actually lives - inboxes, CRM, docs, chat, tracking, money - into one living file, then connect each source on your one-word yes, with the workforce doing the wiring itself and proving the connection live before it counts. Two movements - Inventory (ask, don't connect) then Connection (the workforce connects, purposefully, one source at a time) - governed by an absolute consent gate - nothing is installed without your explicit go-ahead, and every source is skippable, including ending with zero connections, which is a fully valid finish. Use when you say "map my tools", "connect a tool", "connect my [Gmail/HubSpot/Slack/etc]", "where does my work live", "hook up my CRM", "what tools should I connect", "connect-a-tool". Run it any time after company-profile - it is re-runnable and additive as your toolset changes.
---

# Connect a Tool - map your work, then connect it, on your word

Every skill in this workforce runs files-first, standalone, with zero
connectors. Connecting a real tool - Gmail, HubSpot, Slack, Drive, Stripe,
whatever you actually live in - supercharges a skill; it never becomes a
requirement. This skill has two jobs, always in order: **map first, connect
second.** Movement 1 is a short conversation about where your work lives; it
connects nothing and writes one record. Movement 2 connects what earned a
connection, one source at a time, on your yes.

**The one rule that governs everything below: you authorize, I connect.**
Nothing is installed, wired, or granted scope without your explicit
in-session go-ahead - the same reserved-decision law that governs deletes and
external sends [HQ.md standing order 5]. On your yes, I do the doing: the
founder does not become the installer. This mirrors the consent-gated pattern
**install-dependencies** already ships - detect, show you the exact thing
before doing it, wait for your word, execute in the foreground with output
visible, verify. You never type your password for me to use.

## Personalization

I read `company/profile.md` for who you are and `company/org-chart.md` for
which departments are Active, so the purpose tag on each source ties to real
work, not a guess. If `company/work-inventory.md` already exists, I read it
first and treat this run as additive - new sources get added, nothing
existing is erased.

## What you get

- `company/work-inventory.md` in your HQ - one row per source you named, in
  the exact shape the format law pins: Source, Bucket, Purpose, Access
  wanted, Connection status, Serves
- Each connection you authorize, performed by me end to end - the MCP server
  or connector installed, the auth handshake driven to your own login, the
  narrowest scope the job needs requested - then proven live with one cheap
  read before the row ever says "connected"
- A calibration that sets how much I explain, once, at the very start - the
  same install narrated in plain words for a first-timer and in two lines for
  someone technical
- An honest resting state: a source can stay mapped-but-unconnected forever,
  and the whole interview can end with zero connections - both are valid
  finishes, never a thing to apologize for
- One line in `records/worklog.md` and `records/audit-log.md` every time I
  write the inventory or complete a connection

## What I need from you

1. A few minutes to answer the calibration question and name where your work
   lives - short answers are fine, and every question is skippable except the
   calibration one
2. One word, "yes" or "no", for each connection I propose - I never install
   anything on a maybe
3. Your own login, in your own browser or app, when a connection needs one -
   I drive you to the screen, you enter your own credentials

## How it works

### Step 1 - Calibration, read first, asked only if unset

**I read it before I ask it.** If `company/onboarding.md` carries an
`Explain-level:` line, that is my level and I do not ask again - you answered
this once and being asked twice would mean nobody was listening. The
**onboarding** skill owns that line and is the single place the question is
ever put.

If there is no line (no HQ yet, or an HQ that has not been through
onboarding), I ask it here, never skippably:

"Before we map your tools: how comfortable are you with the terminal and
with Claude Code? No wrong answer - it just changes how I explain things.
(a) First time in a terminal / it makes me nervous, (b) I've used it a bit,
(c) I'm comfortable / I'm technical."

Why: the rest of this conversation, and every install I narrate later, gets
pitched at your level. Not sure defaults to (a), the most-explained path;
calibrating too gentle costs nothing, calibrating too expert loses people.
This sets my **explain-depth** for the whole run, including how much I
narrate each connection I perform. An answer given here holds for this run
only - I do not write it to `company/onboarding.md`, whose sole writer is the
onboarding skill; onboarding stores the level when you reach its step 6.

### Step 2 - The work-inventory interview

Every question states its why and whether it's skippable, before you answer
it - never after.

- **Where does your work happen? (skippable, entirely)** "Where does your
  actual work live day to day? Tell me the tools, apps, inboxes, and folders
  you're in most. Don't worry about whether I can connect to them yet - I
  just want the map." Why: I ground deliverables in real inputs. Skipping
  costs nothing - every skill still runs files-first until you come back.
  Free-form; I sort what you tell me into the buckets below in your own
  words and never quiz you into extra tools you didn't name.
- **Category sweep (each bucket independently skippable).** A small fixed
  set so nothing common gets forgotten - any blank stays blank, no invented
  tools:

  | Bucket | The question | Why asked |
  |---|---|---|
  | Inboxes | "Where does mail/messages come in - Gmail, Outlook, a shared inbox?" | Customer-care and sales ground on real threads |
  | Customer/deal system | "Do you track customers or deals anywhere - a CRM, a spreadsheet, your head?" | Sales/customer boards can read live deal state instead of a stale HQ copy |
  | Docs & files | "Where do your documents and assets live - Drive, Dropbox, a local folder?" | Deliverables can reference real source material instead of being written blind |
  | Chat/comms | "Do you run a team or community on Slack, Discord, Telegram?" | A connection here can double as a control surface |
  | Work/issue tracking | "Do you track tasks or projects in anything - Linear, Notion, Trello, sticky notes?" | Tells me whether you need a connector or just the HQ's own boards |
  | Money | "Where does money show up - Stripe, a bank dashboard, invoices?" | Finance reads, never writes; live numbers stay owned by your dashboard and bank |

  The sweep is deliberately short - it exists so you don't forget your CRM,
  not to run an exhaustive SaaS census.
- **Purpose tag (one follow-up per named source, skippable).** "What would
  you want me to do with [Gmail]? Read it to ground work, or eventually act
  in it too?" Why: I never propose a speculative connection - one connector,
  one real job to be done. This tag earns a source its place in the
  connection queue, and read vs. write decides the least-privilege scope
  I'll request later. An untagged source stays in the inventory as "mapped,
  purpose TBD" and simply isn't queued until you say why.

### Step 3 - Write the inventory

A living file, founder-owned, beside `profile.md` and `business-model.md`.
This run creates it if it does not exist yet (creating it is your call, made
the moment you run this interview - not assumed at install time):

```markdown
# {company} - work inventory
<!-- LIVING file. Sole writer: the connect-a-tool skill. One row per source
the founder named; edits happen in place, each change carries a one-line why.
No credentials are ever recorded here - status only. -->

| Source | Bucket | Purpose | Access wanted | Connection status | Serves |
|---|---|---|---|---|---|
| HubSpot | CRM | read deals to ground the sales board | read | not-connected | Sales |
```

Rules that keep it honest:
- **No credentials, ever.** This file records that a source exists and its
  status - never a key, token, or password. That holds whether you or I did
  the wiring; the auth stays in your own connector config, not in this file.
- **Status is a fact, not a promise.** "connected" is written only after my
  live read-test confirms the capability (Step 4, action 6). Until then it
  reads "not-connected."
- **The HQ record still outranks the connector.** This file says a tool is
  *available*, never that it is *truth*.

I tell you, in one sentence, every time I write to this file.

### Step 4 - Connect, one source at a time, in purposeful phases

Once the inventory has at least one purpose-tagged source, I propose
connections in phases - never a bulk import, never more than one source per
phase:

- **Phase 0 - Zero connections is a valid finish.** You can end this skill
  with a full inventory and no connections at all. Every skill you have
  keeps running files-first. I never push you to connect something to
  "finish."
- **Phase 1 - Highest-purpose read, first.** I take the inventory row that
  most directly grounds an Active department and run the flow below for
  that one source, read-only. Prove it live, ground one real deliverable on
  it, stop.
- **Phase 2 - Remaining reads, one at a time.** Each additional read-purpose
  source connects only when its department is Active and its job is real -
  never because a connection is merely possible.
- **Phase 3 - Write-purpose sources, last and gated.** A source you tagged
  for write connects only after its read use is proven, and **every write
  still queues at your gate** - my wiring the connector never means a send
  goes out unconfirmed. There is no phase where a write leaves without your
  yes on that specific send.

Every phase runs the same per-source flow, in order:

1. **I check whether the source is already connected.** Before proposing
   anything, I detect - the same detect-before-install discipline
   install-dependencies uses ("check whether Node is already present" before
   ever showing an install command). If the capability already answers, I
   report that plainly, flip the row to "connected" on a fresh live read, and
   stop - nothing gets installed twice.
2. **I propose one connection, with its job.** "You told me your deals live
   in HubSpot and you want the sales board grounded on them. I can connect
   HubSpot read-only. Want me to?" One connector, one job - never a
   speculative list.
3. **I state, before asking for your yes, exactly what I will do and what
   the connector can touch** - what I'll install, why, and the scope I'll
   request (read-only unless the job needs write; write always still gated
   at send time). At calibration level (a) I define every term in plain
   words as I go.
4. **You authorize - the consent gate.** One word. Until it lands, I install
   nothing. A no leaves the row "not-connected" and I move to the next
   source, no pressure applied.
5. **I perform the install myself, end to end, in the foreground.** I add
   the MCP server / plugin / connector to the runtime configuration, drive
   the auth handshake to your own login screen when a login is needed (you
   enter your own credentials - I never type your password), and request
   the least-privilege scope named in action 3. Output stays visible the
   whole time - no silent background wiring, same foreground rule
   install-dependencies already uses.
6. **I prove it live, then report, then flip the row.** I run one cheap read
   against the new connection and tell you the result plainly - "connected;
   read a HubSpot deal named [X], read access confirmed." Only now does the
   inventory row flip to "connected." If the read fails, the row stays
   "not-connected," I report the failure plainly, and I fall back to
   files-first for that source - I never claim a connection I can't prove.

**Disconnection is symmetric and safe**, at every phase: on your word, I
remove the server, flip the row back to "not-connected," and every skill
keeps running files-first - nothing breaks by disconnecting.

The whole ordering rule in one line: **read before write, Active-department
before speculative, one source at a time, detect-then-authorize-then-
execute-then-prove, always resumable.** You can stop after any phase; the
inventory file is the resume point next time you run this skill.

### Step 5 - Log it

Every write to `company/work-inventory.md`, and every connection performed,
gets one line in `records/worklog.md`:

```
- 2026-07-25 [sales] Connected HubSpot, read-only - receipt: read a HubSpot deal named "Acme - Q3 renewal", read access confirmed, company/work-inventory.md row flipped to connected
```

Then one line to the master audit log at `records/audit-log.md`, in the
shape `os/formats.md` pins - timestamped in your HQ.md timezone, never UTC:

```
- 2026-07-25 14:10 [install] [connect-a-tool] [sales] Connected HubSpot, read-only scope - live read confirmed, row flipped in company/work-inventory.md
```

An inventory edit that connects nothing yet (Movement 1 only) still gets its
own line, type `[note]` in place of `[install]`, narrated the same way.

## What this skill does not do

- It does not amend `references/connecting-tools.md` - that page states the
  standing connection posture (files-first, reads free, writes founder-gated,
  HQ record outranks the connector) and defers the process itself to this
  skill. When the two ever disagree, this skill is the current law.
- It does not bundle any vendor MCP server. I fetch and wire a server at
  connection time, on your yes - the plugin itself still ships none.
- It does not weaken the write/send gate. An installed write-capable
  connector still sends nothing without your separate approval on that send.
- It is not a general software installer - it connects the one source you
  named, for the one job you named, nothing wider.

## Do this now

- Say "map my tools" to start Movement 1, or "connect [tool]" if you already
  know exactly what you want wired and just need my yes-then-execute flow.
- If `company/work-inventory.md` already exists, nothing extra to say - I
  read it first and pick up where you left off.

Homework: none. Nothing here needs anything from you between visits - the
inventory file remembers so you don't have to.

Next: if you are still walking the numbered setup path, **onboarding** owns
`company/onboarding.md` and names your actual next step - this skill is not
one of its nine numbered rows and stands on its own. Once at least one
source reads "connected," the department it Serves can point its own skills
at real data instead of files alone.
