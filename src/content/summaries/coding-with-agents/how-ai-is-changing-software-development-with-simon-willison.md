---
title: "How AI is changing software development with Simon Willison"
resourceId: 75
date: "2026-08-14"
---

Talking Postgres host Claire Giordano interviews independent open-source developer Simon Willison about an agent-assisted workflow in which implementation can become dramatically faster while production responsibility stays with the engineer. Willison's shipping threshold is whether he understands a change well enough to explain it to someone else ([00:22:51]-[00:23:22]). His speed, token-cost, model-capability, security, and labor observations remain practitioner reports and forecasts rather than controlled findings ([00:04:00]-[00:12:09], [00:34:50]-[00:38:42], [01:02:05]-[01:04:07], [01:13:32]-[01:14:30]).

### Key Points Covered

- **Domain experience shapes effective delegation**: Willison's two-paragraph research-spike prompt names the existing project, target API, databases, repository setup, test framework, and development loop. He attributes the result to accumulated knowledge of both the domain and agent behavior, not to a general promise that short prompts reliably produce production software ([00:07:15]-[00:10:59]).
- **Tests provide feedback, not automatic assurance**: Red-green TDD makes an agent exercise the code it writes and a shared pytest fixture runs behavior across three database engines. Willison also says he had hardly reviewed the generated tests, so the reported hundred-test suite was evidence for a research spike rather than a production-quality conclusion ([00:08:57]-[00:10:59]).
- **Bounded parallel work can recover neglected maintenance**: He delegates diagnosis of small irritants and triage of open issues, then reviews small changes or uses the resulting momentum for larger work. The agent can hold task context across interruptions, but consequential work becomes a closer collaboration rather than an unattended side quest ([00:15:56]-[00:22:51]).
- **Explanation is the production gate**: Willison accepts code only when he can account for how it works. For large generated changes, he uses an intentionally aggressive nitpicking review to force active engagement with nearly every line instead of trusting a passive read-through ([00:22:51]-[00:23:22], [00:30:49]-[00:33:28]).
- **A working branch is not a maintained product**: A claimed 39% Datasette optimization remains unmerged because passing tests and a promising benchmark do not remove the time needed to understand, test, document, and maintain the change. The episode supplies no benchmark design or independent measurement for that figure ([00:34:02]-[00:37:50]).
- **Cheap features increase the need for product discipline**: When implementation no longer filters ideas by cost, software can accumulate unrelated additions like the Winchester Mystery House. Willison recommends preserving conceptual integrity, treating generated code as disposable, and keeping experiments in an isolated release valve rather than merging every successful prototype ([00:45:03]-[00:51:57]).
- **Management and QA skills transfer directly**: Breaking work into clear goals, communicating needed context, and defining testable completion criteria resemble engineering management and product work. Willison argues that specialist QA skills become more valuable when generation is cheap but humans remain responsible for finding edge cases ([01:00:56]-[01:06:07]).
- **Writing and credibility still require human ownership**: He treats writing as thinking, rejects forwarding generated prose that the sender cannot defend, and says the human in the loop must protect readers and coworkers from model mistakes. Personal credibility depends on checking claims before sharing them ([00:23:42]-[00:28:25], [01:07:53]-[01:10:07], [01:21:49]-[01:22:48]).
- **Open-source review systems face a volume problem**: Cheaper issue reports and pull requests can make each contribution individually useful while overwhelming maintainers in aggregate. The episode describes policy experiments and security-report pressure, but does not establish a generally successful governance pattern or quantify comparative defect outcomes ([01:09:27]-[01:14:30]).
- **Prefer the simplest workflow that works**: Because many elaborate agent processes can still produce functioning software, success alone is weak evidence that the process caused the result. Willison recommends starting simply and adding technique only in response to an observed failure ([01:23:57]-[01:25:33]).

Full episode and show notes: <https://talkingpostgres.com/episodes/how-ai-is-changing-software-development-with-simon-willison>

Official publisher transcript: <https://talkingpostgres.com/episodes/how-ai-is-changing-software-development-with-simon-willison/transcript>
