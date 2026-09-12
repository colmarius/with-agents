---
title: "Pub/Sub Best Practices: Patterns, Experimentation, and Testing"
resourceId: 61
date: "2023-03-11"
collection: "google-cloud-pubsub-best-practices"
order: 6
videoId: "pP6ipLkXnkk"
---

Chloe covers the operational choices around a Pub/Sub application: identifying resources and consumers, testing locally, and understanding what contributes to the bill.

### Key points

- **Use unique resource names**: Deleting and recreating a resource under the same name can cause delays while cached information is stale. The episode also discourages high fan-out—attaching very many subscriptions—and cites a 10,000-subscription limit from 2023 ([00:00–01:04](https://www.youtube.com/watch?v=pP6ipLkXnkk&t=0s)).
- **Give independently managed subscribers separate credentials**: This lets you track who consumes messages and control each consumer's access with Identity and Access Management (IAM) policies ([00:00–02:10](https://www.youtube.com/watch?v=pP6ipLkXnkk&t=0s)).
- **Treat heartbeat messages as a proposed latency tactic**: For streams that send little data but need prompt delivery, the 2023 episode suggests sending small extra messages to keep a topic active. It does not explain the service mechanism behind the suggestion ([01:04–02:10](https://www.youtube.com/watch?v=pP6ipLkXnkk&t=64s)).
- **Test locally with the emulator**: The Pub/Sub emulator runs a local version of the service for application development and testing through the Google Cloud CLI ([01:04–02:10](https://www.youtube.com/watch?v=pP6ipLkXnkk&t=64s)).
- **Labels organize the bill**: The episode says labels attached to resources are forwarded to billing, so charges can be broken down by label ([01:04–03:19](https://www.youtube.com/watch?v=pP6ipLkXnkk&t=64s)).
- **Location and retention affect cost**: It recommends consuming in or near the publish region to reduce network-egress charges. If one team manages both topic and subscription, and topic retention is longer, it suggests removing subscription retention to avoid that storage cost ([02:10](https://www.youtube.com/watch?v=pP6ipLkXnkk&t=130s)).

Full video: <https://www.youtube.com/watch?v=pP6ipLkXnkk>
