# Connecting third-party tools to Werkforce

<!-- Posture reference. The connect-a-tool skill owns the connection process;
this page states the standing rules that process runs under. -->

Werkforce is files plus skills. It needs no external service to run, and the
plugin pre-wires **no vendor MCP servers**. Connecting a tool (Slack, HubSpot,
Linear, Gmail, and the like) happens only on the founder's explicit go-ahead,
on their machine, with their credentials.

## The posture

1. **Files-first, always standalone.** Every skill works with zero connectors.
   A connected tool *supercharges* a skill; it is never required for the skill to run.
2. **Run reads, confirm writes.** A connected tool may be read freely to ground
   work. Anything that leaves the building through that tool - a send, a post, a
   record write - is a founder-reserved call: it queues in `company/decision-log.md`
   and the `guard-send` hook stops a live send until the founder approves.
3. **The founder decides, every time.** Nothing is installed or wired without
   the founder's explicit yes, one source at a time - and ending with zero
   connections is a fully valid finish.
4. **HQ record outranks the connector.** When a connected source and the HQ
   record disagree, the HQ record wins; the connector is an input, never the truth.

## The connection process

The **connect-a-tool** skill owns the process end to end: it inventories where
your work actually lives, then - on your one-word yes per source - performs the
wiring itself and proves each connection live before it counts. Say "connect a
tool" or "map my tools" to run it. Every write/send path still routes through
the founder gate above, and no credential is ever written into the HQ tree or
a plugin file.
