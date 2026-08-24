---
title: How to migrate a data warehouse to BigQuery
resourceId: 68
date: 2021-11-20
collection: google-cloud-architecting
order: 7
videoId: lc68XluDeH4
---

Gary Moriali, introduced as a director on an unnamed health insurer's data services team, describes an in-progress 2021 warehouse migration rather than a completed cutover.

### Key Points Covered

- Moriali says the insurer and a Google business partner assessed warehouse and application dependencies first. [00:02:06]-[00:03:09]
- Networking and cloud foundations preceded staged movement through Cloud Storage, Dataflow, Composer, and BigQuery. [00:02:06]-[00:04:11]
- A GKE comparison tool checked old and new systems before downstream consumers would be repointed. [00:03:09]-[00:05:14]
- Healthcare-source ingestion and Vertex AI data-science workflows were part of the described design. [00:04:11]-[00:06:19]
- This incomplete 2021 migration is not a reusable reference design; verify current documentation and workload equivalence, and require healthcare, privacy, compliance, security, governance, and model-risk review.

Full video: <https://www.youtube.com/watch?v=lc68XluDeH4>
