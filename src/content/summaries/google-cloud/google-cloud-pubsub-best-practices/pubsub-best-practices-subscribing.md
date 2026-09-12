---
title: "Pub/Sub Best Practices: Subscribing"
resourceId: 61
date: "2023-02-11"
collection: "google-cloud-pubsub-best-practices"
order: 2
videoId: "aHc-DOP43a8"
---

Pub/Sub subscribers receive messages through a subscription attached to a topic. Chloe explains how to keep messages available, acknowledge completed work, and limit incoming work to what a subscriber can process.

### Key points

- **Prepare for delivery before publishing**: Attach a subscription or enable topic retention before publishing messages that must remain available for later processing ([00:00–01:04](https://www.youtube.com/watch?v=aHc-DOP43a8&t=0s)).
- **Choose how the subscription delivers messages**: The episode names pull, push, and BigQuery subscriptions as the available 2023 types and recommends choosing by delivery needs ([00:00–02:09](https://www.youtube.com/watch?v=aHc-DOP43a8&t=0s)).
- **Process before acknowledging**: An acknowledgement tells Pub/Sub the message has been handled. Sending it before the work finishes can leave that work incomplete without a normal redelivery ([01:04–02:09](https://www.youtube.com/watch?v=aHc-DOP43a8&t=64s)).
- **Ordered redelivery can repeat later messages**: In Chloe's example, a subscriber receives messages 1, 2, and 3 with the same ordering key. If message 2 is redelivered, message 3 is redelivered too, even if it was already acknowledged ([01:04–03:13](https://www.youtube.com/watch?v=aHc-DOP43a8&t=64s)).
- **Streaming pull needs a limit on outstanding work**: A persistent connection receives messages continuously. Setting a maximum number of outstanding messages keeps a slow subscriber from holding more work than it can process while other subscribers have spare capacity ([02:09–03:52](https://www.youtube.com/watch?v=aHc-DOP43a8&t=129s)).

Full video: <https://www.youtube.com/watch?v=aHc-DOP43a8>
