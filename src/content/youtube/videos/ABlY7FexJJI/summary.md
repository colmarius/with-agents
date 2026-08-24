---
title: "VPC Service Controls in a minute"
videoId: ABlY7FexJJI
sourceUrl: "https://www.youtube.com/watch?v=ABlY7FexJJI"
publishedAt: "2021-06-28T04:00:02Z"
sourceLanguage: en
summaryLanguage: en
captionKind: caption
status: reviewed
---

The source does not name its presenter or provide a speaker affiliation. This 2021 security primer presents VPC Service Controls as service perimeters intended to reduce unauthorized data movement from protected Google Cloud services, including hybrid and multi-perimeter configurations.

## Key Ideas

- Service perimeters are compared to a membrane controlling data flow around projects and protected services, with Private Google Access and ingress and egress rules used in example configurations. [00:00:00]
- The primer describes near-real-time denial and activity logs, then distinguishes enforce mode from dry-run mode that records violations without blocking them. [00:00:54]
- Threat monitoring, cross-cloud data transfer, and private access to Google APIs are listed as common use cases, with no additional service charge claimed in 2021. [00:00:54]-[00:01:49]

## Practical Implications

- The durable orientation is a service-perimeter control intended to reduce unauthorized data movement; dry-run and enforce modes are historical capability descriptions, not rollout instructions.
- Validate current supported services, ingress and egress model, access levels, bridge and perimeter behavior, limitations, logging, quotas, and pricing in current documentation.

## Questions and Tensions

- “Secure Data Exchange,” Data Studio, configuration modes, and pricing are historical terms and claims that may not match current product documentation.
- A perimeter can reduce exfiltration paths but can also block legitimate service interactions; the primer does not cover dependency discovery or rollout recovery.

## Source

- [Video](https://www.youtube.com/watch?v=ABlY7FexJJI)
- [transcript.md](./transcript.md)
