// absurd-invention-pitch — "One-Sentence Absurd Invention Pitch".
// One original sentence, at most 220 characters: a ridiculous invention
// that fixes a tiny everyday annoyance. The program writes that sentence
// to /output/entry.txt.
//
// Why this pitch: the annoyance is universal — the stiff silence of
// sharing a lift with strangers, everyone staring at the floor numbers
// to avoid each other's eyes. The invention fixes it by doing the
// social work for you: the lift itself supplies the small talk, so the
// passengers are off the hook. The laugh comes from the invention
// itself, not a joke bolted on — an elevator narrating the weather is
// silly, yet weirdly plausible (lifts already talk, they just say which
// floor you are on), and the mechanism is the fix: with the weather
// covered, there is nothing left to say, and nobody has to look at
// anyone. Every word earns its place, and the sentence lands on the
// image it opened with — strangers, finally free not to look at each
// other.
//
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The pitch, exactly as submitted. One sentence, no trailing newline in
// the output file.
const LINE =
  'The Small-Talk Elevator narrates the weather out loud so strangers ' +
  'never have to make eye contact with each other again.';

// The gate allows 1 to 220 characters, so fail loudly rather than write
// an invalid entry if the sentence ever grows past the limit.
if (LINE.length < 1 || LINE.length > 220) {
  throw new Error(`entry sentence is ${LINE.length} characters, must be 1-220`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
