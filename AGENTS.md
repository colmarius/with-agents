# Coding Agent Configuration

## Stack & Architecture

- **Astro v7** + React 19 + TailwindCSS v4
- **Static knowledge site** for coding-agent, cloud/GCP, security, and broader AI workflows, concepts, economics, and implications, with posts, slides, and curated resources
- **Site**: <https://with-agents.dev>
- **Repository**: `colmarius/with-agents` (public source repository)
- **Path aliases**: `@components`, `@types`, `@layouts`, `@utils`, `@scripts` (defined in `tsconfig.json`)
- See [README](README.md#project-structure) for the directory map and [Development](README.md#development) for setup and commands.

## Verification

Follow the README's Development checks after code or content changes: lint/format, Astro check, content guard, **build, then tests**. Tests inspect generated output, so build first. For changes limited to non-published repository documentation (README, AGENTS, or skills), validate affected instructions and links; application tests are unnecessary unless behavior or configuration also changes. Public posts, summaries, and source evidence are content, not documentation-only changes.

### Orb Proof Loop

- Before browser verification in an Amp orb, run `amp orb services ensure` and use the returned portal URL; never hardcode portal hostnames or share localhost URLs.
- For changes to rendered routes, layout, styling, or client interactivity, verify affected states in a real browser with the `agent-browser` skill after check and build. Report the route and observed behavior; an HTTP 200 alone does not prove correct rendering. Capture and inspect screenshots for visual changes.
- After verifying a new resource, include its summary or resource portal link in the final response with the Markdown link title `amp-portal`. Do not imply the preview is deployed.
- Do not edit or commit `.amp/portals/**`. Restart `web` only after changing its service declaration, command, or dependencies.

## Important Routes

- `/` - umbrella landing page
- `/coding`, `/cloud`, `/security`, and `/ai` - context landing pages
- `/[context]/posts` and `/[context]/posts/[slug]` - article index and articles
- `/[context]/posts/[slug]/slides` - generated slides for each published post
- `/recent/` - additions across topics, with static topic filters and pagination
- `/resources` - catalog index
- `/resources/[topic]` and `/resources/[topic]/[section]` - catalog and section pages
- `/summaries/[...slug]` - public summaries with series and collection navigation

## Code Conventions

- Use `type` aliases rather than `interface`; prefer functional patterns over classes.
- Keep single quotes, semicolons, and 2-space indentation (Biome enforced).
- Prefer static Astro and native HTML where sufficient. For React interactivity, use the appropriate client directive; reserve `client:only` for components that cannot render on the server.
- Access browser APIs only in client-side code or behind environment checks.
- Keep content frontmatter compatible with `src/content.config.ts`.

## Content and Publication Boundaries

- Keep content within the site's engineering and AI scope. Avoid personal-site pages, personal-only assets, and unrelated collections.
- Draft posts must use `draft: true`; production builds must not publish drafts.
- Internal links must target existing routes; never link retired drafts or unavailable article routes from public content.
- New public additions require `addedDate`; preserve it through edits and moves. Follow [README → Recently added](README.md#recently-added) for ownership and historical estimates.
- Keep `src/content/youtube/` source-only; never register it as an Astro collection or import it into rendered pages.
- Public posts, summaries, and resources may cite tracked videos/playlists only when their source summary or playlist overview is `reviewed`, unless `.agents/scripts/public-content-guard.mjs` records a path-specific exception with a reason. Draft posts may cite draft sources; the guard reports warnings.
- For any summary or transcript task, including resource work outside `src/content/`, read [the content authoring and review guide](src/content/AGENTS.md). It owns transcript capture, the required Summary readability review, and timestamp citations. Metadata-only changes need no new prose review.

### Resource Catalog Maintenance

- When adding a video or resource, update the Amp thread title once its title is known: `Add resource: <video or resource title>`.
- Keep one canonical record in a registered manifest under `src/data/resources/`. IDs are globally unique; public summaries join their resource through `resourceId`.
- `src/data/resources/catalogs.ts` owns catalog metadata, display order, membership, and section assignment. Cross-list by reusing the canonical ID in `resourceIds` and `sectionByResourceId`; never duplicate records or summaries.
- General-AI resources belong in AI; cross-list in Coding only for substantive software-engineering, agent-system, or developer-practice material. Preserve opinion/forecast labels and existing summary URLs; directory names do not determine catalog ownership.
- Keep AI sections thematic. Author discovery belongs in a section's `featuredSelection` using existing resource IDs, not a playlist or summary `collection`.
- Before adding a standalone YouTube resource, load `maintaining-youtube-library` and check its exact video ID against public curated playlists. Prefer an existing collection only when membership and editorial fit are confirmed; shared publishers or editorial-guide mentions do not establish ownership. Preserve independent cards and documented exceptions. Relevant Pragmatic Engineer podcast episodes belong in resource 35; nonmembers such as Summit talks remain standalone.
- Public playlist children must match reviewed curation exactly in `collection`, `order`, and `videoId`. Source summaries and the playlist overview must be reviewed before publication; follow [the source-library contract](src/content/youtube/AGENTS.md).
- When tracked source evidence changes, also run `npm run youtube:library -- status` and `npm run youtube:library -- audit`.

### Article Writing

Load `article-writing` when writing or refreshing public posts under `src/content/posts/`.

- **Audience:** experienced developers, tech leads, and agent-heavy practitioners seeking practical engineering workflows.
- **Tone:** direct, calm, source-backed, concise; skeptical but constructive. Not salesy, manifesto-like, or slangy.
- **Concision:** important point first; active sentences; short paragraphs; concrete examples; no throat-clearing. Cut repetition without losing reasoning or evidence boundaries.
- **Sources:** citations must support adjacent claims. Mark author synthesis as synthesis; do not pad posts with repeated source recaps.
- **Slides:** normal rendered `##` sections should usually start with a concise blockquote slide message. Visuals need accessible alt text, captions, or nearby explanation. Use exact `## Sources` or `## Sources used` for source appendices; these are not normal slides.

### Task Routing and Review

- Load `maintaining-youtube-library` for tracked playlist checks/sync, caption retries, adding playlists, collection placement, and **refresh/process coding-agent intake**. Follow the source-library contract; standalone videos use the content guide's transcript workflow.
- Consult Oracle when explicitly requested or when direct investigation leaves a specific, high-impact judgment unresolved—not as an automatic approval gate. An optional review offer is discretionary, not required closing boilerplate. If offering an optional follow-up review, wait for the user's agreement before running it. Dedicated source-library reviews remain mandatory where specified.

### Amp Resource Refresh

For **“refresh amp resources”**, perform a narrow delta audit:

1. Load `research` and read `.agents/research/amp-*.md` before fetching sources.
2. Force-refresh supplied official URLs and Amp Chronicle. Compare only items newer than the latest dated baseline, then read directly implicated Docs pages. Docs establish current behavior; Chronicle/News are dated evidence.
3. Update reusable research for durable changes. Update public posts only for stale supported claims, workflow contracts, or citations, loading `article-writing` first. Keep interface details, routing, pricing, and one-off announcements research-only by default; do not add a resource without a durable catalog use case.
4. Search the full owning article for the changed concept and validate exact links, not just domains. Apply the review policy above.
5. Run applicable checks, including link/browser checks for rendered changes. Report source delta, changed files, deliberately unchanged public content, and verification. Do not ship or archive unless requested.

## Deployment and Safety

- Build output goes to `dist/`; GitHub Pages uses GitHub Actions and `public/CNAME`.
- This repository is public by explicit project decision. Do not commit private or sensitive material.

## dot-agents Workflow

- Keep self-contained planning and execution in the current thread. Create `.agents/work/<category>/<slug>/` when resumption, coordination, handoff, auditability, durable decisions, or an explicit request makes repository context useful.
- Use `agent-work` for durable planning and execution. Read the work item's `index.md` first; [.agents/work/AGENTS.md](.agents/work/AGENTS.md) owns its lifecycle, verification, promotion, and completion/removal contract, including authorization and separate snapshot/removal commits.
- Handoffs are optional when another worker, thread, or environment is useful.
- Reusable findings belong in `.agents/research/`. External reference checkouts belong in `.agents/references/` and must not be committed.

## Git Workflow

- Run `git status --short --branch` before staging; commit each logical step with a clear message.
- Keep generated directories (`node_modules/`, `dist/`, `.astro/`) out of commits.
- ID-collision fixes need no additional confirmation, including during rebases and shipping to `main`. Preserve upstream IDs and both additions; assign unused IDs to unpublished additions, update references, and validate uniqueness and relationships. Ask only if resolution also requires a substantive content/behavior decision or changes an already published identity.
