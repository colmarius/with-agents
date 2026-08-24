---
title: "Best Practices for Cloud Monitoring"
resourceId: 63
date: "2021-11-17"
collection: "google-cloud-engineering-for-reliability"
order: 7
videoId: "pcMEFTxcco8"
---

This episode centers monitoring on user experience, incident response, and cost. It connects SLOs and the golden signals—traffic, errors, latency, and saturation—to actionable alerting and deliberate control of telemetry volume ([00:00:00]-[00:05:16]). The transcript identifies neither the presenter nor an affiliation.

### Key Points Covered

- **Start with user-visible objectives**: SLOs show symptoms, while supporting telemetry helps explain causes and verify mitigations ([00:00:00]-[00:03:11]).
- **Page only for urgent human judgment**: Alerts should be actionable and important enough to interrupt; nonurgent work belongs in a less disruptive channel ([00:04:13]-[00:05:16]).
- **Cardinality multiplies cost and complexity**: The episode warns that labels can create many time series and suggests reviewing unneeded agent and custom metrics ([00:05:16]-[00:07:23]).
- **Less telemetry means less evidence**: Reducing metrics can lower cost while weakening later diagnosis; alert coverage can also miss novel failures.

The screens, prices, metric names, integrations, defaults, and configuration steps are from 2021. Check current documentation and weigh volume, cardinality, retention, and evidence loss together.

Full video: <https://www.youtube.com/watch?v=pcMEFTxcco8>
