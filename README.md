# TechTrend Ecommerce Website

**TechTrend** is a modern, Nairobi-coded ecommerce platform built with a sleek, dark-mode aesthetic and a Kenyan soul. Inspired by Jumia’s user-friendly UX and a passion for breaking limits, this site offers a seamless shopping experience for tech gadgets and local “Made in Kenya” products. With a Progressive Web App (PWA) setup, flash sale timers, and a cosmic Vibe Mode (432Hz Easter egg)😎

## Features
- **Flash Sale Countdown**: 3-hour timer on the Home page to drive urgency.
- **WhatsApp Integration**: Floating button and footer links to +254702712926 for calls/orders.
- **Made in Kenya Category**: Showcases local products with Kenyan flag colors (red, green, black).
- **Recently Viewed Products**: Tracks viewed items using localStorage.
- **Customer Reviews**: Mock reviews on Product Details for trust-building.
- **Vibe Mode**: Hidden star in footer toggles a 432Hz ambient track and cosmic background.
- **PWA Support**: Installable on mobile/desktop with offline capabilities.
- **Responsive Design**: Mobile-first with hamburger menu and AOS animations.
- **Product Filters**: Filter by category (electronics, accessories, made-in-kenya) and price.
- **Cart & Checkout**: LocalStorage-based cart with mock M-Pesa checkout.
- **Kenyan Vibe**: Uses slang (“Shop poa”) and flag colors for a local feel.

## Tech Stack
- **HTML5**: Semantic, clean structure.
- **CSS**: Tailwind CSS for rapid styling, with custom styles in `css/styles.css`.
- **JavaScript**: Vanilla JS for interactivity, stored in `js/script.js`.
- **Libraries**:
  - Bootstrap Icons (for nav and footer icons).
  - AOS (for smooth animations).
- **PWA**: `manifest.json` and `service-worker.js` for app-like functionality.
- **Mock Backend**: `data/products.json` for product data, localStorage for cart/recently viewed.

## Project Structure

ecommerce-website/
├── index.html              # Home page
├── shop.html              # Shop page
├── product.html           # Product details page
├── cart.html              # Cart page
├── checkout.html          # Checkout page
├── about.html             # About page
├── contact.html           # Contact page
├── css/
│   └── styles.css         # Custom CSS
├── js/
│   └── script.js          # JavaScript logic
├── data/
│   └── products.json      # Mock product data
├── images/                # Product images and PWA icons
│   ├── smartphone.jpg
│   ├── earbuds.jpg
│   ├── laptop.jpg
│   ├── watch.jpg
│   ├── charger.jpg
│   ├── icon-192.png       # PWA icon (192x192)
│   └── icon-512.png       # PWA icon (512x512)
├── sounds/
│   └── vibe-mode.mp3      # 432Hz track for Vibe Mode
├── manifest.json          # PWA manifest
├── service-worker.js      # PWA service worker
└── README.md              # This file



1. **Clone**:
   - Clone this repo:https://github.com/andrewCHUI01/ecommerce-website.git
   - Navigate to the project: `cd ecommerce-website`.

Live demo link https://ecommerce-website-navy-omega.vercel.app/