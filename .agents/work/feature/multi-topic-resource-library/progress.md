# Progress

## 2026-08-24 — Catalog foundation complete

- Added a generic catalog registry for Coding with Agents, Cloud / GCP, and Security.
- Replaced topic-specific resource routes and components with generic topic and section routes while preserving existing Coding with Agents URLs and interactions.
- Generalized public manifest discovery, global resource-ID checks, summary joins, source-evidence checks, and related tests beyond `coding-with-agents.json`.
- Confirmed the source-only YouTube catalog remains outside Astro content and generated output.

### Verification

- `npm run lint:fix` — clean.
- `npm run check` — 0 errors, warnings, or hints.
- `npm test` — 86 tests passed.
- `npm run content:guard` — passed for 308 tracked videos, 9 tracked playlists, 92 references, 49 resources, and 100 public summaries; only the pre-existing intentional antirez duplicate notice was reported.
- `npm run build` — 41 pages built, including all existing Coding with Agents routes and the new Cloud and Security topic/section routes.
- Source-only boundary check — no source-only catalog marker was emitted to `dist`.
- Real-browser checks — `/resources` listed all three topics; `/resources/cloud` and `/resources/security/cloud-security` rendered their catalog-specific navigation and preparation states; `/resources/coding-with-agents` retained 49 resources, filtering, and the summary modal with URL state. No page errors were reported.

## 2026-08-24 — Capture metadata approved and site topology researched

- The user approved `transcriptLanguage: en`, `summaryLanguage: en`, and `multiSpeaker: true` for all twelve playlists.
- The user approved full capture for the six focused collections and reviewed curation for the six broad or stale collections.
- Local and external research plus Oracle review recommend retaining one Astro app and one origin, giving the apex a generic umbrella landing page, and introducing distinct `/coding`, `/cloud`, and `/security` context landing pages without moving established content URLs immediately.
- A four-app Astro monorepo on separate subdomains remains the correct later architecture only if the contexts develop independent audiences, navigation, release ownership, or PWA needs. GitHub Pages cannot directly deploy four sites from this one repository; Cloudflare Pages or Vercel can.
- No site-topology or deployment changes were made during this research step.

### Blockers

- Confirm the proposed single-origin topology before restructuring the main site.
- Approve exact ordered selections for the six broad or stale playlists after candidate curation is prepared.
