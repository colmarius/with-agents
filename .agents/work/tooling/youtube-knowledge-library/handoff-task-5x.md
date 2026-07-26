# Task 5x Handoff Prompt

```text
Continue `.agents/work/tooling/youtube-knowledge-library/`. Read index, Task 5 plan, progress through 5w, 5w handoff, YouTube AGENTS, catalog/manifests, and established summary patterns.

Goal: twenty-third bounded backfill batch only: one `ai-concepts --limit 2` capture command, then one complete source-checked draft for every success. Coding has zero pending and must not receive an empty capture command. Task 5 stays in progress; no overview/author synthesis or Task 6.

Evidence: 75 attempts through 5w = 68 captures + 7 durable strict-language unavailable, zero ordinary transient/fatal/throttle/TooManyRequest/stopped/retry. Current direct corpus recount: 133,821 transcript words and 37,899 summary words; individual transcripts span 241–5,055 words and summaries 235–832. Keep the exact maximum two attempts/no refill; stop capture on throttle/fatal/stopped and summarize prior successes.

Forbidden: any Coding capture command; sync/retry/force/repeat/refill; tooling/tests/package/catalog/AGENTS/manifests/existing corpus; overview/author synthesis/placeholders; Task 5 check; Task 6. Allow only newly selected AI metadata, successful transcript/summary artifacts, then progress/index.

Clean preflight/help exit 0/status must match: AI 63 entries/50 captured occurrences/49 unique/11 pending/2 unavailable (`9mHKjgFMsQA`, `LG3q-sqMG0g`)/0 missing/50 drafts; coding 30/25 captured/0 pending/5 unavailable (`H5cvtoSxdxI`, `D1_wPWzNkJ4`, `rCIZflYEpEk`, `qipoQGqMCp0`, `_pLlet9Jrzc`)/0 missing/25 drafts; author 86 deduped/68 captured/11 pending/7 unavailable, synthesis missing; both overviews stale. Stop on mismatch.

Run exactly once, with no refill:
`npm run youtube:library -- capture --playlist ai-concepts --limit 2`
Expected heads: `KM_73zFwlVY` (AI position 47), `CBoPGYCyArQ` (AI position 53). Both currently occur once in AI and zero times in Coding and have no local artifacts. Actual CLI output wins; recheck membership and selected-manifest provenance before editorial work.

Outcome rules: captured = metadata + nonempty chunked transcript. Durable unavailable = typed metadata only with requested and available languages, no transcript/summary/refill. Ordinary transient = no persisted record and remains pending; no refill. Throttle/TooManyRequest/stopped/fatal = stop all further capture immediately, but summarize prior successes.

Commit generated capture artifacts first: verify directory/source/metadata IDs, requested `it`, actual `it` or `it-*`, caption kind, nonempty chunks, durable-unavailable shape, selected-manifest provenance, and title bytes. Stage generated files only, run diff-check, and commit `capture YouTube backfill batch 23 transcripts`.

For every success, read the complete transcript, metadata, and selected manifest entry. Write the exact AGENTS summary contract: ordered frontmatter, manifest title/date bytes, metadata language/kind, `summaryLanguage: en`, `status: draft`, caption-kind-adapted first-line disclosure, exact heading order, canonical watch/transcript links. Anchor every Key Ideas bullet to real chunks and verify every endpoint and claim. The projected TurboQuant/vector-search item may mix a proposed modification, implementation account, and measurements: keep intent, described method, implementation status, speaker-observed result, and independently reproduced evidence distinct; preserve uncertainty around algorithms, datasets, indexes, configurations, precision, memory, quality, complexity, latency, throughput, and benchmarks. The projected vlog may mix personal responsibility, project plans/progress, and gifted or promised hardware: distinguish plans from completed work and speaker statements from verified events; do not infer receipt, value, sponsorship, endorsement, obligation, commercial relationship, performance, or delivery absent transcript evidence. Do not infer run counts, selection methods, reproducibility, comparisons, or achieved future outcomes. Never present English translation/paraphrase as verbatim. No placeholders, unsupported current claims, or synthesis. Commit summaries only as `add YouTube backfill batch 23 summaries`.

Lint may fail only on the known `.agents/references/dot-agents/site/` baseline. Restore all seven unavailable records byte-for-byte. Required hashes: H5 `c5ddc8de1fb1dccf0113b00cbe25ba6370e73703e1949dd26df17ddfa63b82ae`; 9m `f4e903f16b9a3378a045d296dc8feb38193a28bd6fe69ba1a8e6ac758fac88bb`; LG `0aed612127ab0203225472dce215febd2cbf3ed75414e1d1ba788309e203c7fd`; D1 `dd29fef436b30df96abe8bba269a9bae63e6f3de090eaac707c454d3d651be5c`; rC `42e44b620b445ae1709b2fd9e78be8d81124f4c2ed129a9890dc8b11b5511084`; qipo `1a17a2274920be7ff1dbf65965964df347d8a1e622f6e8d0c6b32d67813d7554`; pL `031a889e6a805d73c42211120e56ff04933fe79f9893e76e5227bf3a3445c5a5`. Record and preserve any new unavailable hash too.

Full-success projection: AI 52 captured occurrences/51 unique/9 pending/2 unavailable; coding unchanged at 25 captured/0 pending/5 unavailable; author 70 captured/9 pending/7 unavailable; zero missing summaries. AI overview gains two stale IDs; Coding overview gains none. Actual status and shared-membership effects override projections.

Verify final status; 40 focused Node tests; `npm run lint:fix` with only known baseline plus restored unavailable hashes; generated capture-byte drift; `npm run check`; 18-page `npm run build`; both source-only boundary `rg` checks with no matches; `git diff --check`; `git show --check`; clean tree. Append dated 5x progress with exact outcomes, sizes/anchors/provenance, unavailable/transient handling, accounting, checks/commits/deviations, cumulative evidence, and 5y sizing from the actual AI-only queue. Keep Tasks 5–6 unchecked; update index to link 5x and next derive 5y only. Commit progress/index as `record YouTube backfill batch 23 progress`.

Stop on dirty baseline, language/provenance/claim uncertainty, disallowed edits, throttle/fatal/stopped, or scope expansion. Final report actual outcomes and remaining counts; never claim Task 5 complete or push. Reply to the orchestrator thread when finished.
```
