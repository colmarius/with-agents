# Public summary readability review

Status: in-progress
Category: docs
Updated: 2026-09-12

## Why

Review every public summary for readers who have not watched or read its source. Improve orientation, explanations, readability, and fidelity through disjoint high-mode orb batches, followed by integrated Oracle review.

## Summary

Baseline reconciled to origin/main at 5f00f1d5755b8ca0ca5b1767e67f998313f1c2b3: coordinator fast-forwarded from 0b57c28e68ead518ecfee854efbcd8d74e9e79b4, adding the Claude Eval example, transcript, and resource. Inventory: 287 Markdown summaries, all routed publicly. Twelve workers own non-overlapping summary files; coordinator owns integration, necessary source-sidecar provenance preservation, and this work item. Preserve resource IDs, frontmatter, and source links. No push or deployment.

Ownership is deterministic from baseline paths sorted with Python's default string ordering:
- coding-1 through coding-6: root summaries plus coding-with-agents summaries, sorted together, consecutive slices of 25, with coding-6 taking the remainder (26; 151 total).
- cloud-1 through cloud-5: summaries under google-cloud subdirectories (excluding files directly in google-cloud), sorted together, consecutive slices of 26 (last slice 22; 126 total).
- references: five files directly in google-cloud plus five security summaries.

Workers read matching transcripts or reviewed evidence before edits, report per-file coverage, source gaps, substantial changes, and verification. Unpushed content transfers through download_thread_changes or download_thread_file, never assumed available from commit IDs. The Claude Eval example is available at the reconciled baseline and all workers were notified.

## Artifacts

- [coding-1](https://ampcode.com/threads/T-01a096b3-ec51-759a-b3ae-9c720bfc41aa)
- [coding-2](https://ampcode.com/threads/T-01a096b3-f25a-77ba-8616-f880592c2d5c)
- [coding-3](https://ampcode.com/threads/T-01a096b3-f8b2-70be-b818-4d4d2d675309)
- [coding-4](https://ampcode.com/threads/T-01a096b4-01d2-772a-bc29-5e09369df989)
- [coding-5](https://ampcode.com/threads/T-01a096b4-07be-7560-9455-be012c4c537b)
- [coding-6](https://ampcode.com/threads/T-01a096b4-0f42-778a-b4f6-0a5096caab42)
- [cloud-1](https://ampcode.com/threads/T-01a096b5-887b-730d-8497-76acbbc34543)
- [cloud-2](https://ampcode.com/threads/T-01a096b5-8df9-74fb-b4cf-fc4232833b56)
- [cloud-3](https://ampcode.com/threads/T-01a096b5-94d1-7289-a702-2fa1a3846b63)
- [cloud-4](https://ampcode.com/threads/T-01a096b5-9e07-768a-905f-900c021b659b)
- [cloud-5](https://ampcode.com/threads/T-01a096b5-a50f-730e-9869-e873062bfcca)
- [references](https://ampcode.com/threads/T-01a096b5-ab4d-71fc-a526-8a57df0c9ae1)
- Each worker produces an uncommitted `.amp/<batch>-review.md` ledger for explicit transfer and integrated review.

## Next Action

- Launch high-mode workers, inspect and integrate each batch, and commit logical batches locally.
- Ask Oracle to review integrated consistency, readability, and fidelity, prioritizing substantial rewrites and uncertain claims. Address findings, run check/test/build/content guard/timestamp checks, and inspect representative rendered routes.

## Open Questions

- Source gaps and ambiguities will be recorded from worker evidence; missing evidence does not authorize invented explanation.
