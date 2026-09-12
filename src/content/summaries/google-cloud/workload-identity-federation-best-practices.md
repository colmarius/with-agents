---
title: "Best practices for using Workload Identity Federation"
resourceId: 101
date: "2026-08-28"
---

Workload Identity Federation lets software running outside Google Cloud exchange its existing identity token for short-lived Google credentials instead of storing a service-account key. Removing that key reduces secret-management work, but security still depends on two decisions: which external workloads may exchange tokens, and what each accepted identity may access.

### Decide which workloads Google should trust

The workload identity provider verifies the external OpenID Connect (OIDC) token. Attribute mappings turn its claims into a Google subject and attributes; conditions decide whether to accept it. Security Token Service (STS) then exchanges it for a federated token. For shared issuers such as GitHub, require a condition that restricts the trusted organization and workload, not merely a valid signature from GitHub.

Use the provider's `https://iam.googleapis.com/projects/.../providers/...` URL as the external token's audience. This helps prevent a token intended for another service from being reused to obtain Google credentials, a confused-deputy attack. The STS target resource is a different value: `//iam.googleapis.com/projects/.../providers/...`, without `https:`.

Map immutable, authoritative, non-reusable identifiers. Names, email addresses, repositories, or organizations can be renamed, deleted, and reused; stale IAM bindings can then admit a different identity. A field named “ID” is not proof of those properties: require the issuer's stability and non-reuse contract or record the residual assumption.

Each external identity should map to exactly one `google.subject`, and that subject should identify no other external identity. This keeps permissions and audit records unambiguous. Restrict who can modify mappings and conditions because changing either changes who is trusted.

Google recommends a dedicated project for pools and providers, organization-policy restrictions on providers elsewhere, and one provider per pool to avoid subject collisions. Avoid representing the same identity through duplicate providers.

### Constrain authorization and impact

An IAM principal is the identity receiving permissions. Grant roles to the narrowest principal or deliberately scoped set, using the pool project's number rather than its project ID:

- One subject: `principal://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/subject/SUBJECT`
- A deliberately scoped set: `principalSet://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/attribute.ATTRIBUTE_NAME/ATTRIBUTE_VALUE`

Prefer direct access on resources that support federated identities. Where an API requires service-account impersonation, grant the external principal `roles/iam.workloadIdentityUser` on a dedicated per-application service account—not just `roles/iam.serviceAccountUser`—and limit that account's resource roles. Recheck the compatibility matrix because support changes by product and method: the Cloud Run Admin API accepts federated callers, while direct route invocation requires service-account impersonation.

Federated tokens and the service-account access or ID tokens minted through impersonation are bearer credentials: possession is enough to use them. They cannot be revoked before expiry. Blocking future issuance is therefore different from stopping use of an already issued token. Resource IAM changes can remove access, but incident response must account for token lifetimes and policy propagation. Never persist or log the raw subject token.

Enable Data Access logs for STS and IAM APIs and correlate them with identity-provider logs. Validate externally supplied credential-configuration JSON before use; its URLs and file paths can redirect a workload to malicious endpoints.

For troubleshooting, follow the exchange in order: the issuer's signing keys and token claims; provider audience, mapping, and condition; STS errors; then the IAM principal and impersonation role. An API rejecting an STS token may require impersonation rather than broader permissions.

Sources:

- [WIF best practices](https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation)
- [Workload Identity Federation concepts](https://docs.cloud.google.com/iam/docs/workload-identity-federation)
- [Security Token Service `token`](https://docs.cloud.google.com/iam/docs/reference/sts/rest/v1/TopLevel/token)
- [Google Cloud token types](https://docs.cloud.google.com/docs/authentication/token-types)
- [Federated identity service compatibility](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- [Troubleshoot Workload Identity Federation](https://docs.cloud.google.com/iam/docs/troubleshooting-workload-identity-federation)
