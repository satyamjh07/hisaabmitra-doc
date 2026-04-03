(() => {
  const navToggle = document.getElementById('sf-nav-toggle');
  const navLinks = document.getElementById('sf-nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  document.querySelectorAll('.faq button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.faq');
      card.classList.toggle('open');
    });
  });

  const docsSidebar = document.getElementById('docs-sidebar');
  const docsToggle = document.getElementById('docs-toggle');
  if (docsSidebar && docsToggle) {
    docsToggle.addEventListener('click', () => docsSidebar.classList.toggle('open'));
  }

  const searchInput = document.getElementById('docs-search');
  const docsArticles = Array.from(document.querySelectorAll('.docs-content article'));
  if (searchInput && docsArticles.length) {
    searchInput.addEventListener('input', (e) => {
      const value = e.target.value.trim().toLowerCase();
      docsArticles.forEach((article) => {
        article.style.display = article.textContent.toLowerCase().includes(value) ? '' : 'none';
      });
    });
  }

  const links = Array.from(document.querySelectorAll('#docs-nav a'));
  if (links.length) {
    const map = new Map(links.map((link) => [link.getAttribute('href')?.slice(1), link]));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove('active'));
          map.get(entry.target.id)?.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 });

    document.querySelectorAll('.docs-content article').forEach((article) => observer.observe(article));
  }
})();
