function renderInternalBannerImage() {
    document.querySelectorAll('.page-banner').forEach(banner => {
        if (banner.querySelector('.banner-image')) return;
        const image = document.createElement('img');
        image.className = 'banner-image';
        
        const h1 = banner.querySelector('h1');
        const title = h1 ? h1.textContent.trim() : 'CAMISETAS OVERSIZE';
        
        if (title === 'HOMBRE') {
            image.src = 'https://www.figma.com/api/mcp/asset/3d2a7fdd-cada-4bcd-9894-427d1153ced1.png';
        } else if (title === 'CAMISETAS OVERSIZE') {
            image.src = 'https://www.figma.com/api/mcp/asset/03effb12-800c-4a61-b912-5f9be3c3e726.png';
        } else if (title === 'PROMOCIONES' || title === 'SERVICIOS') {
            image.src = 'https://www.figma.com/api/mcp/asset/c2ca3ee9-5835-41f2-8172-62e8388ed45e.png';
        } else if (title === 'FACTURA Y FEEDBACK' || title === 'CARRITO DE COMPRAS') {
            image.src = 'https://www.figma.com/api/mcp/asset/41720044-0188-4125-ab88-5fa31352a6ab.png';
        } else {
            image.src = 'https://www.figma.com/api/mcp/asset/03effb12-800c-4a61-b912-5f9be3c3e726.png';
        }
        
        image.alt = '';
        banner.prepend(image);
    })
}
document.addEventListener('DOMContentLoaded', renderInternalBannerImage);
document.addEventListener('DOMContentLoaded', renderViewIcons);

function renderViewIcons() {
    document.querySelectorAll('.view-icons').forEach(container => { container.innerHTML = '<svg viewBox="0 0 24 24" aria-label="Vista de cuadrícula"><rect x="4" y="4" width="5" height="5" rx=".5"/><rect x="15" y="4" width="5" height="5" rx=".5"/><rect x="4" y="15" width="5" height="5" rx=".5"/><rect x="15" y="15" width="5" height="5" rx=".5"/></svg><svg viewBox="0 0 24 24" aria-label="Vista de lista"><path d="M8 6h12M8 12h12M8 18h12"/><path d="M4 6h.01M4 12h.01M4 18h.01"/></svg>' })
}

const PRODUCTS = [
    { id: 'green-shirt', name: 'Camiseta Oversize Verde', price: 25, image: 'assets/camiseta-verde-grafica.svg', images: ['assets/camiseta-verde-grafica.svg', 'assets/camiseta-verde.svg', 'https://www.figma.com/api/mcp/asset/e42c0d7a-1e4d-447d-b828-ed0df0ee39a8.png'], desc: 'Camiseta relajada de algodón premium.', details: ['<strong>Color:</strong> Verde', '<strong>Tela:</strong> 100% algodón', '<strong>Corte:</strong> Oversize'] },
    { id: 'windbreaker', name: 'Nike Windbreaker', price: 50, image: 'https://www.figma.com/api/mcp/asset/c2ca3ee9-5835-41f2-8172-62e8388ed45e.png', images: ['https://www.figma.com/api/mcp/asset/c2ca3ee9-5835-41f2-8172-62e8388ed45e.png', 'https://www.figma.com/api/mcp/asset/5f277386-f194-4230-8ed0-dde52b477b0f.png', 'https://www.figma.com/api/mcp/asset/3165740d-cf78-4275-8f8f-5df54e3ff880.png'], desc: 'Chaqueta ligera rompevientos.', details: ['<strong>Material:</strong> 100% Poliéster'] },
    { id: 'brown-polo', name: 'Polo Oversize Marrón', price: 20, image: 'assets/polo-marron.svg', images: ['assets/polo-marron.svg', 'https://www.figma.com/api/mcp/asset/5f277386-f194-4230-8ed0-dde52b477b0f.png'], desc: 'Polo de corte urbano moderno.', details: ['<strong>Color:</strong> Marrón', '<strong>Corte:</strong> Oversize'] },
    { id: 'black-red-shirt', name: 'Camiseta Oversize Negra Roja', price: 20, isPromo: true, image: 'assets/camiseta-negra-roja.svg', images: ['assets/camiseta-negra-roja.svg'], desc: 'Destaca por su imponente gráfico.', details: ['<strong>Color:</strong> Negro'] },
    { id: 'black-white-red-shirt', name: 'Camiseta Oversize Negra Blanca', price: 20, isPromo: true, image: 'assets/camiseta-negra-blanca-roja.svg', images: ['assets/camiseta-negra-blanca-roja.svg'], desc: 'Base negra profunda con detalles.', details: ['<strong>Color:</strong> Negro/Blanco'] },
    { id: 'black-blue-shirt', name: 'Camiseta Oversize Negra Azul', price: 20, isPromo: true, image: 'assets/camiseta-negra-azul.svg', images: ['assets/camiseta-negra-azul.svg'], desc: 'Minimalismo oscuro y color vibrante.', details: ['<strong>Color:</strong> Negro/Azul'] },
    { id: 'gray-logo-shirt', name: 'Camiseta Oversize Gris Logo', price: 20, isPromo: true, image: 'assets/camiseta-gris-logo.svg', images: ['assets/camiseta-gris-logo.svg'], desc: 'Los básicos reimaginados.', details: ['<strong>Color:</strong> Gris'] },
    { id: 'burgundy-shirt', name: 'Camiseta Oversize Vino', price: 20, isPromo: true, image: 'assets/camiseta-vino-grafica.svg', images: ['assets/camiseta-vino-grafica.svg'], desc: 'Tono vino profundo.', details: ['<strong>Color:</strong> Vino Tinto'] },
    { id: 'charcoal-shirt', name: 'Camiseta Oversize Carbón', price: 20, isPromo: true, image: 'assets/camiseta-gris-oscura.svg', images: ['assets/camiseta-gris-oscura.svg'], desc: 'Estética vintage y desgastada.', details: ['<strong>Color:</strong> Gris Carbón'] },
    { id: 'black-graphic-shirt', name: 'Camiseta Oversize Negra Gráfica', price: 20, image: 'assets/camiseta-negra-blanca.svg', images: ['assets/camiseta-negra-blanca.svg'], desc: 'Declaración de intenciones.', details: ['<strong>Color:</strong> Negro'] },
    { id: 'black-figure-shirt', name: 'Camiseta Oversize Negra Figura', price: 20, image: 'assets/camiseta-negra-figura.svg', images: ['assets/camiseta-negra-figura.svg'], desc: 'Arte urbano hecho prenda.', details: ['<strong>Color:</strong> Negro'] },
    { id: 'gray-shirt', name: 'Camiseta Oversize Gris', price: 20, image: 'assets/camiseta-gris-clara.svg', images: ['assets/camiseta-gris-clara.svg'], desc: 'La versatilidad en su máxima expresión.', details: ['<strong>Color:</strong> Gris claro'] },
    { id: 'white-shirt', name: 'Camiseta Oversize Blanca', price: 20, image: 'assets/camiseta-blanca.svg', images: ['assets/camiseta-blanca.svg'], desc: 'Fresca, impecable y esencial.', details: ['<strong>Color:</strong> Blanco óptico'] },
    { id: 'shorts', name: 'Bermuda de Felpa', price: 20, image: 'https://www.figma.com/api/mcp/asset/1b375efe-0fee-4507-8f22-a5ebc0d835ea.png', images: ['https://www.figma.com/api/mcp/asset/1b375efe-0fee-4507-8f22-a5ebc0d835ea.png', 'https://www.figma.com/api/mcp/asset/915b5340-de56-4ec2-8def-dff1b1e490ae.png'], desc: 'Bermuda ultra cómoda.', details: ['<strong>Material:</strong> Felpa'] },
    { id: 'wide-leg', name: 'Pantalón Wide-Leg', price: 35, image: 'https://www.figma.com/api/mcp/asset/ef349c39-cdda-476c-ae2f-5a0c9aea3a21.png', images: ['https://www.figma.com/api/mcp/asset/ef349c39-cdda-476c-ae2f-5a0c9aea3a21.png', 'https://www.figma.com/api/mcp/asset/915b5340-de56-4ec2-8def-dff1b1e490ae.png'], desc: 'Pantalón ancho de estética militar.', details: ['<strong>Corte:</strong> Wide-leg'] },
    { id: 'beanie', name: 'Gorro cuff gris', price: 15, image: 'https://www.figma.com/api/mcp/asset/84fbb8c0-d0b9-4ec5-93f0-1cbc18584afc.png', images: ['https://www.figma.com/api/mcp/asset/84fbb8c0-d0b9-4ec5-93f0-1cbc18584afc.png'], desc: 'Gorro tejido de invierno.', details: ['<strong>Material:</strong> Acrílico'] }
];

function header() { 
    const isLogged = localStorage.getItem('district_session') === 'active';
    const accountLink = isLogged ? 'perfil.html' : 'login.html';

    return `<header class="site-header">
        <a class="brand" href="index.html"><strong>DISTRICT</strong><small>URBAN EMPIRE</small></a>
        <nav id="main-navigation">
            <a href="index.html">INICIO</a>
            <a href="hombres.html">HOMBRES</a>
            <a href="promociones.html">PROMOCIONES</a>
            <a href="servicios.html">SERVICIOS</a>
            ${isLogged ? '<button class="logout-button" type="button">CERRAR SESIÓN</button>' : ''}
        </nav>
        <div class="actions">
            <button class="search-toggle" type="button" aria-label="Buscar" aria-expanded="false" aria-controls="site-search"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="20" cy="20" r="11"/><path d="M28 28l10 10"/></svg></button>
            <a aria-label="Mi cuenta" href="${accountLink}"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="15" r="7"/><path d="M10 41c0-8 5.7-13 14-13s14 5 14 13"/></svg></a>
            <a aria-label="Carrito" href="carrito.html"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M5 8h6l4 24h23l5-17H14"/><circle cx="19" cy="40" r="2.5"/><circle cx="35" cy="40" r="2.5"/></svg><span class="cart-count">${cart().reduce((a, p) => a + p.qty, 0)}</span></a>
        </div>
        <form class="site-search" id="site-search" role="search" action="hombres.html" method="get">
            <label for="site-search-input">Buscar productos</label>
            <input id="site-search-input" name="search" type="search" placeholder="Buscar productos..." autocomplete="off">
            <div class="search-results" aria-live="polite"></div>
        </form>
        <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="main-navigation"><span></span><span></span><span></span></button>
    </header>`;
}

function footer() { 
    return `<footer class="site-footer">
        <div class="newsletter">
            <img class="newsletter-icon" src="https://www.figma.com/api/mcp/asset/db85dac8-9863-4eb8-b3b7-eb58add4e667.svg" alt="">
            <div class="newsletter-copy">
                <b>SE EL PRIMERO EN ENTERARTE</b><small>Suscribete y recibe ofertas.</small>
            </div>
            <form><input type="email" placeholder="Ingresa tu correo electronico"><button>SUSCRIBIRME</button></form>
        </div>
        <div class="footer-main">
            <div class="footer-brand">DISTRICT.<small>URBAN EMPIRE</small></div>
            <div><h3>TIENDA</h3><p>Inicio<br>Hombre<br>Promociones</p></div>
            <div><h3>SERVICIOS</h3><p>Probador virtual<br>Guia de tallas</p></div>
            <div class="copyright">© 2026 Urban Empire. Todos los derechos reservados.</div>
        </div>
    </footer>`; 
}

function cart() { return JSON.parse(localStorage.getItem('district-cart') || '[]') }
function saveCart(value) { localStorage.setItem('district-cart', JSON.stringify(value)) }
function getFinalPrice(product) { return product.isPromo ? product.price * 0.8 : product.price; }

function productCard(p) { 
    let priceDisplay = `<span>$ ${p.price.toFixed(2)}</span>`;
    if (p.isPromo) {
        priceDisplay = `<span style="text-decoration: line-through; color: #a1a1aa; margin-right: 8px; font-size: 13px;">$ ${p.price.toFixed(2)}</span><span style="color: #dc2626; font-weight: 700; font-size: 14px;">$ ${getFinalPrice(p).toFixed(2)}</span>`;
    }
    return `<article class="product-card"><a href="producto.html?id=${p.id}"><img src="${p.image}" alt="${p.name}"></a><div class="card-copy"><strong>${p.name}</strong>${priceDisplay}</div></article>`;
}

function renderProducts() {
    const sortSelect = document.querySelector('.sort-by');
    const sortValue = sortSelect ? sortSelect.value : 'default';
    const search = new URLSearchParams(window.location.search).get('search')?.trim().toLowerCase() || '';

    document.querySelectorAll('[data-products]').forEach(container => {
        let list = [...PRODUCTS];
        if (container.dataset.products === 'men') list = [...PRODUCTS]; 
        if (container.dataset.products === 'new') list = PRODUCTS.filter(product => product.id !== 'green-shirt');
        if (container.dataset.products === 'shirts') list = PRODUCTS.filter(p => p.name.includes('Camiseta') || p.name.includes('Polo'));
        if (container.dataset.products === 'promos') list = PRODUCTS.filter(p => p.isPromo);
        if (container.dataset.products === 'recommendations') list = PRODUCTS.slice(0, 4);
        if (search) list = list.filter(p => p.name.toLowerCase().includes(search));

        if (sortValue === 'price-asc') list.sort((a, b) => getFinalPrice(a) - getFinalPrice(b));
        else if (sortValue === 'price-desc') list.sort((a, b) => getFinalPrice(b) - getFinalPrice(a));

        container.innerHTML = list.length ? list.map(p => productCard(p)).join('') : '<p class="search-empty">No encontramos productos con esa búsqueda.</p>';
    });
}

function setupSearch() {
    const toggle = document.querySelector('.search-toggle');
    const form = document.querySelector('#site-search');
    const input = document.querySelector('#site-search-input');
    const results = document.querySelector('.search-results');
    if (!toggle || !form || !input || !results) return;

    const updateResults = () => {
        const value = input.value.trim().toLowerCase();
        const matches = value ? PRODUCTS.filter(p => p.name.toLowerCase().includes(value)).slice(0, 5) : [];
        results.innerHTML = matches.map(p => `<a href="producto.html?id=${p.id}">${p.name}<span>$${getFinalPrice(p).toFixed(2)}</span></a>`).join('') || (value ? '<p>No hay coincidencias.</p>' : '');
    };

    toggle.addEventListener('click', () => {
        const isOpen = form.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        if (isOpen) input.focus();
    });
    input.addEventListener('input', updateResults);
    document.addEventListener('click', event => {
        if (!form.contains(event.target) && !toggle.contains(event.target)) {
            form.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
}

function renderCart() {
    const target = document.querySelector('#cart-items');
    if (!target) return;
    const items = cart();
    
    target.innerHTML = items.length ? items.map(item => {
        const p = PRODUCTS.find(x => x.id === item.id) || PRODUCTS[0];
        return `<div class="cart-row"><img src="${p.image}" alt="${p.name}"><div><h3>${p.name}</h3><strong class="price">$${getFinalPrice(p).toFixed(2)}</strong><p>Talla: M</p></div><div class="cart-controls"><button data-cart="minus" data-id="${p.id}">−</button> ${item.qty} <button data-cart="plus" data-id="${p.id}">+</button> <button class="remove" data-cart="remove" data-id="${p.id}">Eliminar</button></div></div>`
    }).join('') : `<div class="empty-cart-state"><h3>TU CARRITO ESTÁ VACÍO</h3><a href="hombres.html" class="olive-button" style="padding:15px 30px; display:inline-block; text-decoration:none; margin-top:10px;">VER CATÁLOGO</a></div>`;
    
    const subtotal = items.reduce((sum, item) => { const p = PRODUCTS.find(x => x.id === item.id) || PRODUCTS[0]; return sum + (getFinalPrice(p) * item.qty); }, 0);
    
    let shipping = subtotal >= 80 ? 0.00 : (items.length > 0 ? 3.50 : 0.00);
    
    if(document.querySelector('#cart-subtotal')) document.querySelector('#cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    if(document.querySelector('#cart-shipping')) document.querySelector('#cart-shipping').textContent = shipping === 0 ? 'GRATIS ($0.00)' : `$${shipping.toFixed(2)}`;
    if(document.querySelector('#cart-total')) document.querySelector('#cart-total').textContent = `$${(subtotal + shipping).toFixed(2)}`;
}

let appliedDiscountRate = 0;
function renderCheckoutInvoice() {
    const invoiceItems = document.querySelector('#invoice-items');
    if (!invoiceItems) return;
    const items = cart();
    invoiceItems.innerHTML = items.length ? items.map(item => {
        const p = PRODUCTS.find(x => x.id === item.id) || PRODUCTS[0];
        return `<div class="invoice-item-row"><span>${p.name} (x${item.qty})</span> <span>$${(getFinalPrice(p) * item.qty).toFixed(2)}</span></div>`;
    }).join('') : '<p>No hay artículos.</p>';

    const subtotal = items.reduce((sum, item) => { const p = PRODUCTS.find(x => x.id === item.id) || PRODUCTS[0]; return sum + (getFinalPrice(p) * item.qty); }, 0);
    const discountAmount = subtotal * appliedDiscountRate;
    const tax = (subtotal - discountAmount) * 0.15;

    let shippingFee = subtotal >= 80 ? 0.00 : 3.50;

    if (document.querySelector('#invoice-subtotal')) document.querySelector('#invoice-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    if (document.querySelector('#invoice-discount')) document.querySelector('#invoice-discount').textContent = `-$${discountAmount.toFixed(2)}`;
    if (document.querySelector('#invoice-tax')) document.querySelector('#invoice-tax').textContent = `$${tax.toFixed(2)}`;
    
    if (document.querySelector('#invoice-shipping')) {
        document.querySelector('#invoice-shipping').textContent = shippingFee === 0 ? 'GRATIS ($0.00)' : `$${shippingFee.toFixed(2)}`;
    }

    if (document.querySelector('#invoice-total')) document.querySelector('#invoice-total').textContent = `$${(subtotal - discountAmount + tax + shippingFee).toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#site-header')) document.querySelector('#site-header').innerHTML = header();
    if (document.querySelector('#site-footer')) document.querySelector('#site-footer').innerHTML = footer();
    setupSearch();

    const logoutButton = document.querySelector('.logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('district_session');
            window.location.href = 'index.html';
        });
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavigation = document.querySelector('#main-navigation');
    if (menuToggle && mainNavigation) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mainNavigation.classList.toggle('is-open');
            menuToggle.classList.toggle('is-open', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menu' : 'Abrir menu');
        });
    }
    
    renderProducts();
    renderCart();
    renderCheckoutInvoice();
    
    if (document.querySelector('.sort-by')) document.querySelector('.sort-by').addEventListener('change', renderProducts);

    if (document.getElementById('apply-coupon-btn')) {
        document.getElementById('apply-coupon-btn').addEventListener('click', () => {
            const val = document.getElementById('coupon-input').value.trim().toUpperCase();
            const msg = document.getElementById('coupon-message');
            if (val === 'URBANEMPIRE26') { appliedDiscountRate = 0.10; msg.textContent = '¡Aplicado (-10%)!'; msg.style.color = '#16a34a'; } 
            else { appliedDiscountRate = 0; msg.textContent = 'Inválido.'; msg.style.color = '#dc2626'; }
            renderCheckoutInvoice();
        });
    }

    if (window.location.pathname.includes('producto.html')) {
        const id = new URLSearchParams(window.location.search).get('id') || 'green-shirt'; 
        const prod = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
        if (prod) {
            if(document.getElementById('product-title')) document.getElementById('product-title').textContent = prod.name.toUpperCase();
            if(document.getElementById('product-desc')) document.getElementById('product-desc').textContent = prod.desc;
            if(document.getElementById('main-image')) document.getElementById('main-image').src = prod.image;
            if(document.getElementById('product-details-list')) document.getElementById('product-details-list').innerHTML = prod.details.map(d => `<li>${d}</li>`).join('');
            
            const priceEl = document.getElementById('product-price');
            if (priceEl && prod.isPromo) {
                priceEl.innerHTML = `<span style="text-decoration: line-through; color: #a1a1aa; margin-right: 15px;">$${prod.price.toFixed(2)}</span><span style="color: #dc2626;">$${getFinalPrice(prod).toFixed(2)}</span>`;
            } else if (priceEl) {
                priceEl.textContent = `$${prod.price.toFixed(2)}`;
            }

            const actionContainer = document.querySelector('.add-to-cart-row');
            if (actionContainer) {
                actionContainer.innerHTML = `<button type="button" class="olive-button" onclick="window.location.href='hombres.html'">SEGUIR COMPRANDO</button><button class="btn-icon" id="btn-add-icon" data-id="${prod.id}"><svg viewBox="0 0 48 48" width="24" height="24" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h6l4 24h23l5-17H14"/><circle cx="19" cy="40" r="3"/><circle cx="35" cy="40" r="3"/></svg></button>`;
                document.getElementById('btn-add-icon').addEventListener('click', () => {
                    const items = cart(), found = items.find(i => i.id === prod.id);
                    if (found) found.qty += 1; else items.push({ id: prod.id, qty: 1 });
                    saveCart(items);
                    const cartCount = document.querySelector('.cart-count');
                    if (cartCount) cartCount.textContent = items.reduce((a, p) => a + p.qty, 0);
                    
                    const iconBtn = document.getElementById('btn-add-icon');
                    const originalHTML = iconBtn.innerHTML;
                    iconBtn.style.borderColor = '#16a34a';
                    iconBtn.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
                    setTimeout(() => { iconBtn.style.borderColor = '#d4d4d0'; iconBtn.innerHTML = originalHTML; }, 1200);
                });
            }
        }
    }

    document.addEventListener('click', e => {
        if (!e.target.dataset.cart) return;
        const items = cart(), item = items.find(i => i.id === e.target.dataset.id);
        if (e.target.dataset.cart === 'plus') item.qty++;
        if (e.target.dataset.cart === 'minus') item.qty = Math.max(1, item.qty - 1);
        if (e.target.dataset.cart === 'remove') items.splice(items.indexOf(item), 1);
        saveCart(items);
        renderCart();
        if (window.location.pathname.includes('factura.html')) renderCheckoutInvoice();
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) cartCount.textContent = items.reduce((a, p) => a + p.qty, 0);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btnCheckout = document.querySelector('a[href="factura.html"], #btn-checkout, .btn-checkout');
    
    if (btnCheckout) {
        btnCheckout.addEventListener('click', (e) => {
            const isLogged = localStorage.getItem('district_session');
            
            if (isLogged !== 'active') {
                e.preventDefault(); 
                alert('ACCESO DENEGADO: Debes iniciar sesión o registrarte para procesar tu pago.');
                window.location.href = 'login.html';
            }
        });
    }
});