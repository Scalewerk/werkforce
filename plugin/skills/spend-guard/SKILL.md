---
name: spend-guard
description: The pre-spend pass that runs before any money moves - a subscription, a contractor, an ad budget, a shiny tool. In five minutes you see what it really costs over 12 months, what it replaces, and the cheaper alternative, then the spend queues to your decision log with an honest recommendation - and your yes proceeds immediately, because spending is your call alone. Use when you say "should I buy this", "before I pay for this", "run spend guard", "is this subscription worth it", "check this spend", "I want to hire a contractor", "price this against alternatives". Run it any time money is about to leave, and let monthly-close compare intended vs actual at month end.
---

# Spend Guard - the five-minute pass before money moves

Run this when your cursor is hovering over a Buy button. A $49-a-month tool does not feel like a decision; $588 a year plus the two tools it overlaps does. Small spends are where companies leak - not because any one of them was wrong, but because nobody ever saw them side by side, priced over twelve months, next to the thing they were supposed to replace.

One thing to be clear about before we start: I am a guard, not a gate. Spending money is one of your seven reserved decisions - I frame the cost, check the alternatives, and queue a recommendation, and then it waits on you and nobody else. The moment you say yes, it proceeds. No form, no cooling-off period, no second opinion required. Your money moves on your word; my job is just to make sure the word is informed.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- The 12-month view of the spend - real annual cost with every number's source named, no invented prices
- A replaces-and-overlaps read: what this spend retires, and what you already pay for that does the same job
- A cheaper-alternative check - free tier, a tool you already own, a one-time buy, or honestly doing nothing
- One QUEUED line in `company/decision-log.md` carrying the whole case and a recommendation - nothing waits on you silently
- A spend intent on the record that **monthly-close** can hold up against what actually got paid, so intended vs actual becomes a monthly habit instead of a year-end surprise

## What I need from you

1. What you are about to buy, and the price as quoted - a link to the pricing page, a contractor's rate, an ad budget. I take prices from you or from sources you point me at, never from memory.
2. One sentence on what you expect it to do for the business.

## How it works

### Step 1 - Name the spend

We pin down the thing itself: what it is (subscription, contractor, ads, tool, one-time buy), who gets paid, the price as quoted, and where that price came from. Every cost line in this pass names its source in parentheses - "(from the vendor's pricing page)", "(contractor's quote)", "(founder's estimate)". A price I cannot source gets `[best guess]` on it and stays that way until you confirm it. I never invent facts, numbers, or results about your business - a true zero beats a flattering guess.

If the money already moved - you bought it last week and are telling me now - we run the exact same pass anyway, no courtroom, because the 12-month view is worth having even after the yes, and the record still wants the intent.

### Step 2 - The 12-month view

A monthly price hides the real cost. I convert everything to what it costs over twelve months and show my work:

```markdown
Spend: {name} - {type}
- Sticker: $49/mo (from the vendor's pricing page) [checked]
- 12-month cost: $588 - plus $99 setup fee = $687 year one
- Grows with: +$29/mo per extra seat - at 3 seats, $1,632/yr [best guess]
- Cancellation: monthly / annual lock-in / {not stated - flagged}
```

Annual-only pricing, per-seat growth, usage tiers, and lock-ins all get pulled into the light here. If the vendor's pricing is genuinely unknowable from what we have, the line says `(not set yet)` and the gap goes into the recommendation as a reason to ask before paying - a stated gap is more useful than a made-up number.

### Step 3 - What it replaces

A spend that replaces something is cheaper than its sticker; a spend that duplicates something is more expensive. I read `company/business-model.md` (constraints and unit economics) and scan `company/decision-log.md` for earlier `QUEUED: spend` lines to answer two questions:

- **What does this retire?** A tool you can cancel, hours you stop paying for, work a contractor no longer bills. Named, with its own 12-month number, so the net cost is real.
- **What does this overlap?** Anything you already pay for that does most of this job. If I find an overlap, that is a finding: I append one dated line to `records/warnings.md` (`- YYYY-MM-DD [spend-guard] {new spend} overlaps {existing spend} - noted in the queue entry`), one `lesson` line to `records/improvements.md` - that is how the company learns where its money doubles up - then tell you in one sentence and keep moving. A warning is a flag on the play, never a stopped game.

### Step 4 - The cheaper-alternative check

Before any recommendation, four honest questions, answered with sources or labeled `[best guess]`:

1. **Is there a free tier or a free equivalent** that covers what you actually need this quarter - not what the pricing page sells, what you need?
2. **Do you already own the capability** - a tool on your books, a skill in this workforce, an hour of setup instead of a subscription?
3. **Is there a one-time buy** where you are being sold a subscription?
4. **What does doing nothing cost?** Sometimes the answer is "real money in lost time" - then the spend earns its place. Sometimes it is "nothing measurable" - and that belongs in the recommendation too.

This is framing, not obstruction. If the spend survives these four questions, it goes to the queue with a stronger case than it arrived with.

### Step 5 - Queue it with a recommendation

Spending money is reserved, so the case goes where reserved matters live: one line appended to `company/decision-log.md`, in the standard shape, with the recommendation attached - nothing waits on you silently:

```markdown
- {{DATE}} [{department}] QUEUED: spend ${AMOUNT} on {name} - context: ${X} over
  12 months (source), replaces {what} worth ${Y}/yr, overlaps {what or none},
  cheapest alternative: {option at $Z} - options: buy / use {alternative} /
  wait - recommendation: {one line, with the reason citing your business model}
```

The department tag is whoever the spend serves - `[marketing]` for the ad budget, `[company]` for HQ-level tools. The recommendation is honest, not reflexively frugal: when the 12-month math says buy, I say buy.

Then it is yours. Say yes (or no, or "the cheaper one") and the verdict lands the same minute as a DECIDED line:

```markdown
- {{DATE}} [{department}] DECIDED: buy {name} at ${AMOUNT}/mo - reason: {your words} (re: the spend)
```

Your yes proceeds immediately - no review, no second pass. If you want the full queue walked with everything else waiting on you, that is **founders-desk**; this skill only files this one entry well.

### Step 6 - Log it

The pass itself goes on the record: one line appended to `records/worklog.md`:

```markdown
- {{DATE}} [company] Spend guard pass on {name} - receipt: 12-month cost, replaces/overlaps, and alternatives queued to company/decision-log.md, reviewed by {{FOUNDER}}
```

And one line to the master audit log, `records/audit-log.md`, in the pinned shape, timestamped in your HQ timezone (never UTC):

```markdown
- YYYY-MM-DD HH:MM [spend] [spend-guard] [{department}] pre-spend pass on {name}, queued for founder - company/decision-log.md
```

And here is why the queue line earns its keep later: at month end, **monthly-close** - the sole writer of `company/metrics.md` - reads the month's spend-related `DECIDED:` lines, totals what the company said yes to, and asks you one plain question: what actually left the account this month? You report the actuals; the close writes intended vs actual into the month's numbers. Renewals you forgot, "free trials" that started billing, the contractor who ran over - they surface in weeks, not at tax time.

## Do this now

1. Think of the next thing you are about to pay for - there is always one. Say "run spend guard on {it}".
2. Give me the price and where it came from; watch the 12-month view land.
3. Read the QUEUED line in `company/decision-log.md` and give your verdict - it is one line and it is yours.

Homework: open `company/decision-log.md` and count the money decisions already sitting in there without a 12-month number attached. Pick the biggest recurring spend you have today and run this pass on it retroactively - a renewal deserves the same scrutiny as a new purchase.

One boundary either way: **spend-guard** checks money leaving your accounts; **send-guard** checks words leaving your building - both queue, neither blocks, and both verdicts are yours. **finance-department** owns the cash snapshot and runway this pass leans on.

Next: install **send-guard** - the same five-minute discipline for everything your workforce wants to send to a real person outside the company.
