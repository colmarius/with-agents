---
title: "Pub/Sub Best Practices: Features"
resourceId: 61
date: "2023-02-18"
collection: "google-cloud-pubsub-best-practices"
order: 3
videoId: "2-8wgvanQHI"
---

Chloe, whose affiliation is not established by the source, surveys push delivery, seek, retention, dead-letter topics, and regional message storage.

### Key points

- **Push can fit constrained or shared receivers**: The episode suggests it when subscriber code cannot use a client, outgoing requests are unavailable, or one endpoint receives from several topics and subscriptions ([00:00–01:04](https://www.youtube.com/watch?v=2-8wgvanQHI&t=0s)).
- **Seek changes acknowledgement state**: A snapshot or timestamp can make messages eligible for redelivery, while seeking forward can acknowledge and therefore discard backlog ([00:00–01:04](https://www.youtube.com/watch?v=2-8wgvanQHI&t=0s)).
- **Topic and subscription retention serve different recovery needs**: The stated maxima of 31 days for topic retention and seven days for subscription retention are 2023 limits, not timeless values ([01:04–02:06](https://www.youtube.com/watch?v=2-8wgvanQHI&t=64s)).
- **Dead-letter topics still need a recovery route**: The episode proposes a pipeline or application path to move undeliverable messages back toward processing ([02:06–03:10](https://www.youtube.com/watch?v=2-8wgvanQHI&t=126s)).
- **A storage policy controls persistence location**: It restricts where topic messages are stored regardless of publish-request origin; the source does not claim that it fixes processing location or every network and residency concern ([02:06–03:10](https://www.youtube.com/watch?v=2-8wgvanQHI&t=126s)).

**Current-use note:** Verify current retention limits, supported delivery types, seek semantics, storage-policy scope, and pricing. Replay requires idempotent processing, and forward seek is a destructive purge decision.

Full video: <https://www.youtube.com/watch?v=2-8wgvanQHI>
