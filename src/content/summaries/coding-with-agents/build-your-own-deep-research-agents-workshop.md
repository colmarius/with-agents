---
title: "Full Workshop: Build Your Own Deep Research Agents - Louis-François Bouchard, Paul Iusztin, Samridhi"
resourceId: 80
date: "2026-04-20"
---

Louis-François Bouchard, Samridhi, and Paul Iusztin build an MCP-based research agent and connect its cited Markdown artifact to a deliberately more constrained writing workflow. The durable lesson is architectural: use autonomy for open-ended search and gap-filling, but keep predictable transformations explicit, inspectable, and easy to evaluate.

This is a workshop and product demonstration, not a comparative study. Its Gemini, Claude Code, FastMCP, Opik, writing-quality, and research-quality claims are first-party examples. The evaluation uses only five samples per demonstrated split, and the presenters show that their calibrated LLM judge later labels every simulated online trace as passing, so neither the perfect F1 scores nor the cited output establish production reliability or citation correctness.

### Architecture Choices

- **Start with the least autonomous design that fits**: The presenters move from prompts to workflows and then agents, arguing that fixed, ordered operations such as ticket classification and policy checks should remain workflows rather than incur agent overhead ([00:06:37]-[00:13:03]).
- **Keep one decision-maker while its context remains coherent**: A marketing example retains planning and shared context in one agent while exposing validation and format-specific behavior as tools. Delegation to isolated tools or sub-agents becomes useful when tool definitions, history, or retrieved evidence make the main context too large, or when security boundaries require separation ([00:13:52]-[00:20:22]).
- **Separate exploration from constrained production**: Research needs to search, inspect, pivot, and fill gaps; writing needs stable tone, structure, and source boundaries. The implementation therefore runs them sequentially and hands off through a `research.md` artifact instead of adding an orchestration layer that users did not need ([00:24:12]-[00:29:07]).
- **Make intermediate evidence inspectable**: Claude Code supplies planning while FastMCP exposes grounded search, YouTube analysis, and report-compilation tools. Tool outputs persist under `.memory` before compilation, providing a record for debugging and review rather than leaving the full process in model context ([00:34:50]-[00:48:38]).
- **Use skills and MCP servers at different boundaries**: A skill progressively discloses workflow instructions to a local agent; an MCP server packages shared tools and business logic when distributing dependencies and credentials through local setup would become cumbersome ([00:59:43]-[01:06:43], [01:31:07]-[01:32:11]).

### Review and Evidence Limits

- **Give generation and review separate contexts**: The writing workflow creates a draft, reviews it against the human guideline, research, and style profiles, then applies structured Pydantic feedback. When feedback conflicts, it prioritizes the user guideline, then source research, then style ([01:21:08]-[01:27:16]).
- **Trace before trying to evaluate**: Opik records threads, individual traces, model and tool calls, latency, token use, cost, inputs, and outputs. This improves diagnosis but does not itself show that the research is complete or the claims are correct ([01:33:05]-[01:36:53]).
- **Treat an LLM judge as a model that must be tested**: The workshop derives inputs from real posts, evaluates outputs from the actual workflow, adds expert pass/fail labels, separates train, development, and test data, and compares judge labels with expert labels using F1 ([01:39:35]-[01:50:04]).
- **The live failure is more informative than the perfect demo scores**: Each demonstrated development and test split contains only five samples. On simulated online traces, the judge passes every output despite contrary labels, and Iusztin says the development set and judge need further refinement ([01:49:12]-[01:54:36]).

[Watch the full workshop on YouTube](https://www.youtube.com/watch?v=mYSRn6PC1mc).
