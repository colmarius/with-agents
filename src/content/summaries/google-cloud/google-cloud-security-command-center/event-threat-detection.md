---
title: "How to use Event Threat Detection - Getting Started with Cloud Security Command Center"
resourceId: 58
date: "2019-09-25"
collection: "google-cloud-security-command-center"
order: 3
videoId: "0f5Dh8cGbyQ"
---

This 2019 walkthrough explains Event Threat Detection's log-based findings, investigates an anomalous IAM grant, and demonstrates a selective Splunk export path.

### Key Points Covered

- **ETD analyzed several log signals**: The presentation describes detectors using Linux authentication logs, VPC flow logs, IAM changes, known-bad destinations, and traffic patterns for threats including SSH brute force, cryptomining, malware, outgoing DDoS, and port scanning [00:00:04]-[00:01:08].
- **An anomalous grant is evidence to investigate**: The example flags an external Gmail account receiving the editor role, then pivots to the granting account, its other actions, and affected projects. A flag is not by itself proof of compromise [00:01:08]-[00:02:12].
- **Investigation should precede restriction**: The demonstrated response continues pivoting by user or project before restricting permissions, preserving the distinction between detector evidence and a response decision [00:02:12].
- **The Splunk path is not an automatic SCC-findings export**: The demo describes sending selected high-value, ETD-processed log output through a Splunk connector. That exported output should not be collapsed into, or assumed to be identical to, Security Command Center findings [00:02:12].

This is a historical 2019 workflow. Current users should verify current Google Cloud documentation for product names, roles, APIs, UI, detector coverage, logging and SIEM setup, defaults, integrations, export behavior, and remediation guidance.

Full video: <https://www.youtube.com/watch?v=0f5Dh8cGbyQ>
