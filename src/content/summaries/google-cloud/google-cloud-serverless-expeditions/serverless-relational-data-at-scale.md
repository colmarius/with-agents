---
title: "Understanding serverless relational data at scale"
resourceId: 59
date: "2022-04-14"
collection: "google-cloud-serverless-expeditions"
order: 6
videoId: "IqAe1WRPjfU"
---

An application's first database may stop fitting as its queries and consistency needs grow. In this April 2022 example, Martin and database developer advocate Derek consider Cloud Spanner for a NoSQL-backed application that struggles with consistent transactions and sums or averages across thousands of records.

### Key points

- **Managed does not mean responsibility-free:** The presenter says Spanner handles patching, server maintenance, load-balancing and failover architecture, and default encryption, while customers retain access control, backup scheduling, schema migrations, and optional key management [01:03–03:07](https://www.youtube.com/watch?v=IqAe1WRPjfU&t=63s).
- **The application does not select a replica:** Derek explains that Spanner keeps copies across zones or regions to handle maintenance and outages. The sample Node.js code supplies an instance and database and uses SQL; Spanner handles which copy serves the request. His “up to 99.999%” availability claim is qualified by the later recommendation to use a multi-region configuration for that requirement [03:07–06:19](https://www.youtube.com/watch?v=IqAe1WRPjfU&t=187s).
- **Capacity remains a choice even with managed servers:** The demo starts with a small regional development instance. Under a load test of roughly three reads per write, CPU crosses the recommended threshold; Derek warns that further load would increase response times. They add processing units, the instance's capacity allocation, and observe more requests per second without changing the application. The demonstration does not report enough throughput or latency data to establish capacity for another workload [04:12–08:25](https://www.youtube.com/watch?v=IqAe1WRPjfU&t=252s).

Full video: <https://www.youtube.com/watch?v=IqAe1WRPjfU>
