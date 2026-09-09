---
title: "How to do alerting right"
resourceId: 59
date: "2023-10-05"
collection: "google-cloud-serverless-expeditions"
order: 11
videoId: "r3oZVYVSbqg"
---

A Cloud Operations Advocate at Google presents an SRE-oriented rule for reducing alert noise: notify a person when an event affects the system's purpose and the response is not already automated.

### Key points

- **Start from user impact:** The presenter asks whether an event affects the system's purpose—including latency and user experience—before making it an alert [02:06–04:12](https://www.youtube.com/watch?v=r3oZVYVSbqg&t=126s).
- **Prefer symptoms over replaceable resources:** For Cloud Run, he recommends relying on platform failover rather than paging for every container crash, then alerting on service symptoms such as widespread HTTP 500 responses or breached SLOs [04:12–05:16](https://www.youtube.com/watch?v=r3oZVYVSbqg&t=252s). The failover behavior described is a product claim in a 2023 discussion.
- **Match the channel to urgency:** Immediate user-impacting failures should page the on-call responder and include a playbook; less urgent work can become a ticket [05:16–08:27](https://www.youtube.com/watch?v=r3oZVYVSbqg&t=316s).
- **Context should make action cheaper:** The then-current Cloud Monitoring example adds severity, project or region metadata, and routes notifications through named channels and integrations [07:23–09:31](https://www.youtube.com/watch?v=r3oZVYVSbqg&t=443s).

These are October 2023 rules of thumb, not thresholds for every service. Check current Cloud Monitoring, SLO, notification, and Cloud Run behavior, then choose burn rates, ownership, traffic-sensitive thresholds, and diagnostic context for the actual workload.

Full video: <https://www.youtube.com/watch?v=r3oZVYVSbqg>
