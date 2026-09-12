---
title: How to migrate a data warehouse to BigQuery
resourceId: 68
date: 2021-11-20
collection: google-cloud-architecting
order: 7
videoId: lc68XluDeH4
---

Moving a data warehouse means preserving the reports and applications that depend on it, not just copying tables. Gary Moriali, a health insurer's data services director, describes an in-progress 2021 move to BigQuery that kept the old and new systems running together while the team compared their data.

### Key Points Covered

- **Assess everything that reads and writes the warehouse.** Moriali says the team and a Google business partner inventoried consuming applications and inbound and outbound processes, rather than treating the database as an isolated migration. Networking and data-center connections came before data transfer. [02:06–03:09](https://www.youtube.com/watch?v=lc68XluDeH4&t=126s)
- **Move data through checks and staged layers.** Files first landed in Cloud Storage. Dataflow performed quality checks, Cloud Composer scheduled the work, and BigQuery separated staging, core data, and the information layer exposed to users. [02:06–04:11](https://www.youtube.com/watch?v=lc68XluDeH4&t=126s)
- **Compare before redirecting consumers.** A comparison tool running on Google Kubernetes Engine checked the old and new systems during coexistence. The intended result was for reporting tools and applications to point at BigQuery and continue their existing work; the interview does not report a completed cutover. [03:09–05:14](https://www.youtube.com/watch?v=lc68XluDeH4&t=189s)
- **The destination also supports ongoing ingestion and modeling.** Provider, member, and partner data entered through secure file transfers and APIs, then Dataproc loaded it into BigQuery. Data scientists used Jupyter notebooks and Vertex AI Pipelines, adding resources such as GPUs when needed rather than being limited to fixed on-premises hardware. [04:11–06:19](https://www.youtube.com/watch?v=lc68XluDeH4&t=251s)

Full video: <https://www.youtube.com/watch?v=lc68XluDeH4>
