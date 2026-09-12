---
title: "Cloud Pub/Sub Publishers - ep. 4"
resourceId: 60
date: "2020-01-04"
collection: "google-cloud-pubsub-made-easy"
order: 4
videoId: "ML6P1ksHcqo"
---

Pub/Sub publishers send messages to a topic. Priyanka explains how grouping messages into batches increases the rate of publication but makes individual messages wait, and how retry settings determine when a failed publish is abandoned.

### Key points

- **Messages carry data and optional attributes**: Attributes attach metadata to the payload, and a successful publication returns a server-generated message ID. An asynchronous API lets application code continue without waiting for the publish request to finish ([00:00–02:06](https://www.youtube.com/watch?v=ML6P1ksHcqo&t=0s)).
- **Batching trades latency for throughput**: Client libraries can group messages by bytes, count, or elapsed time, but each message waits in memory for its batch to be sent ([01:03–03:10](https://www.youtube.com/watch?v=ML6P1ksHcqo&t=63s)).
- **Small or disabled batches can suit latency-sensitive paths**: The episode does not make that choice universal; network and compute overhead still require workload-specific tuning ([02:06–03:10](https://www.youtube.com/watch?v=ML6P1ksHcqo&t=126s)).
- **Retry settings control how long publication can take**: The initial timer determines when retries begin; the total timeout determines when the application gives up. Priyanka ties that choice to network availability, available memory, and application requirements ([03:10–04:58](https://www.youtube.com/watch?v=ML6P1ksHcqo&t=190s)).

Full video: <https://www.youtube.com/watch?v=ML6P1ksHcqo>
