import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { rootDir } from './youtube-transcript-core.mjs';

// Public content that may cite a tracked video. A removal, retitle, or
// availability change matters only when one of these files mentions the ID.
const publicContentRoots = [
  'src/content/posts',
  'src/content/summaries',
  'src/data/resources',
];

// Sync records new videos as seen. That is safe only where sync creates no
// capture obligation: intake queues and curated playlists. Full-capture
// playlists stay check-only, and frozen playlists are never synced routinely.
export const syncsDuringRefresh = (playlist) =>
  playlist.refresh !== 'frozen' &&
  (playlist.resourceIntake === true || Object.hasOwn(playlist, 'curation'));

export const findPublicReferences = async (
  videoIds,
  { root = rootDir, roots = publicContentRoots } = {},
) => {
  const references = new Map();
  if (videoIds.length === 0) {
    return references;
  }
  for (const contentRoot of roots) {
    const absoluteRoot = path.join(root, contentRoot);
    const files = await readdir(absoluteRoot, { recursive: true });
    for (const file of files.sort()) {
      if (!/\.(?:md|mdx|json|ts)$/.test(file) || file.endsWith('.test.ts')) {
        continue;
      }
      const contents = await readFile(path.join(absoluteRoot, file), 'utf8');
      for (const videoId of videoIds) {
        if (contents.includes(videoId)) {
          const paths = references.get(videoId) ?? [];
          paths.push(path.join(contentRoot, file));
          references.set(videoId, paths);
        }
      }
    }
  }
  return references;
};

const publicChanges = (diff) => [
  ...diff.removals.map((entry) => ({
    videoId: entry.videoId,
    change: 'removed',
    detail: entry.title,
  })),
  ...diff.retitles.map((retitle) => ({
    videoId: retitle.videoId,
    change: 'retitled',
    detail: `${retitle.from} -> ${retitle.to}`,
  })),
  ...diff.privacyChanges.map((privacy) => ({
    videoId: privacy.videoId,
    change: 'availability',
    detail: `${privacy.from.privacyStatus} -> ${privacy.to.privacyStatus}`,
  })),
];

// IDs whose public references the report needs: changed videos and new ones.
export const refreshVideoIds = (checkReport) => [
  ...new Set(
    checkReport.playlists.flatMap((playlist) =>
      playlist.remote.fetched
        ? [
            ...publicChanges(playlist.remote.diff),
            ...playlist.remote.diff.additions,
          ].map((change) => change.videoId)
        : [],
    ),
  ),
];

const newestFirst = (left, right) =>
  (right.publishedAt ?? '').localeCompare(left.publishedAt ?? '') ||
  left.videoId.localeCompare(right.videoId);

const candidate = (entry) => ({
  videoId: entry.videoId,
  title: entry.title,
  publishedAt: entry.publishedAt ?? null,
});

export const buildRefreshReport = ({ catalog, checkReport, references }) => {
  const playlistsBySlug = new Map(
    catalog.playlists.map((playlist) => [playlist.slug, playlist]),
  );
  const intakeVideoIds = new Set(
    checkReport.playlists.flatMap((checked) =>
      playlistsBySlug.get(checked.slug).refresh === 'intake' &&
      checked.remote.fetched
        ? [
            ...checked.remote.diff.additions.map((entry) => entry.videoId),
            ...(checked.local.intake?.pendingVideoIds ?? []),
          ]
        : [],
    ),
  );
  const report = {
    intake: [],
    watch: [],
    quiet: [],
    frozen: [],
    publicImpact: [],
    syncPlaylists: [],
    errors: [],
  };

  for (const checked of checkReport.playlists) {
    const playlist = playlistsBySlug.get(checked.slug);
    if (!checked.remote.fetched) {
      report.errors.push({
        slug: checked.slug,
        message: checked.remote.error.message,
      });
      continue;
    }
    const { diff } = checked.remote;
    const base = {
      slug: playlist.slug,
      title: playlist.title,
      sync: syncsDuringRefresh(playlist),
    };
    if (base.sync && checked.remote.changed) {
      report.syncPlaylists.push(playlist.slug);
    }

    // Removing a processed video from the intake queue is the normal way to
    // finish it; its public resource stays.
    const changes =
      playlist.refresh === 'intake'
        ? publicChanges({ ...diff, removals: [] })
        : publicChanges(diff);
    for (const change of changes) {
      const paths = references.get(change.videoId);
      if (paths) {
        report.publicImpact.push({ slug: playlist.slug, ...change, paths });
      }
    }

    if (playlist.refresh === 'intake') {
      const removedVideoIds = new Set(
        diff.removals.map((entry) => entry.videoId),
      );
      const pendingVideoIds = checked.local.intake?.pendingVideoIds ?? [];
      report.intake.push({
        ...base,
        additions: diff.additions.map(candidate).sort(newestFirst),
        removed: diff.removals.length,
        pendingVideoIds: pendingVideoIds.filter(
          (videoId) => !removedVideoIds.has(videoId),
        ),
        droppedPendingVideoIds: pendingVideoIds.filter((videoId) =>
          removedVideoIds.has(videoId),
        ),
      });
    } else if (playlist.refresh === 'watch') {
      const available = diff.additions.filter((entry) => entry.available);
      const isNew = (entry) =>
        !intakeVideoIds.has(entry.videoId) && !references.has(entry.videoId);
      report.watch.push({
        ...base,
        candidates: available.filter(isNew).map(candidate).sort(newestFirst),
        alreadyCovered: available.filter((entry) => !isNew(entry)).length,
      });
    } else if (playlist.refresh === 'quiet') {
      report.quiet.push({ ...base, additions: diff.additions.length });
    } else {
      report.frozen.push({
        ...base,
        changes: [
          ...diff.additions.map((entry) => ({
            videoId: entry.videoId,
            change: 'added',
            detail: entry.title,
          })),
          ...publicChanges(diff),
        ],
      });
    }
  }

  return report;
};

const formatCandidate = (entry) =>
  `    ${entry.publishedAt?.slice(0, 10) ?? 'undated   '}  ${entry.videoId}  ${entry.title}`;

export const formatRefreshReport = (report) => {
  const lines = ['YouTube resource refresh (read-only)', ''];

  lines.push('Intake (process every pending video):');
  for (const intake of report.intake) {
    lines.push(
      `  ${intake.slug}: ${intake.additions.length} new; ${intake.removed} removed; ${intake.pendingVideoIds.length + intake.additions.length} to process after sync`,
    );
    lines.push(...intake.additions.map(formatCandidate));
    if (intake.pendingVideoIds.length > 0) {
      lines.push(
        `    still pending from earlier: ${intake.pendingVideoIds.join(', ')}`,
      );
    }
    if (intake.droppedPendingVideoIds.length > 0) {
      lines.push(
        `    removed from the playlist before processing (leave the queue on sync): ${intake.droppedPendingVideoIds.join(', ')}`,
      );
    }
  }

  lines.push('', 'Watch (propose at most five picks):');
  const watched = report.watch.filter((watch) => watch.candidates.length > 0);
  for (const watch of watched) {
    const notes = [
      watch.alreadyCovered > 0
        ? `${watch.alreadyCovered} more already public or queued in intake`
        : '',
      watch.sync ? '' : 'full-capture playlist; check-only',
    ].filter(Boolean);
    lines.push(
      `  ${watch.slug}: ${watch.candidates.length} new${notes.length > 0 ? ` (${notes.join('; ')})` : ''}`,
    );
    lines.push(...watch.candidates.map(formatCandidate));
  }
  if (watched.length === 0) {
    lines.push('  no new videos');
  }

  const quietAdditions = report.quiet.reduce(
    (total, quiet) => total + quiet.additions,
    0,
  );
  lines.push(
    '',
    `Quiet: ${report.quiet.length} playlists; ${quietAdditions} new videos not proposed.`,
  );

  const changedFrozen = report.frozen.filter(
    (frozen) => frozen.changes.length > 0,
  );
  lines.push(
    `Frozen: ${report.frozen.length} playlists; ${changedFrozen.length === 0 ? 'no changes' : 'unexpected changes below'}.`,
  );
  for (const frozen of changedFrozen) {
    lines.push(
      `  ${frozen.slug}:`,
      ...frozen.changes.map(
        (change) => `    ${change.videoId} ${change.change}: ${change.detail}`,
      ),
    );
  }

  lines.push('', 'Public impact (removals, retitles, availability):');
  if (report.publicImpact.length === 0) {
    lines.push('  none');
  }
  for (const impact of report.publicImpact) {
    lines.push(
      `  ${impact.slug} ${impact.videoId} ${impact.change}: ${impact.detail}`,
      ...impact.paths.map((referencePath) => `    ${referencePath}`),
    );
  }

  lines.push(
    '',
    `Sync after review: ${report.syncPlaylists.length === 0 ? 'nothing to sync' : report.syncPlaylists.map((slug) => `--playlist ${slug}`).join(' ')}`,
  );
  if (report.errors.length > 0) {
    lines.push(
      '',
      'Errors:',
      ...report.errors.map((error) => `  ${error.slug}: ${error.message}`),
    );
  }
  return lines.join('\n');
};
