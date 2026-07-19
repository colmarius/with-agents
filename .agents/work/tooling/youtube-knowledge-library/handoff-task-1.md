# Task 1 Handoff Prompt

```text
You are continuing the work item at:

.agents/work/tooling/youtube-knowledge-library/

Read first, in order:
1. .agents/work/tooling/youtube-knowledge-library/index.md
2. .agents/work/tooling/youtube-knowledge-library/plan.md (implement Task 1 only)
3. .agents/work/tooling/youtube-knowledge-library/research.md
4. .agents/scripts/save-youtube-transcript.mjs
5. package.json, src/content.config.ts, AGENTS.md (root)

Goal:
Establish a committed, source-only YouTube knowledge library root at src/content/youtube/ and extract a reusable transcript core, without changing the existing public `npm run youtube:transcript` behavior. This is Task 1 of the plan and the work item's current Next Action. It is the right slice because everything later (playlist sync, capture, summaries, synthesis) depends on the library boundary, the shared transcript module, and the generic library CLI skeleton existing first—and it requires no YouTube API credentials.

Current state:
- Work item status: planned. No progress.md yet. No Task 1 code changes have been made.
- `.agents/scripts/save-youtube-transcript.mjs` is a working single-video transcript CLI (`npm run youtube:transcript`, uses youtube-transcript-plus, writes sidecars under src/content/transcripts/). It contains all the fetch/normalize/chunk/render logic to extract.
- Known subtlety: in `fetchVideo`, when the requested `--lang` is not in `listLanguages` output, it falls back to `languages[0]` for the reported language/kind while `fetchTranscript` still requests the original lang—so the reported language/kind can misreport what was actually fetched. Preserve the existing command's public CLI behavior and output contract; only fix this inside the shared core if the smallest clean extraction requires it and the fix is clearly compatible. The new library path must not inherit this fallback.
- src/content.config.ts registers only `posts` and `summaries`. A sibling src/content/youtube/ tree is source-only as long as nothing registers or imports it.
- This is a public repo; committed source visibility is accepted. "Source-only" means absent from Astro collections, routes, components, layouts, and dist/ build output—not access-controlled.

Implement only this slice (Task 1 acceptance from plan.md):

1. Library boundary
   - Create src/content/youtube/AGENTS.md: scoped guidance documenting the author/playlist/video directory structure (authors/<author-slug>.md, playlists/<playlist-slug>/{manifest.json,overview.md}, videos/<video-id>/{metadata.json,summary.md,transcript.md}), the source-only publication boundary (committed = publicly readable on GitHub, but never rendered/bundled), strict source-language capture, and the rule that summaries/syntheses are editorial work, not script output.
   - Create src/content/youtube/catalog.json with a top-level `publication: "source-only"` marker and generic author/playlist/relationship/language configuration for the initial targets:
     - Author: id/slug `antirez`, display name "Salvatore Sanfilippo".
     - Playlist `PLrEMgOSrS_3eW1UK1D5coDp75wTf62jj6` (slug e.g. `ai-concepts`, title "AI concepts").
     - Playlist `PLrEMgOSrS_3cU-ndLheq6TZiO3gWTAszA` (slug e.g. `coding-with-ai`, title "Coding with AI").
     - Both playlists: `transcriptLanguage: "it"`, `summaryLanguage: "en"`, related to author `antirez`.
     - No credentials of any kind in catalog.json. Keep the schema generic (arrays of authors/playlists), not Antirez-specific.
   - Do not register anything in src/content.config.ts. Do not import src/content/youtube/ from any route, component, or layout.

2. Reusable transcript core
   - Extract the reusable logic from .agents/scripts/save-youtube-transcript.mjs into a shared module under .agents/scripts/ (for example, .agents/scripts/lib/youtube-transcript-core.mjs; adjust naming minimally to repo evidence): video-ID/URL normalization, transcript fetch + language listing, segment normalization, chunking, timestamp/YAML/Markdown rendering, and the exclusive/non-destructive write helper.
   - save-youtube-transcript.mjs becomes a thin CLI over the shared core. Its flags, defaults (lang en, coding-with-agents/<slug> default summary slug), output path (src/content/transcripts/), frontmatter contract, chunk format, exit codes (0 / 2 / 1), JSON and human output must remain unchanged.
   - The core must support a strict language mode: given a configured language, either match it exactly (or its regional variants, such as it-IT for it) or report failure with the requested language and the actually available languages—never silently select another track or misreport caption kind.

3. Generic library CLI
   - Create .agents/scripts/youtube-library.mjs (adjust the name minimally if repo evidence suggests otherwise) and wire it as `"youtube:library": "node .agents/scripts/youtube-library.mjs"` in package.json.
   - Fixed output root: src/content/youtube/. No option may redirect writes elsewhere; there is no user-controlled output directory. All write paths must pass a containment check against the library root.
   - Task 1 scope for this CLI is the skeleton only: help/usage, catalog loading/validation (including the source-only marker), and enough single-video capture plumbing to prove strict-language capture into videos/<video-id>/transcript.md if you choose to expose it—but no playlist API sync, no batch capture, and no status command beyond an explicit not-yet-implemented response. Keep subcommand structure ready for Task 2/3 (`sync`, `capture`, `status`) without implementing them.
   - Credentials (future YOUTUBE_API_KEY) are environment-only by design; the CLI must never accept a key via flag or file. Task 1 itself needs no API key.
   - Writes are non-destructive by default (never overwrite existing transcript/metadata without an explicit force option), and atomic where JSON is written (temporary file + rename).

4. Focused tests
   - Use built-in `node --test` only; add no test framework dependency. Keep test files under .agents/scripts/ using the smallest clear local structure.
   - Cover at minimum: path containment (reject `../`, absolute paths, and escapes from the library/transcript roots), non-destructive writes (refuse overwrite without force; dry-run writes nothing), and strict-language selection (exact match, regional-variant match, unavailable returns structured requested + available languages). Test pure functions only; no network in tests.

Non-goals (Tasks 2–6—do not start these):
- No playlist API synchronization, playlistItems.list calls, manifests, or diffing (Task 2).
- No batch/idempotent corpus capture, status reporting, or retry semantics (Task 3).
- No transcripts, summaries, overviews, or author synthesis content for the corpus (Tasks 3–5).
- No Task 6 publication-boundary tooling beyond the verification below.
- No raw video/audio media download, yt-dlp, ASR, LLM API, or Astro routes for the library.

Constraints:
- Publication boundary: everything under src/content/youtube/ is committed and publicly visible source, but must not appear in Astro collections, route/component/layout imports, or dist/.
- Language fidelity: library capture uses the configured source language strictly (Italian for both initial playlists); record requested/available languages on mismatch instead of falling back.
- Keep Biome style: single quotes, semicolons, and 2-space indentation.
- Touch only src/content/youtube/AGENTS.md, src/content/youtube/catalog.json, .agents/scripts/** (existing script, new shared module, new CLI, tests), package.json, and the work-item files. If repo evidence shows a plan detail is stale, adjust it minimally and record why in progress.md before implementing.

Progress contract:
- Check off Task 1 in plan.md only when all Task 1 acceptance criteria are met.
- Create .agents/work/tooling/youtube-knowledge-library/progress.md with changes, verification results, blockers, and next action.
- Update index.md: set Status to `in-progress`, update Updated, add `Progress: progress.md`, and set Next Action to Task 2 (playlist synchronization).
- Do not mark Tasks 2–6 complete or partially complete.

Verification (run and record all):
- Run `npm run lint:fix`, review its changes, and do not include unrelated formatting changes.
- Run `node --test` against the new focused test files; all pass.
- Compatibility smoke check without overwriting content: `npm run youtube:transcript -- fetch https://www.youtube.com/watch?v=8gg-oJr4dTY --lang it --json`. Confirm the JSON payload shape and exit behavior remain compatible with the pre-refactor contract.
- `npm run check` passes.
- `npm run build` passes.
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts` finds no registration/import.
- `rg -n "source-only" dist/` finds nothing; the catalog marker is absent from build output.
- Review `git diff` for save-youtube-transcript.mjs to confirm the extraction did not change its CLI surface.
- Review `git status --short --branch` for unintended files.
- Commit each logical step with a clear message, following the repository workflow.

Stop conditions—stop and report instead of proceeding if:
- A decision is missing that plan.md/research.md does not answer.
- Any Task 1 step requires a YouTube Data API credential.
- The library tree becomes registered in an Astro collection, imported by site code, or present in dist/ and cannot be cleanly excluded.
- Preserving the existing `npm run youtube:transcript` output contract conflicts with the extraction.
- `npm run check` or `npm run build` fails for reasons unrelated to this change.
- The work expands beyond Task 1.

Expected final response:
- Summary of what was implemented.
- Files created/changed.
- Behavior and architecture decisions, including whether the language-fallback subtlety was fixed in the shared core and how strict-language mode is modeled.
- Verification results for every command above.
- Work-item updates made (Task 1 checkbox, progress.md, index.md).
- Remaining next action: Task 2—complete playlist synchronization.
```
