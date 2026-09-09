---
title: "Understanding serverless relational data at scale"
resourceId: 59
date: "2022-04-14"
collection: "google-cloud-serverless-expeditions"
order: 6
videoId: "IqAe1WRPjfU"
---

The presenters consider Cloud Spanner for a hypothetical NoSQL-backed application that now needs ACID transactions, cross-record aggregation, stronger consistency, and managed scaling. Product capability, scale, availability, pricing, and tuning statements are April 2022 claims rather than demonstrated guarantees.

### Key points

- **Managed does not mean responsibility-free:** The presenter says Spanner handles patching, server maintenance, load-balancing and failover architecture, and default encryption, while customers retain access control, backup scheduling, schema migrations, and optional key management [01:03–03:07](https://www.youtube.com/watch?v=IqAe1WRPjfU&t=63s).
- **The scale figure is product-wide and unqualified:** The presenter says Spanner processes more than one billion requests per second at peak [02:05–03:07](https://www.youtube.com/watch?v=IqAe1WRPjfU&t=125s). The episode does not frame that as Google's aggregate traffic, a per-instance capacity, or a result available to the sample application.
- **Consistency and availability need their original qualifications:** The presenter attributes global consistency to TrueTime and states an SLA of up to 99.999% [03:07–04:12](https://www.youtube.com/watch?v=IqAe1WRPjfU&t=187s). The console walkthrough separately says a multi-region configuration is appropriate when five-nines availability is required [04:12–05:16](https://www.youtube.com/watch?v=IqAe1WRPjfU&t=252s).
- **The price and scaling demo are point-in-time:** A regional development instance with 100 processing units is quoted at $0.09 per hour, about $65 per month. The load test adds processing units after CPU crosses an unnamed recommended threshold, then observes more requests without reporting reproducible throughput or latency [04:12–07:21](https://www.youtube.com/watch?v=IqAe1WRPjfU&t=252s).

Validate current Spanner editions, pricing, processing-unit guidance, CPU thresholds, scaling behavior, SLA terms, backup policy, IAM, and migration requirements. The demo does not establish instance capacity or an application's achievable performance.

Full video: <https://www.youtube.com/watch?v=IqAe1WRPjfU>
