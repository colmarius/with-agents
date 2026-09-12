---
title: "Better Auth Security"
resourceId: 106
date: "2026-08-29"
---

Better Auth provides authentication and session handling for TypeScript applications. Its [security page](https://www.better-auth.com/docs/reference/security) explains the protections built into its authentication routes and the configuration choices that can weaken them. The application still decides what each signed-in user may do.

The [framework documentation](https://www.better-auth.com/docs) covers defaults and extension points. Important protections include:

- **Password and secret handling:** scrypt hashing by default, plus versioned secret rotation.
- **Browser request checks:** origin and Fetch Metadata checks help reject forged requests from other sites. `HttpOnly` prevents JavaScript from reading session cookies; `SameSite=Lax` limits when browsers send them across sites.
- **OAuth protections:** state and PKCE bind the login response and code exchange to the originating transaction. Server-side OAuth/OIDC requests do not follow redirects to unexpected destinations.
- **Abuse controls:** route rate limits depend on correctly identifying the client, including behind a proxy.

### Session storage changes revocation behavior

The [session-management guide](https://www.better-auth.com/docs/concepts/session-management) describes two different choices:

- **Stored sessions:** a database or secondary store keeps session records that the server can look up and revoke individually. Optional cookie caching avoids repeated lookups by accepting a signed session snapshot. A revoked session can remain usable until that cache expires; bypass the cache for sensitive operations that need current session state.
- **Stateless sessions:** omitting a database enables cookie-based validation without a database lookup. Without external session state, individual revocation is unavailable. Changing the cookie-cache version invalidates all sessions with the old version, not just one.

### Origin and proxy settings define who is trusted

- **Origin checks:** `disableOriginCheck` disables callback and redirect URL validation **and**, for backward compatibility, CSRF protection. Broad wildcard trusted origins expand who can submit trusted requests or receive redirects; protocol-agnostic patterns also accept multiple schemes. Prefer exact HTTPS origins.
- **Proxy trust:** `trustedProxyHeaders` may derive the base URL from `X-Forwarded-Host` and `X-Forwarded-Proto` when no configured or environment base URL exists. Enable it only when a trusted proxy overwrites those headers and clients cannot forge them. Apply the same boundary discipline to client-IP headers used for rate limiting.

Better Auth's checks protect its authentication routes; the surrounding application's state-changing routes still need authorization and cross-site request forgery (CSRF) defenses. `SameSite=Lax` alone is not sufficient.

For a deployment review, check each enabled plugin's own documentation: [OAuth provider](https://www.better-auth.com/docs/plugins/oauth-provider), [SSO](https://www.better-auth.com/docs/plugins/sso), [passkeys](https://www.better-auth.com/docs/plugins/passkey), or [API keys](https://www.better-auth.com/docs/plugins/api-key). Test rejected requests as well as successful sign-ins, and inspect relevant behavior in the [open-source repository](https://github.com/better-auth/better-auth) when upgrading.

In the [Vercel-to-private-Cloud-Run example](/summaries/google-cloud/configure-workload-identity-federation-with-deployment-pipelines), the Vercel Function uses Better Auth to validate the user session, then enforces application authorization. Vercel OIDC, Google Workload Identity Federation, and Cloud Run IAM authenticate the server workload separately; their tokens do not authorize the end user.
