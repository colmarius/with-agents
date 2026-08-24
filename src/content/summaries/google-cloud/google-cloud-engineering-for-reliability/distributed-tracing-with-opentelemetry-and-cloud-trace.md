---
title: "Distributed tracing with OpenTelemetry and Cloud Trace"
resourceId: 63
date: "2021-08-11"
collection: "google-cloud-engineering-for-reliability"
order: 14
videoId: "NQeK8Kbu6UM"
---

This episode explains how distributed traces separate end-to-end request latency from time spent in individual services. A trace's parent and child spans only form one cross-service path when the application propagates and extracts trace context at each boundary ([00:00:00]-[00:03:07]). The transcript identifies neither the presenter nor an affiliation.

### Key Points Covered

- **Spans divide end-to-end latency**: The parent represents latency seen by the user while child spans capture calls and responses inside the distributed system ([00:01:02]-[00:02:04]).
- **Propagation is explicit**: Passing context in HTTP headers lets a backend attach its spans to the same trace; without that boundary work, frontend and backend activity will not form the demonstrated trace ([00:02:04]).
- **Trace views support comparison, not automatic diagnosis**: A waterfall highlights large latency contributors, while span events and details add context ([00:03:07]).
- **Instrumentation has costs**: The walkthrough does not cover sampling, data volume, overhead, or sensitive attributes.

The exporters, SDK APIs, semantic conventions, configuration, and Cloud Trace UI shown are from 2021. Use current OpenTelemetry and Google Cloud guidance.

Full video: <https://www.youtube.com/watch?v=NQeK8Kbu6UM>
