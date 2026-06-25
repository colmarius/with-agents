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

## 2026-06-25 Source Update

- User accepted the direction for now and provided the source for the "Agents Captain / say no to slop" OpenAI memo: <https://x.com/gdb/status/2019566641491963946>.
- Direct extraction from X failed in tooling, so the user-provided transcript was saved locally at `sources/openai-agentic-software-development-x-post.md`.
- Research now treats this X memo as the culture/process source and the OpenAI Harness Engineering article as the stable companion source for repository-local knowledge and progressive disclosure.
- Added the user's requested next step to the plan: run a stress/grill-me review with Oracle before drafting the post.

## 2026-06-25 Oracle Stress-Test

- Oracle recommendation: conditional go for a `draft: true` post after a short tightening pass.
- Top risks: narrative sprawl, too much abstraction without a running example, timing/slide density, overclaiming from OpenAI or study sources, and the "isn't this just documentation?" objection.
- Applied changes:
  - Made **map → procedure → state → evidence** the practical spine.
  - Changed the default deck to 11 slides with 16-18 minute target timing.
  - Added a running-example requirement, preferably this repo's own slide-aware post workflow.
  - Added a source/claim table and overclaiming guardrails.
  - Marked no slide-renderer code changes before drafting.

## Updated Next Action

- Finish Task 3 source verification only where it affects the draft, then create `src/content/posts/durable-context-coding-agents.md` as `draft: true` with 10-11 `##` slide sections.

## 2026-06-25 Source Expansion Gate

- User asked to make "only add more sources if we want these claims" a separate plan phase.
- Updated the plan so baseline source verification is complete and drafting can proceed.
- Added a post-draft source-expansion gate: inspect the actual draft for risky claims and add sources only if those claims survive editing.
- Risky claims to source-or-remove: study numbers, Mario Zechner/GitHub quality claims, exact AGENTS.md adoption counts, hard productivity multipliers, broad "agents write most code now" generalizations, and treating dot-agents as a standard.

## 2026-06-25 Initial Draft

- Consulted Oracle before drafting. Recommendation: go, use exactly 11 `##` sections, keep the first `##` as the title/promise slide, and keep the draft a practical field guide rather than a source-heavy essay.
- Created `src/content/posts/durable-context-coding-agents.md` with `draft: true`.
- Draft uses the recommended 11-section spine:
  1. Your repo is the memory
  2. The model knows patterns, not your project
  3. The real failure mode is comprehension debt
  4. The pivot: stop storing truth in the chat
  5. The durable context loop
  6. Map: tell agents where project truth lives
  7. Procedure: capture workflows you repeat
  8. State: survive thread death with work items
  9. Evidence: make “done” observable
  10. A running example from this repo
  11. Start with one task, then promote what helped
- Ran the optional source-expansion gate against the draft. No additional sources are needed for the current version because it avoids the risky claim categories.
- Verification:
  - `rg -c '^## ' src/content/posts/durable-context-coding-agents.md` → 11
  - Initial parallel `npm run check` raced with `npm run build` on Astro's content data-store and failed with an `ENOENT` rename error.
  - Sequential rerun `npm run check` passed with 0 errors/warnings/hints.
  - Sequential rerun `npm run build` passed.

## Updated Next Action

- Preview and tune the slide deck in local dev at `/posts/durable-context-coding-agents/slides`; then incorporate user feedback and decide whether to keep as a concise talk post or expand later into a longer essay.

## 2026-06-25 Small Polish Pass

- Applied the Oracle-recommended polish edits to `src/content/posts/durable-context-coding-agents.md`:
  - Added a clearer outcome promise on the title slide: the audience should know what belongs in `AGENTS.md`, a skill, a work item, or a check.
  - Changed the running example's evidence wording from future tense to present-tense process language.
  - Strengthened the close with the answer to "isn't this just documentation?": durable context is documentation with a job, invoked by agents, versioned with the repo, and updated when it improves future runs.
- Verification:
  - `npm run check` passed with 0 errors/warnings/hints.
  - `npm run build` passed.

## Updated Next Action

- Preview and tune the slide deck in local dev at `/posts/durable-context-coding-agents/slides`; then incorporate user feedback and decide whether to keep as a concise talk post or expand later into a longer essay.

## 2026-06-25 Meetup Organizer Gist

- Read the original gist at <https://gist.github.com/colmarius/bff9fe53cb8a2f3aec0b469d39470924> and rewrote it around the current presentation direction.
- Added `meetup-organizer-gist.md` as a concise organizer-facing proposal with:
  - updated title and abstract;
  - 20-minute outline;
  - audience and format notes;
  - attendee takeaways;
  - source links;
  - positioning that this is a practical field guide, not a single-tool demo.
- Updated `index.md` artifacts and next action to include the organizer gist.

## Updated Next Action

- Use `meetup-organizer-gist.md` for organizer outreach as needed. Then preview and tune the slide deck in local dev at `/posts/durable-context-coding-agents/slides`; incorporate user feedback and decide whether to keep as a concise talk post or expand later into a longer essay.

## 2026-06-25 Publish Post Direct-Link Only

- User chose to publish the durable context post, then clarified it should not appear on `/posts` yet and should be available by direct link only.
- Changed `src/content/posts/durable-context-coding-agents.md` from `draft: true` to `draft: false` so the post and slides routes are included in production builds.
- Added `unlisted: true` to the post frontmatter.
- Added an `unlisted` field to the posts content schema.
- Updated `/posts` to filter out unlisted posts while still allowing direct routes to build.
- Updated `index.md` to treat the post as direct-link published and make URL confirmation the next action.
- Verification:
  - `npm run check` passed with 0 errors/warnings/hints.
  - `npm run build` passed.
  - Build output contains `dist/posts/durable-context-coding-agents/index.html` and `dist/posts/durable-context-coding-agents/slides/index.html`.
  - Build output for `dist/posts/index.html` does not include "Your Repo Is the Memory".

## Updated Next Action

- Commit the direct-link-only publish change, push to `origin/main`, and confirm deployment status if available.
