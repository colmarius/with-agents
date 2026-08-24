---
title: "How to use metrics scopes in Cloud Monitoring"
videoId: _FKdug6B5FM
sourceUrl: "https://www.youtube.com/watch?v=_FKdug6B5FM"
publishedAt: "2021-10-20T23:00:12Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter explains how Cloud Monitoring metric scopes aggregate visibility across projects while a scoping project stores dashboards, alerts, uptime checks, and groups. The architectural separation and access-control concerns are durable; the 2021 console flow, API shape, terminology, and recommended configuration should be verified against current documentation.

## Key Ideas

- [00:00:00] Each Google Cloud project hosts a metric scope and its associated monitoring configuration.
- [00:01:03] A dedicated scoping project can centralize monitoring configuration without tying it to a workload project's lifecycle.
- [00:02:07] Visibility across monitored projects remains controlled by IAM access to the relevant monitoring context.
- [00:05:18] Metric-scope membership can be automated through the Cloud Monitoring API rather than maintained only through the console.

## Practical Implications

Separate shared monitoring configuration from disposable workload projects, define access deliberately, and automate project enrollment where scale warrants it. Validate current IAM roles, API resources, limits, and console navigation before adopting the walkthrough.

## Questions and Tensions

Central scopes improve consistency and cross-project diagnosis, but they also concentrate configuration ownership and access. Organizations still need clear boundaries for teams that should see only a subset of operational data.

## Source

https://www.youtube.com/watch?v=_FKdug6B5FM

[transcript.md](./transcript.md)
