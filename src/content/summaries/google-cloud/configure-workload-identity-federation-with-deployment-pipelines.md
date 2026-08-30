---
title: "Configure Workload Identity Federation with deployment pipelines"
resourceId: 100
date: "2026-08-28"
---

Replace stored service-account keys with a narrowly admitted token exchange. The trust path is: a deployment job obtains an external OIDC token; the Google Cloud provider verifies its signature, issuer, audience, mappings, and admission condition; Security Token Service (STS) exchanges it for a short-lived federated token.

### Bind the workload that actually deploys

For GitHub, map and constrain immutable `repository_id` and `repository_owner_id` claims, plus the required branch, environment, or workflow context. For Vercel, prefer the ID-valued `owner_id` and `project_id` claims over explicitly mutable names, map `environment`, and require exact admission. Vercel's public OIDC reference does not promise that these IDs are immutable and non-reusable, so confirm that vendor-contract assumption for high-assurance use. Prefer Vercel's team issuer; the shared global issuer requires an exact team-ID condition.

Vercel's documented claims do not distinguish a build from a Function, or one preview branch from another. A production build and production runtime in one Vercel project therefore share the same documented identity boundary. If deployment needs more authority than runtime, use a distinct CI identity such as GitHub Actions OIDC or isolate deployment in another Vercel project; a caller-selectable custom audience is not that separation.

Grant IAM to the exact identity: `principal://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/subject/SUBJECT` for one mapped subject, or `principalSet://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/attribute.ATTRIBUTE_NAME/ATTRIBUTE_VALUE` for a deliberately scoped set. These identifiers use the pool project's **number**, not its ID. Prefer direct resource access where the target API supports federated principals. If it does not, let the federated identity impersonate a dedicated service account by granting `roles/iam.workloadIdentityUser` on that account—not merely `roles/iam.serviceAccountUser`—then grant the account only its workload permissions.

Cloud Run's Admin API supports federated API callers, but direct WIF invocation through `run.routes.invoke` does not. A private service therefore needs a dedicated caller service account with `roles/run.invoker` on the exact receiving service.

### Apply it: Vercel Function to private Cloud Run

The following composition is editorial synthesis across the Vercel, Google Cloud, Better Auth, and OAuth sources:

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

GitHub's `id-token: write` only permits the job to retrieve an OIDC token; it grants no cloud write access by itself. Current `google-github-actions/auth` documentation uses `auth@v3` and supports direct federation or impersonation. Google's deployment guide still embeds older `auth@v1` and checkout examples, so its action versions may lag the current action documentation. Recheck action versions, commands, provider claims, and service compatibility when implementing.

Vercel provides one-hour tokens to builds through `VERCEL_OIDC_TOKEN`. Functions receive request-scoped tokens through `x-vercel-oidc-token`; Vercel can reuse them for up to 90 minutes and gives them a two-hour lifetime. Development tokens last 12 hours, and local `vercel env pull` writes one to `.env.local`. Keep that file untracked, admit development separately, retrieve Function tokens lazily, and do not add an application-level raw-token cache.

Vercel's GCP page is a mutable setup walkthrough, not the authority for Google IAM roles or STS syntax. Its current wording around service-account access and its custom-audience example can be read as `roles/iam.serviceAccountUser` and the `https://...` audience at both boundaries. Follow Google's current `roles/iam.workloadIdentityUser` and `//iam.googleapis.com/...` STS contracts instead, and test the actual exchange with pinned library versions.

Google marked the deployment guide updated on 2026-08-28.

Sources:

- [Google Cloud deployment-pipeline guide](https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines)
- [`google-github-actions/auth`](https://github.com/google-github-actions/auth)
- [GitHub Actions OIDC reference](https://docs.github.com/en/actions/reference/security/oidc)
- [Vercel OIDC](https://vercel.com/docs/oidc), [OIDC reference](https://vercel.com/docs/oidc/reference), and [Vercel's GCP guide](https://vercel.com/docs/oidc/gcp)
- [Security Token Service `token`](https://docs.cloud.google.com/iam/docs/reference/sts/rest/v1/TopLevel/token)
- [Federated identity service compatibility](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- [Cloud Run service-to-service authentication](https://docs.cloud.google.com/run/docs/authenticating/service-to-service)
- [Cloud Run ingress](https://docs.cloud.google.com/run/docs/securing/ingress)
