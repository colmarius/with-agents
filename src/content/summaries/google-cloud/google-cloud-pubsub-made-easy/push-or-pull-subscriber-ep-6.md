---
title: "Push or Pull Subscriber? - ep. 6"
resourceId: 60
date: "2020-01-19"
collection: "google-cloud-pubsub-made-easy"
order: 6
videoId: "KObJkda4ZfY"
---

With pull delivery, the subscriber asks Pub/Sub for messages. With push delivery, Pub/Sub sends requests to the subscriber's HTTPS endpoint. Priyanka compares how that choice changes access requirements, work distribution, and control over delivery rate.

### Key points

- **The connection requirements differ**: Pull clients need credentials to call the Pub/Sub API. Push needs a DNS-reachable HTTPS endpoint with a certificate that is not self-signed, under the episode's 2020 requirements ([00:00–02:07](https://www.youtube.com/watch?v=KObJkda4ZfY&t=0s)).
- **Workers can share incoming work in different ways**: Multiple pull workers on one subscription each receive a subset of its messages. A push endpoint can instead be a load balancer that distributes requests, or one webhook receiving messages from several subscriptions ([01:04–03:09](https://www.youtube.com/watch?v=KObJkda4ZfY&t=64s)).
- **Control over delivery rate moves between client and service**: Pull clients choose how quickly to retrieve messages and can extend acknowledgement deadlines. With push, Pub/Sub slows delivery when the endpoint returns errors or takes too long to respond ([02:07–03:09](https://www.youtube.com/watch?v=KObJkda4ZfY&t=127s)).
- **The episode associates pull with high-volume or private services and push with webhooks and scale-to-zero services**: Those are scenario-based recommendations, not universal performance guarantees ([03:09–04:12](https://www.youtube.com/watch?v=KObJkda4ZfY&t=189s)).

Full video: <https://www.youtube.com/watch?v=KObJkda4ZfY>
