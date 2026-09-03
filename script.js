function renderInternalBannerImage() {
    document.querySelectorAll('.page-banner').forEach(banner => {
        if (banner.querySelector('.banner-image')) return;
        const image = document.createElement('img');
        image.className = 'banner-image';
        const title = banner.querySelector('h1')?.textContent.trim();
        image.src = title === 'HOMBRE' ? 'https://www.figma.com/api/mcp/asset/3d2a7fdd-cada-4bcd-9894-427d1153ced1.png' : title === 'CAMISETAS OVERSIZE' ? 'https://www.figma.com/api/mcp/asset/03effb12-800c-4a61-b912-5f9be3c3e726.png' : title === 'FACTURA Y FEEDBACK' || title === 'CARRITO DE COMPRAS' ? 'https://www.figma.com/api/mcp/asset/41720044-0188-4125-ab88-5fa31352a6ab.png' : 'https://www.figma.com/api/mcp/asset/3669a830-29c9-4559-8289-fa7973ccbbb7.png';
        image.alt = '';
        banner.prepend(image)
    })
}
document.addEventListener('DOMContentLoaded', renderInternalBannerImage);
document.addEventListener('DOMContentLoaded', renderViewIcons);

function renderViewIcons() {
    document.querySelectorAll('.view-icons').forEach(container => { container.innerHTML = '<svg viewBox="0 0 24 24" aria-label="Vista de cuadrícula"><rect x="4" y="4" width="5" height="5" rx=".5"/><rect x="15" y="4" width="5" height="5" rx=".5"/><rect x="4" y="15" width="5" height="5" rx=".5"/><rect x="15" y="15" width="5" height="5" rx=".5"/></svg><svg viewBox="0 0 24 24" aria-label="Vista de lista"><path d="M8 6h12M8 12h12M8 18h12"/><path d="M4 6h.01M4 12h.01M4 18h.01"/></svg>' })
}

const PRODUCTS = [
    { 
        id: 'windbreaker', name: 'Nike Windbreaker', price: 50, 
        image: 'assets/windbreaker.svg', 
        images: ['https://www.figma.com/api/mcp/asset/ce45ed99-3b33-439f-8089-ed0f44a17b67.png', 'https://www.figma.com/api/mcp/asset/5f277386-f194-4230-8ed0-dde52b477b0f.png', 'https://www.figma.com/api/mcp/asset/3165740d-cf78-4275-8f8f-5df54e3ff880.png'],
        desc: 'Chaqueta ligera rompevientos diseñada para ofrecer máxima movilidad y protección superior contra los elementos climaticos urbanos.', 
        details: ['<strong>Material:</strong> 100% Poliéster impermeable', '<strong>Forro:</strong> Malla transpirable avanzada', '<strong>Ajuste:</strong> Regular fit urbano', '<strong>Cierre:</strong> Cremallera frontal completa reforzada'] 
    },
    { 
        id: 'brown-polo', name: 'Polo Oversize Marrón', price: 20, 
        image: 'assets/brown-polo.svg', 
        images: ['https://www.figma.com/api/mcp/asset/afdfc41f-e745-4c6a-949d-f74e0d37cdee.png', 'https://www.figma.com/api/mcp/asset/5f277386-f194-4230-8ed0-dde52b477b0f.png'],
        desc: 'Polo de corte urbano moderno con detalles en contraste sutiles. Confeccionada en tejido grueso de alta calidad para un porte impecable.', 
        details: ['<strong>Color:</strong> Marrón tierra', '<strong>Tela:</strong> 100% algodón de alto gramaje', '<strong>Corte:</strong> Oversize contemporáneo', '<strong>Hecho en Ecuador</strong>'] 
    },
    { 
        id: 'shorts', name: 'Bermuda de Felpa', price: 20, 
        image: 'assets/shorts.svg', 
        images: ['https://www.figma.com/api/mcp/asset/6cdd8152-9934-43c7-84e9-33a0dc81fde5.png', 'https://www.figma.com/api/mcp/asset/915b5340-de56-4ec2-8def-dff1b1e490ae.png'],
        desc: 'Bermuda ultra cómoda creada para el día a día en la ciudad. Estilo streetwear minimalista con acabados de primera calidad.', 
        details: ['<strong>Material:</strong> Felpa francesa (French Terry)', '<strong>Cintura:</strong> Elástica con cordón de ajuste reforzado', '<strong>Bolsillos:</strong> Laterales profundos', '<strong>Corte:</strong> Relajado'] 
    },
    { 
        id: 'wide-leg', name: 'Pantalón Wide-Leg', price: 35, 
        image: 'assets/wide-leg.svg', 
        images: ['https://www.figma.com/api/mcp/asset/33ac37b8-2c54-462e-80c9-a2292ee8e294.png', 'https://www.figma.com/api/mcp/asset/915b5340-de56-4ec2-8def-dff1b1e490ae.png'],
        desc: 'Pantalón ancho de mezclilla oscura con caída fluida y natural. Diseñado para destacar con tus zapatillas favoritas.', 
        details: ['<strong>Tela:</strong> Denim 12oz de alta resistencia', '<strong>Corte:</strong> Wide-leg (Bota ancha)', '<strong>Tiro:</strong> Medio-alto', '<strong>Lavado:</strong> Vintage oscuro'] 
    },
    { 
        id: 'beanie', name: 'Gorro cuff gris', price: 15, 
        image: 'assets/beanie.svg', 
        images: ['https://www.figma.com/api/mcp/asset/42315a75-5c14-4a16-8e7e-b0b3b762e919.png'],
        desc: 'Gorro tejido de invierno estilo cuff en color gris neutro.', 
        details: ['<strong>Material:</strong> Lana acrílica suave', '<strong>Talla:</strong> Única ajustable'] 
    }
];

function header() { 
    return `<header class="site-header">
        <a class="brand" href="index.html"><strong>DISTRICT</strong><small>URBAN EMPIRE</small></a>
        <nav>
            <a href="index.html">INICIO</a>
            <a href="hombres.html">HOMBRES</a>
            <a href="hombres.html">PROMOCIONES</a>
            <a href="hombres.html">SERVICIOS</a>
        </nav>
        <div class="actions">
            <button aria-label="Buscar"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="20" cy="20" r="11"/><path d="M28 28l10 10"/></svg></button>
            <a aria-label="Mi cuenta" href="#"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="15" r="7"/><path d="M10 41c0-8 5.7-13 14-13s14 5 14 13"/></svg></a>
            <a aria-label="Carrito" href="carrito.html"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M5 8h6l4 24h23l5-17H14"/><circle cx="19" cy="40" r="2.5"/><circle cx="35" cy="40" r="2.5"/></svg><span class="cart-count">${cart().reduce((a, p) => a + p.qty, 0)}</span></a>
        </div>
    </header>`;
}

function footer() { 
    return `<footer class="site-footer">
        <div class="newsletter">
            <img class="newsletter-icon" src="https://www.figma.com/api/mcp/asset/db85dac8-9863-4eb8-b3b7-eb58add4e667.svg" alt="">
            <div class="newsletter-copy">
                <b>SE EL PRIMERO EN ENTERARTE</b>
                <small>Suscribete y recibe noticias de lanzamientos,<br>ofertas exclusivas y mas.</small>
            </div>
            <form><input type="email" placeholder="Ingresa tu correo electronico"><button>SUSCRIBIRME</button></form>
        </div>
        <div class="footer-main">
            <div class="footer-brand">DISTRICT.<small>URBAN EMPIRE</small>
                <div class="footer-social">
                    <img src="https://www.figma.com/api/mcp/asset/c14aa1a9-5c67-4f9f-bc7b-9390a39fdf5f.svg" alt="Facebook">
                    <img src="https://www.figma.com/api/mcp/asset/bf7cc6c6-a1a5-4b4c-b31e-77a00a275cb8.svg" alt="Twitter">
                    <img src="https://www.figma.com/api/mcp/asset/65e70907-a88f-4dc9-8891-6890e4d89c1b.svg" alt="Instagram">
                    <img src="https://www.figma.com/api/mcp/asset/c93d2bce-e85c-4d5b-b267-9dd0de5072fb.svg" alt="LinkedIn">
                </div>
            </div>
            <div><h3>TIENDA</h3><p>Inicio<br>Hombre<br>Promociones<br>Accesorios</p></div>
            <div><h3>SERVICIOS</h3><p>Probador virtual<br>Guia de tallas<br>Cambios y devoluciones</p></div>
            <div class="footer-about">
                <h3>NOSOTROS</h3><p>Trabaja con nosotros<br>Contacto<br>Blog</p>
                <img class="footer-payments" src="https://www.figma.com/api/mcp/asset/1e3aa2c4-2d71-4bdc-a642-428134e253e5.svg" alt="Medios de pago">
            </div>
            <div class="copyright">© 2026 Urban Empire. Todos los derechos reservados.</div>
        </div>
    </footer>`; 
}

function cart() { return JSON.parse(localStorage.getItem('district-cart') || '[]') }
function saveCart(value) { localStorage.setItem('district-cart', JSON.stringify(value)) }

// Incluye el icono de corazón en la tarjeta de nuevos lanzamientos tal como se ve en la captura
function productCard(p) { return `<article class="product-card"><a href="producto.html?id=${p.id}"><img src="${p.image}" alt="${p.name}"></a><span class="heart">♡</span><div class="card-copy"><strong>${p.name}</strong><span>$ ${p.price.toFixed(2)}</span></div></article>` }

function renderProducts() {
    document.querySelectorAll('[data-products]').forEach(container => {
        let list = PRODUCTS;
        if (container.dataset.products === 'new') list = PRODUCTS;
        container.innerHTML = list.map(productCard).join('')
    })
}

function renderCart() {
    const target = document.querySelector('#cart-items');
    if (!target) return;
    const items = cart();
    
    target.innerHTML = items.length ? items.map(item => {
        const p = PRODUCTS.find(x => x.id === item.id) || PRODUCTS[0];
        return `<div class="cart-row"><img src="${p.image}" alt="${p.name}"><div><h3>${p.name}</h3><strong class="price">$${p.price.toFixed(2)}</strong><p>Talla: M</p></div><div class="cart-controls"><button data-cart="minus" data-id="${p.id}">−</button> ${item.qty} <button data-cart="plus" data-id="${p.id}">+</button> <button class="remove" data-cart="remove" data-id="${p.id}">Eliminar</button></div></div>`
    }).join('') : `
        <div class="empty-cart-state">
            <svg viewBox="0 0 24 24" width="64" height="64" stroke="#737359" stroke-width="1.5" fill="none"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/></svg>
            <h3>TU CARRITO ESTÁ VACÍO</h3>
            <p>Explora nuestras colecciones urbanas y añade tus prendas favoritas.</p>
            <a href="hombres.html" class="olive-button">VER CATÁLOGO →</a>
        </div>
    `;
    
    const subtotal = items.reduce((sum, item) => {
        const p = PRODUCTS.find(x => x.id === item.id) || PRODUCTS[0];
        return sum + (p.price * item.qty);
    }, 0);
    
    const shipping = items.length > 0 ? 3.50 : 0.00;
    const total = subtotal + shipping;
    
    if(document.querySelector('#cart-subtotal')) document.querySelector('#cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    if(document.querySelector('#cart-shipping')) document.querySelector('#cart-shipping').textContent = `$${shipping.toFixed(2)}`;
    if(document.querySelector('#cart-total')) document.querySelector('#cart-total').textContent = `$${total.toFixed(2)}`;
}

let appliedDiscountRate = 0;

function renderCheckoutInvoice() {
    const invoiceItems = document.querySelector('#invoice-items');
    if (!invoiceItems) return;

    const items = cart();
    invoiceItems.innerHTML = items.length ? items.map(item => {
        const p = PRODUCTS.find(x => x.id === item.id) || PRODUCTS[0];
        return `<div class="invoice-item-row"><span>${p.name} (x${item.qty})</span> <span>$${(p.price * item.qty).toFixed(2)}</span></div>`;
    }).join('') : '<p>No hay artículos en el pedido.</p>';

    const subtotal = items.reduce((sum, item) => {
        const p = PRODUCTS.find(x => x.id === item.id) || PRODUCTS[0];
        return sum + (p.price * item.qty);
    }, 0);

    const discountAmount = subtotal * appliedDiscountRate;
    const subtotalAfterDiscount = subtotal - discountAmount;
    const shipping = items.length > 0 ? 3.50 : 0.00;
    const tax = subtotalAfterDiscount * 0.15;
    const total = subtotalAfterDiscount + shipping + tax;

    if (document.querySelector('#invoice-subtotal')) document.querySelector('#invoice-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    if (document.querySelector('#invoice-discount')) document.querySelector('#invoice-discount').textContent = `-$${discountAmount.toFixed(2)}`;
    if (document.querySelector('#discount-label')) document.querySelector('#discount-label').textContent = appliedDiscountRate > 0 ? '10%' : '0%';
    if (document.querySelector('#invoice-tax')) document.querySelector('#invoice-tax').textContent = `$${tax.toFixed(2)}`;
    if (document.querySelector('#invoice-total')) document.querySelector('#invoice-total').textContent = `$${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#site-header')) document.querySelector('#site-header').innerHTML = header();
    if (document.querySelector('#site-footer')) document.querySelector('#site-footer').innerHTML = footer();
    
    renderProducts();
    renderCart();
    renderCheckoutInvoice();

    const applyBtn = document.getElementById('apply-coupon-btn');
    if (applyBtn) {
        applyBtn.addEventListener('click', () => {
            const codeInput = document.getElementById('coupon-input');
            const msg = document.getElementById('coupon-message');
            if (codeInput.value.trim().toUpperCase() === 'URBANEMPIRE26') {
                appliedDiscountRate = 0.10;
                msg.textContent = '¡Código aplicado con éxito (-10%)!';
                msg.style.color = '#16a34a';
                renderCheckoutInvoice();
            } else {
                appliedDiscountRate = 0;
                msg.textContent = 'Código inválido.';
                msg.style.color = '#dc2626';
                renderCheckoutInvoice();
            }
        });
    }
    
    if (window.location.pathname.includes('producto.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('id');
        if (!id) id = 'windbreaker'; 
        
        const prod = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

        if (prod) {
            const titleEl = document.getElementById('product-title');
            const priceEl = document.getElementById('product-price');
            const descEl = document.getElementById('product-desc');
            const imgEl = document.getElementById('main-image');
            const listEl = document.getElementById('product-details-list');
            const cartBtn = document.querySelector('.btn-add-cart');

            if (titleEl) titleEl.textContent = prod.name.toUpperCase();
            if (priceEl) priceEl.textContent = `$${prod.price.toFixed(2)}`;
            if (descEl) descEl.textContent = prod.desc;
            
            const galleryImages = prod.images || [prod.image, prod.image, prod.image];
            if (imgEl) imgEl.src = galleryImages[0];
            
            const thumbContainer = document.querySelector('.thumbnails');
            if (thumbContainer) {
                thumbContainer.innerHTML = galleryImages.map((imgSrc, idx) => `
                    <img class="thumb-img" src="${imgSrc}" alt="Ángulo ${idx + 1}" data-target="${imgSrc}">
                `).join('');
                
                document.querySelectorAll('.thumb-img').forEach(thumb => {
                    thumb.addEventListener('click', (e) => {
                        imgEl.src = e.target.dataset.target;
                    });
                });
            }

            if (listEl && prod.details) {
                listEl.innerHTML = prod.details.map(detail => `<li>${detail}</li>`).join('');
            }
            
            if (cartBtn) { cartBtn.dataset.id = prod.id; cartBtn.classList.add('add-to-cart'); }
        }
    }

    document.querySelectorAll('.add-to-cart').forEach(btn => btn.addEventListener('click', () => {
        const items = cart(), found = items.find(i => i.id === btn.dataset.id);
        if (found) found.qty++; else items.push({ id: btn.dataset.id, qty: 1 });
        saveCart(items);
        btn.textContent = 'AÑADIDO';
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) cartCount.textContent = items.reduce((a, p) => a + p.qty, 0);
        setTimeout(() => btn.textContent = 'AÑADIR AL CARRITO', 1200)
    }));

    document.addEventListener('click', e => {
        if (!e.target.dataset.cart) return;
        const items = cart(), item = items.find(i => i.id === e.target.dataset.id);
        if (e.target.dataset.cart === 'plus') item.qty++;
        if (e.target.dataset.cart === 'minus') item.qty = Math.max(1, item.qty - 1);
        if (e.target.dataset.cart === 'remove') items.splice(items.indexOf(item), 1);
        saveCart(items);
        renderCart();
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) cartCount.textContent = items.reduce((a, p) => a + p.qty, 0);
    });
});