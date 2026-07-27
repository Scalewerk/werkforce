#!/usr/bin/env python3
"""Transactional lifecycle writer for one Werkforce board row.

The event log is the source of truth, but a lifecycle action is not complete
until its board row, applicable human ledgers, fleet, machine receipt, and
generated views agree.  This writer stages every truth-file change, snapshots
the generated consumers, commits with atomic per-file replacement, and rolls
the whole transaction back if any later write or regeneration fails.

An interrupted transaction leaves its pre-images and state journal under
records/.lifecycle-transactions/.  The next invocation restores that journal
before accepting new work.  Completed transactions leave a compact,
machine-readable receipt under records/writer-receipts/.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from datetime import datetime
from pathlib import Path


STAGES = (
    "Filed",
    "In progress",
    "Blocked",
    "Manager review",
    "Operator review",
    "Done",
    "Dropped",
)
EVENTS = ("signoff", "sendback", "dispatch", "report", "filed", "stage", "decision", "note")
TREES = ("canonical", "frozen", "staging", "installed", "shadow", "dead")
FLEET_STATUSES = ("working", "reviewing", "reported", "closed")
AUDIT_TYPES = (
    "install",
    "onboarding",
    "task",
    "review",
    "decision",
    "send",
    "spend",
    "hire",
    "warning",
    "session",
    "skill",
    "archive",
    "backup",
    "upgrade",
    "note",
)
BOARD_ROW_RE = re.compile(
    r"^\| (.*) \| (Filed|In progress|Blocked|Manager review|Operator review|Done|Dropped) "
    r"\| (.*) \| (\d{4}-\d{2}-\d{2}) \| (\d{4}-\d{2}-\d{2}) \| (.*) \|$"
)
HEX8_RE = re.compile(r"^[0-9a-f]{8}$")
KEY_RE = re.compile(r"^[A-Za-z0-9._-]{8,120}$")


class WriterError(RuntimeError):
    pass


def sha256_bytes(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def sha1_text(value: str) -> str:
    return hashlib.sha1(value.encode("utf-8")).hexdigest()


def dept_prefix(slug: str) -> str:
    letters = re.sub(r"[^a-z]", "", slug.lower())
    return (letters[:3] or "xxx").upper()


def row_ids(dept: str, task: str, filed: str) -> tuple[str, str]:
    digest = sha1_text(f"{task}\0{filed}")
    return f"{dept_prefix(dept)}-{digest[:4]}", f"{dept}-{digest}"


def clean_field(name: str, value: str) -> str:
    if any(ord(ch) < 32 or ord(ch) == 127 for ch in value):
        raise WriterError(f"--{name} contains a newline, tab, or control character")
    return value.strip()


def append_line(existing: bytes, line: str) -> bytes:
    if not line or "\n" in line or "\r" in line:
        raise WriterError("refusing an empty or multi-line ledger append")
    if existing and not existing.endswith(b"\n"):
        existing += b"\n"
    return existing + line.encode("utf-8") + b"\n"


def read_bytes(path: Path) -> bytes:
    return path.read_bytes() if path.exists() else b""


def atomic_replace(path: Path, data: bytes) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, temp_name = tempfile.mkstemp(prefix=f".{path.name}.writer-", dir=str(path.parent))
    try:
        with os.fdopen(fd, "wb") as handle:
            handle.write(data)
            handle.flush()
            os.fsync(handle.fileno())
        os.replace(temp_name, path)
    except Exception:
        try:
            os.unlink(temp_name)
        except FileNotFoundError:
            pass
        raise


def parse_board(path: Path) -> list[dict[str, object]]:
    rows: list[dict[str, object]] = []
    for index, raw in enumerate(path.read_text(encoding="utf-8").splitlines(), start=1):
        match = BOARD_ROW_RE.match(raw)
        if not match:
            continue
        task, stage, seat, filed, due, receipt = match.groups()
        rows.append(
            {
                "line": index,
                "raw": raw,
                "task": task,
                "stage": stage,
                "seat": seat,
                "filed": filed,
                "due": due,
                "receipt": receipt,
            }
        )
    return rows


def resolve_row(
    board: Path,
    dept: str,
    requested_id: str,
    expected_preimage: str,
    expected_stage: str,
    founder_override: bool,
) -> dict[str, object]:
    matches = []
    for row in parse_board(board):
        short_id, full_id = row_ids(dept, str(row["task"]), str(row["filed"]))
        if requested_id in (short_id, full_id):
            row["short_id"] = short_id
            row["full_id"] = full_id
            matches.append(row)
    if len(matches) != 1:
        raise WriterError(
            f"--row-id {requested_id!r} resolved {len(matches)} rows in {board}; expected exactly one"
        )
    row = matches[0]
    actual_hash = sha256_bytes(str(row["raw"]).encode("utf-8"))
    if not actual_hash.startswith(expected_preimage):
        if not founder_override:
            raise WriterError(
                f"preimage mismatch for {row['short_id']}: expected {expected_preimage}, "
                f"live is {actual_hash}; no fuzzy or line-number match attempted"
            )
        row["override_preimage"] = actual_hash
    if row["stage"] != expected_stage:
        if not founder_override:
            raise WriterError(
                f"stage mismatch for {row['short_id']}: expected {expected_stage!r}, "
                f"live is {row['stage']!r}"
            )
        row["override_stage"] = row["stage"]
    return row


def validate_path(hq: Path, value: str) -> None:
    if value.startswith("no-file:"):
        if not value[len("no-file:") :].strip():
            raise WriterError("no-file: requires an explicit reason")
        return
    candidates: list[Path]
    if value.endswith(".md+.html"):
        stem = value[: -len(".md+.html")]
        candidates = [hq / f"{stem}.md", hq / f"{stem}.html"]
    else:
        candidates = [hq / value]
    missing = [str(path.relative_to(hq)) for path in candidates if not path.exists()]
    if missing:
        raise WriterError(f"--path does not resolve against the quiesced HQ: {', '.join(missing)}")


def generated_paths(hq: Path) -> list[Path]:
    records = hq / "records"
    paths = list(records.glob("*.html"))
    for dirname in ("boards", "lineage", "outcomes", "views", "agents"):
        root = records / dirname
        if root.exists():
            paths.extend(path for path in root.rglob("*") if path.is_file())
    state = records / "dashboard-refresh" / "state.json"
    if state.exists():
        paths.append(state)
    return sorted(set(paths))


def write_json(path: Path, value: object) -> None:
    atomic_replace(path, (json.dumps(value, indent=2, sort_keys=True) + "\n").encode("utf-8"))


def backup_files(hq: Path, txdir: Path, paths: list[Path], name: str) -> list[dict[str, object]]:
    result: list[dict[str, object]] = []
    base = txdir / name
    for path in paths:
        relative = path.relative_to(hq)
        entry: dict[str, object] = {"path": str(relative), "existed": path.exists()}
        if path.exists():
            destination = base / relative
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(path, destination)
            entry["sha256"] = sha256_bytes(path.read_bytes())
        result.append(entry)
    return result


def restore_entries(hq: Path, txdir: Path, entries: list[dict[str, object]], name: str) -> None:
    base = txdir / name
    for entry in entries:
        path = hq / str(entry["path"])
        if bool(entry["existed"]):
            backup = base / str(entry["path"])
            if not backup.exists():
                raise WriterError(f"rollback backup missing for {entry['path']}")
            atomic_replace(path, backup.read_bytes())
        elif path.exists():
            path.unlink()


def recover_incomplete(hq: Path) -> None:
    root = hq / "records" / ".lifecycle-transactions"
    if not root.exists():
        return
    for txdir in sorted(path for path in root.iterdir() if path.is_dir()):
        state_path = txdir / "state.json"
        if not state_path.exists():
            raise WriterError(f"incomplete transaction without state: {txdir}")
        state = json.loads(state_path.read_text(encoding="utf-8"))
        if state.get("state") in ("complete", "rolled_back"):
            continue
        restore_entries(hq, txdir, state.get("truth_backups", []), "truth")
        restore_entries(hq, txdir, state.get("generated_backups", []), "generated")
        state["state"] = "rolled_back"
        state["recovered_at"] = datetime.now().astimezone().isoformat()
        write_json(state_path, state)
        print(f"RECOVERED: rolled back interrupted transaction {txdir.name}", file=sys.stderr)


def acquire_lock(hq: Path) -> Path:
    lock = hq / "records" / ".lifecycle-writer.lock"
    lock.parent.mkdir(parents=True, exist_ok=True)
    try:
        fd = os.open(lock, os.O_CREAT | os.O_EXCL | os.O_WRONLY, 0o600)
    except FileExistsError as exc:
        raise WriterError(f"writer lock already exists: {lock}") from exc
    with os.fdopen(fd, "w", encoding="utf-8") as handle:
        handle.write(f"pid={os.getpid()} started={datetime.now().astimezone().isoformat()}\n")
    return lock


def parse_args(argv: list[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--hq", default=None)
    parser.add_argument("--event", required=True, choices=EVENTS)
    parser.add_argument("--dept", required=True)
    parser.add_argument("--row", required=True)
    parser.add_argument("--board")
    parser.add_argument("--row-id")
    parser.add_argument("--preimage-sha256")
    parser.add_argument("--stage-from", choices=STAGES)
    parser.add_argument("--stage-to", choices=STAGES)
    parser.add_argument("--path", default="no-file:not-applicable")
    parser.add_argument("--artifact")
    parser.add_argument("--tree", default="canonical", choices=TREES)
    parser.add_argument("--actor", required=True)
    parser.add_argument("--detail", required=True)
    parser.add_argument("--receipt")
    parser.add_argument("--receipt-correction", action="store_true")
    parser.add_argument("--fleet-status", choices=FLEET_STATUSES)
    parser.add_argument("--audit-type", choices=AUDIT_TYPES)
    parser.add_argument("--idempotency-key", required=True)
    parser.add_argument("--founder-override", action="store_true")
    parser.add_argument("--test", action="store_true")
    args = parser.parse_args(argv)
    return args


def main(argv: list[str]) -> int:
    args = parse_args(argv)
    script_hq = Path(__file__).resolve().parent.parent
    hq = Path(args.hq).expanduser().resolve() if args.hq else script_hq
    if not (hq / "HQ.md").exists():
        raise WriterError(f"not a Werkforce HQ: {hq}")

    for name in ("dept", "row", "path", "artifact", "actor", "detail", "receipt", "idempotency_key"):
        value = getattr(args, name, None)
        if value is not None:
            setattr(args, name, clean_field(name.replace("_", "-"), value))
    if not KEY_RE.fullmatch(args.idempotency_key):
        raise WriterError("--idempotency-key must be 8-120 letters, digits, dots, underscores, or hyphens")
    if args.artifact and not HEX8_RE.fullmatch(args.artifact):
        raise WriterError("--artifact must be exactly eight lowercase hex characters")
    if args.receipt_correction:
        if args.event != "note" or args.stage_from != "Done" or args.stage_to != "Done":
            raise WriterError("--receipt-correction requires --event note --stage-from Done --stage-to Done")
        if not args.artifact:
            raise WriterError("--receipt-correction requires --artifact")
    if args.event == "signoff":
        if args.stage_to != "Done" or not args.artifact:
            raise WriterError("signoff requires --stage-to Done and --artifact")
        if args.actor.lower() not in ("austin", "founder"):
            raise WriterError("signoff is founder-reserved; --actor must be Austin or founder")
    if args.event == "sendback" and args.stage_to != "In progress":
        raise WriterError("sendback requires --stage-to 'In progress'")
    if args.stage_to == "Done" and args.event != "signoff" and not args.receipt_correction:
        raise WriterError("Done can be entered only by signoff; Done-to-Done correction uses --receipt-correction")
    if bool(args.stage_from) != bool(args.stage_to):
        raise WriterError("--stage-from and --stage-to must be supplied together")
    has_board_move = bool(args.stage_from)
    if has_board_move and not (args.board and args.row_id and args.preimage_sha256):
        raise WriterError(
            "a row change requires --board, --row-id, and --preimage-sha256; "
            "line numbers and title substrings are not accepted"
        )
    if args.preimage_sha256 and (
        len(args.preimage_sha256) < 12 or not re.fullmatch(r"[0-9a-f]+", args.preimage_sha256)
    ):
        raise WriterError("--preimage-sha256 must be a lowercase hex prefix of at least 12 characters")
    if args.founder_override and args.actor.lower() not in ("austin", "founder"):
        raise WriterError("--founder-override is available only to Austin/founder")
    if has_board_move and any("|" in value for value in (args.detail, args.path, args.receipt or "")):
        raise WriterError("board-moving --detail/--path/--receipt values cannot contain '|'")
    validate_path(hq, args.path)

    recover_incomplete(hq)
    lock = acquire_lock(hq)
    txdir: Path | None = None
    try:
        events_path = hq / "records" / "events.jsonl"
        existing_events: list[dict[str, object]] = []
        for line_number, line in enumerate(events_path.read_text(encoding="utf-8").splitlines(), 1):
            if not line.strip():
                raise WriterError(f"blank events.jsonl line at {line_number}")
            try:
                existing_events.append(json.loads(line))
            except json.JSONDecodeError as exc:
                raise WriterError(f"invalid events.jsonl line at {line_number}: {exc}") from exc
        matching = [event for event in existing_events if event.get("idempotency_key") == args.idempotency_key]
        if matching:
            print(f"ALREADY APPLIED: {args.idempotency_key}")
            return 0

        now = datetime.now().astimezone()
        ts = now.strftime("%Y-%m-%d %H:%M:%S %z")
        date = now.strftime("%Y-%m-%d")
        time12 = now.strftime("%I:%M %p").lstrip("0")
        board_path: Path | None = None
        row: dict[str, object] | None = None
        founder_warning = ""
        if has_board_move:
            board_path = (hq / args.board).resolve()
            try:
                board_path.relative_to(hq)
            except ValueError as exc:
                raise WriterError("--board must stay inside the HQ") from exc
            expected_board = (hq / "departments" / args.dept / "board.md").resolve()
            if board_path != expected_board:
                raise WriterError(f"--board must be the owning department board: {expected_board.relative_to(hq)}")
            row = resolve_row(
                board_path,
                args.dept,
                args.row_id,
                args.preimage_sha256,
                args.stage_from,
                args.founder_override,
            )
            if "override_preimage" in row or "override_stage" in row:
                founder_warning = (
                    f"founder override for {row['short_id']}: expected preimage/stage did not match "
                    "the live founder-edited board; writer honored the uniquely resolved stable row"
                )

        audit_type = args.audit_type
        if not audit_type:
            audit_type = {
                "signoff": "review",
                "sendback": "review",
                "dispatch": "task",
                "report": "task",
                "filed": "task",
                "stage": "task",
                "decision": "decision",
                "note": "note",
            }[args.event]
        short_id = str(row["short_id"]) if row else args.row
        full_id = str(row["full_id"]) if row else None
        testmark = "[TEST] " if args.test else ""
        detail = args.detail
        event: dict[str, object] = {
            "ts": ts,
            "event": args.event,
            "dept": args.dept,
            "row": str(row["task"]) if row else args.row,
            "stage_from": args.stage_from,
            "stage_to": args.stage_to,
            "path": args.path,
            "artifact": args.artifact,
            "tree": args.tree,
            "actor": args.actor,
            "detail": detail,
            "source": "live",
            "idempotency_key": args.idempotency_key,
        }
        if row:
            event.update(
                {
                    "row_id": short_id,
                    "row_stable_id": full_id,
                    "board": str(board_path.relative_to(hq)),
                    "preimage_sha256": sha256_bytes(str(row["raw"]).encode("utf-8")),
                }
            )
        if args.receipt_correction:
            event["receipt_correction"] = True
        if args.test:
            event["test"] = True
        if founder_warning:
            event["founder_override"] = True

        board_receipt = ""
        if row:
            if args.receipt_correction:
                board_receipt = (
                    f"{date} {time12} receipt correction via os/signoff.sh - {detail} - {args.path} "
                    f"· artifact {args.artifact} · tree {args.tree} · txn {args.idempotency_key}"
                )
            elif args.event == "signoff":
                board_receipt = (
                    f"founder signed-off {date} {time12} via os/signoff.sh - {detail} - {args.path} "
                    f"· artifact {args.artifact} · tree {args.tree} · txn {args.idempotency_key}"
                )
            elif args.event == "sendback":
                board_receipt = (
                    f"founder sent-back {date} {time12} via os/signoff.sh - {detail} - {args.path} "
                    f"· tree {args.tree} · txn {args.idempotency_key}"
                )
            else:
                board_receipt = args.receipt or (
                    f"{date} {time12} {args.actor} moved {args.stage_from} -> {args.stage_to} - "
                    f"{detail} - {args.path} · tree {args.tree} · txn {args.idempotency_key}"
                )
            if args.stage_to == "Done":
                article3 = (
                    re.search(r"\d{4}-\d{2}-\d{2} \d{1,2}:\d{2} (?:AM|PM)", board_receipt)
                    and (args.path.startswith("no-file:") or args.path in board_receipt)
                    and args.artifact
                    and f"artifact {args.artifact}" in board_receipt
                    and f"tree {args.tree}" in board_receipt
                )
                if not article3:
                    raise WriterError("computed Done receipt failed the Article-3 field check")

        truth_changes: dict[Path, bytes] = {}
        truth_changes[events_path] = append_line(
            read_bytes(events_path), json.dumps(event, ensure_ascii=False, separators=(",", ":"))
        )
        audit_path = hq / "records" / "audit-log.md"
        audit_line = (
            f"- {date} {time12} [{audit_type}] [{args.actor}] [{args.dept}] {testmark}{short_id} "
            f"— {detail} - {args.path} · txn {args.idempotency_key}"
        )
        truth_changes[audit_path] = append_line(read_bytes(audit_path), audit_line)

        if row and board_path:
            lines = board_path.read_text(encoding="utf-8").splitlines()
            new_line = (
                f"| {row['task']} | {args.stage_to} | {row['seat']} | {row['filed']} | "
                f"{row['due']} | {board_receipt} |"
            )
            lines[int(row["line"]) - 1] = new_line
            truth_changes[board_path] = ("\n".join(lines) + "\n").encode("utf-8")

        if args.event in ("signoff", "sendback"):
            reviews = hq / "records" / "operator-reviews.md"
            verb = "signed-off" if args.event == "signoff" else "sent-back"
            line = (
                f"- {date} [{args.dept}] {testmark}{short_id} {verb}: {detail} "
                f"· txn {args.idempotency_key}"
            )
            truth_changes[reviews] = append_line(read_bytes(reviews), line)

        if args.event == "signoff" or args.receipt_correction:
            worklog = hq / "records" / "worklog.md"
            correction = "receipt correction for " if args.receipt_correction else ""
            line = (
                f"- {date} {time12} [{args.dept}] {testmark}{correction}{short_id} - receipt: "
                f"{detail}, {args.path} · artifact {args.artifact} · tree {args.tree}, "
                f"reviewed by {args.actor} · txn {args.idempotency_key}"
            )
            truth_changes[worklog] = append_line(read_bytes(worklog), line)

        if args.event in ("dispatch", "report") or args.fleet_status:
            fleet = hq / "records" / "fleet.md"
            status = args.fleet_status or ("working" if args.event == "dispatch" else "reported")
            line = (
                f"- {testmark}{args.actor} - {short_id} | {status} | dispatched {date} {time12} | "
                f"last heard {date} {time12} | {args.path} · txn {args.idempotency_key}"
            )
            truth_changes[fleet] = append_line(read_bytes(fleet), line)

        if founder_warning:
            warnings = hq / "records" / "warnings.md"
            line = f"- {date} [lifecycle-writer] {founder_warning} · txn {args.idempotency_key}"
            truth_changes[warnings] = append_line(read_bytes(warnings), line)

        receipt_path = hq / "records" / "writer-receipts" / f"{args.idempotency_key}.json"
        receipt = {
            "schema": "werkforce.lifecycle-writer.receipt.v1",
            "idempotency_key": args.idempotency_key,
            "ts": ts,
            "event": args.event,
            "dept": args.dept,
            "row_id": short_id,
            "row_stable_id": full_id,
            "board": str(board_path.relative_to(hq)) if board_path else None,
            "preimage_sha256": event.get("preimage_sha256"),
            "stage_from": args.stage_from,
            "stage_to": args.stage_to,
            "path": args.path,
            "artifact": args.artifact,
            "tree": args.tree,
            "actor": args.actor,
            "truth_surfaces": sorted(str(path.relative_to(hq)) for path in truth_changes),
            "generated_by": "records/dashboard-refresh/generate.py",
            "status": "committed",
        }
        truth_changes[receipt_path] = (json.dumps(receipt, indent=2, sort_keys=True) + "\n").encode("utf-8")

        txroot = hq / "records" / ".lifecycle-transactions"
        txroot.mkdir(parents=True, exist_ok=True)
        txdir = Path(tempfile.mkdtemp(prefix=f"{args.idempotency_key}-", dir=str(txroot)))
        truth_paths = sorted(truth_changes)
        generated_before = generated_paths(hq)
        state = {
            "schema": "werkforce.lifecycle-writer.transaction.v1",
            "idempotency_key": args.idempotency_key,
            "state": "prepared",
            "truth_backups": backup_files(hq, txdir, truth_paths, "truth"),
            "generated_backups": backup_files(hq, txdir, generated_before, "generated"),
            "generated_preexisting": [str(path.relative_to(hq)) for path in generated_before],
        }
        write_json(txdir / "state.json", state)
        fail_at = os.environ.get("WERKFORCE_WRITER_FAIL_AT", "")
        if fail_at == "before_commit":
            raise WriterError("forced failure before commit")

        try:
            state["state"] = "committing"
            write_json(txdir / "state.json", state)
            for index, path in enumerate(truth_paths, start=1):
                atomic_replace(path, truth_changes[path])
                if fail_at == f"commit:{index}":
                    raise WriterError(f"forced failure after truth replacement {index}")
            if fail_at == "after_truth":
                raise WriterError("forced failure after truth commit")

            generator = hq / "records" / "dashboard-refresh" / "generate.py"
            if generator.exists() and not args.test:
                result = subprocess.run(
                    [sys.executable, str(generator)],
                    cwd=hq,
                    text=True,
                    capture_output=True,
                    check=False,
                )
                if result.returncode != 0:
                    raise WriterError(
                        "generated-view rebuild failed: "
                        + (result.stderr.strip() or result.stdout.strip() or f"exit {result.returncode}")
                    )
            if fail_at == "after_regen":
                raise WriterError("forced failure after generated-view rebuild")

            # Verify the committed truth before reporting success.
            last_event = json.loads(events_path.read_text(encoding="utf-8").splitlines()[-1])
            if last_event.get("idempotency_key") != args.idempotency_key:
                raise WriterError("post-commit event-tail verification failed")
            if row and board_path:
                post_rows = [
                    candidate
                    for candidate in parse_board(board_path)
                    if row_ids(args.dept, str(candidate["task"]), str(candidate["filed"]))[0] == short_id
                ]
                if len(post_rows) != 1 or post_rows[0]["stage"] != args.stage_to:
                    raise WriterError("post-commit board-stage verification failed")
                if post_rows[0]["receipt"] != board_receipt:
                    raise WriterError("post-commit board-receipt verification failed")
            state["state"] = "complete"
            state["completed_at"] = datetime.now().astimezone().isoformat()
            write_json(txdir / "state.json", state)
        except Exception:
            restore_entries(hq, txdir, state["truth_backups"], "truth")
            # Remove generated files the failed run created, then restore every pre-image.
            preexisting = set(state["generated_preexisting"])
            for path in generated_paths(hq):
                if str(path.relative_to(hq)) not in preexisting:
                    path.unlink()
            restore_entries(hq, txdir, state["generated_backups"], "generated")
            state["state"] = "rolled_back"
            state["rolled_back_at"] = datetime.now().astimezone().isoformat()
            write_json(txdir / "state.json", state)
            raise

        print("WROTE ATOMICALLY:")
        for path in truth_paths:
            print(f"  - {path.relative_to(hq)}")
        if (hq / "records" / "dashboard-refresh" / "generate.py").exists() and not args.test:
            print("  - generated views")
        if board_receipt:
            print(f"BOARD RECEIPT APPLIED: {board_receipt}")
        print(f"MACHINE RECEIPT: {receipt_path.relative_to(hq)}")
        return 0
    finally:
        try:
            lock.unlink()
        except FileNotFoundError:
            pass


if __name__ == "__main__":
    try:
        raise SystemExit(main(sys.argv[1:]))
    except WriterError as exc:
        print(f"lifecycle-writer: {exc}", file=sys.stderr)
        raise SystemExit(1)
