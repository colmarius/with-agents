---
title: "Build a serverless application integration with Workflows"
videoId: E_ZDB4S6mSQ
sourceUrl: "https://www.youtube.com/watch?v=E_ZDB4S6mSQ"
publishedAt: "2021-03-31T23:00:05Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter creates, deploys, and executes a 2021 Google Cloud Workflows example that combines a deployed Cloud Function with the Wikipedia API.

## Key Ideas

- Workflows is introduced as serverless orchestration for performing related tasks in a defined order. [00:00:01]-[00:01:03]
- The setup enables the Workflows API and assigns a service account the Logging Logs Writer role for the sample. [00:00:01]-[00:01:03]
- The example obtains a date from a Cloud Function, passes the weekday to Wikipedia, and returns relevant article results. [00:01:03]-[00:03:07]
- Workflows can connect custom services, Google Cloud services, and internet APIs rather than only the two endpoints in the example. [00:02:05]-[00:03:07]

## Practical Implications

- Use current Workflows syntax, connectors, authentication, retry, error-handling, and deployment documentation before implementing an integration.
- Treat the 2021 console flow, sample dependencies, Cloud Functions terminology, and role assignment as dated procedure.
- Give the workflow service account only the permissions needed by its actual calls, then add observability and failure-path tests.

## Questions and Tensions

- A successful linear demonstration does not show retries, timeouts, idempotency, compensation, or partial-failure behavior.
- Serverless orchestration removes server management but not coupling to API contracts, quotas, regional availability, and downstream reliability.

## Source

- [Video](https://www.youtube.com/watch?v=E_ZDB4S6mSQ)
- [transcript.md](./transcript.md)
