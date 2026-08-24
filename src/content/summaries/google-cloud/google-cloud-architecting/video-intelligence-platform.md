---
title: How to build a Video Intelligence Platform on Google Cloud
resourceId: 68
date: 2021-08-28
collection: google-cloud-architecting
order: 5
videoId: xg_Z0rVftPs
---

Ben, identified as Arcules' cloud and security architect, describes the company's 2021 edge-and-cloud video-monitoring platform.

### Key Points Covered

- Ben describes an edge appliance that buffers data and runs containerized processing on bare metal or VMware. [00:01:05]-[00:04:12]
- GKE microservices, load balancers, and an IoT Core-to-Pub/Sub path handle cloud traffic and metadata. [00:03:09]-[00:05:15]
- Distinct stores serve configuration, permissions, ingestion, analytics, and chunked H.264 video. [00:04:12]-[00:07:21]
- Ben reports monitoring and security-testing controls; distributed tracing and customer-specific ML retraining were future work. [00:07:21]-[00:10:30]
- This 2021 vendor account is not a reusable reference design; verify current services and workload behavior, with current security, privacy, retention, access, and surveillance-domain review.

Full video: <https://www.youtube.com/watch?v=xg_Z0rVftPs>
