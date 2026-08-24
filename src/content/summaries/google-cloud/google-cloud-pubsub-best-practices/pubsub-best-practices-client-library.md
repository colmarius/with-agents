---
title: "Pub/Sub Best Practices: Client Library"
resourceId: 61
date: "2023-03-04"
collection: "google-cloud-pubsub-best-practices"
order: 5
videoId: "F0H9qt1w9JE"
---

Chloe, whose affiliation is not established by the source, presents six client-library practices whose details depend on language and version.

### Key points

- **The Java-over-Python advice is not a general benchmark result**: The episode recommends Java for performance but supplies no workload, versions, measurements, or results in the transcript ([00:00:00]-[00:01:03]).
- **Reuse publisher clients**: A long-lived client avoids repeatedly paying the slower first-publish startup described by the episode ([00:00:00]-[00:01:03]).
- **Flow control bounds pressure on both sides**: Publisher limits can help when requests time out, while lower subscriber limits reduce concurrent processing ([00:01:03]-[00:02:06]).
- **Client upgrades can carry fixes and features**: Staying current still requires testing application behavior across version changes ([00:01:03]-[00:02:06]).
- **The Node.js APIs are point-in-time examples**: The episode prefers promise-based asynchronous use and names `subscription.on`, `topic.publishMessage`, and `topic.flowControlled` ([00:01:03]-[00:02:06]).
- **Streaming libraries manage acknowledgement leases**: They can issue `modAck` deadline changes, but automatic extension still needs bounds for stuck work and failed workers ([00:02:06]).

**Current-use note:** Recheck every API name and lease behavior against the current library. Benchmark languages and flow control with the real workload rather than carrying forward a broad 2023 performance recommendation.

Full video: <https://www.youtube.com/watch?v=F0H9qt1w9JE>
