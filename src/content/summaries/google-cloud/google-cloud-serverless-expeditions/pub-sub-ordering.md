---
title: "Understanding Pub/Sub ordering"
resourceId: 59
date: "2021-08-12"
collection: "google-cloud-serverless-expeditions"
order: 5
videoId: "S2evHtbl4F8"
---

Using ride requests and cancellations, the presenters answer implementation questions about ordered Pub/Sub delivery. The episode is most useful for identifying where ordering creates acknowledgement, recovery, subscriber, and regional-endpoint obligations.

### Key points

- **Acknowledgement gates one ordering key:** Pub/Sub does not deliver a later message for a key until the application acknowledges the earlier one; a stalled key does not, in the example, block other rider keys [00:01:05]-[00:02:06].
- **Avoiding blockage needs a recovery path:** The presenters recommend acknowledging malformed or failed messages and reporting the error separately [00:02:06]-[00:03:08]. That is 2021 guidance, not permission to discard work silently; current retry and dead-letter options need review.
- **Ordering is a subscription property:** Individual subscribers do not opt in. For the pull-subscription behavior described, messages with the same ordering key have affinity to the same subscriber; the presenters suggest putting ordered and unordered traffic on separate topics [00:03:08]-[00:04:11].
- **Publisher recovery and location were explicit concerns:** The client behavior shown requires `resumePublish` after a non-retryable ordered-publish failure, and publishers that share ordering use the same regional endpoint [00:04:11]-[00:06:18].

The client method, delivery semantics, IAM, endpoints, and console controls reflect August 2021. Verify current documentation and design for redelivery, hot keys, dead letters, error reporting, and throughput before relying on these patterns.

Full video: <https://www.youtube.com/watch?v=S2evHtbl4F8>
