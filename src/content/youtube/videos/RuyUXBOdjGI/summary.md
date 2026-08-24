---
title: "Automatic instrumentation with OpenTelemetry"
videoId: RuyUXBOdjGI
sourceUrl: "https://www.youtube.com/watch?v=RuyUXBOdjGI"
publishedAt: "2022-05-18T17:00:23Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Yuri, identified in the transcript as an SRE at Google Cloud, compares automatic and manual OpenTelemetry tracing for a small distributed Python application. Automatic instrumentation provides quick dependency-level visibility without code changes; manual instrumentation adds control over custom spans and context propagation.

The Python packages, commands, exporter configuration, and Cloud Trace interface shown are from 2022 and may be dated; users should verify current OpenTelemetry and Google Cloud guidance.

## Key Ideas

- [00:00:00] Distributed traces represent a user request, while child spans expose service-to-service latency that helps locate slow dependencies.
- [00:01:05]-[00:02:08] Automatic instrumentation detects supported Flask and Requests packages and exports traces without application code changes.
- [00:02:08] Automatic instrumentation captures useful request spans but cannot express an application-specific backend-processing span without code-level instrumentation.
- [00:03:10]-[00:05:16] Manual instrumentation creates explicit spans and propagates trace context in HTTP headers so downstream work joins the same trace.

## Practical Implications

Use automatic instrumentation to establish broad tracing quickly, then add manual spans where domain-specific operations need visibility. Verify current package compatibility, semantic conventions, context propagation, and exporter setup before following the dated example.

## Questions and Tensions

Automatic coverage is inexpensive but constrained by library support; manual spans add insight but also code and maintenance overhead. Teams must choose span boundaries and attributes that aid diagnosis without creating excessive telemetry volume or leaking sensitive data.

## Source

https://www.youtube.com/watch?v=RuyUXBOdjGI

[transcript.md](./transcript.md)
