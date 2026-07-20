# Task 5l Handoff Prompt

```text
Continue `.agents/work/tooling/youtube-knowledge-library/`. Read index, Task 5 plan, progress through 5k, the 5k handoff, YouTube AGENTS, catalog, both manifests, and summary patterns.

Goal: only the eleventh bounded Task 5 backfill batch: one `--limit 2` capture per playlist, then source-checked English draft summaries for successes. Task 5 stays in progress; no synthesis/Task 6.

Evidence: through 5k, 42 attempts = 40 captures + 2 durable language-unavailable; zero transient/fatal/throttle/stopped, no retries. Corpus recount 76,085 transcript / 19,705 summary words; 5k added 5,632/2,086; source range remains 241–4,350 (18×). Keep max four attempts exactly, no refill; stop capture on throttle/fatal/stopped but summarize prior successes.

Forbidden: sync/retry/force/repeat/refill; tooling/tests/package/catalog/AGENTS/manifests/existing corpus; overviews/author synthesis/placeholders; Task 5 check; Task 6. Allow only newly selected metadata, successful transcripts/summaries, then progress/index.

Clean preflight; help 0; status must match:
- ai: 63 entries; 26 captured occurrences/25 unique; 36 pending; 1 unavailable `9mHKjgFMsQA`; 0 missing; 26 drafts.
- coding: 30; 20 captured; 9 pending; 1 unavailable `H5cvtoSxdxI`; 0 missing; 20 drafts.
- author: 86 deduped; 40 captured; 44 pending; 2 unavailable; synthesis missing. Overviews stale. Stop on mismatch.

Run once each sequentially:
1. `npm run youtube:library -- capture --playlist ai-concepts --limit 2`
2. `npm run youtube:library -- capture --playlist coding-with-ai --limit 2`

Expected heads: AI `LG3q-sqMG0g`, `2F1xWHKaras`; coding `id9QG-mQSOo`, `0buzDrn0aIY`. Actual output wins. First three are playlist-specific. `0buzDrn0aIY` is shared with matching title/date; if coding-selected, use coding provenance and count it in both playlist states/staleness. Recheck after selection.

Outcome rules: captured = metadata+nonempty chunked transcript; unavailable = metadata only/no summary/refill; transient = no persisted record, continue other command/no refill; throttle/TooManyRequest/stopped/fatal = stop capture and summarize prior successes.

Commit capture first: verify IDs/requested it/actual it or it-*/kind/chunks; unavailable shape; both-manifest membership and selected provenance/title bytes. Stage only generated files, diff-check, commit `capture YouTube backfill batch 11 transcripts`.

For every success read full transcript+metadata+selected manifest and write exact AGENTS summary: ordered provenance, en/draft, kind-adapted first-line disclosure, exact headings/links, every Key Ideas bullet anchored with each endpoint present and supporting the claim; no translated verbatim/placeholders/unsupported current or synthesis claims.

Run lint; retain only known `.agents/references/dot-agents/site/` baseline. Restore unavailable bytes/hashes: H5 `c5ddc8de1fb1dccf0113b00cbe25ba6370e73703e1949dd26df17ddfa63b82ae`; 9m `f4e903f16b9a3378a045d296dc8feb38193a28bd6fe69ba1a8e6ac758fac88bb`. Stage summaries only, diff-check, commit `add YouTube backfill batch 11 summaries`.

Full-success comparison: ai 29 captured occurrences/28 unique/33 pending/1 unavailable; coding 22/7/1; author 44 captured/40 pending/2 unavailable; zero missing. AI overview gains three IDs (its two heads plus shared `0buzDrn0aIY`); coding gains its two. Actual status wins.

Verify status; exact 40-test Node command; lint/no drift; check; 18-page build; exact import and dist boundary rg commands; show-check commits; clean tree. Commands/patterns are in 5k handoff/progress.

Append dated 5l progress with exact outcomes/exits, sizes/chunks/languages/kinds, provenance/shared effect, anchors, status/checks/commits/deviations/cumulative comparison and 5m sizing. Keep Tasks 5–6 unchecked; link 5l in index and next action derive 5m only. Commit progress/index `record YouTube backfill batch 11 progress`.

Stop on dirty/baseline mismatch, language/provenance/claim failure, disallowed changes, throttle/fatal/stopped, or expansion. Final report must include real outcomes, measurements, shared accounting, checks, cumulative evidence, bounded 5m recommendation. Never claim Task 5 complete.
```
