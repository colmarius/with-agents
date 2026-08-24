---
title: "Cloud Spanner in a minute"
videoId: 5bjYk6Hhd10
sourceUrl: "https://www.youtube.com/watch?v=5bjYk6Hhd10"
publishedAt: "2020-10-05T04:00:00Z"
sourceLanguage: en
summaryLanguage: en
captionKind: caption
status: draft
---

The transcript identifies the presenter only as Stephanie and provides no affiliation. This 2020 primer positions Cloud Spanner as a managed relational database that combines SQL and ACID transactions with horizontal scale, strong external consistency, and multi-region replication.

## Key Ideas

- Stephanie attributes Spanner’s cross-region external consistency to TrueTime and presents it as avoiding a conventional choice between relational semantics and horizontal scale. [00:00:00]
- The service exposes schemas, SQL queries, and ACID transactions while managing replication, online schema changes, backup, and restore. [00:00:51]
- High-scale online transaction processing and real-time decision workloads are the recommended service family, with a stated availability SLA of up to 99.999%. [00:00:51]-[00:01:45]

## Practical Implications

- Evaluate Spanner when relational transactions, horizontal scaling, and geographic distribution must coexist and justify a specialized managed database.
- Verify current instance sizing, editions, SQL dialects, topology-dependent SLA terms, backup and recovery behavior, quotas, limits, and pricing in current documentation.

## Questions and Tensions

- “Unlimited scale” is marketing shorthand; schema design, hotspots, quotas, latency, geography, and cost still constrain real systems.
- The primer does not compare migration complexity or operational economics with regional relational databases and other distributed stores.

## Source

- [Video](https://www.youtube.com/watch?v=5bjYk6Hhd10)
- [transcript.md](./transcript.md)
