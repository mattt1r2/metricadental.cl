/* SERVIMAT: GA4 + contact and native-video events. No message/phone/email values. */
(() => {
  'use strict';
  if (window.__servimatGALoaded) return;
  const ownScript = document.currentScript;
  const cfg = window.servimatGAConfig || {};
  const id = cfg.measurementId || (ownScript && ownScript.dataset.measurementId) || '';
  if (!/^G-[A-Z0-9]{5,20}$/.test(id)) return;
  const existing = [...document.scripts].filter(s => /googletagmanager\.com\/(?:gtag\/js|gtm\.js)/.test(s.src));
  const matching = existing.some(s => { try { return new URL(s.src).searchParams.get('id') === id; } catch (_) { return false; } });
  if (existing.length && !matching) {
    console.warn('SERVIMAT GA4: existe otra etiqueta; instalación detenida para evitar duplicados.');
    return;
  }
  window.__servimatGALoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  const cleanLocation = () => {
    const url = new URL(location.href);
    for (const key of [...url.searchParams.keys()]) {
      if (!['utm_source', 'utm_medium', 'utm_campaign', 'utm_id'].includes(key) || /[@\s]|%40/i.test(url.searchParams.get(key))) url.searchParams.delete(key);
    }
    url.hash = '';
    return url.href;
  };
  if (!matching) {
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
    document.head.appendChild(tag);
    window.gtag('js', new Date());
    window.gtag('config', id, { page_location: cleanLocation(), allow_google_signals: false, allow_ad_personalization_signals: false });
  }
  const emit = (name, params = {}) => window.gtag('event', name, { ...params, send_to: id });
  document.addEventListener('click', event => {
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!link) return;
    const href = link.getAttribute('href') || '';
    let url;
    try { url = new URL(href, location.href); } catch (_) { return; }
    if (['wa.me', 'api.whatsapp.com', 'web.whatsapp.com'].includes(url.hostname)) emit('click_whatsapp', { contact_method: 'whatsapp' });
    else if (url.protocol === 'tel:') emit('click_phone', { contact_method: 'phone' });
    else if (url.protocol === 'mailto:') emit('contact_click', { contact_method: 'email' });
    else if (url.origin === location.origin && (url.hash === '#contacto' || /^\/contacto\/?$/.test(url.pathname))) emit('contact_click', { contact_method: 'contact_section' });
  }, { passive: true });
  if (cfg.product && cfg.product.item_id) emit('view_item', { items: [{ item_id: String(cfg.product.item_id), item_name: String(cfg.product.item_name || '').slice(0, 100) }] });
  const bound = new WeakSet();
  const bindVideos = () => document.querySelectorAll('video').forEach(video => {
    if (bound.has(video)) return;
    bound.add(video);
    let started = false;
    const milestones = new Set();
    const params = () => ({ video_provider: 'html5', video_title: (video.getAttribute('aria-label') || video.getAttribute('title') || 'Video del sitio').slice(0, 100), video_autoplay: Boolean(video.autoplay) });
    video.addEventListener('play', () => { if (!started) { started = true; emit('video_start', params()); } });
    video.addEventListener('timeupdate', () => {
      if (!Number.isFinite(video.duration) || !video.duration || !started) return;
      [25, 50, 75].forEach(percent => { if (video.currentTime / video.duration * 100 >= percent && !milestones.has(percent)) { milestones.add(percent); emit('video_progress', { ...params(), video_percent: percent }); } });
    });
    video.addEventListener('ended', () => { if (!milestones.has(100)) { milestones.add(100); emit('video_complete', params()); } });
    if (!video.paused && !video.ended && video.readyState >= 2) { started = true; emit('video_start', params()); }
  });
  bindVideos();
  new MutationObserver(bindVideos).observe(document.body, { childList: true, subtree: true });
})();
