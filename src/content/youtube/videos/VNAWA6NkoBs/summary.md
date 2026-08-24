---
title: "Autoscaling with GKE: Clusters and nodes"
videoId: VNAWA6NkoBs
sourceUrl: "https://www.youtube.com/watch?v=VNAWA6NkoBs"
publishedAt: "2020-12-08T00:00:10Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter extends autoscaling from pods to nodes and node pools, emphasizing that scheduling constraints, disruption tolerance, provisioning delay, and workload behavior determine whether unused capacity can safely disappear. Every GKE and Kubernetes claim about Cluster Autoscaler, Node Auto-Provisioning, cost preferences, disruption budgets, system pods, annotations, logs, preemptible VMs, node pools, pause pods, formulas, metrics, and timings is a 2020 snapshot requiring current documentation and workload testing.

## Key Ideas

- In the historical account, Cluster Autoscaler responds to unschedulable pod requests by adding nodes and removes nodes only when workloads can be rescheduled safely. Current controller behavior must be checked. [00:01:03]
- Disruption constraints, system components, and local storage can prevent scale-down; the 2020 remedies and annotations require current Kubernetes and GKE validation. [00:02:05]
- Minimum capacity, autoscaler logs, separate node pools, and interruptible capacity are presented as ways to balance waste, observability, and availability. All product details are historical. [00:03:06]
- The episode describes Node Auto-Provisioning as creating differently sized node pools when existing pools do not fit demand, with more provisioning latency than adding a node to an existing pool. [00:03:06]-[00:05:11]
- Scale-up latency compounds across pod creation, image retrieval, node provisioning, and node-pool provisioning, so capacity buffers must reflect the slowest plausible path. [00:05:11]-[00:06:14]
- Two historical buffering strategies use workload-specific utilization targets or low-priority pause pods; the formula, APIs, and operational advice require current validation. [00:06:14]-[00:08:19]

## Practical Implications

- Inventory the constraints that block safe consolidation before expecting autoscaling to remove idle capacity.
- Measure the full provisioning path and retain deliberate headroom for the service objective rather than minimizing nodes in isolation.
- Test cost controls under eviction, capacity scarcity, slow image pulls, and sudden demand; nominal scaling behavior is not enough.

## Questions and Tensions

- Spare capacity costs money but buys reaction time; the correct buffer is a workload and reliability decision.
- All 2020 GKE autoscaling, metrics, tooling, annotations, defaults, formulas, and interruptible-capacity guidance needs current-doc review.

## Source

- [Video](https://www.youtube.com/watch?v=VNAWA6NkoBs)
- [transcript.md](./transcript.md)
