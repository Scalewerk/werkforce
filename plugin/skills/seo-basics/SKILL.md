---
name: seo-basics
description: An honest discoverability pass on any page or post - I name the one searcher it serves, check that the title and description promise exactly what the page delivers, shape the headings into answers, and fix internal links, with zero keyword stuffing and zero tricks. You get a marked-up revision plus a short findings list. Use when you say "seo pass", "make this page findable", "why can't anyone find my page", "check my seo", "review my title and description", "is this keyword stuffing", "help people find this post". Run it on a finished draft, before the page goes live - and any time an old page has gone quiet.
---

# SEO Basics - be the honest best answer, findable

Most search advice is about tricking a machine. This pass is about one person: somebody, tonight, types a few words into a search box because they have your customer's exact problem. Either your page is the honest best answer to what they typed, or it is not. Everything else - titles, descriptions, headings, links - is just making that answer easy to find and easy to trust.

So the rule I hold through the whole pass: if a tactic only works while the search engine is not looking, it is out. No keyword stuffing, no hidden text, no headings that exist only to host a phrase, no promises the business cannot keep. Honest pages age well; tricks age badly and take your name down with them.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A named searcher for the page: who they are and the words they actually type, drawn from your `company/profile.md` and `company/business-model.md`
- A short findings list - each finding one line, with what it costs you and the fix, every claim labeled
- A marked-up revision of the page or post: new title, new description, reshaped headings, fixed internal links, stuffing removed - your content, made findable, never puffed up
- The pass filed as one deliverable pair in the owning department's `outbox/` - `YYYY-MM-DD-seo-pass-{slug}.md` (the editable truth) plus its `.html` render in your company design system - and one receipt line in `records/worklog.md`
- What you never get: a ranking promise. I make the page the honest best answer; whether it ranks is a hypothesis until real search data says so, and I will say exactly that.

## What I need from you

1. The page or post - a file path inside your HQ, or paste the text straight in. Draft or live, either works.
2. One sentence on who this page is for, if `company/profile.md` does not already say it.
3. Nothing else. I read your capability floor myself from `company/business-model.md`.

## How it works

### Step 1 - Name the one searcher

Before touching a word, I answer one question in writing: who types what? One real person from your audience, and the exact words they put in the box - their words, not yours. "Bookkeeping for one-person plumbing companies", not "financial solutions". I pull the language from `company/profile.md` and `company/business-model.md`, and I ask you when the files are blank rather than guessing.

One page serves one searcher. If your page is chasing three different searches at once, the honest fix is three pages, not one page stuffed with everything - I will say so in the findings, and the pass optimizes for the one search this page can win.

### Step 2 - Check the answer before dressing it up

Optimization amplifies an answer; it never compensates for a page that does not have one. So I read the page as the searcher and ask: does this actually answer what they typed? If it does not, that is finding number one, and no amount of title polish goes ahead of it.

Here is where your capability floor earns its keep. I read the Yes / Now / Not yet lists in `company/business-model.md`, and if the page promises anything from the Not yet list to chase a search, it gets flagged - a page that ranks for something you cannot deliver is a refund machine with good traffic. When the page makes a claim I cannot verify from your files, it goes in the findings marked `[best guess]` with a question for you, never silently kept.

### Step 3 - Title, description, headings, links

Now the craft, in order of weight:

- **Title** - the page's promise, in the searcher's words, kept by the page. Bad: "Solutions | Services | Best Agency | Experts". Good: one plain promise the page delivers on.
- **Description** - the claim the page keeps, written to earn the click honestly. Bait that the page does not pay off gets you a visit and costs you the trust.
- **Headings** - a real outline: one main heading stating the answer, each section heading advancing it. Read the headings alone, top to bottom - they should answer the search by themselves. Any heading that exists only to repeat a keyword gets rewritten or cut.
- **Internal links** - links from your genuinely related pages, with anchor text that says where the link leads. "See our pricing", not "click here". No link farms, no footer stuffed with twenty keyword links.
- **The address** - if the page's web address is still yours to choose, it states the topic plainly.

And one sweep for tricks: repeated keywords doing no work for the reader, text written for a crawler instead of a person, dates or reviews the page cannot back. All of it comes out. Keyword presence should read as natural language - any sentence you would not say to the searcher's face fails.

### Step 4 - The deliverable

Now I hand the pass off to a delegated agent to write up while I stay at the desk with you - and if your AI runtime cannot spawn a delegated agent, I do the write-up here in turn and say so out loud. I write one file into the `outbox/` of the department that owns the page - usually Marketing - as `YYYY-MM-DD-seo-pass-{slug}.md`:

```markdown
# SEO pass - {page name}
One searcher: {who} typing "{their exact words}"

## Findings
1. {finding} - costs you: {what} - fix: {what I changed} [checked]
2. {finding} - costs you: {what} - fix: {question for you} [best guess]

## Marked-up revision
{the full page, with each change shown as}
> was: {the old line}
{the new line}
```

Short list, no padding - three sharp findings beat ten filler ones. Every change in the revision sits next to what it replaced, so you can see exactly what moved and why. Beside the markdown I render the finished `.html` from `company/design/page.html` so the pass reads as a polished page, self-contained; if your design system is `(not set yet)`, I say so, use the shipped neutral look, and point you at the design-system step in **onboarding** (the **design-system** skill fills it in). Once both land, I tell you in one sentence what filed where. If no department is Active yet, I give you the full pass right here in the session, append one line to `records/warnings.md` as `- YYYY-MM-DD [seo-basics] no active department to file the pass under - delivered in session`, and keep moving. A warning is a flag on the play, never a stopped game.

Putting the revision live is yours alone - a public page is a public claim, and public claims are a reserved decision. I mark up; you publish.

### Step 5 - Log it

I append one line to `records/worklog.md`:

```markdown
- YYYY-MM-DD [{department}] SEO pass on {page name} - receipt: findings and marked-up revision at departments/{department}/outbox/YYYY-MM-DD-seo-pass-{slug}.md, reviewed by {founder}
```

And one line to the master audit log, `records/audit-log.md`, with the time in your HQ timezone (never UTC):

```markdown
- YYYY-MM-DD HH:MM [task] [{founder}] [{department}] SEO pass filed on {page name} - departments/{department}/outbox/YYYY-MM-DD-seo-pass-{slug}.md
```

`{department}` is whichever department owns the page. If no department was Active and the pass was delivered in session, the worklog tag is `[company]`, the receipt reads `delivered in session per records/warnings.md` instead of an outbox path, and the audit line's scope is `company`.

And one honest closing note in the session: this page is now the best answer we can honestly make it. Check back in a few weeks with real search data - what people typed, what they clicked - and we tune from evidence, not hope.

## Do this now

1. Pick one page or post - the one you most wish people were finding.
2. Say "seo pass" and point me at it.
3. Answer the one-searcher question if your profile does not already.
4. Read the findings, approve the revision, and put it live yourself.

Homework: open the revision and read only the headings, top to bottom. If they answer the search by themselves, the pass worked - that is the test your searcher runs in the first five seconds.

Next: when the page itself needs building or rebuilding rather than tuning, run **landing-pages** - it makes the page; this skill makes the page findable.
