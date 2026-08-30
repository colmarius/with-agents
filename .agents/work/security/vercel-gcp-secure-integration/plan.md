# Vercel-to-GCP summary enrichment plan

Correct and connect the existing source summaries so the resource library shows a
secure Vercel-to-GCP runtime path without adding a new catalog item or field guide.

## Goals

- Keep deployment, Vercel runtime, Cloud Run execution, and end-user identities
  distinct.
- Make the supported private Cloud Run invocation path and its three audiences
  implementable without copying known vendor-guide ambiguities.
- Preserve source-summary ownership and keep the public change small.

## Tasks

- [x] **Task 1: Correct and connect the security guidance**
  - Scope: `src/content/summaries/google-cloud/configure-workload-identity-federation-with-deployment-pipelines.md`, `src/content/summaries/google-cloud/workload-identity-federation-best-practices.md`, `src/content/summaries/security/rfc-9700-oauth-2-security-bcp.md`, `src/content/summaries/security/better-auth-security.md`
  - Depends on: none
  - Acceptance:
    - The Vercel summary distinguishes the subject-token, STS-target, and Cloud
      Run ID-token audiences and gives the supported impersonation chain.
    - The summaries do not call Vercel ID claims provably immutable, conflate
      deployment and runtime authority, or conflate workload and end-user
      authorization.
    - RFC 10017's BFF ordering and Better Auth's database/stateless session
      boundary are represented concisely and source-faithfully.
  - Notes: Label the composed Vercel/Better Auth/Cloud Run path as editorial
    synthesis. Do not add code, a new resource, or a new post.

- [x] **Task 2: Verify content and rendered routes**
  - Scope: repository content checks, Astro build, the scoped inline-code
    wrapping rule, and the four changed summary routes
  - Depends on: Task 1
  - Acceptance:
    - Lint, content guard, tests, Astro check, build, and diff checks pass.
    - Desktop and mobile browser checks show the new headings, links, audience
      notation, and identity-boundary copy with no browser errors.
  - Notes: Use the repository portal, not a raw orb-local URL.

- [x] **Task 3: Independently review the integrated diff and proof**
  - Scope: current diff and retained browser evidence
  - Depends on: Tasks 1 and 2
  - Acceptance:
    - A fresh high-mode reviewer finds no blocking source-fidelity, security, or
      rendering defect, or every finding is resolved and reverified.
    - A short recording is decoded and every frame is inspected for visual
      defects; retained screenshots cover representative changed routes.
  - Notes: The coordinator owns acceptance and reruns decisive checks.

## Implementation Notes

The current Vercel GCP guide is useful setup evidence but is not the authority for
Google IAM roles or STS resource syntax. Use Google documentation for
`roles/iam.workloadIdentityUser`, the `//iam.googleapis.com/...` STS target, and
the Cloud Run `generateIdToken` path. Keep mutable library examples out of the
summaries.

## Constraints / Decisions

- Enrich existing summaries rather than adding RFC 10017 as a new resource or
  creating the site's first Security field guide.
- Keep exact deployment commands, Terraform, and version-pinned TypeScript out of
  scope because no live Vercel/GCP trust environment exists in this repository.
- Treat reachable HTTPS with IAM enforcement as IAM-private, not network-private;
  WIF does not create a route to Cloud Run `internal` ingress.

## Acceptance Criteria

- The resource library teaches one coherent, least-privilege Vercel-to-private-
  Cloud-Run composition and names its residual end-user authorization boundary.
- Existing resource IDs, catalog membership, and routes remain unchanged.
- The rendered proof is reviewed, not merely captured.

## Verification

- `npm run lint:fix`
- `npm run content:guard`
- `npm test`
- `npm run check`
- `npm run build`
- `git diff --check`
- Real-browser desktop/mobile assertions on all changed summaries
- Decode the retained recording and inspect every frame
