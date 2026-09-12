# References summary review

Reviewed 2026-09-12 in thread T-01a096b5-ab4d-71fc-a526-8a57df0c9ae1.
Baseline: 5f00f1d5755b8ca0ca5b1767e67f998313f1c2b3 (HEAD and origin/main before commit).
Ownership: exactly the ten files below. All changed; no sidecars, manifests, posts, or templates changed. Frontmatter and all existing Markdown links preserved by automated comparison. Read the Claude Eval readability example from origin/main; no template imposed.

## Per-file ledger

### src/content/summaries/google-cloud/configure-workload-identity-federation-with-deployment-pipelines.md

- Changed; targeted rewrite, not substantial. Defined WIF/OIDC exchange, simplified workload restrictions and conflicting walkthrough warning; retained technical example, IAM identifiers and audience table.
- Evidence read before edit:
  - https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines — configure mappings/conditions (GitHub numeric IDs and organization restriction), grant external identities access, direct access and impersonation, GitHub workflow example.
  - https://vercel.com/docs/oidc/reference — token anatomy, standard/additional claims, team/project name changes, custom audience and request-handler constraint.
  - https://vercel.com/docs/oidc — builds, Vercel Functions, local development; one-hour build, two-hour Function, 90-minute reuse, env pull.
  - https://vercel.com/docs/oidc/gcp — service-account users field, Custom audience, both Vertex AI examples (custom example sets external-account audience to https value).
  - https://docs.cloud.google.com/iam/docs/reference/sts/rest/v1/TopLevel/token — request audience and subjectToken contracts.
  - https://docs.cloud.google.com/iam/docs/federated-identity-supported-services — Cloud Run API and Other limitations.
  - https://docs.cloud.google.com/run/docs/authenticating/service-to-service — Set up service account, Acquire/configure ID token, outside-Google WIF flow.
  - https://docs.cloud.google.com/run/docs/securing/ingress — available ingress settings and IAM applying on all ingress paths.
  - https://github.com/google-github-actions/auth/blob/main/README.md — examples lines 47–67, inputs 96–115, direct WIF 342–360, impersonation 482–489 and 600–605 (Librarian read).
- Remaining uncertainty/deeper review: Vercel does not promise ID immutability/non-reuse; qualification retained beside restriction advice. Build/runtime distinction is a deduction from documented claim set, not a vendor isolation guarantee. Example is a proposed composition, not an executed cloud deployment; no credentials or real token exchange used. The current Vercel custom-audience example conflicts with Google's documented STS target syntax; warning retained rather than asserting a tested library failure.
- Provenance removed from public prose: Google guide update date 2026-08-28. Sources retained.

### src/content/summaries/google-cloud/enterprise-foundations-blueprint.md

- Changed; targeted rewrite. Explained why shared controls matter and what each control layer does. Reduced repeated disclaimers and identified smaller-team adaptation as practical advice.
- Evidence: https://docs.cloud.google.com/architecture/blueprints/security-foundations — overview, security layers, architecture, deployment options/use cases; https://github.com/terraform-google-modules/terraform-example-foundation/blob/master/README.md — Intended usage and support (8–20), stages 0–5 (24–234), Branching strategy (295–301), Policy validation (303–311). README read through Librarian.
- No unresolved factual claim. Smaller-organization selection and migration/recovery review are editorial advice, not a claim that Google mandates this exact process.
- Provenance removed: blueprint last-reviewed date 2025-05-15.

### src/content/summaries/google-cloud/google-cloud-well-architected-framework.md

- Changed; targeted rewrite. Replaced non-functional jargon with purpose, added source-backed data-residency/failover example, defined service-level objectives, marked review sequence as one application.
- Evidence: https://docs.cloud.google.com/architecture/framework — applicability, six pillars, cross-pillar perspectives (financial-services example), five core principles.
- No unresolved factual claim. Four-step review sequence remains editorial application of the framework, not a mandated Google sequence.
- Provenance removed: framework last-reviewed date 2026-01-28.

### src/content/summaries/google-cloud/professional-network-engineer-certification.md

- Changed; substantial rewrite. Replaced unverified course-by-course inventory with explicitly attributed certification skills. Simplified study advice and explained configured state versus actual traffic behavior.
- Evidence: https://www.skills.google/paths/14 — intro, 16 activities, courses/labs/skill badges and role description; also opened in Chromium and read rendered body. https://cloud.google.com/learn/certification/cloud-network-engineer/ — role description, skills assessed, recommended experience, Exam overview steps 1–4.
- Gap/deeper review: unauthenticated HTML and browser expose no individual activity cards. Removed six-part curriculum, named badges, GKE course and Gemini course claims rather than silently carry them forward as verified. Coordinator can restore details only with primary activity evidence. No inference about their actual removal from the curriculum.
- Provenance removed: original date 2026-08-29 is a review date, not publication; original source said “Last updated about 1 month.” Current browser says “about 2 months.” Frontmatter date unchanged.
- Render: desktop DOM and 390px Chromium screenshot; complete role and study sections, no overflow.

### src/content/summaries/google-cloud/workload-identity-federation-best-practices.md

- Changed; substantial readability rewrite. Explained mappings, admission conditions, confused-deputy attack, IAM principal and subject uniqueness. Narrowed token non-revocation statement to federated and impersonated service-account tokens rather than all access tokens.
- Evidence: https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation — audience, immutable/authoritative mappings, unique subjects, dedicated project and provider/pool guidance, logging, credential-configuration validation; deployment guide from first entry for principal syntax and impersonation; https://docs.cloud.google.com/docs/authentication/token-types — Federated access tokens, Service account access tokens, Service account ID tokens; STS contract and Cloud Run compatibility from first entry.
- No unresolved new factual claim. Troubleshooting ordering is applied advice. ID stability remains an issuer-contract requirement, not inferred from field names. No IAM change or token revocation experiment performed.
- Provenance removed: source update 2026-08-28.
- Render: desktop headings and eight list items including sources, no overflow or browser errors.

### src/content/summaries/security/better-auth-security.md

- Changed; substantial rewrite. Topic-first orientation, mechanism bullets, separate stored/stateless session comparison, removed plugin jargon lists and redundant defensive closing. Application authorization explicitly remains application responsibility.
- Evidence: https://www.better-auth.com/docs/reference/security — password hashing/rotation, sessions, CSRF and origin checks, OAuth security, rate limiting/proxy trust; https://www.better-auth.com/docs/concepts/session-management — Session table, revocation, Cookie Cache warning/strategies, secondary storage, Stateless Session Management and Versioning Stateless Sessions. OWASP session sheet below supports HttpOnly/SameSite explanation.
- Plugins retained as further-reading links, not claims of implementation verification. No framework source-code audit or running auth integration performed. Mutable behavior should be checked against deployed version.
- Provenance removed: standalone August 2026 mutable-doc review note. Version-dependent caveats retained near configuration choices.
- Render: desktop, two expected section headings and eight bullets, no overflow/errors.

### src/content/summaries/security/openid-connect-core-1-0.md

- Changed; substantial rewrite. Defined ID Token and relying party; explained issuer/audience, nonce, authentication time and hash claims. Corrected unconditional azp=client-ID claim to extension-specific validation.
- Evidence: https://openid.net/specs/openid-connect-core-1_0.html — sections 2, 3.1.3.7, implicit/hybrid token validation in 3.2/3.3, UserInfo 5.3, stable claims 5.7, security considerations 16; https://www.rfc-editor.org/rfc/rfc8725.html — 3.1–3.3 algorithm/cryptographic verification, 3.8 issuer/subject, 3.9 audience, 3.12 mutually exclusive token validation; RFC9700 below for PKCE/modern flows.
- Deeper-review focus: azp correction follows errata2's extension language; not a blanket rule to ignore azp. Summary does not replace complete flow-specific validation.
- Render: desktop, five checklist bullets, no overflow/errors.

### src/content/summaries/security/owasp-api-security-top-10-2023.md

- Changed; substantial rewrite. Separated three authorization levels with an explicitly illustrative account API, distinguished exhaustion from valid business-flow abuse, defined SSRF and downstream trust issue. All ten categories remain represented.
- Evidence: https://owasp.org/API-Security/editions/2023/en/0x11-t10/ — complete ten-category descriptions; https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html — least privilege, deny by default, every-request validation, guessed IDs, server-side checks, logging, unit/integration tests.
- No unresolved factual claim. Account example and endpoint-review sequence are labelled application/illustration, not a quoted OWASP scenario.
- Removed standalone release chronology; date unchanged.
- Render: desktop, three expected section headings, eight bullets, no overflow/errors.

### src/content/summaries/security/rfc-9700-oauth-2-security-bcp.md

- Changed; substantial rewrite. Explained OAuth actors, PKCE verifier/hash, refresh rotation/reuse, audience/scope and key possession. Compared BFF, token-mediating backend and browser-only flow. Corrected BFF HTTP-method restrictions from mandatory to additional defense.
- Evidence: https://www.rfc-editor.org/rfc/rfc9700.html — 2.1 redirects/PKCE, 2.2 access-token restrictions, 2.3 refresh, 2.4 password grant, 4.4 mix-up, 4.8 PKCE downgrade, 4.14 refresh replay, proxy/metadata/client authentication recommendations; https://www.rfc-editor.org/rfc/rfc10017.html — complete document, especially 5 attack scenarios, 6.1 BFF (6.1.3.3 CSRF, 6.1.3.6 Proxy Restrictions), 6.2 token-mediating backend, 6.3 browser client, 7.1 common-domain applications; https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html — cookie attributes, expiration, invalidation, lifecycle logging.
- No unresolved factual claim. DPoP linked specification retained; summary now makes only the key-possession claim established by RFC9700/10017, not detailed proof-field assertions. BFF is not claimed to stop malicious same-origin requests.
- Render: desktop, two sections, ten bullets, no overflow/errors.

### src/content/summaries/security/webauthn-level-2.md

- Changed; substantial rewrite. Defined relying party, authenticator, RP ID and attestation. Corrected registration/assertion conflation. Explicit UP versus UV explanation with touch/PIN/biometric examples.
- Evidence: https://www.w3.org/TR/webauthn-2/ — sections 1, 4 terminology, 5.8.6 required/preferred, 6.1.1 signature counters, 6.5 attestation, 7.1 registering new credential, 7.2 verifying assertion, 8 attestation formats. Initial full read truncated before section 7; fetched targeted 7.1/7.2 evidence before editing. Exact added fragment IDs verified in fetched specification. https://fidoalliance.org/passkeys/ — Passkeys FAQ (FIDO2 WebAuthn/CTAP, synced and device-bound terminology).
- Deeper-review focus: registration validates format-specific attestation and policy; it does not always verify a signature with a stored credential key. `none` remains acceptable by policy. Account recovery advice is application-design guidance.
- Render: complete desktop accessibility snapshot and inspected full-page screenshot confirm separate registration/sign-in checks and complete UP/UV explanation.

## Provenance and sidecar scope

No source sidecar was changed or created. Parent was notified before removal of standalone public source-date notes. This ledger preserves those dates and evidence boundaries for transfer. If permanent repository provenance is required, coordinator should promote this information into an authorized source/research artifact; this ledger itself is intentionally uncommitted. No uncertainty was resolved by inventing a vendor guarantee or undocumented course inventory.

## Verification

- `npm run check`: 65 files, 0 errors/warnings/hints.
- `npm test`: 114 tests, 113 pass, 1 skipped, 0 failures.
- `npm run build`: 332 pages built; search index 320 documents.
- `npm run content:guard`: passed, 1158 tracked videos, 24 playlists, 248 tracked public references, 107 resources, 287 public summaries. Existing notice: antirez-ai-concepts duplicate 8gg-oJr4dTY positions 0 and 3; no changes made.
- `npm run summaries:check`: 287 files passed.
- `npm run lint:fix`: 457 files checked; no fixes applied.
- `git diff --check`: clean. Python comparison: all ten frontmatter blocks unchanged; every existing Markdown link retained.
- Browser: `amp orb services ensure` returned https://t-03guuc2zdh9a5xeze1vanzvtt-p21694.onamp.dev/ . Opened seven substantially changed summary routes in Chromium; expected headings/list counts, no horizontal overflow and no runtime errors. Narrow networking viewport 390×844, devicePixelRatio 2.
- Screenshots: `.amp/in/artifacts/references-webauthn.png` and `.amp/in/artifacts/references-network-narrow.png`, inspected with view_media and passed. First viewport captures were incomplete; replaced with full-page captures. Removed only the Astro development toolbar in browser DOM for final screenshots (no application content modified); normalized CLI's 4x captures to 2x with 50% resizing to fit media-analysis limits. Final images show complete readable content without overlap/clipping.
- Browser session closed. No cloud configuration or live identity flow was tested. No push/deploy performed.
