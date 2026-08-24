---
title: "Monitoring compute infrastructure with the Cloud Ops Agent"
videoId: Fzd6WP0_bWM
sourceUrl: "https://www.youtube.com/watch?v=Fzd6WP0_bWM"
publishedAt: "2021-09-22T15:00:12Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter explains why guest-level agents are needed for metrics and logs unavailable to a VM hypervisor, then demonstrates manual, policy-based, and Terraform-managed Ops Agent installation. Guest observability and fleet automation remain durable concepts, but the 2021 agent recommendations, commands, policies, APIs, and UI must be checked against current documentation.

## Key Ideas

- [00:00:00]-[00:01:03] A guest agent can observe memory use and other data that the VM hypervisor cannot see directly; the video says the Ops Agent also adds CPU, disk, and network visibility.
- [00:01:03]-[00:03:15] The Ops Agent combines metrics and log collection, and the walkthrough installs it manually on one VM; its claim that the Ops Agent should replace legacy agents reflects 2021 guidance.
- [00:03:15]-[00:04:26] The demonstrated VM observability view brings together guest process, memory, disk, and log data collected by the agent.
- [00:04:26]-[00:06:34] The video uses then-current gcloud agent policies, operating-system and zone filters, and Terraform to automate installation and optional upgrades across a VM fleet, followed by explicit validation.

## Practical Implications

Define a fleet-wide guest telemetry baseline, automate rollout and upgrades, and verify collected data after policy application. Consult current guidance for supported operating systems, agent versions, policy mechanisms, gcloud commands, Terraform resources, and migration from legacy agents.

## Questions and Tensions

More guest telemetry improves diagnosis but adds collection cost, privileges, rollout risk, and lifecycle management. Automatic upgrades reduce drift while requiring controls for compatibility and staged deployment.

## Source

https://www.youtube.com/watch?v=Fzd6WP0_bWM

[transcript.md](./transcript.md)
