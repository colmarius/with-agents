---
title: "Setting up cost controls for BigQuery"
videoId: 3Z1SzQsYnH8
sourceUrl: "https://www.youtube.com/watch?v=3Z1SzQsYnH8"
publishedAt: "2020-08-12T23:00:01Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter explains a 2020 BigQuery cost-control technique: custom daily query quotas at project and per-user scope.

## Key Ideas

- A project-level custom quota limits aggregate query data processed by users in that project, while a user-level quota applies separately to each user or service account. [00:00:01]-[00:01:06]
- When both quota types apply, usage counts against both and the stricter limit governs the query. [00:00:01]
- The demonstration filters BigQuery API quotas, enters limits in tebibytes, and explains that BigQuery returns an error after a daily limit is exceeded. [00:01:06]

## Practical Implications

- Use current BigQuery quota and cost-control documentation to confirm available controls, units, reset behavior, and console paths.
- Treat the 2020 UI and submission flow as dated; test quota behavior before relying on it operationally.
- Combine query quotas with current budgets, alerts, workload design, reservation or capacity controls, and monitoring rather than treating one quota as a complete cost strategy.

## Questions and Tensions

- A hard query-data limit can prevent runaway scans but can also interrupt legitimate workloads.
- The quickstart focuses on processed-data quotas and does not cover all BigQuery cost dimensions or provide a guaranteed spending cap.

## Source

- [Video](https://www.youtube.com/watch?v=3Z1SzQsYnH8)
- [transcript.md](./transcript.md)
