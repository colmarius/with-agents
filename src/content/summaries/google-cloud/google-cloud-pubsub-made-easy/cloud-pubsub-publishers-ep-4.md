---
title: "Cloud Pub/Sub Publishers - ep. 4"
resourceId: 60
date: "2020-01-04"
collection: "google-cloud-pubsub-made-easy"
order: 4
videoId: "ML6P1ksHcqo"
---

Priyanka, whose affiliation is not established by the source, explains publisher message structure, batching, asynchronous APIs, and retry settings.

### Key points

- **Messages carry data and optional attributes**: The episode describes at-least-once delivery, best-effort ordering, server-generated message IDs, and then-current request constraints ([00:00:00]-[00:02:06]).
- **Batching trades latency for throughput**: Client libraries can group messages by bytes, count, or elapsed time, but each message waits in memory for its batch to be sent ([00:01:03]-[00:03:10]).
- **Small or disabled batches can suit latency-sensitive paths**: The episode does not make that choice universal; network and compute overhead still require workload-specific tuning ([00:02:06]-[00:03:10]).
- **Retries consume time and memory**: Total timeout and initial retry timing should reflect network availability, available memory, and application requirements ([00:03:10]-[00:04:13]).

**Current-use note:** Treat the request limits, defaults, retry behavior, and ordering statements as 2020 guidance. Benchmark current client libraries with representative payloads, and design deduplication or idempotent side effects rather than assuming retries are invisible.

Full video: <https://www.youtube.com/watch?v=ML6P1ksHcqo>
