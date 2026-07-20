# YouTube Knowledge Library Progress

## 2026-07-20 — Task 1 complete

### Changes

- Established `src/content/youtube/` as a committed source-only tree with scoped guidance and a generic catalog for Salvatore Sanfilippo and the two initial Italian-language playlists.
- Extracted URL normalization, transcript discovery/fetching, segment normalization, chunking, rendering, path containment, and non-destructive writes into `.agents/scripts/lib/youtube-transcript-core.mjs`.
- Kept `save-youtube-transcript.mjs` as a thin compatibility CLI with its existing flags, defaults, output location, Markdown contract, JSON/human payloads, and exit codes.
- Added strict language selection as an opt-in core mode. It prefers an exact code, accepts a configured language's regional variant, and returns structured `requestedLanguage` plus `availableLanguages` data without fetching a different track when unavailable.
- Retained the legacy non-strict fallback behavior only for the existing public transcript CLI's compatibility path. The new library path is designed to use strict mode and does not inherit the known fallback/misreporting subtlety.
- Added the `youtube:library` CLI skeleton with fixed catalog/root paths, catalog validation, credential rejection, help, and explicit exit-2 placeholders for `sync`, `capture`, and `status`. No playlist sync, batch capture, or status behavior was implemented.
- Added built-in Node tests for URL/path normalization, path escapes, non-destructive and dry-run writes, strict language selection, catalog validation, fixed-root behavior, and the Task 1 CLI surface.

### Verification

- `npm run lint:fix`: ran and made no remaining changes, but exits 1 on pre-existing diagnostics under `.agents/references/dot-agents/site/` (`useButtonType` plus three warnings). No unrelated reference files were changed. A targeted Biome check of all Task 1 code/config files passes with no fixes.
- `node --test .agents/scripts/youtube-transcript-core.test.mjs .agents/scripts/youtube-library.test.mjs`: 13 tests passed.
- `npm run youtube:transcript -- fetch https://www.youtube.com/watch?v=8gg-oJr4dTY --lang it --json`: exit 0; payload remains compatible (`videoId`, canonical URL, title/channel, duration, `language: "it"`, caption kind, 86 segments, 11 chunks, and the unchanged transcript path shape). No file was written.
- `npm run check`: passed with 0 errors, warnings, or hints.
- `npm run build`: passed; 18 pages built.
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts`: no matches.
- `rg -n "source-only" dist/`: no matches.
- Reviewed the existing transcript CLI diff: its argument parsing, help text, context/payload construction, save/fetch branches, and exit handling remain in place; reusable internals moved to the shared core.
- `git status --short --branch`: clean before this work-item update.

### Blockers

- None for Task 1. The repository-wide lint command has the unrelated pre-existing reference-site diagnostics noted above.

### Next action

- Task 2: implement complete playlist synchronization only.
