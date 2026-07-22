// SessionStart injector body - prints the Werkforce constitution into session
// context. Invoked by session-start.sh only when a JS runtime (node) is present;
// the sh wrapper prints the boot banner itself so the banner never depends on a
// runtime. Called with the arg "body" to print ONLY the constitution body (the
// wrapper already emitted the banner); called with no arg it prints banner+body
// too, for direct/sandbox use.
// Fail-open: any error exits 0 with no output so a broken injector never blocks
// a session.
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

const bodyOnly = process.argv[2] === "body";

try {
  const root = process.env.CLAUDE_PLUGIN_ROOT || "";
  const constPath = join(root, "skills", "using-werkforce", "SKILL.md");
  const out = [];

  if (!bodyOnly) {
    // Standalone/direct use: reproduce the banner the sh wrapper normally prints.
    let hq = "";
    const home = process.env.HOME || process.env.USERPROFILE || "";
    for (const c of [join(process.cwd(), "werkforce", "HQ.md"), home ? join(home, "werkforce", "HQ.md") : ""]) {
      if (c && existsSync(c)) { hq = c; break; }
    }
    let pluginVer = "unknown";
    const pluginJson = join(root, ".claude-plugin", "plugin.json");
    if (existsSync(pluginJson)) {
      try { pluginVer = JSON.parse(readFileSync(pluginJson, "utf8")).version || "unknown"; } catch { /* keep unknown */ }
    }
    let osVer = "unknown";
    if (hq) {
      const verFile = join(dirname(hq), "os", "VERSION");
      if (existsSync(verFile)) osVer = readFileSync(verFile, "utf8").replace(/\s/g, "");
    }
    out.push(`=== Werkforce is booted (plugin ${pluginVer}) ===`);
    if (hq) {
      out.push(`An HQ is present at ${dirname(hq)} (os/VERSION ${osVer}).`);
      if (osVer !== "unknown" && osVer !== pluginVer) {
        out.push(`NOTE: HQ os/VERSION (${osVer}) differs from plugin (${pluginVer}) - run upgrade-your-werkforce to migrate additively.`);
      }
    }
    out.push("The constitution below is in force. Read before you write; the HQ record outranks memory.");
    out.push("");
  }

  // Print the constitution body (everything after the closing frontmatter fence).
  if (existsSync(constPath)) {
    const lines = readFileSync(constPath, "utf8").split(/\r?\n/);
    let fences = 0, emitting = false;
    for (const line of lines) {
      if (line === "---") { fences++; if (fences >= 2) emitting = true; continue; }
      if (emitting) out.push(line);
    }
  }

  if (out.length) process.stdout.write(out.join("\n") + "\n");
} catch {
  // fail-open
}
process.exit(0);
