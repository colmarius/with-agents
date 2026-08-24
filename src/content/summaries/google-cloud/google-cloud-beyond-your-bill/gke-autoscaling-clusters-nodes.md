---
title: "Autoscaling with GKE: Clusters and nodes"
resourceId: 67
date: 2020-12-08
collection: google-cloud-beyond-your-bill
order: 9
videoId: "VNAWA6NkoBs"
---

An unnamed presenter extends autoscaling from pods to nodes and node pools, where scheduling constraints, disruption, and provisioning delay govern safe consolidation. Every GKE behavior, annotation, default, formula, and tooling detail is a 2020 snapshot requiring current docs and workload testing.

### Key Points Covered

- The historical Cluster Autoscaler adds nodes for unschedulable pod requests and removes them when workloads can be rescheduled. [00:01:03]
- Disruption constraints, system components, and local storage can block scale-down. [00:02:05]
- The episode presents logs, minimum capacity, separate pools, and interruptible capacity as cost-reliability controls. [00:03:06]
- Node Auto-Provisioning creates differently sized pools but can add more latency than extending an existing pool. [00:03:06]-[00:05:11]
- Pod, image, node, and node-pool startup delays compound, so buffers need representative testing. [00:05:11]-[00:06:14]

Full video: <https://www.youtube.com/watch?v=VNAWA6NkoBs>
