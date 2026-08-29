# Cloud and Security Resource Candidate Audit

Research date: 2026-08-29

## Outcome

The Cloud / GCP catalog needs current, provider-maintained architecture and
hands-on learning resources more than another broad Google Cloud video feed.
The Security catalog needs a new foundation: it currently consists of two
historical GCP playlists and does not yet teach modern external workload
identity, API authorization, OAuth/OIDC, browser sessions, or passkeys.

The smallest useful expansion should:

1. Add current canonical Cloud architecture, foundation, and networking
   resources.
2. Add a keyless GitHub/Vercel-to-GCP path based on Workload Identity
   Federation (WIF), immutable claims, provider admission conditions, and
   least-privileged direct or impersonated access.
3. Add protocol and threat-model foundations before framework tutorials.
4. Treat Better Auth as a fast-moving implementation layer represented by
   selected official docs, not as a YouTube collection or replacement for
   OAuth/OIDC and application-security standards.
5. Add no new playlist in the first tranche. Establish current written
   foundations before taking on transcript and procedure-review cost; if a
   later tranche tracks a coherent playlist, keep its remote manifest complete
   and publish only a reviewed selection where behavior has aged.

No catalog, summary, transcript, or playlist state was changed during this
audit.

## Current Baseline

- Cloud / GCP has 12 public resources, all Google Cloud Tech YouTube playlists.
- The YouTube source catalog tracks 12 Google Cloud playlists. Two are also the
  Security catalog's only resources.
- Existing strengths are broad service orientation, Pub/Sub, serverless,
  reliability/observability, FinOps, introductory security, and architecture
  case studies.
- Material Cloud gaps are a current architecture framework, landing zones,
  infrastructure as code, networking/hybrid connectivity, a coherent GKE path,
  broader databases/data platforms, and hands-on curricula.
- Material Security gaps are WIF and external OIDC, secure API design,
  authorization, OAuth/OIDC, browser and session security, passkeys/WebAuthn,
  and current framework implementation guidance.
- Existing Cloud topic filters do not name networking, infrastructure as code,
  Kubernetes, platform engineering, databases, or data platforms. New resources
  can initially use existing topics; adding missing filters is a separate
  information-architecture choice.

The relevant source files are
[`google-cloud.json`](../../../../src/data/resources/google-cloud.json),
[`catalogs.ts`](../../../../src/data/resources/catalogs.ts), and the tracked
[`YouTube catalog`](../../../../src/content/youtube/catalog.json).

## Evaluation Principles

- Prefer authoritative, maintained sources over historical demos.
- Prefer a canonical resource that teaches a durable decision model over a
  product announcement or broad channel feed.
- Keep standards and security guidance distinct from implementation-specific
  framework docs.
- Cross-list one canonical resource in Cloud and Security when it genuinely
  serves both contexts; do not duplicate records.
- For YouTube, track a playlist only when it is a bounded learning sequence.
  Tracking preserves the full remote manifest; public curation may select a
  smaller reviewed sequence.
- Treat setup commands, action versions, UI steps, limits, pricing, and provider
  behavior as time-sensitive even when the underlying architecture is durable.

## Cloud / GCP Candidates

### Highest-leverage candidates

1. **[Google Cloud Well-Architected Framework](https://docs.cloud.google.com/architecture/framework)**
   — the best current architecture anchor. It covers secure, reliable,
   cost-effective, high-performing, operationally effective, and sustainable
   systems across services. Last reviewed 2026-01-28. Proposed placement:
   Cloud / Foundations & Platform; `gcp`, `architecture`, `reliability`,
   `finops`, `cloud-security`. Low maintenance risk.

2. **[Enterprise foundations blueprint](https://docs.cloud.google.com/architecture/blueprints/security-foundations)**
   — a deployable organizational foundation covering resource hierarchy, IAM,
   Shared VPC/private connectivity, policy, logging/detection, and Terraform
   delivery. Last reviewed 2025-05-15. Its
   [Terraform implementation](https://github.com/terraform-google-modules/terraform-example-foundation)
   released v5.0.0 on 2026-07-24. Proposed placement: Cloud / Foundations &
   Platform and Security / Cloud Security. Medium maintenance risk because the
   implementation is opinionated and version-sensitive.

3. **[Professional Network Engineer learning path](https://www.skills.google/paths/14)**
   — 16 current activities spanning VPC, routing, load balancing, NAT, DNS,
   Interconnect/VPN, hybrid and multicloud connectivity, observability, and
   network security. Proposed placement: Cloud / Foundations & Platform;
   `gcp`, `architecture`, `reliability`, `cloud-security`. Medium maintenance
   risk because sign-in/subscription requirements and curriculum can change.

4. **[Deploy an enterprise developer platform on Google Cloud](https://docs.cloud.google.com/architecture/blueprints/enterprise-application-blueprint)**
   — a GKE internal-developer-platform blueprint covering fleets, tenant
   isolation, application and infrastructure pipelines, multi-region delivery,
   service mesh, policy, and observability. Last reviewed 2024-12-13; its
   [Terraform implementation](https://github.com/GoogleCloudPlatform/terraform-google-enterprise-application)
   released v0.5.0 on 2026-08-17. Proposed placement: Cloud / Applications &
   Serverless. Medium-high maintenance risk and better as a second-wave resource
   if the initial tranche must remain small.

5. **[GKE Essentials](https://www.youtube.com/playlist?list=PLIivdWyY5sqLQ3m7WJDfBdMMqO12Q0vqg)**
   — official 16-video sequence published 2021-10-09 through 2023-09-08. It
   covers cluster modes, autoscaling, networking, access, Workload Identity,
   upgrades, large/stateful/batch workloads, and security posture. Proposed
   placement: Cloud / Applications & Serverless. Track the complete manifest,
   then curate a durable subset; cluster-creation procedures and security
   surfaces require current-doc checks. Medium-high maintenance risk.

### Valuable second wave

- **[Professional Data Engineer learning path](https://www.skills.google/paths/16)**
  — 13 activities that broaden Data & Messaging beyond Pub/Sub into ingestion,
  storage, processing, analytics, automation, and operationalized ML.
- **[Build Infrastructure with Terraform on Google Cloud](https://www.skills.google/course_templates/636)**
  — a 1h45m hands-on course covering state, provisioning, modules, labs, and a
  challenge assessment.
- **[Getting Started with Google Kubernetes Engine](https://www.skills.google/course_templates/2)**
  — a 5h45m practical GKE course, useful if a hands-on course is preferred over
  or added beside the older GKE playlist.
- **[GKE learning hub](https://docs.cloud.google.com/kubernetes-engine/docs/learn)**
  — current docs-based orientation, last updated 2026-04-17; lower editorial
  burden than video procedures but less sequential than the course.
- **[Networking End to End](https://www.youtube.com/playlist?list=PLIivdWyY5sqJ0oXcnZYqOnuNRsLF9H48u)**
  — 19 official videos published 2019-02-20 through 2026-01-30. It provides a
  useful VPC, firewall, NAT, Shared VPC, routing, load-balancing, Interconnect,
  Private Service Connect, and Network Connectivity Center spine. Track only
  after the canonical networking path; retain the full manifest but curate the
  durable core and current additions.
- **[Spanner: Database Unlimited](https://www.youtube.com/playlist?list=PLIivdWyY5sqJPSoX2R4mRq_wyg0JTjrAG)**
  — 23 official videos published 2020-11-16 through 2025-10-20. A curated
  architecture/operations spine would fill the database gap, while pricing,
  setup, limits, and newer search features need dated qualification.

### Deferred or rejected Cloud collections

- Reject the 43-video Google Cross-Cloud Network playlist as a full public
  collection: it mixes launches, shorts, partners, and customer promotion rather
  than forming a learning sequence.
- Defer Advanced Networking Demo Series until a durable networking foundation
  exists; later consider individual NCC, PSC, DNS, and Interconnect demos.
- Defer Container Bytes as a general GKE path: it is primarily AI inference
  demos and monthly news, not a container curriculum.

## Keyless GitHub and Vercel Access to GCP

### Recommended learning sequence

1. An external system obtains a signed OIDC JWT instead of storing a Google
   service-account key.
2. A GCP WIF provider verifies issuer, signature, audience, mapped claims, and a
   provider admission condition.
3. Google Security Token Service exchanges the external JWT for short-lived
   Google credentials.
4. Prefer direct federated resource access where the target service supports
   it. Use service-account impersonation when required, including Cloud Run or
   access/ID-token generation.
5. Bind only the exact external `principal` or `principalSet`. For impersonation,
   grant `roles/iam.workloadIdentityUser` on the service account to that exact
   principal.
6. Use immutable claims and separate production, preview, development, and
   reusable-workflow boundaries. Verify both expected success and expected
   denial, then inspect STS/IAM audit logs.

### Canonical records and supporting citations

1. **[Configure WIF with deployment pipelines](https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines)**
   — the canonical implementation path for GitHub, GitLab, Terraform, and
   Azure. Last updated 2026-08-28. Cross-list in Cloud / Applications &
   Serverless and Security / Identity & Access. Its embedded GitHub examples
   still show old action versions, so public editorial context should pair it
   with the current action repository.

2. **[Best practices for WIF](https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation)**
   — the security model for spoofing, escalation, immutable claims, audience
   binding, dedicated providers/projects, and auditing. Last updated 2026-08-28.
   Cross-list in Cloud / Cloud Security and Security / Identity & Access.

These two Google guides should be the canonical records. The deployment guide's
public summary should use **[`google-github-actions/auth`](https://github.com/google-github-actions/auth)**
as the current operational reference for `auth@v3`, direct WIF,
impersonation, outputs, credential lifetime, propagation, and known service
limitations. It should use **[Vercel to Google Cloud Platform](https://vercel.com/docs/oidc/gcp)**
for provider-specific build, Function, and local-development setup. The Vercel
page was last updated 2026-06-23, but its ambiguous IAM wording needs editorial
correction: impersonation requires `roles/iam.workloadIdentityUser`, not merely
`roles/iam.serviceAccountUser`, for the precise federated principal.

Supporting references are the
[WIF conceptual guide](https://docs.cloud.google.com/iam/docs/workload-identity-federation),
[supported-services matrix](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services),
[WIF troubleshooting guide](https://docs.cloud.google.com/iam/docs/troubleshooting-workload-identity-federation),
[GitHub OIDC reference](https://docs.github.com/en/actions/reference/security/oidc),
and [Vercel OIDC overview](https://vercel.com/docs/oidc).

### Security details that must survive curation

- GitHub's public multi-tenant issuer requires an explicit provider condition.
  Prefer `repository_id` and `repository_owner_id`, then narrow by `ref`,
  `environment`, or `job_workflow_ref`; repository and owner names are mutable.
- `id-token: write` only permits a GitHub workflow to retrieve an OIDC token. It
  does not itself grant Google Cloud access.
- Vercel team issuer mode is safer than the global issuer. Map and constrain
  `owner_id`, `project_id`, and `environment` rather than relying on mutable
  subject names.
- Vercel local development can persist a temporary token in `.env.local` for up
  to 12 hours. Describe this as eliminating long-lived cloud keys, not as
  guaranteeing that no token is ever persisted.
- Direct WIF is preferred where supported; Cloud Run requires impersonation.
- Threats include key theft, confused-deputy use of public issuers, mutable
  names, preview-to-production escalation, broad pool/service-account bindings,
  compromised trusted workflows, and overbroad downstream IAM.

The official 11m33s video
**[How to use GitHub Actions with Google's WIF](https://www.youtube.com/watch?v=ZgVhU5qvK1M)**
is already in the complete Serverless Expeditions source manifest but not in
its selected public curation. It can be added to that curation after transcript
review; do not create a duplicate playlist.

## Secure APIs, OAuth/OIDC, Sessions, and Passkeys

### Protocol and threat-model foundation

1. **[RFC 9700: OAuth 2.0 Security Best Current Practice](https://www.rfc-editor.org/rfc/rfc9700.html)**
   — January 2025. The current security baseline for redirect matching, PKCE,
   CSRF/mix-up defenses, deprecated grants, sender-constrained or
   audience-restricted tokens, refresh rotation, TLS, and proxy concerns.
2. **[OWASP API Security Top 10 — 2023](https://owasp.org/API-Security/editions/2023/en/0x00-header/)**
   — the API risk map: object/property/function authorization, broken auth,
   resource consumption, business-flow abuse, SSRF, misconfiguration,
   inventory, and unsafe third-party API use.
3. **[OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)**
   — least privilege, deny by default, every-request and object-level checks,
   safe failure, logging, and authorization tests.
4. **[RFC 10017: OAuth 2.0 for Browser-Based Applications](https://www.rfc-editor.org/rfc/rfc10017.html)**
   — August 2026. Stable browser threat model and architectural trade-offs,
   including backend-for-frontend patterns. It is not a general application
   session guide.
5. **[OpenID Connect Core 1.0, errata set 2](https://openid.net/specs/openid-connect-core-1_0.html)**
   — the normative identity layer: ID Tokens, claims, UserInfo, issuer/audience/
   nonce validation, and key rotation. Pair it with RFC 9700 because OIDC Core
   retains historical flow descriptions.
6. **[OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)**
   — cookie properties, fixation resistance, rotation, timeouts, logout,
   browser storage, cache clearing, and anomaly detection.

### Stronger credentials and tokens

- **[WebAuthn Level 2](https://www.w3.org/TR/webauthn-2/)** is the stable
  normative registration and authentication baseline. Pair it with the
  [FIDO passkey orientation](https://fidoalliance.org/passkeys/) for current
  implementation language.
- **[FIDO Demystifying Passkey Implementations](https://www.youtube.com/playlist?list=PLrddLYClidPz_f6LT9bQdBOE9xoSZNtDl)**
  is a coherent nine-video March 2024 event collection covering passkeys,
  deployment, portability, workforce, and government contexts. It is suitable
  for full tracking later, after the written WebAuthn and FIDO foundations are
  published. If only one playlist is approved in a later tranche, prefer this
  one over GKE Essentials.
- **[RFC 9449: DPoP](https://www.rfc-editor.org/rfc/rfc9449.html)** is the
  sender-constrained-token reference when bearer-token replay is a material
  threat. It adds complexity and does not replace HTTPS, client authentication,
  or in-context browser defenses.
- **[RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725.html)**
  covers algorithm allowlists, issuer/subject/audience checks, key strength,
  explicit typing, cross-JWT confusion, and untrusted header/URL claims.
- **[Cloud Run service-to-service authentication](https://docs.cloud.google.com/run/docs/authenticating/service-to-service)**
  is the GCP-specific path for least-privileged service identities,
  `roles/run.invoker`, audience-bound Google-signed ID tokens, metadata-server
  credentials, and WIF. Last updated 2026-08-26.
- **[PortSwigger OAuth labs](https://portswigger.net/web-security/oauth)** are a
  useful practical attack-and-defense supplement after the standards path.

OAuth 2.1 remains a draft (`draft-ietf-oauth-v2-1-15`, 2026-03-02) and should not
be the catalog's stable protocol foundation. WebAuthn Level 3 was a Candidate
Recommendation Snapshot on 2026-05-26; Level 2 remains the stable baseline.

### Video judgment

- Prefer the current six-video Duende OAuth/OIDC Fundamentals sequence over the
  older OktaDev series if a compact explanatory playlist is later needed.
- Do not use the 2018–2021 OktaDev playlist as normative guidance; one of its 14
  items is private.
- Curate individual Curity videos only. Its 45-item Tutorials playlist is
  product-specific, contains duplicates, and is mostly 2017–2023 material.
- Keep written OWASP material primary. The short OWASP-themed YouTube playlists
  found in search did not add enough provenance or technical depth to justify
  tracking before the written source.

## Better Auth Judgment

Use selected standalone official Better Auth docs as implementation resources;
do not create or track a Better Auth video collection. The official YouTube
channel had no content, while independent tutorials are framework-specific and
likely to drift across versions.

Strong official candidates:

- [Documentation overview](https://www.better-auth.com/docs)
- [Security reference](https://www.better-auth.com/docs/reference/security)
- [Session management](https://www.better-auth.com/docs/concepts/session-management)
- [OAuth 2.1 Provider](https://www.better-auth.com/docs/plugins/oauth-provider)
- [SSO](https://www.better-auth.com/docs/plugins/sso)
- [Passkey](https://www.better-auth.com/docs/plugins/passkey)
- [API Key](https://www.better-auth.com/docs/plugins/api-key)
- [Repository and releases](https://github.com/better-auth/better-auth)

The **Security reference** is the best first canonical record. Its public
summary can link the session and OAuth-provider docs without turning every page
into a separate catalog item. Add a distinct OAuth-provider record only when a
dedicated provider-implementation learning path is desired.

Important caveats:

- Cached revoked sessions remain usable until cache expiry.
- Stateless sessions cannot be individually revoked without external state;
  version changes revoke all sessions.
- `disableOriginCheck` also disables CSRF protection.
- Wildcard origins and proxy-derived hosts require careful configuration.
- The project changes quickly. Official docs and releases must outrank
  independent tutorials, and exact version behavior should be dated.

## Recommended First Tranche

Oracle reviewed the catalog baseline and draft audit. Its feedback was to avoid
new playlist maintenance until current written foundations exist, preserve the
two WIF records because setup and threat-model guidance are materially distinct,
and keep provider/action pages as supporting citations rather than separate
catalog records. The resulting first tranche is ten canonical resources:

1. **Google Cloud Well-Architected Framework** — current Cloud architecture
   anchor.
2. **Enterprise foundations blueprint** — landing zone, IAM, networking,
   policy, logging, and delivery; cross-list in Security.
3. **Professional Network Engineer learning path** — fills the largest Cloud
   infrastructure-learning gap.
4. **Google WIF deployment-pipeline guide** — setup and implementation path;
   cross-list in Cloud and Security, with GitHub/Vercel supporting citations.
5. **Google WIF best-practices guide** — distinct federation threat model,
   admission conditions, immutable claims, and audit guidance; cross-list.
6. **RFC 9700** — OAuth security baseline.
7. **OpenID Connect Core 1.0** — normative identity layer.
8. **OWASP API Security Top 10 — 2023** — secure-API threat map.
9. **WebAuthn Level 2** — stable passkey/authenticator foundation.
10. **Better Auth Security reference** — one intentionally narrow,
    fast-moving implementation-layer record.

Supporting URLs should remain public-summary citations rather than separate
canonical records:

- WIF deployment: Vercel-to-GCP, `google-github-actions/auth`, GitHub OIDC,
  Vercel OIDC, the WIF concept page, supported-services matrix,
  troubleshooting, and Cloud Run service-to-service authentication.
- Enterprise foundations: the Terraform implementation repository.
- RFC 9700: RFC 10017, OWASP Session Management, and RFC 9449/DPoP.
- OIDC Core: RFC 8725/JWT BCP.
- OWASP API Security: OWASP Authorization Cheat Sheet.
- WebAuthn: FIDO's written passkey orientation.
- Better Auth Security: overview, sessions, OAuth provider, SSO, passkey, API
  key, repository, and release pages.

**No playlist should be tracked in this tranche.** Defer GKE Essentials because
its 2021–2023 procedures and security surfaces impose disproportionate review
cost on a catalog already dominated by historical Google videos. Defer the FIDO
passkey summit until WebAuthn and FIDO's written orientation are published; it
is the stronger of the two playlists for a later tranche.

## Remote Playlist Drift

A read-only remote check of all 12 tracked Google Cloud playlists found eleven
unchanged. Serverless Expeditions gained one video at remote position 0:

- `Z9WbG3m7Da4` — **7 AI agent patterns to improve your coding workflow**,
  published 2026-08-27.

The existing 182 entries shifted by one. This is a library-maintenance delta,
not a strong Cloud-learning candidate. No synchronization was performed.

## Verification and Uncertainty

- Three independent high-mode orb audits covered Cloud / GCP, external WIF,
  and secure API/OAuth/Better Auth candidates.
- Official documentation and learning-path candidate pages were opened during
  research. YouTube playlist identity, item counts, availability, and date
  ranges were checked with live YouTube data where page reads were incomplete.
- All 12 existing GCP playlists passed the local library coverage status check.
- A read-only remote playlist check produced only the Serverless Expeditions
  delta above.
- The Vercel GCP guide's IAM wording is not sufficient authority for the
  required impersonation grant; Google WIF documentation and current Google
  auth-action guidance should control the editorial correction.
- Avoid a categorical “all Vercel plans” claim until that exact statement is
  rechecked on the public page at implementation time.
- Exact release/version facts for Better Auth are supporting freshness signals,
  not durable catalog claims; recheck them when authoring a public summary.

## Delegated Audits

- [Cloud / GCP candidate audit](https://ampcode.com/threads/T-01a04f38-2462-7660-a2bf-e6db43612b18)
- [Workload Identity Federation audit](https://ampcode.com/threads/T-01a04f38-2cf8-731b-916a-0918122f5522)
- [Secure API, OAuth/OIDC, and Better Auth audit](https://ampcode.com/threads/T-01a04f38-342c-72ba-84e1-b45e10862475)
