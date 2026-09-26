'use strict';

document.documentElement.classList.add('js');

// Disclosure navigation preserves the normal document and keyboard order.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#navigation');
if (menuButton && menu) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  };
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  });
  menu.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('click', event => {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  window.matchMedia('(min-width: 900px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
}

// The footer credit replaces the floating signature, including keyboard access.
const watermark = document.querySelector('.servimat-watermark');
const footer = document.querySelector('.site-footer');
if (watermark && footer) {
  const updateWatermark = visible => {
    if (visible && document.activeElement === watermark) {
      const footerBox = footer.getBoundingClientRect();
      if (footerBox.top >= innerHeight || footerBox.bottom <= 0) return;
      footer.querySelector('.servimat-credit')?.focus({ preventScroll: true });
    }
    watermark.classList.toggle('is-hidden', visible);
    watermark.inert = visible;
    if (visible) {
      watermark.setAttribute('aria-hidden', 'true');
      watermark.setAttribute('tabindex', '-1');
    } else {
      watermark.removeAttribute('aria-hidden');
      watermark.removeAttribute('tabindex');
    }
  };
  const updateFromPosition = () => {
    const rect = footer.getBoundingClientRect();
    const footerVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (footerVisible) {
      updateWatermark(true);
      return;
    }
    // Keep the signature clear of controls and text at the bottom of small screens.
    const obstacles = [...document.querySelectorAll('main a, main button, main summary, main video')]
      .map(element => element.getBoundingClientRect())
      .filter(box => box.bottom > innerHeight - 180 && box.top < innerHeight);
    const walker = document.createTreeWalker(document.querySelector('main'), NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      if (!walker.currentNode.textContent.trim()) continue;
      const range = document.createRange();
      range.selectNodeContents(walker.currentNode);
      for (const box of range.getClientRects()) {
        if (box.bottom > innerHeight - 180 && box.top < innerHeight) obstacles.push(box);
      }
    }
    let clear = false;
    const positions = [...new Set([watermark.dataset.position || 'default', 'default', 'raised-left', 'raised-right'])];
    for (const position of positions) {
      watermark.dataset.position = position;
      const box = watermark.getBoundingClientRect();
      const intersects = obstacles.some(other =>
        box.left < other.right + 5 && box.right > other.left - 5 &&
        box.top < other.bottom + 5 && box.bottom > other.top - 5);
      if (!intersects) { clear = true; break; }
    }
    updateWatermark(!clear);
  };
  updateFromPosition();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(updateFromPosition);
    observer.observe(footer);
  }
  let framePending = false;
  const scheduleUpdate = () => {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(() => { framePending = false; updateFromPosition(); });
  };
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  document.addEventListener('toggle', scheduleUpdate, true);
  document.fonts?.ready.then(scheduleUpdate);
  window.addEventListener('pageshow', updateFromPosition);
}
