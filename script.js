// Initialize AOS
AOS.init({ duration: 1000 });

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Flash Sale Countdown
function startCountdown() {
    const countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;
    const endTime = new Date().getTime() + 3 * 60 * 60 * 1000; // 3 hours from now
    const updateCountdown = () => {
        const now = new Date().getTime();
        const timeLeft = endTime - now;
        if (timeLeft <= 0) {
            countdownEl.textContent = 'Sale Ended!';
            return;
        }
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        countdownEl.textContent = `${hours}h ${minutes}m ${seconds}s`;
        setTimeout(updateCountdown, 1000);
    };
    updateCountdown();
}

// WhatsApp Button
document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/+254702712926';
    whatsappBtn.className = 'whatsapp-btn';
    whatsappBtn.innerHTML = '<i class="bi bi-whatsapp text-2xl"></i>';
    whatsappBtn.setAttribute('aria-label', 'Contact us on WhatsApp');
    document.body.appendChild(whatsappBtn);
});

// Vibe Mode
const vibeModeToggle = document.getElementById('vibe-mode');
let vibeModeActive = false;
const vibeAudio = new Audio('sounds/vibe-mode.mp3');
if (vibeModeToggle) {
    vibeModeToggle.addEventListener('click', () => {
        vibeModeActive = !vibeModeActive;
        if (vibeModeActive) {
            body.classList.add('vibe-mode');
            vibeAudio.play();
            vibeAudio.loop = true;
        } else {
            body.classList.remove('vibe-mode');
            vibeAudio.pause();
            vibeAudio.currentTime = 0;
        }
    });
}

// Mock Product Data
const products = [
    { id: 1, name: 'Smartphone X', price: 699, category: 'electronics', image: 'images/smartphone.jpg', description: 'Latest smartphone with 5G.' },
    { id: 2, name: 'Wireless Earbuds', price: 129, category: 'accessories', image: 'images/earbuds.jpg', description: 'High-quality sound.' },
    { id: 3, name: 'Laptop Pro', price: 999, category: 'electronics', image: 'images/laptop.jpg', description: 'Powerful laptop for pros.' },
    { id: 4, name: 'Smart Watch', price: 199, category: 'accessories', image: 'images/watch.jpg', description: 'Track your fitness.' },
    { id: 5, name: 'Maasai Beaded Charger', price: 49, category: 'made-in-kenya', image: 'images/charger.jpg', description: 'Handcrafted by Kenyan artists.' }
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
    document.getElementById('cart-count-mobile').textContent = count;
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Recently Viewed Products
let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];

function addToRecentlyViewed(productId) {
    if (!recentlyViewed.includes(productId)) {
        recentlyViewed.unshift(productId);
        if (recentlyViewed.length > 4) recentlyViewed.pop();
        localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    }
}

// Home Page: Featured Products
if (document.getElementById('featured-products')) {
    const featuredProducts = document.getElementById('featured-products');
    products.slice(0, 4).forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card bg-white dark:bg-gray-800 p-4 rounded-lg shadow relative';
        card.innerHTML = `
            ${product.category === 'made-in-kenya' ? '<span class="made-in-kenya">Made in Kenya</span>' : ''}
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded">
            <h3 class="text-xl font-bold mt-4">${product.name}</h3>
            <p class="text-green-500">KSh ${product.price}</p>
            <a href="product.html?id=${product.id}" class="btn bg-green-500 text-white px-4 py-2 rounded-full mt-4 inline-block">View</a>
        `;
        featuredProducts.appendChild(card);
    });
}

// Home Page: Recently Viewed
if (document.getElementById('recently-viewed')) {
    const recentlyViewedEl = document.getElementById('recently-viewed');
    recentlyViewed.forEach(productId => {
        const product = products.find(p => p.id === productId);
        if (product) {
            const card = document.createElement('div');
            card.className = 'product-card bg-white dark:bg-gray-800 p-4 rounded-lg shadow relative';
            card.innerHTML = `
                ${product.category === 'made-in-kenya' ? '<span class="made-in-kenya">Made in Kenya</span>' : ''}
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded">
                <h3 class="text-xl font-bold mt-4">${product.name}</h3>
                <p class="text-green-500">KSh ${product.price}</p>
                <a href="product.html?id=${product.id}" class="btn bg-green-500 text-white px-4 py-2 rounded-full mt-4 inline-block">View</a>
            `;
            recentlyViewedEl.appendChild(card);
        }
    });
}

// Shop Page: Product Grid and Filters
if (document.getElementById('product-grid')) {
    const productGrid = document.getElementById('product-grid');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const priceValue = document.getElementById('price-value');

    function renderProducts() {
        productGrid.innerHTML = '';
        const category = categoryFilter.value;
        const maxPrice = parseInt(priceFilter.value);
        products
            .filter(product => category === 'all' || product.category === category)
            .filter(product => product.price <= maxPrice)
            .forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card bg-white dark:bg-gray-800 p-4 rounded-lg shadow relative';
                card.innerHTML = `
                    ${product.category === 'made-in-kenya' ? '<span class="made-in-kenya">Made in Kenya</span>' : ''}
                    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded">
                    <h3 class="text-xl font-bold mt-4">${product.name}</h3>
                    <p class="text-green-500">KSh ${product.price}</p>
                    <button class="btn bg-green-500 text-white px-4 py-2 rounded-full mt-4" onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productGrid.appendChild(card);
            });
    }

    categoryFilter.addEventListener('change', renderProducts);
    priceFilter.addEventListener('input', () => {
        priceValue.textContent = priceFilter.value;
        renderProducts();
    });
    renderProducts();
}

// Product Details Page
if (document.getElementById('product-name')) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    if (product) {
        addToRecentlyViewed(productId);
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `KSh ${product.price}`;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-image').src = product.image;
        document.getElementById('add-to-cart').addEventListener('click', () => addToCart(productId));
    }
}

// Cart Page
if (document.getElementById('cart-items')) {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    function renderCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            const div = document.createElement('div');
            div.className = 'flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow';
            div.innerHTML = `
                <div>
                    <h3 class="text-lg font-bold">${item.name}</h3>
                    <p>KSh ${item.price} x ${item.quantity}</p>
                </div>
                <button class="btn bg-red-500 text-white px-4 py-2 rounded-full" onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartItems.appendChild(div);
        });
        cartTotal.textContent = total.toFixed(2);
    }

    window.removeFromCart = function(id) {
        cart = cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCart();
    };

    renderCart();
}

// Checkout Form
if (document.getElementById('checkout-form')) {
    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Order placed successfully! Check your WhatsApp for confirmation.');
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        window.location.href = 'index.html';
    });
}

// Contact Form
if (document.getElementById('contact-form')) {
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully! We’ll hit you up on WhatsApp.');
        e.target.reset();
    });
}

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Service Worker Registered'))
        .catch(err => console.error('Service Worker Error:', err));
}

// Initializations
startCountdown();
updateCartCount();