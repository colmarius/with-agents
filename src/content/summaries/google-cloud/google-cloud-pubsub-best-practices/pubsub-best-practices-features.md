---
title: "Pub/Sub Best Practices: Features"
resourceId: 61
date: "2023-02-18"
collection: "google-cloud-pubsub-best-practices"
order: 3
videoId: "2-8wgvanQHI"
---

Pub/Sub can retain messages for later processing, replay messages after a mistake, and route undeliverable messages to a separate topic. Chloe explains the controls behind those recovery paths, along with push delivery and limits on where messages are stored.

### Key points

- **Push can fit constrained or shared receivers**: The episode suggests it when subscriber code cannot use a client, outgoing requests are unavailable, or one endpoint receives from several topics and subscriptions ([00:00–01:04](https://www.youtube.com/watch?v=2-8wgvanQHI&t=0s)).
- **Seek changes which messages need delivery**: Seeking to a snapshot or timestamp can mark previously acknowledged messages as unacknowledged so Pub/Sub delivers them again. Seeking to a future timestamp instead clears the unacknowledged backlog ([00:00–02:06](https://www.youtube.com/watch?v=2-8wgvanQHI&t=0s)).
- **Retention keeps messages available**: Topic retention stores messages even before a consumer is ready. Subscription retention can keep messages after acknowledgement. The episode's maxima—31 days for topics and seven days for subscriptions—are 2023 limits ([01:04–02:06](https://www.youtube.com/watch?v=2-8wgvanQHI&t=64s)).
- **Dead-letter topics isolate undeliverable messages**: Pub/Sub forwards those messages to a separate topic. Chloe describes recovery options: move them back to the original topic through a Dataflow pipeline, or change a consumer pipeline to read both topics ([02:06–03:10](https://www.youtube.com/watch?v=2-8wgvanQHI&t=126s)).
- **A storage policy controls persistence location**: It restricts where topic messages are stored regardless of publish-request origin; the source does not claim that it fixes processing location or every network and residency concern ([02:06–03:10](https://www.youtube.com/watch?v=2-8wgvanQHI&t=126s)).

Full video: <https://www.youtube.com/watch?v=2-8wgvanQHI>
