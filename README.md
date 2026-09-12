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

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.
The production site uses the custom domain `with-agents.dev`, configured by `public/CNAME`.
