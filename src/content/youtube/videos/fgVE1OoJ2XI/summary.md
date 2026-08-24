---
title: "Choosing Pub Sub or Pub Sub Lite? - ep. 11"
videoId: fgVE1OoJ2XI
sourceUrl: "https://www.youtube.com/watch?v=fgVE1OoJ2XI"
publishedAt: "2021-06-30T04:00:09Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter whose affiliation is not stated compares the event-ingestion options available in 2021: Cloud Storage buffering, Pub/Sub, Pub/Sub Lite, self-managed Kafka, and Confluent Cloud. This episode is retained as retired historical content: Pub/Sub Lite is no longer a current product choice, so its selection guidance must not be used as present-day advice.

## Key Ideas

- The episode places messaging at the ingestion edge of a pipeline that transforms events and routes them to analytical storage or downstream applications. [00:00:00]-[00:02:04]
- Pub/Sub is presented as an automatically scaling service with independent readers and writers, per-message parallelism, Dataflow integration, and push delivery. [00:02:04]-[00:04:12]
- The historical comparison describes Pub/Sub Lite as a cheaper, provisioned, partition-based, single-zone alternative with Kafka familiarity but more capacity planning. [00:04:12]-[00:05:15]
- Kafka options are compared by ecosystem familiarity, multi-cloud availability, operational responsibility, Google Cloud integration, access control, and capacity predictability. [00:05:15]-[00:08:22]

## Practical Implications

- Use current Google Cloud product documentation to choose an ingestion service; do not plan new work around the retired Pub/Sub Lite option described here.
- Separate the need for durable low-cost buffering, managed messaging, stream processing, and ecosystem portability before comparing products.

## Questions and Tensions

- The cost and operations comparison is frozen in 2021 and cannot represent current products, prices, migration paths, or support status.
- Product-level convenience does not remove the need to design schemas, replay, ordering, idempotency, and data-residency controls.

## Source

- [Video](https://www.youtube.com/watch?v=fgVE1OoJ2XI)
- [transcript.md](./transcript.md)
