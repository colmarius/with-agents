---
title: "Creating custom metrics with OpenTelemetry"
videoId: SCNObWlILqk
sourceUrl: "https://www.youtube.com/watch?v=SCNObWlILqk"
publishedAt: "2022-05-25T17:00:14Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Yuri, identified in the transcript as an SRE at Google Cloud, shows how a Python service can emit custom health metrics through OpenTelemetry. Counters record requests and errors, while a histogram records processing latency; Cloud Monitoring performs the displayed ratio and latency analysis after collection and export.

The APIs, collector deployment, GKE configuration, and Cloud Monitoring interface shown are from 2022 and may be dated; users should verify current OpenTelemetry and Google Cloud documentation.

## Key Ideas

- [00:00:00] Traffic, saturation, errors, and latency are foundational signals for understanding service health.
- [00:01:03] The application configures an exporter to send metrics to an OpenTelemetry Collector and defines a meter provider with service information, then records request and error counters plus a processing-latency histogram.
- [00:02:04] A separately deployed OpenTelemetry Collector receives the instrumented application's telemetry and forwards it to Cloud Monitoring; in this example it runs in the same GKE namespace as the three application replicas.
- [00:03:10] In the shown Cloud Monitoring interface, request and failure metrics are combined into an error-rate ratio, and the histogram is displayed as a heat map that the presenter says calculates average and tail latencies.

## Practical Implications

Instrument the signals needed for operational decisions and include service information suitable for querying. Keep the boundaries clear: the application records telemetry, the Collector receives and forwards it, and Cloud Monitoring queries and visualizes the exported metrics in this example. Validate current SDK, Collector, backend, and deployment configuration rather than copying the 2022 YAML or UI steps.

## Questions and Tensions

Custom metrics provide application-specific visibility but create naming, cardinality, cost, and lifecycle obligations. Histograms also require deliberate bucket and aggregation choices if tail latency is to remain meaningful.

## Source

https://www.youtube.com/watch?v=SCNObWlILqk

[transcript.md](./transcript.md)
