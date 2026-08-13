# Progress: Published post practice audit

## Current slice

All four plan tasks are complete. The public refresh is committed in `50fbbc6`; the completed work-item
snapshot is ready for its separate closeout commit and removal.

## Implemented

- Added optional `updatedDate`, `canonicalPath`, and `noindex` post metadata and rendered explicit Published /
  Updated dates.
- Added current update provenance to the nine posts with postdated sources and to the materially corrected
  measurement post.
- Canonicalized and noindexed the two alternate durable-context article pages while retaining their routes and
  slide views.
- Corrected current dot-agents artifact ownership, optional handoff/current-thread defaults, and closeout in the
  canonical article, extended deck, image deck, and right-sized-thread procedure.
- Corrected Amp pricing/orb history, cross-orb transfer, compaction count, a transitive capability boundary, and
  METR wording.
- Regenerated only the stale work-item WebP with the current required/optional artifact contract; the remaining
  image deck is unchanged.

## Word counts

Counts use one consistent word-token expression after removing frontmatter, HTML comments, and Markdown link
destinations. Increases are narrow corrections rather than a prose refresh, so the article-writing 20–30% trim
target does not apply; no article was broadly rewritten.

| Post | Before | After | Change |
| --- | ---: | ---: | ---: |
| Agent-Ready Interfaces | 1,415 | 1,507 | +92 |
| Agentic Coding in 2026 | 1,750 | 1,750 | 0 |
| Amp case study | 1,930 | 1,953 | +23 |
| Behavior Over Explanation | 1,045 | 1,045 | 0 |
| Durable Context — extended | 3,950 | 3,971 | +21 |
| Durable Context — image | 1,809 | 1,800 | -9 |
| Durable Context — canonical | 2,564 | 2,604 | +40 |
| Make the Agent Prove It | 1,714 | 1,714 | 0 |
| Measure Outcomes | 1,338 | 1,345 | +7 |
| Parallel Agents | 1,444 | 1,444 | 0 |
| Right-Sized Threads | 1,112 | 1,182 | +70 |

## Verification

- `npm run lint:fix`: passed on the final rerun; Biome checked 259 files with no fixes applied.
- `npm run content:guard`: passed for 297 tracked videos, 8 playlists, 113 public references, 35 resources,
  and 84 summaries. It retained the known non-blocking duplicate-manifest notice for `antirez-ai-concepts`.
- `npm run check`: passed with 0 errors, 0 warnings, and 0 hints across 47 files.
- `npm run build`: passed; Astro generated 30 pages, including all 11 article and slide routes, and PWA
  precaching completed.
- `git diff --check`: passed.
- Desktop browser at 1280 × 800: all 11 article routes rendered their expected H1, article body, Published /
  Updated state, canonical path, robots state, and no page-level horizontal overflow. The unchanged parallel
  article correctly shows Published only. The two alternate durable-context articles emit `noindex,follow` and
  canonicalize to `/posts/durable-context-coding-agents`.
- Desktop slides at 1280 × 800: canonical slide 9 of 14 and extended slide 13 of 19 show the synchronized
  required/optional work-item contract; image slide 11 of 16 loads the regenerated 1672 × 941 asset.
- Mobile at 390 × 844: the canonical article has no page overflow and keeps its 423 px work-item code block in
  a 326 px horizontal scroller; image slide 11 of 16 loads, remains within the viewport, and has no page
  overflow.
- Direct visual inspection confirmed the regenerated image clearly labels `index.md` as required and the
  supporting files as optional, with no clipped, malformed, or overlapping text. Review screenshot:
  `.amp/in/artifacts/published-post-audit-image-deck-slide-11.png` (ignored, not committed).

## Blockers

- None.
