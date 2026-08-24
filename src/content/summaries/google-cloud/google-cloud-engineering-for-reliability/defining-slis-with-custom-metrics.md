---
title: "Defining SLIs with custom metrics"
resourceId: 63
date: "2021-06-09"
collection: "google-cloud-engineering-for-reliability"
order: 18
videoId: "eCcsxDln6I0"
---

This episode demonstrates SLIs and SLOs built from application-specific metrics, contrasting Prometheus scraping with direct export through OpenCensus. The transcript identifies neither the presenter nor an affiliation. OpenCensus is now legacy; preserve the metric-design lesson but use current OpenTelemetry guidance for implementation.

### Key Points Covered

- **Custom metrics fill semantic gaps**: They can represent transactions or user outcomes unavailable in platform telemetry ([00:00:00]).
- **Prometheus and direct export are distinct paths**: One example scrapes counters and histograms and forwards them through a collector; the OpenCensus example configures a direct exporter and does not use scraping ([00:01:02]-[00:04:11]).
- **Histogram design shapes the SLI**: Bucket boundaries should surround the SLO threshold and retain additional ranges for analyses such as tail latency ([00:02:04]-[00:03:08]).
- **Collection choices create trade-offs**: Prometheus introduces collection infrastructure; direct export couples the application to an export path.

The 2021 Prometheus patches, collector configuration, APIs, schemas, Cloud Monitoring integration, and OpenCensus code are historical. Verify current OpenTelemetry, Prometheus, GKE, and backend guidance.

Full video: <https://www.youtube.com/watch?v=eCcsxDln6I0>
