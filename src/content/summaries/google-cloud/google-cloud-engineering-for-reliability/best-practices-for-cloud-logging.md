---
title: "Best practices for Cloud Logging"
resourceId: 63
date: "2021-12-01"
collection: "google-cloud-engineering-for-reliability"
order: 6
videoId: "hh_z8qEwGfQ"
---

Useful logs need to be easy to query, kept for the right amount of time, and accessible to the right people. This episode explains how structured records and centrally stored logs support those goals in Cloud Logging ([00:00–03:07](https://www.youtube.com/watch?v=hh_z8qEwGfQ&t=0s)).

### Key Points Covered

- **Structure makes records queryable**: JSON fields can be filtered directly instead of requiring regular expressions over text payloads ([00:00–02:04](https://www.youtube.com/watch?v=hh_z8qEwGfQ&t=0s)).
- **Route related logs to shared storage**: Log buckets hold records; sinks route records to a destination. The presenter recommends using sinks to collect logs from multiple projects into a shared bucket, with audit logs as an example. Retention and location should follow the business's requirements ([02:04–03:07](https://www.youtube.com/watch?v=hh_z8qEwGfQ&t=124s)).
- **Central storage need not mean identical access**: Identity and Access Management (IAM) controls permissions, while log views narrow which records a user can see within a bucket. The example gives one user access to a single project's logs and another access to all projects' logs in the same central store ([03:07–04:09](https://www.youtube.com/watch?v=hh_z8qEwGfQ&t=187s)).

Full video: <https://www.youtube.com/watch?v=hh_z8qEwGfQ>
