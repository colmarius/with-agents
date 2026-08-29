# Prototype and Oracle Review

Four isolated High-mode orb prototypes explored the people grouping:

- A dedicated people page was clear but added 415 lines, another navigation
  route, and a full page of repeated resource cards.
- Integrated people and format filters added 613 lines and made canonical
  resource counts harder to understand alongside matching child summaries.
- An inline five-row editorial sampler stayed server-rendered but occupied most
  of the first viewport and delayed the full catalog.
- A single people select preserved canonical counts but added another state and
  matching dimension to the generic React catalog.

Oracle recommended a smaller hybrid: a closed native disclosure on the main
Coding with Agents page, containing five practitioners and two summary links
per person. This preserves person-oriented discovery without changing catalog
filtering, counts, resource records, summary schema, or thematic navigation.

The curated links use natural Astro summary IDs. Titles and URLs are resolved
from the existing summary manifest so editorial data does not duplicate them.
The component fails the build for missing IDs or two selections for one person
that belong to the same canonical resource container.
