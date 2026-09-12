---
title: "Enterprise foundations blueprint"
resourceId: 98
date: "2025-05-15"
---

Google's enterprise foundations blueprint defines the shared infrastructure and security controls that workload teams build on. It covers resource hierarchy, identity, networking, policy, logging, secrets, encryption keys, and detection. A common foundation lets teams deploy workloads without independently rebuilding those controls.

### The control model

The design combines three layers:

- **Architecture controls** establish folders and projects for each environment, private connectivity, and shared security services. Shared VPC lets a central team manage networks that workload projects use.
- **Policy controls** restrict what can be deployed. Organization policies enforce resource constraints, while infrastructure-as-code checks catch disallowed configurations before deployment.
- **Detective controls** reveal problems that need a response. Centralized audit and security logs, together with Security Command Center findings, support investigation and response.

Cloud Identity integrates the existing identity provider, while IAM grants job-based access through groups. Foundation changes flow through privileged CI/CD identities rather than routine user access.

Central projects separate responsibilities for logging, Secret Manager, Cloud KMS, and security operations; project metadata supports governance and cost attribution.

### Treat the repository as a starting point

The companion [Terraform example foundation](https://github.com/terraform-google-modules/terraform-example-foundation) turns the architecture into staged infrastructure: bootstrap, organization-wide services, environment folders, networks, projects, and sample application infrastructure. Its default Cloud Build pipelines, protected environment branches, remote state, and policy validation demonstrate a GitOps operating model.

The repository is an example to fork, customize, and maintain, not a reusable remote module. Upgrades can break customized deployments, including between minor versions. Before production rollout, review its errata against the written blueprint and test migration and recovery paths.

Use the blueprint to create a baseline or assess an existing environment. For a smaller organization, a practical adaptation is to select controls it can operate effectively rather than copying a separation of duties that assumes larger teams.

Sources:

- [Enterprise foundations blueprint](https://docs.cloud.google.com/architecture/blueprints/security-foundations)
- [Terraform example foundation](https://github.com/terraform-google-modules/terraform-example-foundation)
