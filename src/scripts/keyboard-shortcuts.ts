export {};

const dialog = document.querySelector<HTMLDialogElement>('#keyboard-shortcuts');
const heading = dialog?.querySelector<HTMLElement>('#keyboard-shortcuts-title');
const closeButton = dialog?.querySelector<HTMLButtonElement>(
  '[data-shortcuts-close]',
);
const triggers = document.querySelectorAll<HTMLButtonElement>(
  '[data-shortcuts-open]',
);

if (dialog && heading && closeButton) {
  let active = false;
  let previousOverflow = '';
  let returnFocus: HTMLElement | null = null;
  const close = () => {
    if (!active) return;
    active = false;
    dialog.close();
    document.body.style.overflow = previousOverflow;
    if (
      returnFocus?.isConnected &&
      returnFocus.getClientRects().length &&
      !returnFocus.closest('[hidden], [inert], :disabled')
    ) {
      returnFocus.focus({ preventScroll: true });
      if (document.activeElement !== returnFocus) {
        const target = returnFocus;
        const tabindex = target.getAttribute('tabindex');
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        const cleanup = () => {
          target.removeAttribute('data-shortcuts-focus-target');
          if (tabindex === null) target.removeAttribute('tabindex');
          else target.setAttribute('tabindex', tabindex);
        };
        if (target === document.body || document.activeElement !== target)
          cleanup();
        else {
          target.setAttribute('data-shortcuts-focus-target', '');
          target.addEventListener('blur', cleanup, { once: true });
        }
      }
      if (document.activeElement === returnFocus) return;
    }
    const fallback =
      document.querySelector<HTMLElement>(
        '[data-summary-reader][open] [data-reader-panel]',
      ) ??
      document.querySelector<HTMLElement>('#site-search[open] input') ??
      Array.from(triggers).find(
        (trigger) =>
          trigger.getClientRects().length &&
          !trigger.closest('dialog:not([open])'),
      );
    fallback?.focus({ preventScroll: true });
  };
  const open = (opener: HTMLElement | null) => {
    if (
      active ||
      document.querySelector('#mobile-menu-button[aria-expanded="true"]')
    )
      return;
    returnFocus = opener;
    const isMac =
      /Mac/.test(navigator.platform) && navigator.maxTouchPoints <= 1;
    const searchKey = dialog.querySelector('[data-search-shortcut]');
    if (searchKey) searchKey.textContent = isMac ? 'Command + K' : 'Ctrl + K';
    dialog
      .querySelectorAll<HTMLElement>('[data-summary-shortcut]')
      .forEach((row) => {
        row.hidden = !document.querySelector('[data-reader-open]');
      });
    dialog
      .querySelectorAll<HTMLElement>('[data-slides-shortcut]')
      .forEach((row) => {
        row.hidden = !document.querySelector('#slides-container');
      });
    const update = dialog.querySelector<HTMLElement>('[data-update-shortcut]');
    if (update)
      update.hidden =
        !isMac ||
        !document.querySelector('[data-pwa-update-prompt]:not([hidden])');
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    active = true;
    dialog.showModal();
    heading.focus({ preventScroll: true });
  };
  for (const trigger of triggers) {
    trigger.hidden = false;
    trigger.setAttribute('aria-keyshortcuts', '?');
    trigger.addEventListener('click', () => open(trigger));
  }
  closeButton.addEventListener('click', close);
  dialog.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || event.isComposing) return;
    event.preventDefault();
    event.stopPropagation();
    close();
  });
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    close();
  });
  dialog.addEventListener('close', () => {
    if (!dialog.open) close();
  });
  document.addEventListener('keyboard-shortcuts:close', close);
  window.addEventListener('beforeprint', close);
  document.addEventListener('keydown', (event) => {
    if (
      active ||
      event.defaultPrevented ||
      event.repeat ||
      event.isComposing ||
      event.ctrlKey ||
      event.metaKey ||
      event.altKey ||
      event.key !== '?'
    )
      return;
    const target = event.target;
    if (
      target instanceof HTMLElement &&
      (target.isContentEditable ||
        target.closest(
          'input, textarea, select, [contenteditable]:not([contenteditable="false"])',
        ))
    )
      return;
    if (document.querySelector('#mobile-menu-button[aria-expanded="true"]'))
      return;
    event.preventDefault();
    open(
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null,
    );
  });
}
