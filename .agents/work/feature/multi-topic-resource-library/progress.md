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

- Approve exact ordered selections for the six broad or stale playlists after candidate curation is prepared.

## 2026-08-24 — Context-hub refactor started

- The user accepted the bounded single-origin refactor before public Cloud and Security onboarding.
- Work moved to local branch `feature/multi-topic-resource-library`; local `main` again matches `origin/main`.
- The active slice is a generic apex plus `/coding`, `/cloud`, and `/security` context hubs while preserving established Coding URLs, one PWA, and the current deployment.
- Implementation is delegated to a high-effort orb; the coordinator retains plan ownership, integration, and combined verification.

## 2026-08-24 — Context-hub refactor integrated

- Integrated the delegated context-hub implementation as `ecd7efd` (`feat: add single-origin context hubs`).
- `/` is now the umbrella entry; `/coding`, `/cloud`, and `/security` provide distinct context landings; and global navigation preserves established Coding and resource routes.
- Kept one Astro app, origin, PWA, and deployment. No resource content, source-library files, route migrations, or hosting configuration changed in this slice.

### Verification

- `npm run lint:fix` — clean.
- `npm run check` — 0 errors, warnings, or hints.
- `npm test` — 88 tests passed.
- `npm run content:guard` — passed; only the pre-existing intentional antirez duplicate notice was reported.
- `npm run build` — 44 pages built, including `/`, all three context hubs, established post and slide routes, and all resource catalog routes.
- Real-browser checks — `/`, `/coding`, `/cloud`, `/security`, and `/resources/coding-with-agents` rendered their expected headings and active navigation styling with no horizontal overflow or browser errors. At 390×844, the Cloud mobile menu exposed all five destinations, locked body scrolling while open, and closed and unlocked on Escape.

### Next action

- Configure and synchronize all 12 approved Google Cloud Tech playlists, then prepare exact ordered candidates for the six broad collections before curation or capture.
