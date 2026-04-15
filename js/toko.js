// ============================================================
//  AKSEN Toko Buku — toko.js
//  Filter, search, sort, and cart toast for toko.html
// ============================================================

(function () {
  'use strict';

  const grid       = document.getElementById('shopGrid');
  const searchInput = document.getElementById('shopSearch');
  const filterBtns  = document.querySelectorAll('.shop-filter');
  const sortSelect  = document.getElementById('shopSort');
  const resultsCount = document.getElementById('resultsCount');
  const emptyState  = document.getElementById('shopEmpty');
  const resetBtn    = document.getElementById('resetFilters');
  const toast       = document.getElementById('cartToast');
  const toastMsg    = document.getElementById('cartToastMsg');

  if (!grid) return;

  // Preserve original DOM order for reset
  const originalOrder = Array.from(grid.querySelectorAll('.book-card'));

  let state = {
    filter: 'all',
    search: '',
    sort: 'default',
  };

  // ── Apply filters, search, and sort ──────────────────────
  function applyState() {
    const cards = Array.from(grid.querySelectorAll('.book-card'));
    const visible = [];

    cards.forEach(function (card) {
      const cat    = card.dataset.category || '';
      const name   = (card.dataset.name || '').toLowerCase();
      const author = (card.querySelector('.book-card__author')?.textContent || '').toLowerCase();

      const matchFilter = state.filter === 'all' || cat === state.filter;
      const matchSearch = !state.search || name.includes(state.search) || author.includes(state.search);

      if (matchFilter && matchSearch) {
        card.hidden = false;
        visible.push(card);
      } else {
        card.hidden = true;
      }
    });

    // Sort visible cards
    if (state.sort === 'price-asc') {
      visible.sort(function (a, b) { return Number(a.dataset.price) - Number(b.dataset.price); });
    } else if (state.sort === 'price-desc') {
      visible.sort(function (a, b) { return Number(b.dataset.price) - Number(a.dataset.price); });
    } else if (state.sort === 'name-asc') {
      visible.sort(function (a, b) {
        return (a.dataset.name || '').localeCompare(b.dataset.name || '', 'id');
      });
    }

    // Re-append sorted cards (hidden ones stay, won't appear)
    visible.forEach(function (card) { grid.appendChild(card); });

    // Update count label
    if (resultsCount) {
      resultsCount.innerHTML = 'Menampilkan <strong>' + visible.length + '</strong> dari ' + originalOrder.length + ' buku';
    }

    // Show / hide empty state
    if (emptyState) {
      emptyState.hidden = visible.length > 0;
    }
  }

  // ── Filter buttons ───────────────────────────────────────
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      state.filter = btn.dataset.filter || 'all';
      applyState();
    });
    // Set initial aria-pressed
    btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
  });

  // ── Search ───────────────────────────────────────────────
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        state.search = searchInput.value.toLowerCase().trim();
        applyState();
      }, 200);
    });
  }

  // ── Sort ─────────────────────────────────────────────────
  if (sortSelect) {
    sortSelect.addEventListener('change', function () {
      state.sort = sortSelect.value;
      applyState();
    });
  }

  // ── Reset ────────────────────────────────────────────────
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      state = { filter: 'all', search: '', sort: 'default' };

      if (searchInput) searchInput.value = '';
      if (sortSelect) sortSelect.value = 'default';

      filterBtns.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      const allBtn = document.querySelector('.shop-filter[data-filter="all"]');
      if (allBtn) { allBtn.classList.add('active'); allBtn.setAttribute('aria-pressed', 'true'); }

      // Restore original order
      originalOrder.forEach(function (card) {
        card.hidden = false;
        grid.appendChild(card);
      });

      if (resultsCount) {
        resultsCount.innerHTML = 'Menampilkan <strong>' + originalOrder.length + '</strong> dari ' + originalOrder.length + ' buku';
      }
      if (emptyState) emptyState.hidden = true;
    });
  }

  // ── Cart Toast ───────────────────────────────────────────
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('show');
    }, 3500);
  }

  document.querySelectorAll('.book-card__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const title = btn.dataset.bookTitle || 'Buku';
      showToast('\u201c' + title + '\u201d ditambahkan ke keranjang!');

      // Visual feedback on button
      const original = btn.innerHTML;
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> Ditambahkan!';
      btn.disabled = true;
      setTimeout(function () {
        btn.innerHTML = original;
        btn.disabled = false;
      }, 2000);
    });
  });

  // ── Keyboard: close toast on Escape ─────────────────────
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toast && toast.classList.contains('show')) {
      toast.classList.remove('show');
      clearTimeout(toastTimer);
    }
  });

})();
