---
title: "Pub/Sub Best Practices: Publishing"
videoId: Oo5PXA4idI8
sourceUrl: "https://www.youtube.com/watch?v=Oo5PXA4idI8"
publishedAt: "2023-02-04T17:00:14Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Chloe, whose affiliation is not stated in the transcript, presents six Pub/Sub publishing practices. The advice centers on explicit throughput/latency tradeoffs, stricter handling for ordered delivery, publisher resource limits, and retry tuning rather than relying on one default configuration for every workload.

## Key Ideas

- Batching can increase throughput and reduce request overhead, but larger batches add latency; message size, publisher count, flow control, cost, and latency determine the appropriate settings. [00:00:00]-[00:01:03]
- Ordered publishing adds coordination and can conflict with batch retries, so the episode recommends single-message batches and waiting for server acknowledgement before publishing the next ordered message. [00:01:03]-[00:02:06]
- The episode says ordered delivery is guaranteed only within a region and recommends a regional endpoint so messages using ordering keys are published into the same region; this is 2023 service guidance to verify against current documentation. [00:01:03]-[00:02:06]
- Network bandwidth, request rate, latency, CPU, memory, and thread count all constrain publishing throughput; publisher-side flow control can prevent the client from overwhelming its connection. [00:02:06]-[00:03:10]
- Client libraries retry deadline-exceeded failures, but workloads can tune initial timeouts, retry multipliers, and total timeout rather than accepting defaults without measurement. [00:02:06]-[00:03:10]

## Practical Implications

- Benchmark batching and flow-control settings with representative message sizes, publisher counts, network conditions, and latency objectives.
- Treat ordering as a scoped requirement with explicit keys and regional placement; do not pay its coordination cost for messages that need no order.
- Tune retry and timeout policies together with backpressure and monitoring; separately determine how the application will tolerate retries and possible duplicate effects.

## Questions and Tensions

- The short format does not quantify the throughput/latency tradeoffs or explain how to choose safe limits for a particular client library and workload.
- Serial publishing preserves order but can sharply reduce throughput, so teams need to define the smallest ordering scope their application actually requires.

## Source

- [Video](https://www.youtube.com/watch?v=Oo5PXA4idI8)
- [transcript.md](./transcript.md)
