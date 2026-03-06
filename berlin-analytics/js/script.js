// Product data
const products = [
    { id: 1, name: "Brutalist Console", description: "Minimalist gaming console with cold precision.", price: 299.99 },
    { id: 2, name: "Data Analyzer Pro", description: "Advanced analytics device for real-time data processing.", price: 499.99 },
    { id: 3, name: "Precision Keyboard", description: "Mechanical keyboard with brutalist design.", price: 129.99 },
    { id: 4, name: "Cold Storage Device", description: "Secure offline storage solution.", price: 199.99 }
];

// Cart functionality
let cart = [];

// Load cart from localStorage if available
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

// Update cart count in header
function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }
}

// Display products on homepage
function displayProducts() {
    const productGrid = document.getElementById("product-grid");
    if (productGrid) {
        productGrid.innerHTML = "";
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productGrid.appendChild(productCard);
        });
    }
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        alert(`${product.name} added to cart!`);
    }
}

// Initialize page
document.addEventListener("DOMContentLoaded", function() {
    updateCartCount();
    displayProducts();
});
