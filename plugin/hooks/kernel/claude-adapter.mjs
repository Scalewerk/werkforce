#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { decide } from "./guard.mjs";
// Malformed stdin fails CLOSED, matching the guard CLI - a crashed adapter
// would fail open, and enforcement must not depend on well-formed input.
let input={};
try { input=JSON.parse(readFileSync(0,"utf8")||"{}"); }
catch { process.stdout.write(JSON.stringify({hookSpecificOutput:{hookEventName:"PreToolUse",permissionDecision:"deny",permissionDecisionReason:"Denied: malformed hook input"}})+"\n"); process.exit(0); }
const d=decide(input);
process.stdout.write(JSON.stringify(d.allow?{}:{hookSpecificOutput:{hookEventName:"PreToolUse",permissionDecision:"deny",permissionDecisionReason:d.reason}})+"\n");
