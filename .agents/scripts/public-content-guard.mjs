#!/usr/bin/env node
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { listPublicResourceManifestPaths } from './lib/public-resource-manifests.mjs';
import { resolvePlaylistEditorialScope } from './lib/youtube-library-curation.mjs';
import { readResourceIntakeDecisions } from './lib/youtube-resource-intake.mjs';
import {
  hasFullStandaloneEvidence,
  loadStandaloneYoutubeEvidence,
} from './lib/youtube-standalone-evidence.mjs';

const resourceTypes = new Set(['article', 'playlist', 'podcast', 'video']);

export const publicSourceExceptions = [];

const defaultRepoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
);

const durableContextDeck = {
  assetDirectory: 'public/slides/durable-context-coding-agents-image-deck',
  canonicalPost: 'src/content/posts/durable-context-coding-agents.md',
  expectedImageCount: 16,
  imageDeckPost:
    'src/content/posts/durable-context-coding-agents-image-deck.md',
  imageHeight: 941,
  imageWidth: 1672,
  publicImagePrefix: '/slides/durable-context-coding-agents-image-deck/',
  slideRoute: '/coding/posts/durable-context-coding-agents-image-deck/slides/',
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const listFiles = async (directory, extension) => {
  const files = [];
  const visit = async (currentDirectory) => {
    const entries = await readdir(currentDirectory, { withFileTypes: true });
    entries.sort((left, right) => left.name.localeCompare(right.name));
    for (const entry of entries) {
      const entryPath = path.join(currentDirectory, entry.name);
      if (entry.isDirectory()) {
        await visit(entryPath);
      } else if (entry.isFile() && entry.name.endsWith(extension)) {
        files.push(entryPath);
      }
    }
  };
  await visit(directory);
  return files;
};

export const readFrontmatter = (contents) => {
  const match = contents.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) {
    return {};
  }

  const frontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*?)\s*$/);
    if (!field) {
      continue;
    }
    const [, key, rawValue] = field;
    if (rawValue === 'true' || rawValue === 'false') {
      frontmatter[key] = rawValue === 'true';
    } else if (/^-?\d+$/.test(rawValue)) {
      frontmatter[key] = Number(rawValue);
    } else {
      frontmatter[key] = rawValue.replace(/^(['"])(.*)\1$/, '$2');
    }
  }
  return frontmatter;
};

export const parseJsonWithDuplicateKeys = (source) => {
  let index = 0;
  const duplicateKeys = [];
  const fail = (message) => {
    throw new SyntaxError(`${message} at character ${index}`);
  };
  const skipWhitespace = () => {
    while (/\s/.test(source[index] ?? '')) {
      index += 1;
    }
  };
  const parseString = () => {
    if (source[index] !== '"') {
      fail('Expected a JSON string');
    }
    const start = index;
    index += 1;
    while (index < source.length) {
      if (source[index] === '\\') {
        index += 2;
        continue;
      }
      if (source[index] === '"') {
        index += 1;
        return JSON.parse(source.slice(start, index));
      }
      index += 1;
    }
    fail('Unterminated JSON string');
  };
  const parseValue = (jsonPath) => {
    skipWhitespace();
    if (source[index] === '{') {
      return parseObject(jsonPath);
    }
    if (source[index] === '[') {
      return parseArray(jsonPath);
    }
    if (source[index] === '"') {
      return parseString();
    }
    for (const [literal, value] of [
      ['true', true],
      ['false', false],
      ['null', null],
    ]) {
      if (source.startsWith(literal, index)) {
        index += literal.length;
        return value;
      }
    }
    const number = source
      .slice(index)
      .match(/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/);
    if (!number) {
      fail('Expected a JSON value');
    }
    index += number[0].length;
    return Number(number[0]);
  };
  const parseObject = (jsonPath) => {
    const value = {};
    const keys = new Set();
    index += 1;
    skipWhitespace();
    if (source[index] === '}') {
      index += 1;
      return value;
    }
    while (index < source.length) {
      skipWhitespace();
      const key = parseString();
      const keyPath = `${jsonPath}.${key}`;
      if (keys.has(key)) {
        duplicateKeys.push(keyPath);
      }
      keys.add(key);
      skipWhitespace();
      if (source[index] !== ':') {
        fail('Expected a colon after a JSON object key');
      }
      index += 1;
      value[key] = parseValue(keyPath);
      skipWhitespace();
      if (source[index] === '}') {
        index += 1;
        return value;
      }
      if (source[index] !== ',') {
        fail('Expected a comma or closing brace');
      }
      index += 1;
    }
    fail('Unterminated JSON object');
  };
  const parseArray = (jsonPath) => {
    const value = [];
    index += 1;
    skipWhitespace();
    if (source[index] === ']') {
      index += 1;
      return value;
    }
    while (index < source.length) {
      value.push(parseValue(`${jsonPath}[${value.length}]`));
      skipWhitespace();
      if (source[index] === ']') {
        index += 1;
        return value;
      }
      if (source[index] !== ',') {
        fail('Expected a comma or closing bracket');
      }
      index += 1;
    }
    fail('Unterminated JSON array');
  };

  const value = parseValue('$');
  skipWhitespace();
  if (index !== source.length) {
    fail('Unexpected content after the JSON value');
  }
  return { value, duplicateKeys };
};

const extractKnownReferences = (contents, ids) => {
  if (ids.size === 0) {
    return [];
  }
  const pattern = [...ids]
    .sort(
      (left, right) => right.length - left.length || left.localeCompare(right),
    )
    .map(escapeRegExp)
    .join('|');
  const matches = new Map();
  const expression = new RegExp(
    `(?<![A-Za-z0-9_-])(${pattern})(?![A-Za-z0-9_-])`,
    'g',
  );
  for (const match of contents.matchAll(expression)) {
    if (!matches.has(match[1])) {
      matches.set(match[1], contents.slice(0, match.index).split('\n').length);
    }
  }
  return [...matches].map(([id, line]) => ({ id, line }));
};

export const extractTrackedReferences = (
  contents,
  { videoIds, playlistIds },
) => ({
  videos: extractKnownReferences(contents, videoIds),
  playlists: extractKnownReferences(contents, playlistIds),
});

export const readWebpDimensions = (contents) => {
  if (
    contents.length < 20 ||
    contents.toString('ascii', 0, 4) !== 'RIFF' ||
    contents.toString('ascii', 8, 12) !== 'WEBP'
  ) {
    throw new Error('not a valid WebP RIFF container');
  }

  let offset = 12;
  while (offset + 8 <= contents.length) {
    const chunkType = contents.toString('ascii', offset, offset + 4);
    const chunkSize = contents.readUInt32LE(offset + 4);
    const payloadOffset = offset + 8;
    const payloadEnd = payloadOffset + chunkSize;
    if (payloadEnd > contents.length) {
      throw new Error(`truncated ${chunkType} chunk`);
    }

    if (chunkType === 'VP8X' && chunkSize >= 10) {
      return {
        height: contents.readUIntLE(payloadOffset + 7, 3) + 1,
        width: contents.readUIntLE(payloadOffset + 4, 3) + 1,
      };
    }
    if (
      chunkType === 'VP8 ' &&
      chunkSize >= 10 &&
      contents[payloadOffset + 3] === 0x9d &&
      contents[payloadOffset + 4] === 0x01 &&
      contents[payloadOffset + 5] === 0x2a
    ) {
      return {
        height: contents.readUInt16LE(payloadOffset + 8) & 0x3fff,
        width: contents.readUInt16LE(payloadOffset + 6) & 0x3fff,
      };
    }
    if (
      chunkType === 'VP8L' &&
      chunkSize >= 5 &&
      contents[payloadOffset] === 0x2f
    ) {
      const dimensions = contents.readUInt32LE(payloadOffset + 1);
      return {
        height: ((dimensions >> 14) & 0x3fff) + 1,
        width: (dimensions & 0x3fff) + 1,
      };
    }

    offset = payloadEnd + (chunkSize % 2);
  }

  throw new Error('WebP dimensions were not found');
};

export const validateDurableContextImageDeck = async (repoRoot, errors) => {
  let imageDeckPost;
  try {
    imageDeckPost = await readFile(
      path.join(repoRoot, durableContextDeck.imageDeckPost),
      'utf8',
    );
  } catch (error) {
    if (error.code === 'ENOENT') {
      try {
        await readFile(
          path.join(repoRoot, durableContextDeck.canonicalPost),
          'utf8',
        );
      } catch (canonicalError) {
        if (canonicalError.code === 'ENOENT') {
          return;
        }
        throw canonicalError;
      }
      errors.push(`${durableContextDeck.imageDeckPost} is missing`);
      return;
    }
    throw error;
  }

  let canonicalPost;
  try {
    canonicalPost = await readFile(
      path.join(repoRoot, durableContextDeck.canonicalPost),
      'utf8',
    );
  } catch (error) {
    if (error.code === 'ENOENT') {
      errors.push(
        `${durableContextDeck.canonicalPost} is missing while the image deck is published`,
      );
    } else {
      throw error;
    }
  }

  if (canonicalPost && !canonicalPost.includes(durableContextDeck.slideRoute)) {
    errors.push(
      `${durableContextDeck.canonicalPost} must link to ${durableContextDeck.slideRoute}`,
    );
  }

  const headings = [...imageDeckPost.matchAll(/^##\s+(.+?)\s*$/gm)].map(
    (match) => match[1],
  );
  const presentationHeadings = headings.filter(
    (heading) => !['sources', 'sources used'].includes(heading.toLowerCase()),
  );
  if (presentationHeadings.length !== durableContextDeck.expectedImageCount) {
    errors.push(
      `${durableContextDeck.imageDeckPost} must contain ${durableContextDeck.expectedImageCount} presentation sections; found ${presentationHeadings.length}`,
    );
  }
  if (!headings.some((heading) => heading.toLowerCase() === 'sources used')) {
    errors.push(
      `${durableContextDeck.imageDeckPost} must contain a Sources used appendix`,
    );
  }

  const imageExpression = new RegExp(
    `!\\[[^\\]]*\\]\\(${escapeRegExp(durableContextDeck.publicImagePrefix)}([^\\s)]+)\\)`,
    'g',
  );
  const imageReferences = [...imageDeckPost.matchAll(imageExpression)].map(
    (match) => match[1],
  );
  const uniqueImageReferences = new Set(imageReferences);
  if (
    imageReferences.length !== durableContextDeck.expectedImageCount ||
    uniqueImageReferences.size !== durableContextDeck.expectedImageCount
  ) {
    errors.push(
      `${durableContextDeck.imageDeckPost} must reference ${durableContextDeck.expectedImageCount} unique slide images; found ${imageReferences.length} references to ${uniqueImageReferences.size} files`,
    );
  }

  for (const filename of uniqueImageReferences) {
    if (!filename.endsWith('.webp')) {
      errors.push(
        `${durableContextDeck.imageDeckPost} references non-WebP slide image ${filename}`,
      );
      continue;
    }

    const relativePath = path.join(durableContextDeck.assetDirectory, filename);
    let image;
    try {
      image = await readFile(path.join(repoRoot, relativePath));
    } catch (error) {
      if (error.code === 'ENOENT') {
        errors.push(`${relativePath} is missing`);
        continue;
      }
      throw error;
    }

    try {
      const dimensions = readWebpDimensions(image);
      if (
        dimensions.width !== durableContextDeck.imageWidth ||
        dimensions.height !== durableContextDeck.imageHeight
      ) {
        errors.push(
          `${relativePath} must be ${durableContextDeck.imageWidth}x${durableContextDeck.imageHeight}; found ${dimensions.width}x${dimensions.height}`,
        );
      }
    } catch (error) {
      errors.push(`${relativePath} is not a readable WebP: ${error.message}`);
    }
  }

  let assetEntries;
  try {
    assetEntries = await readdir(
      path.join(repoRoot, durableContextDeck.assetDirectory),
      { withFileTypes: true },
    );
  } catch (error) {
    if (error.code === 'ENOENT') {
      errors.push(`${durableContextDeck.assetDirectory} is missing`);
      return;
    }
    throw error;
  }
  const imageAssets = assetEntries
    .filter((entry) => entry.isFile() && /\.(?:png|webp)$/i.test(entry.name))
    .map((entry) => entry.name)
    .sort();
  for (const filename of imageAssets) {
    if (!uniqueImageReferences.has(filename)) {
      errors.push(
        `${durableContextDeck.assetDirectory}/${filename} is an unreferenced deck image asset`,
      );
    }
  }
};

const isValidDate = (value) => {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }
  const date = new Date(`${value}T00:00:00Z`);
  return (
    !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value
  );
};

const validateExceptions = (exceptions, tracked) => {
  const errors = [];
  for (const [index, exception] of exceptions.entries()) {
    const prefix = `publicSourceExceptions[${index}]`;
    if (!['playlist', 'video'].includes(exception.kind)) {
      errors.push(`${prefix} has an invalid kind`);
    } else if (!tracked[`${exception.kind}Ids`].has(exception.id)) {
      errors.push(
        `${prefix} names untracked ${exception.kind} ${exception.id}`,
      );
    }
    if (typeof exception.path !== 'string' || exception.path.length === 0) {
      errors.push(`${prefix} requires a repository-relative path`);
    }
    if (
      typeof exception.reason !== 'string' ||
      exception.reason.trim().length === 0
    ) {
      errors.push(`${prefix} requires a non-empty reason`);
    }
  }
  return errors;
};

const exceptionFor = (exceptions, kind, id, relativePath) =>
  exceptions.find(
    (exception) =>
      exception.kind === kind &&
      exception.id === id &&
      exception.path === relativePath,
  );

const readTrackedLibrary = async (repoRoot, notices) => {
  const youtubeRoot = path.join(repoRoot, 'src/content/youtube');
  const catalog = JSON.parse(
    await readFile(path.join(youtubeRoot, 'catalog.json'), 'utf8'),
  );
  const videoIds = new Set();
  const videoStatuses = new Map();
  const playlistIds = new Set();
  const playlistStatuses = new Map();
  const playlistScopes = new Map();
  const standaloneEligibleVideoIds = new Set();
  const intakeDecisions = [];
  const sourceErrors = [];

  for (const playlist of catalog.playlists) {
    playlistIds.add(playlist.id);
    if (playlist.resourceIntake === true) {
      playlistStatuses.set(playlist.id, 'resource-intake');
      try {
        const decisions = await readResourceIntakeDecisions({
          playlist,
          filePath: path.join(
            youtubeRoot,
            'playlists',
            playlist.slug,
            'intake.json',
          ),
        });
        intakeDecisions.push({ playlist, decisions });
        for (const { videoId } of decisions.processed) {
          standaloneEligibleVideoIds.add(videoId);
        }
      } catch (error) {
        sourceErrors.push(error.message);
      }
      continue;
    }
    const manifest = JSON.parse(
      await readFile(
        path.join(youtubeRoot, 'playlists', playlist.slug, 'manifest.json'),
        'utf8',
      ),
    );
    const occurrences = new Map();
    manifest.entries.forEach((entry, manifestIndex) => {
      videoIds.add(entry.videoId);
      const positions = occurrences.get(entry.videoId) ?? [];
      positions.push(entry.position ?? manifestIndex);
      occurrences.set(entry.videoId, positions);
    });
    for (const [videoId, positions] of occurrences) {
      if (positions.length > 1) {
        notices.push(
          `duplicate manifest occurrence: ${playlist.slug} contains ${videoId} at positions ${positions.join(', ')} (reported, not deduped)`,
        );
      }
    }
    const scope = resolvePlaylistEditorialScope(playlist, manifest);
    playlistScopes.set(playlist.id, scope);
    if (scope.mode === 'curated' && scope.status === 'reviewed') {
      for (const videoId of scope.selectedVideoIds) {
        standaloneEligibleVideoIds.add(videoId);
      }
    }
    try {
      const overview = await readFile(
        path.join(youtubeRoot, 'playlists', playlist.slug, 'overview.md'),
        'utf8',
      );
      playlistStatuses.set(
        playlist.id,
        readFrontmatter(overview).status ?? 'draft',
      );
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
      playlistStatuses.set(playlist.id, 'missing');
    }
  }

  const standaloneEvidence = await loadStandaloneYoutubeEvidence({
    repoRoot,
    videoIds: standaloneEligibleVideoIds,
  });
  sourceErrors.push(...standaloneEvidence.errors);
  for (const { playlist, decisions } of intakeDecisions) {
    for (const { videoId } of decisions.processed) {
      if (!hasFullStandaloneEvidence(standaloneEvidence.byVideoId, videoId)) {
        sourceErrors.push(
          `Resource intake ${playlist.slug} decision for ${videoId} has no complete standalone public resource, transcript, and summary evidence.`,
        );
      }
    }
  }

  for (const videoId of videoIds) {
    try {
      const summary = await readFile(
        path.join(youtubeRoot, 'videos', videoId, 'summary.md'),
        'utf8',
      );
      videoStatuses.set(videoId, readFrontmatter(summary).status ?? 'draft');
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
      videoStatuses.set(
        videoId,
        hasFullStandaloneEvidence(standaloneEvidence.byVideoId, videoId)
          ? 'reviewed'
          : 'missing',
      );
    }
  }

  return {
    catalog,
    playlistIds,
    playlistScopes,
    playlistStatuses,
    sourceErrors,
    videoIds,
    videoStatuses,
  };
};

const playlistIdFromUrl = (value) => {
  try {
    const url = new URL(value);
    return url.hostname.endsWith('youtube.com')
      ? url.searchParams.get('list')
      : undefined;
  } catch {
    return undefined;
  }
};

const validateResources = async (repoRoot, errors, tracked) => {
  const resourceSources = [];
  const resourceEntries = [];
  for (const resourcePath of await listPublicResourceManifestPaths(repoRoot)) {
    const relativePath = path.relative(repoRoot, resourcePath);
    const source = await readFile(resourcePath, 'utf8');
    resourceSources.push({ filePath: resourcePath, source });

    let manifest;
    try {
      const parsed = parseJsonWithDuplicateKeys(source);
      manifest = parsed.value;
      for (const duplicateKey of parsed.duplicateKeys) {
        errors.push(`${relativePath} has duplicate key ${duplicateKey}`);
      }
    } catch (error) {
      errors.push(`${relativePath} is invalid: ${error.message}`);
      continue;
    }

    if (!Array.isArray(manifest)) {
      errors.push(`${relativePath} must contain an array`);
      continue;
    }

    manifest.forEach((resource, index) => {
      resourceEntries.push({ index, relativePath, resource });
    });
  }

  const resources = resourceEntries.map(({ resource }) => resource);
  const resourceIds = new Set();
  for (const { index, relativePath, resource } of resourceEntries) {
    const prefix = `${relativePath} resource $[${index}]`;
    if (!Number.isInteger(resource.id) || resource.id <= 0) {
      errors.push(`${prefix} has invalid id ${String(resource.id)}`);
    } else if (resourceIds.has(resource.id)) {
      errors.push(`${prefix} duplicates resource id ${resource.id}`);
    } else {
      resourceIds.add(resource.id);
    }
    if (!isValidDate(resource.date)) {
      errors.push(`${prefix} has invalid date ${String(resource.date)}`);
    }
    if (!resourceTypes.has(resource.type)) {
      errors.push(`${prefix} has invalid type ${String(resource.type)}`);
    }
    if (
      typeof resource.primarySection !== 'string' ||
      resource.primarySection.length === 0
    ) {
      errors.push(
        `${prefix} has invalid primarySection ${String(resource.primarySection)}`,
      );
    }
    if (!Array.isArray(resource.topics)) {
      errors.push(`${prefix} must have a topics array`);
    } else {
      for (const topic of resource.topics) {
        if (typeof topic !== 'string' || topic.length === 0) {
          errors.push(`${prefix} has invalid topic ${String(topic)}`);
        }
      }
    }
  }

  const summaryFiles = await listFiles(
    path.join(repoRoot, 'src/content/summaries'),
    '.md',
  );
  const summarizedResourceIds = new Set();
  const collectionItemsByResourceId = new Map();
  for (const summaryFile of summaryFiles) {
    const relativePath = path.relative(repoRoot, summaryFile);
    const summary = await readFile(summaryFile, 'utf8');
    const fields = readFrontmatter(summary);
    const resourceId = fields.resourceId;
    if (!Number.isInteger(resourceId)) {
      errors.push(`${relativePath} has no valid integer resourceId`);
    } else if (!resourceIds.has(resourceId)) {
      errors.push(
        `${relativePath} references missing resourceId ${resourceId}`,
      );
    } else {
      summarizedResourceIds.add(resourceId);
    }

    const curatedCollectionFields = ['order', 'videoId'].filter(
      (key) => fields[key] !== undefined,
    );
    if (curatedCollectionFields.length === 0) {
      continue;
    }
    if (
      typeof fields.collection !== 'string' ||
      fields.collection.length === 0 ||
      !Number.isInteger(fields.order) ||
      fields.order <= 0 ||
      typeof fields.videoId !== 'string' ||
      fields.videoId.length === 0
    ) {
      errors.push(
        `${relativePath} collection metadata requires a non-empty collection and videoId plus a positive integer order`,
      );
      continue;
    }
    const items = collectionItemsByResourceId.get(resourceId) ?? [];
    items.push({
      collection: fields.collection,
      order: fields.order,
      path: relativePath,
      videoId: fields.videoId,
    });
    collectionItemsByResourceId.set(resourceId, items);
  }
  for (const resourceId of resourceIds) {
    if (!summarizedResourceIds.has(resourceId)) {
      errors.push(`resource id ${resourceId} has no public summary`);
    }
  }

  const resourcesById = new Map(
    resources.map((resource) => [resource.id, resource]),
  );
  const playlistsById = new Map(
    tracked.catalog.playlists.map((playlist) => [playlist.id, playlist]),
  );
  for (const [resourceId, items] of collectionItemsByResourceId) {
    const resource = resourcesById.get(resourceId);
    if (resource?.type !== 'playlist') {
      errors.push(`collection resource id ${resourceId} must be a playlist`);
      continue;
    }
    if (new Set(items.map((item) => item.collection)).size !== 1) {
      errors.push(
        `collection resource id ${resourceId} uses multiple collection names`,
      );
    }
    if (new Set(items.map((item) => item.order)).size !== items.length) {
      errors.push(
        `collection resource id ${resourceId} has duplicate order values`,
      );
    }
    if (new Set(items.map((item) => item.videoId)).size !== items.length) {
      errors.push(
        `collection resource id ${resourceId} has duplicate video IDs`,
      );
    }

    const playlistId = playlistIdFromUrl(resource.url);
    const playlist = playlistsById.get(playlistId);
    const scope = tracked.playlistScopes.get(playlistId);
    if (!playlist || scope?.mode !== 'curated' || scope.status !== 'reviewed') {
      errors.push(
        `collection resource id ${resourceId} must resolve to a reviewed curated playlist`,
      );
      continue;
    }
    const actualVideoIds = items
      .toSorted((left, right) => left.order - right.order)
      .map((item) => item.videoId);
    if (
      actualVideoIds.length !== scope.selectedVideoIds.length ||
      actualVideoIds.some(
        (videoId, index) => videoId !== scope.selectedVideoIds[index],
      )
    ) {
      errors.push(
        `collection resource id ${resourceId} video IDs and order must exactly match ${playlist.slug} reviewed curation`,
      );
    }
    for (const item of items) {
      if (tracked.videoStatuses.get(item.videoId) !== 'reviewed') {
        errors.push(
          `${item.path} selected video ${item.videoId} has no reviewed source evidence`,
        );
      }
    }
  }

  return {
    resourceSources,
    resourceCount: resources.length,
    summaryCount: summaryFiles.length,
  };
};

export const runPublicContentGuard = async ({
  repoRoot = defaultRepoRoot,
  exceptions,
} = {}) => {
  const errors = [];
  const warnings = [];
  const notices = [];
  const activeExceptions =
    exceptions ?? (repoRoot === defaultRepoRoot ? publicSourceExceptions : []);
  const tracked = await readTrackedLibrary(repoRoot, notices);
  errors.push(...tracked.sourceErrors);
  for (const [playlistId, scope] of tracked.playlistScopes) {
    errors.push(...scope.errors);
    if (
      scope.mode === 'curated' &&
      scope.status !== 'reviewed' &&
      tracked.playlistStatuses.get(playlistId) === 'reviewed'
    ) {
      errors.push(
        `tracked playlist ${playlistId} has a reviewed overview before its curation is reviewed`,
      );
    }
  }
  errors.push(...validateExceptions(activeExceptions, tracked));
  const resourceValidation = await validateResources(repoRoot, errors, tracked);
  await validateDurableContextImageDeck(repoRoot, errors);

  const publicFiles = [
    ...(await listFiles(path.join(repoRoot, 'src/content/posts'), '.md')).map(
      (filePath) => ({
        filePath,
        draftPost: null,
      }),
    ),
    ...(
      await listFiles(path.join(repoRoot, 'src/content/summaries'), '.md')
    ).map((filePath) => ({ filePath, draftPost: false })),
    ...resourceValidation.resourceSources.map(({ filePath, source }) => ({
      filePath,
      contents: source,
      draftPost: false,
    })),
  ];

  let referenceCount = 0;
  for (const publicFile of publicFiles) {
    const contents =
      publicFile.contents ?? (await readFile(publicFile.filePath, 'utf8'));
    const relativePath = path.relative(repoRoot, publicFile.filePath);
    const isDraftPost =
      publicFile.draftPost ?? readFrontmatter(contents).draft === true;
    const references = extractTrackedReferences(contents, tracked);
    for (const [kind, matches, statuses] of [
      ['video', references.videos, tracked.videoStatuses],
      ['playlist', references.playlists, tracked.playlistStatuses],
    ]) {
      for (const { id, line } of matches) {
        referenceCount += 1;
        const status = statuses.get(id);
        if (status === 'reviewed') {
          continue;
        }
        const exception = exceptionFor(
          activeExceptions,
          kind,
          id,
          relativePath,
        );
        const message = `${relativePath}:${line} cites tracked ${kind} ${id} with source status ${status}`;
        if (exception) {
          notices.push(`${message}; explicit exception: ${exception.reason}`);
        } else if (isDraftPost) {
          warnings.push(`${message}; draft post is not publishable`);
        } else {
          errors.push(message);
        }
      }
    }
  }

  return {
    errors,
    warnings,
    notices,
    stats: {
      playlistCount: tracked.playlistIds.size,
      referenceCount,
      resourceCount: resourceValidation.resourceCount,
      summaryCount: resourceValidation.summaryCount,
      videoCount: tracked.videoIds.size,
    },
  };
};

export const formatPublicContentGuard = (result) => {
  const lines = [
    result.errors.length === 0
      ? `Public content guard passed: ${result.stats.videoCount} tracked videos, ${result.stats.playlistCount} tracked playlists, ${result.stats.referenceCount} tracked public references, ${result.stats.resourceCount} resources, ${result.stats.summaryCount} public summaries.`
      : `Public content guard failed with ${result.errors.length} error(s).`,
  ];
  lines.push(...result.errors.map((error) => `ERROR: ${error}`));
  lines.push(...result.warnings.map((warning) => `WARNING: ${warning}`));
  lines.push(...result.notices.map((notice) => `NOTICE: ${notice}`));
  return lines.join('\n');
};

const isMain =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  runPublicContentGuard()
    .then((result) => {
      console.log(formatPublicContentGuard(result));
      process.exitCode = result.errors.length === 0 ? 0 : 1;
    })
    .catch((error) => {
      console.error(error.stack ?? error.message ?? String(error));
      process.exitCode = 1;
    });
}
