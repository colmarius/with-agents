#!/usr/bin/env node
import {
  buildLibraryStatus,
  captureCatalogVideos,
  formatCaptureResult,
  formatLibraryStatus,
} from './lib/youtube-library-capture-status.mjs';
import {
  formatPlaylistSyncReport,
  loadCatalog,
  parseLibraryArgs,
  synchronizeCatalogPlaylists,
} from './lib/youtube-library-core.mjs';

const okExit = 0;

const usage = `Usage:
  npm run youtube:library -- <command>

Commands:
  sync [--playlist <slug>]... [--dry-run]
           Synchronize all configured playlists, or a selected subset, through
           the YouTube Data API. Fetch and report only with --dry-run.
  capture [--playlist <slug>]... [--limit <n>] [--retry] [--force]
           Sequentially capture pending transcripts. --retry processes only
           recorded unavailable videos. --force re-fetches regardless of state,
           must be bounded by --playlist or --limit, and cannot combine with
           --retry.
  status   Report playlist and author capture, summary, and synthesis status.
           This command accepts no options and has no JSON mode.
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

  if (command === 'capture') {
    const printedResults = [];
    const capture = await captureCatalogVideos({
      catalog,
      playlistSlugs: options.playlistSlugs,
      limit: options.limit,
      retry: options.retry,
      force: options.force,
      onWarning: (warning) => console.error(warning),
      onResult: (result) => printedResults.push(result),
    });
    if (capture.queued === 0) {
      console.log('Capture: nothing to do.');
    } else {
      printedResults.forEach((result, index) => {
        const remaining = result.stop
          ? capture.remaining
          : Math.max(0, capture.queued - index - 1);
        console.log(formatCaptureResult(result, remaining));
      });
    }
    return capture.exitCode;
  }

  const status = await buildLibraryStatus({ catalog });
  console.log(formatLibraryStatus(status));
  return okExit;
};

main()
  .then((exitCode) => {
    process.exitCode = exitCode;
  })
  .catch((error) => {
    console.error(error.stack ?? error.message ?? String(error));
    process.exitCode = 1;
  });
