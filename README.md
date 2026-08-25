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
