---
title: "Retries and Saga pattern in Workflows"
resourceId: 59
date: "2023-05-18"
collection: "google-cloud-serverless-expeditions"
order: 7
videoId: "yqMKr37mGJw"
---

The presenters use an order and credit-reservation flow to separate service orchestration, transient retries, and compensation for permanent failure. Their example makes failure policy visible, but does not make distributed failure disappear.

### Key points

- **The orchestrator owns call order:** Workflows calls the order and customer services in sequence so those services do not call one another directly [00:00:00]-[00:02:08]. This reduces direct coupling while moving sequencing and recovery policy into the workflow.
- **Transient and permanent failures differ:** The demonstration wraps an HTTP call with the Workflows default retry policy for an intermittently failing credit service [00:02:08]-[00:04:15]. A permanent business failure, such as insufficient credit, needs a different path.
- **Compensation follows an earlier side effect:** If credit cannot be reserved, the Saga example cancels the pending order; if reservation succeeds, it approves the order [00:04:15]-[00:05:19]. The presenter characterizes this as eventual consistency where a database transaction cannot span the operations.

The YAML, default retry behavior, and console flow are a May 2023 snapshot. Verify current syntax and defaults, and explicitly design idempotency, retry limits, backoff, duplicate calls, and what happens when compensation itself fails.

Full video: <https://www.youtube.com/watch?v=yqMKr37mGJw>
