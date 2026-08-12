 // Filter Sidebar Toggle
    const filterBtn = document.getElementById('filterToggleBtn');
    const sidebarMobile = document.getElementById('sidebarMobile');
    const overlay = document.getElementById('sidebarOverlay');
    const closeBtn = document.getElementById('closeSidebarBtn');

    function openSidebar() {
      sidebarMobile.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
      sidebarMobile.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (filterBtn) {
      filterBtn.addEventListener('click', openSidebar);
    }

    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeSidebar();
    });

    // Copy sidebar content to mobile sidebar
    function copySidebarContent() {
      const desktopSidebar = document.getElementById('sidebar');
      const mobileSidebar = document.getElementById('sidebarContent');
      if (desktopSidebar && mobileSidebar) {
        // Wait for content to load
        setTimeout(function() {
          mobileSidebar.innerHTML = desktopSidebar.innerHTML;
        }, 100);
      }
    }

    // Call on load
    document.addEventListener('DOMContentLoaded', copySidebarContent);

    // Also copy when sidebar content changes (if using JS injection)
    
 
 const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerIcon = document.getElementById('hamburgerIcon');

    hamburgerBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      // Toggle icon between bars and X
      hamburgerIcon.classList.toggle('fa-bars');
      hamburgerIcon.classList.toggle('fa-xmark');
    });

    // Close menu when clicking a link (optional but better UX)
    document.querySelectorAll('#mobileMenu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.add('fa-bars');
        hamburgerIcon.classList.remove('fa-xmark');
      });
    });
    // ----------------------------------------------
    // 1. PRODUCTS DATA (embedded)
    // ----------------------------------------------
    const products = [{
      id: "ib29",
      name: "11X9 Canvas Tote Bag",
      code: "IB29",
      slug: "11x9-canvas-tote-bag",
      category: "Tote Bags",
      material: "Canvas",
      size: '9"W x 15"H x 15"D',
      price: 30.00,
      originalPrice: 45.00,
      image: "assets/assets/images/products/tote-bags/IB29/IB29_main.webp",
      description: "7oz cotton canvas bag with self-fabric handles. Reinforced stitching.",
      popular: true
    }, {
      id: "mqib6000",
      name: "Cotton Tote Bag Natural Body with Color Handles",
      code: "MQIB6000",
      slug: "cotton-tote-natural-color-handles",
      category: "Tote Bags",
      material: "Cotton",
      size: '15"W x 16"H',
      price: 30.00,
      originalPrice: 45.00,
      image: "assets/assets/images/products/tote-bags/MQIB6000/MQT6000_main.webp",
      description: "6oz. 100% cotton tote bag with natural body and color handles.",
      popular: false
    }, {
      id: "ib611",
      name: "Jumbo Canvas Zipper Tote with bottom Gusset",
      code: "IB611",
      slug: "jumbo-canvas-zipper-tote",
      category: "Tote Bags",
      material: "Canvas",
      size: '20"W x 15"H x 5"D',
      price: 30.00,
      originalPrice: 45.00,
      image: "assets/assets/images/products/tote-bags/IB611/IB611_main.webp",
      description: "12oz. canvas, 100% cotton, jumbo tote with full length zipper.",
      popular: false
    }, {
      id: "iwb201",
      name: "Single Bottle Canvas Wine Tote",
      code: "IWB201",
      slug: "single-bottle-canvas-wine-tote",
      category: "Bottle Bags",
      material: "Canvas",
      size: '3"W x 10.5"H x 3"D',
      price: 30.00,
      originalPrice: 45.00,
      image: "assets/assets/images/products/bottle-bags/IWB201/IWB201_natural.webp",
      description: "12 oz. 100% cotton canvas. Single bottle wine tote with reinforced bottom.",
      popular: false
    }, {
      id: "mqib",
      name: "Cotton Tote Bag",
      code: "MQIB",
      slug: "cotton-tote-bag",
      category: "Tote Bags",
      material: "Cotton",
      size: '15"W x 16"H',
      price: 30.00,
      originalPrice: 45.00,
      image: "assets/assets/images/products/tote-bags/MQIB/MQIB_main.webp",
      description: "Premium cotton tote, ideal for everyday use.",
      popular: true
    }, {
      id: "ib800",
      name: "Canvas Promotional Tote Bag",
      code: "IB800",
      slug: "canvas-promotional-tote",
      category: "Tote Bags",
      material: "Canvas",
      size: '15"W x 16"H',
      price: 30.00,
      originalPrice: 45.00,
      image: "assets/assets/images/products/tote-bags/IB800/IB800_main.webp",
      description: "Durable canvas tote with promotional appeal.",
      popular: true
    }, {
      id: "w956",
      name: "Non-Woven Convention Bag",
      code: "W956",
      slug: "non-woven-convention-bag",
      category: "Non-Woven Bags",
      material: "Non-Woven",
      size: '15"W x 16"H',
      price: 35.00,
      originalPrice: 50.00,
      image: "assets/assets/images/products/non-woven/W956/W956_main.webp",
      description: "Lightweight non-woven bag for conventions.",
      popular: true
    }, {
      id: "w975",
      name: "Econo Tote Bag",
      code: "W975",
      slug: "econo-tote-bag",
      category: "Tote Bags",
      material: "Non-Woven",
      size: '14.25"W x 15"H x 5"D',
      price: 35.00,
      originalPrice: 50.00,
      image: "assets/assets/images/products/non-woven/W975/W975_main.webp",
      description: "Economical non-woven tote.",
      popular: true
      // }, {
      //   id: "ib100",
      //   name: "Premium Canvas Tote",
      //   code: "IB100",
      //   slug: "premium-canvas-tote",
      //   category: "Tote Bags",
      //   material: "Canvas",
      //   size: '15"W x 16"H',
      //   price: 35.00,
      //   image: "https://placehold.co/150x150/ffffff/555555?text=Premium",
      //   description: "High-quality premium canvas tote.",
      //   popular: true
    },
      // {
      //   id: "bp101",
      //   name: "Classic Backpack",
      //   code: "BP101",
      //   slug: "classic-backpack",
      //   category: "Backpacks",
      //   material: "Canvas",
      //   size: '12"W x 18"H x 6"D',
      //   price: 55.00,
      //   image: "https://placehold.co/150x150/ffffff/555555?text=Backpack",
      //   description: "Sturdy canvas backpack with padded straps.",
      //   popular: false
      // }, 
      // {
      //   id: "cool1",
      //   name: "Insulated Cooler Bag",
      //   code: "COOL1",
      //   slug: "insulated-cooler-bag",
      //   category: "Cooler Bags",
      //   material: "Non-Woven",
      //   size: '10"W x 12"H x 8"D',
      //   price: 42.00,
      //   image: "https://placehold.co/150x150/ffffff/555555?text=Cooler",
      //   description: "Keep your drinks cold with this insulated cooler.",
      //   popular: false
      // }, 
      // {
      //   id: "acc01",
      //   name: "Leather Keychain",
      //   code: "ACC01",
      //   slug: "leather-keychain",
      //   category: "Accessories",
      //   material: "Cotton",
      //   size: '2"x 4"',
      //   price: 12.00,
      //   image: "https://placehold.co/150x150/ffffff/555555?text=Keychain",
      //   description: "Genuine leather keychain with metal ring.",
      //   popular: false
      // }, 
      // {
      //   id: "ib202",
      //   name: "Canvas Drawstring Bag",
      //   code: "IB202",
      //   slug: "canvas-drawstring-bag",
      //   category: "Drawstring Bags",
      //   material: "Canvas",
      //   size: '14"W x 18"H',
      //   price: 18.00,
      //   image: "https://placehold.co/150x150/ffffff/555555?text=Drawstring",
      //   description: "Lightweight canvas drawstring bag.",
      //   popular: false
      // }
    ];

    // -------------------------------------------------
    // 2. RENDER ENGINE
    // -------------------------------------------------
    (function () {
      "use strict";

      const grid = document.getElementById('product-grid');
      const popularGrid = document.getElementById('popular-grid');
      const sidebar = document.getElementById('sidebar');
      const emptyState = document.getElementById('empty-state');
      const countLabel = document.getElementById('product-count-label');
      const searchInput = document.getElementById('search-input');
      const sortSelect = document.getElementById('sort-select');

      let currentCategory = 'All Products';
      let selectedMaterials = [];
      let selectedSizes = [];
      let searchTerm = '';

      function getCategories() {
        const cats = products.map(p => p.category);
        return ['All Products', ...new Set(cats)];
      }

      function getMaterials() {
        return [...new Set(products.map(p => p.material))];
      }

      function getSizes() {
        return [...new Set(products.map(p => p.size))];
      }

      function getCategoryCount(cat) {
        if (cat === 'All Products') return products.length;
        return products.filter(p => p.category === cat).length;
      }

      function getMaterialCount(mat) {
        return products.filter(p => p.material === mat).length;
      }

      function getSizeCount(size) {
        return products.filter(p => p.size === size).length;
      }

      function getFilteredProducts() {
        let result = products;
        if (currentCategory !== 'All Products') {
          result = result.filter(p => p.category === currentCategory);
        }
        if (selectedMaterials.length > 0) {
          result = result.filter(p => selectedMaterials.includes(p.material));
        }
        if (selectedSizes.length > 0) {
          result = result.filter(p => selectedSizes.includes(p.size));
        }
        if (searchTerm.trim() !== '') {
          const s = searchTerm.toLowerCase().trim();
          result = result.filter(p =>
            p.name.toLowerCase().includes(s) ||
            p.code.toLowerCase().includes(s) ||
            p.category.toLowerCase().includes(s) ||
            p.material.toLowerCase().includes(s)
          );
        }
        return result;
      }

      function getSortedProducts(filtered) {
        const sortVal = sortSelect.value;
        const arr = [...filtered];
        if (sortVal === 'price-low') arr.sort((a, b) => a.price - b.price);
        else if (sortVal === 'price-high') arr.sort((a, b) => b.price - a.price);
        else if (sortVal === 'newest') arr.reverse();
        else arr.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        return arr;
      }

      function createProductCard(product) {
        const div = document.createElement('div');
        div.className =
          'premium-card p-4 relative flex flex-col h-full product-card opacity-0 group cursor-pointer';
        div.dataset.id = product.id;
        // product link with ID parameter
        const link = `product.html?id=${product.id}`;

        div.innerHTML = `
            <span class="absolute top-4 left-4 bg-brand-navy text-white text-[10px] font-bold px-2 py-0.5 rounded z-10 border border-white/10">${product.code}</span>
            <button class="absolute top-4 right-4 text-brand-textSecondary hover:text-brand-crimson z-10 transition-colors"><i class="fa-regular fa-heart"></i></button>
            <a href="${link}" class="block relative h-48 mb-4 flex items-center justify-center product-img-bg group-hover:scale-105 transition-transform duration-500">
              <img src="${product.image}" alt="${product.name}" class="max-h-full object-contain" />
              <div class="absolute bottom-0 bg-brand-navy/90 text-white text-[9px] px-2 py-0.5 rounded font-medium border border-white/10">${product.size}</div>
            </a>
            <div class="flex-1 flex flex-col">
              <a href="${link}"><h3 class="text-sm font-bold mb-2 text-brand-text line-clamp-2">${product.name}</h3></a>
              <p class="text-xs text-brand-textSecondary mb-3 line-clamp-3">${product.description}</p>
          <div class="mt-auto">
  <!-- Price Row with Setup Before -->
<div class="mt-auto">
  <!-- Setup Was Label -->
  <div class="text-[12px] text-brand-textSecondary font-medium mb-1">Setup Was</div>
  
  <!-- Price Row -->
  <div class="flex items-center gap-2 flex-wrap mb-3">
    ${product.originalPrice ? `<span class="text-[15px] text-brand-textSecondary line-through opacity-50 font-medium">$${product.originalPrice.toFixed(2)}</span>` : ''}
    <span class="text-brand-crimson font-bold text-base">$${product.price.toFixed(2)}</span>
    <span class="text-[8px] font-bold text-brand-crimson bg-red-50 px-2 py-0.5 rounded border border-brand-crimson/30">Now Net</span>
  </div>
  
  <!-- Buttons -->
  <div class="flex items-center gap-1 w-full">
    <button class="flex-1 border border-brand-border text-brand-textSecondary text-[10px] font-semibold py-1.5 px-1 rounded hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-colors flex items-center justify-center gap-1"><i class="fa-regular fa-pen-to-square"></i> QUOTE</button>
    <button class="flex-1 border border-brand-border text-brand-textSecondary text-[10px] font-semibold py-1.5 px-1 rounded hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-colors flex items-center justify-center gap-1"><i class="fa-solid fa-wand-magic-sparkles"></i> MOCKUP</button>
    <button class="flex-1 bg-brand-crimson text-white text-[10px] font-semibold py-1.5 px-1 rounded hover:bg-brand-crimsonHover transition-colors flex items-center justify-center gap-1 border border-brand-crimson"><i class="fa-solid fa-truck-fast"></i> FREIGHT</button>
  </div>
</div>
          `;

        // Click event on the card to navigate to product detail
        div.addEventListener('click', function (e) {
          // Ignore if clicked on button or link inside
          if (e.target.closest('button') || e.target.closest('a')) return;
          window.location.href = `product.html?id=${product.id}`;
        });

        return div;
      }

      function renderSidebar() {
        const cats = getCategories();
        const materials = getMaterials();
        const sizes = getSizes();
        let html = `
            <div class="premium-card mb-6">
              <h3 class="text-xs font-bold text-brand-textSecondary uppercase tracking-wider p-4 border-b border-brand-border">Categories</h3>
              <ul class="text-sm text-brand-textSecondary font-medium" id="category-list">`;
        cats.forEach(cat => {
          const count = getCategoryCount(cat);
          const active = currentCategory === cat ? 'active' : '';
          html += `<li><a href="#" class="flex items-center justify-between px-4 py-2.5 sidebar-link ${active} border-b border-brand-border/30 category-link" data-category="${cat}">${cat} <span class="text-xs font-normal">${count}</span></a></li>`;
        });
        html += `</ul></div>
            <div class="premium-card">
              <h3 class="text-xs font-bold text-brand-textSecondary uppercase tracking-wider p-4 border-b border-brand-border">Filter By</h3>
              <div class="p-4 border-b border-brand-border">
                <div class="flex justify-between items-center mb-3 cursor-pointer"><h4 class="text-sm font-bold text-brand-text">SIZE</h4><i class="fa-solid fa-chevron-up text-xs text-brand-textSecondary"></i></div>
                <div class="space-y-2.5 text-sm text-brand-textSecondary" id="size-filters">`;
        sizes.forEach(size => {
          const count = getSizeCount(size);
          const checked = selectedSizes.includes(size) ? 'checked' : '';
          html += `<label class="flex items-center justify-between cursor-pointer group"><div class="flex items-center gap-2"><input type="checkbox" class="size-check w-4 h-4 border-brand-border rounded text-brand-crimson focus:ring-brand-crimson" value="${size}" ${checked}><span class="group-hover:text-brand-text transition-colors">${size}</span></div><span class="text-xs text-brand-textSecondary">(${count})</span></label>`;
        });
        html += `</div></div>
            <div class="p-4">
              <div class="flex justify-between items-center mb-3 cursor-pointer"><h4 class="text-sm font-bold text-brand-text">MATERIAL</h4><i class="fa-solid fa-chevron-up text-xs text-brand-textSecondary"></i></div>
              <div class="space-y-2.5 text-sm text-brand-textSecondary" id="material-filters">`;
        materials.forEach(mat => {
          const count = getMaterialCount(mat);
          const checked = selectedMaterials.includes(mat) ? 'checked' : '';
          html += `<label class="flex items-center justify-between cursor-pointer group"><div class="flex items-center gap-2"><input type="checkbox" class="material-check w-4 h-4 border-brand-border rounded text-brand-crimson focus:ring-brand-crimson" value="${mat}" ${checked}><span class="group-hover:text-brand-text transition-colors">${mat}</span></div><span class="text-xs text-brand-textSecondary">(${count})</span></label>`;
        });
        html += `<button class="text-brand-crimson text-xs font-semibold w-full text-center mt-2 hover:underline">+ More</button></div></div></div>`;
        sidebar.innerHTML = html;

        document.querySelectorAll('.category-link').forEach(el => {
          el.addEventListener('click', (e) => {
            e.preventDefault();
            currentCategory = el.dataset.category;
            renderSidebar();
            applyFiltersAndRender();
          });
        });
        document.querySelectorAll('.size-check').forEach(cb => {
          cb.addEventListener('change', (e) => {
            const val = e.target.value;
            if (e.target.checked) { if (!selectedSizes.includes(val)) selectedSizes.push(val); } else { selectedSizes = selectedSizes.filter(v => v !== val); }
            applyFiltersAndRender();
          });
        });
        document.querySelectorAll('.material-check').forEach(cb => {
          cb.addEventListener('change', (e) => {
            const val = e.target.value;
            if (e.target.checked) { if (!selectedMaterials.includes(val)) selectedMaterials.push(val); } else { selectedMaterials = selectedMaterials.filter(v => v !== val); }
            applyFiltersAndRender();
          });
        });
      }

      function renderProducts() {
    const filtered = getFilteredProducts();
    const sorted = getSortedProducts(filtered);
    const total = products.length;
    const showing = sorted.length;
    countLabel.textContent = `Showing 1–${showing} of ${total} products`;
    grid.innerHTML = '';
    if (showing === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        
        // 🔥 ORDER CHANGE: Pehle 3 products (index 0,1,2) ko baad mein, aage wale (3,4,5...) ko pehle
        const reordered = [];
        if (sorted.length >= 6) {
            // Pehle second row ke products (index 3,4,5)
            reordered.push(sorted[3], sorted[4], sorted[5]);
            // Phir first row ke products (index 0,1,2)
            reordered.push(sorted[0], sorted[1], sorted[2]);
            // Baki ke products (6 se aage) as it is
            for (let i = 6; i < sorted.length; i++) {
                reordered.push(sorted[i]);
            }
        } else {
            // Agar 6 se kam hain toh original order rakho
            reordered.push(...sorted);
        }
        
        reordered.forEach(p => grid.appendChild(createProductCard(p)));
        gsap.set('.product-card', { y: 30, opacity: 0 });
        gsap.to('.product-card', { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'back.out(1.2)', overwrite: 'auto' });
    }

    // Popular products render karo
    const popularProducts = products.filter(p => p.popular === true);
    renderPopularProducts(popularProducts);
}

      function renderPopularProducts(popularProducts) {
        const grid = document.getElementById('popular-grid');
        if (!grid) return;

        // Trending emojis array
        const emojis = ['🔥', '⭐', '💫', '✨', '🌟', '🎯', '💎', '👑'];
        const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF6B8A', '#FFB347', '#A66CFF', '#FF8A5C'];

        grid.innerHTML = popularProducts.map((product, index) => {
          const emoji = emojis[index % emojis.length];
          const color = colors[index % colors.length];
          const randomBuyers = Math.floor(100 + Math.random() * 900);

          return `
            <div class="popular-card" style="animation-delay: ${index * 0.15}s" 
                 onclick="window.location.href='product.html?id=${product.id}'">
                <div class="popular-shine"></div>
                
                <!-- Floating Particles -->
                <div class="popular-particles">
                    ${[...Array(6)].map((_, i) => `
                        <div class="particle" style="
                            left: ${Math.random() * 100}%;
                            animation-delay: ${Math.random() * 4}s;
                            animation-duration: ${3 + Math.random() * 4}s;
                            width: ${2 + Math.random() * 5}px;
                            height: ${2 + Math.random() * 5}px;
                            background: ${[color, '#C81F45', '#FF6B8A', '#FFD700'][i % 4]};
                        "></div>
                    `).join('')}
                </div>
                
                <!-- Popular Tag with Fire Emoji -->
                <span class="popular-tag">
                    <span class="fire-emoji">${emoji}</span> 
                    Trending #${index + 1}
                </span>
                
                <!-- Order Counter (Fake Popularity) -->
                <div class="absolute top-12 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full z-10">
                    <span class="text-white text-[10px] font-medium flex items-center gap-1.5">
                        <i class="fa-solid fa-users text-[8px]"></i>
                        <span class="popular-counter">${randomBuyers}+</span>
                        <span class="text-white/50 text-[8px]">bought</span>
                    </span>
                </div>
                
                <img src="${product.image}" alt="${product.name}" class="popular-image">
                
                <div class="popular-content">
                    <p class="popular-code">${product.code}</p>
                    <h4 class="popular-name">${product.name}</h4>
                    
                    <!-- Rating Stars -->
                    <div class="flex items-center gap-1 mt-1">
                        <div class="flex text-amber-400 text-[9px]">
                            ${'⭐'.repeat(5)}
                        </div>
                        <span class="text-[9px] text-brand-textSecondary">(${(Math.random() * 150 + 30).toFixed(0)})</span>
                    </div>
                    
          <div class="flex items-center gap-2 mt-2 flex-wrap">
  <span class="text-[12px] text-brand-textSecondary font-medium">Setup Was</span>
  <span class="text-[15px] text-brand-textSecondary line-through opacity-50 font-medium">$${product.originalPrice.toFixed(2)}</span>
  <span class="popular-price font-bold text-brand-crimson text-sm">$${product.price.toFixed(2)}</span>
  <span class="text-[8px] font-bold text-brand-crimson bg-red-50 px-1.5 py-0.5 rounded border border-brand-crimson/30">Now Net</span>
</div>
                </div>
            </div>
        `;
        }).join('');

        // Show section with animation
        setTimeout(() => {
          const section = document.getElementById('popular-section');
          if (section) section.classList.add('visible');
        }, 200);
      }

      function applyFiltersAndRender() {
        renderProducts();
      }

      function initEvents() {
        searchInput.addEventListener('input', (e) => {
          searchTerm = e.target.value;
          applyFiltersAndRender();
        });
        sortSelect.addEventListener('change', () => {
          applyFiltersAndRender();
        });
      }
      gsap.from(".brand-divider", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".brand-divider span", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      function init() {
        renderSidebar();
        renderProducts();
        initEvents();

        const tl = gsap.timeline();
        tl.to(".header-content", { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" })
          .to(".header-features", { opacity: 1, duration: 0.5 }, "-=0.3")
          .to(".sidebar-anim", { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2")
          .to(".toolbar-anim", { y: 0, opacity: 1, duration: 0.4 }, "-=0.3")
          .to(".product-card", { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.2)" }, "-=0.2")
          .to(".popular-section", { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.2")
          .to(".footer-features", { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.3");

        gsap.set(".header-content, .toolbar-anim, .popular-section", { y: 20 });
        gsap.set(".sidebar-anim", { x: -20 });
        gsap.set(".product-card", { y: 30 });
        gsap.set(".footer-features", { y: 15 });
      }

      init();
    })();