---
title: "How to find cloud logs and manage logging costs"
videoId: z6hpL8J-jG4
sourceUrl: "https://www.youtube.com/watch?v=z6hpL8J-jG4"
publishedAt: "2021-12-15T16:00:37Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter demonstrates querying and sampling Cloud Logging data, then connects logging cost to ingestion, retention, routing, exclusions, and application log volume. The transcript establishes no speaker name or affiliation. The cost-versus-observability trade-off remains durable, but all 2021 pricing statements, product behavior, console paths, retention defaults, and exclusion semantics require current verification.

## Key Ideas

- [00:00:00] Advanced log queries can constrain entries by source, service, time, metadata, user-defined fields, and sampling.
- [00:01:02] Logs Explorer turns field selections into editable queries that can be negated, time-bounded, sampled, and saved.
- [00:03:08] Billing reports and ingestion metrics provide complementary views of logging charges and the resources producing volume.
- [00:04:11] The presenter says default-period storage was then uncharged, suggests Cloud Storage or BigQuery for longer-lived use cases, and identifies sink exclusions as the primary demonstrated mechanism for reducing ingestion costs; each statement is specific to the 2021 product and pricing context.
- [00:05:15] In the behavior described in 2021, excluded entries disappear from Logs Explorer and Cloud Debugger, entries routed to no log bucket are excluded from Error Reporting, and user-defined log-based metrics still use included and excluded entries.

## Practical Implications

Pair cost reports with volume attribution before reducing logs. Prefer intentional application-side volume control and narrowly scoped routing rules, while preserving the data required for incident response and reliability analysis.

## Questions and Tensions

Exclusions can remove evidence from Logs Explorer, Cloud Debugger, and—when entries reach no log bucket—Error Reporting, making savings a reliability trade-off rather than a purely financial optimization. The statement that user-defined log-based metrics included excluded entries describes 2021 behavior and must be revalidated, along with pricing and routing semantics; auto-captioned UI and query details may also be imperfect.

## Source

https://www.youtube.com/watch?v=z6hpL8J-jG4

[transcript.md](./transcript.md)
