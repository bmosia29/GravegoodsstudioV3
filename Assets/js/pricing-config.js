// ========================================
// PRICING CONFIGURATION (Markup & 15% VAT)
// Graveyard Studios
// ========================================

// Adjust your markup multiplier here 
// (e.g., 2.0 = 100% markup on supplier cost, 1.5 = 50% markup)
const MARKUP_MULTIPLIER = 2.0; 
const VAT_RATE = 0.15; // 15% South African VAT

/**
 * Calculates the final retail price automatically from a raw supplier base price.
 * Formula: (Supplier Price * Markup) + 15% VAT
 * @param {number} rawPrice - The base price or supplier cost from your product data
 * @returns {number} Final retail price rounded to 2 decimal places
 */
function calculateRetailPrice(rawPrice) {
    const cost = parseFloat(rawPrice) || 0;
    if (cost <= 0) return 0;

    const markedUpPrice = cost * MARKUP_MULTIPLIER;
    const vatAmount = markedUpPrice * VAT_RATE;
    const finalPrice = markedUpPrice + vatAmount;

    return Number(finalPrice.toFixed(2));
}

/**
 * Formats a raw price into a styled South African Rand string (e.g., "R150.00")
 * @param {number} rawPrice - The base price
 * @returns {string} Formatted price string
 */
function formatRetailPrice(rawPrice) {
    const finalPrice = calculateRetailPrice(rawPrice);
    return `R${finalPrice.toFixed(2)}`;
}