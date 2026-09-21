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
},
{
  id: "w965",
  name: "Mini Tote Bag",
  code: "W965",
  slug: "mini-tote-bag",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '6"W x 6"H',
  imprint: '4"W x 4"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/W965/W965_main.webp",
  description: "Mini tote bag made from 80 gsm non-woven fabric with a 10.5-inch handle."
},
{
  id: "w967",
  name: "Jumbo Heavy Duty Grocery Bag",
  code: "W967",
  slug: "jumbo-heavy-duty-grocery-bag",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '13"W x 15"H x 10"D',
  imprint: '6"W x 10"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/W967/W967_main.webp",
  description: "Jumbo heavy duty grocery bag made from 100 gsm non-woven fabric with 22-inch reinforced handles and bottom and side gussets."
},
{
  "id": "w968",
  "name": "Foldable Tote",
  "code": "W968",
  "slug": "foldable-tote",
  "category": "Non-Woven Bags",
  "material": "Non-Woven Fabric",
  "size": "14.75\"W x 14.75\"H",
  "imprint": "Front: 4\"W x 2\"H, Back: 10\"W x 10\"H",
  "price": 35.00,
  "originalPrice": 50.0,
  "image": "assets/assets/images/products/non-woven/W968/W968_main.webp",
  "description": "Foldable tote made from 80 gsm non-woven fabric with an 18-inch handle."
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
  id: "w977",
  name: "Insulated Grocery Bag",
  code: "W977",
  slug: "insulated-grocery-bag",
  category: "Non-Woven Bags",
  material: "Non Woven",
  size: '13"W x 15"H x 9"D',
  imprint: '4"W x 4"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/W977/W977_main.webp",
  description: "Insulated grocery bag made from 235 gsm non-woven material with 22-inch reinforced handles and bottom and side gussets."
},
{
  id: "w964",
  name: "Small Shopper Bag",
  code: "W964",
  slug: "small-shopper-bag",
  category: "Non-Woven Bags",
  material: "Non Woven",
  size: '10"W x 12"H x 3"D',
  imprint: '6"W x 8"H',
  "price": 35.00,
  "originalPrice": 50.0,
  image: "assets/assets/images/products/non-woven/W964/W964_main.webp",
  description: "Small shopper bag made from 80 gsm non-woven fabric with a 16-inch handle and bottom and side gussets."
},

{
  id: "w973",
  name: "Laminated Tote",
  code: "W973",
  slug: "laminated-tote",
  category: "Non-Woven Bags",
  material: "Non Woven, Laminated",
  size: '15.75"W x 12.5"H x 6.25"D',
  imprint: '10"W x 8"H',
  "price": 35.00,
  "originalPrice": 50.0,
  image: "assets/assets/images/products/non-woven/W973/W973_main.webp",
  description: "Laminated tote made from 110 gsm non-woven material with 20-inch handles and bottom and side gussets."
},
{
  "id": "w974",
  "name": "Laminated Tote",
  "code": "W974",
  "slug": "laminated-tote",
  "category": "Non-Woven Bags",
  "material": "Non-Woven Polypropylene, Laminated",
  "size": "12.75\"W x 15.75\"H x 4.75\"D",
  "imprint": "8\"W x 10\"H",
  "price": 35.00,
  "originalPrice": 50.0,
  "image": "assets/assets/images/products/non-woven/W974/W974_main.webp",
  "description": "Laminated tote made from 110 gsm non-woven polypropylene with 19-inch handles and bottom and side gussets."
},
{
  id: "w961",
  name: "Jumbo Shopper Bag",
  code: "W961",
  slug: "jumbo-shopper-bag",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '20"W x 16"H x 6"D',
  imprint: '14"W x 10"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/W961/W961_main.webp",
  description: "Jumbo shopper bag made from 80 gsm non-woven fabric with bottom and side gussets.",
},
{
  id: "w957",
  name: "Non Woven Grocery Bag",
  code: "W957",
  slug: "non-woven-grocery-bag",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '12.5"W x 13.5"H x 8.5"D',
  imprint: '5.5"W X 10"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/W957/W957_main.webp",
  description: "Non woven grocery bag made from 80 gsm non-woven fabric with 22-inch reinforced handles and bottom and side gussets.",
},
{
  id: "w966",
  name: "Non Woven Laundry Bag",
  code: "W966",
  slug: "non-woven-laundry-bag",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '18"W x 24"H',
  imprint: '4"W x 4"H, 12"W x 14"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/W966/W966_main.webp",
  description: "Non woven laundry bag made from 80 GSM non-woven fabric with front pocket and large back-side imprint area."
},
{
  id: "w962",
  name: "Non Woven Shopper",
  code: "W962",
  slug: "non-woven-shopper",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '16"W x 12"H x 6"D',
  imprint: '10"W x 8"H',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/W962/W962_main.webp",
  description: "Non woven shopper bag made from 80 gsm non-woven fabric with bottom and side gussets."
},
{
  "id": "w983",
  "name": "Newspaper Bag",
  "code": "W983",
  "slug": "newspaper-bag",
  "category": "Non-Woven Bags",
  "material": "Non-Woven",
  "size": "12\"W x 14.5\"H x 2.5\"D",
  "imprint": "8\"W x 9\"H",
  "price": 35.00,
  "originalPrice": 50.0,
  "image": "assets/assets/images/products/non-woven/W983/W983_main.webp",
  "description": "Newspaper bag made from 80 gsm non-woven fabric with a 14-inch handle."
},
{
  "id": "w976",
  "name": "Econo Convention Tote",
  "code": "W976",
  "slug": "econo-convention-tote",
  "category": "Non-Woven Bags",
  "material": "Non-Woven",
  "size": "15\"W x 16\"H x 1.5\"D",
  "imprint": "10\"W x 10\"H",
  "price": 35.00,
  "originalPrice": 50.0,
  "image": "assets/assets/images/products/non-woven/W976/W976_main.webp",
  "description": "Econo convention tote made from 80 gsm non-woven fabric with a bottom gusset and 15-inch handles."
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
  price: 1.13,
  originalPrice: 1.13,

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
  id: "w955",
  name: "Large Grocery Bag",
  code: "W955",
  slug: "large-grocery-bag",
  category: "Tote Bags",
  material: "100% Cotton Canvas",
  size: '15"W x 18"H x 6"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/W955/W955_main.webp",
  description: "Large grocery bag made from 12oz 100% cotton canvas with bottom and side gussets."
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
  id: "w918",
  name: "Canvas Big Tote Bag",
  code: "W918",
  slug: "canvas-big-tote-bag",
  category: "Tote Bags",
  material: "100% Cotton Canvas",
  size: '17"W x 13"H x 5"D',
  price: 30.00,
  originalPrice: 45.00,
  image: "assets/assets/images/products/tote-bags/W918/W918_main.webp",
  description: "Canvas big tote bag made from 18 oz 100% cotton canvas with a bottom gusset."
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
  id: "w958",
  name: "Non Woven Two Tone Tote/Book Bag",
  code: "W958",
  slug: "non-woven-two-tone-tote-book-bag",
  category: "Non-Woven Bags",
  material: "Non-Woven Fabric",
  size: '11"W x 14"H x 5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/W958/W958_main.webp",
  description: "Non woven two tone tote/book bag made from 90 gsm non-woven fabric with an 18-inch handle and bottom and side gussets."
},

{
  id: "w975",
  name: "Econo Tote Bag",
  code: "W975",
  slug: "econo-tote-bag",
  category: "Non-Woven Bags",
  material: "Non-Woven",
  size: '14.25"W x 15"H x 5"D',
  price: 35.00,
  originalPrice: 50.00,
  image: "assets/assets/images/products/non-woven/W975/W975_main.webp",
  description: "Economical non-woven tote.",
  popular: true
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
  image: "assets/assets/images/products/T-shirts/IT1003/1003-texas-orange-01.jpg",
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
  image: "assets/assets/images/products/T-shirts/IT1005/1005-white-01.jpg",
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
  price: 8.75,
  image: "assets/assets/images/products/hoodies/IT3130/3130-royal-01.jpg",
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
  price: 16.75,
  image: "assets/assets/images/products/hoodies/IT5001/5001-red-01.jpeg",
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
  price: 8.75,
  image: "assets/assets/images/products/hoodies/IT5108/5108-white-01.jpg",
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
  price: 10.00,
  image: "assets/assets/images/products/hoodies/IT5109/5109-new-navy-01.jpg",
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
  price: 17.45,
  image: "assets/assets/images/products/hoodies/IT15001/15001-natural-01.jpg",
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
  price: 9.75,
  image: "assets/assets/images/products/hoodies/ITP280/p280-gold-yellow-01.jpg",
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
  price: 8.25,
  image: "assets/assets/images/products/hoodies/ITY300/Y300-maroon-burgundy-01.jpg",
  description: "Youth-sized 8.8 oz blank pullover hoodie in 70/30 cotton-poly fleece. Built for school, team, and youth organization programs with a smooth print face, two-ply hood, and spandex-reinforced ribbing for lasting shape.",
  popular: false
},
{
  id: "ITY5501",
  name: "Youth Fleece Jogger Pant",
  code: "ITY5501",
  slug: "youth-fleece-jogger-pant",
  category: "Pants",
  material: "70% Cotton / 30% Polyester Fleece (8.8 oz / 298 GSM)",
  size: 'S - XL (2XL, 3XL, 4XL, 5XL available)',
  price: 7.75,
  image: "assets/assets/images/products/pants/ITY5501/Y5501-black-01.jpg",
  description: "Youth-sized 8.8 oz blank fleece jogger pants in 70/30 cotton-poly. Tapered fit with cuffed rib bottoms, elasticated waist, and off-seam pockets for flat decoration panels. Sizes XS-M ship without drawstring to meet children's safety standards.",
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

  function getSizeCount(size) {
    const normalizedSize = size.trim().replace(/\s+/g, ' ');
    return products.filter(p => {
      if (!p.size) return false;
      const normalizedProductSize = p.size.trim().replace(/\s+/g, ' ');
      return normalizedProductSize === normalizedSize;
    }).length;
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
    // Category checks
    const category = product.category?.toLowerCase() || '';
    const isBlanket = category === 'blankets';
    const isTShirt = category.includes('t-shirt') || category.includes('tshirt');
    const isHoodie = category.includes('hoodie');
    const isPants = category.includes('pants');

    // Hide mockup for these categories
    const hideMockup = isBlanket || isTShirt || isHoodie || isPants;
    div.innerHTML = `

        <span class="absolute top-1 left-4 bg-brand-navy text-white text-[10px] font-bold px-2 py-0.5 rounded z-10 border border-white/10">
            ${product.code}
        </span>

        <a href="${link}" class="block relative h-48 mb-1 flex items-center justify-center product-img-bg group-hover:scale-105 transition-transform duration-500 overflow-visible">
            <img src="${product.image}" alt="${product.name}" class="max-h-full object-contain" />
        </a>

        <!-- Size Badge -->
        <div class="relative flex justify-center -mt-[1px] mb-3 z-10">
            <span class="bg-brand-navy/90 text-white text-[9px] font-medium px-3 py-0.5 rounded border border-white/10 shadow-md backdrop-blur-sm whitespace-nowrap">
                ${product.size}
            </span>
        </div>
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

                ${!isBlanket ? `
                    <div class="text-[12px] text-brand-textSecondary font-medium mb-1">
                        ${isTShirt || isHoodie || isPants
                            ? '<span class="blink-text">As Low As</span>'
                            : 'Setup Was'
                        }
                    </div>
                ` : ''}

                <div class="flex items-center gap-2 flex-wrap mb-3">

                    ${product.originalPrice && !isBlanket ? `
                        <span class="text-[15px] text-brand-textSecondary line-through opacity-50 font-medium">
                            $${product.originalPrice.toFixed(2)}
                        </span>
                    ` : ''}

                    <span class="text-brand-crimson font-bold text-base">
                        $${product.price.toFixed(2)}
                    </span>

                    <span class="text-[12px] font-bold text-brand-crimson bg-red-50 px-2 py-0.5 rounded border border-brand-crimson/30">
                        ${isBlanket ? 'R' : 'Net Price'}
                    </span>

                </div>

                <div class="flex items-center gap-1 w-full">

                    <!-- QUOTE -->
                    <a href="${link}?action=quote"
                        class="flex-1 border border-brand-border text-brand-textSecondary text-[10px] font-semibold py-1.5 px-1 rounded hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-colors flex items-center justify-center gap-1">
                        <i class="fa-regular fa-pen-to-square"></i> QUOTE
                    </a>

                    <!-- MOCKUP -->
                    ${!hideMockup ? `
                        <a href="${link}?action=mockup"
                            class="flex-1 border border-brand-border text-brand-textSecondary text-[10px] font-semibold py-1.5 px-1 rounded hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-colors flex items-center justify-center gap-1">
                            <i class="fa-solid fa-wand-magic-sparkles"></i> MOCKUP
                        </a>
                    ` : ''}

                    <!-- FREIGHT -->
                    <a href="${link}?action=freight"
                        class="flex-1 bg-brand-crimson text-white text-[10px] font-semibold py-1.5 px-1 rounded hover:bg-brand-crimsonHover transition-colors flex items-center justify-center gap-1 border border-brand-crimson">
                        <i class="fa-solid fa-truck-fast"></i> FREIGHT
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