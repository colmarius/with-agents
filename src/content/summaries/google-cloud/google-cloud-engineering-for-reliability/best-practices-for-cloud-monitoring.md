---
title: "Best Practices for Cloud Monitoring"
resourceId: 63
date: "2021-11-17"
collection: "google-cloud-engineering-for-reliability"
order: 7
videoId: "pcMEFTxcco8"
---

Monitoring should answer whether users are having problems, provide enough information to respond, and keep collection costs manageable. This episode separates user-visible reliability targets from the measurements needed to diagnose failures, then explains which alerts deserve to interrupt a person ([00:00–05:16](https://www.youtube.com/watch?v=pcMEFTxcco8&t=0s)).

### Key Points Covered

- **Measure symptoms and investigate causes**: Service-level objectives (SLOs) set targets for user experience. The four “golden signals” help explain problems: traffic measures demand, errors measure unsuccessful work, latency measures response time, and saturation measures how much capacity is in use. Putting them together on a dashboard can reveal, for example, rising latency alongside increasing traffic ([01:04–04:13](https://www.youtube.com/watch?v=pcMEFTxcco8&t=64s)).
- **Page only for urgent human judgment**: Alerts should be actionable and important enough to interrupt; nonurgent work belongs in a less disruptive channel ([04:13–05:16](https://www.youtube.com/watch?v=pcMEFTxcco8&t=253s)).
- **Label combinations multiply metric volume**: Cardinality is the number of distinct values a label can take. The example's 11 cost-center values and five environment values create 55 combinations, each potentially producing a separate time series. The presenter recommends avoiding unnecessarily high-cardinality labels and reducing agent or custom metrics that are not needed ([06:20–08:33](https://www.youtube.com/watch?v=pcMEFTxcco8&t=380s)).
- **Find the source of cost before reducing collection**: In the 2021 walkthrough, billing reports show monitoring charges and ingestion metrics show which projects and custom metrics produce data. These answer different questions: what monitoring costs and where the volume comes from ([05:16–06:20](https://www.youtube.com/watch?v=pcMEFTxcco8&t=316s)).

Full video: <https://www.youtube.com/watch?v=pcMEFTxcco8>
