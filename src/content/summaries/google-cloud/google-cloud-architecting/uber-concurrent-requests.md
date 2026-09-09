---
title: How does Uber scale to millions of concurrent requests?
resourceId: 68
date: 2022-01-23
collection: google-cloud-architecting
order: 2
videoId: DY2AR8Wzg3Y
---

Uber senior staff engineer Ankit Srivasta and Cloud Spanner engineering director Preetham Shah describe Uber Fulfillment's 2022 migration from a Cassandra-based platform to Spanner.

### Key Points Covered

- Ankit explains why cross-row and cross-table inconsistencies made consistency a primary datastore requirement. [03:16–06:25](https://www.youtube.com/watch?v=DY2AR8Wzg3Y&t=196s)
- The hybrid design used redundant routes, private API routing, and route benchmarks. [06:25–08:31](https://www.youtube.com/watch?v=DY2AR8Wzg3Y&t=385s)
- Active orders remained on their original stack while safe sessions moved progressively through test environments and bounded rollouts. [09:34–11:43](https://www.youtube.com/watch?v=DY2AR8Wzg3Y&t=574s)
- The teams subsequently tuned observability, failover, autoscaling, read routing, and caching. [11:43–18:03](https://www.youtube.com/watch?v=DY2AR8Wzg3Y&t=703s)
- This 2022 first-party account is not a reusable reference design; check current documentation and validate workload, consistency, failure, security, data, and regulatory behavior independently.

Full video: <https://www.youtube.com/watch?v=DY2AR8Wzg3Y>
