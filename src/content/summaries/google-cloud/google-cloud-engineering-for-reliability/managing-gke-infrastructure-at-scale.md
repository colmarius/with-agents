---
title: "Managing GKE infrastructure at scale"
resourceId: 63
date: "2021-06-23"
collection: "google-cloud-engineering-for-reliability"
order: 16
videoId: "lHCB_i_rWAI"
---

This episode shows how GKE dashboards can narrow incidents across node, workload, namespace, and container scope. It compares a workload-local memory alert with node evidence, then compares node and container CPU signals during broader resource pressure. The transcript identifies neither the presenter nor an affiliation.

### Key Points Covered

- **Start broad, then narrow ownership**: Alert timelines and workload search locate a namespace and workload from sparse reports ([00:00:00]-[00:01:03]).
- **Negative evidence is useful but incomplete**: No node memory alert alongside a workload alert supports a service-local hypothesis; it does not prove infrastructure was uninvolved ([00:01:03]-[00:02:08]).
- **Compare node and container scope**: Elevated node and container CPU can reveal which colocated workloads were affected ([00:02:08]-[00:03:11]).
- **Affected is not the same as causal**: Corresponding utilization does not establish which service created the contention.

The dashboard navigation, metric names, aggregation, defaults, and alert behavior shown are from 2021. Confirm current GKE observability semantics before turning this example into a runbook.

Full video: <https://www.youtube.com/watch?v=lHCB_i_rWAI>
