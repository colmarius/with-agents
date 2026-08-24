---
title: "Monitoring compute infrastructure with the Cloud Ops Agent"
resourceId: 63
date: "2021-09-22"
collection: "google-cloud-engineering-for-reliability"
order: 11
videoId: "Fzd6WP0_bWM"
---

This episode explains why a guest-level agent is needed for VM data that a hypervisor cannot observe, then demonstrates manual, policy-based, and Terraform-managed Ops Agent installation. The transcript identifies neither the presenter nor an affiliation.

### Key Points Covered

- **Guest telemetry fills a platform gap**: Memory use and other in-VM signals require a process inside the guest; the episode also shows CPU, disk, network, process, and log data ([00:00:00]-[00:04:26]).
- **Collection unifies metrics and logs**: The Ops Agent combines both paths in the demonstrated VM observability view ([00:01:03]-[00:03:15]).
- **Fleet rollout should be automated and verified**: The walkthrough uses agent policies and Terraform for filtered installation and optional upgrades, followed by explicit validation ([00:04:26]-[00:06:34]).
- **Automation introduces operational risk**: More guest telemetry adds cost and privilege, while automatic upgrades require compatibility checks and staged rollout.

The recommendations, commands, policies, APIs, Terraform resources, supported systems, defaults, and UI are from 2021. Check current Ops Agent and legacy-agent migration guidance.

Full video: <https://www.youtube.com/watch?v=Fzd6WP0_bWM>
