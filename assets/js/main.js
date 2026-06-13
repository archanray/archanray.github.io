(() => {
  const key = 'archan-site-theme';
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem(key);
  if (saved === 'dark') document.documentElement.classList.add('dark');
  btn?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem(key, document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });
})();

