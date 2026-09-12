---
title: How Twitter maximizes performance with BigQuery
resourceId: 68
date: 2022-10-08
collection: google-cloud-architecting
order: 6
videoId: Pym8Evbf7Ak
---

Twitter's 2022 analytics platform copied data from its own data centers into BigQuery so teams could investigate usage and build models. Twitter engineers explain how they separated query workloads from governed data storage and automated setup for self-service access.

### Key Points Covered

- **Batch and streaming data take separate routes.** Batch jobs copy files from the Hadoop Distributed File System (HDFS) through Cloud Storage into BigQuery. A streaming service relays events from Kafka through Pub/Sub into BigQuery. Both paths must keep changing source and destination data aligned. [01:03–04:16](https://www.youtube.com/watch?v=Pym8Evbf7Ak&t=63s)
- **Analysis informs product and abuse investigations.** Teams analyze timeline data and investigate replies and tweet content. The engineers describe using BigQuery ML with Twitter's own models to analyze and validate abuse detection, rather than presenting BigQuery as a complete abuse-detection system. [04:16–06:23](https://www.youtube.com/watch?v=Pym8Evbf7Ak&t=256s)
- **Separate projects serve different responsibilities.** Queries and processing jobs run in compute projects, giving users and teams their own workspaces and quotas so one workload does not consume another's allowance. Tables live in storage projects with stricter privacy and access controls. [05:20–07:26](https://www.youtube.com/watch?v=Pym8Evbf7Ak&t=320s)
- **Automation maintains the arrangement after setup.** Employees add ownership and log information to version-controlled configuration. A scheduled service on Google Kubernetes Engine generates Terraform infrastructure definitions and brings existing resources back into alignment, including dataset permissions, required APIs, and security policies. [10:37–12:46](https://www.youtube.com/watch?v=Pym8Evbf7Ak&t=637s)

Full video: <https://www.youtube.com/watch?v=Pym8Evbf7Ak>
