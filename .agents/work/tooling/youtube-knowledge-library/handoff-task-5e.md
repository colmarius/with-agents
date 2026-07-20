# Task 5e Handoff Prompt

```text
Continue .agents/work/tooling/youtube-knowledge-library/. Read index, Task 5 plan, progress through 5d, src/content/youtube/AGENTS.md, catalog, manifests, and existing summaries.

Goal: run the fourth bounded backfill batch: one `--limit 2` capture per playlist, then a source-checked draft summary for every success. Task 5 remains in progress; no synthesis or Task 6.

Batch rule:
- Maximum four attempts/summaries, no refill. Fourteen prior attempts yielded 12 captures, 2 durable language-unavailable records, and no throttle/transient/fatal result.
- Do not enlarge: source sizes vary 18-fold and editorial cost is not proportional. Derive 5f from actuals.

Forbidden: sync, retry, force, tooling/tests/package/catalog/AGENTS/manifests/existing corpus edits, overview updates, author file, Task 5 checkbox, Task 6, placeholders. Leave stale overviews untouched.

Preflight:
- Clean worktree; help exits 0.
- Status baseline must be: ai 7 captured entries/6 unique,55 pending,1 unavailable 9mHKjgFMsQA,0 missing; coding 6 captured,23 pending,1 unavailable H5cvtoSxdxI,0 missing; author 12 captured,72 pending,2 unavailable. Both overviews stale; author file missing. Stop on mismatch.

Capture once each, sequentially:
1. `npm run youtube:library -- capture --playlist ai-concepts --limit 2`
2. `npm run youtube:library -- capture --playlist coding-with-ai --limit 2`

Expected heads: MUE3iBpAzOw, 2tIdZ43Fchk; then SiOadQFUx2k, jaB2cor6zWI. CLI output is authoritative.
- Record every line/exit.
- captured: transcript+metadata. unavailable: metadata only/no summary/refill. ordinary transient: no write; continue the other planned command. TooManyRequest/stopped/fatal: stop further capture and summarize prior successes.
- Global dedupe applies. Shared IDs: 0buzDrn0aIY, 2Jn6Z2nr-44, 9AjeHE_VReY, Yajmt1CeiHg, todMmp6AGCE, uxAhuNPSBuE. None is an expected head; report unique/entry counts if actual selection differs.

Capture commit first:
- Only new videos/** transcript+metadata or unavailable metadata-only files.
- `git diff --check`; commit `capture YouTube backfill batch 4 transcripts`.

For each success:
- Verify requested it; actual it/it-*; kind caption|auto-generated; matching IDs; non-empty chunked transcript.
- Check both manifests; selected playlist title/publishedAt owns provenance when mutable shared titles differ.
- Read full transcript+metadata+manifest. Write summary exactly per AGENTS: ordered provenance, en/draft, adapted first-line disclosure, exact headings/source links, no verbatim translated/unsupported/live-data claims.
- Verify every Key Ideas timestamp endpoint exists and supports its claim.

Before summary commit:
- Run `npm run lint:fix`; retain only known reference-site baseline. Restore all generated JSON bytes if formatted; never include unrelated/capture mechanical changes.
- `git diff --check`; commit summaries only as `add YouTube backfill batch 4 summaries`.

Expected full-success status projection: ai 9 captured entries/8 unique,53 pending,1 unavailable; coding 8 captured,21 pending,1 unavailable; author 16 captured,68 pending,2 unavailable. Actual output wins. Zero missing summaries; stale overviews gain new missing IDs; author remains missing.

Allowed files: new videos/<id>/{transcript.md,metadata.json,summary.md}; work-item progress.md/index.md only.

Verify: status; 40-test focused suite; lint result above; `npm run check`; `npm run build`; source-only/import rg checks have no matches; diff-check per commit; final clean status.

Update progress with every outcome/exit, artifact sizes (transcript bytes/words/chunks; summary bytes/words/verified endpoints), final status/checks, cumulative failures/throttle, deviations, next action. Add handoff-task-5e.md and point index to deriving 5f. Leave Tasks 5–6 unchecked. Commit `record YouTube backfill batch 4 progress`.

Stop on dirty/baseline mismatch, provenance/language issue, unsupported claim, disallowed-file need, throttle, or fatal. Throttle/fatal stops capture but not summaries for prior successes. Never broaden or update synthesis.

Final report: commits/outcomes/status/checks; all size/anchor evidence; compare 5b 8,538→1,563, 5c 3,123→1,391, 5d 5,979→1,418; pending counts and cumulative evidence across 18 planned attempts through 5e; evidence-based 5f recommendation. Do not claim Task 5 complete.
```
