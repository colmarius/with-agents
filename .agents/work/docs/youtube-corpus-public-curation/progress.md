# YouTube corpus public curation progress

## 2026-07-31 — Work item created

- Started from a clean `ai-engineer-videos` branch at
  `4a84b35c37dee1284869f7b43117ebbb6900c04b`.
- Created a separate docs work item rather than reopening the completed AI
  Engineer ingestion work item.
- Recorded the complete local source baseline, existing public overlap, article
  boundaries, risk-based Antirez review strategy, minimal resource strategy,
  candidate article theses, workflow improvements, and completed-work cleanup
  criteria.
- The initial plan keeps publication gated: it does not assume that the corpus
  should produce a new article, a reliability article, or one resource per
  video.
- Oracle's prior roadmap feedback is incorporated. Direct inspection corrected
  one false alarm: resource ID 9 has one `date` key; overlapping inspection
  ranges had printed the same line twice.
- Next action: run the requested stress/grill review, revise the plan where the
  critique changes scope or sequencing, then begin Task 1.

## 2026-07-31 — Stress-review decisions applied to plan

- Read the complete read-only stress review (thread
  `T-019fb861-c6d5-74f0-9993-001599e6ce89`) at clean HEAD `aa8b5491`.
- Accepted Q1 default: the two Antirez playlist overviews and
  `authors/antirez.md` moved into Task 1 because they are load-bearing for
  `behavior-over-explanation.md` corpus-level claims. Task 2 keeps the
  deterministic ten-summary unreferenced sample; Task 4 now depends on Tasks 2
  and 3.
- Accepted Q2 default: Task 8 becomes promote-then-delete with a required
  per-directory durable-rule promotion table. Named survivors: the Coding
  Agents bounded maintenance/session contract (into
  `maintaining-youtube-library`) and the Amp source-sweep rule plus six-part
  incorporation gate (into current article-writing guidance/research).
- Accepted Q3 default: the Task 3 guard enforces reviewed-status on publishable
  content only (`draft: false` posts, public summaries, resources); draft posts
  warn. Untracked sources are ignored. Added the playlist-level overview
  citation rule because the Antirez overviews are load-bearing.
- Added Task 0 for the eight-file Antirez metadata formatter churn after
  inspecting the writer and Biome ownership. Root cause: the writer emits
  deterministic `JSON.stringify(value, null, 2)` block-form arrays;
  Biome collapses short primitive arrays inline; only the eight
  unavailable-caption metadata files contain short string arrays
  (`availableLanguages`). Chosen fix: the narrowest Biome formatter override
  for writer-owned generated JSON (`videos/*/metadata.json`,
  `playlists/*/manifest.json`), keeping human-edited `catalog.json` under
  Biome, plus a stricter byte-for-byte canonical-format test. Rejected:
  excluding all YouTube JSON from quality checks.
- Pinned duplicate-manifest behavior: `8gg-oJr4dTY` appears at positions 0 and
  3 of `antirez-ai-concepts/manifest.json`; both occurrences arrived in
  deterministic sync commit `192da2f`, so the committed manifest faithfully
  mirrors remote playlist membership. Audits must report duplicates and never
  dedupe.
- Added the Task 1 translation-fidelity procedure (anchor resolution to the
  Italian chunk, paraphrase checked against Italian, disclosure retained, no
  quotation presentation) and made the three AI Engineer artifacts
  compare-only.
- Tightened Task 4 to 6–10 curated stops with per-stop source-supported
  speaker and affiliation, no chronology from playlist position, AI Engineer as
  curator/source only.
- Bounded the Task 7 reusable audit to historically repeated structural checks
  and removed its metadata-formatting item (now Task 0).
- Next action: implement Task 0.

## 2026-07-31 — Task 0 complete: canonical writer-owned JSON formatting

- Added a narrow `biome.json` override disabling only the formatter for
  `src/content/youtube/videos/*/metadata.json` and
  `src/content/youtube/playlists/*/manifest.json`; `catalog.json` and all other
  JSON stay Biome-formatted.
- Added a committed-tree test in `youtube-library.test.mjs` asserting every
  writer-owned JSON file (149 metadata + 5 manifests) is byte-identical to
  `JSON.stringify(value, null, 2)` plus one trailing newline.
- Verified: `npx biome check src/content/youtube` clean; `npm run lint:fix`
  produces no source-tree churn; library test suite passes 47/47; negative
  case confirmed (a deliberately collapsed metadata file fails the new test
  and was restored byte-for-byte).
- Next action: Task 1 public-source reconciliation.

## 2026-07-31 — Task 1 complete: public-source reconciliation

- Recomputed the exact public tracked-ID boundary across
  `src/content/posts`, `src/content/summaries`, and `src/data/resources`,
  covering `watch?v=`, `youtu.be/`, `embed/`, thumbnail hosts, timestamped
  params, and bare IDs: exactly 17 tracked IDs are publicly referenced —
  14 draft Antirez IDs (`T5b69_8f5MI`, `TlGrAretPQw`, `497EK7ZQ2FY`,
  `PHsxD4X2V2A`, `n3rdoQnN7Co`, `ibcqRGQ7BKY`, `0buzDrn0aIY`, `XZZ_ddBvELc`,
  `WoaulxVqUUA`, `IoE3Hi2zpwk`, `SiOadQFUx2k`, `N-iwRfCFbHE`, `id9QG-mQSOo`,
  `yFa1BHzkzn8`) and 3 already-reviewed AI Engineer IDs (`ClWD8OEYgp8`
  Appleton, `RjfbvDXpFls` Zechner, `F_RyElT_gJk` Liu), matching the plan's
  expectation.
- Reviewed all 14 publicly referenced Antirez summaries directly against the
  committed Italian transcript chunks, metadata, and manifests using the
  translation-fidelity procedure: every anchor resolved to its supporting
  Italian chunk, paraphrase checked against Italian, disclosure present, no
  translated wording presented as quotation. All 14 passed and were promoted
  to `reviewed` (commit `311e1d2`).
- Reviewed and promoted both Antirez playlist overviews and
  `authors/antirez.md`. One source contract defect fixed in the author
  synthesis: its `Source Identities` section duplicated catalog-owned playlist
  relationships; the duplicate statement was removed, retaining only the
  no-external-identity note (same commit `311e1d2`).
- Post-promotion `npm run youtube:library -- status` confirms 7 reviewed
  occurrences in `antirez-ai-concepts` and 8 in `antirez-coding-with-ai` —
  14 unique IDs because `0buzDrn0aIY` belongs to both playlists.
- The three AI Engineer artifacts stayed compare-only. Decisions: Appleton —
  keep, no discrepancy; Zechner — source summary keep, but the public guided
  summary overclaimed community "validation" and a general Terminal-Bench
  ranking, so the public claim was qualified; Liu — source summary keep, but
  the resource entry and public summary dated the video `2025-07-01` while the
  manifest records `2025-06-30T22:54:36Z`, so both dates were corrected.
- Public citation corrections established against the Italian chunks and
  committed separately (`2d93e62`):
  - `behavior-over-explanation.md`: the architectural-constraints claim starts
    in chunk `[00:00:53]`, not `[00:01:57]`; body anchor and Sources entry now
    read `00:00:53–00:03:55` with `t=53s`.
  - `salvatore-sanfilippo-ai-concepts.md`: split the `T5b69_8f5MI` anchor so
    similarity search/quantization/dimensionality reduction cite their actual
    range `00:11:59–00:32:12` (`t=719s`) instead of riding on
    `00:00:57–00:10:48`; extended the `n3rdoQnN7Co` endpoint to `00:15:43`,
    where the operational-independence discussion concludes.
- No bulk promotion occurred; every promoted artifact passed its own review.
  Duplicate manifest membership (`8gg-oJr4dTY` twice in `antirez-ai-concepts`)
  was preserved untouched.
- Retained ambiguity: none blocking; garbled auto-caption passages remain
  paraphrased conservatively in source summaries and were not tightened.
- Verified: lint clean, `astro check` clean, build 20 pages, `git diff --check`
  clean.
- Next action: Task 2 deterministic ten-summary unreferenced Antirez sample.
