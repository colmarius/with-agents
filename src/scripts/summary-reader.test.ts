import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';
import { parseHTML } from 'linkedom';
import ts from 'typescript';

const code = ts.transpileModule(
  readFileSync(new URL('./summary-reader.ts', import.meta.url), 'utf8'),
  { compilerOptions: { module: ts.ModuleKind.CommonJS } },
).outputText;

function setup() {
  const { document, window } = parseHTML(`<html><body><main><article>
    <h1>Summary</h1><button data-reader-open hidden>Focus mode</button>
    <div class="prose-post"><p>First passage</p><p>Second passage</p></div>
    </article></main><dialog data-summary-reader><div data-reader-panel>
    <div data-reader-toolbar>Focus mode
    <button data-reader-exit>Exit focus mode <span aria-hidden="true">· Esc</span></button></div>
    <div data-reader-content></div></div></dialog></body></html>`);
  const get = <T extends HTMLElement = HTMLElement>(selector: string): T => {
    const element = document.querySelector<T>(selector);
    if (!element) throw new Error(`Missing fixture: ${selector}`);
    return element;
  };
  const dialog = get<HTMLDialogElement>('dialog');
  dialog.showModal = () => {
    dialog.open = true;
  };
  dialog.close = () => {
    dialog.open = false;
  };
  for (const element of document.querySelectorAll('*')) {
    Object.assign(element, {
      getBoundingClientRect: () => ({ top: 100, bottom: 140 }),
      getClientRects: () => [1],
      focus: () => {},
    });
  }
  const panel = get('[data-reader-panel]');
  panel.scrollTop = 0;
  window.scrollBy = () => {};
  runInNewContext(code, { document, window, Event: window.Event, exports: {} });
  const click = (selector: string) =>
    get(selector).dispatchEvent(new window.Event('click'));
  return { document, window, get, click, panel, dialog };
}

test('reader moves one article and synchronously releases its lock for search', () => {
  const { document, window, get, click, dialog } = setup();
  document.body.style.overflow = 'clip';
  const original = get('article');
  click('[data-reader-open]');
  assert.equal(dialog.open, true);
  assert.equal(get('[data-reader-content] article'), original);
  assert.equal(document.querySelectorAll('article').length, 1);
  document.dispatchEvent(new window.Event('site-search:open'));
  assert.equal(dialog.open, false);
  assert.equal(get('main article'), original);
  assert.equal(document.body.style.overflow, 'clip');
  dialog.dispatchEvent(new window.Event('close'));
  assert.equal(document.body.style.overflow, 'clip');
});

test('Escape closes focus mode directly', () => {
  const { click, document, dialog, window, get } = setup();
  document.body.style.overflow = 'clip';
  click('[data-reader-open]');
  dialog.dispatchEvent(new window.Event('cancel', { cancelable: true }));
  assert.equal(dialog.open, false);
  assert.equal(document.body.style.overflow, 'clip');
  assert.ok(get('main article'));
});

test('reopening ignores a queued close event from the previous session', () => {
  const { click, document, dialog, window, get } = setup();
  document.body.style.overflow = 'clip';
  for (let cycle = 0; cycle < 2; cycle += 1) {
    click('[data-reader-open]');
    click('[data-reader-exit]');
    click('[data-reader-open]');
    dialog.dispatchEvent(new window.Event('close'));
    assert.equal(dialog.open, true);
    assert.equal(document.body.style.overflow, 'hidden');
    assert.ok(get('[data-reader-content] article'));
    click('[data-reader-exit]');
    assert.equal(document.body.style.overflow, 'clip');
    assert.equal(document.querySelectorAll('article').length, 1);
    assert.ok(get('main article'));
  }
});

test('exit preserves signed offset of the nested passage rather than its parent', () => {
  const { get, click, window, dialog } = setup();
  get('.prose-post').innerHTML =
    '<ul><li id="outer">Parent<ul><li id="inner">Current passage</li></ul></li></ul>';
  const bounds =
    (readingTop: number, pageTop: number, bottom: number) => () => ({
      top: dialog.open ? readingTop : pageTop,
      bottom,
    });
  Object.assign(get('#outer'), {
    getBoundingClientRect: bounds(-400, 500, 500),
    getClientRects: () => [1],
  });
  Object.assign(get('#inner'), {
    getBoundingClientRect: bounds(110, 1200, 200),
    getClientRects: () => [1],
  });
  click('[data-reader-open]');
  let delta = 0;
  window.scrollBy = (options?: ScrollToOptions | number) => {
    delta = (options as ScrollToOptions).top ?? 0;
  };
  click('[data-reader-exit]');
  // Toolbar bottom is 140: inner is 30px above it. Preserve that signed offset.
  assert.equal(delta, 1230);
});

test('printing synchronously restores the normal article', () => {
  const { click, window, dialog, get } = setup();
  click('[data-reader-open]');
  window.dispatchEvent(new window.Event('beforeprint'));
  assert.equal(dialog.open, false);
  assert.ok(get('main article'));
});
