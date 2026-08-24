---
title: "Observing container environments with Cloud Operations"
resourceId: 63
date: "2021-10-06"
collection: "google-cloud-engineering-for-reliability"
order: 10
videoId: "ilY4-Aw1Z2M"
---

This episode compares 2021 observability across containers on GKE, Cloud Run, and Anthos. The durable lesson is to inventory platform coverage and then add the application signals needed to move from service symptoms through workload, pod, and container evidence. The transcript identifies neither the presenter nor an affiliation.

### Key Points Covered

- **Platform defaults differ**: The episode compares then-current infrastructure control, operations, Google Cloud integration, and pricing across the three environments ([00:00:00]-[00:02:05]).
- **GKE exposes infrastructure and workload evidence**: With the demonstrated settings, system and workload logs plus cluster and container metrics are collected, and dashboards connect alerts to pods and containers ([00:02:05]-[00:04:10]).
- **Application tracing is a separate boundary**: The presenter says GKE workloads are not automatically traced and points to OpenTelemetry instrumentation ([00:03:08]-[00:04:10]).
- **Similar dashboards do not imply equivalent coverage**: Cloud Run and Anthos expose different managed signals, scopes, and operational responsibilities ([00:04:10]-[00:06:18]).

Treat all 2021 product names, defaults, integrations, automatic-instrumentation claims, pricing, metrics, and UI paths as historical; verify current behavior for each platform.

Full video: <https://www.youtube.com/watch?v=ilY4-Aw1Z2M>
