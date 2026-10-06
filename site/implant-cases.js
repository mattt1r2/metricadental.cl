'use strict';

// Links still open the original clinical photograph without dialog support.
const caseViewer = document.querySelector('.case-viewer');
if (caseViewer && typeof caseViewer.showModal === 'function') {
  const viewerImage = caseViewer.querySelector('img');
  const viewerCaption = caseViewer.querySelector('figcaption');
  const closeButton = caseViewer.querySelector('.case-viewer-close');
  let sourceLink;
  document.querySelectorAll('[data-case-photo]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      sourceLink = link;
      viewerImage.src = link.href;
      viewerImage.alt = link.querySelector('img').alt;
      viewerCaption.textContent = link.dataset.caption;
      caseViewer.showModal();
      document.documentElement.classList.add('case-viewer-open');
      closeButton.focus({ preventScroll: true });
    });
  });
  closeButton.addEventListener('click', () => caseViewer.close());
  caseViewer.addEventListener('click', event => {
    if (event.target !== caseViewer) return;
    const rect = caseViewer.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) caseViewer.close();
  });
  caseViewer.addEventListener('close', () => {
    document.documentElement.classList.remove('case-viewer-open');
    sourceLink?.focus({ preventScroll: true });
    viewerImage.removeAttribute('src');
  });
}
