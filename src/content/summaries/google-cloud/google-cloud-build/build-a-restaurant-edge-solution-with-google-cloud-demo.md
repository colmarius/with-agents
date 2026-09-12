---
title: "Build a restaurant edge solution with Google Cloud | demo"
resourceId: 65
date: "2022-08-18"
collection: "google-cloud-build"
order: 4
videoId: "c2I4G7UH408"
---

Priyanka Vergadia presents a 2022 demo for Abe's Burger, a fictitious restaurant chain. Edge computing puts processing at the restaurant: cameras can trigger local alerts, while the cloud combines sales across stores and calculates demand forecasts.

### Key Points Covered

- **Local and central decisions complement each other**: The scenario covers more than 5,000 locations, but the demo focuses on dirty-table detection and demand forecasting. Vergadia illustrates their relationship with a trash bin that is 75% full: an approaching lunch rush could make emptying it now more useful than waiting until it is full [01:03–04:14](https://www.youtube.com/watch?v=c2I4G7UH408&t=63s).
- **Management and analysis have different jobs**: Anthos manages the stores' workloads, configuration, and policy in this 2022 design. Pub/Sub transports events to the cloud, where Dataflow adds region, franchise, and product context and groups events into time intervals. Dashboards and models can then compare minute, hourly, and daily totals [04:14–07:23](https://www.youtube.com/watch?v=c2I4G7UH408&t=254s).
- **The forecast is deliberately simplistic**: The demonstrated BigQuery ML model uses historical sales to calculate demand, and Vergadia says a production model would likely be more complex [06:21–07:23](https://www.youtube.com/watch?v=c2I4G7UH408&t=381s).
- **MySQL replication is a proposed distribution path**: The presentation offers daily scheduled calculations stored in Cloud SQL and replication to existing edge MySQL instances as one option; it does not establish production replication behavior or reliability [07:23–08:26](https://www.youtube.com/watch?v=c2I4G7UH408&t=443s).
- **Two models distinguish a dirty table from one still in use**: Local camera processing combines a table-cleanliness classifier trained with Vertex AI AutoML and a public TensorFlow Hub people detector. Results go to a local database and alerts reach the dashboard through a local queue. The small training image set and reported recall do not establish field accuracy [08:26–11:16](https://www.youtube.com/watch?v=c2I4G7UH408&t=506s).

Full video: <https://www.youtube.com/watch?v=c2I4G7UH408>
