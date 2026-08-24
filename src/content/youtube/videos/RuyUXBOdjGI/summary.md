---
title: "Automatic instrumentation with OpenTelemetry"
videoId: RuyUXBOdjGI
sourceUrl: "https://www.youtube.com/watch?v=RuyUXBOdjGI"
publishedAt: "2022-05-18T17:00:23Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Yuri, identified in the transcript as an SRE at Google Cloud, compares automatic and manual OpenTelemetry tracing for a small distributed Python application. Automatic instrumentation produces an end-to-end trace without code changes in the example; manual instrumentation gives explicit control over spans and propagation of their context.

The Python packages, commands, exporter configuration, and Cloud Trace interface shown are from 2022 and may be dated; users should verify current OpenTelemetry and Google Cloud guidance.

## Key Ideas

- [00:00:00] Distributed traces represent a user request, while child spans expose service-to-service latency that helps locate slow dependencies.
- [00:01:05]-[00:02:08] Running both Flask services with the OpenTelemetry instrumentation command produces a Cloud Trace trace with front-end and back-end request spans without application code changes; the transcript says the command tries to detect packages but does not detail compatibility boundaries.
- [00:02:08] Automatic instrumentation captures useful request spans but cannot express an application-specific backend-processing span without code-level instrumentation.
- [00:03:10]-[00:05:16] In the manual example, the front end injects span context into HTTP headers and the back end must extract that context and use it when creating its processing span for the span to join the trace.

## Practical Implications

Use automatic instrumentation to establish broad tracing quickly, then add manual spans where domain-specific operations need visibility. Verify current package compatibility, semantic conventions, context propagation, and exporter setup before following the dated example.

## Questions and Tensions

Automatic coverage is inexpensive but constrained by library support; manual spans add insight but also code and maintenance overhead. Teams must choose span boundaries and attributes that aid diagnosis without creating excessive telemetry volume or leaking sensitive data.

## Source

https://www.youtube.com/watch?v=RuyUXBOdjGI

[transcript.md](./transcript.md)
