# Decision: Keep one origin until contexts become independent products

Date: 2026-08-24
Status: accepted

## Context

The current site, canonical URLs, GitHub Pages deployment, web app manifest, and root-scoped Workbox service worker all form one Coding with Agents-focused product. The approved Cloud/GCP and Cloud Security collections introduce distinct information contexts, but they do not yet demonstrate separate audiences, ownership, release cycles, or installed-app needs.

The decision separates information architecture from deployment architecture. Distinct navigation and landing pages do not require distinct origins.

## Decision

Keep one Astro application at `with-agents.dev` for now:

- Make the apex an umbrella entry point for Coding with Agents, Cloud/GCP, and Security.
- Introduce stable `/coding`, `/cloud`, and `/security` context landing pages with context-specific navigation and descriptions.
- Preserve established `/posts`, `/posts/<slug>`, `/resources/coding-with-agents`, and summary URLs rather than moving them for symmetry.
- Keep one PWA, canonical origin, search surface, and deployment while the contexts share the same product and editorial system.

Do not use one Astro application built four times as a durable multi-site architecture. If separate origins later become justified, move directly to a monorepo with independent Astro applications for the hub and three contexts, plus shared UI, schema, and content packages.

## Rationale

- The current catalog model already supports separate context taxonomies and cross-listing without duplicated resource identities.
- Cloud Security intentionally overlaps Cloud and Security, favoring shared search and navigation while the corpus is young.
- A subdomain is a separate web origin. It needs its own service worker, manifest, caches, storage, permissions, canonical configuration, analytics surface, and deployment.
- GitHub Pages permits at most one Pages site per repository. Four independently deployed subdomains from one repository would require a different host or extra repositories.
- Cloudflare Pages and Vercel both support multiple projects and build roots from one monorepo. Cloudflare Pages currently permits up to five projects per repository, which fits a future hub plus three context sites.
- Astro supports separate project roots and output directories; it does not require or provide a special multi-site abstraction. Independent Astro apps are the clearer boundary if the products actually separate.

## Consequences

- The main page needs a credible umbrella promise and cards that route to the three contexts.
- Context landing pages may look and navigate differently while sharing implementation, content schemas, search, and deployment.
- Existing SEO value and inbound links remain on the current origin.
- One root PWA continues to cache one corpus; it should be reviewed as Cloud and Security content grows so precaching does not become excessive.
- Reconsider a four-app monorepo after substantive publication if each context has a standalone editorial promise and cadence, audiences rarely cross contexts, or separate deployment ownership or PWAs are required.
- A practical evidence threshold is roughly one quarter of analytics showing less than about 10% of returning sessions crossing context boundaries, together with independent navigation and publishing needs.

## Alternatives considered

### Four independent Astro apps now

Technically sound but premature. It would add four builds, deployment projects, canonical configurations, PWA lifecycles, and an established-URL migration before independent product behavior exists.

### One Astro app built four times

Rejected as a target. It keeps code and releases coupled while multiplying deployment, canonical, filtering, and PWA failure modes. It is useful only as a temporary bridge if separate origins become mandatory before the products diverge.

## Sources

- [Astro configuration reference](https://docs.astro.build/en/reference/configuration-reference/) — `site`, `root`, `srcDir`, `publicDir`, and `outDir` are per build and support independent project roots and outputs.
- [GitHub Pages site types and limits](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) — project sites are limited to one Pages site per repository.
- [Cloudflare Pages monorepos](https://developers.cloudflare.com/pages/configuration/monorepos/) — multiple projects can use one repository with separate build commands or roots; the documented limit is five projects per repository.
- [Vercel monorepos](https://vercel.com/docs/monorepos) — each monorepo directory can be configured as an independent project and deployment.
- [MDN service worker registration](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register) — worker scripts and scopes must be same-origin with the registering page.
- [web.dev multi-origin PWA guidance](https://web.dev/articles/multi-origin-pwas) — subdomains require separate workers, manifests, caches, storage, and installed-app scopes; one origin is preferred unless experiences are intentionally independent.

## Links

- Work item: `../index.md`
- Related plan: `../plan.md`
- Related research: `../research.md`
