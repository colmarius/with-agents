# Adversarial review improvements

Status: completed
Category: maintenance
Updated: 2026-08-16

## Why

An adversarial review of the whole repository (site code, GitHub workflows, maintenance scripts, documentation, AGENTS.md) surfaced bugs, dead code, duplication, and verification gaps. This work item records the findings and drives the minimal improvements plus end-to-end proof.

## Summary

Review and implementation are complete; all plan tasks done and verified. Baseline before changes: `astro check` 0 errors, `node --test` 79/79 pass, build 32 pages, content guard exit 0, all internal links valid, resource/summary alignment clean.

Verified after implementation: `biome check` 0 issues, `astro check` 0 errors, `npm test` 81/81 pass (2 new regression tests), build 32 pages, content guard exit 0. Browser E2E via the orb portal confirmed: home, /posts, post page, slides view (navigation + hash), /resources, /resources/coding-with-agents (search matches summary titles, topic filter shows 7 of 38, summary modal opens with episode list and episode switching), /resources/coding-with-agents/workflows (12 resources), and /api/summaries/*.json (200 with correct payload, 404 for unknown slug). Net diff −6 lines excluding new tests and CI workflow.

### Findings — fix

1. **Bug** `.agents/scripts/save-youtube-transcript.mjs:146` — `--episode` accepts arbitrary text; `Number('x')` → `episode: NaN` written into transcript frontmatter.
2. **Bug** `.agents/scripts/lib/youtube-library-capture-status.mjs` (~L470) — a failed forced recapture writes an `unavailable` metadata record while the old `transcript.md` remains, producing contradictory state (`captured && unavailable`) that the `--retry` filter (`unavailable && !captured`) then skips forever.
3. **Verification gap** — 79 `node:test` tests exist but there is no `npm test` script and no CI job runs tests, `astro check`, or Biome; `deploy.yml` only builds.
4. **Dead code** — `src/components/resources/SummaryButton.tsx` (never imported); `src/types/index.ts` (unused, and uses `interface` against repo convention); `EpisodeList` `isLoading` prop (never passed); `ResourceListItem` props `image`, `url`, `linkText`, `buttonVariant`, `hideExternalLink` (sole consumer passes a placeholder empty image and disables the link).
5. **Duplication** — identical 12-line summary-manifest mapping in `src/pages/resources/coding-with-agents.astro` and `src/pages/resources/coding-with-agents/[section].astro`; the `/`↔`__` slug encoding is repeated in those pages plus `src/pages/api/summaries/[slug].json.ts`.
6. **Stale config** — `astro.config.mjs` vite alias `@config` → `src/config` (directory does not exist); `@assets` alias in both `astro.config.mjs` and `tsconfig.json` (no `src/assets`); the vite `resolve.alias` block duplicates tsconfig paths, which Astro already honors (proof: `@scripts` exists only in tsconfig and resolves at build).
7. **Docs** — AGENTS.md lists `@assets` among path aliases (stale); README/AGENTS.md document no test command.

### Findings — noted, intentionally not changed

- `sync.sh` resolves paths from the caller's CWD (dev-only helper, documented to run from repo root).
- `save-youtube-transcript.mjs` ignores extra positional args and has an undocumented `--source` alias for `--channel` (nits).
- `slides.astro` inline script duplicates the Mermaid loader in `src/scripts/mermaid.ts`; slide-specific behavior differs enough that unifying adds risk for no user-visible gain.
- Content guard NOTICE about a duplicate manifest occurrence in `antirez-ai-concepts` is by design (reported, not deduped).
- Content audit found zero broken internal links, no draft leaks, no resource/summary misalignment, valid PWA manifest/icons.

## Artifacts

- Research: none (findings inline above)
- PRD: none
- Plan: [plan.md](plan.md)
- Progress: tracked via plan checkboxes
- Decisions: none
- Handoffs: none

## Next Action

- None.

## Open Questions

- None.
