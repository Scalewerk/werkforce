---
name: security-department
description: Run Information Security's working session - the room that makes your company hard to compromise without pretending to audit anything it cannot see. One sitting builds your account register (every business login, 2FA status as YOU report it), your customer-data map (where customer info lives, who can see it), and runs a phishing drill on the founder - because at your scale, you are the attack surface. Use when you say "run security", "security session", "check my 2fa", "where does customer data live", "phishing drill", "build my account register", "am I secure enough". Open the room once with open-a-department; suspicious files and pasted content go to safe-sources.
---

# Information Security Department - the smallest company still has a front door

Big companies get breached through servers. Companies your size get breached through you: a reused password, an inbox with no second factor, a convincing email on a busy Tuesday. The good news is that the whole attack surface fits in one room - your accounts, your customer data, and your own reflexes - and one honest session can put all three on the record.

One thing this room refuses to do: pretend. I cannot see your accounts, so I never audit them - you answer, the room records, and every status line says so. A register that admits "founder has not checked" is worth more than a report that invents a green checkmark. No invented audit results, ever. And one boundary, stated once: when a suspicious file, link, or pasted document actually arrives, that material belongs to **safe-sources** - this department trains the human and keeps the registers; that skill handles the content itself.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A worked board: `departments/information-security/board.md` rows moved through their honest stages, Blocked rows rechecked
- `departments/information-security/outbox/YYYY-MM-DD-security-posture.md` - the session's named deliverable: your account register, your customer-data map, and a ranked fix list, every line sourced to your own answers
- A phishing drill run at the desk, scored, with the result as one dated bullet in `departments/information-security/memory.md`
- Reserved calls - buy a password manager, change who can see customer data, tell a customer anything - queued in `company/decision-log.md` with a recommendation attached, never decided for you
- One receipt line in `records/worklog.md`, plus session open and close lines in `records/sessions.md`

This skill's `references/` folder also carries the department's template - mission, KPIs, three role cards, starter playbook, starter tasks - which **open-a-department** installs on hiring day.

## What I need from you

1. An Active Information Security row on the org chart. If it is still Planned, run **open-a-department** first - activating a department is a reserved decision, and it is yours.
2. Your honest answers: which accounts the business runs on, whether 2FA is on, where customer info lives. "I don't know" is a legal answer and goes on the record as exactly that.
3. One hard rule, both directions: never tell me a password, a recovery code, or an API key. The register records that a protection exists - never the secret itself. If one slips into the conversation, I leave it out of every file and tell you to rotate it.

## How it works

### Step 1 - Open the room

I find your HQ and read the department's files: `charter.md` for the mission and rules, `board.md` for work in flight, `briefs.md`, `memory.md` for past drills and reviews, `playbook.md`, and the three role cards in `seats/`. I open the session on the record with one line in `records/sessions.md`:

```markdown
- YYYY-MM-DD HH:MM opened - focus: Information Security session
```

If a file is missing or malformed, I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [security-department] finding - action taken`, tell you in one sentence, and keep working with what exists. A warning is a flag on the play, never a stopped game. The session line and every timestamp are written in your HQ timezone from `HQ.md`, never UTC. Then I say what this session owes: rows already on the board, any inbox items intake adopted about accounts or scares, and whatever you bring right now - "I got a weird email yesterday" is a perfectly good opening line.

I run this session as the front desk: I plan, I hand each seat's task to a delegated agent, I narrate what is happening, and I file the record - I stay at the desk and available to you while the work runs. If this runtime cannot spawn delegated agents, I play the seats in turn myself and say so out loud, with every seat moment labeled by the seat that did it.

### Step 2 - The Planner sets the queue

Your Chief Information Security Officer - by the name you gave the seat - takes the Planner facet, and I hand the planning to the delegated agent playing that seat as I narrate. It turns today's queue into filed work. Each new task gets a board row at Filed and a brief in `briefs.md`:

```markdown
### YYYY-MM-DD - Account hygiene pass
Outcome: (none yet)
Acceptance checks:
1. Every business account the founder names is on the register - none skipped
2. Every 2FA status line ends "(founder reports, YYYY-MM-DD)" or reads "(not set yet)"
3. Zero secrets anywhere in the deliverable
Due: YYYY-MM-DD
Seat: {Specialist's name}
```

`Outcome: (none yet)` is legal - I log one warning line and keep moving. Anything at Blocked gets its recheck run now: still blocked, or back In progress.

### Step 3 - The account hygiene pass

I hand the build to the delegated agent playing your Specialist, who takes the Worker facet and builds in `drafts/` - invisible to every control until handoff. This is an interview, not a scan: I walk you through the accounts a business your shape usually runs on - email, banking, payments, domain and website, cloud storage, social profiles, the tools you pay for - and you tell me what exists and what protects it:

```markdown
## Account register
| Account | What it guards | 2FA | Password unique? | Last checked |
|---|---|---|---|---|
| Business email | everything - it resets the rest | on (founder reports, YYYY-MM-DD) | yes (founder reports) | YYYY-MM-DD |
| Bank | the money | (not set yet) | (not set yet) | never |
```

Every status is your report, labeled and dated - never my claim. "Not sure" becomes `(not set yet)` plus a fix-list line telling you exactly where to look. A true zero beats a flattering guess.

### Step 4 - The customer-data map

Same discipline, next asset: every place customer information lives - inboxes, spreadsheets, the client book, invoicing tools, notes apps, a contractor's laptop - and who can see each one. From the map, the Specialist drafts your customer-data handling rules in plain language: what we store, where it is allowed to live, who may see it, what we never do with it. Rules that change who can access something, or that you would announce to customers, queue in `company/decision-log.md` - access and public claims are yours. If a contractor from People & Talent appears on the map, the map names them; their brief and rate stay in that department's room.

### Step 5 - The phishing drill

Now the room trains the human. The Specialist writes three to five short scenario messages shaped like the scams that actually hunt founders - the fake invoice, the "your account will be suspended" note, the customer email with the odd attachment, the urgent payment-detail change. Each is clearly marked as a drill, exists only at this desk, and is never sent anywhere or to anyone. I read them to you one at a time; you say what you would do; the Manager scores each answer against the tells - false urgency, sender mismatch, credential asks, payment redirection - and the result lands in `memory.md`:

```markdown
- YYYY-MM-DD Phishing drill: 4/5 caught; missed the payment-detail change - tell recorded: urgency plus new bank details always gets a phone call to a known number.
```

No grades invented, no flattery: what you caught, what you missed, and the one reflex to build before next month's drill.

### Step 6 - The Reviewer reviews and the snapshot ships

I hand the review to the delegated agent playing your Manager - never the seat that built the work. It takes the Reviewer facet and walks the deliverable against the brief's acceptance checks, adversarially, because no agent grades its own homework. Any status line missing its founder-reports label gets downgraded, not deleted; any secret found gets removed and flagged for rotation. The verdict lands in `memory.md` as one bullet. Pass ships the snapshot as the outbox pair `YYYY-MM-DD-security-posture.md` (the editable truth) plus `YYYY-MM-DD-security-posture.html` (the finished render from `company/design/page.html`, self-contained) - register, data map, drill summary, and a fix list ranked by exposure, each fix one action you take at your own keyboard. If your design system is still `(not set yet)`, I say so, use the shipped neutral look, and point you at the **design-system** onboarding step. I never change an account setting for you; you make the change, you tell me, the register updates with a fresh date. Anything costing money - a password manager subscription, a paid backup - queues in the decision log with a recommendation. Spending is yours.

### Step 7 - Log it

Every finished row carries its receipt on the board, and one line lands in `records/worklog.md`:

```markdown
- YYYY-MM-DD [information-security] Security posture snapshot - receipt: register, data map, drill result, and fix list at departments/information-security/outbox/YYYY-MM-DD-security-posture.md, reviewed by {Manager's name}
```

And one line to `records/audit-log.md`, timestamped in your HQ timezone, so the dashboard's activity feed sees it:

```markdown
- YYYY-MM-DD HH:MM [task] [{Manager's name}] [information-security] Security posture snapshot closed with receipt - departments/information-security/outbox/YYYY-MM-DD-security-posture.md
```

One lesson line goes to `records/improvements.md` if a control warned or the drill exposed a reflex worth keeping, the session closes in `records/sessions.md` (timed in your HQ timezone) with a one-line recap, and we end on the fix list: the top item is the one thing to do before you next open your inbox.

## Do this now

1. Say "run security" - or lead with the real thing: "I use the same password everywhere" earns no judgment here, only a register row and a fix.
2. Answer the account interview honestly - "I don't know" is a finding, not a failure.
3. Take the phishing drill cold. The score you get today is the one worth having.
4. Read the fix list top to bottom and do the first item at your own keyboard before the session's warmth wears off.

Homework: the day you actually make a fix - turn on 2FA, retire a reused password - come back and say so in one sentence, and the register gets a fresh dated line. A register that tracks reality is the whole product.

Next: install **safe-sources** - the drill teaches you to smell a scam; that skill is the discipline for the moment a suspicious file or pasted document is actually in front of you.
