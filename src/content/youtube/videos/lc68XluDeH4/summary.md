---
title: "How to migrate a data warehouse to BigQuery"
videoId: lc68XluDeH4
sourceUrl: "https://www.youtube.com/watch?v=lc68XluDeH4"
publishedAt: "2021-11-20T17:00:23Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

The host, Priyanka, interviews Gary Moriali, who identifies his team as the data services team at an unnamed health insurer and is introduced as its director. Moriali describes an in-progress 2021 warehouse migration built around dependency assessment, cloud foundations, staged data movement, old-versus-new comparison, and eventual repointing of downstream consumers. These are his account of the organization's design and experience, not independently validated results or a universal migration plan.

## Key Ideas

- Moriali says the organization and a Google business partner assessed the warehouse, consuming applications, and inbound and outbound processes before implementation to define the migration surface. [00:02:06]-[00:03:09]
- He says networking, cloud environments, and data-center connections were established before data moved through Cloud Storage, Dataflow quality checks, Composer orchestration, and staged BigQuery layers. [00:02:06]-[00:04:11]
- During old-and-new coexistence, Moriali describes using a GKE-based comparison tool to check the systems before consumers using SQL Server Reporting Services, Tableau, custom applications, and third-party applications repointed to BigQuery. [00:03:09]-[00:05:14]
- He describes secure file transfer and API ingestion from healthcare providers, members, processing partners, and government entities, followed by Dataproc-based loading; data scientists used Vertex AI Pipelines and Jupyter notebooks and could add resources such as GPUs. [00:04:11]-[00:06:19]

## Practical Implications

- Inventory producers, transformations, consumers, and operational dependencies before choosing a data-movement sequence.
- Build identity, networking, security, and hybrid connectivity foundations before transferring production data.
- Compare old and new outputs during coexistence and preserve consumer contracts until equivalence is established.
- Treat the scale statements, service and product behavior, migration design, healthcare uses, AI/ML capabilities, and described data and security controls as a 2021 snapshot. Check current documentation and conduct domain-specific healthcare, compliance, privacy, security, data-governance, and model-risk review before applying any pattern.

## Questions and Tensions

- The migration was still underway, so the episode offers no completed cutover results, reconciliation thresholds, rollback plan, cost comparison, or post-migration reliability evidence.
- It does not explain how protected health information, consent, retention, lineage, access, regional requirements, or model validation are governed.
- The Google-and-partner framing is promotional and should not substitute for a workload-specific platform evaluation.

## Source

- [Video](https://www.youtube.com/watch?v=lc68XluDeH4)
- [transcript.md](./transcript.md)
