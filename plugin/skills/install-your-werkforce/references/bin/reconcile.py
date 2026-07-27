#!/usr/bin/env python3
"""Read-only reconciliation of Done board rows, worklog receipts, and events.

Historical rows are accepted when their receipt has a resolvable file pointer
and a matching worklog reference.  Rows without that legacy pointer are never
silently called clean: they require an Article-3 receipt correction written by
the transactional lifecycle writer.  New Article-3 receipts are checked for
date, time, path or explicit no-file reason, artifact, tree, event, and
worklog joins.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from pathlib import Path


STAGES = "Filed|In progress|Blocked|Manager review|Operator review|Done|Dropped"
ROW_RE = re.compile(
    rf"^\| (.*) \| ({STAGES}) \| (.*) \| (\d{{4}}-\d{{2}}-\d{{2}}) "
    rf"\| (\d{{4}}-\d{{2}}-\d{{2}}) \| (.*) \|$"
)
ARTIFACT_RE = re.compile(r"\bartifact ([0-9a-f]{8})\b")
DATE_TIME_RE = re.compile(r"\b\d{4}-\d{2}-\d{2} \d{1,2}:\d{2} (?:AM|PM)\b")
TREE_RE = re.compile(r"\btree (canonical|frozen|staging|installed|shadow|dead)\b")
OUTBOX_RE = re.compile(
    r"((?:departments/[a-z0-9-]+/)?outbox/[0-9A-Za-z._+-]+\.md(?:\+\.html)?)"
)
GENERIC_PATH_RE = re.compile(
    r"((?:departments|records|skills|company|os|bin)/[0-9A-Za-z._/+:-]+"
    r"(?:\.md\+\.html|\.md|\.html|\.json|\.jsonl|\.sh|\.py))"
)
NO_FILE_RE = re.compile(r"\b(no-file:[A-Za-z0-9][A-Za-z0-9._:-]*)\b")
TXN_RE = re.compile(r"\btxn ([A-Za-z0-9._-]{8,120})\b")


def sha1_text(value: str) -> str:
    return hashlib.sha1(value.encode("utf-8")).hexdigest()


def prefix(dept: str) -> str:
    letters = re.sub(r"[^a-z]", "", dept.lower())
    return (letters[:3] or "xxx").upper()


def row_ids(dept: str, task: str, filed: str) -> tuple[str, str]:
    digest = sha1_text(f"{task}\0{filed}")
    return f"{prefix(dept)}-{digest[:4]}", f"{dept}-{digest}"


def path_candidates(hq: Path, value: str) -> list[Path]:
    if value.startswith("no-file:"):
        return []
    if value.endswith(".md+.html"):
        stem = value[: -len(".md+.html")]
        return [hq / f"{stem}.md", hq / f"{stem}.html"]
    return [hq / value]


def receipt_path(receipt: str) -> str | None:
    no_file = NO_FILE_RE.search(receipt)
    if no_file:
        return no_file.group(1)
    if TXN_RE.search(receipt):
        # A transactional receipt names the writer before it names the
        # evidence path. Choose the last path token before the artifact field.
        before_artifact = receipt.split(" · artifact ", 1)[0]
        pointers = list(OUTBOX_RE.finditer(before_artifact)) + list(
            GENERIC_PATH_RE.finditer(before_artifact)
        )
        pointer = max(pointers, key=lambda match: match.start()) if pointers else None
        return pointer.group(1) if pointer else None
    # A legacy receipt may mention operator-reviews.md after its actual outbox
    # evidence. Preserve the historical rule: the outbox file is the pointer.
    pointer = OUTBOX_RE.search(receipt)
    return pointer.group(1) if pointer else None


def parse_events(path: Path) -> list[dict[str, object]]:
    if not path.exists():
        raise ValueError("records/events.jsonl is missing")
    events: list[dict[str, object]] = []
    for line_number, raw in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        if not raw.strip():
            raise ValueError(f"records/events.jsonl has a blank line at {line_number}")
        try:
            value = json.loads(raw)
        except json.JSONDecodeError as exc:
            raise ValueError(f"records/events.jsonl line {line_number} is invalid JSON: {exc}") from exc
        if not isinstance(value, dict):
            raise ValueError(f"records/events.jsonl line {line_number} is not an object")
        value["_line"] = line_number
        events.append(value)
    return events


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--hq")
    args = parser.parse_args(argv)
    script_hq = Path(__file__).resolve().parent.parent
    hq = Path(args.hq).expanduser().resolve() if args.hq else script_hq
    if not (hq / "HQ.md").exists():
        print(f"reconcile: not a Werkforce HQ: {hq}", file=sys.stderr)
        return 2

    debts: list[str] = []
    worklog_text = (hq / "records" / "worklog.md").read_text(encoding="utf-8")
    try:
        events = parse_events(hq / "records" / "events.jsonl")
    except ValueError as exc:
        print(f"reconcile: {exc}", file=sys.stderr)
        return 2
    live_events = [event for event in events if not event.get("test")]
    event_artifacts = {
        str(event["artifact"])
        for event in live_events
        if isinstance(event.get("artifact"), str)
        and re.fullmatch(r"[0-9a-f]{8}", str(event["artifact"]))
    }
    worklog_artifacts = set(ARTIFACT_RE.findall(worklog_text))
    correction_events = [
        event
        for event in live_events
        if event.get("receipt_correction") is True
        and isinstance(event.get("row_stable_id"), str)
        and isinstance(event.get("artifact"), str)
    ]
    corrections_by_row = {str(event["row_stable_id"]): event for event in correction_events}

    rows: list[dict[str, str]] = []
    for board in sorted((hq / "departments").glob("*/board.md")):
        dept = board.parent.name
        for line_number, raw in enumerate(board.read_text(encoding="utf-8").splitlines(), 1):
            match = ROW_RE.match(raw)
            if not match or match.group(2) != "Done":
                continue
            task, stage, seat, filed, due, receipt = match.groups()
            short_id, full_id = row_ids(dept, task, filed)
            rows.append(
                {
                    "dept": dept,
                    "board": str(board.relative_to(hq)),
                    "line": str(line_number),
                    "task": task,
                    "receipt": receipt,
                    "short_id": short_id,
                    "full_id": full_id,
                }
            )

    board_artifacts: set[str] = set()
    legacy_verified = 0
    corrected_verified = 0
    blind_rows = 0
    for row in rows:
        receipt = row["receipt"]
        label = f"{row['short_id']} ({row['board']}:{row['line']})"
        artifact_match = ARTIFACT_RE.search(receipt)
        artifact = artifact_match.group(1) if artifact_match else None
        pointer = receipt_path(receipt)
        if pointer and pointer.startswith("outbox/"):
            pointer = f"departments/{row['dept']}/{pointer}"
        transaction = TXN_RE.search(receipt)
        correction = corrections_by_row.get(row["full_id"])
        article3 = bool(
            DATE_TIME_RE.search(receipt)
            and pointer
            and artifact
            and TREE_RE.search(receipt)
            and transaction
        )

        if artifact:
            board_artifacts.add(artifact)
        if article3:
            missing_paths = [
                path.relative_to(hq).as_posix()
                for path in path_candidates(hq, str(pointer))
                if not path.exists()
            ]
            if missing_paths:
                debts.append(f"{label} receipt path missing: {', '.join(missing_paths)}")
            if artifact not in worklog_artifacts:
                debts.append(f"{label} artifact {artifact} missing from worklog.md")
            if artifact not in event_artifacts:
                debts.append(f"{label} artifact {artifact} missing from live events.jsonl")
            if not correction:
                debts.append(f"{label} Article-3 correction has no stable-row correction event")
            else:
                if correction.get("artifact") != artifact:
                    debts.append(f"{label} receipt/event artifact mismatch")
                if correction.get("path") != pointer:
                    debts.append(f"{label} receipt/event path mismatch")
                if correction.get("idempotency_key") != transaction.group(1):
                    debts.append(f"{label} receipt/event transaction mismatch")
            corrected_verified += 1
            continue

        # Legacy verification is deliberately narrower than Article 3.  It
        # requires a concrete file pointer that exists and a distinctive
        # filename reference in the worklog.  Anything else remains blind
        # until corrected by stable row ID.
        if pointer and "/outbox/" in str(pointer) and not str(pointer).startswith("no-file:"):
            candidates = path_candidates(hq, str(pointer))
            missing_paths = [path.relative_to(hq).as_posix() for path in candidates if not path.exists()]
            stem = candidates[0].stem if candidates else ""
            keyword = re.sub(r"^\d{4}-\d{2}-\d{2}-", "", stem)
            tokens = sorted(
                (token for token in re.split(r"[-_]", keyword) if len(token) >= 5),
                key=len,
                reverse=True,
            )[:3]
            referenced = stem in worklog_text or any(
                re.search(re.escape(token), worklog_text, re.IGNORECASE) for token in tokens
            )
            if missing_paths:
                debts.append(f"{label} legacy path missing: {', '.join(missing_paths)}")
            elif not referenced:
                debts.append(f"{label} legacy pointer has no worklog reference: {pointer}")
            else:
                legacy_verified += 1
        else:
            blind_rows += 1
            debts.append(f"{label} BLIND: no machine-verifiable legacy pointer or Article-3 correction")

    for artifact in sorted(board_artifacts):
        if artifact not in worklog_artifacts:
            debts.append(f"board artifact {artifact} missing from worklog.md")
        if artifact not in event_artifacts:
            debts.append(f"board artifact {artifact} missing from live events.jsonl")

    # A historical null signoff must be superseded by a stable-row correction
    # that points to the same department/path and supplies a real artifact.
    null_signoffs = [
        event
        for event in live_events
        if event.get("event") == "signoff"
        and event.get("source") == "live"
        and event.get("artifact") is None
    ]
    unresolved_null = 0
    for event in null_signoffs:
        resolved = any(
            correction.get("dept") == event.get("dept")
            and correction.get("path") == event.get("path")
            and correction.get("artifact") in worklog_artifacts
            for correction in correction_events
        )
        if not resolved:
            unresolved_null += 1
            debts.append(
                "historical null signoff unresolved: "
                f"{event.get('dept')}/{event.get('row')} at events.jsonl:{event.get('_line')}"
            )

    # Preserve order while suppressing duplicate set-join explanations.
    unique_debts = list(dict.fromkeys(debts))
    print(f"Reconciling HQ at: {hq}")
    print(f"DONE ROWS: {len(rows)}")
    print(f"LEGACY POINTER VERIFIED: {legacy_verified}")
    print(f"ARTICLE-3 CORRECTIONS VERIFIED: {corrected_verified}")
    print(f"BOARD ARTIFACT IDS: {len(board_artifacts)}")
    print(f"HISTORICAL NULL SIGNOFFS: {len(null_signoffs)}; UNRESOLVED: {unresolved_null}")
    print(f"BLIND ROWS: {blind_rows}")
    if unique_debts:
        for debt in unique_debts:
            print(f"OWING: {debt}")
        print(f"VERDICT: owing {len(unique_debts)}")
        return 1
    print("VERDICT: clean")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
