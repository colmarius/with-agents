---
title: "Monitoring for efficient cluster binpacking in GKE"
resourceId: 67
date: 2021-08-04
collection: google-cloud-beyond-your-bill
order: 10
videoId: "lPSdlTIJ00c"
---

An unnamed presenter uses cluster bin packing as a diagnostic practice: compare allocatable capacity with requests, recommendations, and usage, then inspect actionable node-pool boundaries. The 2021 metrics, dashboards, defaults, networking, and tooling require current documentation and environment testing.

### Key Points Covered

- Administrators need CPU, memory, and pod-capacity evidence before reducing stranded resources. [00:00:00]
- Cluster averages can conceal an inefficient node pool, so monitoring should retain actionable boundaries. [00:01:06]
- The historical dashboard separates allocatable, requested, recommended, and used CPU or memory. [00:02:09]
- Requested-versus-used CPU must be interpreted alongside memory pressure before changing machine shape. [00:03:11]
- Pod-density and IP constraints can strand compute capacity even when the pod limit is reached. [00:03:11]-[00:04:14]

Full video: <https://www.youtube.com/watch?v=lPSdlTIJ00c>
