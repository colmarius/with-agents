import type { ResourceSectionKey } from '../data/resources/sections.ts';

export type ResourceTopic =
  | 'architecture-maintainability'
  | 'business-adoption'
  | 'collaboration-teams'
  | 'context-memory'
  | 'models-evaluation'
  | 'open-source-ecosystem'
  | 'prompting-orchestration'
  | 'review-verification'
  | 'safety-permissions'
  | 'tools-harnesses';

export type CodingResource = {
  id: number;
  title: string;
  subtitle?: string;
  url: string;
  description: string;
  type: 'podcast' | 'video' | 'article' | 'playlist';
  source: string;
  date: string;
  duration?: string;
  topics: ResourceTopic[];
  primarySection: ResourceSectionKey;
};
