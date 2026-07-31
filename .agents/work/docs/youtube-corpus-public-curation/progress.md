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

## 2026-07-31 — Task 2 complete: deterministic Antirez risk sample

- Reproducible selection rule: unique draft, publicly-unreferenced IDs per
  playlist in manifest order (first occurrence wins), sorted by `publishedAt`
  ascending with `videoId` tiebreak; allocation 10 slots proportional to stratum
  size with a floor of 3 for the smaller playlist → 7 from
  `antirez-ai-concepts` (N=52), 3 from `antirez-coding-with-ai` (N=17); picks at
  index `floor(i*N/n + N/(2*n))` for i=0..n-1, skipping already-chosen IDs.
- `antirez-ai-concepts` sample indices and decisions:
  - index 3, `8gg-oJr4dTY` (DeepSeek R1/R1-Zero) — material defect fixed. The
    summary had attached human/model feedback to filtering the generated
    dataset; `[00:07:59]`–`[00:09:07]` instead describes further model
    reinforcement learning from human preferences and V3 comparisons, then
    supervised fine-tuning/distillation of smaller models from roughly 800,000
    generated reasoning examples.
  - index 11, `qmgavo2_Svo` (Vetere and knowledge) — pass, no findings.
  - index 18, `R2TABSq1VNg` (three types of AGI) — minor anchor defect fixed.
    The ambiguity claim remains at `[00:00:00]`; the move to pragmatic,
    functional categories now separately cites `[00:05:42]`–`[00:07:00]`.
  - index 26, `WDlQOnj8G_U` (LLMs as reasoning surrogates) — pass, no findings.
  - index 33, `k2bvZnXGzJc` (biology and cosmology) — pass, no findings.
  - index 40, `uxAhuNPSBuE` (DeepSeek v4 disk KV cache) — material anchor defect
    fixed. The one-day demo-to-usable assertion is in `[00:15:13]`, so the
    range now begins there rather than at `[00:16:04]`.
  - index 48, `x6Vq0IWoLUs` (SSD-streamed inference) — material provenance defect
    fixed. The recording supplies partial machine and RAM details, so the note
    now says it lacks a *complete* hardware/storage specification and names the
    missing exact SSD and benchmark setup rather than claiming no specification.
- `antirez-coding-with-ai` sample indices and decisions:
  - index 2, `NDBQq_NzxiE` (Qwen 3.5) — minor range defect fixed. The personnel
    departures and reported organizational friction end at `[00:06:43]`; the
    unrelated local-agent topic starts at `[00:07:41]`.
  - index 9, `Yajmt1CeiHg` (DeepSeek v4 vlog) — pass, no findings.
  - index 14, `1HTtYNaCtcM` (programming remains interesting) — pass, no
    findings.
- Tally: 3 material defects (one in each of three summaries), 2 minor
  anchor-range defects, and 5 clean summaries. After corrections, all ten
  individually reviewed summaries passed and were promoted to `reviewed` in
  commit `9434f80`; the other 54 unreferenced Antirez summaries remain draft.
- Full-78-review decision: do **not** review all remaining drafts now. The sample
  exposed one pipeline-precision error, one overbroad provenance statement, and
  repeated anchor-endpoint imprecision, but no repeated translation or
  attribution failure. Every defect was conservatively fixable, and all ten
  artifacts are publicly unreferenced. Task 3's guarded public boundary makes a
  dedicated review mandatory before any remaining draft can support public
  content, which controls the publication risk without mechanically promoting
  54 currently unused artifacts.
- Plan adjustment for the repeated timestamp pattern: Task 7's dedicated
  editorial checklist must verify each anchor's start and end against the full
  adjacent claim. The bounded structural audit remains intentionally weaker: it
  can verify anchor resolution but cannot score claim support or prose quality.
- Verified before the source commit: library status clean with no pending
  captures; 47/47 library/transcript tests pass; lint made no changes; Astro
  check has zero diagnostics; production build completed with 20 pages; diff
  checks clean.
- Next action: Task 3 public-source and resource-manifest guards.

## 2026-07-31 — Task 3 complete: public-source and resource guards

- Added `npm run content:guard`, implemented by the read-only
  `.agents/scripts/public-content-guard.mjs`, and documented the publication
  rule in root `AGENTS.md`.
- The guard derives the tracked boundary only from configured catalog playlists
  and committed manifests. It scans only `src/content/posts`,
  `src/content/summaries`, and `src/data/resources/coding-with-agents.json`;
  source IDs outside the tracked manifests are ignored.
- Publishable posts (explicit `draft: false` or the schema's non-draft default),
  all public summaries, and resources fail when they cite a tracked video whose
  summary is not `reviewed` or a tracked playlist whose overview is not
  `reviewed`. Draft posts produce warnings instead. The committed exception list
  is empty; any future exception must be source-kind-, ID-, and path-specific
  with a non-empty reason.
- Reference extraction matches exact known IDs, so `watch?v=`, `youtu.be`,
  `embed`, thumbnail-host, parameterized, playlist, bare-ID, and leading-dash-ID
  forms are covered without treating external YouTube sources as library
  violations.
- Resource validation now detects duplicate raw JSON keys before ordinary parse
  semantics can hide them, duplicate resource IDs, invalid dates, invalid
  resource types/topics, summary references to absent resources, and resources
  without a matching public summary.
- Manifest duplicate behavior is explicit and read-only. The real guard reports
  `8gg-oJr4dTY` at positions 0 and 3 of `antirez-ai-concepts` as a notice marked
  “reported, not deduped”; it does not rewrite source membership.
- Focused tests prove successful reviewed references, every requested reference
  form, ignored untracked sources, genuine duplicate reporting, publishable
  video failure, draft-post warning behavior, playlist-level failure, scoped
  exception success, duplicate raw keys, IDs, dates, enums, and resource-summary
  misalignment.
- Commit: `628c390` (`add public source and resource guards`).
- Verified: focused and existing tests pass 54/54; the repository guard passes
  with 152 tracked videos, 5 tracked playlists, 32 tracked public references, 25
  resources, and 50 public summaries; library status has no pending captures;
  lint is clean; Astro check has zero diagnostics; production build completes
  with 20 pages; diff checks clean.
- Next action: Task 4 curated Coding Agents playlist orientation.

## 2026-07-31 — Task 4 complete: guided Coding Agents playlist resource

- Added resource `26`, `Coding Agents @ AI Engineer — guided playlist`, and the
  aligned public summary
  `coding-agents-ai-engineer-guided-playlist.md` in commit `5927c1b`.
- The summary identifies AI Engineer only as curator and source channel. It
  explicitly organizes the route by reader question rather than playlist
  position or chronology, avoids a mutable playlist count, and does not imply
  multi-speaker consensus.
- The eight selected stops and reader jobs are:
  - Maggie Appleton, GitHub Next — align product, business, design, and
    organizational context before implementation shifts the burden to review.
  - Priscila Andre de Oliveira, Sentry — investigate and understand an
    unfamiliar repository before planning or implementation.
  - Daniel Szoke, Sentry — place deterministic compiler feedback inside the
    agent loop without treating it as behavioral proof.
  - Mario Zechner, Pi creator with no employer affiliation supplied by the
    source — choose how much control and security policy a minimal harness
    should own.
  - Matt Pocock, teacher with no employer affiliation supplied by the source —
    follow a human-led path from alignment and vertical slices through fresh
    review, manual QA, and integration.
  - Ian Ballantyne and KP Sawhney, Google DeepMind — operate agents with quotas,
    model fallback, curated skills, shared workspaces, trajectory observability,
    task-specific evaluation, and review.
  - Brian Scanlan, Intercom — staff adoption as change management and inspect
    throughput claims alongside review capacity, defects, and outcomes.
  - Quinn Slack, Sourcegraph co-founder — distinguish attention, subscriptions,
    exposure, and sustained use while accounting for commercial interest.
- Appleton and Zechner are called out as existing dedicated public companions;
  the route also links the reviewed Beyang Liu talk for a related view of
  context, review, subagents, and selective parallelism. No SWE Agents or Agent
  Reliability playlist resource was added.
- Each stop's speaker, affiliation, claims, timestamp ranges, and caveats were
  checked against its individually reviewed source summary. All nine cited
  tracked videos are reviewed, and the Coding Agents overview is reviewed.
- Verified: lint clean; the public guard passes with 152 tracked videos, 5
  playlists, 43 tracked public references, 26 resources, and 51 public
  summaries; all focused guard tests pass; library status has no pending
  captures; Astro check has zero diagnostics; production build completes with
  the aligned summary JSON and resource route; diff checks clean.
- Next action: Task 5 section-level overlap gate and article decision.
