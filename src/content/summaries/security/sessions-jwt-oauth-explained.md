---
title: "Stop Choosing JWT by Default! Sessions vs JWT vs OAuth Explained"
resourceId: 177
date: "2026-10-12"
---

Time To Program explains why sessions, JSON Web Tokens (JWTs), and OAuth are not three interchangeable authentication systems. Sessions maintain login state, JWT is a token format, OAuth delegates access to protected resources, and OpenID Connect (OIDC) adds an identity layer over OAuth. A website can use OIDC to sign someone in, then maintain its own server-side session. [00:50–02:59](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=50s), [14:20–16:15](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=860s)

*This summary is based on English auto-generated captions. It paraphrases the explanation and normalizes technical names; it is not an implementation checklist.*

## What each mechanism does

- **Sessions keep state under server control.** After checking credentials, the server creates a session and sends its identifier in a cookie. Subsequent requests carry the identifier so the server can look up the user. Deleting the server-side session makes later requests fail, which supports remote logout. Multiple application instances need shared session state or another strategy; that operational requirement does not make sessions obsolete. [01:56–05:06](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=116s)
- **JWTs carry signed claims, not secrets.** A typical signed JWT has a header, payload, and signature. A service checks the signature and claims such as issuer, audience, and expiration before applying authorization rules. The payload is ordinarily readable, so it should not contain passwords or secret keys. Local validation can avoid session lookups, but key management, validation, and authorization still cost work. [05:06–09:10](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=306s)
- **OAuth grants access; OIDC communicates identity.** In the video's calendar example, the user authorizes an app to read Google Calendar without giving that app their Google password. An OAuth access token is for the protected resource; it is not automatically login proof for the client. OIDC provides authentication-related claims through an ID token intended for that client. OAuth access tokens can be JWTs or opaque strings. [10:05–12:12](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=605s), [13:17–14:20](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=797s)

## Revocation and storage shape the design

- **Deleting a JWT locally does not revoke a stolen copy.** A self-contained access token can remain valid until expiry unless the server checks a revocation mechanism, such as a denylist or token version. Those checks reintroduce server-side state. Short lifetimes limit exposure but do not provide instant revocation; refresh tokens need secure storage, rotation, and reuse detection where supported. [08:06–10:05](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=486s), [13:17–14:20](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=797s)
- **Changing storage changes the threat model.** JavaScript can read tokens in local storage, so cross-site scripting (XSS) can expose them. Cookies travel automatically on matching requests, which makes cross-site request forgery (CSRF) defenses relevant. The video recommends HTTPS, appropriate `HttpOnly`, `Secure`, and `SameSite` cookie settings, and session-ID rotation; neither sessions nor JWTs are automatically safer. [05:06–06:09](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=306s), [09:10–10:05](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=550s), [16:15–17:08](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=975s)
- **Delegated flows need protocol protections.** The video introduces authorization code flow and PKCE (Proof Key for Code Exchange), which helps prevent an intercepted authorization code from being redeemed by an attacker. It calls for PKCE in public clients, secure handling of confidential-client credentials, HTTPS, and properly configured redirect URIs. This is an overview, not a complete account of OAuth security requirements. [11:09–13:17](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=669s)

## Choosing for an application

- **Conventional website:** start with server-side sessions and secure cookies when centrally managed login state and straightforward revocation fit the application. [16:15–17:08](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=975s)
- **Mobile app calling an API:** short-lived access tokens and a refresh mechanism may fit, but JWT is optional. Opaque tokens can support centralized checks. Use operating-system secure storage for long-lived credentials and do not embed confidential-client secrets in the app. [17:08–18:12](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=1028s)
- **Multiple backend services:** JWTs can let services validate claims from a trusted issuer. Each receiving service must check the intended audience and enforce its own authorization rules; do not forward the same token indiscriminately. For service-to-service access, OAuth client credentials or workload identity may fit depending on trust boundaries. [18:12–19:07](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=1092s)
- **Sign in with Google:** use the supported OIDC flow, validate the identity information, and separately choose how your application maintains login state. OIDC login and a local browser session can work together. [19:07–20:09](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=1147s)

**Editorial context:** use this video to understand the choices, then consult [RFC 9700's OAuth security guidance](/summaries/security/rfc-9700-oauth-2-security-bcp) and [OpenID Connect Core](/summaries/security/openid-connect-core-1-0) for implementation requirements. The video's emphasis on public clients in its PKCE explanation should not be read as a complete statement of where PKCE is required or recommended.
