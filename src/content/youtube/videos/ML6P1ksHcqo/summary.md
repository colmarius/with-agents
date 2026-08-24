---
title: "Cloud Pub/Sub Publishers - ep. 4"
videoId: ML6P1ksHcqo
sourceUrl: "https://www.youtube.com/watch?v=ML6P1ksHcqo"
publishedAt: "2020-01-04T17:00:08Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Priyanka, whose affiliation is not stated in the transcript, explains publisher message structure, asynchronous APIs, batching, and retry configuration. The episode treats publisher design as a balance among throughput, per-message latency, resource use, and tolerance for network failures.

## Key Ideas

- The episode describes at-least-once delivery, best-effort ordering, message attributes, server-generated IDs, and then-current request-size constraints. [00:00:00]-[00:01:03]
- Client libraries provide asynchronous publishing, while batching groups messages by bytes, count, or elapsed time to improve throughput. [00:01:03]-[00:02:06]
- Larger batches increase throughput but hold individual messages in memory longer; latency-sensitive request/response paths may prefer smaller batches or no batching. [00:02:06]-[00:03:10]
- Network failures are expected, so retry timing and total timeout should reflect network availability, available memory, and application requirements. [00:03:10]-[00:04:13]

## Practical Implications

- Benchmark batch thresholds against representative payload sizes, concurrency, and latency objectives instead of copying defaults.
- Verify current limits, ordering guarantees, retryable errors, and client-library behavior before using this 2020 guidance.

## Questions and Tensions

- Higher retry duration can improve delivery success while retaining more messages in client memory and extending failure visibility.
- The episode does not connect at-least-once publishing with application-level deduplication or idempotent side effects.

## Source

- [Video](https://www.youtube.com/watch?v=ML6P1ksHcqo)
- [transcript.md](./transcript.md)
