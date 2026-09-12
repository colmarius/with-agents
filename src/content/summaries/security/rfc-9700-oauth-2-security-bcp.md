---
title: "RFC 9700: Best Current Practice for OAuth 2.0 Security"
resourceId: 102
date: "2025-01-30"
---

[RFC 9700](https://www.rfc-editor.org/rfc/rfc9700.html) explains how to secure OAuth 2.0 deployments against token theft, replay, and requests redirected to an attacker. OAuth lets a client obtain limited access to an API; the authorization server issues tokens, and the API enforces their permissions. This Best Current Practice updates the original framework's security guidance based on deployment experience.

### Implementation priorities

- **Validate redirect URIs:** register redirect URIs and compare them with exact string matching, except for the native-app loopback-port exception. Do not expose open redirectors.
- **Protect each transaction:** bind the response to the browser session that started it, preventing cross-site request forgery (CSRF). Clients supporting multiple authorization servers must also prevent mix-up: accepting a response as if it came from a different server. Bind the expected issuer to the transaction and validate it on return.
- **Use authorization codes with PKCE:** return a code through the browser, then exchange it for tokens. PKCE requires the redeemer to present a secret verifier whose `S256` hash was sent with the initial request, making a stolen code insufficient by itself. Public clients, which cannot keep client credentials secret, must use PKCE; confidential clients should too. Enforce it at the token endpoint and reject attempts to bypass it.
- **Reject the password grant:** the client must not collect the user's password to exchange it for tokens. Redirect-based authorization lets the authorization server handle authentication instead.
- **Restrict access tokens:** limit the APIs they target (audience) and the operations they permit (scope). Sender-constrained tokens additionally require proof of a private key, using mutual TLS or [DPoP](https://www.rfc-editor.org/rfc/rfc9449.html), so stealing the token alone is insufficient.
- **Protect refresh tokens:** these obtain new access tokens, so theft can extend access beyond one access token's lifetime. Public-client refresh tokens must be sender-constrained or rotated. Rotation replaces the token on each use; reuse of an old token reveals possible theft and triggers revocation of the active refresh token.
- **Harden the surrounding system:** publish and consume authorization-server metadata, prefer asymmetric client authentication where practical, keep authorization responses on encrypted connections, and sanitize security-relevant headers at TLS-terminating proxies.

### Related guidance: sessions and browser applications

OAuth tokens do not replace application sessions. Apply the [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html) to cookie scope and attributes, server-side expiration and logout invalidation, rotation, and lifecycle logging without recording raw session identifiers.

For browser clients, [RFC 10017](https://www.rfc-editor.org/rfc/rfc10017.html) compares three architectures in decreasing security order:

- A **backend for frontend (BFF)** holds tokens and forwards API requests, keeping tokens out of browser JavaScript.
- A **token-mediating backend** handles token acquisition and keeps refresh tokens, but gives access tokens to the browser to call APIs directly.
- A **browser-only client** acquires and uses tokens itself, exposing more of the OAuth flow to malicious JavaScript.

RFC 10017 strongly recommends a BFF for business, sensitive, and personal-data applications. It must protect its session cookie, implement CSRF defenses, and restrict outbound destinations; limiting methods per endpoint can further reduce attack opportunities. For a first-party same-domain application, OIDC login plus a cookie session may not require OAuth between the browser and its own backend.

A BFF prevents browser token extraction, but malicious code running in the application's origin can still issue requests through the user's session. Preventing script injection and enforcing API authorization remain necessary.
