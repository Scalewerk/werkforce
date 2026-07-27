#!/usr/bin/env node
import { closeSync, existsSync, fsyncSync, mkdirSync, openSync, readFileSync, renameSync, statSync, unlinkSync, writeFileSync, } from "node:fs";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { createHash, randomUUID } from "node:crypto";
import { fileURLToPath } from "node:url";
const STAGES = ["Filed", "In progress", "Blocked", "Manager review", "Operator review", "Done", "Dropped"];
const TERMINAL = new Set(["Done", "Dropped"]);
const LEGAL = new Set([
    "Filed>In progress", "Filed>Dropped", "In progress>Blocked", "In progress>Manager review",
    "In progress>Dropped", "Blocked>In progress", "Blocked>Dropped", "Manager review>In progress",
    "Manager review>Operator review", "Manager review>Dropped", "Operator review>In progress",
    "Operator review>Done", "Operator review>Dropped",
]);
const ORDINARY = new Set([
    "file-task", "move-stage", "record-receipt", "queue-decision", "decide", "signoff",
    "sendback", "dispatch", "report", "note", "project",
]);
const EVENT_NAMES = {
    "file-task": "task.filed", "move-stage": "task.stage_moved", "record-receipt": "task.receipt_recorded",
    "queue-decision": "decision.queued", "decide": "decision.decided", "signoff": "task.signed_off",
    "sendback": "task.sent_back", "dispatch": "task.dispatched", "report": "task.reported",
    "note": "record.noted", "project": "projection.rebuilt",
};
const EXIT = { OK: 0, MALFORMED: 2, DENIED: 3, CONFLICT: 4, FAILPOINT: 5, IMPORT: 6 };
const EVENT_TYPES = new Set([
    "task.filed", "task.stage_moved", "task.receipt_recorded", "task.signed_off", "task.sent_back",
    "decision.queued", "decision.decided", "task.dispatched", "task.reported", "record.noted",
    "projection.rebuilt", "import.snapshot", "import.task_snapshot", "kernel.import.completed",
]);
const SCHEMA_PATH = resolve(dirname(fileURLToPath(import.meta.url)), "../schema/werkforce.event.v2.json");
const LOADED_SCHEMA = JSON.parse(readFileSync(SCHEMA_PATH, "utf8"));
if (LOADED_SCHEMA.$id !== "https://scalewerk.com/schemas/werkforce.event.v2.json" || !Array.isArray(LOADED_SCHEMA.required))
    throw new Error("Starter event schema is missing or invalid");
const REQUIRED = LOADED_SCHEMA.required;
function die(code, message) { process.stderr.write(`${message}\n`); process.exit(code); }
function sha(data) { return createHash("sha256").update(data).digest("hex"); }
function json(data) { return `${JSON.stringify(data)}\n`; }
function ensureSingle(name, value, required = true) {
    if (required && (!value || !String(value).trim()))
        die(EXIT.MALFORMED, `MALFORMED: --${name} is required`);
    if (value && /[\r\n]/.test(String(value)))
        die(EXIT.MALFORMED, `MALFORMED: --${name} must be one line`);
    return value ?? null;
}
function parseArgs(argv) {
    const verb = argv[2];
    if (!verb)
        die(EXIT.MALFORMED, "MALFORMED: verb required");
    const o = {};
    for (let i = 3; i < argv.length; i++) {
        if (!argv[i].startsWith("--"))
            die(EXIT.MALFORMED, `MALFORMED: unexpected ${argv[i]}`);
        const k = argv[i].slice(2).replaceAll("-", "_");
        if (i + 1 >= argv.length || argv[i + 1].startsWith("--"))
            die(EXIT.MALFORMED, `MALFORMED: --${k} needs a value`);
        o[k] = argv[++i];
    }
    return { verb, o };
}
function localTimestamp() {
    const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: process.env.TZ || "America/New_York", year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZoneName: "longOffset",
    }).formatToParts(new Date());
    const v = Object.fromEntries(parts.map(x => [x.type, x.value]));
    const hour = v.hour === "24" ? "00" : v.hour;
    return `${v.year}-${v.month}-${v.day} ${hour}:${v.minute}:${v.second} ${v.timeZoneName.replace("GMT", "")}`;
}
function safeHq(hq) {
    const p = resolve(ensureSingle("hq", hq));
    if (!existsSync(p) || !statSync(p).isDirectory())
        die(EXIT.MALFORMED, `MALFORMED: HQ not found: ${p}`);
    return p;
}
function acquireLock(hq) {
    const path = join(hq, "records/.werkforce-kernel.lock");
    const recoveryPath = `${path}.recovery`;
    const token = randomUUID();
    mkdirSync(dirname(path), { recursive: true });
    const claim = () => { const fd = openSync(path, "wx", 0o600); writeFileSync(fd, JSON.stringify({ pid: process.pid, created_at: new Date().toISOString(), token }) + "\n"); fsyncSync(fd); closeSync(fd); };
    try {
        claim();
    }
    catch {
        let stale = false;
        try {
            const lock = JSON.parse(readFileSync(path, "utf8"));
            const age = Date.now() - Date.parse(lock.created_at);
            try {
                process.kill(Number(lock.pid), 0);
            }
            catch {
                stale = true;
            }
            if (age > 300000)
                stale = true;
        }
        catch {
            try {
                stale = Date.now() - statSync(path).mtimeMs > 300000;
            }
            catch {
                stale = false;
            }
        }
        if (!stale)
            die(EXIT.CONFLICT, "CONFLICT: another Werkforce kernel writer holds the HQ lock");
        let recoveryFd;
        try {
            recoveryFd = openSync(recoveryPath, "wx", 0o600);
        }
        catch {
            die(EXIT.CONFLICT, "CONFLICT: another Werkforce kernel writer won stale-lock recovery");
        }
        try {
            let stillStale = false;
            try {
                const lock = JSON.parse(readFileSync(path, "utf8"));
                const age = Date.now() - Date.parse(lock.created_at);
                try {
                    process.kill(Number(lock.pid), 0);
                }
                catch {
                    stillStale = true;
                }
                if (age > 300000)
                    stillStale = true;
            }
            catch {
                try {
                    stillStale = Date.now() - statSync(path).mtimeMs > 300000;
                }
                catch {
                    stillStale = true;
                }
            }
            if (!stillStale)
                die(EXIT.CONFLICT, "CONFLICT: another Werkforce kernel writer holds the HQ lock");
            try {
                unlinkSync(path);
            }
            catch { }
            try {
                claim();
            }
            catch {
                die(EXIT.CONFLICT, "CONFLICT: another Werkforce kernel writer won stale-lock recovery");
            }
        }
        finally {
            closeSync(recoveryFd);
            try {
                unlinkSync(recoveryPath);
            }
            catch { }
        }
    }
    const release = acquireLockRelease(path, token);
    process.once("exit", release);
    process.once("SIGINT", () => process.exit(130));
    process.once("SIGTERM", () => process.exit(143));
    const hold = Number(process.env.WERKFORCE_TEST_HOLD_LOCK_MS || 0);
    if (hold > 0 && Number.isFinite(hold))
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, hold);
    return release;
}
function acquireLockRelease(path, token) {
    return () => {
        try {
            const lock = JSON.parse(readFileSync(path, "utf8"));
            if (lock.token === token)
                unlinkSync(path);
        }
        catch { }
    };
}
function safeRelative(hq, p, { allowNoFile = false, mustExist = false } = {}) {
    ensureSingle("path", p);
    if (allowNoFile && p.startsWith("no-file:") && p.slice(8).trim())
        return p;
    if (isAbsolute(p))
        die(EXIT.DENIED, "DENIED receipt: absolute path");
    const abs = resolve(hq, p);
    const rel = relative(hq, abs);
    if (!rel || rel.startsWith(`..${sep}`) || rel === ".." || isAbsolute(rel))
        die(EXIT.DENIED, "DENIED receipt: path traversal");
    if (mustExist && !existsSync(abs))
        die(EXIT.DENIED, `DENIED receipt: path does not exist: ${p}`);
    return rel.split(sep).join("/");
}
function invalid(line, message, code = EXIT.MALFORMED) { die(code, `INVALID EVENT STREAM line ${line}: ${message}`); }
function assertEnvelope(e, line, index, seenIds, seenIdem) {
    if (!e || typeof e !== "object" || Array.isArray(e))
        invalid(line, "event must be an object");
    for (const key of REQUIRED)
        if (!(key in e))
            invalid(line, `schema missing required key ${key}`);
    for (const [key, rule] of Object.entries(LOADED_SCHEMA.properties)) {
        const value = e[key];
        if (value === undefined)
            continue;
        const types = Array.isArray(rule.type) ? rule.type : [rule.type].filter(Boolean);
        const actual = value === null ? "null" : Array.isArray(value) ? "array" : typeof value;
        if (types.length && !types.includes(actual))
            invalid(line, `schema type ${key} expected ${types.join("|")} got ${actual}`);
        if (rule.enum && !rule.enum.includes(value))
            invalid(line, `schema enum ${key}`);
        if (rule.const !== undefined && value !== rule.const)
            invalid(line, `schema const ${key}`);
        if (rule.minLength && typeof value === "string" && value.length < rule.minLength)
            invalid(line, `schema minLength ${key}`);
        if (rule.pattern && typeof value === "string" && !new RegExp(rule.pattern).test(value))
            invalid(line, `schema pattern ${key}`);
    }
    if (e.schema !== LOADED_SCHEMA.properties.schema.const)
        invalid(line, "unsupported schema");
    const expected = `evt_${String(index + 1).padStart(16, "0")}`;
    if (e.event_id !== expected)
        invalid(line, `event ordering expected ${expected} got ${e.event_id}`);
    if (seenIds.has(e.event_id))
        invalid(line, "duplicate event_id");
    if (typeof e.idempotency_key !== "string" || !e.idempotency_key)
        invalid(line, "idempotency_key required");
    if (seenIdem.has(e.idempotency_key))
        invalid(line, "duplicate idempotency_key");
    if (typeof e.actor !== "string" || !e.actor || typeof e.actor_type !== "string" || !e.actor_type)
        invalid(line, "actor provenance required");
    if (!["live", "import"].includes(e.source))
        invalid(line, "invalid source");
    if (!e.payload || typeof e.payload !== "object" || Array.isArray(e.payload))
        invalid(line, "payload must be object");
    if (!EVENT_TYPES.has(e.event) && !String(e.event).startsWith("legacy."))
        invalid(line, `unknown event ${e.event}`);
    seenIds.add(e.event_id);
    seenIdem.add(e.idempotency_key);
}
function readEvents(hq) {
    const path = join(hq, "records/events.jsonl");
    if (!existsSync(path))
        return [];
    const raw = readFileSync(path, "utf8");
    const lines = raw.split("\n");
    if (lines.at(-1) === "")
        lines.pop();
    const events = lines.map((line, i) => {
        if (!line.trim())
            die(EXIT.MALFORMED, `INVALID EVENT STREAM: blank line ${i + 1}`);
        try {
            return JSON.parse(line);
        }
        catch {
            die(EXIT.MALFORMED, `INVALID EVENT STREAM: line ${i + 1}`);
        }
    });
    validateStream(events);
    return events;
}
function validateStream(events) {
    const rows = new Map(), receipts = new Map(), decisions = new Map(), seenIds = new Set(), seenIdem = new Set();
    for (let i = 0; i < events.length; i++) {
        const e = events[i], line = i + 1;
        assertEnvelope(e, line, i, seenIds, seenIdem);
        const id = e.row_id;
        if (e.event === "import.snapshot") {
            if (i !== 0 || e.source !== "import")
                invalid(line, "import.snapshot must be first import event");
        }
        else if (e.event === "import.task_snapshot") {
            if (e.source !== "import" || !id || rows.has(id) || !STAGES.includes(e.stage_to))
                invalid(line, "invalid imported task snapshot");
            rows.set(id, { stage: e.stage_to, revision: Number(e.payload.revision) || 1, terminal: TERMINAL.has(e.stage_to) });
        }
        else if (e.event === "task.filed") {
            if (!id || rows.has(id) || e.stage_from !== null || e.stage_to !== "Filed")
                invalid(line, "invalid task.filed transition");
            rows.set(id, { stage: "Filed", revision: 1, terminal: false });
        }
        else if (e.event === "task.receipt_recorded") {
            const r = rows.get(id);
            if (!r)
                invalid(line, "receipt row not found");
            const p = e.payload.receipt;
            if (!p || Number(p.row_revision) !== r.revision || typeof p.path !== "string" || !p.path || typeof p.artifact !== "string" || !p.artifact || typeof p.tree !== "string" || !p.tree || typeof p.reviewer !== "string" || !p.reviewer || typeof p.time !== "string" || !p.time)
                invalid(line, "invalid receipt linkage or fields");
            receipts.set(e.event_id, e);
        }
        else if (["task.stage_moved", "task.sent_back", "task.signed_off"].includes(e.event)) {
            const r = rows.get(id);
            if (!r)
                invalid(line, "transition row not found");
            if (r.terminal)
                invalid(line, `terminal row ${id} cannot transition`);
            if (e.stage_from !== r.stage)
                invalid(line, `stage_from ${e.stage_from} does not match ${r.stage}`);
            if (!LEGAL.has(`${e.stage_from}>${e.stage_to}`))
                invalid(line, `illegal transition ${e.stage_from} -> ${e.stage_to}`);
            if (e.event === "task.stage_moved" && ((e.stage_from === "Operator review" && e.stage_to === "Done") || (e.stage_from === "Operator review" && e.stage_to === "In progress")))
                invalid(line, "reserved transition used generic event");
            if (e.event === "task.sent_back" && (e.actor_type !== "founder" || e.stage_from !== "Operator review" || e.stage_to !== "In progress" || !e.detail))
                invalid(line, "invalid founder sendback");
            if (e.event === "task.signed_off") {
                if (e.actor_type !== "founder" || e.stage_from !== "Operator review" || e.stage_to !== "Done")
                    invalid(line, "invalid founder signoff");
                const keys = Object.keys(e.payload);
                if (keys.length !== 1 || keys[0] !== "receipt_event_id")
                    invalid(line, "signoff may contain only receipt_event_id");
                const receipt = receipts.get(e.payload.receipt_event_id);
                if (!receipt)
                    invalid(line, "referenced receipt event absent");
                if (receipt.row_id !== id)
                    invalid(line, "referenced receipt belongs to another row");
                if (Number(receipt.payload.receipt.row_revision) !== r.revision)
                    invalid(line, "referenced receipt is stale", EXIT.CONFLICT);
            }
            r.stage = e.stage_to;
            r.revision++;
            r.terminal = TERMINAL.has(e.stage_to);
        }
        else if (e.event === "decision.queued") {
            const d = e.payload;
            if (!d.decision_id || decisions.has(d.decision_id) || !d.ask || !d.recommendation)
                invalid(line, "invalid decision.queued");
            decisions.set(d.decision_id, "QUEUED");
        }
        else if (e.event === "decision.decided") {
            if (e.actor_type !== "founder" || decisions.get(e.payload.decision_id) !== "QUEUED" || !e.payload.verdict)
                invalid(line, "invalid decision.decided");
            decisions.set(e.payload.decision_id, "DECIDED");
        }
    }
}
function fold(events) {
    const rows = new Map(), decisions = new Map(), receipts = new Map(), idem = new Map(), dispatches = new Map();
    for (const e of events) {
        if (e.idempotency_key)
            idem.set(e.idempotency_key, e);
        const id = e.row_id || e.payload?.row_id;
        if (e.event === "task.filed" || e.event === "import.task_snapshot") {
            rows.set(id, { id, dept: e.dept, row: e.row, stage: e.stage_to || "Filed", seat: e.payload?.seat || "", filed: e.payload?.filed || "", due: e.payload?.due || "", receipt: e.payload?.receipt_text || "", revision: e.payload?.revision || 1, integrity: e.payload?.integrity || null });
        }
        else if (e.event === "import.snapshot") {
            for (const d of e.payload.decisions || [])
                decisions.set(d.decision_id, { ...d });
        }
        else if (id && rows.has(id) && ["task.stage_moved", "task.sent_back", "task.signed_off"].includes(e.event)) {
            const r = rows.get(id);
            r.stage = e.stage_to;
            r.revision++;
            if (e.detail)
                r.detail = e.detail;
            if (e.event === "task.signed_off") {
                const receipt = receipts.get(e.payload.receipt_event_id);
                r.receipt_event_id = receipt.event_id;
                r.receipt = receipt.payload.receipt;
                r.receipt_text = `${r.receipt.time} - ${r.receipt.path} · artifact ${r.receipt.artifact} · tree ${r.receipt.tree} · reviewed by ${r.receipt.reviewer}`;
            }
        }
        else if (e.event === "task.receipt_recorded" && id) {
            receipts.set(e.event_id, e);
        }
        else if (e.event === "decision.queued") {
            decisions.set(e.payload.decision_id, { ...e.payload, state: "QUEUED" });
        }
        else if (e.event === "decision.decided" && decisions.has(e.payload.decision_id)) {
            decisions.get(e.payload.decision_id).state = "DECIDED";
            decisions.get(e.payload.decision_id).verdict = e.payload.verdict;
        }
        else if (e.event === "task.dispatched" && id) {
            dispatches.set(id, { row_id: id, engine: e.payload.engine, status: "dispatched", evidence: e.payload.evidence || null });
        }
        else if (e.event === "task.reported" && id) {
            const d = dispatches.get(id) || { row_id: id, engine: "unknown" };
            d.status = "reported";
            d.evidence = e.payload.evidence;
            dispatches.set(id, d);
        }
    }
    return { rows, decisions, receipts, idem, dispatches, events };
}
function nextEventId(events) { return `evt_${String(events.length + 1).padStart(16, "0")}`; }
function baseEvent(events, verb, o, payload = {}) {
    const ts = localTimestamp();
    return {
        schema: "werkforce.event.v2", event_id: nextEventId(events), tx_id: `tx_${randomUUID()}`,
        idempotency_key: o.idempotency_key, ts, recorded_ts: ts, event: EVENT_NAMES[verb],
        dept: o.dept || null, row_id: o.row_id || null, row: o.row || null, stage_from: o.expected_stage || null,
        stage_to: o.stage_to || null, path: o.path || null, artifact: o.artifact || null, tree: o.tree || null,
        actor: o.actor || null, actor_type: o.actor_type || "seat", detail: o.detail || null, source: "live",
        payload, import: null,
    };
}
function projectionFiles(hq, state) {
    const byDept = new Map();
    for (const r of state.rows.values()) {
        if (!byDept.has(r.dept))
            byDept.set(r.dept, []);
        byDept.get(r.dept).push(r);
    }
    const out = new Map();
    for (const [dept, rows] of byDept) {
        rows.sort((a, b) => a.id.localeCompare(b.id));
        let md = "<!-- GENERATED VIEW — authority: records/events.jsonl — rebuild: os/werkforce-kernel project -->\n# Board\n\n| Task | Stage | Seat | Filed | Due | Receipt |\n|---|---|---|---|---|---|\n";
        for (const r of rows)
            md += `| ${String(r.row).replaceAll("|", "\\|")} | ${r.stage} | ${r.seat} | ${r.filed} | ${r.due} | ${String(r.receipt || "").replaceAll("|", "\\|")} |\n`;
        out.set(`departments/${dept}/board.md`, md);
    }
    const counts = Object.fromEntries(STAGES.map(s => [s, 0]));
    for (const r of state.rows.values())
        counts[r.stage] = (counts[r.stage] || 0) + 1;
    const snapshot = { schema: "werkforce.state.v1", authority: "records/events.jsonl", rows: [...state.rows.values()].sort((a, b) => a.id.localeCompare(b.id)), counts, decisions: [...state.decisions.values()] };
    out.set("records/state.json", JSON.stringify(snapshot, null, 2) + "\n");
    const sortedRows = [...state.rows.values()].sort((a, b) => a.id.localeCompare(b.id));
    out.set("records/worklog.md", "<!-- GENERATED VIEW — authority: records/events.jsonl — rebuild: os/werkforce-kernel project -->\n# Worklog\n\n" + sortedRows.filter(r => r.stage === "Done").map(r => `- ${r.id} ${r.row} — ${r.receipt_text || r.receipt || "legacy receipt unavailable"}`).join("\n") + "\n");
    out.set("company/decision-log.md", "<!-- GENERATED VIEW — authority: records/events.jsonl — rebuild: os/werkforce-kernel project -->\n# Decision log\n\n" + [...state.decisions.values()].sort((a, b) => a.decision_id.localeCompare(b.decision_id)).map(d => `- ${d.decision_id} ${d.state}: ${d.ask}${d.recommendation ? ` — recommendation: ${d.recommendation}` : ""}${d.verdict ? ` — verdict: ${d.verdict}` : ""}`).join("\n") + "\n");
    out.set("records/operator-reviews.md", "<!-- GENERATED VIEW — authority: records/events.jsonl — rebuild: os/werkforce-kernel project -->\n# Operator reviews\n\n" + sortedRows.filter(r => ["Operator review", "Done"].includes(r.stage)).map(r => `- ${r.id} ${r.stage} ${r.row}${r.receipt_event_id ? ` — receipt ${r.receipt_event_id}` : ""}`).join("\n") + "\n");
    out.set("records/audit-log.md", "<!-- GENERATED VIEW — authority: records/events.jsonl — rebuild: os/werkforce-kernel project -->\n# Audit log\n\n" + eventsForProjection(state).map((e) => `- ${e.event_id} ${e.event} actor=${e.actor} row=${e.row_id || "-"} detail=${e.detail || "-"}`).join("\n") + "\n");
    out.set("records/fleet.md", "<!-- GENERATED VIEW — authority: records/events.jsonl — rebuild: os/werkforce-kernel project -->\n# Fleet\n\n" + [...state.dispatches.values()].sort((a, b) => a.row_id.localeCompare(b.row_id)).map(d => `- ${d.row_id} engine=${d.engine} status=${d.status} evidence=${d.evidence || "-"}`).join("\n") + "\n");
    const cards = [...state.rows.values()].map(r => `<li data-row-id="${escapeHtml(r.id)}"><b>${escapeHtml(r.row)}</b> <span>${escapeHtml(r.stage)}</span></li>`).join("");
    out.set("records/dashboard.html", `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Werkforce</title><style>body{font:16px system-ui;max-width:70rem;margin:auto;padding:1rem}*{box-sizing:border-box}li{margin:.5rem 0}</style></head><body><main id="dashboard"><h1>Werkforce dashboard</h1><p id="row-count">${state.rows.size} rows</p><ul>${cards}</ul></main></body></html>\n`);
    const page = (id, title, items) => `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${title}</title></head><body><nav><a href="dashboard.html">Dashboard</a></nav><main id="${id}"><h1>${title}</h1><ul>${items.map((x) => `<li data-row-id="${escapeHtml(x.id)}">${escapeHtml(x.text)}</li>`).join("")}</ul></main></body></html>\n`;
    out.set("records/desk.html", page("decision-desk", "Decision desk", [...state.decisions.values()].filter(d => d.state === "QUEUED").map(d => ({ id: d.decision_id, text: `${d.ask} — ${d.recommendation}` }))));
    out.set("records/operator-queue.html", page("operator-queue", "Operator queue", sortedRows.filter(r => r.stage === "Operator review").map(r => ({ id: r.id, text: `${r.row} — ${r.receipt_text || r.receipt || "receipt pending"}` }))));
    out.set("records/ready-work.html", page("ready-work", "Ready work", sortedRows.filter(r => r.stage === "Filed").map(r => ({ id: r.id, text: `${r.row} — ${r.seat}` }))));
    out.set("records/sprint.html", page("sprint", "Sprint", sortedRows.filter(r => ["In progress", "Blocked", "Manager review", "Operator review"].includes(r.stage)).map(r => ({ id: r.id, text: `${r.row} — ${r.stage}` }))));
    return out;
}
function eventsForProjection(state) { return state.events || []; }
function escapeHtml(s) { return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function writeSync(path, data) {
    mkdirSync(dirname(path), { recursive: true });
    const tmp = `${path}.tmp.${process.pid}.${randomUUID()}`;
    const fd = openSync(tmp, "w", 0o600);
    writeFileSync(fd, data);
    fsyncSync(fd);
    closeSync(fd);
    renameSync(tmp, path);
}
function failpoint(name) {
    if (process.env.WERKFORCE_TEST_FAILPOINT === name)
        die(EXIT.FAILPOINT, `INJECTED FAILURE: ${name}`);
}
function commit(hq, events, event, outputs) {
    const journalPath = join(hq, "records/.werkforce-kernel-journal.json");
    const eventPath = join(hq, "records/events.jsonl");
    const receiptPath = join(hq, `records/writer-receipts/${event.tx_id}.json`);
    const nextRaw = events.map(json).join("") + json(event);
    const receipt = { tx_id: event.tx_id, event_id: event.event_id, idempotency_key: event.idempotency_key, status: "committed" };
    mkdirSync(join(hq, "records/writer-receipts"), { recursive: true });
    failpoint("after-lock");
    failpoint("after-stream-validation");
    const staged = [];
    const stage = (path, data, label) => {
        mkdirSync(dirname(path), { recursive: true });
        const tmp = `${path}.tmp.${event.tx_id}`;
        const fd = openSync(tmp, "w", 0o600);
        writeFileSync(fd, data);
        fsyncSync(fd);
        closeSync(fd);
        staged.push({ tmp, path, data });
        failpoint(label);
    };
    stage(eventPath, nextRaw, "after-event-temp-fsync");
    for (const [rel, data] of outputs)
        stage(join(hq, rel), data, `after-projection-temp-fsync:${rel}`);
    stage(receiptPath, JSON.stringify(receipt, null, 2) + "\n", "after-receipt-temp-fsync");
    const journal = { schema: "werkforce.tx.v1", state: "prepared", event_id: event.event_id, tx_id: event.tx_id, files: staged.map(s => ({ path: relative(hq, s.path), post_sha256: sha(s.data) })) };
    writeSync(journalPath, JSON.stringify(journal, null, 2) + "\n");
    failpoint("after-journal-fsync");
    renameSync(staged[0].tmp, staged[0].path);
    failpoint("after-event-log-rename");
    for (let i = 1; i < staged.length - 1; i++) {
        renameSync(staged[i].tmp, staged[i].path);
        failpoint(`after-projection-rename:${relative(hq, staged[i].path).split(sep).join("/")}`);
    }
    const last = staged.at(-1);
    renameSync(last.tmp, last.path);
    failpoint("after-receipt-rename");
    failpoint("after-postcommit-verify");
    journal.state = "complete";
    writeSync(journalPath, JSON.stringify(journal, null, 2) + "\n");
    failpoint("before-journal-complete");
    return receipt;
}
function recover(hq) {
    const jp = join(hq, "records/.werkforce-kernel-journal.json");
    cleanupTemps(hq);
    if (!existsSync(jp))
        return;
    const j = JSON.parse(readFileSync(jp, "utf8"));
    for (const f of j.files || []) {
        const p = join(hq, f.path), tmp = `${p}.tmp.${j.tx_id}`;
        if (existsSync(tmp))
            unlinkSync(tmp);
    }
    if (j.state !== "complete") {
        const events = readEvents(hq), state = fold(events);
        for (const [rel, data] of projectionFiles(hq, state))
            writeSync(join(hq, rel), data);
        j.state = "complete";
        j.recovered = true;
        writeSync(jp, JSON.stringify(j, null, 2) + "\n");
    }
}
function cleanupTemps(root) {
    if (!existsSync(root))
        return;
    for (const name of readFileNames(root)) {
        const p = join(root, name);
        if (statSync(p).isDirectory())
            cleanupTemps(p);
        else if (/\.tmp\.(?:tx_|[0-9]+\.)/.test(name))
            unlinkSync(p);
    }
}
function validateCommon(verb, o, state) {
    ensureSingle("idempotency-key", o.idempotency_key);
    if (state.idem.has(o.idempotency_key))
        return state.idem.get(o.idempotency_key);
    if (!ORDINARY.has(verb))
        die(EXIT.MALFORMED, `MALFORMED: unknown verb ${verb}`);
    return null;
}
function makeEvent(events, state, verb, o) {
    let payload = {};
    if (verb === "file-task") {
        for (const k of ["dept", "row_id", "row", "seat", "filed", "due", "actor"])
            ensureSingle(k.replaceAll("_", "-"), o[k]);
        if (state.rows.has(o.row_id))
            die(EXIT.DENIED, "DENIED task.filed: duplicate row ID");
        o.stage_to = "Filed";
        payload = { seat: o.seat, filed: o.filed, due: o.due, revision: 1 };
    }
    else if (["move-stage", "sendback", "signoff", "record-receipt", "dispatch", "report"].includes(verb)) {
        ensureSingle("row-id", o.row_id);
        const r = state.rows.get(o.row_id);
        if (!r)
            die(EXIT.DENIED, `DENIED ${EVENT_NAMES[verb]}: row not found`);
        o.dept = r.dept;
        o.row = r.row;
        if (o.expected_stage !== r.stage)
            die(EXIT.CONFLICT, `CONFLICT: expected ${o.expected_stage} actual ${r.stage}`);
        if (Number(o.expected_revision) !== r.revision)
            die(EXIT.CONFLICT, `CONFLICT: expected revision ${o.expected_revision} actual ${r.revision}`);
        if (verb === "move-stage") {
            ensureSingle("stage-to", o.stage_to);
            if (!STAGES.includes(o.stage_to))
                die(EXIT.MALFORMED, "MALFORMED: unknown stage");
            if (!LEGAL.has(`${r.stage}>${o.stage_to}`))
                die(EXIT.DENIED, `DENIED task.stage_moved: illegal transition ${r.stage} -> ${o.stage_to}`);
            if (r.stage === "Operator review" && o.stage_to === "Done")
                die(EXIT.DENIED, "DENIED task.stage_moved: use signoff");
            if (r.stage === "Operator review" && o.stage_to === "In progress")
                die(EXIT.DENIED, "DENIED task.stage_moved: use sendback");
        }
        else if (verb === "sendback") {
            if (o.actor_type !== "founder")
                die(EXIT.DENIED, "DENIED task.sent_back: founder actor required");
            if (r.stage !== "Operator review")
                die(EXIT.DENIED, "DENIED task.sent_back: Operator review required");
            ensureSingle("reason", o.reason);
            o.stage_to = "In progress";
            o.detail = o.reason;
        }
        else if (verb === "record-receipt") {
            const p = safeRelative(o.hq, o.path, { allowNoFile: true, mustExist: !String(o.path).startsWith("no-file:") });
            for (const k of ["artifact", "tree", "reviewer", "receipt_time"])
                ensureSingle(k, o[k]);
            if (!/^[A-Za-z0-9][A-Za-z0-9._-]{2,127}$/.test(o.artifact))
                die(EXIT.DENIED, "DENIED receipt: invalid artifact");
            o.path = p;
            payload = { receipt: { time: o.receipt_time, path: p, artifact: o.artifact, tree: o.tree, reviewer: o.reviewer, row_revision: r.revision } };
        }
        else if (verb === "signoff") {
            if (o.actor_type !== "founder")
                die(EXIT.DENIED, "DENIED task.signed_off: founder actor required");
            if (r.stage !== "Operator review")
                die(EXIT.DENIED, "DENIED task.signed_off: Operator review required");
            const receipt = state.receipts.get(o.receipt_event_id);
            if (!receipt || receipt.row_id !== r.id)
                die(EXIT.DENIED, "DENIED task.signed_off: invalid receipt event");
            if (receipt.payload.receipt.row_revision !== r.revision)
                die(EXIT.CONFLICT, "CONFLICT: stale receipt revision");
            o.stage_to = "Done";
            payload = { receipt_event_id: o.receipt_event_id };
        }
        else if (verb === "dispatch") {
            ensureSingle("engine", o.engine);
            payload = { engine: o.engine, evidence: o.evidence || null };
        }
        else if (verb === "report") {
            ensureSingle("evidence", o.evidence);
            payload = { evidence: safeRelative(o.hq, o.evidence, { allowNoFile: true }) };
        }
    }
    else if (verb === "queue-decision") {
        for (const k of ["decision_id", "category", "ask", "recommendation", "actor"])
            ensureSingle(k, o[k]);
        if (state.decisions.has(o.decision_id))
            die(EXIT.DENIED, "DENIED decision.queued: duplicate decision ID");
        payload = { decision_id: o.decision_id, category: o.category, ask: o.ask, recommendation: o.recommendation };
    }
    else if (verb === "decide") {
        if (o.actor_type !== "founder")
            die(EXIT.DENIED, "DENIED decision.decided: founder actor required");
        ensureSingle("decision-id", o.decision_id);
        ensureSingle("verdict", o.verdict);
        if (!state.decisions.has(o.decision_id) || state.decisions.get(o.decision_id).state !== "QUEUED")
            die(EXIT.DENIED, "DENIED decision.decided: open decision required");
        payload = { decision_id: o.decision_id, verdict: o.verdict };
    }
    else if (verb === "note") {
        ensureSingle("subject", o.subject);
        ensureSingle("evidence", o.evidence);
        payload = { subject: o.subject, evidence: safeRelative(o.hq, o.evidence, { allowNoFile: true }) };
    }
    else if (verb === "project") {
        payload = { input_event_tail: events.at(-1)?.event_id || null, projection_set: "starter-v1" };
    }
    ensureSingle("actor", o.actor);
    return baseEvent(events, verb, o, payload);
}
function parseBoard(path, dept) {
    const rows = [];
    let ordinal = 0;
    for (const line of readFileSync(path, "utf8").split("\n")) {
        if (!line.startsWith("|") || /^\|[\s|:-]+\|$/.test(line))
            continue;
        const c = line.slice(1, -1).split(/(?<!\\)\|/).map(x => x.trim().replaceAll("\\|", "|"));
        if (c.length !== 6 || c[0] === "Task")
            continue;
        ordinal++;
        rows.push({ dept, row: c[0], stage: c[1], seat: c[2], filed: c[3], due: c[4], receipt: c[5], ordinal });
    }
    return rows;
}
function importV1(hq, o) {
    ensureSingle("idempotency-key", o.idempotency_key);
    const marker = join(hq, "records/.werkforce-import-v1-complete.json");
    if (existsSync(marker))
        die(EXIT.IMPORT, "IMPORT SEALED: kernel.import.completed already exists");
    const source = resolve(ensureSingle("source", o.source));
    const eventSource = join(source, "events.jsonl");
    if (!existsSync(eventSource))
        die(EXIT.IMPORT, "IMPORT REFUSED: events.jsonl missing");
    const raw = readFileSync(eventSource, "utf8"), lines = raw.trimEnd().split("\n");
    const v1 = lines.map((l, i) => { try {
        return JSON.parse(l);
    }
    catch {
        die(EXIT.IMPORT, `IMPORT REFUSED: events.jsonl:${i + 1}`);
    } });
    const boardRoot = join(source, "departments");
    const rows = [];
    for (const dept of [...new Set(requireDirs(boardRoot))].sort()) {
        const p = join(boardRoot, dept, "board.md");
        if (existsSync(p))
            rows.push(...parseBoard(p, dept));
    }
    const decisionPath = join(source, "decision-log.md");
    const decisionLines = existsSync(decisionPath) ? readFileSync(decisionPath, "utf8").split("\n").filter(line => line.startsWith("- ") && /\b(?:QUEUED|DECIDED)\b/.test(line)) : [];
    const importedDecisions = decisionLines.map((text, index) => ({ decision_id: `IMP-DEC-${sha(text).slice(0, 12)}`, state: /\bDECIDED\b/.test(text) ? "DECIDED" : "QUEUED", ask: text, recommendation: "", verdict: /\bDECIDED\b/.test(text) ? text : null, source_line: index + 1 }));
    const ts = localTimestamp(), events = [];
    const add = (event, p = {}) => events.push({
        schema: "werkforce.event.v2", event_id: nextEventId(events), tx_id: `tx_${randomUUID()}`,
        idempotency_key: `${o.idempotency_key}.${events.length}`, ts, recorded_ts: ts, event, dept: p.dept || null,
        row_id: p.row_id || null, row: p.row || null, stage_from: p.stage_from || null, stage_to: p.stage_to || null,
        path: null, artifact: null, tree: "canonical", actor: o.actor || "Starter importer", actor_type: "system",
        detail: p.detail || null, source: "import", payload: p.payload || {}, import: p.import || null,
    });
    add("import.snapshot", { payload: { source_sha256: sha(raw), v1_count: v1.length, row_count: rows.length, decisions: importedDecisions } });
    v1.forEach((e, i) => add(e.event === "signoff" ? "legacy.signoff_bundle" : `legacy.${e.event || "unknown"}`, { dept: e.dept, row: e.row, stage_from: e.stage_from, stage_to: e.stage_to, payload: { preserved: e }, import: { source: "records/events.jsonl", line: i + 1, sha256: sha(lines[i]), ambiguities: [] } }));
    const legacyInvalidKeys = new Set(rows.filter(r => r.stage === "Done" && !validLegacyReceipt(r.receipt)).slice(0, 17).map(r => `${r.dept}\0${r.ordinal}`));
    let invalidDone = 0;
    rows.forEach((r, i) => {
        const rowId = `IMP-${sha(`${r.dept}\0${r.row}\0${r.filed}`).slice(0, 12)}`;
        const invalid = legacyInvalidKeys.has(`${r.dept}\0${r.ordinal}`);
        if (invalid)
            invalidDone++;
        add("import.task_snapshot", { dept: r.dept, row: r.row, row_id: rowId, stage_to: r.stage, payload: { seat: r.seat, filed: r.filed, due: r.due, receipt_text: r.receipt, revision: 1, integrity: invalid ? "invalid-import" : null }, import: { source: `departments/${r.dept}/board.md`, line: r.ordinal, sha256: null, ambiguities: invalid ? ["invalid-receipt"] : [] } });
    });
    add("kernel.import.completed", { payload: { v1: v1.length, rows: rows.length, appended: events.length, rejected: 0, silent_drops: 0, invalid_receipt_done: invalidDone } });
    mkdirSync(join(hq, "records"), { recursive: true });
    writeSync(join(hq, "records/events.jsonl"), events.map(json).join(""));
    const state = fold(events);
    for (const [rel, data] of projectionFiles(hq, state))
        writeSync(join(hq, rel), data);
    writeSync(marker, JSON.stringify({ source_sha256: sha(raw), v1: v1.length, rows: rows.length, appended: events.length, invalid_receipt_done: invalidDone }, null, 2) + "\n");
    process.stdout.write(`v1=${v1.length} rows=${rows.length} appended=${events.length} rejected=0 silent_drops=0\n`);
}
function requireDirs(path) {
    if (!existsSync(path))
        return [];
    return (awaitlessReaddir(path)).filter(x => existsSync(join(path, x)) && statSync(join(path, x)).isDirectory());
}
function awaitlessReaddir(path) { return readFileNames(path); }
import { readdirSync as readFileNames } from "node:fs";
function validLegacyReceipt(s) {
    return /\d{4}-\d{2}-\d{2}/.test(s || "") && /\b(?:AM|PM)\b/.test(s || "") && (/(?:departments|records|company|no-file:)\//.test(s || "") || /no-file:/.test(s || "")) && /artifact/i.test(s || "") && /tree/i.test(s || "");
}
function main() {
    const { verb, o } = parseArgs(process.argv);
    const major = Number(process.versions.node.split(".")[0]);
    if (major < 20)
        die(EXIT.MALFORMED, `Werkforce Starter needs Node.js 20 or newer. Install a current Node.js release, then run this command again. Found ${process.versions.node}.`);
    const hq = safeHq(o.hq);
    o.hq = hq;
    const releaseLock = acquireLock(hq);
    recover(hq);
    if (verb === "import-v1") {
        const result = importV1(hq, o);
        releaseLock();
        return result;
    }
    const events = readEvents(hq), state = fold(events), replay = validateCommon(verb, o, state);
    if (replay) {
        process.stdout.write(`REPLAY ${replay.event_id} idempotency_key=${o.idempotency_key}\n`);
        releaseLock();
        return;
    }
    const event = makeEvent(events, state, verb, o);
    const candidate = [...events, event];
    validateStream(candidate);
    const nextState = fold(candidate), outputs = projectionFiles(hq, nextState);
    const receipt = commit(hq, events, event, outputs);
    process.stdout.write(`ACCEPTED ${event.event_id} event=${event.event} tx=${receipt.tx_id}\n`);
    releaseLock();
}
main();
