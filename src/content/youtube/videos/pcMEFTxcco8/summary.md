---
title: "Best Practices for Cloud Monitoring"
videoId: pcMEFTxcco8
sourceUrl: "https://www.youtube.com/watch?v=pcMEFTxcco8"
publishedAt: "2021-11-17T16:00:24Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter outlines a monitoring strategy centered on user experience, incident response, and cost control. The durable guidance is to connect SLOs and golden signals to actionable alerts, then control telemetry volume deliberately; the 2021 Cloud Monitoring screens, pricing statements, integrations, and configuration steps should be checked against current documentation.

## Key Ideas

- [00:00:00] Monitoring should show whether a service meets user needs, support rapid incident mitigation, and keep observability costs manageable.
- [00:02:07] SLOs and the four golden signals—traffic, errors, latency, and saturation—provide a service-oriented monitoring baseline.
- [00:04:13] Pages should be urgent, actionable, and require judgment; nonurgent work belongs in a less disruptive channel.
- [00:05:16] Monitoring cost depends on current pricing and telemetry volume, while label cardinality can multiply time-series volume.

## Practical Implications

Build dashboards around user-visible objectives and golden signals, reserve paging for urgent human action, and review custom metrics and labels for both diagnostic value and cardinality. Verify current pricing, metric names, notification integrations, and UI paths before implementing the demonstrated procedures.

## Questions and Tensions

Teams must balance richer telemetry against cost and operator attention. A low-volume alert policy can miss novel failures, while broad paging and high-cardinality labels create fatigue and expense.

## Source

https://www.youtube.com/watch?v=pcMEFTxcco8

[transcript.md](./transcript.md)
