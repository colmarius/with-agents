---
title: "Migrating to the managed service for Prometheus"
videoId: YjEh_V7MRc4
sourceUrl: "https://www.youtube.com/watch?v=YjEh_V7MRc4"
publishedAt: "2022-04-13T17:00:23Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Yuri, identified in the transcript as an SRE at Google Cloud, demonstrates moving an application's scrape configuration from a Prometheus Operator deployment to Google Cloud's managed collection. The source shows the same application metric queried with PromQL after migration; it does not establish complete configuration or feature parity.

The commands, resource schemas, console workflow, and product behavior shown are from 2022 and may have changed; users should verify current Managed Service for Prometheus documentation before migrating.

## Key Ideas

- [00:00:00] The presenter says managed collection removes the need to manage Prometheus infrastructure at scale; the demonstrated migration translates an application's monitoring configuration rather than proving that every existing configuration transfers unchanged.
- [00:01:04] The starting setup uses Prometheus Operator and a ServiceMonitor to discover and scrape an application's `/metrics` endpoint.
- [00:02:11] The migration replaces this ServiceMonitor with a similar PodMonitoring resource. The presenter says this keeps each collector scraping targets on its own node and minimizes what the auto-captions render as “inter-cluster traffic”; that traffic term remains uncertain.
- [00:03:03] Successful ingestion is checked with PromQL and Metrics Explorer after applying the new configuration.

## Practical Implications

Inventory existing scrape configuration and validate target ingestion before and after migration. Treat the resource translation and current enablement commands as version-sensitive implementation details, not timeless steps.

## Questions and Tensions

Managed collection reduces the Prometheus infrastructure managed in this example but uses a Google-specific PodMonitoring resource. The video does not assess feature parity, rollback, cost, or data residency, so those require current documentation and separate evaluation.

## Source

https://www.youtube.com/watch?v=YjEh_V7MRc4

[transcript.md](./transcript.md)
