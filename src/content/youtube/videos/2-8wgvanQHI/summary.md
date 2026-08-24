---
title: "Pub/Sub Best Practices: Features"
videoId: 2-8wgvanQHI
sourceUrl: "https://www.youtube.com/watch?v=2-8wgvanQHI"
publishedAt: "2023-02-18T17:00:01Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Chloe, whose affiliation is not stated in the transcript, surveys six Pub/Sub features: push subscriptions, seek, topic and subscription retention, dead-letter topics, and regional storage policy. The episode is an orientation to capabilities rather than a complete design guide.

## Key Ideas

- Push subscriptions can fit constrained receivers or fan-in endpoints where the receiver should not maintain Pub/Sub client context or outbound requests. [00:00:00]-[00:01:04]
- Seek can make acknowledged messages eligible for redelivery from a snapshot or timestamp, or acknowledge backlog by seeking forward. [00:00:00]-[00:01:04]
- Topic retention stores messages independent of consumption readiness, while subscription retention or snapshots can preserve acknowledged messages under then-current limits. [00:01:04]-[00:02:06]
- Dead-letter topics isolate undeliverable messages, and topic storage policies constrain persistence to allowed Google Cloud regions. [00:02:06]-[00:03:10]

## Practical Implications

- Design replay and dead-letter recovery paths before failures, including how messages return to normal processing without repeated side effects.
- Verify current retention limits, storage-policy semantics, and supported subscription types before configuring them.

## Questions and Tensions

- Retention, snapshots, and dead letters improve recoverability but add storage cost, operational state, and replay complexity.
- Regional storage policy does not by itself explain processing location, network path, or every data-residency requirement.

## Source

- [Video](https://www.youtube.com/watch?v=2-8wgvanQHI)
- [transcript.md](./transcript.md)
