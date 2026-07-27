# Publication strategy research

## Source state

The completed YouTube knowledge library contains two Salvatore Sanfilippo
playlists:

- `AI concepts`: 63 playlist positions, 62 unique video IDs, and 59 unique
  captured transcript/summary pairs.
- `Coding with AI`: 30 playlist positions and 25 captured transcript/summary
  pairs.
- Across both playlists: 86 unique video IDs, 78 captured videos, and 8 durable
  unavailable records. Six captured videos appear in both playlists.

The source corpus, playlist overviews, and cross-playlist author synthesis are
complete but remain editorial drafts under `src/content/youtube/`. That tree is
explicitly source-only: no public route, collection, component, or production
bundle may import or expose it. Public content must be a separately reviewed
derivative under the existing public content paths.

## Existing public surfaces

The repository already has two useful presentation models:

1. `src/content/posts/` provides canonical, indexable narrative articles with
   generated slide views. This is the right surface for a coherent teaching
   argument.
2. `/resources/coding-with-agents` provides searchable resource cards and
   summary modals. A playlist can have either an episode series or one
   playlist-level summary. This is the right surface for source discovery and a
   curated viewing path.

No schema, route, or component change is required for the recommended first
release. Two new `playlist` manifest entries can each map to one summary file
without `series` or `episode` frontmatter.

## Options considered

### One synthesis post only

This teaches a coherent argument but makes the two source playlists harder to
discover and gives readers no concise viewing path. It also asks one article to
serve both explanation and catalog navigation.

### Resource summaries only

This is easy to ship and fits the existing hub, but a modal summary is a weak
place for a cross-playlist thesis. Readers can scan topics but do not get a
durable explanation of how the author's conceptual and engineering positions
connect.

### Public per-video pages or summaries

Publishing all 78 captures would create a large review backlog, overwhelm the
resource hub, and weaken the site's preference for a few high-signal posts. It
would also blur the explicit source-only/publication boundary.

### Dedicated author or playlist route

A custom author hub could eventually support several authors or many published
collections, but it adds a new information architecture for one author and two
playlists. The current post and resource surfaces already cover the learning
and discovery needs.

### Recommended hybrid

Publish:

- one post whose thesis is that observed behavior and evidence should outrank
  persuasive explanations, architecture stories, and benchmark impressions;
- one `Coding with AI` playlist card with a concise orientation and curated
  starting path;
- one `AI concepts` playlist card framed as the conceptual grounding behind
  the coding-agent positions, also with a concise starting path.

The post is argument-shaped. The two summaries are navigation-shaped. This
keeps overlap useful rather than duplicative.

## Scope of the first post

The cross-playlist corpus contains at least three publishable clusters:

1. LLM representations, reasoning, and evidence, connected to supervision
   discipline.
2. The developer's changing role, review boundaries, attention, and fatigue.
3. Local inference, DwarfStar, hardware-aware model systems, and efficiency.

One post stays coherent only if the first cluster is its spine, with the second
as the practical consequence. The first release should exclude the third
cluster except for a short pointer to the playlist summaries. DwarfStar and
local inference can become a later systems case study only if there is a clear
reader need and a separate evidence review.

Suggested post framing:

> **Behavior Over Explanation: Salvatore Sanfilippo on AI and Coding Agents**

Suggested section path:

1. A research notebook, not a doctrine.
2. Next-token prediction is a mechanism, not a complete explanation.
3. Behavior should outrank architecture stories and persuasive diagnoses.
4. The center of effort moves from lines toward architecture and outcomes, but
   implementation knowledge still matters.
5. Human attention is a system constraint.
6. A short set of practices readers can adopt.
7. What this synthesis deliberately leaves out.
8. Sources used.

The chronology should preserve tension rather than manufacture one stable
doctrine: early-2026 concerns about lost implementation practice and supervision
fatigue sit beside the July 2026 argument for replacing exhaustive line review
with architecture, dialogue, and behavioral QA.

## Editorial and citation policy

- Use no verbatim quotations in the first release. The captions are Italian and
  some are auto-generated; checking audio, transcribing exact Italian, and
  translating it defensibly adds risk without improving the core lesson.
- Put one disclosure near the start of every public artifact: all English
  wording is editorial translation/paraphrase of Italian captions and nothing
  is a verbatim quotation.
- Attribute author claims with calibrated verbs such as `argues`, `reports`,
  `proposes`, or `forecasts`. Mark cross-source interpretation in normal prose
  with phrases such as `reading across the playlists`; do not copy the internal
  `Editorial:` prefix into public prose.
- Link public citations directly to timestamped YouTube URLs. Never link public
  pages to the source-only transcripts, summaries, or their GitHub locations.
- Attach publication dates to claims about how the author's position changed.
- Review the selected evidence chain, not all 81 draft editorial artifacts.
  Public claims must be checked against the relevant summary, transcript chunk,
  metadata/date, and at least one playback timestamp per cited video. This
  claim-level review does not by itself justify changing an entire internal
  summary from `draft` to `reviewed`.

## Oracle review

Oracle approved the hybrid strategy with three material refinements:

1. Keep the main post on the evidence-and-supervision spine; do not let local
   inference or DwarfStar turn it into a survey.
2. Use paraphrase only in the first release rather than allowing exceptional
   translated quotations.
3. Let the post select evidence for an argument while each resource summary
   selects videos for orientation. A small amount of overlap is useful.

Oracle also recommended a graceful fallback: if the post does not survive the
coherence and evidence checkpoint, the two playlist entries can ship on their
own while the post is re-scoped. The Oracle response mentioned 84 videos in one
suggested introduction; repository evidence is authoritative and the correct
corpus count is 78 captured videos across 86 unique IDs.

## Risks

1. **Misrepresenting a named author through translated captions.** Use
   paraphrase only, calibrated attribution, transcript checks, and playback
   spot-checks.
2. **An incoherent survey post.** Exclude local-inference economics, DwarfStar
   implementation history, and broad architecture-paper coverage from v1.
3. **Leaking the source-only tree.** Copy no relative internal links and import
   nothing from `src/content/youtube/` into the public site.
4. **Duplicating the post in resource summaries.** Keep the post explanatory
   and the summaries navigational, with `Where to start` video lists.
5. **Scope drift in the Coding with Agents hub.** Describe `AI concepts` as
   conceptual grounding for model evaluation and coding-agent judgment. If it
   still feels out of place during review, omit that card and link the playlist
   from the `Coding with AI` summary.
6. **Staleness.** Frame the synthesis as an as-of-mid-2026 reading and preserve
   source dates; update the lighter playlist summaries as the playlists evolve.
