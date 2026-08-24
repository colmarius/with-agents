---
title: "Best Practices for Cloud Monitoring"
videoId: pcMEFTxcco8
sourceUrl: "https://www.youtube.com/watch?v=pcMEFTxcco8"
publishedAt: "2021-11-17T16:00:24Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter outlines a monitoring strategy centered on user experience, incident response, and cost control. The durable guidance is to connect SLOs and golden signals to actionable alerts, then control telemetry volume deliberately; the 2021 Cloud Monitoring screens, pricing statements, integrations, and configuration steps should be checked against current documentation.

## Key Ideas

- [00:00:00]-[00:01:04] Monitoring should show whether a service meets user needs, provide enough state to triage and verify incident mitigations, and keep associated costs manageable.
- [00:01:04]-[00:03:11] SLOs address user-visible symptoms, while causes require supporting telemetry; traffic, errors, latency, and saturation provide a service-oriented baseline.
- [00:04:13]-[00:05:16] Pages should be urgent, actionable, require judgment, and ideally identify novel problems; nonurgent human work belongs in a less disruptive channel such as tickets.
- [00:05:16]-[00:07:23] The video ties then-current charges to non-platform metric ingestion and warns that label cardinality can multiply time series; it suggests reducing unneeded agent and custom metrics, which also reduces available diagnostic evidence.

## Practical Implications

Build dashboards around user-visible objectives and golden signals, reserve paging for urgent human action, and review custom metrics and labels for diagnostic value, cardinality, cost, and the evidence lost if collection is reduced. Verify current pricing, metric names, notification integrations, agent behavior, and UI paths before implementing the demonstrated procedures.

## Questions and Tensions

Teams must balance richer telemetry against cost and operator attention. A low-volume alert policy can miss novel failures, while broad paging and high-cardinality labels create fatigue and expense.

## Source

https://www.youtube.com/watch?v=pcMEFTxcco8

[transcript.md](./transcript.md)
