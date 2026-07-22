---
name: send-guard
description: 'Nothing leaves the building unchecked - before any email, DM, post, or proposal reaches a real person, I run the pre-send pass: right recipient, every claim checked against your capability floor, voice against your profile, then the send queued in your decision log, because sending is yours alone. I catch overclaims and hand you the honest downgrade; I never block you - "send it" always proceeds, one warning line at most. Use when you say "check this before I send", "run send guard", "is this ready to send", "about to send this", "pre-send check", "did I overclaim", "look this over before it goes out". Run it the moment a draft leaves drafts/, then let founders-desk clear the queue.'
---

# Send Guard - the last pass before anything leaves the building

Run this when a draft is finished and your cursor is hovering over send - a proposal to a prospect, a reply to a client, a post going public, a DM to someone you want to work with. That moment is where good companies get hurt: not in the writing, but in the two seconds between "done" and "gone." One wrong recipient, one claim your business can't back yet, one message that doesn't sound like you - and it is out there with your name on it, unrecallable.

So your workforce runs a customs desk. Everything outbound stops here for one short pass - right person, true claims, your voice - and then the send goes on the founder's queue, because sending anything to a real person outside the company is a reserved decision and it is yours alone. The desk inspects; it never impounds. Every check here warns and keeps moving, and when you say "send it," it is sent-ready that second. I draft; you send.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A three-check pre-send pass on any outbound draft: recipient, claims vs your capability floor, voice vs your profile - two minutes, every time
- Overclaims caught before a stranger sees them, each with a suggested downgrade that keeps the message strong and the claim true
- One QUEUED line in `company/decision-log.md` for every send, so nothing leaves the building without your say - and nothing waits on you silently
- Findings on the record in `records/warnings.md` and a lesson line in `records/improvements.md` when a check catches something - flags on the play, never a stopped game
- A send button that stays yours forever, at every autonomy level

This desk checks the send; it never writes the content. **email-and-newsletters**, **offers-and-proposals**, and **social-posts** own the drafting; **write-well** owns the sentences; **spend-guard** is the sibling desk for money leaving instead of words.

## What I need from you

1. The draft, handed off - a file in a department's `outbox/`, or text you paste at me. Work still sitting in `drafts/` is invisible to this desk by law; handing it to me IS the handoff.
2. Who it is going to, in your words - a name, an address, a channel.
3. A `company/business-model.md` with "What we can deliver today" filled in helps enormously - run **business-model** if it is blank, and I will still run the pass without it.

## How it works

### Step 1 - Hand me the send

Tell me what is about to go out and to whom. I read the draft, then pull the three things I will check it against: the recipient's file in `company/customers/` if one exists, the "What we can deliver today" section of `company/business-model.md` (the capability floor - Yes, Now, Not yet), and "How we sound" from `company/profile.md`. If any of these is missing or `(not set yet)`, I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [send-guard] finding - action taken` and one `- YYYY-MM-DD lesson: ...` line to `records/improvements.md`, tell you in one sentence, and run the pass with what exists.

### Step 2 - Right person, right thread

The cheapest disaster to prevent is the wrong recipient. I check:

- **The name and the address agree.** If the draft opens "Hi Dana" and the address on file for Dana in the client book is different from the one you gave me, I say so.
- **One recipient means one recipient.** A message written for one reader going to a list, or a reply about to hit everyone on a thread, gets flagged out loud.
- **The thread matches the message.** A draft that says "as we discussed" going to someone you have never talked to, or a fresh thread that should be a reply, gets a sentence from me.
- **The from-side is deliberate.** If it is unclear which of your addresses or accounts this should come from, I ask - I never guess a sender identity on your behalf.

### Step 3 - Claims vs the capability floor

Now the check that protects your reputation. Every claim in the draft gets held against the three lists in "What we can deliver today":

- **Yes (proven)** - claim it plainly. This is your floor; stand on it.
- **Now (can do on request)** - claim it as an offer, not a track record: "we can build this for you," never "we do this all the time."
- **Not yet (do not claim)** - the flag. I quote the exact sentence, name the list it collides with, and hand you a downgrade that keeps the message selling:

```markdown
Flag: "We build automated reporting dashboards for all our clients" -
business-model.md lists dashboards under Not yet.
Downgrade: "You get a clear written report every month - and automated
dashboards are next on our roadmap."
```

Numbers get the same treatment: any figure in the draft - clients served, results delivered, timelines promised - either traces to a file or your own words, or gets flagged `[best guess]` for you to confirm. A true zero beats a flattering guess, and it closes more deals than a caught exaggeration ever will. Each flag also lands as one dated line in `records/warnings.md` and one `lesson` line in `records/improvements.md` - that is how the company learns which claims keep outrunning the floor.

### Step 4 - Voice and completeness

Last check: does it sound like you, and can the reader act on it? Against "How we sound" I flag anything off-voice - too stiff, too breathless, words you would never say. Then the completeness pass, because a technically-true message that strands its reader is still a bad send:

- The point is in the first sentence, not buried in paragraph three.
- Everything the reader needs is IN the message - the date, the price, the link, the ask. "See attached" with nothing attached and leftover placeholders get caught here.
- It ends clean: one clear next step, no trailing hedges.

I suggest edits; I do not silently rewrite. It is your name on the send, so the words stay yours to accept or wave off.

### Step 5 - Queue the send

Whatever the checks found, the pass ends the same way: one line appended to `company/decision-log.md`, tagged with the department that produced the draft (`[company]` if that was you directly):

```markdown
- 2026-07-20 [sales] QUEUED: send the proposal to Dana at Brightline? - draft at departments/sales/outbox/2026-07-20-brightline-proposal.md, recipient and voice clean, one claim downgraded - options: send as is, edit first, hold - recommendation: send as is [best guess]
```

Flags never gate the queue - a draft with three warnings queues just like a clean one, with its flags named in the context so you decide with open eyes. And when you say "send it," it proceeds, that moment, every time - even past a flag. If the floor was outrun and you send anyway, exactly one warning line notes it, and that is the whole consequence. You are the founder; the laws bind seats, not you. The desk's promise runs the other way too: no agent in your workforce ever sends on its own, at Level 1 Supervised or Level 3 Autonomous alike. The work stops one inch short of the send, structurally, and that inch is yours forever.

**founders-desk** is where the queue gets walked and emptied - "werkforce, decisions" any time, and daily once real sends are flowing.

### Step 6 - Log it

Each pass ends with one line appended to `records/worklog.md`:

```markdown
- YYYY-MM-DD [company] Send guard pass on {what} - receipt: checks run on recipient, claims, and voice, QUEUED in company/decision-log.md, reviewed by {{FOUNDER}}
```

And one line to the master audit log, `records/audit-log.md`, in the pinned shape, timestamped in your HQ timezone (never UTC):

```markdown
- YYYY-MM-DD HH:MM [send] [send-guard] [company] pre-send pass on {what}, queued for founder - company/decision-log.md
```

The queue line, the audit line, the warnings, and the lesson all stay on the record for good - a year from now you can see every send that went out and every claim that got walked back before it did.

## Do this now

1. Open `company/business-model.md` and read "What we can deliver today" - those three lists are the floor every outbound claim gets measured against. Blank? Run **business-model** this week.
2. Take the next thing you were about to send - there is always one - and say "check this before I send."
3. Watch the pass run, read your queue line, and make the call.

Homework: run the pass on the last message you already sent. If it would have caught something, you just learned what this desk is for - and the lesson line goes in `records/improvements.md` either way.

Next: install **founders-desk** if you have not - the queue this desk fills is only useful if you have a desk where it empties.
