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

**Type lens.** If `os/type.md` exists and names a type other than `business`, I read its vocabulary map and speak this skill's words in that type's words instead - same page mechanics, only the words change. Under `business`, or when `os/type.md` does not exist, nothing here changes.

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

## What not to ship

Your page can be honest, on-brand, and still read as machine-made - and a reader who smells a template stops believing the copy above it. So this skill carries a standing ban list. Every line is mechanical: a reviewer can point at the page and say "there it is" without arguing taste. If one appears in a draft, it comes out before handoff.

**Content.** No placeholder identities - no "John Doe", no "Acme Corp", no invented customer with a stock-photo face. No fake-perfect numbers: `99.99%`, `10x`, a suspiciously round `50%` with nothing behind it. No filler verbs - Elevate, Seamless, Unleash, Revolutionize, Next-Gen, Empower - which say nothing and can be swapped onto any competitor's page. No row of three identical feature cards. No fake product screenshot built out of `div`s. No "Quietly in use at" or "Trusted by" header with no customer you can name. No decorative status dots, no section-number eyebrows, no scroll cues, no invented version footers.

**Layout.** No endless centered sections stacked down the page. No cloned left-text-right-image blocks repeating the same beat. No lifeless perfect symmetry - a page laid out on a ruler reads as a template.

**Typography.** No giant heading sitting on weak tiny subcopy. No more than two type moods on one page. No lazy all-caps standing in for emphasis. No gradient headline used as a shortcut for "premium".

**Density.** No page where every section carries the same weight and the same scale. Vary how dense the sections are, so the page reads as something composed rather than one block repeated down the screen. How much air sits between those sections is not this skill's call - **design-system** owns `company/design/design-system.md`, the spacing cadence lives there, and this page inherits it like every other page in your company.

Nothing here overrides your capability floor or your claim labels - it sits beside them. The floor stops the page from lying; this list stops it from looking like nobody was home.

## How it works

### Step 1 - Read the ground

I read `company/profile.md` for who you are and how you sound, and `company/business-model.md` for the offer, the price, and the capability floor - the "What we can deliver today" lists: Yes (proven), Now (can do on request), Not yet (do not claim). The page may claim from Yes and Now; nothing from Not yet appears on it, ever. If a board brief exists for this page, I work from its acceptance checks. If the profile or business model is missing or `(not set yet)` where I need it, I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [landing-pages] finding - action taken`, ask you the two or three questions that fill the gap, and keep moving. A warning is a flag on the play, never a stopped game.

Then, before anything else gets written, I say the read back to you in one line - who this page is for, what it has to do, and the register it should hold, in a single sentence you can correct in five seconds. If something load-bearing is genuinely missing after reading the ground, I ask **exactly one** question, the one whose answer changes the page most. Never a questionnaire. You are running a business, not filling in a form, and a skill that asks you six things before producing anything is worse than one that states its read and gets moving.

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

### Step 4 - Decide the look, then build the file

Two acts, in that order, and doing them in one pass is what produces the mush the ban list above catalogues. First I write down what the page should look like - the section order and how their density varies, where the eye is meant to land first, which single moment carries the weight, and what the type does. Three or four lines, no markup. You can disagree with that read before a single tag is written, which is the cheapest moment to disagree. Only then does the code get written, and it builds the look that was agreed, not a new one invented at the keyboard.

The copy becomes two files in the owning department's `drafts/` folder - invisible to controls until handoff: the editable `YYYY-MM-DD-<slug>.md` that stays your source of truth, and the `YYYY-MM-DD-<slug>.html` render built from `company/design/page.html`. The build rules: everything inline, so the file works offline by double-click; hierarchy decided before decoration - headline first, call to action unmistakable, everything else visibly quieter; readable on a phone, no sideways scrolling at narrow widths; text contrast strong enough to read in sunlight; no motion for decoration.

Two more build rules, both about what the reader actually meets.

**The first view has to work on a small laptop.** Whatever is on screen before anyone scrolls is the whole page as far as most readers are concerned, so it carries the headline, one line saying what this is, and the action - and not much else. Do not cram four content blocks into the opening screen, and do not spend that space on a giant panel that frames things without saying anything. Check it at a short viewport, not just a tall one.

**If the page moves at all, it moves correctly.** Two rules that are facts about browsers, not preferences: never attach a handler to the window's `scroll` event - it fires every frame, unbatched, and it is the usual reason a page stutters on a phone; use `IntersectionObserver` or CSS scroll-driven animation instead. And never bind a continuously changing input value - a scroll position, a drag, a slider being moved - to something that redraws the page on every tick. Most pages this skill builds need no motion at all, which is the cheapest way to obey both.

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

Both files move from `drafts/` to `departments/<slug>/outbox/` as the `YYYY-MM-DD-<slug>.md` + `.html` pair, and the claim-to-source map goes with them to the Reviewer seat - the desk hands the review to a delegated agent that did not write the page (if your AI runtime cannot spawn one, the desk plays the Reviewer in turn and says so), and **review-desk** runs the adversarial pass. No seat reviews its own page. The reviewer's first job is the claim sweep: every number, quote, name, price, and link on the page traces to the map, and the sweep runs again after any final edit, because edits reintroduce claims. Their second job is the ban sweep: walk "What not to ship" line by line against the built page and name each hit, which is a counting job rather than a matter of opinion. Then the boundary that keeps you safe: putting this page in front of the world is a public claim, and public claims are a reserved decision - yours alone. I draft; you publish. Run **send-guard** before it goes anywhere real, and hand the live page to **seo-basics** when you want strangers to find it.

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
