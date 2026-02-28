/**
 * BrightCode Inc. — WORKS ページ専用
 * フィルタータブ切り替え
 */

const filterContainer = document.getElementById('filter');
const items = document.querySelectorAll('.works-grid__item');

if (filterContainer && items.length > 0) {
  filterContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter__btn');
    if (!btn) return;

    const category = btn.dataset.filter;

    // タブの active 切り替え
    filterContainer.querySelectorAll('.filter__btn').forEach((b) => {
      b.classList.remove('is-active');
    });
    btn.classList.add('is-active');

    // カードのフィルタリング
    items.forEach((item) => {
      if (category === 'all' || item.dataset.category === category) {
        item.classList.remove('is-hidden');
      } else {
        item.classList.add('is-hidden');
      }
    });
  });
}
