# Research: Multi-topic Cloud and Security Resource Library

**Date:** 2026-08-24
**Status:** complete
**Question:** How should the site model Cloud/GCP and Security resources, and what does onboarding the 12 supplied Google Cloud Tech playlists require?

## Recommendation

Model **Cloud** and **Security** as separate top-level resource topics. Treat **GCP** as a provider facet under Cloud, and cross-list cloud-security resources under both Cloud and Security rather than making all security subordinate to cloud. Build one generic resource-catalog route and component, preserve the current Coding with Agents URL, and let a resource belong to more than one catalog without duplicating its canonical record or summary identity.

Track all 12 playlists and their complete remote manifests locally, but do not commit to a 405-video editorial backfill as one feature slice. Prove one complete transcript → source summary → overview → public collection path per playlist. Fully capture the five focused playlists with at most 11 videos plus the cohesive 24-video Engineering for Reliability series; require reviewed curation for the other six broad, overlapping, stale, or actively changing playlists.

## Key Findings

- Google's Well-Architected Framework treats security as one cloud architecture pillar alongside reliability, cost, performance, operations, and sustainability. This supports a Security facet within Cloud, but not Security as a child that can exist only under Cloud.
- NIST CSF 2.0 applies cybersecurity outcomes to all ICT and technology environments, explicitly including cloud, mobile, AI, IoT, and OT. A general Security catalog therefore needs an independent top-level identity.
- The supplied playlists currently contain **405 available videos**, **0 unavailable videos**, and about **45.49 hours** of material. The publication-date range is 2018-06-12 through 2026-08-20.
- There are no repeated video IDs within any supplied playlist and no cross-playlist duplicate video IDs among the 12 current manifests.
- Five playlists are focused and small (5-11 videos; 37 videos total). Seven have 24-182 videos and need an explicit full-versus-curated editorial decision.
- `Serverless Expeditions` is not a static introductory series: it has 182 videos through 2026-08-20 and now spans Cloud Run, serverless operations, AI agents, model security, data, CI/CD, and platform engineering. Full capture would dominate the feature's scope and produce a permanently moving backlog.
- A bounded direct-track preflight found English captions for every sampled video in Cloud Security Basics, Security Command Center, Serverless Expeditions, and Pub/Sub Made Easy. Serverless still needs per-selection preflight because its API caption flags are incomplete and 34 of 182 records report `caption: false`.
- The other eight playlists also showed strong English-caption metadata in bounded samples. Engineering for Reliability, Pub/Sub Best Practices, and Get Started with Google Cloud report captions for every API item; Google Cloud Essentials reports 21 of 24. One orb's unauthenticated transcript probe was challenged by YouTube despite positive API/page evidence, so a successful repository capture remains the decisive preflight.
- Availability is more fragile than the aggregate count suggests: 56 of those first four playlists' 208 items are unlisted, including every Security Command Center and Pub/Sub Made Easy video.
- Product freshness needs explicit editorial treatment. “Cloud DLP” is now part of Sensitive Data Protection, Security Command Center has expanded beyond its 2019 quickstarts, Pub/Sub Lite was deprecated and turned down in 2026, Deployment Manager reached end of support in 2026, Container Registry has been replaced by Artifact Registry, and Data Catalog was scheduled for discontinuation in 2026.
- The user-supplied `Beyound your Bill` title is currently `Beyond Your Bill` in the YouTube Data API.
- The existing YouTube library already owns source-only playlist manifests, globally keyed video transcripts, editorial source summaries, playlist overviews, curation, language fidelity, and structural audit. Extending that workflow is lower risk than creating another local media store.
- The public resource feature is currently topic-specific: resource types, topic unions, sections, data loading, React filters, navigation, routes, guard validation, and standalone-evidence lookup all hard-code Coding with Agents. Summary IDs are joined globally by numeric `resourceId`, so new topic support must preserve global uniqueness.

## Playlist Inventory

Inventory was fetched from the official YouTube Data API on 2026-08-24. Counts include all currently returned playlist items and video records.

| Proposed slug | Current title | Videos | Duration | Published range | Initial treatment |
| --- | --- | ---: | ---: | --- | --- |
| `google-cloud-security-basics` | Cloud Security Basics | 10 | 1.08 h | 2020-02-05–2021-07-03 | Full candidate |
| `google-cloud-security-command-center` | Getting Started with Cloud Security Command Center | 5 | 0.28 h | 2019-09-11–2019-10-23 | Full candidate |
| `google-cloud-serverless-expeditions` | Serverless Expeditions | 182 | 24.05 h | 2020-09-17–2026-08-20 | Curate |
| `google-cloud-pubsub-made-easy` | Pub/Sub Made Easy | 11 | 1.11 h | 2019-10-30–2021-06-30 | Full candidate |
| `google-cloud-pubsub-best-practices` | Pub/Sub Best Practices | 6 | 0.35 h | 2023-02-04–2023-03-11 | Full candidate |
| `google-cloud-essentials` | Google Cloud Essentials | 24 | 2.27 h | 2019-01-11–2022-08-05 | Curate overlapping generations and stale onboarding |
| `google-cloud-engineering-for-reliability` | Engineering for Reliability | 24 | 2.22 h | 2021-05-26–2022-05-25 | Full candidate; coherent and fully captioned |
| `google-cloud-get-started` | Get Started with Google Cloud | 41 | 1.90 h | 2018-06-12–2022-03-22 | Curate; many service quickstarts age independently |
| `google-cloud-build` | Build With Google Cloud | 5 | 1.22 h | 2022-01-20–2022-09-08 | Full candidate |
| `google-cloud-bytes` | Cloud Bytes | 45 | 1.36 h | 2020-07-06–2023-10-30 | Curate by service/category |
| `google-cloud-beyond-your-bill` | Beyond Your Bill | 24 | 2.17 h | 2019-08-27–2021-08-06 | Curate; separate billing and GKE optimization arcs |
| `google-cloud-architecting` | Architecting with Google Cloud | 28 | 7.49 h | 2021-08-28–2023-07-31 | Curate by architecture question |

### Proposed taxonomy

Top-level catalogs:

- `coding-with-agents` — existing catalog and URLs.
- `cloud` — provider-neutral home initially populated by GCP resources.
- `security` — environment-neutral security home initially populated by cloud-security resources.

Cloud sections and facets:

- Foundations and platform
- Application platforms and serverless
- Data and messaging
- Reliability and operations
- Architecture and case studies
- Cost and governance
- Security (cross-links to the Security catalog)
- Provider facet: GCP

Security sections and facets:

- Cloud security
- Identity and access
- Data protection
- Threat detection and response
- Application and platform security
- Governance and compliance
- Provider facet: GCP

Avoid a GCP top-level catalog for now. The current corpus is entirely GCP, but `cloud` leaves room for AWS, Azure, Kubernetes, and provider-neutral material while `gcp` remains searchable.

## Implementation Evidence

### Public resource ownership

- `src/types/resources.ts` defines Coding with Agents-only topic and section unions.
- `src/data/resources/coding-with-agents.ts` loads and validates one fixed JSON manifest with Coding with Agents error messages.
- `src/data/resources/sections.ts` owns one fixed section list.
- `src/pages/resources/coding-with-agents.astro` and its `[section]` route duplicate topic-specific route setup.
- `src/components/resources/CodingWithAgents.tsx` hard-codes filter labels and history-state naming even though its list, search, modal, and summary behavior are otherwise reusable.
- `src/components/resources/ResourcesNav.astro` hard-codes the topic route and section list.
- `.agents/scripts/public-content-guard.mjs` validates and scans only `coding-with-agents.json`, and requires every public resource to have a public summary.
- `.agents/scripts/lib/youtube-standalone-evidence.mjs` resolves reusable evidence against only that same manifest.

### Existing reusable seams

- The summary collection schema already supports curated collections with `collection`, `order`, and `videoId`.
- `summaryResolver.ts` already distinguishes standalone, series, and curated collection summaries and orders collection children.
- `EpisodeList.tsx` already presents collection children as “Selected videos.”
- The YouTube source library already deduplicates globally by video ID, keeps full remote manifests even for curated playlists, and scopes capture/editorial obligations to reviewed selections.

## Proposed Architecture

1. Replace the topic-specific public loader with a generic catalog registry. A catalog owns its slug, title, description, sections, filter labels, and a list of canonical resource IDs.
2. Keep canonical resource records in validated manifests and enforce globally unique numeric IDs. Membership and section placement belong to the registry so the same playlist can appear in both Cloud and Security without duplicating the record.
3. Replace the Coding with Agents React component with a generic `ResourceCatalog` component that receives filter options and a history-state key as props.
4. Generate static `/resources/[topic]` and `/resources/[topic]/[section]` routes from the registry. Preserve `/resources/coding-with-agents` exactly.
5. Generalize resource validation, the public-content guard, and standalone YouTube evidence lookup to all registered manifests before adding public GCP records.
6. Keep `src/content/youtube/` source-only. Public topic pages consume only reviewed public resource manifests and `src/content/summaries/**`, never source-library files.

## Rollout Recommendation

1. **Foundation:** generic registry, routes, UI, validation, tests, and browser proof with Coding with Agents unchanged.
2. **Source onboarding:** add the 12 explicitly configured multi-speaker playlists, sync their full manifests, and run public-impact review.
3. **Thin slices:** one separately captured video, draft source summary, and draft overview per playlist. Do not parallelize sync or catalog writes; parallelize disjoint playlist/video editorial work after manifests stabilize.
4. **Curation gate:** review candidate selections for broad playlists. Capture only reviewed selections; preserve complete remote manifests for drift detection.
5. **Publication:** dedicated source-summary and overview review, then create canonical public playlist resources and public collection summaries. Cross-list the two security playlists in both Cloud and Security.
6. **Backfill:** process bounded playlist batches with independent editorial review and combined audit/build checks. Never treat “all 405 videos” as one review unit.

## Risks and Unknowns

- The source-library contract requires explicit transcript language, summary language, and attribution mode before catalog mutation. Recommended values (`en`, `en`, `multiSpeaker: true`) await user confirmation.
- API caption flags are not sufficient proof of a usable configured-language track. Direct-track samples are positive for the first four playlists, but every reviewed selection still needs a bounded preflight or capture attempt.
- Curation is a human approval gate. Candidate selection can be prepared autonomously, but broad capture and publication should not pretend an agent-selected list is human-reviewed.
- Old quickstarts and product names may be obsolete even when videos remain available. Editorial summaries need an “historical/current” check; playlist position is not chronology.

## Sources

- [Google Cloud Well-Architected Framework](https://docs.cloud.google.com/architecture/framework) — Defines security as one cloud pillar alongside operations, reliability, cost, performance, and sustainability, and applies to cloud, hybrid, and multicloud workloads.
- [NIST Cybersecurity Framework 2.0](https://doi.org/10.6028/NIST.CSWP.29) — Applies cybersecurity outcomes to all ICT and technology environments, including cloud, mobile, AI, IoT, and OT.
- [NIST CSF 2.0 publication page](https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20) — Establishes the organization-wide, sector-neutral scope.
- [Google Cloud Tech playlists](https://www.youtube.com/@googlecloudtech/playlists) and the 12 playlist URLs supplied by the user — Official source inventory queried through the YouTube Data API on 2026-08-24.
- [Sensitive Data Protection](https://docs.cloud.google.com/sensitive-data-protection/docs) — Current product naming for the service previously presented as Cloud DLP.
- [Choose Pub/Sub or Pub/Sub Lite](https://docs.cloud.google.com/pubsub/docs/choosing-pubsub-or-lite) — Current deprecation and 2026 shutdown status for Pub/Sub Lite.
- [Deployment Manager deprecations](https://docs.cloud.google.com/deployment-manager/docs/deprecations) — 2026 end-of-support boundary for an older Get Started quickstart.
- [Transition from Container Registry](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr) — Current Artifact Registry replacement and Container Registry shutdown timeline.
- [Data Catalog documentation](https://docs.cloud.google.com/data-catalog/docs) — Deprecation and 2026 discontinuation boundary for a Cloud Bytes primer.
- `src/content/youtube/AGENTS.md` — Authoritative local source-library, curation, editorial, and publication-boundary contract.

## Open Questions

- [ ] Confirm English transcript/summary language and `multiSpeaker: true` for all 12 playlists.
- [ ] Confirm the final reviewed curation for Serverless Expeditions, Google Cloud Essentials, Get Started with Google Cloud, Cloud Bytes, Beyond Your Bill, and Architecting with Google Cloud before broad capture or publication.
