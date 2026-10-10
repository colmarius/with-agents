# with-agents

A multi-context Astro site for practical engineering: articles, generated slides, and source-backed resource collections for coding agents, cloud/GCP, security, and broader AI concepts, economics, and implications.

**Live site target**: [with-agents.dev](https://with-agents.dev)

## Tech Stack

- **Astro v7** with React 19 islands
- **TailwindCSS v4**
- **Biome** for linting and formatting
- **GitHub Pages** deployment through GitHub Actions

## Development

```text
npm ci           # Install dependencies from the lockfile
npm run dev      # Start dev server
npm run check    # Astro/TypeScript check
npm test         # Unit tests
npm run lint:fix # Lint and format
npm run build    # Build for production
npm run preview  # Preview build locally
```

Run `npm run hooks:install` once per checkout to install the pinned `prek`
pre-commit hook. It validates timestamp citations only in staged summaries,
without network requests or rewriting content. Run `npm run summaries:check`
to check every summary; `npm test` also checks the full corpus in CI.

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

`src/data/recent-additions-history.json` is a frozen migration baseline, not an
automatic activity log. All 352 additions discoverable on 2026-10-10 have been
backfilled from their first public repository appearances, with evidence commits.
The UI marks affected day groups with “Includes estimated dates”; individual
commit evidence stays in the baseline rather than appearing as timeline links.
Use the commit's committer calendar day, not its author date (which may precede
rebased incorporation), source date, or latest edit. The 24 entries already in
the initial site import use 2026-06-24 as an estimated baseline, including
existing episode listings later expanded into full summaries. Post dates start
when articles become publicly discoverable, not when their drafts were created.
Renames, source-link corrections, and standalone-to-collection moves preserve
the original addition date. Three replacement articles first published on June
28 were confirmed against their linked publication threads, rather than
inheriting the dates of the older drafts they replaced.

Explicit owner dates take precedence. `legacyUndated` is now empty; never add
new content to that exemption list. Move historical keys with an identity
migration, preserving dates and evidence rather than treating a move as new.

The build fails for a new eligible addition without a date. No Git access is
needed during ordinary builds. To extend historical coverage, review identity,
membership, and publication eligibility in history; do not blindly use file
creation, source dates, or last-modified timestamps. Keep estimates separate
from recorded owner dates and never regenerate the baseline from current files.

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
Run `npm run check`, `npm run content:guard`, `npm run build`, then `npm test`;
the final test run checks the newly built catalog and search corpus. Verify root
and section pages, selected links, search/filter behavior, and narrow layouts in
the browser after rendered changes.

## Project Structure

```text
src/
├── components/    # Astro and React components
├── content/       # Posts, public summaries, and source-only YouTube evidence
├── data/          # Canonical resource manifests and catalog registry
├── hooks/         # React hooks
├── layouts/       # Astro layouts
├── pages/         # Routes and API endpoints
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
