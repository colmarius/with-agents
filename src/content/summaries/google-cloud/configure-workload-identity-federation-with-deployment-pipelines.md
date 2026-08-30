---
title: "Configure Workload Identity Federation with deployment pipelines"
resourceId: 100
date: "2026-08-28"
---

Replace stored service-account keys with a narrowly admitted token exchange. The trust path is: a deployment job obtains an external OIDC token; the Google Cloud provider verifies its signature, issuer, audience, mappings, and admission condition; Security Token Service (STS) exchanges it for a short-lived federated token.

### Bind the workload that actually deploys

For GitHub, map and constrain immutable `repository_id` and `repository_owner_id` claims, plus the required branch, environment, or workflow context. For Vercel, map immutable `owner_id` and `project_id` claims instead of mutable names and include `environment` in the boundary. Every multi-tenant provider needs an explicit attribute condition; issuer verification alone admits too much.

Grant IAM to the exact identity: `principal://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/subject/SUBJECT` for one mapped subject, or `principalSet://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/attribute.ATTRIBUTE_NAME/ATTRIBUTE_VALUE` for a deliberately scoped set. These identifiers use the pool project's **number**, not its ID. Prefer direct resource access where the target API supports federated principals. If it does not, let the federated identity impersonate a dedicated service account by granting `roles/iam.workloadIdentityUser` on that account—not merely `roles/iam.serviceAccountUser`—then grant the account only its workload permissions. Cloud Run direct access is unsupported; external callers use impersonation to mint a Google-signed ID token, with `roles/run.invoker` on the receiving service and the service URL as audience.

### Pipeline-specific cautions

GitHub's `id-token: write` only permits the job to retrieve an OIDC token; it grants no cloud write access by itself. Current `google-github-actions/auth` documentation uses `auth@v3` and supports direct federation or impersonation. Google's deployment guide still embeds older `auth@v1` and checkout examples, so its action versions may lag the current action documentation. Recheck action versions, commands, provider claims, and service compatibility when implementing.

Vercel provides OIDC tokens in builds and functions. Local `vercel env pull` can temporarily persist `VERCEL_OIDC_TOKEN` in `.env.local`; keep that file untracked, scope development admission separately, and refresh rather than treating it as a durable credential.

Google marked the deployment guide updated on 2026-08-28.

Sources:

- [Google Cloud deployment-pipeline guide](https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines)
- [`google-github-actions/auth`](https://github.com/google-github-actions/auth)
- [GitHub Actions OIDC reference](https://docs.github.com/en/actions/reference/security/oidc)
- [Vercel OIDC](https://vercel.com/docs/oidc) and [Vercel's GCP guide](https://vercel.com/docs/oidc/gcp)
- [Federated identity service compatibility](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- [Cloud Run service-to-service authentication](https://docs.cloud.google.com/run/docs/authenticating/service-to-service)
