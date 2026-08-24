---
title: "Pub/Sub Best Practices: Latency & Reliability"
videoId: vY56eo74DNo
sourceUrl: "https://www.youtube.com/watch?v=vY56eo74DNo"
publishedAt: "2023-02-25T17:00:30Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Chloe, whose affiliation is not stated in the transcript, presents six latency and reliability practices. The advice connects batching and regional placement with disaster-recovery publication, delivery-health diagnostics, monitoring dashboards, and quota alerts.

## Key Ideas

- Disabling client-side batching favors lower publish latency at the expense of throughput and cost. The episode also says regional publisher-to-subscriber traffic has lower latency than cross-region traffic; this topology guidance should be validated for the actual 2023-or-later service path and workload. [00:00:00]-[00:01:04]
- For disaster-recovery cases requiring what it calls extreme reliability and multi-regional availability, the episode suggests publishing every message twice or more in different regions using Pub/Sub regional isolation. This is a narrowly framed 2023 tactic, not a general requirement. [00:00:00]-[00:01:04]
- Delivery latency health scores help identify contributors when backlog grows, and built-in dashboards expose resource and usage metrics. [00:01:04]-[00:02:06]
- Quota alerts should fire before relevant usage reaches limits so capacity changes are not discovered through production failures. [00:02:06]

## Practical Implications

- Define latency, throughput, cost, and recovery objectives before changing batching or regional topology.
- Alert on backlog, delivery health, resource saturation, and quotas together; no single metric explains end-to-end delay.

## Questions and Tensions

- The source does not discuss the duplicate handling, ordering, cost, or reconciliation consequences of publishing every message to multiple regions; those application-level tradeoffs must be evaluated before adopting the tactic.
- Concrete monitoring signals and regional behavior should be checked against current Pub/Sub guidance.

## Source

- [Video](https://www.youtube.com/watch?v=vY56eo74DNo)
- [transcript.md](./transcript.md)
