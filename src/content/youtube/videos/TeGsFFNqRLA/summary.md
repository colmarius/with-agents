---
title: "Fast Models Need Slow Developers — Sarah Chieng, Cerebras"
videoId: TeGsFFNqRLA
sourceUrl: "https://www.youtube.com/watch?v=TeGsFFNqRLA"
publishedAt: "2026-05-22T18:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Sarah Chieng, head of developer experience at Cerebras, argues that faster code generation can amplify poor development habits as readily as it accelerates useful work. She presents Codex Spark as a Cerebras and OpenAI model that generates 1,200 tokens per second and contrasts it with the 40-to-60-token-per-second range she assigns to other model families ([00:00:16]-[00:02:10]).

Chieng's playbook pairs slower planning with fast execution, adds verification throughout the loop, keeps developers close enough to steer and understand changes, and externalizes state into bounded sessions. She presents those practices as responses to output arriving faster than a person can review it, not as evidence that faster inference makes generated code correct ([00:07:18]-[00:16:38]).

## Key Ideas

- Chieng says simultaneous improvements in hardware, disaggregated prefill and decode, model architecture, and inference optimization are increasing model speed across the stack ([00:02:57]-[00:06:31]).
- She proposes choosing models along speed as well as intelligence and cost, using a larger model for planning or long-horizon work and a faster model for bounded execution ([00:08:12]-[00:09:13]).
- Chieng recommends capturing successful trajectories as reusable skills so a stronger model can establish a workflow that a faster model repeats ([00:09:13]-[00:10:14]).
- She argues that fast inference reduces the waiting cost of repeated test, lint, pre-commit, diff-review, and browser-QA steps enough to place them throughout a workflow ([00:10:14]).
- For subjective work, Chieng proposes generating many alternatives and cherry-picking among them, describing variety plus human selection as a way to improve the chosen result ([00:10:14]-[00:11:16]).
- She reframes a fast coding model as a real-time pair programmer that a developer questions, constrains, and steers through small diffs rather than leaving many unattended sessions to generate unreviewed code ([00:12:07]-[00:13:55]).
- Chieng recommends bounded goals and an external four-file memory system—`agents.md`, `plan.md`, `progress.md`, and `verify.md`—so a new session can recover the plan, completed work, next step, and checks ([00:14:55]-[00:16:38]).

## Practical Implications

- Match model speed to task shape: reserve slower or stronger models for planning and use fast execution only behind a bounded checklist and visible verification criteria ([00:08:12]-[00:10:14], [00:16:38]).
- Run checks after small tasks instead of postponing all validation until the final diff, while keeping the developer responsible for interpreting failures and reviewing behavior ([00:10:14]-[00:13:55]).
- Limit concurrent sessions, constrain what each may change, and keep a human in the decision path when output arrives faster than it can be understood ([00:12:07]-[00:13:55]).
- Externalize plan, progress, and verification state before context compaction so later sessions can resume from repository artifacts rather than reconstructing intent from memory ([00:14:55]-[00:16:38]).

## Questions and Tensions

- The talk states speed comparisons and a 1,200-token-per-second figure without describing benchmark prompts, output lengths, hardware configuration, latency distribution, or result quality ([00:00:16]-[00:02:57]).
- Chieng calls validation “basically free” in inference-time terms, but the talk does not measure test runtime, browser infrastructure, check authoring, review effort, or whether generated checks detect the relevant defects ([00:10:14]).
- Producing dozens of alternatives may increase variety while transferring the bottleneck to human comparison and leaving repository integration or conflicting changes unaddressed ([00:10:14]-[00:11:16]).
- The four-file memory pattern is presented as a high-level example; the talk does not test its behavior under conflicting sessions, stale progress, failed verification, or concurrent edits ([00:14:55]-[00:16:38]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=TeGsFFNqRLA)
- [transcript.md](./transcript.md)
