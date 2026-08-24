---
title: "How to set up Prometheus monitoring for your services"
videoId: qyfOE_78nT0
sourceUrl: "https://www.youtube.com/watch?v=qyfOE_78nT0"
publishedAt: "2022-03-30T17:00:35Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Yuri, identified in the auto-generated transcript as an SRE at Google, demonstrates application instrumentation and collection with Google Managed Service for Prometheus. The durable pattern is to expose application metrics, configure collection, and verify ingestion before using the data in dashboards or alerts; the 2022 commands, managed-collection behavior, resource configuration, and console UI should be checked against current documentation.

## Key Ideas

- [00:00:00] Infrastructure metrics are not enough: production services also need application signals such as request errors and latency.
- [00:01:03] The Python example defines total-request and failed-request counters plus a latency distribution, then exposes them through a Prometheus `/metrics` endpoint.
- [00:02:06] The demonstrated setup installs managed collection, validates collector self-metrics, and creates a `PodMonitoring` resource selecting pods and a scrape endpoint.
- [00:03:11] Querying the application metric confirms ingestion before it is used in Metrics Explorer, dashboards, or alerts.

## Practical Implications

Design metrics around service behavior, verify the endpoint locally, then verify end-to-end ingestion. Treat the demonstrated 2022 installation commands and `PodMonitoring` details as dated and confirm current Google Cloud requirements.

## Questions and Tensions

The walkthrough does not address metric cardinality, retention, cost, authentication, or alert thresholds. The auto-captioned port number (“880”) may be inaccurate, so implementers should rely on the deployment configuration and current documentation rather than that caption detail.

## Source

https://www.youtube.com/watch?v=qyfOE_78nT0

[transcript.md](./transcript.md)
