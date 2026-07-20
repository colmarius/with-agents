# Task 5f Handoff Prompt

```text
Continue .agents/work/tooling/youtube-knowledge-library/. Read index, Task 5 plan, progress through 5e, src/content/youtube/AGENTS.md, catalog, manifests, and existing summaries.

Goal: fifth bounded backfill batch: one `--limit 2` capture per playlist, then a source-checked draft summary for each success. Task 5 remains in progress; no synthesis/Task 6.

Batch: max four attempts, no refill. 18 prior attempts: 16 captures,2 durable unavailable,0 throttle/transient/fatal. Do not enlarge; derive 5g from actuals.

Forbidden: sync/retry/force, tooling/tests/package/catalog/AGENTS/manifests/existing corpus edits, overview/author changes, placeholders, Task 5 check, Task 6.

Preflight clean/help 0. Status baseline: ai 9 captured entries/8 unique,53 pending,1 unavailable,0 missing; coding 8 captured,21 pending,1 unavailable,0 missing; author16 captured,68 pending,2 unavailable. Overviews stale; author missing. Stop on mismatch.

Run once each sequentially:
1. `npm run youtube:library -- capture --playlist ai-concepts --limit 2`
2. `npm run youtube:library -- capture --playlist coding-with-ai --limit 2`

Expected heads: TlGrAretPQw,497EK7ZQ2FY; then 2Jn6Z2nr-44,9AjeHE_VReY. Actual output wins. Record lines/exits.
- Captured: transcript+metadata. Unavailable: metadata only/no summary/refill. Ordinary transient: no write; continue other command. Throttle/stopped/fatal: stop capture; summarize prior successes.
- Both coding heads are shared with ai; ai heads are ai-only. Successful coding capture increases captured/decreases pending in both playlists while adding one unique author video each. Other pending shared IDs: Yajmt1CeiHg,uxAhuNPSBuE,todMmp6AGCE,0buzDrn0aIY.

Commit capture first: only new videos transcript+metadata/unavailable metadata; diff-check; `capture YouTube backfill batch 5 transcripts`.

For each success verify requested it; actual it/it-*; caption kind; IDs; non-empty chunks. Check both manifests; use selected coding manifest provenance for shared heads, recording any title/date discrepancy. Read complete transcript+metadata+manifest and write exact AGENTS summary: ordered en/draft provenance, adapted disclosure, exact headings/links, no translated verbatim/unsupported/live claims. Verify every Key Ideas endpoint exists and supports claim.

Before summary commit run lint:fix; retain only known reference baseline and restore generated JSON bytes. Diff-check; commit summaries only `add YouTube backfill batch 5 summaries`.

Full-success projection: ai 13 captured entries/12 unique,49 pending,1 unavailable; coding10 captured,19 pending,1 unavailable; author20 captured,64 pending,2 unavailable. Zero missing; ai stale overview gains all four IDs, coding gains shared coding IDs; author remains missing. Actual status wins.

Allowed: new videos/<id>/{transcript,metadata,summary}; work progress/index only.

Verify status, 40 tests, lint baseline, check, build, boundary rg no matches, diff-check each commit, final clean.

Append Task5f progress with every result/size/anchor/status/check and shared membership effect. Index add handoff and derive 5g. Tasks5–6 unchecked. Commit `record YouTube backfill batch 5 progress`.

Stop on baseline/provenance/unsupported/disallowed/throttle/fatal. Throttle/fatal stops capture not prior summaries. Never broaden/update synthesis.

Final report: commits/outcomes/status/checks, transcript+summary sizes/anchors, comparisons through 5e, pending counts, cumulative 22-attempt evidence, explicit dual-playlist effect, evidence-based 5g recommendation. Do not claim Task5 complete.
```
