// guard-receipts (WARN): flag a board row flipped to "Done" without a receipt
// reference in the same edit. Advisory only - never blocks. Fail-open.
import { readPayload, failOpen } from "./guard-lib.mjs";

failOpen(() => {
  const { file, content } = readPayload();
  if (!file || !content) return;
  if (!/board\.md$/i.test(file)) return;
  if (/\bDone\b/i.test(content) && !/(receipt|outbox\/|records\/|\.md|\.html)/i.test(content)) {
    process.stderr.write(
      "guard-receipts (warn): a 'Done' landed without a visible receipt reference. No receipt = not Done - chain it to a file on disk before the board reads Done.\n"
    );
  }
});
