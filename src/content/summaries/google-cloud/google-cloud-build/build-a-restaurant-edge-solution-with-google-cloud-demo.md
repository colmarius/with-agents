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

- **The scenario spans local sensing and centralized analysis**: The fictitious chain uses camera and sensor examples for table cleanliness, drive-through waits, refrigeration, food quality, personalization, and demand forecasting across more than 5,000 locations [01:03–03:08](https://www.youtube.com/watch?v=c2I4G7UH408&t=63s).
- **The demo gives fleet control and data processing distinct roles**: Vergadia presents Anthos as the 2022 control plane, while Pub/Sub and Dataflow carry, enrich, window, and aggregate store events for dashboards and models [03:08–06:21](https://www.youtube.com/watch?v=c2I4G7UH408&t=188s).
- **The forecast is deliberately simplistic**: The demonstrated BigQuery ML model uses historical sales to calculate demand, and Vergadia says a production model would likely be more complex [06:21–07:23](https://www.youtube.com/watch?v=c2I4G7UH408&t=381s).
- **MySQL replication is a proposed distribution path**: The presentation offers daily scheduled calculations stored in Cloud SQL and replication to existing edge MySQL instances as one option; it does not establish production replication behavior or reliability [07:23–08:26](https://www.youtube.com/watch?v=c2I4G7UH408&t=443s).
- **Local image inference is part of the demo**: The restaurant UI combines a Vertex AI AutoML table classifier with a public TensorFlow Hub people-detection model, but the small image set and reported recall do not establish field accuracy [08:26–10:32](https://www.youtube.com/watch?v=c2I4G7UH408&t=506s).

This is a historical vendor demonstration, not a current edge blueprint. Validate present-day platform support, disconnected operation, replication semantics, model quality, privacy, fleet identity, rollout, observability, and cost before adapting it.

Full video: <https://www.youtube.com/watch?v=c2I4G7UH408>
