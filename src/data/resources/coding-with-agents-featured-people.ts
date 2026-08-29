export type FeaturedPerson = {
  name: string;
  summaryIds: readonly [string, string, ...string[]];
};

export const codingWithAgentsFeaturedPeople = [
  {
    name: 'Simon Willison',
    summaryIds: [
      'coding-with-agents/simon-willison-engineering-practices-that-make-coding-agents-work',
      'coding-with-agents/how-ai-is-changing-software-development-with-simon-willison',
      'coding-with-agents/ai-coding-paradigm-shift-simon-willison',
      'coding-with-agents/an-ai-state-of-the-union',
    ],
  },
  {
    name: 'Mario Zechner',
    summaryIds: [
      'coding-with-agents/pi-building-pi-openclaws-minimalist-coding-agent',
      'coding-with-agents/practical-guide-to-agentic-computering',
      'coding-with-agents/i-hated-every-coding-agent-so-i-built-my-own-mario-zechner-pi',
      'coding-with-agents/state-of-agentic-coding-episode-8',
      'coding-with-agents/building-pi-and-what-makes-self-modifying-software-so-fascinating',
    ],
  },
  {
    name: 'Salvatore Sanfilippo',
    summaryIds: [
      'coding-with-agents/qualities-of-tomorrows-programmers-salvatore-sanfilippo',
      'coding-with-agents/salvatore-sanfilippo-coding-with-ai',
      'coding-with-agents/ai-fomo-part-1-what-actually-compounds',
      'coding-with-agents/ai-fomo-part-2-attention-wealth-and-professional-relevance',
    ],
  },
  {
    name: 'Armin Ronacher',
    summaryIds: [
      'coding-with-agents/a-year-of-agents-armin-ronacher-codecrafts-2026',
      'coding-with-agents/the-friction-is-your-judgment-armin-ronacher-cristina-poncela-cubeiro',
      'coding-with-agents/building-pi-and-what-makes-self-modifying-software-so-fascinating',
      'coding-with-agents/state-of-agentic-coding-episode-9',
    ],
  },
  {
    name: 'Thorsten Ball',
    summaryIds: [
      'coding-with-agents/think-harder-how-i-prompt-thorsten-ball',
      'coding-with-agents/agentic-engineering-explained-by-a-10x-developer',
      'coding-with-agents/raising-an-agent-season-2-episode-2',
      'coding-with-agents/raising-an-agent-season-2-episode-1',
      'coding-with-agents/llms-are-killing-agent-harness',
    ],
  },
  {
    name: 'Matt Pocock',
    summaryIds: [
      'coding-with-agents/matt-pococks-agentic-engineering-workflow',
      'coding-with-agents/mattpocock-skills-complete-ai-coding-workflow',
      'coding-with-agents/prototype-instead-of-specs',
      'coding-with-agents/wayfinder-nothing-too-big-to-plan',
    ],
  },
  {
    name: 'David Heinemeier Hansson (DHH)',
    summaryIds: [
      'coding-with-agents/dhh-future-of-programming-ai-agentic-engineering',
      'coding-with-agents/dhhs-new-way-of-writing-code',
      'coding-with-agents/pencils-down-rework',
      'coding-with-agents/bring-your-ai-agents-to-basecamp-rework',
    ],
  },
] as const satisfies readonly FeaturedPerson[];
