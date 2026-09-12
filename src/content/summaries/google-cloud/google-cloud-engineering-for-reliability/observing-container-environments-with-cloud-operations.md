---
title: "Observing container environments with Cloud Operations"
resourceId: 63
date: "2021-10-06"
collection: "google-cloud-engineering-for-reliability"
order: 10
videoId: "ilY4-Aw1Z2M"
---

Which logs, measurements, and request traces can you use to investigate a containerized application? This 2021 comparison shows the data available in Google Kubernetes Engine (GKE), Cloud Run, and the then-named Anthos platform, including where application code needs extra instrumentation ([00:00–07:22](https://www.youtube.com/watch?v=ilY4-Aw1Z2M&t=0s)).

### Key Points Covered

- **The operating model determines what you manage**: GKE exposes Kubernetes cluster controls; Cloud Run manages infrastructure and scales in response to traffic; Anthos is presented as a way to manage applications across cloud and other environments ([00:00–02:05](https://www.youtube.com/watch?v=ilY4-Aw1Z2M&t=0s)).
- **GKE exposes infrastructure and workload evidence**: With the demonstrated settings, system and workload logs plus cluster and container metrics are collected, and dashboards connect alerts to pods and containers ([02:05–04:10](https://www.youtube.com/watch?v=ilY4-Aw1Z2M&t=125s)).
- **Logs and metrics do not automatically supply request traces**: The presenter says the GKE workloads shown need OpenTelemetry instrumentation for tracing. By contrast, the Cloud Run example opens a trace showing an individual request's latency and dependencies, alongside automatically collected request counts and latency measurements ([03:08–06:18](https://www.youtube.com/watch?v=ilY4-Aw1Z2M&t=188s)).
- **Hybrid clusters need infrastructure and application views**: The Anthos example checks cluster-management components, node resource use, and workload measurements, then filters container logs to one application's pod ([05:12–07:22](https://www.youtube.com/watch?v=ilY4-Aw1Z2M&t=312s)).

Full video: <https://www.youtube.com/watch?v=ilY4-Aw1Z2M>
