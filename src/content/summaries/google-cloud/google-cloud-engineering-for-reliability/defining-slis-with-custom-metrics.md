---
title: "Defining SLIs with custom metrics"
resourceId: 63
date: "2021-06-09"
collection: "google-cloud-engineering-for-reliability"
order: 18
videoId: "eCcsxDln6I0"
---

Platform measurements such as load-balancer request counts may not capture the transactions an application needs to track. This episode shows how custom metrics become service-level indicators (SLIs), measurements of reliability, and how service-level objectives (SLOs) set targets for them ([00:00–01:02](https://www.youtube.com/watch?v=eCcsxDln6I0&t=0s)).

### Key Points Covered

- **Prometheus reads an endpoint exposed by the application**: The Node.js example counts events and records latency in a histogram. It exposes those values on a metrics endpoint that Prometheus scrapes—reads to collect measurements. A collector added to the Prometheus server forwards the data to Cloud Monitoring in the 2021 setup ([01:02–03:08](https://www.youtube.com/watch?v=eCcsxDln6I0&t=62s)).
- **A latency distribution can measure compliance with a threshold**: A “distribution cut” counts the fraction of measured values within a selected range. The Prometheus example sets a target of 98% of responses completing within 500 milliseconds over a rolling 28-day period ([02:04–03:08](https://www.youtube.com/watch?v=eCcsxDln6I0&t=124s)).
- **Direct export is a different collection path**: The separate OpenCensus example sends measurements from the application directly to Cloud Monitoring without scraping. OpenCensus is a legacy library; this is the video's historical alternative to maintaining a Prometheus server, not current library-selection advice ([02:04–04:11](https://www.youtube.com/watch?v=eCcsxDln6I0&t=124s)).
- **Choose histogram ranges around the question being asked**: Buckets group measurements into ranges. The presenter recommends boundaries that distinguish requests inside and outside the SLO threshold, plus additional buckets for examining slow responses, such as the 99th-percentile latency ([03:08–04:11](https://www.youtube.com/watch?v=eCcsxDln6I0&t=188s)).

Full video: <https://www.youtube.com/watch?v=eCcsxDln6I0>
