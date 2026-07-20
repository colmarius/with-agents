# Task 5a Handoff Prompt

```text
You are continuing the work item at:

.agents/work/tooling/youtube-knowledge-library/

Read first, in order:
1. .agents/work/tooling/youtube-knowledge-library/index.md
2. .agents/work/tooling/youtube-knowledge-library/plan.md (Task 5; implement only the thin-slice portion)
3. .agents/work/tooling/youtube-knowledge-library/research.md
4. .agents/work/tooling/youtube-knowledge-library/progress.md
5. src/content/youtube/AGENTS.md (authoritative editorial contracts)
6. src/content/youtube/catalog.json
7. .agents/scripts/youtube-library.mjs and the capture/status core only as needed to understand command behavior

Goal:
Prove the real source-only thin slice: sync both configured playlists, prove a repeat no-op, capture one distinct available video per playlist where possible, write one source-checked English draft summary for each captured Italian transcript, and write one draft overview per represented playlist. This is Task 5a only. Do not check off Task 5; broad backfill, full overview revisions, and author synthesis remain.

Hard rules:
- Do not modify tooling, tests, package.json, catalog.json, AGENTS.md, plan.md, Astro code, or public resource data. If a tooling bug blocks the real workflow, stop and report it instead of fixing it in this task.
- Do not fabricate API responses, manifests, metadata, transcripts, counts, summaries, or evidence. Generated files must come from real commands; editorial files must come from reading the real committed sources.
- Enumerate playlists only through `npm run youtube:library -- sync`. No scraping, yt-dlp, alternate enumerator, or hand-edited manifest.
- Do not add src/data/resources entries, src/content/summaries files, routes, collections, or imports. The library remains source-only.
- Do not run broad capture. Only bounded `--playlist <slug> --limit 1` commands described below are allowed.
- Never print, echo, log, or commit YOUTUBE_API_KEY or a request URL containing it.

Step 0 — Preflight with no writes:
1. `git status --short --branch` must be clean except for the branch line. If not, stop and report.
2. Check the key without exposing it:
   `node -e "process.exit(process.env.YOUTUBE_API_KEY && process.env.YOUTUBE_API_KEY.trim() ? 0 : 1)"`
   - Exit 0: proceed.
   - Exit 1: stop immediately. Write no files, make no commits, and do not update work-item artifacts. Final response: `Blocked: YOUTUBE_API_KEY is not set in the environment. Task 5a made no changes.`
3. `npm run youtube:library -- help` must exit 0.

Step 1 — Initial real sync:
- Run `npm run youtube:library -- sync` for both configured playlists.
- Record actual additions and entry counts; do not assume research-era counts.
- If the first playlist fails, stop and report the sanitized error. If the first succeeds and the second fails, commit only the real successful manifest, then stop and report.
- `git status --short` should show only real manifest files under `src/content/youtube/playlists/<slug>/manifest.json`.
- Spot-check each manifest: playlistId matches catalog, entries are position-sorted, and unavailable entries are explicitly marked. Do not edit generated output.
- Commit the complete successful initial sync as `sync YouTube playlist manifests`.

Step 2 — Prove no-op sync:
- Only after committing the initial manifests, run `npm run youtube:library -- sync` again.
- Both playlists must report `no changes`, manifest content/mtimes must remain unchanged, and `git status --short` must remain empty.
- If the repeat changes files or fails, stop and report; do not modify tooling.

Step 3 — Baseline status:
- Run `npm run youtube:library -- status`.
- Record each playlist's entries/available/manifest-unavailable, transcript pending/unavailable/captured totals, overview state, and the author's deduped video total. These actual numbers are required for the later Task 5b handoff.

Step 4 — Capture one distinct video per playlist where possible:
- Process `ai-concepts`, then `coding-with-ai`.
- Run `npm run youtube:library -- capture --playlist <slug> --limit 1`.
- Interpret output as well as exit code:
  - `captured <id>`: record the ID and stop capture for that playlist.
  - `unavailable <id>`: keep the real persisted unavailable metadata and rerun the same bounded command so the next pending video is selected. Allow at most three attempts total per playlist; then move on and record the result.
  - `transient <id>`, TooManyRequests, or `... stopped`: stop all further capture immediately. Continue only with editorial work for already captured videos and record the sanitized outcome.
  - Fatal/exit 1: stop and report the blocker.
- Capture's pending-only semantics should make videos distinct across playlists when distinct available videos exist. Verify captured IDs differ. If they unexpectedly match, stop and report instead of forcing another video.
- For each success, verify transcript.md and metadata.json exist, transcript language is `it` or an Italian regional variant, caption kind is recorded, and transcript body contains coarse `[HH:MM:SS]` chunks.
- Commit all real capture artifacts from this bounded step, including persisted unavailable records, as `capture thin-slice YouTube transcripts`.
- If nothing was captured, skip editorial Steps 5–6, complete verification/progress honestly, and do not create placeholders.

Step 5 — Write a draft summary for every newly captured video:
- Before writing each summary, read the entire transcript.md, metadata.json, and matching manifest entry.
- Follow the Video summaries contract in src/content/youtube/AGENTS.md exactly.
- Use exact frontmatter key order. Copy sourceLanguage and captionKind from metadata; copy title and publishedAt from the manifest (omit publishedAt only when absent); use summaryLanguage en and status draft.
- First body line is the required italic translation/paraphrase disclosure adapted to the actual source language/caption kind.
- Then write concise framing and exact headings: Key Ideas, Practical Implications, Questions and Tensions, Source.
- Every Key Ideas bullet must have a transcript anchor that actually exists in the sibling transcript and supports the claim. Verify each timestamp with targeted searches.
- Never present translated caption text as verbatim or add claims unsupported by the transcript. No placeholder text.
- Source includes the canonical watch URL and relative transcript link.

Step 6 — Write one draft thin-slice overview per represented playlist:
- Only write an overview where that playlist's thin-slice video has both transcript and summary.
- Follow the Playlist overviews contract exactly: catalog title, status draft, two-space-indented coveredVideoIds containing only the thin-slice video ID, and exact required headings.
- Coverage reports actual manifest, available, captured, summary, incorporated, and uncaptured counts. Interpret `pending video IDs` as summaries that exist but are not incorporated; none are expected in this thin slice. Report uncaptured transcript work as counts rather than dumping dozens of IDs, and record this interpretation in progress.md.
- Anchor author claims to the summary/video and transcript timestamp. Prefix editorial interpretation bullets with `Editorial:`.
- With one video, do not invent cross-video stability, change, or chronology. State when the slice is insufficient.
- From `playlists/<slug>/overview.md`, use correct relative links such as `../../videos/<id>/summary.md`.
- Commit all summaries and thin-slice overviews as `add thin-slice YouTube summaries and overviews`.

Step 7 — Verification:
- `npm run youtube:library -- status`: for each completed thin slice, expect one captured video with one draft summary and current overview. The missing authors/antirez.md and its summarized IDs are expected; do not create it yet.
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`
- `npm run lint:fix`; review any changes and include only intended formatting. The known pre-existing .agents/references/dot-agents/site diagnostics may still make it exit 1; do not modify those unrelated files and record the baseline.
- `npm run check`
- `npm run build`
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts` finds no registration/import.
- `rg -n "source-only" dist/` finds nothing.
- `git diff --check` on each new commit range passes.
- `git status --short --branch` is clean after commits.

Step 8 — Work-item updates:
- Append a dated Task 5a progress entry containing: actual manifest counts, repeat no-op proof, baseline/final status counts, every capture attempt/outcome, captured video IDs, unavailable/throttle results, summary/overview paths, timestamp/source checks, Coverage interpretation, verification, blockers/deviations, and next action.
- Update index.md Updated and Next Action to: derive the bounded Task 5b capture/summary handoff from Task 5a's actual status and throttle evidence.
- Add handoff-task-5a.md to index artifacts if missing.
- Do not check Task 5 in plan.md. Tasks 5–6 remain unchecked.
- Commit work-item updates as `record YouTube thin-slice progress`.

Allowed files (exhaustive):
- src/content/youtube/playlists/<slug>/manifest.json from sync only
- src/content/youtube/videos/<id>/transcript.md and metadata.json from capture only
- src/content/youtube/videos/<id>/summary.md for newly captured thin-slice videos only
- src/content/youtube/playlists/<slug>/overview.md for represented playlists only
- .agents/work/tooling/youtube-knowledge-library/progress.md
- .agents/work/tooling/youtube-knowledge-library/index.md

Stop conditions:
- YOUTUBE_API_KEY is absent: stop before any write/update.
- Git is not clean at preflight.
- Sync/capture indicates a tooling defect or requires editing generated files/code.
- Transient/throttle: stop further capture; preserve/commit real completed artifacts and proceed only with already captured editorial work.
- Editorial claims cannot be supported by real transcript timestamps.
- Any step would require broad capture, alternate enumeration, corpus fabrication, code/tooling changes, public-site wiring, author synthesis, or Task 6 work.

Commit sequence:
1. `sync YouTube playlist manifests`
2. `capture thin-slice YouTube transcripts` when capture produced artifacts
3. `add thin-slice YouTube summaries and overviews` when editorial artifacts exist
4. `record YouTube thin-slice progress`

Expected final response:
- If blocked at preflight, return only the blocked result and confirmation of no changes.
- Otherwise report commit hashes/messages, actual sync counts, repeat no-op proof, baseline/final status, capture IDs and all outcomes, summaries/overviews created, every verification result, deviations/blockers, and concrete Task 5b inputs: pending count per playlist, author deduped total, unavailable/throttle behavior, and observed summary effort/context size.
- Remaining work is Task 5b+ bounded backfill; do not claim Task 5 complete.
```
