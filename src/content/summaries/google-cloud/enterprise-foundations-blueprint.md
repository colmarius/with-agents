---
title: "Enterprise foundations blueprint"
resourceId: 98
date: "2025-05-15"
---

Build the foundation before individual workload teams invent incompatible controls. Google's blueprint defines a baseline of resource hierarchy, identity, networking, policy, logging, secrets, encryption keys, and detection that platform teams can deploy consistently, then adapt to their own requirements.

### The control model

The design combines three layers:

- **Architecture controls** establish the organization, environment-oriented folders and projects, centrally managed Shared VPC networks, private connectivity, and shared security services.
- **Policy controls** use organization policies plus infrastructure-as-code validation to prevent risky configurations before and after deployment.
- **Detective controls** centralize audit and security logs and connect Security Command Center findings to operational response.

Cloud Identity integrates the existing identity provider, while IAM grants job-based access through groups. Foundation changes flow through privileged CI/CD identities rather than routine user access. Central projects separate responsibilities for logging, Secret Manager, Cloud KMS, and security operations; project metadata supports governance and cost attribution.

### Treat the repository as a starting point

The companion [Terraform example foundation](https://github.com/terraform-google-modules/terraform-example-foundation) turns the architecture into staged infrastructure: bootstrap, organization-wide services, environment folders, networks, projects, and sample application infrastructure. Its default Cloud Build pipelines, protected environment branches, remote state, and policy validation demonstrate a GitOps operating model.

The repository is explicitly an example to fork, customize, and maintain—not a remote module or turnkey guarantee. Its maintainers cannot account for local modifications or workloads and do not promise to avoid breaking changes. Review the repository's errata against the written blueprint, pin and test dependencies, and design migration and recovery paths before production rollout.

Use the blueprint either to create a new baseline or to compare an existing environment with Google's recommendations. Smaller organizations should select only controls they can operate effectively rather than copying enterprise separation of duties without the teams to sustain it.

Google marks the blueprint as last reviewed on 2025-05-15.

Sources:

- [Enterprise foundations blueprint](https://docs.cloud.google.com/architecture/blueprints/security-foundations)
- [Terraform example foundation](https://github.com/terraform-google-modules/terraform-example-foundation)
