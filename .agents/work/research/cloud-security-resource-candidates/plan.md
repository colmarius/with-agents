# Cloud and Security Resource Implementation Plan

Publish the approved ten-resource tranche without adding a new tracked playlist.

## Goals

- Add current Cloud/GCP and Security resources with concise source-backed summaries.
- Cross-list shared GCP security resources without duplicating canonical records.
- Preserve the verified WIF security boundaries for GitHub and Vercel.
- Prove the affected catalog, section, search, and summary routes in a browser.

## Tasks

- [x] **Task 1: Implement Cloud and WIF resources**
  - Scope: `src/data/resources/google-cloud.json`, five standalone summaries under `src/content/summaries/google-cloud/`
  - Depends on: none
  - Acceptance:
    - IDs 97–101 represent the Well-Architected Framework, enterprise foundations, Network Engineer path, WIF deployment guide, and WIF best practices.
    - Every resource has one concise public summary grounded in the audited official sources.
  - Notes: A high-mode orb owns the isolated draft; the coordinator reviews and integrates it.

- [x] **Task 2: Implement Security resources**
  - Scope: `src/data/resources/security.json`, `src/data/resources/security.ts`, five summaries under `src/content/summaries/security/`
  - Depends on: none
  - Acceptance:
    - IDs 102–106 represent RFC 9700, OIDC Core, OWASP API Security Top 10, WebAuthn Level 2, and Better Auth Security.
    - Standards remain primary; Better Auth is clearly framed as a fast-moving implementation reference.
  - Notes: A second high-mode orb owns the isolated draft; the coordinator reviews and integrates it.

- [x] **Task 3: Integrate catalog ownership and cross-listing**
  - Scope: `src/data/resources/catalogs.ts`, `src/data/resources/catalogs.test.ts`, resource manifest imports
  - Depends on: Tasks 1 and 2
  - Acceptance:
    - The Cloud catalog contains the five GCP additions in their intended sections.
    - Enterprise foundations and both WIF records are cross-listed into the intended Security sections without duplicate records.
    - The five Security-owned records are available only in the Security catalog.

- [x] **Task 4: Run editorial and source-fidelity review**
  - Scope: all ten resource records and summaries
  - Depends on: Tasks 1–3
  - Acceptance:
    - Summaries lead with practical value, distinguish durable guidance from mutable procedures, and avoid unsupported freshness claims.
    - The WIF summaries preserve immutable-claim, admission-condition, direct-access/impersonation, exact-principal, and IAM-role caveats.
    - Supporting URLs remain citations inside summaries rather than becoming extra records.

- [x] **Task 5: Run repository verification**
  - Scope: all changed files
  - Depends on: Tasks 1–4
  - Acceptance:
    - `npm run lint:fix`, `npm run content:guard`, `npm run check`, `npm test`, and `npm run build` pass.
    - `git diff --check` is clean and no generated output is committed.

- [x] **Task 6: Prove rendered behavior**
  - Scope: `/resources/cloud/`, `/resources/security/`, affected section routes, and representative summary routes
  - Depends on: Task 5
  - Acceptance:
    - Real-browser checks confirm resource counts, search/filter behavior, cross-listing, and summary navigation on desktop and mobile.
    - A short recorded review flow is saved for the user and sampled frame-by-frame; any visible or behavioral issue found is corrected and reverified.

## Implementation Notes

- Keep the first tranche to ten records and zero new playlists.
- Use IDs 97–106 to avoid collisions with the current maximum ID 96.
- Use existing topic vocabulary unless a new filter is required for correctness.
- `type: article` is the existing resource type for documentation, standards, and learning paths.
- Public summaries require exactly one standalone summary per new resource.

## Constraints / Decisions

- No playlist synchronization or transcript capture is part of this tranche.
- One canonical record may appear in multiple catalogs; do not duplicate resource data.
- Provider/action repositories and implementation pages support summaries rather than becoming additional records.
- Do not publish OAuth 2.1 draft material as the protocol foundation.

## Acceptance Criteria

- Ten new resources and ten summaries render in the intended Cloud and Security locations.
- The Cloud catalog increases from 12 to 17 resources; Security increases from 2 to 10 resources.
- The implementation remains concise, source-backed, and passes repository and browser verification.

## Verification

- `npm run lint:fix`
- `npm run content:guard`
- `npm run check`
- `npm test`
- `npm run build`
- Browser assertions and inspected recording frames for affected routes
- `git diff --check`
