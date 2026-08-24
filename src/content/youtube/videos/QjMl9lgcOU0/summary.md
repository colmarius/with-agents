---
title: "How to architect an AI/ML powered Healthcare platform on Google Cloud"
videoId: QjMl9lgcOU0
sourceUrl: "https://www.youtube.com/watch?v=QjMl9lgcOU0"
publishedAt: "2021-09-04T16:00:10Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Priyanka interviews Amol, identified in the transcript as vice president of engineering at Vida Health. Amol describes Vida's 2021 consolidation of application, analytics, workspace, and machine-learning workloads on Google Cloud, including provider-assistance concepts and an architecture migration carried out with SADA.

## Key Ideas

- Amol says Vida served individuals, employers, and health plans through mobile and web services. He attributes consolidation to lower cost, reduced developer cognitive load, and data/ML opportunities, and reports an approximately 50% cost reduction at that time. [00:00:00]-[00:03:10]
- Amol describes provider-assistance use cases for automated notes, caseload prioritization, and surfacing care protocols. He says Vidapedia indexed roughly 150–200 protocol documents and matched them to patient-provider interactions. [00:03:10]-[00:07:22]
- Amol says eligibility, claims, device, glucose, consultation, relational, and workspace-derived data landed in BigQuery for analysis and model development; the team had only started exploring Vertex AI for experiments. [00:07:22]-[00:10:31]
- Amol says the team planned to replace custom ETL with dbt and used Cloud Composer for orchestration. He describes the application as a load-balanced, three-tier design using GKE, an API layer, and Cloud SQL for PostgreSQL. [00:10:31]-[00:16:54]
- Amol says migration planning covered data transfer, downtime, Terraform, engineering ownership, and coordinated cutover. He presents Cloud Healthcare API and FHIR storage as future interoperability work rather than completed behavior. [00:16:54]-[00:21:07]

## Practical Implications

- Consolidating data can simplify some engineering paths, but clinical purpose, access, lineage, consent, retention, and isolation still need explicit governance.
- Keep recommendation systems assistive until clinical validation, human oversight, failure handling, and outcome monitoring justify broader authority.
- Treat migration planning and infrastructure ownership as part of the target architecture, not merely a data-transfer task.
- Treat the cost figure, protocol count, data flows, service behavior, healthcare architecture, AI/ML uses, and security controls as a 2021 customer account. Verify current documentation and require domain-specific healthcare, privacy, compliance, clinical-safety, interoperability, data-governance, model-risk, and security review.

## Questions and Tensions

- The episode does not provide evidence for clinical effectiveness, recommendation accuracy, bias, patient consent, auditability, or how incorrect suggestions are contained.
- The claim that provider controls substantially absorb security risk is incomplete; secure configuration and regulated-data obligations remain with the operator.
- The episode presents Amol's customer account alongside Google Cloud's framing, and SADA participated in the migration; its product praise and savings claims are attributed speaker evidence, not an independent comparison, endorsement, or universal design.

## Source

- [Video](https://www.youtube.com/watch?v=QjMl9lgcOU0)
- [transcript.md](./transcript.md)
