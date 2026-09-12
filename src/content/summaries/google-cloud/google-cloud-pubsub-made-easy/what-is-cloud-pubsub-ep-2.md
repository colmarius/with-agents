---
title: "What is Cloud Pub/Sub? - ep. 2"
resourceId: 60
date: "2019-11-28"
collection: "google-cloud-pubsub-made-easy"
order: 2
videoId: "MjEam95VLiI"
---

Pub/Sub connects applications through messages. A publisher sends to a named topic; each consuming application creates a subscription to receive those messages. The episode applies this model to a cat-poster shop's order, packaging, shipping, and notification services.

### Key points

- **Topics receive publications; subscriptions own delivery state**: Publishers send messages to a named topic, while each subscription has its own backlog and acknowledgement path through push or pull ([00:00–02:06](https://www.youtube.com/watch?v=MjEam95VLiI&t=0s)).
- **Separate subscriptions create fan-out**: Two consumers that each need a copy use two subscriptions on the same topic; fan-in can route subscriptions from different topics toward one application ([01:03–02:06](https://www.youtube.com/watch?v=MjEam95VLiI&t=63s)).
- **One event can serve different purposes**: An order message goes to separate packaging and notification subscriptions. Packaging then publishes its own event for shipping and notification, rather than the order service coordinating every step directly ([02:06–03:09](https://www.youtube.com/watch?v=MjEam95VLiI&t=126s)).
- **The same model supports data ingestion**: Messages from applications and databases can pass through an event processor such as Dataflow for duplicate removal, ordering, or enrichment before reaching storage or notification systems ([03:09–05:19](https://www.youtube.com/watch?v=MjEam95VLiI&t=189s)).

Full video: <https://www.youtube.com/watch?v=MjEam95VLiI>
