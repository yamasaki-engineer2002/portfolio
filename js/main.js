// ===================================
// ハンバーガーメニュー
// ===================================
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('is-active');
  menu.classList.toggle('is-open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// メニューリンククリックで閉じる
menu.querySelectorAll('.header__link').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    menu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ===================================
// フェードインアニメーション（Intersection Observer）
// ===================================
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  }
);

fadeInElements.forEach((el) => observer.observe(el));
