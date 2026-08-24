---
title: "Creating custom metrics with OpenTelemetry"
resourceId: 63
date: "2022-05-25"
collection: "google-cloud-engineering-for-reliability"
order: 23
videoId: "SCNObWlILqk"
---

Yuri, identified in the transcript as an SRE at Google Cloud, instruments a Python service with request and error counters plus a processing-latency histogram. The example keeps three boundaries distinct: the application records telemetry, an OpenTelemetry Collector receives and forwards it, and Cloud Monitoring queries and visualizes the exported metrics ([00:00:00]-[00:03:10]).

### Key Points Covered

- **Metric instruments match operational questions**: Counters represent traffic and failures, while a histogram represents latency ([00:00:00]-[00:01:03]).
- **The application owns recording and identity**: It configures an exporter, meter provider, and service information before recording values ([00:01:03]).
- **The Collector is a separate delivery component**: In the demo it runs in the application's GKE namespace, receives telemetry from three replicas, and forwards it to the backend ([00:02:04]).
- **The backend owns analysis and presentation**: Cloud Monitoring combines counters into an error ratio and displays histogram data as a heat map ([00:03:10]).

Custom metrics create naming, cardinality, cost, retention, and lifecycle obligations. The SDK APIs, collector deployment, resource schemas, GKE configuration, aggregation behavior, and UI are from 2022; verify current documentation.

Full video: <https://www.youtube.com/watch?v=SCNObWlILqk>
