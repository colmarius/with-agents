---
title: "Pub/Sub Best Practices: Client Library"
resourceId: 61
date: "2023-03-04"
collection: "google-cloud-pubsub-best-practices"
order: 5
videoId: "F0H9qt1w9JE"
---

Pub/Sub client libraries handle publishing, receiving messages, and acknowledgement deadlines on behalf of application code. Chloe explains how client reuse and flow control can reduce delays and keep the application from taking on too much work.

### Key points

- **The language recommendation depends on the benchmark**: Chloe recommends Java over Python for performance in 2023 and points to a linked comparison, but gives no workload or measurements in the episode. This is not a general result for every application ([00:00–01:03](https://www.youtube.com/watch?v=F0H9qt1w9JE&t=0s)).
- **Reuse publisher clients**: The first publish request takes longer than subsequent ones. Keeping the client avoids paying that startup cost again for each message ([00:00–02:06](https://www.youtube.com/watch?v=F0H9qt1w9JE&t=0s)).
- **Flow control limits work in progress**: Chloe suggests publisher flow control when requests frequently time out with high latency, and lower subscriber limits to process fewer messages at once ([01:03–02:06](https://www.youtube.com/watch?v=F0H9qt1w9JE&t=63s)).
- **Client upgrades can carry fixes and features**: New releases may fix critical issues or be required for newer Pub/Sub features ([01:03–02:06](https://www.youtube.com/watch?v=F0H9qt1w9JE&t=63s)).
- **The Node.js examples favor asynchronous operations**: In its 2023 library examples, the episode uses `subscription.on` to receive messages and `topic.publishMessage` or `topic.flowControlled` to publish them. Where methods allow callbacks or promises, Chloe recommends promises/async for performance ([01:03–03:02](https://www.youtube.com/watch?v=F0H9qt1w9JE&t=63s)).
- **Let the library manage acknowledgement deadlines**: Chloe recommends streaming pull because the libraries manage `modAck`, the operation that changes or extends a message's acknowledgement deadline ([02:06](https://www.youtube.com/watch?v=F0H9qt1w9JE&t=126s)).

Full video: <https://www.youtube.com/watch?v=F0H9qt1w9JE>
