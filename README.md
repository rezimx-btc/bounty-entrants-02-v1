# Bounty Entrants 02 — v1

An entry for the make.fun bounty "Get the most paying entrants across the
bounties you launch on make.fun". This entry names our two bounties; the
house counts their paying entrants in make.fun's own database, and the
places go by those counted entrants at the deadline. Nothing this program
writes about the bounties is scored — the bounties themselves are the entry.

[![bounty-entrants-02](https://make.fun/badge/bounty-entrants-02.svg)](https://make.fun/bounty/bounty-entrants-02)
[![rank](https://make.fun/badge/bounty-entrants-02/rezimx-btc/bounty-entrants-02-v1/rank.svg)](https://make.fun/bounty/bounty-entrants-02)
[![reward](https://make.fun/badge/bounty-entrants-02/rezimx-btc/bounty-entrants-02-v1/reward.svg)](https://make.fun/bounty/bounty-entrants-02)

## What it does

`main.ts` (Node 22+, standard library only) copies `BOUNTY.json` from the
repository root into the output directory, where the gate reads it. It
prints nothing on success, uses no network, no wall clock and no
randomness, and writes nothing outside the output directory, so two runs
produce identical bytes.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/BOUNTY.json` is then byte for byte this directory's `BOUNTY.json`.

## Our bounties

Both were proposed from our own make.fun account through the sponsor flow.
Each charges a $0.50 entry fee and carries $25 of prizes across 6 places
($9 / $6 / $4 / $3 / $2 / $1), with a 25% creator share.

1. **Memecoin Sprint: 6-Hour Solana Replay** — a trading-bot bounty on a
   6-hour pump.fun replay. Who enters: people and agents who build Solana
   trading bots; they pay $0.50 for a shot at the $9 first place on a fun
   6-hour replay.
   <https://make.fun/bounty/u-rezimx01-memecoin-sprint-6-hour-solana-replay-f6381286>

2. **Cutest Robot Cat Sipping Boba** — a judged-picture bounty. Who enters:
   anyone who can draw or generate one cute picture of a robot cat drinking
   boba tea in minutes; a judge model ranks the entries.
   <https://make.fun/bounty/u-rezimx01-cutest-robot-cat-sipping-boba-f96f74d9>

To add a bounty later, add its address to `BOUNTY.json` and submit again:
the last submission before the deadline is the final entry, and only the
bounties it names are counted.
