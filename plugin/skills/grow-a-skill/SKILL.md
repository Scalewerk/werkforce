---
name: grow-a-skill
description: Your workforce learns to build its own tools - any procedure your company keeps repeating becomes a real skill at werkforce/skills/, drafted under your skill standard's four hostile tests, cataloged as a candidate with its residual risk stated honestly, and live in your AI runtime after one re-run of the install command. Use when you say "mint a skill", "grow a skill", "turn this into a skill", "we keep doing this by hand", "add a skill to my workforce", "update my skill catalog", "promote my skill". Run it after the same job has gone well at least twice - teach-your-workforce owns the SOPs a department follows; this mints tools any session can run.
---

# Grow a Skill - the day your workforce builds its own tools

Every company reaches this moment: a procedure gets done once, then again, then a third time with the same shape - and somebody says "we should not be reinventing this." In your company that somebody is you, and the answer is not a longer checklist. It is a minted skill: a file on your own shelf at `werkforce/skills/` that any future session picks up and runs, in your voice, with your paths, without you re-explaining anything.

One boundary before we start, because it saves you a mess later. A playbook SOP is how ONE department does its recurring work - **teach-your-workforce** owns those, and most repeated procedures belong there first. A minted skill is a tool ANY session can invoke by name, department or no department. If you are not sure which you have, it is almost always an SOP - a procedure earns a skill only after a track record.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A new skill at `werkforce/skills/<name>/SKILL.md` - drafted with you, tested against the four hostile tests in `werkforce/skills/STANDARD.md` before it ever touches the shelf
- One new row in `werkforce/skills/CATALOG.md` - lifecycle `candidate`, with an honest residual risk in its own words, never polished away
- The go-live move: your new skill reaches your AI runtime the next time you run the same one-line install command from your install guide - it picks up your own skills too, and a fresh session loads them
- The promotion rule, on the record: `candidate` flips to `proven` only after a reviewed deliverable used the skill - never self-promoted
- One line in `records/worklog.md` - the minting, with a receipt

## What I need from you

1. The repeated procedure, and where it recurred - a board task that came back, a playbook SOP that outgrew prose, an inbox note that keeps reappearing. One-off preferences and single incidents do not mint skills.
2. A name in kebab-case, like `weekly-invoice-pass` or `podcast-shownotes`. The folder, the frontmatter, and the catalog row all carry it identically.
3. Ten minutes to read the draft before it lands. You are the reviewer of record on a new tool entering your company.

## How it works

### Step 1 - Prove it deserves to exist

I ask where this procedure recurred and read the evidence you point at - the board rows, the SOP, the outbox files. Then two checks before a word gets drafted:

- **The shelf check.** I read `werkforce/skills/CATALOG.md`. If an existing minted skill already covers this territory, we patch that one instead of minting an overlapping sibling - two skills claiming the same trigger is a routing defect, and the catalog is how we catch it early.
- **The name check.** I read `os/manifest.md`. If your name collides with an installed pack skill, I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [grow-a-skill] finding - action taken`, tell you in one sentence, and we pick another name - your shelf loads alongside the pack, and a collision would shadow a tool you already rely on.

If the recurrence evidence is thin, I say so plainly and we proceed anyway if you want - one warning line, your call. A warning is a flag on the play, never a stopped game.

### Step 2 - Draft it under the four hostile tests

`werkforce/skills/STANDARD.md` shipped with your HQ, and it is the craft bar for everything on this shelf. While we draft, I hold the skill against its four hostile tests - not after, during:

1. **Evidence substitution** - if the skill's proof output disappeared, could the claim still be verified from durable files? If not, the skill does not close anything.
2. **Vague excellence** - could a reviewer prove each of the skill's promised results unmet? If not, tighten the promise until they could.
3. **Scope creep** - does the skill solve an unstated problem or reopen a settled decision? Cut that part.
4. **Self-review** - does the skill approve or grade its own output? It may not; the review triangle applies to skills too.

The draft itself follows one shape, so every skill on your shelf reads the same way:

```markdown
---
name: {{skill-name}}
description: {{What it produces, then when to reach for it - one honest paragraph. Sessions route by this line alone, so it earns real care.}}
---

# {{Skill name}} - {{one-line thesis}}

## When to use
{{The trigger moment, plus one line naming any sibling skill's boundary.}}

## What it produces
{{The exact files or results, with real HQ paths.}}

## Steps
1. {{Each step actionable and falsifiable - a reviewer can say "done" or "skipped" of every one.}}

## What good looks like
{{What separates a strong run from a mediocre one - with contrast, not adjectives.}}

## How we know it worked
{{The concrete observation that proves the result is real - a file that exists, a row that changed, a number that matches its source.}}
```

Skills teach procedure, never facts. Your offer, your prices, your customers live in `company/` where one authority owns each - a minted skill points at those files, it never copies them. And one hard line regardless of anything else: no skill enters this shelf, in any lifecycle state, that auto-approves work, closes its own tasks, bypasses a reserved decision, or reveals credentials. When a draft carries one of these, I flag it in one sentence, append one dated line to `records/warnings.md` as `- YYYY-MM-DD [grow-a-skill] finding - action taken` plus one lesson line to `records/improvements.md`, and we cut or rewrite that part before I write the file - I never write it on my own initiative. If you direct the write as-is, it proceeds with the warning on the record - your company, your call.

You read the draft. When you are satisfied, I write `werkforce/skills/<name>/SKILL.md` - the shelf is the staging area, so nothing is live yet.

### Step 3 - Catalog it as a candidate

One new row in `werkforce/skills/CATALOG.md`, edited in place per its own comment - this file is the living index of what your workforce has minted:

```markdown
| {{skill-name}} | {{what it does, one line}} | candidate | {{what it does not cover yet, in plain words}} |
```

The last column is the one that keeps this shelf trustworthy. An honest residual risk names a real current limitation - "untested on real client data", "assumes the board exists", "drafts only, sending stays with the founder". An empty or cosmetic risk on a brand-new skill is a defect, not a compliment. A true zero beats a flattering guess, and the same law covers risks: honest beats polished, every time.

### Step 4 - Take it live

Your AI runtime discovers skills at session start, from the folders the installer fills. So going live is two moves you already know:

1. Run the same one-line install command from your install guide - it copies the pack AND everything on `werkforce/skills/`, your minted skills included.
2. Start a fresh session. The new skill is now invocable by name, like any other.

Until you do this, the skill sits safely on the shelf - written, cataloged, and inert. That is by design: nothing your workforce mints acts before you have installed it with your own hands.

### Step 5 - The proven flip comes later, and never from me

`candidate` means the skill may guide work. `proven` means a real deliverable used it, an independent seat reviewed that deliverable, and the review is on the record - a review line in a department's `memory.md`, or a **review-desk** verdict, that names the skill. When that exists, the Lifecycle cell flips to `proven` citing the review's date, and one worklog line records the promotion.

What never happens: a skill promoting itself, or me promoting a skill because the draft reads well. Polish is not proof. **review-desk** owns the verdicts that earn the flip. If you direct a flip with no review on the record, it proceeds - your company, your call - with one honest warning line in `records/warnings.md` and one lesson line in `records/improvements.md`, so future-you knows the label was declared, not earned.

### Step 6 - Log it

Before I close, I say what I am recording and where. I append one line to `records/worklog.md`:

```markdown
- {{DATE}} [company] Minted the {{skill-name}} skill - receipt: SKILL.md at werkforce/skills/{{skill-name}}/, CATALOG.md row added as candidate, reviewed by {{FOUNDER}}
```

And one line to the master audit log, `records/audit-log.md`, timestamped in the HQ timezone from `HQ.md` - never UTC - in the shape `os/formats.md` pins (the type is `skill`):

```markdown
- YYYY-MM-DD HH:MM [skill] [founder] [company] Minted {{skill-name}} as candidate - werkforce/skills/{{skill-name}}/SKILL.md
```

You are the reviewer of record - a new tool entered your company today, and you read it before it landed. When the skill later earns its flip, the promotion gets its own worklog line citing the review that earned it.

## Do this now

1. Name the procedure your company has now done at least twice - and say where the evidence lives.
2. Say "mint a skill" and give it a kebab-case name.
3. Read the draft, watch the catalog row land, then run your one-line install command and open a fresh session.
4. Invoke your new skill by name once, on real work, so it has something a review can later stand on.

Homework: open `werkforce/skills/STANDARD.md` and read the four hostile tests once, slowly - then reread your new skill's draft and try to fail it yourself. Anything you catch tonight is a fault no reviewer has to catch later.

Next: install **teach-your-workforce** - most repeated procedures are SOPs before they are skills, and it owns the playbooks where candidates earn the track record that makes minting worth it.
