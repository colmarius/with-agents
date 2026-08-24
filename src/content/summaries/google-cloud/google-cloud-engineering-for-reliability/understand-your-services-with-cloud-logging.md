---
title: "Understand your services with Cloud Logging"
resourceId: 63
date: "2021-08-25"
collection: "google-cloud-engineering-for-reliability"
order: 13
videoId: "IlUCyV8mcS0"
---

This episode introduces Cloud Logging as the investigation layer used after metrics or traces reveal a service problem. It follows log evidence through ingestion, routing, storage, access, queries, and near-real-time inspection. The transcript identifies neither the presenter nor an affiliation.

### Key Points Covered

- **A log entry combines event and context**: Timestamp, payload, monitored resource, log name, and severity make a record useful for investigation ([00:00:00]).
- **Routing determines where evidence survives**: Log Router sinks apply inclusion and exclusion filters before data reaches destinations and indexed log buckets ([00:01:01]-[00:03:07]).
- **Views constrain access within storage**: Log views provide a finer boundary inside buckets, supporting centralized data without universal visibility ([00:02:05]-[00:03:07]).
- **Queries connect symptoms to resources**: Logs Explorer can narrow GKE resource, container, severity, payload, and metadata before streaming relevant entries ([00:04:11]-[00:05:13]).

The 2021 names, CLI commands, routing and exclusion semantics, schemas, retention defaults, and UI paths may have changed. Revalidate them, especially before excluding evidence needed later.

Full video: <https://www.youtube.com/watch?v=IlUCyV8mcS0>
