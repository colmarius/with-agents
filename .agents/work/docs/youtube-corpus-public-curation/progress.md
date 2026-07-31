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
