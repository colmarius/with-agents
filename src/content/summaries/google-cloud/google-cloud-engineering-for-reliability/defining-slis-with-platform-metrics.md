---
title: "Defining SLIs with platform metrics"
resourceId: 63
date: "2021-06-02"
collection: "google-cloud-engineering-for-reliability"
order: 19
videoId: "uhpAScSerec"
---

This episode shows how platform and logs-based metrics can supply service-level indicators for request-serving applications and data pipelines. The central design choice is to represent user-visible success as a request-based or window-based ratio before selecting the target. The transcript identifies neither the presenter nor an affiliation.

### Key Points Covered

- **Two SLI shapes answer different questions**: Request-based SLIs divide good work by total work, while window-based SLIs count intervals meeting a threshold ([00:00:00]).
- **Filters encode product judgment**: The load-balancer example counts HTTP 200 responses as good and asks teams to decide deliberately whether responses such as 404s belong in the total ([00:02:06]-[00:04:11]).
- **Pipelines may need windowed freshness**: A Dataflow example evaluates average system lag when per-element good-versus-total counting is unavailable ([00:05:13]-[00:06:17]).
- **Logs can bridge telemetry gaps**: Structured request status can become good and total event counts through logs-based metrics ([00:07:19]-[00:08:22]).

The console workflow, metric semantics, API and resource schemas, product names, defaults, and queries are from 2021. Verify current behavior and historical data before operational use.

Full video: <https://www.youtube.com/watch?v=uhpAScSerec>
