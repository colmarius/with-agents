---
title: "How to use metrics scopes in Cloud Monitoring"
videoId: _FKdug6B5FM
sourceUrl: "https://www.youtube.com/watch?v=_FKdug6B5FM"
publishedAt: "2021-10-20T23:00:12Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter explains how Cloud Monitoring metric scopes aggregate visibility across projects while a scoping project stores dashboards, alerts, uptime checks, and groups. The architectural separation and access-control concerns are durable; the 2021 console flow, API shape, terminology, and recommended configuration should be verified against current documentation.

## Key Ideas

- [00:00:00]-[00:01:03] In the model demonstrated in 2021, each Google Cloud project hosts a metric scope and stores that scope's alerts, uptime checks, dashboards, and monitoring groups.
- [00:01:03]-[00:02:07] A dedicated scoping project can centralize cross-project dashboards and alerting configuration without tying that configuration to a workload project's lifecycle.
- [00:02:07]-[00:03:12] Cross-project visibility is governed by IAM: access only to the staging project does not grant visibility into the production project through the monitoring scope.
- [00:05:18]-[00:06:21] The walkthrough uses the then-current Cloud Monitoring API to automate adding a monitored-project resource to a metric scope.

## Practical Implications

Separate shared monitoring configuration from disposable workload projects, define access deliberately, and automate project enrollment where scale warrants it. Validate current IAM roles, API resources, limits, and console navigation before adopting the walkthrough.

## Questions and Tensions

Central scopes improve consistency and cross-project diagnosis, but they also concentrate configuration ownership and access. Organizations still need clear boundaries for teams that should see only a subset of operational data.

## Source

https://www.youtube.com/watch?v=_FKdug6B5FM

[transcript.md](./transcript.md)
