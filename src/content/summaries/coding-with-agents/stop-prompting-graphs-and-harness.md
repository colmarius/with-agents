---
title: "Stop Prompting — Head of Claude Code Uses Opus 5.5 + Graphs + Harness"
resourceId: 219
date: "2026-10-22"
---

This upload presents an interview between Boris, speaking about his work at Anthropic, and Mark, speaking about AMD. They discuss moving from manually directed coding tasks to model-directed workflows, how teams experiment with agents, and where evaluation and security controls fit.

**Source caveat:** the uploader's title and description promote Opus 5.5 and graph-based persistent memory, but the captured transcript does not substantiate those claims or explain a graph-memory implementation. This summary follows the English auto-generated captions, not an independent audio review. The speakers' productivity figures, security comparisons, and predictions remain attributed claims, not verified results.

### Main takeaways

- **Let the model coordinate work when its capabilities justify it.** Boris contrasts deterministic workflows that call a model at predefined steps with giving the model a goal, a starting point, and tools to retrieve context and act. He describes a shift from loading context into every session toward skills and tools that the model can select as needed. This is his account of changing practice, not evidence that every workflow should abandon fixed steps. [02:38–04:34](https://www.youtube.com/watch?v=c4kYurm0hD8&t=158s)
- **Faster coding moves the bottleneck elsewhere.** Boris describes applying Claude to coding, then review, then other work such as generating go-to-market materials. He reports an eightfold increase in code output per engineer at Anthropic since the start of the year, but the interview does not define that metric or establish equivalent gains in quality or delivered business value. [05:25–07:55](https://www.youtube.com/watch?v=c4kYurm0hD8&t=325s)
- **More agents require a different coordination pattern.** The progression described is from one focused session to a person cycling through several parallel sessions, then agents delegating to other agents. Cloud execution lets work continue away from a local computer. Boris presents large migrations as candidates for this divide-and-conquer approach; the interview does not provide a reproducible migration procedure or comparative benchmark. [12:19–16:03](https://www.youtube.com/watch?v=c4kYurm0hD8&t=739s)
- **More computation helps only when it is used productively.** Boris treats higher effort settings and coordinated multi-agent work as ways to spend additional inference-time computation on a problem. He explicitly distinguishes that from merely spending more tokens without improving the result. [16:03–17:49](https://www.youtube.com/watch?v=c4kYurm0hD8&t=963s)
- **Find valuable uses before optimizing their cost.** Boris recommends giving people room to experiment, then reducing costs once a workflow proves useful. He still endorses cheaper models, lower effort settings, and evaluations to guide those choices. His point is that premature cost minimization can prevent a team from discovering worthwhile uses, not that token costs never matter. [17:49–19:49](https://www.youtube.com/watch?v=c4kYurm0hD8&t=1069s)
- **Match evaluation effort to the decision.** For workflows repeated thousands or millions of times, Boris recommends evaluations to check whether replacing a model improves results in the same harness. For some product-experience judgments, he argues that direct use and intuition can suffice because writing evaluations also has a cost. This is a distinction between repeatable measurement and experiential judgment, not a blanket replacement for testing. [22:18–24:02](https://www.youtube.com/watch?v=c4kYurm0hD8&t=1338s)
- **Repeated approval prompts can weaken human oversight.** Boris says users eventually stop reading commands and approve them reflexively. He describes routing permission decisions to a classifier and reports that Anthropic evaluated this approach through evaluations, red teaming, and penetration testing. He separately describes model training and runtime classifiers for prompt-injection resistance. The interview does not supply the evidence needed to validate his safety comparisons or justify unrestricted execution. [24:50–28:17](https://www.youtube.com/watch?v=c4kYurm0hD8&t=1490s)

### Limits and outlook

Boris predicts longer-running agents and less course correction over the following six months. He separately predicts larger deliverables, potentially including entire startups, by the end of the year in which the interview took place. These are forecasts made in the interview, not demonstrated capabilities or a current product contract. The upload date does not establish when the interview was recorded. [31:10–32:57](https://www.youtube.com/watch?v=c4kYurm0hD8&t=1870s)

Full video: [Stop Prompting — Head of Claude Code Uses Opus 5.5 + Graphs + Harness](https://www.youtube.com/watch?v=c4kYurm0hD8).
