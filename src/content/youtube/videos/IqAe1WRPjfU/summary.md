---
title: "Understanding serverless relational data at scale"
videoId: IqAe1WRPjfU
sourceUrl: "https://www.youtube.com/watch?v=IqAe1WRPjfU"
publishedAt: "2022-04-14T23:00:04Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Martin speaks with Derek, identified in the transcript as a developer advocate specializing in databases, about moving a growing Cloud Run application from NoSQL storage to Cloud Spanner when it needs relational queries, ACID transactions, and stronger consistency. Product capabilities, scale figures, availability, pricing, and console steps are claims made in April 2022, not current guarantees.

## Key Ideas

- The scenario introduces Spanner after a NoSQL-backed MVP develops a need for ACID transactions and aggregations across thousands of records. [00:00:00]-[00:01:03]
- Derek describes Spanner as managed infrastructure while leaving customers responsible for access control, backup scheduling, and schema migrations. [00:01:03]-[00:02:05]
- In April 2022, Derek claims horizontal scaling, more than one billion requests per second at Google's peak, TrueTime-based global consistency, and an availability SLA of up to five nines. [00:02:05]-[00:04:12]
- The walkthrough chooses a regional development instance with 100 processing units and quotes then-current pricing of $0.09 per hour, about $65 per month. [00:04:12]-[00:05:16]
- The Node.js example uses a Spanner client, standard SQL, instance and database identifiers, and a Cloud Run service account; the load test adds processing units when CPU crosses a recommended threshold. [00:05:16]-[00:07:21]

## Practical Implications

- A managed relational database can reduce infrastructure work without removing database administration, capacity planning, schema design, backup policy, or access-control responsibilities.
- Validate current Spanner editions, limits, SLA terms, pricing, IAM, client configuration, and scaling guidance before using this April 2022 example.

## Questions and Tensions

- The global request-rate claim describes aggregate Google usage, not the demonstrated application's capacity or a per-instance guarantee.
- The load test omits reproducible throughput, latency, schema, region, processing-unit totals, and cost results.

## Source

https://www.youtube.com/watch?v=IqAe1WRPjfU

[transcript.md](./transcript.md)
