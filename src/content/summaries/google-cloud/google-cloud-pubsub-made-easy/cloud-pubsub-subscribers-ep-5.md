---
title: "Cloud Pub/Sub Subscribers - ep. 5"
resourceId: 60
date: "2020-01-12"
collection: "google-cloud-pubsub-made-easy"
order: 5
videoId: "nQ9_Xur2aM4"
---

Receiving a Pub/Sub message is not the same as completing the work it represents. Priyanka explains how subscriptions track messages awaiting acknowledgement and why a subscriber may receive the same message more than once.

### Key points

- **A subscription belongs to one topic and owns its backlog**: Each topic can have multiple subscriptions. The 2020 episode warns that messages published without a subscription disappear under the behavior it describes ([00:00–02:09](https://www.youtube.com/watch?v=nQ9_Xur2aM4&t=0s)).
- **Unacknowledged messages can be delivered again**: After delivery, a message is outstanding until the subscriber acknowledges it or its acknowledgement deadline expires. At expiry, Pub/Sub attempts redelivery. Priyanka therefore stresses idempotent processing: handling a repeated message without repeating its effect ([01:04–02:09](https://www.youtube.com/watch?v=nQ9_Xur2aM4&t=64s)).
- **Pull and push acknowledge differently**: Pull returns an acknowledgement ID for an explicit acknowledge call, while a push endpoint acknowledges by returning a successful HTTP response ([02:09–04:19](https://www.youtube.com/watch?v=nQ9_Xur2aM4&t=129s)).
- **Deleting a subscription loses its delivery state**: Creating another subscription with the same name does not restore the old one. The episode also describes configurable expiry after inactivity, including an option to keep a subscription regardless of activity ([03:14–05:09](https://www.youtube.com/watch?v=nQ9_Xur2aM4&t=194s)).

Full video: <https://www.youtube.com/watch?v=nQ9_Xur2aM4>
