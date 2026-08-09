import {
  type CodingResource,
  resourceTopics,
  resourceTypes,
} from '../../types/resources.ts';
import rawCodingResources from './coding-with-agents.json' with {
  type: 'json',
};
import { isResourceSectionKey } from './sections.ts';

const resourceTypeSet = new Set<string>(resourceTypes);
const resourceTopicSet = new Set<string>(resourceTopics);
const requiredStringFields = ['title', 'url', 'description', 'source'] as const;
const optionalStringFields = ['subtitle', 'duration'] as const;

const isValidDate = (value: unknown): value is string => {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }
  const date = new Date(`${value}T00:00:00Z`);
  return (
    !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value
  );
};

export const validateCodingResources = (value: unknown): CodingResource[] => {
  if (!Array.isArray(value)) {
    throw new TypeError('Coding with Agents resources must be an array');
  }

  return value.map((resource, index) => {
    const prefix = `Coding with Agents resource $[${index}]`;
    if (typeof resource !== 'object' || resource === null) {
      throw new TypeError(`${prefix} must be an object`);
    }

    const fields = resource as Record<string, unknown>;
    if (!Number.isInteger(fields.id) || (fields.id as number) <= 0) {
      throw new TypeError(
        `${prefix} has invalid id ${JSON.stringify(fields.id)}`,
      );
    }
    for (const field of requiredStringFields) {
      if (typeof fields[field] !== 'string' || fields[field].length === 0) {
        throw new TypeError(
          `${prefix} has invalid ${field} ${JSON.stringify(fields[field])}`,
        );
      }
    }
    for (const field of optionalStringFields) {
      if (fields[field] !== undefined && typeof fields[field] !== 'string') {
        throw new TypeError(
          `${prefix} has invalid ${field} ${JSON.stringify(fields[field])}`,
        );
      }
    }
    if (typeof fields.type !== 'string' || !resourceTypeSet.has(fields.type)) {
      throw new TypeError(
        `${prefix} has invalid type ${JSON.stringify(fields.type)}`,
      );
    }
    if (!isValidDate(fields.date)) {
      throw new TypeError(
        `${prefix} has invalid date ${JSON.stringify(fields.date)}`,
      );
    }
    if (
      !Array.isArray(fields.topics) ||
      fields.topics.some(
        (topic) => typeof topic !== 'string' || !resourceTopicSet.has(topic),
      )
    ) {
      throw new TypeError(
        `${prefix} has invalid topics ${JSON.stringify(fields.topics)}`,
      );
    }
    if (!isResourceSectionKey(fields.primarySection)) {
      throw new TypeError(
        `${prefix} has invalid primarySection ${JSON.stringify(fields.primarySection)}`,
      );
    }

    return resource as CodingResource;
  });
};

export const codingResources = validateCodingResources(rawCodingResources);
