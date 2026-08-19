# Progress

## Current Slice

Research, article edits, automated verification, rendered-route verification,
Oracle review, and the final freshness confirmation are complete.

## Content Results

- Refreshed the reusable orb-size table from 40 GB to 60 GB disks and corrected
  the Megawatt allowance wording from “small orbs” to “orbs.”
- Classified all four Chronicle items published after the 2026-08-16 research
  pass. MCP in Orbs and Talk to Puck were already source-faithful in the case
  study; Pass the Orb was incorporated with explicit ownership and permission
  caveats; Education Discount remains research-only.
- Updated only `amp-factory-era-case-study.md`; product-agnostic related posts
  retained their stronger existing evidence.
- Article word count: 2,606 before, 2,644 after (+38, +1.5%). This was a targeted
  source-freshness pass rather than a structural article refresh: the volatile
  discount sentence was removed, while the new collaboration claim required a
  bounded access, billing, and ownership caveat.

## Verification Evidence

- `npm run lint:fix` — passed; 268 files checked, no fixes applied.
- `npm run check` — passed; 46 files, 0 errors, 0 warnings, 0 hints.
- `npm test` — passed; 82 tests, 0 failures.
- `npm run build` — passed; 30 static pages built, including the article and
  slide routes.
- `git diff --check` — passed.
- Real browser at `/posts/amp-factory-era-case-study` — correct title and `h1`;
  rendered body contains the Pass the Orb announcement, the bounded
  collaboration synthesis, and the expected external link; Education Discount
  is absent.
- Oracle review — no material findings or blockers; it confirmed source fidelity
  for sizing, subscription wording, Chronicle classification, teammate-invitation
  boundaries, MCP/Puck claims, and removal of the discount from public prose.

## Closeout

- A final force-refresh of the Chronicle still showed exactly MCP in Orbs, Pass
  the Orb to the Left Hand Side, Education Discount, and Talk to Puck for August
  18-19; no same-day item was missed.
- The completed snapshot is ready for the repository's required snapshot commit
  and separate work-item removal commit. The user explicitly authorized pushing
  the resulting commits to `origin/main`.
