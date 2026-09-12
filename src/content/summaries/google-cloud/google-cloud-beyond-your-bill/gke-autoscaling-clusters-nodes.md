---
title: "Autoscaling with GKE: Clusters and nodes"
resourceId: 67
date: 2020-12-08
collection: google-cloud-beyond-your-bill
order: 9
videoId: "VNAWA6NkoBs"
---

Adding application copies only helps if machines have room to run them. This 2020 Google Kubernetes Engine (GKE) episode explains scaling nodes—the machines that run pods—and node pools, groups of those machines. It also explains why removing spare capacity can make the next traffic spike harder to absorb.

### Key Points Covered

- **Cluster Autoscaler reacts to pods that cannot fit.** It adds nodes when requested resources cannot be scheduled on existing machines. Scaling down requires moving workloads elsewhere; disruption budgets, which constrain how many pods may be unavailable, and pods that cannot safely restart can prevent a node's removal. [01:03–03:06](https://www.youtube.com/watch?v=VNAWA6NkoBs&t=63s)
- **Node Auto-Provisioning changes the available machine choices.** In the design shown, Cluster Autoscaler extends configured pools; Node Auto-Provisioning can create new pools sized for the workload. That flexibility adds provisioning time compared with adding a node to an existing pool. [03:06–05:11](https://www.youtube.com/watch?v=VNAWA6NkoBs&t=186s)
- **Scaling delay depends on what is already ready.** A pod may start quickly on a node that already has its container image. Otherwise it must wait for the image download, a new node, or even a new pool before it can run. Spare capacity gives the application time to absorb demand while those steps complete. [05:11–07:17](https://www.youtube.com/watch?v=VNAWA6NkoBs&t=311s)
- **The episode offers two ways to keep a buffer.** A lower utilization target starts scaling before the application reaches capacity. Alternatively, low-priority pause pods reserve space without doing useful work; higher-priority application pods replace them, while the displaced pause pods cause capacity to be replenished. [06:14–08:19](https://www.youtube.com/watch?v=VNAWA6NkoBs&t=374s)

Full video: <https://www.youtube.com/watch?v=VNAWA6NkoBs>
