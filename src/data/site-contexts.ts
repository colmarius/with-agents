export const siteContextSlugs = ['coding', 'cloud', 'security', 'ai'] as const;

export type SiteContextSlug = (typeof siteContextSlugs)[number];

export type SiteContext = {
  slug: SiteContextSlug;
  navigationLabel: string;
  title: string;
  promise: string;
  description: string;
  catalogSlug: string;
  featuredPostIds?: readonly string[];
};

export const siteContexts = [
  {
    slug: 'coding',
    navigationLabel: 'Coding',
    title: 'Coding with Agents',
    promise: 'Build better software with coding agents.',
    description:
      'Scope a task, brief a coding agent, coordinate the work, and check the result.',
    catalogSlug: 'coding-with-agents',
    featuredPostIds: [
      'agentic-coding-2026',
      'capable-coworker-coding-agents',
      'durable-context-coding-agents',
      'make-the-agent-prove-it',
    ],
  },
  {
    slug: 'cloud',
    navigationLabel: 'Cloud',
    title: 'Cloud / GCP',
    promise: 'Build and operate cloud systems with clearer context.',
    description:
      'Reviewed, source-backed guidance on cloud architecture, services, data systems, reliability, operations, and cost, beginning with Google Cloud.',
    catalogSlug: 'cloud',
  },
  {
    slug: 'security',
    navigationLabel: 'Security',
    title: 'Security',
    promise: 'Treat security as an engineering system.',
    description:
      'Reviewed, source-backed guidance across cloud security, applications, identity, data protection, threat response, governance, and compliance.',
    catalogSlug: 'security',
  },
  {
    slug: 'ai',
    navigationLabel: 'AI',
    title: 'AI',
    promise: 'Understand AI capabilities, economics, and consequences.',
    description:
      'Source-backed resources and commentary on how AI works, its industry and economics, and its implications for work, learning, research, and society.',
    catalogSlug: 'ai',
  },
] as const satisfies readonly SiteContext[];
