---
title: "Autoscaling with GKE: Overview and pods"
resourceId: 67
date: 2020-12-01
collection: google-cloud-beyond-your-bill
order: 8
videoId: "7naCIxIaV1M"
---

Autoscaling adds capacity when demand rises and removes it when demand falls. This 2020 Google Kubernetes Engine (GKE) episode compares adding more pods—units running containerized applications—with giving each pod more CPU or memory, and explains why both choices depend on application behavior.

### Key Points Covered

- **Horizontal scaling spreads work across more copies.** The Horizontal Pod Autoscaler compares a demand metric, such as average CPU use or requests per second, with a target. Adding pods should lower the work per pod. Spare capacity must cover startup time: too little risks overload during spikes, while too much wastes money. [01:02–03:08](https://www.youtube.com/watch?v=7naCIxIaV1M&t=62s)
- **Vertical scaling changes the resources per pod.** In the behavior shown, the Vertical Pod Autoscaler recommends CPU and memory sizes and can apply them when pods are created or by deleting and recreating pods. A workload must tolerate those restarts and actually benefit from more resources; extra CPU may not help a single-threaded application. [03:08–05:15](https://www.youtube.com/watch?v=7naCIxIaV1M&t=188s)
- **Two autoscalers can react to the same change.** The presenter warns against both controllers changing capacity based on the same CPU or memory signal. The alternatives shown are keeping vertical scaling in recommendation-only mode or using a different horizontal metric, such as requests per second. [05:15–07:02](https://www.youtube.com/watch?v=7naCIxIaV1M&t=315s)

Full video: <https://www.youtube.com/watch?v=7naCIxIaV1M>
