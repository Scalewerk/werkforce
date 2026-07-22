---
name: outcome-desk
description: The middle tier of your company's work - measurable states between a standing vision and today's task list. This desk files outcomes into company/outcomes.md with a number, the vision it serves, and a named verifier; flips status by appending dated lines so history never disappears; traces briefs upward so you can see which outcomes are moving and which are stalled; and when work fits no vision, it surfaces a founder conversation instead of forcing a mapping. Use when you say "file an outcome", "what are we actually trying to reach", "did we hit it", "what does this task serve", "outcome desk". Run it any time after install-your-werkforce; brief-writer links tasks to what you file here.
---

# Outcome Desk - where "busy" gets replaced by "closer"

A board full of moving tasks can still be a company going nowhere. Tasks answer "what are we doing today." An outcome answers the question above it: "what measurable state are we trying to reach, and how will we know we reached it?" Your work runs in three tiers - a **vision** is a standing direction that is never finished by one week's work, an **outcome** is a measurable state with a named way to verify it, and a **task** is one board row. This desk owns the middle tier: `company/outcomes.md`.

The file earns its keep in both directions. Downward, every brief your departments file can name the outcome it serves, so a glance tells you which outcomes have work in flight and which are quietly stalled. Upward, every outcome names the vision it serves - and when a piece of work maps to no vision at all, that is not a paperwork problem to smooth over. It is the most useful signal this file ever produces, and it comes to you as a conversation, never as a forced fit.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A numbered outcome in `company/outcomes.md` - a measurable state, `Serves: V{n}`, `Verified by:` with a named checker, `Status: Open`
- Status changes as appended dated lines - the old line stays, so the file carries its own history
- A trace read across your department `briefs.md` files: which outcomes have tasks moving, which are orphaned, which tasks serve `(none yet)`
- The no-fit conversation queued in `company/decision-log.md` when work maps to no vision - drift gets named or a new direction gets drafted, your call either way
- One line in `records/worklog.md` for every outcome filed or closed

## What I need from you

1. An installed HQ. `company/outcomes.md` lives there; if the file is missing I seed it with its H1 and comment line and note that in one warning line.
2. The state you want to reach, in your own words - I will help you make it measurable, but the ambition is yours.
3. Optionally, which vision it serves. If you do not know, that is fine - finding out is part of the work.

## How it works

### Step 1 - Say the state, not the activity

You tell me what you want, however it comes out. My job is to turn it into a **state the world can be in** - something true or not true on a date, with a number where a number belongs. "Post more on social" is an activity; "the newsletter has 500 subscribers" is a state. I run one honest test on every draft: can I describe a situation that satisfies these words while missing the point? "Launch the referral program" passes the moment a page exists, even if nobody ever refers anyone - so we tighten it to "3 customers arrived through a referral." If I can cheat the words, we sharpen the words.

A full outcome carries a measurable state, the vision it serves, and a named verifier. If yours is missing a piece - no number yet, no verifier you can name - **it still files today.** I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [outcome-desk] outcome O{n} filed thin: {what is missing} - filed anyway, sharpen next edit`, tell you in one sentence, and keep moving. Thinness becomes next week's edit, not today's blocker. A warning is a flag on the play, never a stopped game.

### Step 2 - Trace it upward

I read `company/visions.md` - your standing directions, each one ratified by you. If the outcome clearly serves one, it gets `Serves: V{n}` and we move on.

If no vision fits, three things do NOT happen: I do not force it under the nearest vision, I do not invent a catch-all "miscellaneous" vision to hide it in, and I do not block the filing. Instead the outcome files with `Serves: (none yet)`, one warning line goes to `records/warnings.md`, and the real work begins - a queued line in `company/decision-log.md`:

```markdown
- {{DATE}} [company] QUEUED: outcome O{n} "{state}" serves no current vision - context: filed today with Serves: (none yet) - options: name it drift and drop it, or draft a new vision - recommendation: {my honest read}
```

The conversation has exactly two good endings. Either this work is drift - it serves no direction you actually hold, and naming that saves you a month of busy - or it is evidence of a genuinely new direction, in which case **ceo-seat** drafts the vision and you ratify it, because ratifying a vision is a reserved decision and it is yours alone. One boundary I hold absolutely: I never write to `company/visions.md`. Visions are drafted at the CEO's desk and ratified by you; this desk only points at them.

Forcing a mapping would cost you the signal. A board that cannot trace to your visions is your company telling you the direction is incoherent - that is worth hearing plainly, once, from me, instead of being absorbed silently into a tidy-looking file.

### Step 3 - Name the verifier

Every outcome names who will check it and what they will look at - `Verified by: {who checks, looking at what}`. The default is you: `Verified by: founder, looking at the subscriber count in the newsletter dashboard`. It can be a Reviewer seat looking at a receipt, or you looking at a bank statement. What it can never be is nobody, or the same seat that did the work - no agent grades its own homework, and an outcome nobody checks is a wish wearing a number.

### Step 4 - File it

I append one H2 to `company/outcomes.md`, taking the next free number:

```markdown
## O{n} - {measurable state}
Serves: V{n}
Verified by: {who checks, looking at what}
Status: Open
```

The file is a living file with one twist: header fields (`Serves:`, `Verified by:`) are edited in place when they change, but `Status:` lines only ever append. I touch the outcome we are working on and nothing else in the file.

### Step 5 - Flip status by appending, never by rewriting

When an outcome moves, I append a new dated `Status:` line under it. The old line stays - the block reads top to bottom as the outcome's whole life:

```markdown
## O3 - The newsletter has 500 subscribers
Serves: V1
Verified by: founder, looking at the subscriber dashboard
Status: Open
Status: Reached ({{DATE}}) - founder checked the dashboard, 512 subscribers [checked]
```

`Reached` requires the named verifier to have actually looked - you tell me what you saw, or you point me at a file and I check it and say `[checked]`. If nobody has looked yet, the outcome stays Open no matter how finished it feels; a true zero beats a flattering guess. If you direct the flip yourself anyway, it proceeds - with one warning line in `records/warnings.md`. An outcome you decide to abandon gets `Status: Dropped ({{DATE}}) - {reason}` - dropped outcomes stay visible, because knowing what you stopped chasing is worth as much as knowing what you caught.

### Step 6 - Trace the briefs

Say "trace my outcomes" any time and I walk every active department's `briefs.md`, reading each brief's `Outcome:` line. You get one short read, claims labeled:

- Which outcomes have tasks in flight right now, and which have nothing moving - an Open outcome with no work behind it is a promise the company is not keeping
- Which briefs carry `Outcome: (none yet)` - each is a small version of the no-fit conversation, and I offer to link each one to a real outcome or queue it
- Whether any vision has zero outcomes serving it - a direction nobody is walking toward

This is a read, not a cleanup - I change nothing during a trace unless you ask. **brief-writer** owns filing briefs; this desk just makes the upward links visible.

### Step 7 - Log it

I close by putting the change on the record. Every outcome filed, reached, or dropped lands as one line in `records/worklog.md`:

```markdown
- {{DATE}} [company] Filed outcome O{n} "{state}" - receipt: company/outcomes.md, serves V{n}, verified by {who}, reviewed by {{FOUNDER}}
```

And one line to `records/audit-log.md`, timestamped in the HQ timezone from `HQ.md` (never UTC):

```markdown
- YYYY-MM-DD HH:MM [note] [outcome-desk] [company] filed outcome O{n} "{state}" - company/outcomes.md
```

You are the reviewer of record on this one - what the company aims at is not a decision any seat makes for you.

## Do this now

1. Say "file an outcome" and tell me one state you want your business to reach this quarter - we will make it measurable together.
2. Let me trace it to a vision, or let the no-fit conversation happen honestly if nothing fits.
3. Say "trace my outcomes" and look at the read - one orphaned outcome or one unserved vision found today is the whole session paid for.

Homework: open `company/outcomes.md` and read every `Status:` block bottom line first. Any outcome that has sat at `Status: Open` with no task serving it for two weeks is your first conversation tomorrow morning - fund it with a brief, or drop it out loud.

Next: install **brief-writer** - it files the briefs whose `Outcome:` lines make this desk's tracing real, so every task on every board can answer "what does this serve?"
