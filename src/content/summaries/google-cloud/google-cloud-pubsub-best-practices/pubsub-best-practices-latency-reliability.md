---
title: "Pub/Sub Best Practices: Latency & Reliability"
resourceId: 61
date: "2023-02-25"
collection: "google-cloud-pubsub-best-practices"
order: 4
videoId: "vY56eo74DNo"
---

Pub/Sub delivery latency is the time from publishing a message to delivering it to a subscriber. Chloe explains choices that affect that delay and monitoring that helps diagnose a growing backlog of undelivered messages.

### Key points

- **Disabling batching chooses latency over throughput and cost**: Messages avoid waiting for a client-side batch, but each publication can carry more overhead ([00:00–01:04](https://www.youtube.com/watch?v=vY56eo74DNo&t=0s)).
- **Regional placement can affect latency**: The episode recommends keeping publisher-to-subscriber traffic within a region for lower latency than cross-region traffic ([00:00–01:04](https://www.youtube.com/watch?v=vY56eo74DNo&t=0s)).
- **Multi-region publication is a disaster-recovery proposal**: For cases requiring what it calls extreme reliability and multi-region availability, the 2023 episode suggests publishing each message in two or more regions. It does not evaluate how applications should handle the resulting duplicates ([00:00–02:06](https://www.youtube.com/watch?v=vY56eo74DNo&t=0s)).
- **Delivery health and dashboards aid diagnosis**: Delivery-latency health scores can identify contributors to growing backlog, while built-in metrics provide resource and usage context ([01:04–02:06](https://www.youtube.com/watch?v=vY56eo74DNo&t=64s)).
- **Quota alerts should precede exhaustion**: The episode recommends alerting when usage reaches a fraction of relevant limits ([02:06](https://www.youtube.com/watch?v=vY56eo74DNo&t=126s)).

Full video: <https://www.youtube.com/watch?v=vY56eo74DNo>
