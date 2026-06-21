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

const productUpdate20JuneImages = [
  "Hoa mới update 20-6/  Buxus koule k23 giá 199kc.jpg",
  "Hoa mới update 20-6/Aeonium k12 giá 33kc.jpg",
  "Hoa mới update 20-6/Agapanthus k17 giá 189kc.jpg",
  "Hoa mới update 20-6/Agastache k14 giá 74kc.jpg",
  "Hoa mới update 20-6/Ajuga k12 giá 55kc.jpg",
  "Hoa mới update 20-6/Alstroemeria k19 giá 189kc.jpg",
  "Hoa mới update 20-6/Angelonia k10 giá 25kc.jpg",
  "Hoa mới update 20-6/Angelonia Trio k12 giá 68kc.jpg",
  "Hoa mới update 20-6/Antirhinum k12 giá 52kc.jpg",
  "Hoa mới update 20-6/Argyranthemum k10 giá 41kc.jpg",
  "Hoa mới update 20-6/Avenella flexuosa k17 giá 119kc.jpg",
  "Hoa mới update 20-6/Begonie k11 giá 43kc.jpg",
  "Hoa mới update 20-6/Boungavilea k12 giá 125kc.jpg",
  "Hoa mới update 20-6/Brachyscome k12 giá 19kc.jpg",
  "Hoa mới update 20-6/Buddleja k17 giá 149kc.jpg",
  "Hoa mới update 20-6/Buxus k9 giá 29kc.jpg",
  "Hoa mới update 20-6/Buxus pyranida k23 giá 359kc.jpg",
  "Hoa mới update 20-6/Calibrachoa k12 giá 35kc.jpg",
  "Hoa mới update 20-6/Calistemon k16 giá 203kc.jpg",
  "Hoa mới update 20-6/Calocephalus k12 giá 36kc.jpg",
  "Hoa mới update 20-6/Calocephalus, muhlenbeckia k12 giá 59kc.jpg",
  "Hoa mới update 20-6/Carex k10 giá 36kc.jpg",
  "Hoa mới update 20-6/Catharanthus roseus k10 giá 19kc.jpg",
  "Hoa mới update 20-6/Celosia k10 giá 19kc.jpg",
  "Hoa mới update 20-6/Celosia k12 Trio giá 60 kc.jpg",
  "Hoa mới update 20-6/Celosia k17 giá 119kc.jpg",
  "Hoa mới update 20-6/Celosia twist k12 giá 56kc.jpg",
  "Hoa mới update 20-6/Coreopsis k19 giá 190kc.jpg",
  "Hoa mới update 20-6/Cortaderia k19 giá 179kc.jpg",
  "Hoa mới update 20-6/Cupressus 2pat k14 giá 149kc.jpg",
  "Hoa mới update 20-6/Delphinium k15 giá 105kc.jpg",
  "Hoa mới update 20-6/Dianthus k12 giá 48kc.jpg",
  "Hoa mới update 20-6/Dianthus Trio k13 giá 52kc.jpg",
  "Hoa mới update 20-6/Digitalis k17 giá 149kc.jpg",
  "Hoa mới update 20-6/Dichondra k11 giá 39kc.jpg",
  "Hoa mới update 20-6/Echinacea k17 giá 207kc.jpg",
  "Hoa mới update 20-6/Erysymum k13 giá 47kc.jpg",
  "Hoa mới update 20-6/Euonymus k10 giá 35kc.jpg",
  "Hoa mới update 20-6/Euonymus k27 giá 299kc.jpg",
  "Hoa mới update 20-6/Fargesia k14 giá 89kc.jpg",
  "Hoa mới update 20-6/Festuca glauca k17 giá 153kc.jpg",
  "Hoa mới update 20-6/Fuchsia k12 giá 44kc.jpg",
  "Hoa mới update 20-6/Fuchsie k19 giá 236kc.jpg",
  "Hoa mới update 20-6/Gazanie k12 giá 40kc.jpg",
  "Hoa mới update 20-6/Gentiana k13 giá 86kc.jpg",
  "Hoa mới update 20-6/Gypsophila mix k13 giá 64kc.jpg",
  "Hoa mới update 20-6/Hedera k13 giá 59kc.jpg",
  "Hoa mới update 20-6/Hedera k8 giá 26kc.jpg",
  "Hoa mới update 20-6/Chamaecyparis k13 giá 71kc.jpg",
  "Hoa mới update 20-6/Chamaecyparis k9 giá 29kc.jpg",
  "Hoa mới update 20-6/Iberis k13 giá 63kc.jpg",
  "Hoa mới update 20-6/Ipomoea k12 giá 25kc.jpg",
  "Hoa mới update 20-6/Jahoda k17 giá 78kc.jpg",
  "Hoa mới update 20-6/Jahoda poloprevislá stálerodiaca k9 giá 39kc.jpg",
  "Hoa mới update 20-6/Jasmin k12 giá 60kc.jpg",
  "Hoa mới update 20-6/Lantana miska k17 giá 99kc.jpg",
  "Hoa mới update 20-6/Lantana trio giá 41kc.jpg",
  "Hoa mới update 20-6/Laurus nobilis k10 giá 38kc.jpg",
  "Hoa mới update 20-6/Lavandule angustifolia k10 giá 29kc.jpg",
  "Hoa mới update 20-6/Lavandule angustifolia k9 giá 43kc.jpg",
  "Hoa mới update 20-6/Lavandule k17 giá 81kc.jpg",
  "Hoa mới update 20-6/Lavandule k26 giá 240kc.jpg",
  "Hoa mới update 20-6/Leucanthemum k12 giá 57kc.jpg",
  "Hoa mới update 20-6/Lysimachia k10 giá 25kc.jpg",
  "Hoa mới update 20-6/Mandevilla k10 giá 48kc.jpg",
  "Hoa mới update 20-6/Mandevilla k17 giá 199kc.jpg",
  "Hoa mới update 20-6/Mandevilla k19 giá 299kc.jpg",
  "Hoa mới update 20-6/Nandina k19 giá 227kc.jpg",
  "Hoa mới update 20-6/Nephrolepis k19 giá 225kc.jpg",
  "Hoa mới update 20-6/Nerium k21 giá 285kc.jpg",
  "Hoa mới update 20-6/Nerium oleander k13 giá 100kc.jpg",
  "Hoa mới update 20-6/Osteospermum k11 giá 33kc.jpg",
  "Hoa mới update 20-6/Papaver k12 giá 48kc.jpg",
  "Hoa mới update 20-6/Petunie k10 giá 29kc.jpg",
  "Hoa mới update 20-6/Platycladus orientalis k17 giá 117kc.jpg",
  "Hoa mới update 20-6/Plectranthus k10 giá 19kc.jpg",
  "Hoa mới update 20-6/Plectranthus purpuratus k11 giá 19kc.jpg",
  "Hoa mới update 20-6/Rhododendron k13 giá 131kc.jpg",
  "Hoa mới update 20-6/Rosa be moved k10 giá 57kc.jpg",
  "Hoa mới update 20-6/Rosa on stem k19 giá 349kc.jpg",
  "Hoa mới update 20-6/Salvia k13 giá 64kc.jpg",
  "Hoa mới update 20-6/Sanvitalia k11 giá 34kc.jpg",
  "Hoa mới update 20-6/Scabiosa k12 giá 59kc.jpg",
  "Hoa mới update 20-6/Scaevola k12 giá 50kc.jpg",
  "Hoa mới update 20-6/Sedum k12 giá 52kc.jpg",
  "Hoa mới update 20-6/Sempervivum cramberry cocktail k12 giá 55kc.jpg",
  "Hoa mới update 20-6/Sempervivum k18 giá 143kc.jpg",
  "Hoa mới update 20-6/Sempervivum k19 giá 111kc.jpg",
  "Hoa mới update 20-6/Streptocarp k12 giá 42kc.jpg",
  "Hoa mới update 20-6/Taxus k9 giá 29kc.jpg",
  "Hoa mới update 20-6/Thuja k15 giá 74kc.jpg",
  "Hoa mới update 20-6/Thuja k27 giá 267kc.jpg",
  "Hoa mới update 20-6/Thuja k27 giá 499kc.jpg",
  "Hoa mới update 20-6/Verbena k12 giá 35kc.jpg",
  "Hoa mới update 20-6/Zantedeschia k14 giá 136kc.jpg"
];

function productCategoryForName(name) {
  const normalized = normalizeText(name);
  if (normalized.includes("lavandule")) return "Levandule";
  if (normalized.includes("salvia")) return "Salvia";
  if (normalized.includes("pelargonie")) return "Pelargonie";
  if (normalized.includes("hydrangea") || normalized.includes("hortenzie")) return "Hydrangea";
  if (/(buxus|buddleja|carex|chamaecyparis|cortaderia|cupressus|euonymus|fargesia|festuca|hedera|laurus|nandina|nerium|platycladus|rhododendron|taxus|thuja|avenella)/.test(normalized)) return "Zahradní rostliny";
  if (/(aeonium|ajuga|calocephalus|dichondra|nephrolepis|sedum|sempervivum)/.test(normalized)) return "Ostatní";
  return "Květiny";
}

const productUpdate20June = productUpdate20JuneImages.map((image, index) => {
  const filename = image.split("/").pop().replace(/\.[^.]+$/, "").trim();
  const match = filename.match(/^(.*?)\s+giá\s+(\d+)\s*kc$/i);
  const name = (match ? match[1] : filename).replace(/\s+/g, " ").trim();
  const price = match ? Number(match[2]) : 0;

  return {
    id: 29 + index,
    name,
    price,
    category: productCategoryForName(name),
    image,
    description: `${name} z nové nabídky 20. 6., připravené k osobnímu výběru v zahradnictví.`,
    badge: index < 12 ? "Novinka" : ""
  };
});

products.unshift(...productUpdate20June);

const galleryImages = [
  "Hoa mới update 20-6/Angelonia Trio k12 giá 68kc.jpg",
  "Hoa mới update 20-6/Lavandule k26 giá 240kc.jpg",
  "Hoa mới update 20-6/Rosa on stem k19 giá 349kc.jpg",
  "Hoa mới update 20-6/Thuja k27 giá 499kc.jpg",
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
let lightboxItems = [];
let currentLightboxIndex = 0;

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
      <button type="button" class="product-image product-image-button" onclick="openProductImage(${product.id})" aria-label="Zobrazit větší fotografii ${product.name}">
        ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}
        <span class="product-sprout sprout-one" aria-hidden="true"></span>
        <span class="product-sprout sprout-two" aria-hidden="true"></span>
        <span class="product-sprout sprout-three" aria-hidden="true"></span>
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="safeImage(this)">
        <span class="image-zoom-label">Zvětšit</span>
      </button>
      <div class="product-body">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <strong class="price">${money(product.price)}</strong>
        <div class="card-actions">
          <button class="btn primary" onclick="addToCart(${product.id}, 1, this)">Koupit nyní</button>
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

function addToCart(productId, quantity = 1, sourceButton = null) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  const existing = cart.find((item) => item.id === productId);
  if (existing) existing.quantity += quantity;
  else cart.push({ id: product.id, quantity });
  persistCart();
  triggerBloomBurst(sourceButton);
  triggerProductBloom(sourceButton);
  renderCart();
  triggerCartBump();
  showGardenToast(`${product.name} - pridano do kosiku`);
  openCart();
}

function triggerCartBump() {
  const button = el("openCart");
  button.classList.remove("bump");
  void button.offsetWidth;
  button.classList.add("bump");
}

function triggerProductBloom(sourceButton) {
  const card = sourceButton?.closest?.(".product-card");
  if (!card) return;
  card.classList.remove("just-added");
  void card.offsetWidth;
  card.classList.add("just-added");
}

function triggerBloomBurst(sourceButton) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!sourceButton || reducedMotion) return;

  const burst = document.createElement("span");
  burst.className = "bloom-burst";
  sourceButton.appendChild(burst);

  Array.from({ length: 8 }).forEach((_, index) => {
    const petal = document.createElement("span");
    petal.className = "bloom-burst-petal";
    petal.style.setProperty("--angle", `${index * 45}deg`);
    petal.style.setProperty("--distance", `${24 + (index % 3) * 8}px`);
    burst.appendChild(petal);
  });

  burst.addEventListener("animationend", () => burst.remove(), { once: true });
}

function showGardenToast(message) {
  const stack = el("toastStack");
  if (!stack) return;

  const toast = document.createElement("div");
  toast.className = "garden-toast";
  toast.textContent = message;
  stack.appendChild(toast);

  window.setTimeout(() => toast.classList.add("hide"), 2300);
  window.setTimeout(() => toast.remove(), 2700);
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
          <button class="btn primary" onclick="addModalProduct(${product.id}, this)">Přidat do košíku</button>
          <button class="btn outline" onclick="closeProductModal()">Zavřít</button>
        </div>
      </div>
    </div>
  `;
  el("productModal").classList.add("show");
  el("productModal").setAttribute("aria-hidden", "false");
}

function addModalProduct(productId, sourceButton = null) {
  const quantity = Math.max(1, Number(el("modalQuantity").value || 1));
  addToCart(productId, quantity, sourceButton);
  closeProductModal();
}

function closeProductModal() {
  el("productModal").classList.remove("show");
  el("productModal").setAttribute("aria-hidden", "true");
}

function renderGallery() {
  el("galleryGrid").innerHTML = galleryImages.map((src, index) => `
    <button type="button" class="gallery-item gallery-item-${index + 1}" onclick="openGalleryLightbox(${index})" style="--i:${index}">
      <img src="${src}" alt="Galerie ${index + 1}" loading="lazy" onerror="safeImage(this)">
      <span>${src.replace(/\.[^.]+$/, "").replace(/-/g, " ")}</span>
    </button>
  `).join("");
}

function productLightboxItem(product) {
  return {
    src: product.image,
    alt: product.name,
    title: product.name,
    meta: `${product.category} · ${money(product.price)}`,
    productId: product.id
  };
}

function galleryLightboxItem(src) {
  const product = products.find((item) => item.image === src);
  if (product) return productLightboxItem(product);
  const title = src.split("/").pop().replace(/\.[^.]+$/, "").replace(/-/g, " ").trim();
  return { src, alt: title, title, meta: "Galerie", productId: null };
}

function openProductImage(productId) {
  const list = filteredProducts();
  const startIndex = Math.max(0, list.findIndex((product) => product.id === productId));
  openLightboxItems(list.map(productLightboxItem), startIndex);
}

function openGalleryLightbox(index) {
  openLightboxItems(galleryImages.map(galleryLightboxItem), index);
}

function openLightbox(src) {
  openLightboxItems([galleryLightboxItem(src)], 0);
}

function openLightboxItems(items, startIndex = 0) {
  lightboxItems = items.length ? items : [];
  currentLightboxIndex = Math.min(Math.max(startIndex, 0), Math.max(lightboxItems.length - 1, 0));
  renderLightbox();
  el("lightbox").classList.add("show");
  el("lightbox").setAttribute("aria-hidden", "false");
}

function renderLightbox() {
  const item = lightboxItems[currentLightboxIndex];
  if (!item) return;
  el("lightboxImage").src = item.src;
  el("lightboxImage").alt = item.alt || item.title || "Galerie";
  el("lightboxCaption").innerHTML = `
    <span>${currentLightboxIndex + 1} / ${lightboxItems.length}</span>
    <strong>${item.title || ""}</strong>
    <small>${item.meta || ""}</small>
    ${item.productId ? `<div class="lightbox-actions">
      <button class="btn primary" onclick="addLightboxProduct(${item.productId}, this)">Přidat do košíku</button>
      <button class="btn outline" onclick="openProductModalFromLightbox(${item.productId})">Detail</button>
    </div>` : ""}
  `;
  el("prevLightbox").style.display = lightboxItems.length > 1 ? "grid" : "none";
  el("nextLightbox").style.display = lightboxItems.length > 1 ? "grid" : "none";
}

function moveLightbox(delta) {
  if (!lightboxItems.length) return;
  currentLightboxIndex = (currentLightboxIndex + delta + lightboxItems.length) % lightboxItems.length;
  renderLightbox();
}

function openProductModalFromLightbox(productId) {
  closeLightbox();
  openProductModal(productId);
}

function addLightboxProduct(productId, sourceButton = null) {
  closeLightbox();
  addToCart(productId, 1, sourceButton);
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
  el("prevLightbox").addEventListener("click", () => moveLightbox(-1));
  el("nextLightbox").addEventListener("click", () => moveLightbox(1));
  el("prevReview").addEventListener("click", () => { currentReview = (currentReview + reviews.length - 1) % reviews.length; renderReview(); restartReviewTimer(); });
  el("nextReview").addEventListener("click", () => { currentReview = (currentReview + 1) % reviews.length; renderReview(); restartReviewTimer(); });
  el("orderForm").addEventListener("submit", submitOrder);
  document.addEventListener("keydown", (event) => {
    if (el("lightbox").classList.contains("show")) {
      if (event.key === "ArrowLeft") moveLightbox(-1);
      if (event.key === "ArrowRight") moveLightbox(1);
    }
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
  }, { threshold: 0.01, rootMargin: "0px 0px -40px 0px" });
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

function initGardenAmbience() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  const hero = document.querySelector(".hero");
  const heroVisual = document.querySelector(".hero-visual");
  if (hero) {
    hero.insertAdjacentHTML("beforeend", `
      <div class="garden-ambience" aria-hidden="true">
        <span class="leaf leaf-a"></span>
        <span class="leaf leaf-b"></span>
        <span class="leaf leaf-c"></span>
        <span class="flower-dot dot-a"></span>
        <span class="flower-dot dot-b"></span>
        <span class="flower-dot dot-c"></span>
      </div>
    `);
  }

  if (heroVisual) {
    heroVisual.insertAdjacentHTML("beforeend", `
      <div class="hero-vine" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
    `);
  }
}

function initScrollGarden() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  const sections = document.querySelectorAll(".section-heading, .catalog-panel, .service-strip article, .occasion-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("garden-reveal");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  sections.forEach((item, index) => {
    item.style.setProperty("--garden-i", index % 6);
    observer.observe(item);
  });
}

function initScrollProgress() {
  const progress = el("scrollProgress");
  const header = document.querySelector(".site-header");
  if (!progress) return;

  let ticking = false;
  const update = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const amount = Math.min(1, Math.max(0, window.scrollY / max));
    progress.style.transform = `scaleX(${amount})`;
    header?.classList.toggle("scrolled", window.scrollY > 18);
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

function initCursorAura() {
  const aura = el("cursorAura");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!aura || reducedMotion || window.innerWidth < 900) return;

  let lastSparkle = 0;
  window.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    aura.style.opacity = "1";
    aura.style.transform = `translate3d(${event.clientX - 130}px, ${event.clientY - 130}px, 0)`;

    const now = performance.now();
    if (now - lastSparkle < 95) return;
    lastSparkle = now;
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle-trail";
    sparkle.style.left = `${event.clientX}px`;
    sparkle.style.top = `${event.clientY}px`;
    document.body.appendChild(sparkle);
    sparkle.addEventListener("animationend", () => sparkle.remove(), { once: true });
  }, { passive: true });

  window.addEventListener("pointerleave", () => {
    aura.style.opacity = "0";
  });
}

function initInteractiveTilt() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || window.innerWidth < 900) return;

  const selector = ".product-card, .occasion-card, .gallery-grid button, .catalog-panel, .benefits-grid article, .review-card, .contact-card, .order-form";
  let active = null;

  const reset = (target) => {
    if (!target) return;
    target.classList.remove("is-tilting");
    target.style.removeProperty("--rx");
    target.style.removeProperty("--ry");
  };

  document.addEventListener("pointermove", (event) => {
    const target = event.target.closest(selector);
    if (!target) {
      reset(active);
      active = null;
      return;
    }

    if (active && active !== target) reset(active);
    active = target;

    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const rotateY = ((x - 50) / 50) * 4.6;
    const rotateX = ((50 - y) / 50) * 4.2;

    target.style.setProperty("--mx", `${x.toFixed(1)}%`);
    target.style.setProperty("--my", `${y.toFixed(1)}%`);
    target.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
    target.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
    target.classList.add("is-tilting");
  }, { passive: true });

  document.addEventListener("pointerout", (event) => {
    const target = event.target.closest(selector);
    if (!target || target.contains(event.relatedTarget)) return;
    reset(target);
    if (active === target) active = null;
  });
}

function initHeroParallax() {
  const hero = document.querySelector(".hero");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!hero || reducedMotion || window.innerWidth < 900) return;

  hero.classList.add("motion-active");
  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 22;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 22;
    hero.style.setProperty("--hero-image-x", `${(-x * 0.55).toFixed(2)}px`);
    hero.style.setProperty("--hero-image-y", `${(-y * 0.45).toFixed(2)}px`);
    hero.style.setProperty("--hero-collage-x", `${(x * 0.42).toFixed(2)}px`);
    hero.style.setProperty("--hero-collage-y", `${(y * 0.38).toFixed(2)}px`);
    hero.style.setProperty("--hero-panel-x", `${(x * 0.28).toFixed(2)}px`);
    hero.style.setProperty("--hero-panel-y", `${(-y * 0.62).toFixed(2)}px`);
    hero.style.setProperty("--hero-copy-x", `${(x * 0.12).toFixed(2)}px`);
    hero.style.setProperty("--hero-copy-y", `${(y * 0.12).toFixed(2)}px`);
  }, { passive: true });

  hero.addEventListener("pointerleave", () => {
    ["image", "collage", "panel", "copy"].forEach((name) => {
      hero.style.setProperty(`--hero-${name}-x`, "0px");
      hero.style.setProperty(`--hero-${name}-y`, "0px");
    });
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
initGardenAmbience();
initScrollGarden();
initScrollProgress();
initCursorAura();
initInteractiveTilt();
initHeroParallax();
