---
title: "How to find cloud logs and manage logging costs"
resourceId: 63
date: "2021-12-15"
collection: "google-cloud-engineering-for-reliability"
order: 5
videoId: "z6hpL8J-jG4"
---

This episode demonstrates querying and sampling Cloud Logging data, then traces cost to ingestion, retention, routing, exclusions, and application log volume. The transcript identifies neither the presenter nor an affiliation.

### Key Points Covered

- **Queries narrow the evidence**: Logs Explorer can filter source, service, time, metadata, user-defined fields, and samples, then save the resulting query ([00:00:00]-[00:01:02]).
- **Use cost and volume views together**: Billing reports show charges, while ingestion metrics help locate the resources producing log volume ([00:03:08]).
- **Exclusions exchange cost for evidence**: In the behavior described, excluded entries disappear from Logs Explorer and Cloud Debugger, and entries reaching no log bucket are unavailable to Error Reporting ([00:04:11]-[00:05:15]).
- **Reduce volume deliberately**: Application-side controls and narrowly scoped routing can lower ingestion, but retained data must still support incident response and reliability analysis.

The pricing, default retention, routing semantics, exclusion behavior, user-defined metric behavior, queries, and UI are all from 2021 and may have changed. Revalidate them before trading away operational evidence.

Full video: <https://www.youtube.com/watch?v=z6hpL8J-jG4>
