---
title: "Better Auth Security"
resourceId: 106
date: "2026-08-29"
---

The [Better Auth security page](https://www.better-auth.com/docs/reference/security) is a useful review point for one fast-moving TypeScript authentication implementation, not a protocol foundation. This summary reflects the mutable documentation as reviewed in August 2026; verify the current docs and code before adopting or changing a production configuration.

The [framework documentation](https://www.better-auth.com/docs) describes defaults and extension points for authentication and authorization. The reviewed security page documents scrypt password hashing by default, versioned secret rotation, database- or secondary-storage-backed sessions when configured, origin and Fetch Metadata checks, `SameSite=Lax` and `HttpOnly` cookies, OAuth state and PKCE, route rate limits, configurable proxy trust, and refusal to follow redirects for server-side OAuth/OIDC requests. These controls reduce common mistakes; they do not define application authorization policy or remove the need to follow OAuth, OIDC, WebAuthn, and cookie standards.

### Material configuration trade-offs

- The [session-management guide](https://www.better-auth.com/docs/concepts/session-management) says that omitting a database enables stateless session management, while a configured database supports durable lookup and individual revocation. Cookie caching can serve a signed session snapshot without a database read, so a session revoked elsewhere can remain usable until the cache `maxAge` expires unless a sensitive request bypasses the cache. Fully stateless cookie sessions cannot be individually revoked without external state; changing the cookie version invalidates all sessions, not one.
- `disableOriginCheck` disables callback and redirect URL validation **and**, for backward compatibility, CSRF protection. Broad wildcard trusted origins expand who can submit trusted requests or receive redirects; protocol-agnostic patterns also accept multiple schemes. Prefer exact HTTPS origins.
- `trustedProxyHeaders` may derive the base URL from `X-Forwarded-Host` and `X-Forwarded-Proto` when no configured or environment base URL exists. Enable it only when a trusted proxy overwrites those headers and clients cannot forge them. Apply the same boundary discipline to client-IP headers used for rate limiting.

Better Auth's checks protect its authentication routes; the surrounding application's state-changing routes still need authorization and CSRF defenses. Prefer a same-origin, host-only session boundary where possible, and do not treat `SameSite=Lax` as the only CSRF control.

Treat plugins as separate security surfaces. The [OAuth provider](https://www.better-auth.com/docs/plugins/oauth-provider) and [SSO](https://www.better-auth.com/docs/plugins/sso) plugins introduce issuer, redirect, client-registration, discovery, tenant, provisioning, and key-management decisions. The [passkey plugin](https://www.better-auth.com/docs/plugins/passkey) still requires correct RP ID, origin, challenge, user-verification, and recovery policy. The [API-key plugin](https://www.better-auth.com/docs/plugins/api-key) adds ownership, expiry, permissions, quotas, storage, and rotation decisions.

Before deployment, pin and review the dependency, inspect relevant behavior in the [open-source repository](https://github.com/better-auth/better-auth), test negative flows, and re-review these mutable pages during upgrades. Framework defaults are a starting control set, not evidence that the surrounding application's identity and authorization boundaries are correct.

In the [Vercel-to-private-Cloud-Run composition](/summaries/google-cloud/configure-workload-identity-federation-with-deployment-pipelines), Better Auth owns the end-user session and application authorization boundary. Vercel OIDC, Google WIF, and Cloud Run IAM separately authenticate and admit the server workload; their tokens do not identify or authorize the end user.
