# Google Cloud playlist curation candidates

Status: draft — awaiting user approval
Prepared: 2026-08-24

These are proposed editorial display orders, not mutable YouTube playlist positions. Complete manifests remain authoritative for remote membership and drift. Draft curation blocks capture and creates no publication obligation until each selection is approved and changed to `reviewed`.

## Approval checklist

- [ ] Serverless Expeditions — 14 of 182
- [ ] Google Cloud Essentials — 8 of 24
- [ ] Get Started with Google Cloud — 12 of 41
- [ ] Cloud Bytes — 12 of 45
- [ ] Beyond Your Bill — 11 of 24
- [ ] Architecting with Google Cloud — 10 of 28

## Serverless Expeditions

The 14-item order keeps a stable serverless core, adds security and reliability, and limits the newer AI-agent drift to a two-item appendix.

| # | Video ID | Exact title | Role |
| ---: | --- | --- | --- |
| 1 | `zRjOSxTpC3A` | Cloud Functions vs. Cloud Run | Historical service-selection baseline |
| 2 | `HbsHC8gq_NQ` | Designing a serverless app on Google Cloud | End-to-end serverless architecture |
| 3 | `e07TvWMmVI8` | Introducing Cloud Run Jobs | Request-serving versus batch execution |
| 4 | `8YtsV8BNTqY` | Cloud Run scalability | Runtime scaling and load behavior |
| 5 | `S2evHtbl4F8` | Understanding Pub/Sub ordering | Event-driven ordering constraint |
| 6 | `IqAe1WRPjfU` | Understanding serverless relational data at scale | Relational state and Spanner |
| 7 | `yqMKr37mGJw` | Retries and Saga pattern in Workflows | Failure handling and compensation |
| 8 | `JIE89dneaGo` | Manage your Cloud Run secrets securely with Secret Manager | Secret handling |
| 9 | `bIL8Gb3D8Yg` | Cloud Run Principle of Least Privilege | Runtime and invocation identity |
| 10 | `Ce93fpQrKCk` | Infrastructure as code with Terraform and Cloud Run | Declarative provisioning |
| 11 | `r3oZVYVSbqg` | How to do alerting right | Actionable operations |
| 12 | `ArDuQDjW-DQ` | Safe serverless deployments with Cloud Run | Deployment-risk reduction |
| 13 | `04Gap8vWV28` | Power your AI agents with MCP tools on Google Cloud Run | Newer AI appendix: MCP deployment |
| 14 | `o3aE4tw3vrI` | Build a BigQuery AI agent with ADK & Cloud Run | Newer AI appendix: ADK/data example |

Review notes:

- Treat `zRjOSxTpC3A` as evolution context because Cloud Functions and Cloud Run functions have converged since 2020.
- Revalidate 2021 console, Terraform, IAM, and service instructions before publication.
- Label the final two entries as fast-moving 2025–2026 AI snapshots, not part of the stable serverless core.
- Exclude generic coding-agent, prompt, RAG, framework-deployment, Shorts, duplicate, and peripheral analytics entries.

## Google Cloud Essentials

The eight-item order favors newer service-choice overviews and durable developer/operations concepts over stale console and free-tier walkthroughs.

| # | Video ID | Exact title | Role |
| ---: | --- | --- | --- |
| 1 | `kzKFuHk8ovk` | What is Google Cloud? | Cloud orientation |
| 2 | `jtPtSVSTb9Y` | How to run code on Google Cloud | Compute decision framework |
| 3 | `w2mL4sUOjVo` | How to store data on Google Cloud | Storage decision framework |
| 4 | `jh0fPT-AWwM` | Top 3 ways to run your containers on Google Cloud | Container operating models |
| 5 | `xbmYmgBEj4o` | GCP vs. Firebase - Projects & storage | Shared project/platform model |
| 6 | `TH_OuqZ1ZKU` | Platform overview - Code & build tools | IDE-to-CI delivery concepts |
| 7 | `gyDp-Cl_MdA` | Cloud logging | Centralized logs |
| 8 | `GANi9eRxhHs` | Error reporting | Error grouping and severity |

Review notes:

- Strict English-caption preflight is required for `jtPtSVSTb9Y` and `w2mL4sUOjVo`; the Data API caption flag is false for both.
- Map the old Cloud Functions framing to current Cloud Run functions where source-faithful context permits.
- Exclude console/free-tier walkthroughs, Cloud Debugger material, the old machine-learning map, and duplicate older platform overviews.

## Get Started with Google Cloud

The 12-item order starts with current-doc discovery, then selects durable networking, storage, identity, cost, data, orchestration, and API patterns. IAM, IAP, and Sensitive Data Protection can be cross-listed into Security without classifying the whole collection as Security.

| # | Video ID | Exact title | Role |
| ---: | --- | --- | --- |
| 1 | `RiZYhr9WTtQ` | What are Google Cloud quickstarts? | Current-doc discovery |
| 2 | `NPs_-Y5nFgE` | Google Cloud VPC | Networking foundation |
| 3 | `sT7-_qn71cw` | Google Cloud Persistent Disks | VM-attached durable storage |
| 4 | `Sdt-i-Q7tyA` | Resource Access Control IAM Roles and Permissions | Security cross-topic: IAM |
| 5 | `_tw3md6k8aw` | Securing App Engine apps with IAP | Security cross-topic: IAP |
| 6 | `3Z1SzQsYnH8` | Setting up cost controls for BigQuery | Query-cost guardrails |
| 7 | `4-rZd5DwEww` | Locating and querying public datasets | BigQuery learning path |
| 8 | `0cyTHbkARwY` | Querying Cloud SQL from BigQuery | Federated query integration |
| 9 | `ExtyhPqE_Hs` | Using object versioning | Data recovery concept |
| 10 | `LxDHd0MsFXI` | How to classify and redact sensitive data | Security cross-topic: Sensitive Data Protection |
| 11 | `E_ZDB4S6mSQ` | Build a serverless application integration with Workflows | Ordered orchestration |
| 12 | `SPcFViKU_xU` | How to use Cloud Speech-to-Text with cURL | API-level AI quickstart |

Review notes:

- Exclude Deployment Manager and Container Registry entries as obsolete current guidance.
- Present Datastore as Firestore in Datastore mode and Cloud DLP under Sensitive Data Protection only when the selected source requires that historical context.
- Revalidate VPC, disk, IAM, IAP, BigQuery, Storage, Workflows, and Speech-to-Text procedures against current documentation.

## Cloud Bytes

The 12-item order is a compact service-choice map: compute/runtime, storage/data, operations, networking, and security.

| # | Video ID | Exact title | Role |
| ---: | --- | --- | --- |
| 1 | `IuK4gQeHRcI` | Compute Engine in a minute | VM/IaaS baseline |
| 2 | `pQ87vVMZK-A` | Google Kubernetes Engine in a minute | Managed Kubernetes |
| 3 | `AL2rAmWFZjM` | Cloud Run in a minute | Serverless containers; newer duplicate |
| 4 | `wNOs3LlsH6k` | Cloud Storage in a minute | Object storage |
| 5 | `5bjYk6Hhd10` | Cloud Spanner in a minute | Distributed relational data |
| 6 | `jLI-84UjZLE` | Cloud Pub/Sub in a minute | Messaging/event decoupling |
| 7 | `XdsuDOQ9nkU` | Dataflow in a minute | Batch/stream processing |
| 8 | `CFw4peH2UwU` | BigQuery in a minute | Analytical warehouse |
| 9 | `5j8LfmRhHKQ` | Cloud Operations Suite in a minute | Cross-cutting observability |
| 10 | `hS_uvz4ohbo` | Virtual Private Cloud in a minute | Network isolation/connectivity |
| 11 | `zd5d9Vv1ZFE` | Cloud IAM in a minute | Security cross-topic: identity authorization |
| 12 | `ABlY7FexJJI` | VPC Service Controls in a minute | Security cross-topic: service perimeters |

Review notes:

- Exclude Data Catalog because it is discontinued and exclude Dataprep pending lifecycle/ownership review.
- Exclude the older duplicate Cloud Run primer and treat Anthos as requiring a separate current-branding review.
- Every selected one-minute primer is a dated orientation, not procedural authority.

## Beyond Your Bill

The 11-item order keeps FinOps primary and limits GKE to four concrete efficiency levers.

| # | Video ID | Exact title | Role |
| ---: | --- | --- | --- |
| 1 | `NOOhDq1JyIM` | Organizing your GCP resources | Ownership and allocation hierarchy |
| 2 | `TDHTcS2V4wI` | Managing billing permissions | Billing separation of duties |
| 3 | `jRb8piwa2GI` | Exploring your GCP costs with Billing reports | Baseline cost exploration |
| 4 | `ZyMO9XabUUM` | Exporting your billing data and creating custom dashboards | BigQuery billing export |
| 5 | `ikLMaRy-HWE` | Understanding your GCP invoice | Invoice reconciliation |
| 6 | `F4omjjMZ54k` | Creating budgets and alerts for cost management | Budget notifications/workflows |
| 7 | `xVW1m-uBWAM` | Understanding and analyzing your committed use discounts | Commitment tradeoffs |
| 8 | `7naCIxIaV1M` | Autoscaling with GKE: Overview and pods | Workload-demand scaling |
| 9 | `VNAWA6NkoBs` | Autoscaling with GKE: Clusters and nodes | Infrastructure-supply scaling |
| 10 | `lPSdlTIJ00c` | Monitoring for efficient cluster binpacking in GKE | Idle-capacity efficiency |
| 11 | `3bbVOp4y3MI` | Monitoring for app right-sizing in GKE | Requests versus observed use |

Review notes:

- Treat all 2019–2021 UI, pricing, billing-policy, and GKE details as historical.
- Explain that budgets alert rather than guaranteeing a hard spend cap.
- Exclude account/settings creation, quota-as-spend-control framing, dated advanced-budget steps, and redundant broad GKE monitoring episodes.

## Architecting with Google Cloud

The 10-item order minimizes vendor dependence while representing hyperscale, service boundaries, ingestion, analytics migration, real-time ML, regulated ML, and security. Every item remains a case study requiring precise speaker and affiliation attribution.

| # | Video ID | Exact title | Role |
| ---: | --- | --- | --- |
| 1 | `kGUOGr37Yg4` | How Google Photos scales to store 4 trillion photos and videos | First-party global storage/reliability |
| 2 | `DY2AR8Wzg3Y` | How does Uber scale to millions of concurrent requests? | Concurrency and platform rearchitecture |
| 3 | `YG7GXjZ8En4` | How does Pokémon Go scale to millions of requests? | Bursty global transactional/analytics paths |
| 4 | `YxNRkw8Msdw` | How to create a microservice architecture with Google Cloud | Service boundaries and integration |
| 5 | `xg_Z0rVftPs` | How to build a Video Intelligence Platform on Google Cloud | Edge/media ingestion and ML |
| 6 | `Pym8Evbf7Ak` | How Twitter maximizes performance with BigQuery | Large analytical estates |
| 7 | `lc68XluDeH4` | How to migrate a data warehouse to BigQuery | Migration sequencing and validation |
| 8 | `Hc5xAK0cWgA` | How to build an AI-powered mobile ad platform | Low-latency decisioning and feedback loops |
| 9 | `QjMl9lgcOU0` | How to architect an AI/ML powered Healthcare platform on Google Cloud | Regulated-domain data and ML |
| 10 | `-4Ci-zs2bwE` | How to protect your company from cyberattacks | Security architecture and response |

Review notes:

- Extract transferable architecture patterns rather than endorsing the featured organization or partner.
- Exclude product-led Neo4j, Chronosphere, Apollo GraphQL, NetApp, Citrix, and itopia episodes.
- Revalidate the fast-aging AI examples, healthcare/compliance claims, and the Palo Alto-dependent security episode before publication.

## Cross-collection gates

- Strict English-caption capture must succeed for every approved item before backfill continues.
- Preserve historical product names in source titles, but normalize current taxonomy and add explicit freshness notes.
- Keep `security` conditional at item/resource level except for the dedicated security collections.
- Selection approval, source-summary review, playlist-overview review, and public publication remain separate gates.
