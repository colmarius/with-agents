---
title: "Trying the new Claude Eval tool"
resourceId: 126
date: "2026-09-12"
---

Hamel Husain and a co-host try Claude's plugin evaluation workflow on a plain-writing skill. Their main criticism is that generating tests and scores does not solve the harder work of collecting real failures, defining quality, and inspecting what a grader actually measured. This is a first-use experience report about one writing task, not a controlled benchmark or a comprehensive product review.

### Main takeaways

- **Distinguish agent-assisted setup from explicit initialization.** [00:00–12:14](https://www.youtube.com/watch?v=K85b9r-4RvI&t=0s) and [24:08–30:08](https://www.youtube.com/watch?v=K85b9r-4RvI&t=1448s): the announced workflow compares runs with and without a plugin. After asking an agent to prepare a plain-writing skill for it, the hosts run an already-prepared suite and see scores before supplying examples themselves. They later restart with `claude plugin eval init`, which asks them to define good and bad output. The initial confusion is not evidence that initialization never requests human criteria.
- **A score needs traceable inputs, outputs, and graders.** [16:27–25:20](https://www.youtube.com/watch?v=K85b9r-4RvI&t=987s): the hosts inspect a partial HTML report with criteria for plain language, avoiding em dashes, and invoking the skill. They struggle to identify where prompts and criteria came from and how weights and pass indicators work; they eventually find the generated output. Their concern is interpretability and usefulness, not simply whether the report contains numbers. Passing narrow style checks does not by itself establish that a rewrite is good.
- **Define failures by reviewing actual writing, not recalling preferences.** [28:59–35:07](https://www.youtube.com/watch?v=K85b9r-4RvI&t=1739s): the hosts name overediting, abrupt transitions, unexplained terminology, and dramatic language as problems. They argue that remembering such categories is weaker than inspecting real samples. The relevant missing step is error analysis: examining outputs to identify recurring failures before turning those failures into evaluation criteria.
- **Asking for examples is not the same as helping collect them.** [35:07–42:44](https://www.youtube.com/watch?v=K85b9r-4RvI&t=2107s) and [48:11–50:14](https://www.youtube.com/watch?v=K85b9r-4RvI&t=2891s): initialization asks for real prompts, past outputs, or bug reports. The hosts offer external writing-style examples but lack ready examples of their own skill failing, partly because they correct bad writing as they work. They criticize the interruption this creates: the user must already have done much of the data collection and error analysis. They want guidance on choosing and inspecting examples, not just a chat prompt requesting a dataset.
- **Check when a skill should run as well as what it produces.** [42:44–46:00](https://www.youtube.com/watch?v=K85b9r-4RvI&t=2564s) and [50:14–55:24](https://www.youtube.com/watch?v=K85b9r-4RvI&t=3014s): tests for appropriate invocation and non-invocation are the feature the hosts find most concretely useful. They ask to expand coverage toward the skill's roughly 25 rules, leading to 30 synthetic cases. The pilot encounters reported grader parse errors, and the session ends without a demonstrated successful full run of that expanded suite. More generated cases are not presented as validated coverage.
- **Capture feedback while the skill is being used.** [44:46–46:00](https://www.youtube.com/watch?v=K85b9r-4RvI&t=2686s) and [55:24–58:33](https://www.youtube.com/watch?v=K85b9r-4RvI&t=3324s): the hosts propose inline annotation widgets or an evaluation mode that asks for feedback during normal work. For writing, they suggest preserving the original AI output, the user's later edits, and whether text survives into the final post. Those records could connect a quality judgment to a concrete example and correction. These are proposed improvements, not features demonstrated in the Claude tool.

### Practical interpretation

Collect representative prompts, outputs, and corrections during ordinary use. Review those examples to define failures, then inspect each grader against them before trusting aggregate scores. Treat with/without-skill comparisons and invocation tests as useful checks, not substitutes for evaluating the quality readers actually care about. This is editorial synthesis from the discussion, not a workflow validated by the livestream.

### Source and evidence limits

This summary uses the English text recovered from YouTube's transcript panel: 426 segments spanning the opening introduction through the closing goodbye. The panel did not identify whether captions were automatic or creator-supplied. Recognition errors remain in the saved transcript; ambiguous names and incidental model labels are not used here. The summary was checked against captions, not manually verified against the audio.

The audio was independently recoverable and measured about 58 minutes, 45 seconds, despite the watch page displaying 58 minutes, 39 seconds. The listed date uses the extractor's September 12, 2026 upload-date field; its release timestamp falls on September 11 UTC, so this is not a claim about the precise livestream start date. The hosts' negative verdict applies to their attempt and does not establish how the tool performs on coding tasks or other setups.

Full video: [Hamel Husain — Trying the new Claude Eval tool](https://www.youtube.com/watch?v=K85b9r-4RvI).
