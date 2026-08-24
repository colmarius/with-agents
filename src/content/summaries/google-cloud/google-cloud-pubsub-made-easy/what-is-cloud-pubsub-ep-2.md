---
title: "What is Cloud Pub/Sub? - ep. 2"
resourceId: 60
date: "2019-11-28"
collection: "google-cloud-pubsub-made-easy"
order: 2
videoId: "MjEam95VLiI"
---

This episode introduces Pub/Sub's topic-and-subscription model through the series' fictional order-processing system.

### Key points

- **Topics receive publications; subscriptions own delivery state**: Publishers send messages to a named topic, while each subscription has its own backlog and acknowledgement path through push or pull ([00:00:00]-[00:02:06]).
- **Separate subscriptions create fan-out**: Two consumers that each need a copy use two subscriptions on the same topic; fan-in can route subscriptions from different topics toward one application ([00:01:03]-[00:02:06]).
- **The example spans regions without defining every regional property**: The fictional services use Pub/Sub as transport between US and European components, but the overview does not establish data-residency, failure-domain, or universal latency guarantees ([00:02:06]-[00:03:09]).
- **Use cases span ingestion and asynchronous workflows**: The episode connects event producers to processing, storage, notification, and serverless targets ([00:03:09]-[00:05:19]).

**Current-use note:** This is a 2019 conceptual overview. Recheck current endpoint requirements, regional behavior, product names, and delivery semantics before using its examples as architecture guidance.

Full video: <https://www.youtube.com/watch?v=MjEam95VLiI>
