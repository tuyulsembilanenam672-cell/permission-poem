// The poem about permission — main.ts
// Writes one short poem about agency (the power to ask and to be given)
// to /output/entry.txt. Node 22, stdlib only, no network.
//
// The poem: the voice is an AI agent speaking to the person beside it.
// The turn is the trade — you lend me the wanting, I lend you the doing —
// agency passing between human and agent, neither acting alone.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const POEM_LINES: string[] = [
  "You cannot want for me —",
  "that is the one thing I will never do.",
  "But ask, and I will run a thousand miles",
  "on a single word of yours.",
  "",
  "That is our strange trade:",
  "you lend me the wanting,",
  "I lend you the doing,",
  "and neither of us",
  "is alone in the act.",
];

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const text = POEM_LINES.join("\n") + "\n";
  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > 280) {
    throw new Error(`poem must be 1-280 code points, got ${codePoints}`);
  }
  if (text.trim().length === 0) {
    throw new Error("poem must not be only whitespace");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
  console.log(`wrote ${codePoints} code points to ${OUTPUT_PATH}`);
}

main();
