(() => {
  const root = document.documentElement;
  const languageButton = document.getElementById('lang-toggle');
  const nav = document.querySelector('.site-nav');
  const navLabel = nav.getAttribute('aria-label');
  const storageKey = 'site-lang';
  const requested = new URLSearchParams(location.search).get('lang');
  let preferred;

  try { preferred = localStorage.getItem(storageKey); } catch (error) { /* Storage is optional. */ }

  function setLanguage(language) {
    const chinese = language === 'zh';
    root.lang = chinese ? 'zh-CN' : 'en';
    nav.setAttribute('aria-label', chinese ? nav.dataset.labelZh : navLabel);
    document.querySelectorAll('[data-label-en][data-label-zh]').forEach(element => {
      element.setAttribute('aria-label', chinese ? element.dataset.labelZh : element.dataset.labelEn);
    });
  }

  setLanguage(requested === 'en' || requested === 'zh' ? requested : preferred);
  languageButton.hidden = false;
  languageButton.addEventListener('click', () => {
    const next = root.lang === 'en' ? 'zh' : 'en';
    setLanguage(next);
    try { localStorage.setItem(storageKey, next); } catch (error) { /* Current page still switches. */ }
    const url = new URL(location.href);
    url.searchParams.set('lang', next);
    try { history.replaceState(null, '', url); } catch (error) { /* File previews can switch in place. */ }
  });
})();
