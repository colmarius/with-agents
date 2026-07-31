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

## 2026-07-31 — Task 5 complete: publish a distinct measurement article

- Decision: create one new public post titled **Measure Outcomes, Not Agent
  Activity**. Do not extend an existing post and do not drop the article.
- Reader job: help an engineering leader decide whether a team-level
  coding-agent rollout produces net value and design a bounded pilot that can
  answer that question.
- Thesis: coding-agent adoption should be judged by delivered functionality net
  of rework, defects, verification and review cost, and customer outcomes,
  segmented by task and codebase conditions. Generated-code volume, pull-request
  count, seats, subscriptions, and attention are diagnostic activity signals,
  not sufficient outcomes.
- Section-level overlap gate across all eight current public post files:
  - `agentic-coding-2026.md` names alignment and review-capacity constraints but
    supplies no team measurement system.
  - `make-the-agent-prove-it.md` owns proof for one change; the new article owns
    aggregate rollout outcomes and costs.
  - `durable-context-coding-agents.md` names comprehension debt and earlier
    review but does not evaluate adoption.
  - `durable-context-coding-agents-extended-deck.md` intentionally expands the
    canonical durable-context story and adds no separate measurement job.
  - `durable-context-coding-agents-image-deck.md` is the image-only alternate of
    that story and adds no measurement framework.
  - `small-threads-durable-state.md` owns per-task state and recorded proof, not
    team results.
  - `amp-factory-era-case-study.md` warns that one Amp signal is product
    telemetry rather than a controlled study, but is deliberately a
    single-product case study rather than a cross-source measurement guide.
  - `behavior-over-explanation.md` supplies the evidence method—representative
    behavior over a good story—but not an organizational scorecard.
- Planned article structure:
  1. Activity is the easiest thing to inflate: distinguish generated code,
     pull requests, seats, survey interest, and suggestion exposure from a
     defined sustained-use event and delivered functionality.
  2. Net out rework and review cost: separate gross output from corrected work,
     defect handling, verification effort, and the active review bottleneck.
  3. Segment before forecasting: retain task complexity, greenfield/brownfield,
     language, codebase size, and context limits instead of applying one uplift.
  4. Treat presenter and vendor telemetry as bounded evidence: preserve source
     interests, confounds, sampling gaps, and missing downstream outcomes.
  5. End with a clearly labeled editorial pilot scorecard covering adoption,
     delivery, quality, cost, and customer outcome.
- Source map:
  - Non-vendor, load-bearing quantitative source: Yegor Denisov-Blanch / Stanford
    (`tbDDYKRFjhk`) on failures of commit/PR/survey proxies, delivered
    functionality, rework, and segmented results. His reported 15–20% net gain
    is an observed study result with unresolved causes and transfer limits, not
    a baseline forecast.
  - Commercial/presenter evidence: Tomas Reimers / Graphite (`TswQeKftnaw`) on
    validity and actionability of review comments, with sampling and
    false-negative gaps; Brian Scanlan / Intercom (`4_VQBbs2iQA`) on adoption
    operations and doubled PR throughput, confounded by stronger models and
    activity-heavy measures; Quinn Slack / Sourcegraph (`Up6WVA07QdE`) on
    active-use definitions and verification cost, with mixed-denominator market
    estimates and an explicit commercial stake.
  - Editorial synthesis: the activity-versus-outcome classification and pilot
    scorecard. Both must be labeled as synthesis, not attributed to one speaker
    or presented as cross-speaker consensus.
- Target: 1,400–1,700 words, five normal `##` sections plus `## Sources used`,
  with a concise blockquote slide message at the start of every normal section.
  The post should link outward to the field guide for workflow, proof stack for
  one-change evidence, durable-context article for comprehension debt, behavior
  article for evidence method, and guided Coding Agents resource for the source
  route. It will not modify those posts or add per-video resources.
- Highest-risk claims to avoid: Intercom's doubled pull-request throughput is
  not a validated outcome, and Stanford's observed net-gain range is not a
  transferable baseline. One would repeat the activity-proxy failure; the other
  would erase the segmentation and replication caveats.
- Oracle recommendation: new article, high confidence. Accepted: distinct
  reader job, five-section outline, source separation, title, target length, and
  the warnings above. Rejected as out of scope: adding an inbound field-guide
  row would touch a second post despite Task 6's one-post boundary; adding
  targeted per-video resources is unnecessary because the reviewed videos can
  be cited directly and Task 4 intentionally avoided one-entry-per-video
  expansion.
- Rejected alternatives: no existing article can absorb this cross-source,
  team-level framework as a minimal extension; publishing nothing would leave a
  source-supported reader question raised by the guided playlist without a
  practical answer.
- Next action: Task 6 implement only this article decision.

## 2026-07-31 — Task 6 complete: outcome measurement article published

- Added the one selected public post,
  `src/content/posts/measure-outcomes-not-agent-activity.md`, in commit
  `aa19466`. No other post, resource, summary, or source-library artifact changed.
- The 1,651-word article stays inside the 1,400–1,700 target and has five normal
  `##` sections, each beginning with a concise blockquote slide message, followed
  by the exact `## Sources used` appendix.
- Public outcome:
  - classifies access, activity, adoption, and delivery-system signals without
    treating any one proxy as sufficient proof;
  - carries the Stanford gross-versus-net result only as a bounded study
    observation and retains the study's segmentation and transfer caveats;
  - treats Intercom's doubled pull-request throughput as confounded presenter
    telemetry rather than validated customer value;
  - treats Graphite actionability as a useful intermediate review signal, not
    correctness or downstream value;
  - uses Sourcegraph's adoption definitions and verification-cost heuristic
    while preserving mixed-denominator and commercial-interest warnings;
  - labels both the signal table and pilot scorecard as editorial synthesis and
    explicitly denies cross-speaker consensus.
- Internal links stay outbound and in scope: field guide for workflow, proof
  stack for one-change evidence, durable context for comprehension debt,
  behavior-over-explanation for evidence method, Amp case study for the same
  telemetry boundary, and the resource hub for the reviewed source route. No
  inbound edit to a second post and no per-video resource expansion was made.
- Verified each cited range against the reviewed source summary and the matching
  transcript chunks; all four tracked source summaries are `reviewed`.
- Verification: lint clean; public guard passes with 152 tracked videos, 5
  playlists, 47 tracked public references, 26 resources, and 51 public
  summaries; all 54 public-guard/library/transcript tests pass; library status
  has no pending captures; Astro check has zero diagnostics; production build
  completes 22 pages including the article and slide routes; every internal
  target route exists; diff checks clean.
- Next action: Task 7 reliability article decision and bounded review-tooling
  hardening.

## 2026-07-31 — Task 7 complete: reliability deferred and structural review hardened

- Reliability article decision: defer; do not publish or plan a follow-up from
  this work item.
- Section-level overlap and reader-job result:
  - `agentic-coding-2026.md` already owns deterministic controls, explicit human
    decision boundaries, and the warning that parallel agent workflows amplify
    weak infrastructure and review debt.
  - `make-the-agent-prove-it.md` already owns the risk-scaled proof stack:
    executable checks, real-system behavior, conformance, inspectable evidence,
    safety boundaries, and human comprehension.
  - `small-threads-durable-state.md` and `durable-context-coding-agents.md` own
    bounded work, durable state, restartability, reviewable commits, and proof
    that survives the agent session.
  - `behavior-over-explanation.md` owns the methodological claim that behavioral
    evidence should outrank fluent explanation.
  - `measure-outcomes-not-agent-activity.md` owns expected value at team level,
    including rework, defect and verification cost, review capacity, and human
    outcomes.
- The one potentially narrower thesis—durable orchestration plus production
  simulation—does not yet meet the claim-to-caveat burden. The supporting talks
  are predominantly from organizations selling agent frameworks, orchestration,
  cloud infrastructure, review, or evaluation products, and the corpus does not
  provide enough independent comparisons, failure data, or replication. A new
  article would mostly recombine existing guidance or overstate commercial
  architecture claims as consensus.
- Added `npm run youtube:library -- audit` in commit `7cdcfba`. The command is
  read-only and explicitly bounded to machine-verifiable source-library
  structure: catalog attribution mode; manifest relationships and duplicate
  occurrences; summary, overview, and author frontmatter/status/ID contracts;
  transcript chunk ordering; timestamp-anchor resolution against sibling
  transcript chunks; synthesis coverage; expected headings; and relative-link
  resolution.
- Completed the synthesis classification gate in follow-up commit `7d06202`:
  outside coverage and source-identity sections, each overview or author bullet
  must either start with `Editorial:` or link a video summary. Focused failure
  tests also prove that a playlist cannot have both an author relationship and
  `multiSpeaker: true`.
- The audit reports the genuine `8gg-oJr4dTY` occurrences at positions 0 and 3
  without deduping or writing any file. It does not score prose, infer claim
  quality, validate translation, or decide whether timestamps support the full
  meaning of a claim.
- Hardened `.agents/skills/maintaining-youtube-library/SKILL.md` with the human
  editorial-review boundary: before promotion to `reviewed`, compare each claim
  against the full adjacent transcript context and verify both the start and end
  of every anchor range. Reviewers must still judge translation fidelity,
  attribution, qualification, and unsupported certainty.
- Verification: Biome clean on all changed scripts; all 58 focused and existing
  public-guard, structural-audit, library, and transcript tests pass; the real
  audit passes 152 unique tracked videos, 161 manifest occurrences, 141
  transcripts, 141 summaries, 5 playlists, and 1 author; the public guard passes
  47 tracked references, 26 resources, and 51 public summaries; diff checks
  clean.
- Next action: Task 8 final Oracle review, durable-rule promotion audit, full
  verification, and safe completed-work-item cleanup.

## 2026-07-31 — Task 8 pre-cleanup durable-rule promotion audit

Five completed work-item candidates were inspected against current skills,
guidance, implementation, and repository references. No candidate has a surviving
path or slug reference outside the deletion set. The only candidate-to-candidate
references are historical statements in `post-slide-format-refresh` saying the
article-refresh directory was absent in that earlier checkout; both files are in
the proposed deletion set and are not live dependencies.

| Candidate directory | Completion and surviving references | Unique durable rules | Promoted destination / superseding artifact | Deletion safety decision |
| --- | --- | --- | --- | --- |
| `.agents/work/docs/agentic-coding-article-refresh/` | `completed`; no live path/slug reference. | Amp publication-day recheck of Manual, Orbs, Models, Plugin API, Chronicle, and Pricing; canonical-versus-dated source hierarchy and conflict handling; six-part incorporation gate (thesis fit, evidence strength, durability, novelty, claim-to-caveat ratio, load-bearing value); `incorporate` / `research-only` / `ignore` classification; transcript-backed post distinctness from its matching resource summary. | Promoted to `.agents/skills/article-writing/SKILL.md`. Current public posts preserve the article outcomes; dated product snapshots remain recoverable from Git and are not durable policy. | Safe after this promotion. |
| `.agents/work/docs/post-slide-format-refresh/` | `completed`; no live path/slug reference. | One idea and sparse text per slide; dry-run before adding machinery; adjacent Markdown/static-diagram buildup before fragments; explicit escalation triggers for fragments, MDX, and a deck framework; static visual path and accessibility convention. | Promoted to `.agents/skills/article-writing/SKILL.md`. Root `AGENTS.md`, the skill's hybrid contract, and `src/pages/posts/[slug]/slides.astro` supersede the implemented route rules. The optional content-checker idea is deliberately not promoted: it was unimplemented backlog whose value/noise threshold was never established. | Safe after this promotion. |
| `.agents/work/research/ai-engineer-youtube-playlists/` | `completed`; no live path/slug reference. | Exact Coding Agents maintenance cadence: selected read-only monitoring; explicit one-check/one-sync authorization; authoritative changed-ID and public-impact decisions; complete baseline; one capture command/two-video cap/no refill; throttle and exit handling; draft/review boundary; separate sync/capture/editorial/work-item commits; credential boundary. | Promoted to `.agents/skills/maintaining-youtube-library/SKILL.md`. `src/content/youtube/AGENTS.md` continues to own source/editorial contracts. | Safe after this promotion. |
| `.agents/work/tooling/youtube-knowledge-library/` | `completed`; no live path/slug reference. | None not already represented in current source-library guidance and tooling. Historical corpus counts, hashes, implementation narrative, and old batch evidence are not durable rules. | Superseded by `src/content/youtube/AGENTS.md`, the maintenance skill, library scripts/tests, and committed source-library artifacts. | Safe without another promotion. |
| `.agents/work/tooling/youtube-library-maintenance/` | `completed`; no live path/slug reference. | None not already represented in the current maintenance skill. The unresolved scheduler-notification option is deliberately not promoted and creates no schedule obligation. | Superseded by `.agents/skills/maintaining-youtube-library/SKILL.md`, current CLI/tests, and source-library guidance. The current exact-ID `rg -l -e` rule supersedes the historical unsafe form. | Safe without another promotion. |

Promotion decision: preserve concise reusable contracts, not historical evidence or
obsolete implementation detail. Git history remains the archive for the removed
work items. The active `youtube-corpus-public-curation` work item is not a cleanup
candidate and remains in place. Next action: review these promotions and the full
Task 1–7 outcome with Oracle, remediate high-confidence in-scope findings, then
perform the final verification and delete only the five audited candidates in a
separate cleanup commit.

## 2026-07-31 — Task 8 final Oracle review and remediation

- Oracle's final recommendation was **approve**. It independently ran the public
  guard and structural audit, confirmed both pass while reporting the genuine
  `8gg-oJr4dTY` occurrences at positions 0 and 3 without mutation, found the five
  promoted/deletion candidates safe, and found no material Task 1–7 or durable-rule
  preservation defect.
- Accepted finding: one low-severity but high-confidence source-anchor defect in
  `measure-outcomes-not-agent-activity.md`. The Intercom passages correctly stated
  that stronger models confounded the reported throughput result, but their late
  `[00:15:18–00:16:06]` / `[00:15:18–00:18:58]` anchors covered throughput and
  review pressure rather than Scanlan's model-capability acknowledgment. Direct
  transcript verification located that acknowledgment at
  `[00:03:57–00:05:01]`, matching the reviewed source summary. Commit `2ddb907`
  adds that adjacent early anchor in both passages while retaining the late
  anchors for throughput and review. Content guard, Astro check, and production
  build pass after the correction.
- Rejected as non-blocking: generalizing the public guard from the sole current
  `coding-with-agents.json` resource manifest to hypothetical future manifests.
  There is only one resource manifest now, and adding another is an explicit
  editorial/tooling change that should extend the guard deliberately rather than
  broaden this completed work on speculation.
- No remediation was needed for Oracle's stated unverified assumptions. The
  earlier dedicated Task 1 and Task 2 reviews—not the final Oracle pass—own the
  complete Italian translation checks and exact public/sample boundaries. The
  repository cleanup audit covers the tracked worktree; external systems are not
  represented as repository dependencies.
- Next action: re-run the live-reference search from clean Git state, delete only
  the five approved candidates in a separate cleanup commit, record recovery
  details, then run the complete final verification gate.

## 2026-07-31 — Task 8 completed-work-item cleanup

- The final clean-state reference sweep found no live dependency on any cleanup
  candidate. Matches were limited to the promotion table retained here and two
  historical candidate-to-candidate statements inside the deletion set. All five
  candidate `index.md` files still reported `Status: completed` immediately before
  deletion.
- Removed exactly these completed, superseded work-item directories:
  - `.agents/work/docs/agentic-coding-article-refresh/`
  - `.agents/work/docs/post-slide-format-refresh/`
  - `.agents/work/research/ai-engineer-youtube-playlists/`
  - `.agents/work/tooling/youtube-knowledge-library/`
  - `.agents/work/tooling/youtube-library-maintenance/`
- Deletion remained safe for the reasons in the pre-cleanup table: reusable article
  freshness/incorporation and slide-strategy rules survive in
  `.agents/skills/article-writing/SKILL.md`; the exact Coding Agents bounded session
  contract survives in `.agents/skills/maintaining-youtube-library/SKILL.md`; and
  current source-library guidance, scripts, tests, and committed artifacts
  supersede the two tooling histories.
- Cleanup parent: `f62a2803e4cfd690d39a8df4247d6b511c177243`. To recover any removed
  work item without reverting later work, run:

  ```sh
  git restore --source=f62a2803e4cfd690d39a8df4247d6b511c177243 -- \
    .agents/work/docs/agentic-coding-article-refresh \
    .agents/work/docs/post-slide-format-refresh \
    .agents/work/research/ai-engineer-youtube-playlists \
    .agents/work/tooling/youtube-knowledge-library \
    .agents/work/tooling/youtube-library-maintenance
  ```

- The active `.agents/work/docs/youtube-corpus-public-curation/` directory remains
  in place as required. This section is committed atomically with the deletions;
  the resulting cleanup commit hash is recorded in the final completion entry.
- Next action: run the complete final verification gate, record the cleanup commit
  hash and results, check Task 8, and mark this active work item completed.

## 2026-07-31 — Task 8 complete: final gate passed

- Cleanup commit `f6263838e12bc1850e95c032af758fea6555d653` has parent
  `f62a2803e4cfd690d39a8df4247d6b511c177243` and removes exactly the five
  approved work-item directories recorded above. The recovery command in the
  cleanup entry restores any selected path from that parent without reverting
  later work.
- Full verification passed:
  - `npm run lint:fix` checked 211 files and applied no fixes.
  - `npm run youtube:library -- status` reported all five overviews current, all
    available videos captured or durably unavailable, and zero pending captures.
    The 54 publicly unreferenced Antirez summaries intentionally remain draft.
  - `npm run youtube:library -- audit` passed 152 unique tracked videos, 161
    manifest occurrences, 141 transcripts, 141 summaries, 5 playlists, and 1
    author. It reported `8gg-oJr4dTY` at positions 0 and 3 without deduping.
  - The combined public-guard, structural-audit, library, and transcript command
    passed all 58 tests.
  - `npm run content:guard` passed 152 tracked videos, 5 playlists, 47 tracked
    public references, 26 resources, and 51 public summaries, including resource
    alignment and reviewed citation/playlist status.
  - `npm run check` passed 39 files with 0 errors, warnings, or hints.
  - `npm run build` produced 22 pages, including the measurement article and
    slide routes, the guided-summary JSON, and the Coding Agents resource route.
  - The application-source `src/content/youtube` search and built
    `publication: source-only` marker search both returned the expected no-match
    exit `1`.
  - A read-only built-target audit resolved 73 internal links/assets across all 9
    publishable posts and confirmed the corrected Intercom `t=237s` anchor in the
    rendered measurement article. Its first invocation incorrectly treated
    existing image-deck PNG links as page directories; the corrected checker
    distinguished static files from routes and passed without any repository
    change.
  - All five cleanup candidates are absent, the active curation work item remains,
    and `git diff --check` passed from clean cleanup HEAD.
- Oracle's accepted finding and remediation are recorded in the preceding entry;
  the one rejected hypothetical guard expansion remains intentionally out of
  scope. No other Oracle finding required action.
- Task 8 and Tasks 0–7 pass. This work item is `completed`; its plan, progress,
  status, and Next Action are aligned. No remote playlist check, sync, capture,
  retry, force, credential access, schedule, additional article/resource, full
  unreferenced-draft review, or other out-of-scope work occurred.
