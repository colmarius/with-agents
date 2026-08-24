---
title: "How to create a microservice architecture with Google Cloud"
videoId: YxNRkw8Msdw
sourceUrl: "https://www.youtube.com/watch?v=YxNRkw8Msdw"
publishedAt: "2021-09-18T16:00:13Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

The host, Priyanka, interviews David Ting, senior vice president of engineering at Nylas. Ting describes a 2021 reimplementation of Nylas's high-volume communications-processing platform around rapidly cycled nodes, event-driven microservices, and managed storage, shaped by a financial-services customer's requirements against persistent PII storage and long-lived servers.

## Key Ideas

- Ting reports that Nylas processed more than 20 terabytes daily through statically assigned MySQL shards; unpredictable per-account volume produced hot spots, variable latency, overprovisioning, and higher cost. [00:02:11]-[00:04:14]
- Ting says the replacement combined rewritten Go services on GKE, Pub/Sub as the message bus, and Spanner as the relational store; a customer's QA team tested the prototype before launch, followed by workload optimization. [00:04:14]-[00:06:24]
- Ting says rapidly cycled GKE nodes and gVisor isolation addressed the customer's security requirements. He describes storing application state and account keys in Spanner and purging PII after customers received it. [00:06:24]-[00:08:33]
- Ting describes moving from a database-centered pipeline to direct event publication, making Pub/Sub central to microservice coordination and burst absorption. [00:07:27]-[00:09:35]
- Ting attributes a three-month rewrite and migration to the combined team and reports higher per-node throughput and stable p90 latency during a traffic spike; the later AI/ML work is presented only as a future plan. [00:09:35]-[00:12:46]

## Practical Implications

- Let explicit data-lifetime, isolation, throughput, and latency requirements drive platform boundaries before choosing services.
- An event-first design can decouple ingestion from processing, but the message bus becomes a critical state-transition and recovery dependency.
- Test a rewritten platform with production-shaped traffic and customer acceptance before cutover; separate measured improvements from simultaneous language and infrastructure changes.
- Treat all reported scale, performance, cost, product behavior and limits, PII handling, isolation controls, and AI/ML plans as a 2021 snapshot. Recheck current documentation, validate with production-shaped tests, and obtain current security, privacy, compliance, and domain review.

## Questions and Tensions

- The episode attributes gains to several simultaneous changes—Go, orchestration, messaging, and storage—without isolating their effects.
- It does not explain replay, ordering, duplicate handling, regional failure, encryption, key management, deletion verification, or the evidence behind the PII controls.
- This Google-produced customer story reports Ting's experience; its vendor comparisons and outcome claims are not independently validated or universal design guidance.

## Source

- [Video](https://www.youtube.com/watch?v=YxNRkw8Msdw)
- [transcript.md](./transcript.md)
