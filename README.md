# with-agents

A multi-context Astro site for practical engineering: articles, generated slides, and source-backed resource collections for coding agents, cloud/GCP, security, and broader AI concepts, economics, and implications.

**Live site target**: [with-agents.dev](https://with-agents.dev)

## Tech Stack

- **Astro v7** with React 19 islands
- **TailwindCSS v4**
- **Biome** for linting and formatting
- **GitHub Pages** deployment through GitHub Actions

## Development

Use the Node.js version pinned in [`.nvmrc`](.nvmrc), matching CI. With nvm:

```sh
nvm install
nvm use
npm ci
npm run dev
```

Before committing code or content changes, run:

```sh
npm run lint:fix     # Lint and format
npm run check        # Astro/TypeScript check
npm run content:guard
npm run build
npm test
```

**Build before testing:** some tests inspect the generated site and search
index in `dist/`. Testing first can check stale output or skip build-dependent
coverage. Run `npm run preview` to inspect the production build locally.

Run `npm run hooks:install` once per checkout to install the pinned `prek`
pre-commit hook. It validates timestamp citations only in staged summaries,
without network requests or rewriting content. Run `npm run summaries:check`
to check every summary; `npm test` also checks the full corpus in CI.

For content changes, follow [the repository guidance](AGENTS.md) and, for tracked
YouTube sources, [the source-library publication rules](src/content/youtube/AGENTS.md).
Source-only evidence is committed but must not be published as site pages.

## Site search

Use the Search button or ⌘/Ctrl+K on any page, including slides. Search covers
public field guides, summary text and resource descriptions. Drafts, unlisted
guides and duplicated slide content do not appear. Resources without summaries
lead to their owning catalog section. Catalog filtering remains separate.

Search requires a production build: run `npm run build`, then `npm run preview`.
The development server shows an explanation instead of loading an old index.
Each build extracts explicitly marked HTML into `dist/search/documents.json`
before generating the service worker. MiniSearch builds its in-memory index on
first opening in small yielding batches; subsequent queries stay in the browser. The complete corpus must
load successfully, otherwise the dialog offers Retry/Reload rather than partial
results. There is no query analytics or saved search history.

The installed site's service worker precaches search data and code, so search
works offline after installation. This downloads the corpus even if search has
not been opened. The existing update prompt reloads the site with the new corpus.

The site checks for deployments after service-worker registration, on return to
the page or reconnection, and every five minutes while visible and online.
Checks share a one-minute cooldown and do not overlap. Once a new offline snapshot
has finished installing, **Reload to update** activates it and reloads controlled
tabs together, keeping pages, assets, and search on the same deployment. Reading
is not interrupted automatically. Existing installations acquire this checking
policy after accepting their first update; offline or suspended apps cannot
discover deployments until they reconnect or resume.

## Recently added

`/recent/` mixes public posts, standalone resources, and individual collection or
series summaries. Topic pills use the broad catalog memberships, including
cross-listed items, and work without JavaScript. Pages hold at most 20 additions;
same-day collection children are grouped only after pagination. The home page
and resource index link to the archive. Only its first-page introduction is
searchable; repeated entries and topic/pagination variants are excluded.

For every new public addition, record `addedDate: 'YYYY-MM-DD'` on the owner:

- Post: post frontmatter when it becomes discoverable (not when drafted).
- Standalone resource: the canonical resource manifest record.
- Collection/series child: that public summary's frontmatter, not the parent.

This is the first library-addition day, not the source's publication date. Keep
it unchanged during edits, transcript regeneration, cross-listing, and moves.
When consolidating a standalone item into a collection, transfer its original
date to the child. A later standalone summary is not a second addition event.
Existing publication/source dates keep their current meaning.

For historical corrections, follow content identity and public eligibility across
renames and moves. Use the first public commit's committer day, not its author
date, draft creation, source date, or latest edit. Store the date directly on the
owner; initial-import entries retain their import day. The build rejects eligible
additions without an owner date and requires no Git access.

## Resource catalogs

The AI context at `/ai` leads to `/resources/ai`, grouped into Concepts &
capabilities, Economics & industry, and Implications & risks. It covers AI itself
and its broader consequences; Coding with Agents remains focused on software
workflows, agent systems, verification, and developer practice.

Keep one canonical record in a registered manifest under `src/data/resources/`.
Use `catalogs.ts` to cross-list a resource only when its source has substantive
material for both audiences. Moving catalog membership does not require changing
summary or transcript paths: existing summary URLs remain stable, including
legacy `coding-with-agents` slugs now owned by AI. Shared resources keep their
existing primary catalog and expose an additional AI link.

### Editorial relevance and starting selections

Catalog-owned curation in `src/data/resources/curation.ts` adds ordered starting
selections and optional relevance assessments. Grade usefulness **within each
catalog**, not source reliability: Essential is a strong starting or working
reference, Useful adds distinct value, and Context supplies narrower background
or perspectives. Keep reasons concise and preserve source limitations; age,
opinion, and vendor authorship do not by themselves make a resource irrelevant.
Unassessed resources remain valid, and no grade hides a resource or changes the
newest-first ordering.

Each starting selection names a catalog member, a specific slash-separated
summary ID (without `.md`), and its intended audience or task. It must have an
assessment. Choose an introductory episode explicitly rather than relying on
the latest series entry. Starting links are validated against summary ownership
at build time. AI uses “Selected perspectives” rather than implying a complete
fundamentals curriculum.

Editorial annotations are excluded from local and site search. Preserve catalog
membership, summary links, and `resource-{id}` anchors when changing curation.
Run the [development checks](#development), then verify root and section pages,
selected links, search/filter behavior, and narrow layouts in the browser after
rendered changes.

## Project Structure

```text
src/
├── components/    # Astro and React components
├── content/       # Posts, public summaries, and source-only YouTube evidence
├── data/          # Canonical resource manifests and catalog registry
├── hooks/         # React hooks
├── layouts/       # Astro layouts
├── pages/         # Static page routes
├── search/        # Build-time index, browser search engine, and tests
├── scripts/       # Client scripts
├── styles/        # Global styles
├── types/         # Type definitions
└── utils/         # Utilities
```

## Deployment

Pushes to `main` deploy to GitHub Pages via `.github/workflows/ci.yml` only after
lint, type checks, the content guard, the build, and tests pass. Deployment uses
the same `dist/` artifact that passed the post-build tests, without rebuilding.
Pull requests run the checks but cannot deploy. Manual runs of the CI workflow
deploy only when targeting `main`, after the same checks pass.
The production site uses the custom domain `with-agents.dev`, configured by `public/CNAME`.
