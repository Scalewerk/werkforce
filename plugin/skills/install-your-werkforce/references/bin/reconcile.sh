#!/usr/bin/env bash
# Portable entrypoint for the read-only lifecycle reconciler.
set -u

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec python3 "$SCRIPT_DIR/reconcile.py" "$@"
