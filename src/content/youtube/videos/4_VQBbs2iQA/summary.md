---
title: "How Building with AI Can Double the Throughput of Your Engineering Team — Brian Scanlan, Intercom"
videoId: 4_VQBbs2iQA
sourceUrl: "https://www.youtube.com/watch?v=4_VQBbs2iQA"
publishedAt: "2026-05-15T13:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Brian Scanlan of Intercom, as identified by the source title and his introduction, describes the company's effort to double engineering throughput. As a senior principal engineer on Intercom's platform group, he frames the effort as an operating-model change spanning executive expectations, a dedicated enablement team, one coding-agent platform, organization-specific guidance, reusable skills, telemetry, and automated review—not merely faster code completion ([00:02:56]-[00:07:41], [00:15:18]-[00:18:07]).

Scanlan reports that Intercom doubled pull-request throughput in less than a year after going all-in on Claude Code, while acknowledging both a concurrent jump in model capability and code review as the next bottleneck. The talk offers internal dashboard observations and examples rather than a controlled attribution of the reported gain ([00:03:57]-[00:05:01], [00:15:18]-[00:16:06]).

## Key Ideas

- Intercom set a goal to double engineering throughput without doubling team size and chose code changes per R&D person as its primary measure, even though Scanlan acknowledges the weaknesses of any productivity metric once it becomes a target ([00:03:57]-[00:05:01]).
- Scanlan says AI adoption became an explicit job expectation across product, design, and engineering, reinforced through repeated leadership messages, celebration, hackathons, immersion days, and a full-time 2x team ([00:05:51]-[00:07:41]).
- Intercom standardized on Claude Code to gain the compounding benefits of one platform and set a goal for it to act like a senior engineer across technical work, while relying on existing controls, permissions, and audits ([00:07:41]-[00:08:45]).
- The company teaches the agent its Rails architecture, React patterns, testing standards, and security rules, then updates guidance when the agent fails or takes a wrong path ([00:08:45]-[00:10:49]).
- Scanlan favors small, durable, testable skills over custom orchestration and says Intercom uses historical code, incident, and work data to backtest and continuously improve those skills ([00:11:38]-[00:13:28]).
- He recommends giving agents problems rather than prescribing every skill; in one example, Claude Code selected an internal data-breach skill and analyzed accidentally published Snowflake metadata without him naming that procedure ([00:13:28]-[00:15:18]).
- Scanlan reports doubled pull-request throughput after a December platform decision and January rollout, alongside a 17.6% automatic-approval rate produced through backtesting, human labels, confidence thresholds, and deliberately simple pull requests ([00:15:18]-[00:17:05]).
- Intercom records skill telemetry in Honeycomb and session transcripts in S3, and Scanlan describes an iteratively developed flaky-test skill as an example of turning repeated agent work into reusable organizational capability ([00:17:05]-[00:20:00]).

## Practical Implications

- Treat organization-wide coding-agent adoption as staffed change management with explicit expectations, training, support, and feedback—not a license purchase ([00:05:51]-[00:07:41]).
- If standardizing on one platform, pair that choice with repository conventions, security rules, permissions, audit controls, and a process for correcting guidance after failures ([00:07:41]-[00:10:49]).
- Build reusable skills from observed work and test them against historical examples rather than freezing one successful prompt as policy ([00:11:38]-[00:13:28], [00:18:58]-[00:20:00]).
- Separate throughput, review capacity, defect handling, and code quality measurements so a rise in pull-request volume does not stand in for the whole engineering system ([00:15:18]-[00:18:58]).
- Apply confidence thresholds and human-labeled backtests before automating approval, and constrain eligible changes rather than generalizing from low-risk pull requests ([00:16:06]-[00:17:05]).

## Questions and Tensions

- Code changes per R&D person and pull-request throughput are activity measures; the talk does not provide the metric definitions, team-size adjustments, comparison group, or customer-outcome data needed to establish a productivity doubling ([00:03:57]-[00:05:01], [00:15:18]-[00:16:06]).
- Scanlan says the effort coincided with a major model-capability shift, so the relative contributions of organizational mandates, Claude Code standardization, internal skills, and stronger models remain unresolved ([00:05:01], [00:15:18]-[00:16:06]).
- Intercom's automatic approvals use backtesting and human labels, but the talk does not report false-approval rates, sample size, severity distribution, rollback behavior, or the conditions behind the claimed risk reduction ([00:16:06]-[00:17:05]).
- Broad agent access, automatic security-incident analysis, and centralized session capture create governance concerns; Scanlan names controls, audits, and certifications without detailing least-privilege design, transcript retention, sensitive-data handling, or incident escalation ([00:07:41]-[00:08:45], [00:13:28]-[00:14:23], [00:17:05]-[00:18:07]).
- Scanlan reports faster defect closure and improving external code-quality metrics, but does not define those measures or show whether incoming defect rate, severity, or long-term maintainability changed ([00:18:07]-[00:18:58]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=4_VQBbs2iQA)
- [transcript.md](./transcript.md)
