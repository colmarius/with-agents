# Coding Agent Configuration

## Stack & Architecture

- **Astro v7** + React 19 + TailwindCSS v4
- **Static topic site** for practical coding-agent workflows, posts, slides, and curated resources
- **Site**: <https://with-agents.dev>
- **Repository**: `colmarius/with-agents` (public source repository)
- **Path aliases**: `@components`, `@types`, `@assets`, `@layouts`, `@utils`, `@scripts`

## Commands

- `npm run dev` - Dev server
- `npm run build` - Production build
- `npm run preview` - Preview build
- `npm run check` - Astro/TypeScript check
- `npm run lint:fix` - Lint and format with Biome

Run `npm run check` and `npm run build` after code or content changes. Run `npm run lint:fix` before committing when files may need formatting.

## Project Structure

```text
src/
├── components/    # Astro and React components
├── content/       # Astro content collections and transcript source files
├── data/          # Resource manifests
├── hooks/         # React hooks
├── layouts/       # Astro layouts
├── pages/         # Routes and API endpoints
├── scripts/       # Client scripts
├── styles/        # Global styles
├── types/         # Type definitions
└── utils/         # Utilities
```

Important routes:

- `/` - topic-site landing page
- `/posts` and `/posts/[slug]` - article path
- `/posts/[slug]/slides` - generated slide view for each published post
- `/resources` and `/resources/coding-with-agents` - curated resources and summaries
- `/api/summaries/[slug].json` - prerendered summary JSON for the React resource modal

## Code Conventions

- Use `type` aliases rather than `interface`.
- Prefer functional patterns over classes.
- Keep single quotes, semicolons, and 2-space indentation (Biome enforced).
- Use `client:load` or `client:only="react"` for React components when browser interactivity is required.
- Access browser APIs only in client-side code or behind environment checks.
- Keep content frontmatter compatible with `src/content.config.ts`.

## Content Guidelines

- Keep the site focused on coding agents, agent workflows, Amp, and supporting developer practices.
- Avoid personal-site pages, personal-only assets, or unrelated resource collections.
- Draft posts must use `draft: true`; production builds should not publish drafts.
- When adding resources, keep `src/data/resources/coding-with-agents.json` and `src/content/summaries/**` aligned by `resourceId`.
- Internal links should point only to routes that exist in this repository, unless intentionally linking to an external site.

### YouTube transcript workflow

Use this workflow when the user provides a YouTube video link/title or asks for a video summary.

1. For a new YouTube video, save a transcript sidecar first:

   ```sh
   npm run youtube:transcript -- <youtube-url> --summary-slug <relative-summary-slug> --title "<video title>"
   ```

2. If regenerating an existing transcript, do the mechanical regeneration first. `--force` replaces the transcript sidecar with current YouTube caption output and will overwrite any prior manual transcript fixes.
3. After the final regeneration for a video, do an editorial transcript pass only when needed. Fix obvious source-faithful auto-caption issues: names, product/model casing, obvious substitutions, punctuation that changes meaning, and stray caption markers. Do not rewrite or editorialize the transcript.
4. For a summary request, read the saved transcript and write/update the public summary by hand as normal content work. Update `src/data/resources/coding-with-agents.json` only if a new resource manifest entry is needed.

Store committed transcripts under `src/content/transcripts/**` using the same relative slug as the matching summary. Example:

```text
src/content/summaries/coding-with-agents/raising-an-agent-episode-9.md
src/content/transcripts/coding-with-agents/raising-an-agent-episode-9.md
```

Transcript files must use this frontmatter contract: `title`, `summarySlug`, `sourceUrl`, `videoId`, `capturedAt`, and optional `series`, `episode`, `channel`, `language`, `kind`, and `durationSeconds`. Body text should live under `## Transcript` and use coarse timestamped chunks such as `[00:01:00] text...`; the timestamps are source anchors for checking and summary citations, not per-caption timing. Do not store transcripts under `src/content/summaries/**`, because those files are rendered as summaries. Treat transcript regeneration as destructive source capture; do editorial transcript cleanup after regeneration, not before.

Do not create long-lived draft, review, or apply artifacts for summaries. Keep transcript capture scripted; keep summary writing as explicit agent/human editorial work from the saved transcript.

## Deployment Notes

- Build output goes to `dist/`.
- GitHub Pages is configured through GitHub Actions and `public/CNAME` for `with-agents.dev`.
- The source repository is public by explicit project decision; do not add private or sensitive material.

## dot-agents Work Items

Use dot-agents v0.3 for durable multi-session work:

```text
Work Item → Context as needed → Plan → Handoff Prompt → Implement → Record Progress
```

Work items live under `.agents/work/<category>/<slug>/` and keep related context together:

- `index.md` - required entrypoint with status, artifacts, next action, and open questions
- `research.md` or `research/` - optional work-local technical findings
- `prd.md` - optional requirements brief when behavior needs alignment
- `plan.md` or `plans/` - implementation-ready task plans
- `progress.md` - implementation log, verification notes, blockers, and next action
- `decisions/` - optional durable decision records

Keep `.agents/research/` for reusable findings that apply across unrelated work. External reference checkouts belong in `.agents/references/` and should not be committed.

## Git Workflow

- Use `git status --short --branch` before staging.
- Commit after each logical step with a clear message.
- Keep generated directories (`node_modules/`, `dist/`, `.astro/`) out of commits.
