---
title: "Build a restaurant edge solution with Google Cloud | demo"
videoId: c2I4G7UH408
sourceUrl: "https://www.youtube.com/watch?v=c2I4G7UH408"
publishedAt: "2022-08-18T04:00:20Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Priyanka Vergadia presents a 2022 edge-computing demo for Abe's Burger, a fictitious restaurant chain. The transferable architecture separates latency-sensitive local inference and store operations from centralized fleet management, event processing, forecasting, and model training; Anthos and the other named Google Cloud services are the implementation snapshot used by the demo.

## Key Ideas

- The scenario combines camera and sensor use cases—table cleanliness, drive-through waits, refrigeration anomalies, food quality, personalization, and demand forecasting—across more than 5,000 fictitious locations. [00:01:03]-[00:03:08]
- Centralized data and forecasts are paired with local decisions at each restaurant, while Anthos is presented as the common control plane for containerized and virtualized edge workloads, configuration, and policy. [00:03:08]-[00:05:17]
- Store events flow through Pub/Sub and Dataflow for enrichment and time-window aggregation before corporate dashboards and models consume category, region, and franchise views. [00:05:17]-[00:06:21]
- A simple BigQuery ML demand model produces daily forecasts that are written to Cloud SQL and replicated to existing MySQL instances at the edge for local use. [00:06:21]-[00:08:26]
- The cleanliness demo keeps camera inference and alerting local; its models combine a Vertex AI AutoML classifier trained on labeled table images with a public TensorFlow Hub people-detection model. [00:08:26]-[00:10:32]

## Practical Implications

- Classify each edge decision by latency, connectivity, privacy, safety, and stale-data tolerance before deciding what must run locally.
- Separate fleet policy, raw-event transport, enrichment, aggregates, model training, result distribution, local inference, and alert delivery so each boundary has an explicit failure mode.
- Validate the current edge platform, replication topology, model deployment path, and operational support rather than copying this 2022 service diagram.

## Questions and Tensions

- The demo does not show disconnected operation, conflict resolution, rollout and rollback, fleet identity, certificate rotation, observability, or isolation between locations.
- The demand forecast is explicitly simplistic, and the recording provides no evaluation of forecast error, model drift, replication delay, or business impact.
- The small image set and reported recall do not establish real-world accuracy; lighting, occlusion, consent, retention, and false alerts are not evaluated.

## Source

- [Video](https://www.youtube.com/watch?v=c2I4G7UH408)
- [transcript.md](./transcript.md)
