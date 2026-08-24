---
title: "Introducing Cloud Run Jobs"
videoId: e07TvWMmVI8
sourceUrl: "https://www.youtube.com/watch?v=e07TvWMmVI8"
publishedAt: "2022-05-19T23:00:10Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Martin speaks with Carolina, identified in the transcript as a Cloud Run product manager, about the then-new Cloud Run Jobs capability for unattended containerized batch work. The demo processes invoices from Cloud Storage with Document AI and writes extracted data to Firestore.

## Key Ideas

- Cloud Run Jobs target work such as migrations, cleanup, imports, exports, and reports that should run unattended to completion rather than serve HTTP requests. [00:00:00]-[00:01:52]
- The demo reads invoice PDFs from Cloud Storage, extracts fields through Document AI, stores results in Firestore, and moves processed files aside. [00:01:52]-[00:02:55]
- As shown in May 2022, a job is built as a container, created with `gcloud run jobs create`, and started from the console or command line. [00:02:55]-[00:03:57]
- The 2022 demo schedules execution through Cloud Scheduler and the Cloud Run Admin API, using an OAuth token and a service account described as having Cloud Run Invoker permission on the job. [00:03:57]-[00:05:00]
- Multiple tasks can partition a larger input set so independent portions run in parallel. [00:05:00]-[00:06:04]

## Practical Implications

- Containerized batch work can avoid maintaining an otherwise idle virtual machine, but applications still need idempotency, failure handling, and a safe partitioning strategy.
- Verify current commands, IAM roles, API endpoints, console steps, limits, and pricing before applying this May 2022 walkthrough.

## Questions and Tensions

- The demo does not show retry behavior, task coordination, duplicate processing, or recovery after moving only some files.
- The parallel-task example explains partitioning conceptually but defers implementation details.

## Source

https://www.youtube.com/watch?v=e07TvWMmVI8

[transcript.md](./transcript.md)
