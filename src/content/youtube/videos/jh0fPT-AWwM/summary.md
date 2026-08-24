---
title: "Top 3 ways to run your containers on Google Cloud"
videoId: jh0fPT-AWwM
sourceUrl: "https://www.youtube.com/watch?v=jh0fPT-AWwM"
publishedAt: "2020-01-04T17:00:09Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter—the transcript states neither a name nor an affiliation—compares three 2020 container runtime models: GKE, Cloud Run, and Compute Engine. The durable distinction is how much infrastructure and orchestration control each model exposes; the Anthos, registry, UI, and product-boundary details are historical.

## Key Ideas

- Containers package an application with dependencies, while runtime options differ mainly in how much underlying infrastructure they expose. [00:00:00]-[00:01:04]
- GKE supplies managed Kubernetes scheduling, scaling, health, upgrades, and cluster options for teams that need orchestration controls. [00:00:00]-[00:02:08]
- Cloud Run combines container packaging with a managed, scale-to-zero service model for stateless workloads. [00:02:08]-[00:03:12]
- Compute Engine runs containers in familiar VMs and can pair Container-Optimized OS with managed instance groups for lower-level control. [00:03:12]-[00:04:16]
- The episode connects image storage, access control, delivery automation, vulnerability information, and runtime deployment as one supply-chain path. [00:04:16]-[00:05:19]

## Practical Implications

- Choose a runtime from required Kubernetes APIs, workload shape, portability, scaling behavior, operating capacity, and security boundaries.
- Include image provenance, registry access, scanning, and promotion in the runtime decision rather than treating deployment as an isolated step.
- Check current GKE modes, Cloud Run capabilities, Compute Engine container guidance, Artifact Registry migration guidance, and supported delivery integrations.

## Questions and Tensions

- The episode emphasizes deployment convenience but gives little attention to state, networking, tenancy, cost, policy, or incident operations.
- Its 2020 Anthos, Google Container Registry, GCP branding, and console workflow are historical; some named paths have since changed or converged.

## Source

- [Video](https://www.youtube.com/watch?v=jh0fPT-AWwM)
- [transcript.md](./transcript.md)
