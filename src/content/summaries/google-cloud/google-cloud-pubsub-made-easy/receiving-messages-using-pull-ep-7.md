---
title: "Receiving messages using Pull - ep. 7"
resourceId: 60
date: "2020-02-28"
collection: "google-cloud-pubsub-made-easy"
order: 7
videoId: "cCkwo6eEHIg"
---

The fictional Cat-Out shop needs to process a surge of poster orders through an internal packaging service with no public HTTP endpoint. The episode uses that example to explain streaming pull, then shows how to keep a subscriber from accepting more messages than it can process.

### Key points

- **Streaming pull is a client-initiated persistent connection**: The client library opens a bidirectional connection and receives messages continuously; this is distinct from Pub/Sub calling a public push endpoint ([01:04–03:12](https://www.youtube.com/watch?v=cCkwo6eEHIg&t=64s)).
- **Messages can carry subscriber-facing attributes**: The sample sends user, city, and product identifiers alongside the payload for downstream processing ([02:07–03:12](https://www.youtube.com/watch?v=cCkwo6eEHIg&t=127s)).
- **Limit how much work one subscriber holds**: A busy client can hold unacknowledged messages while another client has spare capacity. Extending those messages' deadlines keeps them assigned to the busy client and consumes its resources. The sample limits a client to ten outstanding messages; a sustained backlog may also call for more subscriber instances ([03:12–05:19](https://www.youtube.com/watch?v=cCkwo6eEHIg&t=192s)).
- **Extend the deadline when processing needs more time**: If a message is not acknowledged before its deadline, Pub/Sub can send it again. Extending that deadline reduces premature redelivery; setting it to zero instead asks Pub/Sub to retry ([05:19–06:23](https://www.youtube.com/watch?v=cCkwo6eEHIg&t=319s)).
- **Synchronous pull lets the application request a bounded batch**: The episode's notification service can receive no more than ten messages per HTTP request. It recommends synchronous pull for that precise cap, for polling, or for environments without the streaming protocol support available at the time ([05:19–07:26](https://www.youtube.com/watch?v=cCkwo6eEHIg&t=319s)).

Full video: <https://www.youtube.com/watch?v=cCkwo6eEHIg>
