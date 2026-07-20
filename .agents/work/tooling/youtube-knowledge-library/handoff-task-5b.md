# Task 5b Handoff Prompt

```text
You are continuing the work item at:

.agents/work/tooling/youtube-knowledge-library/

Read first, in order:
1. .agents/work/tooling/youtube-knowledge-library/index.md
2. .agents/work/tooling/youtube-knowledge-library/plan.md (Task 5 remains in progress)
3. .agents/work/tooling/youtube-knowledge-library/progress.md (especially Task 5a actuals)
4. src/content/youtube/AGENTS.md
5. src/content/youtube/catalog.json and both committed playlist manifests
6. The two existing thin-slice summaries as style/contract references

Goal:
Run the first bounded backfill batch: at most two capture attempts per playlist, followed by a real source-checked draft summary for every transcript actually captured. This is Task 5b only, not Task 5 completion. Do not update overviews, create author synthesis, or start Task 6.

Batch decision:
- Fixed batch: `--limit 2` once for ai-concepts and once for coding-with-ai, maximum four new transcripts/summaries.
- Evidence: Task 5a had two first-attempt successes with no throttle/unavailable/transient result; source transcripts were 1,040–1,286 words and summaries 333–385 words.
- Do not enlarge or automatically repeat this batch. Task 5c size must be derived from this batch's real transcript sizes, editorial context, and throttle behavior.

Hard scope boundaries:
- Do not run sync. The committed manifests are the source of truth for this batch.
- Do not modify scripts, tests, package.json, catalog.json, AGENTS.md, manifests, existing transcripts/summaries, or either overview.md.
- Leave both overviews stale after adding summaries rather than repeatedly rewriting synthesis.
- Do not create authors/antirez.md, use force/retry, check Task 5, or start Task 6.
- Every captured transcript must receive a real source-checked summary in this task unless an explicit blocker is recorded. No placeholder/stub files.

Preflight:
- `git status --short --branch` must be clean; stop if not.
- `npm run youtube:library -- help` must exit 0.
- Run `npm run youtube:library -- status` and confirm the Task 5a baseline:
  - ai-concepts: 63 entries/63 available; 2 captured entries representing 1 unique video; 61 pending; 0 unavailable-recorded; 0 missing summaries; overview current.
  - coding-with-ai: 30 entries/30 available; 1 captured; 29 pending; 0 unavailable-recorded; 0 missing summaries; overview current.
  - author antirez: 86 deduped; 2 captured; 84 pending; author file missing.
- If baseline differs, stop before capture and record/report the discrepancy rather than guessing.

Capture procedure:
- Run exactly once each, sequentially:
  1. `npm run youtube:library -- capture --playlist ai-concepts --limit 2`
  2. `npm run youtube:library -- capture --playlist coding-with-ai --limit 2`
- Record each per-video output line and command exit code. Expected queue heads from committed state are 2VnxJafIfEI and T5b69_8f5MI, then WoaulxVqUUA and ro9ZPPoajJg, but actual CLI output is authoritative.
- Exit/outcome handling:
  - Exit 0 / `captured <id>`: transcript.md and metadata.json were written.
  - Exit 2 / `unavailable <id>`: metadata-only persisted unavailable result; commit it, do not summarize it, and do not refill the batch.
  - Exit 2 / ordinary `transient <id>`: nothing written; leave pending, record it, and continue the other planned command.
  - TooManyRequest or `stopped with N remaining`: stop all further capture immediately, including the second command when the first throttles. Finish summaries for already captured videos.
  - Exit 1/fatal: stop further capture, record output, and finish summaries for already captured videos.
- Capture dedupes globally. A video shared across playlists is captured once; the later command correctly selects the next pending video. Report manifest-entry and unique-video counts separately when duplication/shared membership affects totals.

Commit capture artifacts before editorial work:
- `git status --short --branch` may show only new files under src/content/youtube/videos/**: transcript+metadata per success and metadata only per persisted unavailable.
- Run `git diff --check`.
- Commit generated artifacts as `capture YouTube backfill batch 1 transcripts`.

Provenance checks for every success:
- metadata requestedLanguage is `it`; language is `it` or an `it-*` regional variant; kind is `caption` or `auto-generated`. Any other language is a blocker.
- transcript is non-empty, directory/frontmatter video IDs match, and body has coarse timestamps under `## Transcript`.
- Find the real manifest entry in both manifests as applicable. Use the command's selected playlist entry for title/publishedAt when a shared video has differing mutable titles; record any discrepancy.

Write one draft summary per newly captured transcript:
- Read the entire committed transcript, metadata, and matching manifest entry before writing.
- Follow src/content/youtube/AGENTS.md exactly: ordered frontmatter; manifest title/publishedAt; metadata sourceLanguage/captionKind; summaryLanguage en; status draft.
- First body line is the required italic translation/paraphrase disclosure adapted to caption kind. Never present translated captions as verbatim.
- Write concise framing and exact headings: Key Ideas, Practical Implications, Questions and Tensions, Source.
- Every Key Ideas bullet needs a real `[HH:MM:SS]` or range anchor. Verify every referenced endpoint exists as a sibling transcript chunk and supports the claim.
- Source contains canonical watch URL and `[transcript.md](./transcript.md)`.
- Only transcript-supported author claims; mark editorial caveats visibly. No prior-knowledge/live-data claims or placeholders.

Before committing summaries:
- Run `npm run lint:fix`, review changes, and retain only intended batch formatting. It may exit 1 solely for the known pre-existing .agents/references/dot-agents/site baseline; do not modify those files and record the result.
- Run `git diff --check`.
- Commit only new summary.md files as `add YouTube backfill batch 1 summaries`.

Expected end status:
- Run `npm run youtube:library -- status`.
- Both playlists must have zero missing summaries among captured videos. Persisted unavailable records are not captured/summary misses.
- Both existing overviews should be stale and list newly summarized IDs missing from coveredVideoIds. This is intentional; do not edit them.
- authors/antirez.md remains missing and lists all summarized IDs.
- Full-success projection only: ai-concepts 4 captured entries/3 unique videos and 59 pending; coding-with-ai 3 captured and 27 pending; author 6 captured and 80 pending. Record actual output, accounting for outcomes/shared IDs, not projections.

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
- `git diff --check` for each batch commit.
- Final `git status --short --branch` is clean.

Work-item update:
- Append a dated Task 5b progress entry with every attempt/outcome/exit code, generated files, transcript byte/word/chunk counts, summary byte/word/verified-anchor counts, final status, lint/test/check/build/boundary results, throttle evidence or continued absence, blockers/deviations, and next action.
- Update index.md Updated and Next Action to deriving Task 5c from Task 5b evidence. Add handoff-task-5b.md to artifacts if missing.
- Leave Task 5 and Task 6 unchecked.
- Commit work-item changes as `record YouTube backfill batch 1 progress`.

Stop conditions:
- Dirty/baseline-mismatched worktree before capture.
- TooManyRequest: stop all capture, but finish summaries for prior successes.
- Fatal capture: stop capture, record, and finish summaries for prior successes.
- Strict language/provenance mismatch or inability to support a summary claim with transcript anchors.
- Any need to edit tooling/contracts/manifests/overviews, broaden capture, create author synthesis, or start Task 6.

Expected final response and Task 5c inputs:
- Commit hashes/messages; each command exit and per-video outcome; final status; all verification; deviations/blockers.
- For each captured transcript: bytes, words, chunks. For each summary: bytes, words, verified anchor count.
- Compare total batch source/summary size with Task 5a's 2,326 source words → 718 summary words for two videos.
- Report updated pending counts and author deduped count, throttle evidence/absence, and recommend a Task 5c batch size from actual evidence rather than automatically copying this batch.
- Do not claim Task 5 complete.
```
