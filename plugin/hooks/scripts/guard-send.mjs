// guard-send (BLOCK): external sends are a founder-reserved call. Drafts are
// always allowed; only a live send-capable tool call is stopped, pointed at the
// decision queue. Fail-open on any error.
import { readPayload, block, failOpen } from "./guard-lib.mjs";

failOpen(() => {
  const { toolName } = readPayload();
  if (!toolName) return;
  // Drafting tools are allowed through untouched.
  if (/draft/i.test(toolName)) return;
  // Live send-capable tools are stopped.
  if (/(send_mail|send_draft|send_message|_post|outlook_send|create_message.*send)/i.test(toolName)) {
    block(
      `guard-send: '${toolName}' sends outside the building - a founder-reserved call. Prepare it as a draft and queue the send in company/decision-log.md for the founder. (Release valve: a founder-approval token lifting this block is a reserved design, not yet wired.)`
    );
  }
});
