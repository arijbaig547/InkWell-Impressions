
(() => {
  "use strict";

  // -----------------------------------------
  // 1. PRODUCT DATA & CATEGORY GROUPING
  // -----------------------------------------

  const allProducts = typeof products !== "undefined" && Array.isArray(products)
    ? products
    : [];

  const normalize = value => String(value || "").trim().toLowerCase();

  // Main categories and their subcategories
  const categoryGroups = {
    "APPARELS": ["T-shirts", "Hoodies", "Pants"],
    "BAGS": ["Tote Bags", "Bottle Bags", "Non-Woven Bags", "Shoe Bags"],
    "BLANKETS": ["Blankets"]
  };

  // Only show categories that contain products
  const categories = Object.keys(categoryGroups).filter(group => {
    return allProducts.some(product =>
      categoryGroups[group].some(subcategory =>
        normalize(product.category) === normalize(subcategory)
      )
    );
  });

  // Combine subcategory products into their main category
  const categoryProducts = {};

  categories.forEach(group => {
    const subcategories = categoryGroups[group];

    categoryProducts[group] = allProducts
      .filter(product =>
        subcategories.some(subcategory =>
          normalize(product.category) === normalize(subcategory)
        )
      )
      .sort((a, b) =>
        Number(Boolean(b.popular)) - Number(Boolean(a.popular))
      );
  });

  // -----------------------------------------
  // 2. STATE
  // -----------------------------------------

  let currentCategory = categories[0] || "";
  let currentIndex = 0;
  let currentProduct = null;
  let selectedColorIndex = 0;
  let modalOpen = false;
  let touchStartX = null;
  let mouseStartX = null;

  const getCurrentProducts = () =>
    categoryProducts[currentCategory] || [];

  const getCurrentImage = (product, colorIndex = 0) => {
    if (!product) return "";

    const color = product.colors?.[colorIndex];

    return color?.image || product.image || product.images?.[0] || "";
  };

  const getProductDescription = product =>
    product?.description || "Explore the product details and available options.";

  const getProductMaterial = product =>
    product?.material || product?.specs?.material || "Not specified";

  const formatNumber = number =>
    String(number).padStart(2, "0");

  // -----------------------------------------
  // 3. DOM ELEMENTS
  // -----------------------------------------

  const $ = id => document.getElementById(id);

  const categorySwitcher = $("categorySwitcher");
  const track = $("carouselTrack");
  const viewport = $("carouselViewport");

  const heroCategory = $("heroCategory");
  const heroMaterial = $("heroMaterial");
  const heroTitle = $("heroTitle");
  const heroSubtitle = $("heroSubtitle");

  const currentIndexDisplay = $("currentIndexDisplay");
  const totalDisplay = $("totalDisplay");
  const progressBar = $("progressBar");
  const inspectBtnLabel = $("inspectBtnLabel");

  const modal = $("productModal");
  const modalImg = $("modalImg");
  const modalTitle = $("modalTitle");
  const modalCategory = $("modalCategory");
  const modalCode = $("modalCode");
  const modalDesc = $("modalDesc");
  const modalNumberDisplay = $("modalNumberDisplay");
  const modalColorName = $("modalColorName");
  const modalSwatches = $("modalSwatches");
  const modalSpecs = $("modalSpecs");
  const modalAdditional = $("modalAdditional");
  const modalShowcase = $("modalShowcase");
  const modalProductWrap = $("modalProductWrap");

  // -----------------------------------------
  // 4. CATEGORY NAVIGATION
  // -----------------------------------------

  function renderCategories() {
    categorySwitcher.innerHTML = "";

    categories.forEach(category => {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "category-chip";
      button.textContent = category;

      if (category === currentCategory) {
        button.classList.add("active");
      }

      button.addEventListener("click", () => {
        if (currentCategory === category) return;

        currentCategory = category;
        currentIndex = 0;

        renderCategories();
        renderCarousel();
      });

      categorySwitcher.appendChild(button);
    });
  }

  // -----------------------------------------
  // 5. 3D CAROUSEL
  // -----------------------------------------

  function getOffset(index, total) {
    let offset = index - currentIndex;

    if (offset < -Math.floor(total / 2)) {
      offset += total;
    }

    if (offset > Math.floor(total / 2)) {
      offset -= total;
    }

    return offset;
  }

  function createProductCard(product, index, offset) {
    const card = document.createElement("div");
    card.className = "carousel-item";

    const isActive = offset === 0;
    const isLeft = offset === -1;
    const isRight = offset === 1;

    let transform = "";
    let opacity = 0;
    let zIndex = 0;
    let pointerEvents = "none";

    if (isActive) {
      transform = "translate(-50%, -50%) translateX(0px) translateZ(120px) scale(1.12)";
      opacity = 1;
      zIndex = 20;
      pointerEvents = "auto";
      card.classList.add("active");

    } else if (isLeft) {
      transform = "translate(-50%, -50%) translateX(-260px) translateZ(-60px) rotateY(24deg) scale(.8)";
      opacity = .55;
      zIndex = 10;
      pointerEvents = "auto";

    } else if (isRight) {
      transform = "translate(-50%, -50%) translateX(260px) translateZ(-60px) rotateY(-24deg) scale(.8)";
      opacity = .55;
      zIndex = 10;
      pointerEvents = "auto";

    } else {
      const direction = offset < 0 ? -1 : 1;

      transform = `translate(-50%, -50%) translateX(${direction * 400}px) translateZ(-160px) rotateY(${direction * -35}deg) scale(.6)`;
    }

    // Mobile carousel positioning
    if (window.innerWidth < 640) {
      if (isLeft) {
        transform = "translate(-50%, -50%) translateX(-145px) translateZ(-60px) rotateY(20deg) scale(.72)";
      }

      if (isRight) {
        transform = "translate(-50%, -50%) translateX(145px) translateZ(-60px) rotateY(-20deg) scale(.72)";
      }

      if (isActive) {
        transform = "translate(-50%, -50%) translateX(0px) translateZ(100px) scale(1.03)";
      }
    }

    card.style.transform = transform;
    card.style.opacity = opacity;
    card.style.zIndex = zIndex;
    card.style.pointerEvents = pointerEvents;

    const imageWrap = document.createElement("div");
    imageWrap.className = "product-image-wrap";

    const img = document.createElement("img");
    img.src = getCurrentImage(product);
    img.alt = product.name || "Inkwell product";
    img.draggable = false;

    img.onerror = () => {
      img.style.opacity = "0";
    };

    const shadow = document.createElement("div");
    shadow.className = "product-shadow";

    imageWrap.append(img, shadow);

    if (isActive) {
      const hint = document.createElement("div");
      hint.className = "inspect-hint";
      hint.textContent = "Click to inspect";

      imageWrap.appendChild(hint);

    } else {
      const label = document.createElement("div");
      label.className = "side-label";
      label.textContent = product.name || "Product";

      imageWrap.appendChild(label);
    }

    card.appendChild(imageWrap);

    card.addEventListener("click", () => {
      if (isActive) {
        openProductModal(product);
      } else {
        currentIndex = index;
        renderCarousel();
      }
    });

    return card;
  }

  function renderCarousel() {
    const list = getCurrentProducts();

    track.innerHTML = "";

    if (!list.length) {
      $("emptyState").hidden = false;
      $("carouselViewport").hidden = true;
      $("inspectActiveBtn").hidden = true;

      heroTitle.textContent = "Collection coming soon";
      heroCategory.textContent = currentCategory || "PRODUCT COLLECTION";
      heroMaterial.textContent = "INKWELL IMPRESSIONS";
      heroSubtitle.textContent = "We're preparing this collection.";

      return;
    }

    // Keep index within available product range
    currentIndex = Math.min(currentIndex, list.length - 1);

    $("emptyState").hidden = true;
    $("carouselViewport").hidden = false;
    $("inspectActiveBtn").hidden = false;

    list.forEach((product, index) => {
      const offset = getOffset(index, list.length);

      track.appendChild(
        createProductCard(product, index, offset)
      );
    });

    const active = list[currentIndex];

    heroCategory.textContent = active.category || "PRODUCT COLLECTION";
    heroMaterial.textContent = getProductMaterial(active);
    heroTitle.textContent = active.name || "Inkwell Product";
    heroSubtitle.textContent = getProductDescription(active);

    currentIndexDisplay.textContent = formatNumber(currentIndex + 1);
    totalDisplay.textContent = formatNumber(list.length);

    progressBar.style.width =
      `${((currentIndex + 1) / list.length) * 100}%`;

    inspectBtnLabel.textContent =
      `Inspect ${active.code || "Product"}`;

    if (modalOpen) {
      updateModalProduct(active);
    }
  }

  // -----------------------------------------
  // 6. CAROUSEL CONTROLS
  // -----------------------------------------

  function previousSlide() {
    const list = getCurrentProducts();

    if (!list.length) return;

    currentIndex = (currentIndex - 1 + list.length) % list.length;

    renderCarousel();
  }

  function nextSlide() {
    const list = getCurrentProducts();

    if (!list.length) return;

    currentIndex = (currentIndex + 1) % list.length;

    renderCarousel();
  }

  $("prevBtn").addEventListener("click", previousSlide);
  $("nextBtn").addEventListener("click", nextSlide);

  $("inspectActiveBtn").addEventListener("click", () => {
    const product = getCurrentProducts()[currentIndex];

    if (product) {
      openProductModal(product);
    }
  });

  // -----------------------------------------
  // 7. TOUCH AND MOUSE SWIPE
  // -----------------------------------------

  viewport.addEventListener("touchstart", event => {
    touchStartX = event.touches[0].clientX;
  }, { passive: true });

  viewport.addEventListener("touchend", event => {
    if (touchStartX === null) return;

    const difference =
      touchStartX - event.changedTouches[0].clientX;

    if (Math.abs(difference) > 40) {
      difference > 0 ? nextSlide() : previousSlide();
    }

    touchStartX = null;
  });

  viewport.addEventListener("mousedown", event => {
    mouseStartX = event.clientX;
    viewport.classList.add("dragging");
  });

  window.addEventListener("mouseup", event => {
    if (mouseStartX === null) return;

    const difference = mouseStartX - event.clientX;

    if (Math.abs(difference) > 50) {
      difference > 0 ? nextSlide() : previousSlide();
    }

    mouseStartX = null;
    viewport.classList.remove("dragging");
  });

  // -----------------------------------------
  // 8. MODAL OPEN / CLOSE
  // -----------------------------------------

  function openProductModal(product) {
    if (!product) return;

    currentProduct = product;
    selectedColorIndex = 0;
    modalOpen = true;

    updateModalProduct(product);

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeProductModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";

    modalOpen = false;
  }

  $("closeModalBtn").addEventListener("click", closeProductModal);

  modal.addEventListener("click", event => {
    if (event.target === modal) {
      closeProductModal();
    }
  });

  // -----------------------------------------
  // 9. MODAL PRODUCT INFORMATION
  // -----------------------------------------

  function updateModalProduct(product) {
    currentProduct = product;

    const list = getCurrentProducts();
    const productIndex = list.indexOf(product);

    if (productIndex >= 0) {
      currentIndex = productIndex;
    }

    selectedColorIndex = Math.min(
      selectedColorIndex,
      Math.max(0, (product.colors?.length || 1) - 1)
    );

    modalTitle.textContent = product.name || "Inkwell Product";
    modalCategory.textContent = product.category || "PRODUCT";
    modalCode.textContent = product.code || product.id || "INKWELL";
    modalDesc.textContent = getProductDescription(product);

    modalNumberDisplay.textContent =
      `${formatNumber(currentIndex + 1)} / ${formatNumber(list.length)}`;

    updateModalImage();
    renderColorSwatches();
    renderSpecifications();
  }

  function updateModalImage() {
    if (!currentProduct) return;

    modalImg.src = getCurrentImage(
      currentProduct,
      selectedColorIndex
    );

    modalImg.alt = currentProduct.name || "Selected product";

    modalImg.onerror = () => {
      const fallback =
        currentProduct.image || currentProduct.images?.[0] || "";

      if (!fallback) return;

      if (modalImg.dataset.fallbackAttempted === "true") return;

      modalImg.dataset.fallbackAttempted = "true";
      modalImg.src = fallback;
    };

    modalImg.onload = () => {
      modalImg.dataset.fallbackAttempted = "false";
    };

    const selectedColor =
      currentProduct.colors?.[selectedColorIndex];

    modalColorName.textContent =
      selectedColor?.name || "Standard";
  }

  // -----------------------------------------
  // 10. COLOR SWATCHES
  // -----------------------------------------

  function renderColorSwatches() {
    modalSwatches.innerHTML = "";

    const colors = currentProduct?.colors || [];

    if (!colors.length) {
      modalColorName.textContent = "Standard";
      return;
    }

    colors.forEach((color, index) => {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "modal-swatch";
      button.title = color.name || `Color ${index + 1}`;

      button.setAttribute(
        "aria-label",
        color.name || "Select color"
      );

      button.style.backgroundColor = color.hex || "#d7d2c9";

      if (index === selectedColorIndex) {
        button.classList.add("active");
      }

      button.addEventListener("click", () => {
        selectedColorIndex = index;

        updateModalImage();
        renderColorSwatches();
      });

      modalSwatches.appendChild(button);
    });
  }

  // -----------------------------------------
  // 11. PRODUCT SPECIFICATIONS
  // -----------------------------------------

  function renderSpecifications() {
    modalSpecs.innerHTML = "";
    modalAdditional.innerHTML = "";

    const product = currentProduct;

    if (!product) return;

    const specifications = [
      ["Product Code", product.code || product.id],
      ["Category", product.category],
      ["Material", product.material],
      ["Size", product.size],
      ["Imprint Area", product.imprint]
    ];

    const specsObject = product.specs;

    if (specsObject && typeof specsObject === "object") {
      Object.entries(specsObject).forEach(([key, value]) => {
        if (
          value === undefined ||
          value === null ||
          value === ""
        ) {
          return;
        }

        if (typeof value === "object") return;

        const alreadyExists = specifications.some(
          item => normalize(item[0]) === normalize(key)
        );

        if (!alreadyExists) {
          specifications.push([key, String(value)]);
        }
      });
    }

    specifications.forEach(([label, value]) => {
      if (!value) return;

      const item = document.createElement("div");
      item.className = "spec-item";

      const title = document.createElement("span");
      title.textContent = label;

      const content = document.createElement("strong");
      content.textContent = value;

      item.append(title, content);

      modalSpecs.appendChild(item);
    });

    // Additional product information
    if (
      product.additionalCharges &&
      typeof product.additionalCharges === "object"
    ) {
      const details = Object.entries(product.additionalCharges)
        .filter(([, value]) =>
          value !== undefined &&
          value !== null &&
          typeof value !== "object"
        )
        .map(([key, value]) => `${key}: ${value}`);

      if (details.length) {
        const heading = document.createElement("strong");
        heading.textContent = "Additional information";

        const paragraph = document.createElement("p");
        paragraph.textContent = details.join(" · ");

        modalAdditional.append(heading, paragraph);
      }
    }
  }

  // -----------------------------------------
  // 12. MODAL PRODUCT NAVIGATION
  // -----------------------------------------

  function modalPrevious() {
    previousSlide();

    const product = getCurrentProducts()[currentIndex];

    if (product) {
      selectedColorIndex = 0;
      updateModalProduct(product);
    }
  }

  function modalNext() {
    nextSlide();

    const product = getCurrentProducts()[currentIndex];

    if (product) {
      selectedColorIndex = 0;
      updateModalProduct(product);
    }
  }

  $("modalPrevBtn").addEventListener("click", modalPrevious);
  $("modalNextBtn").addEventListener("click", modalNext);

  // -----------------------------------------
  // 13. MODAL PARALLAX
  // -----------------------------------------

  modalShowcase.addEventListener("mousemove", event => {
    if (window.innerWidth < 760) return;

    const rect = modalShowcase.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - .5) * 20;

    const y =
      ((event.clientY - rect.top) / rect.height - .5) * -20;

    modalProductWrap.style.transform =
      `rotateY(${x}deg) rotateX(${y}deg)`;
  });

  modalShowcase.addEventListener("mouseleave", () => {
    modalProductWrap.style.transform =
      "rotateY(0deg) rotateX(0deg)";
  });

  // -----------------------------------------
  // 14. KEYBOARD NAVIGATION
  // -----------------------------------------

  window.addEventListener("keydown", event => {
    if (event.target.matches("input, textarea, select")) return;

    if (event.key === "Escape" && modalOpen) {
      closeProductModal();
      return;
    }

    if (event.key === "ArrowLeft") {
      modalOpen ? modalPrevious() : previousSlide();
    }

    if (event.key === "ArrowRight") {
      modalOpen ? modalNext() : nextSlide();
    }
  });

  // -----------------------------------------
  // 15. INITIALIZE
  // -----------------------------------------

  if (!allProducts.length) {
    heroTitle.textContent = "Products could not be loaded";

    heroSubtitle.textContent =
      "Please check that product.js is loading correctly.";

    $("emptyState").hidden = false;
    viewport.hidden = true;
    $("inspectActiveBtn").hidden = true;

    return;
  }

  if (!categories.length) {
    heroTitle.textContent = "No matching categories found";

    heroSubtitle.textContent =
      "Please check the product categories in product.js.";

    $("emptyState").hidden = false;
    viewport.hidden = true;
    $("inspectActiveBtn").hidden = true;

    return;
  }

  renderCategories();
  renderCarousel();

})();
