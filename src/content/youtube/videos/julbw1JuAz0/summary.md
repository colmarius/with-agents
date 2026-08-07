---
title: "Building Claude Code with Boris Cherny"
videoId: julbw1JuAz0
sourceUrl: "https://www.youtube.com/watch?v=julbw1JuAz0"
publishedAt: "2026-03-04T17:57:56Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Gergely Orosz interviews Boris Cherny, introduced as Claude Code's creator and engineering lead at Anthropic. Cherny describes Claude Code as an experiment that grew into a widely used development tool, and argues that stronger models are shifting software work from writing code toward planning, verification, rapid prototyping, and coordination across disciplines ([00:00:58]-[00:01:48], [00:23:40]-[00:30:08], [00:37:11]-[00:45:59]).

## Key Ideas

- Cherny says the original terminal chatbot became agentic after he gave the model Bash and file-editing tools. His design lesson is to give the model tools and room to act rather than constrain it as one fixed component in a conventional program ([00:23:40]-[00:27:12]).
- He says Anthropic debated keeping Claude Code internal, then released it partly to study safety under real-world use. He presents Anthropic's reported adoption—near-universal daily use among technical staff and an estimate that Claude Code writes about 80% of Anthropic's code—as internal observations rather than independent measurements ([00:27:12]-[00:30:08]).
- Cherny reports that with Opus 4.5 he stopped editing code manually and produced roughly 10–20 pull requests per day during one month, with about two bugs by his count. He explicitly frames these as personal experience, while Orosz describes a similar change in his own coding practice ([00:31:11]-[00:33:13]).
- His workflow starts several isolated Claude Code sessions in plan mode, refines each plan, and lets the model attempt implementation; he recommends explanatory mode when learning an unfamiliar codebase and warns that no single workflow fits every engineer ([00:33:13]-[00:38:12]).
- Cherny says the Claude Code team's review stack combines model-written tests and end-to-end checks, Claude Code review in CI, deterministic type checks, linting and builds, best-of-N review passes, and a final human approval. His estimate that Claude review catches about 80% of bugs is not substantiated with evaluation details in the interview ([00:40:18]-[00:45:59]).
- He describes security as layered risk reduction: model alignment, runtime classifiers, sub-agent summarization for fetched web content, static analysis, allowlists, sandboxing, and permission prompts. He does not claim any layer—or their combination—eliminates prompt injection or unsafe actions ([00:47:02]-[00:54:21]).
- Cherny says cheap implementation changes product development: the team favors working prototypes, dogfooding, and user feedback over relying on static mockups or PRDs. The prototype counts and short development timelines discussed are team recollections, not comparative productivity studies ([00:59:17]-[01:04:37]).
- For agent teams, Cherny attributes improved internal results to multiple fresh, or “uncorrelated,” context windows and Opus 4.6, while noting that the research preview consumes many tokens and is intended for sufficiently complex tasks rather than every task ([01:14:24]-[01:18:20]).

## Practical Implications

- Invest effort in a clear plan before dispatching implementation, isolate parallel work with separate checkouts or worktrees, and use a learning-oriented output mode before optimizing for throughput in a new codebase ([00:33:13]-[00:38:12]).
- Preserve deterministic checks and risk-appropriate human review around probabilistic model review; automate recurring review comments into lint rules where possible ([00:40:18]-[00:45:59]).
- Prefer simple tools when evaluations support them: Cherny says Claude Code discarded a local vector-search approach because of freshness and permission problems after agentic glob-and-grep search performed better in the team's testing ([00:49:53]-[00:52:24]).
- Re-test previously unsuccessful agent designs as models change, but treat that as an experimental discipline rather than proof that every old idea will now work ([01:18:20]-[01:21:06]).
- Cherny expects methodical, hypothesis-driven debugging, curiosity, adaptability, and cross-functional range to remain valuable, although his six-month and “year of the generalist” comments are forecasts rather than established labor-market outcomes ([01:30:09]-[01:35:04]).

## Questions and Tensions

- The interview gives no denominator, task mix, baseline, or audit method for the reported code-share, pull-request volume, bug counts, review catch rate, or adoption figures, so they should not be read as general productivity evidence ([00:29:19]-[00:32:14], [00:39:16]-[00:43:16]).
- Anthropic's stated reason for public release combines learning about safety with product adoption, but the discussion does not quantify which observed risks were found, how safety improved, or the residual risk after mitigation ([00:27:12]-[00:29:19], [00:47:02]-[00:54:21]).
- Cherny retains mandatory human approval for Anthropic's enterprise product “for now,” while also expecting models and workflows to change rapidly; the interview does not define when reduced oversight would be justified ([00:42:19]-[00:45:06], [01:18:20]-[01:20:14]).
- Cherny compares AI-assisted coding with the printing press and speculates that broader access may expand roles and markets, while Orosz raises developers' loss of craft and identity. Both the historical figures and future labor implications are conversational analogy and forecast, not verified analysis in the video ([01:21:06]-[01:30:09]).
- The auto-captions repeatedly render obvious names incorrectly—including Claude Code as “Quad Code,” “Cloth Code,” and similar forms, and Claude Co-work in several variants. This summary corrects those where title and surrounding context are clear; less certain personal names and the garbled “10 days and 10” Co-work timeline are not used as evidence ([00:20:45]-[00:21:33], [01:05:36]-[01:12:18], [01:36:47]-[01:37:41]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=julbw1JuAz0)
- [transcript.md](./transcript.md)
