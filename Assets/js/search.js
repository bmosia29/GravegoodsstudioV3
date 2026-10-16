// ========================================
// PRODUCT SEARCH TOGGLE
// Indexes the product cards already rendered on the page,
// so results always match the real title/price/image/link.
// ========================================

let productIndex = [];

function buildProductIndex() {
    const links = document.querySelectorAll('.product-container .product-link');
    productIndex = Array.from(links).map(link => {
        const card = link.querySelector('.product-card');
        const title = card.querySelector('h3')?.textContent.trim() || '';
        const price = card.querySelector('.price')?.textContent.trim() || '';
        const img = card.querySelector('img')?.getAttribute('src') || '';
        return {
            title,
            price,
            img,
            url: link.getAttribute('href'),
            // lowercase, punctuation-stripped haystack for matching
            haystack: title.toLowerCase().replace(/[^a-z0-9\s]/g, ' ')
        };
    });
}

function openSearch() {
    const modal = document.getElementById('searchModal');
    const input = document.getElementById('searchInput');

    if (productIndex.length === 0) buildProductIndex();

    modal.classList.add('active');
    document.body.classList.add('search-open');

    // Focus after the transition starts so mobile keyboards behave
    setTimeout(() => input.focus(), 150);
}

function closeSearch() {
    const modal = document.getElementById('searchModal');
    const input = document.getElementById('searchInput');

    modal.classList.remove('active');
    document.body.classList.remove('search-open');
    input.value = '';
    document.getElementById('searchResults').innerHTML = '';
    document.getElementById('searchHint').style.display = 'block';
}

function renderResults(query) {
    const resultsEl = document.getElementById('searchResults');
    const hintEl = document.getElementById('searchHint');

    if (!query) {
        resultsEl.innerHTML = '';
        hintEl.style.display = 'block';
        return;
    }

    hintEl.style.display = 'none';

    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const matches = productIndex.filter(p =>
        terms.every(term => p.haystack.includes(term))
    );

    if (matches.length === 0) {
        resultsEl.innerHTML = '<p class="search-no-results">No jewellery found matching "' + escapeHtml(query) + '". Try a different term.</p>';
        return;
    }

    resultsEl.innerHTML = matches.map(p => `
        <a href="${p.url}" class="search-result-card">
            <img src="${p.img}" alt="${escapeHtml(p.title)}">
            <div class="src-info">
                <h4>${escapeHtml(p.title)}</h4>
                <p class="src-price">${escapeHtml(p.price)}</p>
            </div>
        </a>
    `).join('');
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ========================================
// COMBINED FILTERING (navbar category dropdown
// + sidebar material checkboxes)
// ========================================

const CATEGORY_LABELS = {
    all: 'All Products',
    ear: 'Ear Jewellery',
    nose: 'Nose Jewellery',
    belly: 'Belly Jewellery',
    industrial: 'Industrial Jewellery',
    surface: 'Surface Jewellery',
    septum: 'Septum Jewellery',
    'curved-barbell': 'Curved Barbell',
    dermal: 'Dermal Jewellery',
    nipple: 'Nipple Jewellery',
    'circular-barbell': 'Circular Barbell',
    'bioflex-ptfe': 'Bioflex and PTFE'
};

let currentCategory = 'all';
const selectedMaterials = new Set();

function toggleMaterial(checkbox) {
    if (checkbox.checked) {
        selectedMaterials.add(checkbox.value);
    } else {
        selectedMaterials.delete(checkbox.value);
    }
    applyFilters();
}

function clearMaterialFilters() {
    selectedMaterials.clear();
    document.querySelectorAll('#materialFilterOptions input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });
    applyFilters();
}

function filterCategory(category) {
    currentCategory = category;
    applyFilters();

    // Scroll to the top of the product grid so the change is obvious
    document.querySelector('.product-header')?.scrollIntoView({ behavior: 'smooth' });

    // Close the mobile nav menu if it's open
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle?.classList.remove('active');
    }
}

function applyFilters() {
    const container = document.getElementById('productContainer');
    if (!container) return;

    const cards = container.querySelectorAll('.product-link');
    const bar = document.getElementById('categoryBar');
    const barText = document.getElementById('categoryBarText');
    const title = document.getElementById('productHeaderTitle');
    const subtitle = document.getElementById('productHeaderSubtitle');

    // Remove any previous "no results" message
    const existingEmpty = container.querySelector('.no-category-results');
    if (existingEmpty) existingEmpty.remove();

    let visibleCount = 0;

    cards.forEach(card => {
        const cardCategory = (card.getAttribute('data-category') || '').trim().toLowerCase();
        const activeCategory = currentCategory.trim().toLowerCase();
        const cardMaterials = (card.getAttribute('data-materials') || '').toLowerCase().split(/\s+/).filter(Boolean);

        const categoryMatch = activeCategory === 'all' || cardCategory === activeCategory;
        const materialMatch = selectedMaterials.size === 0 ||
            cardMaterials.some(m => selectedMaterials.has(m));

        const show = categoryMatch && materialMatch;
        card.classList.toggle('product-card-hidden', !show);
        if (show) visibleCount++;
    });

    // Build a description of the active filters for the status bar / heading
    const materialLabel = selectedMaterials.size > 0
        ? Array.from(selectedMaterials).map(m => m[0].toUpperCase() + m.slice(1)).join(', ')
        : '';

    if (bar && barText && title && subtitle) {
        if (currentCategory === 'all' && selectedMaterials.size === 0) {
            bar.classList.remove('active');
            title.textContent = 'ALL PRODUCTS';
            subtitle.textContent = 'Explore our full collection of piercing jewellery';
        } else {
            bar.classList.add('active');
            const parts = [];
            if (currentCategory !== 'all') parts.push(CATEGORY_LABELS[currentCategory] || currentCategory);
            if (materialLabel) parts.push(materialLabel);
            barText.textContent = 'Showing: ' + parts.join(' — ');
            title.textContent = currentCategory !== 'all'
                ? (CATEGORY_LABELS[currentCategory] || currentCategory).toUpperCase()
                : 'ALL PRODUCTS';
            subtitle.textContent = 'Browse our ' +
                (currentCategory !== 'all' ? (CATEGORY_LABELS[currentCategory] || currentCategory).toLowerCase() : 'full')
                + ' collection' + (materialLabel ? ' in ' + materialLabel.toLowerCase() : '');
        }
    }

    if (visibleCount === 0) {
        const empty = document.createElement('p');
        empty.className = 'no-category-results';
        empty.textContent = 'No products found matching these filters yet.';
        container.appendChild(empty);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    buildProductIndex();

    const input = document.getElementById('searchInput');
    const modal = document.getElementById('searchModal');

    if (input) {
        input.addEventListener('input', (e) => renderResults(e.target.value));
    }

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeSearch();
        }
    });

    // Close when clicking the backdrop (outside the content box)
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeSearch();
        });
    }

    // Optional: press "/" anywhere to open search
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && modal && !modal.classList.contains('active') &&
            document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            openSearch();
        }
    });
});