/**
 * store.js - Professional E-Commerce Store Management
 * Graveyard Studios - Piercing Jewelry Store
 */

const CART_KEY = 'graveyard_cart_v1';

// Cache for products to avoid repeated checks
let productsCache = null;

/**
 * Load products directly from the global `products` array (Product-data.js)
 */
async function loadProducts() {
    if (productsCache) return productsCache;
    
    if (typeof products !== 'undefined' && Array.isArray(products)) {
        productsCache = products;
        return productsCache;
    }
    
    console.error('❌ `products` array not found. Ensure Product-data.js is loaded before store.js');
    return [];
}

/**
 * Get product by slug or ID
 */
async function getProductBySlug(slug) {
    const allProducts = await loadProducts();
    if (!allProducts || !allProducts.length) return null;

    const normalizedSlug = String(slug).trim().toLowerCase();

    return allProducts.find(p => {
        const pId = String(p.id || '').trim().toLowerCase();
        const pSlug = String(p.slug || '').trim().toLowerCase();
        const pNameSlug = String(p.name || '').trim().toLowerCase().replace(/\s+/g, '-');
        
        return pId === normalizedSlug || pSlug === normalizedSlug || pNameSlug === normalizedSlug;
    }) || null;
}

/**
 * Get product by ID
 */
async function getProductById(id) {
    return getProductBySlug(id);
}

/**
 * Get cart from localStorage (safe)
 */
function getCart() {
    try {
        const cartData = localStorage.getItem(CART_KEY);
        if (!cartData) return [];
        const cart = JSON.parse(cartData);
        return Array.isArray(cart) ? cart : [];
    } catch (error) {
        console.error('❌ Error reading cart:', error);
        localStorage.removeItem(CART_KEY);
        return [];
    }
}

/**
 * Save cart to localStorage
 */
function setCart(cart) {
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
        dispatchCartEvent();
    } catch (error) {
        console.error('❌ Error saving cart:', error);
        showToast('Failed to update cart', 'error');
    }
}

/**
 * Add item to cart (with variant merging)
 */
function addToCart(item) {
    const cart = getCart();
    const variantKey = `${item.productId}-${item.selectedColour}-${item.measurement}`;
    
    const existingIndex = cart.findIndex(cartItem => {
        const key = `${cartItem.productId}-${cartItem.selectedColour}-${cartItem.measurement}`;
        return key === variantKey;
    });
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += item.quantity;
    } else {
        cart.push({
            ...item,
            addedAt: new Date().toISOString()
        });
    }
    
    setCart(cart);
    return true;
}

/**
 * Remove item from cart
 */
function removeFromCart(index) {
    const cart = getCart();
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        setCart(cart);
    }
}

/**
 * Update quantity
 */
function updateQuantity(index, quantity) {
    const cart = getCart();
    if (index >= 0 && index < cart.length) {
        if (quantity <= 0) {
            removeFromCart(index);
        } else {
            cart[index].quantity = quantity;
            setCart(cart);
        }
    }
}

/**
 * Get cart count
 */
function getCartCount() {
    return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

/**
 * Get cart subtotal
 */
function getCartSubtotal() {
    return getCart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

/**
 * Clear cart
 */
function clearCart() {
    setCart([]);
}

/**
 * Dispatch cart update event
 */
function dispatchCartEvent() {
    window.dispatchEvent(new CustomEvent('cartUpdated', {
        detail: {
            cart: getCart(),
            count: getCartCount(),
            subtotal: getCartSubtotal()
        }
    }));
}

/**
 * Format price
 */
function formatPrice(price, currency = 'ZAR') {
    const prefix = currency === 'ZAR' ? 'R' : currency + ' ';
    return prefix + parseFloat(price).toFixed(2);
}

/**
 * Validate cart item
 */
function validateCartItem(item) {
    if (!item.productId) return { valid: false, error: 'Invalid product' };
    
    let product = null;
    if (productsCache && Array.isArray(productsCache)) {
        product = productsCache.find(p => p.id === item.productId || p.slug === item.slug || p.id === item.slug) || null;
    }

    if (product && Array.isArray(product.colours) && product.colours.length > 0) {
        if (!item.selectedColour) return { valid: false, error: 'Please select a colour' };
    }

    if (product && Array.isArray(product.measurements) && product.measurements.length > 0) {
        if (!item.measurement) return { valid: false, error: 'Please select a size' };
    }
    if (!item.quantity || item.quantity < 1) return { valid: false, error: 'Invalid quantity' };
    return { valid: true, error: '' };
}

/**
 * Show toast notification
 */
function showToast(message, type = 'success') {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Add toast styles if not present
if (!document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
        .toast {
            position: fixed;
            bottom: -100px;
            left: 50%;
            transform: translateX(-50%);
            background: #000;
            color: #fff;
            padding: 15px 25px;
            border-radius: 50px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 10000;
            transition: bottom 0.3s ease;
            font-weight: 600;
            font-size: 0.95rem;
        }
        .toast.show {
            bottom: 30px;
        }
        .toast.error {
            background: #dc3545;
        }
        .toast.success {
            background: #28a745;
        }
    `;
    document.head.appendChild(style);
}

// Initialize on load
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        dispatchCartEvent();
        console.log('✅ Store initialized');
    });
}

async function checkoutWithYoco() {
    try {
        const subtotal = getCartSubtotal();

        if (subtotal <= 0) {
            showToast("Your cart is empty.", "error");
            return;
        }

        const response = await fetch(
            "http://localhost:3000/create-checkout",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount: Math.round(subtotal * 100)
                })
            }
        );

        const data = await response.json();

        if (data.redirectUrl) {
            window.location.href = data.redirectUrl;
        } else if (data.redirect_url) {
            window.location.href = data.redirect_url;
        } else {
            console.log(data);
            showToast("Unable to create checkout.", "error");
        }

    } catch (error) {
        console.error(error);
        showToast("Payment failed.", "error");
    }
}