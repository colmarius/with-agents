---
title: "Pub/Sub Best Practices: Subscribing"
resourceId: 61
date: "2023-02-11"
collection: "google-cloud-pubsub-best-practices"
order: 2
videoId: "aHc-DOP43a8"
---

Chloe, whose affiliation is not established by the source, presents six subscriber practices covering resource creation, delivery type, acknowledgement, ordering, streaming pull, and flow control.

### Key points

- **Create durable delivery state before publishing**: The episode says to attach a subscription or enable topic retention before messages that must remain available are published ([00:00–01:04](https://www.youtube.com/watch?v=aHc-DOP43a8&t=0s)).
- **Delivery type is an explicit choice**: It lists pull, push, and BigQuery subscriptions as the available 2023 types rather than treating that list as permanently exhaustive ([00:00–01:04](https://www.youtube.com/watch?v=aHc-DOP43a8&t=0s)).
- **Process before acknowledging**: Once acknowledged, a message is not redelivered for incomplete work; repeated handling must still be safe ([01:04–02:09](https://www.youtube.com/watch?v=aHc-DOP43a8&t=64s)).
- **Ordered redelivery can repeat later messages**: If one message is redelivered, subsequent messages for the same ordering key can also be redelivered even if already acknowledged ([01:04–02:09](https://www.youtube.com/watch?v=aHc-DOP43a8&t=64s)).
- **Streaming pull and flow control work together**: A persistent connection receives messages continuously, while maximum-outstanding-message settings protect an underprovisioned subscriber and avoid starving peers ([02:09–03:13](https://www.youtube.com/watch?v=aHc-DOP43a8&t=129s)).

**Current-use note:** Verify current subscription types, authentication, scaling, ordering, and client flow-control behavior. Size intake from real processing capacity and recovery behavior rather than treating maximum throughput as the only objective.

Full video: <https://www.youtube.com/watch?v=aHc-DOP43a8>
