---
title: "Shipped 23 Amp threads live"
resourceId: 91
date: "2026-07-29"
---

Quinn Slack live-streams a first-person Amp workflow in which many isolated threads hold small fixes, product experiments, and stages of larger migrations. The durable mechanism is not the number in the title: bounded threads can carry their own change and evidence, with review depth adjusted to risk; for staged work, a completed thread can message a designated successor to rebase and continue.

This is a vendor demonstration of its own product and team. It does not provide a controlled throughput comparison, an independent merge count, defect outcomes, or enough evidence to generalize Amp's direct-to-main practice to other teams.

### Key Points Covered

- **Parallel intake is useful only when review remains cheap enough**: Slack starts threads from product feedback, screenshots, and work noticed during other tasks, then scans diffs, questions surprising implementation choices, asks for Storybook states or videos, and checks relevant history before deciding whether to ship ([00:05:24]-[00:17:38]).
- **Review depth changes with risk rather than disappearing**: He asks an Oracle for security feedback on account switching and describes read-only, temporary production access, but allows simpler, reversible product changes to proceed with much lighter review. These are his judgments during the stream, not a validated risk policy ([00:30:30]-[00:32:39], [00:44:03]-[00:48:39]).
- **A completed thread can trigger the next integration stage**: For an attachment-authentication migration, Slack tells one thread to ship and then message a designated follow-up thread to rebase on `origin/main` and identify the remaining endpoint work. Elsewhere, he asks a thread to rebase and reconcile its change with another in-progress fast-mode thread ([00:58:47]-[01:00:37], [01:30:20]-[01:31:23]).
- **Evidence makes asynchronous review practical, but still needs inspection**: A visual fix appears correct until manual hover testing exposes a clipped focus ring; Slack prompts another correction and retests the behavior. The example supports reviewable artifacts and direct checks, not unattended correctness ([01:07:02]-[01:13:08]).
- **Thread history can preserve intent for later reviewers**: Slack uses thread URLs attached to commits to recover why an earlier change was made, and sends a shared multiplayer thread to teammates for design feedback and possible edits. Both mechanisms keep review near the change, although the recording does not show a completed team decision or conflict-resolution outcome ([01:08:02]-[01:08:56], [01:14:54]-[01:17:51]).
- **Shipping is configurable, while Amp's own default bypasses pull requests**: Slack says Amp's Ship action sends changes to `origin/main` by default, but projects can push a branch or define a custom workflow; he separately describes comprehensive CI, staging, and a roughly 10–12 minute path to production. The stream does not audit those controls or establish that direct-to-main improves quality ([00:12:58], [00:56:39]-[00:57:41]).
- **The headline is spectacle rather than throughput evidence**: Near the end, Slack queries 22 archived threads in two hours and calls that “22 things merged,” then reports about $22 of model usage. The stream does not enumerate 23 shipped threads, distinguish attempts from unique delivered changes, or measure defects, rework, review time, or user value ([02:17:49]-[02:22:26]).

Full video: <https://www.youtube.com/watch?v=TVQofFkWkFc>
