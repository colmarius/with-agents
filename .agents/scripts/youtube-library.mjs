#!/usr/bin/env node
import {
  catalogPath,
  loadCatalog,
  parseLibraryArgs,
} from './lib/youtube-library-core.mjs';
import { repoRelative } from './lib/youtube-transcript-core.mjs';

const okExit = 0;
const notImplementedExit = 2;

const usage = `Usage:
  npm run youtube:library -- <command>

Commands:
  sync     Validate the fixed source-only catalog. Playlist synchronization is
           added in Task 2.
  capture  Validate the fixed source-only catalog. Batch capture is added in
           Task 3.
  status   Validate the fixed source-only catalog. Status reporting is added in
           Task 3.
  help     Show this help.

The catalog and all future output are fixed under src/content/youtube/. API
credentials are environment-only; this command accepts no credential flags or
configuration files.
`;

const main = async () => {
  const { command } = parseLibraryArgs(process.argv.slice(2));
  if (command === 'help') {
    console.log(usage);
    return okExit;
  }

  await loadCatalog();
  console.error(
    `${command} is not implemented in the Task 1 skeleton. Catalog validated: ${repoRelative(catalogPath)}.`,
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
