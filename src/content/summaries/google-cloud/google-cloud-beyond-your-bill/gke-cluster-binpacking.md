---
title: "Monitoring for efficient cluster binpacking in GKE"
resourceId: 67
date: 2021-08-04
collection: google-cloud-beyond-your-bill
order: 10
videoId: "lPSdlTIJ00c"
---

Bin packing means fitting workloads onto cluster machines so less capacity sits unused. This 2021 Google Kubernetes Engine (GKE) walkthrough explains why CPU, memory, and pod counts must be examined together: a machine can be full by one measure and wasteful by another.

### Key Points Covered

- **Inspect node pools, not only cluster averages.** A node pool is a group of machines assigned to workloads. If one pool is poorly sized for its applications, its unused capacity may be hidden in the cluster-wide average. [01:06–02:09](https://www.youtube.com/watch?v=lPSdlTIJ00c&t=66s)
- **Compare four measurements.** Allocatable capacity is what remains available to workloads after system components take their share. Requests are what pods ask for, recommendations are the platform's suggested requests, and usage is what pods actually consume. The gaps show where to investigate sizing. [02:09–03:11](https://www.youtube.com/watch?v=lPSdlTIJ00c&t=129s)
- **Check memory before cutting a CPU-heavy machine.** In the example, workloads use little CPU but most available memory. The presenter suggests investigating machines with the same memory and fewer CPUs, rather than simply shrinking every resource. [03:11–04:14](https://www.youtube.com/watch?v=lPSdlTIJ00c&t=191s)
- **Pod limits can leave CPU and memory unused.** Limiting pods per node can conserve IP addresses because each pod needs one. But reaching that pod limit prevents further packing even if the machine still has spare compute resources. [03:11–05:27](https://www.youtube.com/watch?v=lPSdlTIJ00c&t=191s)

Full video: <https://www.youtube.com/watch?v=lPSdlTIJ00c>
