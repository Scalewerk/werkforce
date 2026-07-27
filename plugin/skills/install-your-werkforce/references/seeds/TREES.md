# TREES.md - tree authority

<!-- LIVING (edited by the founder or a session the founder directs). One row per copy of Werkforce content this machine holds. Roles: live (the one true HQ), staging (a build tree, dies after its release), frozen (kept for evidence, never written), dead (superseded, never written). The checkup's tree-authority tripwire warns when a frozen or dead tree gains a file after its freeze date. -->

| Path | Role | Writer | Frozen since | Acknowledged through | Notes |
| --- | --- | --- | --- | --- | --- |
| werkforce/ | live | this HQ's sessions | — | — | the one true HQ |

## The ambiguity rule

When two trees could both plausibly receive a write, the write goes NOWHERE
until this file says which tree is live. A session that cannot find the
target's row here stops and asks the founder instead of guessing - a wrong-tree
write is cheap to prevent and expensive to unwind.
