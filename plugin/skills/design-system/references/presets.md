# Aesthetic presets - the third door

A preset is a **complete, ratifiable starting look** the member can pick instead
of importing a brand or answering the full interview. It is not a second
authority. Picking one does exactly what importing a brand does: it fills
`company/design/design-system.md`, which stays the single authority for that
member's pages, and it only counts once the member says yes.

Three presets ship. Each is a starting point, not a cage - once it is in the
member's system file they can change any value in it, and re-running this skill
is how the look ever changes after that.

## The four house laws every preset obeys

These outrank every detail below. Where a preset's original source conflicted
with one of them, the preset was changed, and the change is named in its
"What did not travel" note.

1. **No external requests.** Self-contained HTML, inline CSS. No webfonts, no
   icon libraries, no remote images, no placeholder-image services. Every type
   stack below is system faces only.
2. **No sideways scrolling.** The technique in Step 3 of the skill applies
   whatever the preset: `table-layout: fixed`, `overflow-wrap: anywhere`,
   `white-space: pre-wrap` on code, `max-width: 100%` on media, `min-width: 0`
   on flex items, and that block goes last in the sheet. No `overflow-x: auto`.
3. **Body contrast floor 4.5:1**, large text (24px, or 18.66px bold) 3:1.
   Placeholder and hint text is held to the body floor, not to a muted default.
   Every pair below carries its measured ratio.
4. **Body measure 65-75 characters per line**, counted as characters actually
   rendered on a line - not as CSS `ch` units, which understate the count for
   wide-figure serifs. Check the compiled template, do not assume the column.

## The honest-approximation rule

Every one of these presets is derived from a design that named commercial or
hosted webfonts. Under law 1 those faces cannot be fetched, so each preset uses
a system stack that **approximates** the original rather than reproducing it.
When this skill compiles a template from a preset, it writes that fact into the
template as a comment, in this shape:

```html
<!-- This page approximates the Editorial Minimal preset using system faces.
     The original design specifies Geist Sans / Lyon Text / Geist Mono, which are
     webfonts and are not fetched under the no-external-requests rule. The
     proportions, palette, and components are exact; the letterforms are near. -->
```

Say it in the template, and say it to the member when they pick. A member who
knows their page is an approximation can decide to license the real face; a
member who is never told believes they are looking at the named design.

---

## Preset 1 - Editorial Minimal

**Pick this when** the member's work is documents, reports, research, or
anything where the reader is there to read. Warm paper, one editorial serif for
headings, monospace micro-labels, hairline structure, almost no shadow.

### Palette

| Role | Value | Contrast | Measured |
|---|---|---|---|
| Canvas | `#F7F6F3` warm bone | - | - |
| Surface (cards) | `#FFFFFF` | - | - |
| Body ink | `#111111` | on canvas | **17.47:1** |
| Secondary ink | `#6E6D6A` | on canvas | **4.79:1** |
| Hairline | `#EAEAEA` | structural only, never text | - |

Accents are a scarce, semantic set - each is a pale fill with its own
contrast-checked text color, so a tag or an inline code chip is always readable:

| Accent | Fill | Text | Measured |
|---|---|---|---|
| Red | `#FDEBEC` | `#9F2F2D` | **6.26:1** |
| Blue | `#E1F3FE` | `#1F6C9F` | **4.98:1** |
| Green | `#EDF3EC` | `#346538` | **6.08:1** |
| Yellow | `#FBF3DB` | `#956400` | **4.62:1** |

**Never absolute black** for body text - `#111111` or `#2F3437`, at a line-height
floor of `1.6`.

### Type (system stacks)

```css
--sans:  -apple-system, "SF Pro Display", "Segoe UI", "Helvetica Neue", sans-serif;
--serif: "Iowan Old Style", Palatino, "Palatino Linotype", "Book Antiqua", Georgia, serif;
--mono:  "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
```

Serif for hero headings and quotes, at tight tracking (`-0.02em` to `-0.04em`)
and tight leading (`1.1`). Sans for body, UI, and buttons. Mono for code,
keystrokes, and metadata. Approximates: `Geist Sans` / `Lyon Text` / `Geist Mono`.

### Components

- **Cards:** exactly `1px solid #EAEAEA`, radius `8px` to `12px` maximum,
  internal padding `24px` to `40px`. Asymmetric grid, not a row of equal boxes.
- **Primary button:** solid `#111111`, text `#FFFFFF`, radius `4px` to `6px`,
  no box-shadow. Hover shifts to `#333333`; `:active` scales to `0.98`.
- **Tags and status badges:** fully rounded, very small, uppercase, tracking
  `0.05em`, on the pale accent fills with their paired text color.
- **Accordion:** no container boxes at all - items separated only by
  `border-bottom: 1px solid #EAEAEA`, with a sharp `+` / `-` toggle.
- **Keystrokes:** real `<kbd>` - `1px solid #EAEAEA`, radius `4px`,
  background `#F7F6F3`, mono face.
- **Shadows:** practically non-existent. If used at all, ultra-diffuse below
  `0.05` opacity.

### Motion (optional)

Scroll entry: `translateY(12px)` + `opacity: 0` resolving over `600ms` on
`cubic-bezier(0.16, 1, 0.3, 1)`, driven by `IntersectionObserver` - never a
scroll listener. Staggered list reveals at `80ms` per item. Animate `transform`
and `opacity` only.

### What did not travel

- The named webfonts (see the approximation rule).
- The `picsum.photos` placeholder source and the icon libraries - external requests.
- The original's `#787774` secondary gray: **measured 4.14:1 on the canvas, below
  the 4.5:1 floor.** Replaced with `#6E6D6A` at 4.79:1, the nearest value that
  keeps the muted feel and passes.

---

## Preset 2 - Soft Premium

**Pick this when** the member sells something aspirational and the page has to
feel expensive on first sight - agency, studio, high-ticket service, launch page.
Deep whitespace, nested "double-bezel" containers, heavy soft light, real motion.

### Palette - pick ONE substrate and commit

| Substrate | Canvas | Body ink | Measured |
|---|---|---|---|
| **Editorial Luxury** (warm) | `#FDFBF7` | `#111111` | **18.27:1** |
| **Ethereal Glass** (dark) | `#050505` | `#EDEDED` | **17.41:1** |

Hairlines are `rgba(0,0,0,0.05)` on the warm substrate, `rgba(255,255,255,0.10)`
on the dark one - never a generic solid gray border. Shadows are wide, soft, and
low-opacity; never dark or tight.

### Type (system stacks)

```css
--display: -apple-system, "SF Pro Display", "Segoe UI", system-ui, sans-serif;
--serif:   Palatino, "Palatino Linotype", "Book Antiqua", Georgia, serif;
```

Massive display sizes for headings. The warm substrate pairs the serif for hero
headings; the dark substrate stays on the geometric sans throughout.
Approximates: `Geist`, `Clash Display`, `PP Editorial New`, `Plus Jakarta Sans`.
Banned outright, as in the original: Inter, Roboto, Arial, Open Sans, Helvetica.

### Components

- **Double-bezel containers.** No premium card sits flat on the background. An
  outer shell carries a faint fill, a hairline border, `6px` to `8px` of padding,
  and a large radius (`2rem`); the inner core has its own background, an inset
  top highlight, and a **mathematically smaller radius** so the curves are
  concentric - `calc(2rem - 6px)`, not a second `2rem`.
- **Island buttons.** Fully rounded pills, generous padding. A trailing arrow is
  never naked next to the text - it sits in its own small circular wrapper
  flush with the button's right inner padding.
- **Eyebrow tags.** Major headings are preceded by a tiny pill: `10px`,
  uppercase, tracking `0.2em`.
- **Macro whitespace.** Section padding at `6rem` to `10rem`. The layout breathes
  heavily; this is the single most load-bearing rule in the preset.
- **Layout archetype - pick one and commit:** asymmetrical bento grid,
  z-axis cascade (overlapping cards at slight rotation), or editorial split
  (massive type one side, interactive content the other).

### Motion

The preset is not itself without motion. Custom easing only -
`cubic-bezier(0.32, 0.72, 0, 1)` over `700ms`; never `linear` or `ease-in-out`.
Scroll entry is a heavy fade-up (`translateY(4rem)` + blur, resolving over
`800ms`) via `IntersectionObserver`. Buttons scale to `0.98` on press.

**Performance guardrails, carried verbatim in spirit:** animate only `transform`
and `opacity`, never `top`/`left`/`width`/`height`. `backdrop-filter` on fixed or
sticky elements only, never on scrolling containers. Grain and noise overlays go
on a fixed, `pointer-events: none` layer. No arbitrary z-indexes.

### Mobile collapse (required, not optional)

Every asymmetric layout falls back to a single full-width column below `768px`:
all column spans reset, all rotations and negative-margin overlaps are removed
(they cause touch-target conflicts), padding drops to a comfortable inset. Use
`min-height: 100dvh` for full-height sections, never `100vh`.

### What did not travel

- The named webfonts, the icon libraries, and Framer Motion - external requests.
- **The notation.** The source is written almost entirely in Tailwind utility
  classes (`py-24`, `rounded-[2rem]`, `backdrop-blur-2xl`, `ring-1 ring-black/5`).
  Every rule above is a translation into plain CSS values, not a transcription.
  A member on a different stack gets the design, not the class names.
- The "roll the dice for variance" directive. A design system exists to be
  consistent; deliberate per-page randomization is the opposite of what the
  member is picking a preset for. The layout archetypes survive as **a choice
  the member makes once**, not as a per-render dice roll.

---

## Preset 3 - Industrial Brutalist

**Pick this when** the member's work is data-heavy, technical, or deliberately
unfriendly to consumer-software polish - dashboards, telemetry, engineering
reports, portfolios that want to look like declassified blueprints. Rigid grids,
extreme type-scale contrast, one hazard accent, zero radius.

### Substrate - pick ONE and never mix

**Swiss Industrial Print (light)**

| Role | Value | Contrast | Measured |
|---|---|---|---|
| Background | `#F4F4F0` unbleached paper | - | - |
| Foreground | `#050505` carbon ink | on background | **18.48:1** |
| Accent, body-size text | `#D21414` | on background | **4.95:1** |
| Accent, rules and macro numerals only | `#E61919` | on background | 4.22:1 |

**Tactical Telemetry (dark)**

| Role | Value | Contrast | Measured |
|---|---|---|---|
| Background | `#0A0A0A` deactivated CRT - never pure `#000000` | - | - |
| Foreground | `#EAEAEA` white phosphor | on background | **16.46:1** |
| Accent, body-size text | `#F03030` | on background | **4.87:1** |
| Accent, rules and macro numerals only | `#E61919` | on background | 4.26:1 |
| Terminal green, one element only | `#4AF626` | on background | **13.67:1** |

The red is the **only** accent. Gradients, soft shadows, and translucency are
prohibited. Terminal green, if used at all, marks exactly one status readout -
never a general text color.

### Type (system stacks)

```css
--macro: "Helvetica Neue", Helvetica, "Arial Black", sans-serif;  /* weight 800-900 */
--micro: "SF Mono", SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
```

- **Macro (structural headers):** fluid scale via `clamp(4rem, 10vw, 15rem)`,
  tracking `-0.03em` to `-0.06em` so glyphs form solid blocks, leading `0.85` to
  `0.95`, uppercase. Approximates: Neue Haas Grotesk Black, Archivo Black,
  Monument Extended - none of which a system stack reaches, so this is the
  preset where the approximation note matters most.
- **Micro (data and metadata):** `10px` to `14px`, tracking `0.05em` to `0.1em`,
  leading `1.2` to `1.4`, uppercase. All metadata, navigation, IDs, coordinates.

### Layout and components

- **Blueprint grid.** CSS Grid, elements anchored to tracks - nothing floats.
  The `display: grid; gap: 1px` trick with contrasting parent and child
  backgrounds produces razor-thin dividers without border declarations.
- **Visible compartmentalization.** Solid `1px`/`2px` borders delineate zones;
  full-width rules segregate units.
- **Bimodal density.** Alternate tightly packed monospace data blocks against
  vast negative space framing the macro type. The oscillation is the effect.
- **Zero radius.** Every corner is exactly 90 degrees.
- **Symbology.** ASCII framing (`[ SECTION ]`, `>>>`), registration and
  trademark marks used as structural geometry, crosshairs at grid
  intersections, revision strings.
- **Semantic rigidity.** Build with `<data>`, `<samp>`, `<kbd>`, `<output>`,
  `<dl>` - the markup should read as technical as the page looks.

### What did not travel

- The named webfonts. Also **`Inter` is explicitly recommended by this source
  and explicitly banned by Preset 1** - a live reminder that the presets are
  three separate looks, not one blended taste.
- **The two contrast failures.** The source's `#E61919` measures 4.22:1 on its
  own light substrate and 4.26:1 on its own dark one - both below the body floor.
  It is kept for rules, dividers, and macro numerals (where the large-text 3:1
  bar applies) and replaced with `#D21414` / `#F03030` wherever body-size text
  is colored. `#FF2A2A` measures 3.39:1 on the light substrate and is not used
  for text at all.
- **Analog degradation as a default.** Halftone, 1-bit dithering, CRT scanlines,
  and global noise are kept as an **opt-in texture layer**, not the default,
  and only on fixed `pointer-events: none` pseudo-elements. A scanline overlay
  on a scrolling container is a repaint cost on every frame, and a dithered
  page is a page a reviewer cannot read.
- **"Extreme data density" as licence to crowd.** Density here means tabular
  data at small mono sizes inside a rigid grid - it is not permission to breach
  the measure band in prose, and the no-sideways-scroll technique applies to
  every one of those dense tables.

---

## Why there are three and not five

The source repository carries five aesthetic skills. Two are not offered:

- **`gpt-tasteskill`** prescribes GSAP ScrollTriggers and "Python-driven true
  randomization" for layout variance. Both are external dependencies, and a
  deliberately randomized layout is a poor fit for pages that must be reviewed
  and compared between renders. It is the weakest of the five for this purpose.
- **`stitch-skill`** is a workflow for a specific external design tool rather
  than a standing look, so there is no palette or type scale to ratify.

Three credible looks that a member can actually tell apart is the point. A
preset shelf nobody can choose between is a longer interview, not a shorter one.

## Provenance

Every value above traces to a file in the read-only public clone of
`https://github.com/leonxlnx/taste-skill` at commit `e988add` (2026-07-23), the
same commit the B53 evaluation read.

| Preset | Source file | Lines |
|---|---|---|
| Editorial Minimal | `skills/minimalist-skill/SKILL.md` (`name: minimalist-ui`) | 85 |
| Soft Premium | `skills/soft-skill/SKILL.md` (`name: high-end-visual-design`) | 98 |
| Industrial Brutalist | `skills/brutalist-skill/SKILL.md` (`name: industrial-brutalist-ui`) | 92 |
| Not offered | `skills/gpt-tasteskill/SKILL.md`, `skills/stitch-skill/SKILL.md` | 74, 184 |

Every contrast ratio in this file was computed from the WCAG relative-luminance
formula on the exact hex pairs shown, not estimated.
