---
title: "ACQ2: How to Live in Everyone Else's Future (with Shopify CEO Tobi Lütke)"
resourceId: 145
date: "2025-09-18"
---

Shopify CEO Tobi Lütke describes a practical progression from experimenting with models to building repeatable evaluation and review systems. The most durable part of the conversation is not its forecast of rapid AI progress, but its method for preserving failures, supplying context, and making product judgment explicit enough to challenge.

**Evidence basis:** This summary uses the saved English auto-generated captions, captured September 19, 2026, without an original-audio check. Shopify practices and outcomes are Lütke's account, not independent measurements. The recording predates the summary by about a year, so the final section evaluates which ideas remained useful as agents gained stronger tool use and context retrieval.

## Turn model surprises into repeatable evaluations

- **Keep a personal capability suite.** Lütke describes a folder of prompts with expected or judged results that he reruns against new models. The suite records where earlier models failed, allowing him to test whether a new release crosses a capability boundary relevant to his own work. He compares the approach to unit testing, but the judgments can remain qualitative rather than binary. [02:04–03:07](https://www.youtube.com/watch?v=ewnNv8pxdM0&t=124s)
- **Preserve failed prototypes as future tests.** Shopify's expectation was to try AI at the beginning of a project even when it might fail. Lütke argues that an unsuccessful attempt still produces a representative evaluation case for the next model. The mandate establishes exposure and learning; it does not show that every task should remain AI-first indefinitely. [44:41–45:44](https://www.youtube.com/watch?v=ewnNv8pxdM0&t=2681s)

## Supply enough context to make success plausible

Lütke defines context engineering as giving a model enough information to make a task plausibly solvable without further input. He acknowledges that agents can find missing information themselves. Even so, he argues that supplying it upfront can lower costs and improve the chance of success. He also says this practice makes instructions to colleagues clearer by exposing assumptions that would otherwise go unstated. [45:44–47:50](https://www.youtube.com/watch?v=ewnNv8pxdM0&t=2744s)

## Make product judgment inspectable

- **Write choices, not platitudes.** Lütke recommends documenting principles where another competent organization could reasonably choose the opposite trade-off. Shopify calls these documents constitutions. The useful content is the organization's distinctive choice and the context in which it applies, not generic values such as teamwork. [47:50–49:49](https://www.youtube.com/watch?v=ewnNv8pxdM0&t=2870s)
- **Use AI critiques to test both projects and principles.** Lütke says Shopify asks AI to compare projects with written product principles and flag points for discussion. A disputed critique can reveal a model mistake, but it can also expose a principle that is too broad, imprecise, or missing an example. The team therefore examines both the project and the criteria used to judge it. [49:49–50:51](https://www.youtube.com/watch?v=ewnNv8pxdM0&t=2989s)
- **Integrate the critique into review rather than treating it as a gate.** Lütke later describes AI analysis against product principles as part of Shopify's recurring project reviews. He frames it as discussion support, not automated approval, and supplies no comparison showing that it improves product outcomes. [1:21:13–1:22:17](https://www.youtube.com/watch?v=ewnNv8pxdM0&t=4873s)

## What held up as agents evolved

By September 2026, agents were better at searching repositories, using tools, and recovering missing context. That weakens the strict version of “provide everything up front,” but strengthens the larger lesson: define the intended outcome, preserve difficult real tasks, and give the agent enough organizational guidance to evaluate trade-offs. Later workflow evidence in [A Love Letter to Pi](/summaries/coding-with-agents/a-love-letter-to-pi-lucas-meijer/) similarly starts by defining how the result will be judged, while [Agentic SDLC at Uber](/summaries/coding-with-agents/agentic-sdlc-at-uber/) treats shared context and reusable instructions as team infrastructure.

The still-relevant sequence is: capture a real failure, state what good looks like independently of the model, rerun it when the model or harness changes, and revise the governing principle when repeated misunderstandings reveal ambiguity. That is editorial synthesis from this interview and the later resources, not a measured Shopify playbook.
