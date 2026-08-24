---
title: "Getting started with Managed Service for Prometheus: Ingestion"
videoId: hB8Oc-xudQc
sourceUrl: "https://www.youtube.com/watch?v=hB8Oc-xudQc"
publishedAt: "2022-03-16T17:00:33Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Yuri, identified in the auto-generated transcript as an SRE at Google Cloud, presents a narrow 2022 path from an operator-managed Prometheus deployment on GKE to Google Managed Service for Prometheus. The durable ideas are cross-cluster PromQL querying and validation before and after a change; the demonstrated forked-image replacement and console workflow require verification against current documentation.

## Key Ideas

- [00:00:00] The managed service is presented as a way to retain Prometheus collection and PromQL while avoiding operation of the metrics back end at scale.
- [00:00:59] The walkthrough first validates the Prometheus server, node exporter, Grafana, and local query results before changing the deployment.
- [00:01:59] After replacing the server image with Google’s fork in the shown Prometheus custom resource, the walkthrough checks local collection again and confirms managed-backend ingestion through the Cloud console.
- [00:02:57] A successful migration preserves query access and enables the same metrics to support charts and alerts.

## Practical Implications

Inventory and test the existing monitoring path before migration, then validate both collection and remote querying afterward. Do not follow the demonstrated binary or image replacement literally without checking the current supported migration path, compatibility constraints, and rollback guidance.

## Questions and Tensions

The short demonstration does not cover high availability, rule migration, existing historical data, authentication, cost, or failure recovery. Its claim that migration is easy applies only to the narrow operator-managed setup shown, not every production Prometheus deployment; auto-captioned command and configuration details also require source-documentation checks.

## Source

https://www.youtube.com/watch?v=hB8Oc-xudQc

[transcript.md](./transcript.md)
