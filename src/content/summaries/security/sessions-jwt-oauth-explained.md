---
title: "Stop Choosing JWT by Default! Sessions vs JWT vs OAuth Explained"
resourceId: 177
date: "2026-10-12"
---

**For a backend-rendered website, Time To Program recommends starting with server-side sessions and secure cookies.** They are straightforward to understand and revoke. Choose JWT access tokens when several services benefit from validating portable tokens, not simply because JWTs are popular. [14:20–15:22](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=860s), [16:15–17:08](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=975s)

The underlying distinction is **authentication: who are you?** versus **authorization: what are you allowed to do?** Sessions and JWTs can maintain or represent an authenticated user's state. OAuth addresses a different question: how can an application obtain permission to access another service's resources without collecting the user's password? OpenID Connect (OIDC) adds standardized login through an identity provider such as Google. These mechanisms can work together. [00:50–02:59](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=50s), [14:20–16:15](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=860s)

*Based on English auto-generated captions, without an original-audio check. Technical names are normalized in this paraphrase. This is an architectural introduction, not an implementation checklist.*

## Sessions: keep login state on the server

After checking credentials, the server creates a session record and sends its identifier to the browser in a cookie. Later requests carry that identifier, and the server looks up who is logged in. The browser holds the identifier rather than the session data. [01:56–04:03](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=116s)

Invalidating the server-side record makes subsequent requests fail, which supports remote logout after a lost laptop. Multiple application instances need a shared session store or another strategy for accessing session state. The video presents this as a well-understood operational requirement, not a reason to reject sessions. [04:03–05:06](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=243s)

## JWTs: carry signed claims, not secrets

A JSON Web Token (JWT) can carry **claims**, such as a user identifier, issuer, expiration time, or permissions. Its signature lets a recipient check that a trusted party signed the token and that its contents have not changed. Signing does not encrypt the contents: a typical signed JWT is readable, so passwords, secret API keys, and sensitive personal information do not belong in its payload. [05:06–07:02](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=306s)

An API checks the signature, issuer, expiration, and **audience: the service the token is intended for**, then applies its authorization rules. Multiple services can often do this without looking up a session record on every request. That does not automatically make JWTs faster or more scalable: validation, signing-key management, revocation, and authorization still have costs. JWT is a token format, not a complete system for login, logout, refresh, or account recovery. [07:02–10:05](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=422s), [18:12–19:07](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=1092s)

**Logout is the important trade-off.** Deleting a JWT from the client does not invalidate a stolen copy. It can remain usable until expiry unless the server checks additional revocation state, such as a list of rejected tokens. Short lifetimes limit exposure but do not revoke tokens instantly. Refresh-token mechanisms need their own secure storage, rotation, and reuse detection where supported; the video names these controls without explaining their implementation. [08:06–10:05](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=486s), [13:17–14:20](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=797s)

## OAuth grants access; OIDC handles identity-provider login

The calendar example explains delegated access:

1. An app redirects the user to Google's authorization service rather than asking for their Google password.
2. The user signs in if needed and reviews the requested permissions.
3. If approved, Google issues an access token that the app can use for the permitted calendar resources.

That access token is for accessing a protected resource, not automatically proof of the user's identity to the app. **OIDC adds an identity layer**, including an ID token that communicates authentication-related information to the application it was issued for. OAuth access tokens can be JWTs or opaque strings; OAuth does not require JWT as its token format. [10:05–12:12](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=605s), [13:17–14:20](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=797s)

The video introduces authorization code flow without walking through its steps. It recommends PKCE (Proof Key for Code Exchange) for public clients such as browser and native mobile apps, to help prevent attackers from redeeming intercepted codes. Applications that can securely keep a client secret need appropriate confidential-client configuration and server-side handling. HTTPS, correctly configured redirect URIs, and protocol-parameter validation also matter. [11:09–13:17](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=669s)

## Storage and application design still matter

- **Browser storage changes the risks.** Page JavaScript can read a JWT in local storage, so cross-site scripting can expose it. Cookies travel automatically with matching requests, so cross-site request forgery defenses may be necessary. A stolen session cookie can also let an attacker impersonate a user. JWTs are not automatically safer than sessions. [05:06–06:09](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=306s), [09:10–10:05](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=550s), [19:07–21:05](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=1147s)
- **Backend-rendered website:** use HTTPS and appropriate `HttpOnly`, `Secure`, and `SameSite` cookie settings. Regenerate the session ID after login or privilege changes, protect against forged requests, and invalidate sessions on logout. [05:06–06:09](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=306s), [16:15–17:08](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=975s)
- **Mobile app:** JWTs are optional; opaque access tokens can suit APIs that need centralized token checks. Use the external provider's supported OAuth/OIDC flow when one is involved, store long-lived credentials using operating-system secure storage, and do not embed confidential-client secrets. [17:08–18:12](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=1028s)
- **Multiple services:** do not forward one token indiscriminately. Each service must check that the token is intended for it and enforce its own permissions. The choice of service-authentication mechanism depends on trust boundaries and infrastructure, not merely the number of services. [18:12–19:07](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=1092s)
- **Sign in with Google:** use OIDC and validate the returned token's signature, issuer, audience, and time claims. Then maintain your application's login state separately, for example with a server-side browser session. OIDC login does not replace that decision. [19:07–20:09](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=1147s)

**Editorial context:** consult [RFC 9700's OAuth security guidance](/summaries/security/rfc-9700-oauth-2-security-bcp) and [OpenID Connect Core](/summaries/security/openid-connect-core-1-0) for implementation requirements. RFC 9700 requires PKCE for public clients and recommends it for confidential clients too; the video's public-client emphasis is not the full rule. The video itself recommends mature frameworks, trusted identity providers, and established security libraries rather than custom cryptographic protocols. [21:05–22:09](https://www.youtube.com/watch?v=KKlLRN58Dhw&t=1265s)
