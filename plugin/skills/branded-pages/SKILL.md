---
name: branded-pages
description: Turn any document in your HQ into a polished, on-brand HTML page sitting right next to its source - same name, .html - ready to open, share, or print. One self-contained file with your company's name on it, styled in the house look, working with no internet at all. The markdown stays the authored truth; the render is a derived view I legally regenerate any time. Use when you say "make this look good", "render this doc", "brand this document", "turn this into a page", "make a printable version", "refresh my renders", "why does my render look old". Run it whenever a doc is about to be seen by human eyes - a proposal, a report, a charter.
---

# Branded Pages - the day your documents start dressing like your company

Your HQ runs on plain markdown, and that is correct - markdown is honest, diffable, and edit-friendly. But the moment a document has to be SEEN - a proposal opened on a client's laptop, a report printed for a meeting, a charter you want to feel proud of - plain text undersells the work inside it. This skill gives any doc in your HQ a rendered page in your company's own design system: I fill your house page template at `company/design/page.html` with the document's content and hand you a self-contained file. Quiet, expensive-looking, and entirely yours - because the look is your company's, not mine.

One law governs everything here, and I will say it more than once because it saves you real pain: the markdown is the authored truth, and the HTML is a derived view. You edit the `.md`; the render follows. If you hand-edit a render, your edits are lost on the next regeneration - by design, not by accident. That is what GENERATED means in `os/formats.md`, and it is why you never have to maintain two copies of anything. Three boundaries, so you reach for the right tool: **design-system** owns `company/design/` and authors that page template - I only consume it, never write it; **status-report** owns `records/dashboard.html` - I never write that file; and **landing-pages** builds pages meant to sell, while I dress up documents that already exist and just need to look like they came from a real company. If your design system is not set up yet, I still render - in the shipped neutral look - and point you to the design-system onboarding step.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A `.html` sibling next to any `.md` you pick - same folder, same name, only the extension changes (`departments/sales/outbox/2026-07-20-proposal.md` gets `2026-07-20-proposal.html`, exactly the shape `os/formats.md` blesses for rendered outbox pages)
- One fully self-contained file: styles inline, no external fonts, no scripts, no network calls - it opens by double-click on any machine, forever
- Your company name from `company/profile.md` in the header and footer, light and dark themes built in, and print styles so it comes off a printer clean
- A generated-file header comment inside the HTML naming its source, so nobody ever mistakes the render for the truth
- A stale-render check: any time I am in a folder, if a `.md` is newer than its `.html` sibling I say so in one sentence
- One line in `records/worklog.md` per render - on the record, with a receipt

## What I need from you

1. The doc to render - name it, point at it, or say "render everything in this folder".
2. Nothing else. The look comes from your company design system's page template at `company/design/page.html`, and your profile supplies the name on the page. If your design system is not set up yet, I use the shipped neutral look and point you to the design-system onboarding step - I never guess brand colors you have not given me. To change how the render looks, run **design-system**; this skill consumes that template, it does not restyle it.

## How it works

### Step 1 - Pick the doc and read the house

You name a document, or a folder of them. Anything in the HQ qualifies: an outbox deliverable, a department charter, a report, `company/playbooks.md` for your own reading pleasure. I tell you which doc I am about to render and where its page will land, then I read two things: `company/profile.md` for your company name and how you sound - the name goes on the page; the voice matters if you ask me to touch any wording, which I only do in the `.md`, never in the render - and `company/design/page.html`, your house page template, which is the source of the look.

If `company/design/` is `(not set yet)` - no template there yet - I say so in one sentence, render with the shipped neutral template below as an honest fallback, and point you to the design-system onboarding step so your next render carries your real brand. If the profile is missing or the name is `(not set yet)`, I render anyway with the header line omitted. Either way I append one dated line to `records/warnings.md` as `- YYYY-MM-DD [branded-pages] finding - action taken` and tell you in one sentence. A warning is a flag on the play, never a stopped game.

### Step 2 - Render the page

I convert the markdown faithfully - headings, paragraphs, lists, tables, blockquotes, code, links - and pour it into your house page template from `company/design/page.html`: I copy that template and fill its content slot with the rendered markdown, its company-name slot from your profile, and its source-path slot with where the truth lives. The template owns the look; I only fill it. Whatever slot names your template uses, I fill the same ones the dashboard and other rendered pages fill, so every page in your company matches.

When `company/design/` is `(not set yet)`, I fall back to the shipped neutral template below - the same self-contained, no-network shape, in a plain paper-and-ink look that offends no brand - so a document never waits on a design system to be seen. This inline template is ONLY the fallback; once design-system has written `company/design/page.html`, that file wins every time.

```html
<!-- generated by branded-pages from {{SOURCE_PATH}} - do not hand-edit;
     edits here are lost on the next render. The source of truth is the .md. -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{{DOC_TITLE}}</title>
<style>
  :root{--paper:#F5F2EB;--ink:#3B352E;--signal:#B23B2A;--ink-soft:#6B6156;
    --rule:#D8D2C4;--card:#EFEBE0;
    --mono:"SF Mono",Menlo,Consolas,monospace;
    --serif:"Iowan Old Style",Palatino,Georgia,serif;}
  @media (prefers-color-scheme: dark){
    :root{--paper:#26221D;--ink:#EDE8DD;--ink-soft:#A79C8D;--rule:#453E35;--card:#2E2922;}}
  body{background:var(--paper);color:var(--ink);font-family:var(--serif);
    font-size:1.0625rem;line-height:1.6;margin:0;}
  .sheet{max-width:44rem;margin:0 auto;padding:4.5rem 1.5rem 6rem;}
  .house{font-family:var(--mono);font-size:.6875rem;letter-spacing:.22em;
    text-transform:uppercase;color:var(--ink-soft);margin:0 0 2.25rem;}
  h1{font-size:clamp(2.2rem,6vw,3.2rem);line-height:1.05;font-weight:600;
    border-bottom:2px solid var(--ink);padding-bottom:1.5rem;margin:0 0 1.5rem;}
  h2{font-size:1.5rem;font-weight:600;margin:3rem 0 1.1rem;padding-top:2rem;
    border-top:1px solid var(--rule);}
  h3{font-size:1.15rem;font-weight:600;margin:2rem 0 .8rem;}
  p,ul,ol{margin:.9rem 0;max-width:62ch;} li{margin:.55rem 0;}
  a{color:var(--signal);text-underline-offset:.15em;}
  code{font-family:var(--mono);font-size:.85em;background:var(--card);
    padding:.1rem .35rem;border-radius:2px;}
  pre{background:var(--card);padding:1.1rem 1.3rem;overflow-x:auto;margin:1.2rem 0;}
  pre code{background:none;padding:0;}
  blockquote{font-style:italic;font-size:1.2rem;border-left:3px solid var(--ink);
    padding-left:1.4rem;margin:1.4rem 0;max-width:40ch;}
  .table-wrap{overflow-x:auto;margin:1.2rem 0;}
  table{border-collapse:collapse;width:100%;font-size:.9rem;}
  th{font-family:var(--mono);font-size:.625rem;letter-spacing:.18em;
    text-transform:uppercase;font-weight:400;color:var(--ink-soft);text-align:left;
    padding:.5rem .8rem .5rem 0;border-bottom:1px solid var(--ink);}
  td{padding:.6rem .8rem .6rem 0;border-bottom:1px solid var(--rule);vertical-align:top;}
  .footer{margin-top:3.5rem;padding-top:1.5rem;border-top:2px solid var(--ink);
    font-family:var(--mono);font-size:.6875rem;letter-spacing:.12em;
    text-transform:uppercase;color:var(--ink-soft);line-height:2;}
  @media print{body{background:#fff;color:#000;}.sheet{padding:0;max-width:none;}
    a{color:#000;text-decoration:none;}tr,pre,blockquote{page-break-inside:avoid;}}
</style>
</head>
<body>
<div class="sheet">
<p class="house">{{COMPANY_NAME}}</p>
{{RENDERED_CONTENT}}
<p class="footer">Source of authority: {{SOURCE_PATH}} - rendered by branded-pages - {{COMPANY_NAME}}</p>
</div>
</body>
</html>
```

The rules inside that fallback template are a deliberately neutral look: paper and ink, one signal color on links only, serif body, mono uppercase eyebrows, every table wrapped so wide data scrolls instead of breaking the page - a stand-in until your real design system takes over. The page title comes from the doc's first H1. Nothing external, ever - no font links, no image URLs fetched from the web, no analytics, no scripts. A render made today opens identically in ten years on an airplane.

The source `.md` is never touched. Not one character. I read it; I do not write it.

### Step 3 - Overwrite legally, warn honestly

If a `.html` sibling already exists, I overwrite it wholesale - that is the law for GENERATED files, and it is a feature. If the old file shows signs of hand-editing (content the source never contained), I still overwrite it, and I tell you plainly in one sentence that hand-made edits were just lost and belong in the `.md` instead. `[checked]` claims only: I say what I actually compared, and if I am inferring, I say `[best guess]`.

Two files I will not write no matter how the request is phrased: `records/dashboard.html` (that is **status-report**'s page - I point you there in one sentence) and anything under `os/` (constitution files are never rendered).

### Step 4 - The stale-render check

Renders age the moment the source is edited again, and a stale render shown to a client misstates your work. So whenever I render, and any time you ask "check my renders", I compare file dates across the folder: every `.md` that is newer than its `.html` sibling gets named in one sentence, and I offer to regenerate the lot in one pass. Regenerating is always safe - that is the whole point of derived views. If you decline, I append one warning line to `records/warnings.md` so the record knows the render is stale, and we keep moving.

### Step 5 - Log it

I tell you the render is done and where it landed, then file its receipt. One line to `records/worklog.md`, append-only, in the standard shape:

```markdown
- {{DATE}} [{{department or company}}] Rendered {{DOC_NAME}} - receipt: {{SOURCE_PATH}} rendered to its .html sibling, self-contained house style, reviewed by {{FOUNDER}}
```

And one line lands in the master audit log, `records/audit-log.md`, in the shape `os/formats.md` pins - timestamped in the HQ timezone from `HQ.md`, never UTC:

```markdown
- YYYY-MM-DD HH:MM [note] [{{FOUNDER}}] [{{department or company}}] Rendered {{DOC_NAME}} to its .html sibling - {{SOURCE_PATH}}
```

You are the reviewer of record - open the page, look at it, and if anything reads wrong, remember the rule: we fix the `.md` and re-render. The truth gets edited; the costume gets regenerated.

## Do this now

1. Pick the one document in your HQ most likely to be seen by someone else this week - a proposal in an outbox is perfect.
2. Say "render it" and open the `.html` by double-clicking. Try your machine's light and dark modes.
3. Edit one sentence in the `.md`, then ask me to check renders - watch the stale note appear, and regenerate.

Homework: hit print preview on your first render and see it come out clean - then decide which three documents in your company deserve to look like this permanently, and tell me tomorrow.

Next: install **write-well** - a page can only look as good as its sentences, and that skill sharpens the words before this one dresses them.
