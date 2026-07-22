---
name: quarterly-strategy
description: The quarterly sit-down where your company checks its direction, not its to-do list - every vision re-read and either held or honestly retired, every outcome called reached, stuck, or dropped from the record, the next department to open queued to you as a real hiring decision, and graduations due surfaced by name. Measurement comes before planning - I read what actually happened before anyone proposes what is next. Use when you say "werkforce, quarter", "quarterly review", "are my visions still true", "quarterly strategy", "which department opens next", "review the quarter", "plan next quarter". Run it once a quarter, after the monthly close lands.
---

# Quarterly Strategy - the day you ask whether the direction is still true

The daily run works the boards. The weekly review counts the work. The monthly close counts the money. None of them ever asks the question this skill exists for: is the company still pointed somewhere worth going? Once a quarter you sit down with your visions - the standing directions you ratified - and read each one out loud against a quarter of real record. Some will still ring true. Some will sound like a person you used to be. Both answers are useful; only one of them is comfortable.

One rule governs the whole session: re-measure before re-planning. No new direction gets proposed until the old quarter has been read honestly - reached, stuck, dropped, in those words, from the files. A strategy change that cannot point at a before is not strategy, it is mood. And through the whole sit-down I keep my seat: I read, I surface, I draft - ratifying a vision, retiring one, and opening a department are yours alone.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- Every vision in `company/visions.md` re-read against the quarter's record - held, or flagged stale for a founder conversation; retirement lines are yours to speak, never mine to decide
- Every outcome in `company/outcomes.md` called honestly: Reached only when its named verification says so, Stuck with a reason, Dropped in plain words - with a dated `Status:` line appended for each change
- Orphan work surfaced, never buried - outcomes serving no live vision become a deliberation, not a forced filing under the nearest heading
- The org review: which Planned department earned opening next, QUEUED to you in `company/decision-log.md` with evidence and a recommendation - never self-decided
- Autonomy graduations due, by department and by name, handed to **autonomy-ladder**
- One page appended to `records/reviews.md` under today's date - next quarter's baseline

## What I need from you

1. Forty-five minutes, once a quarter - ideally right after "werkforce, month" has landed the numbers.
2. Your honest read on each vision as I read it back. Only you can hold one, and only you can retire one.
3. A verdict on the department call if you are ready - or leave it queued and take it at **founders-desk** later. Nothing waits on you silently.

## How it works

### Step 1 - Re-measure before re-planning

"werkforce, quarter" wakes this skill. Before a single forward-looking word, I read the quarter as the record shows it: `company/metrics.md` (the monthly close's numbers - I read them, I never rewrite them), `company/visions.md`, `company/outcomes.md`, `records/worklog.md`, `records/warnings.md`, `records/improvements.md`, `company/org-chart.md`, every Active department's `charter.md`, `company/decision-log.md`, and the last quarterly entry in `records/reviews.md`. Everything dated after that entry is this quarter. First quarterly ever? The quarter starts at your oldest dated line, and I say so.

Every number I state is `[checked]` - counted this session, never recalled. If a file is missing or malformed, I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [quarterly-strategy] finding - action taken`, tell you in one sentence, and keep reading what I can. A warning is a flag on the play, never a stopped game.

Then I open with the quarter in one honest line. If the quarter was thin, that line says thin. A true zero beats a flattering guess.

### Step 2 - Visions: still true?

I read each vision back to you, one at a time, full text, and put two questions next to it:

- **Did the quarter serve it?** I name the outcomes and finished work that traced to this vision - or say plainly that nothing did.
- **Would you write it today?** Not "is it nice" - would you, knowing what this quarter taught you, ratify this exact direction again?

A vision that passes both is **held**, and I say so in one line. A vision that fails either is **stale**, and stale starts a conversation, not an edit: I lay out what the record shows, you decide. Retiring a vision is a reserved decision - a change of direction belongs to the founder and no one else. If you retire one, I append the dated line to `company/visions.md` - `Retired: YYYY-MM-DD by {{FOUNDER}}.` - and the vision stays visible forever; ledgers never forget, they only add. If you want a replacement direction drafted, that is **ceo-seat**'s craft: the CEO drafts visions, you ratify them, and the ratified text lands in `company/visions.md` with its own dated line.

Two health checks ride along. Visions stay few - three to five live at once is the healthy bound, because a company with eleven directions has none; more than five gets one warning line and a suggestion for which two might be one. And a quarter where no work served any vision is not a work problem, it is a direction problem - the review says that out loud instead of proposing more tasks.

### Step 3 - Outcomes: reached, stuck, dropped

Every outcome in `company/outcomes.md` gets a verdict in one of three words, each earned from the record:

- **Reached** - only when the outcome's own `Verified by:` line has been satisfied and I can point at where. If the named verifier is you and you have not looked, it is not Reached yet, and I queue the look instead of assuming it. If you direct the flip anyway, it proceeds immediately - your call always does - with one honest warning line on the record.
- **Stuck** - open all quarter with no movement. Stuck gets a named reason from the record (blocked task, missing capability, no department owns it), not a shrug.
- **Dropped** - you decide it no longer earns effort. Dropped is an honest word, never a failure word, and never quietly relabeled Reached.

One shape note, because the outcomes file has a law of its own: its status words are exactly Open, Reached, and Dropped - Stuck is a review verdict, not a status word. A stuck outcome keeps `Status: Open` in the file and its reason lands on the review page. For a Reached or Dropped call I append one new line under the outcome - `Status: {word} (YYYY-MM-DD) - {one-line reason}` - and the old line stays, because the history is the point. Day to day that file is **outcome-desk**'s pen - the quarterly verdict is the one flip this review writes itself, in outcome-desk's exact line shape. Outcomes simply mid-flight carry forward untouched.

Then the orphan check, and this is the part most companies skip: any outcome serving no live vision - `(none yet)`, or a vision you just retired - surfaces for a deliberation. It never gets shoved under the nearest vision to tidy the page, and there is no miscellaneous bucket to hide it in, because a forced mapping destroys the signal. The deliberation has exactly two honest exits: it is **drift**, and gets Dropped with its reason on the record - or it is a **genuinely new direction**, and the CEO drafts a candidate vision for you to ratify, after which the outcome files under it. If the call deserves a full boardroom pass, we run it with **ceo-seat** and the seat-prefixed transcript lands in `company/strategy.md`, where deliberations live and nowhere else. Work your company cannot map to a named direction is the most valuable finding a quarter can produce - it means the direction is incoherent, and now you know.

### Step 4 - Org review: which department earns opening next

I read `company/org-chart.md` and look at the Planned rows through the quarter's evidence: which department's work kept arriving anyway - inbox entries with no home, briefs a wrong-shaped seat absorbed, warnings that repeat because nobody owns the fix, outcomes stuck for want of a capability. Demand on the record, not appetite.

If one Planned department clearly earned it, I queue the call - opening a department is hiring, and hiring is a reserved decision, so this is never self-decided:

```markdown
- YYYY-MM-DD [company] QUEUED: open the {{department}} department this quarter? - context: {{the quarter's evidence, cited}} - options: open now / revisit next quarter / fold the work into {{active department}} - recommendation: {{one sentence, with the reason}}
```

If no department earned it, the review says exactly that - "no opening earned this quarter" is a complete and respectable answer, and cheaper than a hire made from restlessness. You can decide on the spot or take it later at **founders-desk**; when you say open, **open-a-department** runs the hiring day itself.

### Step 5 - Autonomy graduations due

For each Active department I read the graduation record in its `charter.md` - current level, days at it, what the record shows since. A department sitting at Level 1 - Supervised with a quarter of clean receipts is overdue for the Level 2 - Trusted conversation; a department at Level 2 with a spotless review record may be ready for Level 3 - Autonomous. I surface each due graduation by department and by name, with the one thing its record still needs if it is short.

Surfacing is where my job ends: **autonomy-ladder** owns the checklists and the climb itself, and a graduation is a founder's call because more rope is a hiring-shaped decision. Nothing graduates inside this review.

### Step 6 - Log it

One page, appended to `records/reviews.md` under a dated heading - append only, nothing overwritten:

```markdown
## YYYY-MM-DD - quarterly review

Verdict: {{the quarter in one honest line}}

### Visions
- V{{n}} {{short name}}: {{held | stale - founder conversation held | retired by {{FOUNDER}}}}

### Outcomes
- O{{n}}: {{Reached - verified by {{who}} | Stuck - {{reason}} | Dropped - {{reason}} | Open, carried forward}}
- Orphans: {{deliberated - drift, dropped | deliberated - new vision drafted for ratification | none}}

### Org
- Next department: {{name}} - QUEUED to {{FOUNDER}} in company/decision-log.md {{| no opening earned this quarter}}

### Autonomy
- {{department}}: Level {{n}} - {{level name}}, day {{n}} - {{graduation due | not yet - {{what the record still needs}}}}

### Carried into next quarter
{{the one strategic change, and the number or record next quarter's review will check it against}}
```

Then one line to `records/worklog.md`, so the quarter's close is itself on the record:

```markdown
- YYYY-MM-DD [company] Quarterly review - receipt: one page in records/reviews.md, reviewed by {{FOUNDER}}
```

And one dated entry appended to `company/strategy.md`, in that ledger's own recommendation shape - this is the entry the morning run and the weekly review look for to know the quarter is closed, so it lands on every quarterly, not just the ones with a boardroom pass:

```markdown
## YYYY-MM-DD - Quarterly review
Recommendation: {{the one strategic change carried into next quarter, with its reason from the record}}
Founder's verdict: {{Ratified | Declined | Pending}} - {{reason}}
```

And one line to `records/audit-log.md`, timestamped in the HQ timezone from `HQ.md` (never UTC), so the quarter's close sits in the master log:

```markdown
- YYYY-MM-DD HH:MM [session] [quarterly-strategy] [company] quarterly review closed - records/reviews.md
```

You are the reviewer of record - every verdict on that page came out of your mouth before it went into the file. The last section is deliberately singular: one strategic change, stated so that the next quarterly can check whether it happened and whether it helped. If next quarter's re-measure shows it moved nothing, it comes back here as a rollback conversation - proposed to you, never decided for you. That loop, measure then change then re-measure, is how a company actually gets better instead of just busier. I read the page back to you in one screen, and the quarter is closed.

## Do this now

1. Say "werkforce, quarter" and let me read the whole record first - no planning until the measuring is done.
2. Hear each vision read back and give your verdict: held, or stale.
3. Call your outcomes honestly - Reached, Stuck, or Dropped - then take or queue the department decision.
4. Read the one page in `records/reviews.md`. That page is what next quarter argues with.

Homework: put four recurring slots on your real calendar for the year, named "werkforce, quarter" - the sit-down that never gets scheduled is the one that never happens.

Next: run **autonomy-ladder** for any graduation this review surfaced as due - a quarter's clean record deserves its rope.
