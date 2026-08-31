---
title: "RFC 9700: Best Current Practice for OAuth 2.0 Security"
resourceId: 102
date: "2025-01-30"
---

[RFC 9700](https://www.rfc-editor.org/rfc/rfc9700.html) is the security Best Current Practice for OAuth 2.0, not an introduction to OAuth roles or grants. Published as BCP 240 in January 2025, it updates the threat model and advice in RFCs 6749, 6750, and 6819 after years of deployment experience. Start with the original framework when learning the protocol; use this document when choosing and reviewing a production security profile.

### Implementation priorities

- **Protect redirect flows:** register redirect URIs and compare them with exact string matching, except for the native-app loopback-port exception. Do not expose open redirectors. Bind each transaction to the browser, prevent CSRF, defend multi-issuer clients against mix-up, and use authorization codes rather than returning access tokens from the authorization endpoint.
- **Require modern code-flow defenses:** public clients must use PKCE; confidential clients should use it too. Use `S256`, bind each verifier or OIDC nonce to one transaction, enforce the verifier at the token endpoint, and reject downgrade attempts. The resource-owner password credentials grant must not be used.
- **Limit replay and privilege:** audience- and scope-restrict access tokens. Prefer sender-constrained access tokens through mutual TLS or [DPoP](https://www.rfc-editor.org/rfc/rfc9449.html), whose proofs bind a token to a key, HTTP method, and target URI. Public-client refresh tokens must be sender-constrained or rotated so reuse can trigger revocation.
- **Harden the surrounding system:** publish and consume authorization-server metadata, prefer asymmetric client authentication where practical, keep authorization responses on encrypted connections, and sanitize security-relevant headers at TLS-terminating proxies.

OAuth tokens do not replace application sessions. Apply the [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html) to cookie scope and attributes, server-side expiration and logout invalidation, rotation, and lifecycle logging without recording raw session identifiers.

For browser clients, read the newer [RFC 10017 browser-based applications BCP](https://www.rfc-editor.org/rfc/rfc10017.html) alongside RFC 9700. It presents backend-for-frontend, token-mediating backend, and browser-only OAuth architectures in decreasing security order, and strongly recommends the BFF for business, sensitive, and personal-data applications.

A BFF keeps OAuth tokens out of browser JavaScript, but it must protect its session cookie, implement CSRF defenses, and strictly allowlist outbound hosts, paths, and methods. For a first-party same-domain application, OIDC login plus a cookie session may not require OAuth between the browser and its own backend.

No choice eliminates application risks such as XSS, compromised dependencies, client hijacking, stolen key material, or incorrect authorization at the resource server. A BFF can stop browser token extraction without stopping malicious same-origin code from issuing requests through the user's session.
