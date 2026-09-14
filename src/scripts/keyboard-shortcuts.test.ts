import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';
import { parseHTML } from 'linkedom';
import ts from 'typescript';

const code = ts.transpileModule(
  readFileSync(new URL('./keyboard-shortcuts.ts', import.meta.url), 'utf8'),
  { compilerOptions: { module: ts.ModuleKind.CommonJS } },
).outputText;

function setup(context = '', platform = 'Linux') {
  const { document, window } = parseHTML(`<html><body>
    <button data-shortcuts-open hidden>Keyboard shortcuts</button>${context}
    <dialog id="keyboard-shortcuts"><h2 id="keyboard-shortcuts-title" tabindex="-1">Shortcuts</h2>
    <button data-shortcuts-close>Close</button><span data-search-shortcut></span>
    <div data-summary-shortcut hidden></div><div data-slides-shortcut hidden></div>
    <div data-update-shortcut hidden></div></dialog></body></html>`);
  let focused: Element = document.body;
  Object.defineProperty(document, 'activeElement', { get: () => focused });
  const get = <T extends HTMLElement = HTMLElement>(selector: string): T => {
    const element = document.querySelector<T>(selector);
    if (!element) throw new Error(`Missing fixture: ${selector}`);
    return element;
  };
  for (const element of document.querySelectorAll('*')) {
    Object.assign(element, {
      getClientRects: () => [1],
      focus: () => {
        if (!element.matches('button, input, [tabindex]')) return;
        focused = element;
      },
    });
  }
  const dialog = get<HTMLDialogElement>('#keyboard-shortcuts');
  dialog.showModal = () => {
    dialog.setAttribute('open', '');
  };
  dialog.close = () => {
    dialog.removeAttribute('open');
  };
  Object.defineProperty(dialog, 'open', {
    get: () => dialog.hasAttribute('open'),
  });
  // No localStorage: shortcut availability must not depend on a saved preference.
  runInNewContext(code, {
    document,
    window,
    HTMLElement: window.HTMLElement,
    navigator: { platform, maxTouchPoints: 0 },
    exports: {},
  });
  const key = (
    properties: Record<string, unknown> = {},
    target: Element = document.body,
  ) => {
    const event = new window.Event('keydown', {
      bubbles: true,
      cancelable: true,
    });
    Object.assign(event, { key: '?', ...properties });
    target.dispatchEvent(event);
    return event;
  };
  const close = () =>
    get('[data-shortcuts-close]').dispatchEvent(new window.Event('click'));
  return { document, window, get, dialog, key, close };
}

test('question-mark character always opens help with either keyboard shift state', () => {
  const { key, close, dialog, get } = setup();
  assert.equal(get('[data-shortcuts-open]').hidden, false);
  assert.equal(
    get('[data-shortcuts-open]').getAttribute('aria-keyshortcuts'),
    '?',
  );
  for (const shiftKey of [false, true]) {
    assert.equal(key({ shiftKey }).defaultPrevented, true);
    assert.equal(dialog.open, true);
    close();
  }
  assert.equal(key({ key: '/', shiftKey: true }).defaultPrevented, false);
  assert.equal(dialog.open, false);
});

test('help ignores typing, composition, repeats, extra modifiers and mobile menu', () => {
  const { document, key, dialog } = setup();
  for (const properties of [
    { repeat: true },
    { isComposing: true },
    { defaultPrevented: true },
    { ctrlKey: true },
    { metaKey: true },
    { altKey: true },
  ]) {
    key(properties);
    assert.equal(dialog.open, false, JSON.stringify(properties));
  }
  for (const html of [
    '<input>',
    '<textarea></textarea>',
    '<select></select>',
    '<div contenteditable="true"><span>Text</span></div>',
  ]) {
    const holder = document.createElement('div');
    holder.innerHTML = html;
    document.body.append(holder);
    const target = holder.querySelector('span') ?? holder.firstElementChild;
    assert.ok(target);
    assert.equal(key({}, target).defaultPrevented, false);
    assert.equal(dialog.open, false);
    holder.remove();
  }
  const menu = document.createElement('button');
  menu.id = 'mobile-menu-button';
  menu.setAttribute('aria-expanded', 'true');
  document.body.append(menu);
  assert.equal(key().defaultPrevented, false);
  assert.equal(dialog.open, false);
});

test('Escape closes only help and preserves underlying dialog focus and lock', () => {
  const { document, get, key, dialog } = setup(
    '<dialog id="site-search" open><input><button id="origin">Help</button></dialog>',
  );
  document.body.style.overflow = 'hidden';
  get('#origin').focus();
  key();
  assert.equal(document.activeElement, get('#keyboard-shortcuts-title'));
  let escaped = false;
  document.addEventListener('keydown', () => {
    escaped = true;
  });
  assert.equal(
    key({ key: 'Escape' }, get('#keyboard-shortcuts-title')).defaultPrevented,
    true,
  );
  assert.equal(escaped, false);
  assert.equal(dialog.open, false);
  assert.equal(get('#site-search').hasAttribute('open'), true);
  assert.equal(document.activeElement, get('#origin'));
  assert.equal(document.body.style.overflow, 'hidden');
});

test('close restores exact overflow and ignores queued close events after reopen', () => {
  const { document, key, close, window, dialog } = setup();
  document.body.style.overflow = 'clip';
  key();
  close();
  assert.equal(document.body.style.overflow, 'clip');
  key();
  dialog.dispatchEvent(new window.Event('close'));
  assert.equal(dialog.open, true);
  assert.equal(document.body.style.overflow, 'hidden');
  document.dispatchEvent(new window.Event('keyboard-shortcuts:close'));
  assert.equal(dialog.open, false);
  assert.equal(document.body.style.overflow, 'clip');
  window.dispatchEvent(new window.Event('beforeprint'));
  assert.equal(document.body.style.overflow, 'clip');
});

test('shortcut returns focus to body without leaving tabindex or trapping slide keys on a button', () => {
  const { document, key, close } = setup();
  for (let cycle = 0; cycle < 2; cycle += 1) {
    key();
    close();
    assert.equal(document.activeElement, document.body);
    assert.equal(document.body.hasAttribute('tabindex'), false);
  }
});

test('restored reading passage keeps temporary focusability only until blur', () => {
  const { document, window, get, key, close } = setup(
    '<p id="passage" tabindex="-1">Reading</p>',
  );
  const passage = get('#passage');
  passage.focus();
  key();
  // Focus mode removes its initial temporary tabindex when help takes focus.
  passage.removeAttribute('tabindex');
  close();
  assert.equal(document.activeElement, passage);
  assert.equal(passage.getAttribute('tabindex'), '-1');
  assert.equal(passage.hasAttribute('data-shortcuts-focus-target'), true);
  passage.dispatchEvent(new window.Event('blur'));
  assert.equal(passage.hasAttribute('tabindex'), false);
  assert.equal(passage.hasAttribute('data-shortcuts-focus-target'), false);
});

test('help lists only applicable summary, slide and Mac update shortcuts', () => {
  for (const [context, platform, summary, slides, update, search] of [
    ['', 'Linux', false, false, false, 'Ctrl + K'],
    [
      '<button data-reader-open></button>',
      'MacIntel',
      true,
      false,
      false,
      'Command + K',
    ],
    [
      '<div id="slides-container"></div><div data-pwa-update-prompt></div>',
      'MacIntel',
      false,
      true,
      true,
      'Command + K',
    ],
  ] as const) {
    const { key, get } = setup(context, platform);
    key();
    assert.equal(get('[data-summary-shortcut]').hidden, !summary);
    assert.equal(get('[data-slides-shortcut]').hidden, !slides);
    assert.equal(get('[data-update-shortcut]').hidden, !update);
    assert.equal(get('[data-search-shortcut]').textContent, search);
  }
});
