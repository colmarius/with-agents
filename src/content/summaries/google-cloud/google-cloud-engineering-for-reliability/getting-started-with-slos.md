---
title: "Getting started with SLOs"
resourceId: 63
date: "2021-05-26"
collection: "google-cloud-engineering-for-reliability"
order: 20
videoId: "U53wC2A75Is"
---

This episode introduces SLIs and SLOs as a shared way to define reliability for user-facing applications, APIs, and data pipelines. Reliability is treated as a measured feature tied to user interactions rather than a vague uptime goal. The transcript identifies neither the presenter nor an affiliation.

### Key Points Covered

- **Service type shapes the objective**: Availability, latency, throughput, correctness, and data freshness matter differently across services ([00:00:00]-[00:01:03]).
- **An SLI makes success explicit**: The example divides successful interactions by total interactions and shows that excluding client errors is a deliberate policy choice ([00:02:05]-[00:03:07]).
- **An SLO adds target and window**: The suggested target reflects the boundary of typical user satisfaction rather than defaulting to 100 percent ([00:03:07]-[00:04:12]).
- **Window semantics affect decisions**: Calendar periods restore the full budget at rollover, while rolling windows avoid that reset ([00:06:18]).

The Cloud Operations name, product model, screens, API and resource schemas, defaults, and procedures are from 2021. Verify current interfaces and validate user expectations with evidence.

Full video: <https://www.youtube.com/watch?v=U53wC2A75Is>
