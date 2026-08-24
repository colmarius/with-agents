import { type Resource, resourceTypes } from '../../types/resources.ts';

export type CatalogResource<
  Topic extends string = string,
  Section extends string = string,
> = Resource & {
  topics: Topic[];
  primarySection: Section;
};

type ResourceManifestOptions<Topic extends string, Section extends string> = {
  label: string;
  isTopic: (value: unknown) => value is Topic;
  isSection: (value: unknown) => value is Section;
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

export const validateResourceManifest = <
  Topic extends string,
  Section extends string,
>(
  value: unknown,
  options: ResourceManifestOptions<Topic, Section>,
): CatalogResource<Topic, Section>[] => {
  if (!Array.isArray(value)) {
    throw new TypeError(`${options.label} resources must be an array`);
  }

  return value.map((resource, index) => {
    const prefix = `${options.label} resource $[${index}]`;
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
      fields.topics.some((topic) => !options.isTopic(topic))
    ) {
      throw new TypeError(
        `${prefix} has invalid topics ${JSON.stringify(fields.topics)}`,
      );
    }
    if (!options.isSection(fields.primarySection)) {
      throw new TypeError(
        `${prefix} has invalid primarySection ${JSON.stringify(fields.primarySection)}`,
      );
    }

    return resource as CatalogResource<Topic, Section>;
  });
};
