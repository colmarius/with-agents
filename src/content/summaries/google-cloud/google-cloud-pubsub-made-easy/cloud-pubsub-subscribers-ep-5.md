---
title: "Cloud Pub/Sub Subscribers - ep. 5"
resourceId: 60
date: "2020-01-12"
collection: "google-cloud-pubsub-made-easy"
order: 5
videoId: "nQ9_Xur2aM4"
---

Priyanka, whose affiliation is not established by the source, explains subscription state, acknowledgement, redelivery, and push and pull delivery.

### Key points

- **A subscription belongs to one topic and owns its backlog**: Each topic can have multiple subscriptions, and the episode warns that publishing without a subscription loses that delivery opportunity under the behavior it describes ([00:00:00]-[00:01:04]).
- **Acknowledgement deadlines make redelivery possible**: Messages remain outstanding until acknowledged or their deadline expires; duplicates and out-of-order delivery can occur, so processing must tolerate repetition ([00:01:04]-[00:02:09]).
- **Pull and push acknowledge differently**: Pull returns an acknowledgement ID for an explicit acknowledge call, while a push endpoint acknowledges by returning a successful HTTP response ([00:02:09]-[00:04:19]).
- **Subscription lifecycle is configurable**: The episode describes a then-default inactivity expiry and notes that deleting and recreating the same name does not restore the old subscription's state ([00:03:14]-[00:04:19]).

**Current-use note:** Verify current retention, expiration, ordering, acknowledgement, and exactly-once features. The brief Dataflow suggestion does not establish exactly-once external side effects; acknowledge only after the intended durable processing boundary and make repeated handling safe.

Full video: <https://www.youtube.com/watch?v=nQ9_Xur2aM4>
