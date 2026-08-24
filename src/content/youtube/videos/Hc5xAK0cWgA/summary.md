---
title: "How to build an AI-powered mobile ad platform"
videoId: Hc5xAK0cWgA
sourceUrl: "https://www.youtube.com/watch?v=Hc5xAK0cWgA"
publishedAt: "2022-02-05T17:00:11Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Max Saltenstall interviews Chang, introduced as vice president of engineering at Moloco. Chang describes Moloco's 2022 mobile-ad bidding platform as a latency-bounded online inference path connected to larger offline feature, training, feedback, and analysis pipelines. The architecture, scale, performance, and cost statements are Chang's account of Moloco's system, not independently validated benchmarks or a universal design.

## Key Ideas

- Chang says each auction response had to fit within an end-to-end deadline, leaving a smaller inference budget for models estimating response, lifetime value, and market conditions. [00:02:13]-[00:05:25]
- He says Moloco favored wide, relatively shallow models and accepted more expensive training so online inference could remain fast. [00:05:25]-[00:06:28]
- Chang describes a GKE-based bid processor that selected candidate campaigns, assembled features from Bigtable and BigQuery, invoked custom TensorFlow Serving, and returned the bid; impression and engagement feedback then supported billing records and future training examples. [00:08:33]-[00:12:49]
- He says event data were stored across Bigtable, Cloud Storage, and BigQuery according to access and replay needs, with Dataflow creating training features and Looker over BigQuery supporting human analysis. [00:13:54]-[00:17:01]
- Chang describes native autoscaling, varied node types including preemptible VMs, Bigtable garbage collection, and unit-cost tracking as cost controls while throughput grew. [00:17:01]-[00:21:17]

## Practical Implications

- Allocate a latency budget across network, feature retrieval, inference, and response before choosing model complexity.
- Separate online serving from replayable raw data, feature generation, model training, feedback capture, and analyst access.
- Measure cost per useful business operation, not only aggregate infrastructure spend, and test autoscaling against real burst patterns.
- Treat all scale and performance numbers, service and product behavior, AI/ML claims, and described data, cost, and security controls as a 2022 first-party snapshot requiring current documentation and fresh measurement. Ad targeting also requires domain-specific privacy, consent, fairness, safety, security, data-governance, and regulatory review.

## Questions and Tensions

- The episode does not evaluate model quality, auction fairness, consent, data provenance, feature leakage, abuse prevention, deletion, or the effects on users receiving ads.
- Several auto-captioned scale figures are ambiguous and should not be treated as precise benchmarks without the original architecture materials.
- The closing platform endorsement is promotional; the reusable design is the online/offline split and feedback loop, not a blanket service recommendation.

## Source

- [Video](https://www.youtube.com/watch?v=Hc5xAK0cWgA)
- [transcript.md](./transcript.md)
