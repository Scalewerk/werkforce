# The brand interview - what to ask, in what order

The interview door of Step 1. Use this when the member has no brand to import
and does not want to take a preset off the shelf, and use it as a **checklist**
even when they do - an imported brand with three of these unanswered is a brand
that will run out of answers halfway through the first page.

Two movements, in this order. Meaning first, then appearance. A palette chosen
before the strategy is a palette with no argument behind it, and the member
cannot tell you it is wrong because nothing was claimed.

**Nothing here generates an image.** The taxonomy below comes from a brand-kit
generator, but every panel is used as a *question*, and the answers land in
`company/design/design-system.md` as words and values. This skill produces one
system file and one HTML template - no logos, no mockups, no renders.

---

## Movement 1 - Brand strategy, before a single color

Nine prompts. Ask them conversationally, not as a form; two or three sentences
back on each is plenty. Record the answers in the system file's Voice section,
because they are what every later argument is settled against.

1. **Category** - what kind of thing is this, in the words a stranger would use?
2. **Audience** - who is on the other side of the page, and what do they already
   believe when they arrive?
3. **Product function** - what does it actually do, mechanically?
4. **Emotional promise** - what should the reader feel that a competitor's page
   does not make them feel?
5. **Cultural position** - insider or outsider? Establishment or challenger?
6. **Trust level** - how much does this page have to *prove* before it is
   believed? A regulated or high-ticket offer answers this very differently
   from a hobby product, and the answer sets how loud the design may be.
7. **Visual world** - what does this brand's world look like, in objects and
   places rather than adjectives?
8. **Symbolic metaphor** - what is the one idea a mark could carry?
9. **What the brand should avoid** - the single most useful question in the set,
   and the one members answer fastest.

The visual system must be based on meaning. Do not pick symbols or colors at
random and reverse-engineer a reason.

**Starting points for prompt 8**, when the member is stuck. Offer as prompts,
never as an answer:

| Category | Core ideas | Symbol logic |
|---|---|---|
| Developer tool | building, speed, precision, control | cursor, frame, bolt, scaffold, grid |
| AI assistant | delegation, intelligence, clarity | spark, orbit, signal, path, node |
| Security | protection, vigilance, boundary | shield, eye, seal, protected core |
| Voice / audio | sound, rhythm, command, flow | waveform, mic, orb, speech path |
| Compliance | trust, order, rules, protection | seal, badge, document, shield |
| Luxury / editorial | taste, material, ritual, restraint | monogram, seal, paper, emboss |
| Productivity | focus, momentum, clarity | path, check, block, calendar, light |

---

## Movement 2 - The nine panels

A complete brand system covers nine areas. Walk them in order; each one names
what it fills in `company/design/design-system.md`. Where the member has nothing,
the answer is `(not set yet)` in the file - **a partial system that is honest
beats a complete one that is invented.**

Panels 1, 2, 7, and 8 do not compile into CSS. Ask them anyway: they are where
the member says out loud what the brand is, and the answers decide arguments in
every later panel.

| # | Panel | What to ask | Lands in |
|---|---|---|---|
| 1 | **Logo cover** | Is there a wordmark or symbol today? Who made it, and is it settled or in play? | Recorded, with its source named |
| 2 | **Logo construction** | Why does the mark look like that - what is its geometry or negative-space idea? If there is no reason, say so. | Recorded; guards against a later redesign losing the idea |
| 3 | **Digital application** | Where does this brand appear on a screen - app header, dashboard, terminal, a document like this one? Which of those matters most? | Layout rules; which surface the template is optimised for |
| 4 | **Brand essence** | One line a stranger could repeat back. Not a slogan - a sentence. | Voice on the page |
| 5 | **Color system** | One color the member owns. Then: what is the paper, what is the ink, what is the one accent? | Palette |
| 6 | **Typography** | One face for headings, one for body, one for labels and code - and which of the three carries the personality. | Type |
| 7 | **Physical application** | Does this brand exist on anything you can hold - card, badge, packaging, signage? | Recorded; a brand that lives on paper constrains the palette |
| 8 | **Image direction** | What kind of pictures belong here, and which are instantly wrong? "None" is a complete and common answer. | Recorded as direction; **no images are generated** |
| 9 | **System detail** | The small repeating parts - chips, badges, input fields, code blocks, status pills. Which does the member's work actually use? | Components |

### Panel 5, in practice - the color discipline

Color is scarce. Ask for **one** color the member owns, then build around it:
a canvas, an ink, one accent, and a hairline. Three rules to hold while you do:

- **Never pure `#000000`** for text or background. Off-black on warm paper, or a
  near-black substrate - pure black is a screen artifact, not a color choice.
- **One accent, not three.** A second accent is almost always a decision the
  member has not made yet.
- **Warm or cool, not both.** A cool gray dropped into a warm neutral scale
  reads as a defect even to someone who cannot name what is wrong.

Every pair the member ends up with is checked against the 4.5:1 body contrast
floor before it goes in the file - measured, not eyeballed, and in both themes.

### Panel 6, in practice - the type

Whatever faces the member names, the compiled template uses **system stacks
only**: no webfonts, no external requests. If their brand face is a licensed
webfont, the template approximates it and says so in a comment, and the member
is told at the preview rather than discovering it later. See the
honest-approximation rule in `references/presets.md`.

---

## Closing the interview

Read back the palette, the type, and the three lines of visual voice in the
member's own words before compiling anything. Then compile, open the preview,
and ask for the verdict. Only their yes makes it the company look.

## Provenance

The nine strategy prompts and the nine-panel taxonomy are adapted from
`skills/brandkit/SKILL.md` in the read-only public clone of
`https://github.com/leonxlnx/taste-skill` at commit `e988add` (2026-07-23) -
its "BRAND STRATEGY FIRST" section and its "DEFAULT 3 x 3 PANEL SYSTEM", the
structure a brand kit is built to cover. The source is an image-generation
skill; only its structure travels, and the image generation does not.
