// ========================================
// SEARCH & FILTER FUNCTIONALITY
// ========================================

let currentCategory = 'all';
let selectedMaterials = new Set();
let productIndex = [];

// Initialize search and filter index on load
document.addEventListener('DOMContentLoaded', () => {
    buildProductIndex();
    
    // Wire up search input listener if it exists
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            handleSearch(e.target.value);
        });
    }
});

/**
 * Build searchable product index from the rendered grid
 */
function buildProductIndex() {
    const container = document.getElementById('productContainer');
    if (!container) return;

    const cards = container.querySelectorAll('.product-link');
    productIndex = Array.from(cards).map(card => {
        const titleEl = card.querySelector('h3');
        const priceEl = card.querySelector('.price');
        const imgEl = card.querySelector('img');
        
        return {
            element: card,
            name: titleEl ? titleEl.textContent.toLowerCase() : '',
            category: (card.getAttribute('data-category') || '').toLowerCase(),
            materials: (card.getAttribute('data-materials') || '').toLowerCase(),
            text: card.textContent.toLowerCase(),
            href: card.getAttribute('href'),
            image: imgEl ? imgEl.src : '',
            price: priceEl ? priceEl.textContent : ''
        };
    });
}

// ========================================
// CATEGORY & MATERIAL FILTERING
// ========================================

function filterCategory(category) {
    currentCategory = category || 'all';
    
    // Update header title if present
    const headerTitle = document.getElementById('productHeaderTitle');
    const categoryBar = document.getElementById('categoryBar');
    const categoryBarText = document.getElementById('categoryBarText');

    if (headerTitle) {
        headerTitle.textContent = currentCategory === 'all' ? 'ALL PRODUCTS' : `${currentCategory.toUpperCase()} JEWELLERY`;
    }

    if (categoryBar && categoryBarText) {
        if (currentCategory === 'all') {
            categoryBar.style.display = 'none';
        } else {
            categoryBar.style.display = 'flex';
            categoryBarText.textContent = `Filtered by category: ${currentCategory}`;
        }
    }

    applyFilters();
}

function toggleMaterial(checkbox) {
    const val = checkbox.value.trim().toLowerCase();
    if (checkbox.checked) {
        selectedMaterials.add(val);
    } else {
        selectedMaterials.delete(val);
    }
    applyFilters();
}

function clearMaterialFilters() {
    const checkboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);
    selectedMaterials.clear();
    applyFilters();
}

function applyFilters() {
    const container = document.getElementById('productContainer');
    if (!container) return;

    const cards = container.querySelectorAll('.product-link');

    cards.forEach(card => {
        const cardCategory = (card.getAttribute('data-category') || '').trim().toLowerCase();
        const cardMaterialsAttr = (card.getAttribute('data-materials') || '').toLowerCase();
        const cardText = card.textContent.toLowerCase();

        // 1. Category Check
        const matchesCategory = (currentCategory === 'all') || (cardCategory.includes(currentCategory));

        // 2. Material Check (If any materials are selected, card must match at least one or contain the text keyword)
        let matchesMaterials = true;
        if (selectedMaterials.size > 0) {
            matchesMaterials = false;
            selectedMaterials.forEach(mat => {
                if (cardMaterialsAttr.includes(mat) || cardText.includes(mat)) {
                    matchesMaterials = true;
                }
            });
        }

        // Toggle visibility via a CSS helper class
        if (matchesCategory && matchesMaterials) {
            card.classList.remove('product-card-hidden');
            card.style.display = '';
        } else {
            card.classList.add('product-card-hidden');
            card.style.display = 'none';
        }
    });
}

// ========================================
// SEARCH MODAL LOGIC
// ========================================

function openSearch() {
    const modal = document.getElementById('searchModal');
    if (modal) {
        modal.classList.add('active');
        const input = document.getElementById('searchInput');
        if (input) input.focus();
    }
}

function closeSearch() {
    const modal = document.getElementById('searchModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function handleSearch(query) {
    const resultsContainer = document.getElementById('searchResults');
    const hint = document.getElementById('searchHint');
    if (!resultsContainer) return;

    const cleanQuery = query.trim().toLowerCase();

    if (!cleanQuery) {
        resultsContainer.innerHTML = '';
        if (hint) hint.style.display = 'block';
        return;
    }

    if (hint) hint.style.display = 'none';

    const matches = productIndex.filter(p => p.name.includes(cleanQuery) || p.text.includes(cleanQuery));

    if (matches.length === 0) {
        resultsContainer.innerHTML = `<p class="no-results">No jewellery found matching "${query}"</p>`;
        return;
    }

    resultsContainer.innerHTML = matches.map(item => `
        <a href="${item.href}" class="search-result-item" onclick="closeSearch()">
            <img src="${item.image}" alt="">
            <div>
                <h4>${item.name}</h4>
                <p>${item.price}</p>
            </div>
        </a>
    `).join('');
}