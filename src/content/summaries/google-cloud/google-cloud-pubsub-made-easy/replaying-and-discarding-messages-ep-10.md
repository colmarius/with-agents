---
title: "Replaying and discarding messages - ep. 10"
resourceId: 60
date: "2020-03-27"
collection: "google-cloud-pubsub-made-easy"
order: 10
videoId: "VyLmmamuOVo"
---

A new subscriber version can mistakenly acknowledge messages before processing them. Pub/Sub's seek operation offers a recovery path: change many messages back to unacknowledged so they can be delivered again. The episode compares restoring a saved snapshot with selecting a timestamp ([00:00–01:03](https://www.youtube.com/watch?v=VyLmmamuOVo&t=0s)).

### Key points

- **Snapshots preserve a point to replay from**: A snapshot retains messages unacknowledged at creation plus later publications. It can be used by subscriptions on the same topic. In the episode's example, a seven-day retention window with a one-day-old backlog leaves the snapshot six days before expiry ([01:03–02:07](https://www.youtube.com/watch?v=VyLmmamuOVo&t=63s)).
- **Time-based replay divides messages around a timestamp**: Earlier messages become acknowledged; later ones become unacknowledged. This requires retaining acknowledged messages. The episode notes added cost and possible inaccuracies from differences between server clocks ([01:03–03:10](https://www.youtube.com/watch?v=VyLmmamuOVo&t=63s)).
- **Take a snapshot before changing subscriber code**: The episode recommends including snapshots in deployment so a buggy release has a recovery point. The same snapshot can also supply the same input messages across repeated tests ([02:07–03:10](https://www.youtube.com/watch?v=VyLmmamuOVo&t=127s)).
- **Seeking into the future discards backlog by marking it acknowledged**: That is a destructive purge operation, not a harmless reset ([03:10](https://www.youtube.com/watch?v=VyLmmamuOVo&t=190s)).

Full video: <https://www.youtube.com/watch?v=VyLmmamuOVo>
