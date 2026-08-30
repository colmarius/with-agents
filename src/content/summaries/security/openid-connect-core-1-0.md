---
title: "OpenID Connect Core 1.0 incorporating errata set 2"
resourceId: 103
date: "2023-12-15"
---

[OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) defines an identity layer over OAuth 2.0. Its central artifact is the ID Token: a signed set of claims by which a relying party verifies an authentication event and identifies the user. The December 15, 2023 text incorporates errata set 2; it remains the normative Core reference rather than a framework-specific login recipe.

### Relying-party checklist

- **Bind tokens to the expected provider and client:** require the exact configured `iss`, validate the signature with keys belonging to that issuer, require `aud` to contain your client ID, and reject additional audiences you do not trust. When an extension adds `azp`, validate it as that extension specifies and, if present, verify that it equals your client ID.
- **Validate the transaction and lifetime:** reject expired tokens, verify `nonce` when one was sent, and enforce `auth_time` when the request or local policy requires it. For front-channel tokens, validate the applicable hash claims before trusting associated authorization codes or access tokens.
- **Use a stable identity key:** identify an account by the pair (`iss`, `sub`). Display names, preferred usernames, and email addresses are attributes, not durable identifiers or proof of authorization. If UserInfo is used, its `sub` must exactly match the ID Token subject.
- **Keep authentication separate from authorization:** an ID Token says that an issuer authenticated a subject for a client. It does not grant access to an application object or prove that an access token was minted for a particular API.

Core documents authorization-code, implicit, and hybrid flows because it preserves the protocol's historic surface. That does not make every flow an appropriate modern default. Constrain deployments with the current [OAuth 2.0 Security BCP](https://www.rfc-editor.org/rfc/rfc9700.html): prefer the authorization-code flow with PKCE, avoid responses that expose access tokens at the authorization endpoint, match redirect URIs exactly, and defend against mix-up and replay.

ID Tokens are JWTs, so apply [RFC 8725, JSON Web Token Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725.html) as well. Pin an allowed algorithm set instead of accepting the token's choice, validate every cryptographic operation, bind keys to issuers, validate audience, and use mutually exclusive validation rules for different JWT kinds. A library reporting “signature valid” is only one step in this protocol-level validation.
