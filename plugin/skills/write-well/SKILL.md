---
name: write-well
description: The quality pass for anything your workforce writes - lead with the point, cut the filler, trade vague for concrete, write to one real reader, and pass the read-aloud test - plus the four message shapes (status, ask, handoff, decline) that respect the reader's time. Hand me any draft and get it back shorter, clearer, and honest to its evidence. Use when you say "tighten this", "make this clearer", "edit my draft", "is this any good", "rewrite this message", "this sounds off", "help me say no nicely". Other skills decide WHAT to write - run this one on the draft before it leaves the department.
---

# Write Well - every other skill decides what to say; this one makes it worth reading

Most business writing fails the same three ways: the point arrives in paragraph four, the sentences are stuffed with words that do no work, and the claims are vaguer than the evidence behind them. None of that is a talent problem. It is a checklist problem, and this skill is the checklist - a pass I run over any draft in your HQ, from a two-line status note to a full proposal, that leaves the meaning intact and the reading effort halved.

The boundary is clean: your craft skills and departments own what to write - **marketing-content** owns the content piece, **offers-and-proposals** owns the proposal, **report-craft** owns the report. This skill owns making whatever they produced good at the sentence level, which is why department playbooks cite it by name. And one law holds throughout: I edit words, never facts. A vague sentence gets sharpened with a real number you gave me or it stays honestly vague - polish never manufactures precision.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- Your draft back, edited in place where it lives (a file in `drafts/` stays in `drafts/`) - point first, filler gone, every vague gesture replaced with the specific you actually have
- The first sentence carrying the whole point, so a reader who stops there still knows the result
- Claim labels held honest: an edit never upgrades `[best guess]` into something that reads like `[checked]`
- When the text is a message, one of the four shapes - status, ask, handoff, or decline - fitted to it
- A read-aloud verdict: every place a reader would stumble, marked and fixed
- One dated memory line capturing the recurring fault, so the whole company stops making it

## What I need from you

1. The draft - paste it, or point me at the file (usually `departments/<slug>/drafts/` or `outbox/`).
2. The one reader: who is this for, and what should they do after reading it? Your client Dana, your Reviewer seat, a prospect - one real person, not everyone.
3. Any real specifics the draft gestures at - the number, the date, the name. If you do not have one, the sentence says so plainly instead of faking it.

## How it works

### Step 1 - Name the one reader

Writing for everyone is writing for no one, so the pass starts with the audience-of-one rule: we name one real person - your client Dana, your Reviewer seat, a prospect who has read nothing else you wrote - and every later cut answers to them. Two questions set the frame: what does this reader already know, and what should they do next? Anything the draft explains that they already know is a cut. Anything they need for the next action that is missing gets flagged. I read `company/profile.md` first so the edit lands in your voice, not a generic one - your words, tightened, still sounding like you.

### Step 2 - Lead with the point

The reader's first sentence answers the question they came with: what happened, what you found, what you want. Background follows; it never leads. Chronology is the great enemy here - drafts love to tell the story of the work in the order it happened and bury the result at the end.

```markdown
Weak:   "I wanted to give you a quick update on where things stand with the
        newsletter. I started by reviewing past issues, then drafted three
        options, and after some back and forth I think we have a winner."
Strong: "The newsletter is drafted and in the outbox - it needs your yes on
        the subject line by Friday. Three options were tried; the draft
        explains why this one won."
```

The test is brutal and simple: cover everything after the first sentence. If the reader still knows the result, the lead is right.

### Step 3 - Cut filler, keep meaning

Now the deletions - and the rule that keeps them safe: shorten by removing what does not change the reader's next action, never by degrading the sentences that remain. The filler families I hunt, in order:

- Throat-clearing openers: "I just wanted to reach out", "Hope this finds you well", "Quick update on my end" - the message starts where the point starts.
- Flattery padding: compliments and thanks that exist to soften what follows. Warmth is welcome; padding that delays the point is not.
- Hedges stacked on hedges: "I think we could maybe possibly consider" collapses to one honest hedge or none.
- Restating the question before answering it, and warnings a capable adult does not need.

What never gets cut: the caveat that changes the decision, the honest limit, the bad news. Those move up, not out.

### Step 4 - Concrete over abstract

Every vague quantifier gets challenged against what you actually know: "significant growth" becomes the number, "recently" becomes the date, "several customers" becomes the count or the names. Passives that hide the actor get rewritten - "the invoice was sent" tells the reader less than "Dana sent the invoice Tuesday". And every claim gets scoped to its exact evidence: "the page loads fast on my laptop" is a different sentence from "the page is fast", and the draft ships the one you can back.

This is where the claim labels earn their keep. Any statement about the state of your business keeps its label through the edit - `[checked]`, `[did it]`, `[best guess]`, `[from memory]` - and editing never launders a guess into a certainty; making `[best guess]` read like fact is a defect, not a polish. If a line claims something the record cannot back and the text is headed to a real person outside the company, I say so in one sentence, we soften or source the line, and one dated line goes to `records/warnings.md` as `- YYYY-MM-DD [write-well] finding - action taken`. A warning is a flag on the play, never a stopped game.

One more calibration: tone matches gravity. Playful phrasing is fine for a launch note; for anything touching money, a failure, or a person's job, the language goes deliberately plain - no drama vocabulary dressing up a serious sentence.

### Step 5 - Shape the message

When the draft is a message rather than a document, it is almost always one of four shapes, and fitting the right one does half the editing for you:

```markdown
Status - the reader asks "where are we?"
  Line 1: the state, plainly ("Two of five drafts done, on pace for Friday").
  Then: what happens next and by when. Blockers named, never hinted.

Ask - the reader asks "what do you want from me?"
  Line 1: the ask itself, with its deadline ("Can you approve the new price
  by Thursday?"). Then the minimum context to decide - two or three
  sentences, not the history of the project.

Handoff - the reader takes over the work.
  Line 1: what this is and where the file lives. Then: what is done, what is
  not, what to watch for. Nothing load-bearing stays in your head.

Decline - the reader hears no.
  Line 1: the no, plain and kind ("We are not taking this on"). Then one
  honest reason and, only if real, an alternative. A soft no that sounds
  like maybe costs both of you another round.
```

Every shape ends the same way: cleanly. No postamble recapping what the message already said, no closer angling for a reply the ask did not need. And for anything leaving the building, the standing law: I draft; you send - sending to a real person outside the company is a reserved decision, and **send-guard** gives outbound text its final check.

### Step 6 - The read-aloud test

The last pass is the oldest editing tool there is: the draft gets read as if aloud, at speaking pace, as the one reader from Step 1. Every stumble is data - a sentence you cannot say in one breath gets split, a phrase you would never say to this person's face gets rewritten into one you would, a word you trip over gets a plainer neighbor. Prose that reads smoothly out loud reads effortlessly on the page. When the draft passes clean, it is done, and it goes back where it lives - the file in `drafts/` updated in place, ready for its department's normal handoff and review.

### Step 7 - Log it

Good editing compounds only if the lesson outlives the draft. I name the one recurring fault this pass kept fixing - buried leads, stacked hedges, unlabeled guesses - and append one dated line to the owning department's `memory.md`:

```markdown
- YYYY-MM-DD Writing pass on {draft}: recurring fault was {fault} - watch for it in future drafts.
```

When the text belongs to no department, the line goes to `records/improvements.md` as a `lesson` entry instead. And one line goes to the master audit log, `records/audit-log.md`, with the time in your HQ timezone (never UTC):

```markdown
- YYYY-MM-DD HH:MM [note] [{founder}] [{department or company}] Writing pass on {draft} - recurring fault {fault}
```

All are ledgers - the line appends under its date and nothing above it gets touched - and the weekly review reads them, which is how one edited draft quietly improves every draft after it.

## Do this now

1. Pick the last thing your workforce wrote that a real person will read, and say "tighten this".
2. Name the one reader and what they should do next - then watch the first sentence change.
3. Read the before and after out loud, back to back. The difference is the skill.

Homework: take one message you personally sent this week and run Steps 2 and 3 on it by hand - move the point to sentence one, delete the throat-clearing. Count the words that fell away and notice that nothing was lost.

Next: install **send-guard** - this skill makes the words good; that one checks recipient, claims, and capability before anything leaves the building, and outbound text deserves both passes.
