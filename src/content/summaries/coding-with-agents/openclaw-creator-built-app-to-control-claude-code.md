---
title: "OpenClaw Creator built App to Control Claude Code"
resourceId: 31
collection: "the-west-coast-builders"
date: "2025-07-02"
---

Developer Peter Steinberger joins host Mayank Gupta to discuss his Claude Code workflow and demonstrate VibeTunnel. The recording does not demonstrate or discuss OpenClaw despite the current video title.

### Key Points Covered

- **Detailed voice prompts reduce ambiguity**: Steinberger uses Wispr Flow to dictate long prompts. He repeats goals and constraints from several angles so Claude Code has more context for a one-shot implementation [00:01:52]-[00:03:53].
- **Concurrent agents still need boundaries and review**: Steinberger runs two to four agents in one shared directory, deliberately choosing low-overlap areas. He then reviews diffs in Tower, tests, commits, or reverts. This personal workflow does not establish that shared-directory concurrency is generally safe [00:03:53]-[00:06:55].
- **The throughput claim is a personal report**: Steinberger says he built a live analytics site with Supabase and Postgres in about four hours while doing other work. But the recording supplies no benchmark, preserved comparison, or independent quality assessment [00:08:39]-[00:11:40].
- **CLI constraints can sharpen focus**: He values Claude Code's text-only interface while keeping an IDE nearby for reading files and diffs when needed [00:12:42]-[00:13:47].
- **External research remains part of implementation**: When an agent struggled with a virtual keyboard, Steinberger researched newer browser APIs and found detailed documentation. He passed its URL back to Claude Code rather than expecting the model to solve an unfamiliar domain unaided [00:13:47]-[00:14:50].
- **VibeTunnel preserves a local workflow**: The project began from wanting to check and steer long-running local agents from a phone without moving Mac development into a cloud pull-request workflow [00:23:38]-[00:25:33].
- **The beta demonstration exposes unfinished behavior**: VibeTunnel mirrors terminals and accepts remote input. But Steinberger explicitly shows broken scrolling and describes monitoring features that are not finished yet [00:25:33]-[00:28:48].

Full video: <https://www.youtube.com/watch?v=fu7th5HiADo>
