---
title: "Autoscaling with GKE: Overview and pods"
videoId: 7naCIxIaV1M
sourceUrl: "https://www.youtube.com/watch?v=7naCIxIaV1M"
publishedAt: "2020-12-01T00:00:03Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter explains pod autoscaling as a cost-and-reliability control loop: relate demand to capacity, account for startup and restart latency, and keep enough headroom to absorb change without preserving waste indefinitely. Every GKE and Kubernetes autoscaler behavior, mode, metric, component, probe, recommendation window, compatibility rule, and configuration claim is a 2020 snapshot requiring current GKE and Kubernetes documentation plus workload testing.

## Key Ideas

- Autoscaling spans workloads and infrastructure and can change capacity horizontally by adding units or vertically by resizing them. [00:01:02]
- The historical Horizontal Pod Autoscaler account uses a demand metric and target to add or remove pods; headroom must reflect demand spikes and pod startup latency. Current metric and controller behavior must be verified. [00:02:05]
- The 2020 Vertical Pod Autoscaler description uses recommendations and historical modes to resize CPU and memory through pod recreation. Current modes and behavior require documentation review. [00:03:08]-[00:04:11]
- Reliability constraints include startup speed, readiness and liveness checks, restart tolerance, minimums and maximums, and disruption management. The specific GKE guidance is historical. [00:03:08]-[00:05:15]
- Combining horizontal and vertical control loops can create interference when both react to the same resource signal; the episode suggests separating signals or using recommendations only. Current compatibility guidance is required. [00:05:15]-[00:06:17]

## Practical Implications

- Model scaling as a feedback loop with demand signals, control latency, safety bounds, and failure behavior rather than as a cost switch.
- Measure startup and restart characteristics under representative load before reducing headroom.
- Optimize cost and service objectives together; a cheaper steady state that cannot absorb change is not efficient.

## Questions and Tensions

- Larger buffers waste capacity, while smaller buffers expose users to slow scale-up and sudden demand.
- The autoscaler modes, metrics pipeline, probes, disruption behavior, combination rules, and GKE tooling described in 2020 need current-doc validation and controlled testing.

## Source

- [Video](https://www.youtube.com/watch?v=7naCIxIaV1M)
- [transcript.md](./transcript.md)
