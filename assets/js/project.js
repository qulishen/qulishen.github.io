(() => {
  const gallery = document.getElementById('project-gallery');
  const controls = document.querySelector('[data-gallery-controls]');

  if (gallery && controls) {
    const figures = Array.from(gallery.querySelectorAll('.project-figure'));
    const previous = controls.querySelector('[data-gallery-step="-1"]');
    const next = controls.querySelector('[data-gallery-step="1"]');
    const position = controls.querySelector('[data-gallery-position]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let active = 0;

    function updatePosition() {
      const step = figures[1].offsetLeft - figures[0].offsetLeft;
      active = Math.min(figures.length - 1, Math.max(0, Math.round(gallery.scrollLeft / step)));
      const label = (active + 1) + ' / ' + figures.length;
      if (position.textContent !== label) position.textContent = label;
      previous.disabled = active === 0;
      next.disabled = active === figures.length - 1;
    }

    function showFigure(index) {
      gallery.scrollTo({
        left: figures[index].offsetLeft - figures[0].offsetLeft,
        behavior: reducedMotion.matches ? 'auto' : 'smooth',
      });
    }

    controls.hidden = false;
    previous.addEventListener('click', () => showFigure(active - 1));
    next.addEventListener('click', () => showFigure(active + 1));
    gallery.addEventListener('scroll', updatePosition, { passive: true });
    window.addEventListener('resize', updatePosition);
    updatePosition();
  }

  const copyButton = document.querySelector('[data-copy-citation]');
  const citation = document.querySelector('.project-citation code');
  const feedback = document.querySelector('[data-copy-feedback]');
  if (copyButton && citation && feedback && navigator.clipboard) {
    copyButton.hidden = false;
    copyButton.addEventListener('click', async () => {
      const chinese = document.documentElement.lang === 'zh-CN';
      let message = chinese ? '已复制。' : 'Copied.';
      try {
        await navigator.clipboard.writeText(citation.textContent);
      } catch (error) {
        message = chinese ? '请选中 BibTeX 文本后手动复制。' : 'Select the BibTeX text to copy it manually.';
      }
      feedback.hidden = false;
      feedback.textContent = message;
    });
  }
})();
