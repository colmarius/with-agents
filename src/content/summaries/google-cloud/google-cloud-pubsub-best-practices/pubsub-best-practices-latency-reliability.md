---
title: "Pub/Sub Best Practices: Latency & Reliability"
resourceId: 61
date: "2023-02-25"
collection: "google-cloud-pubsub-best-practices"
order: 4
videoId: "vY56eo74DNo"
---

Chloe, whose affiliation is not established by the source, connects publishing latency and regional topology with monitoring and quota alerts.

### Key points

- **Disabling batching chooses latency over throughput and cost**: Messages avoid waiting for a client-side batch, but each publication can carry more overhead ([00:00:00]-[00:01:04]).
- **Regional placement can affect latency**: The episode says regional publisher-to-subscriber traffic is lower latency than cross-region traffic, a topology claim to validate for the actual service path and workload ([00:00:00]-[00:01:04]).
- **Multi-region publication is a narrow disaster-recovery tactic**: For what it calls extreme reliability, the episode suggests publishing every message twice or more in different regions ([00:00:00]-[00:01:04]).
- **Delivery health and dashboards aid diagnosis**: Delivery-latency health scores can identify contributors to growing backlog, while built-in metrics provide resource and usage context ([00:01:04]-[00:02:06]).
- **Quota alerts should precede exhaustion**: The episode recommends alerting when usage reaches a fraction of relevant limits ([00:02:06]).

**Current-use note:** Treat these as 2023 tactics, not guarantees. Multi-region duplicate publication adds cost, ordering, deduplication, and reconciliation concerns the episode does not evaluate; verify current regional behavior, metrics, and quotas before adopting it.

Full video: <https://www.youtube.com/watch?v=vY56eo74DNo>
