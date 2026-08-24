---
title: "Understanding Pub/Sub ordering"
videoId: S2evHtbl4F8
sourceUrl: "https://www.youtube.com/watch?v=S2evHtbl4F8"
publishedAt: "2021-08-12T23:00:22Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Martin and TNC, the name rendered in the transcript, answer implementation questions about Pub/Sub ordered delivery using a ride-hailing example. The code, IAM, endpoint, and Cloud Console details are explicitly a view of the product in August 2021.

## Key Ideas

- With ordering enabled, the application must acknowledge an earlier message for an ordering key before Pub/Sub delivers the next one for that key. [00:00:00]-[00:02:06]
- The presenters recommend acknowledging malformed or failed messages and separately reporting errors so one key does not remain blocked; this is 2021 operational guidance that should be checked against current retry and dead-letter options. [00:02:06]-[00:03:08]
- Ordered delivery is configured per subscription, not selected by individual subscribers; for a pull subscription, messages with the same ordering key are described as having subscriber affinity. The presenters suggest separating ordered and unordered traffic into different topics. [00:03:08]-[00:04:11]
- For the 2021 client behavior described, a non-retryable publishing failure with ordering requires `resumePublish` for affected ordering keys. [00:04:11]-[00:05:16]
- Publishers in different locations should use the same regional endpoint when messages must share ordering. [00:05:16]-[00:06:18]

## Practical Implications

- Ordering is scoped by key, so key design and prompt acknowledgement determine where head-of-line blocking can occur.
- Before adopting the examples, verify current client-library methods, delivery semantics, IAM requirements, regional endpoints, and Cloud Console controls.

## Questions and Tensions

- Acknowledging a message after application failure avoids blocking but requires a separate recovery path to prevent silent data loss.
- The discussion does not cover redelivery, dead-letter topics, exactly-once delivery, or throughput limits for hot ordering keys.

## Source

https://www.youtube.com/watch?v=S2evHtbl4F8

[transcript.md](./transcript.md)
