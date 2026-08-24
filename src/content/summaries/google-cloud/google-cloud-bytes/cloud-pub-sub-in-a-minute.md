---
title: "Cloud Pub/Sub in a minute"
resourceId: 66
date: "2020-12-28"
collection: "google-cloud-bytes"
order: 6
videoId: "jLI-84UjZLE"
---

The source names neither its presenter nor an affiliation. This 2020 primer presents Cloud Pub/Sub as managed asynchronous messaging between independently changing producers and consumers.

### Key Points Covered

- **Topics and subscriptions reduce direct coupling**: Producers publish to topics, while subscriptions distribute messages to one or more consuming services [00:00:00]-[00:00:47].
- **The examples span work queues and fan-out**: The primer includes parallel work distribution, archival and analytics consumers, streaming into BigQuery or Dataflow, and operational notifications [00:00:47].
- **Reliability labels omit consumer responsibilities**: Claims about durable, global, ordered messaging do not define acknowledgement, redelivery, idempotency, dead-letter handling, or flow control [00:00:00]-[00:00:47].

Use this as historical messaging orientation, not an implementation design. Validate current delivery semantics, ordering scope, filtering, retention, replay, regional behavior, quotas, limits, and pricing in current documentation.

Full video: <https://www.youtube.com/watch?v=jLI-84UjZLE>
