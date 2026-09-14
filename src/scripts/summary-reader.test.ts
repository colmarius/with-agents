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

function setup(platform = 'Linux') {
  const { document, window } = parseHTML(`<html><body><main><article>
    <h1>Summary</h1><button data-reader-open hidden>Focus mode <kbd data-focus-shortcut></kbd></button>
    <details><summary>Browse summaries</summary></details>
    <nav data-scroll-back-nav-sticky><a href="/resources">Back</a></nav>
    <div class="prose-post"><p>First passage</p><p>Second passage</p></div>
    </article></main><dialog data-summary-reader><div data-reader-panel>
    <div data-reader-toolbar>Focus mode
    <button data-reader-exit>Exit focus mode <span aria-hidden="true">· Esc</span></button></div>
    <div data-reader-content></div></div></dialog></body></html>`);
  let focused: Element = document.body;
  Object.defineProperty(document, 'activeElement', { get: () => focused });
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
      focus: () => {
        focused = element;
      },
    });
  }
  const panel = get('[data-reader-panel]');
  panel.scrollTop = 0;
  window.scrollBy = () => {};
  runInNewContext(code, {
    document,
    window,
    Event: window.Event,
    HTMLElement: window.HTMLElement,
    navigator: { platform },
    exports: {},
  });
  const click = (selector: string) =>
    get(selector).dispatchEvent(new window.Event('click'));
  const key = (
    properties: Record<string, unknown> = {},
    target: Element = document.body,
  ) => {
    const event = new window.Event('keydown', {
      bubbles: true,
      cancelable: true,
    });
    Object.assign(event, {
      code: 'KeyF',
      key: 'F',
      ctrlKey: true,
      altKey: false,
      metaKey: false,
      shiftKey: true,
      ...properties,
    });
    target.dispatchEvent(event);
    return event;
  };
  return { document, window, get, click, key, panel, dialog };
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

test('focus shortcut toggles once and restores the previously focused control', () => {
  const { key, get, dialog, document } = setup();
  const source = get('.prose-post p');
  source.setAttribute('tabindex', '0');
  source.focus();
  assert.equal(key({ key: 'Ï' }, source).defaultPrevented, true);
  assert.equal(dialog.open, true);
  key({ repeat: true });
  assert.equal(dialog.open, true);
  key();
  assert.equal(dialog.open, false);
  assert.equal(document.activeElement, source);
});

test('focus shortcut ignores typing, other modifiers, composition and competing UI', () => {
  const { key, get, dialog, document } = setup();
  for (const properties of [
    { ctrlKey: false },
    { shiftKey: false },
    { altKey: true },
    { metaKey: true },
    { ctrlKey: false, altKey: true },
    { ctrlKey: false, metaKey: true },
    { code: 'KeyK' },
    { repeat: true },
    { isComposing: true },
    { defaultPrevented: true },
  ]) {
    key(properties);
    assert.notEqual(dialog.open, true, JSON.stringify(properties));
  }
  for (const html of [
    '<input>',
    '<textarea></textarea>',
    '<select></select>',
    '<div contenteditable="true"><span>edit</span></div>',
  ]) {
    const holder = document.createElement('div');
    holder.innerHTML = html;
    document.body.append(holder);
    const target = holder.querySelector('span') ?? holder.firstElementChild;
    assert.ok(target);
    assert.equal(key({}, target).defaultPrevented, false);
    assert.notEqual(dialog.open, true);
    holder.remove();
  }
  const other = document.createElement('dialog');
  other.setAttribute('open', '');
  document.body.append(other);
  assert.equal(key().defaultPrevented, false);
  assert.notEqual(dialog.open, true);
  other.remove();
  const menu = document.createElement('button');
  menu.id = 'mobile-menu-button';
  menu.setAttribute('aria-expanded', 'true');
  document.body.append(menu);
  assert.equal(key().defaultPrevented, false);
  assert.notEqual(dialog.open, true);
  menu.remove();
  key();
  assert.equal(dialog.open, true);
  assert.ok(get('[data-reader-content] article'));
});

test('shortcut return focus falls back when the original control disappears', () => {
  const { key, get, document } = setup();
  const control = get('.prose-post p');
  control.setAttribute('tabindex', '0');
  control.focus();
  key();
  control.remove();
  key();
  assert.equal(document.activeElement, get('[data-reader-open]'));
});

test('temporary passage focus styling is removed on blur without losing existing tabindex', () => {
  for (const original of [null, '0']) {
    const { key, get, window } = setup();
    const heading = get('h1');
    if (original !== null) heading.setAttribute('tabindex', original);
    key();
    assert.equal(heading.getAttribute('tabindex'), '-1');
    assert.equal(heading.hasAttribute('data-reader-focus-target'), true);
    heading.dispatchEvent(new window.Event('blur'));
    assert.equal(heading.getAttribute('tabindex'), original);
    assert.equal(heading.hasAttribute('data-reader-focus-target'), false);
  }
});

test('shortcut restores disclosure focus but not the sticky navigation hidden on exit', () => {
  for (const selector of ['summary', '[data-scroll-back-nav-sticky] a']) {
    const { key, get, document } = setup();
    const origin = get(selector);
    origin.focus();
    key();
    key();
    assert.equal(
      document.activeElement,
      selector === 'summary' ? origin : get('[data-reader-open]'),
    );
  }
});

test('shortcut hints distinguish Mac Control from Command and Option', () => {
  for (const [platform, hint] of [
    ['MacIntel', '⌃⇧F'],
    ['Linux', 'Ctrl+Shift+F'],
  ]) {
    const { get, key, dialog } = setup(platform);
    assert.equal(get('[data-focus-shortcut]').textContent, hint);
    assert.match(
      get('[data-reader-open]').title,
      /Control, not Command, on Mac/,
    );
    key();
    assert.equal(dialog.open, true);
  }
});
