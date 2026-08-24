---
title: "How to set up Prometheus monitoring for your services"
videoId: qyfOE_78nT0
sourceUrl: "https://www.youtube.com/watch?v=qyfOE_78nT0"
publishedAt: "2022-03-30T17:00:35Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Yuri, identified in the transcript as an SRE at Google, demonstrates application instrumentation and collection with Google Managed Service for Prometheus. The durable pattern is to expose meaningful application metrics, configure a scraper, and verify ingestion before building dashboards or alerts; the 2022 commands, resource configuration, and console UI should be checked against current documentation.

## Key Ideas

- [00:00:00] Infrastructure metrics are not enough: production services also need application signals such as request errors and latency.
- [00:01:03] A service can expose counters and a latency distribution through a Prometheus `/metrics` endpoint.
- [00:02:06] Collection setup includes installing the managed collector, validating its own metrics, and defining which pods and endpoints to scrape.
- [00:03:11] Querying the application metric confirms ingestion before it is used in Metrics Explorer, dashboards, or alerts.

## Practical Implications

Design metrics around service behavior, verify the endpoint locally, then verify end-to-end ingestion. Treat the demonstrated 2022 installation commands and `PodMonitoring` details as dated and confirm current Google Cloud requirements.

## Questions and Tensions

The walkthrough does not address metric cardinality, retention, cost, authentication, or alert thresholds. The captioned port number is also uncertain, so implementers should rely on their deployment configuration rather than the transcript.

## Source

https://www.youtube.com/watch?v=qyfOE_78nT0

[transcript.md](./transcript.md)
