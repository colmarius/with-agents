---
title: "Exporting your billing data and creating custom dashboards"
videoId: ZyMO9XabUUM
sourceUrl: "https://www.youtube.com/watch?v=ZyMO9XabUUM"
publishedAt: "2019-09-14T16:13:09Z"
sourceLanguage: en
summaryLanguage: en
captionKind: caption
status: draft
---

Mark Mirchandani presents billing export as the data foundation for custom cost analysis: retain detailed records early, query them across allocation dimensions, and expose useful views to decision-makers. All Cloud Console paths, billing-administrator requirements, export timing and schema, BigQuery behavior, sample queries, Data Studio tooling, and field names shown are a 2019 snapshot and require current Google Cloud documentation.

## Key Ideas

- The episode recommends enabling detailed billing export early because the export begins collecting after enablement rather than reconstructing all prior detail. This retention behavior must be confirmed in current docs. [00:00:00]-[00:00:47]
- Its historical setup sends billing data to a BigQuery dataset, favors the richer dataset over file exports, and notes that the storage and analysis pipeline can create its own cost. [00:00:47]-[00:01:36]
- A dedicated project or dataset can isolate the cost-management data plane, but the exact project, dataset, permission, and export design requires current IAM and billing guidance. [00:01:36]
- Queryable dimensions such as location, project, and labels turn raw billing records into allocation and trend analysis. The current export schema must be verified before implementing queries. [00:02:26]
- The 2019 Data Studio walkthrough connects BigQuery to reusable and custom dashboards so teams can explore cost by service and label. Current tooling and connector fields require current docs. [00:03:14]-[00:04:06]

## Practical Implications

- Treat cost data retention as infrastructure: establish it before an investigation needs history, assign an owner, and monitor its completeness and cost.
- Keep raw billing data, governed allocation dimensions, analytical queries, and stakeholder dashboards as separate layers with explicit contracts.
- Use dashboards to support decisions, not as a substitute for durable naming, labels, ownership, and data-quality checks.

## Questions and Tensions

- Early export improves historical analysis, but it introduces data access, privacy, schema-evolution, retention, and pipeline-cost responsibilities.
- None of the 2019 console, IAM, export-schema, query, connector, or Data Studio instructions should be treated as current without documentation review.

## Source

- [Video](https://www.youtube.com/watch?v=ZyMO9XabUUM)
- [transcript.md](./transcript.md)
