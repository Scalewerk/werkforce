// guard-codex-collision (BLOCK): the Claude pack must never write Codex Skill
// Pack skills into the Claude discovery tree. Absolute law, narrow paths.
import { readPayload, block, failOpen } from "./guard-lib.mjs";

failOpen(() => {
  const { cmd } = readPayload();
  if (!cmd) return;
  // Writing into a codex skills tree, or invoking the codex installer, from this pack.
  if (/(\.codex\/skills|codex.*install\.sh|\/skills-codex)/i.test(cmd)) {
    block(
      "guard-codex-collision: this touches a Codex Skill Pack tree. The Claude pack installs ONLY to the Claude discovery tree; the two packs never cross. Blocked as pack-law."
    );
  }
});
