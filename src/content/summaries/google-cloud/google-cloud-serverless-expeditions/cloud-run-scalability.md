---
title: "Cloud Run scalability"
resourceId: 59
date: "2023-12-01"
collection: "google-cloud-serverless-expeditions"
order: 4
videoId: "8YtsV8BNTqY"
---

What happens when traffic rises faster than the running containers can handle it? Martin and V test Cloud Run with a short synthetic workload in December 2023, showing requests queue while new instances start. The test excludes a real database, so it demonstrates only the request-serving part of a system.

### Key points

- **The handler is only an approximation:** It waits for one second and computes prime numbers to represent backend wait plus CPU work; the presenters explicitly exclude database scaling [00:00–02:08](https://www.youtube.com/watch?v=8YtsV8BNTqY&t=0s).
- **The dashboard visualizes a custom test harness:** The service emits Pub/Sub signals when an instance is ready and about to stop, so a new instance does not appear until startup completes [02:08–03:14](https://www.youtube.com/watch?v=8YtsV8BNTqY&t=128s).
- **Scaling takes time, and each instance serves multiple requests:** When the load generator increases from 10 to 2,000 request loops, requests queue until Cloud Run adds capacity. The presenter explains that each container handles multiple requests concurrently, so the instance count need not match the number of clients [03:14–05:21](https://www.youtube.com/watch?v=8YtsV8BNTqY&t=194s).
- **Successful requests do not establish acceptable latency:** At 30,000 load-generating loops—not 30,000 end users—the display still reports 100% success. That shows the test requests completed, not that another application's response-time target would be met. The presenters warn that a real database must keep up independently and that running more instances costs money [05:21–06:26](https://www.youtube.com/watch?v=8YtsV8BNTqY&t=321s).

Full video: <https://www.youtube.com/watch?v=8YtsV8BNTqY>
