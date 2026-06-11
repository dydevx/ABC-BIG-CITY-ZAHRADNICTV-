"use strict";

const STORE_PHONE = "+420728635998";
const PLACEHOLDER_IMAGE = "images/products/placeholder.jpg";

// Product list: add new items here when the shop uploads more photos.
const products = [
  { id: 1, name: "Salvia k19", price: 119, category: "Salvia", image: "Salvia k19.jpg", description: "Kvalitní rostlina vhodná pro zahradu, terasu nebo balkon.", badge: "Doporučujeme" },
  { id: 2, name: "Salvia k15", price: 96, category: "Salvia", image: "Salvia k15.jpg", description: "Aromatická a dekorativní rostlina s dlouhou dobou kvetení.", badge: "Oblíbené" },
  { id: 3, name: "Lupinus k17", price: 138, category: "Zahradní rostliny", image: "Lupinus k17.jpg", description: "Výrazná zahradní trvalka pro barevné záhony.", badge: "Novinka" },
  { id: 4, name: "Impatiens k13", price: 49, category: "Květiny", image: "Impatiens k13.jpg", description: "Bohatě kvetoucí rostlina vhodná do polostínu.", badge: "" },
  { id: 5, name: "Chrysantemum k12 trio", price: 39, category: "Květiny", image: "Chrysantemum k12 trio.jpg", description: "Kompaktní květina pro dekoraci oken, teras i vstupů.", badge: "Oblíbené" },
  { id: 6, name: "Pelargonie grandiflora k12", price: 53, category: "Pelargonie", image: "Pelargonie grandiflora k12.jpg", description: "Elegantní pelargonie s velkými květy pro balkon.", badge: "" },
  { id: 7, name: "Budfleja k17", price: 119, category: "Zahradní rostliny", image: "Budfleja k17.jpg", description: "Atraktivní keř, který do zahrady přináší barvu a život.", badge: "" },
  { id: 8, name: "Dahlia XXL k23 Mix Color", price: 203, category: "Květiny", image: "Dahlia xxl k23 mix color.jpg", description: "Velkokvětá jiřina ve směsi barev pro výrazný efekt.", badge: "Novinka" },
  { id: 9, name: "Hydrangea k14 Mix Color", price: 119, category: "Hydrangea", image: "Hydragea k14 mix color.jpg", description: "Hortenzie ve směsi barev vhodná do nádoby i zahrady.", badge: "Doporučujeme" },
  { id: 10, name: "Levandule Pack 6", price: 79, category: "Levandule", image: "Levandule pack 6.jpg", description: "Praktické balení levandule pro voňavý záhon.", badge: "Oblíbené" },
  { id: 11, name: "Hydrangea k23", price: 335, category: "Hydrangea", image: "Hydragea k23.jpg", description: "Velká hortenzie s bohatým květem pro reprezentativní výsadbu.", badge: "Doporučujeme" },
  { id: 12, name: "Hydrangea k23 Mix Color", price: 335, category: "Hydrangea", image: "Hydragea k23 mix color.jpg", description: "Mix barev ve velkém květináči pro zahradu i terasu.", badge: "" },
  { id: 13, name: "Hydrangea k23 Mix Color 2", price: 439, category: "Hydrangea", image: "Hydragea k23 mix color -2.jpg", description: "Prémiová hortenzie s bohatým objemem a výraznými květy.", badge: "Novinka" },
  { id: 14, name: "Angelonia k11", price: 25, category: "Květiny", image: "Angelonia k11.jpg", description: "Jemná letnička s dlouhým kvetením do nádob.", badge: "" },
  { id: 15, name: "Chrysantemum k23 5 Color", price: 138, category: "Květiny", image: "Chrysantemum k23 5color.jpg", description: "Barevná chryzantéma pro podzimní dekorace.", badge: "Oblíbené" },
  { id: 16, name: "Taxus k11", price: 29, category: "Zahradní rostliny", image: "Taxus k11.jpg", description: "Jehličnan vhodný pro zahradní kompozice i živé ploty.", badge: "" },
  { id: 17, name: "Gazanie k12", price: 40, category: "Květiny", image: "Gazanie k12.jpg", description: "Slunná květina s výraznými květy pro nádoby i záhony.", badge: "" },
  { id: 18, name: "Siergrass 3 Typ Mix", price: 43, category: "Zahradní rostliny", image: "Siergrass 3 typ mix.jpg", description: "Okrasná tráva ve směsi typů pro moderní zahradu.", badge: "" },
  { id: 19, name: "Osteospermum k11 5 Color", price: 33, category: "Květiny", image: "Osteopermum k11 5 color.jpg", description: "Barevná kopretinová letnička pro slunná místa.", badge: "" },
  { id: 20, name: "Begonie Semperflorens k9", price: 15, category: "Květiny", image: "Begonie semperflorens k9.jpg", description: "Nenáročná begonie pro záhony, truhlíky i okraje.", badge: "Doporučujeme" },
  { id: 21, name: "Pelargonie Peltatum k11", price: 29, category: "Pelargonie", image: "Pelargonie peltatum k11.jpg", description: "Převislá pelargonie ideální do balkonových truhlíků.", badge: "" },
  { id: 22, name: "Salix k19", price: 149, category: "Zahradní rostliny", image: "Salix k19.jpg", description: "Dekorativní vrba pro zahradní výsadbu.", badge: "" },
  { id: 23, name: "Sempervivum k9 Mix Type", price: 23, category: "Ostatní", image: "Sempervivum k9 mix type.jpg", description: "Netřesk ve směsi druhů, nenáročný a odolný.", badge: "" },
  { id: 24, name: "Catharanthus k11", price: 19, category: "Květiny", image: "Catharanthus k11.jpg", description: "Letnička s pěkným květem pro teplé a světlé místo.", badge: "" },
  { id: 25, name: "Campanula k12", price: 49, category: "Květiny", image: "Campanila k12.jpg", description: "Zvonek s jemnými květy pro interiér, balkon i zahradu.", badge: "" },
  { id: 26, name: "Levandule Edel Weiss k13", price: 54, category: "Levandule", image: "Levandule edel weiss k13.jpg", description: "Bílá levandule s elegantním vzhledem a příjemnou vůní.", badge: "Novinka" },
  { id: 27, name: "Gazania k13", price: 40, category: "Květiny", image: "Gazania k13.jpg", description: "Výrazná gazánie pro slunné balkony a terasy.", badge: "" },
  { id: 28, name: "Salvia k13", price: 64, category: "Salvia", image: "Salvia k13.jpg", description: "Krásná šalvěj pro zahradu a dlouhotrvající kvetení.", badge: "" }
];

const galleryImages = [
  "Chrysantemum k23 5color.jpg",
  "Hydragea k23 mix color.jpg",
  "Levandule pack 6.jpg",
  "Dahlia xxl k23 mix color.jpg",
  "Pelargonie grandiflora k12.jpg",
  "Salvia k19.jpg"
];

const reviews = [
  { text: "Krásný výběr květin a velmi příjemná obsluha. Určitě se vrátím.", author: "Zákaznice z Ostrova" },
  { text: "Rostliny jsou zdravé, pěkné a ceny jsou velmi dobré.", author: "Spokojený zákazník" },
  { text: "Skvělé zahradnictví v Ostrově. Doporučuji všem milovníkům rostlin.", author: "Milovník rostlin" }
];

let visibleCount = 12;
let activeCategory = "all";
let cart = JSON.parse(localStorage.getItem("abcGardenCart") || "[]");
let currentReview = 0;
let reviewTimer = null;

const el = (id) => document.getElementById(id);
const money = (value) => `${value} Kč`;

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function safeImage(img) {
  img.onerror = null;
  img.src = PLACEHOLDER_IMAGE;
}

function productCard(product, index = 0) {
  return `
    <article class="product-card" style="--i:${index}">
      <div class="product-image">
        ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="safeImage(this)">
      </div>
      <div class="product-body">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <strong class="price">${money(product.price)}</strong>
        <div class="card-actions">
          <button class="btn primary" onclick="addToCart(${product.id}, 1)">Koupit nyní</button>
          <button class="btn outline" onclick="openProductModal(${product.id})">Detail</button>
        </div>
      </div>
    </article>
  `;
}

function filteredProducts() {
  const term = normalizeText(el("searchInput").value.trim());
  const priceValue = el("priceFilter").value;
  return products.filter((product) => {
    const searchable = normalizeText([
      product.name,
      product.category,
      product.description,
      product.price,
      `${product.price} Kč`
    ].join(" "));
    const matchesTerm = !term || searchable.includes(term);
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    let matchesPrice = true;
    if (priceValue !== "all") {
      const [min, max] = priceValue.split("-").map(Number);
      matchesPrice = product.price >= min && product.price <= max;
    }
    return matchesTerm && matchesCategory && matchesPrice;
  });
}

function renderProducts(reset = false) {
  if (reset) visibleCount = 12;
  const list = filteredProducts();
  const visible = list.slice(0, visibleCount);
  el("productsGrid").innerHTML = visible.map((product, index) => productCard(product, index)).join("");
  el("emptyState").style.display = list.length ? "none" : "block";
  el("loadMore").style.display = visibleCount >= list.length ? "none" : "block";
  el("resultCount").textContent = `${list.length} produktů`;
  el("catalogCount").textContent = `${list.length} produktů`;
  updateFilterStatus(list.length);
  updateActiveCategory();
  updateResultHero(list.length);
}

function renderFeatured() {
  const featured = products.filter((product) => product.badge).slice(0, 4);
  el("featuredGrid").innerHTML = featured.map((product, index) => productCard(product, index)).join("");
}

function renderCategories() {
  const categories = ["all", "Květiny", "Zahradní rostliny", "Levandule", "Hydrangea", "Pelargonie", "Salvia", "Ostatní"];
  el("categoryStrip").innerHTML = categories.map((category) => {
    const label = category === "all" ? "Vše" : category;
    return `<button class="category-chip" data-category="${category}">${label}</button>`;
  }).join("");
  el("categoryStrip").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    el("categoryFilter").value = activeCategory;
    renderProducts(true);
    jumpToResults();
  });
}

function updateActiveCategory() {
  document.querySelectorAll(".category-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.category === activeCategory);
  });
}

function updateFilterStatus(count) {
  const term = el("searchInput").value.trim();
  const category = activeCategory === "all" ? "všechny kategorie" : activeCategory;
  const priceSelect = el("priceFilter");
  const price = priceSelect.selectedOptions ? priceSelect.selectedOptions[0]?.textContent || "Vše" : "Vše";
  const searchPart = term ? `Hledání: “${term}”` : "Bez textového hledání";
  el("filterStatus").textContent = `${searchPart} · ${category} · ${price} · ${count} výsledků`;
}

function updateResultHero(count) {
  const hero = el("resultHero");
  if (!hero) return;
  const category = activeCategory === "all" ? "Všechny květiny" : activeCategory;
  const tone = activeCategory === "all"
    ? "Vyberte si z celé nabídky čerstvých rostlin a květin."
    : `Kolekce pro kategorii ${category}, připravená k rychlému výběru.`;
  hero.innerHTML = `
    <span>${count} produktů</span>
    <strong>${category}</strong>
    <p>${tone}</p>
  `;
}

function jumpToResults() {
  const section = document.querySelector(".all-products");
  const grid = el("productsGrid");
  if (!section || !grid) return;
  grid.classList.remove("products-refresh");
  void grid.offsetWidth;
  grid.classList.add("products-refresh");
  section.scrollIntoView({ behavior: "smooth", block: "start" });
  const slug = activeCategory === "all" ? "vse" : normalizeText(activeCategory).replace(/\s+/g, "-");
  history.replaceState(null, "", `#produkty-${slug}`);
}

function persistCart() {
  localStorage.setItem("abcGardenCart", JSON.stringify(cart));
}

function addToCart(productId, quantity = 1) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  const existing = cart.find((item) => item.id === productId);
  if (existing) existing.quantity += quantity;
  else cart.push({ id: product.id, quantity });
  persistCart();
  renderCart();
  triggerCartBump();
  openCart();
}

function triggerCartBump() {
  const button = el("openCart");
  button.classList.remove("bump");
  void button.offsetWidth;
  button.classList.add("bump");
}

function changeQuantity(productId, delta) {
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) cart = cart.filter((entry) => entry.id !== productId);
  persistCart();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((entry) => entry.id !== productId);
  persistCart();
  renderCart();
}

function cartTotal() {
  return cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  el("cartCount").textContent = count;
  el("cartTotal").textContent = money(cartTotal());
  el("orderTotal").textContent = money(cartTotal());

  if (!cart.length) {
    el("cartItems").innerHTML = "<p>Váš košík je prázdný.</p>";
    el("orderItems").innerHTML = "Váš košík je prázdný.";
    return;
  }

  el("cartItems").innerHTML = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    if (!product) return "";
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" onerror="safeImage(this)">
        <div>
          <strong>${product.name}</strong>
          <div>${money(product.price)} × ${item.quantity}</div>
          <div class="qty-controls">
            <button onclick="changeQuantity(${product.id}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${product.id}, 1)">+</button>
            <button class="remove-item" onclick="removeFromCart(${product.id})">Smazat</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  el("orderItems").innerHTML = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return product ? `<div>${product.name} × ${item.quantity} = ${money(product.price * item.quantity)}</div>` : "";
  }).join("");
}

function openCart() {
  el("cartSidebar").classList.add("open");
  el("cartSidebar").setAttribute("aria-hidden", "false");
  el("overlay").classList.add("show");
}

function closeCart() {
  el("cartSidebar").classList.remove("open");
  el("cartSidebar").setAttribute("aria-hidden", "true");
  el("overlay").classList.remove("show");
}

function openProductModal(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  el("modalBody").innerHTML = `
    <div class="modal-product">
      <img src="${product.image}" alt="${product.name}" onerror="safeImage(this)">
      <div>
        <p class="eyebrow">${product.category}</p>
        <h2>${product.name}</h2>
        <strong class="price">${money(product.price)}</strong>
        <p>${product.description}</p>
        <label>Množství <input type="number" id="modalQuantity" min="1" value="1"></label>
        <div class="modal-actions">
          <button class="btn primary" onclick="addModalProduct(${product.id})">Přidat do košíku</button>
          <button class="btn outline" onclick="closeProductModal()">Zavřít</button>
        </div>
      </div>
    </div>
  `;
  el("productModal").classList.add("show");
  el("productModal").setAttribute("aria-hidden", "false");
}

function addModalProduct(productId) {
  const quantity = Math.max(1, Number(el("modalQuantity").value || 1));
  addToCart(productId, quantity);
  closeProductModal();
}

function closeProductModal() {
  el("productModal").classList.remove("show");
  el("productModal").setAttribute("aria-hidden", "true");
}

function renderGallery() {
  el("galleryGrid").innerHTML = galleryImages.map((src, index) => `
    <button type="button" class="gallery-item gallery-item-${index + 1}" onclick="openLightbox('${src}')" style="--i:${index}">
      <img src="${src}" alt="Galerie ${index + 1}" loading="lazy" onerror="safeImage(this)">
      <span>${src.replace(/\.[^.]+$/, "").replace(/-/g, " ")}</span>
    </button>
  `).join("");
}

function openLightbox(src) {
  el("lightboxImage").src = src;
  el("lightbox").classList.add("show");
  el("lightbox").setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  el("lightbox").classList.remove("show");
  el("lightbox").setAttribute("aria-hidden", "true");
}

function renderReview() {
  const review = reviews[currentReview];
  const card = el("reviewCard");
  card.style.animation = "none";
  card.offsetHeight;
  card.style.animation = "";
  card.innerHTML = `<p>${review.text}</p><strong>${review.author}</strong>`;
  el("reviewDots").innerHTML = reviews.map((_, index) => (
    `<button class="review-dot ${index === currentReview ? "active" : ""}" aria-label="Zobrazit recenzi ${index + 1}" onclick="goToReview(${index})"></button>`
  )).join("");
}

function goToReview(index) {
  currentReview = index;
  renderReview();
  restartReviewTimer();
}

function restartReviewTimer() {
  clearInterval(reviewTimer);
  reviewTimer = setInterval(() => {
    currentReview = (currentReview + 1) % reviews.length;
    renderReview();
  }, 5500);
}

function buildOrderText() {
  const name = el("customerName").value.trim();
  const phone = el("customerPhone").value.trim();
  const email = el("customerEmail").value.trim();
  const address = el("customerAddress").value.trim();
  const note = el("customerNote").value.trim();
  const lines = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return product ? `• ${product.name} x ${item.quantity} = ${product.price * item.quantity} Kč` : "";
  }).filter(Boolean).join("\n");

  return `Nová objednávka z webu ABC BIG CITY ZAHRADNICTVÍ
Jméno: ${name}
Telefon: ${phone}
Email: ${email}
Adresa: ${address}
Poznámka: ${note}
Produkty:
${lines || "Košík je prázdný"}
Celkem:
${cartTotal()} Kč`;
}

function submitOrder(event) {
  event.preventDefault();
  const message = el("formMessage");
  if (!el("customerName").value.trim() || !el("customerPhone").value.trim()) {
    message.textContent = "Prosím vyplňte povinné údaje.";
    message.className = "form-message error";
    return;
  }
  const orderText = buildOrderText();
  const whatsapp = `https://wa.me/${STORE_PHONE.replace("+", "")}?text=${encodeURIComponent(orderText)}`;
  window.open(whatsapp, "_blank", "noopener");
  message.textContent = "Děkujeme za objednávku. Brzy vás budeme kontaktovat.";
  message.className = "form-message success";
}

function initEvents() {
  el("hamburger").addEventListener("click", () => {
    const menu = el("navMenu");
    menu.classList.toggle("open");
    el("hamburger").setAttribute("aria-expanded", String(menu.classList.contains("open")));
  });
  document.querySelectorAll(".nav-menu a").forEach((link) => link.addEventListener("click", () => el("navMenu").classList.remove("open")));
  el("searchInput").addEventListener("input", () => renderProducts(true));
  el("categoryFilter").addEventListener("change", (event) => { activeCategory = event.target.value; renderProducts(true); jumpToResults(); });
  el("priceFilter").addEventListener("change", () => { renderProducts(true); jumpToResults(); });
  el("resetFilters").addEventListener("click", () => {
    el("searchInput").value = "";
    el("priceFilter").value = "all";
    el("categoryFilter").value = "all";
    activeCategory = "all";
    renderProducts(true);
    jumpToResults();
  });
  el("loadMore").addEventListener("click", () => { visibleCount += 12; renderProducts(); });
  el("openCart").addEventListener("click", openCart);
  el("closeCart").addEventListener("click", closeCart);
  el("overlay").addEventListener("click", closeCart);
  el("clearCart").addEventListener("click", () => { cart = []; persistCart(); renderCart(); });
  el("checkoutButton").addEventListener("click", () => { closeCart(); el("objednavka").scrollIntoView({ behavior: "smooth" }); });
  el("closeProductModal").addEventListener("click", closeProductModal);
  el("productModal").addEventListener("click", (event) => { if (event.target === el("productModal")) closeProductModal(); });
  el("closeLightbox").addEventListener("click", closeLightbox);
  el("lightbox").addEventListener("click", (event) => { if (event.target === el("lightbox")) closeLightbox(); });
  el("prevReview").addEventListener("click", () => { currentReview = (currentReview + reviews.length - 1) % reviews.length; renderReview(); restartReviewTimer(); });
  el("nextReview").addEventListener("click", () => { currentReview = (currentReview + 1) % reviews.length; renderReview(); restartReviewTimer(); });
  el("orderForm").addEventListener("submit", submitOrder);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProductModal();
      closeLightbox();
      closeCart();
    }
  });
}

function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".fade-in").forEach((item) => observer.observe(item));
}

function initPetals() {
  const field = el("petalField");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!field || reducedMotion || window.innerWidth < 769) return;

  const colors = [
    ["#f8bfd0", "#e889a8"],
    ["#ffe0ea", "#f1a9bd"],
    ["#f5d68f", "#d9b95d"],
    ["#dfeac9", "#8fac6c"]
  ];

  Array.from({ length: 22 }).forEach((_, index) => {
    const petal = document.createElement("span");
    const [a, b] = colors[index % colors.length];
    petal.className = "petal";
    petal.style.setProperty("--x", `${Math.round(Math.random() * 100)}vw`);
    petal.style.setProperty("--size", `${Math.round(8 + Math.random() * 10)}px`);
    petal.style.setProperty("--duration", `${Math.round(12 + Math.random() * 10)}s`);
    petal.style.setProperty("--delay", `${(Math.random() * -18).toFixed(2)}s`);
    petal.style.setProperty("--drift", `${Math.round(-90 + Math.random() * 180)}px`);
    petal.style.setProperty("--petal-a", a);
    petal.style.setProperty("--petal-b", b);
    field.appendChild(petal);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => el("loader").classList.add("hide"), 250);
});

renderCategories();
renderFeatured();
renderProducts(true);
renderGallery();
renderReview();
restartReviewTimer();
renderCart();
initEvents();
initAnimations();
initPetals();
