---
title: "Monitoring for app right-sizing in GKE"
resourceId: 67
date: 2021-08-06
collection: google-cloud-beyond-your-bill
order: 11
videoId: "3bbVOp4y3MI"
---

Application right-sizing means adjusting requested CPU and memory to reflect what a workload needs as demand changes. This 2021 Google Kubernetes Engine (GKE) walkthrough shows how platform teams can give application owners the measurements to reduce waste without ignoring performance and stability.

### Key Points Covered

- **Make waste visible to the team that can change it.** Namespaces group Kubernetes workloads; the example aligns them with teams. Comparing requested resources with recommendations at that level reveals teams whose applications consistently ask for more than they need, then lets owners drill into individual workloads. [01:02–03:08](https://www.youtube.com/watch?v=3bbVOp4y3MI&t=62s)
- **Compare requests with usage and recommendations.** Requests specify the CPU and memory a container asks Kubernetes to allocate; limits constrain its use. The demo charts these alongside actual consumption and Vertical Pod Autoscaler recommendations to identify candidates for adjustment. [00:00–01:02](https://www.youtube.com/watch?v=3bbVOp4y3MI&t=0s), [02:06–04:11](https://www.youtube.com/watch?v=3bbVOp4y3MI&t=126s)
- **Low utilization can indicate too many minimum replicas.** If average use remains well below the Horizontal Pod Autoscaler's target, the presenter suggests considering fewer always-running copies while retaining the ability to scale up. The same monitoring can also reveal underprovisioned applications that need more resources for performance and stability. [03:08–04:57](https://www.youtube.com/watch?v=3bbVOp4y3MI&t=188s)

Full video: <https://www.youtube.com/watch?v=3bbVOp4y3MI>
