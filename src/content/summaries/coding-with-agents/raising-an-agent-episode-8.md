---
title: "Model Evaluation"
resourceId: 1
series: "raising-an-agent"
episode: 8
date: "2025-06-01"
---

Episode 8 of "Raising an Agent" features Camden from the Amp Core team discussing how they evaluate and integrate different Large Language Models (LLMs) and models into their agentic coding tool, Amp.

### Amp's Multi-Model Philosophy

* **Alloying Models** [01:09]: Amp's core philosophy is to integrate the best models from various providers to create a more effective coding product.
* **Current Models in Use** [01:32]:
  * **Sonnet 4**: The primary driver for the main agent, excelling in tool calling, exploring codebases, and iterative self-correction.
  * **03 (Opus)**: Used for the **Oracle agent** [01:46], a "smart deep thinking" agent for code review and planning.
  * **Gemini Flash**: Employed for quick and cost-effective **summarization** [02:08].
  * **Haiku**: Utilized for **title generation** [02:19].
  * **GPT-5**: Recently enabled as a primary agent for testing, marking a significant milestone as a contender for the main driver [02:27].

### Model Performance and Iteration

* **Gemini Pro's Limitations** [03:02]: While good at "oneshotting" tasks, Gemini Pro struggled with complex, iterative tasks requiring codebase exploration and self-correction, often failing at low-level mechanics of tool calling schemas.
* **Sonnet's Strengths** [07:05]: Sonnet demonstrates strong self-correction abilities, finding creative workarounds (e.g., using `sed` or `cat` commands) when initial file editing tools fail. The overlapping nature of its toolset, initially a concern, is now seen as an advantage for navigating errors.
* **Open Models: Speed vs. Quality** [10:08]: Open models like Kimmy K2 and Qwen 3 Coder show promising tool-calling capabilities and impressive speed, especially with custom hardware (Croc, Cerebras) [11:16]. However, they are currently about 80% as effective as Sonnet for complex multi-step tasks.
* **The "Exponential Decay" Problem** [06:31]: In multi-step tasks, even a small percentage of failure or degradation in each step can lead to a significant drop in overall reliability, making the "last 20%" of model quality crucial for fire-and-forget agentic workflows.
* **GPT-5's Promise** [17:53]: GPT-5 is exciting due to its improved tool calling, making it a strong contender for the main agent driver. It also appears more "steerable" and responsive to instructions compared to Sonnet, which sometimes disregards commands due to its "strong personality" [25:01].

### The Art of Model Evaluation

* **Qualitative Evals over Quantitative** [38:36]: Camden emphasizes a heavy reliance on **qualitative evaluations** (e.g., "vibe checks," manual testing with real-world GitHub issues) over quantitative benchmarks. This is because the complexity of desired user experience cannot be condensed into simple numbers.
* **"Model Taster" Approach** [42:55]: Evaluation involves understanding the "personality" and unique strengths of each model, rather than just measuring against arbitrary benchmarks. This allows for discovering unexpected capabilities and building "alloys of models" for a better overall experience [20:10].
* **Scaffolding and Tuning** [19:27]: Simply dropping a new model into an existing application scaffolding designed for another model can lead to a false impression of its capabilities. Significant tuning of system prompts and tool descriptions is required to optimize performance.
* **Human Reinforcement Learning** [30:31]: Models need to be "good enough" for daily use to facilitate human reinforcement learning, where user interaction provides valuable feedback for continuous improvement.
* **Beyond Horse Races** [46:10]: The goal is not to find a single "winner" model, but to understand the unique characteristics and strengths of each to steer users towards their optimal use cases.

### The Future of Agentic Development

* **Speed as a Game-Changer** [34:06]: Exploring the speed dimension of models is a key focus. Real-time feedback at high quality could eliminate the "distraction effect" [35:35] (where users switch tasks while waiting for agents) and require new UI abstractions to manage rapid tool calls.
* **"Cutting with the Grain of the Model"** [49:18]: It's essential to align prompts and tools with a model's natural behavior and training, rather than fighting against its inherent "personality."
* **Evolution of Engineering Roles**: Engineers in this new era need a broader understanding of business, product, and design, as the value of purely typing code diminishes. The ability to "wield code much faster" becomes paramount.
* **Constant Change**: The overarching theme is that everything in the AI/agentic coding landscape is constantly changing, requiring nimbleness, short bets, and a continuous learning mindset.

Full video: <https://youtu.be/ojAdu4vGYyI?si=UFYuFDvD-1Poh3pc>
