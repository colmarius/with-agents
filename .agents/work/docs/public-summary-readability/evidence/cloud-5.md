# Cloud-5 public-summary review

Reviewed 2026-09-12 in thread T-01a096b5-a50f-730e-9869-e873062bfcca.
Ownership: sorted nested Markdown summaries under `src/content/summaries/google-cloud`, slice `[104:130]`, yielding 22 files. All 22 changed; no other tracked files changed. Frontmatter preserved byte-for-byte. No source sidecars edited or needed.

Read the user's readability example from `origin/main:src/content/summaries/coding-with-agents/trying-the-new-claude-eval-tool.md`. Applied explanation-first prose without imposing its template.

## Evidence and per-file decisions

Every row's source ID means both `src/content/youtube/videos/<ID>/summary.md` (status reviewed) and sibling `transcript.md` were read before editing. All sources are English; caption provenance and historical-product cautions already reside in those sidecars. This was a transcript/source-record review, not an original-audio or current-product-docs verification. Anchors below name the supporting video timeline; public links retain absolute seek times.

All paths below are relative to `src/content/summaries/google-cloud/`.

| Path | Source read | Decision and substantial rewrite | Evidence anchors | Uncertainties/gaps |
| --- | --- | --- | --- | --- |
| google-cloud-security-basics/top-3-access-risks-in-cloud-security.md | IHBoUADMrHc | Changed; substantial. Explain network protection, physical second factor, application authorization and device policy. Remove generic current-docs checklist. | 02:10–03:13 TLS and traffic control; 03:13–04:15 key possession; 04:15–06:22 IAP/device context. | 2020 behavior retained as historical; no modern default claims added. |
| google-cloud-security-basics/top-3-data-risks-in-cloud-security.md | QJcRkpzW8Mw | Changed; substantial. Explain unsafe input and least privilege with UI-developer/database example; replace unsupported scanning description with actual transcript material. | 01:05–02:09 unsafe inputs/PII; 03:15–04:17 IAM/logging; 04:17–05:20 central policy. | Blanket PII prohibition remains qualified as a simplification, not legal guidance. |
| google-cloud-security-basics/top-3-platform-risks-in-cloud-security.md | N83Ru1c77U4 | Changed; substantial. Define defense in depth, explain ongoing response/testing, narrow customer responsibility claim to source. | 01:03–03:08 layers/access; 02:06–04:13 operations/frameworks; 03:08–04:13 responsibility. | Source asserts provider protection; no independent security assurance claimed. |
| google-cloud-security-command-center/cloud-anomaly-detection.md | n70BdI7apXI | Changed; substantial. Explain exfiltration signal and finding-to-audit-log investigation; repair too-short evidence range. | 00:00–01:42 abnormal traffic; 01:42–03:28 coin-mining investigation; 02:32 containment proposal. | Finding not proof of breach; response options remain proposals. |
| google-cloud-security-command-center/cloud-dlp.md | ra_hnxqBzOc | Changed; substantial. Define DLP/info types; consolidate result flow and concrete credit-card investigation. | 00:55–02:39 integration; 02:39–04:02 finding-to-resource/analysis. | Match does not establish policy violation. Historical integration retained. |
| google-cloud-security-command-center/cloud-security-scanner.md | goJ_G2ygdSA | Changed; localized. Orient scanning mechanism and correct reproduction citation; remove generic checklist. | 00:50–01:49 traversal; 01:49–03:21 results/reproduction. | No detected vulnerability is not proof of a vulnerability-free app. |
| google-cloud-security-command-center/event-threat-detection.md | 0f5Dh8cGbyQ | Changed; substantial. Explain log patterns, combine repetitive IAM investigation bullets, clarify selective Splunk export. | 00:04–01:08 detection; 01:08–03:03 grant investigation; 02:12–03:03 export. | Processed log output is not established as automatic SCC-findings export. |
| google-cloud-security-command-center/security-health-analytics.md | L5nR0KPtn-Y | Changed; localized. Orient configuration scanning; consolidate specific Cloud SQL fix and distinguish dashboard from resource mutation. | 00:04–02:13 findings; 02:13–02:49 root password. | One historical fix is not universal remediation guidance. |
| google-cloud-serverless-expeditions/alerting-for-user-impact.md | r3oZVYVSbqg | Changed; substantial. Name Aaron; explain user-impact symptoms and actionable alert context. | 02:06–04:12 relevance; 04:12–06:20 symptoms; 06:20–09:31 context/responders. | Advice is a rule of thumb; Cloud Run failover remains a 2023 discussion claim. |
| google-cloud-serverless-expeditions/bigquery-ai-agent.md | o3aE4tw3vrI | Changed; substantial. Define ADK/MCP, explain football query, instructions and alternative custom Python tool. Remove public caption-name/process note. | 00:51–02:36 query; 02:36–04:28 instructions; 03:23–05:16 adapter comparison; 05:16–06:18 deployment; 06:18–08:10 Markdown instructions. | Guest identity spelling unresolved and already recorded in sidecar; continue “guest.” Database grounding does not prove error-free SQL. Agent Engine claim attributed to shown setup. |
| google-cloud-serverless-expeditions/cloud-functions-vs-cloud-run.md | zRjOSxTpC3A | Changed; substantial. Explain two workload needs and canary meaning; remove broad checklist and unsupported present-day selection advice. | 01:04–06:22 event pipeline; 08:30–11:39 API; 12:45–18:02 rollout. | Explicit October 2020 comparison, not today's product boundary; unauthenticated demo remains explicit. |
| google-cloud-serverless-expeditions/cloud-run-jobs.md | e07TvWMmVI8 | Changed; substantial. Explain invoice purpose, creation versus execution, task partitioning with original 1,000/10/301–400 example. | 00:00–01:52 completion; 01:52–03:57 invoice flow; 02:55–06:04 execution; 05:00–06:04 partitioning. | Parallel partition implementation deferred by source; no claim of retry safety. |
| google-cloud-serverless-expeditions/cloud-run-least-privilege.md | bIL8Gb3D8Yg | Changed; substantial. Explain caller versus runtime permissions, failure-before-grant demonstration and reusable infrastructure definitions. | 01:04–02:07 damage; 02:07–07:23 identity/role demonstration; 07:23–09:29 modules. | Broad default-account behavior explicitly May 2024; demo reads records but does not demonstrate denied-delete test. |
| google-cloud-serverless-expeditions/cloud-run-scalability.md | 8YtsV8BNTqY | Changed; substantial. Explain queueing and concurrent requests; keep synthetic test boundaries next to result. | 00:00–02:08 workload; 02:08–03:14 visualization; 03:14–05:21 queueing/concurrency; 05:21–06:26 result. | 30,000 loops are not end users or requests/sec; success display does not establish a latency target; no database. |
| google-cloud-serverless-expeditions/cloud-run-secrets.md | JIE89dneaGo | Changed; localized. Orient secret-storage problem and explain three read modes, widening freshness citation. | 00:00–02:05 motivation; 02:05–04:11 secret permission; 04:11–06:15 logging/read modes. | Access logging not asserted enabled by default; 2021 refresh behavior retained. |
| google-cloud-serverless-expeditions/designing-a-serverless-app.md | HbsHC8gq_NQ | Changed; substantial. Explain request data model and parallel scan work without fan-out jargon. | 01:03–04:15 storage; 04:15–08:26 workers; 07:24–12:38 result consumers. | Design exercise, not implementation; server versus server-port unit unresolved; private-network reachability not supplied. |
| google-cloud-serverless-expeditions/mcp-tools-on-cloud-run.md | 04Gap8vWV28 | Changed; substantial. Explain sprinkler quote calculation, tool metadata discovery, and existing-API adaptation. Remove editorial appendix/process framing. | 01:56–04:49 business example; 03:54–05:40 code/interface; 06:44–07:38 auth; 07:38–08:30 API adaptation. | Auth explicitly evolving in November 2025; no complete authorization design established. |
| google-cloud-serverless-expeditions/pub-sub-ordering.md | S2evHtbl4F8 | Changed; substantial. Explain rider key, scope push blocking correctly, split publish recovery from regional endpoint choice. | 00:00–02:06 sequence; 02:06–03:08 failed work; 03:08–04:11 subscriptions; 04:11–06:18 publishing. | Acknowledgement after error needs recovery; no claim of durable recovery or current delivery semantics beyond historical discussion. |
| google-cloud-serverless-expeditions/safe-cloud-run-deployments.md | ArDuQDjW-DQ | Changed; substantial. Define CI/delivery, canaries, user groups and original toolbar/purchase-button example. | 01:03–04:14 CI; 04:14–06:21 rollback; 06:21–10:35 canaries; 10:35–15:49 features; 14:46–16:51 priority. | Rollout timing is heuristic; opinion attributed to Steve; no blanket safety guarantee. |
| google-cloud-serverless-expeditions/serverless-relational-data-at-scale.md | IqAe1WRPjfU | Changed; substantial. Replace unhelpful price/scale headlines with managed responsibility, replica abstraction and load-test capacity mechanism. | 01:03–03:07 responsibilities; 03:07–06:19 replicas/config; 04:12–08:25 load/capacity. | No per-instance capacity inferred from billion-request claim (removed). Availability retains multi-region qualification. TrueTime internals not expanded beyond source. |
| google-cloud-serverless-expeditions/terraform-and-cloud-run.md | Ce93fpQrKCk | Changed; substantial. Define infrastructure as code/HCL, desired-result comparison, test variation and build/deploy boundary. | 01:03–03:13 desired result; 02:07–04:16 config/dependencies; 03:13–05:22 build/deploy. | Simplified example does not establish automatic adoption of an existing unmanaged bucket. |
| google-cloud-serverless-expeditions/workflows-retries-and-saga.md | yqMKr37mGJw | Changed; substantial. Explain order/credit stakes, transient versus permanent failure, compensation and eventual consistency in place. | 00:00–02:08 sequence; 02:08–04:15 retries; 04:15–06:29 Saga. | Source does not handle compensation failure or duplicate calls; no production-completeness claim added. |

## Validation

- `npm run check`: 65 files, 0 errors, 0 warnings, 0 hints.
- `npm test`: 114 tests; 113 passed, 0 failed, 1 skipped.
- `npm run build`: 332 pages built; complete.
- `npm run content:guard`: passed, 1158 tracked videos, 24 playlists, 248 public references, 107 resources, 287 summaries. Existing nonblocking duplicate-manifest notice for antirez-ai-concepts / 8gg-oJr4dTY positions 0 and 3.
- `npm run summaries:check`: 287 files passed.
- `npm run lint:fix`: 457 files checked, no fixes applied.
- `npm run hooks:install`: installed pre-commit hook locally.
- Python compared frontmatter to HEAD for all 22 files: byte-for-byte unchanged.
- `git diff --check`: clean.

## Rendered review

Used `amp orb services ensure`: portal `https://t-03guuc2smqqmygi4w4gvc6fnu-p26185.onamp.dev/`.
Real Chromium through agent-browser, desktop 1280×900 at DPR 2; narrow viewport 390×844 at DPR 2 (not physical-device testing).

- `/summaries/google-cloud/google-cloud-serverless-expeditions/bigquery-ai-agent`: updated intro/bullets present, caption process note absent, source links retain video ID and t=51/156/203/316/378s, no horizontal overflow; collection navigation visible.
- `/summaries/google-cloud/google-cloud-serverless-expeditions/workflows-retries-and-saga`: updated compensation explanation present, all three timestamp links visible, no horizontal overflow.
- `/summaries/google-cloud/google-cloud-security-command-center/cloud-dlp`: narrow title and bullets wrap; updated info-type explanation present; no horizontal overflow.
- Browser errors command returned no errors.
- Initial full-page captures had Astro's development toolbar over content. Removed only that preview toolbar in browser DOM, recaptured, and inspected all final captures with view_media: all met readability/no-clipping objectives. No application/style files changed.
- Review artifacts: `.amp/in/artifacts/cloud5-bigquery-review.png`, `.amp/in/artifacts/cloud5-saga-review.png`, `.amp/in/artifacts/cloud5-dlp-narrow.png`. Desktop review copies resized from 2x captures to fit media-analysis size limits.

No blockers. Local commit only; no push or deployment. Coordinator should transfer exact changed summaries and this uncommitted ledger, then run integration checks on its updated baseline.
