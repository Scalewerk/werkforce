---
name: social-posts
description: One idea becomes a batch of posts shaped for each platform you actually use - not one post pasted five places. Opening lines that do not lie, variants built for how each platform is read, a posting rhythm you can honestly keep, and the whole batch filed to your Marketing outbox ready to go. Posting is a public claim, so I draft and you post. Use when you say "turn this into posts", "write my social posts", "make a post batch", "what should I post this week", "repurpose this for social", "posts from this idea". Run marketing-content first when the source piece does not exist yet; run send-guard before anything goes live.
---

# Social Posts - one idea, shaped for every room it walks into

Cross-posting is the tell. The same paragraph pasted onto five platforms reads like a flyer stapled to five different doors - technically present, actually ignored. Each platform is a different room with a different conversation, and a post that belongs in the room gets read; a post that was clearly written for somewhere else gets scrolled past. So this skill never multiplies one post - it takes one idea and rebuilds it natively, once per platform.

The other half of the craft is honesty at the top. The first line of a post is a promise, and the internet is full of promises the post never keeps - manufactured outrage, fake vulnerability, "nobody is talking about this," the answer withheld to farm replies. None of that here. Your opening line is the honest start of the payoff, and the reader who stops after one line was still told the truth. Repurposing changes form, never facts: a post may not sharpen a number or a promise beyond what the source supports.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- One batch pair in `departments/marketing/outbox/` - `YYYY-MM-DD-social-batch-<slug>.md` (the editable truth) plus its `.html` render in your company design system - every variant, its platform, its suggested timing, and the source it was cut from, in one place you can post from all week
- One post per platform per idea, each in that platform's native shape - never the same text twice
- A posting rhythm written down: how many posts, which days, and the supply assumption that makes it sustainable
- One line in `records/worklog.md` - the batch on the record, with a receipt

What this skill does NOT own: the origin long-form piece is **marketing-content**'s job, the content strategy and calendar belong to **marketing-department**, and the send itself is yours - a post is a public claim, one of the seven reserved decisions, so I draft and you post. Every time.

## What I need from you

1. One real idea with a source - a finished piece from an outbox, a win from `records/worklog.md`, a note in `inbox.md`, or something you tell me right now. One idea is the whole input; the batch is the multiplication.
2. The platforms you actually use. Not the platforms you feel guilty about - the ones where you would genuinely press post this week.
3. An honest answer to "how often can you really post?" A rhythm you keep beats a calendar you abandon.

## How it works

### Step 1 - Pin the idea and its source

We name the one idea in one line, and we name where it lives - a file path, a worklog line, or "founder, said out loud today." That source line travels with every post, because every claim in every variant has to trace back to it. If the idea carries a number or a result, I confirm it against the source before it goes anywhere; I never invent facts, numbers, or results about your business. An `inbox.md` note may prompt the idea, but an inbox entry owns no fact - you confirm the fact out loud and the Source line becomes "founder, spoken YYYY-MM-DD", or the note goes through intake first. If the source holds three ideas, that is three batches or one thread with a stated spine - never one crowded post.

### Step 2 - Pick the rooms

You tell me the platforms. For each one I shape to how that platform is actually read - the short-text feed wants one tight thought and room to breathe, the professional network rewards a story with a line break rhythm, a thread needs a spine announced up front, an image caption carries the idea in the first sentence because the rest is folded, a short-video platform needs a spoken script, not prose. Where a platform's current limits matter and I am not certain of them, I say so plainly instead of guessing - you know your feed better than my memory does. Voice adapts to the room within YOUR voice from `company/profile.md` - platform-native never means persona-switching.

### Step 3 - Write the variants

Now the writing starts, so I hand the batch to a delegated agent - a separate worker your AI runtime spawns - and stay at the desk with you to relay drafts and take your pushback; if your AI runtime cannot spawn a delegated agent, I write the variants here in turn and say so out loud. Either way the work is labeled as the Worker's.

One idea, rebuilt once per platform. Each variant follows three laws:

1. **One idea per post.** The post makes one point and lands it.
2. **The opening line does not lie.** It is the payoff's honest first step. Bad: "Everyone is doing onboarding wrong. What nobody tells you (thread)". Good: "We cut onboarding from three weeks to four days. The change was one checklist - here it is."
3. **Form changes, facts do not.** Every claim stays inside what the source says. A true zero beats a flattering guess.

I show you each variant as it lands and you push back in plain words - "shorter", "that is not how I talk", "cut the second point" - until each one sounds like you in that room.

### Step 4 - Set the rhythm you can keep

A posting rhythm is only real if the ideas keep coming, so the rhythm gets built from your actual supply, and it names its assumption out loud:

```markdown
## Posting rhythm
- {{N}} posts per week: {{which days, which platforms}}
- Supply assumption: this holds as long as {{where the ideas come from - for
  example "one finished piece or one worklog win per week"}}
- When supply runs dry: post nothing, note it in inbox.md, and we rebuild the
  rhythm - filler is worse than silence.
```

Two good posts a week you actually publish beat seven you resent. If the rhythm you want outruns the ideas you have, I say so now, not in week three.

### Step 5 - Batch to the outbox

The finished batch lands as one file, `departments/marketing/outbox/YYYY-MM-DD-social-batch-<slug>.md`, in this shape:

```markdown
# Social batch - {{IDEA IN ONE LINE}}
Source: {{file, worklog line, or "founder, spoken YYYY-MM-DD"}}
Built: {{DATE}}

## {{Platform}} - {{short slug}}
Suggested timing: {{day and rough time}}
---
{{the post, exactly as you would publish it}}
---
Opening-line check: the promise is settled inside the post. [checked]
Claim check: every fact traces to the source above. [checked]

## Posting rhythm
{{the rhythm from Step 4}}
```

Everything above the rhythm is copy-paste ready. You post from this file all week without opening another document. Beside the markdown I render the finished `.html` from `company/design/page.html` - the same batch as a self-contained page in your company look; if your design system is `(not set yet)`, I say so, use the shipped neutral look, and point you at the design-system step in **onboarding** (the **design-system** skill fills it in). I tell you in one sentence what filed where. If Marketing is not Active on your org chart yet, I still write the file there, append one line to `records/warnings.md` as `- YYYY-MM-DD [social-posts] Marketing not Active - batch filed to its outbox anyway`, and tell you in one sentence - a warning is a flag on the play, never a stopped game. **open-a-department** staffs the row whenever you are ready.

### Step 6 - Log it

I append one line to `records/worklog.md`:

```markdown
- {{DATE}} [marketing] Social batch: {{IDEA IN ONE LINE}} - receipt: {{N}} platform-native posts at departments/marketing/outbox/{{FILENAME}}, reviewed by {{FOUNDER}}
```

And one line to the master audit log, `records/audit-log.md`, with the time in your HQ timezone (never UTC):

```markdown
- YYYY-MM-DD HH:MM [task] [{{FOUNDER}}] [marketing] Social batch filed: {{IDEA IN ONE LINE}} - departments/marketing/outbox/{{FILENAME}}
```

You are the reviewer of record - you read every variant before it counts, because your name is the one on the post. Want an adversarial pass first? **review-desk** will hunt each variant against its source before you publish. And before anything actually goes live, **send-guard** is the last look - it checks claims against your capability floor so a post never promises what you cannot deliver yet.

## Do this now

1. Bring me one idea and where it lives - a finished piece, a worklog win, or just tell me.
2. Name the platforms you would actually post to this week.
3. Approve the variants one by one, then the rhythm - honest number, not aspirational.
4. Open the batch file and post the first variant yourself, today.

Homework: after the first post is live, drop one line in `inbox.md` about what happened - replies, silence, a customer who mentioned it. Real reactions are the next batch's best source.

Next: run **send-guard** before your first post goes live - a post is a public claim, and thirty seconds of checking beats a week of walking it back.
