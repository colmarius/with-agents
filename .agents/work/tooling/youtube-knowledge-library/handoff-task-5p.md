# Task 5p Handoff Prompt

```text
Continue `.agents/work/tooling/youtube-knowledge-library/`. Read index, Task 5 plan, progress through 5o, 5o handoff, YouTube AGENTS, catalog/manifests, and established summary patterns.

Goal: fifteenth bounded backfill batch only: one `--limit 2` capture command per playlist (maximum three selectable videos because Coding has one pending), then one complete source-checked draft for every success. Task 5 stays in progress; no overview/author synthesis or Task 6.

Evidence: 58 attempts through 5o = 52 captures + 6 durable strict-language unavailable, zero ordinary transient/fatal/throttle/TooManyRequest/stopped/retry. Corpus: 99,872 transcript words and 26,519 summary words; individual transcript range remains 241–4,350 words (18×). Keep the exact maximum three attempts/no refill; stop capture on throttle/fatal/stopped and summarize prior successes.

Forbidden: sync/retry/force/repeat/refill; tooling/tests/package/catalog/AGENTS/manifests/existing corpus; overview/author synthesis/placeholders; Task 5 check; Task 6. Allow only newly selected metadata, successful transcript/summary artifacts, then progress/index.

Clean preflight/help exit 0/status must match: AI 63 entries/34 captured occurrences/33 unique/27 pending/2 unavailable (`9mHKjgFMsQA`, `LG3q-sqMG0g`)/0 missing/34 drafts; coding 30/25 captured/1 pending/4 unavailable (`H5cvtoSxdxI`, `D1_wPWzNkJ4`, `rCIZflYEpEk`, `qipoQGqMCp0`)/0 missing/25 drafts; author 86 deduped/52 captured/28 pending/6 unavailable, synthesis missing; both overviews stale. Stop on mismatch.

Run exactly once each, sequentially, with no refill:
1. `npm run youtube:library -- capture --playlist ai-concepts --limit 2`
2. `npm run youtube:library -- capture --playlist coding-with-ai --limit 2`
Expected heads: AI `ariy-Czkexc`, `eyj_YqLxZfo`; sole coding head `_pLlet9Jrzc`. All three currently belong only to the selecting playlist. The coding command must select at most its one pending item; an empty second slot is not a refill opportunity. Actual CLI output wins; recheck membership and selected-manifest provenance before editorial work.

Outcome rules: captured = metadata + nonempty chunked transcript. Durable unavailable = typed metadata only, no transcript/summary/refill. Ordinary transient = no persisted record and remains pending; continue to the other planned command, no refill. Throttle/TooManyRequest/stopped/fatal = stop all further capture immediately, but summarize prior successes.

Commit generated capture artifacts first: verify directory/source/metadata IDs, requested `it`, actual `it` or `it-*`, caption kind, nonempty chunks, durable-unavailable shape, selected-manifest provenance, and title bytes. Stage generated files only, run diff-check, and commit `capture YouTube backfill batch 15 transcripts`.

For every success, read the complete transcript, metadata, and selected manifest entry. Write the exact AGENTS summary contract: ordered frontmatter, manifest title/date, metadata language/kind, `summaryLanguage: en`, `status: draft`, caption-kind-adapted first-line disclosure, exact heading order, canonical watch/transcript links. Anchor every Key Ideas bullet to real chunks; verify every endpoint and claim, especially technical/quantitative claims. Never present English translation/paraphrase as verbatim; no placeholders, unsupported current claims, or synthesis. Commit summaries only as `add YouTube backfill batch 15 summaries`.

Lint may fail only on the known `.agents/references/dot-agents/site/` baseline. Restore all six unavailable records byte-for-byte. Required hashes: H5 `c5ddc8de1fb1dccf0113b00cbe25ba6370e73703e1949dd26df17ddfa63b82ae`; 9m `f4e903f16b9a3378a045d296dc8feb38193a28bd6fe69ba1a8e6ac758fac88bb`; LG `0aed612127ab0203225472dce215febd2cbf3ed75414e1d1ba788309e203c7fd`; D1 `dd29fef436b30df96abe8bba269a9bae63e6f3de090eaac707c454d3d651be5c`; rC `42e44b620b445ae1709b2fd9e78be8d81124f4c2ed129a9890dc8b11b5511084`; qipo `1a17a2274920be7ff1dbf65965964df347d8a1e622f6e8d0c6b32d67813d7554`. Record and preserve any new unavailable hash too.

Full-success comparison: AI 36 captured occurrences/35 unique/25 pending/2 unavailable; coding 26 captured/0 pending/4 unavailable; author 55 captured/25 pending/6 unavailable; zero missing summaries. AI overview gains two stale IDs and coding gains one. Actual status and shared-membership effects override projections.

Verify final status; 40 focused Node tests; `npm run lint:fix` with only known baseline plus restored unavailable hashes; generated capture-byte drift; `npm run check`; 18-page `npm run build`; both source-only boundary `rg` checks with no matches; `git diff --check`; `git show --check`; clean tree. Append dated 5p progress with exact outcomes, sizes/anchors/provenance, unavailable/transient handling, accounting, checks/commits/deviations, cumulative evidence, and 5q sizing. If Coding reaches zero pending, do not recommend another empty Coding capture command; size 5q from actual remaining queues. Keep Tasks 5–6 unchecked; update index to link 5p and next derive 5q only. Commit progress/index as `record YouTube backfill batch 15 progress`.

Stop on dirty baseline, language/provenance/claim uncertainty, disallowed edits, throttle/fatal/stopped, or scope expansion. Final report actual outcomes and remaining counts; never claim Task 5 complete or push.
```
