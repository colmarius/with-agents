---
title: "Compute Engine in a minute"
videoId: IuK4gQeHRcI
sourceUrl: "https://www.youtube.com/watch?v=IuK4gQeHRcI"
publishedAt: "2020-07-20T04:00:03Z"
sourceLanguage: en
summaryLanguage: en
captionKind: caption
status: draft
---

Priyanka Vergadia introduces Compute Engine as Google Cloud’s virtual-machine service. The one-minute format highlights machine-family selection, live migration, right-sizing, and several 2020 pricing mechanisms for existing or infrastructure-controlled workloads.

## Key Ideas

- Compute Engine offers predefined and custom virtual-machine types, with general-purpose, memory-optimized, compute-optimized, and GPU-backed configurations mapped to different workload shapes. [00:00:00]-[00:00:48]
- Live migration is presented as a way to keep workloads running during host maintenance. [00:00:48]
- Right-size recommendations and usage-, commitment-, and interruption-based pricing options are presented as cost levers. [00:00:48]
- Candidate workloads include migrations of existing systems, databases, Windows workloads, financial modeling, batch processing, and compute-intensive analysis. [00:00:48]

## Practical Implications

- Use virtual machines when workload compatibility or infrastructure control matters enough to justify operating-system, patching, scaling, and capacity responsibilities.
- Match CPU, memory, accelerators, interruption tolerance, and commitment horizon to measured workload behavior rather than selecting from a generic example list.
- Treat the machine families, discounts, and Preemptible VM terminology in this 2020 overview as dated; verify current Spot VM, pricing, availability, and maintenance behavior in current documentation.

## Questions and Tensions

- The minute-long survey does not compare virtual machines with containers, managed runtimes, or serverless alternatives.
- Provider recommendations and discounts may reduce waste, but they do not replace workload measurement or account for operational labor.

## Source

- [Video](https://www.youtube.com/watch?v=IuK4gQeHRcI)
- [transcript.md](./transcript.md)
