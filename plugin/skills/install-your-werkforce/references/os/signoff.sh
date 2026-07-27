#!/usr/bin/env bash
# os/signoff.sh — the one lifecycle write door.
#
# The Python sibling owns stable-row resolution, preimage/from-stage validation,
# event + board + applicable ledger/fleet writes, generated-view rebuilds,
# idempotency, rollback, and interrupted-transaction recovery. A board move
# requires --board, --row-id, --preimage-sha256, --stage-from, --stage-to, and a
# caller-stable --idempotency-key. The writer applies the board receipt itself;
# no caller pastes or hand-edits lifecycle state after this command returns.
#
# Founder direct writes remain constitutionally allowed. If the founder asks
# this writer to proceed across a live preimage/stage mismatch, Austin may pass
# --founder-override; the uniquely resolved row is written and the override is
# appended to records/warnings.md in the same transaction.

set -u
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec python3 "$SCRIPT_DIR/lifecycle_writer.py" "$@"
