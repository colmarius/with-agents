# Research: Secure Vercel-to-GCP integration

**Date:** 2026-08-30
**Status:** complete
**Question:** What is the smallest source-backed architecture guidance that
keeps Vercel workload identity, Cloud Run service identity, and application user
identity separate?

## Recommendation

Use a Vercel Function as the application backend boundary: validate the user
session there, obtain the request-scoped Vercel OIDC token independently, exchange
it through Google STS, impersonate a dedicated caller service account, and mint a
Google ID token for the receiving private Cloud Run service. Keep deployment,
runtime invocation, Cloud Run execution, and end-user identities separate.

Enrich the existing deployment-pipeline, WIF best-practices, RFC 9700, and Better
Auth summaries. Keep the composed Vercel-to-private-Cloud-Run path in the WIF
material, qualify the framework and browser-auth boundaries in their owning
summaries, and add no resource record or field guide. Two focused high-mode
reviews and Oracle supported this minimal boundary; the broader architecture
review's actionable findings fit as source-fidelity corrections without its
proposed standalone guide.

## Key findings

- Cloud Run's Admin API can accept federated API callers, but the Cloud Run data
  plane does not support direct WIF access for `run.routes.invoke`. An external
  caller must use service-account impersonation and `generateIdToken`.
- The Vercel subject token, the STS target, and the Google Cloud Run ID token use
  three related but different audiences. Conflating them is a likely
  implementation failure.
- Vercel documents `owner_id`, `project_id`, and `environment` claims, but its
  public reference does not guarantee that the ID claims are immutable and
  non-reusable. Prefer IDs over mutable names while making that uncertainty
  explicit.
- Vercel's published claim set has no build-versus-Function discriminator.
  Deployment permissions and runtime permissions should therefore use distinct
  issuers/projects when their authority differs materially; GitHub Actions OIDC
  is a natural deployment boundary.
- Better Auth authenticates users and manages application sessions. Vercel
  OIDC/WIF authenticates the calling workload. Cloud Run IAM admits that
  workload. None of these layers automatically authorizes an end-user action.
- RFC 10017 ranks a backend-for-frontend above token-mediating and browser-only
  OAuth architectures for sensitive browser applications. It does not prescribe
  the Vercel/Better Auth/GCP composition, and a BFF still cannot stop malicious
  same-origin code from issuing requests through the user's session.
- A Vercel request can reach Cloud Run ingress `all` over public HTTPS while IAM
  still rejects anonymous callers. This is IAM-protected, not network-private.
  Cloud Run ingress `internal` is not reachable from a normal Vercel internet
  request; WIF establishes identity, not a network route.

## Evidence

### Runtime credential chain

1. A Vercel Function obtains its OIDC token from the request through
   `getVercelOidcToken`; the helper cannot be called at module scope in Functions.
2. Request the subject token with the Google provider URL as audience:
   `https://iam.googleapis.com/projects/.../providers/...`.
3. The external-account/STS target is the provider resource name beginning
   `//iam.googleapis.com/projects/.../providers/...`.
4. Grant the exact federated principal `roles/iam.workloadIdentityUser` on a
   dedicated caller service account.
5. Grant that service account `roles/run.invoker` on the exact Cloud Run service.
6. Call IAM Credentials `generateIdToken` with the generated Cloud Run service
   URL, or an explicitly configured custom audience, as the token audience.
7. Send that Google ID token in `Authorization`. Use
   `X-Serverless-Authorization` only when `Authorization` is deliberately
   retained for separate application authorization.

### Identity boundaries

- **Deployment:** dedicated GitHub Actions or isolated deployment identity.
- **Runtime caller:** Vercel Function federated principal and dedicated caller
  service account.
- **Cloud Run execution:** a separate service account attached to the service
  for downstream Google API access.
- **End user:** Better Auth session and application authorization rules.

## Sources

- [Vercel OIDC](https://vercel.com/docs/oidc) — issuer modes, build/Function
  token delivery, reuse, and lifetime.
- [Vercel OIDC reference](https://vercel.com/docs/oidc/reference) — claim set,
  helper restrictions, name-change behavior, and custom audiences.
- [Vercel GCP integration](https://vercel.com/docs/oidc/gcp) — current provider
  setup and external-account example; Google documentation remains authoritative
  for IAM roles and STS resource names.
- [Google WIF deployment pipelines](https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines) — direct access,
  service-account impersonation, principal syntax, and deployment identities.
- [Google WIF best practices](https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation) — provider audience,
  claim mapping, admission conditions, least privilege, and auditability.
- [Identity federation products and limitations](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) — Cloud Run Admin API support and
  the direct-invocation limitation.
- [Cloud Run service-to-service authentication](https://docs.cloud.google.com/run/docs/authenticating/service-to-service) — `generateIdToken`, audience, invoker
  role, and authorization headers.
- [Cloud Run ingress](https://docs.cloud.google.com/run/docs/securing/ingress) — network reachability versus IAM authentication.
- [RFC 10017](https://www.rfc-editor.org/rfc/rfc10017.html) — browser OAuth
  architecture ranking, BFF properties, cookie/CSRF controls, and residual
  malicious-JavaScript risk.
- [Better Auth security](https://www.better-auth.com/docs/reference/security) —
  session, cookie, origin, CSRF, and proxy-header controls.

## Open questions

- None.
