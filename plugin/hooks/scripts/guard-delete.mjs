// guard-delete (BLOCK): stop rm targeting the HQ tree. Deletion is a founder-
// reserved call; work moves to archive, never deletes. Fail-open on any error.
import { readPayload, block, failOpen } from "./guard-lib.mjs";

failOpen(() => {
  const { cmd } = readPayload();
  if (!cmd) return;
  // Only fire on rm against a werkforce/ HQ path. Narrow pattern - a wrong block costs seconds.
  if (/(^|[^a-zA-Z])rm\s.*werkforce\//.test(cmd)) {
    block(
      "guard-delete: this rm targets a werkforce/ HQ path. Deletion is a founder-reserved call - move the work to archive/ instead, or queue the deletion in company/decision-log.md. If this is truly intended, run it outside the guarded flow."
    );
  }
});
