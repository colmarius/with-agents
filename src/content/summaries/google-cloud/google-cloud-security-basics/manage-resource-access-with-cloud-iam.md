---
title: "Manage resource access with Cloud IAM"
resourceId: 57
date: "2021-05-07"
collection: "google-cloud-security-basics"
order: 7
videoId: "LznrFv7iRNI"
---

This episode introduces Cloud IAM as a centralized model for granting people and applications access to resources without relying on repeated manual approvals.

### Key Points Covered

- **Access must balance least privilege and timely work**: Manual approval may work at very small scale but becomes unwieldy as organizations and remote teams grow [00:01:02]-[00:02:05].
- **IAM separates core concepts**: In the video's 2021 model, identities receive roles containing permissions, while policies bind identities and roles to resources [00:02:05]-[00:04:13].
- **Groups scale assignment**: Granting roles to groups lets membership changes control inherited access instead of repeatedly changing individual grants [00:04:13]-[00:05:15].
- **Directory synchronization can reduce duplicate administration**: The episode describes continuously synchronizing an existing hierarchy and using descriptive group names, though names are not evidence that access is correct [00:05:15]-[00:06:18].
- **IAM configuration remains a customer duty**: Google supplies the control plane, but customers remain responsible for identity lifecycle, role scope, policy review, workload access, and monitoring [00:06:18]-[00:07:21].
- **Treat this as dated guidance**: This is a 2021 explanation; verify current Google Cloud IAM behavior, documentation, defaults, directory integration, products, UI, pricing, and incident-response guidance.

Full video: <https://www.youtube.com/watch?v=LznrFv7iRNI>
