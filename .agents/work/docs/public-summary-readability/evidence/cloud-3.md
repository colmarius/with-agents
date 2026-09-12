# Cloud-3 public-summary review

Reviewed 2026-09-12. Ownership: sorted nested Markdown paths under
`src/content/summaries/google-cloud` slice `[52:78]`. All 26 changed; no other
tracked files edited. Frontmatter and full-video links preserved verbatim.
Checkout started at `0b57c28e68ead518ecfee854efbcd8d74e9e79b4`; coordinator
reports baseline `5f00f1d5755b8ca0ca5b1767e67f998313f1c2b3`. Fetched origin and
read the Claude Eval readability example with `git show origin/main:...`.
No push, deploy, source refresh, or source-sidecar modifications performed.

For every row below, read BOTH complete saved files
`src/content/youtube/videos/<videoId>/summary.md` (status: reviewed) and
`src/content/youtube/videos/<videoId>/transcript.md` before editing. These are
the source paths, with each row's videoId substituted. The first batch's
truncated output was reread in a smaller batch. Source language is English;
captions are auto-generated except Sdt-i-Q7tyA, which has caption kind caption.
No original audio check or current-product validation is claimed.

Public path prefix for rows: `src/content/summaries/google-cloud/`.
All rows passed the common validation below. “Substantial” means the body or
its main explanations were materially rewritten, not just process-note removal.

| Public path (relative to prefix) | Source videoId | Decision and supporting evidence | Uncertainty / gap |
| --- | --- | --- | --- |
| google-cloud-engineering-for-reliability/how-to-troubleshoot-the-ops-agent.md | Sd0iznXSVcc | Changed, substantial. Explain missing VM data and distinguish agent startup, reading logs, and API delivery; 00:00–03:06 and 03:06–04:10. | Exact command/error text not reconstructed; prior caution already in sidecar. |
| google-cloud-engineering-for-reliability/how-to-use-metrics-scopes-in-cloud-monitoring.md | _FKdug6B5FM | Changed, substantial. Define scoping project, explain deletion independence and monitoring-project IAM access; 00:00–02:07, 01:03–03:12. API enrollment 05:18–06:21. | Avoid implying separate access required on every monitored project. |
| google-cloud-engineering-for-reliability/maintaining-reliable-services-with-advanced-cloud-logging-features.md | M2bQxpyBpH0 | Changed, substantial. IAM event alert example 00:00–02:06; counter versus numeric distribution 02:06–04:13; trace error sample to originating container 04:13–05:16. | Removed unanchored cost/cardinality advice; source-sidecar interpretation retained there. |
| google-cloud-engineering-for-reliability/manage-gke-services-with-cloud-operations.md | L6JnAhp3E-c | Changed. Define SLI/SLO 00:00–01:04, preserve rollback/recovery evidence 02:07–03:10 and label interpretation. | Demo does not identify code defect; qualification retained beside claim. |
| google-cloud-engineering-for-reliability/managing-gke-infrastructure-at-scale.md | lHCB_i_rWAI | Changed, substantial. Compare application/node memory 01:03–02:08 and differing service CPU behavior 02:08–03:11. | “At least two,” not “only two”; shared symptoms do not identify cause. |
| google-cloud-engineering-for-reliability/migrating-to-the-managed-service-for-prometheus.md | YjEh_V7MRc4 | Changed, substantial. Explain scraping and working baseline 00:00–02:11, resource translation 02:11–03:03, data verification 03:03–03:55. | Uncertain traffic term omitted; existing sidecar already records it. No full feature parity claimed. |
| google-cloud-engineering-for-reliability/monitoring-compute-infrastructure-with-the-cloud-ops-agent.md | Fzd6WP0_bWM | Changed, substantial. Host allocation versus guest use 00:00–04:26; filtered policy installation 04:26–05:31; Terraform policy and actual-instance verification 05:31–06:34. | Policy example explicitly dated 2021; no current recommendation inferred. |
| google-cloud-engineering-for-reliability/observing-container-environments-with-cloud-operations.md | ilY4-Aw1Z2M | Changed, substantial. Explicit platform operating comparison 00:00–02:05; logging versus tracing 03:08–06:18; hybrid-cluster views 05:12–07:22. | Historical 2021 scope retained in introduction; no universal automatic tracing claim. |
| google-cloud-engineering-for-reliability/understand-your-services-with-cloud-logging.md | IlUCyV8mcS0 | Changed, substantial. Define payload and sink; routing 01:01–03:07, per-user view example 03:07–04:11, filtering/streaming 04:11–06:16. | Exclusions scoped to the sink destination, not universal data deletion. |
| google-cloud-essentials/cloud-logging.md | gyDp-Cl_MdA | Changed, substantial. Define entry and source 01:02–03:09; distinguish volume alerts and exclusions 02:06–03:09; destinations 03:09–04:02. | Unknown free-ingestion quantity still omitted and preserved as uncertain in source sidecar. |
| google-cloud-essentials/error-reporting.md | GANi9eRxhHs | Changed. Explain repeated failure grouping and formatted-log/API inputs 00:00–02:06. | No zero-setup promise retained. |
| google-cloud-essentials/gcp-vs-firebase-projects-and-storage.md | xbmYmgBEj4o | Changed, substantial. Shared project 00:00–01:03, destructive deletion 01:03–02:07, photo-processing example 03:12–04:13, distinct permission paths 04:13–05:21. | No shared-permission-system implication. |
| google-cloud-essentials/how-to-run-code-on-google-cloud.md | jtPtSVSTb9Y | Changed, substantial. Client-heavy versus event-driven 01:01–02:53; whole-app scaling 02:53–03:46; container control 03:46–05:47; mixed game architecture 06:50–07:40. | 2022 product comparison, not new runtime guidance. |
| google-cloud-essentials/how-to-store-data-on-google-cloud.md | w2mL4sUOjVo | Changed, substantial. Photo objects 00:00–01:02; relational management 01:02–03:07; varying document fields and synchronization 02:04–04:11; analytics/read-write workloads 04:11–06:18. | No invented database examples or availability figures. |
| google-cloud-essentials/platform-overview-code-and-build-tools.md | TH_OuqZ1ZKU | Changed, substantial. Editor feedback 01:02–03:08, containerized build steps 03:08–04:11, builder definition/triggers 04:11–05:13. | Removed obsolete registry procedure and unexplained tool inventory. |
| google-cloud-essentials/top-three-ways-to-run-containers.md | jh0fPT-AWwM | Changed, substantial. Cluster coordination 00:00–02:08, managed container setup 02:08–03:12, VM workflow 03:12–04:16. | Retains 2020 frame; does not repeat obsolete registry/Anthos deployment paths. |
| google-cloud-essentials/what-is-google-cloud.md | kzKFuHk8ovk | Changed, substantial. Seasonal capacity 01:03–02:05; explain services 02:05–03:08; prebuilt vs custom AI 03:08–04:11; fictional integrated app 04:11–05:16. | No inferred Ryan affiliation; fictional example labeled. |
| google-cloud-get-started/build-a-serverless-application-integration-with-workflows.md | E_ZDB4S6mSQ | Changed. Explain coordination and data handoff 00:01–03:07; actual weekday results 02:05–03:07. Corrected setup range to include role assignment at 01:03. | Sample's log-writer role not presented as a universal permission recipe. |
| google-cloud-get-started/google-cloud-persistent-disks.md | sT7-_qn71cw | Changed. Explain attach/format/mount distinction 00:00–02:57, blank-disk scope 01:03–02:11, permissions and restart-mount limitation 01:03–02:57. | Not a data-preserving procedure or persistent-mount runbook. |
| google-cloud-get-started/google-cloud-vpc.md | NPs_-Y5nFgE | Changed. Automatic versus explicit subnet settings 00:00–01:05; all three regions 00:00–02:02. | Garbled address values not reconstructed; no traffic reachability demonstrated. |
| google-cloud-get-started/how-to-classify-and-redact-sensitive-data.md | LxDHd0MsFXI | Changed. Orient on text inspection and distinguish findings from redaction 00:01–02:45 and 02:06–02:45. | Existing sidecar already records title/demo mismatch; no additions needed. |
| google-cloud-get-started/how-to-use-cloud-speech-to-text-with-curl.md | SPcFViKU_xU | Changed. Explain request tool, audio description and response 00:04–02:07, 01:06–02:07. | Confidence remains an estimate; no streaming or downloaded-key recommendation. |
| google-cloud-get-started/locating-and-querying-public-datasets.md | 4-rZd5DwEww | Changed, substantial. Define schema and inspect tables 01:03–02:06; rent/income change by ZIP code 02:06–03:10. | Historical visualization name qualified beside the claim. |
| google-cloud-get-started/querying-cloud-sql-from-bigquery.md | 0cyTHbkARwY | Changed, substantial. Connection and database credentials 02:06–04:12; employee/salary join mechanism 03:09–05:13; processed-data uncertainty moved to supporting 04:12–05:13. | Database credential reach to additional databases retained; no current public-IP setup recommendation. |
| google-cloud-get-started/resource-access-control-iam-roles-and-permissions.md | Sdt-i-Q7tyA | Changed. Explain role breadth and propagation 00:00–00:53, affected-account denial test 00:00–01:10. | One account's result, not all inherited policies verified. |
| google-cloud-get-started/securing-app-engine-apps-with-iap.md | _tw3md6k8aw | Changed. Define IAP and explain role/activation 00:01–01:43; allow/deny test 01:06–01:43. | No downstream-service protection claim. |

## Validation

- `npm run lint:fix`: 457 files checked; no fixes applied.
- `npm run check`: 65 files, 0 errors, 0 warnings, 0 hints.
- `npm test`: 114 tests, 113 passed, 0 failed, 1 skipped.
- `npm run build`: 332 pages built; complete.
- `npm run content:guard`: passed; 1158 tracked videos, 24 playlists, 248 public references, 107 resources, 287 summaries. Existing informational duplicate occurrence in antirez-ai-concepts remains unrelated.
- `npm run summaries:check`: 287 files passed.
- `git diff --check`: passed. Exact-ownership and frontmatter comparison passed for 26 files; full bodies reread after editing.
- `npm run hooks:install`: installed local pre-commit hook.

## Browser

Used `amp orb services ensure` and returned portal:
https://t-03guuc2b350uyxawp7lg3sehv-p27677.onamp.dev/

Verified rendered routes:
- `/summaries/google-cloud/google-cloud-essentials/how-to-store-data-on-google-cloud`: desktop accessibility tree contained revised orientation and all four bullets, citation links, and collection navigation. Screenshot inspected successfully.
- `/summaries/google-cloud/google-cloud-engineering-for-reliability/how-to-use-metrics-scopes-in-cloud-monitoring`: desktop DOM confirms IAM distinction, correct source links, no horizontal overflow.
- `/summaries/google-cloud/google-cloud-get-started/querying-cloud-sql-from-bigquery`: 390px Chromium viewport confirms full join explanation, permission limitation, and no horizontal overflow. Narrow desktop emulation, not a physical mobile device. Browser errors command returned no errors.

Screenshot: `.amp/in/artifacts/cloud3-storage.png`. Initial full-page image
exceeded media-analysis size limits and was resized for review. First inspection
found the Astro development toolbar overlapping one citation; removed only that
development overlay in the browser and recaptured. Second inspection confirmed
all four explanations/citations readable without overlap. No product code altered.

No source-sidecar additions required: provenance, uncertain caption terms, and
historical-interface cautions removed from public prose already exist there.
Collection-level descriptions still include historical/process framing in the
rendered header; outside this slice's ownership and left unchanged.
