---
title: "Automatic instrumentation with OpenTelemetry"
resourceId: 63
date: "2022-05-18"
collection: "google-cloud-engineering-for-reliability"
order: 22
videoId: "RuyUXBOdjGI"
---

Yuri, identified in the transcript as an SRE at Google Cloud, compares automatic and manual OpenTelemetry tracing for a small distributed Python application. Automatic instrumentation captures supported request spans quickly; manual instrumentation adds application-specific spans and explicit cross-service context propagation ([00:00:00]-[00:05:16]).

### Key Points Covered

- **Automatic instrumentation establishes broad coverage**: Running both Flask services through the instrumentation command produces frontend and backend request spans in the example ([00:01:05]-[00:02:08]).
- **Library support bounds automatic visibility**: The command detects supported packages, but the episode does not define every compatibility limit ([00:01:05]-[00:02:08]).
- **Domain operations need manual spans**: An application-specific backend-processing span cannot be expressed by the automatic request instrumentation alone ([00:02:08]).
- **Propagation is application work**: The frontend injects span context into HTTP headers, and the backend extracts and uses it so its manual span joins the same trace ([00:03:10]-[00:05:16]).

The packages, commands, APIs, semantic conventions, exporter configuration, defaults, and Cloud Trace UI are from 2022. Verify current guidance and control volume and sensitive attributes.

Full video: <https://www.youtube.com/watch?v=RuyUXBOdjGI>
