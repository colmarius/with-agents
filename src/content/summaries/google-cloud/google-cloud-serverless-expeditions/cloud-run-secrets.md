---
title: "Manage your Cloud Run secrets securely with Secret Manager"
resourceId: 59
date: "2021-05-13"
collection: "google-cloud-serverless-expeditions"
order: 8
videoId: "JIE89dneaGo"
---

The presenter demonstrates the then-new native integration between Cloud Run and Secret Manager. The durable lesson is to keep secrets out of source code and give each runtime identity access only to the secrets it needs.

### Key points

- **Moving a secret out of code is only the first boundary:** The presenter contrasts hard-coded credentials with environment files, which avoid the repository but still require protected storage [00:00:00]-[00:02:05].
- **The demo applies per-secret least privilege:** A custom Cloud Run service account that already has only a Cloud SQL role receives access to one database-password secret, then the plaintext environment value is replaced with a Secret Manager reference [00:02:05]-[00:04:11].
- **The logging claim has a specific scope:** The presenter says secret creation and updates are logged by default, and that he usually enables additional logging for secret access [00:04:11]-[00:05:14]. The episode does not say every access is logged by default.
- **Access mode affects freshness:** In the 2021 behavior described, mounted-file and client-library access can obtain the current value, while an environment variable requires a Cloud Run redeployment after a secret update [00:04:11]-[00:05:14].

This May 2021 walkthrough is not current operational guidance. Recheck Cloud Run integration, Secret Manager versioning, IAM, audit logging, console behavior, and rotation semantics, then define revocation and incident response rather than stopping at storage.

Full video: <https://www.youtube.com/watch?v=JIE89dneaGo>
