---
title: "How to migrate a data warehouse to BigQuery"
videoId: lc68XluDeH4
sourceUrl: "https://www.youtube.com/watch?v=lc68XluDeH4"
publishedAt: "2021-11-20T17:00:23Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Priyanka Vergadia interviews Gary Moriali, identified as the director of a health insurer's data services team; the organization is not named in the transcript. He outlines an in-progress 2021 warehouse migration built around dependency assessment, cloud foundations, staged data movement, old-versus-new comparison, and eventual repointing of downstream consumers.

## Key Ideas

- Before implementation, the organization and its partner assessed the warehouse, consuming applications, and every inbound and outbound process to define the migration surface. [00:01:03]-[00:02:06]
- Networking, cloud environments, and data-center connections were established before moving data through object storage, Dataflow quality checks, Composer orchestration, and staged BigQuery layers. [00:02:06]-[00:03:09]
- Because the old and new systems had to coexist, a comparison tool running on GKE checked outputs while SQL Server Reporting Services, Tableau, custom applications, and third-party consumers prepared to repoint. [00:03:09]-[00:04:11]
- Ongoing ingestion included secure file transfer and APIs from providers, members, partners, and government entities, while data scientists explored notebooks, elastic compute, and AI pipelines over the cloud warehouse. [00:04:11]-[00:06:19]

## Practical Implications

- Inventory producers, transformations, consumers, and operational dependencies before choosing a data-movement sequence.
- Build identity, networking, security, and hybrid connectivity foundations before transferring production data.
- Compare old and new outputs during coexistence and preserve consumer contracts until equivalence is established.
- Treat product behavior, the migration design, healthcare uses, and AI capabilities as a 2021 snapshot. Current service documentation plus healthcare, privacy, security, data-governance, and model-risk review are required before applying it.

## Questions and Tensions

- The migration was still underway, so the episode offers no completed cutover results, reconciliation thresholds, rollback account, cost comparison, or post-migration reliability evidence.
- It does not explain how protected health information, consent, retention, lineage, access, regional requirements, or model validation are governed.
- The Google-and-partner framing is promotional and should not substitute for a workload-specific platform evaluation.

## Source

- [Video](https://www.youtube.com/watch?v=lc68XluDeH4)
- [transcript.md](./transcript.md)
