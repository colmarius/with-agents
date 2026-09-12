---
title: How to architect an AI/ML powered Healthcare platform on Google Cloud
resourceId: 68
date: 2021-09-04
collection: google-cloud-architecting
order: 9
videoId: QjMl9lgcOU0
---

Vida Health brings virtual care for multiple conditions into one platform. Vice president of engineering Amol describes how its 2021 cloud consolidation connected patient data and clinical documents to tools that help providers find information and prioritize care.

### Key Points Covered

- **Consolidation reduced the number of environments engineers managed.** Amol attributes an approximately 50% cost reduction and lower deployment and monitoring overhead to bringing the systems together; these are his reported outcomes, not an isolated comparison of cloud providers. [00:00–03:10](https://www.youtube.com/watch?v=QjMl9lgcOU0&t=0s)
- **The recommendation system retrieves clinical protocols for providers.** Vidapedia indexes protocol documents written in Google Workspace and matches them to patient–provider interactions, surfacing relevant guidance during or after a session. Amol also describes automatic note-taking and prioritizing patients by severity as assistance for clinicians, not autonomous treatment. [03:10–07:22](https://www.youtube.com/watch?v=QjMl9lgcOU0&t=190s)
- **BigQuery brings different patient records together for analysis.** Claims and eligibility files, wearable and glucose readings, consultation notes, and relational application data arrive through batch and real-time ingestion. Analysts query that data and data scientists build models over it; Vertex AI was still being explored for experiments. [07:22–10:31](https://www.youtube.com/watch?v=QjMl9lgcOU0&t=442s)
- **Migration and interoperability were at different stages.** Vida had completed the migration with SADA after planning data transfer, downtime, and infrastructure ownership. Using Cloud Healthcare API and FHIR, a healthcare-data exchange standard, remained a plan to make transfers to other providers easier instead of relying on Vida's proprietary formats. [16:54–21:07](https://www.youtube.com/watch?v=QjMl9lgcOU0&t=1014s)

Full video: <https://www.youtube.com/watch?v=QjMl9lgcOU0>
