---
addedDate: '2026-06-24'
title: "Model Evaluation"
resourceId: 1
series: "raising-an-agent"
episode: 8
date: "2025-08-21"
---

Choosing a coding model means testing more than the code it writes: can it find relevant files, call tools correctly, recover from errors, and finish without repeated human help? Camden from Amp's Core team explains how those behaviors shape model selection and why the surrounding prompts and tools need tuning for each model.

### Amp's Multi-Model Philosophy

* **Amp combines the best models from several providers**: Camden says Amp takes the best models across the industry, not from a single provider, and fits them together into a product that is more effective at coding [01:09](https://www.youtube.com/watch?v=doTI08ukee0&t=69s).
* **Models used at the time of this episode** [01:32–02:48](https://www.youtube.com/watch?v=doTI08ukee0&t=92s):
  * **Sonnet 4**: The primary driver for the main agent, excelling in tool calling, exploring codebases, and iterative self-correction.
  * **OpenAI o3**: Used for the **Oracle agent** [01:46](https://www.youtube.com/watch?v=doTI08ukee0&t=106s), a deep-reasoning agent for code review and planning.
  * **Gemini Flash**: Employed for quick and cost-effective **summarization** [02:08](https://www.youtube.com/watch?v=doTI08ukee0&t=128s).
  * **Haiku**: Utilized for **title generation** [02:19](https://www.youtube.com/watch?v=doTI08ukee0&t=139s).
  * **GPT-5**: Recently enabled as a primary agent for testing and considered a contender for the main driver [02:27](https://www.youtube.com/watch?v=doTI08ukee0&t=147s).

### Model Performance and Iteration

* **A strong first answer does not guarantee reliable tool use**: Camden found Gemini Pro good at producing an app from a single request, but less reliable at exploring an existing codebase and correcting its work. Even incorrectly formatted tool calls could interrupt a task before the reasoning about code mattered [02:48–05:46](https://www.youtube.com/watch?v=doTI08ukee0&t=168s).
* **Opus was tested but not adopted**: The team tried Opus separately from o3, but the extra cost and latency did not justify using it as Amp's main loop over Sonnet [09:35](https://www.youtube.com/watch?v=doTI08ukee0&t=575s).
* **Speed helps only if the task completes**: Camden finds Kimi K2 and Qwen 3 Coder promising for tool use, with fast serving from providers such as Groq and Cerebras. His rough “80%” assessment means succeeding at four out of five small tasks, not achieving 80% of Sonnet's whole-feature success rate. A feature can require many such tasks, giving failures repeated opportunities to interrupt the run [10:27–11:32](https://www.youtube.com/watch?v=doTI08ukee0&t=627s), [14:25–17:09](https://www.youtube.com/watch?v=doTI08ukee0&t=865s).
* **Recovery matters as much as avoiding errors**: The speakers contrast Gemini getting progressively off track with Sonnet trying another editing method after a tool failure. Without reliable self-correction and feedback from tests or type checks, the human becomes the fallback who must restart or redirect the work [05:46–08:43](https://www.youtube.com/watch?v=doTI08ukee0&t=346s), [15:15–17:09](https://www.youtube.com/watch?v=doTI08ukee0&t=915s).
* **GPT-5 is a contender for the main agent**: Camden says GPT-5's improved tool calling makes it a contender for the main agent driver [17:53](https://www.youtube.com/watch?v=doTI08ukee0&t=1073s). It also appears more "steerable" and responsive to instructions than Sonnet, which sometimes disregards commands because of its "strong personality" [25:01](https://www.youtube.com/watch?v=doTI08ukee0&t=1501s).

### The Art of Model Evaluation

* **Use scores to shortlist, then inspect real work**: Camden uses published benchmarks as an initial filter. He then repeatedly runs a standard set of tasks, including GitHub issues and prompted checklists, while observing tool choice, delegation, and failure recovery. He wants to discover unexpected strengths as well as check known requirements [38:44–42:44](https://www.youtube.com/watch?v=doTI08ukee0&t=2324s).
* **Measurements still help catch regressions and test impressions**: The team treats repeatable tasks as regression checks. Camden also tracks trends across runs (latency, tool-call counts, generated lines, and verbosity) to see whether an impression such as “this model is wordier” holds up in the data [43:48–46:42](https://www.youtube.com/watch?v=doTI08ukee0&t=2628s).
* **Tune the harness before judging the model**: The harness is the prompts, tools, and execution loop around the model. Instructions written to make Sonnet concise caused GPT-5 to produce ungrammatical four-word replies; its longer search requests also sent the search agent down slow, broad investigations. These examples show how the same setup can produce different behavior across models [19:10–20:51](https://www.youtube.com/watch?v=doTI08ukee0&t=1150s), [22:58–28:35](https://www.youtube.com/watch?v=doTI08ukee0&t=1378s).
* **Daily use teaches the developers what to change**: Once a model is useful enough for routine work, the team can discover recurring behaviors and adjust prompts, tool descriptions, and personal habits. The speakers call this “human reinforcement learning”: they describe people learning to use and configure the model, not a method for updating its weights from user interactions [29:30–31:23](https://www.youtube.com/watch?v=doTI08ukee0&t=1770s).

### The Future of Agentic Development

* **Faster models could keep users from switching tasks**: The team is exploring model speed [34:06](https://www.youtube.com/watch?v=doTI08ukee0&t=2046s). Camden says high-quality real-time feedback could eliminate the "distraction effect", in which users switch to another task while waiting for the agent and then have to reload context [35:35](https://www.youtube.com/watch?v=doTI08ukee0&t=2135s). Fast agents could also require new UI abstractions, because users cannot follow dozens of rapid tool calls.
* **Cut with the grain of the model**: Camden says each model has natural behavior from its training, so prompts and tools should align with it rather than fight its "personality" [49:18](https://www.youtube.com/watch?v=doTI08ukee0&t=2958s).
* **Steer users toward each model's strengths**: Rather than presenting models as a horse race with one winner, the goal is to understand each model's strengths and guide users toward the workflows where that model is most effective [46:10](https://www.youtube.com/watch?v=doTI08ukee0&t=2770s).

Full video: <https://www.youtube.com/watch?v=doTI08ukee0>

Episode page: <https://ampcode.com/podcast/episode-8>
