---
title: "Cloud Run scalability"
resourceId: 59
date: "2023-12-01"
collection: "google-cloud-serverless-expeditions"
order: 4
videoId: "8YtsV8BNTqY"
---

This episode runs a short synthetic Cloud Run scaling demonstration. Its result is evidence about one test setup, not a capacity promise for another service or its dependencies.

### Key points

- **The handler is only an approximation:** It waits for one second and computes prime numbers to represent backend wait plus CPU work; the presenters explicitly exclude database scaling [00:00:00]-[00:02:08].
- **The dashboard visualizes a custom test harness:** The service emits Pub/Sub signals when an instance is ready and about to stop, so a new instance does not appear until startup completes [00:02:08]-[00:03:14].
- **Scale-up can add latency:** When the harness moves from 10 to 2,000 request loops, requests queue while Cloud Run adds instances [00:03:14]-[00:04:16].
- **The headline result is tightly bounded:** At 30,000 loops the display still reports 100% success, but the presenters warn that a real database must sustain the traffic independently and that more active instances cost money [00:04:16]-[00:06:26].

The December 2023 demo gives no request rate, latency distribution, instance count, region, concurrency configuration, or meaningful test duration. A displayed success percentage does not prove an SLO. Reproduce the test with representative dependencies, quotas, traffic, latency objectives, failure modes, and current Cloud Run behavior.

Full video: <https://www.youtube.com/watch?v=8YtsV8BNTqY>
