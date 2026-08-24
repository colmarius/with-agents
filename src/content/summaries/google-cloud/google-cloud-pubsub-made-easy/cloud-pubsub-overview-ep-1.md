---
title: "Cloud Pub/Sub Overview - ep. 1"
resourceId: 60
date: "2019-10-30"
collection: "google-cloud-pubsub-made-easy"
order: 1
videoId: "cvu53CnZmGI"
---

This opening episode uses a fictional order-processing system to explain where asynchronous messaging can reduce direct service dependencies.

### Key points

- **Asynchronous handoffs separate availability**: Applications can exchange work without producer and consumer being available at the same time ([00:00:00]-[00:01:03]).
- **Direct service chains accumulate coupling**: The example surfaces retries, mocks, scaling, change coordination, and failure handling as the order workflow gains dependencies ([00:01:03]-[00:03:11]).
- **Pub/Sub becomes the intermediary**: Producers publish events without naming every downstream service, while consumers receive them through push or pull ([00:03:11]-[00:05:16]).
- **New consumers need not change the producer**: A monitoring service can subscribe to existing events, and independently recovering services can consume retained messages after an outage ([00:05:16]-[00:06:19]).

**Current-use note:** Treat the stated seven-day retention window and broad resilience and scale language as a 2019 overview, not a current configuration or end-to-end guarantee. Verify present delivery, retention, ordering, retry, and limit documentation, and design message contracts, idempotency, and observability separately.

Full video: <https://www.youtube.com/watch?v=cvu53CnZmGI>
