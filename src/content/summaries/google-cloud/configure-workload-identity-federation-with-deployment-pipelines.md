---
title: "Configure Workload Identity Federation with deployment pipelines"
resourceId: 100
date: "2026-08-28"
---

Workload Identity Federation (WIF) lets a deployment job access Google Cloud without storing a service-account key. The job obtains an OpenID Connect (OIDC) token from its platform. A configured Google provider verifies the token, maps its claims to an identity, and checks conditions restricting which jobs are trusted. Security Token Service (STS) exchanges an accepted token for a short-lived federated token.

### Bind the workload that actually deploys

For GitHub, restrict access using immutable `repository_id` and `repository_owner_id` claims, plus the required branch, environment, or workflow context. For Vercel, prefer `owner_id` and `project_id` over names that can change, and require the intended `environment`. Vercel does not document an immutability and non-reuse guarantee for those IDs, so high-assurance deployments still need to confirm that assumption. Prefer the team issuer; with the shared global issuer, restrict the team explicitly.

Vercel's documented claims do not distinguish a build from a Function, or one preview branch from another. A production build and production runtime in one Vercel project therefore share the same documented identity boundary. If deployment needs more authority than runtime, use a distinct CI identity such as GitHub Actions OIDC or isolate deployment in another Vercel project; a caller-selectable custom audience is not that separation.

### Grant IAM to the exact identity

Bind roles to the narrowest principal. Both forms use the pool project's **number**, not its ID:

- One mapped subject: `principal://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/subject/SUBJECT`
- A deliberately scoped set: `principalSet://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/attribute.ATTRIBUTE_NAME/ATTRIBUTE_VALUE`

Prefer direct resource access where the target API supports federated principals. Where it does not, let the federated identity impersonate a dedicated service account: grant `roles/iam.workloadIdentityUser` on that account—not merely `roles/iam.serviceAccountUser`—then grant the account only its workload permissions.

Cloud Run shows why the compatibility matrix matters: its Admin API supports federated API callers, but direct WIF invocation through `run.routes.invoke` does not. A private service therefore needs a dedicated caller service account with `roles/run.invoker` on the exact receiving service.

### Apply it: Vercel Function to private Cloud Run

**Applied example—editorial synthesis:** the Vercel Function authorizes the user while Google authenticates the Function's workload identity:

1. The browser sends its [Better Auth session](/summaries/security/better-auth-security) to a server-side Vercel Function. The Function validates the session and performs application authorization.
2. Inside the request handler—not at module initialization—obtain the Vercel OIDC token for the Google provider audience. Google STS exchanges that external subject token for a federated access token.
3. Grant the exact federated principal `roles/iam.workloadIdentityUser` on the dedicated caller service account. Use IAM Credentials `generateIdToken` to mint a Google-signed ID token for that account.
4. Set the Google ID token audience to the generated Cloud Run service URL, or an explicitly configured custom audience. Send it in `Authorization`, or use `X-Serverless-Authorization` when `Authorization` is deliberately reserved for separate application authorization.

Keep the three audience values distinct:

| Boundary | Audience value |
| --- | --- |
| Vercel subject JWT | `https://iam.googleapis.com/projects/.../providers/...` |
| External-account configuration and STS target | `//iam.googleapis.com/projects/.../providers/...` |
| Google ID token accepted by Cloud Run | Generated service URL or configured custom audience |

Better Auth authenticates the user and manages the application session. Vercel OIDC/WIF authenticates the calling workload. Cloud Run IAM admits that workload. None of those steps automatically authorizes the user's tenant, object, or action. If Cloud Run must make that decision, give it a separately designed and validated user-context contract; never trust browser-supplied identity headers.

Here, “private Cloud Run” means IAM-protected with no anonymous invoker, not necessarily network-private. A Vercel Function can reach ingress `all` over public HTTPS while IAM still rejects unauthenticated requests. WIF does not create a route to ingress `internal`; `internal-and-cloud-load-balancing` requires an external load balancer path.

### Pipeline-specific cautions

**GitHub Actions.** `id-token: write` only permits the job to retrieve an OIDC token; it grants no cloud write access by itself. Current `google-github-actions/auth` documentation uses `auth@v3` and supports direct federation or impersonation, while Google's deployment guide still embeds older `auth@v1` and checkout examples. Recheck action versions, commands, provider claims, and service compatibility when implementing.

**Vercel token handling.** Builds get one-hour tokens through `VERCEL_OIDC_TOKEN`. Functions receive request-scoped tokens through `x-vercel-oidc-token`; Vercel can reuse them for up to 90 minutes and gives them a two-hour lifetime. Development tokens last 12 hours, and local `vercel env pull` writes one to `.env.local`. Keep that file untracked, admit development separately, retrieve Function tokens lazily, and do not add an application-level raw-token cache.

**Vercel's GCP walkthrough.** Its “Service account users role” wording and custom-audience example can mislead implementers. Use Google's `roles/iam.workloadIdentityUser` for impersonation. Keep the external JWT audience and STS target distinct as shown above; the walkthrough's custom-audience example uses the `https://...` value for both. Test the exchange with the library versions you deploy.

Sources:

- [Google Cloud deployment-pipeline guide](https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines)
- [`google-github-actions/auth`](https://github.com/google-github-actions/auth)
- [GitHub Actions OIDC reference](https://docs.github.com/en/actions/reference/security/oidc)
- [Vercel OIDC](https://vercel.com/docs/oidc), [OIDC reference](https://vercel.com/docs/oidc/reference), and [Vercel's GCP guide](https://vercel.com/docs/oidc/gcp)
- [Security Token Service `token`](https://docs.cloud.google.com/iam/docs/reference/sts/rest/v1/TopLevel/token)
- [Federated identity service compatibility](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- [Cloud Run service-to-service authentication](https://docs.cloud.google.com/run/docs/authenticating/service-to-service)
- [Cloud Run ingress](https://docs.cloud.google.com/run/docs/securing/ingress)
