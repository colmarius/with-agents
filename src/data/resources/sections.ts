export const resourceSections = [
  {
    key: 'workflows',
    label: 'Working with Coding Agents',
    description:
      'Practical ways to scope, prompt, delegate, coordinate, inspect, and complete software work with coding agents.',
    routeSlug: 'workflows',
  },
  {
    key: 'agent-systems',
    label: 'Building Coding Agent Systems',
    description:
      'How models, prompts, tools, harnesses, context systems, evaluation, orchestration, and execution infrastructure shape coding-agent products.',
    routeSlug: 'agent-systems',
  },
  {
    key: 'reliability',
    label: 'Reliable Agentic Engineering',
    description:
      'Practices for making agent-generated and agent-operated systems reviewable, correct, secure, maintainable, and safe to run.',
    routeSlug: 'reliability',
  },
  {
    key: 'teams-ecosystem',
    label: 'Teams & the Software Ecosystem',
    description:
      'How coding agents change collaboration, developer roles, product organizations, adoption, economics, and open-source communities.',
    routeSlug: 'teams-ecosystem',
  },
] as const;

export type ResourceSection = (typeof resourceSections)[number];
export type ResourceSectionKey = ResourceSection['key'];

export const isResourceSectionKey = (
  value: unknown,
): value is ResourceSectionKey =>
  resourceSections.some((section) => section.key === value);
