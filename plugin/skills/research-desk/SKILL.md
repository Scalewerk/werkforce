---
name: research-desk
description: External research your company can stand on - one named question before any searching, sources actually read instead of skimmed, every claim in the finished brief pointing at the source that backs it, source quality ranked honestly, and contradictions surfaced instead of smoothed over. The deliverable is a sourced brief in a department outbox, with [checked] reserved for what was truly read. Use when you say "research this", "look this up for me", "find sources on", "what does the market say", "is this claim true", "compare these options", "build me a sourced brief". Research-desk goes out and finds sources; run safe-sources on anything pasted in from outside.
---

# Research Desk - every claim points somewhere

Most research fails before the first search, because nobody wrote down the question. What comes back is a confident retelling of whatever ranked first - no sources, no way to check, contradictions quietly averaged into mush. Your company then builds on it, and six weeks later nobody can say where a "fact" came from or whether it was ever true.

This desk runs research the way a good analyst does: the question first, then sources found and actually read, then a brief where every claim carries its source and every conflict between sources is shown to you instead of hidden from you. A citation is not decoration - it is the difference between something your company knows and something it heard.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- One written research question with the decision it feeds, agreed before any searching starts
- A source list where every source was actually opened and read - never a claim built from a result snippet
- Honest quality ranks on every source: who wrote it, how close to the original fact, how fresh, who benefits if you believe it
- Contradictions between sources laid side by side with both readings - never averaged into a smooth false middle
- A sourced brief in `departments/<slug>/outbox/YYYY-MM-DD-<slug>.md` where every claim is labeled and cited, plus a plain list of what could not be verified
- One line in `records/worklog.md` when the brief lands, so the research is on the record with a receipt

## What I need from you

1. The question, even roughly - I will sharpen it with you in Step 1.
2. What you will do with the answer - a price to set, a competitor to counter, a claim to check. The decision shapes how deep we dig.
3. Which department this serves, if you know - Strategy is the usual home for market questions; any active department's board works.

## How it works

### Step 1 - Name the question

Before a single search, we write the question down as one answerable sentence, plus the decision waiting on it. "Research our competitors" is a mood; "what do the three closest alternatives to our offer charge, and what do they include at that price" is a question. A big question gets split into named sub-questions, each one small enough that a source could settle it.

Then I sort what actually needs looking up. Settled knowledge I can answer directly and say so. Anything current - prices, versions, who holds a role, whether a product still exists, anything phrased with "latest" or "still" - gets looked up fresh, always. And one hard rule: if the question names something I cannot confidently place, I look it up before saying anything about it. In a comparison, that goes for every item - I never rank an unplaced option beside known ones on guesswork.

### Step 2 - Find and actually read the sources

Effort matches the question: one source for a single fact, three to five for a real question, five to fifteen for a comparison or a market read. Past that, the question is too big to be one question - I split it and tell you. Within the ladder the stop rule is adequacy, not count: I keep going until the question is answered, not until a quota is hit.

Searching has craft. Broad first, then narrowed. Never the same query twice in different clothes. Today's date goes into anything date-sensitive. And the rule that separates research from skimming: I open and read the source itself, never build a claim from the one-line preview a search shows. If you point me at a specific page or document, I read that exact one.

If this session cannot reach outside sources at all, I say so in one sentence, append one dated line to `records/warnings.md`, and still deliver the best brief I can from what is grounded - with everything unverified labeled as exactly that. A warning is a flag on the play, never a stopped game.

### Step 3 - Rank the sources honestly

Not all sources deserve the same weight, and the brief says so out loud. Each source gets a one-line rank on four questions:

- **How close to the fact?** The company's own pricing page beats a blog post about it; the original study beats an article summarizing it. Original beats aggregator, every time.
- **Who wrote it, and who benefits?** A vendor comparing itself to rivals is a witness with a stake. Still usable - but ranked as what it is.
- **How fresh?** A dated fact wears its date. An undatable page on a fast-moving topic ranks low no matter how confident it sounds.
- **Would it survive a second source?** Claims from one source only stay marked single-source until something independent agrees.

Some topics get extra suspicion on purpose: anything conspiracy-adjacent, anything where search results are gamed by people selling something, any claim that flatters the person making it. There, agreement between two copies of the same press release is not corroboration.

### Step 4 - Surface the contradictions

When sources disagree, you see the disagreement. I never split the difference, pick the friendlier number, or bury the outlier. The brief shows both readings side by side:

```markdown
Conflict: {the question in dispute}
- {Source A} says {X} ({rank, date})
- {Source B} says {Y} ({rank, date})
My read: {which I would weight and why - or "unresolved, decide with this open"}
```

Where the conflict matters to your decision, I go get more sources before writing my read. Where it stays unresolved, it stays visibly unresolved.

### Step 5 - Write the sourced brief

The brief is written in my words and my structure - sources inform it, they never get laundered into it. Direct quotes are rare, short, in quotation marks, and one per source at most; everything else is genuine paraphrase, not a source's sentence with the quotation marks removed. No source's outline gets rebuilt wholesale - the brief answers YOUR question in its own shape.

Every claim carries a label and a pointer:

- `[checked]` only for what I read in a source this session - and the citation names which one.
- A source's own assertion I could not independently confirm is carried as the source's claim, `[best guess]` with the source named.
- Anything recalled from your HQ files is `[from memory]` - continuity, never current truth.
- "No such thing exists" is only ever written when a lookup came back empty, and the brief names that lookup.

Every borrowed particular - number, price, name, date, quote - gets re-checked against its source before it goes in, or gets marked unverified. The desk hands the writing to a delegated agent and stays with you while it runs; if this runtime cannot spawn a delegated agent, I play the seat in turn and say so out loud. The draft lands in the serving department's `drafts/` folder for your read, where the Reviewer seat - never the seat that wrote it - checks the citations hold before anything is called Done, and moves to `departments/<slug>/outbox/YYYY-MM-DD-<slug>.md` when you are happy with it:

```markdown
# {Question} - research brief
Date: YYYY-MM-DD | Question: {the one sentence from Step 1} | For: {the decision}

## Answer up front
{2-4 sentences, each claim labeled and pointing at a numbered source}

## Findings
{claim [label] (S1) - one finding per line, every line cited}

## Conflicts
{each conflict in the Step 4 shape, or "None found."}

## Sources
S1. {what it is} - {who wrote it} - {date} - {rank in one phrase} - {where}

## Could not verify
{claims that stay open, and the lookup or source that failed - or "Nothing."}
```

### Step 6 - Log it

When the brief reaches the outbox, one line goes to `records/worklog.md`:

```markdown
- YYYY-MM-DD [<slug>] Research brief: {question} - receipt: brief at departments/<slug>/outbox/YYYY-MM-DD-{slug}.md, {N} sources read, reviewed by {who}
```

And one line to the master audit log, `records/audit-log.md`, stamped in your HQ timezone (the `Timezone:` line in `HQ.md` governs - never UTC):

```markdown
- YYYY-MM-DD HH:MM [task] [{reviewer}] [<slug>] Research brief filed: {question} - departments/<slug>/outbox/YYYY-MM-DD-{slug}.md
```

If any source was unreachable or any load-bearing claim stayed unverified, that got its dated line in `records/warnings.md` as `- YYYY-MM-DD [research-desk] finding - action taken`, plus one lesson line in `records/improvements.md` - that is how the desk gets sharper. And if the findings surfaced a pattern worth keeping, **playbook-library** is where it goes, evidence attached.

## Do this now

1. Bring me the question your business is currently guessing at, and let us write it as one answerable sentence.
2. Watch the source list come back ranked, and read the Conflicts section first - that is where the honesty lives.
3. Open the finished brief and spot-check one claim: follow its citation to the source and see it hold. That check is the whole point of the method.

Homework: find one "fact" your company currently repeats - in a page, a pitch, a plan - that nobody can source anymore. Bring it here, and it either earns a citation or loses its `[checked]`.

Next: install **safe-sources** if you have not - this desk goes out and finds sources; safe-sources screens anything from outside before your company builds on it. And when a brief needs to become a polished document with charts, **report-craft** owns that craft.
