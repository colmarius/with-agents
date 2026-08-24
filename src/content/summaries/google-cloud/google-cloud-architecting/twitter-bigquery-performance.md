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

- They describe separate batch and streaming replication paths from HDFS and Kafka into BigQuery. [00:01:03]-[00:04:16]
- Teams used the data for timeline analytics and abuse-model investigation and validation. [00:04:16]-[00:06:23]
- Separate compute and storage projects isolated workspaces and quotas from stricter data controls. [00:05:20]-[00:07:26]
- A scheduled GKE service generated Terraform and reconciled resources and policy from source-controlled configuration. [00:10:37]-[00:12:46]
- This 2022 jointly framed account is not a reusable reference design; check current documentation, test quotas and workloads, and conduct current privacy, profiling, abuse-safety, data-governance, and security review.

Full video: <https://www.youtube.com/watch?v=Pym8Evbf7Ak>
