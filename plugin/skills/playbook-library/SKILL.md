---
name: playbook-library
description: Your company's pattern memory - every play that actually worked, written down with the receipt that proves it, so the next decision starts from evidence instead of a blank page. Record a pattern with its evidence, its failure modes, and its limits; read the library back the moment a decision resembles one you have faced before. Use when you say "record a playbook", "log this win as a pattern", "what do our playbooks say", "does this fit a pattern we know", "add this to the playbook library", "seed my playbooks", "we learned something worth keeping". Run it after any real win, and read it before any real bet.
---

# Playbook Library - your company stops relearning what it already paid to learn

Most companies learn the same lesson twice, three times, five times - because the lesson lived in somebody's head and the head moved on. Your library fixes that with one file: `company/playbooks.md`, the ledger of patterns your business has actually proven. Not tips. Not things you read somewhere. Patterns with receipts.

The bar is simple and I hold it warmly but firmly: a pattern without evidence is an opinion, and opinions do not go in the library. The library holds what you can point at - a file, a receipt, a named source. And every pattern carries its own limits, because a pattern quoted outside its limits is how confident companies walk off cliffs.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- `company/playbooks.md` - a ledger of numbered patterns, each with situation, pattern, evidence, failure modes, and fit bounds
- A first seeding session that mines 3-5 real patterns out of wins you have already lived
- A read-back ritual: bring me a decision, I pull the patterns that match and quote their evidence
- Corrections and retirements on the record - a pattern that stopped working stays visible with a dated note saying so
- One worklog line every time the library grows

Two boundaries so nothing blurs. This library is knowledge - what the market taught you, consulted to reason. A department's `playbook.md` is procedure - the SOPs a department works by, followed to act. Different files, different jobs; neither absorbs the other. And the library informs decisions, it never makes them: **ceo-seat** cites your P-numbers in its recommendations, **strategy-department** feeds competitor teardowns in, and strategy verdicts stay where they belong - with you, in `company/strategy.md`.

## What I need from you

1. An installed HQ - **install-your-werkforce** builds it if it is missing.
2. One real win, loss, or observation from your actual business - something you lived, not something you read.
3. Honesty about evidence. "I remember it worked" and "here is the receipt" are different entries, and I label them differently.

## How it works

### Step 1 - Open the library

I look for `company/playbooks.md`. If it does not exist yet, I seed it exactly as the format law shapes it:

```markdown
# Playbooks - patterns with receipts
<!-- LEDGER. One H2 per playbook: "## P{n} - {situation}", then "Pattern:", "Evidence:" (a file, receipt, or source), "Fails when:", "Fits when:". Corrections append. A pattern without evidence is an opinion, not a playbook. -->
```

If the file exists but has drifted from this shape, I append one line to `records/warnings.md` as `- {{DATE}} [playbook-library] finding - action taken`, tell you in one sentence, and keep working with what is there. A warning is a flag on the play, never a stopped game.

### Step 2 - Seed from your lived wins (first session only)

An empty library helps nobody, so the first session is a mining expedition. I ask you three questions and dig through your own record for receipts:

- What is the best thing that happened in this business, and what did you do right before it?
- What have you tried twice because it worked the first time?
- What did you stop doing, and what made you stop?

For each answer I hunt the evidence in your HQ - `records/worklog.md`, `company/customers/`, department outboxes, `company/metrics.md` - and where a real receipt exists, a pattern gets written. Three to five entries is a strong day one. A win you remember but cannot evidence yet goes to `inbox.md` as a note, not into the library - it graduates the day its receipt shows up.

### Step 3 - Record a pattern

Every entry answers five questions, and I interview you until all five are honest:

```markdown
## P{{N}} - {{THE_SITUATION_IN_ONE_LINE}}
Pattern: {{WHAT_TENDS_TO_HOLD_AND_IN_WHICH_DIRECTION}}
Evidence: {{A_FILE_A_RECEIPT_OR_A_NAMED_SOURCE}}
Fails when: {{THE_KNOWN_WAY_THIS_PATTERN_BREAKS_OR_MISLEADS}}
Fits when: {{WHERE_IT_HOLDS - CUSTOMER_TYPE_CHANNEL_STAGE_OR_SCALE}}
```

A worked example, so you can feel the shape:

```markdown
## P3 - a happy client offers to introduce us to someone
Pattern: asking them to forward one short note we draft converts far better
than asking for a name we then contact cold.
Evidence: records/worklog.md 2026-07-02 and 2026-07-14 - both July clients
arrived through forwarded notes; history in company/customers/.
Fails when: the intro-maker barely knows the prospect - the forward reads as
a favor extracted, not a recommendation given.
Fits when: the intro-maker has worked with both sides and the note stays
under 100 words.
```

The Evidence line is where I earn my keep. I check that it points at something real - a file in your HQ, a board receipt, a source you can name out loud. If the evidence is thin, I say so and we either find the receipt or park the pattern in the inbox. If you direct me to record it anyway, it records - your library, your call - with the Evidence line reading honestly (for example `founder's recollection, no receipt yet - [from memory]`), one warning line in `records/warnings.md`, and one lesson line in `records/improvements.md`. Nothing blocks; everything stays honest.

The ledger law holds throughout: entries append at the end with the next P-number, and no existing line is ever edited or deleted.

### Step 4 - Read the library at decision time

This is the payoff step, and the one most founders skip. Before a real bet - a price, a channel, an offer, a hire - bring me the situation. I read the whole library and answer three things:

- **Which patterns match** - quoted by P-number with their Pattern line, labeled `[from memory]` because the library is curated knowledge, not current truth.
- **Whether you are inside the bounds** - I check your situation against each match's Fits when and Fails when lines and say plainly if you are quoting a pattern outside its limits.
- **What the library does not know** - if nothing matches, I say "no pattern on record for this" instead of dressing a guess up as knowledge. A true zero beats a flattering guess.

A pattern read is input, never a verdict. If the decision at hand is one of your seven reserved decisions, it queues in `company/decision-log.md` with the matching P-numbers cited in the recommendation - and waits for you.

### Step 5 - Correct and retire

Markets move, and a library that cannot say "we were wrong" becomes a liability. When a pattern breaks, we do not rewrite history - corrections append, dated, under the entry they amend:

```markdown
Correction ({{DATE}}): {{WHAT_CHANGED_AND_THE_EVIDENCE_FOR_THE_CHANGE}}
```

A pattern that no longer holds at all gets `Correction ({{DATE}}): retired - {{WHY}}` appended the same way and stays fully visible. On any read-back, a retired entry is quoted only as history, never as guidance.

### Step 6 - Log it

I close by putting the change on the record. Every session that grows or amends the library ends with one line in `records/worklog.md`:

```markdown
- {{DATE}} [company] Playbook library updated - receipt: P{{N}} recorded in company/playbooks.md, evidence cited, reviewed by {{FOUNDER}}
```

And one line to `records/audit-log.md`, timestamped in the HQ timezone from `HQ.md` (never UTC):

```markdown
- YYYY-MM-DD HH:MM [note] [playbook-library] [company] recorded playbook P{{N}} "{situation}" - company/playbooks.md
```

You are the reviewer of record on your own patterns - it is your lived experience the library holds, and nobody else can vouch for it.

## Do this now

1. Say "seed my playbooks" and give me your best win from the last three months.
2. Watch me hunt your HQ for its receipt, then read the finished P1 back to you.
3. Add one more - a loss counts double, because its Fails when line protects every future decision.
4. Name the next real decision on your plate and ask "what do our playbooks say" - feel what it is like to decide from evidence.

Homework: open `company/playbooks.md` tonight and read every Fits when line in a row. That column is your company's honest edge - the places you know something the market has not told everyone yet.

Next: install **ceo-seat** - it reads this library every time it drafts a recommendation, and a recommendation that cites P-numbers with receipts is worth ten that cite confidence.
