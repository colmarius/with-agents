# Coding Agent Configuration

## Stack & Architecture

- **Astro v7** + React 19 + TailwindCSS v4
- **Static multi-context knowledge site** for practical coding-agent, cloud/GCP, and security workflows, posts, slides, and curated resources
- **Site**: <https://with-agents.dev>
- **Repository**: `colmarius/with-agents` (public source repository)
- **Path aliases**: `@components`, `@types`, `@layouts`, `@utils`, `@scripts` (defined in `tsconfig.json`)

## Commands

- `npm run dev` - Dev server
- `npm run build` - Production build
- `npm run preview` - Preview build
- `npm run check` - Astro/TypeScript check
- `npm test` - Unit tests (site data/resolver logic and `.agents/scripts`)
- `npm run lint:fix` - Lint and format with Biome

Run `npm run check`, `npm test`, and `npm run build` after code or content changes. Run `npm run lint:fix` before committing when files may need formatting.

## Orb Proof Loop

- Before browser verification in an Amp orb, run `amp orb services ensure` and use the portal URL it returns. Do not hardcode portal hostnames.
- For changes to rendered routes, layout, styling, or client interactivity, verify the affected route in a real browser with the `agent-browser` skill after `npm run check` and `npm run build`.
- Report the route and observed behavior. Capture a screenshot when visual evidence helps review; an HTTP 200 alone does not prove correct rendering.
- Do not edit or commit `.amp/portals/**`. Restart `web` only after changing its service declaration, command, or dependencies.

## Project Structure

```text
src/
├── components/    # Astro and React components
├── content/       # Astro content plus source-only YouTube evidence
├── data/          # Canonical resource manifests and catalog registry
├── hooks/         # React hooks
├── layouts/       # Astro layouts
├── pages/         # Routes and API endpoints
├── scripts/       # Client scripts
├── styles/        # Global styles
├── types/         # Type definitions
└── utils/         # Utilities
```

Important routes:

- `/` - umbrella landing page
- `/coding`, `/cloud`, and `/security` - context landing pages
- `/posts` and `/posts/[slug]` - article path
- `/posts/[slug]/slides` - generated slide view for each published post
- `/resources` - catalog index
- `/resources/[topic]` and `/resources/[topic]/[section]` - catalog and section pages
- `/api/summaries/[slug].json` - prerendered summary JSON for the React resource modal

## Code Conventions

- Use `type` aliases rather than `interface`.
- Prefer functional patterns over classes.
- Keep single quotes, semicolons, and 2-space indentation (Biome enforced).
- Use `client:load` or `client:only="react"` for React components when browser interactivity is required.
- Access browser APIs only in client-side code or behind environment checks.
- Keep content frontmatter compatible with `src/content.config.ts`.

## Content Guidelines

- Keep the site focused on practical coding-agent, cloud/platform, and security engineering knowledge and their supporting developer practices.
- Avoid personal-site pages, personal-only assets, or unrelated resource collections.
- Draft posts must use `draft: true`; production builds should not publish drafts.
- Internal links should point only to routes that exist in this repository, unless intentionally linking to an external site.
- Publishable posts, public summaries, and resources may cite a video or playlist tracked in `src/content/youtube/` only when its source summary or playlist overview is `reviewed`, unless `.agents/scripts/public-content-guard.mjs` records a path-specific exception with a reason. Draft posts may cite draft sources for work in progress, but the guard reports them as warnings.

### Resource catalog maintenance

- Keep one canonical resource record in a registered manifest under `src/data/resources/`; resource IDs are globally unique, and public summaries under `src/content/summaries/**` join that record through `resourceId`.
- `src/data/resources/catalogs.ts` owns catalog metadata, display order, membership, and per-catalog section assignment. Cross-list a resource by reusing its canonical ID in each catalog's `resourceIds` and `sectionByResourceId`; never duplicate the resource record or its summaries.
- For a public playlist collection, follow `src/content/youtube/AGENTS.md`. The public children's `collection`, `order`, and `videoId` values must exactly match reviewed curation, and source summaries plus the playlist overview must be reviewed before publication.
- Run `npm run content:guard` after resource or public-summary changes. When tracked YouTube source evidence changes, also run `npm run youtube:library -- status` and `npm run youtube:library -- audit`.

### Article writing

When writing or refreshing public posts under `src/content/posts/`, follow this contract and load the `article-writing` skill for the full workflow and checklists.

- **Audience:** experienced developers, tech leads, and agent-heavy practitioners who want practical coding-agent workflows.
- **Tone:** direct, calm, source-backed, concise; skeptical but constructive. Not salesy, manifesto-like, or slangy.
- **Concision:** important point first; active sentences; short paragraphs; concrete examples; no throat-clearing. Prefer the shortest version that keeps the argument.
- **Source anchors:** anchors must support the specific claim they sit beside. Mark author synthesis as synthesis. Do not pad posts with repeated source recaps.
- **Internal links:** link only to routes that exist in this repo. Never link retired drafts or old/unavailable article routes from public posts.
- **Post/slide convention:** public posts also generate `/slides` views. Normal rendered `##` sections should usually start with a concise blockquote slide message. Optional immediate visuals need accessible alt text, captions, or nearby explanatory prose. Use exact `## Sources` or `## Sources used` headings for source appendices; they are not normal slides.

### YouTube library maintenance

When asked to check, sync, or update tracked YouTube playlists, retry unavailable library captions, or add a tracked playlist, load the `maintaining-youtube-library` skill. Standalone-video summaries continue to use the transcript workflow below. Follow [`src/content/youtube/AGENTS.md`](src/content/youtube/AGENTS.md); keep that tree source-only and never publish it through Astro.

### YouTube transcript workflow

Use this workflow when the user provides a YouTube video link/title or asks for a video summary.

X-only livestreams or broadcasts do not need transcript sidecars. If an entry intentionally points only to X and no public YouTube recording/transcript is being summarized, say that explicitly in the summary body instead of leaving a "coming soon" placeholder.

1. For a new YouTube video, save a transcript sidecar first:

   ```sh
   npm run youtube:transcript -- <youtube-url> --summary-slug <relative-summary-slug> --title "<video title>"
   ```

2. If regenerating an existing transcript, do the mechanical regeneration first. `--force` replaces the transcript sidecar with current YouTube caption output and will overwrite any prior manual transcript fixes.
3. After the final regeneration for a video, do an editorial transcript pass only when needed. Fix obvious source-faithful auto-caption issues: names, product/model casing, obvious substitutions, punctuation that changes meaning, and stray caption markers. Do not rewrite or editorialize the transcript.
4. For a summary request, read the saved transcript and write/update the public summary by hand as normal content work. Update the applicable registered manifest under `src/data/resources/` and its catalog membership only when a new canonical resource record is needed.

When reviewing or updating transcript-backed summaries, compare the summary against the transcript before editing. Fix copied-forward episode content, placeholder summaries, unsupported claims, wrong speaker/name/model attributions, and misleading timestamp citations. Prefer concise timestamped bullets for the main transcript-backed themes. Keep external bio/context claims only when they are present in the transcript or already trusted in the resource manifest.

Store committed transcripts under `src/content/transcripts/**` using the same relative slug as the matching summary. Example:

```text
src/content/summaries/coding-with-agents/raising-an-agent-episode-9.md
src/content/transcripts/coding-with-agents/raising-an-agent-episode-9.md
```

Transcript files must use this frontmatter contract: `title`, `summarySlug`, `sourceUrl`, `videoId`, `capturedAt`, and optional `series`, `episode`, `channel`, `language`, `kind`, `durationSeconds`, and paired `sourceStartSeconds`/`sourceEndSeconds` for an excerpt. Excerpt ranges are half-open intervals on the original video timeline, and `durationSeconds` remains the full source-video duration. Body text should live under `## Transcript` and use coarse timestamped chunks such as `[00:01:00] text...`; the timestamps are absolute source anchors for checking and summary citations, not per-caption timing. Do not store transcripts under `src/content/summaries/**`, because those files are rendered as summaries. Treat transcript regeneration as destructive source capture; do editorial transcript cleanup after regeneration, not before.

Do not create long-lived draft, review, or apply artifacts for summaries. Keep transcript capture scripted; keep summary writing as explicit agent/human editorial work from the saved transcript.

## Deployment Notes

- Build output goes to `dist/`.
- GitHub Pages is configured through GitHub Actions and `public/CNAME` for `with-agents.dev`.
- The source repository is public by explicit project decision; do not add private or sensitive material.

## dot-agents Workflow

- Keep self-contained planning and execution in the current conversation.
- Create a work item under `.agents/work/<category>/<slug>/` when resumption, coordination, handoff, auditability, durable decisions, or an explicit request makes repository context useful.
- Use the `agent-work` skill for durable requirements, planning, refinement, execution, coordination, and handoffs. Read the work item's `index.md` first and follow `.agents/work/AGENTS.md` for the canonical artifact and lifecycle contract.
- Implement in the current thread by default. Handoffs are optional and should be created only when another worker, thread, or environment is useful.
- After verification, promote reusable outcomes, commit the final completed work-item snapshot, then use `close-work.sh` to stage removal in a separate commit when authorized.
- Keep `.agents/research/` for reusable findings that apply across unrelated work. External reference checkouts belong in `.agents/references/` and should not be committed.

## Git Workflow

- Use `git status --short --branch` before staging.
- Commit after each logical step with a clear message.
- Keep generated directories (`node_modules/`, `dist/`, `.astro/`) out of commits.
