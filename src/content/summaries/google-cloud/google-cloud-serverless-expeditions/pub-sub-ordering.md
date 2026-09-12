---
title: "Understanding Pub/Sub ordering"
resourceId: 59
date: "2021-08-12"
collection: "google-cloud-serverless-expeditions"
order: 5
videoId: "S2evHtbl4F8"
---

If a ride cancellation arrives before the ride request, an application can process the wrong sequence. This August 2021 discussion uses each rider's ID as a Pub/Sub ordering key, grouping that rider's messages so they arrive in publication order, then explains the resulting delivery and recovery rules.

### Key points

- **A stalled message blocks its own rider's sequence:** For the push-subscription case discussed, the application must acknowledge the ride request before Pub/Sub delivers that rider's cancellation. Other rider IDs can continue, so choosing a rider-specific key keeps one stalled sequence from blocking everyone [01:05–02:06](https://www.youtube.com/watch?v=S2evHtbl4F8&t=65s).
- **Unblocking delivery is not the same as fixing a failed operation:** The presenters recommend acknowledging malformed messages or caught exceptions and reporting the error to an operator. That releases subsequent messages, but the failed work still needs a separate recovery path; acknowledgement must not silently hide the failure [02:06–03:08](https://www.youtube.com/watch?v=S2evHtbl4F8&t=126s).
- **Ordering is a subscription property:** Individual subscribers do not opt in. For the pull-subscription behavior described, messages with the same ordering key have affinity to the same subscriber; the presenters suggest putting ordered and unordered traffic on separate topics [03:08–04:11](https://www.youtube.com/watch?v=S2evHtbl4F8&t=188s).
- **Publishing failures can pause an ordering key:** Most failures are retried automatically in the client behavior described. After a non-retryable error, such as a deleted topic, the presenter says to call `resumePublish` for the affected keys [04:11–06:18](https://www.youtube.com/watch?v=S2evHtbl4F8&t=251s).
- **Publish to one region when sharing order:** In the example, services running in Europe and the US can share ordering if both publishers use the same regional endpoint. Where the publishing code runs and where it sends messages are separate choices [05:16–06:18](https://www.youtube.com/watch?v=S2evHtbl4F8&t=316s).

Full video: <https://www.youtube.com/watch?v=S2evHtbl4F8>
