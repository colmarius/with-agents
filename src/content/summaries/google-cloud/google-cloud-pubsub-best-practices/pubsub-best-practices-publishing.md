---
title: "Pub/Sub Best Practices: Publishing"
resourceId: 61
date: "2023-02-04"
collection: "google-cloud-pubsub-best-practices"
order: 1
videoId: "Oo5PXA4idI8"
---

Publishing settings determine how long messages wait before being sent and how much work a Pub/Sub client can handle. Chloe explains the tradeoff between batching for throughput and sending ordered messages one at a time.

### Key points

- **Batching sends more messages together, but makes them wait**: Larger batches can increase throughput while adding delay before publication. Chloe recommends choosing settings from message size, publisher throughput, cost, and acceptable latency ([00:00–01:03](https://www.youtube.com/watch?v=Oo5PXA4idI8&t=0s)).
- **Ordering changes the batching recommendation**: An ordering key identifies messages whose order must be preserved. Retrying a failed batch can disrupt publication order, so the episode recommends one-message batches and waiting for the server to receive one message before publishing the next ([00:00–02:06](https://www.youtube.com/watch?v=Oo5PXA4idI8&t=0s)).
- **Its ordered-delivery recommendation is regional**: It says ordering is guaranteed only within a region and recommends a regional endpoint so messages using ordering keys enter the same region ([01:03–02:06](https://www.youtube.com/watch?v=Oo5PXA4idI8&t=63s)).
- **Publishers have client-side resource limits**: Bandwidth, network latency, request rate, CPU, memory, and threads constrain throughput, while flow control can bound pressure ([02:06–03:10](https://www.youtube.com/watch?v=Oo5PXA4idI8&t=126s)).
- **Timed-out requests are retried by the client library**: A publish timeout produces a deadline-exceeded error. Chloe points to the initial timeout, retry multiplier, and total timeout as settings that can be adjusted rather than always accepting the defaults ([02:06–03:53](https://www.youtube.com/watch?v=Oo5PXA4idI8&t=126s)).

Full video: <https://www.youtube.com/watch?v=Oo5PXA4idI8>
