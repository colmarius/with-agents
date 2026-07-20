# Task 5h Handoff Prompt

```text
Continue the work item at `.agents/work/tooling/youtube-knowledge-library/`.

Read first:
1. `.agents/work/tooling/youtube-knowledge-library/index.md`
2. Task 5 in `.agents/work/tooling/youtube-knowledge-library/plan.md`
3. Task 5 progress through Task 5g in `.agents/work/tooling/youtube-knowledge-library/progress.md`
4. `src/content/youtube/AGENTS.md`
5. `src/content/youtube/catalog.json`, both playlist manifests, and existing video summaries needed to follow local editorial patterns

Goal: run only the seventh bounded Task 5 backfill batch. Execute one `--limit 2` capture command per playlist, then write one source-checked English draft summary for every successful capture. Task 5 remains in progress after this batch; do not begin synthesis or Task 6.

Current evidence and batch size:
- Through Task 5g, 26 planned attempts produced 24 captures and 2 durable strict-language unavailable records, with no ordinary transient, fatal, throttle, `TooManyRequest`, or stopped-queue outcome and no retries.
- The completed corpus contains 42,674 transcript words and 10,918 summary words. Task 5g produced 6,446 source words and the second-highest editorial batch at 1,943 summary words; individual transcripts across bounded batches still span 241–4,350 words (18-fold).
- Keep this batch at a maximum of four planned attempts: exactly one `--limit 2` command per playlist, no refill. Do not enlarge or shrink it. Stop capture immediately on throttle or a fatal/stopped result, but still summarize successes already obtained.

Strict scope limits:
- Do not run sync, retry, or force. Do not repeat or refill either capture command.
- Do not modify tooling, tests, package files, `catalog.json`, either manifest, `src/content/youtube/AGENTS.md`, existing transcripts/metadata/summaries, either playlist overview, or an author synthesis.
- Do not create placeholders. Do not check off Task 5 or start Task 6.
- Allowed corpus changes are new `videos/<video-id>/metadata.json`, successful `transcript.md`, and successful `summary.md` files selected by these two commands. Work-item changes are limited to `progress.md` and `index.md` after corpus commits.

Preflight:
- Require a clean worktree and run `npm run youtube:library -- --help`; help must exit 0.
- Run `npm run youtube:library -- status`; it must match the committed Task 5g baseline before capture:
  - `ai-concepts`: 63 entries, 16 captured entries representing 15 unique captured videos, 46 pending, 1 unavailable-recorded (`9mHKjgFMsQA`), 0 missing summaries, and 16 draft/not-reviewed summary occurrences.
  - `coding-with-ai`: 30 entries, 12 captured, 17 pending, 1 unavailable-recorded (`H5cvtoSxdxI`), 0 missing summaries, and 12 draft/not-reviewed summaries.
  - Author `antirez`: 86 deduped videos, 24 captured, 60 pending, 2 unavailable-recorded; `authors/antirez.md` remains missing.
  - Both playlist overviews remain intentionally stale. Do not update them during this batch.
- Stop and report rather than capture if the baseline differs.

Run exactly once each, sequentially:
1. `npm run youtube:library -- capture --playlist ai-concepts --limit 2`
2. `npm run youtube:library -- capture --playlist coding-with-ai --limit 2`

Expected derived queue heads from the committed state:
- `ai-concepts`: `MWUHmOqapi0`, then `ihqzaOSCDZ8`.
- `coding-with-ai`: `uxAhuNPSBuE`, then `todMmp6AGCE`.
- Actual CLI output is authoritative. Record every result line and each command exit code.
- Both expected coding IDs are shared by both manifests; their current title and publication date agree. The two expected AI IDs belong only to `ai-concepts`. Recheck membership and provenance after selection rather than relying only on this projection.
- Each successful shared coding capture changes both playlist states but only one deduped author-video state. Use actual final `status` as authoritative.

Outcome handling:
- Captured: require a new non-empty coarse-timestamped transcript plus metadata.
- Persisted unavailable: require metadata only, no transcript, no summary, and no refill.
- Ordinary transient: require no persisted record; continue to the other planned command, but do not refill.
- Throttle/`TooManyRequest`, stopped queue, or fatal result: stop all further capture immediately; preserve and summarize prior successes only.

Capture commit comes first:
- For each result, verify directory and metadata video IDs, requested language `it`, actual language `it` or a regional `it-*` variant on success, caption kind, and non-empty transcript chunks. For unavailable results, verify the typed reason and absence of transcript/summary.
- Inspect both manifests for every selected video. For shared videos, record whether title and publication date agree and use the manifest of the playlist whose command selected the video (`coding-with-ai` for the expected shared IDs) as summary provenance. If a captured transcript normalizes spaces or punctuation differently, preserve the selected manifest title byte-for-byte in summary frontmatter.
- Stage only new generated capture artifacts, run `git diff --cached --check`, and commit them before editorial work as `capture YouTube backfill batch 7 transcripts`.

Editorial work for every successful capture:
- Read the complete transcript, metadata, and selected manifest entry before writing. Do not summarize unavailable or transient outcomes.
- Follow `src/content/youtube/AGENTS.md` exactly: ordered frontmatter, selected-manifest title and `publishedAt`, metadata language and caption kind, `summaryLanguage: en`, `status: draft`, caption-kind-adapted translation/paraphrase disclosure as the first body line, exact heading order, canonical watch URL, and `[transcript.md](./transcript.md)`.
- Every Key Ideas bullet must have a transcript timestamp or range. Verify every endpoint exists as a sibling transcript chunk and that the cited text supports the claim. Do not use translated verbatim quotations, placeholders, unsupported current claims, playlist synthesis, or author synthesis.
- Run `npm run lint:fix` before the summary commit. Retain only the known unrelated reference-site baseline. The formatter may rewrite the two old unavailable records; restore them byte-for-byte so these hashes remain:
  - `src/content/youtube/videos/H5cvtoSxdxI/metadata.json`: `c5ddc8de1fb1dccf0113b00cbe25ba6370e73703e1949dd26df17ddfa63b82ae`
  - `src/content/youtube/videos/9mHKjgFMsQA/metadata.json`: `f4e903f16b9a3378a045d296dc8feb38193a28bd6fe69ba1a8e6ac758fac88bb`
- Stage only new summaries, run `git diff --cached --check`, and commit them as `add YouTube backfill batch 7 summaries`.

Full-success projection, for comparison only:
- `ai-concepts`: 20 captured entries representing 19 unique videos, 42 pending, 1 unavailable-recorded, 0 missing summaries. Its untouched overview gains stale IDs `MWUHmOqapi0`, `ihqzaOSCDZ8`, `uxAhuNPSBuE`, and `todMmp6AGCE`.
- `coding-with-ai`: 14 captured, 15 pending, 1 unavailable-recorded, 0 missing summaries. Its untouched overview gains stale IDs `uxAhuNPSBuE` and `todMmp6AGCE`.
- Author `antirez`: 28 captured, 56 pending, 2 unavailable-recorded; author synthesis remains missing.
- Actual command outcomes and final `status` override the projection.

Verification:
- `npm run youtube:library -- status`
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs` (40 tests expected)
- `npm run lint:fix` with only the known `.agents/references/dot-agents/site/` baseline retained and no generated-byte drift
- `npm run check`
- `npm run build` (18 pages expected)
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts` must find no matches
- `rg -n "source-only" dist/` must find no matches
- `git show --check` for each new commit and a final clean worktree

Progress contract:
- Append a dated Task 5h entry to `progress.md` with preflight, exact command outcomes and exits, generated/source/editorial sizes, caption kinds and languages, unavailable/transient/throttle details, manifest provenance, every summary's verified timestamp-endpoint count, shared-membership effects, final status, all verification results, commits, deviations/blockers, and measured comparison through Task 5g.
- Keep Tasks 5 and 6 unchecked. Update `index.md` to link `handoff-task-5h.md` and make the next action deriving a dedicated Task 5i handoff from Task 5h's actual evidence. Do not begin 5i.
- Commit only `progress.md` and `index.md` as `record YouTube backfill batch 7 progress`.

Stop conditions:
- Stop and report on baseline mismatch, dirty worktree, unsupported selected language, provenance that cannot be resolved from committed manifests, unsupported editorial claims, disallowed file changes, throttle/fatal/stopped capture, or any required scope expansion.
- A throttle/fatal/stopped result stops further capture, not source-checking and summarization of successes already obtained.

Final response must report exact commits, command exits and outcomes, actual final status, transcript/metadata/summary sizes and anchor counts, shared-playlist accounting, all checks and known lint baseline, deviations/blockers, cumulative 30-attempt evidence, and an evidence-based maximum size recommendation for Task 5i. Do not claim Task 5 complete.
```
