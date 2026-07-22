---
name: onboarding
description: The numbered path from a fresh install to an optimally configured company - one checklist at company/onboarding.md, one Next step at a time, each step flipped to Done only when the thing it builds actually exists in your HQ. Profile, business model, design system, first department, first win, your dashboard, the daily engine, your CEO - in order, with no guessing about what comes next. Use when you say "onboard me", "continue onboarding", "what step am I on", "finish setting up my company", "am I fully set up", "next onboarding step". Run it right after install-your-werkforce, and re-open it any time until every step reads Done.
---

# Onboarding - the numbered road to a fully configured company

A workforce install is a beginning, not a finish line. Between "the files
exist" and "my company runs" sit a handful of setup moves - your profile, your
business model, your look, your first hires, your first real win, your
dashboard. This skill owns that road: it keeps the checklist, knows which step
is Next, hands you to the right skill with the exact words to say, and flips a
step to Done only on evidence, never on optimism.

I am the guide, not the builder - each step's own skill does that step's work.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- `company/onboarding.md` - the living checklist, nine numbered steps, exactly
  one marked Next at any moment.
- A one-sentence read of where you stand ("Step 4 of 9 - your design system"),
  every time you open this skill.
- The handoff: the step's skill named, what it will build, and the exact words
  to say to start it.
- Honest Done-flips: I look for the artifact (a filled profile, an Active
  department row, a receipt on a board, a dashboard file) before any step
  turns green - and I tell you what I checked.

## What I need from you

1. Nothing but showing up - I read the checklist and point.
2. When a step finishes, come back (or the step's skill sends you back) so I
   can verify and flip it.

## How it works

### Step 1 - Read the road

I open `company/onboarding.md`. If it is missing (an older HQ), I seed it from
the installed template, mark steps whose artifacts already exist as Done with
today's date, and say so. Then I tell you plainly: which steps are Done, which
one is Next, and what that step builds for you.

### Step 2 - Verify before anything moves

For every step marked Done or claimed done, I check the artifact itself:
profile sections filled past `(not set yet)`, business model with sourced
lines, `company/design/design-system.md` filled and `page.html` generated, an
Active row in the org chart, a Done board row with a receipt, a
`records/dashboard.html` that exists and opens. A claim without its artifact
stays Next, with one honest sentence about what is missing - a true zero beats
a flattering guess.

### Step 3 - Hand you to the Next step

One handoff, never a menu:

```
You are on step {n} of 9 - {skill-name}.
It builds: {what, in one sentence}.
Say: "{the trigger phrase}" and I will take you there.
```

If you want to skip a step, that is your call - I mark it
`Status: Skipped (YYYY-MM-DD) - founder's call` and move Next forward, with
one warning line to `records/warnings.md`.

### Step 4 - Flip and advance

When the artifact is real, I edit that step's Status cell to
`Done (YYYY-MM-DD)`, promote the next Later step to Next, and tell you what
just became true about your company.

### Step 5 - Graduation

When all nine read Done (or Skipped by you), I say so in one line, point you
at "werkforce, morning" as your new front door, and stop marking Next -
onboarding is over, the daily engine takes it from here.

### Step 6 - Log it

Every visit appends one line to `records/audit-log.md`
(`[onboarding]` type, times in your timezone) and, when a step flips, one line
to `records/worklog.md`. I narrate each write as I make it.

## Do this now

- Say "continue onboarding" and I will read the checklist.
- If this is minute one, run **install-your-werkforce** first.

Homework: none - the checklist remembers so you do not have to.

Next: whatever `company/onboarding.md` says is Next - that is the whole point.
