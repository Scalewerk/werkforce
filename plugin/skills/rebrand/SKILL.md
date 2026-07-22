---
name: rebrand
description: Rename your company or overhaul its voice without losing the thread - the new name lands in every living file, the old one stays visible in the record, and nothing wearing the old brand slips out unflagged. One interview, in-place updates to your profile, HQ, org chart, and business model, a decision line on the record, and a refresh checklist for every artifact still carrying the old name. Use when you say "rebrand", "we changed our name", "new company name", "voice overhaul", "change our brand voice", "we renamed the company", "our positioning changed". Run it the day you decide - before the next thing leaves the building under the old name.
---

# Rebrand - change the name, keep the story

A rebrand done badly is amnesia: the new name goes on the door, the old name keeps showing up in proposals, and six months later nobody can say when the change happened or why. A rebrand done well is a chapter break - the story continues, the record shows exactly where the name changed, and everything the company sends from that day forward wears the new brand on purpose.

Here is the principle that makes it safe: your brand lives in one place. `company/profile.md` is the single home of your name, your voice, and who you serve - every other mention across the HQ is a view of it. So a rebrand is not a thousand edits; it is one change at the source, a handful of living files brought into line, and an honest checklist of everything downstream that still needs a fresh coat. History never gets repainted - old ledger lines keep the old name, and that is the provenance trail, not a mess to clean up.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- `company/profile.md` updated in place - the H1, Who we are, How we sound, and Who we sell to, only the fields that actually changed
- `HQ.md` and `company/org-chart.md` H1s carrying the new company name, nothing else on either file touched
- Brand-name mentions in `company/business-model.md` updated in place - the facts themselves stay exactly as they were
- One DECIDED line in `company/decision-log.md` and one rebrand record in `records/worklog.md` - the chapter break, on the record forever
- A refresh checklist: every outbox deliverable, template, and page still carrying the old brand, each one queued as an `inbox.md` line so tomorrow's intake turns it into real board work
- The old name preserved everywhere history lives - ledgers are never rewritten, and that is the point

## What I need from you

1. What is changing: the name, the voice, the audience - any one of them, or all three.
2. The new version of whatever changes, in your words. I shape it; I do not invent it.
3. Your confirmation before the record changes - a rebrand is your call, and the log will say so.

## How it works

### Step 1 - The rebrand interview

Three questions, and we only go deep on the ones that apply:

- **The name.** Is the company name changing? Old name, new name, and one line on why - the why goes in the record, because in a year you will want it.
- **The voice.** Is how you sound changing? I read the current `How we sound` section back to you and you tell me what is wrong with it now. We rewrite it together - tone, words you use, words you never use.
- **The audience.** Are you now for someone else? If who you sell to shifted, that changes `Who we sell to` in the profile and the wording of `Ideal customer` in the business model.

I write the old and new side by side and read it back in one paragraph: "{{OLD_NAME}} becomes {{NEW_NAME}}; the voice goes from {{OLD_FEEL}} to {{NEW_FEEL}}; the audience {{stays | shifts to X}}." You confirm it or fix it. Nothing gets written until you do.

### Step 2 - Update the living record

Living files edit the named field in place and touch nothing else - that is the law, and a rebrand is where it earns its keep. In one pass:

- `company/profile.md` - the H1 becomes `# {{NEW_NAME}} - profile`; the changed sections get their new content; and `Who we are` picks up one plain sentence of provenance, in your words:

```markdown
# {{NEW_NAME}} - profile

## Who we are
{{WHO_WE_ARE}} Formerly {{OLD_NAME}}; renamed {{DATE}}.
```

- `HQ.md` - the H1 becomes `# {{NEW_NAME}} - Workforce HQ`. Wake phrases, standing orders, everything else: untouched.
- `company/org-chart.md` - the H1 becomes `# {{NEW_NAME}} - Org chart`. No row, no seat, no status changes - a rebrand hires nobody and fires nobody.
- `company/business-model.md` - I update mentions of the old name in place, and if the audience changed, the `Ideal customer` wording with its source noted as `(founder, rebrand {{DATE}})`. The facts - pricing, unit economics, the capability floor - stay exactly as they were. **business-model** owns those; a new name does not change what you can deliver or what it costs.

If a voice overhaul came with no rename, the H1s stay put and only the voice and audience fields move. If any of these files is missing or malformed, I append one line to `records/warnings.md` as `- YYYY-MM-DD [rebrand] finding - action taken`, add a lesson line to `records/improvements.md`, tell you in one sentence, and keep going with the files that exist. A warning is a flag on the play, never a stopped game.

### Step 3 - Sweep for the old brand

Now I search the whole HQ for the old name and sort every hit into three piles:

- **History - leave it.** Ledger files (worklog, decision log, strategy, memory, briefs, old inbox lines, customer histories) keep the old name in their old lines forever. Ledgers are append-only; rewriting them would erase the very trail this skill exists to protect.
- **Generated - just regenerate.** `records/dashboard.html` and any rendered page are derived views, legally overwritten. Nobody hand-edits a render: the next **status-report** run rebuilds the dashboard with the new name, and **branded-pages** re-renders any page from its markdown source. Change the source, regenerate the view - that is the whole trick.
- **Deliverables and templates - flag, never auto-rewrite.** Every file in any `departments/<slug>/outbox/`, every landing page, proposal template, email draft, and minted skill in `werkforce/skills/` that carries the old name gets a checklist entry. I do not rewrite finished work behind your back - a proposal that went out under the old name is a record of what went out; a template you still use is a judgment call about wording, and that judgment is a task for the seat that owns it, not a find-and-replace.

If the voice or name change means the brand look should move too, that is **design-system**'s call - it owns `company/design/`; I flag the design system for its attention rather than editing the palette or page template myself.

I show you the full checklist, sorted by department, before anything else happens.

### Step 4 - Queue the refresh work

Each flagged deliverable or template becomes one line in `inbox.md`, the drop door everything enters through:

```markdown
- {{DATE}} ask: refresh departments/marketing/outbox/{{FILE}}.md - still carries "{{OLD_NAME}}"
- {{DATE}} ask: refresh departments/sales/outbox/{{FILE}}.md - old voice, old name in the closing line
```

An inbox entry owns no fact and moves no work - tomorrow's **run-the-day** intake turns each line into a board row for the right department, briefed and sized like any other task. That is deliberate: a rebrand should not detonate twenty instant edits across your company; it should file twenty honest tasks that get done in priority order by the seats that own them.

One thing gets said out loud here, and it is the only pause in this skill: anything carrying the new brand that goes to a real person outside the company - the renamed site, the announcement, the first proposal under the new name - is a public claim, and public claims are a reserved decision. Yours alone. The refreshed drafts land in outboxes; **send-guard** checks them at the door; you send.

### Step 5 - Log it

The chapter break goes on the record twice, and both lines are permanent:

```markdown
- {{DATE}} [company] DECIDED: rebrand from {{OLD_NAME}} to {{NEW_NAME}} - {{YOUR_REASON}} (re: founder-directed rebrand)
```

appends to `company/decision-log.md`, and

```markdown
- {{DATE}} [company] Rebrand {{OLD_NAME}} -> {{NEW_NAME}} - receipt: profile, HQ, org chart, and business-model mentions updated in place, {{N}} artifacts flagged to inbox for refresh, reviewed by {{FOUNDER}}
```

appends to `records/worklog.md`. And one line to the master audit log, `records/audit-log.md`, stamped in your HQ timezone (the `Timezone:` line in `HQ.md` governs - never UTC):

```markdown
- {{DATE}} {{HH:MM}} [decision] [rebrand] [company] Rebrand {{OLD_NAME}} -> {{NEW_NAME}}, living files updated, {{N}} artifacts flagged - company/decision-log.md
```

You are the reviewer of record - this was your decision, and the log says so. Then I read you the closing picture: what changed, what history kept, and how many refresh tasks are waiting for intake.

## Do this now

1. Say "rebrand" and answer the three questions - name, voice, audience.
2. Confirm the side-by-side before I touch a single file.
3. Read the sweep checklist and watch the refresh lines land in your inbox.
4. Open `company/profile.md` and read it out loud in the new voice - if it does not sound like you, we fix it now, while the session is warm.

Homework: find one artifact on the refresh checklist that a real prospect might see this week, and make its refresh the first task through intake tomorrow - the old name should never be the first impression again.

Next: run **run-the-day** tomorrow morning - intake will turn your refresh lines into board rows, and the new brand starts earning receipts.
