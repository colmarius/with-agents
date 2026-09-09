---
title: "Model Evaluation"
resourceId: 1
series: "raising-an-agent"
episode: 8
date: "2025-08-21"
---

In episode 8 of "Raising an Agent", Camden from the Amp Core team discusses how the team evaluates and integrates Large Language Models (LLMs) into Amp.

### Amp's Multi-Model Philosophy

* **Alloying Models** [01:09](https://www.youtube.com/watch?v=doTI08ukee0&t=69s): Amp's core philosophy is to integrate the best models from various providers to create a more effective coding product.
* **Current Models in Use** [01:32](https://www.youtube.com/watch?v=doTI08ukee0&t=92s):
  * **Sonnet 4**: The primary driver for the main agent, excelling in tool calling, exploring codebases, and iterative self-correction.
  * **OpenAI o3**: Used for the **Oracle agent** [01:46](https://www.youtube.com/watch?v=doTI08ukee0&t=106s), a deep-reasoning agent for code review and planning.
  * **Gemini Flash**: Employed for quick and cost-effective **summarization** [02:08](https://www.youtube.com/watch?v=doTI08ukee0&t=128s).
  * **Haiku**: Utilized for **title generation** [02:19](https://www.youtube.com/watch?v=doTI08ukee0&t=139s).
  * **GPT-5**: Recently enabled as a primary agent for testing and considered a contender for the main driver [02:27](https://www.youtube.com/watch?v=doTI08ukee0&t=147s).

### Model Performance and Iteration

* **Gemini Pro's Limitations** [03:02](https://www.youtube.com/watch?v=doTI08ukee0&t=182s): While good at "oneshotting" tasks, Gemini Pro struggled with complex, iterative tasks requiring codebase exploration and self-correction, often failing at low-level mechanics of tool calling schemas.
* **Sonnet's Strengths** [07:05](https://www.youtube.com/watch?v=doTI08ukee0&t=425s): Camden says Sonnet self-corrects and finds workarounds, such as using `sed` or `cat` commands when initial file-editing tools fail. The team initially questioned its overlapping toolset but now sees it as useful for navigating errors.
* **Opus Was Tested but Not Adopted** [09:35](https://www.youtube.com/watch?v=doTI08ukee0&t=575s): The team tried Opus separately from o3, but the extra cost and latency did not justify using it as Amp's main loop over Sonnet.
* **Open Models: Speed vs. Quality** [10:08](https://www.youtube.com/watch?v=doTI08ukee0&t=608s): Open models such as Kimi K2 and Qwen 3 Coder show useful tool-calling capabilities and speed, especially with custom hardware such as Groq and Cerebras [11:16](https://www.youtube.com/watch?v=doTI08ukee0&t=676s). However, the team finds them about 80% as effective as Sonnet for complex multi-step tasks.
* **The "Exponential Decay" Problem** [06:31](https://www.youtube.com/watch?v=doTI08ukee0&t=391s): In multi-step tasks, a small failure or degradation rate at each step can substantially reduce overall reliability. Camden says this makes the "last 20%" of model quality important for fire-and-forget agentic workflows.
* **GPT-5's Potential** [17:53](https://www.youtube.com/watch?v=doTI08ukee0&t=1073s): Camden says GPT-5's improved tool calling makes it a contender for the main agent driver. It also appears more "steerable" and responsive to instructions than Sonnet, which sometimes disregards commands because of its "strong personality" [25:01](https://www.youtube.com/watch?v=doTI08ukee0&t=1501s).

### The Art of Model Evaluation

* **Qualitative Evals over Quantitative** [38:36](https://www.youtube.com/watch?v=doTI08ukee0&t=2316s): Camden emphasizes a heavy reliance on **qualitative evaluations** (e.g., "vibe checks," manual testing with real-world GitHub issues) over quantitative benchmarks. This is because the complexity of desired user experience cannot be condensed into simple numbers.
* **"Model Taster" Approach** [42:55](https://www.youtube.com/watch?v=doTI08ukee0&t=2575s): Evaluation involves understanding the "personality" and unique strengths of each model, rather than just measuring against arbitrary benchmarks. This allows for discovering unexpected capabilities and building "alloys of models" for a better overall experience [20:10](https://www.youtube.com/watch?v=doTI08ukee0&t=1210s).
* **Scaffolding and Tuning** [19:27](https://www.youtube.com/watch?v=doTI08ukee0&t=1167s): Camden says putting a new model into scaffolding designed for another model can misrepresent its capabilities. He says system prompts and tool descriptions require tuning for each model.
* **Human Reinforcement Learning** [30:31](https://www.youtube.com/watch?v=doTI08ukee0&t=1831s): Models need to be "good enough" for daily use to facilitate human reinforcement learning, where user interaction provides valuable feedback for continuous improvement.
* **Beyond Horse Races** [46:10](https://www.youtube.com/watch?v=doTI08ukee0&t=2770s): The goal is not to find a single "winner" model, but to understand the unique characteristics and strengths of each to steer users towards their optimal use cases.

### The Future of Agentic Development

* **Model Speed** [34:06](https://www.youtube.com/watch?v=doTI08ukee0&t=2046s): The team is exploring model speed. Camden says high-quality real-time feedback could eliminate the "distraction effect" [35:35](https://www.youtube.com/watch?v=doTI08ukee0&t=2135s), in which users switch tasks while waiting for agents. It could also require new UI abstractions for rapid tool calls.
* **"Cutting with the Grain of the Model"** [49:18](https://www.youtube.com/watch?v=doTI08ukee0&t=2958s): Camden says prompts and tools should align with a model's behavior and training rather than fight its "personality."
* **Steering Users to Model Sweet Spots**: The goal is not to expose raw model names as a horse race, but to understand each model's strengths and guide users toward the workflows where that model is most effective [46:10](https://www.youtube.com/watch?v=doTI08ukee0&t=2770s).
* **Constant Change**: The overarching theme is that everything in the AI/agentic coding landscape is constantly changing, requiring nimbleness, short bets, and a continuous learning mindset.

Full video: <https://www.youtube.com/watch?v=doTI08ukee0>

Episode page: <https://ampcode.com/podcast/episode-8>
