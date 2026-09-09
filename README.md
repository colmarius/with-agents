# with-agents

A multi-context Astro site for practical engineering: articles, generated slides, and source-backed resource collections for coding agents, cloud/GCP, and security.

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
