/**
 * BrightCode Inc. — 共通 JavaScript
 * ハンバーガーメニュー / フェードインアニメーション / ヘッダースクロール制御
 */

// --- Hamburger Menu ---
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  const isOpen = hamburger.classList.toggle('is-open');
  mobileMenu.classList.toggle('is-open');
  overlay.classList.toggle('is-open');
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMenu() {
  hamburger.classList.remove('is-open');
  mobileMenu.classList.remove('is-open');
  overlay.classList.remove('is-open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);

// モバイルメニュー内リンクでメニューを閉じる
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// --- Fade-in (IntersectionObserver) ---
const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

fadeEls.forEach((el) => fadeObserver.observe(el));

// --- Header Scroll (透明 → 不透明) ---
const header = document.getElementById('header');

if (header.classList.contains('header--transparent')) {
  const scrollThreshold = 80;

  const onScroll = () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
