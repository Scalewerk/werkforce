# Talking to your Werkforce from a chat surface

<!-- Ratified posture reference. Source: the signed chat-surface bridge design
(departments/product/outbox/2026-07-23-chat-surface-bridge-design.md, Product
Manager PASS + operator sign-off 2026-07-23) plus the founder's 2026-07-25
build greenlight. This file states the standing posture; it is not itself an
onboarding step or a skill — no chat-surface-bridge skill exists yet, and
folding this into an actual onboarding flow is a later, separate move (same
restraint the connect-a-tool skill was held to in the third-party connection
spec). -->

A chat surface — Discord, Telegram, Slack — is a **transport**, not a brain.
The founder's Werkforce (their Claude Code / Codex session over their HQ
files) is the brain; a bridge only carries a message in and a reply out.
**There is no unattended bot on Discord, ever; where a platform sanctions a
bot (Telegram, Slack) it may receive but never send unattended.** Every
outbound message is a founder-reserved external send: it queues in
`company/decision-log.md` and the send guard blocks the live call until the
founder approves — reading a surface to ground work is free, sending on it is
always gated.

## Per-surface posture (ratified)

| Surface | Inbound | Outbound | Status |
|---|---|---|---|
| **Discord** | Founder's message read via computer-use driving the desktop app, founder-authorized per use | **Default: a $0 webhook post** of founder-approved output. Interactive back-and-forth: computer-use send, founder-authorized per use | Ratified default — no self-bot, ever |
| **Telegram** | Bot API message to the founder's own bot | Bot API reply, send-gated at launch | Ratified as the **primary** bridge surface |
| **Slack** | Slack app / MCP message | Slack app reply, send-gated at launch | **Deferred** — Business tier only, waits on a Business subscriber |

Each ratified choice took the signed design's own recommendation, on the founder's
"assume the design's recommendation on any open fork" build directive
(2026-07-25):

1. **Telegram is the primary bridge surface.** [best guess] Its Bot API is
   first-class, free, and bot-sanctioned by design — no self-bot problem, no
   computer-use requirement, no marginal cost. Nobody has live-verified
   Telegram's ToS the way Discord's Guideline 14 was live-verified on
   2026-07-22 — treat this as an unverified guess, not law, until someone
   checks it. This is the surface a founder should reach for first once a
   bridge is actually built.
2. **Discord's default is webhook-out; computer-use is interactive-only, and
   only per founder authorization.** A standing Discord user account that
   reads and replies on its own is banned by Discord Community Guideline 14
   and is off the table permanently. The interactive computer-use path
   carries the documented Guideline-14 exposure; the founder owns that risk
   knowingly [checked: decision-log.md:88] — it is not presented here as a
   clean alternative to the webhook default, only as the founder-authorized
   exception.
3. **Slack waits.** It is reserved to Academy+ Business subscribers
   [checked: `company/business-model.md`]; building it before a Business
   subscriber exists would be built-ahead-of-need.

## The invariants every surface obeys

1. **No unattended bot on Discord, ever** — the mechanism there is
   founder-authorized computer-use, per use, never a standing listener. Where
   a platform sanctions a bot (Telegram, Slack), the bot may receive; it may
   never send unattended — see invariant 2.
2. **Outbound is always founder-gated.** Every reply that leaves the building
   queues at `company/decision-log.md` and stops at the send guard, regardless
   of how clean the surface's own bot model is (Telegram and Slack's
   bot-sanctioned APIs do not relax this — the gate is a Werkforce law, not a
   platform limitation).
3. **The founder connects, not the workforce.** Bot tokens and credentials are
   runtime-side only; nothing is written into the HQ tree or a plugin file.
4. **Files-first stays the floor.** The bridge is optional. Werkforce runs
   completely from the terminal with no bridge connected on any surface.
5. **No cross-surface message bus.** Each surface is its own adapter; there is
   no universal daemon, keeping marginal cost and attack surface at zero.

## What is not yet built

This file records the posture only. Not built: a `chat-surface-bridge` (or
similarly named) onboarding skill, any webhook-sending code, any Bot API
client, and any onboarding-checklist step that walks a founder through
picking a surface. Those are future, separately-scoped moves — the same
restraint the third-party connection spec held `connect-a-tool` to
(`departments/product/outbox/2026-07-23-third-party-connection-spec.md`,
"founder-gated" recommendation 1). This posture reference exists so that
whichever session eventually builds one of those has a ratified spec to build
against, instead of re-deriving the Discord Guideline-14 posture from scratch.
