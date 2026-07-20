# Task 5k Handoff Prompt

```text
Continue `.agents/work/tooling/youtube-knowledge-library/`. Read index.md, Task 5 in plan.md, progress through Task 5j, `src/content/youtube/AGENTS.md`, catalog, both manifests, and existing summary patterns.

Goal: run only the tenth bounded Task 5 backfill batch: one `--limit 2` capture command per playlist, then one source-checked English draft summary per successful capture. Task 5 remains in progress; no synthesis or Task 6.

Evidence and ceiling:
- Through 5j: 38 planned attempts, 36 captures, 2 durable strict-language unavailable, zero ordinary transient/fatal/throttle/`TooManyRequest`/stopped outcomes, no retries.
- Direct corpus recount: 70,453 transcript words and 17,619 summary words. Task 5j added 6,800/1,970 words; individual transcripts still span 241–4,350 words (18-fold).
- Maximum four planned attempts: exactly one `--limit 2` command per playlist, no refill. Do not enlarge or shrink. Stop capture immediately on throttle/fatal/stopped result; still summarize prior successes.

Forbidden: sync/retry/force/repeated or refill capture; tooling/tests/package/catalog/AGENTS/manifests/existing-corpus edits; overview or author-synthesis edits; placeholders; Task 5 checkoff; Task 6. Allowed corpus changes are only newly selected video metadata, successful transcripts, and successful summaries; work-item changes only progress/index after corpus commits.

Preflight must be clean. Run help (exit 0) and status. Baseline must be:
- ai-concepts: 63 entries; 24 captured occurrences/23 unique; 38 pending; 1 unavailable (`9mHKjgFMsQA`); 0 missing; 24 drafts.
- coding-with-ai: 30 entries; 18 captured; 11 pending; 1 unavailable (`H5cvtoSxdxI`); 0 missing; 18 drafts.
- antirez: 86 deduped; 36 captured; 48 pending; 2 unavailable; synthesis missing.
- Overviews remain intentionally stale. Stop before capture on mismatch.

Run exactly once, sequentially:
1. `npm run youtube:library -- capture --playlist ai-concepts --limit 2`
2. `npm run youtube:library -- capture --playlist coding-with-ai --limit 2`

Expected heads: ai `u_tE4Q1Xwoc`, `mJyxKkfYWuQ`; coding `sMl3V0vjvjE`, `NDBQq_NzxiE`. All currently playlist-specific. Actual CLI output is authoritative; record every line and exit, and recheck membership/provenance after selection.

Outcomes:
- Captured: metadata plus non-empty coarse-timestamped transcript.
- Persisted unavailable: metadata only, no transcript/summary/refill.
- Ordinary transient: no persisted record; continue other planned command, no refill.
- Throttle/`TooManyRequest`/stopped/fatal: stop further capture; summarize prior successes.

Capture commit first:
- Verify IDs, requested `it`, successful actual `it` or `it-*`, kind, chunks, and unavailable shape when applicable.
- Inspect both manifests. Any unexpectedly shared video uses the selecting command's manifest for summary provenance; record title/date agreement. Preserve selected-manifest title bytes over capture normalization.
- Stage only new generated artifacts, `git diff --cached --check`, commit `capture YouTube backfill batch 10 transcripts`.

Editorial work:
- Read every complete transcript, metadata, and selected manifest entry. Follow AGENTS exactly: ordered provenance, en/draft, adapted first-line disclosure, exact headings, canonical watch and transcript links, no translated verbatim/placeholder/live unsupported/synthesis content.
- Anchor every Key Ideas bullet; verify every endpoint is a sibling chunk and supports the claim.
- Run `npm run lint:fix`; retain only known reference-site baseline. Restore old unavailable records byte-for-byte:
  - H5cvtoSxdxI: `c5ddc8de1fb1dccf0113b00cbe25ba6370e73703e1949dd26df17ddfa63b82ae`
  - 9mHKjgFMsQA: `f4e903f16b9a3378a045d296dc8feb38193a28bd6fe69ba1a8e6ac758fac88bb`
- Stage only new summaries, diff-check, commit `add YouTube backfill batch 10 summaries`.

Full-success projection only: ai 26 captured occurrences/25 unique/36 pending/1 unavailable; coding 20 captured/9 pending/1 unavailable; author 40 captured/44 pending/2 unavailable; zero missing. AI overview gains the two AI IDs, coding overview the two coding IDs. Actual status wins.

Verify: status; `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs` (40 expected); lint with only the known `.agents/references/dot-agents/site/` baseline and no byte drift; `npm run check`; `npm run build` (18 pages expected); `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts` and `rg -n "source-only" dist/` both no matches; `git show --check`; final clean worktree.

Progress contract:
- Append dated Task 5k progress with exact commands/exits/outcomes, sizes/chunks/language/kind, provenance, anchor counts, state effects, final status, checks, commits, deviations, comparison/cumulative evidence, and evidence-based Task 5l size.
- Keep Tasks 5–6 unchecked. Link `handoff-task-5k.md` in index and set next action to derive a dedicated 5l handoff; do not begin it.
- Commit only progress/index as `record YouTube backfill batch 10 progress`.

Stop on dirty/baseline mismatch, unsupported language, unresolved provenance, unsupported claims, disallowed changes, throttle/fatal/stopped capture, or scope expansion. Final report must include all real outcomes, commits, status, measurements/anchors, checks, cumulative evidence, and bounded 5l recommendation. Never claim Task 5 complete.
```
