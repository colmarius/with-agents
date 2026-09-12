---
title: How does Uber scale to millions of concurrent requests?
resourceId: 68
date: 2022-01-23
collection: google-cloud-architecting
order: 2
videoId: DY2AR8Wzg3Y
---

Uber's Fulfillment platform tracks active orders, jobs, and driver sessions so hundreds of services agree on what is happening. Uber senior staff engineer Ankit Srivasta and Cloud Spanner engineering director Preetham Shah describe its 2022 move from Cassandra to Spanner—and how the team switched systems without moving an order mid-trip.

### Key Points Covered

- **Consistency failures affected riders.** As operations began updating several rows and tables, application-level coordination over Cassandra's eventually consistent storage could leave conflicting records. Ankit gives the example of two drivers being dispatched to one rider. This made consistent transactions a primary requirement for the replacement database. [03:16–06:25](https://www.youtube.com/watch?v=DY2AR8Wzg3Y&t=196s)
- **The application stayed in Uber's infrastructure.** Each transaction crossed the network to Spanner in Google Cloud. The teams built redundant physical and logical connections, routed Google API traffic privately, and benchmarked the routes to identify latency and reliability problems. [06:25–09:34](https://www.youtube.com/watch?v=DY2AR8Wzg3Y&t=385s)
- **A session without an active order was the migration boundary.** Requests stayed with the system where the session began until any active order finished. Sessions with no active orders could switch to Spanner. Tests included simulated riders and drivers in test cities, followed by city-by-city or small-batch rollout over more than six months. [09:34–11:43](https://www.youtube.com/watch?v=DY2AR8Wzg3Y&t=574s)
- **Optimization followed an acceptable-performance migration.** Monitoring helped identify broken connections and packet loss; backup connections and faster health checks reduced errors in the teams' tests. Later changes routed strong reads to the leader region and stale reads to replicas, while a CPU-targeted autoscaler adjusted database capacity to changing traffic. [11:43–18:03](https://www.youtube.com/watch?v=DY2AR8Wzg3Y&t=703s)

Full video: <https://www.youtube.com/watch?v=DY2AR8Wzg3Y>
