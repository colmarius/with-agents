---
title: "How to do alerting right"
videoId: r3oZVYVSbqg
sourceUrl: "https://www.youtube.com/watch?v=r3oZVYVSbqg"
publishedAt: "2023-10-05T16:00:41Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Aaron, who identifies himself as a Cloud Operations Advocate at Google, and an unnamed host discuss reducing alert noise through an SRE-oriented focus on user impact, automation, and actionable notification paths.

## Key Ideas

- Aaron frames SRE as using software-engineering practices to automate repetitive operational work and reduce toil. [00:00:00]-[00:02:06]
- His alerting rule is to notify a person only when an event affects the system's purpose and the response is not already automated. [00:02:06]-[00:04:12]
- For Cloud Run, Aaron recommends relying on failover rather than alerting on each container crash, then alerting on service symptoms such as widespread HTTP 500 responses or breached SLOs. [00:04:12]-[00:05:16]
- Immediate, high-impact issues should page the on-call responder with a playbook; less urgent work can become a ticket. [00:05:16]-[00:08:27]
- The 2023 Google Cloud Monitoring discussion includes notification policies, contextual labels and metadata, and delivery through SMS, Slack, PagerDuty, Pub/Sub, or webhooks. [00:07:23]-[00:09:31]

## Practical Implications

- Start alert reviews from user-visible service outcomes, then remove resource-level notifications covered by reliable automation.
- Give each remaining alert an owner, expected action, urgency, and diagnostic context; verify current Cloud Monitoring, SLO, Cloud Run failover, notification-channel, and console behavior because the details are from 2023.

## Questions and Tensions

- Symptom-based alerting reduces noise but still needs diagnostics that help responders identify underlying causes.
- The discussion gives rules of thumb rather than thresholds for SLO burn rates, traffic seasonality, or low-volume services.

## Source

- https://www.youtube.com/watch?v=r3oZVYVSbqg
- [transcript.md](./transcript.md)
