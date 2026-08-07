import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import {
  canonicalYoutubeUrl,
  rootDir as defaultRepoRoot,
} from './youtube-transcript-core.mjs';

const readOptional = async (filePath) => {
  try {
    return await readFile(filePath, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      return undefined;
    }
    throw error;
  }
};

const listMarkdown = async (directory) => {
  const files = [];
  const visit = async (current) => {
    let entries;
    try {
      entries = await readdir(current, { withFileTypes: true });
    } catch (error) {
      if (error.code === 'ENOENT') {
        return;
      }
      throw error;
    }
    entries.sort((left, right) => left.name.localeCompare(right.name));
    for (const entry of entries) {
      const entryPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        await visit(entryPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        files.push(entryPath);
      }
    }
  };
  await visit(directory);
  return files;
};

const parseScalar = (rawValue) => {
  const value = rawValue.trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  if (/^-?\d+$/.test(value)) {
    return Number(value);
  }
  return value;
};

const readFrontmatter = (contents) => {
  const match = contents.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) {
    return {};
  }
  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*?)\s*$/);
    if (field) {
      fields[field[1]] = parseScalar(field[2]);
    }
  }
  return fields;
};

const relativePosix = (base, filePath) =>
  path.relative(base, filePath).split(path.sep).join('/');

export const loadStandaloneYoutubeEvidence = async ({
  repoRoot = defaultRepoRoot,
  videoIds,
} = {}) => {
  const transcriptsRoot = path.join(repoRoot, 'src/content/transcripts');
  const summariesRoot = path.join(repoRoot, 'src/content/summaries');
  const resourcesPath = path.join(
    repoRoot,
    'src/data/resources/coding-with-agents.json',
  );
  const byVideoId = new Map();
  const errors = [];

  const resourcesSource = await readOptional(resourcesPath);
  let resources = [];
  if (resourcesSource !== undefined) {
    try {
      const parsed = JSON.parse(resourcesSource);
      if (Array.isArray(parsed)) {
        resources = parsed;
      }
    } catch (error) {
      errors.push(
        `Could not parse standalone resource manifest: ${error.message}`,
      );
    }
  }
  const resourcesById = new Map(
    resources
      .filter((resource) => Number.isInteger(resource?.id))
      .map((resource) => [resource.id, resource]),
  );

  for (const transcriptPath of await listMarkdown(transcriptsRoot)) {
    const transcript = await readFile(transcriptPath, 'utf8');
    const fields = readFrontmatter(transcript);
    if (
      typeof fields.videoId !== 'string' ||
      typeof fields.summarySlug !== 'string' ||
      typeof fields.sourceUrl !== 'string'
    ) {
      continue;
    }

    const videoId = fields.videoId;
    if (videoIds && !videoIds.has(videoId)) {
      continue;
    }
    const transcriptRelative = relativePosix(transcriptsRoot, transcriptPath);
    const expectedTranscriptRelative = `${fields.summarySlug}.md`;
    if (transcriptRelative !== expectedTranscriptRelative) {
      errors.push(
        `Standalone transcript ${transcriptRelative} summarySlug must match its path.`,
      );
      continue;
    }
    if (fields.sourceUrl !== canonicalYoutubeUrl(videoId)) {
      errors.push(
        `Standalone transcript ${transcriptRelative} sourceUrl must match video ${videoId}.`,
      );
      continue;
    }

    const summaryPath = path.join(summariesRoot, `${fields.summarySlug}.md`);
    const summary = await readOptional(summaryPath);
    if (summary === undefined) {
      errors.push(
        `Standalone transcript ${transcriptRelative} has no matching public summary.`,
      );
      continue;
    }
    const summaryFields = readFrontmatter(summary);
    const resource = resourcesById.get(summaryFields.resourceId);
    if (!resource) {
      errors.push(
        `Standalone summary ${fields.summarySlug}.md has no matching resource.`,
      );
      continue;
    }
    const canonicalVideoResource =
      resource.url === canonicalYoutubeUrl(videoId);
    const curatedCollectionResource =
      resource.type === 'playlist' &&
      summaryFields.videoId === videoId &&
      typeof summaryFields.collection === 'string' &&
      Number.isInteger(summaryFields.order) &&
      summaryFields.order > 0;
    if (!canonicalVideoResource && !curatedCollectionResource) {
      errors.push(
        `Standalone summary ${fields.summarySlug}.md must resolve to video ${videoId} through a canonical video resource or curated collection item.`,
      );
      continue;
    }
    if (byVideoId.has(videoId)) {
      byVideoId.delete(videoId);
      errors.push(`Multiple standalone transcripts claim video ${videoId}.`);
      continue;
    }

    byVideoId.set(videoId, {
      videoId,
      transcriptPath,
      summaryPath,
      summarySlug: fields.summarySlug,
      resourceId: summaryFields.resourceId,
      status: 'reviewed',
    });
  }

  return { byVideoId, errors };
};
