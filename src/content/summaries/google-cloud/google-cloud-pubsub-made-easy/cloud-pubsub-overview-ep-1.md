---
title: "Cloud Pub/Sub Overview - ep. 1"
resourceId: 60
date: "2019-10-30"
collection: "google-cloud-pubsub-made-easy"
order: 1
videoId: "cvu53CnZmGI"
---

When an order service calls packaging, shipping, and notification services directly, each call depends on the receiving service being available. This episode uses a fictional cat-poster shop to show an alternative: publish an event to Pub/Sub and let each interested service receive it when ready.

### Key points

- **Asynchronous handoffs separate availability**: Applications can exchange work without producer and consumer being available at the same time ([00:00–01:03](https://www.youtube.com/watch?v=cvu53CnZmGI&t=0s)).
- **Direct calls make changes spread across services**: Adding a monitoring service requires changing the existing services to send it events. Testing packaging also requires stand-ins for the order, shipping, and notification services it depends on ([01:03–03:11](https://www.youtube.com/watch?v=cvu53CnZmGI&t=63s)).
- **Pub/Sub becomes the intermediary**: Producers publish events without naming every downstream service, while consumers receive them through push or pull ([03:11–05:16](https://www.youtube.com/watch?v=cvu53CnZmGI&t=191s)).
- **New consumers need not change the producer**: A monitoring service can subscribe to existing events, and independently recovering services can consume retained messages after an outage ([05:16–06:19](https://www.youtube.com/watch?v=cvu53CnZmGI&t=316s)).

Full video: <https://www.youtube.com/watch?v=cvu53CnZmGI>
