#!/usr/bin/env node
import {
  catalogPath,
  formatPlaylistSyncReport,
  loadCatalog,
  parseLibraryArgs,
  synchronizeCatalogPlaylists,
} from './lib/youtube-library-core.mjs';
import { repoRelative } from './lib/youtube-transcript-core.mjs';

const okExit = 0;
const notImplementedExit = 2;

const usage = `Usage:
  npm run youtube:library -- <command>

Commands:
  sync [--playlist <slug>]... [--dry-run]
           Synchronize all configured playlists, or a selected subset, through
           the YouTube Data API. Fetch and report only with --dry-run.
  capture  Validate the fixed source-only catalog. Batch capture is not yet
           implemented.
  status   Validate the fixed source-only catalog. Status reporting is not yet
           implemented.
  help     Show this help.

The catalog and all output are fixed under src/content/youtube/. API
credentials are environment-only; this command accepts no credential flags or
configuration files.
`;

const main = async () => {
  const options = parseLibraryArgs(process.argv.slice(2));
  const { command } = options;
  if (command === 'help') {
    console.log(usage);
    return okExit;
  }

  const catalog = await loadCatalog();
  if (command === 'sync') {
    await synchronizeCatalogPlaylists({
      catalog,
      playlistSlugs: options.playlistSlugs,
      dryRun: options.dryRun,
      onResult: (result) => console.log(formatPlaylistSyncReport(result)),
    });
    return okExit;
  }

  console.error(
    `${command} is not implemented yet. Catalog validated: ${repoRelative(catalogPath)}.`,
  );
  return notImplementedExit;
};

main()
  .then((exitCode) => {
    process.exitCode = exitCode;
  })
  .catch((error) => {
    console.error(error.stack ?? error.message ?? String(error));
    process.exitCode = 1;
  });
