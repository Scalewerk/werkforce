---
name: backlog
description: Park early ideas until you are ready to pursue them fully. Use when the founder says "/backlog", "backlog this", "park this idea", "add to the backlog", "show my backlog", "what's parked", or drops a thought that is explicitly not ready to become work yet. Distinct from the inbox - inbox lines get converted into work at the next intake; backlog entries wait untouched until deliberately promoted.
---

# Backlog - where early ideas wait without dying

The inbox is a fast door: everything dropped there becomes work, an outcome, or a queued decision at the very next intake. But some thoughts are not ready for any of those doors - they are sparks you want kept, not sorted. Forcing them onto a board too early creates rows nobody can defend; losing them wastes the only free asset a founder has. The backlog is the third place: a parking ledger where an idea waits, dated and in your own words, until you deliberately promote it.

## Personalization

This skill works in YOUR company's voice. I find your HQ - the `werkforce/`
folder in the current folder if one exists, otherwise `~/werkforce/` - and read
`HQ.md` plus `company/profile.md` before writing a word. If there is no HQ yet,
run **install-your-werkforce** first. I never invent facts about your ideas -
your words go on the ledger as you said them.

## What you get

- `company/backlog.md` - the parking ledger, one dated line per idea, appends only
- "/backlog {idea}" parks a thought in five seconds, no questions asked
- "/backlog" alone (or "show my backlog") reads the ledger back, oldest first, with ages
- Promotion on your word only: "pursue #N" moves an idea through the inbox door - it becomes a board row, an outcome, or a queued decision, and the backlog line gets its dated promoted marker
- Ideas that never rot silently: the weekly review counts the backlog, and any entry you kill gets a dated "dropped" marker with your reason - visible history, never a deletion

## What I need from you

1. An HQ. Nothing else - the ledger self-seeds on first use.
2. Your words. A half-sentence is a legal entry.

## How it works

### Step 1 - Park

Say "/backlog {your idea}" any time, in any session. I append one line to
`company/backlog.md`, creating the file with its header if this is the first
entry:

```markdown
# Backlog - parked ideas, not yet work
<!-- LEDGER. One line per idea: "- B{n} YYYY-MM-DD {the idea, founder's words}".
     Promotion appends " -> promoted YYYY-MM-DD: what it became"; dropping appends
     " -> dropped YYYY-MM-DD: reason". Lines are never edited or deleted. -->
- B1 2026-07-21 Werkforce Starter as a gift card SKU for agencies to hand clients
```

No seat, no due date, no department - that is the point. Parking commits you to
nothing. If the line is really work you want moving now, I say so in one
sentence and offer the inbox instead; you choose.

### Step 2 - Read

"/backlog" alone reads the ledger back: every open entry, oldest first, each
with its number and age in days. Promoted and dropped entries show under a
one-line tail count, not in the main list. An empty backlog says "empty" -
a true zero beats a flattering guess.

### Step 3 - Promote

When an idea's time comes, say "pursue B3" (or "promote the gift card idea").
I read the entry back, ask nothing if it is unambiguous, and walk it through
the standard intake doors: work becomes a Filed board row with a seat and due
date, a measurable target becomes an outcome, anything reserved becomes a
QUEUED decision. The backlog line gets ` -> promoted YYYY-MM-DD: what it became`
appended, and the new home is named to you exactly.

### Step 4 - Drop

Ideas are allowed to die - on the record. "drop B2" appends
` -> dropped YYYY-MM-DD: {your reason}` and the line stays visible forever.
Dropping is erasing intent, not memory; deleting the ledger itself is deleting
work, which is reserved and never done by this skill.

### Step 5 - Log it

Each parking session that changed the ledger appends one `[note]` line to
`records/audit-log.md`, timestamped in the HQ timezone from `HQ.md` - never
UTC. Promotions additionally log wherever the promoted item's new home logs.
The backlog itself is the receipt: if a line is not on it, the idea was never
parked.

## Do this now

1. Say "/backlog" and see what is parked - empty is a fine first answer.
2. Park the idea you have been carrying in your head this week.
3. At your next weekly review, promote one entry or drop one - a backlog that
   only grows is a diary, not a tool.

Next: **run-the-day** sweeps the inbox every morning but never touches this
ledger - that separation is the feature. When an idea graduates, **brief-writer**
turns it into an executable brief with acceptance checks.
