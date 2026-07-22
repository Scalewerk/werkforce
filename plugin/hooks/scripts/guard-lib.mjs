// Shared read of the PreToolUse/PostToolUse stdin payload, cross-platform via
// Node (guaranteed present wherever Claude Code was installed through npm).
// Fail-open by design: if stdin is empty or unparseable, callers get empty
// strings and must then allow the action. A guard must never block work by
// malfunctioning. Node parses JSON natively, so no jq/python dependency.
import { readFileSync } from "node:fs";

export function readPayload() {
  let payload = "";
  try {
    payload = readFileSync(0, "utf8");
  } catch {
    payload = "";
  }
  let data = {};
  try {
    if (payload.trim()) data = JSON.parse(payload);
  } catch {
    data = {};
  }
  const input = data.tool_input || {};
  return {
    toolName: data.tool_name || "",
    cmd: input.command || "",
    file: input.file_path || "",
    content: input.content || input.new_string || "",
  };
}

// Block: deny the tool call and tell Claude why. Exit 2 is the PreToolUse
// block signal Claude Code recognizes on every platform.
export function block(message) {
  process.stderr.write(message + "\n");
  process.exit(2);
}

// Run a guard body with fail-open semantics: any thrown error exits 0 (allow),
// mirroring the bash `trap 'exit 0' ERR` the shell guards used.
export function failOpen(fn) {
  try {
    fn();
  } catch {
    process.exit(0);
  }
  process.exit(0);
}
