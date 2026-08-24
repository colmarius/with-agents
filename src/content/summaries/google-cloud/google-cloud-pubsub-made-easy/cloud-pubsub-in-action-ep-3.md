---
title: "Cloud Pub/Sub in Action - ep. 3"
resourceId: 60
date: "2019-12-10"
collection: "google-cloud-pubsub-made-easy"
order: 3
videoId: "f5DOsB7Nlw0"
---

This console-and-Python walkthrough builds one publisher with two independent pull subscriptions.

### Key points

- **The topology gives each consumer a subscription**: The order publisher writes to one topic, while packaging and notification each receive through their own pull subscription ([00:00:00]-[00:02:09]).
- **The demo uses one broadly privileged identity and a downloaded key**: It grants publisher and subscriber roles to one service account, downloads a JSON key, and points local sample processes at that credential ([00:02:09]-[00:04:17]).
- **Acknowledgement advances one subscription's state**: When packaging acknowledges the message, Pub/Sub removes it from the packaging backlog, not from the notification subscription ([00:05:20]-[00:06:23]).
- **A late subscriber still receives its own copy**: Notification starts after publication but receives the message already retained for its subscription ([00:05:20]-[00:06:23]).

**Historical walkthrough:** Do not copy the downloaded-key flow into a current deployment; prefer current keyless workload authentication and least-privilege identities. The happy path demonstrates independent subscription state, not exactly-once side effects, production retry handling, or complete credential management.

Full video: <https://www.youtube.com/watch?v=f5DOsB7Nlw0>
