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
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeSidebar();
});

// Copy sidebar content to mobile sidebar


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


  (function () {
    // Browser ki purani scroll position restore na kare
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    let hasScrolled = false;

    function scrollToProducts() {
      if (hasScrolled) return;

      // Agar user khud scroll kar chuka hai to hijack na karein
      if (window.scrollY > 10) { hasScrolled = true; return; }

      // Products JS se inject hote hain — jab tak grid khali hai wait karein
      const grid = document.getElementById('product-grid');
      if (grid && grid.children.length === 0) return;

      const offset = window.innerHeight * 0.30; // viewport ka 25%
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) return;

      window.scrollTo(0, Math.min(offset, maxScroll));
      hasScrolled = true;
    }

    window.addEventListener('load', function () {
      scrollToProducts();

      // Agar products async render ho rahe hain to thori der poll karein
      let tries = 0;
      const iv = setInterval(function () {
        scrollToProducts();
        if (hasScrolled || ++tries > 20) clearInterval(iv);
      }, 100);
    });
  })();
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
  image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_main.webp",
  description: "6oz. 100% cotton tote bag with natural body and color handles.",
  popular: false
},
{
  id: "is100",
  name: "Mesh Pocket Drawstring Backpack",
  code: "IS100",
  slug: "mesh-pocket-drawstring-backpack",
  category: "Drawstring Bags",
  material: "210D Polyester",
  size: '14"W x 16.5"H',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/drawstring-bags/IS100/IS100-lime.webp",
  description: "Lightweight 210D polyester drawstring backpack with zippered front pocket and mesh side panels.",
  popular: false
},
{
  id: "is128",
  name: "Showstopping Sparkle Glitter Bag - Large",
  code: "IS128",
  slug: "showstopping-sparkle-glitter-bag-large",
  category: "Non-Woven Bags",
  material: "Non-Woven, Laminated",
  size: '17"W x 13"H x 5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS128/IS128-Silver.webp",
  description: "Laminated 120 GSM glitter bag with full side and bottom gussets.",
  popular: false
},
{
  id: "is132",
  name: "Mesh Beach Bag",
  code: "IS132",
  slug: "mesh-beach-bag",
  category: "Tote Bags",
  material: "Cotton Canvas",
  size: '20"W x 15"H x 5"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS132/IS132-Natural.webp",
  description: "7 oz cotton canvas beach tote with mesh top and bottom gusset.",
  popular: false
},
{
  id: "is134",
  name: "Laminated Gift Tote",
  code: "IS134",
  slug: "laminated-gift-tote",
  category: "Non-Woven Bags",
  material: "Non-Woven, Laminated",
  size: '9"W x 12"H x 4.5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS134/IS134-Black.webp",
  description: "Matte finish 105 GSM laminated non-woven tote with contrasting gussets and X-reinforced handles.",
  popular: false
},
{
  id: "is135",
  name: "Laminated Gift Tote",
  code: "IS135",
  slug: "laminated-gift-tote-large",
  category: "Non-Woven Bags",
  material: "Non-Woven, Laminated",
  size: '16"W x 14"H x 6"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS135/IS135_White-White.webp",
  description: "Matte finish 105 GSM laminated non-woven tote with contrasting gussets and X-reinforced handles.",
  popular: false
},
{
  id: "is121",
  name: "18 oz. Nautical Cotton Canvas Boat Bag",
  code: "IS121",
  slug: "nautical-cotton-canvas-boat-bag",
  category: "Tote Bags",
  material: "100% Cotton Canvas",
  size: '19.75"W x 13.25"H x 7"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS121/IS121-Natural-Black.webp",
  description: "Heavyweight 18 oz cotton canvas boat bag with front pocket and reinforced handles.",
  popular: false
},
{
  id: "is124",
  name: "Lightweight Daytrip Boat Bag",
  code: "IS124",
  slug: "lightweight-daytrip-boat-bag",
  category: "Tote Bags",
  material: "10 oz Cotton Canvas",
  size: '12.25"W x 14.75"H x 5"G',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS124/IS124-Natural-Black.webp",
  description: "10 oz cotton canvas boat bag with contrasting color handles and front pocket.",
  popular: false
},
{
  id: "is125",
  name: "Wrap-It-Up Croc Cinch Bag",
  code: "IS125",
  slug: "wrap-it-up-croc-cinch-bag",
  category: "Non-Woven Bags",
  material: "Non-Woven, Laminated",
  size: '15.5"W x 10"H x 5.5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS125/IS125-Gold.webp",
  description: "Laminated 105 GSM non-woven gift bag with removable bottom insert.",
  popular: false
},
{
  id: "is126",
  name: "Glam Metallic Croc Shopper Bag",
  code: "IS126",
  slug: "glam-metallic-croc-shopper-bag",
  category: "Non-Woven Bags",
  material: "Non-Woven, Laminated",
  size: '14"W x 14"H x 5.5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS126/IS126-Rose Gold.webp",
  description: "105 GSM laminated non-woven shopper tote with metallic croc texture.",
  popular: false
},
{
  id: "is127",
  name: "Showstopping Sparkle Glitter Bag - Small",
  code: "IS127",
  slug: "showstopping-sparkle-glitter-bag-small",
  category: "Non-Woven Bags",
  material: "Non-Woven, Laminated",
  size: '13"W x 11"H x 5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS127/IS127-Silver.webp",
  description: "Laminated 120 GSM glitter bag with full side and bottom gussets.",
  popular: false
},
{
  id: "is16",
  name: "Light Weight Grocery Tote",
  code: "IS16",
  slug: "light-weight-grocery-tote",
  category: "Tote Bags",
  material: "6 oz Cotton Canvas",
  size: '12"W x 13"H x 8"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS16/IS16-Natural.webp",
  description: "6 oz cotton canvas grocery tote with full side and bottom gussets.",
  popular: false
}, {
  id: "is17",
  name: '17" x 9" Contractor Waist Apron (10 oz)',
  code: "IS17",
  slug: "17x9-contractor-waist-apron",
  category: "Aprons",
  material: "Cotton Canvas",
  size: '17"W x 9"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/aprons/IS17/IS17-Natural.webp",
  description: "10 oz cotton canvas contractor waist apron with two front pockets.",
  popular: false
},
{
  id: "is18",
  name: "Canvas Big Tote Bag",
  code: "IS18",
  slug: "canvas-big-tote-bag-is18",
  category: "Tote Bags",
  material: "100% Cotton Canvas",
  size: '17"W x 13"H x 5"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS18/IS18-Natural-Black.webp",
  description: "18 oz cotton canvas two-tone boat bag with front pocket and top snap closure.",
  popular: false
},
{
  id: "is101",
  name: "Two Tone Poly Drawstring Backpack With Zipper",
  code: "IS101",
  slug: "two-tone-poly-drawstring-backpack-with-zipper",
  category: "Drawstring Bags",
  material: "210D Polyester",
  size: '13"W x 16.75"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/drawstring-bags/IS101/IS101-Orange-Black.webp",
  description: "210D polyester two-tone drawstring backpack with angled front zipper pocket and headphone port.",
  popular: false
},
{
  id: "is102",
  name: "Two Tone Drawstring Cinch Bag",
  code: "IS102",
  slug: "two-tone-drawstring-cinch-bag",
  category: "Drawstring Bags",
  material: "Polyester, Non Woven",
  size: '13"W x 16.5"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/drawstring-bags/IS102/IS102-Red-Grey.webp",
  description: "Two-tone polyester drawstring cinch bag with angled front zipper and headphone port.",
  popular: false
},
{
  id: "is104",
  name: "Modern Affordable Contrasting Sports Pack",
  code: "IS104",
  slug: "modern-affordable-contrasting-sports-pack",
  category: "Drawstring Bags",
  material: "210D Polyester",
  size: '14"W x 17.75"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/drawstring-bags/IS104/IS104-Red-Black.webp",
  description: "210D polyester drawstring sports pack with headphone port and front zipper pocket.",
  popular: false
},
{
  id: "is105",
  name: "Nylon Backpack",
  code: "IS105",
  slug: "nylon-backpack",
  category: "Non-Woven Bags",
  material: "210D Polyester",
  size: '12"W x 16.5"H x 5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS105/IS105-Royal Blue.webp",
  description: "210D polyester backpack with adjustable web straps, front zipper pocket, and side mesh pocket.",
  popular: false
},
{
  id: "is106",
  name: "Value Duffle Bag",
  code: "IS106",
  slug: "value-duffle-bag",
  category: "Non-Woven Bags",
  material: "210D Polyester",
  size: '18"W x 10"H x 10"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS106/IS106-Black.webp",
  description: "210D polyester duffle bag with adjustable shoulder strap and web handles.",
  popular: false
},
{
  id: "is107",
  name: "Large Insulated Cooler Bag",
  code: "IS107",
  slug: "large-insulated-cooler-bag",
  category: "Non-Woven Bags",
  material: "210D Polyester",
  size: '8"W x 10.75"H x 5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS107/IS107-Red.webp",
  description: "210D polyester insulated cooler bag with PEVA lining. Holds 12 cans.",
  popular: false
},
{
  id: "is108",
  name: "Round Insulated Cooler Bag",
  code: "IS108",
  slug: "round-insulated-cooler-bag",
  category: "Non-Woven Bags",
  material: "210D Polyester",
  size: '8"W x 6"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS108/IS108-Green.webp",
  description: "Round 210D polyester cooler bag with foil lining. Holds 6 cans.",
  popular: false
},
{
  id: "is123",
  name: "The Overnight Duffle Bag",
  code: "IS123",
  slug: "the-overnight-duffle-bag",
  category: "Tote Bags",
  material: "5 oz Cotton Canvas",
  size: '17.75"W x 9.75"H',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS123/IS123-Black.webp",
  description: "5 oz cotton canvas duffle with detachable/adjustable shoulder strap and cotton web handles.",
  popular: false
},
{
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
},

{
  id: "is67",
  name: "Jumbo Heavy Duty Grocery Bag",
  code: "IS67",
  slug: "jumbo-heavy-duty-grocery-bag-is67",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '13"W x 15"H x 10"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS67/IS67-hunter green.webp",
  description: "100 gsm non-woven heavy duty grocery bag with 22-inch reinforced handles and full gussets.",
  popular: false
},
{
  id: "is70",
  name: "6 Bottle Wine Non Woven Tote Bag",
  code: "IS70",
  slug: "6-bottle-wine-non-woven-tote-bag",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '11"W x 10"H x 7"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS70/IS70-Khaki.webp",
  description: "100 GSM non-woven 6-bottle wine tote with dividers and poly board bottom insert.",
  popular: false
},
{
  id: "is71",
  name: "Single Bottle Non Woven Wine Tote",
  code: "IS71",
  slug: "single-bottle-non-woven-wine-tote",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '5"W x 13"H x 4"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS71/IS71-Burgundy.webp",
  description: "90 gsm recycled non-woven single bottle wine tote with matching rope handles.",
  popular: false
},
{
  id: "is68",
  name: "Foldable Tote",
  code: "IS68",
  slug: "foldable-tote-is68",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '14.75"W x 14.75"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS68/IS68-hunter green.webp",
  description: "80 GSM non-woven foldable tote with snap closure and front document pocket.",
  popular: false
},

{
  id: "iwb203",
  name: "Drawstring Wine Bag",
  code: "IWB203",
  slug: "drawstring-wine-bag",
  category: "Bottle Bags",
  material: "100% Cotton Canvas",
  size: '6.25"W x 13"H',
  price: 30.00,
  originalPrice: 45.00,
  image: 'assets/assets/images/products/drawstring-bags/IWB203/IWB203_natural.webp',
  description: "Drawstring wine bag made from 7 oz 100% cotton canvas."
},
{
  id: "sbw1611",
  name: "Cotton Shoe Bag",
  code: "SBW1611",
  slug: "cotton-shoe-bag",
  category: "Shoe Bags",
  material: "100% Cotton",
  size: '11.5"W x 15.5"H',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/shoe-bags/SBW1611/SBW1611_main.webp",
  description: "Cotton shoe bag made from 7oz 100% cotton with no bottom or side gusset."
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
},
{
  id: "is56",
  name: "Non-Woven Convention Bag",
  code: "IS56",
  slug: "non-woven-convention-bag-is56",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '15"W x 16"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS56/IS56-main.webp",
  description: "80 gsm non-woven convention swag bag with 26-inch shoulder strap. Available in 12 colors.",
  popular: false
},
{
  id: "is57",
  name: "Non-Woven Grocery Bag",
  code: "IS57",
  slug: "non-woven-grocery-bag-is57",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '12.5"W x 13.5"H x 8.5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS57/IS57-royal.webp",
  description: "80 gsm non-woven grocery bag with 22-inch reinforced handles and full gussets.",
  popular: false
},
{
  id: "ids9103",
  name: "Economical Sports Nylon Backpack",
  code: "IDS9103",
  slug: "economical-sports-nylon-backpack",
  category: "Non-Woven Bags",
  material: "Polyester",
  size: '14"W x 18"H',
  imprint: '8"W x 9"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IDS9103/IDS9103_main.webp",
  description: "Economical sports nylon backpack made from 210D polyester."
},
{
  id: "ids135200",
  name: "Polyester Drawstring Backpack",
  code: "IDS135200",
  slug: "polyester-drawstring-backpack",
  category: "Non-Woven Bags",
  material: "Polyester",
  size: '15"W x 18.75"H',
  imprint: '6.5"W x 8.5"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IDS135200/IDS135200_main.webp",
  description: "Polyester drawstring backpack made from 210D polyester."
},
{
  id: "is77",
  name: "Insulated Grocery Bag",
  code: "IS77",
  slug: "insulated-grocery-bag-is77",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '13"W x 15"H x 9"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS77/IS77-main.webp",
  description: "235 GSM non-woven insulated grocery bag with thermal foil lining and front pocket.",
  popular: false
},


{
  id: "is73",
  name: "Laminated Tote",
  code: "IS73",
  slug: "laminated-tote-is73",
  category: "Non-Woven Bags",
  material: "Non-Woven, Laminated",
  size: '15.75"W x 12.5"H x 6.25"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS73/IS73-main.webp",
  description: "110 GSM recycled laminated non-woven tote with patent finish and full gussets.",
  popular: false
},
{
  id: "is74",
  name: "Laminated Tote",
  code: "IS74",
  slug: "laminated-tote-is74",
  category: "Non-Woven Bags",
  material: "Non-Woven Polypropylene, Laminated",
  size: '12.75"W x 15.75"H x 4.75"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS74/IS74-main.webp",
  description: "110 GSM recycled laminated non-woven tote with patent finish and full gussets.",
  popular: false
},


{
  id: "is66",
  name: "Non Woven Laundry Bag",
  code: "IS66",
  slug: "non-woven-laundry-bag-is66",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '18"W x 24"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS66/IS66-main.webp",
  description: "80 GSM non-woven laundry bag with drawstring closure and front pocket.",
  popular: false
},
{
  id: "is62",
  name: "Non Woven Shopper",
  code: "IS62",
  slug: "non-woven-shopper-is62",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '16"W x 12"H x 6"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS62/IS62-main.webp",
  description: "80 gsm reusable non-woven shopping bag with side and bottom gussets.",
  popular: false
},
{
  id: "is64",
  name: "Small Shopper Bag",
  code: "IS64",
  slug: "small-shopper-bag-is64",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '10"W x 12"H x 3"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS64/IS64-Black.webp",
  description: "80 gsm non-woven shopper bag with full side and bottom gussets.",
  popular: false
},
{
  id: "is65",
  name: "Mini Tote Bag",
  code: "IS65",
  slug: "mini-tote-bag-is65",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '6"W x 6"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS65/IS65-Yellow.webp",
  description: "80 gsm non-woven mini tote bag with 10.5-inch handles.",
  popular: false
},
{
  id: "is83",
  name: "Newspaper Bag",
  code: "IS83",
  slug: "newspaper-bag-is83",
  category: "Non-Woven Bags",
  material: "80 GSM Non-Woven Fabric",
  size: '12"W x 14.5"H x 2.5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS83/IS83-black.webp",
  description: "80 GSM non-woven newspaper bag with grommeted rope handles and bottom loops.",
  popular: false
},
{
  id: "is83b",
  name: "Solid Bottom Newspaper Bag",
  code: "IS83B",
  slug: "solid-bottom-newspaper-bag",
  category: "Non-Woven Bags",
  material: "80 GSM Non-Woven Fabric",
  size: '12"W x 14.5"H x 2.5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS83B/IS83B-Burgundy.webp",
  description: "80 GSM non-woven newspaper bag with solid bottom and grommeted rope handles.",
  popular: false
},
{
  id: "is85",
  name: "Zippered Non Woven Tote Bag",
  code: "IS85",
  slug: "zippered-non-woven-tote-bag",
  category: "Non-Woven Bags",
  material: "100 GSM Non-Woven Fabric",
  size: '20"W x 15"H x 5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS85/IS85-Red.webp",
  description: "100 GSM non-woven zippered tote bag with 19.5-inch self handles and top zipper closure.",
  popular: false
},
{
  id: "is88",
  name: "Shopper Tote",
  code: "IS88",
  slug: "shopper-tote",
  category: "Non-Woven Bags",
  material: "80 GSM Non-Woven Fabric",
  size: '20"W x 13"H x 8"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS88/IS88-Heather Green.webp",
  description: "80 GSM non-woven shopper tote with bottom gusset and interior sidewall pockets.",
  popular: false
},
{
  id: "is90",
  name: "Non Woven 6 Can Cooler",
  code: "IS90",
  slug: "non-woven-6-can-cooler",
  category: "Non-Woven Bags",
  material: "80 GSM Non-Woven Fabric",
  size: '8"W x 6"H x 5.5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS90/IS90-Lime Green.webp",
  description: "80 GSM non-woven 6 can cooler with thermal foil lining, zippered closure, and front pocket.",
  popular: false
},
{
  id: "is91",
  name: "Non Woven Lunch Pack",
  code: "IS91",
  slug: "non-woven-lunch-pack",
  category: "Non-Woven Bags",
  material: "80 GSM Non-Woven Fabric",
  size: '7"W x 10"H x 4.5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS91/IS91-Orange.webp",
  description: "80 GSM non-woven lunch pack with thermal foil lining, Velcro closure, and front pocket.",
  popular: false
},
{
    id: "is99",
    name: "Tote Cooler Bag",
    code: "IS99",
    slug: "tote-cooler-bag",
    category: "Non-Woven Bags",
    material: "80 GSM Non-Woven Fabric",
    size: '13"W x 11"H x 5"D',
    price: 35.00,
    originalPrice: 50.00,
    image: "assets/assets/images/products/non-woven/IS99/IS99-Black-Heather Grey-Grey.webp",
    description: "80 GSM non-woven tote cooler bag with foil-laminated PE foam insulation and zippered main compartment.",
    popular: false
},
{
    id: "is69",
    name: "Water Repellent Drawstring Backpack",
    code: "IS69",
    slug: "water-repellent-drawstring-backpack",
    category: "Non-Woven Bags",
    material: "80 GSM Non-Woven Fabric",
    size: '16"W x 18"H',
    price: 35.00,
    originalPrice: 50.00,
    image: "assets/assets/images/products/non-woven/IS69/IS69-Yellow.webp",
    description: "80 GSM water repellent non-woven drawstring backpack with cinch closure and rope cord.",
    popular: false
},
{
    id: "is103",
    name: "Economical Polyester Sports Pack",
    code: "IS103",
    slug: "economical-polyester-sports-pack",
    category: "Non-Woven Bags",
    material: "210D Polyester",
    size: '14"W x 18"H',
    price: 35.00,
    originalPrice: 50.00,
    image: "assets/assets/images/products/non-woven/IS103/IS103-Teal.webp",
    description: "210D polyester drawstring sports pack with faux-leather reinforced corners.",
    popular: false
},
{
    id: "is61",
    name: "Jumbo Shopper Bag",
    code: "IS61",
    slug: "jumbo-shopper-bag",
    category: "Non-Woven Bags",
    material: "Non-Woven Fabric",
    size: '20"W x 16"H x 6"D',
    price: 35.00,
    originalPrice: 50.00,
    image: "assets/assets/images/products/non-woven/IS61/IS61-Red.webp",
    description: "80 gsm jumbo non-woven shopper bag with full side and bottom gussets.",
    popular: false
},
{
  id: "is109",
  name: "Drawstring Bag",
  code: "IS109",
  slug: "drawstring-bag-is109",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '13"W x 16.3"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS109/IS109-Heather Grey-Black.webp",
  description: "80 GSM non-woven drawstring bag with reinforced corners and metal grommets.",
  popular: false
},
{
  id: "is110",
  name: "RPET Drawstring Bag",
  code: "IS110",
  slug: "rpet-drawstring-bag",
  category: "Non-Woven Bags",
  material: "RPET",
  size: '13"W x 16.5"H',
  price: 35.00, // ← Blank price confirm kar
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS110/IS110-Grey.webp",
  description: "600D RPET drawstring bag with PU coating and rope cord closure.",
  popular: false
},
{
  id: "is76",
  name: "Econo Convention Tote",
  code: "IS76",
  slug: "econo-convention-tote-is76",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '15"W x 16"H x 1.5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS76/IS76-main.webp",
  description: "80 gsm non-woven convention tote with heat-sealed diecut handles.",
  popular: false
},
{
  id: "is11",
  name: "Book/Tote Bag",
  code: "IS11",
  slug: "book-tote-bag-is11",
  category: "Tote Bags",
  material: "12 oz Cotton Canvas",
  size: '11"W x 14"H x 5"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS11/IS11-Natural.webp",
  description: "12 oz cotton canvas book tote bag with full side and bottom gusset and shoulder strap.",
  popular: false
},
{
  id: "is12",
  name: "Trendy Rope Handle Tote Bag",
  code: "IS12",
  slug: "trendy-rope-handle-tote-bag",
  category: "Tote Bags",
  material: "14 oz Cotton Canvas",
  size: '16.5"W x 13.5"H x 4.75"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS12/IS12-Natural.webp",
  description: "14 oz cotton canvas tote with heavy cotton rope handles, top zipper, and inside pocket.",
  popular: false
},
{
  id: "is122",
  name: "Cotton Canvas Grocery Bag With Colored Handles",
  code: "IS122",
  slug: "cotton-canvas-grocery-bag-colored-handles",
  category: "Tote Bags",
  material: "7 oz Cotton Canvas",
  size: '10"W x 14"H x 5"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS122/IS122-Natural-Black.webp",
  description: "7 oz cotton canvas grocery bag with colored cotton web handles and full gussets.",
  popular: false
},
{
  id: "is130",
  name: "Cosmetic Pouch",
  code: "IS130",
  slug: "cosmetic-pouch",
  category: "Tote Bags",
  material: "10 oz Cotton Canvas",
  size: '9"W x 5.5"H x 0.75"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS130/IS130-Natural.webp",
  description: "10 oz cotton canvas cosmetic pouch with matching top zipper closure.",
  popular: false
},
{
  id: "is131",
  name: "Lightweight Convention Tote Bag",
  code: "IS131",
  slug: "lightweight-convention-tote-bag",
  category: "Tote Bags",
  material: "4 oz Cotton Canvas",
  size: '15"W x 16"H',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS131/IS131-Lime Green.webp",
  description: "Lightweight 4 oz cotton canvas convention tote with 24-inch self handles.",
  popular: false
},
{
  id: "is133",
  name: "Stylish Two Tone Tote Bag",
  code: "IS133",
  slug: "stylish-two-tone-tote-bag",
  category: "Tote Bags",
  material: "12 oz Cotton Canvas",
  size: '16"W x 14.5"H x 4"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS133/IS133-Natural-Green.webp",
  description: "12 oz cotton canvas striped boat bag with self colored handles and bottom gusset.",
  popular: false
},
{
  id: "is136",
  name: "Crossbody Pouch",
  code: "IS136",
  slug: "crossbody-pouch",
  category: "Non-Woven Bags",
  material: "230D Polyester",
  size: '7.75"W x 5.5"H x 2"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS136/IS136-Pink.webp",
  description: "230D polyester crossbody pouch with adjustable web belt and zippered pockets.",
  popular: false
},
{
  id: "is137",
  name: "Budget Backpack",
  code: "IS137",
  slug: "budget-backpack",
  category: "Non-Woven Bags",
  material: "600D/210D Polyester",
  size: '9.45"W x 15.75"H x 6.3"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS137/IS137-Turquoise.webp",
  description: "600D/210D polyester budget backpack with padded shoulder straps and front zipper pocket.",
  popular: false
},
{
  id: "is138",
  name: "Grande Canvas Tote",
  code: "IS138",
  slug: "grande-canvas-tote",
  category: "Tote Bags",
  material: "10 oz Cotton Canvas",
  size: '27"W x 16"H x 8"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS138/IS138-Grey.webp",
  description: "Oversized 10 oz cotton canvas tote with bottom gusset and cotton web handles.",
  popular: false
},
{
  id: "is139",
  name: "Yacht Club Tote (SM)",
  code: "IS139",
  slug: "yacht-club-tote-sm",
  category: "Tote Bags",
  material: "24 oz Cotton Canvas",
  size: '15"W x 12"H x 5"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS139/IS139-Natural-Black.webp",
  description: "24 oz cotton canvas yacht club tote with contrasting handles and front pocket.",
  popular: false
},
{
  id: "is140",
  name: "Yacht Club Tote (Md)",
  code: "IS140",
  slug: "yacht-club-tote-md",
  category: "Tote Bags",
  material: "24 oz Cotton Canvas",
  size: '20.5"W x 13"H x 6.7"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS140/IS140-Natural-Black.webp",
  description: "24 oz cotton canvas yacht club tote with contrasting handles and front pocket.",
  popular: false
},
{
  id: "is141",
  name: "Yacht Club Tote (Lg)",
  code: "IS141",
  slug: "yacht-club-tote-lg",
  category: "Tote Bags",
  material: "24 oz Cotton Canvas",
  size: '24"W x 14.17"H x 6.7"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS141/IS141-Natural-Red.webp",
  description: "24 oz cotton canvas yacht club tote with contrasting handles, front pocket, and top zipper.",
  popular: false
},
{
  id: "is142",
  name: "Commander Tote",
  code: "IS142",
  slug: "commander-tote",
  category: "Tote Bags",
  material: "24 oz Cotton Canvas",
  size: '24"W x 14.17"H x 6.7"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS142/IS142-Navy Blue-Red-White.webp",
  description: "24 oz cotton canvas commander tote with contrasting bottom, striped handles, and top zipper.",
  popular: false
},
{
  id: "is143",
  name: "Admiral Tote (Md)",
  code: "IS143",
  slug: "admiral-tote-md",
  category: "Tote Bags",
  material: "24 oz Cotton Canvas",
  size: '20.5"W x 13"H x 6.7"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS143/IS143-Natural.webp",
  description: "24 oz cotton canvas admiral tote with front pocket and bottom gusset.",
  popular: false
},
{
  id: "is144",
  name: "Admiral Tote (Lg)",
  code: "IS144",
  slug: "admiral-tote-lg",
  category: "Tote Bags",
  material: "24 oz Cotton Canvas",
  size: '24"W x 14"H x 6.7"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS144/IS144-Natural.webp",
  description: "24 oz cotton canvas admiral tote with front pocket and top zippered closure.",
  popular: false
},
{
  id: "is145",
  name: "Anchor Tote",
  code: "IS145",
  slug: "anchor-tote",
  category: "Tote Bags",
  material: "18 oz Cotton Canvas",
  size: '24"W x 14"H x 6.7"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS145/IS145-Natural-Black.webp",
  description: "18 oz cotton canvas anchor tote with front pocket and top zippered closure.",
  popular: false
},
{
  id: "is146",
  name: "Sailing Tote",
  code: "IS146",
  slug: "sailing-tote",
  category: "Tote Bags",
  material: "16 oz Cotton Canvas",
  size: '18"W x 13"H x 6.6"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS146/IS146-Natural-Black.webp",
  description: "16 oz cotton canvas sailing tote with rope handles and rust-free metal rings.",
  popular: false
},
{
  id: "is147",
  name: "Classic Leather Handle Tote",
  code: "IS147",
  slug: "classic-leather-handle-tote",
  category: "Tote Bags",
  material: "18 oz Cotton Canvas",
  size: '15.75"W x 12"H x 4.5"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS147/IS147-Natural-Grey.webp",
  description: "18 oz cotton canvas classic tote with vegan leather handles and metal rivets.",
  popular: false
},
{
  id: "is148",
  name: "Large Classic Leather Handle Tote",
  code: "IS148",
  slug: "large-classic-leather-handle-tote",
  category: "Tote Bags",
  material: "18 oz Cotton Canvas",
  size: '20.5"W x 13"H x 6.7"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS148/IS148-Natural-Black.webp",
  description: "18 oz cotton canvas large tote with vegan leather handles and metal rivets.",
  popular: false
},
{
  id: "is149",
  name: "Premium Canvas Tote",
  code: "IS149",
  slug: "premium-canvas-tote",
  category: "Tote Bags",
  material: "24 oz Cotton Canvas",
  size: '28"W x 15"H x 9.5"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS149/IS149-Natural-Navy Blue.webp",
  description: "24 oz cotton canvas premium tote with top zipper and inside snap pocket.",
  popular: false
},

{
  id: "is14",
  name: "Tote Bag With Contrasting Web Handles",
  code: "IS14",
  slug: "tote-bag-contrasting-web-handles",
  category: "Tote Bags",
  material: "10 oz Cotton Canvas",
  size: '14"W x 14"H',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS14/IS14-Natural-Hunter Green.webp",
  description: "10 oz natural cotton canvas tote with contrasting colored poly web handles.",
  popular: false
},
{
  id: "is15",
  name: "Tote Bag With Contrasting Web Handles",
  code: "IS15",
  slug: "tote-bag-contrasting-web-handles-is15",
  category: "Tote Bags",
  material: "12 oz Cotton Canvas",
  size: '15"W x 16"H x 4"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS15/IS15-Natural-Black.webp",
  description: "12 oz natural cotton canvas tote with contrasting colored poly web handles.",
  popular: false
},
{
  id: "is150",
  name: "Island Tote",
  code: "IS150",
  slug: "island-tote",
  category: "Tote Bags",
  material: "14 oz Cotton Canvas",
  size: '21"W x 13"H x 6"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS150/IS150-Natural-Black.webp",
  description: "14 oz cotton canvas island tote with inside snap pocket and bottom gusset.",
  popular: false
},
{
  id: "is151",
  name: "Cosmetic Pouch",
  code: "IS151",
  slug: "cosmetic-pouch-is151",
  category: "Tote Bags",
  material: "12 oz Cotton Canvas",
  size: '11"W x 7"H x 3"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS151/IS151-Natural-Red.webp",
  description: "12 oz cotton canvas cosmetic pouch with top zip closure and accent color bottom.",
  popular: false
},
{
  id: "is152",
  name: "Admiral Tote (Sm)",
  code: "IS152",
  slug: "admiral-tote-sm",
  category: "Tote Bags",
  material: "24 oz Cotton Canvas",
  size: '15"W x 12"H x 4.75"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS152/IS152-Navy Blue.webp",
  description: "24 oz cotton canvas admiral tote with front pocket and bottom gusset.",
  popular: false
},
{
  id: "is153",
  name: "Greenwich Tote",
  code: "IS153",
  slug: "greenwich-tote",
  category: "Tote Bags",
  material: "16 oz Cotton Canvas",
  size: '19"W x 12"H x 8"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS153/IS153-Natural-Navy Blue.webp",
  description: "16 oz cotton canvas Greenwich tote with accent color straps, trim, and interior pocket.",
  popular: false
},
{
  id: "is154",
  name: "Fringe Tote",
  code: "IS154",
  slug: "fringe-tote",
  category: "Tote Bags",
  material: "16 oz Cotton Canvas",
  size: '14"W x 12"H x 7"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS154/IS154-Natural.webp",
  description: "16 oz cotton canvas fringe tote with stylish fringe detailing.",
  popular: false
},
{
  id: "is160",
  name: "Canvas Shopper Bag",
  code: "IS160",
  slug: "canvas-shopper-bag",
  category: "Tote Bags",
  material: "5 oz Cotton Canvas",
  size: '16"W x 15"H',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS160/IS160-Natural.webp",
  description: "5 oz cotton canvas foldable shopper bag with 20-inch self handles.",
  popular: false
},

{
  id: "is111",
  name: "Non Woven Boat Tote",
  code: "IS111",
  slug: "non-woven-boat-tote",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '18"W x 15"H x 6"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS111/IS111-Teal.webp",
  description: "80 GSM non-woven boat tote with accent color bottom and straps, front pocket.",
  popular: false
},
{
  id: "is162",
  name: "Tote Bag",
  code: "IS162",
  slug: "tote-bag-is162",
  category: "Tote Bags",
  material: "Non-Woven Fabric",
  size: '15"W x 13"H x 4"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS162/IS162-Black-Heather Blue.webp",
  description: "80 GSM non-woven tote bag with outside front pocket and side mesh pocket.",
  popular: false
},
{
  id: "is164",
  name: "Tote Bag",
  code: "IS164",
  slug: "tote-bag-is164",
  category: "Tote Bags",
  material: "Non-Woven Fabric",
  size: '10"W x 12"H x 4.25"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS164/IS164-Black-Heather Blue.webp",
  description: "80 GSM non-woven tote bag with full side and bottom gussets and 18-inch self handles.",
  popular: false
},
{
  id: "is167",
  name: "Shopping Bag",
  code: "IS167",
  slug: "shopping-bag-is167",
  category: "Tote Bags",
  material: "Non-Woven Fabric",
  size: '13"W x 15"H x 10"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS167/IS167-Black-Heather Green.webp",
  description: "80 GSM non-woven shopping bag with reinforced handles and covered cardboard bottom insert.",
  popular: false
},
{
  id: "is181",
  name: "Pouch",
  code: "IS181",
  slug: "pouch-is181",
  category: "Non-Woven Bags",
  material: "Polyester / Non-Woven",
  size: '9.75"W x 7"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS181/IS181-Black-Heather Blue.webp",
  description: "300D/80 GSM polyester non-woven pouch with 2 zippered compartments and pen loop.",
  popular: false
},
{
  id: "is182",
  name: "Coin Pouch",
  code: "IS182",
  slug: "coin-pouch",
  category: "Non-Woven Bags",
  material: "300D Polyester",
  size: '3.75"W x 4"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS182/IS182-Heather Grey-Black.webp",
  description: "300D polyester coin pouch with colored zipper, finger loop, and metal split ring.",
  popular: false
},
{
  id: "is183",
  name: "Tech Travel Pouch",
  code: "IS183",
  slug: "tech-travel-pouch",
  category: "Non-Woven Bags",
  material: "600D RPET",
  size: '9"W x 5"H x 2"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS183/IS183-Black.jpg",
  description: "600D RPET zippered tech travel pouch for charging cords and accessories.",
  popular: false
},
{
  id: "is214",
  name: "Hard Top Cooler",
  code: "IS214",
  slug: "hard-top-cooler",
  category: "Non-Woven Bags",
  material: "600D Ripstop Polyester",
  size: '16"W x 11"H x 11.5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS214/IS214-Black.webp",
  description: "600D ripstop polyester hard top cooler with PEVA lining. Holds 48 cans.",
  popular: false
},
{
  id: "is221",
  name: "Jumbo Cooler Tote Bag",
  code: "IS221",
  slug: "jumbo-cooler-tote-bag",
  category: "Tote Bags",
  material: "600D Polyester",
  size: '22"W x 16"H x 7.5"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS221/IS221-Grey-Black.webp",
  description: "600D polyester jumbo cooler tote with PEVA heat-sealed lining. Holds 38 cans.",
  popular: false
},

{
  id: "is112",
  name: "Non Woven Apron",
  code: "IS112",
  slug: "non-woven-apron",
  category: "Aprons",
  material: "Non-Woven Polypropylene",
  size: '30"W x 24"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS112/IS112-Hunter Green.webp",
  description: "80 GSM non-woven apron with neck strap, adjustable waist ties, and two front pockets.",
  popular: false
},
{
  id: "is115",
  name: "Economy Backpack",
  code: "IS115",
  slug: "economy-backpack",
  category: "Non-Woven Bags",
  material: "600D Polyester",
  size: '11.8"W x 16.75"H x 4.13"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS115/IS115-Black.webp",
  description: "600D polyester economy backpack with padded shoulder straps and front zipper pocket.",
  popular: false
},

{
  id: "is116",
  name: "Sling Bag",
  code: "IS116",
  slug: "sling-bag",
  category: "Non-Woven Bags",
  material: "900D Skin Film Polyester",
  size: '7"W x 12"H x 2"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS116/IS116-Beige.webp",
  description: "900D skin film polyester sling bag with adjustable 20-37 inch strap.",
  popular: false
},
{
  id: "is117",
  name: "Laptop Backpack",
  code: "IS117",
  slug: "laptop-backpack",
  category: "Non-Woven Bags",
  material: "600D Polyester / 300D Nylon",
  size: '11.25"W x 17"H x 4.25"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS117/IS117-Burgundy.webp",
  description: "600D polyester and 300D nylon laptop backpack with 15-inch sleeve and mesh side pockets.",
  popular: false
},
{
  id: "is118",
  name: "Roll Top Backpack",
  code: "IS118",
  slug: "roll-top-backpack",
  category: "Non-Woven Bags",
  material: "PU Vegan Leather",
  size: 'Rolled: 11"W x 20"H x 5"D / Unrolled: 17"W x 24"H x 5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS118/IS118-Black.webp",
  description: "PU vegan leather roll top backpack with adjustable rolled or unrolled capacity.",
  popular: false
},
{
  id: "is119",
  name: "Document Bag",
  code: "IS119",
  slug: "document-bag",
  category: "Tote Bags",
  material: "12 oz Cotton Canvas",
  size: '17"W x 11"H x 3"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS119/IS119-Natural-Black.webp",
  description: "12 oz cotton canvas document bag with black cotton web handles.",
  popular: false
},
{
  id: "ib600",
  name: "Canvas Jumbo Tote w/ Bottom Gusset",
  code: "IB600",
  slug: "canvas-jumbo-tote-w-bottom-gusset",
  category: "Tote Bags",
  material: "100% Cotton Canvas",
  size: '20"W x 15"H x 5"D',
  price: 30.00,
  originalPrice: 45.00,

  image: "assets/assets/images/products/tote-bags/IB600/IB600_main.webp",
  description: "Canvas jumbo tote bag with a bottom gusset, made from 100% cotton canvas.",
  popular: true
},
{
  id: "ids969",
  name: "Non Woven Drawstring Backpack",
  code: "IDS969",
  slug: "non-woven-drawstring-backpack",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '16"W x 18"H',
  price: 35.00,
  originalPrice: 50.00,

  image: "assets/assets/images/products/non-woven/IDS969/IDS969_kelly.webp",
  description: "Water repellent drawstring backpack made from 80 GSM non-woven polypropylene. Features a cinch closure with rope cord handles.",
  popular: false
},
{
  id: "ib1000",
  name: "Canvas Gusset Shopping Tote Bag",
  code: "IB1000",
  slug: "canvas-gusset-shopping-tote-bag",
  category: "Tote Bags",
  material: "100% Cotton Canvas",
  size: '10.5"W x 14"H x 5"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IB1000/IB1000_main.webp",
  description: "Canvas shopping tote bag with bottom and side gussets, made from 100% cotton canvas."
}, {
  id: "mibl",
  name: "Light Canvas Tote",
  code: "MIBL",
  slug: "light-canvas-tote",
  category: "Tote Bags",
  material: "Canvas",
  size: '15"W x 16"H',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/MIBL/MIBL_natural.webp",
  description: "Light canvas tote with a simple, lightweight design. Ideal for promotional use, events, and giveaways."
},
{
  id: "mib",
  name: "Cotton Canvas Tote",
  code: "MIB",
  slug: "cotton-canvas-tote",
  category: "Tote Bags",
  material: "100% Cotton",
  size: '15"W x 16"H',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/MIB/MIB_natural.webp",
  description: "Cotton canvas tote with a lightweight 7oz construction and 22\" handles."
},
{
  id: "mqibg",
  name: "Cotton Tote Bag with Bottom Gusset",
  code: "MQIBG",
  slug: "cotton-tote-bag-with-bottom-gusset",
  category: "Tote Bags",
  material: "100% Cotton",
  size: '15"W x 16"H x 3"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_main.webp",
  description: "Cotton tote bag with a 3-inch bottom gusset, made from 100% cotton."
},
{
  id: "ids125700",
  name: "Canvas Sports Backpack",
  code: "IDS125700",
  slug: "canvas-sports-backpack",
  category: "Tote Bags",
  material: "100% Cotton Canvas",
  size: '14"W x 18"H x 2"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IDS125700/IDS125700_natural.webp",
  description: "Canvas sports backpack made from 12 oz 100% cotton canvas with a bottom gusset."
},
{
  id: "ids4500",
  name: "Cotton Sports Pack",
  code: "IDS4500",
  slug: "cotton-sports-pack",
  category: "Tote Bags",
  material: "100% Cotton",
  size: '14"W x 18"H',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_natural.webp",
  description: "Cotton sports pack made from 6 oz 100% cotton with no bottom or side gusset."
},
{
  id: "ib1113",
  name: "11 X 13 Canvas Tote Bag",
  code: "IB1113",
  slug: "11-x-13-canvas-tote-bag",
  category: "Tote Bags",
  material: "100% Cotton Canvas",
  size: '11.5"W x 13"H x 1.5"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IB1113/IB1113_main.webp",
  description: "11 X 13 canvas tote bag made from 100% cotton canvas with a bottom gusset."
},
{
  id: "ib4400",
  name: "Cotton Canvas Tote with Color Handles",
  code: "IB4400",
  slug: "cotton-canvas-tote-with-color-handles",
  category: "Tote Bags",
  material: "100% Cotton",
  size: '15"W x 15"H x 3"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IB4400/IB4400_main.webp",
  description: "Cotton canvas tote with color handles and a bottom gusset."
},

{
  id: "ib125200",
  name: "Canvas Book Bag Gusset",
  code: "IB125200",
  slug: "canvas-book-bag-gusset",
  category: "Tote Bags",
  material: "100% Cotton Canvas",
  size: '10"W x 12"H x 3"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IB125200/IB125200_main.webp",
  description: "Canvas book bag with a 3-inch bottom gusset, made from 100% cotton canvas."
},
{
  id: "ib750",
  name: "Canvas Gusset Tote Bag",
  code: "IB750",
  slug: "canvas-gusset-tote-bag",
  category: "Tote Bags",
  material: "100% Cotton Canvas",
  size: '15"W x 12"H x 4"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IB750/IB750_main.webp",
  description: "Canvas gusset tote bag made from 12oz 100% cotton canvas with bottom and side gussets."
},
{
  id: "ib1200",
  name: "Canvas Big Tote Bag with Velcro Closure",
  code: "IB1200",
  slug: "canvas-big-tote-bag-with-velcro-closure",
  category: "Tote Bags",
  material: "100% Cotton Canvas",
  size: '23"W x 17"H x 6"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IB1200/IB1200_main.webp",
  description: "Large canvas tote bag with a Velcro closure, made from 12oz 100% cotton canvas with a bottom gusset."
},

{
  id: "ib125300",
  name: "Cotton Canvas Gusset Tote",
  code: "IB125300",
  slug: "cotton-canvas-gusset-tote",
  category: "Tote Bags",
  material: "100% Cotton Canvas",
  size: '14"W x 15"H x 4"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IB125300/IB125300_main.webp",
  description: "Cotton canvas gusset tote made from 12oz 100% cotton canvas with bottom and side gussets."
},
{
  id: "ib125400",
  name: "Canvas Jumbo Shopper Gusset Bag",
  code: "IB125400",
  slug: "canvas-jumbo-shopper-gusset-bag",
  category: "Tote Bags",
  material: "100% Cotton Canvas",
  size: '14"W x 17"H x 7"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IB125400/IB125400_main.webp",
  description: "Canvas jumbo shopper gusset bag made from 12oz 100% cotton canvas with bottom and side gussets."
},
{
  id: "ib1300",
  name: "Canvas Zipper Tote Bag (with Color Handles)",
  code: "IB1300",
  slug: "canvas-zipper-tote-bag-with-color-handles",
  category: "Tote Bags",
  material: "100% Cotton",
  size: '18"W x 14"H x 4.5"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IB1300/IB1300_main.webp",
  description: "Canvas zipper tote bag with color handles, made from 12oz 100% cotton with a bottom gusset."
},

{
  id: "ABW8820",
  name: "Elastic Carry Strap with Black Webbing Handle",
  code: "ABW8820",
  slug: "elastic-carry-strap-black-webbing-handle",
  category: "Blankets",
  material: "100% Polyester / Elastic",
  size: '16" x 12" x 14"',
  price: 1.20,
  originalPrice: 1.20,
  image: "assets/assets/images/products/blankets/IW8820/AB8820-29-Side.webp",
  description: "100% Polyester / Elastic carry strap with black webbing handle. Elastic strap, webbing handle, one size fits most. 16\" x 12\" x 14\". Do not wash or dry."
},
{
  id: "is200",
  name: "Cooler Lunch Box",
  code: "IS200",
  slug: "cooler-lunch-box",
  category: "Non-Woven Bags",
  material: "600D Polyester",
  size: '8.5"W x 10.5"H x 4"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS200/IS200-Royal.webp",
  description: "600D polyester insulated lunch box with aluminum foil lining. Holds 12 cans.",
  popular: false
},
{
  id: "is201",
  name: "Picnic Cooler Bag",
  code: "IS201",
  slug: "picnic-cooler-bag",
  category: "Non-Woven Bags",
  material: "300D Polyester",
  size: '10"W x 8"H x 6"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS201/IS201-Lime Green Heather-Black.webp",
  description: "300D polyestper insulated picnic cooler bag with PEVA lining. Holds 12 cans.",
  popular: false
},
{
  id: "is202",
  name: "Break Time Cooler Lunch Bag",
  code: "IS202",
  slug: "break-time-cooler-lunch-bag",
  category: "Non-Woven Bags",
  material: "600D Polyester",
  size: '9.5"W x 7.5"H x 6.5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS202/IS202-Black Royal.webp",
  description: "600D polyester insulated lunch bag with PEVA lining. Holds 8 cans.",
  popular: false
},
{
  id: "is210",
  name: "Roosevelt Cooler Bag",
  code: "IS210",
  slug: "roosevelt-cooler-bag",
  category: "Non-Woven Bags",
  material: "600D Polyester",
  size: '10"W x 8"H x 7.5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS210/IS210-Grey Black.webp",
  description: "600D polyester insulated cooler bag with PEVA lining. Holds 18 cans.",
  popular: false
},
{
  id: "is211",
  name: "Jefferson Cooler Bag",
  code: "IS211",
  slug: "jefferson-cooler-bag",
  category: "Non-Woven Bags",
  material: "600D Polyester",
  size: '9"W x 11.5"H x 7"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS211/IS211-Red Black.webp",
  description: "600D polyester insulated cooler bag with PEVA lining. Holds 20 cans.",
  popular: false
},
{
  id: "is212",
  name: "Washington Cooler Bag",
  code: "IS212",
  slug: "washington-cooler-bag",
  category: "Non-Woven Bags",
  material: "600D Polyester",
  size: '12.75"W x 9.5"H x 8.5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS212/IS212-Red Black.webp",
  description: "600D polyester insulated cooler bag with PEVA lining. Holds 30 cans.",
  popular: false
},
{
  id: "is213",
  name: "Lincoln Cooler Bag",
  code: "IS213",
  slug: "lincoln-cooler-bag",
  category: "Non-Woven Bags",
  material: "600D Polyester",
  size: '11"W x 13"H x 7.25"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS213/IS213-Grey Black.webp",
  description: "600D polyester insulated cooler bag with PEVA lining. Holds 30 cans.",
  popular: false
},
{
  id: "is22",
  name: "Roll Duffel Bag",
  code: "IS22",
  slug: "roll-duffel-bag",
  category: "Non-Woven Bags",
  material: "600D Polyester",
  size: '18"W x 10"H x 10"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS22/IS22-Black.webp",
  description: "600D polyester duffel bag with front pocket, main zipper, and detachable shoulder strap.",
  popular: false
},
{
  id: "is220",
  name: "Cooler Lunch Tote",
  code: "IS220",
  slug: "cooler-lunch-tote",
  category: "Non-Woven Bags",
  material: "300D/600D Polyester",
  size: '15"W x 9.5"H x 5.75"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS220/IS220-Grey Black.webp",
  description: "Polyester insulated cooler tote bag with PEVA lining. Holds 12 cans.",
  popular: false
},
{
  id: "is230",
  name: "Everest Backpack Cooler",
  code: "IS230",
  slug: "everest-backpack-cooler",
  category: "Non-Woven Bags",
  material: "600D Polyester",
  size: '10.5"W x 14"H x 7.3"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS230/IS230-Black Grey.webp",
  description: "600D polyester backpack cooler with PEVA lining. Holds 24 cans.",
  popular: false
},
{
  id: "is231",
  name: "Essex Backpack Cooler",
  code: "IS231",
  slug: "essex-backpack-cooler",
  category: "Non-Woven Bags",
  material: "600D Poly Canvas",
  size: '10"W x 15"H x 7"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS231/IS231-Charcoal.webp",
  description: "600D poly canvas backpack cooler with PEVA lining. Holds 24 cans.",
  popular: false
},
{
  id: "is232",
  name: "Executive Work/Play Backpack",
  code: "IS232",
  slug: "executive-work-play-backpack",
  category: "Non-Woven Bags",
  material: "600D Poly Canvas",
  size: '12"W x 17.75"H x 5.25"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS232/IS232-Charcoal.webp",
  description: "600D poly canvas 2-in-1 backpack with laptop compartment and insulated cooler base.",
  popular: false
},
{
  id: "is233",
  name: "Hampton Backpack Cooler",
  code: "IS233",
  slug: "hampton-backpack-cooler",
  category: "Non-Woven Bags",
  material: "600D Poly Canvas",
  size: '8.25"W x 12.5"H x 6.25"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS233/IS233-Charcoal.webp",
  description: "600D poly canvas backpack cooler with PEVA lining. Holds 16 cans.",
  popular: false
},
{
  id: "is234",
  name: "Adventure Backpack Cooler",
  code: "IS234",
  slug: "adventure-backpack-cooler",
  category: "Non-Woven Bags",
  material: "600D Polyester",
  size: '9.75"W x 14.75"H x 4.75"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS234/IS234-Charcoal.webp",
  description: "600D polyester backpack cooler with PEVA lining. Holds 16 cans.",
  popular: false
},
{
  id: "is290",
  name: "Polyester 6 Can Cooler",
  code: "IS290",
  slug: "polyester-6-can-cooler",
  category: "Non-Woven Bags",
  material: "210D Polyester",
  size: '8"W x 6"H x 5.5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS290/IS290-purple.webp",
  description: "210D polyester 6-can cooler bag with thermal foil lining and front pocket.",
  popular: false
},
{
  id: "is291",
  name: "Polyester Lunch Pack",
  code: "IS291",
  slug: "polyester-lunch-pack",
  category: "Non-Woven Bags",
  material: "210D Polyester",
  size: '7"W x 10"H x 4.5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS291/IS291-Navy Blue.webp",
  description: "210D polyester lunch pack bag with thermal foil lining and front pocket.",
  popular: false
},
{
  id: "is30",
  name: "Convenient Waterproof Backpack",
  code: "IS30",
  slug: "convenient-waterproof-backpack",
  category: "Non-Woven Bags",
  material: "230D Polyester",
  size: '15"W x 18"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/polyester-bags/IS30/IS30-Burgundy.webp",
  description: "Heavyweight 230D coated waterproof backpack with drawstring closure.",
  popular: false
},
{
  id: "is398",
  name: "Reversible Laptop Sleeve",
  code: "IS398",
  slug: "reversible-laptop-sleeve",
  category: "Non-Woven Bags",
  material: "Neoprene",
  size: '15"W x 11"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS398/IS398-Red.webp",
  description: "Reversible neoprene laptop sleeve that stretches to fit most laptop sizes.",
  popular: false
},
{
  id: "is60",
  name: "Foldable Canvas Sling Bag",
  code: "IS60",
  slug: "foldable-canvas-sling-bag",
  category: "Tote Bags",
  material: "Cotton Canvas",
  size: '19"W x 13"H x 3"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS60/IS60-Natural.webp",
  description: "9 oz cotton canvas foldable sling bag with snap button closure.",
  popular: false
},
{
  id: "is52",
  name: "Colored Convention Tote Bag",
  code: "IS52",
  slug: "colored-convention-tote-bag",
  category: "Tote Bags",
  material: "7 oz Cotton Canvas",
  size: '15"W x 16"H',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS52/IS52-White.webp",
  description: "7 oz cotton canvas colored convention tote with 26-inch self handles.",
  popular: false
},
{
  id: "is52-rc",
  name: "Recycled Convention Tote Bag",
  code: "IS52-RC",
  slug: "recycled-convention-tote-bag",
  category: "Tote Bags",
  material: "Recycled Cotton Canvas",
  size: '15"W x 16"H',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS52-RC/IS52-RC-Natural.webp",
  description: "Recycled cotton canvas convention tote with 26-inch self handles and 7 oz weight.",
  popular: false
},
{
  id: "is52d",
  name: "Denim Convention Tote Bag",
  code: "IS52D",
  slug: "denim-convention-tote-bag",
  category: "Tote Bags",
  material: "Blue Denim",
  size: '15"W x 16"H',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS52D/IS52D-Denim.webp",
  description: "Blue denim convention tote bag with long 26-inch handles and 12 oz weight.",
  popular: false
},
{
  id: "is59",
  name: "Cotton Drawstring Backpack",
  code: "IS59",
  slug: "cotton-drawstring-backpack",
  category: "Non-Woven Bags",
  material: "8 oz Cotton Canvas",
  size: '15"W x 18"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS59/IS59-Natural.webp",
  description: "8 oz natural cotton canvas drawstring backpack with cinch closure and rope cord.",
  popular: false
},
{
  id: "is78",
  name: "Small Shopper Bag",
  code: "IS78",
  slug: "small-shopper-bag-is78",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '8"W x 10"H x 4"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS78/IS78-Navy Blue.webp",
  description: "80 GSM non-woven small shopper bag with full side and bottom gussets.",
  popular: false
},
{
  id: "is53",
  name: "Polyester Backpack",
  code: "IS53",
  slug: "polyester-backpack-is53",
  category: "Non-Woven Bags",
  material: "210D Polyester",
  size: '14"W x 19"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS53/IS53-Yellow.webp",
  description: "210D polyester backpack with zippered front pocket and drawstring closure.",
  popular: false
},
{
  id: "is55",
  name: "Large Grocery Bag",
  code: "IS55",
  slug: "large-grocery-bag-is55",
  category: "Tote Bags",
  material: "12 oz Cotton Canvas",
  size: '15"W x 18"H x 6"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IS55/IS55-Natural.webp",
  description: "12 oz cotton canvas large grocery bag with full side and bottom gussets.",
  popular: false
},
{
  id: "ib1100",
  name: "Canvas Gusset Tote Bag w/ Color Handles",
  code: "IB1100",
  slug: "canvas-gusset-tote-bag-w-color-handles",
  category: "Tote Bags",
  material: "100% Cotton",
  size: '14"W x 12"H x 5.25"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IB1100/IB1100_main.webp",
  description: "Canvas gusset tote bag with color handles, made from 12oz 100% cotton."
},
{
  id: "ib1400",
  name: "Canvas Standard Tote Bag",
  code: "IB1400",
  slug: "canvas-standard-tote-bag",
  category: "Tote Bags",
  material: "100% Cotton Canvas",
  size: '17"W x 13"H x 5"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IB1400/IB1400_main.webp",
  description: "Canvas standard tote bag made from 12oz 100% cotton canvas with bottom and side gussets."
},
{
  id: "ib125800",
  name: "Small Canvas Deluxe Tote",
  code: "IB125800",
  slug: "small-canvas-deluxe-tote",
  category: "Tote Bags",
  material: "100% Cotton Canvas",
  size: '18.5"W x 12"H x 5.5"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IB125800/IB125800_main.webp",
  description: "Small canvas deluxe tote made from 12oz 100% cotton canvas with a bottom gusset."
},
{
  id: "ib1500",
  name: "Large Canvas Deluxe Tote",
  code: "IB1500",
  slug: "large-canvas-deluxe-tote",
  category: "Tote Bags",
  material: "100% Cotton Canvas",
  size: '22"W x 16"H x 6"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IB1500/IB1500_navy.webp",
  description: "Large canvas deluxe tote made from 12oz 100% cotton canvas with a bottom gusset."
},
{
  id: "iwb202",
  name: "Double Bottle Canvas Wine Tote",
  code: "IWB202",
  slug: "double-bottle-canvas-wine-tote",
  category: "Bottle Bags",
  material: "100% Cotton",
  size: '5.5"W x 10.5"H x 3"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/bottle-bags/IWB202/IWB202_main.webp",
  description: "Double bottle canvas wine tote made from 12 oz 100% cotton with a 13-inch handle."
},
{
  id: "ib125600",
  name: "Fancy Shopper with Color Stripe Bag",
  code: "IB125600",
  slug: "fancy-shopper-with-color-stripe-bag",
  category: "Tote Bags",
  material: "100% Cotton",
  size: '15"W x 16"H x 6"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/IB125600/IB125600_main.webp",
  description: "Fancy shopper with color stripe design made from 100% cotton.",
},
{
  id: "is58",
  name: "Non Woven Two Tone Tote/Book Bag",
  code: "IS58",
  slug: "non-woven-two-tone-tote-book-bag-is58",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '11"W x 14"H x 5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS58/IS58-navy.webp",
  description: "90 GSM non-woven two-tone tote/book bag with shoulder strap and full gussets.",
  popular: false
},

{
  id: "is75",
  name: "Econo Tote Bag",
  code: "IS75",
  slug: "econo-tote-bag-is75",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '14.25"W x 15"H x 5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/IS75/IS75-main.webp",
  description: "80 gsm non-woven tote bag with bottom gusset and 20-inch self handles.",
  popular: false
},
{
    id: "is13",
    name: "Faux Leather Handle Tote Bag",
    code: "IS13",
    slug: "faux-leather-handle-tote-bag",
    category: "Tote Bags",
    material: "12 oz Cotton Canvas",
    size: '16"W x 13"H x 5"D',
    price: 30.00,
    originalPrice: 45.00,
    image: "assets/assets/images/products/tote-bags/IS13/IS13-Natural.webp",
    description: "12 oz natural cotton canvas tote with stylish brown faux leather handles.",
    popular: false
},

{
  id: "ABW8700",
  name: "Fleece Throw Blanket",
  code: "ABW8700",
  slug: "fleece-throw-blanket",
  category: "Blankets",
  material: "100% Polyester Fleece",
  size: '50" x 60"',
  price: 10.52,

  image: "assets/assets/images/products/blankets/IW8700/8700-Red.webp",
  description: "Premium anti-pill fleece throw blanket. Perfect for corporate gifting and promotional events.",
  popular: false
},
{
  id: "ABW8701",
  name: "Fleece/Nylon Picnic Blanket",
  code: "ABW8701",
  slug: "fleece-nylon-picnic-blanket",
  category: "Blankets",
  material: "Polyester Fleece / Polyester Oxford with Polyurethane coating",
  size: '50" x 60"',
  price: 8.42,
  image: "assets/assets/images/products/blankets/IW8701/8701-Navy.webp",
  description: "Fleece/Nylon Picnic Blanket with easy-carry design that unfolds into a full-size picnic blanket. Features attached carry handles, quick close pockets, tubular binding, anti-pill fleece, and water repellent nylon.",
  popular: false
},
{
  id: "ABW8702",
  name: "Fleece/Nylon Print Picnic Blanket",
  code: "ABW8702",
  slug: "fleece-nylon-print-picnic-blanket",
  category: "Blankets",
  material: "Polyester Fleece / Polyester Oxford with Polyurethane coating",
  size: '50" x 60"',
  price: 16.84,
  image: "assets/assets/images/products/blankets/IW8702/8702-Blackwatch.webp",
  description: "Fleece/Nylon Print Picnic Blanket with easy-carry design that unfolds into a full-size picnic blanket. Features attached carry handles, quick close pockets, tubular binding, anti-pill fleece, and water repellent nylon.",
  popular: false
},
{
  id: "ABW8707",
  name: "Micro Coral Fleece Blanket",
  code: "ABW8707",
  slug: "micro-coral-fleece-blanket",
  category: "Blankets",
  material: "100% Polyester Micro Coral Fleece",
  size: '50" x 60"',
  price: 14.22,
  image: "assets/assets/images/products/blankets/IW8707/8707-Navy.webp",
  description: "Lightweight and velvety soft micro coral fleece blanket. 8.5-ounce, 100% polyester, 280 G/SM. Fully hemmed with matching polyester tricot binding. Clear vinyl zipper bag included.",
  popular: false
},
{
  id: "ABW8710",
  name: "Sweatshirt Blanket Throw",
  code: "ABW8710",
  slug: "sweatshirt-blanket-throw",
  category: "Blankets",
  material: "52/48 Poly/Cotton",
  size: '50" x 60"',
  price: 16.22,
  image: "assets/assets/images/products/blankets/IW8710/8710-Black.webp",
  description: "Sweatshirt blanket throw made from 52/48 Poly/Cotton. 50\" x 60\", 280 G/SM. Able to be screen printed or embroidered.",
  popular: false
},
{
  id: "ABW8711",
  name: "Value Fleece Blanket",
  code: "ABW8711",
  slug: "value-fleece-blanket",
  category: "Blankets",
  material: "100% Polar Fleece Fabric",
  size: '50" x 60"',
  price: 8.22,
  image: "assets/assets/images/products/blankets/IW8711/8711-Black.webp",
  description: "6.5-ounce, 100% Polar Fleece Fabric. 200 G/SM. 50\" x 60\". Matching whipstitch trim. Non-branded label/tag.",
  popular: false
},
{
  id: "ABW8712",
  name: "Micro Mink Sherpa Blankets",
  code: "ABW8712",
  slug: "micro-mink-sherpa-blankets",
  category: "Blankets",
  material: "100% Polyester (Faux Micro Mink / Faux Lambswool Sherpa)",
  size: '50" x 60"',
  price: 23.12,
  image: "assets/assets/images/products/blankets/IW8712/8712-Cream.webp",
  description: "Cozy fleece face that reverses to soft luxurious sherpa. Hidden 15\" zip pocket for easy embroidery access. 50\" x 60\". Machine wash & dry.",
  popular: false
},
{
  id: "ABW8718",
  name: "Fleece Roll Up Blanket",
  code: "ABW8718",
  slug: "fleece-roll-up-blanket",
  category: "Blankets",
  material: "100% Polyester Anti-Pill Fleece",
  size: '47" x 53"',
  price: 8.42,
  image: "assets/assets/images/products/blankets/IW8718/8718-Black.webp",
  description: "100% Polyester easy roll up blanket. 47\" x 53\". Anti-pill fleece, 180 G/SM. Trim has matching flap with pocket, handle, VELCRO® and whipstitch.",
  popular: false
},
{
  id: "ABW8721",
  name: "Mink Touch Luxury Blanket",
  code: "ABW8721",
  slug: "mink-touch-luxury-blanket",
  category: "Blankets",
  material: "100% Polyester Faux Mink",
  size: '50" x 60"',
  price: 16.84,
  image: "assets/assets/images/products/blankets/IW8721/8721-Black.webp",
  description: "100% Polyester Faux Mink. Weight: 300 g/sqm. Self hem decorative top stitch finish. 50\" x 60\". Vinyl zippered bag with mink touch card in pocket included.",
  popular: false
},
{
  id: "ABW8722",
  name: "Mink Touch Luxury Baby Blanket",
  code: "ABW8722",
  slug: "mink-touch-luxury-baby-blanket",
  category: "Blankets",
  material: "100% Polyester Faux Mink",
  size: '30" x 40"',
  price: 8.64,
  image: "assets/assets/images/products/blankets/IW8722/8722-Baby Blue.webp",
  description: "100% Polyester Faux Mink. Weight: 300 g/sqm. Self hem decorative top stitch finish. 30\" x 40\". Vinyl zippered bag with mink touch card in pocket included.",
  popular: false
},
{
  id: "ABW8723",
  name: "Mink Touch Luxury Robe",
  code: "ABW8723",
  slug: "mink-touch-luxury-robe",
  category: "Blankets",
  material: "100% Polyester Faux Mink",
  size: '60" x 72"',
  price: 33.68,
  image: "assets/assets/images/products/blankets/IW8723/8723-White.webp",
  description: "100% Polyester Faux Mink. Weight: 270 g/sqm. 48\" length. Full length shawl collar, belt loops, collar loop, 2 front pockets and matching belt. One Size Fits All.",
  popular: false
},
{
  id: "ABW8726",
  name: "Oversized Micro Mink Sherpa Blanket",
  code: "ABW8726",
  slug: "oversized-micro-mink-sherpa-blanket",
  category: "Blankets",
  material: "100% Polyester (Faux Micro Mink / Faux Lambswool Sherpa)",
  size: '60" x 72"',
  price: 33.68,
  image: "assets/assets/images/products/blankets/IW8726/8726-Gray.webp",
  description: "Cozy fleece face that reverses to soft luxurious sherpa. 220 g/sqm. Fully hemmed. Hidden zip pocket for easy embroidery access. 60\" x 72\". Machine wash & dry.",
  popular: false
},
{
  id: "ABW8727",
  name: "Oversized Mink Touch Blanket",
  code: "ABW8727",
  slug: "oversized-mink-touch-blanket",
  category: "Blankets",
  material: "100% Polyester Faux Mink",
  size: '60" x 72"',
  price: 23.68,
  image: "assets/assets/images/products/blankets/IW8727/8727-Black.webp",
  description: "Size: 60\" x 72\". Weight: 300 g/sm. Content: 100% Polyester Faux Mink. Trim: Finish self hem decorative top stitch finish. Machine wash & dry. Vinyl zippered bag with mink touch card in pocket included.",
  popular: false
},
{
  id: "ABW8729",
  name: "Frosted Sherpa Blanket",
  code: "ABW8729",
  slug: "frosted-sherpa-blanket",
  category: "Blankets",
  material: "100% Polyester Soft Printed",
  size: '50" x 60"',
  price: 21.58,
  image: "assets/assets/images/products/blankets/IW8729/8729-Grey.webp",
  description: "Frosted fleece sherpa with luxurious feel. 100% polyester soft printed blanket. Folded hem. 50\" x 60\". Machine wash & dry.",
  popular: false
},
{
  id: "ABW8730",
  name: "Faux Fur Sherpa Blanket",
  code: "ABW8730",
  slug: "faux-fur-sherpa-blanket",
  category: "Blankets",
  material: "100% Polyester (Faux Chinchilla / Faux Lambswool Sherpa)",
  size: '50" x 60"',
  price: 26.32,
  image: "assets/assets/images/products/blankets/IW8730/8730-Heather Gray.webp",
  description: "Snug faux chinchilla fur front that reverses to faux sherpa back. 100% polyester, one side faux chinchilla, other side faux lambswool sherpa. Concealed zipper hem in corner. 50\" x 60\". Machine wash & dry.",
  popular: false
},
{
  id: "ABWS99",
  name: "Small Clear Zippered Blanket Bag",
  code: "ABWS99",
  slug: "small-clear-zippered-blanket-bag",
  category: "Blankets",
  material: "Clear",
  size: '10.43" x 10.24" x 2.17"',
  price: 1.68,
  originalPrice: 1.68,
  image: "assets/assets/images/products/blankets/IWS99/CBBS-99Clear.webp",
  description: "Clear zip bag for blankets with rope handle. Fits style 8722. 10.43\" x 10.24\" x 2.17\". California Prop 65 Compliant. Do not wash or dry."
},
{
  id: "ABWM99",
  name: "Medium Clear Zippered Blanket Bag",
  code: "ABWM99",
  slug: "medium-clear-zippered-blanket-bag",
  category: "Blankets",
  material: "Clear",
  size: '14.96" x 12.99" x 2.36"',
  price: 2.00,
  originalPrice: 2.00,
  image: "assets/assets/images/products/blankets/IWM99/CBBM-99_Clear.webp",
  description: "Clear zip bag for blankets with rope handle. Fits styles 8700, 8707, 8710, 8711 and 8721. 14.96\" x 12.99\" x 2.36\". California Prop 65 Compliant. Do not wash or dry."
},
{
  id: "ABWL99",
  name: "Large Clear Zippered Blanket Bag",
  code: "ABWL99",
  slug: "large-clear-zippered-blanket-bag",
  category: "Blankets",
  material: "Clear",
  size: '14.96" x 12.99" x 3.54"',
  price: 2.10,
  originalPrice: 2.10,
  image: "assets/assets/images/products/blankets/IWL99/CBBL-99Clear.webp",
  description: "Clear zip bag for blankets with rope handle. Fits styles 8712, 8723 and 8727. 14.96\" x 12.99\" x 3.54\". California Prop 65 Compliant. Do not wash or dry."
},
{
  id: "ABWXL99",
  name: "Extra-Large Clear Zippered Blanket Bag",
  code: "ABWXL99",
  slug: "extra-large-clear-zippered-blanket-bag",
  category: "Blankets",
  material: "Clear",
  size: '15.35" x 15.35" x 4.72"',
  price: 2.42,
  originalPrice: 2.42,
  image: "assets/assets/images/products/blankets/IWXL99/CBBXL-99_Clear.webp",
  description: "Clear zip bag for blankets with rope handle. Fits styles 8726, 8729 and 8730. 15.35\" x 15.35\" x 4.72\". California Prop 65 Compliant. Do not wash or dry."
},

{
  id: "IT1003",
  name: "Premium Combed Cotton T-Shirt",
  code: "IT1003",
  slug: "premium-combed-cotton-tshirt",
  category: "T-Shirts",
  material: "100% Combed Cotton (30/s Yarn)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 6.00,
  image: "assets/assets/images/products/T-shirts/IT1003/1003-texas-orange-01.webp",
  description: "Ultra-soft 100% combed cotton tee crafted from fine 30/s yarn for a light, breathable feel. Side-stitched construction delivers lasting durability and shape retention — perfect for everyday wear or custom printing.",
  popular: false
},
{
  id: "IT1005",
  name: "Heavyweight Ringspun Cotton T-Shirt",
  code: "IT1005",
  slug: "heavyweight-ringspun-cotton-tshirt",
  category: "T-Shirts",
  material: "100% Ringspun Cotton (6.0 oz / 203 GSM)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 8.22,
  image: "assets/assets/images/products/T-shirts/IT1005/1005-black-01.webp",
  description: "Heavyweight 6.0 oz ringspun cotton blank tee built for high-volume screen printing and embroidery. The dense, durable fabric holds ink crisp and resists stretching on platens, while side-seam construction keeps prints aligned wash after wash.",
  popular: false
},
{
  id: "IT3130",
  name: "French Terry Sleeveless Hoodie",
  code: "IT3130",
  slug: "french-terry-sleeveless-hoodie",
  category: "Hoodies",
  material: "80% Cotton / 20% Polyester French Terry (8.0 oz / 271 GSM)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 19.4,
  image: "assets/assets/images/products/hoodies/IT3130/3130-royal-01.webp",
  description: "Lightweight 8.0 oz french terry sleeveless hoodie in an 80/20 cotton-poly blend. Athletic cut built for gyms, events, and streetwear, with a smooth print face and breathable flat terry interior.",
  popular: false
},
{
  id: "IT5001",
  name: "Heavyweight Pullover Fleece Hoodie",
  code: "IT5001",
  slug: "heavyweight-pullover-fleece-hoodie",
  category: "Hoodies",
  material: "Heavyweight Fleece",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 37.2,
  image: "assets/assets/images/products/hoodies/IT5001/5001-red-01.webp",
  description: "Generously cut heavyweight pullover fleece hoodie with an amazing feel. Features a lined hood, heavy drawstring cord, spandex ribbing at cuffs and hem, double-needle stitching throughout, and a generous pouch pocket.",
  popular: false
},
{
  id: "IT5108",
  name: "Premium Pullover Hoodie",
  code: "IT5108",
  slug: "premium-pullover-hoodie",
  category: "Hoodies",
  material: "80% Cotton / 20% Polyester Fleece (7.8 oz / 264 GSM)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 19.4,
  image: "assets/assets/images/products/hoodies/IT5108/5108-white-01.webp",
  description: "Premium 7.8 oz pullover hoodie with a 100% ringspun cotton face for a smooth print surface. Regular fit, self-fabric lined hood, heavy drawstring cord, spandex ribbing, and double-needle stitching throughout for lasting durability.",
  popular: false
},
{
  id: "IT5109",
  name: "Premium Full Zip Hoodie",
  code: "IT5109",
  slug: "premium-full-zip-hoodie",
  category: "Hoodies",
  material: "80% Cotton / 20% Polyester Fleece (7.8 oz / 264 GSM)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 22.2,
  image: "assets/assets/images/products/hoodies/IT5109/5109-new-navy-01.webp",
  description: "Premium 7.8 oz full zip hoodie in 80/20 cotton-poly fleece with a 100% ringspun cotton face for sharp prints. YKK metal zipper, fully lined hood with heavy drawstring, spandex ribbing, and double-needle stitching throughout.",
  popular: false
},
{
  id: "IT15001",
  name: "Ultra-Heavyweight 12oz Oversized Pullover Hoodie",
  code: "IT15001",
  slug: "ultra-heavyweight-12oz-oversized-pullover-hoodie",
  category: "Hoodies",
  material: "80% Cotton / 20% Polyester Fleece (12.0 oz / 407 GSM)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 38.7,
  image: "assets/assets/images/products/hoodies/IT15001/15001-natural-01.webp",
  description: "Ultra-heavyweight 12 oz oversized pullover hoodie in 80/20 cotton-poly fleece. The heaviest hoodie in the lineup, with a brushed interior for warmth, fully lined self-fabric hood, and street-ready urban silhouette built for custom decoration.",
  popular: false
},
{
  id: "ITP280",
  name: "Midweight Pullover Hoodie",
  code: "ITP280",
  slug: "midweight-pullover-hoodie",
  category: "Hoodies",
  material: "70% Cotton / 30% Polyester Fleece (8.8 oz / 298 GSM)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 21.6,
  image: "assets/assets/images/products/hoodies/ITP280/P280-gold-yellow-01.webp",
  description: "Midweight 8.8 oz blank pullover hoodie in 70/30 cotton-poly fleece. A versatile year-round weight with a smooth print-ready cotton face, self-fabric lined hood, spandex ribbing, and double-needle stitching for lasting durability.",
  popular: false
},
{
  id: "ITY300",
  name: "Youth Pullover Hoodie",
  code: "ITY300",
  slug: "youth-pullover-hoodie",
  category: "Hoodies",
  material: "70% Cotton / 30% Polyester Fleece (8.8 oz / 298 GSM)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 18.3,
  image: "assets/assets/images/products/hoodies/ITY300/Y300-maroon-burgundy-01.webp",
  description: "Youth-sized 8.8 oz blank pullover hoodie in 70/30 cotton-poly fleece. Built for school, team, and youth organization programs with a smooth print face, two-ply hood, and spandex-reinforced ribbing for lasting shape.",
  popular: false
},
{
  id: "ITCR280",
  name: "Midweight Crewneck Sweatshirt",
  code: "ITCR280",
  slug: "midweight-crewneck-sweatshirt",
  category: "Crewneck Sweatshirts",
  material: "70% Cotton / 30% Polyester Fleece (8.8 oz / 298 GSM)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 18.3,
  image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-chocolate-01.webp",
  description: "Midweight 8.8 oz blank crewneck sweatshirt in 70/30 cotton-poly fleece. Seamless body for uninterrupted printing, set-in sleeves with two-needle coverstitching, and spandex ribbing for shape retention. Classic silhouette ready for screen printing and embroidery.",
  popular: false
},
{
  id: "ITSCNSS",
  name: "Crewneck Sweatshirt",
  code: "ITSCNSS",
  slug: "crewneck-sweatshirt",
  category: "Crewneck Sweatshirts",
  material: "50/50 Cotton/Poly (7.7 oz)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 11.1,
  image: "assets/assets/images/products/sweatshirts/ITSCNSS/ITSCNSS-navyblue-01.webp",
  description: "Crewneck sweatshirt in a 50/50 cotton-poly blend. A classic silhouette with a smooth print surface, ready for screen printing, embroidery, and everyday wear.",
  popular: false
},
{
  id: "IT7770",
  name: "Fleece Short",
  code: "IT7770",
  slug: "fleece-short",
  category: "Fleece Shorts",
  material: "70% Cotton / 30% Polyester Fleece (8.8 oz / 280 GSM)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 18.3,
  image: "assets/assets/images/products/shorts/IT7770/7770-black-01.webp",
  description: "Midweight 8.8 oz fleece short in a 70/30 cotton-poly blend. Relaxed fit with an elasticated waistband, extended waist sizing, and a durable cotton face ideal for screen printing and embroidery.",
  popular: false
},
{
  id: "IT600MR",
  name: "Russel Athletic Ringspun Cotton T-Shirt 6.0 Oz",
  code: "IT600MR",
  slug: "russel-athletic-ringspun-cotton-tshirt",
  category: "T-Shirts",
  material: "100% Ringspun Cotton (6.0 oz)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 4.4,
  image: "assets/assets/images/products/T-shirts/IT600MR/600MR-black-01.webp",
  description: "Russel Athletic 6.0 oz ringspun cotton t-shirt. A heavier-weight blank with a smooth print surface, built for screen printing, DTG, and embroidery.",
  popular: false
},
{
  id: "IT1001",
  name: "100% Cotton Ringspun T-Shirt 4.5 oz",
  code: "IT1001",
  slug: "cotton-ringspun-tshirt",
  category: "T-Shirts",
  material: "100% Cotton (4.5 oz, 30-Singles Ringspun)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 4.44,
  image: "assets/assets/images/products/T-shirts/IT1001/1001-red-01.webp",
  description: "100% cotton 4.5 oz t-shirt using only 30-single ringspun cotton for a great feel and superior print face. Ideal for screen printing and DTG.",
  popular: false
},
{
  id: "IT3903R",
  name: "Fruit of the Loom HD Cotton T-Shirt",
  code: "IT3903R",
  slug: "fruit-of-the-loom-hd-cotton-tshirt",
  category: "T-Shirts",
  material: "100% Cotton (HD Cotton)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 4.4,
  image: "assets/assets/images/products/T-shirts/IT3930R/3930R-burgundy-01.webp",
  description: "Fruit of the Loom HD Cotton t-shirt (style 3930R). A durable, high-density cotton blank with a smooth print surface built for screen printing, DTG, and embroidery.",
  popular: false
},
{
  id: "IT8801",
  name: "Fleece Jogger Pant",
  code: "IT8801",
  slug: "fleece-jogger-pant",
  category: "Joggers/Sweatpants",
  material: "70% Cotton / 30% Polyester Fleece (8.8 oz / 290 GSM)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 19.4,
  image: "assets/assets/images/products/pants/IT8801/8801-orange-01.webp",
  description: "Midweight 8.8 oz fleece jogger pant in a 70/30 cotton-poly blend. Unisex sizing with a tapered leg, cuffed rib bottoms, and an elasticated waistband with drawstring for adjustable fit.",
  popular: false
},
{
  id: "ITY5501",
  name: "Youth Fleece Jogger Pant",
  code: "ITY5501",
  slug: "youth-fleece-jogger-pant",
  category: "Joggers/Sweatpants",
  material: "70% Cotton / 30% Polyester Fleece (8.8 oz / 298 GSM)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 17.2,
  image: "assets/assets/images/products/pants/ITY5501/Y5501-black-01.webp",
  description: "Youth-sized 8.8 oz blank fleece jogger pants in 70/30 cotton-poly. Tapered fit with cuffed rib bottoms, elasticated waist, and off-seam pockets for flat decoration panels. Sizes XS-M ship without drawstring to meet children's safety standards.",
  popular: false
},
{
  id: "ITPNTS",
  name: "Sweatpants 7.7 oz 50/50",
  code: "ITPNTS",
  slug: "sweatpants-50-50",
  category: "Joggers/Sweatpants",
  material: "50% Cotton / 50% Polyester (7.7 oz)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 11.0,
  image: "assets/assets/images/products/pants/ITPNTS/zjswpnts-navy-01.webp",
  description: "Sweatpants in a 50/50 cotton-poly blend (7.7 oz). Without drawstrings and without side/back pockets. A clean, classic silhouette ready for screen printing and embroidery.",
  popular: false
},
{
  id: "ITCMFL",
  name: "Camouflage Fleece Jogger Pant",
  code: "ITCMFL",
  slug: "camouflage-fleece-jogger-pant",
  category: "Joggers/Sweatpants",
  material: "70% Cotton / 30% Polyester Fleece (8.8 oz / 290 GSM)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 19.9,
  image: "assets/assets/images/products/pants/ITCMFL/8801cmfl-camouflage-01.webp",
  description: "Camouflage fleece jogger pant in a 70/30 cotton-poly blend (8.8 oz). Tapered leg with cuffed rib bottoms and an elasticated waistband with drawstring for adjustable fit.",
  popular: false
},
{
  id: "ITT180",
  name: "Ringspun Cotton Tank Top 5.5 oz",
  code: "ITT180",
  slug: "ringspun-cotton-tank-top",
  category: "Tank Tops",
  material: "100% Ringspun Cotton (5.5 oz, 20 Singles)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 3.2,
  image: "assets/assets/images/products/tanktops/ITT180/tt180-black-01.webp",
  description: "The TT180 tank is updated with a modern fit, featuring a rounded neck and designed with superior ring-spun cotton that acts as a blank canvas for printing. 5.5 oz., 100% ringspun cotton, 20 singles. Side seams, retail fit, Unisex sizing.",
  popular: false
},
{
  id: "ITZJHSS",
  name: "Full Zip Hoodie 7.7 oz 50/50",
  code: "ITZJHSS",
  slug: "full-zip-hoodie-50-50",
  category: "Hoodies",
  material: "50% Cotton / 50% Polyester (7.7 oz)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 11.0,
  image: "assets/assets/images/products/hoodies/ITZJHSS/zjhss-nay.webp",
  description: "Full zip hoodie in a 50/50 cotton-poly blend (7.7 oz) without drawstrings. Classic silhouette ready for screen printing and embroidery.",
  popular: false
},
{
  id: "IA1000",
  name: "Signature Blend Tee",
  code: "IA1000",
  slug: "signature-blend-tee",
  category: "T-Shirts",
  group: "Apparel",
  material: "60% Ring-spun Combed Cotton / 40% Polyester (4.3 oz / 145 GSM)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 5.73,
  image: "assets/assets/images/products/T-shirts/IA1000/IA1000-royal_01.webp",
  description: "Premium 4.3 oz blended unisex tee in 60/40 ring-spun combed cotton and polyester. Smooth, durable, and built for customization.",
  popular: false
},
{
  id: "IA1003",
  name: "Vantage V-Neck Tee",
  code: "IA1003",
  slug: "vantage-v-neck-tee",
  category: "T-Shirts",
  group: "Apparel",
  material: "100% Cotton (4.3 oz) – Heathers: 60/40 Cotton/Poly",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 6.33,
  image: "assets/assets/images/products/T-shirts/IA1003/IA1003-pink-01.webp",
  description: "Elevated everyday essential — the Vantage V-Neck Tee delivers a clean, modern silhouette with a 4.3 oz combed cotton face that takes ink and thread beautifully. Built for customization, ready for daily wear.",
  popular: false
},
{
  id: "IA1004",
  name: "Vantage Long Sleeve Tee",
  code: "IA1004",
  slug: "vantage-long-sleeve-tee",
  category: "T-Shirts",
  group: "Apparel",
  material: "100% Cotton (4.3 oz) – Heathers: 60/40 Cotton/Poly",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 8.36,
  image: "assets/assets/images/products/T-shirts/IA1004/IA1004-neon-yellow-01.webp",
  description: "Layer-ready staple — the Vantage Long Sleeve Tee brings a refined 4.3 oz combed cotton face to a classic long-sleeve silhouette. Built to print, built to last.",
  popular: false
},
{
  id: "IA1005",
  name: "Sculpt Fitted Tee",
  code: "IA1005",
  slug: "sculpt-fitted-tee",
  category: "T-Shirts",
  group: "Apparel",
  material: "100% Cotton (4.3 oz) – Heathers: 60/40 Cotton/Poly",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 4.42,
  image: "assets/assets/images/products/T-shirts/IA1005/IA1005-burgundy-01.webp",
  description: "Tailored to move — the Sculpt Fitted Tee is cut for a flattering women's silhouette in a smooth 4.3 oz combed cotton blend. Made to print, made to fit.",
  popular: false
},
{
  id: "IA1007",
  name: "Sprout Youth Tee",
  code: "IA1007",
  slug: "sprout-youth-tee",
  category: "T-Shirts",
  group: "Apparel",
  material: "100% Cotton (4.3 oz) – Heathers: 60/40 Cotton/Poly",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 4.67,
  image: "assets/assets/images/products/T-shirts/IA1007/IA1007-navy-01.webp",
  description: "Built for the next generation — the Sprout Youth Tee brings a soft 4.3 oz combed cotton face to a kid-sized silhouette. Ready for school prints, team graphics, and everyday play.",
  popular: false
},
{
  id: "IA1010",
  name: "Velocity Performance Tee",
  code: "IA1010",
  slug: "velocity-performance-tee",
  category: "T-Shirts",
  group: "Apparel",
  material: "100% Polyester (4.3 oz)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 6.56,
  image: "assets/assets/images/products/T-shirts/IA1010/IA1010-moss-green-01.webp",
  description: "Engineered for movement — the Velocity Performance Tee is spun from 100% polyester with a 4.3 oz hand feel that wicks, breathes, and holds vibrant color. Built for training, teamwear, and high-energy events.",
  popular: false
},
{
  id: "IA1133",
  name: "Rebel Crop Tee",
  code: "IA1133",
  slug: "rebel-crop-tee",
  category: "T-Shirts",
  group: "Apparel",
  material: "100% Cotton (4.3 oz) – Heathers: 60/40 Cotton/Poly",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 5.56,
  image: "assets/assets/images/products/T-shirts/IA1133/IA1133-powder-blue-01.webp",
  description: "Streetwear energy in a cropped silhouette — the Rebel Crop Tee is cut from the same soft, breathable 4.3 oz jersey as our signature blanks. Relaxed fit, elevated attitude.",
  popular: false
},
{
  id: "IA1450",
  name: "Monolith Heavyweight Tee",
  code: "IA1450",
  slug: "monolith-heavyweight-tee",
  category: "T-Shirts",
  group: "Apparel",
  material: "100% Cotton (6.5 oz)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 8.89,
  image: "assets/assets/images/products/T-shirts/IA1450/IA1450-charcoal-01.webp",
  description: "Built like a cornerstone — the Monolith Heavyweight Tee uses premium 6.5 oz cotton for a substantial, luxury hand feel that holds its shape and never feels thin. Structured drape, reinforced seams, and a smooth print-ready face make it the perfect canvas for custom work or everyday wear.",
  popular: false
},
{
  id: "IA5000",
  name: "Vintage Dye Premium Tee",
  code: "IA5000",
  slug: "vintage-dye-premium-tee",
  category: "T-Shirts",
  group: "Apparel",
  material: "100% Cotton (6.0 oz / 200 GSM, Side Seam)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 10.00,
  image: "assets/assets/images/products/T-shirts/IA5000/IA5000-black-01.webp",
  description: "Each piece tells its own story — the Vintage Dye Premium Tee is cut from 6 oz side-seam cotton and treated with a unique garment over-dye process that gives every shirt a one-of-a-kind character. Expect slight variations in color and shade; they're not flaws, they're the signature.",
  popular: false
},
{
  id: "IA5001",
  name: "Terra Mineral Wash Tee",
  code: "IA5001",
  slug: "terra-mineral-wash-tee",
  category: "T-Shirts",
  group: "Apparel",
  material: "100% Cotton (6.0 oz / 200 GSM, Side Seam)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 10.67,
  image: "assets/assets/images/products/T-shirts/IA5001/IA5001-earth-01.webp",
  description: "Earthy, textured, and unmistakably yours — the Terra Mineral Wash Tee is built on a 6 oz side-seam cotton base and finished with a mineral wash that gives every piece a soft, lived-in character. Subtle shade variations from lot to lot are part of the process, not a defect.",
  popular: false
},
{
  id: "IA8001",
  name: "Tactical Elite Performance Polo",
  code: "IA8001",
  slug: "tactical-elite-performance-polo",
  category: "T-Shirts",
  group: "Apparel",
  material: "100% Polyester (5.2 oz)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 13.33,
  image: "assets/assets/images/products/T-shirts/IA8001/IA8001-royal-01.webp",
  description: "Field-tested, boardroom-ready — the Tactical Elite Performance Polo is built from 5.2 oz performance polyester with advanced moisture-wicking, anti-odor technology, and UPF 40+ sun protection. Whether you're on the course or on the clock, it delivers breathable, uncompromised performance all day.",
  popular: false
},
{
  id: "IA1122",
  name: "Bloom Crop Hoodie",
  code: "IA1122",
  slug: "bloom-crop-hoodie",
  category: "Hoodies",
  group: "Apparel",
  material: "60% Cotton / 40% Polyester Fleece (7.8 oz)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 13.33,
  image: "assets/assets/images/products/hoodies/IA1122/IA1122-red-01.webp",
  description: "Soft fleece, cropped cut, everyday cool — the Bloom Crop Hoodie pairs a cozy 7.8 oz cotton-poly blend with a relaxed silhouette made for layering. Designed for girls who move fast and dress smart.",
  popular: false
},
{
  id: "IA2011",
  name: "Meridian Fleece Hoodie",
  code: "IA2011",
  slug: "meridian-fleece-hoodie",
  category: "Hoodies",
  group: "Apparel",
  material: "60% Cotton / 40% Polyester Fleece (8.4 oz)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 19.00,
  image: "assets/assets/images/products/hoodies/IA2011/IA2011-royal-01.webp",
  description: "Warmth, meet durability — the Meridian Fleece Hoodie is built from an 8.4 oz cotton-poly blend with a soft brushed interior and a relaxed unisex fit. Designed for layering, made to last through cold seasons and high-volume decoration.",
  popular: false
},
{
  id: "IA2013",
  name: "Meridian Fleece Crew",
  code: "IA2013",
  slug: "meridian-fleece-crew",
  category: "Crewneck Sweatshirts",
  group: "Apparel",
  material: "60% Cotton / 40% Polyester Fleece (8.4 oz)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 22.22,
  image: "assets/assets/images/products/sweatshirts/IA2013/IA2013-irish-green-01.webp",
  description: "Warmth with a clean finish — the Meridian Fleece Crew is built on the same trusted 8.4 oz cotton-poly fleece as our hoodies, cut into a classic crewneck silhouette. Soft brushed interior, durable construction, and ready for layering or standalone wear.",
  popular: false
},
{
  id: "IA11001",
  name: "Ember Burnout Hoodie",
  code: "IA11001",
  slug: "ember-burnout-hoodie",
  category: "Hoodies",
  group: "Apparel",
  material: "60% Cotton / 40% Polyester Fleece (9.0 oz)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 21.11,
  image: "assets/assets/images/products/hoodies/IA11001/IA11001-black-01.webp",
  description: "Made to fade — the Ember Burnout Hoodie pairs a warm 9 oz cotton-poly fleece with a unique burnout finish that gives every piece a soft, lived-in look. Durable construction, relaxed unisex fit, and ready for custom decoration.",
  popular: false
},
{
  id: "IA11005",
  name: "Nantucket Fleece Hoodie",
  code: "IA11005",
  slug: "nantucket-fleece-hoodie",
  category: "Hoodies",
  group: "Apparel",
  material: "60% Cotton / 40% Polyester Fleece (9.0 oz)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 21.11,
  image: "assets/assets/images/products/hoodies/IA11005/IA11005-salt-and-pepper-01.webp",
  description: "Coastal-inspired and built for warmth — the Nantucket Fleece Hoodie is cut from a substantial 9 oz cotton-poly blend with a soft brushed interior. Relaxed unisex fit, durable construction, and a classic Salt & Pepper or Black finish that layers effortlessly.",
  popular: false
},
{
  id: "IA1001",
  name: "Signature Premium Tee",
  code: "IA1001",
  slug: "signature-premium-tee",
  category: "T-Shirts",
  group: "Apparel",
  material: "100% Cotton (4.3 oz) – Heathers: 60/40 Cotton/Poly",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 5.73,
  image: "assets/assets/images/products/T-shirts/IA1001/IA1001-peach-01.webp",
  description: "Everyday luxury, refined — the Signature Premium Tee is spun from ring-spun combed cotton and finished with an enzyme wash for a smooth, lived-in softness that only gets better with every wash. A wardrobe staple built to last.",
  popular: false
}

];

// ============================================================
// LAZY LOADING - IMAGES (Add after products array)
// ============================================================

/**
 * Lazy load images using Intersection Observer API
 */
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');

          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
          }

          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    document.querySelectorAll('.lazy-image').forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for older browsers
    document.querySelectorAll('.lazy-image').forEach(img => {
      const src = img.getAttribute('data-src');
      if (src) {
        img.src = src;
        img.removeAttribute('data-src');
      }
    });
  }
}

/**
 * Lazy load background images (for divs with background-image)
 */
function initLazyBackground() {
  if ('IntersectionObserver' in window) {
    const bgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const bg = el.getAttribute('data-bg');

          if (bg) {
            el.style.backgroundImage = `url(${bg})`;
            el.removeAttribute('data-bg');
            el.classList.add('loaded');
          }

          observer.unobserve(el);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    document.querySelectorAll('[data-bg]').forEach(el => {
      bgObserver.observe(el);
    });
  }
}

// -------------------------------------------------
// 2. RENDER ENGINE WITH PAGINATION - FIXED VERSION
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

  // ✅ PAGINATION SETTINGS
  const PRODUCTS_PER_PAGE = 12;
  let currentPage = 1;
  let totalPages = 1;

  let currentCategory = 'All Products';
  let selectedMaterials = [];
  let selectedSizes = [];
  let searchTerm = '';

  // ✅ STORE FIXED RANDOM VALUES FOR POPULAR PRODUCTS
  let popularCache = null;

  // ✅ PAGINATION CONTAINER
  const paginationContainer = document.getElementById('pagination-container');
  if (!paginationContainer) {
    const container = document.createElement('div');
    container.id = 'pagination-container';
    container.className = 'flex justify-center items-center gap-2 mt-8 py-4';
    const gridParent = grid.parentElement;
    if (gridParent) {
      gridParent.appendChild(container);
    }
  }

  function getCategories() {
    const cats = products.map(p => p.category);
    return ['All Products', ...new Set(cats)];
  }

  function getSizes() {
    const sizeSet = new Set();
    products.forEach(p => {
      if (p.size) {
        const normalized = p.size.trim().replace(/\s+/g, ' ');
        sizeSet.add(normalized);
      }
    });
    return [...sizeSet];
  }

  function getCategoryCount(cat) {
    if (cat === 'All Products') return products.length;
    return products.filter(p => p.category === cat).length;
  }



  function getFilteredProducts() {
    let result = products;

    if (currentCategory !== 'All Products') {
      result = result.filter(p => p.category === currentCategory);
    }

    // MATERIAL FILTER REMOVED - No longer filtering by material

    if (selectedSizes.length > 0) {
      result = result.filter(p => {
        if (!p.size) return false;
        const normalizedProductSize = p.size.trim().replace(/\s+/g, ' ');
        return selectedSizes.some(size => {
          const normalizedFilterSize = size.trim().replace(/\s+/g, ' ');
          return normalizedProductSize === normalizedFilterSize;
        });
      });
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

  function getPaginatedProducts(sorted) {
    totalPages = Math.ceil(sorted.length / PRODUCTS_PER_PAGE);
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    return sorted.slice(start, end);
  }

  function renderPagination(totalItems) {
    const container = document.getElementById('pagination-container');
    if (!container) return;

    totalPages = Math.ceil(totalItems / PRODUCTS_PER_PAGE);

    if (totalPages <= 1) {
      container.innerHTML = '';
      return;
    }

    let html = `
      <button class="pagination-btn prev-btn ${currentPage === 1 ? 'disabled' : ''}" 
              ${currentPage === 1 ? 'disabled' : ''}
              data-page="prev">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
    `;

    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    if (startPage > 1) {
      html += `<button class="pagination-btn" data-page="1">1</button>`;
      if (startPage > 2) {
        html += `<span class="pagination-dots">...</span>`;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      html += `<button class="pagination-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        html += `<span class="pagination-dots">...</span>`;
      }
      html += `<button class="pagination-btn" data-page="${totalPages}">${totalPages}</button>`;
    }

    html += `
      <button class="pagination-btn next-btn ${currentPage === totalPages ? 'disabled' : ''}" 
              ${currentPage === totalPages ? 'disabled' : ''}
              data-page="next">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    `;

    container.innerHTML = html;

    container.querySelectorAll('.pagination-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        if (this.disabled) return;
        const page = this.dataset.page;
        if (page === 'prev' && currentPage > 1) {
          currentPage--;
        } else if (page === 'next' && currentPage < totalPages) {
          currentPage++;
        } else if (page !== 'prev' && page !== 'next') {
          currentPage = parseInt(page);
        }
        renderProducts();
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function createProductCard(product) {

    const div = document.createElement('div');

    div.className = 'premium-card p-4 relative flex flex-col h-full product-card opacity-0 group cursor-pointer';

    div.dataset.id = product.id;

    const link = `product.html?id=${product.id}`;

    // ============================================================
    // CATEGORY
    // ============================================================

    const category = product.category?.toLowerCase().trim() || '';

    // ============================================================
    // APPAREL
    // ============================================================

    const isTShirt =
      category.includes('t-shirt') ||
      category.includes('tshirt') ||
      category.includes('t shirt');

    const isHoodie =
      category.includes('hoodie');

    const isPulloverHoodie =
      category.includes('pullover hoodie') ||
      category.includes('pullover hoodies');

    const isFullZipHoodie =
      category.includes('full zip hoodie') ||
      category.includes('full zip hoodies');

    const isCrewneck =
      category.includes('crewneck');

    const isSweatshirt =
      category.includes('sweatshirt') ||
      category.includes('sweatshirts');

    const isPants =
      category.includes('pants') ||
      category.includes('pant') ||
      category.includes('jogger') ||
      category.includes('joggers') ||
      category.includes('sweatpants') ||
      category.includes('sweat pant') ||
      category.includes('sweat pants');

    const isJoggers =
      category.includes('jogger') ||
      category.includes('joggers') ||
      category.includes('sweatpants') ||
      category.includes('sweat pant') ||
      category.includes('sweat pants');

    const isShorts =
      category.includes('short') ||
      category.includes('shorts') ||
      category.includes('fleece short') ||
      category.includes('fleece shorts');

    const isTankTop =
      category.includes('tank top') ||
      category.includes('tank tops') ||
      category.includes('tanktop');

    const isApparel =
      isTShirt ||
      isHoodie ||
      isPulloverHoodie ||
      isFullZipHoodie ||
      isCrewneck ||
      isSweatshirt ||
      isPants ||
      isJoggers ||
      isShorts ||
      isTankTop;

    // ============================================================
    // BAGS
    // ============================================================

    const isToteBag =
      category.includes('tote bag') ||
      category.includes('tote bags');

    const isNonWovenBag =
      category.includes('non-woven') ||
      category.includes('non woven');

    const isWineTote =
      category.includes('wine tote') ||
      category.includes('wine totes');

    const isWineBag =
      category.includes('wine bag') ||
      category.includes('wine bags');

    const isShoeBag =
      category.includes('shoe bag') ||
      category.includes('shoe bags');

    const isBag =
      isToteBag ||
      isNonWovenBag ||
      isWineTote ||
      isWineBag ||
      isShoeBag;

    // ============================================================
    // OTHERS
    // ============================================================

    const isBlanket =
      category === 'blankets' ||
      category === 'blanket';

    const isCap =
      category.includes('cap') ||
      category.includes('caps');

    const isBeanie =
      category.includes('beanie') ||
      category.includes('beanies');

    const isAccessory =
      isCap ||
      isBeanie;

    // ============================================================
    // HIDE MOCKUP
    // Apparel + Blankets = NO MOCKUP
    // ============================================================

    const hideMockup =
      isBlanket ||
      isApparel;

    // ============================================================
    // PRICE LABEL LOGIC
    // ============================================================

    const showSetupWas = !isBlanket;

    // ============================================================
    // SIZE BADGE
    // ============================================================

    const sizeBadge = product.size ? `
        <div class="relative flex justify-center -mt-[1px] mb-3 z-10">
            <span class="bg-brand-navy/90 text-white text-[9px] font-medium px-3 py-0.5 rounded border border-white/10 shadow-md backdrop-blur-sm whitespace-nowrap">
                ${product.size}
            </span>
        </div>
    ` : '';

    // ============================================================
    // CARD HTML
    // ============================================================

    div.innerHTML = `

        <span class="absolute top-1 left-4 bg-brand-navy text-white text-[10px] font-bold px-2 py-0.5 rounded z-10 border border-white/10">
            ${product.code}
        </span>

        <a href="${link}"
            class="block relative h-48 mb-1 flex items-center justify-center product-img-bg group-hover:scale-105 transition-transform duration-500 overflow-visible">

            <img
                src="${product.image}"
                alt="${product.name}"
                class="max-h-full object-contain"
            />

        </a>

        <!-- Size Badge -->
        ${sizeBadge}

        <div class="flex-1 flex flex-col">

            <a href="${link}">
                <h3 class="text-sm font-bold mb-2 text-brand-text line-clamp-2">
                    ${product.name}
                </h3>
            </a>

            <p class="text-xs text-brand-textSecondary mb-3 line-clamp-3">
                ${product.description}
            </p>

            <div class="mt-auto">

                ${showSetupWas ? `
                    <div class="text-[12px] text-brand-textSecondary font-medium mb-1">
                        ${isApparel
          ? '<span class="blink-text">As Low As</span>'
          : 'Setup Was'
        }
                    </div>
                ` : ''}

                <div class="flex items-center gap-2 flex-wrap mb-3">

                    ${product.originalPrice && showSetupWas ? `
                        <span class="text-[15px] text-brand-textSecondary line-through opacity-50 font-medium">
                            $${product.originalPrice.toFixed(2)}
                        </span>
                    ` : ''}

                    <span class="text-brand-crimson font-bold text-base">
                        $${product.price.toFixed(2)}
                    </span>

                    <span class="text-[12px] font-bold text-brand-crimson bg-red-50 px-2 py-0.5 rounded border border-brand-crimson/30">
                        ${isBlanket || isApparel ? 'R' : 'Net Price'}
                    </span>

                </div>

                <div class="flex items-center gap-1 w-full">

                    <!-- QUOTE -->
                    <a
                        
                        class="flex-1 border border-brand-border text-brand-textSecondary text-[10px] font-semibold py-1.5 px-1 rounded hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-colors flex items-center justify-center gap-1">

                        <i class="fa-regular fa-pen-to-square"></i>
                        QUOTE

                    </a>

                    <!-- MOCKUP -->
                    ${!hideMockup ? `
                        <a
                            
                            class="flex-1 border border-brand-border text-brand-textSecondary text-[10px] font-semibold py-1.5 px-1 rounded hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-colors flex items-center justify-center gap-1">

                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                            MOCKUP

                        </a>
                    ` : ''}

                    <!-- FREIGHT -->
                    <a
                        
                        class="flex-1 bg-brand-crimson text-white text-[10px] font-semibold py-1.5 px-1 rounded hover:bg-brand-crimsonHover transition-colors flex items-center justify-center gap-1 border border-brand-crimson">

                        <i class="fa-solid fa-truck-fast"></i>
                        FREIGHT

                    </a>

                </div>

            </div>

        </div>
    `;

    return div;
  }

  // ✅ GENERATE FIXED POPULAR DATA ONCE
  function generatePopularCache() {
    const emojis = ['🔥', '⭐', '💫', '✨', '🌟', '🎯', '💎', '👑'];
    const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF6B8A', '#FFB347', '#A66CFF', '#FF8A5C'];

    const popularProducts = products.filter(p => p.popular === true);

    return popularProducts.map((product, index) => {
      const randomBuyers = Math.floor(100 + Math.random() * 900);
      const randomRating = (Math.random() * 150 + 30).toFixed(0);
      const randomReviews = (Math.random() * 150 + 30).toFixed(0);

      return {
        ...product,
        emoji: emojis[index % emojis.length],
        color: colors[index % colors.length],
        buyers: randomBuyers,
        rating: randomRating,
        reviews: randomReviews,
        index: index + 1
      };
    });
  }

  function renderPopularProducts() {
    const grid = document.getElementById('popular-grid');
    if (!grid) return;

    if (!popularCache) {
      popularCache = generatePopularCache();
    }

    grid.innerHTML = popularCache.map((product, index) => {
      return `
            <div class="popular-card" style="animation-delay: ${index * 0.15}s" 
                 onclick="window.location.href='product.html?id=${product.id}'">
                <div class="popular-shine"></div>
                <div class="popular-particles">
                    ${[...Array(6)].map((_, i) => `
                        <div class="particle" style="
                            left: ${Math.random() * 100}%;
                            animation-delay: ${Math.random() * 4}s;
                            animation-duration: ${3 + Math.random() * 4}s;
                            width: ${2 + Math.random() * 5}px;
                            height: ${2 + Math.random() * 5}px;
                            background: ${[product.color, '#C81F45', '#FF6B8A', '#FFD700'][i % 4]};
                        "></div>
                    `).join('')}
                </div>
                <span class="popular-tag">
                    <i class="fa-solid fa-fire" style="color: #FF6B35; margin-right: 4px;"></i>
                    Trending #${product.index}
                </span>
               
                <img src="${product.image}" alt="${product.name}" class="popular-image">
                <div class="popular-content">
                    <h1 class="popular-code">${product.code}</h1>
                    <h4 class="popular-name">${product.name}</h4>
                    <div class="flex items-center gap-1 mt-1">
                        <div class="flex text-amber-400 text-[9px]">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <span class="text-[9px] text-brand-textSecondary">(${product.reviews})</span>
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

    setTimeout(() => {
      const section = document.getElementById('popular-section');
      if (section) section.classList.add('visible');
    }, 200);
  }

  function copySidebarContent() {
    const desktopSidebar = document.getElementById('sidebar');
    const mobileSidebar = document.getElementById('sidebarContent');

    if (!desktopSidebar || !mobileSidebar) return;

    // Copy fresh sidebar HTML to mobile
    mobileSidebar.innerHTML = desktopSidebar.innerHTML;

    // Attach events after copying
    attachSidebarEvents();
  }

  function attachSidebarEvents() {
    const sidebars = [
      document.getElementById('sidebar'),
      document.getElementById('sidebarContent')
    ];

    sidebars.forEach(sidebarEl => {
      if (!sidebarEl) return;

      // Remove old listeners by replacing category links
      sidebarEl.querySelectorAll('.category-link').forEach(link => {

        // Clone link so old event listeners are removed
        const newLink = link.cloneNode(true);
        link.replaceWith(newLink);

        newLink.addEventListener('click', function (e) {
          e.preventDefault();

          currentCategory = this.dataset.category;
          currentPage = 1;

          const url = new URL(window.location.href);

          if (currentCategory === 'All Products') {
            url.searchParams.delete('category');
          } else {
            url.searchParams.set('category', currentCategory);
          }

          window.history.replaceState({}, '', url);

          // Clear search when category changes
          searchTerm = '';

          if (searchInput) {
            searchInput.value = '';
          }

          // Update sidebar
          renderSidebar();

          // Render filtered products
          renderProducts();

          // Close mobile sidebar
          if (typeof closeSidebar === 'function') {
            closeSidebar();
          }

          // Bring products slightly into view
          // Scroll to products section center when category changes
          const productGrid = document.getElementById('product-grid');

          if (productGrid) {
            setTimeout(() => {
              const grid = document.getElementById('product-grid');

              if (grid) {
                const rect = grid.getBoundingClientRect();

                window.scrollTo({
                  top: window.scrollY + rect.top - window.innerHeight * 0.4,
                  behavior: 'smooth'
                });
              }
            }, 100);
          }
        });
      });
    });
  }

  // Attach events to all size checkboxes (both desktop and mobile)


  function renderSidebar() {
    const cats = getCategories();
    // const sizes = getSizes();  // ← REMOVED

    let html = `
    <div class="premium-card mb-6">
      <h3 class="text-xs font-bold text-brand-textSecondary uppercase tracking-wider p-4 border-b border-brand-border">Categories</h3>
      <ul class="text-sm text-brand-textSecondary font-medium" id="category-list">`;

    cats.forEach(cat => {
      const count = getCategoryCount(cat);
      const active = currentCategory === cat ? 'active' : '';
      html += `<li><a href="#" class="flex items-center justify-between px-4 py-2.5 sidebar-link ${active} border-b border-brand-border/30 category-link" data-category="${cat}">${cat} <span class="text-xs font-normal">${count}</span></a></li>`;
    });



    sidebar.innerHTML = html;
    copySidebarContent();
  }

  function renderProducts() {
    const filtered = getFilteredProducts();
    const sorted = getSortedProducts(filtered);
    const total = products.length;
    const showing = sorted.length;

    const start = (currentPage - 1) * PRODUCTS_PER_PAGE + 1;
    const end = Math.min(currentPage * PRODUCTS_PER_PAGE, showing);

    if (showing > 0) {
      countLabel.textContent = `Showing ${start}–${end} of ${showing} products`;
    } else {
      countLabel.textContent = `Showing 0 of 0 products`;
    }

    const paginated = getPaginatedProducts(sorted);

    grid.innerHTML = '';

    if (paginated.length === 0) {
      emptyState.classList.remove('hidden');
    } else {
      emptyState.classList.add('hidden');

      const reordered = [];

      if (paginated.length >= 6) {
        reordered.push(paginated[3], paginated[4], paginated[5]);
        reordered.push(paginated[0], paginated[1], paginated[2]);

        for (let i = 6; i < paginated.length; i++) {
          reordered.push(paginated[i]);
        }
      } else {
        reordered.push(...paginated);
      }

      reordered.forEach(p => grid.appendChild(createProductCard(p)));

      gsap.set('.product-card', { y: 30, opacity: 0 });

      gsap.to('.product-card', {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'back.out(1.2)',
        overwrite: 'auto'
      });
    }

    renderPagination(showing);
    renderPopularProducts();

    const popularSection = document.getElementById('popular-section');

    const hasActiveFilter =
      currentCategory !== 'All Products' ||
      selectedSizes.length > 0 ||
      searchTerm.trim() !== '';

    if (popularSection && hasActiveFilter) {
      grid.parentElement.appendChild(popularSection);
    }
  }

  function initEvents() {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      currentPage = 1;
      renderProducts();
    });
    sortSelect.addEventListener('change', () => {
      currentPage = 1;
      renderProducts();
    });
  }

  // Initial mobile sidebar setup
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
      copySidebarContent();
      attachSidebarEvents();
    }, 150);
  });

  function init() {

    const urlParams = new URLSearchParams(window.location.search);

    // Category from URL
    const categoryQuery = urlParams.get('category');

    if (categoryQuery) {
      const matchedCategory = getCategories().find(
        cat => cat.toLowerCase() === categoryQuery.toLowerCase()
      );

      if (matchedCategory) {
        currentCategory = matchedCategory;
      }
    }

    // Search from URL
    const searchQuery = urlParams.get('search');

    if (searchQuery && searchInput) {
      searchInput.value = searchQuery;
      searchTerm = searchQuery;
    }

    renderSidebar();
    renderProducts();
    initEvents();

    const tl = gsap.timeline();

    tl.to(".header-content", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    })
      .to(".header-features", {
        opacity: 1,
        duration: 0.5
      }, "-=0.3")
      .to(".sidebar-anim", {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.2")
      .to(".toolbar-anim", {
        y: 0,
        opacity: 1,
        duration: 0.4
      }, "-=0.3")
      .to(".product-card", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.2)"
      }, "-=0.2")
      .to(".popular-section", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.2")
      .to(".footer-features", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1
      }, "-=0.3");

    gsap.set(".header-content, .toolbar-anim, .popular-section", {
      y: 20
    });

    gsap.set(".sidebar-anim", {
      x: -20
    });

    gsap.set(".product-card", {
      y: 30
    });

    gsap.set(".footer-features", {
      y: 15
    });
  }

  init();
})();