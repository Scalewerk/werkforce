---
name: offers-and-proposals
description: Offer and proposal drafts that promise only what your company can actually deliver - I read the capability floor in your business model before writing a word, shape the offer as outcome, scope, price frame, and terms, and turn a discovery debrief into a tailored proposal that lands in the outbox ready for your call. Overclaims get caught on paper and downgraded before a customer ever sees them. Use when you say "draft a proposal", "write an offer", "put together a quote", "draft a statement of work", "proposal from my discovery call", "what can I actually promise", "turn that call into a proposal". Run business-model first so the floor exists; pricing and sending stay yours alone.
---

# Offers and Proposals - promise from the floor, not the ceiling

Most proposals fail twice. The first failure is quiet: a promise gets written that sounded great in the document and cannot actually be delivered, and nobody notices until the work starts. The second failure is loud: the customer notices. This skill exists to make sure the first failure happens on paper, today, where it costs one warning line - instead of in front of a paying customer, where it costs your reputation.

So the order of operations here is fixed, and it is the whole trick: the capability floor gets read before a single word of promise gets written. Your business model keeps three honest lists - Yes (proven), Now (can do on request), Not yet (do not claim). Everything in Yes and Now may be promised. Nothing in Not yet ever is, no matter how good it would sound. A proposal built this way is smaller than the one your ambition would write - and every line of it is true.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- One finished draft - an offer (reusable, one-to-many) or a proposal (one client, built from a discovery debrief) - in four parts: outcome, scope, price frame, terms
- Every promise in it checked against the capability floor in `company/business-model.md`, with overclaims downgraded on paper and the downgrade on the record
- The finished draft in a department outbox as the pair `YYYY-MM-DD-{slug}.md` (editable truth) + `YYYY-MM-DD-{slug}.html` (finished render from your design system), plus a founder-notes trailer in the markdown mapping each promise to its floor line - yours to read, delete before sending
- Prices read from your offer ladder, never invented - a deal that needs a new price gets a framed choice queued in `company/decision-log.md`, because changing prices is yours alone
- One line in `records/worklog.md` when the draft is handed off

I draft; you send. Sending anything to a real person outside the company is a reserved decision, and this skill never touches it.

## What I need from you

1. `company/business-model.md` with the capability floor filled in - run **business-model** first if it is not. I can draft without it, but you will get warnings instead of confidence.
2. What we are drafting: a reusable offer, or a proposal for one named prospect. For a proposal, the discovery debrief from **discovery-calls** - or ten minutes to answer three questions in its place.
3. Your prices, from the offer ladder. If the deal does not fit the ladder, your decision - I frame it, you make it.

## How it works

### Step 1 - Read the floor first

Before anything else I open `company/business-model.md` and read "What we can deliver today" - the Yes, Now, and Not yet lists. This is the law of the draft: Yes and Now items may be promised, Not yet items may not, and anything not on the floor at all gets treated as Not yet until you tell me otherwise. I also read the offer ladder, because that is where prices live.

If the file or the floor section is missing, I do not stop - I append one dated line to `records/warnings.md`, tell you in one sentence, and draft with every capability claim marked `[best guess]` for you to confirm:

```
- YYYY-MM-DD [offers-and-proposals] no capability floor in business-model.md - drafted with unverified claims, founder to confirm each
```

A warning is a flag on the play, never a stopped game.

### Step 2 - Pick the shape

Two shapes, one decision:

- **Offer** - reusable, written once, sent to many. Lives close to your offer ladder: a named package with an outcome, a fixed scope, a price, and terms. When it is done, **landing-pages** can turn it into a page.
- **Proposal** - one client, one situation. It starts from the discovery debrief that **discovery-calls** produced: their words for the problem, what they said success looks like, budget signals, who decides. If no debrief exists, I ask you three questions - what pain did they name, what does done look like to them, what did they signal about budget and timing - and your answers stand in for it. I never invent what a prospect said.

Either way the work starts in a department's `drafts/` folder - Sales' when Sales is the room asking, otherwise whichever active department filed the brief. If no department is open yet, I create the file under `departments/sales/drafts/` with one warning line noting Sales is unstaffed, and **open-a-department** remains the way to staff it.

### Step 3 - Draft the four parts

Every offer and every proposal has the same skeleton, and each part earns its place:

- **Outcome** - the state of the world this work produces, in the customer's language, with who verifies it and how. Not a list of activities. "You will have X, verified by Y" beats "we will do A, B, C" in every deal you will ever close.
- **Scope** - what is delivered, one line per deliverable; then the honest fences: what is not included, what we assume, what the client must provide, and what triggers a scope conversation. A hostile reader of the exclusions alone should know exactly what they are not buying.
- **Price frame** - the price from your offer ladder, stated plainly. Recorded, never decided here: if this deal needs a price that is not on the ladder, I lay out two or three framed options with what each protects and what each trades away, and queue the decision - see Step 5.
- **Terms** - timeline, payment schedule, revision or guarantee policy, and what ends the engagement. Short and plain. Terms nobody reads still bind you.

The proposal file takes this shape:

```markdown
# {{CLIENT}} - proposal: {{SHORT_NAME}}
Prepared: {{DATE}} - status: draft, not sent

## The outcome
{{ONE_PARAGRAPH}} - and how we will both know it happened: {{VERIFIED_BY}}.

## Scope
Delivered:
1. {{DELIVERABLE}}
Not included: {{EXCLUSIONS}}
We assume: {{ASSUMPTIONS}}
You provide: {{CLIENT_INPUTS}}
Scope changes when: {{TRIGGER}}

## Price
{{PRICE_LINE}}

## Terms
- Timeline: {{TIMELINE}}
- Payment: {{PAYMENT}}
- {{GUARANTEE_OR_REVISIONS}}

---
Founder notes - delete before sending:
- Floor check: each promise above -> its Yes/Now line in business-model.md
- Open items: {{ANYTHING_QUEUED_OR_UNCONFIRMED}}
```

A reusable offer uses the same skeleton without the client name and founder notes trailer. Proof points from `company/profile.md` may appear in either - each one carries its claim label in the founder notes, and `[best guess]` proof never ships as fact.

### Step 4 - The overclaim check

Now the draft meets the floor, line by line. Every promised deliverable maps to a Yes or Now item. When a promise reaches past the floor, I do not delete it and I do not block - I downgrade it on paper: "we will build your automated pipeline" becomes "we will build your first pipeline by hand and document it", or the line moves from the scope into a clearly-labeled future phase. Then two lines go on the record:

```
- YYYY-MM-DD [offers-and-proposals] {client or offer} draft promised "{claim}" beyond the floor - downgraded to "{new claim}"
- YYYY-MM-DD lesson: proposal reached past the capability floor - the floor caught it before a customer did
```

The first to `records/warnings.md`, the second to `records/improvements.md`. If you believe the capability genuinely belongs on the floor now, that is a **business-model** conversation - move the line there first, then the promise gets to stand. When you are torn, downgrade: moving a claim up later is a good day, and walking one back is not.

### Step 5 - Hand off, and queue what is yours

The finished draft moves from `drafts/` to the department's `outbox/` as the pair the filing law in `os/formats.md` requires: `YYYY-MM-DD-{slug}.md` (the editable truth, founder-notes trailer and all) and `YYYY-MM-DD-{slug}.html` (the finished, self-contained render built from `company/design/page.html`, with the founder-notes trailer left off so it reads client-ready). If your design system is `(not set yet)`, I say so, render with the shipped neutral look, and point you to the **design-system** onboarding step so your next proposal carries your brand - **design-department** owns that look. That move is the handoff, and it is the moment the work becomes visible. If a board row exists for this work, it moves to Manager review; the desk hands that review to a delegated agent that did not write the draft (if your runtime cannot spawn one, the desk plays the Reviewer in turn and says so), and **review-desk** is the skeptical reader it deserves before any customer sees it. This skill never closes its own work.

Two things may be waiting on you, and both queue instead of stalling silently:

- A price not on the ladder queues to `company/decision-log.md`: `- YYYY-MM-DD [sales] QUEUED: price for {client} proposal - context - options with tradeoffs - recommendation`. The draft carries `(price pending your decision)` until you rule.
- The send itself. Run **send-guard** when you are ready - it checks the recipient, the claims, and the floor one last time before anything leaves the building. Delete the founder-notes trailer before it goes.

### Step 6 - Log it

One line to `records/worklog.md`, once **review-desk** has had its pass:

```
- YYYY-MM-DD [sales] Drafted {offer or proposal name} - receipt: draft at departments/sales/outbox/YYYY-MM-DD-{slug}.md + .html, floor-checked, awaiting founder send, reviewed by {reviewer}
```

And one line to the master audit log, `records/audit-log.md`, stamped in your HQ timezone from `HQ.md` (never UTC):

```
- YYYY-MM-DD HH:MM [task] [{reviewer}] [sales] {offer or proposal name} drafted, floor-checked, filed for your send - departments/sales/outbox/YYYY-MM-DD-{slug}.html
```

If the prospect has a file in `company/customers/`, I append one dated history line there too - "proposal drafted, awaiting send" - so **customer-book** stays the one true record of where this relationship stands.

## Do this now

1. Open `company/business-model.md` and read your Not yet list once - that is the list this skill protects you from.
2. Say "draft a proposal" with a prospect's name, or "write an offer" with the package you have in mind.
3. Read the finished draft in the outbox, founder notes last - every downgrade is explained there.
4. Decide anything queued, then run **send-guard** when you are ready to send. Not before.

Homework: take the last offer or proposal you sent before your workforce existed and check it against your floor - count how many promises were Not yet items wearing confident language. That number is why Step 1 comes first.

Next: I read your HQ state and name the one action that matters most - if `company/onboarding.md` still has open steps, that Next step leads (run **business-model** first if the capability floor is thin, since this skill stands on it). Once your HQ is set, that next action is **discovery-calls** - it produces the debrief this skill turns into a proposal, and the two together are your deal pipeline on paper.
