---
title: "How to monitor quotas in Google Cloud"
resourceId: 63
date: "2022-02-16"
collection: "google-cloud-engineering-for-reliability"
order: 4
videoId: "VxXJUYcLmTk"
---

An application can fail because it reaches a cloud quota even when its own processing capacity is sufficient. Yuri, a site reliability engineer at Google, shows a Dataflow pipeline receiving HTTP 429 “too many requests” errors after exhausting a regional Cloud Storage bandwidth quota. Monitoring usage relative to the limit can warn of that risk earlier ([00:00–03:11](https://www.youtube.com/watch?v=VxXJUYcLmTk&t=0s)).

### Key Points Covered

- **Rate and allocation quotas constrain different things**: A rate quota limits activity over an interval, such as outgoing bandwidth per second. An allocation quota limits resources held at once, such as virtual machines; deleting those resources releases the allocation ([01:03–02:06](https://www.youtube.com/watch?v=VxXJUYcLmTk&t=63s)).
- **Monitor remaining room, not only errors**: The demonstrated Monitoring Query Language (MQL) query divides quota usage by the limit. A ratio above one explains the example's throttling; an alert on a threshold approaching the limit is intended to warn before it happens again ([02:06–03:11](https://www.youtube.com/watch?v=VxXJUYcLmTk&t=126s)).
- **Make alert behavior explicit**: The policy includes the signal, threshold, notification path, and incident-closing behavior ([03:11](https://www.youtube.com/watch?v=VxXJUYcLmTk&t=191s)).
- **The example recovers through a quota increase**: Yuri reports that the increase unblocks the job. That result does not establish that every quota request is approved or that an increase will be immediate ([02:06–03:11](https://www.youtube.com/watch?v=VxXJUYcLmTk&t=126s)).

Full video: <https://www.youtube.com/watch?v=VxXJUYcLmTk>
