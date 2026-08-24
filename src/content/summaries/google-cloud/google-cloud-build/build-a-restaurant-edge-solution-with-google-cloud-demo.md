---
title: "Build a restaurant edge solution with Google Cloud | demo"
resourceId: 65
date: "2022-08-18"
collection: "google-cloud-build"
order: 4
videoId: "c2I4G7UH408"
---

Priyanka Vergadia presents a 2022 edge-computing demo for Abe's Burger, a fictitious restaurant chain. The captured source states no affiliation for her. The design separates latency-sensitive local work from centralized fleet management, processing, forecasting, and model training.

### Key Points Covered

- **The scenario spans local sensing and centralized analysis**: The fictitious chain uses camera and sensor examples for table cleanliness, drive-through waits, refrigeration, food quality, personalization, and demand forecasting across more than 5,000 locations [00:01:03]-[00:03:08].
- **The demo gives fleet control and data processing distinct roles**: Vergadia presents Anthos as the 2022 control plane, while Pub/Sub and Dataflow carry, enrich, window, and aggregate store events for dashboards and models [00:03:08]-[00:06:21].
- **The forecast is deliberately simplistic**: The demonstrated BigQuery ML model uses historical sales to calculate demand, and Vergadia says a production model would likely be more complex [00:06:21]-[00:07:23].
- **MySQL replication is a proposed distribution path**: The presentation offers daily scheduled calculations stored in Cloud SQL and replication to existing edge MySQL instances as one option; it does not establish production replication behavior or reliability [00:07:23]-[00:08:26].
- **Local image inference is part of the demo**: The restaurant UI combines a Vertex AI AutoML table classifier with a public TensorFlow Hub people-detection model, but the small image set and reported recall do not establish field accuracy [00:08:26]-[00:10:32].

This is a historical vendor demonstration, not a current edge blueprint. Validate present-day platform support, disconnected operation, replication semantics, model quality, privacy, fleet identity, rollout, observability, and cost before adapting it.

Full video: <https://www.youtube.com/watch?v=c2I4G7UH408>
