---
name: design-system
description: Give your company one look that every deliverable wears - a design system at company/design/design-system.md (palette, type, layout, components) plus the house page template company/design/page.html that every rendered deliverable and your dashboard are built from. If you already have a brand or design system, I import it faithfully; if you do not, I interview one out of you in minutes and show you the result in your browser. Use when you say "set up my design system", "make my deliverables look good", "import my brand", "change my company's look", "update my colors", "my pages look off". Run it as its onboarding step, and again whenever your brand changes.
---

# Design system - one look, every page

Your workforce ships finished things, not raw notes - every deliverable leaves
the building as a polished HTML page, and every page should unmistakably look
like YOUR company. This skill builds the single authority for that look and
compiles it into the template every rendering skill copies. Set it once and
the dashboard, landing pages, reports, and outbox deliverables all match
without anyone thinking about it again.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- `company/design/design-system.md` - the living authority: Palette, Type,
  Voice on the page, Layout rules, Components. Every filled value names its
  source ("from my brand guide", "founder's pick").
- `company/design/page.html` - the generated house template: one
  self-contained HTML file, inline CSS, no external requests, elite spacing
  and hierarchy, readable on a phone. Rendering skills copy and fill it.
- A preview page in your browser before anything is final - you approve the
  look, or we adjust.

## What I need from you

1. Either your existing brand (a style guide, a website URL, a logo folder -
   anything real), or ten minutes to answer taste questions.
2. Your yes on the preview - changing your company's look is your call.

## How it works

### Step 1 - Import or interview

If you have a brand, point me at it - I read it and record its colors, fonts,
and rules into the design system with the source named, changing nothing about
your brand itself. If you do not, I interview: the feeling you want a client
to have opening your page, two or three companies whose materials you admire,
one color you own. From that I propose a palette and type scale - proposed,
labeled as my picks, never presented as your brand until you say yes.

### Step 2 - Write the authority

I fill `company/design/design-system.md` section by section, narrating each.
Unknowns stay `(not set yet)` - a partial system that is honest beats a
complete one that is invented.

### Step 3 - Compile the house template

I generate `company/design/page.html` from the system: header with your
company name, content styles for headings, tables, callouts, and cards, a
footer that stamps the date in your timezone. Self-contained, double-click
openable. I open it (or tell you exactly how) so you see the real thing.

### Step 4 - Your verdict

You say yes, or you say what is off and we adjust. Only your yes makes this
the company look - and re-runs of this skill are how the look ever changes.
Existing rendered pages are not retroactively rewritten; the next render of
each picks up the new template, and the dashboard picks it up on its next
refresh.

### Step 5 - Log it

One line to `records/worklog.md`, one `[skill]` line to
`records/audit-log.md` (your timezone), and - if this was your onboarding
step - I send you back to **onboarding** to flip it Done.

## Do this now

- Say "set up my design system" and either paste your brand source or answer
  the interview.
- Open the preview and judge it like a client would.

Homework: send one rendered page to nobody - just look at it and ask if you
would be proud to.

Next: install **onboarding** to keep the setup road moving, or
**status-report** to see your dashboard wear the new look.
