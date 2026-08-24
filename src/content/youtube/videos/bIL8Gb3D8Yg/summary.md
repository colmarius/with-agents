---
title: "Cloud Run Principle of Least Privilege"
videoId: bIL8Gb3D8Yg
sourceUrl: "https://www.youtube.com/watch?v=bIL8Gb3D8Yg"
publishedAt: "2024-05-23T16:00:35Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Martin and JK discuss least privilege for a Cloud Run service. The transcript names both speakers and describes JK's cross-industry cloud experience, but it does not explicitly state either speaker's affiliation.

## Key Ideas

- Cloud Run security has two directions: who can invoke a service and what the running service can do; the discussion focuses on the latter. [00:00:01]-[00:01:04]
- JK warns that broad default runtime permissions increase the potential impact of malicious dependencies, developer mistakes, and service compromise. [00:01:04]-[00:02:07]
- For a Firestore example, the speakers create a dedicated service account and a custom role that permits reads and writes but not deletes. [00:02:07]-[00:06:19]
- JK recommends predefined roles when they fit; otherwise, a custom role can narrow permissions to the service's actual API operations. [00:03:09]-[00:04:12]
- Terraform modules can encode repeatable service-account and role patterns that conform to organizational policies. [00:07:23]-[00:08:28]

## Practical Implications

- Inventory the APIs a workload uses, assign a dedicated runtime identity, and test that denied operations remain denied.
- The IAM role creation, Cloud Run console flow, and Terraform guidance shown reflect the point-in-time 2024 experience; verify current defaults, permissions, interfaces, and provider resources.

## Questions and Tensions

- Custom roles can improve precision but add maintenance as APIs and required operations change.
- The example does not address organization policies, role lifecycle, permission monitoring, or emergency access.

## Source

- https://www.youtube.com/watch?v=bIL8Gb3D8Yg
- [transcript.md](./transcript.md)
