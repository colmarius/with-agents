# Task 5c Handoff Prompt

```text
You are continuing the work item at:

.agents/work/tooling/youtube-knowledge-library/

Read first, in order:
1. .agents/work/tooling/youtube-knowledge-library/index.md
2. .agents/work/tooling/youtube-knowledge-library/plan.md (Task 5 remains in progress)
3. .agents/work/tooling/youtube-knowledge-library/progress.md (especially Task 5b actuals)
4. src/content/youtube/AGENTS.md
5. src/content/youtube/catalog.json and both committed playlist manifests
6. Existing summaries under src/content/youtube/videos/ as style/contract references

Goal:
Run the second bounded backfill batch: at most two capture attempts per playlist, followed by a real source-checked draft summary for every transcript actually captured. This is Task 5c only, not Task 5 completion. Do not update overviews, create author synthesis, or start Task 6.

Batch decision:
- Fixed batch: `--limit 2` once for ai-concepts and once for coding-with-ai, maximum four new transcripts/summaries, with no refill.
- Task 5b had four successes without throttle/failure but ranged from 241 to 4,350 source words per video and totaled 8,538 words. Do not enlarge based on the clean network result.
- Do not automatically repeat the size. Derive Task 5d from this batch's actual source context and throttle behavior.

Hard boundaries:
- Do not run sync or modify scripts, tests, package.json, catalog.json, AGENTS.md, manifests, existing corpus files, or either overview.md.
- Leave both already-stale overviews untouched.
- Do not create authors/antirez.md, use force/retry, check Task 5, or start Task 6.
- Every newly captured transcript must receive a real source-checked summary unless an explicit blocker is recorded. No placeholders.

Preflight:
- `git status --short --branch` must be clean; stop if not.
- `npm run youtube:library -- help` must exit 0.
- Confirm baseline with `npm run youtube:library -- status`:
  - ai-concepts: 63/63; 4 captured entries representing 3 unique videos; 59 pending; 0 unavailable; 0 missing summaries; overview stale for 2VnxJafIfEI and T5b69_8f5MI.
  - coding-with-ai: 30/30; 3 captured; 27 pending; 0 unavailable; 0 missing summaries; overview stale for WoaulxVqUUA and ro9ZPPoajJg.
  - author antirez: 86 deduped; 6 captured; 80 pending; author file missing.
- Stop before capture on a mismatch.

Capture exactly once per playlist, sequentially:
1. `npm run youtube:library -- capture --playlist ai-concepts --limit 2`
2. `npm run youtube:library -- capture --playlist coding-with-ai --limit 2`

- Record each output line and exit code. Expected queue heads are wb7WMD8BtCQ and vIUzIYpmb9Q, then WiJ2SaI-BtY and H5cvtoSxdxI; actual CLI output is authoritative.
- Outcome handling:
  - captured/exit 0: transcript+metadata generated.
  - unavailable/exit 2: persist metadata, do not summarize/refill.
  - ordinary transient/exit 2: no write; leave pending; continue the other planned command.
  - TooManyRequest or stopped queue: stop all further capture, including the second command if the first throttles; summarize prior successes.
  - fatal/exit 1: stop capture, record, summarize prior successes.
- Capture dedupes globally. The playlists share six IDs: 0buzDrn0aIY, 2Jn6Z2nr-44, 9AjeHE_VReY, Yajmt1CeiHg, todMmp6AGCE, uxAhuNPSBuE. None is an expected head, but if actual selection reaches one, capture once and distinguish entry/unique counts.

Commit capture artifacts before editorial work:
- Only new videos/** transcript+metadata files (or unavailable metadata-only files) may appear.
- Run `git diff --check` and commit as `capture YouTube backfill batch 2 transcripts`.

For every success, verify before summary writing:
- metadata requestedLanguage is it; actual language is it or it-*; kind is caption or auto-generated.
- transcript is non-empty, IDs match, and coarse chunks appear under `## Transcript`.
- Find real manifest entries in both playlists as applicable. Use the selected playlist's title/publishedAt if mutable titles differ and record the discrepancy.

Write one draft summary per newly captured transcript:
- Read the full committed transcript, metadata, and manifest entry.
- Follow src/content/youtube/AGENTS.md exactly: ordered provenance frontmatter, summaryLanguage en, status draft, adapted first-line translation/paraphrase disclosure, exact body headings, canonical source and transcript link.
- Every Key Ideas bullet requires a real chunk timestamp/range. Verify every endpoint exists and supports its claim.
- No verbatim translated captions, prior-knowledge/live-data claims, unsupported claims, or placeholders.

Before committing summaries:
- Run `npm run lint:fix`; retain only intended formatting. It may exit 1 solely for the known pre-existing .agents/references/dot-agents/site baseline; do not change those files and record it.
- Run `git diff --check`.
- Commit only new summaries as `add YouTube backfill batch 2 summaries`.

Expected end status:
- Run `npm run youtube:library -- status`.
- Both playlists have zero missing summaries among captured videos.
- Both overviews remain stale and add this batch's summarized IDs to missing coverage; do not edit them.
- authors/antirez.md remains missing with all summarized IDs.
- Full-success projection: ai-concepts 6 captured entries/5 unique and 57 pending; coding-with-ai 5 captured and 25 pending; author 10 captured/76 pending. Record actual outcomes/shared-ID effects, not projections.

Allowed files:
- src/content/youtube/videos/<new-id>/transcript.md
- src/content/youtube/videos/<new-id>/metadata.json
- src/content/youtube/videos/<new-id>/summary.md
- .agents/work/tooling/youtube-knowledge-library/progress.md
- .agents/work/tooling/youtube-knowledge-library/index.md

Verification:
- `npm run youtube:library -- status`
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`
- `npm run check`
- `npm run build`
- `rg -n "source-only" dist/` finds nothing.
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts` finds no registration/import.
- `git diff --check` per commit; final `git status --short --branch` clean.

Work-item update:
- Append Task 5c progress with every attempt/outcome/exit, generated files, transcript bytes/words/chunks, summary bytes/words/verified anchors, status and all verification, throttle evidence/absence, blockers/deviations, and next action.
- Update index Next Action to deriving Task 5d from Task 5c evidence; add handoff-task-5c.md if missing.
- Leave Tasks 5–6 unchecked.
- Commit as `record YouTube backfill batch 2 progress`.

Stop conditions:
- Dirty/baseline mismatch, strict-language/provenance mismatch, unsupported editorial claims, or need to alter disallowed files.
- TooManyRequest/fatal stops further capture but not summaries for prior successes.
- Do not broaden capture, update synthesis, or begin Task 6.

Final report / Task 5d inputs:
- Commits, each command exit/outcome, actual final status, all verification, blockers/deviations.
- Per transcript: bytes/words/chunks. Per summary: bytes/words/verified anchor endpoints.
- Compare with Task 5b's 8,538 source → 1,563 summary words and per-video spread.
- Report pending counts and cumulative throttle evidence across eight bounded backfill attempts (ten attempts including Task 5a), then recommend Task 5d size from actual evidence rather than automatically copying this batch.
- Do not claim Task 5 complete.
```
