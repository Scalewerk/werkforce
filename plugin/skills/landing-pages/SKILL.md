---
name: landing-pages
description: One landing page that sells one thing - a single self-contained HTML file with the full conversion spine (headline, problem, offer, proof, price, one call to action, FAQ), written in your company's voice, every claim checked against your capability floor, and it works by double-clicking the file - no builder, no hosting, no subscription. Use when you say "build my landing page", "make a landing page", "I need a sales page", "put my offer on a page", "write my landing page copy", "one page to send prospects". Build the page here; design-system and design-department own the brand look the render fills, and seo-basics tunes discoverability after.
---

# Landing Pages - one page, one reader, one action

Most landing pages fail before the design loads, because they try to say everything to everyone. A page that converts does one job: a specific reader arrives, understands in five seconds what they get, sees proof they can check, and takes one action. Everything else on the page either serves that action or gets cut.

The second failure is hype. "Revolutionize your workflow" sells nothing because nothing in it can be checked. The headline test this skill lives by: if your headline could sit on a competitor's page unchanged, it is not specific enough. We write the outcome your buyer actually gets, put the proof right beside the claim it supports, and never promise past what your business can deliver today.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- One self-contained HTML render - all styles inside it, no outside scripts, fonts, or images it cannot live without - that opens by double-clicking, ready to send as an attachment or hand to any host, with its editable markdown source beside it
- The conversion spine in order: headline, problem, offer, proof, price, one call to action, FAQ - nothing the page does not need
- Copy in your voice from `company/profile.md`, claims held to the capability floor in `company/business-model.md`, proof that is real or absent - never invented, never softened into vagueness
- A claim-to-source map handed to the reviewer, so every number, name, price, and quote on the page traces to something you gave me
- The draft in the owning department's `drafts/`, and the finished page in its `outbox/` as the pair the filing law requires: `YYYY-MM-DD-<slug>.md` (the editable copy, your truth to change) plus `YYYY-MM-DD-<slug>.html` (the self-contained render), with a receipt line in `records/worklog.md` and one line in `records/audit-log.md`

## What I need from you

1. The one thing this page sells and the one action it asks for - buy, book a call, reply, join a list. One page, one action.
2. Your real proof: numbers you can stand behind, results with names attached, testimonials you have permission to use - or the honest word that there is none yet. A page with no proof section beats a page with fake proof, every time.
3. Which department owns this page - usually Marketing, sometimes Engineering. If none is active yet, I warn on the record, build the page anyway wherever you point me, and suggest **open-a-department** so the next one has a proper home.

## How it works

### Step 1 - Read the ground

I read `company/profile.md` for who you are and how you sound, and `company/business-model.md` for the offer, the price, and the capability floor - the "What we can deliver today" lists: Yes (proven), Now (can do on request), Not yet (do not claim). The page may claim from Yes and Now; nothing from Not yet appears on it, ever. If a board brief exists for this page, I work from its acceptance checks. If the profile or business model is missing or `(not set yet)` where I need it, I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [landing-pages] finding - action taken`, ask you the two or three questions that fill the gap, and keep moving. A warning is a flag on the play, never a stopped game.

### Step 2 - Inventory the proof

Before a word of copy, we list what proof actually exists, and each piece gets a claim label: `[checked]` I can see it right now, `[did it]` produced this session, `[best guess]` inferred, `[from memory]` recalled and possibly stale. Only `[checked]` and `[did it]` proof goes on the page - a `[best guess]` number in public is a claim you cannot defend. Testimonials go in verbatim, word for word from the source you show me, with the attribution the person agreed to - never retyped from memory, never tightened up. Urgency and scarcity appear only when the underlying fact is true: a real deadline, a real limit. No manufactured pressure. Anything unverifiable is cut, not hedged - a claim with uncertain provenance is absent, not softened.

### Step 3 - Write the spine

Now the copy, section by section, in your voice:

```
HEADLINE   The specific outcome the buyer gets. Checkable, no hype adjectives.
PROBLEM    The buyer's situation in the buyer's own words - they should nod.
OFFER      What you deliver, for whom, and what makes it yours.
PROOF      Numbers, names, quotes - each placed beside the claim it supports,
           never pooled in a lonely logos-and-stars section.
PRICE      The real number and what it covers. A guarantee only if you honor it.
CTA        One button, one action, stated as what happens next.
FAQ        The 4-6 real objections, answered honestly - including who this
           page is NOT for.
```

I read the draft back to you and we tune it until it sounds like you on a good day, not like a template with your name pasted in.

### Step 4 - Build the file

The copy becomes two files in the owning department's `drafts/` folder - invisible to controls until handoff: the editable `YYYY-MM-DD-<slug>.md` that stays your source of truth, and the `YYYY-MM-DD-<slug>.html` render built from `company/design/page.html`. The build rules: everything inline, so the file works offline by double-click; hierarchy decided before decoration - headline first, call to action unmistakable, everything else visibly quieter; readable on a phone, no sideways scrolling at narrow widths; text contrast strong enough to read in sunlight; no motion for decoration.

The brand look is not this skill's call - **design-system** owns `company/design/` and **design-department** runs that room. If your design system is set, the render copies `company/design/page.html` and fills it, so the page arrives in your colors and type. If the design system is `(not set yet)`, I say so plainly, render with the shipped neutral look - clean, deliberate defaults that will sell - and point you to the **design-system** onboarding step so the next render (and this one, re-rendered) carries your brand without touching a word of copy.

The skeleton every page starts from:

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{{OUTCOME_HEADLINE}}</title>
<style>/* all styles live here - no outside files */</style>
<main>
  <h1>{{OUTCOME_HEADLINE}}</h1>
  <section><!-- problem, in the buyer's words --></section>
  <section><!-- offer, with proof beside each claim --></section>
  <section><!-- price, and the guarantee only if real --></section>
  <a class="cta" href="{{ONE_ACTION}}">{{CTA_TEXT}}</a>
  <section><!-- FAQ --></section>
</main>
```

Then I prove it works the only way that counts: open the file in a browser, read it at phone width and desktop width, and click the button. A page nobody opened is a page nobody checked.

### Step 5 - Hand it off

Both files move from `drafts/` to `departments/<slug>/outbox/` as the `YYYY-MM-DD-<slug>.md` + `.html` pair, and the claim-to-source map goes with them to the Reviewer seat - the desk hands the review to a delegated agent that did not write the page (if your AI runtime cannot spawn one, the desk plays the Reviewer in turn and says so), and **review-desk** runs the adversarial pass. No seat reviews its own page. The reviewer's first job is the claim sweep: every number, quote, name, price, and link on the page traces to the map, and the sweep runs again after any final edit, because edits reintroduce claims. Then the boundary that keeps you safe: putting this page in front of the world is a public claim, and public claims are a reserved decision - yours alone. I draft; you publish. Run **send-guard** before it goes anywhere real, and hand the live page to **seo-basics** when you want strangers to find it.

### Step 6 - Log it

I append one line to `records/worklog.md`:

```markdown
- {{DATE}} [<slug>] Landing page for {{OFFER}} - receipt: outbox/{{DATE}}-{{PAGE_SLUG}}.md + .html, reviewed by {{REVIEWER_NAME}}
```

And one line to the master audit log, `records/audit-log.md`, stamped in your HQ timezone from `HQ.md` (never UTC):

```markdown
- {{DATE}} HH:MM [task] [{{REVIEWER_NAME}}] [<slug>] landing page for {{OFFER}} built, reviewed, filed - departments/<slug>/outbox/{{DATE}}-{{PAGE_SLUG}}.html
```

If the page traced to a board task, the board row moves through Manager review toward Done with that same receipt - and if it ran without a brief, one warning line notes it, and the page ships anyway.

## Do this now

1. Tell me the one thing this page sells and the one action it asks for.
2. Put your real proof on the table - or say plainly that there is none yet, and we will build the honest version.
3. Watch the page get written, built, and reviewed, then double-click the file yourself.

Homework: open the finished file on your phone, read the headline out loud, and ask one question - would a stranger know exactly what they get? If the answer is no, bring it back and we sharpen it in one sitting.

Next: I name the one action your HQ state points to - if `company/onboarding.md` still has open steps, that Next step leads (a **design-system** so this page carries your brand instead of the neutral look). Once the page says something true and your HQ is set, that next action is **seo-basics** - it makes the page findable.
