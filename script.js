// 1. Dark / Light theme
const root = document.documentElement;
const themeBtn = document.getElementById('theme-btn');

function applyTheme(t) {
  root.dataset.theme = t;
  themeBtn.textContent = t === 'dark' ? '☀️ Light' : '🌙 Dark';
  themeBtn.setAttribute('aria-pressed', t === 'dark');
}
applyTheme(root.dataset.theme || 'light');

themeBtn.addEventListener('click', () => {
  applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

// 2. Flip товч (touch төхөөрөмж, keyboard-д зориулсан)
document.querySelectorAll('.flip-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.flip-card').classList.toggle('flipped');
  });
});