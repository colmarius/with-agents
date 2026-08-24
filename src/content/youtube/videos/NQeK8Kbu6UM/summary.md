---
title: "Distributed tracing with OpenTelemetry and Cloud Trace"
videoId: NQeK8Kbu6UM
sourceUrl: "https://www.youtube.com/watch?v=NQeK8Kbu6UM"
publishedAt: "2021-08-11T15:00:22Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter explains how distributed traces separate end-to-end request latency from the time spent in individual services. Neither the title nor transcript identifies the presenter or an affiliation.

The core OpenTelemetry model of traces, parent and child spans, and propagated context remains durable. The Cloud Trace screens and instrumentation setup shown in 2021 are dated, so verify current exporters, SDK APIs, and console navigation.

## Key Ideas

- [00:00:00] Distributed tracing captures how requests traverse services and attributes latency along that path.
- [00:01:02] A trace contains spans: a parent can represent user-visible latency while child spans represent downstream service calls.
- [00:02:04] Propagating context in HTTP headers lets a backend append spans to the same trace.
- [00:03:07] A waterfall view makes large latency contributors visible, while span events and details add diagnostic context.

## Practical Implications

Instrument service boundaries consistently, propagate trace context, and add spans around operations whose latency matters. Use OpenTelemetry as the portable instrumentation layer, but check current Cloud Trace exporter and SDK guidance before implementing the sample approach.

## Questions and Tensions

More spans and annotations improve diagnosis but add telemetry volume and instrumentation overhead. Useful traces also depend on correct context propagation across every relevant boundary.

## Source

https://www.youtube.com/watch?v=NQeK8Kbu6UM

[transcript.md](./transcript.md)
