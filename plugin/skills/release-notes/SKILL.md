---
name: release-notes
description: A plain-language briefing on your current Werkforce version and what has shipped since - reads the installed plugin's own version and changelog against your HQ's os/VERSION, and tells you in one sitting what changed and what it means for you. Use when you say "what's new", "release notes", "brief me on the update", "what changed in Werkforce", "am I up to date", "what version am I on", "werkforce, what's new". Run it any time; it reads and reports only, never touches your HQ.
---

# Release Notes - the briefing that tells you what changed and why it matters

A changelog is written for the people who shipped the change. This skill is written for you: it reads the same file and hands back what changed, in your terms - not "renamed stage enum," but "your boards now wait for your sign-off before a task reads Done." The changelog stays the record of truth; this is the translation.

This is a read, not a migration. It never edits `os/VERSION`, never touches a board, never writes anything to your HQ - **upgrade-your-werkforce** is the only skill that moves your HQ's version forward, and this skill points you at it when your HQ is behind what is installed.

## Personalization

This skill works in YOUR company's voice. Before anything else, I find your HQ -
the `werkforce/` folder in the current folder if one exists, otherwise
`~/werkforce/` - and read `HQ.md` plus `company/profile.md`. If there is no HQ
yet, run **install-your-werkforce** first (or just tell me your company name,
what you sell, and who you sell to, and I will set up the basics now). I never
invent facts, numbers, or results about your business - blanks stay blank until
you give me something real.

## What you get

- A one-paragraph recommendation up top: are you current, or is there something worth reading below - stated before any detail, never buried after it
- Your HQ's version (`os/VERSION`) next to the installed plugin's version, side by side
- Every release between the two, translated into what it means for you - not the raw changelog prose
- A clean "you're current" read when there is nothing new, stated as plainly as a gap would be
- Every fact labeled the same way the rest of your workforce labels facts - `[checked]` when I read the file this run, `[unknown]` when I could not
- Zero changes to your HQ, your boards, or your version files - a briefing, not an action
- No network calls, ever - only files already on this machine

## What I need from you

1. The Werkforce plugin installed, so there is a version and a changelog to read. If it is missing, I say so and stop - there is nothing to brief.
2. An HQ, optional. Without one I can still tell you what the installed plugin's latest changes are; I just cannot compare them against a version that does not exist yet.
3. Nothing else. No interview, no questions - say the phrase and read.

## How it works

### Step 1 - Read the two version markers

I read two files, fresh, this run:

- **The installed plugin's version**, from `$CLAUDE_PLUGIN_ROOT/.claude-plugin/plugin.json`, the `"version"` field - a three-part `MAJOR.MINOR.PATCH` (e.g. `3.2.0`). This is the plugin actually loaded right now - the same file `session-start.sh` reads for the boot banner, so it is never a guess.
- **Your HQ's schema version**, from `<HQ>/os/VERSION` - one line, two-part `MAJOR.MINOR` (e.g. `3.1`), written only by **upgrade-your-werkforce**.

**The comparison rule, stated plainly:** `os/VERSION` only ever carries two parts. Every version this skill compares against it - the installed plugin's version, and every changelog entry's own version header - is truncated to its first two dot-separated parts (`MAJOR.MINOR`) before the comparison happens. `3.2.0` truncates to `3.2`; `3.1.0` truncates to `3.1`. The truncated value is used for placement only - the full three-part version is still what gets shown to you.

Either file missing renders as `unknown` for that side of the comparison - never a crash, never a guessed number. If the plugin version is unknown I cannot read a changelog scoped to it, so I say that plainly and stop rather than inventing what might be in it. If only your HQ version is unknown (no HQ, or a pre-`os/VERSION` first-generation HQ), I still report everything the installed plugin's changelog says, just without a "since you" cut line - and I say so.

### Step 2 - Read the changelog that ships with what's installed

I read `$CLAUDE_PLUGIN_ROOT/CHANGELOG.md` - the changelog bundled inside the plugin you actually have installed, not a staging copy in any build folder. That is the one file guaranteed to describe the version that is actually running this session. Missing file renders as `unknown` for "what's new," reported as a named gap, never papered over with a best guess at what might have shipped.

Every entry's version and date live in its own `## ` header line (for example `## 3.2.0 - 2026-07-24 (release candidate - founder push pending)`) - that header, not any arrow notation, is what I read to place each entry. An `os A -> B` schema-move line inside an entry's body is enrichment only, shown when present because it names the schema move in the entry's own words - never required, and its absence never drops an entry from the briefing. Entries state schema moves inconsistently and only in prose: the 3.2.0 entry names its move in a bullet ("Schema move (os 3.1 → 3.2), additive migration"), the 3.1.0 entry names its move inside a MIGRATION section ("This is a schema move (`os/VERSION` 3.0 → 3.1)..."), and every 3.0.x entry carries none at all - no consistent field, no fixed position, nothing regex-shaped. That inconsistency is itself the argument for cutting on headers rather than prose: the header is the one part of every entry that is never missing or reworded.

### Step 3 - Cut the list to what's actually new to you

The cut runs on version headers, truncated per the rule in Step 1 - never on the arrow line, which may or may not be there.

- If your HQ version is known: I keep every changelog entry whose header version, truncated to `MAJOR.MINOR`, is strictly greater than your HQ version. An entry whose truncated header equals your HQ version or is older is not kept - that is the release that already brought you to where you are, or one further back still. If nothing is kept, you are current.
- One stated limit, honestly: `os/VERSION` only tracks the schema generation, not the exact patch. If more than one changelog entry shares your HQ's current `MAJOR.MINOR` (several patches inside one schema generation), I cannot tell from `os/VERSION` alone which of those patches you already have the content of - I name that gap in the briefing rather than guessing which ones to show or hide.
- If your HQ version is unknown (no HQ, or no `os/VERSION` yet): I report the full changelog as "what the installed plugin carries," clearly labeled as not compared against anything, because there is nothing to compare against.
- If the plugin version and your HQ's most recent applied release already match: I say "you're current" in one line and stop there - a briefing that finds nothing new says so as plainly as one that finds plenty.

### Step 4 - Translate, don't quote

For each kept entry, one short paragraph in plain language: what changed, and what it actually means for how you use Werkforce day to day - not the changelog's own wording lifted verbatim. A schema-changing entry also gets one line naming that **upgrade-your-werkforce** is what moves your HQ onto it; this skill never does that move itself. I never add a capability, a fix, or a behavior the changelog does not state - if an entry is terse, the translation stays terse rather than filling gaps with a guess.

### Step 5 - The briefing

I open with the recommendation - current, or not - then the detail, in this shape:

```markdown
# Release briefing - {{DATE}}

**You're N release(s) behind.** (or: **You're current.**)

Your HQ: os/VERSION {{X}} [checked] (or [unknown])
Installed plugin: {{Y}} [checked] (or [unknown])

## What's new since your HQ last moved

### {{version}} - {{date}}{{ - schema move os A -> B, when the entry states one}}
{{plain-language translation of what changed and what it means for you}}
(repeat per kept entry, newest first)

(or, when nothing is kept:)
Nothing has shipped since your HQ's version. You're current. [checked]

## Next step
Say "upgrade my werkforce" to bring your HQ onto {{latest os version}}. (only shown when a schema move is pending)
```

Nothing here is filed to a board or a log - this skill reads and speaks, and the receipt is the conversation itself.

## Do this now

1. Say "what's new" (or "werkforce, what's new") any time you want the plain-language version of what changed.
2. Read the recommendation line first - current, or N releases behind - then the detail underneath it.
3. If the briefing shows a schema move pending, run **upgrade-your-werkforce** when you're ready - this skill only tells you it's there, it never moves you onto it.

Homework: say "what's new" once right after your next update lands - the briefing reads best the first time you run it against a version you have not seen yet.

Next: run **upgrade-your-werkforce** if a schema move is pending - that is the only skill that moves your HQ onto what this briefing just named.
