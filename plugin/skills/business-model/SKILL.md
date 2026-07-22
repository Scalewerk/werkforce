---
name: business-model
description: One file that knows how your company makes money - ideal customer, offer ladder and pricing, channels, unit economics, constraints, and the capability floor your workforce checks before it claims anything in public. Every filled line names its source; live numbers stay owned by your payment dashboard and your bank - this file records and points. Use when you say "build my business model", "set up my business model", "update my business model", "what can we deliver today", "capability floor", "my prices changed", "update my unit economics". Run it right after company-profile, and re-open it whenever a price, a channel, or a capability changes.
---

# Business Model - the file that keeps your company honest about money

Your profile says who you are and how you sound. This file says how you make money - and it is the difference between a workforce that plans and a workforce that guesses. Without it, a well-briefed session performs and a cold one improvises: it drafts an offer at a price you retired last quarter, plans a channel your ideal customer never opens, or promises a deliverable you have never actually shipped. The gap gets caught days later by an awkward conversation instead of on paper, today.

One rule makes this file trustworthy: one field, one authority. Your live numbers already have homes - your payment dashboard owns revenue, your bank owns cash, your own decisions own pricing. This file never becomes a second home for any of them. It records the value, and it points at the owner in parentheses, in your words. When the file and the dashboard disagree, the dashboard is right and the file gets updated to match - a stale view gets reconciled, never promoted to a second truth.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- `company/business-model.md` in your HQ, six sections in the exact shape the format law names: Ideal customer, Offer ladder and pricing, How customers find us, Unit economics, Constraints right now, What we can deliver today
- The capability floor - three honest lists, Yes (proven), Now (can do on request), Not yet (do not claim) - that **offers-and-proposals** and **landing-pages** read before making any claim, and **send-guard** checks before anything leaves the building
- Every filled line ending with its source in parentheses, in your words - "from my Stripe dashboard", "founder's estimate", "signed contract, March"
- Honest `(not set yet)` on everything you do not know - a true zero beats a flattering guess
- An update path: change one field any time without re-answering the rest, plus one line in `records/worklog.md` when the file is built or meaningfully revised

## What I need from you

1. A few minutes for short questions, one section at a time - short answers are fine
2. Real numbers only, and only from somewhere real - if a number lives in a dashboard, open it and read it to me; if it lives in your head, we label it "founder's estimate" and both of us know what that label is worth
3. Ruthless honesty on the Not yet list - it protects your reputation before anything else can

## How it works

### Step 1 - Find the file

I locate your HQ and look for `company/business-model.md`. If it exists, I read it back as a one-line-per-section summary and you name what changed - I re-ask only that, because this is a LIVING file: I edit the named field in place and touch nothing else. If it exists but has drifted from the six-section shape, I restore the shape, preserve every filled line, and append one dated line to `records/warnings.md`:

```
- YYYY-MM-DD [business-model] business-model.md drifted from the format-law shape - restored six sections, no founder line lost
```

If `company/profile.md` is missing or empty, I note it in one warning line the same way and keep going - the interview works either way. A warning is a flag on the play, never a stopped game. If the file does not exist, we build it now, top to bottom.

### Step 2 - The interview

One section at a time, short questions. For every answer I ask one follow-up: where does that live? That source goes on the line, in your words. If the honest answer is "nowhere yet", the line reads `(not set yet)` and stays that way until something real exists - I never invent a number, a price, or a customer.

- **Ideal customer** - who they are, the pain they pay to fix, and where they actually spend their time. That last one matters more than it looks: it is the field that catches a channel plan headed somewhere your buyer never goes, before money follows it.
- **Offer ladder and pricing** - each thing you sell and its price, smallest to biggest. Prices are recorded here, never decided here: changing a price is one of the seven reserved decisions, so I write down what you decided and nothing more.
- **How customers find us** - the channels that have actually produced a customer, each with its evidence. A channel you hope will work belongs in Constraints or on a department board, not here.
- **Unit economics** - what one customer pays you, what one customer costs you, how long they stay. These live in your payment dashboard and your bank; you read, I record, the line points at the system that owns it. Monthly tallies are not written here at all - `company/metrics.md` owns those and **monthly-close** is its sole writer.
- **Constraints right now** - the two or three true limits on the business this month: hours, cash, capacity, a dependency. Sourced like everything else, usually "(founder, this week)".

### Step 3 - Draw the capability floor

The last section is the one the rest of your workforce leans on hardest. Three lists:

- **Yes (proven)** - you have delivered it to a real customer and could point at the work
- **Now (can do on request)** - you could deliver it this week, but no one has bought it yet
- **Not yet (do not claim)** - not deliverable today, no matter how good it would sound on a page

This is the floor under every public claim your company makes. **offers-and-proposals** and **landing-pages** read it before writing a word of promise, and **send-guard** checks outgoing claims against it - so a capability that quietly stopped being true gets caught here, on paper, instead of in front of a customer. When you are torn between Now and Not yet, pick Not yet: moving a line up later is a good day, and walking a claim back is not.

### Step 4 - Write the file

I write `company/business-model.md` in this exact shape - blanks stay honest:

```markdown
# {{COMPANY}} - business model
<!-- LIVING file. Every filled line ends with its source in parentheses, in the founder's words. Unknowns stay "(not set yet)" - never invented. -->

## Ideal customer
- Who: {{WHO}} ({{SOURCE}})
- The pain they pay to fix: {{PAIN}} ({{SOURCE}})
- Where they actually spend time: {{WHERE}} ({{SOURCE}})

## Offer ladder and pricing
- {{OFFER_1}}: {{PRICE_1}} ({{SOURCE}})
- {{OFFER_2}}: {{PRICE_2}} ({{SOURCE}})

## How customers find us
- {{CHANNEL}}: {{EVIDENCE}} ({{SOURCE}})

## Unit economics
- Revenue per customer: {{VALUE}} ({{SOURCE}})
- Cost per customer: (not set yet)
- How long a customer stays: (not set yet)

## Constraints right now
- {{CONSTRAINT}} ({{SOURCE}})

## What we can deliver today
Yes (proven):
- {{PROVEN_THING}} ({{SOURCE}})

Now (can do on request):
- {{READY_THING}} ({{SOURCE}})

Not yet (do not claim):
- {{NOT_YET_THING}} (founder, honest call)
```

Then I read it back in plain sentences and you flag anything that is not true. You are the only reviewer who can.

### Step 5 - Put it to work, keep it true

From today, this file is what your workforce cites instead of guessing. **ceo-seat** reads it at the start of every strategy session and names the field behind each recommendation - and when a plan conflicts with a field, the conflict gets flagged by name ("this channel plan conflicts with where the ideal customer spends time"), never silently transcribed and never used to block you. The file informs; you decide.

Maintenance is one sentence away: tell me "my prices changed" or "add a channel" and I update that field and its source, in place. When a number's owner has moved on - the dashboard says one thing, the file another - the file loses, every time. What this file does not own stays owned elsewhere: brand voice belongs to `company/profile.md` via **company-profile**, monthly tallies to **monthly-close**.

### Step 6 - Log it

To close, I record that the file was built or revised, and I tell you where the record landed. First one line to `records/worklog.md`:

```
- YYYY-MM-DD [company] Business model set - receipt: six sections written with per-line sources, company/business-model.md, reviewed by {{FOUNDER}}
```

Then one line to the master audit log at `records/audit-log.md`, in the shape `os/formats.md` pins - timestamped in your HQ.md timezone, never UTC:

```
- 2026-07-20 15:10 [note] [business-model] [company] Business model built: six sections with per-line sources - company/business-model.md
```

A meaningful later revision - a price change recorded, the capability floor redrawn - gets its own dated worklog and audit-log line the same way, so the file's history stays findable even though the file itself edits in place.

## Do this now

1. Say "build my business model" and answer the first section - who your ideal customer is and where they spend time.
2. Open your payment dashboard before we reach Unit economics, so the numbers come from the owner, not from memory.
3. Draw the capability floor and put at least one line under Not yet - a company with nothing on that list is not being honest yet.

Homework: read the What we can deliver today section once more tonight and ask of every Yes line, "could I show a customer the proof?" Any line that fails moves down a list tomorrow - tell me and I will move it.

Next: if you are still walking the numbered setup path, **onboarding** owns `company/onboarding.md` and names the step after this one - usually **design-system** for your company look, then **open-a-department**. If no row of your org chart is Active yet, run **open-a-department** - your first department will read this file before its first task. If departments are already running, install **ceo-seat** - it is this file's biggest reader, and every recommendation it makes will cite these fields by name.
