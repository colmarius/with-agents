---
title: "Autoscaling with GKE: Overview and pods"
resourceId: 67
date: 2020-12-01
collection: google-cloud-beyond-your-bill
order: 8
videoId: "7naCIxIaV1M"
---

An unnamed presenter explains pod autoscaling as a cost-and-reliability control loop shaped by demand, startup latency, and headroom. The GKE and Kubernetes modes, metrics, probes, and compatibility advice are from 2020; check current docs and test with representative workloads.

### Key Points Covered

- Autoscaling can add units horizontally or resize them vertically across workloads and infrastructure. [01:02](https://www.youtube.com/watch?v=7naCIxIaV1M&t=62s)
- Horizontal Pod Autoscaler uses a demand metric and target; safe headroom depends on spikes and startup time. [02:05](https://www.youtube.com/watch?v=7naCIxIaV1M&t=125s)
- The historical Vertical Pod Autoscaler modes resize CPU and memory, potentially through pod recreation. [03:08–04:11](https://www.youtube.com/watch?v=7naCIxIaV1M&t=188s)
- Startup, probes, restart tolerance, bounds, and disruption management constrain safe scaling. [03:08–05:15](https://www.youtube.com/watch?v=7naCIxIaV1M&t=188s)
- Horizontal and vertical loops can interfere when both react to the same resource signal. [05:15–06:17](https://www.youtube.com/watch?v=7naCIxIaV1M&t=315s)

Full video: <https://www.youtube.com/watch?v=7naCIxIaV1M>
