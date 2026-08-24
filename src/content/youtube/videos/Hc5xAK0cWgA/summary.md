---
title: "How to build an AI-powered mobile ad platform"
videoId: Hc5xAK0cWgA
sourceUrl: "https://www.youtube.com/watch?v=Hc5xAK0cWgA"
publishedAt: "2022-02-05T17:00:11Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Max Saltenstall interviews Chang, identified as vice president of engineering at Moloco. Chang describes a 2022 mobile-ad bidding platform that combines a latency-bounded online inference path with larger offline feature, training, feedback, and analysis pipelines.

## Key Ideas

- Each auction response had to fit within an end-to-end deadline, leaving a smaller inference budget for several models that estimated user response, lifetime value, and market conditions. [00:02:13]-[00:05:25]
- Moloco favored wide, relatively shallow models and accepted more expensive training so online inference could remain fast. [00:05:25]-[00:06:28]
- The bid processor ran on GKE, selected candidate campaigns, assembled features from Bigtable and BigQuery, invoked custom TensorFlow Serving, and returned the bid; impression and engagement feedback then supplied billing records and future training examples. [00:08:33]-[00:12:49]
- Raw and structured event data were divided among Bigtable, Cloud Storage, and BigQuery, with Dataflow converting them into training features and Looker supporting human analysis. [00:13:54]-[00:17:01]
- Autoscaling, mixed node types, storage garbage collection, and unit-cost tracking were used to keep infrastructure growth tied to business throughput. [00:17:01]-[00:20:12]

## Practical Implications

- Allocate a latency budget across network, feature retrieval, inference, and response before choosing model complexity.
- Separate online serving from replayable raw data, feature generation, model training, feedback capture, and analyst access.
- Measure cost per useful business operation, not only aggregate infrastructure spend, and test autoscaling against real burst patterns.
- Treat every request, device, model, job, latency, throughput, cost, and product-behavior figure as a 2022 first-party snapshot requiring current documentation and fresh measurement. Ad targeting also requires current privacy, consent, fairness, safety, and regulatory review.

## Questions and Tensions

- The episode does not evaluate model quality, auction fairness, consent, data provenance, feature leakage, abuse prevention, deletion, or the effects on users receiving ads.
- Several auto-captioned scale figures are ambiguous and should not be treated as precise benchmarks without the original architecture materials.
- The closing platform endorsement is promotional; the reusable design is the online/offline split and feedback loop, not a blanket service recommendation.

## Source

- [Video](https://www.youtube.com/watch?v=Hc5xAK0cWgA)
- [transcript.md](./transcript.md)
