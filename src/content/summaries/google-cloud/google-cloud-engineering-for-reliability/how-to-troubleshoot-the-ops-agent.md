---
title: "How to troubleshoot the Ops Agent"
resourceId: 63
date: "2022-03-14"
collection: "google-cloud-engineering-for-reliability"
order: 3
videoId: "Sd0iznXSVcc"
---

Yuri, identified in the transcript as an SRE at Google Cloud, decomposes missing VM telemetry into four boundaries: agent installation, service startup, source collection, and API delivery. This stage-by-stage model helps distinguish one failure class from another instead of treating absent logs or metrics as a single problem ([00:00:00]-[00:03:06]).

### Key Points Covered

- **Installation and startup are separate checks**: In the demonstrated environment, unsupported operating systems, legacy-agent conflicts, or invalid configuration can stop the pipeline early ([00:01:01]-[00:02:04]).
- **Collection modules have their own dependencies**: Credentials, proxies, network paths, and API reachability can prevent logging or monitoring modules from starting ([00:02:04]).
- **Inspect source and destination boundaries**: The workflow checks module status, source readability, local metrics, module logs, API permissions, access scopes, and quotas ([00:03:06]).
- **Missing data is not automatically data loss**: The episode does not explain fleet-wide diagnosis or how to distinguish delayed ingestion from permanent loss.

This is a 2022 troubleshooting guide. Verify current supported systems, service and module names, commands, permissions, access-scope behavior, quotas, and legacy-agent compatibility; do not reconstruct exact errors from auto-captions.

Full video: <https://www.youtube.com/watch?v=Sd0iznXSVcc>
