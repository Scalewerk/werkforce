---
name: company-profile
description: Build the one file your whole workforce reads before it writes a word - your company profile. Who you are, what you sell, who it is for, how you sound, and what you can prove, captured once so every department works in YOUR voice and you never re-explain your business. Use when you say "set up my company profile", "build my profile", "update my profile", "my offer changed", "make it sound like me", "update my voice", or "fix my proof". Run this right after install-your-werkforce, and again any time your offer, audience, or voice shifts.
---

# Company Profile - teach your workforce who it works for

A workforce without a profile writes generic. Generic emails, generic posts, generic plans - work you would never sign your name to. This skill fixes that at the root: one file, `company/profile.md` in your HQ, that every department reads before doing any work. Your offer, your audience, your tone, your proof, written down once.

You answer short questions, I write the file, and from then on the whole company sounds like you - every seat, whether it is the Planner planning a brief, the Worker doing the work, or the Reviewer reviewing it, reads this file first. Your workforce remembers because the files remember. One boundary: this file owns your brand - the numbers, your ICP detail, offer ladder and pricing, and unit economics, live next door in `company/business-model.md`, owned by the **business-model** skill.

## Personalization

This IS the skill that builds your profile, so there is nothing to load first. I find your HQ - the `werkforce/` folder in the current folder if one exists, otherwise `~/werkforce/` - and work on `company/profile.md` inside it. If there is no HQ yet, **install-your-werkforce** builds the full headquarters and hands back to me; or I can create just enough right now - the `company/` and `records/` folders and your profile - and the rest of HQ catches up when you install it. I never invent facts, numbers, or results about your business - blanks stay blank until you give me something real.

## What you get

- A single `company/profile.md` in your HQ, in the exact shape the format law (`os/formats.md`) names, that every department reads before touching any task
- Your voice locked in writing: tone in three words, phrases you love, phrases that are banned
- Honest "(not set yet)" markers on anything you do not have, so no agent ever invents a result, a price, or a credential in your name
- An update path: the profile is a LIVING file, so a change edits the named field in place - you never re-answer the rest
- One dated line in `records/worklog.md` for every profile session, so nothing about your identity ever changes silently

## What I need from you

1. A few minutes for short questions, asked in small groups - short answers are fine
2. Real answers only; "I don't know yet" is a fine answer and I record it honestly
3. Optional: point me at older notes, bios, about pages, or profile files from other tools, and I will read them and pre-fill your answers so the interview only covers what is missing

## How it works

### Step 1 - Find your HQ

I look for `werkforce/HQ.md` under the current folder; if none exists, HQ is `~/werkforce/`. If there is no HQ at all, I say so in one sentence and offer the choice: run **install-your-werkforce** first for the full build, or let me create just `company/` and `records/` now so the profile has a home today. Either way we keep moving. If HQ looks partial - say the folder exists but `HQ.md` is missing - I append one dated line to `records/warnings.md`, for example:

```
- 2026-07-20 [company-profile] HQ.md missing next to company/ - wrote the profile anyway; install-your-werkforce will finish the tree
```

A warning is a flag on the play, never a stopped game.

### Step 2 - Check for an existing profile

If `company/profile.md` already exists, I read it and show you a short summary - one line per section. You name the sections you want to change and I re-ask only those. The profile is a LIVING file under the format law: I edit the named field in place and touch nothing else, and the session's worklog line records that the change happened - so an update never scrambles what you did not touch. If the profile is missing or mostly "(not set yet)", I run the full interview below.

If you have profile or memory files from other tools you used before, tell me where they live. I read them, pre-fill what I can, and only ask about the gaps.

### Step 3 - The interview

I ask these in small groups, one group per message. Short answers are perfect. Anything already filled in `company/profile.md` - like your name and company name from the install - is skipped; I only ask what still reads (not set yet). If the honest answer is "I don't know yet", I write "(not set yet)" and we move on - a true zero beats a flattering guess.

- **Who we are** - your name and company name if I do not have them yet, what you do in one plain sentence, the company's stage (just starting, first customers, steady revenue, scaling), plus your site and main handles if they exist.
- **What we sell and who buys it** - what you sell in plain words, the transformation someone gets from it, your default call to action, and who you serve with their main pain or goal. (Pricing detail and the full offer ladder belong to `company/business-model.md` - if you start quoting numbers, I will note them and hand them to the **business-model** skill rather than bury them here.)
- **How we sound** - your tone in three words, phrases you love, and phrases you ban.
- **Proof we point to** (skip anything you do not have) - real results you are comfortable citing, by name where you have permission.

### Step 4 - Write the profile

I write `company/profile.md` in the exact shape the format law names - H1 plus five H2 sections, in this order - filling every answer and leaving honest markers on blanks:

```markdown
# {{COMPANY}} - profile
<!-- LIVING file. Fill fields in place as facts arrive; unknowns stay "(not set yet)" - never invented. -->

## Who we are
- Founder: {{FOUNDER}}
- What we do, one plain sentence: {{ONE_SENTENCE}}
- Stage: {{STAGE}}
- Site: {{SITE}}
- Main handles: {{HANDLES}}

## What we sell
- The offer, in plain words: {{WHAT_WE_SELL}}
- The transformation someone gets: {{TRANSFORMATION}}
- Default call to action: {{CTA}}

## Who we sell to
- Who: {{WHO}}
- Their main pain or goal: {{PAIN_OR_GOAL}}

## How we sound
- Tone in three words: {{THREE_WORDS}}
- Phrases we love: {{LOVED_PHRASES}}
- Phrases we ban: {{BANNED_PHRASES}}

## Proof we point to
- {{PROOF_LINE_OR_NOT_SET_YET}}
```

### Step 5 - Read it back

I read the finished profile back to you as a short summary and ask one question: does this sound like you? You flag anything off, I fix that field in place, and the worklog line at the end records the session. You are the reviewer of this file - no agent gets to decide what your company sounds like.

### Step 6 - Log it

I append one line to `records/worklog.md` (creating it with its heading and comment line from the format law if it does not exist yet):

```
- YYYY-MM-DD [company] Company profile set - receipt: profile written and read back, company/profile.md, reviewed by {{FOUNDER}}
```

On an update the line says what moved, so history lives where history belongs - in the ledger, not scribbled over the living file:

```
- YYYY-MM-DD [company] Company profile updated (How we sound) - receipt: field edited in place, company/profile.md, reviewed by {{FOUNDER}}
```

Then I append one line to the master audit log at `records/audit-log.md`, in the shape `os/formats.md` pins - timestamped in your HQ.md timezone, never UTC - and tell you it landed:

```
- 2026-07-20 09:15 [onboarding] [company-profile] [company] Company profile set and read back - company/profile.md
```

From this moment, every department pulls from this file. Update it here anytime and the whole workforce picks up the change on its next task.

## Do this now

1. Say "set up my company profile" and answer the first small group of questions.
2. Keep answers short and true - say "I don't know yet" wherever that is the honest answer.
3. Hear the read-back and confirm it sounds like you, or name the one section to fix.

Homework: open `company/profile.md` tonight and read the How we sound section out loud. If any line is something you would never actually say, tell me tomorrow and we edit just that field.

Next: run **install-your-werkforce** if I built only the minimal folders today - it raises the full headquarters around this profile. If your HQ stands, **onboarding** owns `company/onboarding.md` and points you to the next numbered step - which after the profile is **business-model**, where real numbers go next to this voice (it owns `company/business-model.md`, the profile's numbers sibling), then **design-system** for your company look. And if no department is Active yet, run **open-a-department** - your profile is what its agents will read first.
