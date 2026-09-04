// بيانات تجريبية (Placeholder) — استبدلها ببيانات محلك الحقيقية لاحقاً
const PRODUCTS = [
  { name: "كريم ترطيب الوجه", category: "كريمات", price: 150, img: "https://picsum.photos/seed/cream-face/600/600" },
  { name: "كريم مضاد للتجاعيد", category: "كريمات", price: 220, img: "https://picsum.photos/seed/cream-wrinkle/600/600" },
  { name: "كريم اليدين بالشيا", category: "كريمات", price: 85,  img: "https://picsum.photos/seed/cream-hand/600/600" },
  { name: "كريم الليل المغذي", category: "كريمات", price: 190, img: "https://picsum.photos/seed/cream-night/600/600" },

  { name: "سبراي منعش للجسم", category: "سبراي", price: 95,  img: "https://picsum.photos/seed/spray-body/600/600" },
  { name: "سبراي مثبت المكياج", category: "سبراي", price: 110, img: "https://picsum.photos/seed/spray-makeup/600/600" },
  { name: "سبراي معطر للمنزل", category: "سبراي", price: 75,  img: "https://picsum.photos/seed/spray-home/600/600" },

  { name: "زيت العناية بالشعر", category: "عناية بالشعر", price: 130, img: "https://picsum.photos/seed/hair-oil/600/600" },
  { name: "سيروم فرد الشعر", category: "عناية بالشعر", price: 160, img: "https://picsum.photos/seed/hair-serum/600/600" },
  { name: "شامبو طبيعي بالأعشاب", category: "عناية بالشعر", price: 100, img: "https://picsum.photos/seed/hair-shampoo/600/600" },

  { name: "عطر فرنسي فاخر", category: "عطور", price: 350, img: "https://picsum.photos/seed/perfume-fr/600/600" },
  { name: "عطر صيفي منعش", category: "عطور", price: 210, img: "https://picsum.photos/seed/perfume-summer/600/600" },
  { name: "مسك عماني أصلي", category: "عطور", price: 180, img: "https://picsum.photos/seed/perfume-musk/600/600" },
  { name: "عطر ورد بلغاري", category: "عطور", price: 275, img: "https://picsum.photos/seed/perfume-rose/600/600" },
];

function formatPrice(p) {
  return p.toLocaleString("ar-EG") + " ج.م";
}

function renderProducts(filter) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  const items = filter && filter !== "الكل" ? PRODUCTS.filter(p => p.category === filter) : PRODUCTS;
  grid.innerHTML = items.map(p => `
    <article class="card">
      <div class="card-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <div class="card-body">
        <span class="card-cat">${p.category}</span>
        <h3 class="card-name">${p.name}</h3>
        <span class="card-price">${formatPrice(p.price)}</span>
      </div>
    </article>
  `).join("");
}

function setupFilters() {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderProducts(tab.dataset.cat);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("productGrid")) {
    renderProducts("الكل");
    setupFilters();
  }
});
