---
title: "Push or Pull Subscriber? - ep. 6"
resourceId: 60
date: "2020-01-19"
collection: "google-cloud-pubsub-made-easy"
order: 6
videoId: "KObJkda4ZfY"
---

Priyanka, whose affiliation is not established by the source, compares push and pull as workload-dependent delivery choices.

### Key points

- **The endpoint identities differ**: A pull endpoint is an authorized client calling the Pub/Sub API; a push endpoint is the receiving application's DNS-reachable HTTPS service ([00:00:00]-[00:01:04]).
- **Shared pull workers and push fan-in are different topologies**: Pull workers divide work from one shared subscription, while multiple subscriptions can target the same push webhook or load balancer ([00:01:04]-[00:02:07]).
- **Backpressure ownership changes**: Pull clients control intake and acknowledgement deadlines; push delivery backs off when the endpoint fails or responds slowly ([00:02:07]-[00:03:09]).
- **The episode associates pull with high-volume or private services and push with webhooks and scale-to-zero services**: Those are scenario-based recommendations, not universal performance guarantees ([00:03:09]-[00:04:12]).

**Current-use note:** This comparison predates newer delivery options and current serverless behavior. Recheck endpoint, authentication, certificate, throughput, and retry guidance, then test overload and failure behavior for the actual workload.

Full video: <https://www.youtube.com/watch?v=KObJkda4ZfY>
