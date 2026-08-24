---
title: "Defining SLIs with platform metrics"
videoId: uhpAScSerec
sourceUrl: "https://www.youtube.com/watch?v=uhpAScSerec"
publishedAt: "2021-06-02T15:00:34Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter explains how existing Google Cloud platform and logs-based metrics can supply service-level indicators for request-serving applications and data pipelines. The durable lesson is to select metrics that represent user-visible success, then express them as request-based or window-based ratios before setting an SLO.

The console screens, API shapes, product names, and configuration steps shown are from 2021 and may have changed; users should verify current Google Cloud documentation and interfaces.

## Key Ideas

- [00:00:00] Request-based SLIs divide good work by total work, while window-based SLIs measure the fraction of intervals that meet a reliability threshold.
- [00:02:06]-[00:04:11] Load-balancer request counts can support an availability SLI, but teams must deliberately decide whether client-error responses belong in the denominator and choose an evaluation window that makes error budgets useful.
- [00:05:13]-[00:06:17] A Dataflow freshness SLI can evaluate average system lag over short windows when per-element good-versus-total counting is unavailable.
- [00:07:19]-[00:08:22] Logs-based metrics can turn structured request status data into good and total event counts for a custom availability SLI.

## Practical Implications

Start from the user experience and inspect available platform telemetry before adding custom instrumentation. Validate filters and thresholds against historical behavior, and treat the exact 2021 setup workflow as illustrative rather than current operating instructions.

## Questions and Tensions

Convenient platform metrics reduce instrumentation work, but their labels and aggregation semantics may not match what users consider success. Excluding client errors, selecting window size, and choosing a target all require explicit product and reliability judgment.

## Source

https://www.youtube.com/watch?v=uhpAScSerec

[transcript.md](./transcript.md)
