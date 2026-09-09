---
title: "Service accounts & security"
resourceId: 57
date: "2021-05-13"
collection: "google-cloud-security-basics"
order: 8
videoId: "wEGZXSd4uS4"
---

This episode presents service accounts as dedicated identities for applications and scripts, separating workload access from a person's reusable credentials.

### Key Points Covered

- **User credentials are a poor automation boundary**: Persistent scripts create sharing and storage risks when they reuse a person's credentials [01:02–02:04](https://www.youtube.com/watch?v=wEGZXSd4uS4&t=62s).
- **Give workloads dedicated, narrow identities**: Service accounts can call APIs without exposing user credentials, but their permissions and who may use or manage them require regular review [02:04–03:08](https://www.youtube.com/watch?v=wEGZXSd4uS4&t=124s).
- **Avoid turning identity into secret distribution**: The episode recommends attaching service accounts to Google Cloud resources and warns that downloaded keys create a secrets-management problem [03:08–04:12](https://www.youtube.com/watch?v=wEGZXSd4uS4&t=188s).
- **If keys are unavoidable, handle them deliberately**: Its 2021 advice covers secure storage, avoiding source-control commits, and rotation; this is historical guidance, not a current endorsement of long-lived keys [04:12–05:15](https://www.youtube.com/watch?v=wEGZXSd4uS4&t=252s).
- **Track the identity lifecycle**: Descriptive naming, usage logging, and disabling unused service accounts help reduce forgotten access [05:15–07:22](https://www.youtube.com/watch?v=wEGZXSd4uS4&t=315s).
- **Treat this as dated guidance**: This is a 2021 explanation; verify current Google Cloud service-account and IAM behavior, keyless authentication guidance, defaults, products, UI, pricing, and incident-response documentation.

Full video: <https://www.youtube.com/watch?v=wEGZXSd4uS4>
