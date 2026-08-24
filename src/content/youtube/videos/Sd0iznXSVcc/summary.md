---
title: "How to troubleshoot the Ops Agent"
videoId: Sd0iznXSVcc
sourceUrl: "https://www.youtube.com/watch?v=Sd0iznXSVcc"
publishedAt: "2022-03-14T23:00:11Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Yuri, identified in the auto-generated transcript as an SRE at Google Cloud, gives a layered troubleshooting process for missing VM logs and metrics: installation, service startup, source access, and API delivery. That diagnostic decomposition remains useful, but the 2022 supported-OS assumptions, legacy-agent compatibility, commands, module layout, permissions, access scopes, and quotas should be verified against current Ops Agent documentation.

## Key Ideas

- [00:00:00] VM observability depends on the Ops Agent being installed, running, collecting expected sources, and sending data successfully.
- [00:01:01]-[00:02:04] In the demonstrated 2022 environment, installation and startup failures can come from an unsupported operating system, conflicts with legacy agents, or invalid configuration.
- [00:02:04] Module startup can also fail because of credentials, network paths, proxies, or inability to reach logging and monitoring APIs.
- [00:03:06] Troubleshooting should separately inspect module status, source readability, local metrics, module logs, API permissions, scopes, and quotas.

## Practical Implications

Diagnose the pipeline stage by stage instead of treating missing telemetry as one undifferentiated failure. Validate current service names and commands, and include agent health and delivery failures in operational runbooks.

## Questions and Tensions

The video does not discuss fleet-wide diagnostics, automated remediation, or how to distinguish delayed ingestion from data loss. Its service-account-key failure example and VM access-scope behavior deserve particular freshness checks, and exact command or error text should not be reconstructed from auto-generated captions.

## Source

https://www.youtube.com/watch?v=Sd0iznXSVcc

[transcript.md](./transcript.md)
