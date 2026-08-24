---
title: "Google Cloud VPC"
videoId: NPs_-Y5nFgE
sourceUrl: "https://www.youtube.com/watch?v=NPs_-Y5nFgE"
publishedAt: "2018-08-07T16:21:55Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter demonstrates the 2018 Google Cloud console flow for creating one auto mode VPC network and one custom mode VPC network with regional subnets.

## Key Ideas

- Auto mode creates the network through a predefined subnet mode, while custom mode asks the operator to add and address each regional subnet explicitly. [00:00:00]-[00:01:05]
- The custom example spans `us-central1`, `europe-west1`, and `asia-east1`, illustrating that one VPC network can contain regional subnets. [00:00:00]-[00:01:05]
- The walkthrough ends after resource creation; it does not configure firewall policy, routes, connectivity, or production controls. [00:01:05]

## Practical Implications

- Use the current VPC documentation to choose the network mode and non-overlapping address plan before creating resources.
- Treat the console labels and clicks as a 2018 snapshot, not as current procedure.
- Add current firewall, routing, DNS, connectivity, observability, and least-privilege guidance before treating a network as production-ready.

## Questions and Tensions

- Fast console creation demonstrates topology but does not explain address-planning tradeoffs or future connectivity constraints.
- A successful network creation says nothing about whether traffic is permitted, reachable, observable, or appropriately isolated.

## Source

- [Video](https://www.youtube.com/watch?v=NPs_-Y5nFgE)
- [transcript.md](./transcript.md)
