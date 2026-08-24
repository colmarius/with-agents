---
title: "Getting started with Managed Service for Prometheus: Ingestion"
resourceId: 63
date: "2022-03-16"
collection: "google-cloud-engineering-for-reliability"
order: 2
videoId: "hB8Oc-xudQc"
---

Yuri, identified in the transcript as an SRE at Google Cloud, presents a narrow migration from an operator-managed Prometheus deployment on GKE to Google Managed Service for Prometheus. The walkthrough validates local collection, replaces the server image in the shown custom resource, validates again, and confirms remote ingestion ([00:00:59]-[00:02:57]).

### Key Points Covered

- **Establish a working baseline first**: The demo checks the Prometheus server, node exporter, Grafana, and local queries before changing the deployment ([00:00:59]-[00:01:59]).
- **Validate both sides of the migration**: It repeats local checks after the image change, then confirms that the managed backend can query the metrics ([00:01:59]-[00:02:57]).
- **PromQL continuity is useful but limited evidence**: Querying the same data supports the demonstrated chart-and-alert workflow; it does not prove complete feature, resource, rule, or configuration parity ([00:02:57]).
- **Production concerns remain outside scope**: The short example does not cover high availability, historical data, authentication, cost, rollback, or failure recovery.

This is a 2022 image-replacement example, not a general migration recipe. Check current supported paths, images, resource schemas, compatibility constraints, console steps, and rollback guidance.

Full video: <https://www.youtube.com/watch?v=hB8Oc-xudQc>
