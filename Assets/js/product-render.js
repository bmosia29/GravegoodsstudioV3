
// ========================================
// PRODUCT RENDERING (listing page)
// Reads the `products` array from Product-data.js
// and builds the product grid cards.
// ========================================

const container = document.getElementById("productContainer");

/**
 * Normalize a category string into a lowercase, dash-safe key
 * and automatically map labrets, flatbacks, and ear items.
 */
function normalizeCategory(category, productName = '') {
    const cat = (category || "general").toString().trim().toLowerCase();
    const name = (productName || "").toString().trim().toLowerCase();

    // Automatically classify labrets, flatbacks, or ear items as 'ear' jewellery
    if (cat.includes('labret') || cat === 'flatback' || name.includes('ear') || name.includes('flatback') || name.includes('labret')) {
        return 'ear';
    }

    return cat;
}

function renderProducts(productArray) {
    if (!container) {
        console.error('renderProducts: #productContainer not found on this page');
        return;
    }

    container.innerHTML = "";

    productArray.forEach(product => {
        // Defensive fallbacks so a missing field never crashes the whole grid
        const image = (product.images && product.images[0]) || product.image || 'Assets/images/image.jpeg';
        const materials = Array.isArray(product.materials) ? product.materials : [];
        const category = normalizeCategory(product.category, product.name);
        
        // Combine text for filtering support
        const searchableText = `${product.name} ${product.description || ''} ${product.category || ''}`.toLowerCase();

        container.innerHTML += `
        <a href="product-detail.html?id=${product.id}"
           class="product-link"
           data-category="${category}"
           data-materials="${searchableText}">

            <div class="product-card">
                <img src="${image}" alt="${product.name}" loading="lazy">
                <h3>${product.name}</h3>
                <p class="price">R${Number(product.price).toFixed(2)}</p>
            </div>

        </a>
        `;
    });

    // Let search.js re-index the freshly rendered cards
    if (typeof buildProductIndex === 'function') {
        buildProductIndex();
    }
}

// ========================================
// LOAD PRODUCTS ON PAGE LOAD
// `products` comes from Assets/js/Product-data.js
// which must be loaded BEFORE this script tag.
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    if (typeof products === 'undefined') {
        console.error('Product-data.js did not load, or `products` array is missing');
        if (container) {
            container.innerHTML = '<p class="no-category-results">Unable to load products. Please refresh the page.</p>';
        }
        return;
    }

    renderProducts(products);
});