'use strict';

document.documentElement.classList.add('js');

// Disclosure navigation preserves the normal document and keyboard order.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#navigation');
if (menuButton && menu) {
  const servicesMenu = menu.querySelector('.services-menu');
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    if (servicesMenu) servicesMenu.open = false;
  };
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
    if (!open && servicesMenu) servicesMenu.open = false;
  });
  menu.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('click', event => {
    if (servicesMenu && !servicesMenu.contains(event.target)) servicesMenu.open = false;
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (servicesMenu?.open) {
      servicesMenu.open = false;
      servicesMenu.querySelector('summary').focus();
    } else if (menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  window.matchMedia('(min-width: 900px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
  window.addEventListener('pageshow', closeMenu);
}

// Preserve shared links from the previous single-page version.
const legacyServiceLinks = {
  'ortodoncia': 'ortodoncia.html',
  'restauraciones': 'restauraciones.html',
  'endodoncia': 'endodoncia.html',
  'molares': 'terceros-molares.html',
  'coronas': 'coronas.html',
  'carillas': 'carillas.html',
  'limpieza': 'limpieza-dental.html',
  'blanqueamiento': 'blanqueamiento.html',
  'implantes': 'implantes.html',
  'promocion': 'implantes.html#promocion',
  'fases': 'implantes.html#fases',
  'pagos': 'implantes.html#pagos'
};
const openLegacyService = () => {
  if (!document.body.classList.contains('clinic-home')) return;
  const destination = legacyServiceLinks[location.hash.slice(1)];
  if (destination) location.replace(destination);
};
window.addEventListener('hashchange', openLegacyService);
openLegacyService();

// The footer credit replaces the floating signature, including keyboard access.
const watermark = document.querySelector('.servimat-watermark');
const footer = document.querySelector('.site-footer');
if (watermark && footer) {
  const updateWatermark = hidden => {
    if (hidden && document.activeElement === watermark) {
      footer.querySelector('.servimat-credit')?.focus({ preventScroll: true });
    }
    watermark.classList.toggle('is-hidden', hidden);
    watermark.inert = hidden;
    if (hidden) {
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
    // The signature stays fixed at bottom left; only the footer hides it.
    updateWatermark(footerVisible);
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

// Both amounts remain readable without JavaScript; the switch is an enhancement.
document.querySelectorAll('[data-price-switch]').forEach(panel => {
  const controls = panel.querySelector('.price-options');
  const amount = panel.querySelector('[data-price-amount]');
  const caption = panel.querySelector('[data-price-caption]');
  if (!controls || !amount || !caption) return;
  controls.hidden = false;
  controls.addEventListener('click', event => {
    const button = event.target.closest('[data-price-mode]');
    if (!button) return;
    const installments = button.dataset.priceMode === 'installments';
    controls.querySelectorAll('button').forEach(option => {
      option.setAttribute('aria-pressed', String(option === button));
    });
    amount.textContent = installments ? '$47.500' : '$570.000';
    caption.textContent = installments ? 'Cada cuota · 12 cuotas sin interés' : 'Implante + corona de zirconio';
  });
});
