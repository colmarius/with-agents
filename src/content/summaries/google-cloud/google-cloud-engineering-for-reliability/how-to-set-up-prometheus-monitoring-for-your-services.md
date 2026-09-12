---
title: "How to set up Prometheus monitoring for your services"
resourceId: 63
date: "2022-03-30"
collection: "google-cloud-engineering-for-reliability"
order: 1
videoId: "qyfOE_78nT0"
---

Infrastructure metrics alone do not tell you how often an application fails or how long its users wait. Yuri, a site reliability engineer at Google, instruments a Python service to expose those measurements, then configures Google Managed Service for Prometheus to collect them ([00:00–02:06](https://www.youtube.com/watch?v=qyfOE_78nT0&t=0s)).

### Key Points Covered

- **Record application behavior and expose it for collection**: The Flask example increments total-request and failed-request counters and times a route to record a latency distribution. It exposes the resulting values on `/metrics`, an endpoint the collector can scrape—read to collect measurements ([01:03–02:06](https://www.youtube.com/watch?v=qyfOE_78nT0&t=63s)).
- **Tell the collector which application to read**: In the demonstrated setup, a `PodMonitoring` resource selects pods by their labels and specifies their metrics endpoint. Installing the collector alone does not complete the application's monitoring configuration ([02:06–03:11](https://www.youtube.com/watch?v=qyfOE_78nT0&t=126s)).
- **Verify collection in stages**: First the demo checks that the application exposes metrics, then queries the collector's own metrics to confirm collection is running. Finally it queries an application metric to prove that the selected workload's data reached the backend, where it can be used in charts and alerts ([02:06–04:13](https://www.youtube.com/watch?v=qyfOE_78nT0&t=126s)).

Full video: <https://www.youtube.com/watch?v=qyfOE_78nT0>
