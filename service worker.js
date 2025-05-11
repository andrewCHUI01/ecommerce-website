const CACHE_NAME = 'techtrend-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/shop.html',
    '/product.html',
    '/cart.html',
    '/checkout.html',
    '/about.html',
    '/contact.html',
    '/css/styles.css',
    '/js/script.js',
    '/data/products.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});