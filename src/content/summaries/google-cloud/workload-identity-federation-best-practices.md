---
title: "Best practices for using Workload Identity Federation"
resourceId: 101
date: "2026-08-28"
---

Treat Workload Identity Federation as a programmable trust boundary, not automatic safety from removing keys. A secure design separates provider admission, principal authorization, and the permissions available after exchange.

### Harden admission

An external OIDC credential reaches a workload identity provider, which verifies the token and evaluates attribute mappings and conditions before STS exchanges it for a federated token. For shared issuers such as GitHub, require an explicit provider condition for the trusted tenant and workload. Use the provider's `https://iam.googleapis.com/projects/.../providers/...` URL as the external OIDC token audience to reduce confused-deputy risk. Keep it distinct from the `//iam.googleapis.com/projects/.../providers/...` target resource used by external-account configuration and STS.

Map immutable, authoritative, non-reusable identifiers. Names, email addresses, repositories, or organizations can be renamed, deleted, and reused; stale IAM bindings can then admit a different identity. A field named “ID” is not proof of those properties: require the issuer's stability and non-reuse contract or record the residual assumption.

Keep `google.subject` unique in both directions so audit records map back to exactly one external identity. Restrict who can modify provider mappings and conditions because changing either can change who is trusted.

Google recommends a dedicated project for pools and providers, organization-policy restrictions on providers elsewhere, and one provider per pool to avoid subject collisions. Avoid representing the same identity through duplicate providers.

### Constrain authorization and impact

Grant roles to the smallest exact principal; do not grant an entire pool by default:

- One subject: `principal://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/subject/SUBJECT`
- A deliberately scoped set: `principalSet://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/attribute.ATTRIBUTE_NAME/ATTRIBUTE_VALUE`

Prefer direct access on resources that support federated identities. Where an API requires service-account impersonation, grant the external principal `roles/iam.workloadIdentityUser` on a dedicated per-application service account—not just `roles/iam.serviceAccountUser`—and limit that account's resource roles. Recheck the compatibility matrix because support changes by product and method: the Cloud Run Admin API accepts federated callers, while direct route invocation requires service-account impersonation.

Short-lived federated, access, and ID tokens are still bearer credentials and cannot be revoked before expiry. Removing a provider or impersonation binding prevents future minting; resource IAM removal can stop current authorization, but incident response must still account for token lifetimes and caches. Never persist or log the raw subject token.

Enable Data Access logs for STS and IAM APIs and correlate them with identity-provider logs. Validate externally supplied credential-configuration JSON before use; its URLs and file paths can redirect a workload to malicious endpoints.

Troubleshoot by boundary, in order: issuer/JWKS and token claims; provider audience, mapping, and condition; STS exchange errors; then the exact IAM principal and impersonation role. An API rejecting an STS token may require impersonation rather than a broader grant.

Google marked the guidance updated on 2026-08-28.

Sources:

- [WIF best practices](https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation)
- [Workload Identity Federation concepts](https://docs.cloud.google.com/iam/docs/workload-identity-federation)
- [Security Token Service `token`](https://docs.cloud.google.com/iam/docs/reference/sts/rest/v1/TopLevel/token)
- [Google Cloud token types](https://docs.cloud.google.com/docs/authentication/token-types)
- [Federated identity service compatibility](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- [Troubleshoot Workload Identity Federation](https://docs.cloud.google.com/iam/docs/troubleshooting-workload-identity-federation)
