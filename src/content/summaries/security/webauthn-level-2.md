---
title: "Web Authentication: An API for accessing Public Key Credentials Level 2"
resourceId: 105
date: "2021-04-08"
---

[WebAuthn Level 2](https://www.w3.org/TR/webauthn-2/) lets a website authenticate a user with a public-key credential instead of a shared password. The website is the **relying party**; the **authenticator** is the device or software that manages the credential's private key. The browser mediates their exchange and enforces which site can request the credential.

A credential is scoped to a relying party, identified by its RP ID, usually the site's domain. Registration gives the server a credential ID and public key to associate with an account. During sign-in, the authenticator signs a response to a fresh server challenge. The server verifies that response with the stored public key; it never needs the private key.

### Registration and sign-in need different checks

- **For both operations:** generate an unpredictable, single-use server challenge. Validate the returned challenge, operation type, origin, and hash of the expected RP ID. These checks bind the response to this request and this site.
- **At registration:** validate the new credential and the attestation statement using its format-specific procedure, then apply the site's attestation policy. Associate the accepted credential with the intended account; do not treat it as an assertion from an already stored key.
- **At sign-in:** look up the credential, check its account binding, and verify the signature over the authenticator data and client-data hash using its stored public key.
- **Check presence and verification separately:** user presence means a person interacted with the authenticator, such as by touching a security key. User verification means the authenticator checked the user locally, for example with a PIN or biometric. Require the presence flag and, when policy requires verification, the verification flag. `preferred` allows sign-in without verification; `required` does not.

These are the main distinctions, not a replacement for the complete [registration](https://www.w3.org/TR/webauthn-2/#sctn-registering-a-new-credential) and [assertion-verification](https://www.w3.org/TR/webauthn-2/#sctn-verifying-assertion) procedures. Signature counters can help detect a cloned or malfunctioning authenticator, but they are not a complete replay defense.

**Attestation** can provide evidence about the authenticator that created a credential. It also introduces privacy and trust-management costs. The default preference is `none`; a site should request more only when its assurance policy needs it. WebAuthn requires a secure browser context, normally HTTPS.

For application design, review credential removal, replacement, and account recovery alongside sign-in. A phishing-resistant credential does not protect an account whose fallback lets an attacker bypass it.

The FIDO Alliance's [passkeys orientation](https://fidoalliance.org/passkeys/) describes credentials built on FIDO2: WebAuthn for the web API and CTAP for client–authenticator communication. Passkeys can be synced by a credential provider or remain device-bound. That deployment choice is separate from the server's obligation to verify each registration and sign-in.
