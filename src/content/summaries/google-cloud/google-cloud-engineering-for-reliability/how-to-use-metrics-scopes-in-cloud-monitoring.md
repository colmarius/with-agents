---
title: "How to use metrics scopes in Cloud Monitoring"
resourceId: 63
date: "2021-10-20"
collection: "google-cloud-engineering-for-reliability"
order: 9
videoId: "_FKdug6B5FM"
---

This episode explains how Cloud Monitoring metric scopes provide visibility across projects while a scoping project stores dashboards, alerts, uptime checks, and groups. The transcript identifies neither the presenter nor an affiliation.

### Key Points Covered

- **Separate shared monitoring from workload lifecycle**: A dedicated scoping project can retain cross-project configuration when workload projects change ([00:00:00]-[00:02:07]).
- **Visibility still follows IAM**: Access to one monitored project does not automatically grant access to another through the shared scope ([00:02:07]-[00:03:12]).
- **Enrollment can be automated**: The walkthrough uses the Cloud Monitoring API to add a monitored-project resource to a metric scope ([00:05:18]-[00:06:21]).
- **Central configuration concentrates ownership**: Consistency improves, but teams still need boundaries for who can view or change shared operational data.

The terminology, API shape, resource schema, limits, recommended topology, and console flow shown are from 2021. Validate the current model and IAM roles before adopting the design.

Full video: <https://www.youtube.com/watch?v=_FKdug6B5FM>
