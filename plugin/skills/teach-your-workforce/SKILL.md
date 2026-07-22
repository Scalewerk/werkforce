---
name: teach-your-workforce
description: The way you do the work becomes the way your workforce does the work - this skill interviews the "how I do it" out of your head and writes it into a department's playbook as a numbered SOP, marked (candidate) until a real review cites it in a passed deliverable, then flipped to (proven) with the evidence named. It also prunes SOPs that have gone stale, with a dated note so nothing learned is lost. Use when you say "write an SOP", "teach my workforce", "add this to the playbook", "document how we do this", "promote this SOP", "this SOP is stale". Run it after any task where you explained the same steps twice - grow-a-skill mints tools; this writes the SOPs a department follows.
---

# Teach Your Workforce - how "the way I do it" becomes the way it gets done

Right now the best procedures in your company live in one place: your head. You know the order the steps go in, the check that catches the usual mistake, the thing you always do before you hit save. Every time a seat does that work without knowing what you know, it does a worse version - and every time you explain it live, you pay the teaching cost again. A playbook SOP is that explanation paid once: numbered, short, sitting in `departments/<slug>/playbook.md` where the seats that need it read it before they work.

Two boundaries keep this clean. An SOP is how ONE department does its recurring work - it lives in that department's playbook and belongs to that department, full stop. A minted skill is a tool ANY session can invoke by name; **grow-a-skill** owns those, and most repeated procedures are SOPs long before they earn minting. And a pattern - a play that worked once, with its evidence - goes to **playbook-library** in `company/playbooks.md`; an SOP is not a war story, it is standing instructions.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A new numbered SOP in `departments/<slug>/playbook.md` - one short paragraph in the exact playbook shape, ending `(candidate)`
- The promotion rule enforced on the record: `(candidate)` flips to `(proven)` only when a review in that department's `memory.md` cites the SOP in a passed deliverable - the flip names the review's date
- Stale SOPs pruned honestly: the retired instruction preserved as a dated line in `departments/<slug>/memory.md` before it leaves the playbook, so the learning survives the cleanup
- One line in `records/worklog.md` for every SOP written, promoted, or retired - with a receipt

## What I need from you

1. The department whose playbook this belongs in. One SOP, one owner - if the procedure spans departments, we pick the one that runs it most and the others reference it.
2. You, talking through how you actually do it - out loud, in order, including the part you think is too obvious to mention. That part is usually the SOP's best sentence.

## How it works

### Step 1 - Find the playbook

I read `company/org-chart.md` and the department's `playbook.md`. If the department is not Active yet, that is a hiring question - I point you at **open-a-department** and stop there for that row; an SOP with no seats to follow it teaches nobody. If the playbook already has an SOP covering this territory, we improve that one instead of writing an overlapping sibling - two SOPs claiming the same job means the seats guess which to follow, and guessing is the thing playbooks exist to end.

If the playbook file is missing or has drifted from its shape, I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [teach-your-workforce] finding - action taken`, tell you in one sentence, and keep working - re-seeding the file or writing around the drift, your call. A warning is a flag on the play, never a stopped game.

### Step 2 - Interview the procedure out of you

You talk, I ask. Not "describe your process" - specific questions until the procedure is falsifiable:

- What triggers this work - what arrives, or what date comes around?
- What are the steps, in the order you actually do them - not the order that sounds tidy?
- What is the mistake this procedure exists to prevent, and which step catches it?
- What does finished look like - the file, the row, the state a Reviewer could check?
- What do you do when the normal path fails?

I push hardest on the vague spots. "Make sure it looks good" is not a step; "read it once aloud and cut any sentence you stumbled on" is. Every step has to be something a Reviewer can later say "done" or "skipped" about - because a review is exactly what this SOP will one day face.

### Step 3 - Write it as a candidate

The playbook has one shape and I keep it: an H1, one intro sentence, then a numbered list of SOPs, one short paragraph each, each ending `(candidate)` or `(proven)` - never restructured into headings. The new SOP takes the next number:

```markdown
4. {{SOP name}}: {{trigger, then the steps in order, then what finished
   looks like and who checks it - one tight paragraph a seat can follow
   without asking you anything}}. (candidate)
```

`(candidate)` is not a demotion; it is the truth. This SOP came from your head, not from evidence - it has guided zero reviewed deliverables so far, and the marker says so. The seats follow candidates exactly as they follow proven SOPs; the marker only tells everyone how much the instruction has been tested. You read the paragraph back, we tighten it until you would trust a new hire with it, and I edit it into `playbook.md` in place - a LIVING file, so the named list changes and nothing else does.

### Step 4 - The proven flip is earned, never declared

`(proven)` has exactly one door: a review record in that department's `memory.md` - the dated bullet **review-desk** or the department's Reviewer writes when a deliverable passes - that cites this SOP by name or number. When that line exists, I flip the marker in place and the SOP's paragraph gains the citation:

```markdown
4. {{SOP name}}: {{the paragraph}} - proven by the {{DATE}} review of {{task}}. (proven)
```

What never earns the flip: the SOP reading well, the SOP being old, or me liking it. Polish is not proof, and age is not evidence. If you direct a flip with no citing review on the record, it proceeds - your company, your call - with one warning line in `records/warnings.md` and one lesson line in `records/improvements.md`, so future-you knows this marker was declared, not earned. And when a review FAILS a deliverable that followed an SOP, that is signal too: the SOP stays `(candidate)` or drops back to it, and the fix goes into the paragraph before anyone follows it again.

### Step 5 - Prune what has gone stale

A playbook that only ever grows becomes a playbook nobody reads. On any pass - or when **operations-department**'s audit flags staleness - we walk the list and ask of each SOP: has the work changed underneath it, does anything still trigger it, did a newer SOP replace it? For one that has to go, the learning is preserved before the instruction leaves:

1. One dated line to `departments/<slug>/memory.md`: `- {{DATE}} Retired SOP {{n}} ({{name}}) - {{why, and what replaced it if anything}}.`
2. The SOP comes out of `playbook.md` and the list renumbers, staying a clean numbered list.
3. One line to `records/worklog.md` recording the retirement with the memory line as its receipt.

Retiring an instruction is not deleting work - the deliverables it produced stay wherever their receipts say, and the memory line keeps the instruction findable forever. An SOP that is merely doubtful gets a gentler touch: the paragraph gets corrected in place, and the marker drops to `(candidate)` until a review re-earns it.

### Step 6 - Log it

Every SOP event gets one line in `records/worklog.md`:

```markdown
- {{DATE}} [<slug>] Wrote SOP {{n}} ({{name}}) as candidate - receipt: departments/<slug>/playbook.md, interviewed from {{FOUNDER}}, reviewed by {{FOUNDER}}
- {{DATE}} [<slug>] Promoted SOP {{n}} to proven - receipt: cited by the {{DATE}} review of {{task}} in departments/<slug>/memory.md
```

And one line to the master audit log, `records/audit-log.md`, for each event, with the time in your HQ timezone (never UTC):

```markdown
- YYYY-MM-DD HH:MM [skill] [{{FOUNDER}}] [<slug>] Wrote SOP {{n}} ({{name}}) as candidate - departments/<slug>/playbook.md
- YYYY-MM-DD HH:MM [skill] [<slug>] Promoted SOP {{n}} to proven - departments/<slug>/memory.md
```

You are the reviewer of record on a new SOP - it is your procedure, written down, and you read it before it landed [did it]. The promotion line answers to a different authority: the review that earned it, named and dated, so anyone auditing the playbook can walk from the marker to the evidence in two hops.

## Do this now

1. Name one piece of work you have explained more than once, and the department that does it.
2. Say "write an SOP" and talk me through how you actually do it - obvious parts included.
3. Read the candidate paragraph back and tighten it until a new hire could run it cold.
4. Open the department's playbook and count the markers - every `(proven)` should trace to a review, and today's addition honestly says `(candidate)`.

Homework: next time that department runs this work, have the seat follow the SOP exactly as written and note where it had to improvise - every improvisation is either the SOP's next edit or the review evidence that earns its flip.

Next: install **grow-a-skill** - when an SOP has gone proven and the same procedure starts showing up outside its department, that is the track record that makes minting it as a real tool worth doing.
