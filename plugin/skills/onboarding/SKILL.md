---
name: onboarding
description: The numbered path from a fresh install to an optimally configured company - one checklist at company/onboarding.md, one Next step at a time, each step flipped to Done only when the thing it builds actually exists in your HQ. Profile, business model, design system, first department, your tools connected, first win, your dashboard, the daily engine, your CEO - in order, with no guessing about what comes next, and no question asked without saying what it builds, why now, and whether you can skip it. It asks once how much you want explained, then explains everything at your level. Use when you say "onboard me", "continue onboarding", "what step am I on", "finish setting up my company", "am I fully set up", "next onboarding step". Run it right after install-your-werkforce, and re-open it any time until every step reads Done.
---

# Onboarding - the numbered road to a fully configured company

A workforce install is a beginning, not a finish line. Between "the files
exist" and "my company runs" sit a handful of setup moves - your profile, your
business model, your look, your first hires, your tools, your first real win,
your dashboard. This skill owns that road: it keeps the checklist, knows which
step is Next, hands you to the right skill with the exact words to say, and
flips a step to Done only on evidence, never on optimism.

I am the guide, not the builder - each step's own skill does that step's work.

**I assume nothing about what you already know.** Before I show you the road I
ask one question about how much you want explained, and every step after that
tells you what it builds, why it is next, whether you can skip it and what
skipping costs, and the exact words to start it. You never have to work out
what a question is for.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- `company/onboarding.md` - the living checklist, ten numbered steps, exactly
  one marked Next at any moment.
- One calibration question, asked once for the life of the HQ, that sets how
  much I explain - never what you get.
- A one-sentence read of where you stand ("Step 4 of 10 - your design system"),
  every time you open this skill.
- The handoff: five slots per step - what it builds, why now, whether it is
  skippable and what skipping costs, what it costs you, and the exact words to
  say.
- Honest Done-flips: I look for the artifact (a filled profile, an Active
  department row, a receipt on a board, a dashboard file) before any step
  turns green - and I tell you what I checked.

## What I need from you

1. One answer to the calibration question, the first time only. "Not sure" is
   a real answer and I take it.
2. Otherwise nothing but showing up - I read the checklist and point.
3. When a step finishes, come back (or the step's skill sends you back) so I
   can verify and flip it.

## How it works

### Step 1 - Calibrate, then read the road

**First, calibrate - once per HQ, before the checklist is read aloud.**

I look for an `Explain-level:` line in the header of `company/onboarding.md`.
If it is there, I read it and say nothing about it. If it is absent, I ask:

```
Before I show you the road: how much of this world is already familiar?
There's no wrong answer - it changes how I explain things, not what you get.

  (a) First time in a terminal, and honestly it makes me a bit nervous
  (b) I've poked around - I can follow instructions, don't ask me to debug
  (c) I'm comfortable here - technical background, skip the hand-holding

Not sure? Say so and I'll start with (a). It's easy to speed me up later.
```

Then I write one line into the header of `company/onboarding.md`, directly
under the existing HTML comment, and narrate the write:

```
Explain-level: L1 (set YYYY-MM-DD) - say "explain more" or "go faster" any time.
```

(a) is L1, (b) is L2, (c) is L3. An older HQ whose file has no `Explain-level:`
line is not broken and needs no upgrade - the absence simply means "not yet
asked". This is the only calibration ask in the whole system: **connect-a-tool
reads this stored level rather than asking again.** A user who answered "first
time in a terminal" and is asked the same question eight steps later has been
told the system was not listening.

If this HQ's file is worth one true sentence, this is it, and I say it at L1
before the checklist: **none of these ten steps asks you to use the terminal
for anything beyond typing a sentence to me.** No SSH, no `git clone`, no
package manager appears in any step on this road.

**Then read the road.** I open `company/onboarding.md`. If it is missing (an
older HQ), I seed it from the installed template, mark steps whose artifacts
already exist as Done with today's date, and say so. Then I tell you plainly:
which steps are Done, which one is Next, and what that step builds for you.

**Migration for a nine-row file.** If the checklist has no `connect-a-tool`
row (every HQ installed before this version), I insert it as step 6, renumber
the rows below it, and carry every existing `Status:` cell across verbatim -
nothing is re-opened, nothing is re-verified, nothing is lost. The new row
enters as `Later`, or as `Next` if every step above it already reads Done or
Skipped. I say in one line that I did this and why.

### Step 1a - The level is a reading, not a verdict

A one-time question answered under pressure is a bad instrument, so the level
self-corrects in both directions - and never silently.

| Signal from you | What I do | What you hear |
|---|---|---|
| You ask "what does that mean?" twice | Deepen one level | "I'll slow down and define things as I go." |
| You say "I know" / "skip the explanation" | Lighten one level | "Got it - going faster from here." |
| You use a term correctly before I define it | Stop defining that term only | (nothing - silent, term-scoped) |
| You say "explain more" / "go faster" | Set the level directly | "Set. Say the opposite any time." |

Whenever the level changes I rewrite the `Explain-level:` line with the new
value and today's date. The one silent adjustment is term-scoped and additive:
once you have used a word yourself, I stop defining that word. Level changes
that affect the whole conversation are always announced in one line, because a
system that quietly decides you are a beginner is exactly the condescension
this design exists to remove.

**The level sets wording, never capability.** L1 and L3 walk the identical ten
steps, get the identical artifacts, and are offered the identical choices.
Nothing is hidden from a nervous user "for simplicity", and no step is
auto-skipped on anyone's behalf. Five wording rules make the difference feel
like respect rather than triage:

1. **Never name the level back to the user.** "L1" and "beginner" are internal
   words. You hear "I'll define things as I go", never "you're a beginner".
2. **Ban the reassurance vocabulary.** No "don't worry", "it's easy", "simple",
   "obviously", "just" - each one tells a nervous person that their difficulty
   is unusual.
3. **Define a term once, in-line, then never again.** Not a glossary link, not
   a footnote - a few words in parentheses at first use. This binds every word
   in the copy, including the ones I use about my own machinery: org chart,
   board, department, receipt, daily routine.
4. **Explain the thing, not the person.** "A skill is a set of instructions
   your AI follows" explains a thing. "Since you're new to this…" explains the
   person.
5. **Every explanation is skippable mid-sentence.** "…skip ahead any time" is
   offered once, at the top, and honored instantly.

### Step 2 - Verify before anything moves

For every step marked Done or claimed done, I check the artifact itself:
profile sections filled past `(not set yet)`, business model with sourced
lines, `company/design/design-system.md` filled and `page.html` generated, an
Active row in the org chart, `company/work-inventory.md` written, a Done board
row with a receipt, a `records/dashboard.html` that exists and opens. A claim
without its artifact stays Next, with one honest sentence about what is
missing - a true zero beats a flattering guess.

### Step 3 - Hand you to the Next step

One handoff, never a menu, and always the same five slots:

| Slot | Answers | Omitted when |
|---|---|---|
| **BUILDS** | What will exist afterward, named as a real file or row | Never |
| **WHY NOW** | What this unlocks, or what stays broken without it | Never |
| **SKIPPABLE** | Yes or no - and the exact cost of skipping | Never, including when the answer is no |
| **COSTS YOU** | What you will be asked for, and what to have handy | Never |
| **SAY** | The exact words that start it | Never |

**"Skippable: no" is still a stated answer.** The failure this replaces is
silence, not permissiveness. A step whose answer is "no, in practice" says so
and says why, rather than leaving you to discover it by trying.

**The COSTS YOU slot never invents a number.** I quote a time only when the
step's own skill states one, and I say where it came from ("its own skill says
about ten minutes"). When the step states no time, I say what it asks of you
instead - the decisions, names, or materials - and I do not guess at minutes.

Two escape hatches sit under every step, offered once at the top and honored
at any moment without losing your place: **"what does that mean?"** (defines
the last unfamiliar term) and **"why are you asking?"** (re-states the WHY NOW
slot in more depth).

**Level rendering.** The five slots are constant; only how each is written
changes.

| | L1 - first time | L2 - some exposure | L3 - technical |
|---|---|---|---|
| Slot format | Full sentences, one per slot | Sentences, no term definitions | Compact single line |
| Terms | Defined in-line at first use | Defined only if uncommon | Never defined |
| File paths | Explained as "a file at…" | Shown plainly | Shown bare |
| Reassurance | One true safety fact per step | None | None |
| Length | ~6 lines | ~4 lines | 1-2 lines |

L2 needs no separate copy: it is L1's structure with L3's assumption that
common words land.

**Worked handoff - step 5, at L1:**

```
Step 5 of 10 - your first three hires.

BUILDS    Your first real team. You pick one area of the business -
          marketing, sales, engineering, one of twelve - and give three
          roles a name each, the way you'd name new hires. Afterward your
          org chart (the one file listing every area of your business and
          who is in it) has one row marked Active, three named people in
          it, and their first jobs already written on a board (the list of
          work for that one area, one row per job).

WHY NOW   This is where your workforce stops being files and starts being a
          team with work in front of it. Every step after this one needs a
          team to point at.

SKIPPABLE Not really - and I'd rather say so than let you find out. With
          nothing Active there's no board of work for the daily routine
          (the once-a-day pass where your workforce works those boards) to
          pick up, so the last four steps would have nothing to run on. You
          can open just one department today. One is plenty.

COSTS YOU Three names you like, and one choice of which area to open first.
          No technical decisions in this one - you're choosing who does
          what, not how anything works. Its own skill states no time; it is
          a sitting, not a project.

SAY       "open a department"
```

**The same handoff at L3:**

```
Step 5/10 - open-a-department.
Builds: one org-chart row Planned -> Active, three named seats
  (Planner/Worker/Reviewer), charter, role cards, playbook, live board,
  1-3 tasks Filed.
Why now: everything downstream reads an Active row.
Skippable: load-bearing - no Active row means no board for run-the-day.
Costs: three names plus one department choice; no stated time.
Say: "open a department"
```

**Every step's skippability, decided before you are asked.** Costs are drawn
from each step skill's own description, never invented.

| # | Step | Skippable | Cost of skipping |
|---|---|---|---|
| 1 | install-your-werkforce | No | Nothing else has anywhere to write |
| 2 | company-profile | Yes | Deliverables land in a generic voice and you re-explain your business each session |
| 3 | business-model | Yes | The capability floor is unset, so public claims cannot be checked |
| 4 | design-system | Yes | Rendered pages have no house template to build from |
| 5 | open-a-department | No | With nothing Active there is no board for the daily engine to work |
| 6 | connect-a-tool | Yes | Every skill still runs files-first; you keep pasting in what a connected source would read for you |
| 7 | first-win | Yes | You trust the loop without ever having watched it finish |
| 8 | status-report | Yes | No dashboard; status must be read board by board |
| 9 | run-the-day | Yes | No daily engine - every skill is driven by hand |
| 10 | ceo-seat | Yes | Queued decisions arrive with no evaluation attached |

The two "No" rows are honest about their kind: they are not forbidden, they are
load-bearing. **Your word still governs.** If you want to skip a step - either
kind - that is your call: I mark it `Status: Skipped (YYYY-MM-DD) - founder's
call` and move Next forward, with one warning line to `records/warnings.md`.
What changed is that you learn the cost before choosing, not after.

Step 6 is the one step that is also a standalone skill you will use again:
**connect-a-tool** runs here as a numbered step, and re-runs any time your
toolset changes, for the rest of the company's life.

### Step 4 - Flip and advance

When the artifact is real, I edit that step's Status cell to
`Done (YYYY-MM-DD)`, promote the next Later step to Next, and tell you what
just became true about your company.

### Step 5 - Graduation

When all ten read Done (or Skipped by you), I say so in one line, point you
at "werkforce, morning" as your new front door, and stop marking Next -
onboarding is over, the daily engine takes it from here. The calibration level
stays on the file; skills that explain themselves keep reading it.

### Step 6 - Log it

Every visit appends one line to `records/audit-log.md`
(`[onboarding]` type, times in your timezone) and, when a step flips, one line
to `records/worklog.md`. I narrate each write as I make it.

## Do this now

- Say "continue onboarding" and I will ask one question, then read the
  checklist.
- If this is minute one, run **install-your-werkforce** first.

Homework: none - the checklist remembers so you do not have to.

Next: whatever `company/onboarding.md` says is Next - that is the whole point.
