---
title: "How to use Cloud DLP - Getting Started with Cloud Security Command Center"
videoId: ra_hnxqBzOc
sourceUrl: "https://www.youtube.com/watch?v=ra_hnxqBzOc"
publishedAt: "2019-10-02T16:14:29Z"
sourceLanguage: en
summaryLanguage: en
captionKind: caption
status: draft
---

An unnamed presenter demonstrates the 2019 setup for sending Cloud DLP scan findings into Cloud Security Command Center. The walkthrough covers repository scope, API and role setup, enabling DLP as a security source, examining an info-type finding, and following the affected resource for analysis or remediation.

## Key Ideas

- Cloud DLP is presented as a classification and redaction service for sensitive elements such as identifiers, contact details, payment data, and cloud credentials. [00:00:00]-[00:00:55]
- Sending findings to Security Command Center requires a repository in the enabled organization, the DLP API, IAM roles, and DLP enabled as a security source. [00:00:55]-[00:02:39]
- DLP uses info types to define sensitive-data patterns and exposes resulting findings through the Security Command Center dashboard. [00:02:39]-[00:03:27]
- The example follows a credit-card finding to its asset and external URI, then suggests analysis in BigQuery or contacting the resource owner for remediation. [00:03:27]

## Practical Implications

- Define scan scope, approved info types, finding access, and remediation ownership before scanning production data.
- Treat a classifier result as a lead requiring context; counts can include false positives, duplicates, or data whose handling is permitted.
- Treat the 2019 Cloud DLP and Cloud SCC names, supported repositories, roles, enablement path, integration, dashboard, and remediation steps as historical; verify current Sensitive Data Protection and Security Command Center documentation.

## Questions and Tensions

- Scanning for sensitive data creates additional sensitive findings and metadata that need access, retention, and residency controls.
- Removing a resource is not a complete response without confirming legal retention, business ownership, downstream copies, and root cause.

## Source

- [Video](https://www.youtube.com/watch?v=ra_hnxqBzOc)
- [transcript.md](./transcript.md)
