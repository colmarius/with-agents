---
title: "Top 3 data risks in Cloud Security"
videoId: QJcRkpzW8Mw
sourceUrl: "https://www.youtube.com/watch?v=QJcRkpzW8Mw"
publishedAt: "2020-03-03T16:00:04Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter and the recurring Cloud Detective and Bad Actor characters organize data risk around who can reach data, what enters the system, where data is stored or transferred, and whether the underlying machines are trustworthy. The proposed controls combine least privilege, encryption, inspection, logging, policy guardrails, and secure compute.

## Key Ideas

- Data security includes limiting sensitive data, locating what is stored, rejecting harmful or unsanitized input, preventing loss, and protecting storage hosts from compromise. [00:01:05]-[00:02:09]
- The episode maps those risks to IAM, encryption, logging and monitoring, DLP, organization policy, and VM-management controls. [00:02:09]-[00:03:15]
- Least-privilege IAM limits unnecessary access, while monitoring provides evidence and alerts when access violates expectations. [00:03:15]-[00:04:17]
- Organization Policy is presented as a centralized way to apply compliance guardrails, illustrated by requiring customer-managed encryption keys for Cloud SQL changes. [00:04:17]-[00:05:20]

## Practical Implications

- Maintain a data inventory that records sensitivity, location, access paths, retention, and responsible owners.
- Combine preventive controls with evidence: permissions and encryption do not replace input validation, auditability, monitoring, or recovery.
- Treat the 2020 product examples—including Forseti, DLP, Organization Policy, Cloud SQL policy details, defaults, and interfaces—as historical and verify current replacements and syntax in current documentation.

## Questions and Tensions

- The episode treats PII minimization as a broad rule but does not address lawful collection, retention schedules, or service-specific processing requirements.
- Central guardrails can reduce configuration drift, but they still require exception management and proof that protected resources are in scope.

## Source

- [Video](https://www.youtube.com/watch?v=QJcRkpzW8Mw)
- [transcript.md](./transcript.md)
