import { type Resource, resourceTypes } from '../../types/resources.ts';
import rawGoogleCloudResources from './google-cloud.json' with { type: 'json' };

export type GoogleCloudResource = Resource & {
  primarySection: string;
};

const resourceTypeSet = new Set<string>(resourceTypes);
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

export const validateGoogleCloudResources = (
  value: unknown,
): GoogleCloudResource[] => {
  if (!Array.isArray(value)) {
    throw new TypeError('Google Cloud resources must be an array');
  }

  return value.map((resource, index) => {
    const prefix = `Google Cloud resource $[${index}]`;
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
        (topic) => typeof topic !== 'string' || topic.length === 0,
      )
    ) {
      throw new TypeError(
        `${prefix} has invalid topics ${JSON.stringify(fields.topics)}`,
      );
    }
    if (
      typeof fields.primarySection !== 'string' ||
      fields.primarySection.length === 0
    ) {
      throw new TypeError(
        `${prefix} has invalid primarySection ${JSON.stringify(fields.primarySection)}`,
      );
    }

    return resource as GoogleCloudResource;
  });
};

export const googleCloudResources = validateGoogleCloudResources(
  rawGoogleCloudResources,
);
