---
title: "Distributed tracing with OpenTelemetry and Cloud Trace"
resourceId: 63
date: "2021-08-11"
collection: "google-cloud-engineering-for-reliability"
order: 14
videoId: "NQeK8Kbu6UM"
---

When a frontend waits for a backend before responding, either service can contribute to the delay a user sees. This episode uses distributed tracing to follow that request across services and separate its total duration from time spent in individual calls ([00:00–02:04](https://www.youtube.com/watch?v=NQeK8Kbu6UM&t=0s)).

### Key Points Covered

- **Spans time individual operations within one trace**: The parent span records the overall user request. Child spans record the calls made to serve it, so their durations can be compared with the total. OpenTelemetry supplies the instrumentation, and an exporter sends the traces to Cloud Trace ([00:00–02:04](https://www.youtube.com/watch?v=NQeK8Kbu6UM&t=0s)).
- **Pass context so the backend joins the same trace**: In the manual example, the frontend sends identifying context in HTTP headers. The backend extracts it when creating its own spans, connecting the two services' measurements. Custom spans can also time specific backend tasks ([02:04–03:07](https://www.youtube.com/watch?v=NQeK8Kbu6UM&t=124s)).
- **Compare durations in a waterfall view**: Cloud Trace places the parent span above its children and shows each duration. Added span events—annotations written by the application—provide detail about what happened during an operation, helping the engineer locate major contributors to latency ([03:07–04:14](https://www.youtube.com/watch?v=NQeK8Kbu6UM&t=187s)).

Full video: <https://www.youtube.com/watch?v=NQeK8Kbu6UM>
