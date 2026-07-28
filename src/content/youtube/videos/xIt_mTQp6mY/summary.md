---
title: "Loop Engineering from First Principles — Kyle Mistele, HumanLayer"
videoId: xIt_mTQp6mY
sourceUrl: "https://www.youtube.com/watch?v=xIt_mTQp6mY"
publishedAt: "2026-07-25T20:41:40Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

[Kyle Mistele of HumanLayer](https://www.youtube.com/watch?v=xIt_mTQp6mY) presents a way to build coding-agent loops for large, consequential codebases without giving up incremental changes or human review. [00:00:59]-[00:06:08] He maps control theory's sensors, controllers, actuators, feedback, and disturbances onto an automated code-migration workflow used at HumanLayer. [00:04:02]-[00:16:13]

Editorial: The talk's central contribution is not loop automation by itself, but a set of constraints that keeps automation reviewable: measurable targets, deterministic selection where possible, small pull requests, persistent human feedback, and backpressure when review has not caught up.

## Key Ideas

- Mistele argues that very large agent-generated pull requests are a poor fit for teams, critical systems, regulatory obligations, and service-level agreements; loops for those environments should preserve reviewability. [00:00:59]
- He models code change as a control loop: compare current state with a desired set point, select an incremental correction, apply it, measure the result, and repeat. [00:04:02]-[00:06:08]
- Sensors may be deterministic checks, agent-based natural-language evaluation, or hybrid pipelines; controllers should keep each change appropriately small and directed. [00:07:11]-[00:08:14]
- HumanLayer's example incrementally migrates RPC procedures to Effect. An ast-grep sensor finds unmigrated procedures, while a checked-in, deterministically sorted baseline prevents new violations from entering on pull requests. [00:08:14]-[00:10:21]
- The controller can select the first or smallest violation, or use telemetry to prioritize procedures with errors or instrumentation gaps; the actuator combines a coding agent with a skill and hand-written golden patterns. [00:11:11]-[00:12:14]
- A scheduled workflow creates one incremental pull request per iteration, and version-controlled feedback lets reviewers re-steer both the current change and later runs through a comment-triggered iteration. [00:13:17]-[00:14:06]
- The loop applies backpressure by refusing to run while its previous labeled pull request remains open, preventing duplicate, conflicting, or unreviewed work from accumulating. [00:15:10]-[00:16:13]

## Practical Implications

- Define a measurable desired state and a repeatable sensor before asking an agent to modify code. [00:04:02]-[00:07:11]
- Use deterministic tooling for deterministic selection, and reserve the agent for changes that need contextual implementation judgment. [00:11:11]
- Establish idiomatic golden patterns by hand, then evolve the actuator skill and its version-controlled feedback from review outcomes. [00:12:14]-[00:14:06]
- Start with one small pull request per loop, block another run until that pull request is handled, and increase batch size or parallelism only after the loop is dependable. [00:15:10]-[00:16:13]

## Questions and Tensions

- Editorial: A deterministic sensor can identify structural violations, but the talk leaves the acceptable false-positive and false-negative rates for agent-based or hybrid sensors unspecified.
- Editorial: Keeping one pull request open per loop protects review capacity, but multiple independent loops could still compete for the same files or shared reviewer attention.
- Editorial: Telemetry-based prioritization may target high-value procedures, while smallest-first selection may reduce implementation risk; teams still need an explicit policy for resolving that tradeoff.

## Source

- [Loop Engineering from First Principles — Kyle Mistele, HumanLayer](https://www.youtube.com/watch?v=xIt_mTQp6mY)
- [transcript.md](./transcript.md)
