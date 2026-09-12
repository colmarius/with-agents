---
title: "Migrating to the managed service for Prometheus"
resourceId: 63
date: "2022-04-13"
collection: "google-cloud-engineering-for-reliability"
order: 21
videoId: "YjEh_V7MRc4"
---

Prometheus collects measurements by reading, or **scraping**, an application's metrics endpoint. Yuri, an SRE at Google Cloud, demonstrates moving one application's collection configuration to Google's managed service so the team no longer has to operate its own Prometheus infrastructure ([00:00–02:11](https://www.youtube.com/watch?v=YjEh_V7MRc4&t=0s)).

### Key Points Covered

- **Establish the working configuration first**: Prometheus Operator manages the existing Prometheus deployment. A `ServiceMonitor` resource tells it to discover and scrape the application's `/metrics` endpoint; the presenter confirms that the app is a target and that its measurements are arriving ([00:00–02:11](https://www.youtube.com/watch?v=YjEh_V7MRc4&t=0s)).
- **Translate the collection configuration**: After enabling managed collection, the walkthrough replaces the `ServiceMonitor` with a `PodMonitoring` resource. The configuration is similar, but the presenter explicitly warns that some fields may need to change ([02:11–03:03](https://www.youtube.com/watch?v=YjEh_V7MRc4&t=131s)).
- **Check data, not just successful configuration**: Queries in PromQL, Prometheus's query language, and Metrics Explorer confirm that the application's measurements arrive after migration. This validates the example's collection path, not complete compatibility for every Prometheus feature or configuration ([03:03–03:55](https://www.youtube.com/watch?v=YjEh_V7MRc4&t=183s)).

Full video: <https://www.youtube.com/watch?v=YjEh_V7MRc4>
