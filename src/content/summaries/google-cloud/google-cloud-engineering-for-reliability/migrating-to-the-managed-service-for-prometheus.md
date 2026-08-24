---
title: "Migrating to the managed service for Prometheus"
resourceId: 63
date: "2022-04-13"
collection: "google-cloud-engineering-for-reliability"
order: 21
videoId: "YjEh_V7MRc4"
---

Yuri, identified in the transcript as an SRE at Google Cloud, demonstrates moving one application's scrape configuration from Prometheus Operator to Google Cloud managed collection. Querying the same application metric with PromQL after migration confirms the shown ingestion path; it does not establish complete configuration, resource, or feature parity ([00:00:00]-[00:03:03]).

### Key Points Covered

- **The starting boundary is a ServiceMonitor**: Prometheus Operator uses it to discover and scrape the application's `/metrics` endpoint ([00:01:04]).
- **The migration translates one scrape resource**: The walkthrough replaces that ServiceMonitor with a similar `PodMonitoring` resource ([00:02:11]).
- **Validation checks the application metric**: PromQL and Metrics Explorer confirm ingestion after the new resource is applied ([00:03:03]).
- **Important migration questions remain open**: The episode does not assess full parity, rollback, cost, data residency, rules, or historical data; the auto-captioned traffic term near the collector explanation is uncertain ([00:02:11]).

The enablement commands, resource schemas, collection behavior, and UI are from 2022. Inventory current configuration and verify authoritative migration guidance before changing production.

Full video: <https://www.youtube.com/watch?v=YjEh_V7MRc4>
