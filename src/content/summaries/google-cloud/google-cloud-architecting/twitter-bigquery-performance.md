---
title: How Twitter maximizes performance with BigQuery
resourceId: 68
date: 2022-10-08
collection: google-cloud-architecting
order: 6
videoId: Pym8Evbf7Ak
---

Unnamed speakers presented as Twitter engineers describe Twitter's 2022 hybrid analytics platform; the source does not support more precise personal attribution.

### Key Points Covered

- They describe separate batch and streaming replication paths from HDFS and Kafka into BigQuery. [01:03–04:16](https://www.youtube.com/watch?v=Pym8Evbf7Ak&t=63s)
- Teams used the data for timeline analytics and abuse-model investigation and validation. [04:16–06:23](https://www.youtube.com/watch?v=Pym8Evbf7Ak&t=256s)
- Separate compute and storage projects isolated workspaces and quotas from stricter data controls. [05:20–07:26](https://www.youtube.com/watch?v=Pym8Evbf7Ak&t=320s)
- A scheduled GKE service generated Terraform and reconciled resources and policy from source-controlled configuration. [10:37–12:46](https://www.youtube.com/watch?v=Pym8Evbf7Ak&t=637s)
- This 2022 jointly framed account is not a reusable reference design; check current documentation, test quotas and workloads, and conduct current privacy, profiling, abuse-safety, data-governance, and security review.

Full video: <https://www.youtube.com/watch?v=Pym8Evbf7Ak>
