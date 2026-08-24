---
title: "How to use Cloud Audit Logging"
resourceId: 57
date: "2021-07-03"
collection: "google-cloud-security-basics"
order: 10
videoId: "SaLHDNqrZ80"
---

This episode uses an insider-access scenario to explain audit logs as investigation evidence and distinguishes the then-current log categories, defaults, and costs.

### Key Points Covered

- **Audit trails provide investigation evidence**: Logs help identify who accessed or changed resources during active investigations and post-incident analysis [00:02:06]-[00:03:09].
- **Categories had different 2021 behavior**: The episode distinguishes Admin Activity, Data Access, System Event, and Policy Denied logs, with different stated enablement, cost, and disablement properties [00:03:09]-[00:05:16].
- **Collection does not identify malicious intent**: Audit logs have no inherent concept of suspicious activity; teams still need alerts, review, context, and an investigation process [00:05:16]-[00:06:18].
- **Availability is presented as best effort**: The video's expectation that records could be delayed by up to five minutes is not a delivery or latency guarantee [00:05:16]-[00:06:18].
- **Data Access logs support the example**: They let the investigator trace unexpected file access, while the episode recommends alerts and regular review for ongoing detection [00:05:16]-[00:06:18].
- **Treat this as dated guidance**: This is a 2021 explanation; verify current Cloud Audit Logs documentation, IAM behavior, categories, defaults, availability, pricing, quotas, UI, products, and incident-response guidance.

Full video: <https://www.youtube.com/watch?v=SaLHDNqrZ80>
