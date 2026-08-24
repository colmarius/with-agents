---
title: "Cloud Spanner in a minute"
resourceId: 66
date: "2020-10-05"
collection: "google-cloud-bytes"
order: 5
videoId: "5bjYk6Hhd10"
---

The transcript identifies the presenter only as Stephanie and gives no affiliation. This 2020 primer positions Cloud Spanner as a managed relational database combining transactions, horizontal scale, and geographic replication.

### Key Points Covered

- **The consistency claim is tied to TrueTime**: Stephanie attributes cross-region external consistency to TrueTime and frames Spanner as combining relational semantics with horizontal scale [00:00:00].
- **The service manages several database operations**: Schemas, SQL, and ACID transactions are paired with managed replication, online schema changes, backup, and restore [00:00:51].
- **Scale and availability claims need their conditions**: The primer recommends high-scale transaction and real-time decision workloads and cites availability up to 99.999%, without covering topology, hotspots, latency, limits, or cost [00:00:51]-[00:01:45].

Use this as historical database-family orientation, not a selection recommendation. Check current editions, sizing, SQL dialects, topology-dependent SLA terms, recovery, quotas, limits, and pricing in current documentation.

Full video: <https://www.youtube.com/watch?v=5bjYk6Hhd10>
