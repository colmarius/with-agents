# Task 5j Handoff Prompt

```text
Continue the work item at `.agents/work/tooling/youtube-knowledge-library/`.

Read first:
1. `.agents/work/tooling/youtube-knowledge-library/index.md`
2. Task 5 in `.agents/work/tooling/youtube-knowledge-library/plan.md`
3. Task 5 progress through Task 5i in `.agents/work/tooling/youtube-knowledge-library/progress.md`
4. `src/content/youtube/AGENTS.md`
5. `src/content/youtube/catalog.json`, both playlist manifests, and existing video summaries needed to follow local editorial patterns

Goal: run only the ninth bounded Task 5 backfill batch. Execute one `--limit 2` capture command per playlist, then write one source-checked English draft summary for every successful capture. Task 5 remains in progress after this batch; do not begin synthesis or Task 6.

Current evidence and batch size:
- Through Task 5i, 34 planned attempts produced 32 captures and 2 durable strict-language unavailable records, with no ordinary transient, fatal, throttle, `TooManyRequest`, or stopped-queue outcome and no retries.
- Direct recount gives the completed corpus 63,653 transcript words and 15,649 summary words. Task 5i produced the second-largest bounded batch at 9,011 source words and 2,287 summary words; individual transcripts still span 241–4,350 words (18-fold).
- Keep this batch at a maximum of four planned attempts: exactly one `--limit 2` command per playlist, no refill. Do not enlarge or shrink it. Stop capture immediately on throttle or a fatal/stopped result, but still summarize successes already obtained.

Strict scope limits:
- Do not run sync, retry, or force. Do not repeat or refill either capture command.
- Do not modify tooling, tests, package files, `catalog.json`, either manifest, `src/content/youtube/AGENTS.md`, existing transcripts/metadata/summaries, either playlist overview, or an author synthesis.
- Do not create placeholders. Do not check off Task 5 or start Task 6.
- Allowed corpus changes are new `videos/<video-id>/metadata.json`, successful `transcript.md`, and successful `summary.md` files selected by these two commands. Work-item changes are limited to `progress.md` and `index.md` after corpus commits.

Preflight:
- Require a clean worktree and run `npm run youtube:library -- --help`; help must exit 0.
- Run `npm run youtube:library -- status`; it must match the committed Task 5i baseline before capture:
  - `ai-concepts`: 63 entries, 22 captured entries representing 21 unique captured videos, 40 pending, 1 unavailable-recorded (`9mHKjgFMsQA`), 0 missing summaries, and 22 draft/not-reviewed summary occurrences.
  - `coding-with-ai`: 30 entries, 16 captured, 13 pending, 1 unavailable-recorded (`H5cvtoSxdxI`), 0 missing summaries, and 16 draft/not-reviewed summaries.
  - Author `antirez`: 86 deduped videos, 32 captured, 52 pending, 2 unavailable-recorded; `authors/antirez.md` remains missing.
  - Both playlist overviews remain intentionally stale. Do not update them during this batch.
- Stop and report rather than capture if the baseline differs.

Run exactly once each, sequentially:
1. `npm run youtube:library -- capture --playlist ai-concepts --limit 2`
2. `npm run youtube:library -- capture --playlist coding-with-ai --limit 2`

Expected derived queue heads from the committed state:
- `ai-concepts`: `KoHgQIFsgTU`, then `KNUw11_4Btc`.
- `coding-with-ai`: `c95W__muKyI`, then `pJ11diFOjqo`.
- Actual CLI output is authoritative. Record every result line and each command exit code.
- All four expected IDs currently belong only to the playlist whose command should select them. Recheck membership and provenance after selection rather than relying only on this projection.
- Use actual final `status` as authoritative.

Outcome handling:
- Captured: require a new non-empty coarse-timestamped transcript plus metadata.
- Persisted unavailable: require metadata only, no transcript, no summary, and no refill.
- Ordinary transient: require no persisted record; continue to the other planned command, but do not refill.
- Throttle/`TooManyRequest`, stopped queue, or fatal result: stop all further capture immediately; preserve and summarize prior successes only.

Capture commit comes first:
- For each result, verify directory and metadata video IDs, requested language `it`, actual language `it` or a regional `it-*` variant on success, caption kind, and non-empty transcript chunks. For unavailable results, verify the typed reason and absence of transcript/summary.
- Inspect both manifests for every selected video. For any unexpectedly shared video, record whether title and publication date agree and use the manifest of the playlist whose command selected it as summary provenance. If a captured transcript normalizes spaces or punctuation differently, preserve the selected manifest title byte-for-byte in summary frontmatter.
- Stage only new generated capture artifacts, run `git diff --cached --check`, and commit them before editorial work as `capture YouTube backfill batch 9 transcripts`.

Editorial work for every successful capture:
- Read the complete transcript, metadata, and selected manifest entry before writing. Do not summarize unavailable or transient outcomes.
- Follow `src/content/youtube/AGENTS.md` exactly: ordered frontmatter, selected-manifest title and `publishedAt`, metadata language and caption kind, `summaryLanguage: en`, `status: draft`, caption-kind-adapted translation/paraphrase disclosure as the first body line, exact heading order, canonical watch URL, and `[transcript.md](./transcript.md)`.
- Every Key Ideas bullet must have a transcript timestamp or range. Verify every endpoint exists as a sibling transcript chunk and that the cited text supports the claim. Do not use translated verbatim quotations, placeholders, unsupported current claims, playlist synthesis, or author synthesis.
- Run `npm run lint:fix` before the summary commit. Retain only the known unrelated reference-site baseline. The formatter may rewrite the two old unavailable records; restore them byte-for-byte so these hashes remain:
  - `src/content/youtube/videos/H5cvtoSxdxI/metadata.json`: `c5ddc8de1fb1dccf0113b00cbe25ba6370e73703e1949dd26df17ddfa63b82ae`
  - `src/content/youtube/videos/9mHKjgFMsQA/metadata.json`: `f4e903f16b9a3378a045d296dc8feb38193a28bd6fe69ba1a8e6ac758fac88bb`
- Stage only new summaries, run `git diff --cached --check`, and commit them as `add YouTube backfill batch 9 summaries`.

Full-success projection, for comparison only:
- `ai-concepts`: 24 captured entries representing 23 unique videos, 38 pending, 1 unavailable-recorded, 0 missing summaries. Its untouched overview gains stale IDs `KoHgQIFsgTU` and `KNUw11_4Btc`.
- `coding-with-ai`: 18 captured, 11 pending, 1 unavailable-recorded, 0 missing summaries. Its untouched overview gains stale IDs `c95W__muKyI` and `pJ11diFOjqo`.
- Author `antirez`: 36 captured, 48 pending, 2 unavailable-recorded; author synthesis remains missing.
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
- Append a dated Task 5j entry to `progress.md` with preflight, exact command outcomes and exits, generated/source/editorial sizes, caption kinds and languages, unavailable/transient/throttle details, manifest provenance, every summary's verified timestamp-endpoint count, any shared-membership effects, final status, all verification results, commits, deviations/blockers, and measured comparison through Task 5i.
- Preserve the corrected cumulative source count chain from Tasks 5h–5i. Keep Tasks 5 and 6 unchecked. Update `index.md` to link `handoff-task-5j.md` and make the next action deriving a dedicated Task 5k handoff from Task 5j's actual evidence. Do not begin 5k.
- Commit only `progress.md` and `index.md` as `record YouTube backfill batch 9 progress`.

Stop conditions:
- Stop and report on baseline mismatch, dirty worktree, unsupported selected language, provenance that cannot be resolved from committed manifests, unsupported editorial claims, disallowed file changes, throttle/fatal/stopped capture, or any required scope expansion.
- A throttle/fatal/stopped result stops further capture, not source-checking and summarization of successes already obtained.

Final response must report exact commits, command exits and outcomes, actual final status, transcript/metadata/summary sizes and anchor counts, playlist accounting, all checks and known lint baseline, deviations/blockers, cumulative attempt evidence through this batch, and an evidence-based maximum size recommendation for Task 5k. Do not claim Task 5 complete.
```
