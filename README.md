# with-agents

A focused Astro site for practical coding-agent workflows: articles, generated slides, curated media, and summaries for developers learning to work effectively with agents.

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
npm run lint:fix # Lint and format
npm run build    # Build for production
npm run preview  # Preview build locally
```

## Project Structure

```text
src/
├── components/    # Astro and React components
├── content/       # Posts and resource summaries
├── data/          # Resource manifests
├── hooks/         # React hooks
├── layouts/       # Astro layouts
├── pages/         # Routes and API endpoints
├── scripts/       # Client scripts
├── styles/        # Global styles
├── types/         # Type definitions
└── utils/         # Utilities
```

## Deployment

The site is configured for a custom-domain GitHub Pages deployment at `https://with-agents.dev`:

- `astro.config.mjs` sets `site: 'https://with-agents.dev'` and uses static output.
- `.github/workflows/deploy.yml` uses the official Astro action with Node `22.18.0` and npm lockfile support.
- `public/CNAME` contains `with-agents.dev`.

Manual GitHub setup:

1. Create a **private** repository named `colmarius/with-agents`.
2. Add the remote and push the first commit:

   ```bash
   git remote add origin git@github.com:colmarius/with-agents.git
   git push -u origin main
   ```

3. In repository settings, enable **Pages** with **GitHub Actions** as the source.
4. Add and verify the custom domain `with-agents.dev`.
5. Configure DNS for the apex domain:
   - `A 185.199.108.153`
   - `A 185.199.109.153`
   - `A 185.199.110.153`
   - `A 185.199.111.153`
   - Optional IPv6 `AAAA` records from GitHub Pages documentation.
6. Enable **Enforce HTTPS** after DNS settles.

Keep the source repository private by default. GitHub Pages output is public even when the source repository is private. If private-repository Pages is unavailable on the account, delay Pages or choose another host rather than making the source repository public without explicit approval.
