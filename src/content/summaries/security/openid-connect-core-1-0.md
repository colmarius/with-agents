---
title: "OpenID Connect Core 1.0 incorporating errata set 2"
resourceId: 103
date: "2023-12-15"
---

[OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) lets an application use another provider to sign users in. It adds identity to OAuth 2.0 through an **ID Token**: signed claims describing who authenticated, which provider authenticated them, and which client the token is for. The application, called the relying party, must validate those claims before creating a user session.

### Relying-party checklist

- **Check who issued the token and who may use it:** `iss` must exactly match the expected provider, and signature keys must belong to that issuer. The audience, `aud`, must include your client ID; reject additional audiences you do not trust. If an extension uses `azp` (authorized party), apply that extension's validation rules.
- **Bind the response to this login:** when the request included a `nonce`, a value unique to the transaction, require the same value in the ID Token. Reject expired tokens. Check `auth_time`, the time the user authenticated, when the request or policy requires recent authentication.
- **Check related codes and tokens where the flow requires it:** hash claims such as `c_hash` and `at_hash` bind an ID Token to the authorization code or access token returned alongside it. Apply the flow-specific checks, especially for responses delivered through the browser.
- **Use a stable identity key:** identify an account by the pair (`iss`, `sub`). Display names, preferred usernames, and email addresses are attributes, not durable identifiers or proof of authorization. If UserInfo is used, its `sub` must exactly match the ID Token subject.
- **Keep authentication separate from authorization:** an ID Token says that an issuer authenticated a subject for a client. It does not grant access to an application object or prove that an access token was minted for a particular API.

For new deployments, pair Core with the [OAuth 2.0 Security BCP](https://www.rfc-editor.org/rfc/rfc9700.html). Prefer the authorization-code flow with PKCE, which requires the code redeemer to prove knowledge of a transaction-specific secret. Core also describes implicit and hybrid flows; their presence in the specification is not a recommendation to expose access tokens in browser redirects.

ID Tokens are JSON Web Tokens (JWTs), so apply [RFC 8725, JSON Web Token Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725.html) too. Configure allowed algorithms rather than trusting the token's choice. Use validation rules that reject the wrong kind of JWT—for example, an API access token presented as an ID Token. A valid signature establishes neither the intended recipient nor the token's intended use by itself.
