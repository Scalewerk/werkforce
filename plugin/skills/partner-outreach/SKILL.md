---
name: partner-outreach
description: The fastest road to your next customer runs through the people who already serve them - this desk drafts the partnership and referral outreach that opens those doors, give-first, short, and human, with every send left to you. You get a map of who already has your customers' trust, drafts in your Sales outbox, and a follow-up rhythm the board remembers so you never chase from memory. Use when you say "draft a partner outreach", "ask for a referral", "who could send me customers", "write an intro request", "partnership pitch", "reach out to a possible partner". Finish every draft with send-guard - the send waits at your queue.
---

# Partner Outreach - the people who already serve your customers

Somewhere out there is a person your ideal customer already trusts - an agency that hands off the work you do, a consultant who gets asked for exactly what you sell, a tool company whose users hit the problem you solve. One warm introduction from that person outweighs a hundred messages to strangers. That is your Sales channel model: referral- and partnerships-first. Not cold lists, not spray sequences - relationships, worked honestly, one at a time.

The craft has two laws. First, give before you ask: the opening move is something real you offer them, not something you want from them. Second, no message that smells like a template - the moment a partner senses they are name number forty on a list, the relationship is over before it started. Every draft here reads like it was typed once, for one person, because it was.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A partner map - the named people and companies who already serve your customers, each with why they would care and what you can give first, filed as the outbox pair `departments/sales/outbox/YYYY-MM-DD-partner-map.md` (editable truth) + `.html` (finished render from your design system)
- Short, human outreach drafts - first touch, referral asks, intro requests - each one under 120 words, each carrying one true specific detail about the person, saved to `departments/sales/outbox/` as `YYYY-MM-DD-<slug>.md`
- A follow-up rhythm on the Sales `board.md` - one Filed row per open conversation with a due date, so **run-the-day** chases the thread instead of your memory
- Zero invented relationships. Every named person, prior conversation, and mutual contact in a draft traces to your customer book, your files, or your own words - or it gets cut
- Zero sends. Sending anything to a real person outside the company is a reserved decision, and every draft routes through **send-guard** to your queue

This desk drafts one outreach deliverable at a time; **sales-department** runs the room it belongs to. **customer-book** owns who your customers and leads are - I read it, never rewrite it. **discovery-calls** takes over when a partner says yes and a real conversation gets scheduled. **email-and-newsletters** owns messages to your own list; this desk writes to people who never signed up for anything, which is exactly why the bar is higher.

## What I need from you

1. Who your customers are and what you sell - from `company/profile.md` and `company/business-model.md`, or your own words right now.
2. What you actually know about the people we might contact: how you know them, past conversations, mutual contacts. I work only from what is real - a blank here means we write a true first touch, not a fake reunion.
3. Something you can genuinely give - a client you could refer them, an audience you could put them in front of, work you could share, an intro you could make. If we cannot name a give, we are not ready to ask.

## How it works

### Step 1 - Map who already serves your customers

Before any message, the map. I read your ideal customer from `company/business-model.md` and ask one question from four angles: who else already has this customer's attention and trust?

- **Upstream** - who serves them right before they need you? (The web designer before the copywriter. The accountant before the financial planner.)
- **Downstream** - who serves them right after? (They finish with you and go where next?)
- **Alongside** - who serves them at the same time, on a problem next door to yours?
- **Overflow** - who does what you do but turns away work you would take - too small, wrong niche, fully booked?

You name real names where you have them; I help you reason toward categories where you do not. Each mapped partner gets three lines: who they are, why a referral flows naturally between you, and what you can give first. The finished map is filed per the filing law in `os/formats.md` as the outbox pair `departments/sales/outbox/YYYY-MM-DD-partner-map.md` plus its `.html` render, built from `company/design/page.html`; if your design system is `(not set yet)`, I say so, render with the shipped neutral look, and point you to the **design-system** onboarding step so it later carries your brand. The outreach message drafts below stay plain markdown, since they are body text you paste into your own email or DM tool, not standalone pages. Anything I could not verify is labeled `[best guess]` - a true zero beats a flattering guess.

### Step 2 - Pick the give

For each partner you want to contact, we name the give before we touch the ask. A give is real when they would value it even if nothing ever came back: a client of yours who needs exactly what they sell, a genuine recommendation to your audience, a useful piece of intel from your corner of the market, an introduction they would not get on their own. "Happy to explore synergies" is not a give - it is an ask in a costume, and partners smell it instantly.

If no honest give exists yet for a partner, that partner moves down the map, not off it - and I say so plainly instead of drafting something hollow.

### Step 3 - Draft it short and human

Now the message, and here the no-template law does the work. Every draft must pass four checks before it leaves this desk:

- **Under 120 words.** A first touch is a knock on the door, not a pitch deck.
- **One true specific.** Something in the message is true of this person and nobody else - their work, their client, how you crossed paths. If we cannot name one, we stop and you tell me one, because a draft without it is a form letter with a name pasted in.
- **Give first, ask small.** The give leads. The ask is one sentence, specific, and easy to decline - "open to a 15-minute call?" beats "let's build a partnership."
- **Honest about the relationship.** If you have never spoken, the draft says so plainly and owns it. I never write "following up on our conversation" when no conversation is on the record - a fabricated prior touch is the one defect that can never ship.

You get two variants per partner - a different honest angle, never a different level of hype - in the draft file:

```markdown
departments/sales/outbox/2026-07-20-intro-ask-rivera-design.md

To: Maya Rivera, Rivera Design - hands off copy work after web builds (your words, 2026-07-20)
Give: two of my current clients need a site rebuild - real referrals, ready now
Ask: 15 minutes to see if a two-way referral fit exists
Variant A: {the draft}
Variant B: {the second angle}
Follow-up: Filed on the Sales board, due 2026-07-27
```

Drafts in progress live in `departments/sales/drafts/` - invisible to every control until handoff, as scrap should be.

### Step 4 - To the outbox, then your queue

The finished draft moves to `departments/sales/outbox/`, and then the handoff that keeps the promise: run **send-guard**. It checks the recipient, holds every claim against your capability floor, and appends the QUEUED line to `company/decision-log.md`. The send waits there for you - never silently, never sent on its own. I draft; you send.

If your Sales department is not Active yet, I still write everything and hand it to you right in the conversation - warn-never-block - with one dated line in `records/warnings.md` as `- YYYY-MM-DD [partner-outreach] finding - action taken`, one sentence to you, and a nudge that **open-a-department** gives this work a permanent home.

### Step 5 - Put the follow-up on the board

Most partnerships die of silence, not rejection - the first message lands in a busy week and nobody circles back. So the moment you send, the thread goes on `departments/sales/board.md` as a Filed row:

```markdown
| Task | Stage | Seat | Filed | Due | Receipt |
|---|---|---|---|---|---|
| Follow up with Maya Rivera re: referral intro | Filed | Marcus | 2026-07-20 | 2026-07-27 | - |
```

The rhythm is two follow-ups, then grace. First follow-up about a week out - short, adds one new small give or detail, never "just bumping this." Second about two weeks later - the honest last word, leaving the door open. After that the row goes to Dropped with the reason in its place, because a partner is a relationship, not a sequence, and three unanswered messages says more about you than about them. A reply at any point flips the thread to **discovery-calls** territory, and the partner's file - if they become a real lead - is **customer-book**'s to open.

### Step 6 - Log it

One line appended to `records/worklog.md`:

```markdown
- YYYY-MM-DD [sales] Drafted partner outreach to {name} - receipt: 2 variants at departments/sales/outbox/YYYY-MM-DD-<slug>.md, queued via send-guard, follow-up Filed on the board, reviewed by {reviewer}
```

And one line to the master audit log, `records/audit-log.md`, stamped in your HQ timezone from `HQ.md` (never UTC):

```markdown
- YYYY-MM-DD HH:MM [task] [{reviewer}] [sales] partner outreach to {name} drafted and queued for your send - departments/sales/outbox/YYYY-MM-DD-<slug>.md
```

Over the months this becomes your partnership record: who you mapped, what you gave, what came back - every ask on the record, and not one of them sent by anyone but you.

## Do this now

1. Tell me who your best customer is, and we will name the four kinds of people who already serve them.
2. Pick the one partner from the map where you have the strongest give.
3. Get the two draft variants, run **send-guard**, and make the call at your queue.

Homework: write down the last time someone referred business to you - who it was, and what you had done for them first. That pattern, whatever it is, is your referral engine already running at hand-crank speed; this desk turns the handle on purpose.

Next: I name the one action your HQ state points to - if `company/onboarding.md` still has open steps, that Next step leads (open Sales with **open-a-department** so this outreach has a staffed home). Once your HQ is set, that next action is **discovery-calls** - the first partner who says yes turns into a real conversation, and that desk makes sure you walk in prepared.
