---
title: "Memory Harnesses for Long-Running Research Agents"
resourceId: 41
date: "2026-08-12"
---

Sakana AI research scientist Stefania Druga presents memory as a write-manage-read control loop around an agent, then tests several recall policies while holding the model fixed. Her most useful result is a boundary: memory added cost without capability when the task already fit in context, but structured recall helped when relevant evidence fell outside the context window.

The experiments use research agents rather than coding agents, and the talk reports results without enough methodological detail to generalize effect sizes. The findings are still useful design hypotheses for long-running coding-agent work: evaluate whether memory is needed, measure recall separately, and test whether the model actually uses what was retrieved.

### Key Points Covered

- **Long-running work creates context failure modes**: Druga describes agents contradicting themselves, repeating completed work, and drifting from the original question as relevant context falls out of reach [00:00:12]-[00:01:17].
- **Memory is a control loop, not just storage**: Her harness separates always-visible core traces, configurable recall, and cross-session archival memory around otherwise memoryless research agents [00:03:13]-[00:04:08].
- **The experiment changes recall policy, not the model**: The policy ladder compares no recall, vector RAG, a decisions ledger whose entries can be prioritized, and an oracle that supplies the known relevant memory [00:04:08]-[00:05:57].
- **Do not add memory when the task already fits**: On a literature-review task whose papers fit in the context window, Druga reports equal performance with and without memory, with memory adding cost [00:05:00]-[00:06:55].
- **Long-horizon tasks expose the actual retrieval problem**: Her X-Bench example asks at step 500 about information from step 124, forcing the harness to recover evidence outside the current context [00:06:55]-[00:07:49].
- **Ranked recall beat the alternatives in this setup**: Across 68 questions, multiple cells, and multiple seeds, Druga reports that the rank-only decisions ledger performed best, including against a policy that first asked whether memory was needed [00:07:49]-[00:08:39].
- **Correct retrieval does not guarantee correct use**: Even the oracle condition did not reach maximum performance because a model could receive the right memory and still ignore it, become confused, or choose the wrong information [00:08:39]-[00:09:36].
- **Treat recall quality and cost as first-class metrics**: Druga reports that structured ranked recall also used fewer tokens in her tests. Her practical questions are what to store, how to rank it, how to retrieve it, and what should survive across runs [00:09:36]-[00:11:30].
- **Local evaluation increases control but limits throughput**: Running the evaluations locally let her inspect data, traces, compute, and the full pipeline, but the setup ran serially and took days [00:11:30]-[00:12:20].

Full video: <https://www.youtube.com/watch?v=R3-anFK1YM8>
