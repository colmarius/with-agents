---
title: "Managing GKE infrastructure at scale"
resourceId: 63
date: "2021-06-23"
collection: "google-cloud-engineering-for-reliability"
order: 16
videoId: "lHCB_i_rWAI"
---

When an application on Google Kubernetes Engine (GKE) has a resource problem, operators need to distinguish that application's behavior from problems on the node running it. Two dashboard examples compare application and node measurements to narrow the investigation ([00:00–03:11](https://www.youtube.com/watch?v=lHCB_i_rWAI&t=0s)).

### Key Points Covered

- **Start broad, then narrow ownership**: Alert timelines and workload search locate a namespace and workload from sparse reports ([00:00–01:03](https://www.youtube.com/watch?v=lHCB_i_rWAI&t=0s)).
- **Compare application memory with node memory**: The workload has a memory alert, but its nodes show no corresponding memory problem. The presenter therefore treats this incident as local to the service. That narrows the likely cause rather than proving infrastructure was uninvolved ([01:03–02:08](https://www.youtube.com/watch?v=lHCB_i_rWAI&t=63s)).
- **Separate services during a broader alert**: A node has high CPU use. Some services on it show no increase in container CPU use, while at least two do. The comparison identifies which services share the symptom; it does not establish which service caused the contention ([02:08–03:11](https://www.youtube.com/watch?v=lHCB_i_rWAI&t=128s)).

Full video: <https://www.youtube.com/watch?v=lHCB_i_rWAI>
