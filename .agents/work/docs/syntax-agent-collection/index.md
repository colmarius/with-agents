# Syntax practical agent workflows collection

Status: completed
Category: docs
Updated: 2026-09-15

## Why

Publish the six approved Syntax videos as a selected coding-agent collection, reusing the existing Zed summary. The user requested high-mode orbs for transcripts and summaries, sequential execution with retries, Oracle review, and integration in the owning thread.

## Summary

Implemented Syntax's channel uploads playlist UUyU5wkjgQYGRB0hIHMwm2Sg with English transcripts and summaries, multi-speaker attribution, and six selected IDs only. Existing resource 94 now owns the consolidated collection, preserving the Zed summary URL and transcript. The earlier weekly resource remains standalone and unchanged. No push, deployment, or remote playlist mutation.

Selected IDs: GsLyhrxaMIo (existing Zed), S916GQVhRb8 (remote agents), cWBVMEHPgQU (memory), 1FqiNnOsrgM (MCP explained), CCaUnet8SB4 (MCP servers), 6tZ_R4m_Oc4 (review). Default display order is descending publication date after sync.

Remote worker https://ampcode.com/threads/T-01a0a6ab-7283-7358-aec4-8ca1282f414e completed; transcript and summary integrated via file transfer. Oracle cleared it. Oracle found one ambiguous speaker attribution and two incomplete qualification ranges in Zed; parent applied all three corrections.

Memory worker https://ampcode.com/threads/T-01a0a6af-0f3e-758b-a1dc-b6ca259a9df5 exhausted initial plus 30/60/120-second retries with inaccessible captions and no writes. After it stopped, parent capture succeeded (English auto-generated, 954 seconds, 17 blocks); parent uploaded the transcript to that worker to finish summary only. The worker completed; its summary was downloaded and compared with the transcript here. Worker Oracle reported no findings. No simultaneous captures.

Final batch worker https://ampcode.com/threads/T-01a0a6ba-089c-716c-8e84-75b46d58b2a0 completed all three review/MCP pairs sequentially, with no retries. Parent integrated all six files through file transfer. Final Oracle review cleared the prose and integration after three MCP citation-endpoint corrections, which were applied. The overview is reviewed. Parent also extended one code-review citation to include deterministic checking.

Authoritative sync: 1,437 additions, all available; all six selected IDs are members. Curation is user-approved and sorted by publication date: Zed (2026-08-12), review (2026-07-08), remote (2026-03-16), memory (2025-12-13), MCP servers (2025-07-16), MCP explained (2025-07-01). Public-impact decision: fix Zed ownership/navigation into collection while preserving its URL and evidence. Keep the previously added weekly resource standalone; it is an unselected upload. No other selected-ID public references exist. No remote playlist mutation.

Full-manifest exact-ID public-impact search found only the selected summaries and weekly roundup. The guard recognizes standalone reuse only for selected videos, so two path-specific exceptions retain the existing transcript-backed weekly summary and its canonical resource without expanding the curated collection or duplicating source files.

Verification: lint required no fixes; Astro check reported 0 errors/warnings/hints; build produced 369 pages; the rebuilt-corpus test run passed all 147 tests with 0 skipped. Timestamp checks passed 316 files; content guard passed; source-library audit passed. Status reports 6 captured, 6 reviewed, 0 pending, and current overview. Source-only import and build-marker searches both returned no matches. Two pre-existing duplicate-manifest notices remain unchanged. Initial tests had one catalog expectation requiring the new slug and two stale-build failures; all pass after the update and rebuild.

Browser: verified the resource card at `/resources/coding-with-agents/workflows#resource-94`, all six summary routes, six-entry navigation, and previous-item navigation from MCP Explained to How to Build MCP Servers. No runtime errors or horizontal overflow at 390px. Inspected desktop and narrow Chromium captures under `.amp/in/artifacts/`; these are not touch-device tests. Portal: https://t-03gvieie9slcfhg6khhwzqt2c-p20089.onamp.dev/.

## Artifacts

- Research: none
- PRD: none
- Plan: none
- Progress: none
- Decisions: none
- Handoffs: none

## Next Action

- None.

## Open Questions

- None.
