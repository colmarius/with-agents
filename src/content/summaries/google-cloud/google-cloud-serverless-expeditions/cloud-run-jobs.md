---
title: "Introducing Cloud Run Jobs"
resourceId: 59
date: "2022-05-19"
collection: "google-cloud-serverless-expeditions"
order: 3
videoId: "e07TvWMmVI8"
---

A Cloud Run product manager presents the then-new Jobs capability for unattended containerized work that should run to completion instead of serving HTTP requests. The example extracts data from invoice PDFs in Cloud Storage with Document AI and writes it to Firestore.

### Key points

- **Jobs target a different completion model:** The presenter names migrations, cleanup, imports, exports, and reports as workloads that may run for minutes without a user request [00:00:00]-[00:01:52].
- **The demo packages an end-to-end batch step:** Its code reads invoices, extracts vendor names and totals, stores the results, and moves processed files aside [00:01:52]-[00:02:55]. That flow still needs idempotency and partial-failure recovery.
- **Invocation was explicit:** In the May 2022 walkthrough, a container is built with Cloud Build, a job is created with `gcloud run jobs create`, and execution starts from the console or CLI [00:02:55]-[00:03:57]. Cloud Scheduler then calls the Cloud Run Admin API with an OAuth token and a service account described as having Cloud Run Invoker permission on the job [00:03:57]-[00:05:00].
- **Parallel tasks require application partitioning:** The presenter explains how multiple tasks can divide a larger input set, but leaves the implementation to the application [00:05:00]-[00:06:04].

Treat this as a May 2022 introduction, not current setup instructions. Recheck commands, IAM roles, API endpoints, console steps, limits, retry semantics, and pricing before using Cloud Run Jobs today.

Full video: <https://www.youtube.com/watch?v=e07TvWMmVI8>
