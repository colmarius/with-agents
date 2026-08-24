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

- **Streaming pull is a client-initiated persistent connection**: The client library opens a bidirectional connection and receives messages continuously; this is distinct from Pub/Sub calling a public push endpoint ([00:01:04]-[00:02:07]).
- **Messages can carry subscriber-facing attributes**: The sample sends user, city, and product identifiers alongside the payload for downstream processing ([00:02:07]-[00:03:12]).
- **Scaling and flow control must be designed together**: More subscribers can drain persistent backlog, while outstanding-message limits prevent one client from leasing more work than it can process ([00:03:12]-[00:05:19]).
- **Acknowledgement deadlines affect duplicate delivery**: Extending a lease can reduce premature redelivery, while setting the deadline to zero requests another attempt; failed-worker recovery remains a separate tradeoff ([00:05:19]-[00:06:23]).
- **Synchronous pull serves narrower intake patterns**: The episode suggests it for polling, precise receive caps, or environments without the streaming protocol support it expected ([00:06:23]-[00:07:26]).

**Current-use note:** Treat the API defaults, language and protocol examples, monitoring names, and tuning advice as a 2020 snapshot. Measure backlog, processing time, resource use, lease behavior, and duplicates with current clients before choosing settings.

Full video: <https://www.youtube.com/watch?v=cCkwo6eEHIg>
