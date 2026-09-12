---
title: "Manage your Cloud Run secrets securely with Secret Manager"
resourceId: 59
date: "2021-05-13"
collection: "google-cloud-serverless-expeditions"
order: 8
videoId: "JIE89dneaGo"
---

Passwords in source code are visible to repository readers and difficult to vary between development and production. In this May 2021 demonstration, Google developer advocate Martin Omander moves a Cloud Run application's database password into Secret Manager, adding per-secret permissions without changing application code.

### Key points

- **Moving a secret out of code is only the first boundary:** The presenter contrasts hard-coded credentials with environment files, which avoid the repository but still require protected storage [00:00–02:05](https://www.youtube.com/watch?v=JIE89dneaGo&t=0s).
- **The demo applies per-secret least privilege:** A custom Cloud Run service account that already has only a Cloud SQL role receives access to one database-password secret, then the plaintext environment value is replaced with a Secret Manager reference [02:05–04:11](https://www.youtube.com/watch?v=JIE89dneaGo&t=125s).
- **The logging claim has a specific scope:** The presenter says secret creation and updates are logged by default, and that he usually enables additional logging for secret access [04:11–05:14](https://www.youtube.com/watch?v=JIE89dneaGo&t=251s). The episode does not say every access is logged by default.
- **How the code reads the secret affects updates:** Martin describes three access paths: an environment variable, a mounted file, or a call to the Secret Manager client library. In the 2021 behavior shown, file reads and client-library calls can obtain the current value; an environment variable requires redeploying the Cloud Run service after the secret changes. Calling the library also requires application-code changes [04:11–06:15](https://www.youtube.com/watch?v=JIE89dneaGo&t=251s).

Full video: <https://www.youtube.com/watch?v=JIE89dneaGo>
