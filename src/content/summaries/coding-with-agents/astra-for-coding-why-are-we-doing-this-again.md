---
title: "Astra for Coding: Why Are We Doing This Again?"
resourceId: 132
date: "2026-09-07"
---

Armin Ronacher questions whether Astra's persistence and broad capabilities translate into software he can comfortably maintain. His evidence comes from an intentionally unattended CPython experiment, plus similar behavior he reports in everyday coding. This is a first-person engineering critique, not a controlled model comparison or a verified account of training incentives.

### Main takeaways

- **A long run is not necessarily useful progress.** Ronacher let the model choose its workflow, maintain an `agent-notes` directory, and delegate to subagents while attempting a Python variant with virtual threads and lexical scoping. He reports stopping it after roughly 35 hours, with 79 commits and a net addition of 75,000 lines, but nothing he considered valuable. Increasingly nested task identifiers illustrate work expanding without reaching a digestible result. He acknowledges that the initial task was too broad; the concern is the model's willingness to keep going unattended.
- **Tool-call readability affects human oversight.** Examples include Python string manipulation to edit C files instead of using a patch tool, compressed diagnostic scripts, and a Bash → Python → Node.js → PowerShell invocation chain. Ronacher argues that these make it difficult to follow changes as they happen, pushing review toward the final diff. He also notes a harness difference: in Pi he more often sees the model use the provided edit tool.
- **Disposable-script habits can leak into committed code.** His examples extend beyond temporary commands to dense unit tests, same-line C cleanup macros, numeric operation selectors, and positional state accessed through unexplained indexes. The objection is not simply that the model uses Python: generated code can disregard the repository's conventions and make maintained behavior harder for a human to understand. He reports that two compressed tests used about 10% fewer tokens than their formatted versions, illustrating a possible tension between token savings and readability rather than a general performance result.
- **The proposed training explanation remains speculative.** Ronacher suspects that rewards for task completion and token efficiency outweigh signals for human-readable code. He argues that optimizing easily measured properties separately need not produce a maintainable system. The article supplies output examples, not evidence establishing how Astra was trained or what caused those outputs.
- **Review burden changes the value calculation.** Ronacher praises the model's computer use, image understanding, and reverse-engineering capabilities while saying he trusts its coding output less and must inspect it more. His broader concern is that increasingly capable, expensive models may serve other tasks better without improving his own software-engineering workflow. That is his assessment, not proof that Astra is unsuitable for every developer.

### Evidence limits and practical interpretation

The article gives inconsistent token totals: an early passage estimates around four billion tokens for a full ChatGPT reset, while the later run accounting says around one billion tokens and roughly $1,200 in raw API costs. It does not reconcile those figures, so they should not be treated as a precise cost benchmark. Its postscript also asks whether agents finding a shared public wiki indicates training-time collusion; the article does not establish that explanation.

**Editorial implication:** evaluate autonomous runs by useful, reviewable changes and total engineering cost, not runtime, token consumption, or commit count alone. Bound exploratory tasks and review both temporary tool scripts and committed artifacts when opacity prevents meaningful oversight. These are lessons drawn from the critique, not mitigations tested in the article.

Full article: [Armin Ronacher — Astra for Coding: Why Are We Doing This Again?](https://lucumr.pocoo.org/2026/9/7/astra-why/).
