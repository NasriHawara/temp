// Product Data
const products = [
    {
        id: 1,
        name: 'Minimalist Lotus',
        category: 'small',
        price: 12.99,
        image: './small1.jpg',
        description: 'A delicate lotus flower design perfect for wrists or ankles. Symbolizes purity and enlightenment.',
        size: '2x2 inches'
    },
    {
        id: 2,
        name: 'Geometric Wolf',
        category: 'medium',
        price: 18.99,
        image: './med1.jpg',
        description: 'Modern geometric interpretation of a fierce wolf. Perfect for forearms or shoulders.',
        size: '4x4 inches'
    },
    {
        id: 3,
        name: 'Dragon Sleeve',
        category: 'half-sleeve',
        price: 34.99,
        image: './half1.jpg',
        description: 'Intricate Japanese-inspired dragon design that wraps beautifully around the forearm.',
        size: '8x12 inches'
    },
    {
        id: 4,
        name: 'Rose Bouquet',
        category: 'medium',
        price: 16.99,
        image: './med2.jpg',
        description: 'Beautiful cluster of roses with leaves and thorns. Classic and timeless design.',
        size: '3x5 inches'
    },
    {
        id: 5,
        name: 'Tribal Phoenix',
        category: 'full-sleeve',
        price: 49.99,
        image: './full1.jpg',
        description: 'Magnificent phoenix rising from flames in tribal style. Complete full-sleeve experience.',
        size: '12x18 inches'
    },
    {
        id: 6,
        name: 'Constellation Map',
        category: 'small',
        price: 11.99,
        image: './small2.jpg',
        description: 'Delicate star constellation with connecting lines. Perfect for astronomy lovers.',
        size: '2x3 inches'
    },
    {
        id: 7,
        name: 'Koi Fish Pair',
        category: 'half-sleeve',
        price: 32.99,
        image: './half2.jpg',
        description: 'Two koi fish swimming in harmony with water elements. Symbol of balance and prosperity.',
        size: '7x11 inches'
    },
    {
        id: 8,
        name: 'Mountain Range',
        category: 'small',
        price: 13.99,
        image: './small3.jpg',
        description: 'Minimalist mountain silhouette with pine trees. For nature enthusiasts.',
        size: '2x4 inches'
    },
    {
        id: 9,
        name: 'Mandala Flower',
        category: 'medium',
        price: 19.99,
        image: './med3.jpg',
        description: 'Intricate mandala pattern with floral elements. Represents wholeness and harmony.',
        size: '5x5 inches'
    },
    {
        id: 10,
        name: 'Samurai Warrior',
        category: 'full-sleeve',
        price: 52.99,
        image: './full2.jpg',
        description: 'Detailed samurai in traditional armor with cherry blossoms. Full-sleeve masterpiece.',
        size: '14x20 inches'
    },
    {
        id: 11,
        name: 'Arrow Heart',
        category: 'small',
        price: 10.99,
        image: './small4.jpg',
        description: 'Heart pierced with arrow in minimalist style. Symbol of love and courage.',
        size: '1.5x2 inches'
    },
    {
        id: 12,
        name: 'Butterfly Wings',
        category: 'medium',
        price: 17.99,
        image: './med4.jpg',
        description: 'Elegant butterfly with detailed wing patterns. Represents transformation.',
        size: '4x3 inches'
    },
    {
        id: 13,
        name: 'Ocean Wave',
        category: 'half-sleeve',
        price: 36.99,
        image: './half3.jpg',
        description: 'Japanese great wave with foam details. Dynamic and powerful design.',
        size: '9x13 inches'
    },
    {
        id: 14,
        name: 'Feather',
        category: 'small',
        price: 11.99,
        image: './small5.jpg',
        description: 'Delicate feather with fine details. Symbol of freedom and lightness.',
        size: '2x5 inches'
    },

        {
        id: 15,
        name: 'Samurai Warrior',
        category: 'full-sleeve',
        price: 52.99,
        image: './full3.jpg',
        description: 'Detailed samurai in traditional armor with cherry blossoms. Full-sleeve masterpiece.',
        size: '14x20 inches'
    },
    {
        id: 16,
        name: 'Custom Design',
        category: 'custom',
        price: 'Contact',
        image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600',
        description: 'Work with our artists to create your perfect custom temporary tattoo. Any size, any style.',
        size: 'Variable'
    }
];

// State
let cart = [];
let currentFilter = 'all';

// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartOverlay = document.getElementById('cartOverlay');
const productsGrid = document.getElementById('productsGrid');
const productModal = document.getElementById('productModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
    animateStats();
});

// Event Listeners
function setupEventListeners() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hamburger menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Nav links - close mobile menu on click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            // Update active state
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Search modal
    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        searchInput.focus();
    });

    closeSearch.addEventListener('click', () => {
        searchModal.classList.remove('active');
    });

    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
        }
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query) {
            const filtered = products.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.category.toLowerCase().includes(query)
            );
            renderProducts(filtered);
        } else {
            renderProducts();
        }
    });

    // Cart modal
    cartBtn.addEventListener('click', () => {
        cartModal.classList.add('active');
        renderCart();
    });

    closeCart.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    cartOverlay.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    // Product modal
    modalOverlay.addEventListener('click', () => {
        productModal.classList.remove('active');
    });

    closeModal.addEventListener('click', () => {
        productModal.classList.remove('active');
    });

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.category;
            renderProducts();
        });
    });

    // Contact form
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Thank you ${name}! We'll get back to you soon.`);
        contactForm.reset();
    });

    // Newsletter form
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing!');
        newsletterForm.reset();
    });
}

// Render Products
function renderProducts(productList = null) {
    const productsToRender = productList || (currentFilter === 'all' 
        ? products 
        : products.filter(p => p.category === currentFilter));

    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.category === 'custom' ? '<div class="product-badge">Custom</div>' : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${formatCategory(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${typeof product.price === 'number' ? '$' + product.price.toFixed(2) : product.price}</div>
            </div>
        </div>
    `).join('');
}

// Format Category
function formatCategory(category) {
    return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Open Product Modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalCategory').textContent = formatCategory(product.category);
    document.getElementById('modalPrice').textContent = typeof product.price === 'number' ? '$' + product.price.toFixed(2) : product.price;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalSize').textContent = product.size;

    const addToCartBtn = document.getElementById('addToCartBtn');
    addToCartBtn.onclick = () => addToCart(product);

    productModal.classList.add('active');
}

// Add to Cart
function addToCart(product) {
    if (product.category === 'custom') {
        alert('Please contact us to discuss your custom design!');
        return;
    }

    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartCount();
    productModal.classList.remove('active');
    cartModal.classList.add('active');
    renderCart();
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Render Cart
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        document.getElementById('cartTotal').textContent = '$0.00';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = '$' + total.toFixed(2);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCart();
}

// Animate Stats
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateValue(entry.target, 0, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    });

    stats.forEach(stat => observer.observe(stat));
}

function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);

}
