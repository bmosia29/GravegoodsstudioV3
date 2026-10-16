// ========================================
// CHECKOUT PAGE FUNCTIONALITY
// Graveyard Studios
// ========================================

// Paste your deployed Google Apps Script Web App URL here:
const GOOGLE_SHEET_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwlNaoUv5Y5Ij4I88AJGGbYGyepmWE-CncZHe8PNUd8r_5qxiNsHBa1VKpdIM4dWmnC7g/exec";

document.addEventListener('DOMContentLoaded', function() {
    
    const deliveryFee = 50.00;
    const vatRate = 0.15; // 15% VAT

    // ========================================
    // LOAD CART ITEMS FROM LOCALSTORAGE
    // ========================================
    function loadCartItemsFromStorage() {
        const cartItemsContainer = document.getElementById('cartItems');
        const cart = typeof getCart === 'function' ? getCart() : JSON.parse(localStorage.getItem('cart') || '[]');
        
        if (!cart || cart.length === 0) {
            showEmptyCart();
            return;
        }
        
        // Create HTML for each cart item
        const itemsHTML = cart.map((item, index) => `
            <div class="cart-item" data-price="${item.price}" data-id="${index}">
                <div class="item-image">
                    <img src="${item.image || ''}" alt="${item.name}">
                </div>
                <div class="item-details">
                    <h3 class="item-name">${item.name}</h3>
                    <p class="item-variation">${item.selectedColour || ''}${item.selectedColour && item.measurement ? ' • ' : ''}${item.measurement || ''}</p>
                    <div class="item-actions">
                        <div class="quantity-selector">
                            <button class="qty-btn minus" data-id="${index}">-</button>
                            <input type="number" class="qty-input" value="${item.quantity}" min="1" max="99" data-id="${index}">
                            <button class="qty-btn plus" data-id="${index}">+</button>
                        </div>
                        <button class="remove-btn" data-id="${index}">
                            <i class="fas fa-trash-alt"></i> Remove
                        </button>
                    </div>
                </div>
                <div class="item-price">
                    <span class="price-label">Price</span>
                    <span class="price-value">R<span class="item-total">${(item.price * item.quantity).toFixed(2)}</span></span>
                </div>
            </div>
        `).join('');
        
        cartItemsContainer.innerHTML = itemsHTML;
    }

    // Load cart items when page loads
    loadCartItemsFromStorage();

    // ========================================
    // CALCULATE TOTALS
    // ========================================
    function calculateTotals() {
        let subtotal = 0;
        
        // Get all cart items
        const cartItems = document.querySelectorAll('.cart-item');
        
        cartItems.forEach(item => {
            const price = parseFloat(item.getAttribute('data-price')) || 0;
            const qtyInput = item.querySelector('.qty-input');
            const quantity = parseInt(qtyInput.value) || 1;
            const itemTotal = price * quantity;
            
            // Update individual item total
            const itemTotalEl = item.querySelector('.item-total');
            if (itemTotalEl) itemTotalEl.textContent = itemTotal.toFixed(2);
            
            // Add to subtotal
            subtotal += itemTotal;
        });
        
        // Calculate VAT and total
        const vat = subtotal * vatRate;
        const total = subtotal + deliveryFee + vat;
        
        // Update summary display
        const subtotalEl = document.getElementById('subtotalValue');
        const vatEl = document.getElementById('vatValue');
        const totalEl = document.getElementById('totalValue');

        if (subtotalEl) subtotalEl.textContent = subtotal.toFixed(2);
        if (vatEl) vatEl.textContent = vat.toFixed(2);
        if (totalEl) totalEl.textContent = total.toFixed(2);
    }

    // ========================================
    // QUANTITY CONTROLS
    // ========================================
    
    function bindQuantityControls() {
        // Plus buttons
        const plusButtons = document.querySelectorAll('.qty-btn.plus');
        plusButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const cartIndex = parseInt(this.getAttribute('data-id'));
                const cart = typeof getCart === 'function' ? getCart() : JSON.parse(localStorage.getItem('cart') || '[]');
                if (cart[cartIndex]) {
                    cart[cartIndex].quantity += 1;
                    saveCart(cart);
                    loadCartItemsFromStorage();
                    calculateTotals();
                    bindQuantityControls();
                    bindRemoveButtons();
                    animateButton(this);
                }
            });
        });

        // Minus buttons
        const minusButtons = document.querySelectorAll('.qty-btn.minus');
        minusButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const cartIndex = parseInt(this.getAttribute('data-id'));
                const cart = typeof getCart === 'function' ? getCart() : JSON.parse(localStorage.getItem('cart') || '[]');
                if (cart[cartIndex] && cart[cartIndex].quantity > 1) {
                    cart[cartIndex].quantity -= 1;
                    saveCart(cart);
                    loadCartItemsFromStorage();
                    calculateTotals();
                    bindQuantityControls();
                    bindRemoveButtons();
                    animateButton(this);
                }
            });
        });

        // Manual input change
        const qtyInputs = document.querySelectorAll('.qty-input');
        qtyInputs.forEach(input => {
            input.addEventListener('change', function() {
                const cartIndex = parseInt(this.getAttribute('data-id'));
                let value = parseInt(this.value);
                const cart = typeof getCart === 'function' ? getCart() : JSON.parse(localStorage.getItem('cart') || '[]');
                
                if (!cart[cartIndex]) return;
                
                const min = 1;
                const max = 99;
                
                if (isNaN(value) || value < min) {
                    value = min;
                } else if (value > max) {
                    value = max;
                }
                
                cart[cartIndex].quantity = value;
                saveCart(cart);
                loadCartItemsFromStorage();
                calculateTotals();
                bindQuantityControls();
                bindRemoveButtons();
            });

            input.addEventListener('keypress', function(e) {
                if (e.key < '0' || e.key > '9') {
                    e.preventDefault();
                }
            });
        });
    }
    
    bindQuantityControls();

    // ========================================
    // REMOVE ITEM
    // ========================================
    function bindRemoveButtons() {
        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const cartIndex = parseInt(this.getAttribute('data-id'));
                const item = document.querySelector(`.cart-item[data-id="${cartIndex}"]`);
                
                if (item) {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-20px)';
                }
                
                setTimeout(() => {
                    const cart = typeof getCart === 'function' ? getCart() : JSON.parse(localStorage.getItem('cart') || '[]');
                    cart.splice(cartIndex, 1);
                    saveCart(cart);
                    
                    loadCartItemsFromStorage();
                    calculateTotals();
                    
                    bindQuantityControls();
                    bindRemoveButtons();
                }, 300);
            });
        });
    }
    
    bindRemoveButtons();

    // ========================================
    // EMPTY CART HANDLER
    // ========================================
    function showEmptyCart() {
        const cartItems = document.getElementById('cartItems');
        if (cartItems) {
            cartItems.innerHTML = `
                <div style="text-align: center; padding: 60px 20px;">
                    <i class="fas fa-shopping-bag" style="font-size: 4rem; color: #ddd; margin-bottom: 20px;"></i>
                    <h3 style="font-size: 1.5rem; margin-bottom: 10px;">Your cart is empty</h3>
                    <p style="color: #666; margin-bottom: 25px;">Add some items to get started!</p>
                    <a href="index.html" style="display: inline-block; padding: 12px 30px; background: #000; color: #fff; text-decoration: none; border-radius: 50px; font-weight: 700; transition: all 0.3s ease;">
                        Continue Shopping
                    </a>
                </div>
            `;
        }
    }

    // ========================================
    // GOOGLE SHEETS ORDER SUBMISSION HANDLER
    // ========================================
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', async function(e) {
            e.preventDefault();
            
            // Validate form requirements
            const form = document.getElementById('customerForm');
            if (form && !form.checkValidity()) {
                form.reportValidity();
                return;
            }

            // Ensure cart is not empty
            const cartItems = getCartData();
            if (!cartItems || cartItems.length === 0) {
                alert('Your cart is empty. Please add items before placing an order.');
                return;
            }
            
            // UI Loading state
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing Order...';
            this.disabled = true;

            // Extract form inputs safely
            const fullNameEl = document.getElementById('fullName');
            const phoneEl = document.getElementById('phone');
            const emailEl = document.getElementById('email');
            const notesEl = document.getElementById('notes');

            const subtotalEl = document.getElementById('subtotalValue');
            const deliveryEl = document.getElementById('deliveryFee');
            const vatEl = document.getElementById('vatValue');
            const totalEl = document.getElementById('totalValue');

            // Construct payload for Google Apps Script
            const payload = {
                fullName: fullNameEl ? fullNameEl.value : '',
                phoneNumber: phoneEl ? phoneEl.value : '',
                emailAddress: emailEl ? emailEl.value : '',
                deliveryAddress: "In-Store Collection",
                notes: notesEl ? notesEl.value : '',
                cartItems: cartItems,
                subtotal: subtotalEl ? "R" + subtotalEl.textContent : '',
                deliveryFee: deliveryEl ? "R" + deliveryEl.textContent : 'R50.00',
                vat: vatEl ? "R" + vatEl.textContent : '',
                total: totalEl ? "R" + totalEl.textContent : ''
            };

            try {
                // Post payload to Google Apps Script
                await fetch(GOOGLE_SHEET_WEB_APP_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                // Clear cart locally
                saveCart([]);

                // Reset form and show empty cart state
                if (form) form.reset();
                showEmptyCart();
                calculateTotals();

                // Advisory notification to client
                alert(
                    "Order Placed Successfully!\n\n" +
                    "• An email notification has been sent to our team.\n" +
                    "• Please note: Orders are for in-store collection.\n" +
                    "• Our team will contact you as soon as possible to coordinate your pickup."
                );

            } catch (error) {
                console.error('Order submission error:', error);
                alert('There was an issue submitting your order. Please try again.');
            } finally {
                this.innerHTML = originalText;
                this.disabled = false;
            }
        });
    }

    // Helper function to safely update local cart state
    function saveCart(cartData) {
        if (typeof setCart === 'function') {
            setCart(cartData);
        } else {
            localStorage.setItem('cart', JSON.stringify(cartData));
        }
    }

    // ========================================
    // UTILITY FUNCTIONS
    // ========================================
    
    function animateButton(btn) {
        btn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 100);
    }

    function getCartData() {
        const cartItems = document.querySelectorAll('.cart-item');
        const items = [];
        
        cartItems.forEach(item => {
            items.push({
                id: item.getAttribute('data-id'),
                name: item.querySelector('.item-name') ? item.querySelector('.item-name').textContent.trim() : '',
                variation: item.querySelector('.item-variation') ? item.querySelector('.item-variation').textContent.trim() : '',
                price: parseFloat(item.getAttribute('data-price')) || 0,
                quantity: item.querySelector('.qty-input') ? parseInt(item.querySelector('.qty-input').value) || 1 : 1,
                total: item.querySelector('.item-total') ? parseFloat(item.querySelector('.item-total').textContent) || 0 : 0
            });
        });
        
        return items;
    }

    // ========================================
    // FORM ENHANCEMENTS
    // ========================================
    
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = this.value.replace(/\D/g, '');
            
            if (value.startsWith('27')) {
                value = value.substring(2);
            } else if (value.startsWith('0')) {
                value = value.substring(1);
            }
            
            if (value.length > 0) {
                let formatted = '+27 ';
                if (value.length > 0) formatted += value.substring(0, 2);
                if (value.length > 2) formatted += ' ' + value.substring(2, 5);
                if (value.length > 5) formatted += ' ' + value.substring(5, 9);
                this.value = formatted.trim();
            }
        });
    }

    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (this.parentElement) this.parentElement.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            if (this.parentElement) this.parentElement.style.transform = 'translateY(0)';
        });
    });

    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.cart-section, .customer-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });

    // Calculate initial totals
    calculateTotals();
});

// Prevent accidental refresh if cart is populated
window.addEventListener('beforeunload', function(e) {
    const cartItems = document.querySelectorAll('.cart-item');
    if (cartItems.length > 0) {
        e.preventDefault();
        e.returnValue = '';
    }
});