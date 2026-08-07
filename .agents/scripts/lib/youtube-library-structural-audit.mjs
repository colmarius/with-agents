import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import {
  libraryRoot as defaultLibraryRoot,
  validateCatalog,
} from './youtube-library-core.mjs';
import { resolvePlaylistEditorialScope } from './youtube-library-curation.mjs';
import { loadStandaloneYoutubeEvidence } from './youtube-standalone-evidence.mjs';
import { rootDir as defaultRepoRoot } from './youtube-transcript-core.mjs';

const allowedStatuses = new Set(['draft', 'reviewed']);
const summaryHeadings = [
  '## Key Ideas',
  '## Practical Implications',
  '## Questions and Tensions',
  '## Source',
];
const overviewHeadings = [
  '## Coverage',
  '## Current Thesis',
  '## Stable Ideas',
  '## Emerging Ideas',
  '## Revisions and Tensions',
  '## Practical Implications',
];
const authorHeadings = [
  '## Source Identities',
  '## Cross-Playlist Synthesis',
  '## Changes Over Time',
];
const timestampPattern = '\\d{2}:\\d{2}:\\d{2}';

const relativePath = (root, filePath) =>
  path.relative(root, filePath).split(path.sep).join('/');

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

const parseScalar = (value) => {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
};

const parseFrontmatter = (contents, file, errors) => {
  const lines = contents.replace(/\r\n/g, '\n').split('\n');
  if (lines[0] !== '---') {
    errors.push(`${file} has no opening frontmatter delimiter`);
    return { fields: new Map(), keys: [] };
  }
  const closingIndex = lines.indexOf('---', 1);
  if (closingIndex === -1) {
    errors.push(`${file} has no closing frontmatter delimiter`);
    return { fields: new Map(), keys: [] };
  }

  const fields = new Map();
  const keys = [];
  for (let index = 1; index < closingIndex; index += 1) {
    const match = lines[index].match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);
    if (!match) {
      continue;
    }
    const [, key, rawValue] = match;
    if (fields.has(key)) {
      errors.push(`${file} has duplicate frontmatter field ${key}`);
      continue;
    }
    keys.push(key);
    if (rawValue.trim()) {
      fields.set(key, parseScalar(rawValue));
      continue;
    }

    const values = [];
    while (index + 1 < closingIndex) {
      const item = lines[index + 1].match(/^\s+-\s+(.+)$/);
      if (!item) {
        break;
      }
      values.push(parseScalar(item[1]));
      index += 1;
    }
    fields.set(key, values);
  }
  return { fields, keys };
};

const expectFrontmatterKeys = (frontmatter, expected, file, errors) => {
  if (
    frontmatter.keys.length !== expected.length ||
    frontmatter.keys.some((key, index) => key !== expected[index])
  ) {
    errors.push(
      `${file} frontmatter keys must be exactly: ${expected.join(', ')}`,
    );
  }
};

const expectHeadings = (contents, expected, file, errors) => {
  const actual = contents
    .split(/\r?\n/)
    .filter((line) => line.startsWith('## '));
  if (
    actual.length !== expected.length ||
    actual.some((heading, index) => heading !== expected[index])
  ) {
    errors.push(`${file} headings must be exactly: ${expected.join(', ')}`);
  }
};

const validateSynthesisLabels = ({
  contents,
  ignoredHeadings,
  file,
  errors,
}) => {
  let heading;
  for (const line of contents.split(/\r?\n/)) {
    if (line.startsWith('## ')) {
      heading = line;
      continue;
    }
    if (
      !line.startsWith('- ') ||
      ignoredHeadings.has(heading) ||
      line.startsWith('- Editorial:')
    ) {
      continue;
    }
    if (
      !/\]\([^)]*(?:videos\/[^/)]+\/summary|summaries\/[^)]+)\.md\)/.test(line)
    ) {
      errors.push(
        `${file} synthesis bullet must start with Editorial: or link a video summary`,
      );
    }
  }
};

const timestampSeconds = (timestamp) => {
  const [hours, minutes, seconds] = timestamp.split(':').map(Number);
  if (minutes > 59 || seconds > 59) {
    return undefined;
  }
  return hours * 3600 + minutes * 60 + seconds;
};

const transcriptTimestamps = (contents, file, errors) => {
  const timestamps = [];
  const expression = new RegExp(`^\\[(${timestampPattern})\\]`, 'gm');
  for (const match of contents.matchAll(expression)) {
    const seconds = timestampSeconds(match[1]);
    if (seconds === undefined) {
      errors.push(`${file} has invalid transcript timestamp [${match[1]}]`);
      continue;
    }
    if (timestamps.length > 0 && seconds <= timestamps.at(-1).seconds) {
      errors.push(
        `${file} transcript timestamp [${match[1]}] is not strictly ordered`,
      );
    }
    timestamps.push({ text: match[1], seconds });
  }
  if (timestamps.length === 0) {
    errors.push(`${file} has no transcript chunks`);
  }
  return new Set(timestamps.map(({ text }) => text));
};

const validateAnchors = (contents, transcriptAnchors, file, errors) => {
  const expression = new RegExp(
    `\\[(${timestampPattern})\\](?:-\\[(${timestampPattern})\\])?`,
    'g',
  );
  for (const match of contents.matchAll(expression)) {
    const start = match[1];
    const end = match[2];
    for (const timestamp of end ? [start, end] : [start]) {
      if (!transcriptAnchors.has(timestamp)) {
        errors.push(
          `${file} anchor [${timestamp}] does not resolve to a sibling transcript chunk`,
        );
      }
    }
    if (
      end &&
      timestampSeconds(start) !== undefined &&
      timestampSeconds(end) !== undefined &&
      timestampSeconds(end) < timestampSeconds(start)
    ) {
      errors.push(`${file} anchor range [${start}]-[${end}] is reversed`);
    }
  }
};

const validateRelativeLinks = async (
  contents,
  filePath,
  root,
  errors,
  allowedExternalTargets = new Set(),
) => {
  const expression = /\]\((?!https?:\/\/|mailto:|#)([^)\s#]+)(?:#[^)]+)?\)/g;
  for (const match of contents.matchAll(expression)) {
    const target = path.resolve(path.dirname(filePath), match[1]);
    const targetRelative = path.relative(root, target);
    if (
      (targetRelative.startsWith('..') || path.isAbsolute(targetRelative)) &&
      !allowedExternalTargets.has(target)
    ) {
      errors.push(
        `${relativePath(root, filePath)} link ${match[1]} escapes the library root`,
      );
      continue;
    }
    try {
      await access(target);
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
      errors.push(
        `${relativePath(root, filePath)} link ${match[1]} does not resolve`,
      );
    }
  }
};

const parseJson = (contents, file, errors) => {
  try {
    return JSON.parse(contents);
  } catch (error) {
    errors.push(`${file} is invalid JSON: ${error.message}`);
    return undefined;
  }
};

const validateStatus = (status, file, errors) => {
  if (!allowedStatuses.has(status)) {
    errors.push(`${file} status must be draft or reviewed`);
  }
};

const validateCoveredIds = ({
  coveredVideoIds,
  expectedVideoIds,
  summarizedVideoIds,
  file,
  errors,
}) => {
  if (!Array.isArray(coveredVideoIds)) {
    errors.push(`${file} coveredVideoIds must be a block list`);
    return;
  }
  if (new Set(coveredVideoIds).size !== coveredVideoIds.length) {
    errors.push(`${file} coveredVideoIds must not contain duplicates`);
  }
  for (const videoId of coveredVideoIds) {
    if (!expectedVideoIds.has(videoId)) {
      errors.push(`${file} covers untracked video ${videoId}`);
    } else if (!summarizedVideoIds.has(videoId)) {
      errors.push(`${file} covers ${videoId}, which has no summary`);
    }
  }
  for (const videoId of summarizedVideoIds) {
    if (!coveredVideoIds.includes(videoId)) {
      errors.push(`${file} does not cover summarized video ${videoId}`);
    }
  }
};

export const auditYoutubeLibraryStructure = async ({
  libraryRoot = defaultLibraryRoot,
  repoRoot = defaultRepoRoot,
} = {}) => {
  const errors = [];
  const notices = [];
  const stats = {
    authors: 0,
    manifestOccurrences: 0,
    playlists: 0,
    summaries: 0,
    transcripts: 0,
    uniqueVideos: 0,
  };

  const catalogFile = path.join(libraryRoot, 'catalog.json');
  const catalogSource = await readOptional(catalogFile);
  if (catalogSource === undefined) {
    return {
      errors: ['catalog.json is missing'],
      notices,
      stats,
    };
  }
  const catalog = parseJson(catalogSource, 'catalog.json', errors);
  if (
    !catalog ||
    !Array.isArray(catalog.playlists) ||
    !Array.isArray(catalog.authors) ||
    !Array.isArray(catalog.relationships)
  ) {
    if (catalog) {
      errors.push(
        'catalog.json must contain playlists, authors, and relationships arrays',
      );
    }
    return { errors, notices, stats };
  }
  try {
    validateCatalog(catalog);
  } catch (error) {
    errors.push(`catalog.json is invalid: ${error.message}`);
    return { errors, notices, stats };
  }

  const trackedVideoIds = new Set();
  const membershipsByVideoId = new Map();
  const scopesByPlaylistId = new Map();
  const playlistVideoIds = new Map();
  const playlistSummaries = new Map();
  for (const playlist of catalog.playlists) {
    stats.playlists += 1;
    const manifestFile = path.join(
      libraryRoot,
      'playlists',
      playlist.slug,
      'manifest.json',
    );
    const manifestSource = await readOptional(manifestFile);
    const manifestName = relativePath(libraryRoot, manifestFile);
    if (manifestSource === undefined) {
      errors.push(`${manifestName} is missing`);
      continue;
    }
    const manifest = parseJson(manifestSource, manifestName, errors);
    if (!manifest || !Array.isArray(manifest.entries)) {
      if (manifest) {
        errors.push(`${manifestName} must contain an entries array`);
      }
      continue;
    }
    if (manifest.playlistId !== playlist.id) {
      errors.push(
        `${manifestName} playlistId must match catalog playlist ${playlist.id}`,
      );
    }

    const occurrences = new Map();
    const ids = new Set();
    for (const [index, entry] of manifest.entries.entries()) {
      stats.manifestOccurrences += 1;
      if (!entry || typeof entry.videoId !== 'string' || !entry.videoId) {
        errors.push(`${manifestName} entry ${index + 1} has no videoId`);
        continue;
      }
      if (!Number.isInteger(entry.position) || entry.position < 0) {
        errors.push(
          `${manifestName} entry ${index + 1} has an invalid position`,
        );
      }
      if (typeof entry.available !== 'boolean') {
        errors.push(
          `${manifestName} entry ${index + 1} has an invalid available value`,
        );
      }
      const videoId = entry.videoId;
      trackedVideoIds.add(videoId);
      ids.add(videoId);
      const positions = occurrences.get(videoId) ?? [];
      positions.push(entry.position ?? index);
      occurrences.set(videoId, positions);
      const memberships = membershipsByVideoId.get(videoId) ?? [];
      memberships.push({ entry, playlist });
      membershipsByVideoId.set(videoId, memberships);
    }
    for (const [videoId, positions] of occurrences) {
      if (positions.length > 1) {
        notices.push(
          `duplicate manifest occurrence: ${playlist.slug} contains ${videoId} at positions ${positions.join(', ')} (reported, not deduped)`,
        );
      }
    }
    const scope = resolvePlaylistEditorialScope(playlist, manifest);
    errors.push(...scope.errors);
    scopesByPlaylistId.set(playlist.id, scope);
    playlistVideoIds.set(playlist.id, ids);
  }
  stats.uniqueVideos = trackedVideoIds.size;

  const standaloneEligibleVideoIds = new Set(
    [...scopesByPlaylistId.values()].flatMap((scope) =>
      scope.mode === 'curated' && scope.status === 'reviewed'
        ? scope.selectedVideoIds
        : [],
    ),
  );
  const standaloneEvidence = await loadStandaloneYoutubeEvidence({
    repoRoot,
    videoIds: standaloneEligibleVideoIds,
  });
  errors.push(...standaloneEvidence.errors);

  const summarizedVideoIds = new Set();
  const summaryStatuses = new Map();
  for (const videoId of trackedVideoIds) {
    const videoDirectory = path.join(libraryRoot, 'videos', videoId);
    const metadataFile = path.join(videoDirectory, 'metadata.json');
    const transcriptFile = path.join(videoDirectory, 'transcript.md');
    const summaryFile = path.join(videoDirectory, 'summary.md');
    const metadataSource = await readOptional(metadataFile);
    const transcriptSource = await readOptional(transcriptFile);
    const summarySource = await readOptional(summaryFile);
    const metadataName = relativePath(libraryRoot, metadataFile);
    const transcriptName = relativePath(libraryRoot, transcriptFile);
    const summaryName = relativePath(libraryRoot, summaryFile);
    const metadata =
      metadataSource === undefined
        ? undefined
        : parseJson(metadataSource, metadataName, errors);

    if (metadata && metadata.videoId !== videoId) {
      errors.push(`${metadataName} videoId must match directory ${videoId}`);
    }

    let transcriptAnchors = new Set();
    if (transcriptSource !== undefined) {
      stats.transcripts += 1;
      if (!metadata) {
        errors.push(`${transcriptName} has no valid sibling metadata.json`);
      }
      const transcriptFrontmatter = parseFrontmatter(
        transcriptSource,
        transcriptName,
        errors,
      );
      if (transcriptFrontmatter.fields.get('videoId') !== videoId) {
        errors.push(
          `${transcriptName} videoId must match directory ${videoId}`,
        );
      }
      if (
        metadata &&
        transcriptFrontmatter.fields.get('language') !== metadata.language
      ) {
        errors.push(`${transcriptName} language must match metadata.json`);
      }
      if (
        metadata &&
        transcriptFrontmatter.fields.get('kind') !== metadata.kind
      ) {
        errors.push(`${transcriptName} kind must match metadata.json`);
      }
      transcriptAnchors = transcriptTimestamps(
        transcriptSource,
        transcriptName,
        errors,
      );
    }

    if (summarySource === undefined) {
      continue;
    }
    stats.summaries += 1;
    summarizedVideoIds.add(videoId);
    if (transcriptSource === undefined) {
      errors.push(`${summaryName} has no sibling transcript.md`);
    }
    if (!metadata) {
      errors.push(`${summaryName} has no valid sibling metadata.json`);
    }
    const summaryFrontmatter = parseFrontmatter(
      summarySource,
      summaryName,
      errors,
    );
    summaryStatuses.set(videoId, summaryFrontmatter.fields.get('status'));
    const expectedSummaryKeys = [
      'title',
      'videoId',
      'sourceUrl',
      ...(membershipsByVideoId
        .get(videoId)
        ?.some(({ entry }) => entry.publishedAt !== undefined)
        ? ['publishedAt']
        : []),
      'sourceLanguage',
      'summaryLanguage',
      'captionKind',
      'status',
    ];
    expectFrontmatterKeys(
      summaryFrontmatter,
      expectedSummaryKeys,
      summaryName,
      errors,
    );
    if (summaryFrontmatter.fields.get('videoId') !== videoId) {
      errors.push(`${summaryName} videoId must match directory ${videoId}`);
    }
    if (
      summaryFrontmatter.fields.get('sourceUrl') !==
      `https://www.youtube.com/watch?v=${videoId}`
    ) {
      errors.push(`${summaryName} sourceUrl must use the canonical video URL`);
    }
    validateStatus(
      summaryFrontmatter.fields.get('status'),
      summaryName,
      errors,
    );
    if (
      metadata &&
      summaryFrontmatter.fields.get('sourceLanguage') !== metadata.language
    ) {
      errors.push(`${summaryName} sourceLanguage must match metadata.json`);
    }
    if (
      metadata &&
      summaryFrontmatter.fields.get('captionKind') !== metadata.kind
    ) {
      errors.push(`${summaryName} captionKind must match metadata.json`);
    }
    const publishedDates = new Set(
      (membershipsByVideoId.get(videoId) ?? [])
        .map(({ entry }) => entry.publishedAt)
        .filter((value) => value !== undefined),
    );
    if (publishedDates.size > 1) {
      errors.push(
        `${summaryName} has conflicting publishedAt values across manifests`,
      );
    } else if (
      publishedDates.size === 1 &&
      summaryFrontmatter.fields.get('publishedAt') !== [...publishedDates][0]
    ) {
      errors.push(`${summaryName} publishedAt must match its manifest entry`);
    }
    expectHeadings(summarySource, summaryHeadings, summaryName, errors);
    validateAnchors(summarySource, transcriptAnchors, summaryName, errors);
    await validateRelativeLinks(
      summarySource,
      summaryFile,
      libraryRoot,
      errors,
    );
  }

  for (const playlist of catalog.playlists) {
    const allIds = playlistVideoIds.get(playlist.id) ?? new Set();
    const scope = scopesByPlaylistId.get(playlist.id) ?? {
      mode: 'full',
      status: 'reviewed',
      selectedVideoIds: [...allIds],
      errors: [],
    };
    const ids =
      scope.mode === 'curated' ? new Set(scope.selectedVideoIds) : allIds;
    const allowsStandaloneEvidence =
      scope.mode === 'curated' && scope.status === 'reviewed';
    const summaries = new Set(
      [...ids].filter(
        (videoId) =>
          summarizedVideoIds.has(videoId) ||
          (allowsStandaloneEvidence &&
            standaloneEvidence.byVideoId.has(videoId)),
      ),
    );
    if (allowsStandaloneEvidence) {
      for (const videoId of ids) {
        const hasReviewedEvidence = summarizedVideoIds.has(videoId)
          ? summaryStatuses.get(videoId) === 'reviewed'
          : standaloneEvidence.byVideoId.has(videoId);
        if (!hasReviewedEvidence) {
          errors.push(
            `Playlist ${playlist.slug} selected video ${videoId} has no reviewed source evidence.`,
          );
        }
      }
    }
    playlistSummaries.set(playlist.id, summaries);
    const overviewFile = path.join(
      libraryRoot,
      'playlists',
      playlist.slug,
      'overview.md',
    );
    const overviewSource = await readOptional(overviewFile);
    const overviewName = relativePath(libraryRoot, overviewFile);
    if (overviewSource === undefined) {
      if (scope.mode !== 'curated' || scope.status === 'reviewed') {
        errors.push(`${overviewName} is missing`);
      }
      continue;
    }
    const frontmatter = parseFrontmatter(overviewSource, overviewName, errors);
    expectFrontmatterKeys(
      frontmatter,
      ['title', 'status', 'coveredVideoIds'],
      overviewName,
      errors,
    );
    if (frontmatter.fields.get('title') !== playlist.title) {
      errors.push(`${overviewName} title must match catalog.json`);
    }
    validateStatus(frontmatter.fields.get('status'), overviewName, errors);
    validateCoveredIds({
      coveredVideoIds: frontmatter.fields.get('coveredVideoIds'),
      expectedVideoIds: ids,
      summarizedVideoIds: summaries,
      file: overviewName,
      errors,
    });
    expectHeadings(overviewSource, overviewHeadings, overviewName, errors);
    validateSynthesisLabels({
      contents: overviewSource,
      ignoredHeadings: new Set(['## Coverage']),
      file: overviewName,
      errors,
    });
    await validateRelativeLinks(
      overviewSource,
      overviewFile,
      libraryRoot,
      errors,
      new Set(
        allowsStandaloneEvidence
          ? [...ids]
              .map(
                (videoId) =>
                  standaloneEvidence.byVideoId.get(videoId)?.summaryPath,
              )
              .filter(Boolean)
          : [],
      ),
    );
  }

  const playlistsById = new Map(
    catalog.playlists.map((playlist) => [playlist.id, playlist]),
  );
  for (const author of catalog.authors) {
    stats.authors += 1;
    const authorFile = path.join(libraryRoot, 'authors', `${author.slug}.md`);
    const authorSource = await readOptional(authorFile);
    const authorName = relativePath(libraryRoot, authorFile);
    if (authorSource === undefined) {
      errors.push(`${authorName} is missing`);
      continue;
    }
    const frontmatter = parseFrontmatter(authorSource, authorName, errors);
    expectFrontmatterKeys(
      frontmatter,
      ['authorId', 'status', 'coveredVideoIds'],
      authorName,
      errors,
    );
    if (frontmatter.fields.get('authorId') !== author.id) {
      errors.push(`${authorName} authorId must match catalog.json`);
    }
    validateStatus(frontmatter.fields.get('status'), authorName, errors);
    const relatedPlaylistIds = catalog.relationships
      .filter((relationship) => relationship.authorId === author.id)
      .flatMap((relationship) => relationship.playlistIds);
    const authorVideoIds = new Set();
    const authorSummaries = new Set();
    for (const playlistId of relatedPlaylistIds) {
      const playlist = playlistsById.get(playlistId);
      if (!playlist) {
        continue;
      }
      for (const videoId of playlistVideoIds.get(playlistId) ?? []) {
        authorVideoIds.add(videoId);
      }
      for (const videoId of playlistSummaries.get(playlistId) ?? []) {
        authorSummaries.add(videoId);
      }
    }
    validateCoveredIds({
      coveredVideoIds: frontmatter.fields.get('coveredVideoIds'),
      expectedVideoIds: authorVideoIds,
      summarizedVideoIds: authorSummaries,
      file: authorName,
      errors,
    });
    expectHeadings(authorSource, authorHeadings, authorName, errors);
    validateSynthesisLabels({
      contents: authorSource,
      ignoredHeadings: new Set(['## Source Identities']),
      file: authorName,
      errors,
    });
    await validateRelativeLinks(authorSource, authorFile, libraryRoot, errors);
  }

  return { errors, notices, stats };
};

export const formatYoutubeLibraryStructuralAudit = (result) => {
  const lines = [
    result.errors.length === 0
      ? `YouTube library structural audit passed: ${result.stats.uniqueVideos} tracked videos, ${result.stats.manifestOccurrences} manifest occurrences, ${result.stats.transcripts} transcripts, ${result.stats.summaries} summaries, ${result.stats.playlists} playlists, ${result.stats.authors} authors.`
      : `YouTube library structural audit failed with ${result.errors.length} error(s).`,
  ];
  lines.push(...result.errors.map((error) => `ERROR: ${error}`));
  lines.push(...result.notices.map((notice) => `NOTICE: ${notice}`));
  return lines.join('\n');
};
