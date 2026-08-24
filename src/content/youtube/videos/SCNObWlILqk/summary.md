---
title: "Creating custom metrics with OpenTelemetry"
videoId: SCNObWlILqk
sourceUrl: "https://www.youtube.com/watch?v=SCNObWlILqk"
publishedAt: "2022-05-25T17:00:14Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Yuri, identified in the transcript as an SRE at Google Cloud, shows how a Python service can emit custom health metrics through OpenTelemetry. Counters represent requests and errors, while a histogram captures latency for aggregation and tail analysis.

The APIs, collector deployment, GKE configuration, and Cloud Monitoring interface shown are from 2022 and may be dated; users should verify current OpenTelemetry and Google Cloud documentation.

## Key Ideas

- [00:00:00] Traffic, saturation, errors, and latency are foundational signals for understanding service health.
- [00:01:03] The example configures an OpenTelemetry exporter and meter provider, then records request and error counters plus a latency histogram.
- [00:02:04] An OpenTelemetry Collector receives application telemetry and forwards it to Cloud Monitoring alongside a GKE deployment.
- [00:03:10] Request and failure metrics can be combined into an error-rate ratio, while histogram data supports average and tail-latency analysis.

## Practical Implications

Instrument the few signals needed for operational decisions, attach stable service identity, and choose metric instruments that match the data. Validate current SDK, Collector, backend, and deployment configuration rather than copying the 2022 YAML or UI steps.

## Questions and Tensions

Custom metrics provide application-specific visibility but create naming, cardinality, cost, and lifecycle obligations. Histograms also require deliberate bucket and aggregation choices if tail latency is to remain meaningful.

## Source

https://www.youtube.com/watch?v=SCNObWlILqk

[transcript.md](./transcript.md)
