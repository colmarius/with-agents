---
title: "Pub/Sub Best Practices: Latency & Reliability"
videoId: vY56eo74DNo
sourceUrl: "https://www.youtube.com/watch?v=vY56eo74DNo"
publishedAt: "2023-02-25T17:00:30Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Chloe, whose affiliation is not stated in the transcript, presents six latency and reliability practices. The advice connects batching and regional placement with disaster-recovery publication, delivery-health diagnostics, monitoring dashboards, and quota alerts.

## Key Ideas

- Disabling client-side batching favors lower publish latency at the expense of throughput and cost, while keeping clients near one region reduces network latency. [00:00:00]-[00:01:04]
- For extreme multi-regional availability, the episode suggests publishing each message to multiple regions as a regional-isolation strategy. [00:00:00]-[00:01:04]
- Delivery latency health scores help identify contributors when backlog grows, and built-in dashboards expose resource and usage metrics. [00:01:04]-[00:02:06]
- Quota alerts should fire before relevant usage reaches limits so capacity changes are not discovered through production failures. [00:02:06]

## Practical Implications

- Define latency, throughput, cost, and recovery objectives before changing batching or regional topology.
- Alert on backlog, delivery health, resource saturation, and quotas together; no single metric explains end-to-end delay.

## Questions and Tensions

- Multi-region duplicate publication increases availability but shifts deduplication, ordering, cost, and reconciliation work to the application design.
- Concrete monitoring signals and regional behavior should be checked against current Pub/Sub guidance.

## Source

- [Video](https://www.youtube.com/watch?v=vY56eo74DNo)
- [transcript.md](./transcript.md)
