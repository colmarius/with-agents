---
title: "Every Repo Is a Software Factory Now | Don Syme, GitHub"
resourceId: 69
date: "2026-08-18"
---

AI Native Dev interviews Don Syme, GitHub Principal Researcher, about “continuous AI”: recurring, shared agent work that operates beside deterministic CI/CD. The discussion covers GitHub Agentic Workflows, bounded repository context, permissions, cross-repository limits, cost and model evaluation, and quality gates before human review.

This is a product-adjacent practitioner interview, not an independent assessment of GitHub’s implementation. Syme works on the system he describes. Claims about guardrails, pull-request merge rates, and operational readiness are first-party reports without a threat model, evaluation dataset, or comparative measurements in the recording. GitHub Agentic Workflows was in public preview when the episode was published, so its described behavior is not a durable product contract.

### Keep Subjective Automation Beside Deterministic Delivery

- **Continuous AI moves agent work from one-off chat to shared operations**: Syme defines it as recurring, context-aware automation for subjective work such as documentation, issue triage, performance research, and bug fixing. A useful result must become an operational process that keeps responding to repository change, not remain a successful demonstration ([00:03:25–00:08:32](https://www.youtube.com/watch?v=quVzmAb9oqs&t=205s)).
- **Do not turn CI/CD itself into a subjective agent loop**: CI/CD should continue establishing deterministic invariants such as a passing build and a correct deployment. Continuous AI is a separate lane that teams can adopt and scale independently while using CI/CD as a quality gate ([00:09:26–00:12:45](https://www.youtube.com/watch?v=quVzmAb9oqs&t=566s)).
- **Bounded context is the first reliability control**: Syme recommends constraining each run to explicit inputs, a repository context, and narrow outcomes such as one issue or pull request, with a firewall around the run. His operational test is whether the automation can safely run while maintainers are asleep ([00:09:26–00:10:16](https://www.youtube.com/watch?v=quVzmAb9oqs&t=566s), [00:18:42–00:21:21](https://www.youtube.com/watch?v=quVzmAb9oqs&t=1122s)).

### Treat the Repository as a Boundary, Not a Universal Answer

- **GitHub Agentic Workflows applies the model through GitHub Actions**: Syme describes a public-preview system that runs a choice of coding-agent CLIs and models under Actions, with explicit controls around credentials, inputs, and effects. For example, workflows ignore issues from untrusted contributors unless maintainers opt in to processing them ([00:18:42–00:22:12](https://www.youtube.com/watch?v=quVzmAb9oqs&t=1122s)).
- **The repository is also an organizational permission boundary**: CI/CD succeeds partly because organizations let repository maintainers consume bounded compute, network, and storage without requesting infrastructure for every automation. Syme expects continuous AI to use a similar delegation model, supplemented by policy, accounting, and cost visibility ([00:25:30–00:31:34](https://www.youtube.com/watch?v=quVzmAb9oqs&t=1530s)).
- **Repo-local execution works best when the relevant data is already there**: Shared skills and MCP services can supply reusable behavior or external context. A side repository can own authorization for automation targeting another codebase, while specialized systems may remain outside GitHub and use a workflow only to report findings back into the development ledger ([00:37:32–00:44:36](https://www.youtube.com/watch?v=quVzmAb9oqs&t=2252s)).
- **Monorepos and cross-repository systems weaken the boundary**: Consolidating code helps current agents find context, but a large monorepo may be too broad for clean access, security, and ownership decisions. Syme says GitHub still needs better multi-repository and organization-level context; the interview does not present a finished design ([00:32:26–00:35:49](https://www.youtube.com/watch?v=quVzmAb9oqs&t=1946s)).

### Make Cost, Evaluation, and Human Attention Explicit

- **More workflows create more maintenance and attention costs**: Syme contrasts an experimental “agent zoo” with his preference for one broader repository assistant that can label, research, and sometimes fix issues. Scheduled batching, adjustable cadence, model delegation, and per-run cost history make the operational load easier to see and control ([00:45:32–00:50:32](https://www.youtube.com/watch?v=quVzmAb9oqs&t=2732s)).
- **Evaluate models concurrently against the same work**: Because a later model can discover another model’s issue or pull-request result in the shared ledger, GitHub’s described “exam testing” starts multiple models at the same time and accepts only one result. The episode explains the contamination risk but reports no resulting scores or selection data ([00:50:32–00:51:23](https://www.youtube.com/watch?v=quVzmAb9oqs&t=3032s)).
- **Human approval remains the product’s code-change boundary**: Syme says agent-created pull requests are not automatically merged, and GitHub limits workflows that try to modify their own automation. A workflow may make constrained follow-up pushes to its own pull-request branch, but a person still approves changes to the codebase ([00:53:56–00:58:19](https://www.youtube.com/watch?v=quVzmAb9oqs&t=3236s)).
- **Quality gates should protect reviewer attention**: The target is not more pull requests but reviewable proposals that explain motivation, risk, tradeoffs, and evidence. Syme’s CI-performance example compares before-and-after timings so a reviewer can verify the claimed improvement; low-quality or unsupported output should be discarded before it reaches a person ([00:59:55–01:02:29](https://www.youtube.com/watch?v=quVzmAb9oqs&t=3595s)).

[Watch the full interview on YouTube](https://www.youtube.com/watch?v=quVzmAb9oqs).
