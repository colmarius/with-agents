---
title: "How to find cloud logs and manage logging costs"
videoId: z6hpL8J-jG4
sourceUrl: "https://www.youtube.com/watch?v=z6hpL8J-jG4"
publishedAt: "2021-12-15T16:00:37Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter demonstrates querying and sampling Cloud Logging data, then connects logging cost to ingestion, retention, routing, exclusions, and application log volume. The cost-versus-observability trade-off remains durable, but the 2021 pricing statements, product behavior, console paths, retention defaults, and exclusion semantics require current verification.

## Key Ideas

- [00:00:00] Advanced log queries can constrain entries by source, service, time, metadata, user-defined fields, and sampling.
- [00:01:02] Logs Explorer turns field selections into editable queries that can be negated, time-bounded, sampled, and saved.
- [00:03:08] Billing reports and ingestion metrics provide complementary views of logging charges and the resources producing volume.
- [00:04:11] Retention choices, archival destinations, and sink exclusions can reduce storage or ingestion cost.
- [00:05:15] Application log levels and platform exclusions should be balanced against debugging, Error Reporting, and other observability needs.

## Practical Implications

Pair cost reports with volume attribution before reducing logs. Prefer intentional application-side volume control and narrowly scoped routing rules, while preserving the data required for incident response and reliability analysis.

## Questions and Tensions

Exclusions can remove evidence from Logs Explorer and Error Reporting, making savings a reliability trade-off rather than a purely financial optimization. Current pricing and whether excluded entries contribute to log-based metrics must be checked before applying the procedure.

## Source

https://www.youtube.com/watch?v=z6hpL8J-jG4

[transcript.md](./transcript.md)
