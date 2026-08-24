---
title: "Observing container environments with Cloud Operations"
videoId: ilY4-Aw1Z2M
sourceUrl: "https://www.youtube.com/watch?v=ilY4-Aw1Z2M"
publishedAt: "2021-10-06T15:00:20Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter compares the observability available for containers on GKE, Cloud Run, and Anthos, then walks through infrastructure, workload, log, metric, and trace views. The durable lesson is to cover both platform and application signals consistently; the 2021 product portfolio, automatic instrumentation claims, UI, and configuration options are dated and require current verification.

## Key Ideas

- [00:00:00]-[00:02:05] The video compares the then-current GKE, Cloud Run, and Anthos offerings by infrastructure control, operational model, and Google Cloud integration; its pricing and product claims are historical.
- [00:02:05]-[00:03:08] With the demonstrated GKE system/workload logging and monitoring settings enabled, cluster and container logs plus infrastructure metrics are ingested automatically.
- [00:03:08]-[00:04:10] GKE dashboards connect alerts, metrics, and logs down to pod and container resources, but the presenter says GKE workloads do not have automatic tracing and points to OpenTelemetry instrumentation.
- [00:04:10]-[00:06:18] The 2021 Cloud Run example exposes request metrics, logs, and traces, while the Anthos example covers control-plane, node, workload, and application signals across managed clusters.

## Practical Implications

Inventory the telemetry each container platform currently provides by default, add missing application instrumentation—such as the OpenTelemetry tracing called out for GKE workloads—and preserve resource labels that support movement from service symptoms to pods and containers. Confirm current GKE, Cloud Run, and hybrid-platform names, defaults, pricing, integrations, and console workflows.

## Questions and Tensions

Managed defaults reduce setup effort but can obscure gaps in trace coverage or platform-specific semantics. A consistent dashboard does not by itself guarantee equivalent telemetry quality across environments.

## Source

https://www.youtube.com/watch?v=ilY4-Aw1Z2M

[transcript.md](./transcript.md)
