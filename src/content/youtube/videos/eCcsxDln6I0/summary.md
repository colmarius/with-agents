---
title: "Defining SLIs with custom metrics"
videoId: eCcsxDln6I0
sourceUrl: "https://www.youtube.com/watch?v=eCcsxDln6I0"
publishedAt: "2021-06-09T15:00:18Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter demonstrates defining SLIs and SLOs from application-specific metrics, contrasting Prometheus scraping with direct export through OpenCensus. Neither the title nor transcript identifies the presenter or an affiliation.

Custom telemetry and distribution-cut SLI design remain durable, but the 2021 Prometheus deployment patches, Cloud Monitoring integration, and OpenCensus examples are dated. OpenCensus is a legacy path; verify current OpenTelemetry and Google Cloud guidance before implementation.

## Key Ideas

- [00:00:00] Custom metrics fill gaps when platform metrics cannot represent application-specific transactions or user outcomes.
- [00:01:02] Prometheus collects counters and histograms by scraping an application's metrics endpoint.
- [00:02:04] In the 2021 example, a collector added to the Prometheus server sends scraped metrics to Cloud Monitoring; a latency histogram then supports a distribution-cut SLI for the percentage of responses within a threshold range.
- [00:03:08]-[00:04:11] The separate, now-legacy OpenCensus example configures a Cloud Monitoring exporter, then defines measures, views, aggregation, and histogram buckets before recording values. It does not use Prometheus scraping.
- [00:03:08] The presenter advises placing bucket boundaries on both sides of the SLO threshold and adding further buckets for analysis such as p99 latency.

## Practical Implications

Choose metrics that represent user-relevant outcomes, and design histogram buckets around both the SLO boundary and diagnostic needs. Do not treat OpenCensus as current implementation advice: it is legacy, and the video's 2021 Prometheus-to-Cloud-Monitoring collector setup is also version-specific. Verify current OpenTelemetry, Prometheus, GKE, and Google Cloud guidance.

## Questions and Tensions

Prometheus offers an open ecosystem but introduces collection infrastructure; direct exporters reduce that infrastructure while increasing coupling to an export path. Custom metrics are only useful SLIs when their semantics remain stable and tied to user experience.

## Source

https://www.youtube.com/watch?v=eCcsxDln6I0

[transcript.md](./transcript.md)
