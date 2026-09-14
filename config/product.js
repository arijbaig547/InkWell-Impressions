// ============================================================
// HAMBURGER MENU
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerIcon = document.getElementById('hamburgerIcon');

    if (hamburgerBtn && mobileMenu && hamburgerIcon) {
        hamburgerBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
            hamburgerIcon.classList.toggle('fa-bars');
            hamburgerIcon.classList.toggle('fa-xmark');
        });
    }
});


// ============================================================
// NOTIFICATION FUNCTION
// ============================================================
function showNotification(message, type = 'success') {
    // Simple alert for now - you can make it fancy later
    alert(message);
}
function downloadSpecPicture() {
    const container = document.getElementById('spec-picture-container');
    if (!container) {
        alert('❌ No spec sheet available');
        return;
    }

    // Spec sheet element dhundo (white card)
    const specElement = container.querySelector('.bg-white');
    if (!specElement) {
        alert('❌ Spec sheet not found');
        return;
    }

    // Check if html2canvas is loaded
    if (typeof html2canvas === 'undefined') {
        alert('❌ html2canvas library not loaded. Please refresh the page.');
        return;
    }

    // Get current product code for filename
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || 'product';

    // Show loading indicator
    const btn = event?.target?.closest('button');
    const originalHTML = btn?.innerHTML;
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating...';
    }

    // Convert to canvas with 2x scale for high quality
    html2canvas(specElement, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true
    }).then(canvas => {
        // Create download link
        const link = document.createElement('a');
        link.download = `${productId}_spec_sheet.png`;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset button
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = originalHTML || '<i class="fa-solid fa-download"></i> DOWNLOAD SPEC PICTURE';
        }
    }).catch(err => {
        console.error('Spec picture download error:', err);
        alert('❌ Could not download spec picture. Please try again.');

        // Reset button
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = originalHTML || '<i class="fa-solid fa-download"></i> DOWNLOAD SPEC PICTURE';
        }
    });
}

// ============================================================
// 1. PRODUCT DATA WITH LOCAL IMAGES
// ============================================================
const products = [{
    id: "ib29",
    name: "11X9 Canvas Tote Bag",
    code: "IB29",
    slug: "11x9-canvas-tote-bag",
    category: "Tote Bags",
    material: "Canvas",
    size: '9"W x 11.5"H x 1.5"D',
    imprint: '5"W x 7"H',
    price: 45.00,
    image: "assets/assets/images/products/tote-bags/IB29/IB29_main.webp",
    description: "7oz cotton canvas bag with self-fabric handles. Reinforced stitching. Perfect for promotional giveaways, retail, and everyday use.",
    popular: true,
    colors: [
        { name: "Natural", hex: "#F5F5DC", image: "assets/assets/images/products/tote-bags/IB29/IB29_natural.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/tote-bags/IB29/IB29_black.jpg" },
        { name: "Navy", hex: "#000080", image: "assets/assets/images/products/tote-bags/IB29/IB29_navy.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/tote-bags/IB29/IB29_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/tote-bags/IB29/IB29_royal.webp" }
    ],
    images: [
        "assets/assets/images/products/tote-bags/IB29/IB29_main.webp",
        "assets/assets/images/products/tote-bags/IB29/IB29_natural.webp",
        "assets/assets/images/products/tote-bags/IB29/IB29_navy.webp"
    ],
    specs: {
        itemNo: "IB29",
        gusset: "Bottom: Yes Side: No",
        weight: "7oz",
        material: "100% Cotton Canvas",
        handle: "16\"",
        origin: "USA",
        boxQuantity: "336 pcs",
        boxWeight: "31.74 lbs",
        boxDims: '19.5" x 14" x 13"'
    },
    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$3.69", "$2.77", "$2.60", "$2.44", "$2.24", "$2.13"] },
                { label: "COLOR", prices: ["$4.44", "$3.48", "$3.36", "$3.16", "$2.97", "$2.85"] },
                { label: "ADD LOCATION ", prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"] },
                { label: "ADD COLOR", prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"] }
            ]
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$9.18", "$7.75", "$7.17", "$6.65", "$6.48", "$6.32"] },
                { label: "COLOR", prices: ["$9.47", "$8.03", "$7.45", "$6.93", "$6.77", "$6.60"] }
            ]
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "NATURAL", prices: ["$1.56"] },
                { label: "COLOR", prices: ["$1.85"] }
            ]
        }
    },
    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "w965",
    name: "Mini Tote Bag",
    code: "W965",
    slug: "mini-tote-bag",
    category: "Non-Woven Bags",
    material: "Non Woven",
    size: '6"W x 6"H',
    imprint: '4"W x 4"H',
    price: 0.58,
    originalPrice: 50.00,
    image: "assets/assets/images/products/non-woven/W965/W965_main.webp",
    description: "Mini tote bag made from 80 gsm non-woven fabric with a 10.5-inch handle.",

    colors: [
        { name: 'Black', hex: '#000000', image: 'assets/assets/images/products/non-woven/W965/W965_black.webp' },
        { name: 'Burgundy', hex: '#800020', image: 'assets/assets/images/products/non-woven/W965/W965_burgundy.webp' },
        { name: 'Ivory', hex: '#FFFFF0', image: 'assets/assets/images/products/non-woven/W965/W965_ivory.webp' },
        { name: 'Red', hex: '#FF0000', image: 'assets/assets/images/products/non-woven/W965/W965_red.webp' },
        { name: 'Royal', hex: '#4169E1', image: 'assets/assets/images/products/non-woven/W965/W965_royal.webp' },
        { name: 'White', hex: '#FFFFFF', image: 'assets/assets/images/products/non-woven/W965/W965_white.webp' },
        { name: 'Yellow', hex: '#FFFF00', image: 'assets/assets/images/products/non-woven/W965/W965_yellow.webp' }
    ],
    images: [
        "assets/assets/images/products/non-woven/W965/W965_main.webp",
        "assets/assets/images/products/non-woven/W965/W965_black.webp",
        "assets/assets/images/products/non-woven/W965/W965_burgundy.webp",
        "assets/assets/images/products/non-woven/W965/W965_ivory.webp",
        "assets/assets/images/products/non-woven/W965/W965_red.webp",
        "assets/assets/images/products/non-woven/W965/W965_royal.webp",
        "assets/assets/images/products/non-woven/W965/W965_white.webp",
        "assets/assets/images/products/non-woven/W965/W965_yellow.webp"
    ],

    specs: {
        itemNo: "W965",
        gusset: "Bottom: No, Side: No",
        weight: "80 gsm",
        material: "Non Woven",
        handle: '10.5"',
        origin: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "400 pcs",
                boxWeight: "27 lbs",
                boxDims: '20" X 16" X 14"'
            },
            {
                type: "Printed Large Box",
                qtyPerBox: "1000 pcs",
                boxWeight: "19 lbs",
                boxDims: '16" X 16" X 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "300 pcs",
                boxWeight: "6 lbs",
                boxDims: '8" X 16" X 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$1.32", "$1.23", "$1.16", "$1.09", "$1.03", "$0.97"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56", "$0.56"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$62.50 (V)",
            repeatSetup: "$37.50 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$4.85", "$4.53", "$4.38", "$4.10", "$3.86", "$3.62"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.69", "$1.69", "$1.69", "$1.69", "$1.69", "$1.69"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "COLOR",
                    prices: ["$0.58"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$56.25 (V)",
        setupCharge: "$62.50 (V)",
        repeatSetup: "$37.50 (V)",
        lessThanMinimum: "Call for pricing"
    }
},
{
    "id": "w968",
    "name": "Foldable Tote",
    "code": "W968",
    "slug": "foldable-tote",
    "category": "Non-Woven Bags",
    "material": "Non Woven",
    "size": "14.75\"W x 14.75\"H",
    "imprint": "Front: 4\"W x 2\"H, Back: 10\"W x 10\"H",
    "price": 1.14,
    "originalPrice": 50.0,
    "image": "assets/assets/images/products/non-woven/W968/W968_main.webp",
    "description": "Foldable tote made from 80 gsm non-woven fabric with an 18-inch handle.",
    "colors": [
        {
            "name": "Black",
            "hex": "#000000",
            "image": "assets/assets/images/products/non-woven/W968/W968_black.webp"
        },
        {
            "name": "Hunter Green",
            "hex": "#355E3B",
            "image": "assets/assets/images/products/non-woven/W968/W968_hunter_green.webp"
        },
        {
            "name": "Red",
            "hex": "#FF0000",
            "image": "assets/assets/images/products/non-woven/W968/W968_red.webp"
        },
        {
            "name": "Royal",
            "hex": "#4169E1",
            "image": "assets/assets/images/products/non-woven/W968/W968_royal.webp"
        },
        {
            "name": "White",
            "hex": "#FFFFFF",
            "image": "assets/assets/images/products/non-woven/W968/W968_white.webp"
        }
    ],
    "images": [
        "assets/assets/images/products/non-woven/W968/W968_main.webp",
        "assets/assets/images/products/non-woven/W968/W968_black.webp",
        "assets/assets/images/products/non-woven/W968/W968_hunter_green.webp",
        "assets/assets/images/products/non-woven/W968/W968_red.webp",
        "assets/assets/images/products/non-woven/W968/W968_royal.webp",
        "assets/assets/images/products/non-woven/W968/W968_white.webp"
    ],
    "specs": {
        "itemNo": "W968",
        "gusset": "Bottom: No, Side: No",
        "weight": "80 gsm",
        "material": "Non Woven",
        "handle": "18\"",
        "origin": "USA",
        "packagingOptions": [
            {
                "type": "Blank",
                "qtyPerBox": "200 pcs",
                "boxWeight": "27 lbs",
                "boxDims": "20\" X 16\" X 14\""
            },
            {
                "type": "Printed Large Box",
                "qtyPerBox": "250 pcs",
                "boxWeight": "21 lbs",
                "boxDims": "16\" X 16\" X 20\""
            },
            {
                "type": "Printed Medium Box",
                "qtyPerBox": "125 pcs",
                "boxWeight": "11 lbs",
                "boxDims": "8\" X 16\" X 20\""
            }
        ]
    },
    "pricing": {
        "spot": {
            "label": "SPOT PRINTING PRICING (USD)",
            "quantities": [72, 288, 500, 1000, 2000, 3000],
            "rows": [
                {
                    "label": "COLOR",
                    "prices": ["$2.04", "$1.90", "$1.80", "$1.69", "$1.59", "$1.49"]
                },
                {
                    "label": "ADD LOCATION",
                    "prices": ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"]
                },
                {
                    "label": "ADD COLOR",
                    "prices": ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56", "$0.56"]
                }
            ],
            "priceIncludes": "1 Color, 1 Location",
            "leadTime": "5-7 Business Days",
            "setupCharge": "$62.50 (V)",
            "repeatSetup": "$37.50 (V)"
        },
        "transfer": {
            "label": "HEAT TRANSFER PRICING (USD)",
            "quantities": [100, 250, 500, 1000, 2000, 3000],
            "rows": [
                {
                    "label": "COLOR",
                    "prices": ["$3.85", "$3.59", "$3.49", "$3.27", "$3.08", "$2.89"]
                },
                {
                    "label": "ADD LOCATION (V)",
                    "prices": ["$1.69", "$1.69", "$1.69", "$1.69", "$1.69", "$1.69"]
                }
            ],
            "priceIncludes": "1 Color, 1 Location",
            "leadTime": "5-7 Business Days"
        },
        "blank": {
            "label": "BLANK PRICING (USD)",
            "rows": [
                {
                    "label": "COLOR",
                    "prices": ["$1.14"]
                }
            ],
            "priceIncludes": "Blank",
            "leadTime": "Within 1 to 2 Business Days",
            "moq": "No minimums. Can order as little as one piece."
        }
    },
    "additionalCharges": {
        "pmsMatch": "$56.25 (V)",
        "setupCharge": "$62.50 (V)",
        "repeatSetup": "$37.50 (V)",
        "lessThanMinimum": "Call for pricing"
    }
},

{
    id: "w973",
    name: "Laminated Tote",
    code: "W973",
    slug: "laminated-tote",
    category: "Non-Woven Bags",
    material: "Non-Woven, Laminated",
    size: "15.75\"W x 12.5\"H x 6.25\"D",
    imprint: "10\"W x 8\"H",
    price: 1.66,
    originalPrice: 50.0,
    image: "assets/assets/images/products/non-woven/W973/W973_main.webp",
    description: "Laminated tote made from 110 gsm non-woven fabric with a 20-inch handle and bottom and side gussets.",
    colors: [
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/non-woven/W973/W973_black.webp" },
        { name: "Hunter-Green", hex: "#355E3B", image: "assets/assets/images/products/non-woven/W973/W973_hunter_green.webp" },
        { name: "Ivory", hex: "#FFFFF0", image: "assets/assets/images/products/non-woven/W973/W973_ivory.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/non-woven/W973/W973_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/non-woven/W973/W973_royal.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/non-woven/W973/W973_white.webp" }
    ],
    images: [
        "assets/assets/images/products/non-woven/W973/W973_main.webp",
        "assets/assets/images/products/non-woven/W973/W973_black.webp",
        "assets/assets/images/products/non-woven/W973/W973_hunter_green.webp",
        "assets/assets/images/products/non-woven/W973/W973_ivory.webp",
        "assets/assets/images/products/non-woven/W973/W973_red.webp",
        "assets/assets/images/products/non-woven/W973/W973_royal.webp",
        "assets/assets/images/products/non-woven/W973/W973_white.webp"
    ],
    "specs": {
        itemNo: "W973",
        gusset: "Bottom: Yes, Side: Yes",
        weight: "110 gsm",
        material: "Non Woven, Laminated",
        handle: "20\"",
        origin: "USA",
        packagingOptions: [
            { type: "Blank", qtyPerBox: "100 pcs", boxWeight: "27 lbs", boxDims: "20\" X 16\" X 14\"" },
            { type: "Printed Large Box", qtyPerBox: "125 pcs", boxWeight: "21 lbs", boxDims: "16\" X 16\" X 20\"" },
            { type: "Printed Medium Box", qtyPerBox: "50 pcs", boxWeight: "9 lbs", boxDims: "8\" X 16\" X 20\"" }
        ]
    },
    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "COLOR", prices: ["$3.04", "$2.92", "$2.77", "$2.70", "$2.54", "$2.38"] },
                { label: "ADD LOCATION", prices: ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"] }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$62.50 (V)",
            repeatSetup: "$37.50 (V)"
        },
        // ❌ transfer property hatadi - ab ye show nahi hoga
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "COLOR", prices: ["$1.66"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece"
        }
    },
    additionalCharges: {
        pmsMatch: "$56.25 (V)",
        setupCharge: "$62.50 (V)",
        repeatSetup: "$37.50 (V)",
        lessThanMinimum: "Call for pricing"
    }
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
    price: 0.85,
    originalPrice: 50.00,
    image: "assets/assets/images/products/non-woven/W964/W964_main.webp",
    description: "Small shopper bag made from 80 gsm non-woven material with bottom and side gussets.",

    colors: [
        {
            name: "Black",
            hex: "#000000",
            image: "assets/assets/images/products/non-woven/W964/W964_black.webp"
        },
        {
            name: "Burgundy",
            hex: "#800020",
            image: "assets/assets/images/products/non-woven/W964/W964_burgundy.webp"
        },
        {
            name: "Kelly",
            hex: "#4CBB17",
            image: "assets/assets/images/products/non-woven/W964/W964_kelly.webp"
        },
        {
            name: "Navy",
            hex: "#000080",
            image: "assets/assets/images/products/non-woven/W964/W964_navy.webp"
        },
        {
            name: "Pink",
            hex: "#FFC0CB",
            image: "assets/assets/images/products/non-woven/W964/W964_pink.webp"
        },
        {
            name: "Red",
            hex: "#FF0000",
            image: "assets/assets/images/products/non-woven/W964/W964_red.webp"
        },
        {
            name: "Royal",
            hex: "#4169E1",
            image: "assets/assets/images/products/non-woven/W964/W964_royal.webp"
        },
        {
            name: "White",
            hex: "#FFFFFF",
            image: "assets/assets/images/products/non-woven/W964/W964_white.webp"
        }
    ],

    images: [
        "assets/assets/images/products/non-woven/W964/W964_main.webp",
        "assets/assets/images/products/non-woven/W964/W964_black.webp",
        "assets/assets/images/products/non-woven/W964/W964_burgundy.webp",
        "assets/assets/images/products/non-woven/W964/W964_kelly.webp",
        "assets/assets/images/products/non-woven/W964/W964_navy.webp",
        "assets/assets/images/products/non-woven/W964/W964_pink.webp",
        "assets/assets/images/products/non-woven/W964/W964_red.webp",
        "assets/assets/images/products/non-woven/W964/W964_royal.webp",
        "assets/assets/images/products/non-woven/W964/W964_white.webp"
    ],

    specs: {
        itemNo: "W964",
        gusset: "Bottom: Yes Side: Yes",
        weight: "80 gsm",
        material: "Non Woven",
        handle: '16"',
        decoratedIn: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "400 pcs",
                boxWeight: "22 lbs",
                boxDims: '15" x 21" x 17"'
            },
            {
                type: "Printed Large Box",
                qtyPerBox: "275 pcs",
                boxWeight: "19 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "100 pcs",
                boxWeight: "8 lbs",
                boxDims: '8" x 16" x 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$1.66", "$1.55", "$1.46", "$1.37", "$1.29", "$1.21"]
                },
                {
                    label: "ADD LOCATION (V)",
                    prices: ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"]
                },
                {
                    label: "ADD COLOR (V)",
                    prices: ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56", "$0.56"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$62.50 (V)",
            repeatSetup: "$37.50 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$5.19", "$4.84", "$4.68", "$4.38", "$4.13", "$3.88"]
                },
                {
                    label: "ADD LOCATION (V)",
                    prices: ["$1.69", "$1.69", "$1.69", "$1.69", "$1.69", "$1.69"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "COLOR",
                    prices: ["$0.85"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$56.25 (V)",
        setupCharge: "$62.50 (V)",
        repeatSetup: "$37.50 (V)",
        lessThanMinimum: "Call for pricing"
    }
},



{
    "id": "w967",
    "name": "Jumbo Heavy Duty Grocery Bag",
    "code": "W967",
    "slug": "jumbo-heavy-duty-grocery-bag",
    "category": "Non-Woven Bags",
    "material": "Non Woven",
    "size": "13\"W x 15\"H x 10\"D",
    "imprint": "6\"W x 10\"H",
    "price": 1.8,
    "originalPrice": 50.0,
    "image": "assets/assets/images/products/non-woven/W967/W967_main.webp",
    "description": "Jumbo heavy duty grocery bag made from 100 gsm non-woven fabric with reinforced handles and bottom and side gussets.",
    "colors": [
        {
            "name": "Black",
            "hex": "#000000",
            "image": "assets/assets/images/products/non-woven/W967/W967_black.webp"
        },
        {
            "name": "Hunter-Green",
            "hex": "#355E3B",
            "image": "assets/assets/images/products/non-woven/W967/W967_hunter_green.webp"
        },
        {
            "name": "Navy",
            "hex": "#000080",
            "image": "assets/assets/images/products/non-woven/W967/W967_navy.webp"
        },
        {
            "name": "Orange",
            "hex": "#FFA500",
            "image": "assets/assets/images/products/non-woven/W967/W967_orange.webp"
        },
        {
            "name": "Red",
            "hex": "#FF0000",
            "image": "assets/assets/images/products/non-woven/W967/W967_red.webp"
        },
        {
            "name": "Royal",
            "hex": "#4169E1",
            "image": "assets/assets/images/products/non-woven/W967/W967_royal.webp"
        },
        {
            "name": "White",
            "hex": "#FFFFFF",
            "image": "assets/assets/images/products/non-woven/W967/W967_white.webp"
        }
    ],
    "images": [
        "assets/assets/images/products/non-woven/W967/W967_main.webp",
        "assets/assets/images/products/non-woven/W967/W967_black.webp",
        "assets/assets/images/products/non-woven/W967/W967_hunter_green.webp",
        "assets/assets/images/products/non-woven/W967/W967_navy.webp",
        "assets/assets/images/products/non-woven/W967/W967_orange.webp",
        "assets/assets/images/products/non-woven/W967/W967_red.webp",
        "assets/assets/images/products/non-woven/W967/W967_royal.webp",
        "assets/assets/images/products/non-woven/W967/W967_white.webp"
    ],
    "specs": {
        "itemNo": "W967",
        "gusset": "Bottom: Yes, Side: Yes",
        "weight": "100 gsm",
        "material": "Non Woven",
        "handle": "22\" Reinforced Handles",
        "origin": "USA",
        "packagingOptions": [
            {
                "type": "Blank",
                "qtyPerBox": "150 pcs",
                "boxWeight": "38 lbs",
                "boxDims": "28\" X 15\" X 18\""
            },
            {
                "type": "Printed Large Box",
                "qtyPerBox": "100 pcs",
                "boxWeight": "25 lbs",
                "boxDims": "16\" X 16\" X 20\""
            },
            {
                "type": "Printed Medium Box",
                "qtyPerBox": "40 pcs",
                "boxWeight": "8 lbs",
                "boxDims": "9\" X 16\" X 20\""
            }
        ]
    },
    "pricing": {
        "spot": {
            "label": "SPOT PRINTING PRICING (USD)",
            "quantities": [72, 288, 500, 1000, 2000, 3000],
            "rows": [
                {
                    "label": "COLOR",
                    "prices": ["$2.69", "$2.58", "$2.54", "$2.39", "$2.24", "$2.09"]
                },
                {
                    "label": "ADD LOCATION",
                    "prices": ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"]
                },
                {
                    "label": "ADD COLOR",
                    "prices": ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56", "$0.56"]
                }
            ],
            "priceIncludes": "1 Color, 1 Location",
            "leadTime": "5-7 Business Days",
            "setupCharge": "$62.50 (V)",
            "repeatSetup": "$37.50 (V)"
        },
        "transfer": {
            "label": "HEAT TRANSFER PRICING (USD)",
            "quantities": [100, 250, 500, 1000, 2000, 3000],
            "rows": [
                {
                    "label": "COLOR",
                    "prices": ["$6.11", "$5.70", "$5.49", "$5.15", "$4.85", "$4.55"]
                },
                {
                    "label": "ADD LOCATION",
                    "prices": ["$1.69", "$1.69", "$1.69", "$1.69", "$1.69", "$1.69"]
                }
            ],
            "priceIncludes": "Heat Transfer, 1 Location",
            "leadTime": "7-10 Business Days",
            "setupCharge": "FREE",
            "repeatSetup": "FREE"
        },
        "blank": {
            "label": "BLANK PRICING (USD)",
            "rows": [
                {
                    "label": "COLOR",
                    "prices": ["$1.80"]
                }
            ],
            "priceIncludes": "Blank",
            "leadTime": "Within 1 to 2 Business Days",
            "moq": "No minimums. Can order as little as one piece."
        }
    },
    "additionalCharges": {
        "pmsMatch": "$56.25 (V)",
        "setupCharge": "$62.50 (V)",
        "repeatSetup": "$37.50 (V)",
        "lessThanMinimum": "Call for pricing"
    }
},
{
    id: "mqib6000",
    name: "Cotton Tote Bag Natural Body with Color Handles",
    code: "MQIB6000",
    slug: "cotton-tote-natural-color-handles",
    category: "Tote Bags",
    material: "Cotton",
    size: '15"W x 16"H',
    imprint: '10"W x 12"H',
    price: 30.00,
    image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_main.webp",
    description: "6oz. 100% cotton tote bag with natural body and color handles. Perfect for promotional events, trade shows, and everyday use. Durable construction with reinforced stitching.",
    popular: true,
    colors: [
        { name: "Army", hex: "#4B5320", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_army.webp" },
        { name: "Azalea", hex: "#FF69B4", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_azalea.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_black.webp" },
        { name: "Carolina-Blue", hex: "#99BADD", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_carolina_blue.webp" },
        { name: "Chocolate", hex: "#3D2314", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_chocolate.webp" },
        { name: "Forest-Green", hex: "#228B22", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_forest_green.webp" },
        { name: "Gold", hex: "#FFD700", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_gold.webp" },
        { name: "Hot-Pink", hex: "#FF69B4", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_hot_pink.webp" },
        { name: "Kelly", hex: "#4CBB17", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_kelly.webp" },
        { name: "Lavender", hex: "#B57EDC", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_lavender.webp" },
        { name: "Light-Pink", hex: "#FFB6C1", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_light_pink.webp" },
        { name: "Lime", hex: "#32CD32", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_lime.webp" },
        { name: "Maroon", hex: "#800000", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_maroon.webp" },
        { name: "Navy", hex: "#000080", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_navy.webp" },
        { name: "Orange", hex: "#FFA500", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_orange.webp" },
        { name: "Purple", hex: "#800080", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_purple.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_royal.webp" },
        { name: "Sapphire", hex: "#0F52BA", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_sapphire.webp" },
        { name: "Texas-Orange", hex: "#FF8C00", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_texas_orange.webp" },
        { name: "Turquoise", hex: "#40E0D0", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_turqoise.webp" },
        { name: "Yellow", hex: "#FFFF00", image: "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_yellow.webp" }
    ],
    images: [
        "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_main.webp",
        "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_army.webp",
        "assets/assets/images/products/tote-bags/MQIB6000/MQIB6000_black.webp"
    ],
    specs: {
        itemNo: "MQIB6000",
        gusset: "Bottom: No Side: No",
        weight: "6oz",
        material: "100% Cotton Canvas",
        handle: "22\"",
        origin: "USA",
        boxQuantity: "240 pcs",
        boxWeight: "39.23 lbs",
        boxDims: '17" x 17" x 15"'
    },
    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "COLOR", prices: ["$4.72", "$3.96", "$3.63", "$3.46", "$3.27", "$3.17"] },
                { label: "ADD LOCATION ", prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"] },
                { label: "ADD COLOR", prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"] }
            ]
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                { label: "COLOR", prices: ["$8.40", "$7.46", "$7.13", "$6.98", "$6.94", "$6.90"] }
            ]
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "COLOR", prices: ["$2.00"] }
            ]
        }
    },
    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
}, {
    id: "ib611",
    name: "Jumbo Canvas Zipper Tote with bottom Gusset",
    code: "IB611",
    slug: "jumbo-canvas-zipper-tote",
    category: "Tote Bags",
    material: "Canvas",
    size: '20"W x 15"H x 5"D',
    imprint: '12"W x 10"H',
    price: 30.00,
    image: "assets/assets/images/products/tote-bags/IB611/IB611_main.webp",
    description: "12oz. canvas, 100% cotton, jumbo tote with full length zipper and bottom gusset. Perfect for heavy-duty use, shopping, and promotional events.",
    popular: false,
    colors: [
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/tote-bags/IB611/IB611_black.webp" },
        { name: "Chocolate", hex: "#3D2314", image: "assets/assets/images/products/tote-bags/IB611/IB611_chocolate.webp" },
        { name: "Light-Pink", hex: "#FFB6C1", image: "assets/assets/images/products/tote-bags/IB611/IB611_light_pink.webp" },
        { name: "Lime", hex: "#32CD32", image: "assets/assets/images/products/tote-bags/IB611/IB611_lime.webp" },
        { name: "Natural", hex: "#F5F5DC", image: "assets/assets/images/products/tote-bags/IB611/IB611_natural.webp" },
        { name: "Navy", hex: "#000080", image: "assets/assets/images/products/tote-bags/IB611/IB611_navy.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/tote-bags/IB611/IB611_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/tote-bags/IB611/IB611_royal.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/tote-bags/IB611/IB611_white.webp" },
        { name: "Yellow", hex: "#FFFF00", image: "assets/assets/images/products/tote-bags/IB611/IB611_yellow.webp" }
    ],
    images: [
        "assets/assets/images/products/tote-bags/IB611/IB611_main.webp",
        "assets/assets/images/products/tote-bags/IB611/IB611_black.webp",
        "assets/assets/images/products/tote-bags/IB611/IB611_natural.webp"
    ],
    specs: {
        itemNo: "IB611",
        gusset: "Bottom: Yes Side: No",
        weight: "12oz",
        material: "100% Cotton Canvas",
        handle: "24\"",
        origin: "USA",
        boxQuantity: "60 pcs",
        boxWeight: "34.16 lbs",
        boxDims: '21.5" x 17.5" x 9"'
    },
    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$8.44", "$7.58", "$7.25", "$7.08", "$6.90", "$6.79"] },
                { label: "COLOR", prices: ["$10.00", "$9.10", "$8.77", "$8.60", "$8.42", "$8.31"] },
                { label: "ADD LOCATION ", prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"] },
                { label: "ADD COLOR", prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"] }
            ]
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$12.44", "$11.50", "$11.17", "$11.02", "$10.98", "$10.94"] },
                { label: "COLOR", prices: ["$13.54", "$12.60", "$12.27", "$12.13", "$12.08", "$12.04"] }
            ]
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "NATURAL", prices: ["$5.80"] },
                { label: "COLOR", prices: ["$6.84"] }
            ]
        }
    },
    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
}, {
    id: "mqib",
    name: "Cotton Tote Bag",
    code: "MQIB",
    slug: "cotton-tote-bag",
    category: "Tote Bags",
    material: "Cotton",
    size: '15"W x 16"H',
    imprint: '10"W x 12"H',
    price: 30.00,
    image: "assets/assets/images/products/tote-bags/MQIB/MQIB_main.webp",
    description: "Premium 6oz cotton canvas tote bag. Ideal for everyday use, shopping, and promotional events. Durable construction with reinforced handles.",
    popular: true,
    colors: [
        { name: "Army", hex: "#4B5320", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_army.webp" },
        { name: "Azalea", hex: "#FF69B4", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_azalea.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_black.webp" },
        { name: "Carolina-Blue", hex: "#99BADD", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_carolina_blue.webp" },
        { name: "Chocolate", hex: "#3D2314", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_chocolate.webp" },
        { name: "Dark-Grey", hex: "#A9A9A9", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_dark_grey.webp" },
        { name: "Forest-Green", hex: "#228B22", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_forest_green.webp" },
        { name: "Gold", hex: "#FFD700", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_gold.webp" },
        { name: "Hot-Pink", hex: "#FF69B4", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_hot_pink.webp" },
        { name: "Kelly", hex: "#4CBB17", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_kelly.webp" },
        { name: "Lavender", hex: "#B57EDC", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_lavender.webp" },
        { name: "Light-Grey", hex: "#D3D3D3", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_light_grey.webp" },
        { name: "Light-Pink", hex: "#FFB6C1", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_light_pink.webp" },
        { name: "Lime", hex: "#32CD32", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_lime.webp" },
        { name: "Maroon", hex: "#800000", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_maroon.webp" },
        { name: "Natural", hex: "#F5F5DC", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_natural.webp" },
        { name: "Navy", hex: "#000080", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_navy.webp" },
        { name: "Orange", hex: "#FFA500", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_orange.webp" },
        { name: "Purple", hex: "#800080", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_purple.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_royal.webp" },
        { name: "Sapphire", hex: "#0F52BA", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_sapphire.webp" },
        { name: "Texas-Orange", hex: "#FF8C00", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_texas_orange.webp" },
        { name: "Turquoise", hex: "#40E0D0", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_turqoise.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_white.webp" },
        { name: "Yellow", hex: "#FFFF00", image: "assets/assets/images/products/tote-bags/MQIB/MQIB_yellow.webp" }
    ],
    images: [
        "assets/assets/images/products/tote-bags/MQIB/MQIB_main.webp",
        "assets/assets/images/products/tote-bags/MQIB/MQIB_black.webp",
        "assets/assets/images/products/tote-bags/MQIB/MQIB_natural.webp"
    ],
    specs: {
        itemNo: "MQIB",
        gusset: "Bottom: No Side: No",
        weight: "6oz",
        material: "100% Cotton Canvas",
        handle: "22\"",
        origin: "USA",
        boxQuantity: "240pcs (Natural), 216 pcs (Colors)",
        boxWeight: "39.23 lbs",
        boxDims: '17" x 17" x 15"'
    },
    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$4.02", "$3.27", "$2.94", "$2.77", "$2.58", "$2.48"] },
                { label: "COLOR", prices: ["$5.00", "$4.23", "$3.90", "$3.73", "$3.54", "$3.44"] },
                { label: "ADD LOCATION ", prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"] },
                { label: "ADD COLOR", prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"] }
            ]
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$8.13", "$7.19", "$6.85", "$6.71", "$6.67", "$6.63"] },
                { label: "COLOR", prices: ["$8.67", "$7.73", "$7.40", "$7.25", "$7.21", "$7.17"] }
            ]
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "NATURAL", prices: ["$1.75"] },
                { label: "COLOR", prices: ["$2.25"] }
            ]
        }
    },
    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "ids125700",
    name: "Canvas Sports Backpack",
    code: "IDS125700",
    slug: "canvas-sports-backpack",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '14"W x 18"H x 2"D',
    imprint: '8"W x 10"H',
    price: 11.40,
    image: "assets/assets/images/products/tote-bags/IDS125700/IDS125700_natural.webp",
    description: "Canvas sports backpack made from 12 oz 100% cotton canvas with a bottom gusset.",
    colors: [
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/tote-bags/IDS125700/IDS125700_black.webp" },
        { name: "Chocolate", hex: "#5A3825", image: "assets/assets/images/products/tote-bags/IDS125700/IDS125700_chocolate.webp" },
        { name: "Light-Pink", hex: "#F8C8D8", image: "assets/assets/images/products/tote-bags/IDS125700/IDS125700_light_pink.webp" },
        { name: "Lime", hex: "#A8C93A", image: "assets/assets/images/products/tote-bags/IDS125700/IDS125700_lime.webp" },
        { name: "Maroon", hex: "#800000", image: "assets/assets/images/products/tote-bags/IDS125700/IDS125700_maroon.webp" },
        { name: "Natural", hex: "#E8DCC4", image: "assets/assets/images/products/tote-bags/IDS125700/IDS125700_natural.webp" },
        { name: "Navy", hex: "#1F2A44", image: "assets/assets/images/products/tote-bags/IDS125700/IDS125700_navy.webp" },
        { name: "Purple", hex: "#800080", image: "assets/assets/images/products/tote-bags/IDS125700/IDS125700_purple.webp" },
        { name: "Red", hex: "#D32F2F", image: "assets/assets/images/products/tote-bags/IDS125700/IDS125700_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/tote-bags/IDS125700/IDS125700_royal.webp" }
    ],

    images: [
        "assets/assets/images/products/tote-bags/IDS125700/IDS125700_natural.webp",
        "assets/assets/images/products/tote-bags/IDS125700/IDS125700_black.webp",
        "assets/assets/images/products/tote-bags/IDS125700/IDS125700_chocolate.webp",
        "assets/assets/images/products/tote-bags/IDS125700/IDS125700_light_pink.webp",
        "assets/assets/images/products/tote-bags/IDS125700/IDS125700_lime.webp",
        "assets/assets/images/products/tote-bags/IDS125700/IDS125700_maroon.webp",
        "assets/assets/images/products/tote-bags/IDS125700/IDS125700_navy.webp",
        "assets/assets/images/products/tote-bags/IDS125700/IDS125700_purple.webp",
        "assets/assets/images/products/tote-bags/IDS125700/IDS125700_red.webp",
        "assets/assets/images/products/tote-bags/IDS125700/IDS125700_royal.webp"
    ],

    specs: {
        itemNo: "IDS125700",
        gusset: "Bottom: Yes Side: No",
        weight: "12 oz",
        material: "100% Cotton Canvas",
        handle: '22"',
        origin: "USA",
        boxQuantity: "72 pcs",
        boxWeight: "39.67 lbs",
        boxDims: '19" x 19" x 11.5"'
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$7.37", "$6.54", "$6.21", "$6.04", "$5.85", "$5.75"] },
                { label: "COLOR", prices: ["$8.27", "$7.42", "$7.08", "$6.92", "$6.73", "$6.63"] },
                { label: "ADD LOCATION", prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"] },
                { label: "ADD COLOR", prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"] }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$25.00 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$11.40", "$10.46", "$10.13", "$9.98", "$9.94", "$9.90"] },
                { label: "COLOR", prices: ["$11.85", "$10.92", "$10.58", "$10.44", "$10.40", "$10.35"] }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "NATURAL", prices: ["$4.82"] },
                { label: "COLOR", prices: ["$5.25"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece"
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "ids4500",
    name: "Cotton Sports Pack",
    code: "IDS4500",
    slug: "cotton-sports-pack",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '14"W x 18"H',
    imprint: '8"W x 10"H',
    price: 3.50,
    originalPrice: 45.00,
    image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_natural.webp",
    description: "Cotton sports pack made from 6 oz 100% cotton with no bottom or side gusset.",

    colors: [
        {
            name: "Army",
            hex: "#4B5320",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_army.webp"
        },
        {
            name: "Azalea",
            hex: "#F15BB5",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_azalea.webp"
        },
        {
            name: "Black",
            hex: "#1C1C1C",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_black.webp"
        },
        {
            name: "Carolina-Blue",
            hex: "#56A8D8",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_carolina_blue.webp"
        },
        {
            name: "Chocolate",
            hex: "#5A3825",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_chocolate.webp"
        },
        {
            name: "Forest-Green",
            hex: "#35513B",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_forest_green.webp"
        },
        {
            name: "Gold",
            hex: "#D4AF37",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_gold.webp"
        },
        {
            name: "Grey",
            hex: "#808080",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_grey.webp"
        },
        {
            name: "Hot-Pink",
            hex: "#FF69B4",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_hot_pink.webp"
        },
        {
            name: "Kelly",
            hex: "#4CBB17",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_kelly.webp"
        },
        {
            name: "Lavender",
            hex: "#B57EDC",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_lavender.webp"
        },
        {
            name: "Light-Pink",
            hex: "#FFB6C1",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_light_pink.webp"
        },
        {
            name: "Lime",
            hex: "#84CC16",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_lime.webp"
        },
        {
            name: "Maroon",
            hex: "#800000",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_maroon.webp"
        },
        {
            name: "Natural",
            hex: "#E8DCC4",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_natural.webp"
        },
        {
            name: "Navy",
            hex: "#1E2E4A",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_navy.webp"
        },
        {
            name: "Orange",
            hex: "#F97316",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_orange.webp"
        },
        {
            name: "Purple",
            hex: "#7E3F98",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_purple.webp"
        },
        {
            name: "Red",
            hex: "#C62828",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_red.webp"
        },
        {
            name: "Royal",
            hex: "#2455A4",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_royal.webp"
        },
        {
            name: "Sapphire",
            hex: "#0F52BA",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_sapphire.webp"
        },
        {
            name: "Texas-Orange",
            hex: "#BF5700",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_texas_orange.webp"
        },
        {
            name: "Turqoise",
            hex: "#40E0D0",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_turqoise.webp"
        },
        {
            name: "White",
            hex: "#FFFFFF",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_white.webp"
        },
        {
            name: "Yellow",
            hex: "#FACC15",
            image: "assets/assets/images/products/tote-bags/IDS4500/IDS4500_yellow.webp"
        }
    ],

    images: [
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_natural.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_army.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_azalea.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_black.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_carolina_blue.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_chocolate.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_forest_green.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_gold.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_grey.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_hot_pink.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_kelly.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_lavender.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_light_pink.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_lime.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_maroon.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_navy.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_orange.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_purple.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_red.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_royal.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_sapphire.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_texas_orange.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_turqoise.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_white.webp",
        "assets/assets/images/products/tote-bags/IDS4500/IDS4500_yellow.webp"
    ],

    specs: {
        itemNo: "IDS4500",
        gusset: "Bottom: No Side: No",
        weight: "6 oz",
        material: "100% Cotton Canvas",
        decoratedIn: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "240 pcs",
                boxWeight: "41.88 lbs",
                boxDims: '19" x 19" x 14"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$4.00", "$3.25", "$2.92", "$2.75", "$2.56", "$2.46"]
                },
                {
                    label: "COLOR",
                    prices: ["$5.06", "$4.29", "$3.96", "$3.79", "$3.60", "$3.50"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$25.00 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$8.10", "$7.17", "$6.83", "$6.69", "$6.65", "$6.60"]
                },
                {
                    label: "COLOR",
                    prices: ["$8.73", "$7.79", "$7.46", "$7.31", "$7.27", "$7.23"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$1.73"]
                },
                {
                    label: "COLOR",
                    prices: ["$2.31"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "ib125800",
    name: "Small Canvas Deluxe Tote",
    code: "IB125800",
    slug: "small-canvas-deluxe-tote",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '18.5"W x 12"H x 5.5"D',
    imprint: '3.75"W x 2.31"H',
    price: 7.78,
    image: "assets/assets/images/products/tote-bags/IB125800/IB125800_main.webp",
    description: "Small canvas deluxe tote made from 12oz 100% cotton canvas with a bottom gusset.",
    // IB125800 - ISME IMAGE ADD KAREIN
    colors: [
        { name: "Black", hex: "#111111", image: "assets/assets/images/products/tote-bags/IB125800/IB125800_black.webp" },
        { name: "Chocolate", hex: "#6B4226", image: "assets/assets/images/products/tote-bags/IB125800/IB125800_chocolate.webp" },
        { name: "Light-Pink", hex: "#F3C6C8", image: "assets/assets/images/products/tote-bags/IB125800/IB125800_light_pink.webp" },
        { name: "Lime", hex: "#A8C93A", image: "assets/assets/images/products/tote-bags/IB125800/IB125800_lime.webp" },
        { name: "Maroon", hex: "#800000", image: "assets/assets/images/products/tote-bags/IB125800/IB125800_maroon.webp" },
        { name: "Natural", hex: "#E8DCC4", image: "assets/assets/images/products/tote-bags/IB125800/IB125800_natural.webp" },
        { name: "Navy", hex: "#1F3A5F", image: "assets/assets/images/products/tote-bags/IB125800/IB125800_navy.webp" },
        { name: "Purple", hex: "#800080", image: "assets/assets/images/products/tote-bags/IB125800/IB125800_purple.webp" },
        { name: "Red", hex: "#D32F2F", image: "assets/assets/images/products/tote-bags/IB125800/IB125800_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/tote-bags/IB125800/IB125800_royal.webp" }
    ],
    weight: "12oz",
    handle: '26"',
    gusset: "Bottom: Yes Side: No",
    origin: "USA",
    packagingOptions: [
        {
            type: "Standard",
            qtyPerBox: "72 pcs",
            boxWeight: "51.79 lbs",
            boxDims: '19.5" x 13.5" x 22.5"'
        }
    ],
    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$10.60", "$9.69", "$9.35", "$9.19", "$9.00", "$8.90"]
                },
                {
                    label: "COLOR",
                    prices: ["$11.71", "$10.77", "$10.44", "$10.27", "$10.08", "$9.98"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$25.00 (V)"
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$14.54", "$13.60", "$13.27", "$13.13", "$13.08", "$13.04"]
                },
                {
                    label: "COLOR",
                    prices: ["$15.21", "$14.27", "$13.94", "$13.79", "$13.75", "$13.71"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$7.78"]
                },
                {
                    label: "COLOR",
                    prices: ["$8.41"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece"
        }
    },
    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetupCharge: "$25.00 (V)",
        lessThanMinimumCharge: "$50.25 (V)"
    }
}, {
    id: "ib800",
    name: "Canvas Promotional Tote Bag",
    code: "IB800",
    slug: "canvas-promotional-tote",
    category: "Tote Bags",
    material: "Canvas",
    size: '15"W x 16"H',
    imprint: '10"W x 12"H',
    price: 32.00,
    image: "assets/assets/images/products/tote-bags/IB800/IB800_main.webp",
    description: "Durable canvas tote bag with promotional appeal. Perfect for trade shows, giveaways, and everyday use. High-quality 100% cotton canvas with reinforced handles.",
    popular: true,
    colors: [
        { name: "Army", hex: "#4B5320", image: "assets/assets/images/products/tote-bags/IB800/IB800_army.webp" },
        { name: "Azalea", hex: "#FF69B4", image: "assets/assets/images/products/tote-bags/IB800/IB800_azalea.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/tote-bags/IB800/IB800_black.webp" },
        { name: "Carolina-Blue", hex: "#99BADD", image: "assets/assets/images/products/tote-bags/IB800/IB800_carolina_blue.webp" },
        { name: "Chocolate", hex: "#3D2314", image: "assets/assets/images/products/tote-bags/IB800/IB800_chocolate.webp" },
        { name: "Dark-Grey", hex: "#A9A9A9", image: "assets/assets/images/products/tote-bags/IB800/IB800_dark_grey.webp" },
        { name: "Forest-Green", hex: "#228B22", image: "assets/assets/images/products/tote-bags/IB800/IB800_forest_green.webp" },
        { name: "Gold", hex: "#FFD700", image: "assets/assets/images/products/tote-bags/IB800/IB800_gold.webp" },
        { name: "Hot-Pink", hex: "#FF69B4", image: "assets/assets/images/products/tote-bags/IB800/IB800_hot_pink.webp" },
        { name: "Kelly", hex: "#4CBB17", image: "assets/assets/images/products/tote-bags/IB800/IB800_kelly.webp" },
        { name: "Lavender", hex: "#B57EDC", image: "assets/assets/images/products/tote-bags/IB800/IB800_lavender.webp" },
        { name: "Light-Grey", hex: "#D3D3D3", image: "assets/assets/images/products/tote-bags/IB800/IB800_light_grey.webp" },
        { name: "Light-Pink", hex: "#FFB6C1", image: "assets/assets/images/products/tote-bags/IB800/IB800_light_pink.webp" },
        { name: "Lime", hex: "#32CD32", image: "assets/assets/images/products/tote-bags/IB800/IB800_lime.webp" },
        { name: "Maroon", hex: "#800000", image: "assets/assets/images/products/tote-bags/IB800/IB800_maroon.webp" },
        { name: "Natural", hex: "#F5F5DC", image: "assets/assets/images/products/tote-bags/IB800/IB800_natural.webp" },
        { name: "Navy", hex: "#000080", image: "assets/assets/images/products/tote-bags/IB800/IB800_navy.webp" },
        { name: "Purple", hex: "#800080", image: "assets/assets/images/products/tote-bags/IB800/IB800_purple.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/tote-bags/IB800/IB800_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/tote-bags/IB800/IB800_royal.webp" },
        { name: "Sapphire", hex: "#0F52BA", image: "assets/assets/images/products/tote-bags/IB800/IB800_sapphire.webp" },
        { name: "Texas-Orange", hex: "#FF8C00", image: "assets/assets/images/products/tote-bags/IB800/IB800_texas_orange.webp" },
        { name: "Turquoise", hex: "#40E0D0", image: "assets/assets/images/products/tote-bags/IB800/IB800_turqoise.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/tote-bags/IB800/IB800_white.webp" },
        { name: "Yellow", hex: "#FFFF00", image: "assets/assets/images/products/tote-bags/IB800/IB800_yellow.webp" }
    ],
    images: [
        "assets/assets/images/products/tote-bags/IB800/IB800_main.webp",
        "assets/assets/images/products/tote-bags/IB800/IB800_black.webp",
        "assets/assets/images/products/tote-bags/IB800/IB800_natural.webp"
    ],
    specs: {
        itemNo: "IB800",
        gusset: "Bottom: No Side: No",
        weight: "12oz",
        material: "100% Cotton Canvas",
        handle: "22\"",
        origin: "USA",
        boxQuantity: "144 pcs",
        boxWeight: "44.52 lbs",
        boxDims: '17" x 17" x 12.5"'
    },
    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$4.66", "$3.90", "$3.56", "$3.40", "$3.21", "$3.10"] },
                { label: "COLOR", prices: ["$5.85", "$5.06", "$4.73", "$4.56", "$4.38", "$4.27"] },
                { label: "ADD LOCATION ", prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"] },
                { label: "ADD COLOR", prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"] }
            ]
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$8.75", "$7.81", "$7.48", "$7.33", "$7.29", "$7.25"] },
                { label: "COLOR", prices: ["$9.50", "$8.56", "$8.23", "$8.08", "$8.04", "$8.00"] }
            ]
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "NATURAL", prices: ["$2.33"] },
                { label: "COLOR", prices: ["$3.04"] }
            ]
        }
    },
    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "ib1500",
    name: "Large Canvas Deluxe Tote",
    code: "IB1500",
    slug: "large-canvas-deluxe-tote",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '22"W x 16"H x 6"D',
    imprint: '3.5"W x 3.5"H',
    price: 12.44,
    image: "assets/assets/images/products/tote-bags/IB1500/IB1500_navy.webp",

    description: "Large canvas deluxe tote made from 100% cotton canvas. Features a spacious design with a 22-inch handle and a bottom gusset, making it ideal for promotional use, events, shopping, and everyday carrying.",

    popular: false,

    colors: [
        {
            name: "Black",
            hex: "#000000",
            image: "assets/assets/images/products/tote-bags/IB1500/IB1500_black.webp"
        },
        {
            name: "Chocolate",
            hex: "#7B3F00",
            image: "assets/assets/images/products/tote-bags/IB1500/IB1500_chocolate.webp"
        },
        {
            name: "Light-Pink",
            hex: "#FFB6C1",
            image: "assets/assets/images/products/tote-bags/IB1500/IB1500_light_pink.webp"
        },
        {
            name: "Lime",
            hex: "#32CD32",
            image: "assets/assets/images/products/tote-bags/IB1500/IB1500_lime.webp"
        },
        {
            name: "Maroon",
            hex: "#800000",
            image: "assets/assets/images/products/tote-bags/IB1500/IB1500_maroon.webp"
        },
        {
            name: "Natural",
            hex: "#F5F5DC",
            image: "assets/assets/images/products/tote-bags/IB1500/IB1500_natural.webp"
        },
        {
            name: "Navy",
            hex: "#000080",
            image: "assets/assets/images/products/tote-bags/IB1500/IB1500_navy.webp"
        },
        {
            name: "Purple",
            hex: "#800080",
            image: "assets/assets/images/products/tote-bags/IB1500/IB1500_purple.webp"
        },
        {
            name: "Red",
            hex: "#FF0000",
            image: "assets/assets/images/products/tote-bags/IB1500/IB1500_red.webp"
        },
        {
            name: "Royal",
            hex: "#4169E1",
            image: "assets/assets/images/products/tote-bags/IB1500/IB1500_royal.webp"
        }
    ],
    images: [
        "assets/assets/images/products/tote-bags/IB1500/IB1500_navy.webp",
        "assets/assets/images/products/tote-bags/IB1500/IB1500_black.webp",
        "assets/assets/images/products/tote-bags/IB1500/IB1500_natural.webp"
    ],

    specs: {
        itemNo: "IB1500",
        gusset: "Bottom: Yes Side: No",
        weight: "12oz",
        material: "100% Cotton Canvas",
        handle: '22"W x 16"H x 6"D',
        origin: "USA",
        boxQuantity: "48 pcs",
        boxWeight: "45.62 lbs",
        boxDims: '23" x 17.5" x 13.5"'
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$12.44", "$11.48", "$11.15", "$10.98", "$10.79", "$10.69"] },
                { label: "COLOR", prices: ["$13.68", "$12.69", "$12.35", "$12.19", "$12.00", "$11.90"] },
                { label: "ADD LOCATION", prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"] },
                { label: "ADD COLOR", prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"] }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$25.00 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$16.33", "$15.40", "$15.06", "$14.92", "$14.88", "$14.83"] },
                { label: "COLOR", prices: ["$17.13", "$16.19", "$15.85", "$15.71", "$15.67", "$15.63"] }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "NATURAL", prices: ["$9.47"] },
                { label: "COLOR", prices: ["$10.22"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "ib600",
    name: "Canvas Jumbo Tote w/ Bottom Gusset",
    code: "IB600",
    slug: "canvas-jumbo-tote-w-bottom-gusset",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '20"W x 15"H x 5"D',
    imprint: '12"W x 10"H',
    price: 3.90,
    image: "assets/assets/images/products/tote-bags/IB600/IB600_main.webp",
    description: "Canvas jumbo tote bag with a bottom gusset, made from 100% cotton canvas.",
    colors: [
        { name: "Chocolate", hex: "#7B3F00", image: "assets/assets/images/products/tote-bags/IB600/IB600_chocolate.webp" },
        { name: "Dark-Grey", hex: "#4A4A4A", image: "assets/assets/images/products/tote-bags/IB600/IB600_dark_grey.webp" },
        { name: "Light-Pink", hex: "#FFB6C1", image: "assets/assets/images/products/tote-bags/IB600/IB600_light_pink.webp" },
        { name: "Lime", hex: "#BFFF00", image: "assets/assets/images/products/tote-bags/IB600/IB600_lime.webp" },
        { name: "Natural", hex: "#F5F5DC", image: "assets/assets/images/products/tote-bags/IB600/IB600_natural.webp" },
        { name: "Navy", hex: "#000080", image: "assets/assets/images/products/tote-bags/IB600/IB600_navy.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/tote-bags/IB600/IB600_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/tote-bags/IB600/IB600_royal.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/tote-bags/IB600/IB600_white.webp" },
        { name: "Yellow", hex: "#FFFF00", image: "assets/assets/images/products/tote-bags/IB600/IB600_yellow.webp" }
    ],
    images: [
        "assets/assets/images/products/tote-bags/IB600/IB600_main.webp",
        "assets/assets/images/products/tote-bags/IB600/IB600_chocolate.webp",
        "assets/assets/images/products/tote-bags/IB600/IB600_white.webp"
    ],
    specs: {
        itemNo: "IB600",
        gusset: "Bottom: Yes Side: No",
        weight: "12oz",
        material: "100% Cotton Canvas",
        handle: "23\"",
        origin: "USA",
        packagingOptions: [
            {
                type: "Standard",
                qtyPerBox: "72 pcs",
                boxWeight: "28.44 lbs",
                boxDims: '21.5" x 16.5" x 8"'
            }
        ]
    },
    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$6.45", "$5.65", "$5.31", "$5.15", "$4.96", "$4.85"] },
                { label: "COLOR", prices: ["$7.74", "$6.90", "$6.56", "$6.40", "$6.21", "$6.10"] },
                { label: "ADD LOCATION", prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"] },
                { label: "ADD COLOR", prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"] }
            ]
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$10.50", "$9.56", "$9.23", "$9.08", "$9.04", "$9.00"] },
                { label: "COLOR", prices: ["$11.33", "$10.40", "$10.06", "$9.92", "$9.88", "$9.83"] }
            ]
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "NATURAL", prices: ["$3.90"] },
                { label: "COLOR", prices: ["$4.82"] }
            ]
        }
    },
    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V) Per Color",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "ib1000",
    name: "Canvas Gusset Shopping Tote Bag",
    code: "IB1000",
    slug: "canvas-gusset-shopping-tote-bag",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '10.5"W x 14"H x 5"D',
    imprint: '6"W x 8"H',
    price: 3.90,
    image: "assets/assets/images/products/tote-bags/IB1000/IB1000_main.webp",
    description: "Canvas shopping tote bag with bottom and side gussets, made from 100% cotton canvas.",
    colors: [
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/tote-bags/IB1000/IB1000_black.webp" },
        { name: "Light-Pink", hex: "#FFB6C1", image: "assets/assets/images/products/tote-bags/IB1000/IB1000_light_pink.webp" },
        { name: "Lime", hex: "#BFFF00", image: "assets/assets/images/products/tote-bags/IB1000/IB1000_lime.webp" },
        { name: "Natural", hex: "#F5F5DC", image: "assets/assets/images/products/tote-bags/IB1000/IB1000_natural.webp" },
        { name: "Navy", hex: "#000080", image: "assets/assets/images/products/tote-bags/IB1000/IB1000_navy.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/tote-bags/IB1000/IB1000_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/tote-bags/IB1000/IB1000_royal.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/tote-bags/IB1000/IB1000_white.webp" },
        { name: "Yellow", hex: "#FFFF00", image: "assets/assets/images/products/tote-bags/IB1000/IB1000_yellow.webp" }
    ],
    images: [
        "assets/assets/images/products/tote-bags/IB1000/IB1000_main.webp",
        "assets/assets/images/products/tote-bags/IB1000/IB1000_black.webp",
        "assets/assets/images/products/tote-bags/IB1000/IB1000_white.webp"
    ],
    specs: {
        itemNo: "IB1000",
        gusset: "Bottom: Yes Side: Yes",
        weight: "12oz",
        material: "100% Cotton Canvas",
        handle: "22\"",
        origin: "USA",
        packagingOptions: [
            {
                type: "Standard",
                qtyPerBox: "96 pcs",
                boxWeight: "35.48 lbs",
                boxDims: '15.5" x 15.5" x 18"'
            }
        ]
    },
    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$6.37", "$5.56", "$5.23", "$5.06", "$4.88", "$4.77"] },
                { label: "COLOR", prices: ["$7.80", "$6.96", "$6.63", "$6.46", "$6.27", "$6.17"] },
                { label: "ADD LOCATION (V)", prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"] },
                { label: "ADD COLOR (V)", prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"] }
            ]
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$10.42", "$9.48", "$9.15", "$9.00", "$8.96", "$8.92"] },
                { label: "COLOR", prices: ["$11.40", "$10.46", "$10.13", "$9.98", "$9.94", "$9.90"] }
            ]
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "NATURAL", prices: ["$3.90"] },
                { label: "COLOR", prices: ["$4.82"] }
            ]
        }
    },
    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00"
    }
},
{
    id: "w956",
    name: "Non-Woven Convention Bag",
    code: "W956",
    slug: "non-woven-convention-bag",
    category: "Non-Woven Bags",
    material: "Non-Woven Fabric",
    size: '15"W x 16"H',
    imprint: '10"W x 10"H',
    price: 28.00,
    image: "assets/assets/images/products/non-woven/W956/W956_main.webp",
    description: "Lightweight non-woven convention bag. Perfect for trade shows, conferences, and promotional events. Durable construction with reinforced handles.",
    popular: true,
    colors: [
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/non-woven/W956/W956_black.webp" },
        { name: "Grey", hex: "#808080", image: "assets/assets/images/products/non-woven/W956/W956_grey.webp" },
        { name: "Hunter-Green", hex: "#355E3B", image: "assets/assets/images/products/non-woven/W956/W956_hunter_green.webp" },
        { name: "Ivory", hex: "#FFFFF0", image: "assets/assets/images/products/non-woven/W956/W956_ivory.webp" },
        { name: "Kelly", hex: "#4CBB17", image: "assets/assets/images/products/non-woven/W956/W956_kelly.webp" },
        { name: "Navy", hex: "#000080", image: "assets/assets/images/products/non-woven/W956/W956_navy.webp" },
        { name: "Orange", hex: "#FFA500", image: "assets/assets/images/products/non-woven/W956/W956_orange.webp" },
        { name: "Purple", hex: "#800080", image: "assets/assets/images/products/non-woven/W956/W956_purple.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/non-woven/W956/W956_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/non-woven/W956/W956_royal.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/non-woven/W956/W956_white.webp" },
        { name: "Yellow", hex: "#FFFF00", image: "assets/assets/images/products/non-woven/W956/W956_yellow.webp" }
    ],
    images: [
        "assets/assets/images/products/non-woven/W956/W956_main.webp",
        "assets/assets/images/products/non-woven/W956/W956_black.webp",
        "assets/assets/images/products/non-woven/W956/W956_white.webp"
    ],
    specs: {
        itemNo: "W956",
        gusset: "Bottom: No Side: No",
        weight: "80gsm",
        material: "Non-Woven Fabric",
        handle: "22\"",
        origin: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "500 pcs",
                boxWeight: "31 lbs",
                boxDims: '22" x 21" x 17"'
            },
            {
                type: "Printed Large Box",
                qtyPerBox: "300 pcs",
                boxWeight: "21 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "100 pcs",
                boxWeight: "8 lbs",
                boxDims: '8" x 16" x 20"'
            }
        ]
    },
    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "COLOR", prices: ["$1.56", "$1.46", "$1.38", "$1.29", "$1.22", "$1.16"] },
                { label: "ADD LOCATION ", prices: ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"] },
                { label: "ADD COLOR", prices: ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56", "$0.56"] }
            ]
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                { label: "COLOR", prices: ["$5.09", "$4.75", "$4.59", "$4.31", "$4.05", "$3.79"] },
                { label: "ADD LOCATION ", prices: ["$1.69", "$1.69", "$1.69", "$1.69", "$1.69", "$1.69"] }
            ]
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "COLOR", prices: ["$0.77"] }
            ]
        }
    },
    additionalCharges: {
        pmsMatch: "$56.25 (V)",
        setupCharge: "$62.50 (V)",
        repeatSetup: "$37.50 (V)",
        lessThanMinimum: "Call for pricing"
    }
},
{
    id: "mibl",
    name: "Light Canvas Tote",
    code: "MIBL",
    slug: "light-canvas-tote",
    category: "Tote Bags",
    material: "Canvas",
    size: '15"W x 16"H',
    imprint: '10"W x 12"H',
    price: 1.48,
    image: "assets/assets/images/products/tote-bags/MIBL/MIBL_natural.webp",
    description: "Light canvas tote with a simple, lightweight design. Ideal for promotional use, events, and giveaways.",
    colors: [
        { name: "Natural", hex: "#F5F5DC", image: "assets/assets/images/products/tote-bags/MIBL/MIBL_natural.webp" }
    ],
    images: [
        "assets/assets/images/products/tote-bags/MIBL/MIBL_natural.webp"
    ],
    specs: {
        itemNo: "MIBL",
        gusset: "Bottom: No Side: No",
        weight: "4oz",
        material: "Canvas",
        handle: "22'",
        origin: "USA",
        packagingOptions: [
            {
                type: "Standard",
                qtyPerBox: "240 pcs",
                boxWeight: "37.47 lbs",
                boxDims: '17" x 17" x 13.5"'
            }
        ]
    },
    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$3.25", "$2.58", "$2.25", "$2.08", "$1.83", "$1.63"] },
                { label: "ADD LOCATION (V)", prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"] },
                { label: "ADD COLOR (V)", prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"] }
            ]
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$8.77", "$7.33", "$6.75", "$6.23", "$6.07", "$5.90"] }
            ]
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "NATURAL", prices: ["$1.48"] }
            ]
        }
    },
    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "iwb202",
    name: "Double Bottle Canvas Wine Tote",
    code: "IWB202",
    slug: "double-bottle-canvas-wine-tote",
    category: "Wine Totes",
    material: "100% Cotton Canvas",
    size: '5.5"W x 10.5"H x 3"D',
    imprint: '4"W x 6"H',
    price: 2.27,
    originalPrice: 45.00,
    image: "assets/assets/images/products/bottle-bags/IWB202/IWB202_main.webp",
    description: "Double bottle canvas wine tote made from 12 oz 100% cotton with a 13-inch handle.",

    colors: [
        {
            name: "Black",
            image: "assets/assets/images/products/bottle-bags/IWB202/IWB202_black.webp",
            hex: "#000000"
        },
        {
            name: "Natural",
            image: "assets/assets/images/products/bottle-bags/IWB202/IWB202_natural.webp",
            hex: "#F5F5DC"
        }
    ],

    images: [
        "assets/assets/images/products/bottle-bags/IWB202/IWB202_main.webp",
        "assets/assets/images/products/bottle-bags/IWB202/IWB202_black.webp",
        "assets/assets/images/products/bottle-bags/IWB202/IWB202_natural.webp"
    ],

    specs: {
        itemNo: "IWB202",
        gusset: '4"W x 6"H',
        weight: "12 oz",
        material: "100% Cotton Canvas",
        handle: '13"',
        origin: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "240 pcs",
                boxWeight: "44.74 lbs",
                boxDims: '23" X 18" X 12"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$4.33", "$3.69", "$3.35", "$3.19", "$3.00", "$2.90"]
                },
                {
                    label: "COLOR",
                    prices: ["$4.75", "$4.10", "$3.77", "$3.60", "$3.42", "$3.31"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$25.00 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$10.10", "$8.66", "$8.08", "$7.56", "$7.40", "$7.23"]
                },
                {
                    label: "COLOR",
                    prices: ["$10.60", "$9.16", "$8.58", "$8.06", "$7.90", "$7.73"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$2.27"]
                },
                {
                    label: "COLOR",
                    prices: ["$2.27"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "ib125600",
    name: "Fancy Shopper with Color Stripe Bag",
    code: "IB125600",
    slug: "fancy-shopper-with-color-stripe-bag",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '15"W x 16"H x 6"D',
    imprint: '10"W x 12"H',
    price: 8.95,
    image: "assets/assets/images/products/tote-bags/IB125600/IB125600_main.webp",
    description: "Fancy shopper bag made from 100% cotton with a stylish color stripe design, bottom and side gussets, and a spacious 15\" x 16\" x 6\" size.",
    colors: [
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/tote-bags/IB125600/IB125600_black.webp" },
        { name: "Chocolate", hex: "#7B3F00", image: "assets/assets/images/products/tote-bags/IB125600/IB125600_chocolate.webp" },
        { name: "Light-Pink", hex: "#FFB6C1", image: "assets/assets/images/products/tote-bags/IB125600/IB125600_light_pink.webp" },
        { name: "Lime", hex: "#32CD32", image: "assets/assets/images/products/tote-bags/IB125600/IB125600_lime.webp" },
        { name: "Navy", hex: "#000080", image: "assets/assets/images/products/tote-bags/IB125600/IB125600_navy.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/tote-bags/IB125600/IB125600_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/tote-bags/IB125600/IB125600_royal.webp" }
    ],

    images: [
        "assets/assets/images/products/tote-bags/IB125600/IB125600_main.webp",
        "assets/assets/images/products/tote-bags/IB125600/IB125600_black.webp",
        "assets/assets/images/products/tote-bags/IB125600/IB125600_chocolate.webp",
        "assets/assets/images/products/tote-bags/IB125600/IB125600_light_pink.webp",
        "assets/assets/images/products/tote-bags/IB125600/IB125600_lime.webp",
        "assets/assets/images/products/tote-bags/IB125600/IB125600_navy.webp",
        "assets/assets/images/products/tote-bags/IB125600/IB125600_red.webp",
        "assets/assets/images/products/tote-bags/IB125600/IB125600_royal.webp"
    ],

    specs: {
        itemNo: "IB125600",
        gusset: "Bottom: Yes Side: Yes",
        weight: "6oz",
        material: "100% Cotton Canvas",
        origin: "USA",
        packagingOptions: [
            {
                type: "Standard",
                qtyPerBox: "96 pcs",
                boxWeight: "36 lbs",
                boxDims: '17" x 15.5" x 14.25"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "COLOR", prices: ["$8.95", "$8.08", "$7.75", "$7.58", "$7.40", "$7.29"] },
                { label: "ADD LOCATION", prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"] },
                { label: "ADD COLOR", prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"] }
            ]
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                { label: "COLOR", prices: ["$12.52", "$11.58", "$11.25", "$11.10", "$11.06", "$11.02"] }
            ]
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "COLOR", prices: ["$5.88"] }
            ]
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$56.25 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "ib1113",
    name: "11 X 13 Canvas Tote Bag",
    code: "IB1113",
    slug: "11-x-13-canvas-tote-bag",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '11.5"W x 13"H x 1.5"D',
    imprint: '7"W x 9"H',
    price: 1.77,
    image: "assets/assets/images/products/tote-bags/IB1113/IB1113_main.webp",
    description: "11 X 13 canvas tote bag made from 100% cotton canvas with a bottom gusset.",
    colors: [
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/tote-bags/IB1113/IB1113_black.webp" },
        { name: "Natural", hex: "#F5F5DC", image: "assets/assets/images/products/tote-bags/IB1113/IB1113_natural.webp" },
        { name: "Navy", hex: "#000080", image: "assets/assets/images/products/tote-bags/IB1113/IB1113_navy.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/tote-bags/IB1113/IB1113_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/tote-bags/IB1113/IB1113_royal.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/tote-bags/IB1113/IB1113_white.webp" }
    ],

    images: [
        "assets/assets/images/products/tote-bags/IB1113/IB1113_main.webp",
        "assets/assets/images/products/tote-bags/IB1113/IB1113_natural.webp",
        "assets/assets/images/products/tote-bags/IB1113/IB1113_black.webp"
    ],

    specs: {
        itemNo: "IB1113",
        gusset: "Bottom: Yes Side: No",
        weight: "7oz",
        material: "100% Cotton Canvas",
        handle: "20\"",
        origin: "USA",
        packagingOptions: [
            {
                type: "Standard",
                qtyPerBox: "336 pcs",
                boxWeight: "40.99 lbs",
                boxDims: '25.5" x 13" x 13"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$3.69", "$2.98", "$2.82", "$2.65", "$2.46", "$2.34"] },
                { label: "COLOR", prices: ["$4.89", "$3.90", "$3.80", "$3.59", "$3.40", "$3.27"] },
                { label: "ADD LOCATION (V)", prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"] },
                { label: "ADD COLOR (V)", prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"] }
            ]
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$8.04", "$7.10", "$6.77", "$6.63", "$6.58", "$6.54"] },
                { label: "COLOR", prices: ["$8.54", "$7.60", "$7.27", "$7.13", "$7.08", "$7.04"] }
            ]
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "NATURAL", prices: ["$1.77"] },
                { label: "COLOR", prices: ["$2.27"] }
            ]
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "mqibg",
    name: "Cotton Tote Bag with Bottom Gusset",
    code: "MQIBG",
    slug: "cotton-tote-bag-with-bottom-gusset",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '15"W x 16"H x 3"D',
    imprint: '10"W x 12"H',
    price: 2.00,
    image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_main.webp",
    description: "Cotton tote bag with a 3-inch bottom gusset, made from 100% cotton.",
    colors: [
        { name: "Army", hex: "#4B5320", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_army.webp" },
        { name: "Azalea", hex: "#F88379", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_azalea.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_black.webp" },
        { name: "Carolina-Blue", hex: "#56A0D2", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_carolina_blue.webp" },
        { name: "Chocolate", hex: "#7B3F00", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_chocolate.webp" },
        { name: "Forest-Green", hex: "#228B22", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_forest_green.webp" },
        { name: "Gold", hex: "#FFD700", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_gold.webp" },
        { name: "Hot-Pink", hex: "#FF69B4", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_hot_pink.webp" },
        { name: "Kelly", hex: "#4CBB17", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_kelly.webp" },
        { name: "Lavender", hex: "#E6E6FA", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_lavender.webp" },
        { name: "Light-Pink", hex: "#FFB6C1", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_light_pink.webp" },
        { name: "Lime", hex: "#BFFF00", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_lime.webp" },
        { name: "Maroon", hex: "#800000", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_maroon.webp" },
        { name: "Natural", hex: "#F5F5DC", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_natural.webp" },
        { name: "Navy", hex: "#000080", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_navy.webp" },
        { name: "Orange", hex: "#FFA500", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_orange.webp" },
        { name: "Purple", hex: "#800080", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_purple.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_royal.webp" },
        { name: "Sapphire", hex: "#0F52BA", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_sapphire.webp" },
        { name: "Texas-Orange", hex: "#BF5700", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_texas_orange.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_white.webp" },
        { name: "Yellow", hex: "#FFFF00", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_yellow.webp" },
        { name: "Turqoise", hex: "#40E0D0", image: "assets/assets/images/products/tote-bags/MQIBG/MQIBG_turqoise.webp" }
    ],

    images: [
        "assets/assets/images/products/tote-bags/MQIBG/MQIBG_main.webp",
        "assets/assets/images/products/tote-bags/MQIBG/MQIBG_natural.webp",
        "assets/assets/images/products/tote-bags/MQIBG/MQIBG_black.webp"
    ],

    specs: {
        itemNo: "MQIBG",
        gusset: "Bottom: Yes Side: No",
        weight: "6oz",
        material: "100% Cotton Canvas",
        handle: "22\"",
        origin: "USA",

        packagingOptions: [
            {
                type: "Natural",
                qtyPerBox: "240 pcs",
                boxWeight: "41.88 lbs",
                boxDims: '17" x 17" x 15.5"'
            },
            {
                type: "Colored",
                qtyPerBox: "216 pcs",
                boxWeight: "41.88 lbs",
                boxDims: '17" x 17" x 15.5"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$4.29", "$3.54", "$3.21", "$3.04", "$2.85", "$2.75"] },
                { label: "COLOR", prices: ["$5.38", "$4.60", "$4.27", "$4.10", "$3.92", "$3.81"] },
                { label: "ADD LOCATION (V)", prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"] },
                { label: "ADD COLOR (V)", prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"] }
            ]
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$9.17", "$8.23", "$7.90", "$7.75", "$7.71", "$7.67"] },
                { label: "COLOR", prices: ["$9.92", "$8.98", "$8.65", "$8.50", "$8.46", "$8.42"] }
            ]
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "NATURAL", prices: ["$2.00"] },
                { label: "COLOR", prices: ["$2.61"] }
            ]
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "w955",
    name: "Large Grocery Bag",
    code: "W955",
    slug: "large-grocery-bag",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '15"W x 18"H x 6"D',
    imprint: '10"W x 10"H',
    price: 5.02,
    image: "assets/assets/images/products/tote-bags/W955/W955_main.webp",
    description: "Large grocery bag made from 12oz 100% cotton canvas with bottom and side gussets.",
    colors: [
        { name: "Natural", hex: "#F5F0E1", image: "assets/assets/images/products/tote-bags/W955/W955_natural.webp" }
    ],

    images: [
        "assets/assets/images/products/tote-bags/W955/W955_main.webp",

    ],

    specs: {
        itemNo: "W955",
        gusset: "Bottom: Yes Side: Yes",
        weight: "12 oz",
        material: "100% Cotton Canvas",
        handle: '21"',
        origin: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "72 pcs",
                boxWeight: "42 lbs",
                boxDims: '23" x 23" x 9"'
            },
            {
                type: "Printed Large Box",
                qtyPerBox: "75 pcs",
                boxWeight: "41 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "20 pcs",
                boxWeight: "12 lbs",
                boxDims: '9" x 16" x 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$5.02", "$4.90", "$4.76", "$4.64", "$4.48", "$4.45"] },
                { label: "ADD LOCATION", prices: ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"] },
                { label: "ADD COLOR", prices: ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56", "$0.56"] }
            ]
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$9.27", "$8.66", "$8.29", "$7.77", "$7.31", "$7.29"] },
                { label: "ADD LOCATION", prices: ["$1.69", "$1.69", "$1.69", "$1.69", "$1.69", "$1.69"] }
            ]
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "NATURAL", prices: ["$4.04"] }
            ]
        }
    },

    additionalCharges: {
        pmsMatch: "$56.25 (V)",
        setupCharge: "$62.50 (V)",
        repeatSetup: "$37.50 (V)",
        lessThanMinimum: "Call for pricing"
    }
},
{
    id: "ib125200",

    name: "Canvas Book Bag Gusset",

    code: "IB125200",

    slug: "canvas-book-bag-gusset",

    category: "Tote Bags",

    material: "100% Cotton Canvas",

    size: '10"W x 12"H x 3"D',

    imprint: '6"W x 7.5"H',

    price: 5.45,

    image: "assets/assets/images/products/tote-bags/IB125200/IB125200_main.webp",

    description: "Canvas book bag with a 3-inch bottom gusset, made from 100% cotton canvas.",

    colors: [
        {
            name: "Black",
            hex: "#111111",
            image: "assets/assets/images/products/tote-bags/IB125200/IB125200_black.webp"
        },
        {
            name: "Chocolate",
            hex: "#5A3825",
            image: "assets/assets/images/products/tote-bags/IB125200/IB125200_chocolate.webp"
        },
        {
            name: "Light-Pink",
            hex: "#F4C2C2",
            image: "assets/assets/images/products/tote-bags/IB125200/IB125200_light_pink.webp"
        },
        {
            name: "Lime",
            hex: "#B7D93D",
            image: "assets/assets/images/products/tote-bags/IB125200/IB125200_lime.webp"
        },
        {
            name: "Natural",
            hex: "#F5F0E1",
            image: "assets/assets/images/products/tote-bags/IB125200/IB125200_natural.webp"
        },
        {
            name: "Navy",
            hex: "#172A46",
            image: "assets/assets/images/products/tote-bags/IB125200/IB125200_navy.webp"
        },
        {
            name: "Red",
            hex: "#C62828",
            image: "assets/assets/images/products/tote-bags/IB125200/IB125200_red.webp"
        },
        {
            name: "Royal",
            hex: "#2856B6",
            image: "assets/assets/images/products/tote-bags/IB125200/IB125200_royal.webp"
        },
        {
            name: "White",
            hex: "#FFFFFF",
            image: "assets/assets/images/products/tote-bags/IB125200/IB125200_white.webp"
        },
        {
            name: "Yellow",
            hex: "#F4D03F",
            image: "assets/assets/images/products/tote-bags/IB125200/IB125200_yellow.webp"
        }
    ],

    images: [
        "assets/assets/images/products/tote-bags/IB125200/IB125200_main.webp",
        "assets/assets/images/products/tote-bags/IB125200/IB125200_black.webp",
        "assets/assets/images/products/tote-bags/IB125200/IB125200_chocolate.webp",
        "assets/assets/images/products/tote-bags/IB125200/IB125200_light_pink.webp",
        "assets/assets/images/products/tote-bags/IB125200/IB125200_lime.webp",
        "assets/assets/images/products/tote-bags/IB125200/IB125200_natural.webp",
        "assets/assets/images/products/tote-bags/IB125200/IB125200_navy.webp",
        "assets/assets/images/products/tote-bags/IB125200/IB125200_red.webp",
        "assets/assets/images/products/tote-bags/IB125200/IB125200_royal.webp",
        "assets/assets/images/products/tote-bags/IB125200/IB125200_white.webp",
        "assets/assets/images/products/tote-bags/IB125200/IB125200_yellow.webp"
    ],

    specs: {
        itemNo: "IB125200",
        gusset: "Bottom: Yes Side: Yes",
        weight: "12oz",
        material: "100% Cotton Canvas",
        handle: "21' ",
        origin: "USA",
        packagingOptions: [
            {
                type: "Standard",
                qtyPerBox: "144 pcs",
                boxWeight: "40.77 lbs",
                boxDims: '23.5" x 14" x 14"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$5.45", "$4.67", "$4.33", "$4.17", "$3.98", "$3.88"]
                },
                {
                    label: "COLOR",
                    prices: ["$6.65", "$5.83", "$5.50", "$5.33", "$5.15", "$5.04"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"]
                }
            ]
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$9.52", "$8.58", "$8.25", "$8.10", "$8.06", "$8.02"]
                },
                {
                    label: "COLOR",
                    prices: ["$10.27", "$9.33", "$9.00", "$8.85", "$8.81", "$8.77"]
                }
            ]
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$3.06"]
                },
                {
                    label: "COLOR",
                    prices: ["$3.76"]
                }
            ]
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }

},
{
    id: "ib750",

    name: "Canvas Gusset Tote Bag",

    code: "IB750",

    slug: "canvas-gusset-tote-bag",

    category: "Tote Bags",

    material: "100% Cotton Canvas",

    size: '15"W x 12"H x 4"D',

    imprint: '10"W x 8"H',

    price: 5.77,

    image: "assets/assets/images/products/tote-bags/IB750/IB750_main.webp",

    description: "Canvas gusset tote bag made from 12oz 100% cotton canvas with bottom and side gussets.",

    colors: [
        {
            name: "Black",
            hex: "#111111",
            image: "assets/assets/images/products/tote-bags/IB750/IB750_black.webp"
        },
        {
            name: "Chocolate",
            hex: "#5A3825",
            image: "assets/assets/images/products/tote-bags/IB750/IB750_chocolate.webp"
        },
        {
            name: "Light-Pink",
            hex: "#F4C2C2",
            image: "assets/assets/images/products/tote-bags/IB750/IB750_light_pink.webp"
        },
        {
            name: "Lime",
            hex: "#B7D93D",
            image: "assets/assets/images/products/tote-bags/IB750/IB750_lime.webp"
        },
        {
            name: "Natural",
            hex: "#F5F0E1",
            image: "assets/assets/images/products/tote-bags/IB750/IB750_natural.webp"
        },
        {
            name: "Navy",
            hex: "#172A46",
            image: "assets/assets/images/products/tote-bags/IB750/IB750_navy.webp"
        },
        {
            name: "Red",
            hex: "#C62828",
            image: "assets/assets/images/products/tote-bags/IB750/IB750_red.webp"
        },
        {
            name: "Royal",
            hex: "#2856B6",
            image: "assets/assets/images/products/tote-bags/IB750/IB750_royal.webp"
        },
        {
            name: "White",
            hex: "#FFFFFF",
            image: "assets/assets/images/products/tote-bags/IB750/IB750_white.webp"
        },
        {
            name: "Yellow",
            hex: "#F4D03F",
            image: "assets/assets/images/products/tote-bags/IB750/IB750_yellow.webp"
        }
    ],

    images: [
        "assets/assets/images/products/tote-bags/IB750/IB750_main.webp",
        "assets/assets/images/products/tote-bags/IB750/IB750_black.webp",
        "assets/assets/images/products/tote-bags/IB750/IB750_chocolate.webp",
        "assets/assets/images/products/tote-bags/IB750/IB750_light_pink.webp",
        "assets/assets/images/products/tote-bags/IB750/IB750_lime.webp",
        "assets/assets/images/products/tote-bags/IB750/IB750_natural.webp",
        "assets/assets/images/products/tote-bags/IB750/IB750_navy.webp",
        "assets/assets/images/products/tote-bags/IB750/IB750_red.webp",
        "assets/assets/images/products/tote-bags/IB750/IB750_royal.webp",
        "assets/assets/images/products/tote-bags/IB750/IB750_white.webp",
        "assets/assets/images/products/tote-bags/IB750/IB750_yellow.webp"
    ],

    specs: {
        itemNo: "IB750",
        weight: "12oz",
        handle: '21"',
        gusset: "Bottom: Yes Side: Yes",
        material: "100% Cotton Canvas",
        origin: "USA",
        packagingOptions: [
            {
                type: "Standard",
                qtyPerBox: "72 pcs",
                boxWeight: "26 lbs",
                boxDims: '16"L x 13"W x 11"H'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$5.77", "$4.98", "$4.65", "$4.48", "$4.29", "$4.19"]
                },
                {
                    label: "COLOR",
                    prices: ["$7.03", "$6.21", "$5.88", "$5.71", "$5.52", "$5.42"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"]
                }
            ]
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$9.83", "$8.90", "$8.56", "$8.42", "$8.38", "$8.33"]
                },
                {
                    label: "COLOR",
                    prices: ["$10.65", "$9.71", "$9.38", "$9.23", "$9.19", "$9.15"]
                }
            ]
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$3.35"]
                },
                {
                    label: "COLOR",
                    prices: ["$4.12"]
                }
            ]
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }

},
{
    id: "ib125300",
    name: "Cotton Canvas Gusset Tote",
    code: "IB125300",
    slug: "cotton-canvas-gusset-tote",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '14"W x 15"H x 4"D',
    imprint: '8"W x 10"H',
    price: 6.37,
    image: "assets/assets/images/products/tote-bags/IB125300/IB125300_main.webp",
    description: "Cotton canvas gusset tote made from 12oz 100% cotton canvas with bottom and side gussets.",

    colors: [
        {
            name: "Black",
            hex: "#000000",
            image: "assets/assets/images/products/tote-bags/IB125300/IB125300_black.webp"
        },
        {
            name: "Chocolate",
            hex: "#7B3F00",
            image: "assets/assets/images/products/tote-bags/IB125300/IB125300_chocolate.webp"
        },
        {
            name: "Light-Pink",
            hex: "#FFB6C1",
            image: "assets/assets/images/products/tote-bags/IB125300/IB125300_light_pink.webp"
        },
        {
            name: "Lime",
            hex: "#32CD32",
            image: "assets/assets/images/products/tote-bags/IB125300/IB125300_lime.webp"
        },
        {
            name: "Natural",
            hex: "#F5F5DC",
            image: "assets/assets/images/products/tote-bags/IB125300/IB125300_natural.webp"
        },
        {
            name: "Navy",
            hex: "#000080",
            image: "assets/assets/images/products/tote-bags/IB125300/IB125300_navy.webp"
        },
        {
            name: "Red",
            hex: "#FF0000",
            image: "assets/assets/images/products/tote-bags/IB125300/IB125300_red.webp"
        },
        {
            name: "Royal",
            hex: "#4169E1",
            image: "assets/assets/images/products/tote-bags/IB125300/IB125300_royal.webp"
        },
        {
            name: "White",
            hex: "#FFFFFF",
            image: "assets/assets/images/products/tote-bags/IB125300/IB125300_white.webp"
        },
        {
            name: "Yellow",
            hex: "#FFD700",
            image: "assets/assets/images/products/tote-bags/IB125300/IB125300_yellow.webp"
        }
    ],

    images: [
        "assets/assets/images/products/tote-bags/IB125300/IB125300_main.webp",
        "assets/assets/images/products/tote-bags/IB125300/IB125300_black.webp",
        "assets/assets/images/products/tote-bags/IB125300/IB125300_chocolate.webp",
        "assets/assets/images/products/tote-bags/IB125300/IB125300_light_pink.webp",
        "assets/assets/images/products/tote-bags/IB125300/IB125300_lime.webp",
        "assets/assets/images/products/tote-bags/IB125300/IB125300_natural.webp",
        "assets/assets/images/products/tote-bags/IB125300/IB125300_navy.webp",
        "assets/assets/images/products/tote-bags/IB125300/IB125300_red.webp",
        "assets/assets/images/products/tote-bags/IB125300/IB125300_royal.webp",
        "assets/assets/images/products/tote-bags/IB125300/IB125300_white.webp",
        "assets/assets/images/products/tote-bags/IB125300/IB125300_yellow.webp"
    ],

    specs: {
        itemNo: "IB125300",
        weight: "12oz",
        handle: '22"',
        gusset: "Bottom: Yes Side: Yes",
        material: "100% Cotton Canvas",
        origin: "USA",

        packagingOptions: [
            {
                type: "Standard",
                qtyPerBox: "96 pcs",
                boxWeight: "40.77 lbs",
                boxDims: '17" x 17" x 16"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$6.37", "$5.56", "$5.23", "$5.06", "$4.88", "$4.77"]
                },
                {
                    label: "COLOR",
                    prices: ["$7.95", "$7.10", "$6.77", "$6.60", "$6.42", "$6.31"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"]
                }
            ]
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$10.42", "$9.48", "$9.15", "$9.00", "$8.96", "$8.92"]
                },
                {
                    label: "COLOR",
                    prices: ["$11.54", "$10.60", "$10.27", "$10.13", "$10.08", "$10.04"]
                }
            ],
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$3.90"]
                },
                {
                    label: "COLOR",
                    prices: ["$4.96"]
                }
            ],
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "w961",
    name: "Non-Woven Tote Bag",
    code: "W961",
    slug: "non-woven-tote-bag",
    category: "Non-Woven Bags",
    material: "Non-Woven Fabric",
    size: '14"W x 16"H x 6"D',
    imprint: '14"W x 10"H',
    price: 1.34,
    image: "assets/assets/images/products/non-woven/w961/w961_white.webp",
    description: "Non-woven tote bag with bottom and side gussets. Lightweight, durable, and perfect for promotional events, trade shows, and everyday use.",
    popular: false,
    colors: [
        { name: 'Black', hex: '#1C1C1C', image: 'assets/assets/images/products/non-woven/w961/w961_black.webp' },
        { name: 'Hunter-Green', hex: '#35513B', image: 'assets/assets/images/products/non-woven/w961/w961_hunter_green.webp' },
        { name: 'Navy', hex: '#1E2E4A', image: 'assets/assets/images/products/non-woven/w961/w961_navy.webp' },
        { name: 'Red', hex: '#C62828', image: 'assets/assets/images/products/non-woven/w961/w961_red.webp' },
        { name: 'Royal', hex: '#2455A4', image: 'assets/assets/images/products/non-woven/w961/w961_royal.webp' },
        { name: 'White', hex: '#FFFFFF', image: 'assets/assets/images/products/non-woven/w961/w961_white.webp' }
    ],
    images: [
        "assets/assets/images/products/non-woven/w961/w961_white.webp",
        "assets/assets/images/products/non-woven/w961/w961_black.webp",
        "assets/assets/images/products/non-woven/w961/w961_navy.webp"
    ],
    specs: {
        itemNo: "W961",
        weight: "80 gsm",
        material: "Non-Woven Fabric",
        handle: '17"',
        gusset: "Bottom: Yes Side: Yes",
        decoratedIn: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "200 pcs",
                boxWeight: "28 lbs",
                boxDims: '22" x 19" x 16"'
            },
            {
                type: "Printed Large Box",
                qtyPerBox: "150 pcs",
                boxWeight: "22 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "50 pcs",
                boxWeight: "7 lbs",
                boxDims: '9" x 16" x 20"'
            }
        ]
    },
    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$2.28", "$2.13", "$2.02", "$1.89", "$1.78", "$1.65"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56", "$0.56"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$62.50 (V)",
            repeatSetup: "$37.50 (V)"
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$5.81", "$5.43", "$5.23", "$4.90", "$4.61", "$4.32"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.69", "$1.69", "$1.69", "$1.69", "$1.69", "$1.69"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },
        blank: {
            label: "BLANK PRICING (USD)",
            quantities: [1],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$1.34"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },
    additionalCharges: {
        pmsMatch: "$56.25 (V)",
        setupCharge: "$62.50 (V)",
        repeatSetup: "$37.50 (V)",
        lessThanMinimum: "Call for pricing"
    }
},

{
    id: "iwb201",
    name: "Single Bottle Canvas Wine Tote",
    code: "IWB201",
    slug: "single-bottle-canvas-wine-tote",
    category: "Wine Totes",
    material: "100% Cotton Canvas",
    size: '3"W x 10.5"H x 3"D',
    imprint: '2"W x 6"H',
    price: 1.85,
    originalPrice: 45.00,
    image: "assets/assets/images/products/bottle-bags/IWB201/IWB201-black.webp",
    description: "Single bottle canvas wine tote made from 12 oz 100% cotton canvas with a 13-inch handle.",

    colors: [
        {
            name: "Black",
            image: "assets/assets/images/products/bottle-bags/IWB201/IWB201-black.webp",
            hex: '#1C1C1C'
        },
        {
            name: "Natural",
            image: "assets/assets/images/products/bottle-bags/IWB201/IWB201_natural.webp",
            hex: "#ffffff"
        }
    ],

    images: [

        "assets/assets/images/products/bottle-bags/IWB201/IWB201-black.webp",
        "assets/assets/images/products/bottle-bags/IWB201/IWB201_natural.webp"
    ],

    specs: {
        itemNo: "IWB201",
        gusset: "12 oz",
        weight: "12 oz",
        material: "100% Cotton Canvas",
        handle: '13"',
        origin: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "240 pcs",
                boxWeight: "28.65 lbs",
                boxDims: '19" X 15" X 13"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$3.92", "$3.27", "$2.94", "$2.77", "$2.58", "$2.48"]
                },
                {
                    label: "COLOR",
                    prices: ["$4.33", "$3.69", "$3.35", "$3.19", "$3.00", "$2.90"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$25.00 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$9.60", "$8.16", "$7.58", "$7.06", "$6.90", "$6.73"]
                },
                {
                    label: "COLOR",
                    prices: ["$9.94", "$8.50", "$7.92", "$7.40", "$7.24", "$7.07"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$1.85"]
                },
                {
                    label: "COLOR",
                    prices: ["$1.85"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
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
    price: 1.94,
    image: "assets/assets/images/products/non-woven/W962/W962_main.webp",
    description: "Non woven shopper bag made from 80 gsm non-woven fabric with bottom and side gussets.",

    colors: [
        { name: "Black", image: "assets/assets/images/products/non-woven/W962/W962_black.webp", hex: "#000000" },
        { name: "Hunter-Green", image: "assets/assets/images/products/non-woven/W962/W962_hunter_green.webp", hex: "#355E3B" },
        { name: "Navy", image: "assets/assets/images/products/non-woven/W962/W962_navy.webp", hex: "#000080" },
        { name: "Orange", image: "assets/assets/images/products/non-woven/W962/W962_orange.webp", hex: "#FFA500" },
        { name: "Red", image: "assets/assets/images/products/non-woven/W962/W962_red.webp", hex: "#FF0000" },
        { name: "Royal", image: "assets/assets/images/products/non-woven/W962/W962_royal.webp", hex: "#4169E1" },
        { name: "White", image: "assets/assets/images/products/non-woven/W962/W962_white.webp", hex: "#FFFFFF" },
        { name: "Yellow", image: "assets/assets/images/products/non-woven/W962/W962_yellow.webp", hex: "#FFFF00" }
    ],

    images: [
        "assets/assets/images/products/non-woven/W962/W962_main.webp",
        "assets/assets/images/products/non-woven/W962/W962_black.webp",
        "assets/assets/images/products/non-woven/W962/W962_hunter_green.webp",
        "assets/assets/images/products/non-woven/W962/W962_navy.webp",
        "assets/assets/images/products/non-woven/W962/W962_orange.webp",
        "assets/assets/images/products/non-woven/W962/W962_red.webp",
        "assets/assets/images/products/non-woven/W962/W962_royal.webp",
        "assets/assets/images/products/non-woven/W962/W962_white.webp",
        "assets/assets/images/products/non-woven/W962/W962_yellow.webp"
    ],

    specs: {
        itemNo: "W962",
        gusset: "Bottom: Yes Side: Yes",
        weight: "80 gsm",
        material: "Non-Woven Fabric",
        handle: '20"',
        origin: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "250 pcs",
                boxWeight: "24 lbs",
                boxDims: '22" x 15" x 18"'
            },
            {
                type: "Printed Large Box",
                qtyPerBox: "250 pcs",
                boxWeight: "26 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "100 pcs",
                boxWeight: "11 lbs",
                boxDims: '8" x 16" x 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$1.94", "$1.81", "$1.72", "$1.61", "$1.51", "$1.41"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56", "$0.56"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$62.50 (V)",
            repeatSetup: "$37.50 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$3.75", "$3.50", "$3.40", "$3.19", "$3.00", "$2.81"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.69", "$1.69", "$1.69", "$1.69", "$1.69", "$1.69"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "COLOR",
                    prices: ["$1.08"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$56.25 (V)",
        setupCharge: "$62.50 (V)",
        repeatSetup: "$37.50 (V)",
        lessThanMinimum: "Call for pricing"
    }
}, {
    id: "w957",
    name: "Non Woven Grocery Bag",
    code: "W957",
    slug: "non-woven-grocery-bag",
    category: "Non-Woven Bags",
    material: "Non-Woven Fabric",
    size: '12.5"W x 13.5"H x 8.5"D',
    imprint: '5.5"W X 10"H',
    price: 1.57,
    image: "assets/assets/images/products/non-woven/W957/W957_black.webp",
    description: "Non woven grocery bag made from 80 gsm non-woven fabric with 22-inch reinforced handles and bottom and side gussets.",

    colors: [
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/non-woven/W957/W957_black.webp" },
        { name: "Burgundy", hex: "#800020", image: "assets/assets/images/products/non-woven/W957/W957_burgundy.webp" },
        { name: "Dark-Grey", hex: "#4A4A4A", image: "assets/assets/images/products/non-woven/W957/W957_dark_grey.webp" },
        { name: "Hunter-Green", hex: "#355E3B", image: "assets/assets/images/products/non-woven/W957/W957_hunter_green.webp" },
        { name: "Kelly", hex: "#4CBB17", image: "assets/assets/images/products/non-woven/W957/W957_kelly.webp" },
        { name: "Navy", hex: "#000080", image: "assets/assets/images/products/non-woven/W957/W957_navy.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/non-woven/W957/W957_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/non-woven/W957/W957_royal.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/non-woven/W957/W957_white.webp" }
    ],

    images: [
        "assets/assets/images/products/non-woven/W957/W957_black.webp",
        "assets/assets/images/products/non-woven/W957/W957_burgundy.webp",
        "assets/assets/images/products/non-woven/W957/W957_dark_grey.webp",
        "assets/assets/images/products/non-woven/W957/W957_hunter_green.webp",
        "assets/assets/images/products/non-woven/W957/W957_kelly.webp",
        "assets/assets/images/products/non-woven/W957/W957_navy.webp",
        "assets/assets/images/products/non-woven/W957/W957_red.webp",
        "assets/assets/images/products/non-woven/W957/W957_royal.webp",
        "assets/assets/images/products/non-woven/W957/W957_white.webp"
    ],

    specs: {
        itemNo: "W957",
        gusset: "Bottom: Yes Side: Yes",
        weight: "80 gsm",
        material: "Non-Woven Fabric",
        handle: '22" Reinforced Handles',
        origin: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "150 pcs",
                boxWeight: "28 lbs",
                boxDims: '25" x 14" x 16"'
            },
            {
                type: "Printed Large Box",
                qtyPerBox: "125 pcs",
                boxWeight: "23 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "50 pcs",
                boxWeight: "10 lbs",
                boxDims: '8" x 16" x 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$2.58", "$2.41", "$2.28", "$2.14", "$2.01", "$1.89"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56", "$0.56"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$62.50 (V)",
            repeatSetup: "$37.50 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$6.11", "$5.70", "$5.49", "$5.15", "$4.85", "$4.55"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.69", "$1.69", "$1.69", "$1.69", "$1.69", "$1.69"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "COLOR",
                    prices: ["$1.57"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$56.25 (V)",
        setupCharge: "$62.50 (V)",
        repeatSetup: "$37.50 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "sbw1611",
    name: "Cotton Shoe Bag",
    code: "SBW1611",
    slug: "cotton-shoe-bag",
    category: "Shoe Bags",
    material: "100% Cotton Canvas",
    size: '11.5"W x 15.5"H',
    imprint: '7"W x 10"H',
    price: 1.08,
    originalPrice: 45.00,
    image: "assets/assets/images/products/shoe-bags/SBW1611/SBW1611_main.webp",
    description: "Cotton shoe bag made from 7oz 100% cotton with no bottom or side gusset.",

    colors: [
        {
            name: "Black",
            image: "assets/assets/images/products/shoe-bags/SBW1611/SBW1611_black.webp",
            hex: "#000000"
        },
        {
            name: "Natural",
            image: "assets/assets/images/products/shoe-bags/SBW1611/SBW1611_natural.webp",
            hex: "#F5F0E6"
        },
        {
            name: "Navy",
            image: "assets/assets/images/products/shoe-bags/SBW1611/SBW1611_navy.webp",
            hex: "#000080"
        }
    ],

    images: [
        "assets/assets/images/products/shoe-bags/SBW1611/SBW1611_main.webp",
        "assets/assets/images/products/shoe-bags/SBW1611/SBW1611_black.webp",
        "assets/assets/images/products/shoe-bags/SBW1611/SBW1611_natural.webp",
        "assets/assets/images/products/shoe-bags/SBW1611/SBW1611_navy.webp"
    ],

    specs: {
        itemNo: "SBW1611",
        gusset: "Bottom: No Side: No",
        weight: "7oz",
        material: "100% Cotton Canvas",
        handle: "-",
        origin: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "240 pcs",
                boxWeight: "26.89 lbs",
                boxDims: '16.5" x 16.5" x 9.5"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$3.25", "$2.46", "$2.08", "$2.01", "$1.80", "$1.70"]
                },
                {
                    label: "COLOR",
                    prices: ["$4.13", "$3.34", "$2.96", "$2.89", "$2.67", "$2.58"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$25.00 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$9.10", "$7.67", "$7.08", "$6.56", "$6.40", "$6.23"]
                },
                {
                    label: "COLOR",
                    prices: ["$9.37", "$7.94", "$7.35", "$6.83", "$6.67", "$6.50"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$1.08"]
                },
                {
                    label: "COLOR",
                    prices: ["$1.48"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece"
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "iwb203",
    name: "Drawstring Wine Bag",
    code: "IWB203",
    slug: "drawstring-wine-bag",
    category: "Wine Bags",
    material: "100% Cotton Canvas",
    size: '6.25"W x 13"H',
    imprint: '2.5"W x 8H',
    price: 1.15,
    originalPrice: 45.00,
    image: 'assets/assets/images/products/drawstring-bags/IWB203/IWB203_natural.webp',
    description: "Drawstring wine bag made from 7 oz 100% cotton canvas.",

    colors: [
        {
            name: "Black",
            image: 'assets/assets/images/products/drawstring-bags/IWB203/IWB203_black.webp',
            hex: "#000000"
        },
        {
            name: "Natural",
            image: "assets/assets/images/products/shoe-bags/SBW1611/SBW1611_natural.webp",
            hex: "#F5F0E1"
        }
    ],

    images: [
        'assets/assets/images/products/drawstring-bags/IWB203/IWB203_natural.webp',
        'assets/assets/images/products/drawstring-bags/IWB203/IWB203_black.webp',
    ],

    specs: {
        itemNo: "IWB203",
        gusset: "Bottom: No Side: No",
        weight: "7 oz",
        material: "100% Cotton Canvas",
        handle: "-",
        origin: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "240 pcs",
                boxWeight: "26.89 lbs",
                boxDims: '14.5" X 14.5" X 12"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$3.21", "$2.56", "$2.23", "$2.06", "$1.88", "$1.77"]
                },
                {
                    label: "COLOR",
                    prices: ["$3.63", "$2.98", "$2.65", "$2.48", "$2.29", "$2.19"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$25.00 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$9.10", "$7.66", "$7.08", "$6.56", "$6.40", "$6.23"]
                },
                {
                    label: "COLOR",
                    prices: ["$9.27", "$7.83", "$7.25", "$6.73", "$6.57", "$6.40"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$1.15"]
                },
                {
                    label: "COLOR",
                    prices: ["$1.15"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "ids9103",
    name: "Economical Sports Nylon Backpack",
    code: "IDS9103",
    slug: "economical-sports-nylon-backpack",
    category: "non-woven",
    material: "Polyester",
    size: '14"W x 18"H',
    imprint: '8"W x 9"H',
    price: 2.47,
    originalPrice: 6.00,
    image: "assets/assets/images/products/non-woven/IDS9103/IDS9103_main.webp",
    description: "Economical sports nylon backpack made from 210D polyester.",

    colors: [
        { name: 'Black', hex: '#1C1C1C', image: 'assets/assets/images/products/non-woven/IDS9103/IDS9103_black.webp' },
        { name: 'Blue', hex: '#2563EB', image: 'assets/assets/images/products/non-woven/IDS9103/IDS9103_blue.webp' },
        { name: 'Grey', hex: '#808080', image: 'assets/assets/images/products/non-woven/IDS9103/IDS9103_grey.webp' },
        { name: 'Hunter-Green', hex: '#35513B', image: 'assets/assets/images/products/non-woven/IDS9103/IDS9103_hunter_green.webp' },
        { name: 'Kelly', hex: '#2E8B57', image: 'assets/assets/images/products/non-woven/IDS9103/IDS9103_kelly.webp' },
        { name: 'Lime', hex: '#84CC16', image: 'assets/assets/images/products/non-woven/IDS9103/IDS9103_lime.webp' },
        { name: 'Navy', hex: '#1E2E4A', image: 'assets/assets/images/products/non-woven/IDS9103/IDS9103_navy.webp' },
        { name: 'Orange', hex: '#F97316', image: 'assets/assets/images/products/non-woven/IDS9103/IDS9103_orange.webp' },
        { name: 'Pink', hex: '#EC4899', image: 'assets/assets/images/products/non-woven/IDS9103/IDS9103_pink.webp' },
        { name: 'Purple', hex: '#7E57C2', image: 'assets/assets/images/products/non-woven/IDS9103/IDS9103_purple.webp' },
        { name: 'Red', hex: '#C62828', image: 'assets/assets/images/products/non-woven/IDS9103/IDS9103_red.webp' },
        { name: 'White', hex: '#FFFFFF', image: 'assets/assets/images/products/non-woven/IDS9103/IDS9103_white.webp' },
        { name: 'Yellow', hex: '#FACC15', image: 'assets/assets/images/products/non-woven/IDS9103/IDS9103_yellow.webp' },
        { name: 'Teal', hex: '#008C95', image: 'assets/assets/images/products/non-woven/IDS9103/IDS9103_teal.webp' }
    ],

    images: [
        "assets/assets/images/products/non-woven/IDS9103/IDS9103_main.webp",
        "assets/assets/images/products/non-woven/IDS9103/IDS9103_black.webp",
        "assets/assets/images/products/non-woven/IDS9103/IDS9103_blue.webp",
        "assets/assets/images/products/non-woven/IDS9103/IDS9103_grey.webp",
        "assets/assets/images/products/non-woven/IDS9103/IDS9103_hunter_green.webp",
        "assets/assets/images/products/non-woven/IDS9103/IDS9103_kelly.webp",
        "assets/assets/images/products/non-woven/IDS9103/IDS9103_lime.webp",
        "assets/assets/images/products/non-woven/IDS9103/IDS9103_navy.webp",
        "assets/assets/images/products/non-woven/IDS9103/IDS9103_orange.webp",
        "assets/assets/images/products/non-woven/IDS9103/IDS9103_pink.webp",
        "assets/assets/images/products/non-woven/IDS9103/IDS9103_purple.webp",
        "assets/assets/images/products/non-woven/IDS9103/IDS9103_red.webp",
        "assets/assets/images/products/non-woven/IDS9103/IDS9103_white.webp",
        "assets/assets/images/products/non-woven/IDS9103/IDS9103_yellow.webp",
        "assets/assets/images/products/non-woven/IDS9103/IDS9103_teal.webp"
    ],

    specs: {
        itemNo: "IDS9103",
        gusset: "Bottom: No Side: No",
        weight: "210D",
        material: "Polyester",
        handle: "N/A",
        origin: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "200 pcs",
                boxWeight: "32 lbs",
                boxDims: '20" X 16" X 14"'
            },
            {
                type: "Printed Large Box",
                qtyPerBox: "500 pcs",
                boxWeight: "40 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "150 pcs",
                boxWeight: "13 lbs",
                boxDims: '8" x 16" x 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$2.47", "$2.31", "$2.18", "$2.05", "$1.93", "$1.81"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56", "$0.56"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$25.00 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$6.00", "$5.60", "$5.40", "$5.06", "$4.76", "$4.46"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.69", "$1.69", "$1.69", "$1.69", "$1.69", "$1.69"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "COLOR",
                    prices: ["$1.48"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece"
        }
    },

    additionalCharges: {
        pmsMatch: "$56.25 (V)",
        setupCharge: "$62.50 (V)",
        repeatSetup: "$37.50 (V)",
        lessThanMinimum: "Call for pricing"
    }
},
{
    id: "mib",
    name: "Cotton Canvas Tote",
    code: "MIB",
    slug: "cotton-canvas-tote",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '15"W x 16"H',
    imprint: '10"W x 12"H',
    price: 1.48,
    image: "assets/assets/images/products/tote-bags/MIB/MIB_natural.webp",
    description: "Cotton canvas tote with a lightweight 7oz construction and 22\" handles. Ideal for promotional use, events, and everyday carrying.",
    colors: [
        { name: "Natural", hex: "#F5F5DC", image: "assets/assets/images/products/tote-bags/MIB/MIB_natural.webp" }
    ],
    images: [
        "assets/assets/images/products/tote-bags/MIB/MIB_natural.webp"
    ],
    specs: {
        itemNo: "MIB",
        gusset: "Bottom: No Side: No",
        weight: "7oz",
        material: "100% Cotton Canvas",
        handle: "22\"",
        origin: "USA",
        packagingOptions: [
            {
                type: "Standard",
                qtyPerBox: "240 pcs",
                boxWeight: "39.23 lbs",
                boxDims: '17" X 17" X 15"'
            }
        ]
    },
    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$4.08", "$3.30", "$2.92", "$2.85", "$2.63", "$2.54"] },
                { label: "ADD LOCATION (V)", prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"] },
                { label: "ADD COLOR (V)", prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"] }
            ]
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$9.53", "$8.10", "$7.52", "$7.00", "$6.83", "$6.67"] }
            ]
        },
        blank: {
            label: "BLANK PRICING (USD)",
            "rows": [
                { "label": "NATURAL", "prices": ["$1.92"] }
            ]
        }
    },
    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00"
    }
},
{
    id: "ib125400",
    name: "Canvas Jumbo Shopper Gusset Bag",
    code: "IB125400",
    slug: "canvas-jumbo-shopper-gusset-bag",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '14"W x 17"H x 7"D',
    imprint: '10"W x 12"H',
    price: 8.06,
    image: "assets/assets/images/products/tote-bags/IB125400/IB125400_main.webp",

    description: "Canvas jumbo shopper gusset bag made from 12oz 100% cotton canvas with bottom and side gussets.",

    colors: [
        {
            name: "Black",
            hex: "#000000",
            image: "assets/assets/images/products/tote-bags/IB125400/IB125400_black.webp"
        },
        {
            name: "Chocolate",
            hex: "#5A3825",
            image: "assets/assets/images/products/tote-bags/IB125400/IB125400_chocolate.webp"
        },
        {
            name: "Light-Pink",
            hex: "#F3C7C7",
            image: "assets/assets/images/products/tote-bags/IB125400/IB125400_light_pink.webp"
        },
        {
            name: "Lime",
            hex: "#B7D65D",
            image: "assets/assets/images/products/tote-bags/IB125400/IB125400_lime.webp"
        },
        {
            name: "Natural",
            hex: "#F5F0E1",
            image: "assets/assets/images/products/tote-bags/IB125400/IB125400_natural.webp"
        },
        {
            name: "Navy",
            hex: "#1D3557",
            image: "assets/assets/images/products/tote-bags/IB125400/IB125400_navy.webp"
        },
        {
            name: "Red",
            hex: "#C62828",
            image: "assets/assets/images/products/tote-bags/IB125400/IB125400_red.webp"
        },
        {
            name: "Royal",
            hex: "#4169E1",
            image: "assets/assets/images/products/tote-bags/IB125400/IB125400_royal.webp"
        },
        {
            name: "White",
            hex: "#FFFFFF",
            image: "assets/assets/images/products/tote-bags/IB125400/IB125400_white.webp"
        },
        {
            name: "Yellow",
            hex: "#F4D03F",
            image: "assets/assets/images/products/tote-bags/IB125400/IB125400_yellow.webp"
        }
    ],

    images: [
        "assets/assets/images/products/tote-bags/IB125400/IB125400_main.webp",
        "assets/assets/images/products/tote-bags/IB125400/IB125400_black.webp",
        "assets/assets/images/products/tote-bags/IB125400/IB125400_chocolate.webp",
        "assets/assets/images/products/tote-bags/IB125400/IB125400_light_pink.webp",
        "assets/assets/images/products/tote-bags/IB125400/IB125400_lime.webp",
        "assets/assets/images/products/tote-bags/IB125400/IB125400_natural.webp",
        "assets/assets/images/products/tote-bags/IB125400/IB125400_navy.webp",
        "assets/assets/images/products/tote-bags/IB125400/IB125400_red.webp",
        "assets/assets/images/products/tote-bags/IB125400/IB125400_royal.webp",
        "assets/assets/images/products/tote-bags/IB125400/IB125400_white.webp",
        "assets/assets/images/products/tote-bags/IB125400/IB125400_yellow.webp"
    ],

    specs: {
        itemNo: "IB125400",
        weight: "12oz",
        handle: '23"',
        gusset: "Bottom: Yes Side: Yes",
        material: "100% Cotton Canvas",
        origin: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "72 pcs",
                boxWeight: "40.77 lbs",
                boxDims: '18" x 18" x 13"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$8.06", "$7.21", "$6.88", "$6.71", "$6.52", "$6.42"]
                },
                {
                    label: "COLOR",
                    prices: ["$10.00", "$9.10", "$8.77", "$8.60", "$8.42", "$8.31"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$25.00 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$12.06", "$11.13", "$10.79", "$10.65", "$10.60", "$10.56"]
                },
                {
                    label: "COLOR",
                    prices: ["$13.54", "$12.60", "$12.27", "$12.13", "$12.08", "$12.04"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$5.45"]
                },
                {
                    label: "COLOR",
                    prices: ["$6.84"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "ib4400",
    name: "Cotton Canvas Tote with Color Handles",
    code: "IB4400",
    slug: "cotton-canvas-tote-with-color-handles",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '15"W x 15"H x 3"D',
    imprint: '10"W x 10"H',
    price: 5.96,
    image: "assets/assets/images/products/tote-bags/IB4400/IB4400_main.webp",
    description: "Cotton canvas tote bag with colorful handles, a bottom gusset, and a durable 12oz construction.",
    colors: [
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/tote-bags/IB4400/IB4400_black.webp" },
        { name: "Chocolate", hex: "#7B3F00", image: "assets/assets/images/products/tote-bags/IB4400/IB4400_chocolate.webp" },
        { name: "Light-Pink", hex: "#FFB6C1", image: "assets/assets/images/products/tote-bags/IB4400/IB4400_light_pink.webp" },
        { name: "Lime", hex: "#32CD32", image: "assets/assets/images/products/tote-bags/IB4400/IB4400_lime.webp" },
        { name: "Navy", hex: "#000080", image: "assets/assets/images/products/tote-bags/IB4400/IB4400_navy.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/tote-bags/IB4400/IB4400_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/tote-bags/IB4400/IB4400_royal.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/tote-bags/IB4400/IB4400_white.webp" },
        { name: "Yellow", hex: "#FFFF00", image: "assets/assets/images/products/tote-bags/IB4400/IB4400_yellow.webp" }
    ],

    images: [
        "assets/assets/images/products/tote-bags/IB4400/IB4400_main.webp",
        "assets/assets/images/products/tote-bags/IB4400/IB4400_black.webp",
        "assets/assets/images/products/tote-bags/IB4400/IB4400_chocolate.webp",
        "assets/assets/images/products/tote-bags/IB4400/IB4400_light_pink.webp",
        "assets/assets/images/products/tote-bags/IB4400/IB4400_lime.webp",
        "assets/assets/images/products/tote-bags/IB4400/IB4400_navy.webp",
        "assets/assets/images/products/tote-bags/IB4400/IB4400_red.webp",
        "assets/assets/images/products/tote-bags/IB4400/IB4400_royal.webp",
        "assets/assets/images/products/tote-bags/IB4400/IB4400_white.webp",
        "assets/assets/images/products/tote-bags/IB4400/IB4400_yellow.webp"
    ],

    specs: {
        itemNo: "IB4400",
        gusset: "Bottom: Yes Side: No",
        weight: "12oz",
        material: "100% Cotton Canvas",
        handle: '22"',
        origin: "USA",
        packagingOptions: [
            {
                type: "Standard",
                qtyPerBox: "144 pcs",
                boxWeight: "42.10 lbs",
                boxDims: '17" x 17" x 15"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "COLOR", prices: ["$5.96", "$5.17", "$4.83", "$4.67", "$4.48", "$4.38"] },
                { label: "ADD LOCATION", prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"] },
                { label: "ADD COLOR", prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"] }
            ]
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                { label: "COLOR", prices: ["$9.60", "$8.67", "$8.33", "$8.19", "$8.15", "$8.10"] }
            ]
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "COLOR", prices: ["$3.14"] }
            ]
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},
{
    id: "ib1200",
    name: "Canvas Big Tote Bag with Velcro Closure",
    code: "IB1200",
    slug: "canvas-big-tote-bag-with-velcro-closure",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '23"W x 17"H x 6"D',
    imprint: '12"W x 12"H',
    price: 8.21,
    image: "assets/assets/images/products/tote-bags/IB1200/IB1200_main.webp",
    description: "Large canvas tote bag with a Velcro closure, made from 12oz 100% cotton canvas with a bottom gusset.",

    colors: [
        {
            name: "Black",
            hex: "#000000",
            image: "assets/assets/images/products/tote-bags/IB1200/IB1200_black.webp"
        },
        {
            name: "Chocolate",
            image: "assets/assets/images/products/tote-bags/IB1200/IB1200_chocolate.webp"
        },
        {
            name: "Light-Pink",
            image: "assets/assets/images/products/tote-bags/IB1200/IB1200_light_pink.webp"
        },
        {
            name: "Lime",
            image: "assets/assets/images/products/tote-bags/IB1200/IB1200_lime.webp"
        },
        {
            name: "Natural",
            image: "assets/assets/images/products/tote-bags/IB1200/IB1200_natural.webp"
        },
        {
            name: "Red",
            image: "assets/assets/images/products/tote-bags/IB1200/IB1200_red.webp"
        },
        {
            name: "Royal",
            image: "assets/assets/images/products/tote-bags/IB1200/IB1200_royal.webp"
        },
        {
            name: "White",
            image: "assets/assets/images/products/tote-bags/IB1200/IB1200_white.webp"
        },
        {
            name: "Yellow",
            image: "assets/assets/images/products/tote-bags/IB1200/IB1200_yellow.webp"
        }
    ],

    images: [
        "assets/assets/images/products/tote-bags/IB1200/IB1200_main.webp",
        "assets/assets/images/products/tote-bags/IB1200/IB1200_black.webp",
        "assets/assets/images/products/tote-bags/IB1200/IB1200_chocolate.webp",
        "assets/assets/images/products/tote-bags/IB1200/IB1200_light_pink.webp",
        "assets/assets/images/products/tote-bags/IB1200/IB1200_lime.webp",
        "assets/assets/images/products/tote-bags/IB1200/IB1200_natural.webp",
        "assets/assets/images/products/tote-bags/IB1200/IB1200_red.webp",
        "assets/assets/images/products/tote-bags/IB1200/IB1200_royal.webp",
        "assets/assets/images/products/tote-bags/IB1200/IB1200_white.webp",
        "assets/assets/images/products/tote-bags/IB1200/IB1200_yellow.webp"
    ],

    specs: {
        itemNo: "IB1200",
        weight: "12oz",
        handle: '26"',
        gusset: "Bottom: Yes Side: No",
        material: "100% Cotton Canvas",
        origin: "USA",

        packagingOptions: [
            {
                type: "Standard",
                qtyPerBox: "72 pcs",
                boxWeight: "42.98 lbs",
                boxDims: '24" x 18" x 11"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$8.21", "$7.35", "$7.02", "$6.85", "$6.67", "$6.56"]
                },
                {
                    label: "COLOR",
                    prices: ["$10.11", "$9.21", "$8.88", "$8.71", "$8.52", "$8.42"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"]
                }
            ]
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$12.21", "$11.27", "$10.94", "$10.79", "$10.75", "$10.71"]
                },
                {
                    label: "COLOR",
                    prices: ["$14.99", "$13.55", "$12.97", "$12.45", "$12.29", "$12.12"]
                }
            ],
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$5.59"]
                },
                {
                    label: "COLOR",
                    prices: ["$6.94"]
                }
            ],
            moq: "No minimums. Can order as little as one piece"
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},

{
    id: "w976",
    name: "Econo Convention Tote",
    code: "W976",
    slug: "econo-convention-tote",
    category: "Non-Woven Bags",
    material: "Non-Woven Fabric",
    size: '15"W x 16"H x 1.5"D',
    imprint: '10"W x 10"H',
    price: 0.64,
    originalPrice: 50.00,
    image: "assets/assets/images/products/non-woven/W976/W976_main.webp",
    description: "Econo convention tote made from 80 gsm non-woven fabric with a bottom gusset.",

    colors: [
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/non-woven/W976/W976_black.webp" },
        { name: "Hunter Green", hex: "#355E3B", image: "assets/assets/images/products/non-woven/W976/W976_hunter_green.webp" },
        { name: "Ivory", hex: "#FFFFF0", image: "assets/assets/images/products/non-woven/W976/W976_ivory.webp" },
        { name: "Lime", hex: "#32CD32", image: "assets/assets/images/products/non-woven/W976/W976_lime.webp" },
        { name: "Navy", hex: "#000080", image: "assets/assets/images/products/non-woven/W976/W976_navy.webp" },
        { name: "Orange", hex: "#FFA500", image: "assets/assets/images/products/non-woven/W976/W976_orange.webp" },
        { name: "Pink", hex: "#FFC0CB", image: "assets/assets/images/products/non-woven/W976/W976_pink.webp" },
        { name: "Purple", hex: "#800080", image: "assets/assets/images/products/non-woven/W976/W976_purple.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/non-woven/W976/W976_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/non-woven/W976/W976_royal.webp" },
        { name: "Tan", hex: "#D2B48C", image: "assets/assets/images/products/non-woven/W976/W976_tan.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/non-woven/W976/W976_white.webp" },
        { name: "Yellow", hex: "#FFFF00", image: "assets/assets/images/products/non-woven/W976/W976_yellow.webp" }
    ],

    images: [
        "assets/assets/images/products/non-woven/W976/W976_main.webp",
        "assets/assets/images/products/non-woven/W976/W976_black.webp",
        "assets/assets/images/products/non-woven/W976/W976_hunter_green.webp",
        "assets/assets/images/products/non-woven/W976/W976_ivory.webp",
        "assets/assets/images/products/non-woven/W976/W976_lime.webp",
        "assets/assets/images/products/non-woven/W976/W976_navy.webp",
        "assets/assets/images/products/non-woven/W976/W976_orange.webp",
        "assets/assets/images/products/non-woven/W976/W976_pink.webp",
        "assets/assets/images/products/non-woven/W976/W976_purple.webp",
        "assets/assets/images/products/non-woven/W976/W976_red.webp",
        "assets/assets/images/products/non-woven/W976/W976_royal.webp",
        "assets/assets/images/products/non-woven/W976/W976_tan.webp",
        "assets/assets/images/products/non-woven/W976/W976_white.webp",
        "assets/assets/images/products/non-woven/W976/W976_yellow.webp"
    ],

    specs: {
        itemNo: "W976",
        gusset: "Bottom: Yes Side: No",
        weight: "80 gsm",
        material: "Non-Woven Fabric",
        handle: "22\""
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$1.38", "$1.29", "$1.22", "$1.15", "$1.08", "$1.01"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56", "$0.56"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$62.50 (V)",
            repeatSetup: "$37.50 (V)"
        },

        // ✅ HEAT TRANSFER ADDED
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$4.92", "$4.59", "$4.44", "$4.16", "$3.91", "$3.66"]
                },
                {
                    label: "ADD LOCATION (V)",
                    prices: ["$1.69", "$1.69", "$1.69", "$1.69", "$1.69", "$1.69"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "COLOR",
                    prices: ["$0.64"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$56.25 (V)",
        setupCharge: "$62.50 (V)",
        repeatSetup: "$37.50 (V)",
        lessThanMinimum: "Call for pricing"
    }
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
    "price": 1.64,
    "originalPrice": 50.0,
    "image": "assets/assets/images/products/non-woven/W974/W974_main.webp",
    "description": "Laminated tote made from 110 gsm non-woven polypropylene with a 19-inch handle and bottom and side gussets.",
    "colors": [
        {
            "name": "Black",
            "hex": "#000000",
            "image": "assets/assets/images/products/non-woven/W974/W974_black.webp"
        },
        {
            "name": "Hunter Green",
            "hex": "#355E3B",
            "image": "assets/assets/images/products/non-woven/W974/W974_hunter_green.webp"
        },
        {
            "name": "Natural",
            "hex": "#F5F5DC",
            "image": "assets/assets/images/products/non-woven/W974/W974_natural.webp"
        },
        {
            "name": "Red",
            "hex": "#FF0000",
            "image": "assets/assets/images/products/non-woven/W974/W974_red.webp"
        },
        {
            "name": "Royal",
            "hex": "#4169E1",
            "image": "assets/assets/images/products/non-woven/W974/W974_royal.webp"
        },
        {
            "name": "White",
            "hex": "#FFFFFF",
            "image": "assets/assets/images/products/non-woven/W974/W974_white.webp"
        }
    ],
    "images": [
        "assets/assets/images/products/non-woven/W974/W974_main.webp",
        "assets/assets/images/products/non-woven/W974/W974_black.webp",
        "assets/assets/images/products/non-woven/W974/W974_hunter_green.webp",
        "assets/assets/images/products/non-woven/W974/W974_natural.webp",
        "assets/assets/images/products/non-woven/W974/W974_red.webp",
        "assets/assets/images/products/non-woven/W974/W974_royal.webp",
        "assets/assets/images/products/non-woven/W974/W974_white.webp"
    ],
    "specs": {
        "itemNo": "W974",
        "gusset": "Bottom: Yes, Side: Yes",
        "weight": "110 gsm",
        "material": "Non-Woven Polypropylene, Laminated",
        "handle": "19\"",
        "origin": "USA",
        "packagingOptions": [
            {
                "type": "Blank",
                "qtyPerBox": "100 pcs",
                "boxWeight": "27 lbs",
                "boxDims": "20\" x 16\" x 14\""
            },
            {
                "type": "Printed Large Box",
                "qtyPerBox": "150 pcs",
                "boxWeight": "21 lbs",
                "boxDims": "16\" x 16\" x 20\""
            },
            {
                "type": "Printed Medium Box",
                "qtyPerBox": "75 pcs",
                "boxWeight": "11 lbs",
                "boxDims": "8\" x 16\" x 20\""
            }
        ]
    },
    "pricing": {
        "spot": {
            "label": "SPOT PRINTING PRICING (USD)",
            "quantities": [72, 288, 500, 1000, 2000, 3000],
            "rows": [
                {
                    "label": "COLOR",
                    "prices": ["$3.01", "$2.90", "$2.75", "$2.68", "$2.52", "$2.36"]
                },
                {
                    "label": "ADD LOCATION",
                    "prices": ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"]
                }
            ],
            "priceIncludes": "1 Color, 1 Location",
            "leadTime": "5-7 Business Days",
            "setupCharge": "$62.50 (V)",
            "repeatSetup": "$37.50 (V)"
        },
        "blank": {
            "label": "BLANK PRICING (USD)",
            "rows": [
                {
                    "label": "COLOR",
                    "prices": ["$1.64"]
                }
            ],
            "priceIncludes": "Blank",
            "leadTime": "Within 1 to 2 Business Days",
            "moq": "No minimums. Can order as little as one piece."
        }
    },
    "additionalCharges": {
        "pmsMatch": "$56.25 (V)",
        "setupCharge": "$62.50 (V)",
        "repeatSetup": "$37.50 (V)",
        "lessThanMinimum": "Call for pricing"
    }
},
{
    id: "w983",
    name: "Newspaper Bag",
    code: "W983",
    slug: "newspaper-bag",
    category: "Non-Woven Bags",
    material: "Non-Woven Fabric",
    size: '12"W x 14.5"H x 2.5"D',
    imprint: '8"W x 9"H',
    price: 0.00,
    originalPrice: 50.00,
    image: "assets/assets/images/products/non-woven/W983/W983_main.webp",
    description: "Newspaper bag made from 80 gsm non-woven fabric with a 14-inch handle.",

    colors: [
        {
            name: "Black",
            hex: "#000000",
            image: "assets/assets/images/products/non-woven/W983/W983_black.webp"
        },
        {
            name: "Dark Grey",
            hex: "#4A4A4A",
            image: "assets/assets/images/products/non-woven/W983/W983_dark_grey.webp"
        }
    ],

    images: [
        "assets/assets/images/products/non-woven/W983/W983_main.webp",
        "assets/assets/images/products/non-woven/W983/W983_black.webp",
        "assets/assets/images/products/non-woven/W983/W983_dark_grey.webp"
    ],

    specs: {
        itemNo: "W983",
        gusset: "Bottom: No, Side: No",
        weight: "80 gsm",
        material: "Non Woven",
        handle: '14"'
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$2.44", "$2.28", "$2.16", "$2.03", "$1.91", "$1.79"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56", "$0.56"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$62.50 (V)",
            repeatSetup: "$37.50 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$5.98", "$5.58", "$5.37", "$5.04", "$4.74", "$4.44"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.69", "$1.69", "$1.69", "$1.69", "$1.69", "$1.69"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        // ✅ BLANK PRICING ADDED
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$1.46"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$56.25 (V)",
        setupCharge: "$62.50 (V)",
        repeatSetup: "$37.50 (V)",
        lessThanMinimum: "Call for pricing"
    }
},



{
    id: "w918",
    name: "Canvas Big Tote Bag",
    code: "W918",
    slug: "canvas-big-tote-bag",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '17"W x 13"H x 5"D',
    imprint: '4"W x 4"H',
    price: 9.98,
    image: "assets/assets/images/products/tote-bags/W918/W918_main.webp",
    description: "Canvas big tote bag made from 18 oz 100% cotton canvas with a bottom gusset.",
    colors: [
        {
            name: "Black",
            hex: "#1C1C1C",
            image: "assets/assets/images/products/tote-bags/W918/W918_black.webp"
        },
        {
            name: "Forest-Green",
            hex: "#35513B",
            image: "assets/assets/images/products/tote-bags/W918/W918_forest_green.webp"
        },
        {
            name: "Navy",
            hex: "#1E2E4A",
            image: "assets/assets/images/products/tote-bags/W918/W918_navy.webp"
        },
        {
            name: "Red",
            hex: "#C62828",
            image: "assets/assets/images/products/tote-bags/W918/W918_red.webp"
        },
        {
            name: "Royal",
            hex: "#2455A4",
            image: "assets/assets/images/products/tote-bags/W918/W918_royal.webp"
        }
    ],

    images: [
        "assets/assets/images/products/tote-bags/W918/W918_main.webp",
        "assets/assets/images/products/tote-bags/W918/W918_black.webp",
        "assets/assets/images/products/tote-bags/W918/W918_forest_green.webp",
        "assets/assets/images/products/tote-bags/W918/W918_navy.webp",
        "assets/assets/images/products/tote-bags/W918/W918_red.webp",
        "assets/assets/images/products/tote-bags/W918/W918_royal.webp"
    ],

    specs: {
        itemNo: "W918",
        gusset: "Bottom: Yes Side: No",
        weight: "18 oz",
        material: "100% Cotton Canvas",
        handle: '22"',
        decoratedIn: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "40 pcs",
                boxWeight: "35 lbs",
                boxDims: '20" x 16" x 14"'
            },
            {
                type: "Printed Large Box",
                qtyPerBox: "50 pcs",
                boxWeight: "41 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "20 pcs",
                boxWeight: "17 lbs",
                boxDims: '8" x 16" x 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$9.98", "$9.73", "$9.45", "$9.22", "$8.89", "$8.58"]
                },
                {
                    label: "ADD LOCATION (V)",
                    prices: ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"]
                },
                {
                    label: "ADD COLOR (V)",
                    prices: ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56", "$0.56"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$62.50 (V)",
            repeatSetup: "$37.50 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$14.93", "$13.94", "$13.29", "$12.46", "$11.73", "$11.00"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.69", "$1.69", "$1.69", "$1.69", "$1.69", "$1.69"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        // ✅ BLANK PRICING ADDED
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "COLOR",
                    prices: ["$8.45"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$56.25 (V)",
        setupCharge: "$62.50 (V)",
        repeatSetup: "$37.50 (V)",
        lessThanMinimum: "Call for pricing"
    }
},

{
    id: "ib1400",
    name: "Canvas Standard Tote Bag",
    code: "IB1400",
    slug: "canvas-standard-tote-bag",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '17"W x 13"H x 5"D',
    imprint: '12"W x 6"H',
    price: 8.53,
    image: "assets/assets/images/products/tote-bags/IB1400/IB1400_main.webp",
    description: "Canvas standard tote bag made from 12oz 100% cotton with bottom and side gussets.",
    colors: [
        {
            name: "Black",
            hex: "#111111",
            image: "assets/assets/images/products/tote-bags/IB1400/IB1400_black.webp"
        },
        {
            name: "Chocolate",
            hex: "#6B4226",
            image: "assets/assets/images/products/tote-bags/IB1400/IB1400_chocolate.webp"
        },
        {
            name: "Light-Pink",
            hex: "#F3C6C8",
            image: "assets/assets/images/products/tote-bags/IB1400/IB1400_light_pink.webp"
        },
        {
            name: "Lime",
            hex: "#A8C93A",
            image: "assets/assets/images/products/tote-bags/IB1400/IB1400_lime.webp"
        },
        {
            name: "Maroon",
            hex: "#800000",
            image: "assets/assets/images/products/tote-bags/IB1400/IB1400_maroon.webp"
        },
        {
            name: "Natural",
            hex: "#E8DCC4",
            image: "assets/assets/images/products/tote-bags/IB1400/IB1400_natural.webp"
        },
        {
            name: "Navy",
            hex: "#1F3A5F",
            image: "assets/assets/images/products/tote-bags/IB1400/IB1400_navy.webp"
        },
        {
            name: "Purple",
            hex: "#800080",
            image: "assets/assets/images/products/tote-bags/IB1400/IB1400_purple.webp"
        },
        {
            name: "Red",
            hex: "#D32F2F",
            image: "assets/assets/images/products/tote-bags/IB1400/IB1400_red.webp"
        },
        {
            name: "Royal",
            hex: "#4169E1",
            image: "assets/assets/images/products/tote-bags/IB1400/IB1400_royal.webp"
        }
    ],
    weight: "12oz",
    handle: '22"',
    gusset: "Bottom: Yes Side: Yes",
    origin: "USA",
    packagingOptions: [
        {
            type: "Standard",
            qtyPerBox: "48 pcs",
            boxWeight: "38.57 lbs",
            boxDims: '23" x 14" x 16"'
        }
    ],
    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$11.41", "$10.48", "$10.15", "$9.98", "$9.79", "$9.69"]
                },
                {
                    label: "COLOR",
                    prices: ["$12.39", "$11.44", "$11.10", "$10.94", "$10.75", "$10.65"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"]
                }
            ]
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$15.33", "$14.40", "$14.06", "$13.92", "$13.88", "$13.83"]
                },
                {
                    label: "COLOR",
                    prices: ["$15.88", "$14.94", "$14.60", "$14.46", "$14.42", "$14.38"]
                }
            ]
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$8.53"]
                },
                {
                    label: "COLOR",
                    prices: ["$9.04"]
                }
            ]
        }
    },
    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},

{
    id: "ids135200",
    name: "Polyester Drawstring Backpack",
    code: "IDS135200",
    slug: "polyester-drawstring-backpack",
    category: "non-woven",
    material: "Polyester",
    size: '15"W x 18.75"H',
    imprint: '6.5"W x 8.5"H',
    price: 4.94,
    originalPrice: 8.60,
    image: "assets/assets/images/products/non-woven/IDS135200/IDS135200_main.webp",
    description: "Polyester drawstring backpack made from 210D polyester.",

    colors: [
        { name: 'Black', hex: '#1C1C1C', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_black.webp' },
        { name: 'Caroline-Blue', hex: '#5DA9E9', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_caroline_blue.webp' },
        { name: 'Forest-Green', hex: '#35513B', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_forest_green.webp' },
        { name: 'Gold', hex: '#D4A72C', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_gold.webp' },
        { name: 'Hot-Pink', hex: '#FF4FA3', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_hot_pink.webp' },
        { name: 'Kelly', hex: '#2E8B57', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_kelly.webp' },
        { name: 'Light-Pink', hex: '#F4B6C2', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_light_pink.webp' },
        { name: 'Lime', hex: '#84CC16', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_lime.webp' },
        { name: 'Natural', hex: '#E8D8B8', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_natural.webp' },
        { name: 'Navy', hex: '#1E2E4A', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_navy.webp' },
        { name: 'Orange', hex: '#F97316', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_orange.webp' },
        { name: 'Purple', hex: '#7E57C2', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_purple.webp' },
        { name: 'Red', hex: '#C62828', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_red.webp' },
        { name: 'Royal', hex: '#2455A4', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_royal.webp' },
        { name: 'Sapphire', hex: '#2563A6', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_sapphire.webp' },
        { name: 'Turqoise', hex: '#20B2AA', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_turqoise.webp' },
        { name: 'White', hex: '#FFFFFF', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_white.webp' },
        { name: 'Maroon', hex: '#800000', image: 'assets/assets/images/products/non-woven/IDS135200/IDS135200_maroon.webp' }
    ],

    images: [
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_main.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_black.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_caroline_blue.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_forest_green.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_gold.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_hot_pink.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_kelly.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_light_pink.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_lime.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_natural.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_navy.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_orange.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_purple.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_red.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_royal.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_sapphire.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_turqoise.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_white.webp",
        "assets/assets/images/products/non-woven/IDS135200/IDS135200_maroon.webp"
    ],

    specs: {
        itemNo: "IDS135200",
        gusset: "Bottom: No Side: No",
        weight: "210D",
        material: "Polyester",
        handle: "N/A",
        origin: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "144 pcs",
                boxWeight: "27 lbs",
                boxDims: '20" x 16" x 10"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$4.94", "$4.17", "$3.83", "$3.67", "$3.48", "$3.38"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$25.00 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$8.60", "$7.67", "$7.33", "$7.19", "$7.15", "$7.10"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "COLOR",
                    prices: ["$2.20"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece"
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
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
    price: 3.34,
    image: "assets/assets/images/products/non-woven/W977/W977_main.webp",
    description: "Insulated grocery bag made from 235 gsm non-woven material with 22-inch reinforced handles and bottom and side gussets.",

    colors: [
        { name: 'Black', hex: '#1C1C1C', image: 'assets/assets/images/products/non-woven/W977/W977_black.webp' },
        { name: 'Hunter-Green', hex: '#35513B', image: 'assets/assets/images/products/non-woven/W977/W977_hunter_green.webp' },
        { name: 'Red', hex: '#C62828', image: 'assets/assets/images/products/non-woven/W977/W977_red.webp' },
        { name: 'Royal', hex: '#2455A4', image: 'assets/assets/images/products/non-woven/W977/W977_royal.webp' }
    ],

    images: [
        "assets/assets/images/products/non-woven/W977/W977_main.webp",
        "assets/assets/images/products/non-woven/W977/W977_black.webp",
        "assets/assets/images/products/non-woven/W977/W977_hunter_green.webp",
        "assets/assets/images/products/non-woven/W977/W977_red.webp",
        "assets/assets/images/products/non-woven/W977/W977_royal.webp"
    ],

    specs: {
        itemNo: "W977",
        gusset: "Bottom: Yes Side: Yes",
        weight: "235 gsm",
        material: "Non Woven",
        handle: '22" Reinforced Handles',
        origin: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "35 pcs",
                boxWeight: "27 lbs",
                boxDims: '20" x 16" x 14"'
            },
            {
                type: "Printed Large Box",
                qtyPerBox: "40 pcs",
                boxWeight: "10 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "15 pcs",
                boxWeight: "5 lbs",
                boxDims: '8" x 16" x 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$4.52", "$4.35", "$4.12", "$4.02", "$3.78", "$3.54"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56", "$0.56"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$62.50 (V)",
            repeatSetup: "$37.50 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$8.38", "$7.82", "$7.50", "$7.03", "$6.61", "$6.19"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "COLOR",
                    prices: ["$3.34"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$56.25 (V)",
        setupCharge: "$62.50 (V)",
        repeatSetup: "$37.50 (V)",
        lessThanMinimum: "Call for pricing"
    }
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
    price: 2.58,
    originalPrice: 6.11,
    image: "assets/assets/images/products/non-woven/W966/W966_main.webp",
    description: "Non woven laundry bag made from 80 GSM non-woven fabric with front pocket and large back-side imprint area.",

    colors: [
        { name: 'White', hex: '#FFFFFF', image: 'assets/assets/images/products/non-woven/W966/W966_white.webp' }
    ],

    images: [
        "assets/assets/images/products/non-woven/W966/W966_main.webp",
        "assets/assets/images/products/non-woven/W966/W966_white.webp"
    ],

    specs: {
        itemNo: "W966",
        gusset: "Bottom: No Side: No",
        weight: "80 GSM",
        material: "Non-Woven Fabric",
        handle: "N/A",
        origin: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "200 pcs",
                boxWeight: "28 lbs",
                boxDims: '17" x 20" x 12"'
            },
            {
                type: "Printed Large Box",
                qtyPerBox: "200 pcs",
                boxWeight: "20 lbs",
                boxDims: '14" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "100 pcs",
                boxWeight: "10 lbs",
                boxDims: '9" x 16" x 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "WHITE",
                    prices: ["$2.58", "$2.41", "$2.28", "$2.14", "$2.01", "$1.88"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56", "$0.56"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$62.50 (V)",
            repeatSetup: "$37.50 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "WHITE",
                    prices: ["$6.11", "$5.70", "$5.49", "$5.15", "$4.85", "$4.55"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.69", "$1.69", "$1.69", "$1.69", "$1.69", "$1.69"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "WHITE",
                    prices: ["$1.57"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$56.25 (V)",
        setupCharge: "$62.50 (V)",
        repeatSetup: "$37.50 (V)",
        lessThanMinimum: "Call for pricing"
    }
},

{
    id: "w958",
    name: "Non Woven Two Tone Tote/Book Bag",
    code: "W958",
    slug: "non-woven-two-tone-tote-book-bag",
    category: "Non-Woven Bags",
    material: "Non-Woven Fabric",
    size: '11"W x 14"H x 5"D',
    imprint: '8"W x 9"H',
    price: 1.04,
    originalPrice: 50.00,
    image: "assets/assets/images/products/non-woven/W958/W958_main.webp",
    description: "Non woven two tone tote/book bag made from 90 gsm non-woven fabric with an 18-inch handle and bottom and side gussets.",

    colors: [
        {
            name: "Navy",
            hex: "#000080",
            image: "assets/assets/images/products/non-woven/W958/W958_navy.webp"
        },
        {
            name: "Red",
            hex: "#FF0000",
            image: "assets/assets/images/products/non-woven/W958/W958_red.webp"
        },
        {
            name: "Royal",
            hex: "#4169E1",
            image: "assets/assets/images/products/non-woven/W958/W958_royal.webp"
        }
    ],

    images: [
        "assets/assets/images/products/non-woven/W958/W958_main.webp",
        "assets/assets/images/products/non-woven/W958/W958_navy.webp",
        "assets/assets/images/products/non-woven/W958/W958_red.webp",
        "assets/assets/images/products/non-woven/W958/W958_royal.webp"
    ],

    specs: {
        itemNo: "W958",
        gusset: "Bottom: Yes Side: Yes",
        weight: "90 GSM",
        material: "Non-Woven Fabric",
        handle: '18"',
        decoratedIn: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "145 pcs",
                boxWeight: "27 lbs",
                boxDims: '20" x 16" x 14"'
            },
            {
                type: "Printed Large Box",
                qtyPerBox: "145 pcs",
                boxWeight: "16 lbs",
                boxDims: '14" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "72 pcs",
                boxWeight: "8 lbs",
                boxDims: '9" x 16" x 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$1.90", "$1.77", "$1.68", "$1.58", "$1.48", "$1.38"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56", "$0.56"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$62.50 (V)",
            repeatSetup: "$37.50 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "COLOR",
                    prices: ["$5.43", "$5.07", "$4.89", "$4.59", "$4.32", "$4.05"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.69", "$1.69", "$1.69", "$1.69", "$1.69", "$1.69"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "COLOR",
                    prices: ["$1.04"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$56.25 (V)",
        setupCharge: "$62.50 (V)",
        repeatSetup: "$37.50 (V)",
        lessThanMinimum: "Call for pricing"
    }
},
{
    id: "ib1300",
    name: "Canvas Zipper Tote Bag (with Color Handles)",
    code: "IB1300",
    slug: "canvas-zipper-tote-bag-with-color-handles",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '18"W x 14"H x 4.5"D',
    imprint: '3.5"W x 3.5"H',
    price: 9.36,
    image: "assets/assets/images/products/tote-bags/IB1300/IB1300_main.webp",
    description: "Canvas zipper tote bag with color handles, made from 12oz 100% cotton with a bottom gusset.",

    // ✅ COLORS YAHAN HONA CHAHIYE (directly andar)
    colors: [
        { name: 'Black', hex: '#000000', image: 'assets/assets/images/products/tote-bags/IB1300/IB1300_black.webp' },
        { name: 'Chocolate', hex: '#5A3825', image: 'assets/assets/images/products/tote-bags/IB1300/IB1300_chocolate.webp' },
        { name: 'Light-Pink', hex: '#FFB6C1', image: 'assets/assets/images/products/tote-bags/IB1300/IB1300_light_pink.webp' },
        { name: 'Lime', hex: '#32CD32', image: 'assets/assets/images/products/tote-bags/IB1300/IB1300_lime.webp' },
        { name: 'Maroon', hex: '#800000', image: 'assets/assets/images/products/tote-bags/IB1300/IB1300_maroon.webp' },
        { name: 'Natural', hex: '#F5F5DC', image: 'assets/assets/images/products/tote-bags/IB1300/IB1300_natural.webp' },
        { name: 'Navy', hex: '#000080', image: 'assets/assets/images/products/tote-bags/IB1300/IB1300_navy.webp' },
        { name: 'Purple', hex: '#800080', image: 'assets/assets/images/products/tote-bags/IB1300/IB1300_purple.webp' },
        { name: 'Red', hex: '#FF0000', image: 'assets/assets/images/products/tote-bags/IB1300/IB1300_red.webp' },
        { name: 'Royal', hex: '#4169E1', image: 'assets/assets/images/products/tote-bags/IB1300/IB1300_royal.webp' }
    ],

    images: [
        "assets/assets/images/products/tote-bags/IB1300/IB1300_main.webp",
        "assets/assets/images/products/tote-bags/IB1300/IB1300_black.webp",
        "assets/assets/images/products/tote-bags/IB1300/IB1300_chocolate.webp",
        "assets/assets/images/products/tote-bags/IB1300/IB1300_light_pink.webp",
        "assets/assets/images/products/tote-bags/IB1300/IB1300_lime.webp",
        "assets/assets/images/products/tote-bags/IB1300/IB1300_maroon.webp",
        "assets/assets/images/products/tote-bags/IB1300/IB1300_natural.webp",
        "assets/assets/images/products/tote-bags/IB1300/IB1300_navy.webp",
        "assets/assets/images/products/tote-bags/IB1300/IB1300_purple.webp",
        "assets/assets/images/products/tote-bags/IB1300/IB1300_red.webp",
        "assets/assets/images/products/tote-bags/IB1300/IB1300_royal.webp"
    ],

    specs: {
        itemNo: "IB1300",
        weight: "12oz",
        handle: '21"',
        gusset: "Bottom: Yes Side: No",
        material: "100% Cotton Canvas",
        origin: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "72 pcs",
                boxWeight: "42 lbs",
                boxDims: '19" x 16" x 14.25"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$9.36", "$8.48", "$8.15", "$7.98", "$7.79", "$7.69"]
                },
                {
                    label: "COLOR",
                    prices: ["$10.56", "$9.65", "$9.31", "$9.15", "$8.96", "$8.85"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$25.00 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$13.33", "$12.40", "$12.06", "$11.92", "$11.88", "$11.83"]
                },
                {
                    label: "COLOR",
                    prices: ["$14.08", "$13.15", "$12.81", "$12.67", "$12.63", "$12.58"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$6.65"]
                },
                {
                    label: "COLOR",
                    prices: ["$7.35"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece"
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
},

{
    id: "ib1100",
    name: "Canvas Gusset Tote Bag w/ Color Handles",
    code: "IB1100",
    slug: "canvas-gusset-tote-bag-w-color-handles",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '14"W x 12"H x 5.25"D',
    imprint: "100% Cotton",
    price: 8.65,
    image: "assets/assets/images/products/tote-bags/IB1100/IB1100_main.webp",
    description: "Canvas gusset tote bag with color handles, made from 12oz 100% cotton.",

    colors: [
        {
            name: "Black",
            hex: "#1C1C1C",
            image: "assets/assets/images/products/tote-bags/IB1100/IB1100_black.webp"
        },
        {
            name: "Chocolate",
            hex: "#5A3825",
            image: "assets/assets/images/products/tote-bags/IB1100/IB1100_chocolate.webp"
        },
        {
            name: "Light-Pink",
            hex: "#F3B6C2",
            image: "assets/assets/images/products/tote-bags/IB1100/IB1100_light_pink.webp"
        },
        {
            name: "Lime",
            hex: "#A8C957",
            image: "assets/assets/images/products/tote-bags/IB1100/IB1100_lime.webp"
        },
        {
            name: "Maroon",
            hex: "#800020",
            image: "assets/assets/images/products/tote-bags/IB1100/IB1100_maroon.webp"
        },
        {
            name: "Natural",
            hex: "#F5F0E1",
            image: "assets/assets/images/products/tote-bags/IB1100/IB1100_natural.webp"
        },
        {
            name: "Navy",
            hex: "#1E2E4A",
            image: "assets/assets/images/products/tote-bags/IB1100/IB1100_navy.webp"
        },
        {
            name: "Purple",
            hex: "#6A3D9A",
            image: "assets/assets/images/products/tote-bags/IB1100/IB1100_purple.webp"
        },
        {
            name: "Red",
            hex: "#C62828",
            image: "assets/assets/images/products/tote-bags/IB1100/IB1100_red.webp"
        },
        {
            name: "Royal",
            hex: "#2455A4",
            image: "assets/assets/images/products/tote-bags/IB1100/IB1100_royal.webp"
        }
    ],

    images: [
        "assets/assets/images/products/tote-bags/IB1100/IB1100_main.webp",
        "assets/assets/images/products/tote-bags/IB1100/IB1100_black.webp",
        "assets/assets/images/products/tote-bags/IB1100/IB1100_chocolate.webp",
        "assets/assets/images/products/tote-bags/IB1100/IB1100_light_pink.webp",
        "assets/assets/images/products/tote-bags/IB1100/IB1100_lime.webp",
        "assets/assets/images/products/tote-bags/IB1100/IB1100_maroon.webp",
        "assets/assets/images/products/tote-bags/IB1100/IB1100_natural.webp",
        "assets/assets/images/products/tote-bags/IB1100/IB1100_navy.webp",
        "assets/assets/images/products/tote-bags/IB1100/IB1100_purple.webp",
        "assets/assets/images/products/tote-bags/IB1100/IB1100_red.webp",
        "assets/assets/images/products/tote-bags/IB1100/IB1100_royal.webp"
    ],

    specs: {
        itemNo: "IB1100",
        gusset: "Bottom: Yes Side: Yes",
        weight: "12oz",
        material: "100% Cotton Canvas",
        handle: '22"',
        origin: "USA",
        packagingOptions: [
            {
                type: "Standard",
                qtyPerBox: "72 pcs",
                boxWeight: "33.72 lbs",
                boxDims: '15.5" X 15.5" X 13.5"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$8.65", "$7.79", "$7.46", "$7.29", "$7.10", "$7.00"]
                },
                {
                    label: "COLOR",
                    prices: ["$9.19", "$8.31", "$7.98", "$7.81", "$7.63", "$7.52"]
                },
                {
                    label: "ADD LOCATION",
                    prices: ["$1.81", "$1.31", "$1.06", "$0.94", "$0.81", "$0.71"]
                },
                {
                    label: "ADD COLOR",
                    prices: ["$0.50", "$0.38", "$0.35", "$0.30", "$0.25", "$0.20"]
                }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$25.00 (V)"
        },

        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$12.65", "$11.71", "$11.38", "$11.23", "$11.19", "$11.15"]
                },
                {
                    label: "COLOR",
                    prices: ["$14.14", "$12.70", "$12.12", "$11.60", "$11.44", "$11.27"]
                }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                {
                    label: "NATURAL",
                    prices: ["$6.00"]
                },
                {
                    label: "COLOR",
                    prices: ["$6.11"]
                }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "$25.00 (V)",
        setupCharge: "$56.25 (V)",
        repeatSetup: "$25.00 (V)",
        lessThanMinimum: "$50.00 (V)"
    }
}, {
    id: "w975",
    name: "Econo Tote Bag",
    code: "W975",
    slug: "econo-tote-bag",
    category: "Tote Bags",
    material: "Non-Woven Fabric",
    size: '14.25"W x 15"H x 5"D',
    imprint: '10"W x 8"H',
    price: 25.00,
    image: "assets/assets/images/products/non-woven/W975/W975_main.webp",
    description: "Economical non-woven tote bag. Perfect for budget-friendly promotions, events, and giveaways. No minimum order quantity required.",
    popular: true,
    colors: [
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/non-woven/W975/W975_black.webp" },
        { name: "Burgundy", hex: "#800020", image: "assets/assets/images/products/non-woven/W975/W975_burgundy.webp" },
        { name: "Hunter-Green", hex: "#355E3B", image: "assets/assets/images/products/non-woven/W975/W975_hunter_green.webp" },
        { name: "Ivory", hex: "#FFFFF0", image: "assets/assets/images/products/non-woven/W975/W975_ivory.webp" },
        { name: "Kelly", hex: "#4CBB17", image: "assets/assets/images/products/non-woven/W975/W975_kelly.webp" },
        { name: "Navy", hex: "#000080", image: "assets/assets/images/products/non-woven/W975/W975_navy.webp" },
        { name: "Orange", hex: "#FFA500", image: "assets/assets/images/products/non-woven/W975/W975_orange.webp" },
        { name: "Purple", hex: "#800080", image: "assets/assets/images/products/non-woven/W975/W975_purple.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/non-woven/W975/W975_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/non-woven/W975/W975_royal.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/non-woven/W975/W975_white.webp" },
        { name: "Yellow", hex: "#FFFF00", image: "assets/assets/images/products/non-woven/W975/W975_yellow.webp" }
    ],
    images: [
        "assets/assets/images/products/non-woven/W975/W975_main.webp",
        "assets/assets/images/products/non-woven/W975/W975_black.webp",
        "assets/assets/images/products/non-woven/W975/W975_white.webp"
    ],
    specs: {
        itemNo: "W975",
        gusset: "Bottom: Yes Side: No",
        weight: "80gsm",
        material: "Non-Woven Fabric",
        handle: "20\"",
        origin: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "400 pcs",
                boxWeight: "30 lbs",
                boxDims: '17.3" x 17.3" x 20"'
            },
            {
                type: "Printed Large Box",
                qtyPerBox: "400 pcs",
                boxWeight: "22 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "150 pcs",
                boxWeight: "9 lbs",
                boxDims: '8" x 16" x 20"'
            }
        ]
    },
    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "COLOR", prices: ["$1.76", "$1.65", "$1.56", "$1.46", "$1.38", "$1.30"] },
                { label: "ADD LOCATION ", prices: ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63", "$0.63"] },
                { label: "ADD COLOR", prices: ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56", "$0.56"] }
            ]
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2000, 3000],
            rows: [
                { label: "COLOR", prices: ["$5.30", "$4.94", "$4.77", "$4.47", "$4.21", "$3.95"] },
                { label: "ADD LOCATION ", prices: ["$1.69", "$1.69", "$1.69", "$1.69", "$1.69", "$1.69"] }
            ]
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "COLOR", prices: ["$0.93"] }
            ]
        }
    },
    additionalCharges: {
        pmsMatch: "$56.25 (V)",
        setupCharge: "$62.50 (V)",
        repeatSetup: "$37.50 (V)",
        lessThanMinimum: "Call for pricing"
    }
},
{
    id: "ABW8700",
    name: "Fleece Throw",
    code: "ABW8700",
    slug: "fleece-throw",
    category: "Blankets",
    material: "100% Polyester Fleece",
    size: '50" x 60"',
    imprint: '8" x 10"',
    price: 10.52,
    originalPrice: 10.52,
    image: "assets/assets/images/products/blankets/IW8700/8700-Red.jpg",
    featureImage: "assets/assets/images/products/blankets/IW8700/8700-Feature.png",
    description: "Premium 13.8-ounce anti-pill fleece throw. Made from 100% polyester with 260 GSM weight. Features matching whipstitch trim and non-branded label. Charcoal has black whipstitch. Perfect for corporate gifting, promotional events, and everyday use. Machine washable for easy care.",
    popular: true,

    hideSetupWas: true,
    hideMockup: true,
    hideTemplates: true,
    hideCharges: true,
    hideImprint: true,
    hideGusset: true,
    showSpecPicture: true,
    showAdditionalInfoTab: true,
    useInkwellItemNo: true,

    colors: [
        { name: "Red", hex: "#C41E3A", sku: "8700-69", gtin: "00671867700695", pms: "199C", image: "assets/assets/images/products/blankets/IW8700/8700-Red.jpg" },
        { name: "Navy", hex: "#1B1F3B", sku: "8700-73", gtin: "00671867700732", pms: "N/A", image: "assets/assets/images/products/blankets/IW8700/8700-Navy.jpg" },
        { name: "Black", hex: "#000000", sku: "8700-77", gtin: "00671867700770", pms: "Black C", image: "assets/assets/images/products/blankets/IW8700/8700-Black.jpg" },
        { name: "Heather Grey", hex: "#A9A9A9", sku: "8700-78", gtin: "00671867700787", pms: "14-4106TPX", image: "assets/assets/images/products/blankets/IW8700/8700-Grey.jpg" },
        { name: "Charcoal", hex: "#36454F", sku: "8700-79", gtin: "00671867700794", pms: "Cool Gray 10 C", image: "assets/assets/images/products/blankets/IW8700/8700-Charcoal.jpg" },
        { name: "Royal", hex: "#002366", sku: "8700-86", gtin: "00671867700862", pms: "N/A", image: "assets/assets/images/products/blankets/IW8700/8700-Royal.jpg" }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8700/8700-Red.jpg",
        "assets/assets/images/products/blankets/IW8700/8700-Navy.jpg",
        "assets/assets/images/products/blankets/IW8700/8700-Black.jpg",
        "assets/assets/images/products/blankets/IW8700/8700-Grey.jpg",
        "assets/assets/images/products/blankets/IW8700/8700-Charcoal.jpg",
        "assets/assets/images/products/blankets/IW8700/8700-Royal.jpg"
    ],

    specs: {
        itemNo: "ABW8700",
        gtin: "00671867700695",
        gusset: "N/A",
        weight: "13.8 oz / 260 GSM",
        material: "100% Polyester Fleece",
        handle: "N/A",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "USA",
        packagingOptions: [
            {
                type: "Bulk Packaging",
                qtyPerBox: "20 pcs",
                boxWeight: "24 lbs",
                boxDims: '24.5" x 15" x 17"',
                cartonVolume: "3.62 cu ft",
                pieceWeight: "1.20 lbs",
                note: "10 pcs. per polybag / 2 polybags in a box"
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$10.52"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "N/A",
        lessThanMinimum: "N/A"
    }
},
{
    id: "ABW8701",
    name: "Fleece/Nylon Picnic Blanket",
    code: "ABW8701",
    slug: "fleece-nylon-picnic-blanket",
    category: "Blankets",
    material: "Polyester Fleece / Polyester Oxford with Polyurethane coating",
    size: '50" x 60" (Closed 10" x 12")',
    imprint: "N/A",
    price: 16.84,
    originalPrice: 16.84,
    image: "assets/assets/images/products/blankets/IW8701/8701-Black.jpg",
    featureImage: "assets/assets/images/products/blankets/IW8701/8701-Feature.png",
    description: "Fleece/Nylon Picnic Blanket with easy-carry design that unfolds into a full-size picnic blanket. Features attached carry handles, quick close pockets, tubular binding, anti-pill fleece, and water repellent nylon. Easy fold design with non-branded label/tag. Top: Polyester Fleece. Shell: Polyester Oxford, Polyurethane coating.",
    popular: false,

    hideSetupWas: true,
    hideMockup: true,
    hideTemplates: true,
    hideCharges: true,
    hideImprint: true,
    hideGusset: true,
    showSpecPicture: true,
    showAdditionalInfoTab: true,
    useInkwellItemNo: true,

    colors: [
        {
            name: "Navy",
            hex: "#1B1F3B",
            sku: "8701-73",
            gtin: "00671867701739",
            pms: "N/A",
            image: "assets/assets/images/products/blankets/IW8701/8701-Navy.jpg"
        },
        {
            name: "Black",
            hex: "#000000",
            sku: "8701-77",
            gtin: "00671867701777",
            pms: "Black C",
            image: "assets/assets/images/products/blankets/IW8701/8701-Black.jpg"
        },
        {
            name: "Cinder Grey",
            hex: "#A9A9A9",
            sku: "8701-78",
            gtin: "00671867634105",
            pms: "Cool Gray 6C",
            image: "assets/assets/images/products/blankets/IW8701/8701-Cinder Gray.jpg"
        },
        {
            name: "Royal",
            hex: "#002366",
            sku: "8701-86",
            gtin: "00671867701869",
            pms: "7693C",
            image: "assets/assets/images/products/blankets/IW8701/8701-Royal.jpg"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8701/8701-Navy.jpg",
        "assets/assets/images/products/blankets/IW8701/8701-Black.jpg",
        "assets/assets/images/products/blankets/IW8701/8701-Cinder Gray.jpg",
        "assets/assets/images/products/blankets/IW8701/8701-Royal.jpg"
    ],

    specs: {
        itemNo: "ABW8701",
        gtin: "00671867701739",
        gusset: "N/A",
        weight: "N/A",
        material: "Polyester Fleece / Polyester Oxford with Polyurethane coating",
        handle: "Attached carry handles",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "USA",
        packagingOptions: [
            {
                type: "Bulk Packaging",
                qtyPerBox: "20 pcs",
                boxWeight: "34 lbs",
                boxDims: '20.5" x 12.5" x 25"',
                cartonVolume: "3.71 cu ft",
                pieceWeight: "1.75 lbs",
                note: "10 pcs. per polybag / 2 polybags in a box"
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$16.84"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "N/A",
        lessThanMinimum: "N/A"
    }
},

{
    id: "ABW8702",
    name: "Fleece/Nylon Print Picnic Blanket",
    code: "ABW8702",
    slug: "fleece-nylon-print-picnic-blanket",
    category: "Blankets",
    material: "Polyester Fleece / Polyester Oxford with Polyurethane coating",
    size: '50" x 60" (Closed 10" x 12")',
    imprint: "N/A",
    price: 16.84,
    originalPrice: 16.84,
    image: "assets/assets/images/products/blankets/IW8702/8702-Blackwatch.jpg",
    featureImage: "assets/assets/images/products/blankets/IW8702/8702-Feature.png",
    description: "Fleece/Nylon Print Picnic Blanket with easy-carry design that unfolds into a full-size picnic blanket. Features attached carry handles, quick close pockets, tubular binding, anti-pill fleece, and water repellent nylon. Easy fold design with non-branded label/tag. Top: Polyester Fleece. Shell: Polyester Oxford, Polyurethane coating.",
    popular: false,

    hideSetupWas: true,
    hideMockup: true,
    hideTemplates: true,
    hideCharges: true,
    hideImprint: true,
    hideGusset: true,
    showSpecPicture: true,
    showAdditionalInfoTab: true,
    useInkwellItemNo: true,

    colors: [
        {
            name: "Blackwatch",
            hex: "#0B2E1E",
            sku: "8702-82",
            gtin: "00671867702828",
            pms: "Green=342C / Navy=295C",
            image: "assets/assets/images/products/blankets/IW8702/8702-Blackwatch.jpg"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8702/8702-Blackwatch.jpg"
    ],

    specs: {
        itemNo: "ABW8702",
        gtin: "00671867702828",
        gusset: "N/A",
        weight: "N/A",
        material: "Polyester Fleece / Polyester Oxford with Polyurethane coating",
        handle: "Attached carry handles",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "USA",
        packagingOptions: [
            {
                type: "Bulk Packaging",
                qtyPerBox: "20 pcs",
                boxWeight: "34 lbs",
                boxDims: '20.5" x 12.5" x 25"',
                cartonVolume: "3.71 cu ft",
                pieceWeight: "1.75 lbs",
                note: "10 pcs. per polybag / 2 polybags in a box"
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$16.84"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "N/A",
        lessThanMinimum: "N/A"
    }
},

{
    id: "ABW8710",
    name: "Sweatshirt Blanket Throw",
    code: "ABW8710",
    slug: "sweatshirt-blanket-throw",
    category: "Blankets",
    material: "52/48 Poly/Cotton",
    size: '50" x 60"',
    imprint: "N/A",
    price: 16.22,
    originalPrice: 16.22,
    image: "assets/assets/images/products/blankets/IW8710/8710-Black.jpg",
    featureImage: "assets/assets/images/products/blankets/IW8710/8710-Feature.png",
    description: "Sweatshirt blanket throw made from 52/48 Poly/Cotton. 50\" x 60\", 280 G/SM. Able to be screen printed or embroidered. Non-branded label/tag.",
    popular: false,

    hideSetupWas: true,
    hideMockup: true,
    hideTemplates: true,
    hideCharges: true,
    hideImprint: true,
    hideGusset: true,
    showSpecPicture: true,
    showAdditionalInfoTab: true,
    useInkwellItemNo: true,

    colors: [
        {
            name: "Black",
            hex: "#000000",
            sku: "8710-77",
            gtin: "00671867710779",
            pms: "Black C",
            image: "assets/assets/images/products/blankets/IW8710/8710-Black.jpg"
        },
        {
            name: "Heather Grey",
            hex: "#A9A9A9",
            sku: "8710-78",
            gtin: "00671867710786",
            pms: "N/A",
            image: "assets/assets/images/products/blankets/IW8710/8710-Heather Grey.jpg"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8710/8710-Black.jpg",
        "assets/assets/images/products/blankets/IW8710/8710-Heather Grey.jpg"
    ],

    specs: {
        itemNo: "ABW8710",
        gtin: "00671867710779",
        gusset: "N/A",
        weight: "280 GSM",
        material: "52/48 Poly/Cotton",
        handle: "N/A",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "USA",
        packagingOptions: [
            {
                type: "Bulk Packaging",
                qtyPerBox: "20 pcs",
                boxWeight: "28 lbs",
                boxDims: '16.5" x 13" x 25"',
                cartonVolume: "3.1 cu ft",
                pieceWeight: "1.00 lbs",
                note: "Bulk packing"
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$16.22"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "N/A",
        lessThanMinimum: "N/A"
    }
},
{
    id: "ABW8711",
    name: "Value Fleece Blanket",
    code: "ABW8711",
    slug: "value-fleece-blanket",
    category: "Blankets",
    material: "100% Polar Fleece Fabric",
    size: '50" x 60"',
    imprint: "N/A",
    price: 8.22,
    originalPrice: 8.22,
    image: "assets/assets/images/products/blankets/IW8711/8711-Black.jpg",
    featureImage: "assets/assets/images/products/blankets/IW8711/8711-Feature.png",
    description: "6.5-ounce, 100% Polar Fleece Fabric. 200 G/SM. 50\" x 60\". Matching whipstitch trim. Non-branded label/tag.",
    popular: false,

    hideSetupWas: true,
    hideMockup: true,
    hideTemplates: true,
    hideCharges: true,
    hideImprint: true,
    hideGusset: true,
    showSpecPicture: true,
    showAdditionalInfoTab: true,
    useInkwellItemNo: true,

    colors: [
        {
            name: "Red",
            hex: "#C41E3A",
            sku: "8711-69",
            gtin: "00671867711691",
            pms: "186C",
            image: "assets/assets/images/products/blankets/IW8711/8711-Red.jpg"
        },
        {
            name: "Navy",
            hex: "#1B1F3B",
            sku: "8711-73",
            gtin: "00671867711738",
            pms: "2767C",
            image: "assets/assets/images/products/blankets/IW8711/8711-Navy.jpg"
        },
        {
            name: "Forest",
            hex: "#228B22",
            sku: "8711-76",
            gtin: "00671867711769",
            pms: "N/A",
            image: "assets/assets/images/products/blankets/IW8711/8711-Forest Green.jpg"
        },
        {
            name: "Black",
            hex: "#000000",
            sku: "8711-77",
            gtin: "00671867711776",
            pms: "Black C",
            image: "assets/assets/images/products/blankets/IW8711/8711-Black.jpg"
        },
        {
            name: "Cinder Grey",
            hex: "#A9A9A9",
            sku: "8711-78",
            gtin: "00671867711783",
            pms: "415C",
            image: "assets/assets/images/products/blankets/IW8711/8711-Gray.jpg"
        },
        {
            name: "Royal",
            hex: "#002366",
            sku: "8711-86",
            gtin: "00671867711868",
            pms: "7683C",
            image: "assets/assets/images/products/blankets/IW8711/8711-Royal.jpg"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8711/8711-Black.jpg",
        "assets/assets/images/products/blankets/IW8711/8711-Forest Green.jpg",
        "assets/assets/images/products/blankets/IW8711/8711-Gray.jpg",
        "assets/assets/images/products/blankets/IW8711/8711-Navy.jpg",
        "assets/assets/images/products/blankets/IW8711/8711-Red.jpg",
        "assets/assets/images/products/blankets/IW8711/8711-Royal.jpg"
    ],

    specs: {
        itemNo: "ABW8711",
        gtin: "00671867711691",
        gusset: "N/A",
        weight: "6.5 oz / 200 GSM",
        material: "100% Polar Fleece Fabric",
        handle: "N/A",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "USA",
        packagingOptions: [
            {
                type: "Bulk Packaging",
                qtyPerBox: "30 pcs",
                boxWeight: "26 lbs",
                boxDims: '25" x 15" x 17"',
                cartonVolume: "3.69 cu ft",
                pieceWeight: "0.94 lbs",
                note: "15 pcs. per polybag / 2 polybags in a box"
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$8.22"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "N/A",
        lessThanMinimum: "N/A"
    }
},
{
    id: "ABW8712",
    name: "Micro Mink Sherpa Blankets",
    code: "ABW8712",
    slug: "micro-mink-sherpa-blankets",
    category: "Blankets",
    material: "100% Polyester (Faux Micro Mink / Faux Lambswool Sherpa)",
    size: '50" x 60"',
    imprint: "N/A",
    price: 23.12,
    originalPrice: 23.12,
    image: "assets/assets/images/products/blankets/IW8712/8712-Cream.jpg",
    featureImage: "assets/assets/images/products/blankets/IW8712/8712-Feature.png",
    description: "Cozy fleece face that reverses to soft luxurious sherpa. MM-220 g/sqm; SH-240 g/sqm. 100% polyester, one side faux micro mink, other side faux lambswool sherpa. Fully hemmed. Hidden 15\" zip pocket for easy embroidery access. 50\" x 60\". Machine wash & dry. Non-branded label/tag.",
    popular: false,

    hideSetupWas: true,
    hideMockup: true,
    hideTemplates: true,
    hideCharges: true,
    hideImprint: true,
    hideGusset: true,
    showSpecPicture: true,
    showAdditionalInfoTab: true,
    useInkwellItemNo: true,

    colors: [
        {
            name: "Navy",
            hex: "#1B1F3B",
            sku: "8712-73",
            gtin: "00671867712735",
            pms: "534C",
            image: "assets/assets/images/products/blankets/IW8712/8712-Navy.jpg"
        },
        {
            name: "Forest",
            hex: "#228B22",
            sku: "8712-76",
            gtin: "00671867712766",
            pms: "7734C",
            image: "assets/assets/images/products/blankets/IW8712/8712-Forest Green.jpg"
        },
        {
            name: "Black",
            hex: "#000000",
            sku: "8712-77",
            gtin: "00671867712773",
            pms: "Black C",
            image: "assets/assets/images/products/blankets/IW8712/8712-Black.jpg"
        },
        {
            name: "Grey",
            hex: "#A9A9A9",
            sku: "8712-78",
            gtin: "00671867712780",
            pms: "421C",
            image: "assets/assets/images/products/blankets/IW8712/8712-Gray.jpg"
        },
        {
            name: "Royal",
            hex: "#002366",
            sku: "8712-86",
            gtin: "00671867712865",
            pms: "7683C",
            image: "assets/assets/images/products/blankets/IW8712/8712-Royal.jpg"
        },
        {
            name: "Cream",
            hex: "#F5F0DC",
            sku: "8712-87",
            gtin: "00671867712872",
            pms: "11-4201 TPX",
            image: "assets/assets/images/products/blankets/IW8712/8712-Cream.jpg"
        },
        {
            name: "Cam",
            hex: "#4B5320",
            sku: "8712-Cam",
            gtin: "00671867712995",
            pms: "4685C",
            image: "assets/assets/images/products/blankets/IW8712/8712-Cam.jpg"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8712/8712-Cream.jpg",
        "assets/assets/images/products/blankets/IW8712/8712-Forest Green.jpg",
        "assets/assets/images/products/blankets/IW8712/8712-Navy.jpg",
        "assets/assets/images/products/blankets/IW8712/8712-Royal.jpg",
        "assets/assets/images/products/blankets/IW8712/8712-Black.jpg",
        "assets/assets/images/products/blankets/IW8712/8712-Gray.jpg",
        "assets/assets/images/products/blankets/IW8712/8712-Cam.jpg"
    ],

    specs: {
        itemNo: "ABW8712",
        gtin: "00671867712735",
        gusset: "N/A",
        weight: "MM-220 g/sqm; SH-240 g/sqm",
        material: "100% Polyester (Faux Micro Mink / Faux Lambswool Sherpa)",
        handle: "N/A",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "USA",
        packagingOptions: [
            {
                type: "Individual Zippered Vinyl Bag",
                qtyPerBox: "10 pcs",
                boxWeight: "24 lbs",
                boxDims: '25" x 15" x 17"',
                cartonVolume: "3.69 cu ft",
                pieceWeight: "2.33 lbs",
                note: "Individual zippered vinyl bag. 10 in a box."
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$23.12"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "N/A",
        lessThanMinimum: "N/A"
    }
},
{
    id: "ABW8718",
    name: "Fleece Roll Up Blanket",
    code: "ABW8718",
    slug: "fleece-roll-up-blanket",
    category: "Blankets",
    material: "100% Polyester Anti-Pill Fleece",
    size: '47" x 53"',
    imprint: "N/A",
    price: 8.42,
    originalPrice: 8.42,
    image: "assets/assets/images/products/blankets/IW8718/8718-Black.jpg",
    featureImage: "assets/assets/images/products/blankets/IW8718/8718-Feature.png",
    description: "100% Polyester easy roll up blanket. 47\" x 53\". Anti-pill fleece, 180 G/SM. Trim has matching flap with pocket, handle, VELCRO® and whipstitch. Non-branded label/tag.",
    popular: false,

    // ✅ FLAGS
    hideSetupWas: true,
    hideMockup: true,
    hideTemplates: true,
    hideCharges: true,
    hideImprint: true,
    hideGusset: true,
    showSpecPicture: true,
    showAdditionalInfoTab: true,
    useInkwellItemNo: true,

    colors: [
        {
            name: "Navy",
            hex: "#1B1F3B",
            sku: "8718-73",
            gtin: "00671867718737",
            pms: "534C",
            image: "assets/assets/images/products/blankets/IW8718/8718-Navy.jpg"
        },
        {
            name: "Black",
            hex: "#000000",
            sku: "8718-??",
            gtin: "",
            pms: "",
            image: "assets/assets/images/products/blankets/IW8718/8718-Black.jpg"
        },
        {
            name: "Gray",
            hex: "#A9A9A9",
            sku: "8718-??",
            gtin: "",
            pms: "",
            image: "assets/assets/images/products/blankets/IW8718/8718-Gray.jpg"
        },
        {
            name: "Royal",
            hex: "#002366",
            sku: "8718-??",
            gtin: "",
            pms: "",
            image: "assets/assets/images/products/blankets/IW8718/8718-Royal.jpg"
        },
        {
            name: "Sage",
            hex: "#A5A69A",
            sku: "8718-??",
            gtin: "",
            pms: "",
            image: "assets/assets/images/products/blankets/IW8718/8718-Sage.jpg"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8718/8718-Black.jpg",
        "assets/assets/images/products/blankets/IW8718/8718-Gray.jpg",
        "assets/assets/images/products/blankets/IW8718/8718-Royal.jpg",
        "assets/assets/images/products/blankets/IW8718/8718-Sage.jpg"
    ],

    specs: {
        itemNo: "ABW8718",
        gtin: "00671867718737",
        gusset: "N/A",
        weight: "180 G/SM",
        material: "100% Polyester Anti-Pill Fleece",
        handle: "Matching flap with handle",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "USA",
        packagingOptions: [
            {
                type: "Bulk Packaging",
                qtyPerBox: "30 pcs",
                boxWeight: "27 lbs",
                boxDims: '24" x 13" x 21"',
                cartonVolume: "3.79 cu ft",
                pieceWeight: "0.83 lbs",
                note: "10 pcs. per polybag / 3 polybags in a box"
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$8.42"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "N/A",
        lessThanMinimum: "N/A"
    }
},
{
    id: "ABW8721",
    name: "Mink Touch Luxury Blanket",
    code: "ABW8721",
    slug: "mink-touch-luxury-blanket",
    category: "Blankets",
    material: "100% Polyester Faux Mink",
    size: '50" x 60"',
    imprint: "N/A",
    price: 16.84,
    originalPrice: 16.84,
    image: "assets/assets/images/products/blankets/IW8721/8721-Black.jpg",
    featureImage: "assets/assets/images/products/blankets/IW8721/8721-Feature.png",
    description: "100% Polyester Faux Mink. Weight: 300 g/sqm. Finish self hem decorative top stitch finish. 50\" x 60\". Vinyl zippered bag with mink touch card in pocket included. Machine wash & dry. Non-branded label/tag.",
    popular: false,

    hideSetupWas: true,
    hideMockup: true,
    hideTemplates: true,
    hideCharges: true,
    hideImprint: true,
    hideGusset: true,
    showSpecPicture: true,
    showAdditionalInfoTab: true,
    useInkwellItemNo: true,

    colors: [
        {
            name: "Navy",
            hex: "#1B1F3B",
            sku: "8721-73",
            gtin: "00671867630824",
            pms: "295C",
            image: "assets/assets/images/products/blankets/IW8721/8721-Navy.jpg"
        },
        {
            name: "Black",
            hex: "#000000",
            sku: "8721-77",
            gtin: "00671867630770",
            pms: "Black C",
            image: "assets/assets/images/products/blankets/IW8721/8721-Black.jpg"
        },
        {
            name: "Grey",
            hex: "#A9A9A9",
            sku: "8721-78",
            gtin: "00671867630817",
            pms: "429C",
            image: "assets/assets/images/products/blankets/IW8721/8721-Gray.jpg"
        },
        {
            name: "Royal",
            hex: "#002366",
            sku: "8721-86",
            gtin: "00671867630848",
            pms: "7684C",
            image: "assets/assets/images/products/blankets/IW8721/8721-Royal.jpg"
        },
        {
            name: "Cream",
            hex: "#F5F0DC",
            sku: "8721-87",
            gtin: "00671867630794",
            pms: "11-4300 TPX",
            image: "assets/assets/images/products/blankets/IW8721/8721-Cream.png"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8721/8721-Black.jpg",
        "assets/assets/images/products/blankets/IW8721/8721-Cream.png",
        "assets/assets/images/products/blankets/IW8721/8721-Gray.jpg",
        "assets/assets/images/products/blankets/IW8721/8721-Navy.jpg",
        "assets/assets/images/products/blankets/IW8721/8721-Royal.jpg"
    ],

    specs: {
        itemNo: "ABW8721",
        gtin: "00671867630824",
        gusset: "N/A",
        weight: "300 g/sqm",
        material: "100% Polyester Faux Mink",
        handle: "N/A",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "USA",
        packagingOptions: [
            {
                type: "Individual Zippered Vinyl Bag",
                qtyPerBox: "20 pcs",
                boxWeight: "35 lbs",
                boxDims: '26" x 14" x 21"',
                cartonVolume: "4.42 cu ft",
                pieceWeight: "1.54 lbs",
                note: "Individual zippered vinyl bag. 20 in a box."
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$16.84"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "N/A",
        lessThanMinimum: "N/A"
    }
},
{
    id: "ABW8722",
    name: "Mink Touch Luxury Baby Blanket",
    code: "ABW8722",
    slug: "mink-touch-luxury-baby-blanket",
    category: "Blankets",
    material: "100% Polyester Faux Mink",
    size: '30" x 40"',
    imprint: "N/A",
    price: 8.64,
    originalPrice: 8.64,
    image: "assets/assets/images/products/blankets/IW8722/8722-Baby Blue.jpg",
    featureImage: "assets/assets/images/products/blankets/IW8722/8722-Feature.png",
    description: "100% Polyester Faux Mink. Weight: 300 g/sqm. Self hem decorative top stitch finish. 30\" x 40\". Vinyl zippered bag with mink touch card in pocket included. Machine wash & dry. Non-branded label/tag.",
    popular: false,

    hideSetupWas: true,
    hideMockup: true,
    hideTemplates: true,
    hideCharges: true,
    hideImprint: true,
    hideGusset: true,
    showSpecPicture: true,
    showAdditionalInfoTab: true,
    useInkwellItemNo: true,

    colors: [
        {
            name: "Pure White",
            hex: "#FFFFFF",
            sku: "8722-67",
            gtin: "00671867630879",
            pms: "White C",
            image: "assets/assets/images/products/blankets/IW8722/8722-Pure White.jpg"
        },
        {
            name: "Baby Pink",
            hex: "#F4C2C2",
            sku: "8722-71",
            gtin: "00671867630862",
            pms: "705C",
            image: "assets/assets/images/products/blankets/IW8722/8722-Baby Pink.jpg"
        },
        {
            name: "Baby Blue",
            hex: "#A7C7E7",
            sku: "8722-75",
            gtin: "00671867630855",
            pms: "649C",
            image: "assets/assets/images/products/blankets/IW8722/8722-Baby Blue.jpg"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8722/8722-Pure White.jpg",
        "assets/assets/images/products/blankets/IW8722/8722-Baby Pink.jpg",
        "assets/assets/images/products/blankets/IW8722/8722-Baby Blue.jpg"
    ],

    specs: {
        itemNo: "ABW8722",
        gtin: "00671867630879",
        gusset: "N/A",
        weight: "300 g/sqm",
        material: "100% Polyester Faux Mink",
        handle: "N/A",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "USA",
        packagingOptions: [
            {
                type: "Individual Zippered Vinyl Bag",
                qtyPerBox: "40 pcs",
                boxWeight: "31 lbs",
                boxDims: '21" x 20" x 17"',
                cartonVolume: "4.13 cu ft",
                pieceWeight: "0.65 lbs",
                note: "Individual zippered vinyl bag. 40 in a box."
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$8.64"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "N/A",
        lessThanMinimum: "N/A"
    }
},
{
    id: "ABW8723",
    name: "Mink Touch Luxury Robe",
    code: "ABW8723",
    slug: "mink-touch-luxury-robe",
    category: "Blankets",
    material: "100% Polyester Faux Mink",
    size: '60" x 72"',
    imprint: "N/A",
    price: 33.68,
    originalPrice: 33.68,
    image: "assets/assets/images/products/blankets/IW8723/8723-White.jpg",
    featureImage: "assets/assets/images/products/blankets/IW8723/8723-Feature.png",
    description: "100% Polyester Faux Mink. Weight: 270 g/sqm. 48\" length. Full length shawl collar, belt loops, collar loop, 2 front pockets and matching belt. One Size Fits All. Vinyl zippered bag with mink touch card in pocket included. Machine wash & dry. Non-branded label/tag.",
    popular: false,

    hideSetupWas: true,
    hideMockup: true,
    hideTemplates: true,
    hideCharges: true,
    hideImprint: true,
    hideGusset: true,
    showSpecPicture: true,
    showAdditionalInfoTab: true,
    useInkwellItemNo: true,

    colors: [
        {
            name: "White",
            hex: "#FFFFFF",
            sku: "8723-67",
            gtin: "00671867630909",
            pms: "White C",
            image: "assets/assets/images/products/blankets/IW8723/8723-White.jpg"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8723/8723-White.jpg"
    ],

    specs: {
        itemNo: "ABW8723",
        gtin: "00671867630909",
        gusset: "N/A",
        weight: "270 g/sqm",
        material: "100% Polyester Faux Mink",
        handle: "N/A",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "N/A",
        packagingOptions: [
            {
                type: "Individual Zippered Vinyl Bag",
                qtyPerBox: "10 pcs",
                boxWeight: "21 lbs",
                boxDims: '24" x 15" x 17"',
                cartonVolume: "3.54 cu ft",
                pieceWeight: "2.00 lbs",
                note: "Individual zippered vinyl bag. 10 in a box."
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$33.68"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "N/A",
        lessThanMinimum: "N/A"
    }
},
{
    id: "ABW8726",
    name: "Oversized Micro Mink Sherpa Blanket",
    code: "ABW8726",
    slug: "oversized-micro-mink-sherpa-blanket",
    category: "Blankets",
    material: "100% Polyester (Faux Micro Mink / Faux Lambswool Sherpa)",
    size: '60" x 72"',
    imprint: "N/A",
    price: 33.68,
    originalPrice: 33.68,
    image: "assets/assets/images/products/blankets/IW8726/8726-Gray.jpg",
    featureImage: "assets/assets/images/products/blankets/IW8726/8726-Feature.png",
    description: "Cozy fleece face that reverses to soft luxurious sherpa. 220 g/sqm. 100% polyester, one side faux micro mink, other side faux lambswool sherpa. Fully hemmed. Hidden zip pocket for easy embroidery access. 60\" x 72\". Machine wash & dry. Non-branded label/tag.",
    popular: false,

    hideSetupWas: true,
    hideMockup: true,
    hideTemplates: true,
    hideCharges: true,
    hideImprint: true,
    hideGusset: true,
    showSpecPicture: true,
    showAdditionalInfoTab: true,
    useInkwellItemNo: true,

    colors: [
        {
            name: "Grey",
            hex: "#A9A9A9",
            sku: "8726-78",
            gtin: "00671867632804",
            pms: "421C",
            image: "assets/assets/images/products/blankets/IW8726/8726-Gray.jpg"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8726/8726-Gray.jpg"
    ],

    specs: {
        itemNo: "ABW8726",
        gtin: "00671867632804",
        gusset: "N/A",
        weight: "220 g/sqm",
        material: "100% Polyester (Faux Micro Mink / Faux Lambswool Sherpa)",
        handle: "N/A",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "N/A",
        packagingOptions: [
            {
                type: "Individual Zippered Vinyl Bag",
                qtyPerBox: "8 pcs",
                boxWeight: "25 lbs",
                boxDims: '29" x 17" x 15"',
                cartonVolume: "4.28 cu ft",
                pieceWeight: "3.13 lbs",
                note: "Individual zippered vinyl bag. 8 in a box."
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$33.68"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "N/A",
        lessThanMinimum: "N/A"
    }
},
{
    id: "ABW8727",
    name: "Oversized Mink Touch Blanket",
    code: "ABW8727",
    slug: "oversized-mink-touch-blanket",
    category: "Blankets",
    material: "100% Polyester Faux Mink",
    size: '60" x 72"',
    imprint: "N/A",
    price: 23.68,
    originalPrice: 23.68,
    image: "assets/assets/images/products/blankets/IW8727/8727-Black.jpg",
    featureImage: "assets/assets/images/products/blankets/IW8727/8727-Feature.png",
    description: "Size: 60\" x 72\". Weight: 300 g/sm. Content: 100% Polyester Faux Mink. Trim: Finish self hem decorative top stitch finish. Machine wash & dry. Packaging: 10/carton, Vinyl zippered bag with mink touch card in pocket included. Non-branded label/tag.",
    popular: false,

    hideSetupWas: true,
    hideMockup: true,
    hideTemplates: true,
    hideCharges: true,
    hideImprint: true,
    hideGusset: true,
    showSpecPicture: true,
    showAdditionalInfoTab: true,
    useInkwellItemNo: true,

    colors: [
        {
            name: "Navy",
            hex: "#1B1F3B",
            sku: "8727-73",
            gtin: "00671867634082",
            pms: "295C",
            image: "assets/assets/images/products/blankets/IW8727/8727-Navy.jpg"
        },
        {
            name: "Black",
            hex: "#000000",
            sku: "8727-77",
            gtin: "00671867634051",
            pms: "Black C",
            image: "assets/assets/images/products/blankets/IW8727/8727-Black.jpg"
        },
        {
            name: "Grey",
            hex: "#A9A9A9",
            sku: "8727-78",
            gtin: "00671867634075",
            pms: "Cool Gray 7C",
            image: "assets/assets/images/products/blankets/IW8727/8727-Grey.jpg"
        },
        {
            name: "Cream",
            hex: "#F5F0DC",
            sku: "8727-87",
            gtin: "00671867634068",
            pms: "11-4300 TPX",
            image: "assets/assets/images/products/blankets/IW8727/8727-Cream.jpg"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8727/8727-Navy.jpg",
        "assets/assets/images/products/blankets/IW8727/8727-Black.jpg",
        "assets/assets/images/products/blankets/IW8727/8727-Grey.jpg",
        "assets/assets/images/products/blankets/IW8727/8727-Cream.jpg"
    ],

    specs: {
        itemNo: "ABW8727",
        gtin: "00671867634082",
        gusset: "N/A",
        weight: "300 g/sm",
        material: "100% Polyester Faux Mink",
        handle: "N/A",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "USA",
        packagingOptions: [
            {
                type: "Individual Zippered Vinyl Bag",
                qtyPerBox: "10 pcs",
                boxWeight: "27 lbs",
                boxDims: '29" x 16" x 14"',
                cartonVolume: "3.76 cu ft",
                pieceWeight: "2.25 lbs",
                note: "Individual zippered vinyl bag. 10 in a box."
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$23.68"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "N/A",
        lessThanMinimum: "N/A"
    }
},
{
    id: "ABW8729",
    name: "Frosted Sherpa Blanket",
    code: "ABW8729",
    slug: "frosted-sherpa-blanket",
    category: "Blankets",
    material: "100% Polyester Soft Printed",
    size: '50" x 60"',
    imprint: "N/A",
    price: 21.58,
    originalPrice: 21.58,
    image: "assets/assets/images/products/blankets/IW8729/8729-Grey.jpg",
    featureImage: "assets/assets/images/products/blankets/IW8729/8729-Feature.png",
    description: "Frosted fleece sherpa with luxurious feel. 100% polyester soft printed blanket. Folded hem. 50\" x 60\". Machine wash & dry. Non-branded label/tag.",
    popular: false,

    hideSetupWas: true,
    hideMockup: true,
    hideTemplates: true,
    hideCharges: true,
    hideImprint: true,
    hideGusset: true,
    showSpecPicture: true,
    showAdditionalInfoTab: true,
    useInkwellItemNo: true,

    colors: [
        {
            name: "Grey",
            hex: "#A9A9A9",
            sku: "8729-78",
            gtin: "00671867642100",
            pms: "5315C",
            image: "assets/assets/images/products/blankets/IW8729/8729-Grey.jpg"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8729/8729-Grey.jpg"
    ],

    specs: {
        itemNo: "ABW8729",
        gtin: "00671867642100",
        gusset: "N/A",
        weight: "N/A",
        material: "100% Polyester Soft Printed",
        handle: "N/A",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "N/A",
        packagingOptions: [
            {
                type: "Individual Zippered Vinyl Bag",
                qtyPerBox: "14 pcs",
                boxWeight: "19 lbs",
                boxDims: '26" x 15" x 20"',
                cartonVolume: "4.51 cu ft",
                pieceWeight: "1.39 lbs",
                note: "Individual zippered vinyl bag. 14 in a box."
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$21.58"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "N/A",
        lessThanMinimum: "N/A"
    }
},
{
    id: "ABW8730",
    name: "Faux Fur Sherpa Blanket",
    code: "ABW8730",
    slug: "faux-fur-sherpa-blanket",
    category: "Blankets",
    material: "100% Polyester (Faux Chinchilla / Faux Lambswool Sherpa)",
    size: '50" x 60"',
    imprint: "N/A",
    price: 26.32,
    originalPrice: 26.32,
    image: "assets/assets/images/products/blankets/IW8730/8730-Grey.jpg",
    featureImage: "assets/assets/images/products/blankets/IW8730/8730-Feature.png",
    description: "Snug faux chinchilla fur front that reverses to faux sherpa back. 100% polyester, one side faux chinchilla, other side faux lambswool sherpa. Concealed zipper hem in corner. 50\" x 60\". Machine wash & dry. Non-branded label/tag.",
    popular: false,

    hideSetupWas: true,
    hideMockup: true,
    hideTemplates: true,
    hideCharges: true,
    hideImprint: true,
    hideGusset: true,
    showSpecPicture: true,
    showAdditionalInfoTab: true,
    useInkwellItemNo: true,

    colors: [
        {
            name: "Grey",
            hex: "#A9A9A9",
            sku: "8730-78",
            gtin: "00671867642117",
            pms: "Cool Gray 5C",
            image: "assets/assets/images/products/blankets/IW8730/8730-Grey.jpg"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8730/8730-Grey.jpg"
    ],

    specs: {
        itemNo: "ABW8730",
        gtin: "00671867642117",
        gusset: "N/A",
        weight: "N/A",
        material: "100% Polyester (Faux Chinchilla / Faux Lambswool Sherpa)",
        handle: "N/A",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "N/A",
        packagingOptions: [
            {
                type: "Individual Zippered Vinyl Bag",
                qtyPerBox: "10 pcs",
                boxWeight: "28 lbs",
                boxDims: '26.75" x 15" x 15.5"',
                cartonVolume: "3.6 cu ft",
                pieceWeight: "2.80 lbs",
                note: "Individual zippered vinyl bag. 10 in a box."
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$26.32"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        pmsMatch: "N/A",
        lessThanMinimum: "N/A"
    }
}
];

// ============================================================
// PRODUCT TEMPLATES - AUTO GENERATE (Sab products ke liye)
// ============================================================
const productTemplates = {};

// Har product ke liye templates generate karo
products.forEach(product => {
    if (!product.colors || product.colors.length === 0) return;

    const colorTemplates = product.colors.map(color => {
        return {
            name: color.name,
            hex: color.hex || '#000000',
            pdf: `assets/assets/templates/${product.code}/${color.name}.pdf`
        };
    });

    productTemplates[product.id] = {
        colors: colorTemplates,
        imprintArea: product.imprint || 'N/A',
        // ✅ BW Template ka path - Product code ke hisaab se
        bwTemplate: `assets/assets/templates/${product.code}/${product.code}_BW.pdf`,
        downloadAll: '#'
    };
});

console.log('✅ Product Templates Generated:', Object.keys(productTemplates).length);

// ============================================================
// TEMPLATE DOWNLOAD FUNCTIONS (NEW)
// ============================================================

/**
 * Generate a template PNG for a specific color
 */
function generateTemplatePNG(colorName, product, imprintArea) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = 800;
        canvas.height = 600;

        // White background
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Border
        ctx.strokeStyle = '#CCCCCC';
        ctx.lineWidth = 2;
        ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

        // Product Name
        ctx.fillStyle = '#17154A';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(product.name, canvas.width / 2, 80);

        // Product Code & Size
        ctx.fillStyle = '#666666';
        ctx.font = '16px Arial';
        ctx.fillText(product.code + ' | ' + product.size, canvas.width / 2, 110);

        // Color Name
        ctx.fillStyle = '#333333';
        ctx.font = '18px Arial';
        ctx.fillText('Color: ' + colorName, canvas.width / 2, 160);

        // Imprint Area
        ctx.fillStyle = '#666666';
        ctx.font = '14px Arial';
        ctx.fillText('Imprint Area: ' + (imprintArea || product.imprint || 'N/A'), canvas.width / 2, 190);

        // Imprint Box (dashed border)
        ctx.strokeStyle = '#C81F45';
        ctx.lineWidth = 2;
        ctx.setLineDash([10, 5]);
        const iw = 300, ih = 200;
        const x = (canvas.width - iw) / 2;
        const y = (canvas.height - ih) / 2 + 20;
        ctx.strokeRect(x, y, iw, ih);

        // "IMPRINT AREA" text
        ctx.fillStyle = '#C81F45';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('IMPRINT AREA', canvas.width / 2, y + ih / 2 + 5);

        // Color swatch
        ctx.fillStyle = '#F0F0F0';
        ctx.fillRect(30, canvas.height - 60, 40, 30);
        ctx.strokeStyle = '#CCCCCC';
        ctx.lineWidth = 1;
        ctx.setLineDash([]);
        ctx.strokeRect(30, canvas.height - 60, 40, 30);
        ctx.fillStyle = '#333';
        ctx.font = '10px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('Color: ' + colorName, 80, canvas.height - 40);

        // Date
        ctx.fillStyle = '#999999';
        ctx.font = '10px Arial';
        ctx.textAlign = 'right';
        ctx.fillText('Generated: ' + new Date().toLocaleDateString(), canvas.width - 30, canvas.height - 20);

        canvas.toBlob((blob) => {
            resolve(blob);
        }, 'image/png');
    });
}

/**
 * Download a single template for a specific color
 */
/**
 * Download a single template PDF for a specific color
 */
/**
 * Download a single template PDF for a specific color
 */
/**
 * Download a single template PDF for a specific color
 */
async function downloadSingleTemplate(colorName, product) {
    try {
        // ✅ EXACT name rakho (capital letter ke saath)
        const colorSlug = colorName; // "Red", "Natural", "Black", etc.

        // Path with double assets
        const pdfPath = `assets/assets/templates/${product.code}/${colorSlug}.pdf`;

        console.log('📄 Checking PDF:', pdfPath);

        // Check karo ke PDF exist karti hai ya nahi
        const response = await fetch(pdfPath, { method: 'HEAD' });

        if (!response.ok) {
            throw new Error(`PDF not found: ${pdfPath}`);
        }

        // PDF download karo
        const link = document.createElement('a');
        link.download = `${product.code}_${colorSlug}.pdf`;
        link.href = pdfPath;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        showNotification(`✅ ${colorName} color template PDF downloaded!`);
    } catch (error) {
        console.error('Download error:', error);
        showNotification(`❌ PDF not found for ${colorName}. Please check folder.`);
    }
}

/**
 * Download all templates as a ZIP file
 */
async function downloadAllTemplates(product) {
    const templateData = productTemplates[product.id] || {
        colors: product.colors.map(c => ({ name: c.name })),
        imprintArea: product.imprint || 'N/A'
    };

    const colors = templateData.colors;

    if (!colors || colors.length === 0) {
        showNotification('❌ No Color for this product');
        return;
    }

    try {
        showNotification('⏳ ' + colors.length + ' templates are generating...');

        // Check if JSZip is available
        if (typeof JSZip === 'undefined') {
            showNotification('❌ JSZip library didnt load. check CDN');
            return;
        }

        const zip = new JSZip();

        // Generate PNG for each color
        for (let i = 0; i < colors.length; i++) {
            const color = colors[i];
            const blob = await generateTemplatePNG(color.name, product, templateData.imprintArea);
            const fileName = `${product.code}_${color.name.replace(/\s+/g, '_')}_template.png`;
            zip.file(fileName, blob);
        }

        // Generate ZIP
        const zipBlob = await zip.generateAsync({ type: 'blob' });

        // Download ZIP
        const link = document.createElement('a');
        link.download = `${product.code}_all_templates.zip`;
        link.href = URL.createObjectURL(zipBlob);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => URL.revokeObjectURL(link.href), 1000);

        showNotification(`✅ Akk ${colors.length} templates are downloaded in zip!`);

    } catch (error) {
        console.error('ZIP error:', error);
        showNotification('Error Downloading Zip' + error.message);
    }
}

let currentTemplatesProduct = null;

function openTemplatesModal(product) {
    currentTemplatesProduct = product;
    const modal = document.getElementById('templatesModal');

    // Set product info
    document.getElementById('templatesProductImage').src = product.image;
    document.getElementById('templatesProductNameText').textContent = product.name;
    document.getElementById('templatesProductCodeText').textContent = product.code + ' | ' + product.size;

    // ✅ EXACT name rakho (capital letter ke saath)
    const templateData = productTemplates[product.id] || {
        colors: product.colors.map(c => ({
            name: c.name,
            hex: c.hex,
            pdf: `assets/assets/templates/${product.code}/${c.name}.pdf`  // ✅ c.name EXACT
        })),
        imprintArea: product.imprint || 'N/A',
        bwTemplate: `assets/assets/templates/${product.code}/${product.code}_BW.pdf`,
        downloadAll: '#'
    };

    document.getElementById('templatesImprintArea').textContent = templateData.imprintArea;

    // BW Template Status
    const bwStatus = document.getElementById('bwTemplateStatus');
    if (templateData.bwTemplate) {
        bwStatus.innerHTML = `<a href="${templateData.bwTemplate}" target="_blank" 
                                class="text-brand-crimson hover:underline flex items-center gap-2">
                                <i class="fa-regular fa-file-pdf"></i> Download PDF
                             </a>`;
    } else {
        bwStatus.textContent = 'Not Available';
    }

    // Populate table with PDF download buttons
    const tbody = document.getElementById('templatesTableBody');
    tbody.innerHTML = '';

    templateData.colors.forEach(color => {
        const tr = document.createElement('tr');
        tr.className = 'border-b border-brand-border hover:bg-brand-bg/20 transition-colors';
        tr.innerHTML = `
            <td class="p-3">
                <div class="flex items-center gap-3">
                    <div class="w-6 h-6 rounded-full border border-brand-border" 
                         style="background:${color.hex}; ${color.hex === '#FFFFFF' ? 'border:1px solid #ddd;' : ''}">
                    </div>
                    <span class="text-brand-text font-medium">${color.name}</span>
                </div>
            </td>
            <td class="p-3 text-center">
                <a href="#" class="text-brand-crimson hover:underline text-sm flex items-center justify-center gap-1 download-template-btn" 
                   data-color="${color.name}">
                    <i class="fa-regular fa-file-pdf"></i> Download PDF
                </a>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // ✅ Add download handlers for individual templates
    document.querySelectorAll('.download-template-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const colorName = this.dataset.color;
            downloadSingleTemplate(colorName, product);
        });
    });

    // ✅ Set download all handler
    document.getElementById('downloadAllTemplates').onclick = function (e) {
        e.preventDefault();
        downloadAllTemplates(product);
    };

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTemplatesModal() {
    const modal = document.getElementById('templatesModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================================
// INIT TEMPLATES MODAL EVENTS
// ============================================================
function initTemplatesModal() {
    const templatesBtn = document.getElementById('templatesBtn');
    if (templatesBtn) {
        templatesBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (currentQuotationProduct) {
                openTemplatesModal(currentQuotationProduct);
            } else {
                console.error('No product selected!');
            }
        });
    }

    const closeBtn = document.getElementById('closeTemplatesModal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeTemplatesModal);
    }

    const cancelBtn = document.getElementById('cancelTemplatesModal');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeTemplatesModal);
    }

    const modal = document.getElementById('templatesModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeTemplatesModal();
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const modalEl = document.getElementById('templatesModal');
            if (modalEl && modalEl.classList.contains('active')) {
                closeTemplatesModal();
            }
        }
    });
}



// ============================================================
// 2. RELATED PRODUCTS FUNCTION
// ============================================================
function getRelatedProducts(currentProduct, allProducts, limit = 4) {
    let related = allProducts.filter(p =>
        p.id !== currentProduct.id &&
        p.category === currentProduct.category
    );

    if (related.length < limit) {
        const materialProducts = allProducts.filter(p =>
            p.id !== currentProduct.id &&
            p.material === currentProduct.material &&
            !related.some(r => r.id === p.id)
        );
        related = [...related, ...materialProducts];
    }

    if (related.length < limit) {
        const otherProducts = allProducts.filter(p =>
            p.id !== currentProduct.id &&
            !related.some(r => r.id === p.id)
        );
        related = [...related, ...otherProducts];
    }

    return related.slice(0, limit);
}

let currentImagesProduct = null;

function openImagesModal(product) {
    currentImagesProduct = product;

    const modal = document.getElementById('imagesModal');
    if (!modal) return;

    const productImage = document.getElementById('imagesProductImage');
    const productName = document.getElementById('imagesProductNameText');
    const productCode = document.getElementById('imagesProductCodeText');

    if (productImage) productImage.src = product.image || '';
    if (productName) productName.textContent = product.name || '';

    // ✅ Inkwell Item No. show karo (SKU nahi)
    if (productCode) {
        productCode.textContent = `${product.code} | ${product.size || ''}`;
    }

    const tbody = document.getElementById('imagesTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    let images = [];
    if (Array.isArray(product.colors)) {
        images = product.colors.map(color => color.image).filter(Boolean);
    }
    images = [...new Set(images)];

    images.forEach((img, index) => {
        // ✅ File name mein Inkwell code use karo
        const originalFileName = img.split('/').pop();
        const extension = originalFileName.split('.').pop();

        // ✅ Naya filename Inkwell code ke saath
        const colorName = product.colors?.[index]?.name || `Image${index + 1}`;
        const inkwellFileName = `${product.code}-${colorName.replace(/\s+/g, '-')}.${extension}`;

        const tr = document.createElement('tr');
        tr.className = 'border-b border-brand-border hover:bg-brand-bg/20 transition-colors';

        tr.innerHTML = `
            <td class="p-2 sm:p-3">
                <div class="flex items-center gap-3">
                    <img src="${img}" alt="${inkwellFileName}" 
                         class="w-16 h-16 object-cover rounded border border-brand-border cursor-pointer hover:opacity-80 transition-opacity"
                         onclick="window.open('${img}', '_blank')" />
                    <div class="flex flex-col">
                        <span class="text-brand-text font-medium">${product.code} - ${colorName}</span>
                        <span class="text-xs text-gray-500">Image ${index + 1} of ${images.length}</span>
                    </div>
                </div>
            </td>
            <td class="p-2 sm:p-3 text-center">
                <a href="${img}" download="${inkwellFileName}"
                   class="text-brand-crimson hover:underline text-sm flex items-center justify-center gap-1 download-image-btn"
                   data-image="${img}"
                   data-filename="${inkwellFileName}">
                    <i class="fa-regular fa-circle-down"></i> Download
                </a>
            </td>
        `;
        tbody.appendChild(tr);
    });

    document.querySelectorAll('.download-image-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const imageUrl = this.dataset.image;
            const fileName = this.dataset.filename;
            if (!imageUrl) return;
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = fileName || 'image.webp';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}





// ============================================================
// CLOSE MODAL
// ============================================================
function closeImagesModal() {

    const modal = document.getElementById('imagesModal');

    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}


// ============================================================
// INIT IMAGES MODAL
// ============================================================
function initImagesModal() {

    const imagesBtn = document.getElementById('imagesBtn');

    if (imagesBtn) {

        imagesBtn.addEventListener('click', function (e) {

            e.preventDefault();

            if (currentQuotationProduct) {

                openImagesModal(currentQuotationProduct);

            } else {

                console.error('No product selected for images!');

            }
        });
    }


    const closeBtn =
        document.getElementById('closeImagesModal');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeImagesModal);
    }


    const cancelBtn =
        document.getElementById('cancelImagesModal');

    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeImagesModal);
    }


    const modal =
        document.getElementById('imagesModal');

    if (modal) {

        modal.addEventListener('click', function (e) {

            if (e.target === this) {
                closeImagesModal();
            }

        });
    }


    document.addEventListener('keydown', function (e) {

        if (e.key === 'Escape') {

            const modal =
                document.getElementById('imagesModal');

            if (
                modal &&
                modal.classList.contains('active')
            ) {
                closeImagesModal();
            }
        }
    });
}

// ============================================================
// PATCH: CALL initImagesModal() INSIDE EXISTING INIT()
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        initImagesModal();
    }, 500);
});

(function patchInit() {
    const observer = new MutationObserver(function (mutations, obs) {
        const productName = document.getElementById('product-title');
        if (productName && productName.textContent !== 'Loading...') {
            initImagesModal();
            obs.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    setTimeout(function () {
        const productName = document.getElementById('product-title');
        if (productName && productName.textContent !== 'Loading...') {
            initImagesModal();
        }
    }, 1000);
})();

console.log('✅ Images button and modal added successfully!');

// ============================================================
// 3. RENDER RELATED PRODUCTS
// ============================================================
function renderRelatedProducts(currentProduct, allProducts) {
    const related = getRelatedProducts(currentProduct, allProducts, 4);
    if (related.length === 0) return;

    const container = document.getElementById('related-products-container');
    if (!container) return;

    function getMinimumPrice(product) {
        // Check if blank pricing exists
        if (product.pricing && product.pricing.blank && product.pricing.blank.rows) {
            // Find the NATURAL row in blank pricing
            const naturalRow = product.pricing.blank.rows.find(row =>
                row.label.toUpperCase() === 'NATURAL'
            );

            if (naturalRow && naturalRow.prices && naturalRow.prices.length > 0) {
                // Get the first price (usually the base price)
                const priceStr = naturalRow.prices[0];
                const priceNum = parseFloat(priceStr.replace('$', '').replace(',', ''));

                if (!isNaN(priceNum) && priceNum > 0) {
                    // Return 60% of the natural blank price
                    return priceNum * 0.6;
                }
            }
        }

        // Fallback: agar blank natural nahi mila toh spot printing ki cheapest price lo
        if (product.pricing && product.pricing.spot && product.pricing.spot.rows) {
            let minPrice = Infinity;
            product.pricing.spot.rows.forEach(row => {
                row.prices.forEach(price => {
                    const num = parseFloat(price.replace('$', '').replace(',', ''));
                    if (num < minPrice) minPrice = num;
                });
            });
            return minPrice !== Infinity ? minPrice : product.price;
        }

        return product.price;
    }

    const relatedWithMinPrice = related.map(product => ({
        ...product,
        minPrice: getMinimumPrice(product)
    }));

    const section = document.createElement('div');
    section.className = 'mt-12 border-t border-brand-border pt-8';
    section.innerHTML = `
        <h2 class="text-2xl font-serif text-brand-text mb-6">Related Products</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            ${relatedWithMinPrice.map(product => `
                <a href="?id=${product.id}" class="group">
                    <div class="bg-white rounded-lg border border-brand-border overflow-hidden related-product-card hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                        <div class="overflow-hidden relative bg-gray-50" style="height: 220px;">
                            <img src="${product.image}" alt="${product.name}" 
                                 class="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect width=%22200%22 height=%22200%22 fill=%22%23f3f4f6%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-family=%22Arial%22 font-size=%2214%22 fill=%22%239ca3af%22 text-anchor=%22middle%22 dy=%22.3em%22%3ENo%20Image%3C/text%3E%3C/svg%3E'">
                            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-3">
                                <p class="text-white text-lg font-bold tracking-wide">
                                    <span class="text-xs font-normal opacity-80">As low as</span> 
                                    $${product.minPrice.toFixed(2)}
                                </p>
                            </div>
                        </div>
                        <div class="p-4 flex-1 flex flex-col">
                            <p class="text-xs text-brand-textSecondary">${product.code}</p>
                            <h3 class="text-sm font-medium text-brand-text mt-1 line-clamp-2 min-h-[40px]">${product.name}</h3>
                            <div class="flex items-center justify-between mt-3 pt-2 border-t border-brand-border/50">
                                <span class="text-xs text-brand-crimson font-semibold group-hover:underline">View Details →</span>
                                <div class="flex gap-1">
                                    ${product.colors.slice(0, 3).map(c => `
                                        <div class="w-4 h-4 rounded-full border border-brand-border" 
                                             style="background:${c.hex}; ${c.hex === '#FFFFFF' ? 'border:1px solid #ddd;' : ''}"></div>
                                    `).join('')}
                                    ${product.colors.length > 3 ? `<span class="text-[10px] text-brand-textSecondary">+${product.colors.length - 3}</span>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            `).join('')}
        </div>
    `;
    container.appendChild(section);
}

// ============================================================
// QUOTATION MODAL FUNCTIONS
// ============================================================
let currentQuotationProduct = null;

function openQuotationModal(product) {
    currentQuotationProduct = product;
    const modal = document.getElementById('quotationModal');

    document.getElementById('quotationProductImage').src = product.image;
    document.getElementById('quotationProductName').textContent = product.name;
    document.getElementById('quotationProductCode').textContent = product.code + ' | ' + product.size;

    const colorSelect = document.getElementById('quotationColor');
    colorSelect.innerHTML = '<option value="">Select Color</option>';
    product.colors.forEach(color => {
        const option = document.createElement('option');
        option.value = color.name;
        option.textContent = color.name;
        colorSelect.appendChild(option);
    });

    document.getElementById('quotationForm').reset();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuotationModal() {
    const modal = document.getElementById('quotationModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================================
// INIT QUOTATION MODAL EVENTS
// ============================================================
function initQuotationModal() {

    const quotationForm = document.getElementById("quotationForm");
    if (quotationForm) {
        quotationForm.addEventListener("submit", submitQuotationForm);
    }

    const quoteBtn = document.querySelector('.btn-crimson.flex-1');
    if (quoteBtn) {
        quoteBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (currentQuotationProduct) {
                openQuotationModal(currentQuotationProduct);
            }
        });
    }

    const fileInput = document.getElementById('quotationFile');
    if (fileInput) {
        fileInput.setAttribute('multiple', 'multiple');
        fileInput.addEventListener('change', function (e) {
            const fileName = document.getElementById('fileName');
            if (this.files.length > 0) {
                const names = Array.from(this.files).map(f => f.name).join(', ');
                fileName.textContent = `${this.files.length} file(s): ${names}`;
            } else {
                fileName.textContent = 'No file chosen';
            }
        });
    }

    const closeBtn = document.getElementById('closeQuotationModal');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            const modal = document.getElementById('quotationModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    const cancelBtn = document.getElementById('cancelQuotationModal');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function () {
            const modal = document.getElementById('quotationModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    const modal = document.getElementById('quotationModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const modalEl = document.getElementById('quotationModal');
            if (modalEl) {
                modalEl.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });

    async function submitQuotationForm(e) {
        e.preventDefault();

        const submitBtn = document.getElementById("submitQuotation");
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
                <i class="fa-solid fa-spinner fa-spin mr-2"></i>
                Sending...
            `;

        try {
            const formData = new FormData();

            formData.append("product_name", currentQuotationProduct.name);
            formData.append("product_code", currentQuotationProduct.code);
            formData.append("product_size", currentQuotationProduct.size);
            formData.append("color", document.getElementById("quotationColor").value);
            formData.append("quantity", document.getElementById("quotationQuantity").value);
            formData.append("zip_code", document.getElementById("quotationZip").value);
            formData.append("company", document.getElementById("quotationCompany").value);
            formData.append("email", document.getElementById("quotationEmail").value);
            formData.append("phone", document.getElementById("quotationPhone").value);
            // ====== NEW FIELDS ======
            formData.append("asi_ppai_sage", document.getElementById("quotationAsi").value);
            formData.append("item", document.getElementById("quotationItem").value);

            // ====== END NEW FIELDS ======
            formData.append("in_hand_date", document.getElementById("quotationDate").value);

            const freightRadio = document.querySelector('input[name="freight_estimate"]:checked');
            formData.append("freight_estimate", freightRadio ? freightRadio.value : "No");
            formData.append("project_details", document.getElementById("quotationDetails").value);

            const fileInput = document.getElementById("quotationFile");
            if (fileInput && fileInput.files.length > 0) {
                for (let i = 0; i < fileInput.files.length; i++) {
                    formData.append("attachments", fileInput.files[i]);
                }
            }

            const response = await fetch(
                "https://inkwell-email-api.arijbaig97.workers.dev",
                {
                    method: "POST",
                    body: formData
                }
            );

            const result = await response.json();
            console.log(result);

            if (!response.ok) {
                throw new Error(result.message || "Failed");
            }

            alert("✅ Quote Request Sent Successfully!");
            quotationForm.reset();
            document.getElementById('fileName').textContent = 'No file chosen';
            closeQuotationModal();

        } catch (err) {
            console.error(err);
            alert("❌ Failed to send quotation.");
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                    <i class="fa-regular fa-paper-plane mr-2"></i>
                    Submit Quotation
                `;
        }
    }
}

// ============================================================
// MOCKUP MODAL FUNCTIONS
// ============================================================
let currentMockupProduct = null;

function openMockupModal(product) {
    currentMockupProduct = product;
    const modal = document.getElementById('mockupModal');

    document.getElementById('mockupProductImage').src = product.image;
    document.getElementById('mockupProductName').textContent = product.name;
    document.getElementById('mockupProductCode').textContent = product.code + ' | ' + product.size;

    const colorSelect = document.getElementById('mockupColor');
    colorSelect.innerHTML = '<option value="">Select Color</option>';
    product.colors.forEach(color => {
        const option = document.createElement('option');
        option.value = color.name;
        option.textContent = color.name;
        colorSelect.appendChild(option);
    });

    document.getElementById('mockupForm').reset();
    document.getElementById('mockupFileName').textContent = 'No file chosen';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMockupModal() {
    const modal = document.getElementById('mockupModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================================
// INIT MOCKUP MODAL EVENTS
// ============================================================
function initMockupModal() {
    const mockupBtn = document.querySelector('.btn-outline.flex-1:not(.border-transparent)');
    if (mockupBtn) {
        mockupBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (currentMockupProduct) {
                openMockupModal(currentMockupProduct);
            } else {
                console.error('currentMockupProduct is null!');
            }
        });
    }

    const fileInput = document.getElementById('mockupLogo');
    if (fileInput) {
        fileInput.setAttribute('multiple', 'multiple');
        fileInput.addEventListener('change', function (e) {
            const fileName = document.getElementById('mockupFileName');
            if (this.files.length > 0) {
                const names = Array.from(this.files).map(f => f.name).join(', ');
                fileName.textContent = `${this.files.length} file(s): ${names}`;
            } else {
                fileName.textContent = 'No file chosen';
            }
        });
    }

    const closeBtn = document.getElementById('closeMockupModal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMockupModal);
    }

    const cancelBtn = document.getElementById('cancelMockupModal');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeMockupModal);
    }

    const modal = document.getElementById('mockupModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeMockupModal();
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const modalEl = document.getElementById('mockupModal');
            if (modalEl && modalEl.classList.contains('active')) {
                closeMockupModal();
            }
        }
    });

    const submitBtn = document.getElementById('submitMockup');
    if (submitBtn) {
        submitBtn.addEventListener('click', async function (e) {
            e.preventDefault();

            const btn = this;
            btn.disabled = true;
            btn.innerHTML = `
                    <i class="fa-solid fa-spinner fa-spin mr-2"></i>
                    Sending...
                `;

            try {
                const formData = new FormData();

                formData.append("request_type", "mockup");
                formData.append("product_name", currentMockupProduct?.name || "");
                formData.append("product_code", currentMockupProduct?.code || "");
                formData.append("product_size", currentMockupProduct?.size || "");
                formData.append("color", document.getElementById('mockupColor').value);
                formData.append("placement", document.getElementById('mockupPlacement').value);
                formData.append("printing_method", document.getElementById('mockupMethod').value);
                formData.append("quantity", document.getElementById('mockupQuantity').value);
                formData.append("logo_colors", document.getElementById('mockupLogoColors').value);
                formData.append("email", document.getElementById('mockupEmail').value);
                formData.append("phone", document.getElementById('mockupPhone').value);
                formData.append("asi_number", document.getElementById('mockupAsi').value);
                formData.append("item", document.getElementById('mockupItem').value);

                formData.append("instructions", document.getElementById('mockupInstructions').value);

                const freightRadio = document.querySelector('input[name="mockupFreight"]:checked');
                formData.append("freight_estimate", freightRadio ? freightRadio.value : "no");

                const fileInput2 = document.getElementById('mockupLogo');
                if (fileInput2 && fileInput2.files.length > 0) {
                    for (let i = 0; i < fileInput2.files.length; i++) {
                        formData.append("logo_files", fileInput2.files[i]);
                    }
                }

                const response = await fetch(
                    "https://inkwell-email-api.arijbaig97.workers.dev",
                    {
                        method: "POST",
                        body: formData
                    }
                );

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.message || "Failed");
                }

                alert("✅ Mockup request sent successfully!");
                document.getElementById('mockupForm').reset();
                document.getElementById('mockupFileName').textContent = 'No file chosen';
                closeMockupModal();

            } catch (error) {
                console.error(error);
                alert("❌ Failed to send mockup request. Please try again.");
            } finally {
                btn.disabled = false;
                btn.innerHTML = `
                        <i class="fa-regular fa-image mr-2"></i>
                        Submit Mockup Request
                    `;
            }
        });
    }
}

// ============================================================
// FREIGHT ESTIMATE MODAL FUNCTIONS
// ============================================================
let currentFreightProduct = null;

function openFreightModal(product) {
    currentFreightProduct = product;
    const modal = document.getElementById('freightModal');

    document.getElementById('freightProductImage').src = product.image;
    document.getElementById('freightProductName').textContent = product.name;
    document.getElementById('freightProductCode').textContent = product.code + ' | ' + product.size;

    document.getElementById('freightForm').reset();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFreightModal() {
    const modal = document.getElementById('freightModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================================
// INIT FREIGHT ESTIMATE MODAL EVENTS
// ============================================================
function initFreightModal() {
    const freightBtn = document.querySelector('.btn-outline.border-transparent');
    if (freightBtn) {
        freightBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (currentFreightProduct) {
                openFreightModal(currentFreightProduct);
            } else {
                console.error('currentFreightProduct is null!');
            }
        });
    }

    const closeBtn = document.getElementById('closeFreightModal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeFreightModal);
    }

    const cancelBtn = document.getElementById('cancelFreightModal');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeFreightModal);
    }

    const modal = document.getElementById('freightModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeFreightModal();
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const modalEl = document.getElementById('freightModal');
            if (modalEl && modalEl.classList.contains('active')) {
                closeFreightModal();
            }
        }
    });

    // ============================================================
    // FREIGHT ESTIMATE SUBMIT - UPDATED WITH ASI & ITEM
    // ============================================================
    const submitBtn = document.getElementById('submitFreight');
    if (submitBtn) {
        submitBtn.addEventListener('click', async function (e) {
            e.preventDefault();

            const btn = this;
            const originalText = btn.innerHTML;

            // Validate required fields
            const asi = document.getElementById('freightAsi').value;
            const item = document.getElementById('freightItem').value;
            const qty = document.getElementById('freightQty').value;
            const email = document.getElementById('freightEmail').value;
            const country = document.getElementById('freightCountry').value;
            const state = document.getElementById('freightState').value;
            const zip = document.getElementById('freightZip').value;

            if (!email || !country || !state || !zip || !qty) {
                alert('⚠️ Please fill in all required fields (*)');
                return;
            }

            btn.disabled = true;
            btn.innerHTML = `
                <i class="fa-solid fa-spinner fa-spin mr-2"></i>
                Sending...
            `;

            try {
                const formData = new FormData();
                formData.append("request_type", "freight");

                // ===== ALL FIELDS =====
                formData.append("asi_number", asi || '');
                formData.append("item", item || '');
                formData.append("item_qty", qty);
                formData.append("email", email);
                formData.append("country", country);
                formData.append("state", state);
                formData.append("zip", zip);

                const residentialRadio = document.querySelector('input[name="freightResidential"]:checked');
                formData.append("residential", residentialRadio ? residentialRadio.value : "no");

                formData.append("instructions", document.getElementById('freightInstructions').value || '');

                // Product info (from the page)
                formData.append("product_name", currentFreightProduct?.name || '');
                formData.append("product_code", currentFreightProduct?.code || '');

                const response = await fetch(
                    "https://inkwell-email-api.arijbaig97.workers.dev", {
                    method: "POST",
                    body: formData
                }
                );

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.message || "Failed");
                }

                alert("✅ Freight estimate request sent successfully!");
                document.getElementById('freightForm').reset();
                closeFreightModal();

            } catch (error) {
                console.error(error);
                alert("❌ Failed to send freight estimate request. Please try again.");
            } finally {
                btn.disabled = false;
                btn.innerHTML = originalText;
            }
        });
    }
}

// ============================================================
// 4. SINGLE PRODUCT PAGE RENDER ENGINE
// ============================================================
(function () {
    "use strict";

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = products.find(p => p.id === productId);

    if (!product) {
        const firstProduct = products[0];
        if (firstProduct) {
            window.location.href = '?id=' + firstProduct.id;
        } else {
            document.body.innerHTML = '<h1 class="text-center text-2xl mt-20">No products available</h1>';
        }
        return;
    }

    currentQuotationProduct = product;

    const mainImage = document.getElementById('main-image');
    const thumbnailContainer = document.getElementById('thumbnail-container');
    const colorGrid = document.getElementById('color-grid');
    const pricingBody = document.getElementById('pricing-body');
    const productCode = document.getElementById('product-code');
    const productTitle = document.getElementById('product-title');
    const productSubtitle = document.getElementById('product-subtitle');
    const productDescription = document.getElementById('product-description');
    const productSize = document.getElementById('product-size');
    const productImprint = document.getElementById('product-imprint');
    const productNameBreadcrumb = document.getElementById('product-name-breadcrumb');
    const tabDescription = document.getElementById('tab-description');
    const specsTable = document.getElementById('specs-table');

    const pQty = [
        document.getElementById('p-qty-1'),
        document.getElementById('p-qty-2'),
        document.getElementById('p-qty-3'),
        document.getElementById('p-qty-4'),
        document.getElementById('p-qty-5'),
        document.getElementById('p-qty-6'),
    ];

    let currentMethod = 'spot';

    function renderThumbnails() {
        thumbnailContainer.innerHTML = '';
        const images = product.images || [product.image];
        images.forEach((img, idx) => {
            const div = document.createElement('div');
            div.className = `h-20 bg-brand-surface rounded border p-1 cursor-pointer flex items-center justify-center ${idx === 0 ? 'thumb-active border-brand-crimson' : 'border-brand-border hover:border-brand-text/30'}`;
            div.innerHTML = `<img src="${img}" class="w-full h-full object-cover rounded-sm" alt="Thumbnail ${idx + 1}">`;
            div.addEventListener('click', () => {
                mainImage.src = img;
                document.querySelectorAll('#thumbnail-container > div').forEach(el => {
                    el.classList.remove('thumb-active', 'border-brand-crimson');
                    el.classList.add('border-brand-border');
                });
                div.classList.add('thumb-active', 'border-brand-crimson');
                div.classList.remove('border-brand-border');
            });
            thumbnailContainer.appendChild(div);
        });
    }

    function renderColors() {
        colorGrid.innerHTML = '';
        const colors = product.colors || [{ name: "Natural", hex: "#F5F5DC", image: product.image }];
        colors.forEach((color, index) => {
            const div = document.createElement('div');
            div.className = 'flex flex-col items-center gap-1 cursor-pointer group';
            const isActive = color.active === true || (index === 0 && color.name === "Natural");
            const borderClass = isActive ? 'border-2 border-brand-crimson shadow-[0_0_0_1px_#fff]' :
                'border border-brand-border group-hover:border-brand-text/30';
            const bgClass = color.hex === '#FFFFFF' ? 'border border-brand-border' : '';
            div.innerHTML = `
                    <div class="w-6 h-6 ${bgClass} rounded-sm ${borderClass} transition-colors" style="background:${color.hex}"></div>
                    <span class="text-[9px] ${isActive ? 'text-brand-text font-semibold' : 'text-brand-textSecondary'}">${color.name}</span>
                `;
            div.addEventListener('click', function (e) {
                e.stopPropagation();
                colorGrid.querySelectorAll('div').forEach(el => {
                    const dot = el.querySelector('div:first-child');
                    if (dot) {
                        dot.classList.remove('border-2', 'border-brand-crimson', 'shadow-[0_0_0_1px_#fff]');
                        dot.classList.add('border', 'border-brand-border');
                    }
                    const label = el.querySelector('span');
                    if (label) {
                        label.classList.remove('text-brand-text', 'font-semibold');
                        label.classList.add('text-brand-textSecondary');
                    }
                });
                const clickedDot = this.querySelector('div:first-child');
                if (clickedDot) {
                    clickedDot.classList.remove('border', 'border-brand-border');
                    clickedDot.classList.add('border-2', 'border-brand-crimson', 'shadow-[0_0_0_1px_#fff]');
                }
                const clickedLabel = this.querySelector('span');
                if (clickedLabel) {
                    clickedLabel.classList.remove('text-brand-textSecondary');
                    clickedLabel.classList.add('text-brand-text', 'font-semibold');
                }
                if (color.image) {
                    mainImage.src = color.image;
                    const thumbnails = document.querySelectorAll('#thumbnail-container > div');
                    thumbnails.forEach(el => {
                        el.classList.remove('thumb-active', 'border-brand-crimson');
                        el.classList.add('border-brand-border');
                    });
                    if (thumbnails.length > 0) {
                        thumbnails[0].classList.add('thumb-active', 'border-brand-crimson');
                        thumbnails[0].classList.remove('border-brand-border');
                    }
                }
                if (product.category === "Blankets") {
                    renderSpecsTable(color);
                }
            });
            colorGrid.appendChild(div);
        });
    }

    function renderPricing(method) {
        const data = product.pricing[method];
        if (!data) return;

        const labelEl = document.querySelector('#pricing-section .text-brand-textSecondary');
        if (labelEl) labelEl.textContent = data.label;

        const isBlank = method === 'blank' || !data.quantities;
        const thead = document.getElementById('pricing-thead');

        // HEADER RENDER
        if (thead) {
            thead.style.display = isBlank ? 'none' : '';
            if (!isBlank) {
                const quantities = data.quantities || [];
                let html = `<tr style="color: #C81F45 !important; text-transform: uppercase; letter-spacing: 0.05em;">
            <th style="color: #C81F45 !important; text-align: left;">Quantity</th>`;

                for (let i = 0; i < 6 && i < quantities.length; i++) {
                    html += `<th id="p-qty-${i + 1}" style="color: #C81F45 !important;">${quantities[i]}</th>`;
                }

                html += `<th style="color: #C81F45 !important;"></th></tr>`;
                thead.innerHTML = html;
            }
        }

        // BODY RENDER
        pricingBody.innerHTML = '';

        // ✅ BLANK KE LIYE SPECIAL HANDLING - Sirf ek "PRICING" row
        if (isBlank) {
            // Sab colors ki prices collect karo (agar different hain)
            const allPrices = [];
            data.rows.forEach(row => {
                if (row.prices && row.prices.length > 0) {
                    allPrices.push(...row.prices);
                }
            });

            // Unique prices nikaalo
            const uniquePrices = [...new Set(allPrices)];

            // Agar sab prices same hain toh sirf ek row
            const tr = document.createElement('tr');
            let html = `<td class="font-medium text-brand-textSecondary">PRICING</td>`;

            if (uniquePrices.length === 1) {
                // Sab colors ki same price
                html += `<td class="text-brand-text">${uniquePrices[0]}</td>`;
            } else {
                // Different prices - comma separated ya pehli price
                html += `<td class="text-brand-text">${uniquePrices.join(' / ')}</td>`;
            }
            html += `<td class="text-brand-textSecondary">R</td>`;
            tr.innerHTML = html;
            pricingBody.appendChild(tr);

            return; // ⬅️ IMPORTANT: Yahan return kar do
        }

        // Spot/Transfer ke liye normal rendering
        data.rows.forEach((row, index) => {
            const tr = document.createElement('tr');
            const isExtraRow = index >= 2;

            let html = `<td class="font-medium text-brand-textSecondary">${row.label}</td>`;

            for (let i = 0; i < 6 && i < row.prices.length; i++) {
                html += `<td class="text-brand-text">${row.prices[i]}</td>`;
            }

            if (row.label.includes('ADD LOCATION') || row.label.includes('ADD COLOR')) {
                html += `<td class="text-brand-textSecondary">V</td>`;
            } else {
                html += `<td class="text-brand-textSecondary">R</td>`;
            }
            tr.innerHTML = html;

            if (isExtraRow) {
                tr.className = 'pricing-extra-row';
            }

            pricingBody.appendChild(tr);
        });
    }
    function renderSpecsTable(selectedColor) {
        const s = product.specs || {
            itemNo: product.code,
            gusset: "N/A",
            weight: "N/A",
            material: "N/A",
            handle: "N/A",
            origin: "USA"
        };

        const originValue = s.origin || s.decoratedIn || "USA";

        // ✅ Handle row condition
        const showHandle = s.handle && s.handle !== "-" && s.handle !== "N/A";
        const handleRow = showHandle ? `
        <div class="flex border-r border-brand-border">
            <div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">HANDLE SIZE</div>
            <div class="w-1/2 p-3 font-medium text-brand-text">${s.handle}</div>
        </div>
    ` : '';

        // ✅ Gusset row condition
        const showGusset = !product.hideGusset;
        const gussetRow = showGusset ? `
        <div class="flex border-b border-brand-border">
            <div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">GUSSET</div>
            <div class="w-1/2 p-3 font-medium text-brand-text">${s.gusset}</div>
        </div>
    ` : '';

        // ============================================================
        // ✅ SKU / GTIN / PMS ROWS — Sirf Blankets (ABW) ke liye
        // ============================================================
        let colorInfoRows = '';
        if (product.category === "Blankets" && selectedColor) {
            const skuVal = selectedColor.sku || 'N/A';
            const gtinVal = selectedColor.gtin || 'N/A';
            const pmsVal = selectedColor.pms || 'N/A';

            colorInfoRows = `
            <div class="flex border-b border-r border-brand-border">
                <div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">COLOR</div>
                <div class="w-1/2 p-3 font-medium text-brand-text">${selectedColor.name}</div>
            </div>
            <div class="flex border-b border-r border-brand-border">
                <div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">SKU</div>
                <div class="w-1/2 p-3 font-medium text-brand-text">${skuVal}</div>
            </div>
            <div class="flex border-b border-r border-brand-border">
                <div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">GTIN</div>
                <div class="w-1/2 p-3 font-medium text-brand-text">${gtinVal}</div>
            </div>
            <div class="flex border-b border-r border-brand-border">
                <div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">PMS COLOR</div>
                <div class="w-1/2 p-3 font-medium text-brand-text">${pmsVal}</div>
            </div>
        `;
        }

        specsTable.innerHTML = `
        <div class="flex border-b border-r border-brand-border">
            <div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">ITEM NO</div>
            <div class="w-1/2 p-3 font-medium text-brand-text">${s.itemNo}</div>
        </div>

        ${colorInfoRows}

        ${gussetRow}

        <div class="flex border-b border-r border-brand-border">
            <div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">QUALITY WEIGHT</div>
            <div class="w-1/2 p-3 font-medium text-brand-text">${s.weight ?? '-'}</div>
        </div>
        <div class="flex border-b border-brand-border">
            <div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">QUALITY MATERIAL</div>
            <div class="w-1/2 p-3 font-medium text-brand-text">${s.material}</div>
        </div>
        ${handleRow}
        <div class="flex">
            <div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">COUNTRY OF ORIGIN</div>
            <div class="w-1/2 p-3 font-medium text-brand-text">${originValue}</div>
        </div>
    `;
    }

    // ============================================================



    // ✅ YAHAN PASTE KARO - renderAdditionalInfo() ko
    function renderAdditionalInfo() {
        const container = document.getElementById('spec-picture-container');
        if (!container) return;

        if (!product.showSpecPicture) {
            container.innerHTML = '<p class="text-brand-textSecondary text-center py-4">No additional info available.</p>';
            return;
        }

        // ✅ Feature image use karo
        const featureImg = product.featureImage || product.image;

        container.innerHTML = `
        <div class="w-full flex justify-center">
            <img 
                src="${featureImg}" 
                alt="${product.name} Spec" 
                class="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg border border-brand-border bg-white p-2 cursor-zoom-in hover:shadow-xl transition-shadow"
                id="spec-picture-image"
                title="Click to view full size"
            />
        </div>
    `;

        // ✅ Click event lagao image pe
        const specImg = document.getElementById('spec-picture-image');
        if (specImg) {
            specImg.addEventListener('click', function () {
                openSpecImageModal(this.src, this.alt);
            });
        }
    }

    function renderMainInfo() {
        mainImage.src = product.image;
        productCode.textContent = product.code;
        productTitle.textContent = product.name;
        productSubtitle.textContent = product.subtitle || '';
        productDescription.textContent = product.description;
        productSize.textContent = product.size;
        productImprint.textContent = product.imprint || '10"W x 8"H';
        productNameBreadcrumb.textContent = product.name;
        tabDescription.textContent = product.description;
    }

    function renderAdditionalCharges() {
        const chargesTab = document.getElementById('tab-charges');
        if (!chargesTab) return;

        const charges = product.additionalCharges || {};
        const hasCharges = Object.keys(charges).length > 0;

        if (hasCharges) {
            chargesTab.innerHTML = `
                    <div class="space-y-2 text-sm text-brand-textSecondary">
                        ${charges.pmsMatch ? `<p><strong>PMS Match:</strong> ${charges.pmsMatch}</p>` : ''}
                        ${charges.setupCharge ? `<p><strong>Setup Charge:</strong> ${charges.setupCharge}</p>` : ''}
                        ${charges.repeatSetup ? `<p><strong>Repeat Setup:</strong> ${charges.repeatSetup}</p>` : ''}
                        ${charges.lessThanMinimum ? `<p><strong>Less than Minimum:</strong> ${charges.lessThanMinimum}</p>` : ''}
                    </div>
                `;
        } else {
            chargesTab.innerHTML = `<p class="text-sm text-brand-textSecondary">No additional charges information available.</p>`;
        }
    }

    function renderPackagingInfo() {
        const packagingTab = document.getElementById('tab-packaging');
        if (!packagingTab) return;

        const s = product.specs || {};

        if (s.packagingOptions && s.packagingOptions.length > 0) {
            let html = `<div class="space-y-4 text-sm text-brand-textSecondary">`;
            s.packagingOptions.forEach(option => {
                html += `
                <div class="border border-brand-border rounded-lg p-3">
                    <p class="font-semibold text-brand-text">${option.type}</p>
                    ${option.qtyPerBox ? `<p><strong>Qty Per Box:</strong> ${option.qtyPerBox}</p>` : ''}
                    ${option.boxWeight ? `<p><strong>Box Weight:</strong> ${option.boxWeight}</p>` : ''}
                    ${option.boxDims ? `<p><strong>Box Dims:</strong> ${option.boxDims}</p>` : ''}
                    ${option.cartonVolume ? `<p><strong>Carton Volume:</strong> ${option.cartonVolume}</p>` : ''}
                    ${option.pieceWeight ? `<p><strong>Piece Weight:</strong> ${option.pieceWeight}</p>` : ''}
                    ${option.note ? `<p class="text-xs italic mt-2">${option.note}</p>` : ''}
                </div>
            `;
            });
            html += `</div>`;
            packagingTab.innerHTML = html;
            return;
        }

        // ... baaki code same
    }

    function initTabs() {
        const tabs = document.querySelectorAll('#info-tabs .tab-btn');
        const contents = {
            description: document.getElementById('tab-description'),
            charges: document.getElementById('tab-charges'),
            packaging: document.getElementById('tab-packaging'),
            'additional-info': document.getElementById('tab-additional-info'),  // ✅ ADD
        };
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => {
                    t.classList.remove('active');
                    t.classList.add('border-transparent');
                    t.classList.remove('border-brand-crimson');
                });
                tab.classList.add('active');
                tab.classList.add('border-brand-crimson');
                tab.classList.remove('border-transparent');
                const tabName = tab.dataset.tab;
                Object.keys(contents).forEach(key => {
                    if (contents[key]) contents[key].classList.add('hidden');
                });
                if (contents[tabName]) {
                    contents[tabName].classList.remove('hidden');
                }
            });
        });
    }



    let pricingExpanded = false;
    function initViewMoreButton() {
        const viewMoreBtn = document.getElementById('viewMorePricingBtn');
        if (!viewMoreBtn) return;

        viewMoreBtn.addEventListener('click', function () {
            pricingExpanded = !pricingExpanded;

            // Extra rows (ADD LOCATION, ADD COLOR) show/hide
            document.querySelectorAll('.pricing-extra-row').forEach(row => {
                row.classList.toggle('show');
            });

            if (pricingExpanded) {
                this.innerHTML = 'SHOW LESS <i class="fa-solid fa-chevron-up ml-1"></i>';
            } else {
                this.innerHTML = 'VIEW MORE PRICING <i class="fa-solid fa-chevron-down ml-1"></i>';
            }
        });
    }
    // initPrintTabs function mein modify karein
    function initPrintTabs() {
        const container = document.getElementById('printing-tabs');
        if (!container) return;

        const viewMoreBtn = document.getElementById('viewMorePricingBtn');
        const pricing = product.pricing || {};

        // ✅ Dynamic tabs generate karo
        const tabDefinitions = [];

        if (pricing.spot) {
            tabDefinitions.push({ method: 'spot', label: 'SPOT PRINTING' });
        }
        if (pricing.transfer) {
            tabDefinitions.push({ method: 'transfer', label: 'HEAT TRANSFER' });
        }
        if (pricing.blank) {
            tabDefinitions.push({ method: 'blank', label: 'BLANK' });
        }

        if (tabDefinitions.length === 0) {
            container.innerHTML = '<p class="text-center text-brand-textSecondary py-4">No pricing available</p>';
            return;
        }

        // Tabs render karo
        container.innerHTML = tabDefinitions.map((tab, index) => {
            const isActive = index === 0 ? 'active' : '';
            return `
        <button class="border ${isActive ? 'border-brand-crimson bg-brand-crimson/10 text-brand-crimson' : 'border-brand-border hover:border-brand-text/20 text-brand-textSecondary hover:text-brand-text'} 
                transition-colors py-2.5 text-xs font-semibold rounded tracking-wider flex-1" 
                data-method="${tab.method}">
            ${tab.label}
        </button>
    `;
        }).join('');

        // ✅ DYNAMIC methodInfo - product ke pricing data se
        const methodInfo = {
            spot: {
                leadTime: pricing.spot?.leadTime || '5-7 Business Days',
                leadLabel: 'Production Time',
                setupCharge: pricing.spot?.setupCharge || '$56.25 (V)',
                repeatSetup: pricing.spot?.repeatSetup || '$25.00 (V)',
                showRepeatSetup: true,
                showSetupCharge: true,
                priceIncludes: pricing.spot?.priceIncludes || '1 Color, 1 Location',
                showViewMore: true
            },
            transfer: {
                leadTime: pricing.transfer?.leadTime || '7-10 Business Days',
                leadLabel: 'Production Time',
                setupCharge: pricing.transfer?.setupCharge || 'Free',
                repeatSetup: pricing.transfer?.repeatSetup || 'Free',
                showRepeatSetup: false,
                showSetupCharge: true,
                priceIncludes: pricing.transfer?.priceIncludes || 'Heat Transfer, 1 Location',
                showViewMore: false
            },
            blank: {
                // ✅ Product ke pricing.blank.leadTime se uthao
                leadTime: pricing.blank?.leadTime || 'Within 1-2 Business Days',
                leadLabel: 'Lead Time',
                setupCharge: pricing.blank?.setupCharge || 'No Setup Fee',
                repeatSetup: pricing.blank?.repeatSetup || 'No Setup Fee',
                showRepeatSetup: false,
                showSetupCharge: false,
                priceIncludes: pricing.blank?.priceIncludes || 'Blank Product Only',
                showViewMore: false
            }
        };

        // Baaki code same rahega...
        container.querySelectorAll('button').forEach(tab => {
            tab.addEventListener('click', function () {
                const method = this.dataset.method;
                currentMethod = method;

                container.querySelectorAll('button').forEach(t => {
                    t.className = 'border border-brand-border hover:border-brand-text/20 text-brand-textSecondary hover:text-brand-text transition-colors py-2.5 text-xs font-semibold rounded tracking-wider flex-1';
                });
                this.className = 'border border-brand-crimson bg-brand-crimson/10 text-brand-crimson py-2.5 text-xs font-semibold rounded tracking-wider flex-1';

                renderPricing(method);

                const info = methodInfo[method];
                if (info) {
                    document.getElementById('dynamic-lead-label').textContent = info.leadLabel;
                    document.getElementById('dynamic-lead-time').textContent = info.leadTime;
                    document.getElementById('dynamic-setup-charge').textContent = info.setupCharge;
                    document.getElementById('dynamic-repeat-setup').textContent = info.repeatSetup;
                    document.getElementById('dynamic-price-includes').textContent = info.priceIncludes;

                    const setupContainer = document.getElementById('setup-charge-container');
                    if (setupContainer) {
                        setupContainer.style.display = info.showSetupCharge ? 'flex' : 'none';
                    }

                    const repeatContainer = document.getElementById('repeat-setup-container');
                    if (repeatContainer) {
                        repeatContainer.style.display = info.showRepeatSetup ? 'flex' : 'none';
                    }

                    if (viewMoreBtn) {
                        if (info.showViewMore && method === 'spot') {
                            viewMoreBtn.style.display = 'block';
                        } else {
                            viewMoreBtn.style.display = 'none';
                            pricingExpanded = false;
                            document.querySelectorAll('.pricing-extra-row').forEach(row => {
                                row.classList.remove('show');
                            });
                            viewMoreBtn.innerHTML = 'VIEW MORE PRICING <i class="fa-solid fa-chevron-down ml-1"></i>';
                        }
                    }
                }
            });
        });

        const firstTab = container.querySelector('button');
        if (firstTab) {
            firstTab.click();
        }
    }
    // ============================================================
    // AUTO-OPEN MODAL BASED ON URL PARAMETER
    // ============================================================
    // ============================================================
    // AUTO-OPEN MODAL BASED ON URL PARAMETER
    // ============================================================
    function checkAndOpenModal(product) {
        const urlParams = new URLSearchParams(window.location.search);
        const action = urlParams.get('action');

        if (action === 'quote') {
            setTimeout(() => {
                openQuotationModal(product);
            }, 500);
        } else if (action === 'mockup') {
            setTimeout(() => {
                openMockupModal(product);
            }, 500);
        } else if (action === 'freight') {
            setTimeout(() => {
                openFreightModal(product);
            }, 500);
        }
    }

    // ============================================================
    // SPEC IMAGE LIGHTBOX MODAL FUNCTIONS
    // ============================================================
    function openSpecImageModal(imageSrc, imageAlt) {
        const modal = document.getElementById('specImageModal');
        const modalImg = document.getElementById('specImageModalImg');

        if (!modal || !modalImg) return;

        modalImg.src = imageSrc;
        modalImg.alt = imageAlt || 'Spec Sheet';

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSpecImageModal() {
        const modal = document.getElementById('specImageModal');
        if (!modal) return;

        modal.classList.remove('active');
        document.body.style.overflow = 'auto';

        // Image clear karo (optional - memory ke liye)
        setTimeout(() => {
            const modalImg = document.getElementById('specImageModalImg');
            if (modalImg) modalImg.src = '';
        }, 300);
    }

    // ============================================================
    // INIT SPEC IMAGE MODAL EVENTS
    // ============================================================
    function initSpecImageModal() {
        const modal = document.getElementById('specImageModal');
        const closeBtn = document.getElementById('closeSpecImageModal');

        if (!modal) return;

        // ✅ Close button - stopPropagation ke saath
        if (closeBtn) {
            closeBtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();   // ✅ IMPORTANT
                closeSpecImageModal();
            });
        }

        // Background click pe close (sirf modal ke bahar click pe)
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeSpecImageModal();
            }
        });

        // ESC key pe close
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                const modalEl = document.getElementById('specImageModal');
                if (modalEl && modalEl.classList.contains('active')) {
                    closeSpecImageModal();
                }
            }
        });
    }

    function init() {
        currentQuotationProduct = product;
        currentMockupProduct = product;
        currentFreightProduct = product;

        renderMainInfo();
        renderThumbnails();

        renderAdditionalInfo();
        renderColors();

        // ✅ Default selected color = colors[0]
        const defaultColor = (product.colors && product.colors.length > 0) ? product.colors[0] : null;
        renderSpecsTable(defaultColor);
        renderAdditionalCharges();
        renderPackagingInfo();
        renderPricing('spot');
        setTimeout(() => {
            document.querySelectorAll('.pricing-extra-col').forEach(col => {
                col.classList.remove('show');
            });
        }, 100);
        initTabs();
        initPrintTabs();
        renderRelatedProducts(product, products);
        initQuotationModal();
        initViewMoreButton();
        initMockupModal();
        initFreightModal();
        initTemplatesModal();
        initSpecImageModal();

        // ============================================================
        // ✅ HIDE ELEMENTS BASED ON PRODUCT FLAGS
        // ============================================================

        // Mockup button
        if (product.hideMockup) {
            const mockupBtn = document.getElementById('requestMockupBtn');
            if (mockupBtn) mockupBtn.style.display = 'none';
        }

        // Templates button
        if (product.hideTemplates) {
            const templatesBtn = document.getElementById('templatesBtn');
            if (templatesBtn) templatesBtn.style.display = 'none';
        }

        // Row 2 adjust
        if (product.hideTemplates && product.hideMockup) {
            const row2 = document.getElementById('action-buttons-row2');
            if (row2) {
                row2.classList.remove('grid-cols-1', 'sm:grid-cols-2');
                row2.classList.add('grid-cols-1');
            }
        }

        // Additional Charges tab
        if (product.hideCharges) {
            const chargesTab = document.querySelector('#info-tabs .tab-btn[data-tab="charges"]');
            if (chargesTab) chargesTab.style.display = 'none';
        }

        // ============================================================
        // ✅ BLANKETS - SIRF HIDE KARO (Alignment waisi hi rahegi)
        // ============================================================
        if (product.hideImprint) {

            // 1. Setup Charge hide
            const setupContainer = document.getElementById('setup-charge-container');
            if (setupContainer) setupContainer.style.display = 'none';

            // 2. Repeat Setup hide
            const repeatContainer = document.getElementById('repeat-setup-container');
            if (repeatContainer) repeatContainer.style.display = 'none';

            // 3. Imprint Area hide
            const imprintSpecs = document.getElementById('product-imprint');
            if (imprintSpecs) {
                const imprintParent = imprintSpecs.closest('.flex.items-center');
                if (imprintParent) imprintParent.style.display = 'none';
            }
        }

        // Additional Info tab - sirf blankets ke liye
        if (!product.showAdditionalInfoTab) {
            const addInfoTab = document.querySelector('#info-tabs .tab-btn[data-tab="additional-info"]');
            if (addInfoTab) addInfoTab.style.display = 'none';
        }

        checkAndOpenModal(product);
    }

    init();

})();