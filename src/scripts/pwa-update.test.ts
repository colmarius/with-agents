import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';
import { parseHTML } from 'linkedom';
import ts from 'typescript';

const source = readFileSync(
  new URL('../components/PwaUpdatePrompt.astro', import.meta.url),
  'utf8',
);
const script = source.split('<script>')[1].split('</script>')[0];
const code = ts.transpileModule(
  script
    .replace("import { Workbox } from 'workbox-window';", '')
    .replace('import.meta.env.PROD', 'true'),
  { compilerOptions: { target: ts.ScriptTarget.ES2022 } },
).outputText;

async function setup(controlled = true) {
  const { document, window } = parseHTML(source.split('<script>')[0]);
  Object.defineProperty(document, 'visibilityState', {
    value: 'visible',
    writable: true,
  });
  const navigator = {
    platform: 'Linux',
    maxTouchPoints: 0,
    onLine: true,
    serviceWorker: { controller: controlled ? {} : null },
  };
  const registration = Object.assign(new EventTarget(), {
    active: controlled ? {} : null,
    installing: null as EventTarget | null,
    waiting: null as object | null,
  });
  let now = 0;
  let checks = 0;
  let reloads = 0;
  let accepted = 0;
  let update = async () => {};
  let interval: (() => void) | undefined;
  let intervalMs = 0;
  const events = new Map<string, () => void>();
  const windowEvents = new Map<string, () => void>();
  class Workbox {
    async register() {
      return registration;
    }
    async update() {
      checks++;
      await update();
    }
    addEventListener(name: string, callback: () => void) {
      events.set(name, callback);
    }
    messageSkipWaiting() {
      accepted++;
    }
  }
  await runInNewContext(`(async () => { ${code} })()`, {
    document,
    navigator,
    Workbox,
    performance: { now: () => now },
    console: { error() {} },
    window: {
      addEventListener(name: string, callback: () => void) {
        windowEvents.set(name, callback);
      },
      setInterval(callback: () => void, ms: number) {
        interval = callback;
        intervalMs = ms;
      },
      location: {
        reload() {
          reloads++;
        },
      },
    },
  });
  const flush = async () => {
    await new Promise<void>((resolve) => setImmediate(resolve));
  };
  await flush();
  return {
    document,
    navigator,
    registration,
    flush,
    get checks() {
      return checks;
    },
    get reloads() {
      return reloads;
    },
    get accepted() {
      return accepted;
    },
    get intervalMs() {
      return intervalMs;
    },
    advance(ms: number) {
      now += ms;
    },
    updateWith(callback: () => Promise<void>) {
      update = callback;
    },
    tick() {
      interval?.();
    },
    event(name: string) {
      windowEvents.get(name)?.();
    },
    worker(name: string) {
      events.get(name)?.();
    },
    visibility(state: string) {
      Object.defineProperty(document, 'visibilityState', { value: state });
      document.dispatchEvent(new window.Event('visibilitychange'));
    },
    accept() {
      document
        .querySelector('button')
        ?.dispatchEvent(new window.Event('click'));
    },
  };
}

test('startup, return and reconnect checks share a cooldown and recover after failure', async () => {
  const page = await setup();
  assert.equal(page.checks, 1);
  assert.equal(page.intervalMs, 300_000);
  page.advance(59_999);
  for (const name of ['focus', 'online', 'pageshow']) page.event(name);
  assert.equal(page.checks, 1);
  page.advance(1);
  page.updateWith(async () => {
    throw new Error('offline');
  });
  page.event('online');
  await page.flush();
  assert.equal(page.checks, 2);
  page.advance(60_000);
  let finish = () => {};
  page.updateWith(
    () =>
      new Promise<void>((resolve) => {
        finish = resolve;
      }),
  );
  page.event('focus');
  page.advance(300_000);
  page.tick();
  page.event('pageshow');
  assert.equal(page.checks, 3, 'only one in-flight check');
  finish();
  await page.flush();
  page.tick();
  assert.equal(page.checks, 4);
});

test('skipped checks do not consume cooldown; return and reconnect can retry immediately', async () => {
  const page = await setup();
  page.advance(60_000);
  page.visibility('hidden');
  page.tick();
  page.navigator.onLine = false;
  page.visibility('visible');
  page.event('focus');
  assert.equal(page.checks, 1);
  page.navigator.onLine = true;
  page.registration.installing = new EventTarget();
  page.event('online');
  page.registration.installing = null;
  page.registration.waiting = {};
  page.tick();
  assert.equal(page.checks, 1);
  page.registration.waiting = null;
  page.visibility('visible');
  assert.equal(page.checks, 2);
});

test('updates wait for acceptance and reload all controlled tabs only once, never on first install', async () => {
  const first = await setup(false);
  const initialWorker = new EventTarget();
  first.registration.installing = initialWorker;
  first.registration.dispatchEvent(new Event('updatefound'));
  first.registration.installing = null;
  first.registration.waiting = initialWorker;
  initialWorker.dispatchEvent(new Event('statechange'));
  assert.equal(
    first.document.querySelector<HTMLElement>('[data-pwa-update-prompt]')
      ?.hidden,
    true,
  );
  first.registration.waiting = null;
  first.registration.active = initialWorker;
  first.worker('controlling');
  assert.equal(first.reloads, 0);
  first.worker('controlling');
  assert.equal(first.reloads, 1);
  const page = await setup();
  page.worker('waiting');
  assert.equal(
    page.document.querySelector<HTMLElement>('[data-pwa-update-prompt]')
      ?.hidden,
    false,
  );
  assert.equal(page.reloads, 0);
  assert.equal(page.accepted, 0);
  page.accept();
  page.accept();
  assert.equal(page.accepted, 1);
  assert.equal(page.reloads, 0);
  page.worker('controlling');
  page.worker('controlling');
  assert.equal(page.reloads, 1);
  const otherTab = await setup();
  otherTab.worker('controlling');
  assert.equal(otherTab.reloads, 1, 'another tab may activate the update');
});

test('a successful retry shows the prompt even without a Workbox waiting event', async () => {
  const page = await setup();
  const failed = new EventTarget();
  page.registration.installing = failed;
  page.registration.dispatchEvent(new Event('updatefound'));
  page.registration.installing = null;
  failed.dispatchEvent(new Event('statechange'));
  const prompt = page.document.querySelector<HTMLElement>(
    '[data-pwa-update-prompt]',
  );
  assert.equal(prompt?.hidden, true);
  const retry = new EventTarget();
  page.registration.installing = retry;
  page.registration.dispatchEvent(new Event('updatefound'));
  page.registration.installing = null;
  page.registration.waiting = retry;
  retry.dispatchEvent(new Event('statechange'));
  assert.equal(prompt?.hidden, false);
  assert.equal(page.accepted, 0);
  assert.equal(page.reloads, 0);
  page.accept();
  assert.equal(page.accepted, 1);
});
