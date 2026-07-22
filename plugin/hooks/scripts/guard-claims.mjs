// guard-claims (WARN): flag outbox content that makes claims without any claim
// label. Advisory only - never blocks. Fail-open.
import { readPayload, failOpen } from "./guard-lib.mjs";

failOpen(() => {
  const { file, content } = readPayload();
  if (!file || !content) return;
  if (!/outbox\/[^/]*\.md$/.test(file)) return;
  if (Buffer.byteLength(content, "utf8") > 400 && !/\[(checked|best guess|reserved|unknown)\]/.test(content)) {
    process.stderr.write(
      "guard-claims (warn): this outbox content carries no claim labels ([checked]/[best guess]/[reserved]/[unknown]). Every factual claim should trace to a labeled source.\n"
    );
  }
});
