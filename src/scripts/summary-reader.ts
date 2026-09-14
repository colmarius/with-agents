export {};

const dialog = document.querySelector<HTMLDialogElement>(
  '[data-summary-reader]',
);
const opener = document.querySelector<HTMLButtonElement>('[data-reader-open]');
const article = opener?.closest('article');
const panel = dialog?.querySelector<HTMLElement>('[data-reader-panel]');
const content = dialog?.querySelector<HTMLElement>('[data-reader-content]');
const toolbar = dialog?.querySelector<HTMLElement>('[data-reader-toolbar]');
const fullscreen = dialog?.querySelector<HTMLButtonElement>(
  '[data-reader-fullscreen]',
);
const exit = dialog?.querySelector<HTMLButtonElement>('[data-reader-exit]');
const status = dialog?.querySelector<HTMLElement>('[data-reader-status]');

if (
  dialog &&
  opener &&
  article &&
  panel &&
  content &&
  toolbar &&
  fullscreen &&
  exit &&
  status
) {
  const marker = document.createComment('summary location');
  article.before(marker);
  document.body.append(dialog);
  let active = false;
  let previousOverflow = '';
  let pending = false;
  let session = 0;
  let exitingFullscreen = false;

  const capture = () => {
    const top = active ? toolbar.getBoundingClientRect().bottom : 0;
    const blocks = Array.from(
      article.querySelectorAll<HTMLElement>(
        'h1, header > p, .prose-post :is(h2, h3, p, li, pre, table)',
      ),
    );
    const visible = blocks.filter(
      (element) =>
        element.getClientRects().length &&
        element.getBoundingClientRect().bottom > top,
    );
    const block =
      visible.findLast(
        (element) => element.getBoundingClientRect().top <= top,
      ) ??
      visible[0] ??
      blocks[0];
    return {
      block,
      offset: block ? block.getBoundingClientRect().top - top : 0,
    };
  };
  const restore = ({ block, offset }: ReturnType<typeof capture>) => {
    if (!block) return;
    const top = active ? toolbar.getBoundingClientRect().bottom : 0;
    const delta = block.getBoundingClientRect().top - top - offset;
    if (active) panel.scrollTop += delta;
    else window.scrollBy({ top: delta, behavior: 'instant' });
  };
  const leaveFullscreen = async () => {
    if (document.fullscreenElement !== panel || exitingFullscreen) return;
    exitingFullscreen = true;
    syncFullscreen();
    try {
      await document.exitFullscreen();
    } catch {
      status.textContent =
        'Use your browser’s Escape key to leave full screen.';
    } finally {
      exitingFullscreen = false;
      syncFullscreen();
    }
  };
  const close = () => {
    if (!active) return;
    const passage = capture();
    active = false;
    session += 1;
    marker.after(article);
    dialog.close();
    document.body.style.overflow = previousOverflow;
    opener.focus({ preventScroll: true });
    restore(passage);
    document.dispatchEvent(new Event('summary-reader:close'));
    void leaveFullscreen();
  };
  opener.hidden = false;
  opener.addEventListener('click', () => {
    if (active) return;
    const passage = capture();
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    content.append(article);
    active = true;
    status.textContent = '';
    dialog.showModal();
    const focusTarget = passage.block ?? panel;
    focusTarget.setAttribute('tabindex', '-1');
    focusTarget.focus({ preventScroll: true });
    if (focusTarget !== panel) {
      focusTarget.addEventListener(
        'blur',
        () => focusTarget.removeAttribute('tabindex'),
        { once: true },
      );
    }
    panel.scrollTop = 0;
    restore(passage);
  });
  exit.addEventListener('click', close);
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    close();
  });
  dialog.addEventListener('close', () => {
    if (!dialog.open) close();
  });
  document.addEventListener('site-search:open', close);
  window.addEventListener('beforeprint', close);

  const syncFullscreen = () => {
    const owned = document.fullscreenElement === panel;
    fullscreen.hidden = !document.fullscreenEnabled || !panel.requestFullscreen;
    fullscreen.disabled =
      pending || exitingFullscreen || (!!document.fullscreenElement && !owned);
    const label = fullscreen.querySelector('[data-reader-fullscreen-label]');
    if (label) label.textContent = owned ? 'Leave full screen' : 'Full screen';
    fullscreen.title = owned
      ? 'Show browser controls; stay in reading mode.'
      : 'Hide browser controls';
    fullscreen
      .querySelector('[data-reader-fullscreen-icon]')
      ?.setAttribute(
        'd',
        owned
          ? 'M20 10h-6V4m0 6 7-7M4 14h6v6m0-6-7 7'
          : 'M14 4h6v6m0-6-7 7M10 20H4v-6m0 6 7-7',
      );
    fullscreen.setAttribute('aria-pressed', String(owned));
    const hint = exit.querySelector<HTMLElement>('[data-reader-exit-hint]');
    if (hint) hint.hidden = owned;
  };
  document.addEventListener('fullscreenchange', syncFullscreen);
  syncFullscreen();
  fullscreen.addEventListener('click', async () => {
    if (pending || exitingFullscreen) return;
    if (document.fullscreenElement === panel) {
      await leaveFullscreen();
      return;
    }
    if (document.fullscreenElement) return;
    const requestSession = session;
    pending = true;
    status.textContent = '';
    syncFullscreen();
    try {
      await panel.requestFullscreen();
      if (!active || session !== requestSession) await leaveFullscreen();
    } catch {
      if (active && session === requestSession) {
        status.textContent =
          'Full screen is unavailable. You can keep reading here.';
      }
    } finally {
      pending = false;
      syncFullscreen();
    }
  });
}
