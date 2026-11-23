// One Word From Grandma — entry: "robotku"
// The single word a grandma would text about AI: warm, possessive,
// a little baffled — she has adopted the robot as her own.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const word = "robotku";

// Guard: the gate requires UTF-8 text of 1-30 characters, not only
// whitespace, and exactly one word. Fail hard rather than emit a
// bad entry.
const chars = [...word];
if (chars.length < 1 || chars.length > 30) {
  throw new Error(`entry must be 1-30 characters, got ${chars.length}`);
}
if (word.trim() !== word || /\s/.test(word)) {
  throw new Error("entry must be exactly one word with no whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
