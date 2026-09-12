---
title: "Getting started with Managed Service for Prometheus: Ingestion"
resourceId: 63
date: "2022-03-16"
collection: "google-cloud-engineering-for-reliability"
order: 2
videoId: "hB8Oc-xudQc"
---

Google Managed Service for Prometheus provides a managed backend for metrics, letting teams query across clusters with PromQL, Prometheus's query language. Yuri, a site reliability engineer at Google Cloud, demonstrates a 2022 migration of an existing Prometheus installation on Google Kubernetes Engine (GKE), retaining local collection while sending data to that backend ([00:00–02:57](https://www.youtube.com/watch?v=hB8Oc-xudQc&t=0s)).

### Key Points Covered

- **Confirm collection works before changing it**: The demo checks the Prometheus server, the node exporter that gathers node-level infrastructure metrics, and Grafana. A local query confirms that metrics are being collected and can be read ([00:59–01:59](https://www.youtube.com/watch?v=hB8Oc-xudQc&t=59s)).
- **Change the collector, then test local and remote queries**: The shown installation is managed by the Prometheus operator. Yuri changes its server image to Google's fork, which sends collected metrics to the managed backend. He repeats the local query after restart, then queries in the Cloud console to confirm remote ingestion. This image replacement is the specific 2022 migration demonstrated, not a general migration recipe ([00:59–02:57](https://www.youtube.com/watch?v=hB8Oc-xudQc&t=59s)).
- **Use the ingested metrics for charts and alerts**: The same measurements become available in Metrics Explorer. The demo establishes collection and query access; it does not demonstrate migration of historical data or alerting rules ([01:59–03:46](https://www.youtube.com/watch?v=hB8Oc-xudQc&t=119s)).

Full video: <https://www.youtube.com/watch?v=hB8Oc-xudQc>
