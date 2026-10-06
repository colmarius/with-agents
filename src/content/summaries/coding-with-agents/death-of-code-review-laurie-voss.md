---
title: "The Death of the Code Review: What the Data Actually Says — Laurie Voss, Arize AI"
resourceId: 169
date: "2026-09-30"
---

Laurie Voss, head of developer relations at Arize AI, argues that faster code generation makes verification—not writing—the limiting step. His recommendation is to invest human effort in a **review harness**: the tests, review agents, rules, feedback, and runtime visibility used to judge changes. Despite the title and his closing instruction to “stop reviewing PRs,” he repeatedly preserves a role for human judgment where automated checks lack context or the consequences of failure are large.

*Based on the video's English auto-generated captions. Research figures, vendor results, and project anecdotes below are Voss's account of those sources, not an independent verification of the underlying studies or implementations.*

### More Code Does Not Mean Proportionally More Delivery

- **Review capacity does not grow automatically with generation capacity.** Voss cites a study of over 100,000 GitHub developers in which autonomous-agent adoption coincided with 741% more code but only 30% more software shipped. He attributes the gap to downstream human checkpoints, particularly review. His practical point is that increasing output upstream can lengthen the queue downstream; these reported figures are not a forecast for an individual team [00:49–02:41](https://www.youtube.com/watch?v=_mi3alkqy4s&t=49s).
- **“Review harder” runs into attention limits.** Drawing on an older Cisco study, he says defect detection deteriorates with large review batches and high reading rates. Making developers spend all day reviewing agent output therefore risks both missed defects and burnout. He uses this to motivate changing the review system rather than simply assigning more code to each reviewer [02:41–04:47](https://www.youtube.com/watch?v=_mi3alkqy4s&t=161s).

### Passing Tests Is Narrower Than Being Ready to Merge

- **A test suite checks only the behavior it covers.** Voss describes a METR study in which maintainers accepted only about half of agent patches that had already passed benchmark grading. Concerns included code quality and effects outside the tests. He notes that agents had no opportunity to revise after feedback: this limits the comparison with normal contribution workflows, but does not establish that unattended first-pass output is safe. His broader distinction is between passing existing tests and satisfying maintainers' expectations about scope, regressions, and maintainability [05:44–08:56](https://www.youtube.com/watch?v=_mi3alkqy4s&t=344s).
- **Explicit merge criteria could improve both review and training.** Voss discusses benchmarks that try to make those expectations machine-checkable. His proposed mechanism is that a cheap, reliable measure of acceptable changes could become a training signal, much as compilers and tests already provide feedback on generated code. This is a prediction about what better evaluation could enable; he also says no current rubric captures everything humans consider when deciding to merge [08:56–10:51](https://www.youtube.com/watch?v=_mi3alkqy4s&t=536s).

### Automated Review Still Needs Evidence and Oversight

- **False positives can make a reviewer useless even when it finds real bugs.** Voss describes repeated review passes and agreement filtering as ways to reduce noisy findings that developers would otherwise learn to ignore. He contrasts this with newer tool-using reviewers that investigate a diff, gather context, and sometimes generate a repair for human approval. Acceptance of suggestions provides feedback for improving these systems, but humans approving the reviews remain part of the workflow [10:51–14:52](https://www.youtube.com/watch?v=_mi3alkqy4s&t=651s).
- **Removing per-change approval moves review work into the harness.** In his account of autonomous compiler development, humans still built the tests and feedback systems. In his account of OpenAI's agent-written product, agents could run the application, inspect its UI and logs, and request further agent reviews; recurring cleanup work eventually became automated too. These examples depend on what the system can observe. Voss also uses Bun's reported Rust migration to illustrate a limit: passing interface tests does not establish the safety of unchecked memory operations inside the implementation [14:52–18:03](https://www.youtube.com/watch?v=_mi3alkqy4s&t=892s), [18:03–19:02](https://www.youtube.com/watch?v=_mi3alkqy4s&t=1083s).
- **Keep human checkpoints where the automated reviewer lacks context or can be manipulated.** A dependency used by an external consumer or an undocumented scheduled job may be invisible to the test suite. Voss also warns that untrusted code and commit messages can influence a review agent through prompt injection—instructions embedded in material the agent should be evaluating, not obeying. He therefore retains human responsibility for hard-to-check correctness, large potential damage, and assessing the review system itself [19:02–22:02](https://www.youtube.com/watch?v=_mi3alkqy4s&t=1142s).

### Shift Effort Toward the System That Grants Trust

- **Codify team knowledge and watch what ships.** Voss recommends putting definitions of acceptable changes, company context, and domain knowledge into reviewers, rules, and evaluations. He also argues that production observation becomes indispensable when pre-merge review is automated: actual execution can reveal failures the earlier checks never covered. His closing advice is a direction for allocating engineering effort, not evidence that every team can safely eliminate manual PR review or achieve a particular speedup [22:02–24:11](https://www.youtube.com/watch?v=_mi3alkqy4s&t=1322s).

[Watch the full talk on YouTube](https://www.youtube.com/watch?v=_mi3alkqy4s).
