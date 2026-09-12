---
title: "Cloud Spanner in a minute"
resourceId: 66
date: "2020-10-05"
collection: "google-cloud-bytes"
order: 5
videoId: "5bjYk6Hhd10"
---

Stephanie introduces Cloud Spanner as a managed relational database for applications that need transactions and data replicated across regions. The 2020 primer emphasizes keeping relational database features while scaling across regions and continents [00:00–00:51](https://www.youtube.com/watch?v=5bjYk6Hhd10&t=0s).

### Key Points Covered

- **TrueTime supplies a shared notion of time**: Stephanie attributes consistency across rows and regions to this global time mechanism. The primer names the mechanism but does not explain the transaction protocol behind it [00:00–00:51](https://www.youtube.com/watch?v=5bjYk6Hhd10&t=0s).
- **Keep database features while delegating operations**: Users define a schema, query with SQL, and use transactions. Spanner manages replication, backup, and restore, and the primer describes changing schemas without planned downtime [00:51–01:45](https://www.youtube.com/watch?v=5bjYk6Hhd10&t=51s).
- **Scale and availability claims need their conditions**: The primer recommends high-scale transaction and real-time decision workloads and cites availability up to 99.999%, without covering topology, hotspots, latency, limits, or cost [00:51–01:45](https://www.youtube.com/watch?v=5bjYk6Hhd10&t=51s).

Full video: <https://www.youtube.com/watch?v=5bjYk6Hhd10>
