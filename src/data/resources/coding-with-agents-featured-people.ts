export type FeaturedPerson = {
  name: string;
  summaryIds: readonly [string, string];
};

export const codingWithAgentsFeaturedPeople = [
  {
    name: 'Simon Willison',
    summaryIds: [
      'coding-with-agents/simon-willison-engineering-practices-that-make-coding-agents-work',
      'coding-with-agents/how-ai-is-changing-software-development-with-simon-willison',
    ],
  },
  {
    name: 'Mario Zechner',
    summaryIds: [
      'coding-with-agents/practical-guide-to-agentic-computering',
      'coding-with-agents/building-pi-and-what-makes-self-modifying-software-so-fascinating',
    ],
  },
  {
    name: 'Salvatore Sanfilippo',
    summaryIds: [
      'coding-with-agents/qualities-of-tomorrows-programmers-salvatore-sanfilippo',
      'coding-with-agents/salvatore-sanfilippo-coding-with-ai',
    ],
  },
  {
    name: 'Armin Ronacher',
    summaryIds: [
      'coding-with-agents/a-year-of-agents-armin-ronacher-codecrafts-2026',
      'coding-with-agents/state-of-agentic-coding-episode-9',
    ],
  },
  {
    name: 'Thorsten Ball',
    summaryIds: [
      'coding-with-agents/think-harder-how-i-prompt-thorsten-ball',
      'coding-with-agents/agentic-engineering-explained-by-a-10x-developer',
    ],
  },
] as const satisfies readonly FeaturedPerson[];
