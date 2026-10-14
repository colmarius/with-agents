---
name: writing-plainly
description: "Writes and reviews clear, precise prose across repository content and agent responses. Use for new or revised text. Triggers on: write, edit, summarize, document, simplify, deslopify, plain writing."
license: MIT
---

# Writing plainly

Write so the intended reader can understand the point in one pass. Apply this
skill to authored prose: posts, summaries, resource descriptions and curation
reasons, slides, UI copy, documentation, research, plans, commit and PR messages,
and agent responses. Scale the review to the text; a short label needs no essay
workflow. Do not rewrite existing content unless it is part of the task.

## Repository boundaries

- Use the repository's audience and tone. Most public content addresses experienced
  developers, tech leads, and people working with coding agents. Explain unfamiliar
  concepts without replacing precise technical terms with vague everyday words.
- Apply this skill alongside the owning workflow. Posts still use
  [article-writing](../article-writing/SKILL.md); summaries and transcripts still
  follow [the content guide](../../../src/content/AGENTS.md). Source-library review,
  citation rules, publication gates, and validation remain required.
- Edit prose, not code, identifiers, commands, URLs, schemas, or captured evidence.
  Preserve exact quotations and source titles. Transcript cleanup follows the
  content guide, not a style rewrite. Never remove uncertainty, attribution,
  limitations, or citations to make a claim sound cleaner.
- Local format contracts take priority. Keep timestamp en dashes, article slide
  messages, required headings such as `## Sources`, and useful checklists or tables.
  Headings, labels, and slide messages need not be complete prose sentences.

## Word choice and tone

- Use simple words when they preserve the meaning. Prefer "use" to "leverage".
  Avoid stock AI phrasing, inflated claims, slogans, and clever labels.
- Name the actor, action, and result. Replace "This result matters" with the
  actual consequence. Do not add a consequence that the evidence does not support.
- Keep terminology consistent for the same thing. Keep distinct concepts distinct:
  a document, a parsed record, and a database row may not be interchangeable.
- Use established technical terms when they are precise; define them where readers
  need help. Avoid invented shorthand and compressed compound adjectives. A
  dictionary is not a test of whether a technical term is valid.
- Contractions are fine when natural. Keep the tone descriptive and explanatory,
  rather than promotional or deliberately punchy.

Before: "We leverage durable context to unlock a robust agent workflow."
After: "The agent reads saved repository instructions when a new task starts."
Use the revision only when the stated behavior is supported.

## Sentences and paragraphs

- Lead with the main point, then give the explanation, evidence, or example needed
  to understand it. Give each paragraph one job. Do not force a fixed paragraph
  template or add transitions that say nothing.
- Write complete sentences in ordinary prose. Keep related ideas together and
  split sentences that carry too many separate claims. Do not enforce a clause
  count or prefer length for its own sake. Avoid both overloaded sentences and
  stacks of short, slogan-like fragments.
- Present workflows in execution order, usually as numbered steps. Keep conditions,
  prerequisites, and exceptions beside the step they qualify.
- State what changes, who does it, and how it works when the source establishes
  the mechanism. Keep qualifications that affect the meaning. Cut repetition and
  empty endings such as "as we move forward", not necessary explanations.
- In chat, lead with the outcome and include enough background to understand it
  without rereading the thread. Report what was verified and what remains uncertain.
  Do not repeat the whole history or claim delivery beyond the actual state.

Before: "The source is reviewed. Publication is safe. Ship it."
After: "The source review is complete, but publication still requires the content
checks and rendered-page verification."

## Punctuation and formatting

- Prefer periods or conjunctions over decorative em dashes and middle-dot
  separators. Use "to" for prose ranges when natural, but preserve required range
  notation, especially timestamp citations such as `[17:49–25:32](...)`.
- Use colons for lists or short labels, not as a habitual substitute for explaining
  the relationship between claims. Use semicolons only when they improve clarity.
- Prefer straight quotes in newly authored prose; preserve quoted evidence.
- Use sentence case in new headings unless an exact heading is required. Use bold
  for information readers need to find, not decoration or empty emphasis.
- Use lists for steps or distinct items and tables for comparisons. Keep them easy
  to scan without arbitrary item limits or nesting merely to shorten a list.

## Patterns to avoid

- Do not imply intention where there is only a process. "The API returns JSON" is
  precise; "the platform wants to empower developers" needs an actual actor and
  supported claim.
- Prefer literal explanations over metaphors and analogies. Retain a source's
  analogy when it is needed to explain that source, attribute it, and preserve its
  limits. Do not turn an analogy or proposal into an established mechanism.
- Replace "not just X, but Y" with a direct description. Preserve meaningful
  contrasts and corrections when readers need them.
- State the problem instead of stacking rhetorical questions. Do not open with
  "Three things to know" when the first point can speak for itself.
- Give pronouns clear referents. Replace vague "this" or "that" with the relevant
  noun when the reader could misunderstand; do not ban demonstratives mechanically.

## Workflow and review

1. Identify the reader, purpose, and facts that must survive the edit. Read the
   source before revising source-backed claims.
2. Draft or revise the prose using the rules above. Stay within the requested scope.
3. Read the text on its own. Can the reader state the main point, understand the
   important terms, and follow the sequence without reopening the conversation?
4. Compare the revision with the original and its evidence. Check attribution,
   uncertainty, mechanisms, numbers, conditions, citations, and technical names.
   Remove unsupported additions; do not quietly fix a source's missing explanation.
5. Run the owning workflow's required checks. This style pass does not replace the
   Summary readability review, source-fidelity checks, or rendered-page validation.

## Deslopify requests

When the user asks to "deslopify" text, rewrite the supplied text, or the previous
agent response if no text is supplied. Use the intended audience; if none is given,
write for a technical reader without project context. Lead with the conclusion,
then explain the necessary background and sequence. Return only the rewrite unless
the user asks for commentary. Preserve facts and uncertainty without inventing
missing context. In Amp, load `writing-plainly` through the skill tool; no
Claude-specific command or installation is needed.

## Source and adaptation

Adapted from [docwriter-org/plain-writing-skill](https://github.com/docwriter-org/plain-writing-skill)
at [revision f0d3630](https://github.com/docwriter-org/plain-writing-skill/blob/f0d3630983ac7a82aa580f1c1509d72df739ee12/skills/plain-writing/SKILL.md).
The upstream MIT notice is retained in [LICENSE](LICENSE).

The adaptation uses Amp skill discovery and this repository's writing workflows.
It replaces absolute bans on jargon, analogies, punctuation, demonstratives,
sentence length, and list length with reader-focused guidance. Source fidelity,
technical accuracy, and required formats take priority over stylistic preferences.
