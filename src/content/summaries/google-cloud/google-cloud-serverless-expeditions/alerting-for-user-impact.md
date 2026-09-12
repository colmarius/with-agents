---
title: "How to do alerting right"
resourceId: 59
date: "2023-10-05"
collection: "google-cloud-serverless-expeditions"
order: 11
videoId: "r3oZVYVSbqg"
---

Too many alerts interrupt engineers without helping users. Aaron, a Cloud Operations Advocate at Google, offers a rule for reducing the noise: notify a person when an event affects the system's purpose and the response is not already automated.

### Key points

- **Start from user impact:** The presenter asks whether an event affects the system's purpose—including latency and user experience—before making it an alert [02:06–04:12](https://www.youtube.com/watch?v=r3oZVYVSbqg&t=126s).
- **Alert on what users experience:** In this 2023 discussion, Aaron recommends relying on Cloud Run's automatic failover rather than paging for every container crash. If most requests return HTTP 500 errors, however, users are affected and a service-level alert is relevant. This shifts attention from many possible causes to a few observable symptoms [04:12–06:20](https://www.youtube.com/watch?v=r3oZVYVSbqg&t=252s).
- **Match the channel to urgency:** Immediate user-impacting failures should page the on-call responder and include a playbook; less urgent work can become a ticket [05:16–08:27](https://www.youtube.com/watch?v=r3oZVYVSbqg&t=316s).
- **Give the responder enough context to act:** Add a playbook, severity, project, and region to the alert so the on-call engineer does not have to reconstruct them. Notify the person expected to act, then let that person involve others if needed [06:20–09:31](https://www.youtube.com/watch?v=r3oZVYVSbqg&t=380s).

Full video: <https://www.youtube.com/watch?v=r3oZVYVSbqg>
