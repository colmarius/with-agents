---
title: "Malleable Evals: Why Are We Evaluating Adaptive Systems with Static Tests? — Vincent Koc, OpenClaw"
videoId: 4VhbYlfC7Gs
sourceUrl: "https://www.youtube.com/watch?v=4VhbYlfC7Gs"
publishedAt: "2026-05-12T16:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Vincent Koc, identified with OpenClaw in the source title, says he works on evaluation research at Comet and is an OpenClaw core contributor. He argues that static benchmarks and offline test suites cannot by themselves track agent applications whose harnesses, skills, users, and operating conditions adapt after deployment ([00:01:05]-[00:04:02], [00:08:27]-[00:11:04]).

Koc proposes treating evaluations as changing software or agents: derive tests from traces, monitor outcomes continuously, return telemetry to the harness, and optimize toward an intended end state. He presents this as a direction rather than a demonstrated system; the Comet example he planned to show was not finished ([00:10:11]-[00:14:04]).

## Key Ideas

- Koc contrasts software unit tests, regression suites, CI/CD, observability, and chaos engineering with AI practice that often stops at handcrafted benchmarks and offline evaluation ([00:02:09]-[00:04:02]).
- He says agent applications and their harnesses become malleable as software changes quickly and users add skills, making fixed benchmarks progressively less representative ([00:04:02]-[00:05:01]).
- Koc describes a progression from prompt engineering through context engineering to intent engineering: tool-level tests make components inspectable, but personalized, self-adapting harness behavior makes system-level outcomes harder to compare ([00:05:01]-[00:09:15]).
- Instead of matching one prescribed answer, he suggests evaluating ambiguity, personality, and organizational intent through rubrics and test suites curated from production traces ([00:09:15]-[00:11:04]).
- He proposes always-on evaluation with telemetry about failures and cost returned to the harness so it can detect changes and sometimes correct itself ([00:11:04]-[00:12:00]).
- Koc reframes an evaluation as an intended end state or reward signal rather than only a starting data set, with agents maintaining the changing cases outside a mostly stable core ([00:12:00]-[00:14:04]).

## Practical Implications

- Keep deterministic tests for known invariants, but add trace-based review and change detection for user behavior and agent paths that static fixtures no longer represent ([00:02:09]-[00:05:01], [00:10:11]-[00:11:04]).
- Version adaptive test suites and the traces or rubrics that produced them so a changing evaluation does not erase comparability with earlier results ([00:10:11]-[00:11:04], [00:13:02]-[00:14:04]).
- Feed failures, cost, and other telemetry into an agent only behind explicit conditions and observable correction steps ([00:11:04]-[00:12:00]).
- Separate a stable acceptance boundary from exploratory, agent-maintained cases, then review proposed changes to either boundary as software changes ([00:12:00]-[00:14:04]).

## Questions and Tensions

- Koc says the intended Comet demonstration was unfinished, so the talk does not show whether trace-curated suites or self-correction improve reliability in practice ([00:14:04]).
- The proposed feedback loop does not specify who validates generated rubrics, detects evaluator drift, or prevents a harness and its evaluation from adapting to each other's mistakes ([00:10:11]-[00:12:00]).
- Always-on analysis of production traces raises privacy, retention, sampling, and cost questions that the talk does not address ([00:10:11]-[00:12:00]).
- The mostly stable 80% and changing 20% are illustrative proportions, not measured findings, and may vary substantially by application ([00:13:02]-[00:14:04]).
- Optimizing toward an end state still requires a trustworthy reward or acceptance definition; the barbecue example illustrates the mechanism but not how to specify ambiguous organizational outcomes safely ([00:12:00]-[00:13:02]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=4VhbYlfC7Gs)
- [transcript.md](./transcript.md)
