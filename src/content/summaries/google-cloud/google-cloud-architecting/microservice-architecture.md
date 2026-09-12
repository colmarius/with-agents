---
title: How to create a microservice architecture with Google Cloud
resourceId: 68
date: 2021-09-18
collection: google-cloud-architecting
order: 4
videoId: YxNRkw8Msdw
---

Nylas processes communication data to automate tasks across applications. Senior vice president of engineering David Ting describes its 2021 rewrite to handle unpredictable message volumes while meeting a financial-services customer's requirements for short-lived servers and limited retention of personal data.

### Key Points Covered

- **Fixed data placement made bursts expensive.** Email accounts were statically assigned to MySQL shards, or partitions. An account's unpredictable traffic could overload its shard while capacity elsewhere went unused. Ting says overprovisioning reduced latency but became costly at more than 20 terabytes processed daily. [02:11–04:14](https://www.youtube.com/watch?v=YxNRkw8Msdw&t=131s)
- **The rewrite changed several layers together.** Go services ran on Google Kubernetes Engine (GKE), Pub/Sub carried messages, and Spanner stored relational application state. The customer's QA team tested a prototype before launch. Ting's later throughput and latency improvements describe this combined change, not the isolated effect of one service or language. [04:14–06:24](https://www.youtube.com/watch?v=YxNRkw8Msdw&t=254s), [09:35–10:39](https://www.youtube.com/watch?v=YxNRkw8Msdw&t=575s)
- **Personal-data lifetime shaped the design.** Ting describes rapidly replacing nodes, using gVisor to isolate applications from the host operating system, and purging personally identifiable information after customers received it. Spanner retained application state and account keys. [06:24–08:33](https://www.youtube.com/watch?v=YxNRkw8Msdw&t=384s)
- **Events replaced a database-first processing path.** The old system wrote data to DynamoDB, converted it with Lambda, then sent it to Kinesis. The rewrite published directly to Pub/Sub, making the message bus central to communication between services and handling traffic bursts. [07:27–09:35](https://www.youtube.com/watch?v=YxNRkw8Msdw&t=447s)

Full video: <https://www.youtube.com/watch?v=YxNRkw8Msdw>
