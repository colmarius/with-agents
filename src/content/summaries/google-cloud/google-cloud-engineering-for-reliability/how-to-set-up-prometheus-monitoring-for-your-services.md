---
title: "How to set up Prometheus monitoring for your services"
resourceId: 63
date: "2022-03-30"
collection: "google-cloud-engineering-for-reliability"
order: 1
videoId: "qyfOE_78nT0"
---

Yuri, identified in the transcript as an SRE at Google, demonstrates one Python service instrumented for Google Managed Service for Prometheus. The application exposes request, failure, and latency metrics; managed collection scrapes them; and a PromQL query verifies ingestion before the data is used in charts or alerts ([00:00:00]-[00:03:11]).

### Key Points Covered

- **Application signals complement infrastructure metrics**: The sample adds counters and a latency distribution for service behavior that infrastructure telemetry alone cannot explain ([00:00:00]-[00:01:03]).
- **Collection starts at an explicit endpoint**: The application exposes a Prometheus `/metrics` endpoint, while a `PodMonitoring` resource selects pods and defines how the collector should scrape it ([00:01:03]-[00:03:11]).
- **Verify the path end to end**: The walkthrough checks collector self-metrics and then queries the application metric before relying on Metrics Explorer, dashboards, or alerts ([00:02:06]-[00:03:11]).
- **The example is deliberately bounded**: It does not address cardinality, retention, cost, authentication, or alert thresholds, and the auto-captioned port number may be wrong.

This is a 2022 walkthrough, not current configuration guidance. Verify today's commands, managed-collection behavior, resource schema, metric conventions, and console UI before use.

Full video: <https://www.youtube.com/watch?v=qyfOE_78nT0>
