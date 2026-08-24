---
title: "How does Uber scale to millions of concurrent requests?"
videoId: DY2AR8Wzg3Y
sourceUrl: "https://www.youtube.com/watch?v=DY2AR8Wzg3Y"
publishedAt: "2022-01-23T22:34:58Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

The host, Priyanka, interviews Ankit Srivasta, identified as an Uber senior staff engineer, and later Preetham Shah, identified as an engineering director for Cloud Spanner. In this Google-produced 2022 account, they describe Uber Fulfillment's move from an eventually consistent Cassandra-based platform to Spanner, the hybrid network connecting Uber-operated regions to Google Cloud, and a session-aware migration intended not to interrupt active orders.

## Key Ideas

- Fulfillment models consumer intent as demand and active providers as supply, while hundreds of services treat the platform as the source of truth for active orders, jobs, and provider sessions. [00:01:08]-[00:03:16]
- Uber's application-level serialization and saga mechanisms could not prevent inconsistencies as storage interactions expanded across rows and tables; consistency therefore became a primary requirement for the replacement datastore. [00:03:16]-[00:06:25]
- Ankit says the hybrid design used redundant physical routes and logical connections, private routing to Google APIs, and route benchmarks to support availability and latency between Uber's regions and Spanner. [00:06:25]-[00:08:31]
- Rather than copy short-lived, continuously changing session state, Uber tagged a session to the stack where it began, retained sessions with active orders there until completion, and switched open sessions without active orders to the new platform. The team tested in test, staging, shadow, and simulated-city environments before progressing city by city or in batches. [00:09:34]-[00:11:43]
- The teams first targeted acceptable migration performance, then tuned observability, connection failover, autoscaling, read routing, and caching for errors, latency, and cost. [00:11:43]-[00:18:03]

## Practical Implications

- Derive consistency requirements from user-visible failure modes rather than from datastore labels.
- Treat hybrid connectivity, capacity, observability, incident playbooks, and data protection as part of the database migration, not as follow-up work.
- Segment a stateful migration at a business-safe boundary—here, a session without an active order—and expand progressively through test environments and bounded rollout units.
- Treat the scale figures, product and service behavior, benchmark improvements, cache semantics, data-protection controls, and consistency claims as a 2022 first-party account. Confirm current documentation and conduct workload, security, data, regulatory, and domain review before reuse.

## Questions and Tensions

- The Google-produced case study does not quantify total migration cost, unsuccessful tests, measured availability during the transition, or comparisons beyond the named NewSQL evaluations.
- Serving cached reads while preserving the required consistency model depends on details only briefly described in the episode.
- The closing endorsement is promotional; the transferable evidence is the requirements, migration boundary, validation process, and operating controls rather than a universal product choice.

## Source

- [Video](https://www.youtube.com/watch?v=DY2AR8Wzg3Y)
- [transcript.md](./transcript.md)
