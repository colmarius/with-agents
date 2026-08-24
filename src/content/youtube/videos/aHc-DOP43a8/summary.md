---
title: "Pub/Sub Best Practices: Subscribing"
videoId: aHc-DOP43a8
sourceUrl: "https://www.youtube.com/watch?v=aHc-DOP43a8"
publishedAt: "2023-02-11T17:00:01Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Chloe, whose affiliation is not stated in the transcript, presents six subscriber practices spanning resource creation, delivery type, acknowledgement order, ordered-message redelivery, streaming pull, and flow control.

## Key Ideas

- Create a subscription or enable topic retention before publishing when messages must remain available for later consumption. [00:00:00]-[00:01:04]
- Select among the then-described pull, push, and BigQuery subscription types according to the required delivery path. [00:00:00]-[00:01:04]
- Process before acknowledging; with ordering keys, redelivery of one message also causes later messages for that key to be redelivered. [00:01:04]-[00:02:09]
- Streaming pull maintains a bidirectional connection for continuous receipt, while outstanding-message flow-control limits protect underprovisioned subscribers and leave work for peers. [00:02:09]-[00:03:13]

## Practical Implications

- Establish the durable processing boundary before acknowledgement and make repeated handling safe.
- Size subscriber flow control from actual processing capacity, message size, and recovery behavior rather than maximizing intake.

## Questions and Tensions

- The short delivery-type comparison omits current feature differences, authentication, scaling behavior, and failure modes.
- Ordered redelivery can expand duplicate work, so ordering-key scope and idempotency need joint design.

## Source

- [Video](https://www.youtube.com/watch?v=aHc-DOP43a8)
- [transcript.md](./transcript.md)
