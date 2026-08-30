---
title: "Web Authentication: An API for accessing Public Key Credentials Level 2"
resourceId: 105
date: "2021-04-08"
---

[WebAuthn Level 2](https://www.w3.org/TR/webauthn-2/) is the stable normative baseline for web applications that register and authenticate with public-key credentials. The W3C published it as a Recommendation on April 8, 2021. Use it to understand the browser–authenticator–relying-party security contract; use product documentation only after that contract and the application's assurance policy are clear.

A WebAuthn credential is scoped to a relying party. The authenticator keeps the private key and returns signed ceremony data through the browser; the relying party stores the credential ID, public key, user binding, and policy-relevant metadata. The protocol removes a shared authentication secret from the server, but the server still owns the verification and account-lifecycle work.

### Relying-party checklist

- Generate a fresh, unpredictable challenge on the server, bind it to the intended ceremony and user context, expire it promptly, and reject reuse.
- On registration and authentication, validate the expected challenge, ceremony type, origin, and RP ID hash. Verify the signature over the authenticator data and client-data hash with the stored credential key.
- Enforce user-presence and user-verification flags according to the operation's policy. “Preferred” is not equivalent to “required”; choose explicitly for sensitive actions.
- Bind every credential to the correct account and relying party. Treat signature counters as one possible cloned-authenticator signal rather than a complete replay defense, because authenticators can implement counters differently.
- Make credential listing, naming, removal, recovery, and replacement part of the security design. A phishing-resistant sign-in can still be undermined by a weaker fallback or account-recovery path.

Attestation can provide authenticator provenance for deployments that need it, but it creates privacy and operational trade-offs. The specification's default `attestation` preference is `none`; require and validate attestation only when a documented risk or assurance policy justifies it. WebAuthn also requires a secure context, with the limited localhost development exception handled by browsers.

The FIDO Alliance's [passkeys orientation](https://fidoalliance.org/passkeys/) explains the user-facing deployment model built on FIDO2, including WebAuthn and CTAP. Passkeys may be synced by a credential provider or remain device-bound. That page is useful for terminology and adoption choices, while WebAuthn Level 2 remains the normative reference for the web ceremony and relying-party verification.
