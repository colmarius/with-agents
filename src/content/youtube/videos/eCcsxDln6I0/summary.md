---
title: "Defining SLIs with custom metrics"
videoId: eCcsxDln6I0
sourceUrl: "https://www.youtube.com/watch?v=eCcsxDln6I0"
publishedAt: "2021-06-09T15:00:18Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter demonstrates defining SLIs and SLOs from application-specific metrics, contrasting Prometheus scraping with direct export through OpenCensus. Neither the title nor transcript identifies the presenter or an affiliation.

Custom telemetry and distribution-cut SLI design remain durable, but the 2021 Prometheus deployment patches, Cloud Monitoring integration, and OpenCensus examples are dated. OpenCensus is a legacy path; verify current OpenTelemetry and Google Cloud guidance before implementation.

## Key Ideas

- [00:00:00] Custom metrics fill gaps when platform metrics cannot represent application-specific transactions or user outcomes.
- [00:01:02] Prometheus collects counters and histograms by scraping an application's metrics endpoint.
- [00:02:04] Ingested latency histograms can support a distribution-cut SLI, such as the percentage of responses below a threshold over an SLO window.
- [00:03:08] The OpenCensus example defines measures, views, aggregation, and histogram buckets before exporting directly to Cloud Monitoring.
- [00:04:11] Bucket boundaries must distinguish values inside and outside the SLO threshold while retaining enough resolution for broader latency analysis.

## Practical Implications

Choose metrics that represent user-relevant outcomes, and design histogram buckets around both the SLO boundary and diagnostic needs. Prefer current supported telemetry libraries and managed ingestion patterns rather than copying the video's dated OpenCensus and Prometheus configuration verbatim.

## Questions and Tensions

Prometheus offers an open ecosystem but introduces collection infrastructure; direct exporters reduce that infrastructure while increasing coupling to an export path. Custom metrics are only useful SLIs when their semantics remain stable and tied to user experience.

## Source

https://www.youtube.com/watch?v=eCcsxDln6I0

[transcript.md](./transcript.md)
