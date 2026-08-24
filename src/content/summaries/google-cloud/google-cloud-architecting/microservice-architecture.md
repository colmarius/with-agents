---
title: How to create a microservice architecture with Google Cloud
resourceId: 68
date: 2021-09-18
collection: google-cloud-architecting
order: 4
videoId: YxNRkw8Msdw
---

Nylas senior vice president of engineering David Ting describes a 2021 rewrite shaped by a financial-services customer's data-lifetime, isolation, throughput, and latency requirements.

### Key Points Covered

- Ting reports hot spots and cost from statically assigned MySQL shards processing more than 20 terabytes daily. [00:02:11]-[00:04:14]
- The replacement used rewritten Go services on GKE, Pub/Sub, and Spanner, with customer QA before launch. [00:04:14]-[00:06:24]
- Ting says rapidly cycled nodes, gVisor, and PII purging addressed customer security requirements. [00:06:24]-[00:08:33]
- He attributes throughput and latency outcomes to the combined migration; advanced AI/ML remained a future plan. [00:09:35]-[00:12:46]
- This 2021 vendor comparison is not a reusable reference design; check current documentation and test workload, deletion, isolation, security, privacy, and compliance controls independently.

Full video: <https://www.youtube.com/watch?v=YxNRkw8Msdw>
