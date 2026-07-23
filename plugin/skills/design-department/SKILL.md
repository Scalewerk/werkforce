---
name: design-department
description: Run Design's working session - one sitting that gives your company a recognizable look and turns it into things you can use today. Your Design room plans the brand kit (colors, type, visual voice), builds the templates every document and deck borrows (doc header, deck skeleton, social frame), reviews the work adversarially, and lands finished visual assets in the outbox with receipts. Use when you say "run design", "design session", "work the design board", "build my brand kit", "our stuff looks inconsistent", "make our templates", "everything we make looks different". Open the room with open-a-department first; then this skill is how Design earns its keep, session after session.
---

# Design Department - the room that decides what your company looks like

A company that looks the same everywhere looks real. That is the entire trick - not better taste, not fancier tools, just one look, kept. Right now your documents, your pages, and your posts were probably each styled in the moment they were made, by whoever made them, and it shows. Design exists to end that: one brand kit that owns the look, a small set of templates that carry it, and a review seat that catches drift before the world does.

This skill runs the room. Not "here is a template for a design department" - an actual working session: the board gets read, briefs get written, assets get built and reviewed by different seats, and something finished lands in the outbox before you stand up. Design owns your company's look - the brand kit, the templates every document and deck borrows, the finished visual assets - while the pages themselves are a separate craft the page skills own, and the company design system lives in `company/design/`, kept by the **design-system** skill this room reads and never rebuilds.

Your three seats each play their part - the Chief Experience Officer plans and writes the acceptance checks, the Design Specialist builds the piece, the Design Manager tries to tear it apart before it counts. I run the session as the desk you talk to: I hand each seat's task to a delegated agent and stay here with you while the work runs, narrating what each seat did. If this runtime cannot spawn delegated agents, I play the seats in turn, in this one session, and say so out loud - either way every seat moment is labeled with the seat that did it. (One reading note: Chief Experience Officer, Design Specialist, and Design Manager are this department's role titles - the seat words underneath them are Planner, Worker, Reviewer.) No seat grades its own homework, and nothing reaches Done without a receipt.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A worked board: `departments/design/board.md` rows moved through their honest stages, Blocked rows rechecked, nothing relabeled to flatter
- A brief on the record in `departments/design/briefs.md` for every task worked, with acceptance checks in testable visual terms
- The session's deliverable in `departments/design/outbox/YYYY-MM-DD-<slug>.md` (or `.html`) - a brand kit page, a template, or a finished asset, reviewed before it is called Done
- Review records and lessons in `departments/design/memory.md`, one dated line each
- Open and close lines in `records/sessions.md`, and one receipt line in `records/worklog.md`

## What I need from you

1. Design opened and staffed - **open-a-department** does that in one sitting, using this skill's own reference cards for the three seats.
2. Today's focus, in one sentence - or say "work the board" and the room picks from what is already Filed.
3. Your eyes at the end: reserved decisions (sending, spending, public claims) queue for you; everything else the room handles.

## How it works

### Step 1 - Open the room

I read `departments/design/charter.md`, `board.md`, and the three role cards in `seats/` - the Chief Experience Officer plans, the Design Specialist builds, the Design Manager reviews, each under the given name you hired them with. I also read `company/profile.md`, because the brand voice on file is Design's raw material. Then one line opens the session (every timestamp I write or speak is in your HQ timezone from `HQ.md`, never UTC):

```markdown
- YYYY-MM-DD HH:MM opened - focus: design session, {today's focus}
```

If a file is missing or malformed, I append one dated line to `records/warnings.md` (`- YYYY-MM-DD [design-department] finding - action taken`), tell you in one sentence, and keep working with what exists. A warning is a flag on the play, never a stopped game.

### Step 2 - Plan in the Planner seat

I hand the planning to a delegated agent playing the Chief Experience Officer seat and stay at the desk with you; if the runtime cannot spawn a delegated agent, I play this seat in turn and say so. Wearing the Chief Experience Officer seat, I set the queue. Inbox items tagged for Design and your one-sentence focus become board rows; Blocked rows get their recheck; then one rule orders everything: **brand kit first**. If `outbox/` holds no brand kit page yet, that is today's task and everything else files behind it - templates built before the kit exists are guesses wearing a suit.

Each task worked today gets its brief appended to `briefs.md`:

```markdown
### YYYY-MM-DD - {task name}
Outcome: O{n} (or "(none yet)" - I log one warning and keep moving)
Acceptance checks:
1. Uses the brand colors by their exact values from the kit
2. Type is the named font at the named sizes - no substitutes
3. {the element this piece must carry, stated so a reviewer can test it}
Due: YYYY-MM-DD
Seat: {Specialist's name}
```

Checks name colors, fonts, sizes, and required elements - never "make it pop". A check the Reviewer cannot test with the file open gets rewritten before work starts. The Planner seat plans and briefs; it never closes work on its own initiative.

### Step 3 - Build in the Worker seat

I hand the brief to a delegated agent playing the Design Specialist seat and stay at the desk; if delegated agents are unavailable, I play this seat in turn and say so. The Design Specialist works the brief, in `drafts/` - invisible to controls until handoff, so the ugly middle versions cost nothing. What this room builds, in its usual order:

- **The brand kit** - one page: colors with exact values, the fonts, three lines of visual voice drawn from your profile. Blanks stay `(not set yet)` until you give me something real - I never invent your brand's facts.
- **Templates** - the doc header, the deck skeleton, the social frame. Built once, produced from forever; they live in the outbox where any department lifts them without asking.
- **Assets** - the pieces briefs actually ask for, each produced from a template where one exists.

Every deliverable ships self-contained - one file that opens anywhere, nothing linked that breaks when it moves. Every claim carries its label: "matches the kit" is `[checked]` only after a side-by-side look this session. Handoff moves the file toward `outbox/`, flips the row to Manager review, and states which checks pass and what still worries the builder.

Anything a real person outside the company might see - a filled-in social frame, a client-facing look - is draft-shaped on purpose. I draft; you send.

### Step 4 - Review in the Reviewer seat

I hand the finished draft to a delegated agent playing the Design Manager seat - a different seat than the one that built, because no agent grades its own homework - and stay at the desk; same fallback, if delegated agents are unavailable I play this seat in turn and say so. The Design Manager opens the actual file and walks the checks one by one, pass or fail with a reason. Then the side-by-side: the piece next to the brand kit, colors, type, spacing, voice. Off-look is a fault even when the piece is pretty. Optimistic claim labels get downgraded out loud.

Pass: the board row goes to Done with a real receipt - what was produced, where it lives, who reviewed. Fail: the row goes back to In progress with named faults, and one lesson line lands in `records/improvements.md`. Either way, one line to `memory.md`:

```markdown
- YYYY-MM-DD Review of {task}: verdict, checks passed/failed, downgrades, faults (or none).
```

One boundary said plainly, because it keeps three skills honest: this room owns the look; **branded-pages** renders your documents into house-style pages, and **landing-pages** builds and writes the pages themselves - both follow the kit and templates this room keeps, and this room never rebuilds what they own.

### Step 5 - Log it

Now the finished piece moves onto the record so nothing lives only in drafts. The deliverable moves from drafts to the outbox as a pair: `departments/design/outbox/YYYY-MM-DD-{slug}.md` is the editable truth, and I render `YYYY-MM-DD-{slug}.html` from `company/design/page.html` so what you hand off is polished, not raw notes. (If your design system is `(not set yet)`, I say so, use the shipped neutral template, and point you to the design-system onboarding step - **design-system** owns `company/design/`, and **onboarding** owns the step order that gets it set.) Then one receipt line per finished piece:

```markdown
- YYYY-MM-DD [design] {task} - receipt: {what was produced}, departments/design/outbox/YYYY-MM-DD-{slug}.md, reviewed by {Manager's name}
```

And one line appends to `records/audit-log.md` in the master-log shape, timestamped in your HQ timezone:

```markdown
- YYYY-MM-DD HH:MM [task] [{Design Manager's name}] [design] {task} shipped to outbox, reviewed to zero faults - departments/design/outbox/YYYY-MM-DD-{slug}.md
```

Then the close line in `records/sessions.md`:

```markdown
- YYYY-MM-DD HH:MM closed - design: {n} rows moved, {deliverable} in the outbox
```

If anything queued as a reserved decision - an asset ready to send, a font worth buying, a look change the public will notice - it is sitting in `company/decision-log.md` with a recommendation attached, waiting on you and only you. Then I read you the day in three beats - what shipped, what is queued for your verdict, what tomorrow's session should pick up.

## Do this now

1. If Design still reads Planned on your org chart, run **open-a-department** and pick Design - three names, one sitting.
2. Say "run design" with today's focus - and if you are not sure, say "build my brand kit", because that is task one anyway.
3. When the session ends, open the outbox file and look at it - that is your company's face, on the record.

Homework: gather what your brand already has - a logo file, colors you have used, a font you like, or just the honest sentence "we have nothing yet" - and drop it in `inbox.md` tonight. Tomorrow's session turns it into the kit, and a true zero beats a flattering guess.

Next: install **branded-pages** - the moment your brand kit exists, every document your workforce writes can be rendered in your house style, and the kit is what makes that style yours.
