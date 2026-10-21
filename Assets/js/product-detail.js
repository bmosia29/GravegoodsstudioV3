
// js/product-detail.js
// Product detail page: product lookup, gallery, variants, stock, and cart preview.

let product = null;
let selectedColour = '';
let selectedSize = '';
let qty = 1;

const CART_STORAGE_KEY = 'graveyard_cart_v1';
const FALLBACK_IMAGE = 'Assets/images/image.jpeg';

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}

function normaliseIdentifier(value = '') {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getElement(id) {
  return document.getElementById(id);
}

function getLocalCart() {
  try {
    const parsed = JSON.parse(
      localStorage.getItem(CART_STORAGE_KEY) || '[]'
    );
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Could not read cart:', error);
    return [];
  }
}

function saveLocalCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    return true;
  } catch (error) {
    console.error('Could not save cart:', error);
    return false;
  }
}

function getCurrentCart() {
  try {
    if (typeof getCart === 'function') {
      const cart = getCart();
      return Array.isArray(cart) ? cart : [];
    }
  } catch (error) {
    console.error('getCart() failed:', error);
  }

  return getLocalCart();
}

function displayPrice(value) {
  const amount = Number(value || 0);

  if (typeof formatPrice === 'function') {
    try {
      return formatPrice(amount);
    } catch (error) {
      console.warn('formatPrice() failed:', error);
    }
  }

  return `R${amount.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);

  // URLSearchParams already decodes URL parameters.
  const rawSlug =
    urlParams.get('id') ||
    urlParams.get('slug') ||
    urlParams.get('product');

  if (!rawSlug || !rawSlug.trim()) {
    console.warn('No product identifier found in URL.');

    const nameEl = getElement('productName');
    const descEl = getElement('productDesc');

    if (nameEl) nameEl.textContent = 'Product Not Found';
    if (descEl) {
      descEl.textContent = 'No product was specified in the link.';
    }

    return;
  }

  const targetId = rawSlug.trim().toLowerCase();
  const targetNormalised = normaliseIdentifier(targetId);

  let productLoaded = null;
  let retries = 5;

  while (retries > 0 && !productLoaded) {
    try {
      let all = [];

      if (typeof loadProducts === 'function') {
        all = await loadProducts();
      } else if (typeof products !== 'undefined') {
        all = products;
      }

      if (Array.isArray(all) && all.length) {
        // Prefer exact matches to avoid loading the wrong product.
        productLoaded =
          all.find(p =>
            String(p.id || '').trim().toLowerCase() === targetId
          ) ||
          all.find(p =>
            String(p.slug || '').trim().toLowerCase() === targetId
          ) ||
          all.find(p =>
            normaliseIdentifier(p.id || '') === targetNormalised
          ) ||
          all.find(p =>
            normaliseIdentifier(p.slug || '') === targetNormalised
          ) ||
          all.find(p =>
            normaliseIdentifier(p.name || p.title || '') === targetNormalised
          ) ||
          null;
      }

      if (productLoaded) break;
    } catch (error) {
      console.error(
        `Error loading products (attempt ${6 - retries}):`,
        error
      );
    }

    retries--;

    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }

  if (!productLoaded) {
    console.error('Product not found for identifier:', rawSlug);

    const nameEl = getElement('productName');
    const descEl = getElement('productDesc');

    if (nameEl) nameEl.textContent = 'Product Not Found';

    if (descEl) {
      descEl.textContent =
        `We couldn't locate details for this item ("${rawSlug}"). ` +
        'Please select an item from the main product page.';
    }

    return;
  }

  product = productLoaded;

  renderProduct();
  initCart();
  initMobileMenu();
});

function renderProduct() {
  if (!product) return;

  const name = product.name || product.title || 'Product';

  const nameEl = getElement('productName');
  const breadcrumbEl = getElement('breadcrumbName');
  const skuEl = getElement('productSku');
  const priceEl = getElement('productPrice');
  const descEl = getElement('productDesc');

  if (nameEl) nameEl.textContent = name;
  if (breadcrumbEl) breadcrumbEl.textContent = name;
  if (skuEl) skuEl.textContent = product.sku || product.id || '';
  if (priceEl) priceEl.textContent = displayPrice(product.price);
  if (descEl) descEl.textContent = product.description || '';

  const images =
    Array.isArray(product.images) && product.images.length
      ? product.images.filter(Boolean)
      : product.image
        ? [product.image]
        : [];

  product.images = images.length ? images : [FALLBACK_IMAGE];

  const mainImgEl = getElement('mainImg');

  if (mainImgEl) {
    mainImgEl.src = product.images[0];

    mainImgEl.onerror = () => {
      mainImgEl.onerror = null;
      mainImgEl.src = FALLBACK_IMAGE;
    };
  }

  const thumbsEl = getElement('thumbs');

  if (thumbsEl) {
    thumbsEl.innerHTML = product.images.map((img, index) => `
      <div class="thumbnail ${index === 0 ? 'active' : ''}"
           data-idx="${index}">
        <img
          src="${escapeHtml(img)}"
          alt="${escapeHtml(name)} image ${index + 1}"
          onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'"
        >
      </div>
    `).join('');

    thumbsEl.querySelectorAll('.thumbnail').forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        changeImage(Number(thumbnail.dataset.idx || 0));
      });
    });
  }

  const colourOptsEl = getElement('colourOpts');

  if (colourOptsEl) {
    const colourParent = colourOptsEl.parentElement;

    if (Array.isArray(product.colours) && product.colours.length) {
      colourOptsEl.innerHTML = product.colours
        .map(colour =>
          `<button type="button" class="colour-btn">` +
          `${escapeHtml(colour)}</button>`
        )
        .join('');

      selectedColour = String(product.colours[0]);

      colourOptsEl.querySelectorAll('.colour-btn').forEach(button => {
        button.addEventListener('click', () => {
          selectColour(button.textContent.trim());
        });

        button.classList.toggle(
          'selected',
          button.textContent.trim() === selectedColour
        );
      });

      if (colourParent) colourParent.style.display = '';
    } else {
      selectedColour = '';

      if (colourParent) {
        colourParent.style.display = 'none';
      }
    }
  }

  const sizeSelectEl = getElement('sizeSelect');

  if (sizeSelectEl) {
    const sizeParent = sizeSelectEl.parentElement;

    if (
      Array.isArray(product.measurements) &&
      product.measurements.length
    ) {
      sizeSelectEl.innerHTML =
        '<option value="">Select size</option>' +
        product.measurements.map(size =>
          `<option value="${escapeHtml(size)}">` +
          `${escapeHtml(size)}</option>`
        ).join('');

      selectedSize = '';

      sizeSelectEl.onchange = event => {
        selectSize(event.target.value);
      };

      if (sizeParent) sizeParent.style.display = '';
    } else {
      selectedSize = '';

      if (sizeParent) {
        sizeParent.style.display = 'none';
      }
    }
  }

  const qtyInput = getElement('qtyInput');

  if (qtyInput) {
    qty = Math.max(1, Number(qtyInput.value) || 1);
    qtyInput.value = qty;

    qtyInput.onchange = () => {
      qty = Math.max(1, parseInt(qtyInput.value, 10) || 1);
      qtyInput.value = qty;
      updateStock();
    };
  }

  const plus = getElement('qtyPlus');
  const minus = getElement('qtyMinus');

  if (plus) plus.onclick = () => changeQty(1);
  if (minus) minus.onclick = () => changeQty(-1);

  const addButton = getElement('addToCartBtn');

  if (addButton) {
    addButton.onclick = addToCartHandler;
  }

  updateStock();
}

function changeImage(index) {
  if (!product || !Array.isArray(product.images)) return;

  const image = product.images[index];
  const mainImgEl = getElement('mainImg');

  if (mainImgEl && image) {
    mainImgEl.onerror = () => {
      mainImgEl.onerror = null;
      mainImgEl.src = FALLBACK_IMAGE;
    };

    mainImgEl.src = image;
  }

  document.querySelectorAll('.thumbnail').forEach(
    (thumbnail, currentIndex) => {
      thumbnail.classList.toggle('active', currentIndex === index);
    }
  );
}

function selectColour(colour) {
  selectedColour = colour;

  document.querySelectorAll('.colour-btn').forEach(button => {
    button.classList.toggle(
      'selected',
      button.textContent.trim() === colour
    );
  });

  updateStock();
}

function selectSize(size) {
  selectedSize = size;

  const sizeSelectEl = getElement('sizeSelect');

  if (sizeSelectEl) {
    sizeSelectEl.value = size;
  }

  updateStock();
}

function changeQty(delta) {
  qty = Math.max(1, (Number(qty) || 1) + delta);

  const qtyInput = getElement('qtyInput');

  if (qtyInput) {
    qtyInput.value = qty;
  }

  updateStock();
}

function updateStock() {
  const status = getElement('stockStatus');
  const addButton = getElement('addToCartBtn');

  if (!product) return;

  const stock =
    product.stock === undefined ||
    product.stock === null ||
    product.stock === ''
      ? null
      : Number(product.stock);

  if (stock === null || !Number.isFinite(stock)) {
    if (status) {
      status.textContent = '';
      status.className = 'stock-status';
    }

    if (addButton) addButton.disabled = false;
    return;
  }

  if (stock <= 0) {
    if (status) {
      status.textContent = 'Out of stock';
      status.className = 'stock-status out';
    }

    if (addButton) addButton.disabled = true;
  } else {
    if (status) {
      status.textContent = 'In stock';
      status.className = 'stock-status';
    }

    if (addButton) addButton.disabled = false;
  }
}

function addToCartHandler() {
  if (!product) return;

  const errorEl = getElement('errorMsg');

  if (errorEl) errorEl.textContent = '';

  const stock =
    product.stock === undefined ||
    product.stock === null ||
    product.stock === ''
      ? null
      : Number(product.stock);

  if (Number.isFinite(stock) && stock <= 0) {
    if (errorEl) {
      errorEl.textContent = 'This product is out of stock.';
    }

    if (typeof showToast === 'function') {
      showToast('This product is out of stock', 'error');
    }

    return;
  }

  if (Number.isFinite(stock) && qty > stock) {
    if (errorEl) {
      errorEl.textContent = `Only ${stock} item(s) are available.`;
    }

    if (typeof showToast === 'function') {
      showToast(`Only ${stock} item(s) are available`, 'error');
    }

    return;
  }

  const item = {
    productId: product.id || product.slug || '',
    slug: product.slug || product.id || '',
    name: product.name || product.title || '',
    price: Number(product.price || 0),
    currency: product.currency || 'ZAR',
    selectedColour: selectedColour || '',
    measurement: selectedSize || '',
    quantity: Math.max(1, Number(qty) || 1),
    image:
      product.images && product.images.length
        ? product.images[0]
        : product.image || ''
  };

  try {
    if (typeof addToCart === 'function') {
      addToCart(item);
    } else {
      const cart = getLocalCart();
      cart.push(item);

      if (!saveLocalCart(cart)) {
        throw new Error('Could not save the cart.');
      }
    }

    updateCartBadge();
    updateCartPreview();

    if (typeof showToast === 'function') {
      showToast(`${item.name} added to cart!`, 'success');
    }

    const addButton = getElement('addToCartBtn');

    if (addButton) {
      const originalHtml = addButton.innerHTML;

      addButton.textContent = 'Added';
      addButton.disabled = true;

      setTimeout(() => {
        addButton.innerHTML =
          originalHtml ||
          '<i class="fas fa-shopping-cart"></i> Add to Cart';

        updateStock();
      }, 1100);
    }
  } catch (error) {
    console.error('addToCart error:', error);

    if (errorEl) {
      errorEl.textContent =
        'Unable to add this item to the cart. Please try again.';
    }

    if (typeof showToast === 'function') {
      showToast('Unable to add to cart', 'error');
    }
  }
}

function initCart() {
  const cartIcon = document.querySelector('.cart-icon');
  const cartPreview = getElement('cartPreview');
  const closePreview = getElement('closePreview');

  updateCartBadge();
  updateCartPreview();

  if (cartIcon && cartPreview) {
    cartIcon.onclick = event => {
      event.stopPropagation();
      cartPreview.classList.toggle('show');
    };
  }

  if (closePreview && cartPreview) {
    closePreview.onclick = event => {
      event.stopPropagation();
      cartPreview.classList.remove('show');
    };
  }

  document.addEventListener('click', event => {
    if (
      cartPreview &&
      !cartPreview.contains(event.target) &&
      cartIcon &&
      !cartIcon.contains(event.target)
    ) {
      cartPreview.classList.remove('show');
    }
  });

  window.addEventListener('cartUpdated', () => {
    updateCartBadge();
    updateCartPreview();
  });
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-count');

  if (!badge) return;

  let count = 0;

  try {
    if (typeof getCartCount === 'function') {
      count = Number(getCartCount()) || 0;
    } else {
      count = getCurrentCart().reduce(
        (sum, item) => sum + (Number(item.quantity) || 0),
        0
      );
    }
  } catch (error) {
    console.error('Could not update cart badge:', error);
  }

  badge.textContent = String(count);
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function updateCartPreview() {
  const itemsEl = getElement('cartPreviewItems');
  const subtotalEl = getElement('cartSubtotal');

  if (!itemsEl) return;

  const cart = getCurrentCart();

  if (!cart.length) {
    itemsEl.innerHTML =
      '<div class="empty-cart">' +
      '<i class="fas fa-shopping-bag"></i><p>Empty</p></div>';

    if (subtotalEl) {
      subtotalEl.textContent = 'R0.00';
    }

    return;
  }

  itemsEl.innerHTML = cart.map((item, index) => `
    <div class="cart-preview-item">
      <img
        src="${escapeHtml(item.image || FALLBACK_IMAGE)}"
        alt="${escapeHtml(item.name || '')}"
        onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'"
      >
      <div class="item-details">
        <h4>${escapeHtml(item.name || '')}</h4>
        <p>${escapeHtml(item.selectedColour || '')}${
          item.measurement
            ? ' • ' + escapeHtml(item.measurement)
            : ''
        }</p>
        <p class="item-price">
          ${displayPrice(item.price)} × ${Number(item.quantity) || 1}
        </p>
      </div>
      <button
        type="button"
        class="remove-item"
        data-idx="${index}"
        aria-label="Remove ${escapeHtml(item.name || 'item')}"
      >
        <i class="fas fa-times"></i>
      </button>
    </div>
  `).join('');

  itemsEl.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', event => {
      const index = Number(event.currentTarget.dataset.idx);

      try {
        if (typeof removeFromCart === 'function') {
          removeFromCart(index);
        } else {
          const currentCart = getLocalCart();

          if (index >= 0 && index < currentCart.length) {
            currentCart.splice(index, 1);
            saveLocalCart(currentCart);
          }
        }
      } catch (error) {
        console.error('Could not remove cart item:', error);
      }

      updateCartBadge();
      updateCartPreview();
    });
  });

  if (subtotalEl) {
    let subtotal = 0;

    try {
      if (typeof getCartSubtotal === 'function') {
        subtotal = Number(getCartSubtotal()) || 0;
      } else {
        subtotal = cart.reduce(
          (sum, item) =>
            sum +
            (Number(item.price) || 0) *
            (Number(item.quantity) || 1),
          0
        );
      }
    } catch (error) {
      console.error('Could not calculate cart subtotal:', error);

      subtotal = cart.reduce(
        (sum, item) =>
          sum +
          (Number(item.price) || 0) *
          (Number(item.quantity) || 1),
        0
      );
    }

    subtotalEl.textContent = displayPrice(subtotal);
  }
}

function initMobileMenu() {
  const toggle = getElement('menuToggle');
  const menu = getElement('navMenu');

  if (toggle && menu) {
    toggle.onclick = () => {
      menu.classList.toggle('active');
      toggle.classList.toggle('active');
    };
  }
}
