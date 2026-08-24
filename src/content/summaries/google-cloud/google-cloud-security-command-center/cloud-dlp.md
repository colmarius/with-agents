---
title: "How to use Cloud DLP - Getting Started with Cloud Security Command Center"
resourceId: 58
date: "2019-10-02"
collection: "google-cloud-security-command-center"
order: 4
videoId: "ra_hnxqBzOc"
---

This 2019 walkthrough configures Cloud DLP scanning and its then-current security-source integration with Security Command Center.

### Key Points Covered

- **DLP scans classified configured information types**: The service looked for categories such as names, contact details, identification numbers, payment data, and Google Cloud credentials in supported repositories [00:00:00]-[00:00:55].
- **The SCC integration required separate setup**: The demo enables the DLP API and named IAM roles for a repository project in the same organization, then enables DLP Data Discovery as an SCC security source [00:00:55]-[00:02:39].
- **Scan results became SCC findings through that integration**: DLP's scan output and SCC's findings view are historically distinct stages; the configured security source made DLP findings visible on the SCC dashboard [00:02:39]-[00:03:27].
- **An info-type match is a lead, not a verdict**: The example follows a credit-card finding to its bucket and external URI, then suggests BigQuery analysis or owner-led remediation. A detector match alone does not prove context, policy violation, or noncompliance [00:02:39]-[00:03:27].

This is a historical 2019 workflow. Current users should verify current Google Cloud documentation for product names, roles, APIs, UI, info-type and repository coverage, setup, defaults, security-source integrations, remediation, and compliance guidance.

Full video: <https://www.youtube.com/watch?v=ra_hnxqBzOc>
