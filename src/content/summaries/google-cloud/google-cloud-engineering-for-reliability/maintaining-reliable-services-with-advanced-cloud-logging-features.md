---
title: "Maintaining reliable services with advanced Cloud Logging features"
resourceId: 63
date: "2021-09-08"
collection: "google-cloud-engineering-for-reliability"
order: 12
videoId: "M2bQxpyBpH0"
---

Cloud Logging can do more than store events for later searches. This demonstration turns matching logs into alerts, counts requests over time, and groups application exceptions so operators can see what changed and inspect the events behind it ([00:00–05:16](https://www.youtube.com/watch?v=M2bQxpyBpH0&t=0s)).

### Key Points Covered

- **Alert on an event without repeatedly searching for it**: A query selects audit logs showing changes to Identity and Access Management (IAM) policies. The presenter creates an alert from that query, sets a notification interval and channel, then changes a policy to confirm that the alert links back to the matching logs ([00:00–02:06](https://www.youtube.com/watch?v=M2bQxpyBpH0&t=0s)).
- **Measure events over time**: A counter metric counts matching entries; the example counts App Engine requests and separates them by response status code. A distribution metric instead extracts numeric values from log payloads. These metrics can feed charts and alert conditions ([02:06–04:13](https://www.youtube.com/watch?v=M2bQxpyBpH0&t=126s)).
- **Follow an exception to its origin**: Error Reporting shows how often an error occurs, its stack trace, and individual samples. Opening a sample's logs identifies the GKE cluster, namespace, and container that emitted it ([04:13–05:16](https://www.youtube.com/watch?v=M2bQxpyBpH0&t=253s)).

Full video: <https://www.youtube.com/watch?v=M2bQxpyBpH0>
