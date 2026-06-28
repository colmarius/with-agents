---
name: article-writing
description: "Write and refresh public posts under src/content/posts with a consistent house style. Use when drafting, tightening, retiring, or removing articles. Triggers on: write article, refresh post, tighten article, style pass, retire draft, remove draft."
---

# Article Writing Skill

Write and maintain the public coding-agent series with a consistent, source-backed
house style. Use this skill for new posts, refresh passes, draft retirement, and
explicitly approved draft removal.

The always-visible contract lives in root `AGENTS.md` under "Article writing." This
skill adds the repeatable workflow and the checklists.

## House Style

- **Audience:** experienced developers, tech leads, and agent-heavy practitioners
  who want practical coding-agent workflows.
- **Tone:** direct, calm, source-backed, concise; skeptical but constructive. Not
  salesy, not manifesto-like, not slangy.
- **Structure:** important point first. Active sentences. Short paragraphs. Concrete
  examples and prompts over abstraction. No throat-clearing or meta-history.
- **Shape:** 4–6 substantive sections plus a `Sources` section when practical. Lead
  each section with its takeaway, not setup.
- **Length:** prefer the shortest version that keeps the argument. When refreshing,
  cut roughly 20–30% without flattening the point. If a post stays above target,
  say why in the work-item progress log.

## Source-Anchor Hygiene

- Each timestamp or citation must support the specific claim beside it.
- Mark author synthesis as synthesis (for example, "that table is synthesis, not a
  quote").
- Keep only the anchors a post needs. Do not repeat the same source recap across
  posts; each post carries its own evidence.
- Do not remove source anchors for factual claims that still need support.
- Do not add new product claims (for example, about Amp) unless verified against
  current first-party sources.

## Internal-Link Hygiene

- Link only to routes that exist in this repo. Confirm with:

  ```sh
  rg "/posts/<slug>" src/pages src/content
  ```

- Never link retired drafts or old/unavailable article routes from a public post.
- Keep the public series coherent and cross-linked by role: field guide as the map,
  durable-context as repo memory, prove-it as the evidence ladder, small-threads as
  the operating procedure, Amp as the case study.

## Workflow

### 1. Frame the job

- New post or refresh? What single argument must it carry?
- Which existing posts does it link to, and what is this post's distinct role?
- Set a word-count target and the sections that earn their place.

### 2. Draft or trim

- Lead with the takeaway, then support it.
- Keep useful tables, prompts, checklists, and source-backed timestamps.
- Cut meta-history ("what changed from the old draft"), duplicated source recaps,
  and sections whose only job is explaining a prior version.
- Replace passive throat-clearing with the concrete claim.

### 3. Verify claims and links

- Re-read each source anchor against the sentence it supports.
- Confirm every internal link resolves to a real route.
- Check frontmatter still matches `src/content.config.ts` (title, description,
  pubDate, tags, draft, order).

### 4. Build and record

```sh
npm run check
npm run build
```

Run `npm run lint:fix` if formatting changed. Record per-post word counts
before/after and verification results in the active work item's `progress.md`.

## Retiring Or Removing A Draft

When a draft is stale but should not be deleted:

- Keep valid frontmatter and `draft: true` (unpublished).
- Replace the body with a short retired-draft note: retired, unpublished, not
  maintained, do not publish or link as-is, use the current public series instead,
  revive only after fresh source/product verification.
- Remove old setup instructions, stale route links, old product/UI claims, and old
  article-route references from the body.

When deletion is explicitly approved:

- Delete the draft file instead of leaving a retired note.
- Confirm no public source or built route links to the removed slug.
- Update any active work item or release note so future agents know the route was
  intentionally removed rather than accidentally hidden.

## Checklists

### Style

- [ ] Important point first in each section.
- [ ] Active voice, short paragraphs, concrete examples.
- [ ] No throat-clearing, no manifesto tone, no sales pitch.
- [ ] 4–6 substantive sections plus `Sources` when practical.

### Length

- [ ] Cut ~20–30% on a refresh without losing core claims.
- [ ] Per-post target met, or the exception is explained in `progress.md`.

### Sources

- [ ] Every anchor supports the adjacent claim.
- [ ] Synthesis is labeled as synthesis.
- [ ] No duplicated source recaps across posts.
- [ ] No unsupported new product claims.

### Links

- [ ] Internal links resolve to real routes.
- [ ] No links to retired drafts or removed routes.
- [ ] Series cross-links keep their roles coherent.

### Draft retirement/removal

- [ ] If retained, `draft: true` kept; frontmatter valid.
- [ ] If retained, body is a short retired-draft note only.
- [ ] If deleted, no public source or built route links to the removed slug remain.
- [ ] No stale setup, routes, or product claims remain.

### Verification

- [ ] `npm run check` passes.
- [ ] `npm run build` passes.
- [ ] `git diff --check` is clean.
- [ ] Word counts and results recorded in the work item.

## Definition Of Done

The post carries one clear argument in the house style, every source anchor and
internal link checks out, length targets are met or explained, stale drafts are
retired or explicitly deleted, and `npm run check` + `npm run build` pass with
results recorded in the work item.
