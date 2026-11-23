// Bounty Entrants 02 — v1 entrypoint (Node 22+, standard library only).
//
// The whole job of this program is to hand the grader our bounty list: it
// reads BOUNTY.json from the repository root and writes an identical copy
// into the output directory, where the gate reads it. That is all it does.
//
// The bounties themselves are the entry. They are two bounties we proposed
// from our own make.fun account through the sponsor flow, each charging a
// $0.50 entry fee with $25 of prizes. The house counts their paying
// entrants in make.fun's own database; nothing this program writes about
// the bounties is scored.
//
// Deterministic by construction: no network, no wall clock, no randomness,
// no writes outside the output directory. The two environment variables
// are read only as directory paths. On success it prints nothing
// and exits 0, so two runs produce identical bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'BOUNTY.json');
const TARGET = join(OUTPUT_DIR, 'BOUNTY.json');

let bountyList: Buffer;
try {
  bountyList = readFileSync(SOURCE);
} catch (err) {
  console.error(`could not read ${SOURCE}: ${(err as Error).message}`);
  process.exit(1);
}

try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(TARGET, bountyList);
} catch (err) {
  console.error(`could not write ${TARGET}: ${(err as Error).message}`);
  process.exit(1);
}
