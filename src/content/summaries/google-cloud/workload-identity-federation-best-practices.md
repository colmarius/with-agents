---
title: "Best practices for using Workload Identity Federation"
resourceId: 101
date: "2026-08-28"
---

Treat Workload Identity Federation as a programmable trust boundary, not automatic safety from removing keys. A secure design separates provider admission, principal authorization, and the permissions available after exchange.

### Harden admission

An external OIDC credential reaches a workload identity provider, which verifies the token and evaluates attribute mappings and conditions before STS exchanges it for a federated token. For shared issuers such as GitHub, require an explicit provider condition for the trusted tenant and workload. Use the provider's URL as audience to reduce confused-deputy risk.

Map immutable, authoritative, non-reusable identifiers. Names, email addresses, repositories, or organizations can be renamed, deleted, and reused; stale IAM bindings can then admit a different identity. Keep `google.subject` unique in both directions so audit records map back to exactly one external identity. Restrict who can modify provider mappings and conditions because changing either can change who is trusted.

Google recommends a dedicated project for pools and providers, organization-policy restrictions on providers elsewhere, and one provider per pool to avoid subject collisions. Avoid representing the same identity through duplicate providers.

### Constrain authorization and impact

Bind the smallest exact `principal://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/subject/SUBJECT` or `principalSet://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/attribute.ATTRIBUTE_NAME/ATTRIBUTE_VALUE`; do not grant an entire pool by default. Prefer direct access on resources that support federated identities. Where an API requires service-account impersonation, grant the external principal `roles/iam.workloadIdentityUser` on a dedicated per-application service account—not just `roles/iam.serviceAccountUser`—and limit that account's resource roles. Recheck the compatibility matrix because support changes by product and method.

Enable Data Access logs for STS and IAM APIs and correlate them with identity-provider logs. Validate externally supplied credential-configuration JSON before use; its URLs and file paths can redirect a workload to malicious endpoints.

Troubleshoot by boundary: issuer/JWKS and token claims first, provider audience/mapping/condition next, STS exchange errors next, then the exact IAM principal and impersonation role. An API rejecting an STS token may require impersonation rather than a broader grant.

Google marked the guidance updated on 2026-08-28.

Sources:

- [WIF best practices](https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation)
- [Workload Identity Federation concepts](https://docs.cloud.google.com/iam/docs/workload-identity-federation)
- [Federated identity service compatibility](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- [Troubleshoot Workload Identity Federation](https://docs.cloud.google.com/iam/docs/troubleshooting-workload-identity-federation)
