---
title: "Emulated: The Data for Fully Autonomous Software Engineers and Companies — Joseph Wang"
videoId: zkX03APVj0M
sourceUrl: "https://www.youtube.com/watch?v=zkX03APVj0M"
publishedAt: "2026-07-31T21:00:03Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Joseph Wang and his Emulated co-founder Sid argue that training and evaluating
agents for infrastructure work requires environments that extend beyond a code
repository into organizational context, deployments, distributed failures, and
live-service constraints.

Editorial: The talk is a product and research-direction account from Emulated,
not a comparative evaluation showing that its environments improve production
agent reliability.

## Key Ideas

- Wang and Sid say current software-engineering benchmarks emphasize repository changes but omit work such as customer discovery, approach selection, performance testing, and long-term infrastructure ownership. [00:01:55]-[00:03:44]
- They describe containerized company environments containing projects, incidents, customer conversations, distributed nodes, network failures, corruption, clock skew, and operational blast radius so that tasks extend beyond a code diff. [00:03:44]-[00:05:37]
- They argue that single-node sandboxes cannot faithfully represent resource provisioning, networked services, gradual deployment, rollback, monitoring, or other cloud-service responsibilities at sufficient scale. [00:06:40]-[00:10:58]
- Their proposed next step is a multi-node sandbox with access to real cloud resources, which would also change the cost and structure of post-training pipelines. [00:10:58]-[00:11:46]
- They identify environment startup time, cost, live traffic, scale-dependent failures, and the remaining simulation-to-reality gap as unresolved constraints. [00:11:46]-[00:12:45]
- Wang says Emulated starts with infrastructure because it matches the founders' domain expertise and offers clearer operational requirements than domains still searching for product-market fit; Sid says they hope lessons from that vertical will transfer elsewhere. [00:13:50]-[00:15:41]

## Practical Implications

- Evaluate long-horizon infrastructure agents against organizational state, deployment behavior, monitoring, rollback, and failure recovery rather than repository output alone.
- Preserve blast-radius controls and service continuity inside an evaluation instead of rewarding a locally correct change that would be unsafe under live traffic.
- Treat environment fidelity, startup time, resource cost, scale, and reproducibility as explicit post-training design constraints.

## Questions and Tensions

- Editorial: The talk does not report model comparisons, task success rates, environment reproducibility, or evidence that greater infrastructure fidelity transfers to production reliability.
- Editorial: Using real cloud resources can narrow some simulation gaps while introducing cost, tenancy, security, nondeterminism, and cleanup risks that the presentation does not resolve.
- Editorial: Company-scale context may make tasks more realistic, but benchmark designers still need stable goals and verifiers that cannot be satisfied through unsafe operational shortcuts.

## Source

- [Emulated: The Data for Fully Autonomous Software Engineers and Companies — Joseph Wang](https://www.youtube.com/watch?v=zkX03APVj0M)
- [transcript.md](./transcript.md)
