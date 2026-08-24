---
title: "Pub/Sub Best Practices: Publishing"
resourceId: 61
date: "2023-02-04"
collection: "google-cloud-pubsub-best-practices"
order: 1
videoId: "Oo5PXA4idI8"
---

Chloe, whose affiliation is not established by the source, presents six publishing practices centered on explicit throughput, latency, ordering, and retry tradeoffs.

### Key points

- **Batching exchanges latency for throughput and request efficiency**: Message size, publisher count, flow control, cost, and latency objectives should determine settings rather than one universal batch size ([00:00:00]-[00:01:03]).
- **Ordering keys narrow the safe publishing pattern**: The episode recommends one-message batches and waiting for server acknowledgement before publishing the next message for that ordered stream ([00:01:03]-[00:02:06]).
- **Its ordered-delivery recommendation is regional**: It says ordering is guaranteed only within a region and recommends a regional endpoint so messages using ordering keys enter the same region ([00:01:03]-[00:02:06]).
- **Publishers have client-side resource limits**: Bandwidth, network latency, request rate, CPU, memory, and threads constrain throughput, while flow control can bound pressure ([00:02:06]-[00:03:10]).
- **Retry settings need measurement**: The episode identifies initial timeout, retry multiplier, and total timeout as tunable rather than universally safe defaults ([00:02:06]-[00:03:10]).

**Current-use note:** Treat the regional ordering, client behavior, and retry specifics as 2023 guidance. Verify current documentation and benchmark the actual library and workload; retries can still create duplicate application effects that require idempotent handling.

Full video: <https://www.youtube.com/watch?v=Oo5PXA4idI8>
