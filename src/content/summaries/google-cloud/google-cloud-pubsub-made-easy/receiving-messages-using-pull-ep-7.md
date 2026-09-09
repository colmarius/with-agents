---
title: "Receiving messages using Pull - ep. 7"
resourceId: 60
date: "2020-02-28"
collection: "google-cloud-pubsub-made-easy"
order: 7
videoId: "cCkwo6eEHIg"
---

This episode compares streaming and synchronous pull for a fictional high-volume, private packaging service.

### Key points

- **Streaming pull is a client-initiated persistent connection**: The client library opens a bidirectional connection and receives messages continuously; this is distinct from Pub/Sub calling a public push endpoint ([01:04–02:07](https://www.youtube.com/watch?v=cCkwo6eEHIg&t=64s)).
- **Messages can carry subscriber-facing attributes**: The sample sends user, city, and product identifiers alongside the payload for downstream processing ([02:07–03:12](https://www.youtube.com/watch?v=cCkwo6eEHIg&t=127s)).
- **Scaling and flow control must be designed together**: More subscribers can drain persistent backlog, while outstanding-message limits prevent one client from leasing more work than it can process ([03:12–05:19](https://www.youtube.com/watch?v=cCkwo6eEHIg&t=192s)).
- **Acknowledgement deadlines affect duplicate delivery**: Extending a lease can reduce premature redelivery, while setting the deadline to zero requests another attempt; failed-worker recovery remains a separate tradeoff ([05:19–06:23](https://www.youtube.com/watch?v=cCkwo6eEHIg&t=319s)).
- **Synchronous pull serves narrower intake patterns**: The episode suggests it for polling, precise receive caps, or environments without the streaming protocol support it expected ([06:23–07:26](https://www.youtube.com/watch?v=cCkwo6eEHIg&t=383s)).

**Current-use note:** Treat the API defaults, language and protocol examples, monitoring names, and tuning advice as a 2020 snapshot. Measure backlog, processing time, resource use, lease behavior, and duplicates with current clients before choosing settings.

Full video: <https://www.youtube.com/watch?v=cCkwo6eEHIg>
