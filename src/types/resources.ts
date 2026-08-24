import type { ResourceSectionKey } from '../data/resources/sections.ts';

export const resourceTypes = [
  'article',
  'playlist',
  'podcast',
  'video',
] as const;
export const resourceTopics = [
  'architecture-maintainability',
  'business-adoption',
  'collaboration-teams',
  'context-memory',
  'models-evaluation',
  'open-source-ecosystem',
  'prompting-orchestration',
  'review-verification',
  'safety-permissions',
  'tools-harnesses',
] as const;

export type ResourceType = (typeof resourceTypes)[number];
export type ResourceTopic = (typeof resourceTopics)[number];

export type Resource = {
  id: number;
  title: string;
  subtitle?: string;
  url: string;
  description: string;
  type: ResourceType;
  source: string;
  date: string;
  duration?: string;
  topics: string[];
};

export type CodingResource = Resource & {
  topics: ResourceTopic[];
  primarySection: ResourceSectionKey;
};

export type ResourceTopicOption = {
  slug: string;
  label: string;
};

export type ResourceSection = {
  key: string;
  label: string;
  description: string;
  routeSlug: string;
};

export type ResourceCatalog = {
  slug: string;
  title: string;
  description: string;
  indexDescription: string;
  sections: readonly ResourceSection[];
  topicOptions: readonly ResourceTopicOption[];
  resourceIds: readonly number[];
  sectionByResourceId: Readonly<Record<number, string>>;
};
