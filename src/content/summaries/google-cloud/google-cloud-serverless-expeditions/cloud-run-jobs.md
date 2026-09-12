---
title: "Introducing Cloud Run Jobs"
resourceId: 59
date: "2022-05-19"
collection: "google-cloud-serverless-expeditions"
order: 3
videoId: "e07TvWMmVI8"
---

Cloud Run Jobs runs unattended containerized work to completion instead of serving user requests. In this May 2022 introduction, Cloud Run product manager Carolina shows a nightly invoice-processing job, avoiding the need to maintain a virtual machine just to run a script.

### Key points

- **Jobs target a different completion model:** The presenter names migrations, cleanup, imports, exports, and reports as workloads that may run for minutes without a user request [00:00–01:52](https://www.youtube.com/watch?v=e07TvWMmVI8&t=0s).
- **The job prepares invoices for human review:** Its code reads PDFs from Cloud Storage, uses Document AI to extract vendor names and totals, and writes them to Firestore. It then moves processed files to another folder so the next run does not pick them up again [01:52–03:57](https://www.youtube.com/watch?v=e07TvWMmVI8&t=112s).
- **Creating a job and running it are separate steps:** The demo builds the container and creates the job, then starts an execution from the console. For nightly runs, Cloud Scheduler calls the Cloud Run Admin API; the shown setup uses an OAuth token and a service account with permission to invoke the job [02:55–06:04](https://www.youtube.com/watch?v=e07TvWMmVI8&t=175s).
- **Parallel tasks need separate shares of the work:** For 1,000 invoices, Carolina proposes 10 tasks. Each task reads its task number and processes its own range; task four handles invoices 301–400. Starting multiple tasks alone does not divide the input—the application must implement that partitioning [05:00–06:04](https://www.youtube.com/watch?v=e07TvWMmVI8&t=300s).

Full video: <https://www.youtube.com/watch?v=e07TvWMmVI8>
