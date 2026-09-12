---
title: "Creating custom metrics with OpenTelemetry"
resourceId: 63
date: "2022-05-25"
collection: "google-cloud-engineering-for-reliability"
order: 23
videoId: "SCNObWlILqk"
---

Yuri, a site reliability engineer at Google Cloud, adds measurements to a Python web service to answer three questions: how many requests arrive, how many fail, and how long processing takes. OpenTelemetry records those measurements in the application and sends them through a separate Collector to Cloud Monitoring ([00:00–02:04](https://www.youtube.com/watch?v=SCNObWlILqk&t=0s)).

### Key Points Covered

- **Count events and record a distribution of durations**: The application increments counters for requests and errors. It records processing times in a histogram, preserving a distribution of latency measurements rather than only a request count ([01:03–02:04](https://www.youtube.com/watch?v=SCNObWlILqk&t=63s)).
- **Attach service information before exporting**: The application's metric setup includes information identifying the service, so its measurements can be found and grouped later. Its exporter sends the recorded values to the Collector ([01:03–02:04](https://www.youtube.com/watch?v=SCNObWlILqk&t=63s)).
- **Deploy the Collector separately from the application**: In the demo, three copies of the application run on Google Kubernetes Engine (GKE). The Collector runs alongside them in the same namespace and forwards their measurements to Cloud Monitoring ([02:04–03:10](https://www.youtube.com/watch?v=SCNObWlILqk&t=124s)).
- **Turn measurements into health signals**: Cloud Monitoring divides failed requests by total requests to show the error ratio and displays the latency histogram as a heat map. The application records the measurements; the monitoring backend performs the displayed analysis ([03:10–04:12](https://www.youtube.com/watch?v=SCNObWlILqk&t=190s)).

Full video: <https://www.youtube.com/watch?v=SCNObWlILqk>
