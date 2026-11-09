---
addedDate: '2026-08-24'
title: "Pub/Sub Best Practices: Features"
resourceId: 61
date: "2023-02-18"
collection: "google-cloud-pubsub-best-practices"
order: 3
videoId: "2-8wgvanQHI"
---

Pub/Sub can retain messages for later processing, replay messages after a mistake, and route undeliverable messages to a separate topic. Chloe explains the controls behind those recovery paths, along with push delivery and limits on where messages are stored.

### Key points

- **Push subscriptions suit restricted or multi-topic subscribers**: The episode suggests push when the subscriber application cannot include client code, cannot make outgoing requests, or uses one instance to process messages from several topics and subscriptions [00:00–01:04](https://www.youtube.com/watch?v=2-8wgvanQHI&t=0s).
- **Seek can replay or discard messages**: Seeking to a snapshot or timestamp can mark previously acknowledged messages as unacknowledged so Pub/Sub delivers them again. Seeking to a future timestamp instead clears the unacknowledged backlog [00:00–02:06](https://www.youtube.com/watch?v=2-8wgvanQHI&t=0s).
- **Retention keeps messages available**: Topic retention stores messages even before a consumer is ready. Subscription retention can keep messages after acknowledgement. The episode gives 2023 maximums of 31 days for topics and seven days for subscriptions [01:04–02:06](https://www.youtube.com/watch?v=2-8wgvanQHI&t=64s).
- **Dead-letter topics isolate undeliverable messages**: Pub/Sub forwards those messages to a separate topic. Chloe describes recovery options: move them back to the original topic through a Dataflow pipeline, or change a consumer pipeline to read both topics [02:06–03:10](https://www.youtube.com/watch?v=2-8wgvanQHI&t=126s).
- **A message storage policy limits where messages are stored**: For data residency requirements, a topic's policy keeps its messages within the Google Cloud regions you specify, wherever the publish requests come from. The episode does not claim that it controls where messages are processed or settles every network and residency concern [02:06–03:10](https://www.youtube.com/watch?v=2-8wgvanQHI&t=126s).

Full video: <https://www.youtube.com/watch?v=2-8wgvanQHI>
