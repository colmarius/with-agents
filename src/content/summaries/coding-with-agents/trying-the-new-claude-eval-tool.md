---
title: "Trying the new Claude Eval tool"
resourceId: 126
date: "2026-09-12"
---

Claude's `plugin eval` workflow aims to show what a plugin adds: it creates test cases, runs them with and without the plugin, and scores the results. [00:00–01:52](https://www.youtube.com/watch?v=K85b9r-4RvI&t=0s)

Hamel Husain and a co-host try it on a **plain-writing skill**, a set of instructions for clearer prose, including everyday wording and step-by-step explanations. [32:06–33:01](https://www.youtube.com/watch?v=K85b9r-4RvI&t=1926s)

### Main takeaways

- **Understand what a passing score means.** A grader is a check used to score a test run. Their report checks plain language, em dashes, and whether the skill ran. The hosts struggle to trace where the prompts and checks came from, and find the scores insufficient to judge whether the writing improved. [16:27–25:20](https://www.youtube.com/watch?v=K85b9r-4RvI&t=987s)
- **Define failures by reviewing actual writing.** Asked what good and bad writing looks like, the hosts name overediting, abrupt transitions, and unexplained terminology. They argue that reviewing real samples would give them a firmer basis for evaluation criteria than trying to recall problems from memory. [28:59–35:07](https://www.youtube.com/watch?v=K85b9r-4RvI&t=1739s)
- **Help collect examples, not just request them.** `claude plugin eval init` does ask for real prompts and past outputs. Hamel has no ready examples of the skill failing because he fixes bad writing as he works. The hosts want guidance on gathering examples, choosing which ones to review, and identifying what went wrong. [35:07–42:44](https://www.youtube.com/watch?v=K85b9r-4RvI&t=2107s), [48:11–50:14](https://www.youtube.com/watch?v=K85b9r-4RvI&t=2891s)
- **Check when the skill runs.** The feature they find most useful tests whether the skill runs on relevant requests and stays inactive on unrelated ones, such as pure math. This checks appropriate skill use separately from judging the writing it produces. [42:44–46:00](https://www.youtube.com/watch?v=K85b9r-4RvI&t=2564s)
- **Save feedback and edits during normal use.** They propose asking for feedback while a skill is being used and recording the AI output, the user's later edits, and whether the text makes it into the final post. Those records could supply concrete examples and corrections for future tests. [55:24–58:33](https://www.youtube.com/watch?v=K85b9r-4RvI&t=3324s)

An expanded suite of 30 generated tests encounters grader errors during its trial run. The hosts call this hands-on attempt a failure. [50:14–55:24](https://www.youtube.com/watch?v=K85b9r-4RvI&t=3014s)

Full video: [Hamel Husain — Trying the new Claude Eval tool](https://www.youtube.com/watch?v=K85b9r-4RvI).
