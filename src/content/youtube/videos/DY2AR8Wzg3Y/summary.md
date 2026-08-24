---
title: "How does Uber scale to millions of concurrent requests?"
videoId: DY2AR8Wzg3Y
sourceUrl: "https://www.youtube.com/watch?v=DY2AR8Wzg3Y"
publishedAt: "2022-01-23T22:34:58Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Priyanka Vergadia interviews Ankit Srivasta, a senior staff engineer at Uber, and Preetham Shah, an engineering director for Cloud Spanner. They describe Uber Fulfillment's move from an eventually consistent Cassandra-based platform to a transactional store, the hybrid network connecting Uber-operated regions to Google Cloud, and a session-aware migration designed to avoid interrupting active orders.

## Key Ideas

- Fulfillment models consumer intent as demand and active providers as supply, while hundreds of services treat the platform as the source of truth for active orders, jobs, and provider sessions. [00:01:08]-[00:03:16]
- Uber's application-level serialization and saga mechanisms could not prevent inconsistencies as storage interactions expanded across rows and tables; consistency therefore became a primary requirement for the replacement datastore. [00:03:16]-[00:06:25]
- The hybrid design used redundant physical interconnects and logical connections, private API routing, and route benchmarks to control availability and latency between Uber's regions and Spanner. [00:06:25]-[00:08:31]
- Rather than bulk-copying short-lived, continuously changing session state, the migration kept active orders on their original stack and moved idle sessions to the new platform, progressing city by city after test, staging, shadow, and simulated-city exercises. [00:09:34]-[00:11:43]
- The teams first targeted acceptable migration performance, then tuned observability, connection failover, autoscaling, read routing, and caching for errors, latency, and cost. [00:11:43]-[00:18:03]

## Practical Implications

- Derive consistency requirements from user-visible failure modes rather than from datastore labels.
- Treat hybrid connectivity, capacity, observability, incident playbooks, and data protection as part of the database migration, not as follow-up work.
- Segment a stateful migration at a business-safe boundary—here, an inactive user session—and expand progressively with rollback evidence.
- Treat the scale figures, performance improvements, cache semantics, and Spanner behavior as a 2022 first-party account; validate current service documentation, workload results, and economics before reuse.

## Questions and Tensions

- The Google-produced case study does not quantify total migration cost, unsuccessful tests, availability during the transition, or alternatives beyond the named NewSQL evaluations.
- Serving cached reads while preserving the required consistency model depends on details only briefly described in the episode.
- The closing endorsement is promotional; the transferable evidence is the requirements, migration boundary, validation process, and operating controls rather than a universal product choice.

## Source

- [Video](https://www.youtube.com/watch?v=DY2AR8Wzg3Y)
- [transcript.md](./transcript.md)
