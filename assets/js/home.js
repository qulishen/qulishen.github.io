(() => {
  const menu = document.getElementById('nav-toggle');
  const navigation = document.getElementById('site-nav');
  if (menu && navigation) {
    const header = menu.closest('.site-header');
    const narrow = window.matchMedia('(max-width: 48rem)');
    let expanded = false;

    function showMenu(open) {
      expanded = open && narrow.matches;
      menu.setAttribute('aria-expanded', String(expanded));
      navigation.hidden = narrow.matches && !expanded;
    }

    function syncNavigation() {
      menu.hidden = !narrow.matches;
      showMenu(false);
    }

    header.dataset.navReady = '';
    syncNavigation();
    narrow.addEventListener('change', syncNavigation);

    menu.addEventListener('click', () => {
      showMenu(!expanded);
      if (expanded) navigation.querySelector('a')?.focus();
    });

    header.addEventListener('click', event => {
      if (event.target.closest('a')) showMenu(false);
    });

    document.addEventListener('click', event => {
      if (expanded && !header.contains(event.target)) showMenu(false);
    });

    document.addEventListener('keydown', event => {
      if (expanded && event.key === 'Escape') {
        showMenu(false);
        menu.focus();
      }
    });
  }

  const citations = document.getElementById('total_cit');
  const source = document.getElementById('citation-source');
  if (citations && source?.dataset.url && window.fetch) {
    fetch(source.dataset.url)
      .then(response => response.ok ? response.json() : null)
      .then(data => {
        if (data && Number.isFinite(data.citedby)) {
          citations.textContent = new Intl.NumberFormat().format(data.citedby);
        }
      })
      .catch(() => { /* keep unavailable count as a dash */ });
  }
})();
