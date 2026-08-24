---
title: "Manage your Cloud Run secrets securely with Secret Manager"
videoId: JIE89dneaGo
sourceUrl: "https://www.youtube.com/watch?v=JIE89dneaGo"
publishedAt: "2021-05-13T15:00:07Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Martin Omander, who identifies himself as a Google developer advocate, demonstrates the then-new native integration between Cloud Run and Secret Manager. He contrasts it with hard-coded secrets and manually managed environment files.

## Key Ideas

- Hard-coded secrets expose credentials to repository readers and complicate moving code between environments; environment variables remove them from code but still need secure storage. [00:00:00]-[00:01:03]
- In the 2021 console demonstration, a custom Cloud Run service account receives access to one Secret Manager secret under least privilege. [00:02:05]-[00:03:08]
- Secret Manager provides granular access controls and audit logs, and the integration lets the example remove a plaintext environment variable without changing application code. [00:03:08]-[00:04:11]
- The 2021 behavior described is that file-mounted secrets and client-library reads can obtain current values, while environment-variable updates require a Cloud Run redeployment. [00:04:11]-[00:05:14]

## Practical Implications

- Separate secret storage from source code and grant each runtime identity access only to the secrets it needs.
- Recheck current Cloud Run, Secret Manager, IAM, audit-logging, versioning, and console behavior rather than treating this 2021 walkthrough as current instructions.

## Questions and Tensions

- The demonstration does not develop a complete rotation, revocation, or incident-response process.
- Choosing environment variables, mounted files, or client-library access trades deployment simplicity against secret freshness and application coupling.

## Source

- https://www.youtube.com/watch?v=JIE89dneaGo
- [transcript.md](./transcript.md)
