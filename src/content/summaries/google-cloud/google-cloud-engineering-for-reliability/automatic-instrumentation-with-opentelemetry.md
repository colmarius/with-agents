---
title: "Automatic instrumentation with OpenTelemetry"
resourceId: 63
date: "2022-05-18"
collection: "google-cloud-engineering-for-reliability"
order: 22
videoId: "RuyUXBOdjGI"
---

When a request passes through several services, tracing helps show which part is slow. A trace follows the whole request; spans record the time spent in individual operations. Yuri, a site reliability engineer at Google Cloud, uses a Python frontend and backend to compare automatic tracing with application-specific instrumentation using OpenTelemetry ([00:00–01:05](https://www.youtube.com/watch?v=RuyUXBOdjGI&t=0s)).

### Key Points Covered

- **Automatic tracing connects the request across services without code changes**: The instrumentation command detects supported packages. With Flask and the Requests library in this example, Cloud Trace shows the overall user request and its backend call as spans in one trace ([01:05–03:10](https://www.youtube.com/watch?v=RuyUXBOdjGI&t=65s)).
- **Manual spans reveal work inside a request**: Automatic request tracing does not separately time the example's backend-processing task. Yuri adds a span around that task so its duration can be distinguished from the duration of the complete backend call ([02:08–04:13](https://www.youtube.com/watch?v=RuyUXBOdjGI&t=128s)).
- **The manual version explicitly connects its spans**: The frontend puts trace context in HTTP headers; the backend extracts it and uses it when creating its processing span. That context tells the backend which trace to join. The resulting view contains the root request, backend call, and backend-processing spans, showing where the time went ([03:10–05:16](https://www.youtube.com/watch?v=RuyUXBOdjGI&t=190s)).

Full video: <https://www.youtube.com/watch?v=RuyUXBOdjGI>
