# Plan: Adversarial review improvements

Minimal changes only; remove code where possible. Each task ends verifiable.

- [x] 1. Fix `--episode` validation: parse in `.agents/scripts/lib/youtube-transcript-core.mjs` as a positive integer with a clear error; use it in `save-youtube-transcript.mjs`; add unit test.
- [x] 2. Fix forced-recapture failure state: in `youtube-library-capture-status.mjs`, do not write an `unavailable` metadata record when `transcript.md` already exists; add unit test.
- [x] 3. Add `"test"` script to package.json running both `src/**/*.test.ts` and `.agents/scripts/*.test.mjs` via `node --test`; add `.github/workflows/ci.yml` running `astro check`, Biome check, and tests on push/PR.
- [x] 4. Remove dead code: `SummaryButton.tsx`, `src/types/index.ts`, `EpisodeList` `isLoading` prop, unused `ResourceListItem` props (`image`, `url`, `linkText`, `buttonVariant`, `hideExternalLink`) and their dead branches; update the sole caller.
- [x] 5. Extract shared summary-manifest helper (`toManifestEntry` + `encodeSummarySlug`/`decodeSummarySlug`) in `summaryResolver.ts`; use from both resources pages and the API endpoint.
- [x] 6. Remove redundant vite `resolve.alias` block (keep `dedupe`) and stale `@config`; drop `@assets` from tsconfig; rely on tsconfig paths.
- [x] 7. Docs: fix AGENTS.md alias list; add `npm test` to README and AGENTS.md commands.
- [x] 8. Verify: `npm run check`, `npm run lint:fix`, `npm test`, `npm run build`, `npm run content:guard`; browser E2E via portal — home, /posts, one post, its /slides view, /resources, /resources/coding-with-agents (search, topic filter, summary modal incl. series episode switching), a section page, and `/api/summaries/*.json`; capture screenshots.

## Verification contract

Done means: all commands above exit 0 with no new warnings, test count ≥ 81 (79 baseline + 2 new), build still emits 32 pages, and browser checks show correct rendering and modal behavior.
