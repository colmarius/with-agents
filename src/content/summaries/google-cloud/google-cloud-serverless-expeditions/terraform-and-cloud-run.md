---
title: "Infrastructure as code with Terraform and Cloud Run"
resourceId: 59
date: "2021-04-08"
collection: "google-cloud-serverless-expeditions"
order: 10
videoId: "Ce93fpQrKCk"
---

The presenters introduce Terraform as a way to replace fragile deployment instructions with machine-readable infrastructure intent. The argument is for repeatability and review, not that configuration alone solves state and delivery management.

### Key points

- **Desired state replaces an imperative checklist:** The 2021 comparison shows a repeated `gcloud` bucket-creation command failing while Terraform checks declared state before acting [00:01:03]-[00:02:07]. The simplified demonstration does not establish that Terraform automatically adopts a bucket that already exists outside its state; managing existing infrastructure may require import and deliberate state reconciliation.
- **Configuration can express variation and order:** HCL variables capture environment differences, while Terraform derives dependencies and can create independent resources in parallel [00:02:07]-[00:03:13].
- **Infrastructure deployment is not artifact creation:** The presenter says Terraform expects containers or compiled code to exist already; a team can run it after artifact creation or add it to a Cloud Build pipeline [00:03:13]-[00:04:16].

This April 2021 introduction omits remote state, locking, imports, drift review, secrets, and plan approval. Verify current Terraform, Google provider, Cloud Build, Cloud Run, and state/import behavior before applying it; repeatability depends on disciplined state and change management.

Full video: <https://www.youtube.com/watch?v=Ce93fpQrKCk>
