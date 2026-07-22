---
name: discovery-calls
description: Walk into every discovery call knowing exactly who they are, what you need to learn, and what would disqualify them - then walk out with the truth on the record instead of a hopeful feeling. I build the pre-call brief, arm you with questions that surface past behavior instead of polite hypotheticals, and debrief the call into your client book with every fact labeled. Use when you say "prep my discovery call", "I have a call with a prospect", "qualify this lead", "debrief my call", "were they a good fit", "build my question bank", "is this lead worth chasing". Run it before and after every first conversation; closing the deal is yours alone.
---

# Discovery Calls - the deal is won or lost before anyone talks price

Most discovery calls fail in the same two places: the founder walks in knowing nothing beyond a name, and walks out with a warm feeling and no facts. Then the pipeline fills with "great call, strong fit" entries that never turn into money, because a warm feeling was never a fact. Discovery is not a soft open for your pitch. It is an investigation - you are testing whether this person has the problem you solve, whether they have ever spent anything trying to fix it, and whether you can honestly deliver what they need.

The other thing most founders get wrong: they treat disqualification as failure. It is the opposite. Every hour you spend chasing a bad-fit lead is an hour stolen from a good one. A bad-fit lead marked bad-fit, with the reason on the record, is a win - and your client book gets more honest every time you write one down.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A pre-call brief for one named prospect: who they are (verified, with sources), the fit hypotheses we are testing, the question paired with each one, and the disqualifiers written down before the call can charm you out of them
- A question bank tuned to your offer that surfaces past behavior, not polite hypotheticals
- A post-call debrief written into `company/customers/<slug>.md` - stage set honestly, facts labeled, and a next-step contract with an action, an owner, and a date
- When Sales is active, the brief lives at `departments/sales/drafts/YYYY-MM-DD-precall-<slug>.md` until the call, then the debriefed version ships as the outbox pair in `departments/sales/outbox/` - the `.md` truth plus its `.html` render from `company/design/page.html`
- One line in `records/worklog.md` when the debrief is done - the work, on the record

What I never do: attend the call, close the deal, or send anything. You talk, you close, you send - closing is yours, and sending anything to a real person is a reserved decision. I prepare you and I keep the record honest.

## What I need from you

1. The prospect: a name, a company, and however you met - a link or an email thread helps.
2. Fifteen minutes before the call for the brief, and ten minutes after it for the debrief. The debrief while the call is fresh is worth more than the brief.

## How it works

Building the brief and writing the debrief is real seat work, so I run it the charter's way: I am the front desk, and I hand the drafting to a delegated agent - the Worker who researches and drafts, the Reviewer who tests it against your qualification bar - while I stay here with you to relay progress and take anything new you drop in. If your runtime cannot spawn a delegated agent, I play the seats in turn myself and say so out loud. Every seat moment is labeled with the seat that did it. The call itself, and the close, are always yours.

### Step 1 - Pull the file and the bar

I open (or create) `company/customers/<slug>.md` in the client book shape - stage, promised, paid, next touch, history. If this lead is new, they enter at `Stage: lead` with one dated history line saying where they came from. **customer-book** owns the ongoing care of this file; today I am writing one chapter in it.

Then I read the qualification bar from `company/business-model.md`: the Ideal customer section tells us who fits, and the capability floor - Yes, Now, Not yet - tells us what you can honestly promise on the call. I never qualify against criteria I reconstruct from memory; the file is the bar. If those sections are `(not set yet)`, I append one line to `records/warnings.md` (`- YYYY-MM-DD [discovery-calls] business-model.md ideal customer blank - qualified against founder's stated criteria for today`), ask you for your bar in two sentences, and keep moving. A warning is a flag on the play, never a stopped game.

### Step 2 - The pre-call brief

I research what can be verified - their site, what they sell, anything public you point me at - and I mark every fact with where it came from. Anything I could not verify says so. Then the heart of the brief: not a list of questions, but hypotheses. Each one is a guess about their problem or fit that the call can confirm or kill, paired with the exact question that tests it.

```markdown
# Pre-call brief - {Prospect}, {Company} - {date}

## Who they are
- {fact} [checked] (their site, {url})
- {fact} [from memory] (your email thread, {date})
- Company size: (could not verify - ask)

## Hypotheses to test
1. H: They are losing {X} to {problem we solve}.
   Ask: "Walk me through the last time {problem} happened. What did it cost you?"
2. H: They have budget authority.
   Ask: "When you bought {related thing} last, who signed off?"
3. H: This is urgent, not a someday wish.
   Ask: "What have you already tried?"

## Disqualifiers - written down NOW, before they charm us
- {from Ideal customer: e.g. fewer than N customers of their own}
- They need {thing on your Not-yet list} - we do not claim it
- No budget owner on the call and no path to one

## What we can honestly say we deliver
- {from the capability floor: Yes and Now items only}
```

The disqualifiers go in before the call on purpose. Mid-conversation, a likeable prospect can talk you out of your own standards - the written list is what holds them in place. When Sales is active, the brief is filed at `departments/sales/drafts/YYYY-MM-DD-precall-<slug>.md`; when it is not, I present the brief here in-session and only the debrief becomes the on-disk record.

### Step 3 - The question bank

The questions that matter share one rule: **past behavior over hypotheticals.** "Would you pay for this?" invites politeness. "What did you spend last quarter trying to fix this?" invites truth. People mispredict their future constantly; their past is a matter of record. I build your bank from your offer and profile, on these patterns:

- "Tell me about the last time {problem} happened" - not "do you have this problem?"
- "What have you already tried? What happened?" - a prospect who never tried anything may not feel the problem enough to pay
- "What does this cost you today - in hours or money?" - if they cannot name a cost, note that, not a guess
- "Who else would be involved in a decision like this?" - budget and authority, without asking "do you have budget?"
- "What happens if you just... do nothing?" - the honest urgency test

One more discipline for the call itself: when they compliment the idea, that is not data. When they tell you what they did, spent, or lost, that is data. Chase the second kind.

### Step 4 - You take the call

This part is yours alone. I do not join calls, and the close - if one appears - is yours to make, at a price you own. If pricing or scope comes up, the honest move is "let me put a proposal together" - **offers-and-proposals** drafts it afterward against your capability floor. During the call, take notes on what they *said* and *did*, in their words where you can. You do not need to diagnose them live; that is what the debrief is for.

### Step 5 - The debrief, while it is fresh

Right after the call, I interview you: what did they say, what did they commit to, which hypotheses lived and which died. Then I write the record - and here the labeling law does real work. What they said goes down as what they said, in their substance. What you inferred is `[best guess]` and says so. A budget they implied is not a budget they stated. A topic that never came up is written `not discussed` - and the absence of an objection is never evidence of fit. I attribute no motives and invent no storylines; if you are not sure a thing was actually said, it stays out.

I update the customer file: the `Stage:` line edited in place (a real conversation moves `lead` to `talking`; `promised` only when they actually committed to buy - an inflated commitment in the book is a false record), `Next touch:` set, and history appended:

```markdown
- YYYY-MM-DD Discovery call. Said the {problem} "costs us a day a week" (their words). Tried {tool} last year, dropped it - too complex (heard on the call). Budget not discussed. Decision involves their COO [best guess] - they said "I'd loop in {name}". Next step: they send {thing} by {date}; we send proposal by {date}.
```

When Sales is active, the debriefed brief moves out of drafts and ships as the outbox pair: the `.md` truth plus a self-contained `.html` render from `company/design/page.html`, so it leaves looking finished. If the design system is `(not set yet)`, I say so, use the shipped neutral look, and point you at the design-system onboarding step - **design-system** owns `company/design/`.

Every debrief ends with a **next-step contract**: an action, an owner, and a date - theirs or yours or both. "We'll stay in touch" fails the bar; if no next step was agreed, the record says exactly that, because knowing a deal has stalled is worth more than pretending it has not.

### Step 6 - The no-fit verdict

If the call killed your fit hypotheses - wrong problem, no budget path, they need something on your Not-yet list - the honest verdict is disqualify, and I will say so even when the call felt great. The stage moves to `dormant` and the history line names the reason: `- YYYY-MM-DD Disqualified: needs {X}, which we do not deliver yet. Revisit if that changes.` No deal stays alive on a premise the conversation refuted.

This entry is a win. It cost you one call instead of six weeks of chasing, and if the reason keeps repeating across dormant files, that is your business model talking - bring it to **weekly-review**.

### Step 7 - Log it

I tell you the debrief is on the record, then I append one line to `records/worklog.md`:

```markdown
- YYYY-MM-DD [sales] Discovery debrief: {Prospect} - receipt: debrief in company/customers/<slug>.md (brief in sales drafts/outbox if active), stage {stage}, next step {action} by {date}, reviewed by {founder}
```

Then one line to the master audit log, `records/audit-log.md`, timestamped in your HQ's timezone from `HQ.md` (never UTC):

```markdown
- YYYY-MM-DD HH:MM [note] [discovery-calls] [sales] Discovery debrief: {Prospect} - stage {stage}, next step {action} by {date} - company/customers/<slug>.md
```

If the verdict was promising, the baton passes cleanly: **offers-and-proposals** drafts the offer, and anything you then want to send goes through **send-guard** first - drafts are mine, the send is yours.

## Do this now

1. Name your next scheduled call - or the one lead you have been meaning to talk to - and say "prep my discovery call".
2. Read the disqualifiers out loud once before you dial.
3. Within an hour of hanging up, come back and say "debrief my call" - the details fade faster than you think.

Homework: open `company/business-model.md` and read the Ideal customer section as if it were a bouncer's checklist. If you cannot tell from it who gets turned away, sharpen it with **business-model** before your next call.

Next: install **offers-and-proposals** - when a discovery call goes well, the proposal should go out while the conversation is still warm.
