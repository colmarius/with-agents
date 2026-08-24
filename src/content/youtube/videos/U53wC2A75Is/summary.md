---
title: "Getting started with SLOs"
videoId: U53wC2A75Is
sourceUrl: "https://www.youtube.com/watch?v=U53wC2A75Is"
publishedAt: "2021-05-26T15:00:12Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter introduces SLIs and SLOs as a shared way to define and manage reliability for user-facing applications, APIs, and data pipelines. The core argument is that reliability should be designed and measured as a feature, using indicators tied to user interactions rather than a vague notion of uptime.

The Cloud Operations screens and procedures shown are from 2021 and may be dated; users should verify current Google Cloud product names, configuration, and interfaces.

## Key Ideas

- [00:00:00]-[00:01:03] Different service types have different user-facing reliability concerns, including availability, performance, throughput, correctness, and data-processing latency.
- [00:02:05]-[00:03:07] An SLI counts a defined class of interactions and distinguishes successful events from the valid total, with exclusions such as client errors requiring deliberate policy.
- [00:03:07]-[00:04:12] An SLO combines an SLI, threshold, and evaluation window; the suggested target is the boundary at which typical users are just satisfied rather than an automatic 100 percent.
- [00:06:18] Rolling windows replenish error budget through improved performance over time, unlike calendar windows that reset the budget at a boundary.

## Practical Implications

Define who uses each service and what outcomes they value before choosing telemetry. Use SLOs to align reliability work with feature work, and investigate indicator behavior and error-budget consumption rather than relying on uptime alone.

## Questions and Tensions

The “happiness test” is useful but requires evidence about user expectations. Teams must also decide which failures count, whether calendar or rolling windows fit their decisions, and when extra reliability is worth more than new capabilities.

## Source

https://www.youtube.com/watch?v=U53wC2A75Is

[transcript.md](./transcript.md)
