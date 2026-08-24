---
title: "How to use Cloud Logging  to detect security breaches"
videoId: dLOyUy1BlIs
sourceUrl: "https://www.youtube.com/watch?v=dLOyUy1BlIs"
publishedAt: "2021-05-26T23:00:10Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter and the Cloud Detective and Bad Actor characters warn against immediately logging into a suspected compromised instance. The episode instead demonstrates exporting logs to a separate monitoring project so responders can investigate without exposing administrator credentials or relying on the affected environment.

## Key Ideas

- Logging directly into a suspected compromised server can expose administrator credentials to an attacker who anticipated that response. [00:01:03]-[00:02:06]
- Forensic logs stored in a separate Google Cloud project let responders inspect activity without depending on or modifying the suspected system. [00:02:06]-[00:03:09]
- In the 2021 demonstration, log sinks route selected entries to Cloud Storage, Pub/Sub, BigQuery, or Cloud Logging buckets, and indexed logs are centralized in a monitoring project. [00:02:06]-[00:03:09]
- The example finds no suspicious log activity supporting the claimed full breach; the attacker instead says the objective was to capture credentials during a login. [00:03:09]-[00:04:14]

## Practical Implications

- Preserve independent telemetry and use a controlled incident-response path rather than ad hoc access to a suspected host.
- Protect the logging destination, sink configuration, responder identities, and retention policy from the same compromise domain.
- Treat the 2021 operations-suite names, sink destinations, console workflow, and incident-response example as historical; verify current Cloud Logging routing and incident-response guidance.

## Questions and Tensions

- Avoiding interactive access preserves evidence, but responders still need tested isolation, acquisition, credential-revocation, and recovery procedures.
- Centralized logs improve visibility while creating a high-value repository that needs strict access and integrity controls.

## Source

- [Video](https://www.youtube.com/watch?v=dLOyUy1BlIs)
- [transcript.md](./transcript.md)
