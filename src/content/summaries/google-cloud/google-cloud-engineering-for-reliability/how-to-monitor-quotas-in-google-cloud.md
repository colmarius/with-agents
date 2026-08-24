---
title: "How to monitor quotas in Google Cloud"
resourceId: 63
date: "2022-02-16"
collection: "google-cloud-engineering-for-reliability"
order: 4
videoId: "VxXJUYcLmTk"
---

Yuri, identified in the transcript as a site reliability engineer at Google, uses a Cloud Storage and Dataflow example to show quota exhaustion surfacing as HTTP 429 errors. A usage-to-limit ratio makes dwindling quota headroom visible before throttling becomes a user-facing failure ([00:00:00]-[00:03:11]).

### Key Points Covered

- **Quotas are capacity constraints**: Rate quotas limit activity over time, while allocation quotas limit provisioned resources until they are released ([00:01:03]).
- **Monitor headroom, not only errors**: The demonstrated MQL query calculates usage relative to the limit and uses the ratio as an alert signal ([00:02:06]-[00:03:11]).
- **Make alert behavior explicit**: The policy includes the signal, threshold, notification path, and incident-closing behavior ([00:03:11]).
- **An increase is not a guaranteed mitigation**: The example's request succeeds, but the episode does not establish that quota increases are immediate or assured.

This is a 2022 example. Verify current quota metrics, dimensions, limits, query-language support, console navigation, and increase workflow, and retain demand reduction as a fallback.

Full video: <https://www.youtube.com/watch?v=VxXJUYcLmTk>
