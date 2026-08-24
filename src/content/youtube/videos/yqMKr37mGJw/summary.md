---
title: "Retries and Saga pattern in Workflows"
videoId: yqMKr37mGJw
sourceUrl: "https://www.youtube.com/watch?v=yqMKr37mGJw"
publishedAt: "2023-05-18T23:00:34Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Mete and an unnamed host explain how Google Cloud Workflows can orchestrate an order flow, retry transient failures, and compensate for permanent failures. The transcript identifies Mete by first name but gives no affiliation for either speaker.

## Key Ideas

- A workflow can call order and customer services in sequence without making those services call each other directly. [00:00:00]-[00:02:08]
- Retry policies address intermittent failures, while a permanent failure such as insufficient credit needs different handling. [00:02:08]-[00:04:15]
- In the example Saga, failure to reserve credit triggers cancellation of the pending order; successful reservation proceeds to approval. [00:04:15]-[00:05:19]
- Mete characterizes the Saga approach as eventual consistency for distributed operations that cannot use a database transaction. [00:05:19]

## Practical Implications

- Treat retry and compensation as separate design decisions: retries need a bounded transient-failure policy, while compensation must correspond to an earlier side effect.
- The demonstrated Workflows YAML and console behavior reflect the service shown in 2023; verify current syntax and defaults before implementing it.

## Questions and Tensions

- The example does not cover idempotency, retry limits, backoff, or what happens when the compensation step itself fails.
- Decoupling services from direct calls moves sequencing and failure policy into the orchestrator, which still requires ownership and testing.

## Source

- https://www.youtube.com/watch?v=yqMKr37mGJw
- [transcript.md](./transcript.md)
