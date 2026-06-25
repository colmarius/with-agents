# Durable Context Talk Progress

## 2026-06-25

- Read the provided gist and distilled its title, abstract, and 12-slide narrative.
- Loaded relevant skills:
  - `agent-work` for durable `.agents/work/` context.
  - `feature-planning` for turning the idea into an iteration plan and handoff-ready artifacts.
  - `research` for source verification and citation tracking.
- Created work item: `.agents/work/docs/durable-context-talk/`.
- Inspected local post/slide implementation:
  - Posts live in `src/content/posts/*.md`.
  - Slides are generated at `/posts/[slug]/slides`.
  - Slide sections are split on Markdown `##` / rendered `h2` headings.
  - No code change is needed before drafting if we author the post slide-first.
- Gathered initial sources for the main claims:
  - Simon Willison on LLMs as a lossy encyclopedia.
  - Addy Osmani on cognitive surrender and comprehension debt.
  - OpenAI Harness Engineering on repository knowledge as system of record and `AGENTS.md` as table of contents.
  - AGENTS.md and Agent Skills primary pages.
  - Strangest Loop for "doing the thing."
- Created `prd.md`, `research.md`, and `plan.md` with a proposed content spine, source risks, repo fit, and iteration process.

## Current Recommendation

Do not create the public post yet. First, align the talk's emphasis with the user: conceptual warning, practical workflow recipe, or dot-agents demo. Then resolve the "Agents Captain" source risk and draft a `draft: true` Markdown post with 10-12 `##` slide sections.

## Next Action

- User reviews the proposed thesis/title/outline and provides the next input.
