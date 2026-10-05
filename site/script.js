'use strict';

document.documentElement.classList.add('js');
// Cross-page section links open directly; smooth scrolling starts after loading.
window.addEventListener('load', () => document.documentElement.classList.add('is-loaded'), { once: true });

// Every clip starts silent, including previews on the user's computer.
document.querySelectorAll('video').forEach(video => { video.muted = true; });

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
  window.matchMedia('(min-width: 1100px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
  window.addEventListener('pageshow', closeMenu);
}

// Anchor offsets track the actual header on each screen size.
const siteHeader = document.querySelector('.site-header');
if (siteHeader && 'ResizeObserver' in window) {
  const headerObserver = new ResizeObserver(() => {
    document.documentElement.style.setProperty('--header-height', `${siteHeader.offsetHeight}px`);
  });
  headerObserver.observe(siteHeader);
}

// The section at the header edge is the section being read.
if (menu && document.body.classList.contains('clinic-home')) {
  const openAtHome = !location.hash && performance.getEntriesByType('navigation')[0]?.type !== 'back_forward';
  if (openAtHome) {
    // Do not wait for the map/other deferred content to finish loading.
    history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  const sections = [
    ['inicio', menu.querySelector(':scope > a[href="#inicio"]')],
    ['promociones', menu.querySelector(':scope > a[href="#promociones"]')],
    ['clinica', menu.querySelector(':scope > a[href="#clinica"]')],
    ['tratamientos', menu.querySelector('.services-menu > summary')],
    ['casos', menu.querySelector(':scope > a[href="#casos"]')],
    ['contacto', menu.querySelector(':scope > a[href="#contacto"]')]
  ].map(([id, control]) => ({ section: document.getElementById(id), control }))
    .filter(item => item.section && item.control);
  const homeShortcut = document.querySelector('.header-home');
  const headerRow = document.querySelector('.site-header');
  let currentSection;
  let navigationFrame = false;
  const updateCurrentSection = () => {
    navigationFrame = false;
    // Keep the current location while the mobile menu is open.
    if (menuButton?.getAttribute('aria-expanded') === 'true') return;
    const readingLine = (headerRow?.getBoundingClientRect().bottom || 100) + 24;
    let current = sections[0];
    if (window.scrollY > 8) {
      sections.forEach(item => {
        if (item.section.getBoundingClientRect().top <= readingLine) current = item;
      });
    }
    if (!current || current === currentSection) return;
    currentSection = current;
    sections.forEach(item => {
      const selected = item === current;
      item.control.classList.toggle('is-current', selected);
      if (selected) item.control.setAttribute('aria-current', 'location');
      else item.control.removeAttribute('aria-current');
    });
    if (homeShortcut) {
      const atHome = current.section.id === 'inicio';
      homeShortcut.classList.toggle('is-current', atHome);
      if (atHome) homeShortcut.setAttribute('aria-current', 'location');
      else homeShortcut.removeAttribute('aria-current');
    }
  };
  const scheduleNavigationUpdate = () => {
    if (navigationFrame) return;
    navigationFrame = true;
    requestAnimationFrame(updateCurrentSection);
  };
  window.addEventListener('scroll', scheduleNavigationUpdate, { passive: true });
  window.addEventListener('resize', scheduleNavigationUpdate);
  window.addEventListener('pageshow', scheduleNavigationUpdate);
  document.addEventListener('toggle', scheduleNavigationUpdate, true);
  document.fonts?.ready.then(scheduleNavigationUpdate);
  if ('ResizeObserver' in window) {
    const layoutObserver = new ResizeObserver(scheduleNavigationUpdate);
    layoutObserver.observe(document.querySelector('main'));
    if (headerRow) layoutObserver.observe(headerRow);
  }
  updateCurrentSection();
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
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && amount.animate) {
      amount.animate([{ opacity: .45, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 240, easing: 'ease-out' });
    }
  });
});

// Area filters narrow the catalogue; service links still open their own pages.
const serviceBrowser = document.querySelector('.service-browser');
const serviceCards = [...document.querySelectorAll('[data-service-category]')];
if (serviceBrowser && serviceCards.length) {
  serviceBrowser.hidden = false;
  serviceBrowser.addEventListener('click', event => {
    const button = event.target.closest('[data-service-filter]');
    if (!button) return;
    const category = button.dataset.serviceFilter;
    let visible = 0;
    serviceCards.forEach(card => {
      card.hidden = category !== 'todos' && card.dataset.serviceCategory !== category;
      if (!card.hidden) visible += 1;
    });
    serviceBrowser.querySelectorAll('button').forEach(option => option.setAttribute('aria-pressed', String(option === button)));
    serviceBrowser.querySelector('.service-count').textContent = `${visible} ${visible === 1 ? 'tratamiento' : 'tratamientos'}`;
  });
}

// Content stays visible if JavaScript or animation APIs are unavailable.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const reveals = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      reveals.unobserve(entry.target);
      if (!reducedMotion.matches && entry.target.animate) {
        entry.target.animate([
          { opacity: .85 },
          { opacity: 1 }
        ], { duration: 220, easing: 'ease-out' });
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.home-offer, .service-link, .treatment-photo, .clinic-media-video, .clinical-cases-grid > *').forEach(element => reveals.observe(element));
  reducedMotion.addEventListener('change', event => {
    if (event.matches) {
      reveals.disconnect();
      document.getAnimations?.().forEach(animation => animation.cancel());
    }
  });
}

// Play one visible clip at a time. Native controls remain available without JS.
const clips = [...document.querySelectorAll('video')];
const clipVisibility = new Map(clips.map(video => [video, 0]));
const manuallyPaused = new WeakSet();
const expectedPauses = new WeakSet();
const autoplayRequests = new WeakSet();
let activeClip = null;

const stopClip = video => {
  if (!video.paused) {
    expectedPauses.add(video);
    video.pause();
  }
  video.muted = true;
};

clips.forEach(video => {
  const frame = video.closest('figure');
  if (frame) {
    frame.classList.add('video-frame');
    const sound = document.createElement('button');
    sound.className = 'video-sound';
    sound.type = 'button';
    sound.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4Z"/><path class="sound-off" d="m16 9 5 6m0-6-5 6"/><path class="sound-on" d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/></svg>';
    const updateSound = () => {
      const audible = !video.muted && video.volume > 0;
      sound.classList.toggle('has-sound', audible);
      sound.setAttribute('aria-pressed', String(audible));
      const label = `${audible ? 'Silenciar' : 'Activar sonido'}: ${video.getAttribute('aria-label')}`;
      sound.setAttribute('aria-label', label);
      sound.title = audible ? 'Silenciar' : 'Activar sonido';
    };
    sound.addEventListener('click', () => {
      const audible = !video.muted && video.volume > 0;
      if (!audible && video.volume === 0) video.volume = 1;
      video.muted = audible;
    });
    video.addEventListener('volumechange', updateSound);
    updateSound();
    frame.append(sound);
  }
  video.addEventListener('pause', () => {
    if (expectedPauses.has(video)) {
      expectedPauses.delete(video);
    } else if (activeClip === video && !document.hidden && clipVisibility.get(video) >= .35) {
      // Respect a visitor who presses pause, until the clip leaves the screen.
      manuallyPaused.add(video);
    }
  });
  video.addEventListener('play', () => {
    if (autoplayRequests.has(video) && activeClip !== video) {
      stopClip(video);
      return;
    }
    activeClip = video;
    manuallyPaused.delete(video);
    clips.forEach(other => { if (other !== video) stopClip(other); });
  });
});

const updatePlayback = () => {
  if (document.hidden) {
    clips.forEach(stopClip);
    activeClip = null;
    return;
  }
  if (reducedMotion.matches) {
    if (activeClip && clipVisibility.get(activeClip) < .15) {
      stopClip(activeClip);
      activeClip = null;
    }
    return;
  }
  // Keep the current clip while still substantially visible, avoiding flicker.
  let next = activeClip && clipVisibility.get(activeClip) >= .35 ? activeClip : null;
  if (!next) {
    next = clips.filter(video => clipVisibility.get(video) >= .6 && !manuallyPaused.has(video))
      .sort((a, b) => clipVisibility.get(b) - clipVisibility.get(a))[0] || null;
  }
  if (activeClip && activeClip !== next) stopClip(activeClip);
  activeClip = next;
  if (!next || !next.paused || manuallyPaused.has(next) || autoplayRequests.has(next)) return;
  next.muted = true;
  autoplayRequests.add(next);
  const request = next.play();
  request?.then(() => {
    if (activeClip !== next || document.hidden || reducedMotion.matches) stopClip(next);
  }).catch(() => {
    // Browsers that block autoplay keep the poster and normal play control.
    manuallyPaused.add(next);
  }).finally(() => { autoplayRequests.delete(next); });
};

if ('IntersectionObserver' in window && clips.length) {
  let clipObserver;
  const observeClips = () => {
    clipObserver?.disconnect();
    clipObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        clipVisibility.set(entry.target, entry.intersectionRatio);
        if (entry.intersectionRatio < .15) manuallyPaused.delete(entry.target);
      });
      updatePlayback();
    }, { rootMargin: `-${siteHeader?.offsetHeight || 0}px 0px 0px 0px`, threshold: [0, .15, .35, .6, .85, 1] });
    clips.forEach(video => clipObserver.observe(video));
  };
  observeClips();
  window.addEventListener('resize', observeClips);
  document.addEventListener('visibilitychange', updatePlayback);
  reducedMotion.addEventListener('change', event => {
    if (event.matches) {
      clips.forEach(stopClip);
      activeClip = null;
    } else updatePlayback();
  });
  window.addEventListener('pagehide', () => clips.forEach(stopClip));
}
