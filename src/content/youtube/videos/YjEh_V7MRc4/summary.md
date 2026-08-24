---
title: "Migrating to the managed service for Prometheus"
videoId: YjEh_V7MRc4
sourceUrl: "https://www.youtube.com/watch?v=YjEh_V7MRc4"
publishedAt: "2022-04-13T17:00:23Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Yuri, identified in the transcript as an SRE at Google Cloud, demonstrates moving from a Prometheus Operator deployment to Google Cloud's managed collection. The durable idea is to preserve Prometheus metrics and PromQL while transferring collector infrastructure management to a managed service.

The commands, resource schemas, console workflow, and product behavior shown are from 2022 and may have changed; users should verify current Managed Service for Prometheus documentation before migrating.

## Key Ideas

- [00:00:00] Managed collection aims to remove the operational burden of running Prometheus infrastructure while retaining application monitoring configurations.
- [00:01:04] The starting setup uses Prometheus Operator and a ServiceMonitor to discover and scrape an application's `/metrics` endpoint.
- [00:02:11] The migration replaces ServiceMonitor with PodMonitoring so collectors scrape node-local targets, reducing cross-node traffic as the deployment scales.
- [00:03:03] Successful ingestion is checked with PromQL and Metrics Explorer after applying the new configuration.

## Practical Implications

Inventory existing scrape configuration and validate target ingestion before and after migration. Treat the resource translation and current enablement commands as version-sensitive implementation details, not timeless steps.

## Questions and Tensions

Managed collection reduces infrastructure ownership but introduces provider-specific resources and operational dependencies. Teams should evaluate feature parity, migration rollback, cost, data residency, and current compatibility with their Prometheus setup.

## Source

https://www.youtube.com/watch?v=YjEh_V7MRc4

[transcript.md](./transcript.md)
