---
title: "OpenClaw Creator built App to Control Claude Code"
videoId: fu7th5HiADo
sourceUrl: "https://www.youtube.com/watch?v=fu7th5HiADo"
publishedAt: "2025-07-02T04:34:04Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Mayank Gupta hosts Peter Steinberger, a developer and former PSPDFKit founder, for a discussion of Steinberger's coding-agent workflow and a demonstration of VibeTunnel. Steinberger presents a highly personal, intensive way of working rather than a controlled productivity comparison: detailed voice prompts, several concurrent local agents, frequent review and commits, and willingness to revert failed work.

The concrete product example is VibeTunnel, which mirrors local terminal sessions to a phone so Steinberger can monitor and steer long-running CLI agents without moving the development environment into a cloud pull-request workflow.

## Key Ideas

- Steinberger says short, underspecified prompts often produce poor results. He uses voice transcription to describe the desired behavior from several angles, then reviews the result rather than treating one-shot generation as reliable ([00:01:52]-[00:03:53]).
- Steinberger runs two to four agents on different parts of one working directory, selects areas that are unlikely to interfere, inspects diffs in Tower, tests changes, and commits or reverts them. This is his reported workflow, not evidence that shared-directory concurrency is generally safe ([00:03:53]-[00:06:55]).
- Steinberger describes agent leverage as changing his work toward choosing known technologies, supplying structure, and judging output. His four-hour analytics-site example is a first-person report without a preserved comparison, benchmark, or independent quality assessment ([00:08:39]-[00:11:40]).
- Steinberger values the constrained text interface of CLI agents, but still keeps an IDE and external documentation available when the model reaches a domain it does not understand. In his virtual-keyboard example, research into newer browser APIs precedes the implementation prompt ([00:12:42]-[00:14:50]).
- Steinberger distinguishes generated prose from unreviewed “slop” by the human work spent choosing the message, iterating, and compressing it. He also describes open-source scripts and articles as durable documentation for himself and others ([00:14:50]-[00:18:37]).
- Steinberger and collaborators built VibeTunnel to observe and steer local terminal agents from a phone while preserving the developer's existing Mac environment. The demonstration shows terminal mirroring and remote input, while some monitoring behavior and scrolling remain unfinished or broken in the shown beta ([00:20:42]-[00:28:48]).

## Practical Implications

- Treat prompt detail as design communication: state the target behavior, constraints, examples, and reasons that help distinguish one acceptable implementation from another.
- Bound concurrent agents by likely file and responsibility overlap, preserve small reversible commits, and inspect diffs before accepting generated work.
- Keep research and environment selection in the workflow. A model's ability to implement a known API does not remove the need to identify the right API or verify its behavior.
- Remote-agent interfaces should preserve the feedback and control needed for the task rather than forcing every individual developer into a team-oriented pull-request workflow.

## Questions and Tensions

- Steinberger's throughput and work schedule are unusually intensive personal reports. The recording does not measure defect rates, maintenance cost, or whether the workflow transfers to teams.
- Multiple agents sharing one directory can still collide despite informal task separation; the discussion supplies review and reversion habits, not isolation guarantees.
- The claim that adopting agents determines employment outcomes is advocacy, not labor-market evidence established by the recording.
- VibeTunnel's local-control model avoids some cloud-environment mismatch, but remote terminal access introduces authentication, authorization, and security questions that this excerpt does not evaluate.

## Source

- [YouTube video](https://www.youtube.com/watch?v=fu7th5HiADo)
- [transcript.md](./transcript.md)
