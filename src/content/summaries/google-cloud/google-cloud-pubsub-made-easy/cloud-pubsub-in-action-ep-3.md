---
title: "Cloud Pub/Sub in Action - ep. 3"
resourceId: 60
date: "2019-12-10"
collection: "google-cloud-pubsub-made-easy"
order: 3
videoId: "f5DOsB7Nlw0"
---

An order service publishes an “order received” message that both packaging and notification need to process. This console-and-Python walkthrough gives each consumer its own Pub/Sub subscription, then shows why one consumer can start late without missing its message.

### Key points

- **The topology gives each consumer a subscription**: The order publisher writes to one topic, while packaging and notification each receive through their own pull subscription ([00:00–02:09](https://www.youtube.com/watch?v=f5DOsB7Nlw0&t=0s)).
- **The 2019 demo shares one identity across three processes**: It grants publisher and subscriber roles to one service account and uses a downloaded JSON key for the local Python samples. This is historical demo setup, not a recommendation to share long-lived credentials in a deployment ([02:09–05:20](https://www.youtube.com/watch?v=f5DOsB7Nlw0&t=129s)).
- **Acknowledgement advances one subscription's state**: When packaging acknowledges the message, Pub/Sub removes it from the packaging backlog, not from the notification subscription ([05:20–06:23](https://www.youtube.com/watch?v=f5DOsB7Nlw0&t=320s)).
- **A late subscriber still receives its own copy**: Notification starts after publication but receives the message already retained for its subscription ([05:20–06:23](https://www.youtube.com/watch?v=f5DOsB7Nlw0&t=320s)).

Full video: <https://www.youtube.com/watch?v=f5DOsB7Nlw0>
