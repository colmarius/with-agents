---
title: "How to architect an AI/ML powered Healthcare platform on Google Cloud"
videoId: QjMl9lgcOU0
sourceUrl: "https://www.youtube.com/watch?v=QjMl9lgcOU0"
publishedAt: "2021-09-04T16:00:10Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Priyanka Vergadia interviews Amol, identified as vice president of engineering at Vida Health. He describes Vida's 2021 consolidation of application, analytics, workspace, and machine-learning data on Google Cloud, including provider-assistance concepts and an architecture migration completed with implementation partner SADA.

## Key Ideas

- Vida connected mobile and web services for individuals, employers, and health plans; Amol attributes consolidation to cost, developer-focus, and data/ML opportunities, reporting a point-in-time cost reduction. [00:00:00]-[00:03:10]
- Proposed provider-assistance use cases included note-taking, caseload prioritization, and surfacing relevant clinical protocols, with Vidapedia indexing protocol documents and matching them to patient-provider interactions. [00:03:10]-[00:07:22]
- Eligibility, claims, device, glucose, consultation, relational, and workspace-derived data flowed into BigQuery for BI and model development, while Vertex AI was being explored for experimentation. [00:07:22]-[00:10:31]
- The team was replacing custom ETL with dbt and using Cloud Composer for orchestration; the application itself used load balancing, GKE services, an API tier, and managed PostgreSQL. [00:10:31]-[00:16:54]
- Migration planning covered data transfer, downtime, infrastructure-as-code, deployment ownership, and cutover coordination; Healthcare API and FHIR support were described as future interoperability work, not completed behavior. [00:16:54]-[00:21:07]

## Practical Implications

- Consolidating data can simplify some engineering paths, but clinical purpose, access, lineage, consent, retention, and isolation still need explicit governance.
- Keep recommendation systems assistive until clinical validation, human oversight, failure handling, and outcome monitoring justify broader authority.
- Treat migration planning and infrastructure ownership as part of the target architecture, not merely a data-transfer task.
- Treat all savings, product behavior, healthcare architecture, AI/ML behavior, and security statements as a 2021 customer-story snapshot. Verify current documentation and require healthcare, privacy, compliance, clinical-safety, interoperability, model-risk, and security review.

## Questions and Tensions

- The episode does not provide evidence for clinical effectiveness, recommendation accuracy, bias, patient consent, auditability, or how incorrect suggestions are contained.
- The claim that provider controls substantially absorb security risk is incomplete; secure configuration and regulated-data obligations remain with the operator.
- Google Cloud and SADA participated in the implementation and presentation, so product praise and savings claims are not independent comparisons.

## Source

- [Video](https://www.youtube.com/watch?v=QjMl9lgcOU0)
- [transcript.md](./transcript.md)
