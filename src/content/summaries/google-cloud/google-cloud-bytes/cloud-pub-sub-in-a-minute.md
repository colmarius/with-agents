---
title: "Cloud Pub/Sub in a minute"
resourceId: 66
date: "2020-12-28"
collection: "google-cloud-bytes"
order: 6
videoId: "jLI-84UjZLE"
---

Cloud Pub/Sub lets a service publish data without managing every service that receives it. In this 2020 primer, producers send messages to a named topic and consumers receive them through subscriptions, so consumers can change without requiring the producer to change [00:00–01:46](https://www.youtube.com/watch?v=jLI-84UjZLE&t=0s).

### Key Points Covered

- **Distribute work or send data to several destinations**: The examples spread image analysis across workers and send security logs to separate archival, processing, and analytics services. Pub/Sub manages distribution rather than making the producer call each recipient [00:47–01:46](https://www.youtube.com/watch?v=jLI-84UjZLE&t=47s).
- **Connect ongoing streams to processing systems**: The primer shows Pub/Sub feeding BigQuery or Dataflow and carrying notifications when a service fails. It presents managed message storage and scaling, but does not define the conditions behind its ordered-delivery claim [00:00–01:46](https://www.youtube.com/watch?v=jLI-84UjZLE&t=0s).

Full video: <https://www.youtube.com/watch?v=jLI-84UjZLE>
