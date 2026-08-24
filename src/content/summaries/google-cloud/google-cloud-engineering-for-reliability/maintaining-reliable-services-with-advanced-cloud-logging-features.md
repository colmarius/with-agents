---
title: "Maintaining reliable services with advanced Cloud Logging features"
resourceId: 63
date: "2021-09-08"
collection: "google-cloud-engineering-for-reliability"
order: 12
videoId: "M2bQxpyBpH0"
---

This episode shows how logs can become notifications, metrics, and grouped application-error evidence. The durable pattern is to derive focused reliability signals from structured records while preserving links back to the source events. The transcript identifies neither the presenter nor an affiliation.

### Key Points Covered

- **Log queries can become alerts**: The example notifies operators when audit logs show an IAM policy change ([00:00:00]).
- **Logs can supply metric inputs**: Counter metrics count matching entries, while distribution metrics extract numeric payload values for charts and alert conditions ([00:02:06]-[00:03:09]).
- **Error grouping accelerates triage**: Error Reporting connects frequency, stack traces, samples, resource context, and source logs ([00:04:13]).
- **Derived signals need controls**: Noisy filters and high-cardinality labels can increase cost and alert fatigue, while automatic grouping still needs validation.

The query syntax, metric limits and pricing, recognizable error formats, APIs, integrations, schemas, and UI are from 2021. Verify current behavior before implementing these examples.

Full video: <https://www.youtube.com/watch?v=M2bQxpyBpH0>
