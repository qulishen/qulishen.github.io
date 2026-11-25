(() => {
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
