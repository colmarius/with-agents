---
title: "How to use Cloud DLP - Getting Started with Cloud Security Command Center"
videoId: ra_hnxqBzOc
sourceUrl: "https://www.youtube.com/watch?v=ra_hnxqBzOc"
publishedAt: "2019-10-02T16:14:29Z"
sourceLanguage: en
summaryLanguage: en
captionKind: caption
status: reviewed
---

An unnamed presenter demonstrates a 2019 setup for sending Cloud DLP scan results into Cloud Security Command Center. The walkthrough covers repository scope, API and role setup, enabling DLP as a security source, examining an info-type finding, and following the affected resource for analysis or remediation. It is a historical product demonstration, not current Sensitive Data Protection setup guidance.

## Key Ideas

- Cloud DLP was presented as a classification and redaction service for sensitive elements such as identifiers, contact details, payment data, and Google Cloud credentials. [00:00:00]
- The demonstrated integration used a supported repository in the same organization as Cloud SCC, the Cloud DLP API, the named IAM roles, and Cloud DLP Data Discovery enabled as a security source. [00:00:55]-[00:02:39]
- The presenter describes info types as the sensitive-data types Cloud DLP scanned for and shows resulting findings in the Security Command Center dashboard. [00:02:39]-[00:03:27]
- The example follows a credit-card finding to its asset and external URI, then suggests additional BigQuery analysis or contacting the owner to remediate the resource. [00:03:27]

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
