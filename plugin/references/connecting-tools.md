# Connecting third-party tools to Werkforce

<!-- B13 fold-in point. The full connection spec is in flight on the product board
(B13, filed 2026-07-22). This reference states the v1 posture the plugin ships
with; the formal spec replaces this file when it lands. -->

Werkforce is files plus skills. It needs no external service to run, and the
plugin pre-wires **no vendor MCP servers** in v1 (scoping brief section 2, MCP: none).
Connecting a tool (Slack, HubSpot, Linear, Gmail, and the like) is always the
founder's own act, on their machine, with their credentials.

## The posture (v1)

1. **Files-first, always standalone.** Every skill works with zero connectors.
   A connected tool *supercharges* a skill; it is never required for the skill to run.
2. **Run reads, confirm writes.** A connected tool may be read freely to ground
   work. Anything that leaves the building through that tool - a send, a post, a
   record write - is a founder-reserved call: it queues in `company/decision-log.md`
   and the `guard-send` hook stops a live send until the founder approves.
3. **The founder connects, not the workforce.** MCP servers are added by the
   founder to their own Claude Code config. The plugin ships none and assumes none.
4. **HQ record outranks the connector.** When a connected source and the HQ
   record disagree, the HQ record wins; the connector is an input, never the truth.

## The connection process (v1, until B13's spec lands)

- The founder adds the tool's MCP server to their Claude Code configuration.
- The relevant skill detects the connected capability and uses it read-first.
- Any write/send path routes through the founder gate (decision log + guard-send).
- No credential is ever written into the HQ tree or a plugin file.

## TODO - B13 fold-in

The formal third-party connection spec (product board B13) defines the
per-connector onboarding steps, the capability-detection contract, and the
graceful-degradation documentation pattern (assimilation synthesis G17). When it
passes review, it replaces this reference and may add a `connect-a-tool` skill.
