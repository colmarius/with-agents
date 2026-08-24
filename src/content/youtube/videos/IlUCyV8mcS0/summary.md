---
title: "Understand your services with Cloud Logging"
videoId: IlUCyV8mcS0
sourceUrl: "https://www.youtube.com/watch?v=IlUCyV8mcS0"
publishedAt: "2021-08-25T15:00:08Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter introduces Cloud Logging as the layer for investigating service events after metrics or traces reveal a problem. Neither the title nor transcript identifies the presenter or an affiliation.

The durable model is ingestion, routing, storage, access, querying, and live inspection. The demonstrated 2021 console and CLI procedures are dated; verify current product names, commands, and UI paths before following them.

## Key Ideas

- [00:00:00] A log entry records an event with a timestamp, payload, and potentially resource, log-name, and severity metadata.
- [00:01:01] Cloud Logging receives platform, application, infrastructure, and network logs through its API, then applies Log Router sink filters.
- [00:02:05] Sinks can route or exclude entries, while log buckets organize indexed data and log views constrain access.
- [00:04:11] Logs Explorer filters entries by fields such as GKE resource, container, and severity, then exposes payload and metadata for investigation.
- [00:05:13] Streaming supports near-real-time debugging after a query narrows the relevant entries.

## Practical Implications

Design log routing, retention, exclusions, and access controls deliberately rather than treating logging as a single undifferentiated store. Preserve structured context that lets operators move from a service symptom to relevant events, and validate current Cloud Logging interfaces and CLI support before operationalizing the examples.

## Questions and Tensions

Exclusions can control cost but can also remove evidence needed during incidents. Centralizing logs improves cross-service investigation while increasing the importance of granular access controls and retention policy.

## Source

https://www.youtube.com/watch?v=IlUCyV8mcS0

[transcript.md](./transcript.md)
