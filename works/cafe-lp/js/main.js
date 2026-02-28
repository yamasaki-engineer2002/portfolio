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
// ヘッダースクロール効果
// ===================================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});

// ===================================
// フェードインアニメーション（Intersection Observer）
// ===================================
const fadeInElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  }
);

fadeInElements.forEach((el) => fadeObserver.observe(el));

// ===================================
// ギャラリーライトボックス
// ===================================
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCounter = document.getElementById('lightbox-counter');
const galleryItems = document.querySelectorAll('.gallery__item img');

let currentIndex = 0;
const images = Array.from(galleryItems);

const openLightbox = (index) => {
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add('is-active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightbox.classList.remove('is-active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

const updateLightbox = () => {
  const img = images[currentIndex];
  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt;
  lightboxCounter.textContent = `${currentIndex + 1} / ${images.length}`;
};

const showPrev = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightbox();
};

const showNext = () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightbox();
};

// ギャラリー画像クリック
galleryItems.forEach((img, index) => {
  img.parentElement.addEventListener('click', () => openLightbox(index));
});

// ライトボックス操作
lightbox.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
lightbox.querySelector('.lightbox__prev').addEventListener('click', showPrev);
lightbox.querySelector('.lightbox__next').addEventListener('click', showNext);

// オーバーレイクリックで閉じる
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target.classList.contains('lightbox__content')) {
    closeLightbox();
  }
});

// キーボード操作
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('is-active')) return;

  switch (e.key) {
    case 'Escape':
      closeLightbox();
      break;
    case 'ArrowLeft':
      showPrev();
      break;
    case 'ArrowRight':
      showNext();
      break;
  }
});
