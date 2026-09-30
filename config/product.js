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
        link.download = `${productId}_spec_sheet.webp`;
        link.href = canvas.toDataURL('image/webp');
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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/tote-bags/IB29/IB29_black.webp" },
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

    images: [
        "assets/assets/images/products/tote-bags/IB125800/IB125800_main.webp",
        "assets/assets/images/products/tote-bags/IB125800/IB125800_black.webp",
        "assets/assets/images/products/tote-bags/IB125800/IB125800_natural.webp"
    ],

    specs: {
        itemNo: "IB125800",
        gusset: "Bottom: Yes Side: No",
        weight: "12oz",
        material: "100% Cotton Canvas",
        handle: '26"',
        origin: "USA",
        packagingOptions: [
            {
                type: "Standard",
                qtyPerBox: "72 pcs",
                boxWeight: "51.79 lbs",
                boxDims: '19.5" x 13.5" x 22.5"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$10.60", "$9.69", "$9.35", "$9.19", "$9.00", "$8.90"] },
                { label: "COLOR", prices: ["$11.71", "$10.77", "$10.44", "$10.27", "$10.08", "$9.98"] },
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
                { label: "NATURAL", prices: ["$14.54", "$13.60", "$13.27", "$13.13", "$13.08", "$13.04"] },
                { label: "COLOR", prices: ["$15.21", "$14.27", "$13.94", "$13.79", "$13.75", "$13.71"] }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "NATURAL", prices: ["$7.78"] },
                { label: "COLOR", prices: ["$8.41"] }
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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/tote-bags/IB1500/IB1500_black.webp" },
        { name: "Chocolate", hex: "#7B3F00", image: "assets/assets/images/products/tote-bags/IB1500/IB1500_chocolate.webp" },
        { name: "Light-Pink", hex: "#FFB6C1", image: "assets/assets/images/products/tote-bags/IB1500/IB1500_light_pink.webp" },
        { name: "Lime", hex: "#32CD32", image: "assets/assets/images/products/tote-bags/IB1500/IB1500_lime.webp" },
        { name: "Maroon", hex: "#800000", image: "assets/assets/images/products/tote-bags/IB1500/IB1500_maroon.webp" },
        { name: "Natural", hex: "#F5F5DC", image: "assets/assets/images/products/tote-bags/IB1500/IB1500_natural.webp" },
        { name: "Navy", hex: "#000080", image: "assets/assets/images/products/tote-bags/IB1500/IB1500_navy.webp" },
        { name: "Purple", hex: "#800080", image: "assets/assets/images/products/tote-bags/IB1500/IB1500_purple.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/tote-bags/IB1500/IB1500_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/tote-bags/IB1500/IB1500_royal.webp" }
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
        handle: '22"',
        origin: "USA",
        packagingOptions: [
            {
                type: "Standard",
                qtyPerBox: "48 pcs",
                boxWeight: "45.62 lbs",
                boxDims: '23" x 17.5" x 13.5"'
            }
        ]
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
        gusset: "Bottom: No Side: No",
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
                { label: "NATURAL", prices: ["$3.92", "$3.27", "$2.94", "$2.77", "$2.58", "$2.48"] },
                { label: "COLOR", prices: ["$4.33", "$3.69", "$3.35", "$3.19", "$3.00", "$2.90"] },
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
                { label: "NATURAL", prices: ["$9.60", "$8.16", "$7.58", "$7.06", "$6.90", "$6.73"] },
                { label: "COLOR", prices: ["$9.94", "$8.50", "$7.92", "$7.40", "$7.24", "$7.07"] }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "NATURAL", prices: ["$1.85"] },
                { label: "COLOR", prices: ["$1.85"] }
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
    price: 1.46,
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
        { name: "Black", hex: "#111111", image: "assets/assets/images/products/tote-bags/IB1400/IB1400_black.webp" },
        { name: "Chocolate", hex: "#6B4226", image: "assets/assets/images/products/tote-bags/IB1400/IB1400_chocolate.webp" },
        { name: "Light-Pink", hex: "#F3C6C8", image: "assets/assets/images/products/tote-bags/IB1400/IB1400_light_pink.webp" },
        { name: "Lime", hex: "#A8C93A", image: "assets/assets/images/products/tote-bags/IB1400/IB1400_lime.webp" },
        { name: "Maroon", hex: "#800000", image: "assets/assets/images/products/tote-bags/IB1400/IB1400_maroon.webp" },
        { name: "Natural", hex: "#E8DCC4", image: "assets/assets/images/products/tote-bags/IB1400/IB1400_natural.webp" },
        { name: "Navy", hex: "#1F3A5F", image: "assets/assets/images/products/tote-bags/IB1400/IB1400_navy.webp" },
        { name: "Purple", hex: "#800080", image: "assets/assets/images/products/tote-bags/IB1400/IB1400_purple.webp" },
        { name: "Red", hex: "#D32F2F", image: "assets/assets/images/products/tote-bags/IB1400/IB1400_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/tote-bags/IB1400/IB1400_royal.webp" }
    ],

    images: [
        "assets/assets/images/products/tote-bags/IB1400/IB1400_main.webp",
        "assets/assets/images/products/tote-bags/IB1400/IB1400_black.webp",
        "assets/assets/images/products/tote-bags/IB1400/IB1400_natural.webp"
    ],

    specs: {
        itemNo: "IB1400",
        gusset: "Bottom: Yes Side: Yes",
        weight: "12oz",
        material: "100% Cotton Canvas",
        handle: '22"',
        origin: "USA",
        packagingOptions: [
            {
                type: "Standard",
                qtyPerBox: "48 pcs",
                boxWeight: "38.57 lbs",
                boxDims: '23" x 14" x 16"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [72, 288, 500, 1000, 2000, 3000],
            rows: [
                { label: "NATURAL", prices: ["$11.41", "$10.48", "$10.15", "$9.98", "$9.79", "$9.69"] },
                { label: "COLOR", prices: ["$12.39", "$11.44", "$11.10", "$10.94", "$10.75", "$10.65"] },
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
                { label: "NATURAL", prices: ["$15.33", "$14.40", "$14.06", "$13.92", "$13.88", "$13.83"] },
                { label: "COLOR", prices: ["$15.88", "$14.94", "$14.60", "$14.46", "$14.42", "$14.38"] }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-10 Business Days",
            setupCharge: "FREE",
            repeatSetup: "FREE"
        },

        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "NATURAL", prices: ["$8.53"] },
                { label: "COLOR", prices: ["$9.04"] }
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
    imprint: '8"W x 5"H',
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
},
{
    id: "ids969",
    name: "Non Woven Drawstring Backpack",
    code: "IDS969",
    slug: "non-woven-drawstring-backpack",
    category: "Non-Woven Bags",
    material: "Non-Woven Fabric",
    size: '16"W x 18"H',
    imprint: '10"W x 10"H',
    price: 1.13,
    image: "assets/assets/images/products/non-woven/IDS969/IDS969_kelly.webp",
    description: "Water repellent non-woven drawstring backpack made from 80 GSM polypropylene. Features a cinch closure with rope cord handles — perfect for promotional events, schools, gyms, and giveaways.",
    popular: false,
    colors: [
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/non-woven/IDS969/IDS969_black.webp" },
        { name: "Burgundy", hex: "#800020", image: "assets/assets/images/products/non-woven/IDS969/IDS969_burgundy.webp" },
        { name: "Hunter Green", hex: "#355E3B", image: "assets/assets/images/products/non-woven/IDS969/IDS969_hunter_green.webp" },
        { name: "Kelly", hex: "#4CBB17", image: "assets/assets/images/products/non-woven/IDS969/IDS969_kelly.webp" },
        { name: "Navy", hex: "#000080", image: "assets/assets/images/products/non-woven/IDS969/IDS969_navy.webp" },
        { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/non-woven/IDS969/IDS969_red.webp" },
        { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/non-woven/IDS969/IDS969_royal.webp" },
        { name: "Tan", hex: "#D2B48C", image: "assets/assets/images/products/non-woven/IDS969/IDS969_tan.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/non-woven/IDS969/IDS969_white.webp" },
        { name: "Yellow", hex: "#FFFF00", image: "assets/assets/images/products/non-woven/IDS969/IDS969_yellow.webp" }
    ],
    images: [
        "assets/assets/images/products/non-woven/IDS969/IDS969_black.webp",
        "assets/assets/images/products/non-woven/IDS969/IDS969_burgundy.webp",
        "assets/assets/images/products/non-woven/IDS969/IDS969_hunter_green.webp",
        "assets/assets/images/products/non-woven/IDS969/IDS969_kelly.webp",
        "assets/assets/images/products/non-woven/IDS969/IDS969_navy.webp",
        "assets/assets/images/products/non-woven/IDS969/IDS969_red.webp",
        "assets/assets/images/products/non-woven/IDS969/IDS969_royal.webp",
        "assets/assets/images/products/non-woven/IDS969/IDS969_tan.webp",
        "assets/assets/images/products/non-woven/IDS969/IDS969_white.webp",
        "assets/assets/images/products/non-woven/IDS969/IDS969_yellow.webp"
    ],
    specs: {
        itemNo: "IDS969",
        gusset: "Bottom: No Side: No",
        weight: "80 gsm",
        material: "Non-Woven Fabric",
        handle: "Drawstring Cinch Closure. Rope Cord",
        origin: "USA",
        packagingOptions: [
            {
                type: "Blank",
                qtyPerBox: "200 pcs",
                boxWeight: "22 lbs",
                boxDims: '20" x 16" x 14"'
            }
        ]
    },
    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "COLOR", prices: ["$2.01", "$1.87", "$1.78", "$1.67", "$1.57"] },
                { label: "ADD LOCATION", prices: ["$0.63", "$0.63", "$0.63", "$0.63", "$0.63"] },
                { label: "ADD COLOR", prices: ["$0.56", "$0.56", "$0.56", "$0.56", "$0.56"] }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$62.50 (V)",
            repeatSetup: "$37.50 (V)"
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "ALL COLORS", prices: ["$5.54", "$5.17", "$4.99", "$4.68", "$4.40"] },
                { label: "ADD LOCATION", prices: ["$1.69", "$1.69", "$1.69", "$1.69", "$1.69"] }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "5-7 Business Days",
            setupCharge: "$125.00 (V)",
            repeatSetup: "FREE"
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "COLOR", prices: ["$1.13"] }
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
        lessThanMinimum: "Call for pricing",
        colorChangeFee: "$18.75 (V)"
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
    price: 0.93,
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
    image: "assets/assets/images/products/blankets/IW8700/8700-Red.webp",
    featureImage: "assets/assets/images/products/blankets/IW8700/8700-Feature.webp",
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
        { name: "Red", hex: "#C41E3A", gtin: "00671867700695", pms: "199C", image: "assets/assets/images/products/blankets/IW8700/8700-Red.webp" },
        { name: "Navy", hex: "#1B1F3B", gtin: "00671867700732", pms: "N/A", image: "assets/assets/images/products/blankets/IW8700/8700-Navy.webp" },
        { name: "Black", hex: "#000000", gtin: "00671867700770", pms: "Black C", image: "assets/assets/images/products/blankets/IW8700/8700-Black.webp" },
        { name: "Heather Grey", hex: "#A9A9A9", gtin: "00671867700787", pms: "14-4106TPX", image: "assets/assets/images/products/blankets/IW8700/8700-Grey.webp" },
        { name: "Charcoal", hex: "#36454F", gtin: "00671867700794", pms: "Cool Gray 10 C", image: "assets/assets/images/products/blankets/IW8700/8700-Charcoal.webp" },
        { name: "Royal", hex: "#002366", gtin: "00671867700862", pms: "N/A", image: "assets/assets/images/products/blankets/IW8700/8700-Royal.webp" }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8700/8700-Red.webp",
        "assets/assets/images/products/blankets/IW8700/8700-Navy.webp",
        "assets/assets/images/products/blankets/IW8700/8700-Black.webp",
        "assets/assets/images/products/blankets/IW8700/8700-Grey.webp",
        "assets/assets/images/products/blankets/IW8700/8700-Charcoal.webp",
        "assets/assets/images/products/blankets/IW8700/8700-Royal.webp"
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
    image: "assets/assets/images/products/blankets/IW8701/8701-Black.webp",
    featureImage: "assets/assets/images/products/blankets/IW8701/8701-Feature.webp",
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

            gtin: "00671867701739",
            pms: "N/A",
            image: "assets/assets/images/products/blankets/IW8701/8701-Navy.webp"
        },
        {
            name: "Black",
            hex: "#000000",

            gtin: "00671867701777",
            pms: "Black C",
            image: "assets/assets/images/products/blankets/IW8701/8701-Black.webp"
        },
        {
            name: "Cinder Grey",
            hex: "#A9A9A9",

            gtin: "00671867634105",
            pms: "Cool Gray 6C",
            image: "assets/assets/images/products/blankets/IW8701/8701-Cinder Gray.webp"
        },
        {
            name: "Royal",
            hex: "#002366",

            gtin: "00671867701869",
            pms: "7693C",
            image: "assets/assets/images/products/blankets/IW8701/8701-Royal.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8701/8701-Navy.webp",
        "assets/assets/images/products/blankets/IW8701/8701-Black.webp",
        "assets/assets/images/products/blankets/IW8701/8701-Cinder Gray.webp",
        "assets/assets/images/products/blankets/IW8701/8701-Royal.webp"
    ],

    specs: {
        itemNo: "ABW8701",
        gtin: "00671867701739",
        gusset: "N/A",
        weight: "260 G/SQM",
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
    image: "assets/assets/images/products/blankets/IW8702/8702-Blackwatch.webp",
    featureImage: "assets/assets/images/products/blankets/IW8702/8702-Feature.webp",
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

            gtin: "00671867702828",
            pms: "Green=342C / Navy=295C",
            image: "assets/assets/images/products/blankets/IW8702/8702-Blackwatch.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8702/8702-Blackwatch.webp"
    ],

    specs: {
        itemNo: "ABW8702",
        gtin: "00671867702828",
        gusset: "N/A",
        weight: "1.7 lb/pc",
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
    id: "ABW8707",
    name: "Micro Coral Fleece Blanket",
    code: "ABW8707",
    slug: "micro-coral-fleece-blanket",
    category: "Blankets",
    material: "100% Polyester Micro Coral Fleece",
    size: '50" x 60"',
    imprint: "N/A",
    price: 14.22,
    originalPrice: 8.53,
    image: "assets/assets/images/products/blankets/IW8707/8707-Black.webp",
    featureImage: "assets/assets/images/products/blankets/IW8707/8707-Feature.webp",
    description: "Lightweight and velvety soft micro coral fleece blanket. 8.5-ounce, 100% polyester, 280 G/SM. Fully hemmed with matching polyester tricot binding. Clear vinyl zipper bag included. Non-branded label/tag.",
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

            gtin: "00671867707731",
            pms: "654C",
            image: "assets/assets/images/products/blankets/IW8707/8707-Navy.webp"
        },
        {
            name: "Black",
            hex: "#000000",

            gtin: "00671867707779",
            pms: "Black C",
            image: "assets/assets/images/products/blankets/IW8707/8707-Black.webp"
        },
        {
            name: "Grey",
            hex: "#A9A9A9",

            gtin: "00671867707786",
            pms: "Cool Gray 8C",
            image: "assets/assets/images/products/blankets/IW8707/8707-Gray.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8707/8707-Black.webp",
        "assets/assets/images/products/blankets/IW8707/8707-Gray.webp",
        "assets/assets/images/products/blankets/IW8707/8707-Navy.webp"
    ],

    specs: {
        itemNo: "ABW8707",
        gtin: "00671867707731",
        gusset: "N/A",
        weight: "8.5 oz / 280 GSM",
        material: "100% Polyester Micro Coral Fleece",
        handle: "N/A",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "USA",
        packagingOptions: [
            {
                type: "Individual Zippered Vinyl Bag",
                qtyPerBox: "20 pcs",
                boxWeight: "30 lbs",
                boxDims: '26" x 14" x 18"',
                cartonVolume: "3.58 cu ft",
                pieceWeight: "1.46 lbs",
                note: "Individual zippered vinyl bag. 20 in a box."
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$14.22"] }
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
    id: "ABW8820",
    name: "Elastic Carry Strap with Black Webbing Handle",
    code: "ABW8820",
    slug: "elastic-carry-strap-black-webbing-handle",
    category: "Blankets",
    material: "100% Polyester / Elastic",
    size: '16" x 12" x 14"',
    imprint: "N/A",
    price: 1.20,
    originalPrice: 1.20,
    image: "assets/assets/images/products/blankets/IW8820/AB8820-29-Side.webp",
    featureImage: "assets/assets/images/products/blankets/IW8820/AB8820-29-Feature.webp",
    description: "100% Polyester / Elastic carry strap with black webbing handle. Elastic strap, webbing handle, one size fits most. 16\" x 12\" x 14\". Do not wash or dry.",
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

            gtin: "00671867646405",
            pms: "Black C",
            image: "assets/assets/images/products/blankets/IW8820/AB8820-29-Side.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8820/AB8820-29-Side.webp",
        "assets/assets/images/products/blankets/IW8820/AB8820-29-Top.webp"
    ],

    specs: {
        itemNo: "ABW8820",
        gtin: "00671867646405",
        gusset: "N/A",
        weight: "0.02 lbs",
        material: "100% Polyester / Elastic",
        handle: "Black Webbing Handle",
        careInstructions: "Do not wash or dry.",
        origin: "USA",
        packagingOptions: [
            {
                type: "Bulk Packaging",
                qtyPerBox: "1000 pcs",
                boxWeight: "20 lbs",
                boxDims: '16" x 12" x 14"',
                cartonVolume: "1.55 cu ft",
                pieceWeight: "0.02 lbs",
                note: "10 inner packs. 100 per poly bag/per inner pack. 1,000 in a box."
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$1.20"] }
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
    id: "ABWS99",
    name: "Small Clear Zippered Blanket Bag",
    code: "ABWS99",
    slug: "small-clear-zippered-blanket-bag",
    category: "Blankets",
    material: "Clear",
    size: '10.43" x 10.24" x 2.17"',
    imprint: "N/A",
    price: 1.68,
    originalPrice: 1.68,
    image: "assets/assets/images/products/blankets/IWS99/CBBS-99Clear.webp",
    featureImage: "assets/assets/images/products/blankets/IWS99/CBBS-99-Feature.webp",
    description: "Clear zip bag for blankets with rope handle. Fits style 8722. 10.43\" x 10.24\" x 2.17\". California Prop 65 Compliant. Do not wash or dry.",
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
            name: "Clear",
            hex: "#FFFFFF",

            gtin: "00671867646467",
            pms: "Clear",
            image: "assets/assets/images/products/blankets/IWS99/CBBS-99Clear.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IWS99/CBBS-99Clear.webp",
        "assets/assets/images/products/blankets/IWS99/CBBS-99ClearBackSide.webp"
    ],

    specs: {
        itemNo: "ABWS99",
        gtin: "00671867646467",
        gusset: "N/A",
        weight: "0.08 lbs",
        material: "Clear",
        handle: "Rope Handle",
        careInstructions: "Do not wash or dry.",
        origin: "USA",
        packagingOptions: [
            {
                type: "Individual Bags",
                qtyPerBox: "300 pcs",
                boxWeight: "25 lbs",
                boxDims: '13.8" x 15" x 17.75"',
                cartonVolume: "2.13 cu ft",
                pieceWeight: "0.08 lbs",
                note: "Individual bags. 300 in a box."
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$1.68"] }
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
    id: "ABWM99",
    name: "Medium Clear Zippered Blanket Bag",
    code: "ABWM99",
    slug: "medium-clear-zippered-blanket-bag",
    category: "Blankets",
    material: "Clear",
    size: '14.96" x 12.99" x 2.36"',
    imprint: "N/A",
    price: 2.00,
    originalPrice: 2.00,
    image: "assets/assets/images/products/blankets/IWM99/CBBM-99_Clear.webp",
    featureImage: "assets/assets/images/products/blankets/IWM99/CBBM-99-Feature.webp",
    description: "Clear zip bag for blankets with rope handle. Fits styles 8700, 8707, 8710, 8711 and 8721. 14.96\" x 12.99\" x 2.36\". California Prop 65 Compliant. Do not wash or dry.",
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
            name: "Clear",
            hex: "#FFFFFF",

            gtin: "00671867646450",
            pms: "Clear",
            image: "assets/assets/images/products/blankets/IWM99/CBBM-99_Clear.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IWM99/CBBM-99_Clear.webp",
        "assets/assets/images/products/blankets/IWM99/CBBM-99_Clear_Back_Side.webp"
    ],

    specs: {
        itemNo: "ABWM99",
        gtin: "00671867646450",
        gusset: "N/A",
        weight: "0.13 lbs",
        material: "Clear",
        handle: "Rope Handle",
        careInstructions: "Do not wash or dry.",
        origin: "USA",
        packagingOptions: [
            {
                type: "Individual Bags",
                qtyPerBox: "300 pcs",
                boxWeight: "37.5 lbs",
                boxDims: '19.75" x 17.35" x 14.6"',
                cartonVolume: "2.9 cu ft",
                pieceWeight: "0.13 lbs",
                note: "Individual bags. 300 in a box."
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$2.00"] }
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
    id: "ABWL99",
    name: "Large Clear Zippered Blanket Bag",
    code: "ABWL99",
    slug: "large-clear-zippered-blanket-bag",
    category: "Blankets",
    material: "Clear",
    size: '14.96" x 12.99" x 3.54"',
    imprint: "N/A",
    price: 2.10,
    originalPrice: 2.10,
    image: "assets/assets/images/products/blankets/IWL99/CBBL-99Clear.webp",
    featureImage: "assets/assets/images/products/blankets/IWL99/CBBL-99-Feature.webp",
    description: "Clear zip bag for blankets with rope handle. Fits styles 8712, 8723 and 8727. 14.96\" x 12.99\" x 3.54\". California Prop 65 Compliant. Do not wash or dry.",
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
            name: "Clear",
            hex: "#FFFFFF",
            gtin: "00671867646443",
            pms: "Clear",
            image: "assets/assets/images/products/blankets/IWL99/CBBL-99Clear.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IWL99/CBBL-99Clear.webp",
        "assets/assets/images/products/blankets/IWL99/CBBL-99_Clear_Back_Side.webp"
    ],

    specs: {
        itemNo: "ABWL99",
        gtin: "00671867646443",
        gusset: "N/A",
        weight: "0.14 lbs",
        material: "Clear",
        handle: "Rope Handle",
        careInstructions: "Do not wash or dry.",
        origin: "USA",
        packagingOptions: [
            {
                type: "Individual Bags",
                qtyPerBox: "300 pcs",
                boxWeight: "43 lbs",
                boxDims: '17.75" x 21.75" x 17"',
                cartonVolume: "3.8 cu ft",
                pieceWeight: "0.14 lbs",
                note: "Individual bags. 300 in a box."
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$2.10"] }
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
    id: "ABWXL99",
    name: "Extra-Large Clear Zippered Blanket Bag",
    code: "ABWXL99",
    slug: "extra-large-clear-zippered-blanket-bag",
    category: "Blankets",
    material: "Clear",
    size: '15.35" x 15.35" x 4.72"',
    imprint: "N/A",
    price: 2.42,
    originalPrice: 2.42,
    image: "assets/assets/images/products/blankets/IWXL99/CBBXL-99_Clear.webp",
    featureImage: "assets/assets/images/products/blankets/IWXL99/CBBXL-99-Feature.webp",
    description: "Clear zip bag for blankets with rope handle. Fits styles 8726, 8729 and 8730. 15.35\" x 15.35\" x 4.72\". California Prop 65 Compliant. Do not wash or dry.",
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
            name: "Clear",
            hex: "#FFFFFF",
            gtin: "00671867646474",
            pms: "Clear",
            image: "assets/assets/images/products/blankets/IWXL99/CBBXL-99_Clear.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IWXL99/CBBXL-99_Clear.webp",
        "assets/assets/images/products/blankets/IWXL99/CBBXL-99_Clear_Back_Side.webp"
    ],

    specs: {
        itemNo: "ABWXL99",
        gtin: "00671867646474",
        gusset: "N/A",
        weight: "0.18 lbs",
        material: "Clear",
        handle: "Rope Handle",
        careInstructions: "Do not wash or dry.",
        origin: "USA",
        packagingOptions: [
            {
                type: "Individual Bags",
                qtyPerBox: "300 pcs",
                boxWeight: "54 lbs",
                boxDims: '21.25" x 21.25" x 16.55"',
                cartonVolume: "4.32 cu ft",
                pieceWeight: "0.18 lbs",
                note: "Individual bags. 300 in a box."
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "PRICING", prices: ["$2.42"] }
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
    image: "assets/assets/images/products/blankets/IW8710/8710-Black.webp",
    featureImage: "assets/assets/images/products/blankets/IW8710/8710-Feature.webp",
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
            gtin: "00671867710779",
            pms: "Black C",
            image: "assets/assets/images/products/blankets/IW8710/8710-Black.webp"
        },
        {
            name: "Heather Grey",
            hex: "#A9A9A9",
            gtin: "00671867710786",
            pms: "N/A",
            image: "assets/assets/images/products/blankets/IW8710/8710-Heather Grey.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8710/8710-Black.webp",
        "assets/assets/images/products/blankets/IW8710/8710-Heather Grey.webp"
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
    image: "assets/assets/images/products/blankets/IW8711/8711-Black.webp",
    featureImage: "assets/assets/images/products/blankets/IW8711/8711-Feature.webp",
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
            gtin: "00671867711691",
            pms: "186C",
            image: "assets/assets/images/products/blankets/IW8711/8711-Red.webp"
        },
        {
            name: "Navy",
            hex: "#1B1F3B",
            gtin: "00671867711738",
            pms: "2767C",
            image: "assets/assets/images/products/blankets/IW8711/8711-Navy.webp"
        },
        {
            name: "Forest",
            hex: "#228B22",
            gtin: "00671867711769",
            pms: "N/A",
            image: "assets/assets/images/products/blankets/IW8711/8711-Forest Green.webp"
        },
        {
            name: "Black",
            hex: "#000000",
            gtin: "00671867711776",
            pms: "Black C",
            image: "assets/assets/images/products/blankets/IW8711/8711-Black.webp"
        },
        {
            name: "Cinder Grey",
            hex: "#A9A9A9",
            gtin: "00671867711783",
            pms: "415C",
            image: "assets/assets/images/products/blankets/IW8711/8711-Gray.webp"
        },
        {
            name: "Royal",
            hex: "#002366",
            gtin: "00671867711868",
            pms: "7683C",
            image: "assets/assets/images/products/blankets/IW8711/8711-Royal.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8711/8711-Black.webp",
        "assets/assets/images/products/blankets/IW8711/8711-Forest Green.webp",
        "assets/assets/images/products/blankets/IW8711/8711-Gray.webp",
        "assets/assets/images/products/blankets/IW8711/8711-Navy.webp",
        "assets/assets/images/products/blankets/IW8711/8711-Red.webp",
        "assets/assets/images/products/blankets/IW8711/8711-Royal.webp"
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
    image: "assets/assets/images/products/blankets/IW8712/8712-Cream.webp",
    featureImage: "assets/assets/images/products/blankets/IW8712/8712-Feature.webp",
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
            gtin: "00671867712735",
            pms: "534C",
            image: "assets/assets/images/products/blankets/IW8712/8712-Navy.webp"
        },
        {
            name: "Forest",
            hex: "#228B22",
            gtin: "00671867712766",
            pms: "7734C",
            image: "assets/assets/images/products/blankets/IW8712/8712-Forest Green.webp"
        },
        {
            name: "Black",
            hex: "#000000",
            gtin: "00671867712773",
            pms: "Black C",
            image: "assets/assets/images/products/blankets/IW8712/8712-Black.webp"
        },
        {
            name: "Grey",
            hex: "#A9A9A9",
            gtin: "00671867712780",
            pms: "421C",
            image: "assets/assets/images/products/blankets/IW8712/8712-Gray.webp"
        },
        {
            name: "Royal",
            hex: "#002366",
            gtin: "00671867712865",
            pms: "7683C",
            image: "assets/assets/images/products/blankets/IW8712/8712-Royal.webp"
        },
        {
            name: "Cream",
            hex: "#F5F0DC",
            gtin: "00671867712872",
            pms: "11-4201 TPX",
            image: "assets/assets/images/products/blankets/IW8712/8712-Cream.webp"
        },
        {
            name: "Cam",
            hex: "#4B5320",
            gtin: "00671867712995",
            pms: "4685C",
            image: "assets/assets/images/products/blankets/IW8712/8712-Cam.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8712/8712-Cream.webp",
        "assets/assets/images/products/blankets/IW8712/8712-Forest Green.webp",
        "assets/assets/images/products/blankets/IW8712/8712-Navy.webp",
        "assets/assets/images/products/blankets/IW8712/8712-Royal.webp",
        "assets/assets/images/products/blankets/IW8712/8712-Black.webp",
        "assets/assets/images/products/blankets/IW8712/8712-Gray.webp",
        "assets/assets/images/products/blankets/IW8712/8712-Cam.webp"
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
    image: "assets/assets/images/products/blankets/IW8718/8718-Black.webp",
    featureImage: "assets/assets/images/products/blankets/IW8718/8718-Feature.webp",
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
            gtin: "00671867718737",
            pms: "534C",
            image: "assets/assets/images/products/blankets/IW8718/8718-Navy.webp"
        },
        {
            name: "Black",
            hex: "#000000",
            gtin: "",
            pms: "",
            image: "assets/assets/images/products/blankets/IW8718/8718-Black.webp"
        },
        {
            name: "Gray",
            hex: "#A9A9A9",
            gtin: "",
            pms: "",
            image: "assets/assets/images/products/blankets/IW8718/8718-Gray.webp"
        },
        {
            name: "Royal",
            hex: "#002366",
            gtin: "",
            pms: "",
            image: "assets/assets/images/products/blankets/IW8718/8718-Royal.webp"
        },
        {
            name: "Sage",
            hex: "#A5A69A",
            gtin: "",
            pms: "",
            image: "assets/assets/images/products/blankets/IW8718/8718-Sage.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8718/8718-Black.webp",
        "assets/assets/images/products/blankets/IW8718/8718-Gray.webp",
        "assets/assets/images/products/blankets/IW8718/8718-Royal.webp",
        "assets/assets/images/products/blankets/IW8718/8718-Sage.webp"
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
    image: "assets/assets/images/products/blankets/IW8721/8721-Black.webp",
    featureImage: "assets/assets/images/products/blankets/IW8721/8721-Feature.webp",
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
            gtin: "00671867630824",
            pms: "295C",
            image: "assets/assets/images/products/blankets/IW8721/8721-Navy.webp"
        },
        {
            name: "Black",
            hex: "#000000",
            gtin: "00671867630770",
            pms: "Black C",
            image: "assets/assets/images/products/blankets/IW8721/8721-Black.webp"
        },
        {
            name: "Grey",
            hex: "#A9A9A9",
            gtin: "00671867630817",
            pms: "429C",
            image: "assets/assets/images/products/blankets/IW8721/8721-Gray.webp"
        },
        {
            name: "Royal",
            hex: "#002366",
            gtin: "00671867630848",
            pms: "7684C",
            image: "assets/assets/images/products/blankets/IW8721/8721-Royal.webp"
        },
        {
            name: "Cream",
            hex: "#F5F0DC",
            gtin: "00671867630794",
            pms: "11-4300 TPX",
            image: "assets/assets/images/products/blankets/IW8721/8721-Cream.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8721/8721-Black.webp",
        "assets/assets/images/products/blankets/IW8721/8721-Cream.webp",
        "assets/assets/images/products/blankets/IW8721/8721-Gray.webp",
        "assets/assets/images/products/blankets/IW8721/8721-Navy.webp",
        "assets/assets/images/products/blankets/IW8721/8721-Royal.webp"
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
    image: "assets/assets/images/products/blankets/IW8722/8722-Baby Blue.webp",
    featureImage: "assets/assets/images/products/blankets/IW8722/8722-Feature.webp",
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
            gtin: "00671867630879",
            pms: "White C",
            image: "assets/assets/images/products/blankets/IW8722/8722-Pure White.webp"
        },
        {
            name: "Baby Pink",
            hex: "#F4C2C2",
            gtin: "00671867630862",
            pms: "705C",
            image: "assets/assets/images/products/blankets/IW8722/8722-Baby Pink.webp"
        },
        {
            name: "Baby Blue",
            hex: "#A7C7E7",
            gtin: "00671867630855",
            pms: "649C",
            image: "assets/assets/images/products/blankets/IW8722/8722-Baby Blue.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8722/8722-Pure White.webp",
        "assets/assets/images/products/blankets/IW8722/8722-Baby Pink.webp",
        "assets/assets/images/products/blankets/IW8722/8722-Baby Blue.webp"
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
    image: "assets/assets/images/products/blankets/IW8723/8723-White.webp",
    featureImage: "assets/assets/images/products/blankets/IW8723/8723-Feature.webp",
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
            gtin: "00671867630909",
            pms: "White C",
            image: "assets/assets/images/products/blankets/IW8723/8723-White.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8723/8723-White.webp"
    ],

    specs: {
        itemNo: "ABW8723",
        gtin: "00671867630909",
        gusset: "N/A",
        weight: "270 g/sqm",
        material: "100% Polyester Faux Mink",
        handle: "N/A",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "USA",
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
    image: "assets/assets/images/products/blankets/IW8726/8726-Gray.webp",
    featureImage: "assets/assets/images/products/blankets/IW8726/8726-Feature.webp",
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
            gtin: "00671867632804",
            pms: "421C",
            image: "assets/assets/images/products/blankets/IW8726/8726-Gray.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8726/8726-Gray.webp"
    ],

    specs: {
        itemNo: "ABW8726",
        gtin: "00671867632804",
        gusset: "N/A",
        weight: "220 g/sqm",
        material: "100% Polyester (Faux Micro Mink / Faux Lambswool Sherpa)",
        handle: "N/A",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "USA",
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
    image: "assets/assets/images/products/blankets/IW8727/8727-Black.webp",
    featureImage: "assets/assets/images/products/blankets/IW8727/8727-Feature.webp",
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
            gtin: "00671867634082",
            pms: "295C",
            image: "assets/assets/images/products/blankets/IW8727/8727-Navy.webp"
        },
        {
            name: "Black",
            hex: "#000000",
            gtin: "00671867634051",
            pms: "Black C",
            image: "assets/assets/images/products/blankets/IW8727/8727-Black.webp"
        },
        {
            name: "Grey",
            hex: "#A9A9A9",
            gtin: "00671867634075",
            pms: "Cool Gray 7C",
            image: "assets/assets/images/products/blankets/IW8727/8727-Grey.webp"
        },
        {
            name: "Cream",
            hex: "#F5F0DC",
            gtin: "00671867634068",
            pms: "11-4300 TPX",
            image: "assets/assets/images/products/blankets/IW8727/8727-Cream.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8727/8727-Navy.webp",
        "assets/assets/images/products/blankets/IW8727/8727-Black.webp",
        "assets/assets/images/products/blankets/IW8727/8727-Grey.webp",
        "assets/assets/images/products/blankets/IW8727/8727-Cream.webp"
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
    image: "assets/assets/images/products/blankets/IW8729/8729-Grey.webp",
    featureImage: "assets/assets/images/products/blankets/IW8729/8729-Feature.webp",
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
            gtin: "00671867642100",
            pms: "5315C",
            image: "assets/assets/images/products/blankets/IW8729/8729-Grey.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8729/8729-Grey.webp"
    ],

    specs: {
        itemNo: "ABW8729",
        gtin: "00671867642100",
        gusset: "N/A",
        weight: "1.4 lb/pc",
        material: "100% Polyester Soft Printed",
        handle: "N/A",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "USA",
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
    image: "assets/assets/images/products/blankets/IW8730/8730-Heather Gray.webp",
    featureImage: "assets/assets/images/products/blankets/IW8730/8730-Feature.webp",
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
            gtin: "00671867642117",
            pms: "Cool Gray 5C",
            image: "assets/assets/images/products/blankets/IW8730/8730-Heather Gray.webp"
        }
    ],

    images: [
        "assets/assets/images/products/blankets/IW8730/8730-Heather Gray.webp"
    ],

    specs: {
        itemNo: "ABW8730",
        gtin: "00671867642117",
        gusset: "N/A",
        weight: "2.8 lb/pc",
        material: "100% Polyester (Faux Chinchilla / Faux Lambswool Sherpa)",
        handle: "N/A",
        careInstructions: "Machine wash cold with like colors. Tumble dry low heat. Do not iron. Do not bleach. No fabric softeners.",
        origin: "USA",
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
},
{
    id: "IT1003",
    name: "Premium 4.5oz Combed Cotton T-Shirt",
    code: "IT1003",
    slug: "premium-combed-cotton-tshirt",
    category: "T-Shirts",
    group: "Apparel",

    material: "100% Cotton (4.5 oz / 153 GSM, 30-Singles Yarn)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 6.00,
    originalPrice: 6.00,
    image: "assets/assets/images/products/T-shirts/IT1003/1003-purple-01.webp",
    featureImage: "assets/assets/images/products/T-shirts/IT1003/1003-feature.webp",
    description: "Premium 4.5oz combed cotton blank t-shirt (style 1003). The 30-singles yarn delivers a smooth printable surface ideal for screen printing and DTG.",
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
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/T-shirts/IT1003/1003-white-01.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/T-shirts/IT1003/1003-black-01.webp" },
        { name: "Heather Grey", hex: "#B0B0B0", image: "assets/assets/images/products/T-shirts/IT1003/1003-heather-grey-01.webp" },
        { name: "Navy", hex: "#1B2A4A", image: "assets/assets/images/products/T-shirts/IT1003/1003-navy-01.webp" },
        { name: "Solid Charcoal", hex: "#3A3A3A", image: "assets/assets/images/products/T-shirts/IT1003/1003-solid-charcoal-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/T-shirts/IT1003/1003-red-01.webp" },
        { name: "Royal", hex: "#1E3FBF", image: "assets/assets/images/products/T-shirts/IT1003/1003-royal-01.webp" },
        { name: "Light Pink", hex: "#F4C7CE", image: "assets/assets/images/products/T-shirts/IT1003/1003-light-pink-01.webp" },
        { name: "Apricot", hex: "#F5C7A8", image: "assets/assets/images/products/T-shirts/IT1003/1003-apricot-01.webp" },
        { name: "Dark Chocolate", hex: "#3B2417", image: "assets/assets/images/products/T-shirts/IT1003/1003-dark-chocolate-01.webp" },
        { name: "Military Green", hex: "#5A6242", image: "assets/assets/images/products/T-shirts/IT1003/1003-military-green-01.webp" },
        { name: "Sand", hex: "#D9C7A8", image: "assets/assets/images/products/T-shirts/IT1003/1003-sand-01.webp" },
        { name: "Texas Orange", hex: "#D2551E", image: "assets/assets/images/products/T-shirts/IT1003/1003-texas-orange-01.webp" },
        { name: "Natural", hex: "#EFE9D8", image: "assets/assets/images/products/T-shirts/IT1003/1003-natural-01.webp" },
        { name: "Purple", hex: "#5B2A8C", image: "assets/assets/images/products/T-shirts/IT1003/1003-purple-01.webp" },
        { name: "Sky Light Blue", hex: "#BFE3F0", image: "assets/assets/images/products/T-shirts/IT1003/1003-sky-light-blue-01.webp" },
        { name: "Ash Grey", hex: "#C9C9C9", image: "assets/assets/images/products/T-shirts/IT1003/1003-ash-grey-01.webp" },
        { name: "Irish Green", hex: "#1B8A4C", image: "assets/assets/images/products/T-shirts/IT1003/1003-irish-green-01.webp" },
        { name: "Pistachio", hex: "#C7E3A8", image: "assets/assets/images/products/T-shirts/IT1003/1003-pistachio-01.webp" },
        { name: "Maroon Burgundy", hex: "#5A1A2B", image: "assets/assets/images/products/T-shirts/IT1003/1003-maroon-burgundy-01.webp" },
        { name: "Sage", hex: "#A9B79A", image: "assets/assets/images/products/T-shirts/IT1003/1003-sage-01.webp" }
    ],

    images: [
        "assets/assets/images/products/T-shirts/IT1003/1003-white-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-texas-orange-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-black-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-navy-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-heather-grey-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-royal-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-navy-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-red-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-sage-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-maroon-burgundy-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-pistachio-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-irish-green-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-ash-grey-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-purple-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-natural-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-light-pink-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-sky-light-blue-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-sand-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-military-green-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-dark-chocolate-01.webp",
        "assets/assets/images/products/T-shirts/IT1003/1003-apricot-01.webp"
    ],

    specs: {
        itemNo: "IT1003",
        weight: "4.5 oz (153 GSM)",
        material: "100% Cotton",
        yarn: "30-Singles Combed Cotton",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        label: "Tear Away",
        packing: "6 dozen per case",
        origin: "USA",

        // ✅ SIZE-WISE PACKAGING OPTIONS
        packagingOptions: [
            {
                type: "Small",
                qtyPerBox: "24 pcs",
                boxWeight: "25 lbs",
                boxDims: '21" x 14" x 13"'
            },
            {
                type: "Medium",
                qtyPerBox: "24 pcs",
                boxWeight: "27 lbs",
                boxDims: '21" x 14" x 13"'
            },
            {
                type: "Large",
                qtyPerBox: "24 pcs",
                boxWeight: "30 lbs",
                boxDims: '24" x 15" x 14"'
            },
            {
                type: "X-Large",
                qtyPerBox: "24 pcs",
                boxWeight: "32 lbs",
                boxDims: '24" x 15" x 14"'
            },
            {
                type: "2X-Large",
                qtyPerBox: "24 pcs",
                boxWeight: "34 lbs",
                boxDims: '24" x 15" x 14"'
            },
            {
                type: "3X-Large",
                qtyPerBox: "24 pcs",
                boxWeight: "36 lbs",
                boxDims: '25" x 15" x 15"'
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$6.00" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "IT1005",
    name: "Heavyweight 6.0oz Ringspun Cotton T-Shirt",
    code: "IT1005",
    slug: "heavyweight-ringspun-cotton-tshirt",
    category: "T-Shirts",
    group: "Apparel",
    material: "100% Heavyweight Cotton (6.0 oz / 203 GSM, 20/s Yarn)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 8.22,
    originalPrice: 8.22,
    image: "assets/assets/images/products/T-shirts/IT1005/1005-black-01.webp",
    featureImage: "assets/assets/images/products/T-shirts/IT1005/1005-feature.webp",
    description: "Heavyweight 6.0 oz cotton blank t-shirt (style 1005). The dense, durable fabric is built for high-volume screen printing and embroidery, with a smooth print surface and side-seam construction that keeps prints aligned.",
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
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/T-shirts/IT1005/1005-white-01.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/T-shirts/IT1005/1005-black-01.webp" }
    ],

    images: [
        "assets/assets/images/products/T-shirts/IT1005/1005-white-01.webp",
        "assets/assets/images/products/T-shirts/IT1005/1005-black-01.webp"
    ],

    specs: {
        itemNo: "IT1005",
        styleNumber: "1005",
        season: "Core",
        weight: "6.0 oz (203 GSM)",
        material: "100% Heavyweight Cotton",
        yarn: "20/s Yarn",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "S", chest: '18"', bodyLength: '28"' },
            { size: "M", chest: '20"', bodyLength: '29"' },
            { size: "L", chest: '22"', bodyLength: '30"' },
            { size: "XL", chest: '24"', bodyLength: '31"' },
            { size: "2XL", chest: '26"', bodyLength: '32"' },
            { size: "3XL", chest: '28"', bodyLength: '33"' }
        ],

        decoration: {
            screenPrint: "Excellent – Dense surface keeps ink crisp. Ideal for spot color and process",
            dtg: "Excellent – Ringspun cotton holds fine detail with minimal bleed",
            embroidery: "Good – Stable fabric. May need needle-timing adjustment on multi-head",
            heatTransfer: "Excellent – Standard cotton press settings. Clean adhesion",
            sublimation: "Limited – White only. Muted output on 100% cotton"
        },

        downloads: {
            specSheet: "threelayer.com/spec/1005",
            productPhotos: "threelayer.com/photos/1005",
            fullDetails: "threelayer.com/product/heavy-cotton-t-shirts-wholesale-1005"
        },

        packagingOptions: [
            {
                type: "Small",
                qtyPerBox: "72 pcs",
                boxWeight: "30 lbs",
                boxDims: '18" x 15" x 9"'
            },
            {
                type: "Medium",
                qtyPerBox: "72 pcs",
                boxWeight: "31 lbs",
                boxDims: '20" x 15" x 9"'
            },
            {
                type: "Large",
                qtyPerBox: "72 pcs",
                boxWeight: "35 lbs",
                boxDims: '22" x 15" x 10"'
            },
            {
                type: "X-Large",
                qtyPerBox: "72 pcs",
                boxWeight: "39 lbs",
                boxDims: '24" x 16" x 10"'
            },
            {
                type: "2X-Large",
                qtyPerBox: "72 pcs",
                boxWeight: "42 lbs",
                boxDims: '16" x 16" x 11"'
            },
            {
                type: "3X-Large",
                qtyPerBox: "72 pcs",
                boxWeight: "45 lbs",
                boxDims: '26" x 16" x 11"'
            }
        ],

        additionalInfo: {
            paragraph: "Introducing our new heavyweight cotton t-shirt. Made from 100% heavyweight cotton using durable 20/s yarn, this tee is perfect for those looking for a sturdier option without sacrificing comfort. With a heavier gauge fabric, it offers a structured fit, side-stitched for enhanced durability, and is ideal for printing.",
            label: "Tear Away",
            colors: "S-3XL in Black and White",
            packing: "6 dozen per case",
            garmentSpecs: [
                { size: "S", bodyLength: '28"', chestWidth: '18"' },
                { size: "M", bodyLength: '29"', chestWidth: '20"' },
                { size: "L", bodyLength: '30"', chestWidth: '22"' },
                { size: "XL", bodyLength: '31"', chestWidth: '24"' },
                { size: "2XL", bodyLength: '32"', chestWidth: '26"' },
                { size: "3XL", bodyLength: '33"', chestWidth: '28"' }
            ]
        }
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$8.22" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "IT3130",
    name: "Lightweight 8.0oz French Terry Sleeveless Hoodie",
    code: "IT3130",
    slug: "french-terry-sleeveless-hoodie",
    category: "Hoodies",
    group: "Apparel",
    material: "80% Cotton / 20% Polyester French Terry (8.0 oz / 271 GSM)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 19.40,
    originalPrice: 19.40,
    image: "assets/assets/images/products/hoodies/IT3130/3130-royal-01.webp",
    featureImage: "assets/assets/images/products/hoodies/IT3130/3130-feature.webp",
    description: "Lightweight 8.0oz french terry blank sleeveless hoodie (style 3130) in 80/20 cotton-poly. Athletic cut designed for gyms, events, and streetwear.",
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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/hoodies/IT3130/3130-black-01.webp" },
        { name: "Heather Grey", hex: "#B0B0B0", image: "assets/assets/images/products/hoodies/IT3130/3130-heather-grey-01.webp" },
        { name: "Light Pink", hex: "#F4C7CE", image: "assets/assets/images/products/hoodies/IT3130/3130-light-pink-01.webp" },
        { name: "New Navy", hex: "#1B2A4A", image: "assets/assets/images/products/hoodies/IT3130/3130-new-navy-01.webp" },
        { name: "Olive", hex: "#5A6242", image: "assets/assets/images/products/hoodies/IT3130/3130-olive-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/hoodies/IT3130/3130-red-01.webp" },
        { name: "Royal", hex: "#1E3FBF", image: "assets/assets/images/products/hoodies/IT3130/3130-royal-01.webp" },
        { name: "Sand", hex: "#D9C7A8", image: "assets/assets/images/products/hoodies/IT3130/3130-sand-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/hoodies/IT3130/3130-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/hoodies/IT3130/3130-black-01.webp",
        "assets/assets/images/products/hoodies/IT3130/3130-heather-grey-01.webp",
        "assets/assets/images/products/hoodies/IT3130/3130-light-pink-01.webp",
        "assets/assets/images/products/hoodies/IT3130/3130-new-navy-01.webp",
        "assets/assets/images/products/hoodies/IT3130/3130-olive-01.webp",
        "assets/assets/images/products/hoodies/IT3130/3130-red-01.webp",
        "assets/assets/images/products/hoodies/IT3130/3130-royal-01.webp",
        "assets/assets/images/products/hoodies/IT3130/3130-sand-01.webp",
        "assets/assets/images/products/hoodies/IT3130/3130-white-01.webp"
    ],

    specs: {
        itemNo: "IT3130",
        styleNumber: "3130",
        season: "Core",
        weight: "8.0 oz (271 GSM)",
        material: "80% Cotton, 20% Polyester French Terry",
        yarn: "French Terry",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "S", chest: '20"', bodyLength: '26"' },
            { size: "M", chest: '22"', bodyLength: '27"' },
            { size: "L", chest: '24"', bodyLength: '28"' },
            { size: "XL", chest: '26"', bodyLength: '29"' },
            { size: "2XL", chest: '28"', bodyLength: '30"' },
            { size: "3XL", chest: '30"', bodyLength: '31"' },
            { size: "4XL", chest: '32"', bodyLength: '32"' },
            { size: "5XL", chest: '34"', bodyLength: '33"' }
        ],

        decoration: {
            screenPrint: "Excellent – Smooth face, strong ink adhesion",
            dtg: "Good – Front and back panels print cleanly",
            embroidery: "Fair – Use stabilizer. Avoid high-count designs on terry knit",
            heatTransfer: "Good – Standard press temps. Test adhesion on terry side",
            sublimation: "Not Recommended – Cotton-dominant blend. Sublimation will wash out"
        },

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$19.40" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    }
    // ❌ additionalCharges field HATA DIYA
},
{
    id: "IT5001",
    name: "Heavyweight Pullover Fleece Hooded Sweatshirt",
    code: "IT5001",
    slug: "heavyweight-pullover-fleece-hoodie",
    category: "Hoodies",
    group: "Apparel",
    material: "Heavyweight Fleece",
    size: 'S - 5XL',
    imprint: "N/A",
    price: "$37.20",
    originalPrice: "$37.20",
    image: "assets/assets/images/products/hoodies/IT5001/5001-red-01.webp",
    featureImage: "assets/assets/images/products/hoodies/IT5001/5001-feature.webp",
    description: "Our heavyweight pullover fleece hooded sweatshirt is generously cut with an amazing feel. Hoodie features include lined hood with self fabric, heavy drawstring cord, and spandex in the ribbing at the cuff and sleeve. Double needle stitching all over. Generous pouch pocket.",
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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/hoodies/IT5001/5001-black-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/hoodies/IT5001/5001-red-01.webp" },
        { name: "Royal", hex: "#1E3FBF", image: "assets/assets/images/products/hoodies/IT5001/5001-royal-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/hoodies/IT5001/5001-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/hoodies/IT5001/5001-black-01.webp",
        "assets/assets/images/products/hoodies/IT5001/5001-red-01.webp",
        "assets/assets/images/products/hoodies/IT5001/5001-royal-01.webp",
        "assets/assets/images/products/hoodies/IT5001/5001-white-01.webp"
    ],

    specs: {
        itemNo: "IT5001",
        styleNumber: "5001",
        season: "Core",
        weight: "Heavyweight Fleece",
        material: "Heavyweight Fleece",
        yarn: "Fleece",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "S", chest: '20"', bodyLength: '26"' },
            { size: "M", chest: '22"', bodyLength: '27"' },
            { size: "L", chest: '24"', bodyLength: '28"' },
            { size: "XL", chest: '26"', bodyLength: '29"' },
            { size: "2XL", chest: '28"', bodyLength: '30"' },
            { size: "3XL", chest: '30"', bodyLength: '31"' },
            { size: "4XL", chest: '32"', bodyLength: '32"' },
            { size: "5XL", chest: '34"', bodyLength: '33"' }
        ],

        packagingOptions: [
            {
                type: "Small",
                qtyPerBox: "24 pcs",
                boxWeight: "25 lbs",
                boxDims: '21" x 14" x 13"'
            },
            {
                type: "Medium",
                qtyPerBox: "24 pcs",
                boxWeight: "27 lbs",
                boxDims: '21" x 14" x 13"'
            },
            {
                type: "Large",
                qtyPerBox: "24 pcs",
                boxWeight: "30 lbs",
                boxDims: '24" x 15" x 14"'
            },
            {
                type: "X-Large",
                qtyPerBox: "24 pcs",
                boxWeight: "32 lbs",
                boxDims: '24" x 15" x 14"'
            },
            {
                type: "2X-Large",
                qtyPerBox: "24 pcs",
                boxWeight: "34 lbs",
                boxDims: '24" x 15" x 14"'
            },
            {
                type: "3X-Large",
                qtyPerBox: "24 pcs",
                boxWeight: "36 lbs",
                boxDims: '25" x 15" x 15"'
            }
        ],

        additionalInfo: {
            paragraph: "Our heavyweight pullover fleece hooded sweatshirt is generously cut with an amazing feel. Hoodie features include lined hood with self fabric, heavy drawstring cord, and spandex in the ribbing at the cuff and sleeve. Double needle stitching all over. Generous pouch pocket.",
            label: "Tear Away",
            colors: "S-5XL in Black, Red, Royal, and White.",
            packing: "Sold per case",
            garmentSpecs: [
                { size: "S", chest: '20"', bodyLength: '26"' },
                { size: "M", chest: '22"', bodyLength: '27"' },
                { size: "L", chest: '24"', bodyLength: '28"' },
                { size: "XL", chest: '26"', bodyLength: '29"' },
                { size: "2XL", chest: '28"', bodyLength: '30"' },
                { size: "3XL", chest: '30"', bodyLength: '31"' },
                { size: "4XL", chest: '32"', bodyLength: '32"' },
                { size: "5XL", chest: '34"', bodyLength: '33"' }
            ]
        }
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$$37.20" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "IT5108",
    name: "Premium Pullover Hoodie 7.8 oz",
    code: "IT5108",
    slug: "premium-pullover-hoodie",
    category: "Pullover Hoodies",
    group: "Apparel",
    material: "80% Cotton / 20% Polyester Fleece (7.8 oz / 264 GSM)",
    size: 'XS - 5XL',
    imprint: "N/A",
    price: 19.4,
    originalPrice: 19.4,
    image: "assets/assets/images/products/hoodies/IT5108/5108-texas-orange-01.webp",
    featureImage: "assets/assets/images/products/hoodies/IT5108/5108-feature.webp",
    description: "Premium pullover hoodie (style 5108) in 7.8 oz 80/20 cotton-poly fleece with a 100% ringspun cotton face yarn. The printable surface you decorate is 100% cotton, while the blend underneath balances softness with durability and shrink control. Regular fit, self-fabric lined hood, heavy drawstring cord, spandex ribbing at cuffs and waistband, and double-needle stitching throughout.",
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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/hoodies/IT5108/5108-black-01.webp" },
        { name: "Dark Heather Charcoal", hex: "#4A4A4A", image: "assets/assets/images/products/hoodies/IT5108/5108-dark-heather-charcoal-01.webp" },
        { name: "Fuchsia Hot Pink", hex: "#E91E8C", image: "assets/assets/images/products/hoodies/IT5108/5108-fuchsia-hot-pink-01.webp" },
        { name: "Gold Yellow", hex: "#F5C518", image: "assets/assets/images/products/hoodies/IT5108/5108-gold-yellow-01.webp" },
        { name: "Heather Grey", hex: "#B0B0B0", image: "assets/assets/images/products/hoodies/IT5108/5108-heather-grey-01.webp" },
        { name: "Light Pink", hex: "#F4C7CE", image: "assets/assets/images/products/hoodies/IT5108/5108-light-pink-01.webp" },
        { name: "Maroon Burgundy", hex: "#5A1A2B", image: "assets/assets/images/products/hoodies/IT5108/5108-maroon-burgundy-01.webp" },
        { name: "New Heather Charcoal", hex: "#5A5A5A", image: "assets/assets/images/products/hoodies/IT5108/5108-new-heather-charcoal-01.webp" },
        { name: "New Navy", hex: "#1B2A4A", image: "assets/assets/images/products/hoodies/IT5108/5108-new-navy-01.webp" },
        { name: "Orange", hex: "#F26522", image: "assets/assets/images/products/hoodies/IT5108/5108-orange-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/hoodies/IT5108/5108-red-01.webp" },
        { name: "Royal", hex: "#1E3FBF", image: "assets/assets/images/products/hoodies/IT5108/5108-royal-01.webp" },
        { name: "Sand", hex: "#D9C7A8", image: "assets/assets/images/products/hoodies/IT5108/5108-sand-01.webp" },
        { name: "Sky Light Blue", hex: "#BFE3F0", image: "assets/assets/images/products/hoodies/IT5108/5108-sky-light-blue-01.webp" },
        { name: "Texas Orange", hex: "#D2551E", image: "assets/assets/images/products/hoodies/IT5108/5108-texas-orange-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/hoodies/IT5108/5108-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/hoodies/IT5108/5108-black-01.webp",
        "assets/assets/images/products/hoodies/IT5108/5108-dark-heather-charcoal-01.webp",
        "assets/assets/images/products/hoodies/IT5108/5108-fuchsia-hot-pink-01.webp",
        "assets/assets/images/products/hoodies/IT5108/5108-fuchsia-hot-pink-02.webp",
        "assets/assets/images/products/hoodies/IT5108/5108-gold-yellow-01.webp",
        "assets/assets/images/products/hoodies/IT5108/5108-heather-grey-01.webp",
        "assets/assets/images/products/hoodies/IT5108/5108-light-pink-01.webp",
        "assets/assets/images/products/hoodies/IT5108/5108-maroon-burgundy-01.webp",
        "assets/assets/images/products/hoodies/IT5108/5108-new-heather-charcoal-01.webp",
        "assets/assets/images/products/hoodies/IT5108/5108-new-navy-01.webp",
        "assets/assets/images/products/hoodies/IT5108/5108-orange-01.webp",
        "assets/assets/images/products/hoodies/IT5108/5108-red-01.webp",
        "assets/assets/images/products/hoodies/IT5108/5108-royal-01.webp",
        "assets/assets/images/products/hoodies/IT5108/5108-sand-01.webp",
        "assets/assets/images/products/hoodies/IT5108/5108-sky-light-blue-01.webp",
        "assets/assets/images/products/hoodies/IT5108/5108-texas-orange-01.webp",
        "assets/assets/images/products/hoodies/IT5108/5108-texas-orange-02.webp",
        "assets/assets/images/products/hoodies/IT5108/5108-white-01.webp"
    ],

    specs: {
        itemNo: "IT5108",
        styleNumber: "5108",
        season: "Core",
        weight: "7.8 oz (264 GSM)",
        material: "80% Cotton, 20% Polyester Fleece",
        yarn: "100% Ringspun Cotton Face",
        sizes: "XS to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "XS", chest: '18"', bodyLength: '24"' },
            { size: "S", chest: '20"', bodyLength: '26"' },
            { size: "M", chest: '22"', bodyLength: '27"' },
            { size: "L", chest: '24"', bodyLength: '28"' },
            { size: "XL", chest: '26"', bodyLength: '29"' },
            { size: "2XL", chest: '28"', bodyLength: '30"' },
            { size: "3XL", chest: '30"', bodyLength: '31"' },
            { size: "4XL", chest: '31"', bodyLength: '32"' },
            { size: "5XL", chest: '32"', bodyLength: '33"' }
        ],

        decoration: {
            screenPrint: "Excellent – Cotton-dominant face holds ink. The fleece stays flat",
            dtg: "Excellent – Even pre-treatment absorption. Sharp detail on finer nap",
            embroidery: "Good – Cutaway backing recommended for designs over 5\"",
            heatTransfer: "Excellent – Standard poly-blend settings. Clean bond",
            sublimation: "Limited – Light colors only. Muted results from cotton content"
        },

        packagingOptions: [
            {
                type: "X-Small",
                qtyPerBox: "24 pcs",
                boxWeight: "29 lbs",
                boxDims: '20" x 15" x 16"'
            },
            {
                type: "Small",
                qtyPerBox: "24 pcs",
                boxWeight: "30 lbs",
                boxDims: '20" x 15" x 16"'
            },
            {
                type: "Medium",
                qtyPerBox: "24 pcs",
                boxWeight: "31 lbs",
                boxDims: '20" x 15" x 16"'
            },
            {
                type: "Large",
                qtyPerBox: "24 pcs",
                boxWeight: "34 lbs",
                boxDims: '23" x 15" x 17"'
            },
            {
                type: "X-Large",
                qtyPerBox: "24 pcs",
                boxWeight: "36 lbs",
                boxDims: '23" x 15" x 17"'
            }
        ],

        additionalInfo: {
            paragraph: "The 7.8 oz (264 GSM) body uses an 80/20 cotton-poly blend with a 100% ringspun cotton face yarn, so the printable surface you decorate is 100% cotton while the blend underneath balances softness with durability and shrink control. The regular fit works across size-inclusive ranges without the billowy excess of oversized cuts, making it reliable for uniform programs and retail alike. The hood is lined in self-fabric for a clean, premium finish, and the heavy drawstring cord adds a tactile quality detail that elevates the garment beyond commodity blanks. Rib cuffs and waistband include spandex for shape retention over time. Double-needle stitching at all seams reinforces high-stress areas, and the pouch pocket is cleanly constructed with reinforced openings. The tear-away label removes in one pull for fast private-label turnarounds. Care: machine wash cold with like colors, tumble dry low.",
            label: "Tear Away",
            colors: "XS-5XL in Black, Dark Heather Charcoal, Fuchsia Hot Pink, Gold Yellow, Heather Grey, Light Pink, Maroon Burgundy, New Heather Charcoal, New Navy, Orange, Red, Royal, Sand, Sky Light Blue, Texas Orange, and White.",
            packing: "Sold per case",
            garmentSpecs: [
                { size: "XS", chest: '18"', bodyLength: '24"' },
                { size: "S", chest: '20"', bodyLength: '26"' },
                { size: "M", chest: '22"', bodyLength: '27"' },
                { size: "L", chest: '24"', bodyLength: '28"' },
                { size: "XL", chest: '26"', bodyLength: '29"' },
                { size: "2XL", chest: '28"', bodyLength: '30"' },
                { size: "3XL", chest: '30"', bodyLength: '31"' },
                { size: "4XL", chest: '31"', bodyLength: '32"' },
                { size: "5XL", chest: '32"', bodyLength: '33"' }
            ]
        }
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$19.4" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "IT5109",
    name: "Premium 7.8oz Full Zip Hoodie",
    code: "IT5109",
    slug: "premium-full-zip-hoodie",
    category: "Full Zip Hoodies",
    group: "Apparel",
    material: "80% Cotton / 20% Polyester Fleece (7.8 oz / 264 GSM)",
    size: 'XS - 5XL',
    imprint: "N/A",
    price: 22.20,
    originalPrice: 22.20,
    image: "assets/assets/images/products/hoodies/IT5109/5109-black-01.webp",
    featureImage: "assets/assets/images/products/hoodies/IT5109/5109-feature.webp",
    description: "Premium 7.8oz blank full zip hoodie (style 5109) in 80/20 cotton-poly fleece. Full-zip silhouette ideal for embroidery and layered branding.",
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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/hoodies/IT5109/5109-black-01.webp" },
        { name: "Cream Beige", hex: "#EFE4D0", image: "assets/assets/images/products/hoodies/IT5109/5109-cream-beige-01.webp" },
        { name: "Heather Grey", hex: "#B0B0B0", image: "assets/assets/images/products/hoodies/IT5109/5109-heather-grey-01.webp" },
        { name: "Light Pink", hex: "#F4C7CE", image: "assets/assets/images/products/hoodies/IT5109/5109-light-pink-01.webp" },
        { name: "New Heather Charcoal", hex: "#5A5A5A", image: "assets/assets/images/products/hoodies/IT5109/5109-new-heather-charcoal-01.webp" },
        { name: "New Navy", hex: "#1B2A4A", image: "assets/assets/images/products/hoodies/IT5109/5109-new-navy-01.webp" },
        { name: "Olive", hex: "#5A6242", image: "assets/assets/images/products/hoodies/IT5109/5109-olive-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/hoodies/IT5109/5109-red-01.webp" },
        { name: "Royal", hex: "#1E3FBF", image: "assets/assets/images/products/hoodies/IT5109/5109-royal-01.webp" },
        { name: "Sage", hex: "#A9B79A", image: "assets/assets/images/products/hoodies/IT5109/5109-sage-01.webp" },
        { name: "Sand", hex: "#D9C7A8", image: "assets/assets/images/products/hoodies/IT5109/5109-sand-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/hoodies/IT5109/5109-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/hoodies/IT5109/5109-black-01.webp",
        "assets/assets/images/products/hoodies/IT5109/5109-cream-beige-01.webp",
        "assets/assets/images/products/hoodies/IT5109/5109-cream-beige-02.webp",
        "assets/assets/images/products/hoodies/IT5109/5109-heather-grey-01.webp",
        "assets/assets/images/products/hoodies/IT5109/5109-light-pink-01.webp",
        "assets/assets/images/products/hoodies/IT5109/5109-new-heather-charcoal-01.webp",
        "assets/assets/images/products/hoodies/IT5109/5109-new-navy-01.webp",
        "assets/assets/images/products/hoodies/IT5109/5109-olive-01.webp",
        "assets/assets/images/products/hoodies/IT5109/5109-red-01.webp",
        "assets/assets/images/products/hoodies/IT5109/5109-royal-01.webp",
        "assets/assets/images/products/hoodies/IT5109/5109-sage-01.webp",
        "assets/assets/images/products/hoodies/IT5109/5109-sage-02.webp",
        "assets/assets/images/products/hoodies/IT5109/5109-sand-01.webp",
        "assets/assets/images/products/hoodies/IT5109/5109-white-01.webp"
    ],

    specs: {
        itemNo: "IT5109",
        styleNumber: "5109",
        season: "Core",
        weight: "7.8 oz (264 GSM)",
        material: "80% Cotton, 20% Polyester Fleece",
        yarn: "100% Ringspun Cotton Face",
        sizes: "XS to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "XS", chest: '18"', bodyLength: '24"' },
            { size: "S", chest: '20"', bodyLength: '26"' },
            { size: "M", chest: '22"', bodyLength: '27"' },
            { size: "L", chest: '24"', bodyLength: '28"' },
            { size: "XL", chest: '26"', bodyLength: '29"' },
            { size: "2XL", chest: '28"', bodyLength: '30"' },
            { size: "3XL", chest: '30"', bodyLength: '31"' },
            { size: "4XL", chest: '32"', bodyLength: '32"' },
            { size: "5XL", chest: '34"', bodyLength: '33"' }
        ],

        decoration: {
            screenPrint: "Excellent – Ringspun face yields sharp, vibrant prints",
            dtg: "Good – Clean results once the platen is adjusted around the zipper",
            embroidery: "Good – Left-chest and back yoke placements work well",
            heatTransfer: "Good – Cotton face accepts transfers at standard settings",
            sublimation: "Not Recommended – Muted, vintage style results only. Full brightness needs 100 percent polyester"
        },

        downloads: {
            specSheet: "threelayer.com/spec/5109",
            productPhotos: "threelayer.com/photos/5109",
            fullDetails: "threelayer.com/product/5109-premium-full-zip-hoodies"
        },

        packagingOptions: [
            {
                type: "X-Small",
                qtyPerBox: "24 pcs",
                boxWeight: "29 lbs",
                boxDims: '20" x 15" x 17"'
            },
            {
                type: "Small",
                qtyPerBox: "24 pcs",
                boxWeight: "31 lbs",
                boxDims: '20" x 15" x 17"'
            },
            {
                type: "Medium",
                qtyPerBox: "24 pcs",
                boxWeight: "33 lbs",
                boxDims: '23" x 15" x 18"'
            },
            {
                type: "Large",
                qtyPerBox: "24 pcs",
                boxWeight: "35 lbs",
                boxDims: '23" x 15" x 18"'
            },
            {
                type: "X-Large",
                qtyPerBox: "24 pcs",
                boxWeight: "37 lbs",
                boxDims: '24" x 16" x 19"'
            },
            {
                type: "2X-Large",
                qtyPerBox: "24 pcs",
                boxWeight: "39 lbs",
                boxDims: '24" x 16" x 19"'
            },
            {
                type: "3X-Large",
                qtyPerBox: "24 pcs",
                boxWeight: "41 lbs",
                boxDims: '25" x 15" x 19"'
            }
        ],

        additionalInfo: {
            paragraph: "Constructed from 264 GSM (7.8oz) 80/20 cotton-polyester fleece with a 100% ringspun cotton face yarn, the 5109 features a tighter, smoother surface compared to open-end cotton. That distinction matters for print clarity and hand feel. The 80/20 blend leans into cotton softness while the poly component adds shape retention and reduces pilling over time. The hood is fully lined with a heavy drawstring cord, and spandex-reinforced ribbing at cuffs and hem maintains structure through repeated laundering. Double-needle stitching at all major seams provides production-grade durability. The YKK metal zipper runs the full front with a clean tape finish, the tear-away label enables private-label rebranding, and the regular fit provides consistent sizing across the full size run.",
            label: "Tear Away",
            colors: "XS-5XL in Black, New Heather Charcoal, Heather Grey, Navy Blue, Red, Royal, Light Pink, Sand, Cream Beige, Olive, Sage and White.",
            packing: "2 dozen per case",
            garmentSpecs: [
                { size: "XS", chest: '18"', bodyLength: '24"' },
                { size: "S", chest: '20"', bodyLength: '26"' },
                { size: "M", chest: '22"', bodyLength: '27"' },
                { size: "L", chest: '24"', bodyLength: '28"' },
                { size: "XL", chest: '26"', bodyLength: '29"' },
                { size: "2XL", chest: '28"', bodyLength: '30"' },
                { size: "3XL", chest: '30"', bodyLength: '31"' },
                { size: "4XL", chest: '32"', bodyLength: '32"' },
                { size: "5XL", chest: '34"', bodyLength: '33"' }
            ]
        }
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$22.20" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "IT15001",
    name: "Ultra-Heavyweight 12oz Oversized Blank Pullover Hoodie",
    code: "IT15001",

    slug: "ultra-heavyweight-12oz-oversized-pullover-hoodie",
    category: "Pullover Hoodies",
    group: "Apparel",

    material: "80% Cotton / 20% Polyester Fleece (12.0 oz / 407 GSM)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 38.70,
    originalPrice: 38.70,
    image: "assets/assets/images/products/hoodies/IT15001/15001-black-01.webp",
    featureImage: "assets/assets/images/products/hoodies/IT15001/15001-feature.webp",
    description: "Ultra-heavyweight 12oz oversized blank pullover hoodie (style 15001) in 80/20 cotton-poly fleece. Street-ready urban silhouette built for custom decoration.",
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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/hoodies/IT15001/15001-black-01.webp" },
        { name: "Natural", hex: "#EFE9D8", image: "assets/assets/images/products/hoodies/IT15001/15001-natural-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/hoodies/IT15001/15001-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/hoodies/IT15001/15001-black-01.webp",
        "assets/assets/images/products/hoodies/IT15001/15001-natural-01.webp",
        "assets/assets/images/products/hoodies/IT15001/15001-natural-02.webp",
        "assets/assets/images/products/hoodies/IT15001/15001-white-01.webp",
        "assets/assets/images/products/hoodies/IT15001/15001-white-02.webp"
    ],

    specs: {
        itemNo: "IT15001",
        styleNumber: "15001",
        season: "Core",
        weight: "12.0 oz (407 GSM)",
        material: "80% Cotton, 20% Polyester Fleece",
        yarn: "Brushed Fleece",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "S", chest: '20"', bodyLength: '26"' },
            { size: "M", chest: '22"', bodyLength: '27"' },
            { size: "L", chest: '24"', bodyLength: '28"' },
            { size: "XL", chest: '26"', bodyLength: '29"' },
            { size: "2XL", chest: '28"', bodyLength: '30"' },
            { size: "3XL", chest: '30"', bodyLength: '31"' },
            { size: "4XL", chest: '32"', bodyLength: '32"' },
            { size: "5XL", chest: '34"', bodyLength: '33"' }
        ],

        decoration: {
            screenPrint: "Excellent – Dense fleece holds ink. Fabric stays flat on platen",
            dtg: "Good – Heavier pre-treatment needed on brushed fleece",
            embroidery: "Excellent – 12 oz body eliminates puckering. Ideal for large designs",
            heatTransfer: "Good – Increase pressure to compensate for fleece texture",
            sublimation: "Not Recommended – 80/20 cotton-poly blend prevents viable results"
        },

        downloads: {
            specSheet: "threelayer.com/spec/15001",
            productPhotos: "threelayer.com/photos/15001",
            fullDetails: "threelayer.com/product/heavyweight-urban-pullover-hoodies-12oz"
        },

        packagingOptions: [
            {
                type: "Small",
                qtyPerBox: "12 pcs",
                boxWeight: "18 lbs",
                boxDims: '20" x 15" x 12"'
            },
            {
                type: "Medium",
                qtyPerBox: "12 pcs",
                boxWeight: "19 lbs",
                boxDims: '20" x 15" x 12"'
            },
            {
                type: "Large",
                qtyPerBox: "12 pcs",
                boxWeight: "20 lbs",
                boxDims: '22" x 16" x 13"'
            },
            {
                type: "X-Large",
                qtyPerBox: "12 pcs",
                boxWeight: "21 lbs",
                boxDims: '22" x 16" x 13"'
            },
            {
                type: "2X-Large",
                qtyPerBox: "12 pcs",
                boxWeight: "23 lbs",
                boxDims: '24" x 16" x 14"'
            },
            {
                type: "3X-Large",
                qtyPerBox: "12 pcs",
                boxWeight: "25 lbs",
                boxDims: '24" x 16" x 14"'
            },
            {
                type: "4X-Large",
                qtyPerBox: "12 pcs",
                boxWeight: "27 lbs",
                boxDims: '25" x 17" x 15"'
            },
            {
                type: "5X-Large",
                qtyPerBox: "12 pcs",
                boxWeight: "29 lbs",
                boxDims: '25" x 17" x 15"'
            }
        ],

        additionalInfo: {
            paragraph: "At 12 oz (407 GSM), the 15001 is the heaviest hoodie in the Three Layer lineup. The 80/20 cotton-poly blend balances cotton's print-friendly surface with polyester's shrink resistance and structural memory. Inside, brushed fleece delivers warmth and a luxury hand feel that justifies premium retail pricing for your customers. The hood is fully lined in matching self-fabric with no contrasting mesh or thin jersey liners, giving it a clean, finished look from every angle. Rib cuffs and waistband incorporate spandex to maintain shape after repeated washing and wearing, and double-needle stitching at stress points reinforces durability. The tear-away label enables fast private-label branding, and the kangaroo pocket is roomy with reinforced openings.",
            label: "Tear Away",
            colors: "S-5XL in Black, Natural, and White.",
            packing: "Sold per case",
            garmentSpecs: [
                { size: "S", chest: '20"', bodyLength: '26"' },
                { size: "M", chest: '22"', bodyLength: '27"' },
                { size: "L", chest: '24"', bodyLength: '28"' },
                { size: "XL", chest: '26"', bodyLength: '29"' },
                { size: "2XL", chest: '28"', bodyLength: '30"' },
                { size: "3XL", chest: '30"', bodyLength: '31"' },
                { size: "4XL", chest: '32"', bodyLength: '32"' },
                { size: "5XL", chest: '34"', bodyLength: '33"' }
            ]
        }
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$38.70" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "ITP280",
    name: "Midweight 8.8oz Pullover Hoodie",
    code: "ITP280",
    slug: "midweight-pullover-hoodie",
    category: "Pullover Hoodies",
    group: "Apparel",

    material: "70% Cotton / 30% Polyester Fleece (8.8 oz / 298 GSM)",
    size: 'XS - 5XL',
    imprint: "N/A",
    price: 21.60,
    originalPrice: 21.60,
    image: "assets/assets/images/products/hoodies/ITP280/p280-light-pink-01.webp",
    featureImage: "assets/assets/images/products/hoodies/ITP280/p280-feature.webp",
    description: "Midweight 8.8oz blank pullover hoodie (style P280) in 70/30 cotton-poly fleece. Versatile weight for year-round custom apparel programs.",
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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/hoodies/ITP280/p280-black-01.webp" },
        { name: "Chocolate", hex: "#3B2417", image: "assets/assets/images/products/hoodies/ITP280/p280-chocolate-01.webp" },
        { name: "Cream Beige", hex: "#EFE4D0", image: "assets/assets/images/products/hoodies/ITP280/p280-cream-beige-01.webp" },
        { name: "Dark Heather Charcoal", hex: "#4A4A4A", image: "assets/assets/images/products/hoodies/ITP280/p280-dark-heather-charcoal-01.webp" },
        { name: "Gold Yellow", hex: "#F5C518", image: "assets/assets/images/products/hoodies/ITP280/p280-gold-yellow-01.webp" },
        { name: "Heather Grey", hex: "#B0B0B0", image: "assets/assets/images/products/hoodies/ITP280/p280-heather-grey-01.webp" },
        { name: "Kelly Green", hex: "#1B8A4C", image: "assets/assets/images/products/hoodies/ITP280/p280-kelly-green-01.webp" },
        { name: "Light Pink", hex: "#F4C7CE", image: "assets/assets/images/products/hoodies/ITP280/p280-light-pink-01.webp" },
        { name: "Maroon Burgundy", hex: "#5A1A2B", image: "assets/assets/images/products/hoodies/ITP280/p280-maroon-burgundy-01.webp" },
        { name: "Natural", hex: "#EFE9D8", image: "assets/assets/images/products/hoodies/ITP280/p280-natural-01.webp" },
        { name: "New Heather Charcoal", hex: "#5A5A5A", image: "assets/assets/images/products/hoodies/ITP280/p280-new-heather-charcoal-01.webp" },
        { name: "New Navy", hex: "#1B2A4A", image: "assets/assets/images/products/hoodies/ITP280/p280-new-navy-01.webp" },
        { name: "Olive", hex: "#5A6242", image: "assets/assets/images/products/hoodies/ITP280/p280-olive-01.webp" },
        { name: "PFD", hex: "#F5F0E6", image: "assets/assets/images/products/hoodies/ITP280/p280-pfd-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/hoodies/ITP280/p280-red-01.webp" },
        { name: "Royal", hex: "#1E3FBF", image: "assets/assets/images/products/hoodies/ITP280/p280-royal-01.webp" },
        { name: "Sage", hex: "#A9B79A", image: "assets/assets/images/products/hoodies/ITP280/p280-sage-01.webp" },
        { name: "Sand", hex: "#D9C7A8", image: "assets/assets/images/products/hoodies/ITP280/p280-sand-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/hoodies/ITP280/p280-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/hoodies/ITP280/p280-black-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-chocolate-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-cream-beige-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-dark-heather-charcoal-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-gold-yellow-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-heather-grey-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-kelly-green-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-light-pink-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-maroon-burgundy-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-natural-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-natural-02.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-new-heather-charcoal-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-new-navy-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-olive-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-pfd-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-red-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-royal-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-sage-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-sand-01.webp",
        "assets/assets/images/products/hoodies/ITP280/p280-white-01.webp"
    ],

    specs: {
        itemNo: "ITP280",
        styleNumber: "P280",
        season: "Core",
        weight: "8.8 oz (298 GSM)",
        material: "70% Cotton, 30% Polyester Fleece",
        yarn: "Cotton-Dominant Face",
        sizes: "XS to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "XS", chest: '18"', bodyLength: '24"' },
            { size: "S", chest: '20"', bodyLength: '26"' },
            { size: "M", chest: '22"', bodyLength: '27"' },
            { size: "L", chest: '24"', bodyLength: '28"' },
            { size: "XL", chest: '26"', bodyLength: '29"' },
            { size: "2XL", chest: '28"', bodyLength: '30"' },
            { size: "3XL", chest: '30"', bodyLength: '31"' },
            { size: "4XL", chest: '31"', bodyLength: '32"' },
            { size: "5XL", chest: '32"', bodyLength: '33"' }
        ],

        decoration: {
            screenPrint: "Excellent – Smooth cotton face, ideal ink adhesion",
            dtg: "Excellent – High cotton content yields sharp detail",
            embroidery: "Good – Use cut-away backing on fleece areas",
            heatTransfer: "Good – Cotton face bonds cleanly at standard temps",
            sublimation: "Not Recommended – Poly content too low for full sublimation"
        },

        packagingOptions: [
            {
                type: "X-Small",
                qtyPerBox: "24 pcs",
                boxWeight: "29 lbs",
                boxDims: '22" x 15" x 19"'
            },
            {
                type: "Small",
                qtyPerBox: "24 pcs",
                boxWeight: "32 lbs",
                boxDims: '22" x 15" x 19"'
            },
            {
                type: "Medium",
                qtyPerBox: "24 pcs",
                boxWeight: "33 lbs",
                boxDims: '22" x 15" x 20"'
            },
            {
                type: "Large",
                qtyPerBox: "24 pcs",
                boxWeight: "35 lbs",
                boxDims: '23" x 15" x 20"'
            },
            {
                type: "X-Large",
                qtyPerBox: "24 pcs",
                boxWeight: "37 lbs",
                boxDims: '23" x 15" x 20"'
            },
            {
                type: "2X-Large",
                qtyPerBox: "24 pcs",
                boxWeight: "40 lbs",
                boxDims: '23" x 15" x 21"'
            },
            {
                type: "3X-Large",
                qtyPerBox: "24 pcs",
                boxWeight: "43 lbs",
                boxDims: '24" x 15" x 21"'
            },
            {
                type: "4X-Large",
                qtyPerBox: "24 pcs",
                boxWeight: "46 lbs",
                boxDims: '24" x 15" x 21"'
            },
            {
                type: "5X-Large",
                qtyPerBox: "24 pcs",
                boxWeight: "49 lbs",
                boxDims: '24" x 15" x 21"'
            }
        ],

        additionalInfo: {
            paragraph: "The P280 is constructed from 298 GSM (8.8oz) 70/30 cotton-polyester fleece, delivering a substantial hand feel without unnecessary bulk. The cotton-dominant face provides a smooth, print-ready surface, while the poly content adds durability and reduces shrinkage across wash cycles. The hood is fully lined with matching self-fabric and finished with a heavy drawstring cord rather than cheap flat laces. Spandex-reinforced ribbing at the cuffs and waistband holds its shape through repeated wear and washing, and double-needle stitching runs throughout the garment for structural integrity at stress points. The front pouch pocket is reinforced at entry seams, and a tear-away label allows clean rebranding for private-label programs.",
            label: "Tear Away",
            colors: "XS-5XL in Black, Chocolate, Cream Beige, Dark Heather Charcoal, Gold Yellow, Heather Grey, Kelly Green, Light Pink, Maroon Burgundy, Natural, New Heather Charcoal, New Navy, Olive, PFD, Red, Royal, Sage, Sand, and White.",
            packing: "Sold per case",
            garmentSpecs: [
                { size: "XS", chest: '18"', bodyLength: '24"' },
                { size: "S", chest: '20"', bodyLength: '26"' },
                { size: "M", chest: '22"', bodyLength: '27"' },
                { size: "L", chest: '24"', bodyLength: '28"' },
                { size: "XL", chest: '26"', bodyLength: '29"' },
                { size: "2XL", chest: '28"', bodyLength: '30"' },
                { size: "3XL", chest: '30"', bodyLength: '31"' },
                { size: "4XL", chest: '31"', bodyLength: '32"' },
                { size: "5XL", chest: '32"', bodyLength: '33"' }
            ]
        }
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$21.60" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "ITY300",
    name: "Youth 8.8oz Pullover Hoodie",
    code: "ITY300",
    slug: "youth-pullover-hoodie",
    category: "Pullover Hoodies",
    group: "Apparel",
    material: "70% Cotton / 30% Polyester Fleece (8.8 oz / 298 GSM)",
    size: 'XS - 2XL',
    imprint: "N/A",
    price: 18.3,
    originalPrice: 18.3,
    image: "assets/assets/images/products/hoodies/ITY300/Y300-gold-yellow-01.webp",
    featureImage: "assets/assets/images/products/hoodies/ITY300/Y300-feature.webp",
    description: "Youth-sized 8.8oz blank pullover hoodie (style Y300) in 70/30 cotton-poly fleece. Sized for kids and built for school, team, and youth organization programs.",
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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/hoodies/ITY300/Y300-black-01.webp" },
        { name: "Fuchsia Hot Pink", hex: "#E91E8C", image: "assets/assets/images/products/hoodies/ITY300/Y300-fuchsia-hot-pink-01.webp" },
        { name: "Gold Yellow", hex: "#F5C518", image: "assets/assets/images/products/hoodies/ITY300/Y300-gold-yellow-01.webp" },
        { name: "Heather Charcoal", hex: "#5A5A5A", image: "assets/assets/images/products/hoodies/ITY300/Y300-heather-charcoal-01.webp" },
        { name: "Heather Grey", hex: "#B0B0B0", image: "assets/assets/images/products/hoodies/ITY300/Y300-heather-grey-01.webp" },
        { name: "Light Pink", hex: "#F4C7CE", image: "assets/assets/images/products/hoodies/ITY300/Y300-light-pink-01.webp" },
        { name: "Maroon Burgundy", hex: "#5A1A2B", image: "assets/assets/images/products/hoodies/ITY300/Y300-maroon-burgundy-01.webp" },
        { name: "Navy", hex: "#1B2A4A", image: "assets/assets/images/products/hoodies/ITY300/Y300-navy-01.webp" },
        { name: "New Navy", hex: "#1B2A4A", image: "assets/assets/images/products/hoodies/ITY300/Y300-new-navy-01.webp" },
        { name: "Olive", hex: "#5A6242", image: "assets/assets/images/products/hoodies/ITY300/Y300-olive-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/hoodies/ITY300/Y300-red-01.webp" },
        { name: "Royal", hex: "#1E3FBF", image: "assets/assets/images/products/hoodies/ITY300/Y300-royal-01.webp" },
        { name: "Sand", hex: "#D9C7A8", image: "assets/assets/images/products/hoodies/ITY300/Y300-sand-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/hoodies/ITY300/Y300-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/hoodies/ITY300/Y300-black-01.webp",
        "assets/assets/images/products/hoodies/ITY300/Y300-fuchsia-hot-pink-01.webp",
        "assets/assets/images/products/hoodies/ITY300/Y300-gold-yellow-01.webp",
        "assets/assets/images/products/hoodies/ITY300/Y300-heather-charcoal-01.webp",
        "assets/assets/images/products/hoodies/ITY300/Y300-heather-grey-01.webp",
        "assets/assets/images/products/hoodies/ITY300/Y300-light-pink-01.webp",
        "assets/assets/images/products/hoodies/ITY300/Y300-maroon-burgundy-01.webp",
        "assets/assets/images/products/hoodies/ITY300/Y300-navy-01.webp",
        "assets/assets/images/products/hoodies/ITY300/Y300-new-navy-01.webp",
        "assets/assets/images/products/hoodies/ITY300/Y300-olive-01.webp",
        "assets/assets/images/products/hoodies/ITY300/Y300-red-01.webp",
        "assets/assets/images/products/hoodies/ITY300/Y300-royal-01.webp",
        "assets/assets/images/products/hoodies/ITY300/Y300-sand-01.webp",
        "assets/assets/images/products/hoodies/ITY300/Y300-sand-02.webp",
        "assets/assets/images/products/hoodies/ITY300/Y300-white-01.webp"
    ],

    specs: {
        itemNo: "ITY300",
        styleNumber: "Y300",
        season: "Core",
        weight: "8.8 oz (298 GSM)",
        material: "70% Cotton, 30% Polyester Fleece",
        yarn: "Cotton-Dominant Face",
        sizes: "XS to 2XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "XS", chest: '13.5"', bodyLength: '17.5"' },
            { size: "S", chest: '15"', bodyLength: '18.5"' },
            { size: "M", chest: '16.5"', bodyLength: '20"' },
            { size: "L", chest: '18"', bodyLength: '22.5"' },
            { size: "XL", chest: '19.5"', bodyLength: '24"' },
            { size: "2XL", chest: '21"', bodyLength: '25.5"' }
        ],

        decoration: {
            screenPrint: "Excellent – Same setup as adult P280. Vibrant results",
            dtg: "Excellent – High cotton content. Sharp full-color prints",
            embroidery: "Good – Standard fleece backing. Left-chest and front center",
            heatTransfer: "Good – Cotton face bonds at standard press temps",
            sublimation: "Not Recommended – 70/30 blend insufficient for sublimation"
        },

        downloads: {
            specSheet: "threelayer.com/spec/Y300",
            productPhotos: "threelayer.com/photos/Y300",
            fullDetails: "threelayer.com/product/y300-youth-pullover-hoodies"
        },

        packagingOptions: [
            {
                type: "X-Small",
                qtyPerBox: "24 pcs",
                boxWeight: "17 lbs",
                boxDims: '22" x 15" x 11"'
            },
            {
                type: "Small",
                qtyPerBox: "24 pcs",
                boxWeight: "19 lbs",
                boxDims: '22" x 15" x 11"'
            },
            {
                type: "Medium",
                qtyPerBox: "24 pcs",
                boxWeight: "21 lbs",
                boxDims: '24" x 16" x 12"'
            },
            {
                type: "Large",
                qtyPerBox: "24 pcs",
                boxWeight: "23 lbs",
                boxDims: '24" x 16" x 12"'
            },
            {
                type: "X-Large",
                qtyPerBox: "24 pcs",
                boxWeight: "26 lbs",
                boxDims: '24" x 16" x 14"'
            },
            {
                type: "2X-Large",
                qtyPerBox: "24 pcs",
                boxWeight: "29 lbs",
                boxDims: '24" x 16" x 15"'
            }
        ],

        additionalInfo: {
            paragraph: "The Y300 is built from 298 GSM (8.8oz) 70/30 cotton-polyester fleece (the same proven fabric as the adult P280) graded down to youth proportions. The cotton-dominant face provides a smooth surface that takes ink and thread with consistency, and the poly content adds wash-after-wash durability that is critical for youth garments seeing heavy use. The hood is a two-ply construction for a clean, structured look without a separate lining. The front pouch pocket includes a headset cord opening, a detail that differentiates this from generic youth blanks. Spandex-reinforced ribbing at cuffs and waistband maintains shape over time, and the tear-away label allows clean rebranding for school stores, team shops, and private-label youth programs.",
            label: "Tear Away",
            colors: "XS-XL available in Black, Heather Charcoal, Fuchsia/Hot Pink, Gold/Yellow, Heather Grey, Maroon Burgundy, Navy Blue, Olive, Light Pink, Red, Royal, Sand, and White.",
            packing: "2 dozen per case",
            garmentSpecs: [
                { size: "XS", chest: '13½"', bodyLength: '17½"' },
                { size: "S", chest: '15"', bodyLength: '18½"' },
                { size: "M", chest: '16½"', bodyLength: '20"' },
                { size: "L", chest: '18"', bodyLength: '22½"' },
                { size: "XL", chest: '19½"', bodyLength: '24"' },
                { size: "2XL", chest: '21"', bodyLength: '25½"' }
            ]
        }
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$18.3" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 }
        ]
    }
},
{
    id: "ITCR280",
    name: "Midweight 8.8oz Crewneck Sweatshirt",
    code: "ITCR280",
    slug: "midweight-crewneck-sweatshirt",
    category: "Crewneck Sweatshirts",
    group: "Apparel",
    material: "70% Cotton / 30% Polyester Fleece (8.8 oz / 298 GSM)",
    size: 'XS - 5XL',
    imprint: "N/A",
    price: 18.3,
    originalPrice: 18.3,
    image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-chocolate-01.webp",
    featureImage: "assets/assets/images/products/sweatshirts/ITCR280/CR280-feature.webp",
    description: "Midweight 8.8oz blank crewneck sweatshirt (style CR280) in 70/30 cotton-poly fleece. Classic crewneck silhouette ready for screen printing and embroidery.",
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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-black-01.webp" },
        { name: "Chocolate", hex: "#3B2417", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-chocolate-01.webp" },
        { name: "Cream Beige", hex: "#EFE4D0", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-cream-beige-01.webp" },
        { name: "Fuchsia Hot Pink", hex: "#E91E8C", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-fuchsia-hot-pink-01.webp" },
        { name: "Heather Grey", hex: "#B0B0B0", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-heather-grey-01.webp" },
        { name: "Kelly Green", hex: "#1B8A4C", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-kelly-green-01.webp" },
        { name: "Light Pink", hex: "#F4C7CE", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-light-pink-01.webp" },
        { name: "Maroon Burgundy", hex: "#5A1A2B", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-maroon-burgundy-01.webp" },
        { name: "Natural", hex: "#EFE9D8", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-natural-01.webp" },
        { name: "New Heather Charcoal", hex: "#5A5A5A", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-new-heather-charcoal-01.webp" },
        { name: "New Navy", hex: "#1B2A4A", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-new-navy-01.webp" },
        { name: "Olive", hex: "#5A6242", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-olive-01.webp" },
        { name: "PFD", hex: "#F5F0E6", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-pfd-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-red-01.webp" },
        { name: "Royal", hex: "#1E3FBF", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-royal-01.webp" },
        { name: "Sage", hex: "#A9B79A", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-sage-01.webp" },
        { name: "Sand", hex: "#D9C7A8", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-sand-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/sweatshirts/ITCR280/CR280-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-black-01.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-chocolate-01.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-cream-beige-01.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-fuchsia-hot-pink-01.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-heather-grey-01.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-kelly-green-01.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-light-pink-01.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-maroon-burgundy-01.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-natural-01.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-natural-02.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-new-heather-charcoal-01.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-new-navy-01.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-olive-01.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-pfd-01.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-red-01.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-royal-01.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-sage-01.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-sand-01.webp",
        "assets/assets/images/products/sweatshirts/ITCR280/CR280-white-01.webp"
    ],

    specs: {
        itemNo: "ITCR280",
        styleNumber: "CR280",
        season: "Core",
        weight: "8.8 oz (298 GSM)",
        material: "70% Cotton, 30% Polyester Fleece",
        yarn: "Cotton-Dominant Face",
        sizes: "XS to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "XS", chest: '18"', bodyLength: '26"' },
            { size: "S", chest: '20"', bodyLength: '27"' },
            { size: "M", chest: '22"', bodyLength: '28"' },
            { size: "L", chest: '24"', bodyLength: '29"' },
            { size: "XL", chest: '26"', bodyLength: '30"' },
            { size: "2XL", chest: '28"', bodyLength: '31"' },
            { size: "3XL", chest: '30"', bodyLength: '32"' },
            { size: "4XL", chest: '32"', bodyLength: '33"' },
            { size: "5XL", chest: '34"', bodyLength: '34"' }
        ],

        decoration: {
            screenPrint: "Excellent – Dense fleece face holds plastisol and water-based with sharp detail",
            dtg: "Excellent – Cotton-dominant blend absorbs ink evenly. Minimal dye migration",
            embroidery: "Excellent – 298 GSM weight supports dense stitch counts without stabilizer issues",
            heatTransfer: "Excellent – Fleece surface bonds well with HTV and printed transfers",
            sublimation: "Limited – Light colors only. 70/30 cotton-poly mutes vibrancy"
        },

        downloads: {
            specSheet: "threelayer.com/spec/CR280",
            productPhotos: "threelayer.com/photos/CR280",
            fullDetails: "threelayer.com/product/cr280-midweight-crewneck-sweatshirt"
        },

        packagingOptions: [
            { type: "X-Small", qtyPerBox: "24 pcs", boxWeight: "23 lbs", boxDims: '21" x 14" x 14"' },
            { type: "Small", qtyPerBox: "24 pcs", boxWeight: "25 lbs", boxDims: '21" x 14" x 14"' },
            { type: "Medium", qtyPerBox: "24 pcs", boxWeight: "27 lbs", boxDims: '23" x 15" x 15"' },
            { type: "Large", qtyPerBox: "24 pcs", boxWeight: "30 lbs", boxDims: '23" x 15" x 15"' },
            { type: "X-Large", qtyPerBox: "24 pcs", boxWeight: "32 lbs", boxDims: '23" x 15" x 15"' },
            { type: "2X-Large", qtyPerBox: "24 pcs", boxWeight: "34 lbs", boxDims: '24" x 15" x 16"' },
            { type: "3X-Large", qtyPerBox: "24 pcs", boxWeight: "36 lbs", boxDims: '24" x 15" x 16"' },
            { type: "4X-Large", qtyPerBox: "24 pcs", boxWeight: "39 lbs", boxDims: '24" x 16" x 17"' },
            { type: "5X-Large", qtyPerBox: "24 pcs", boxWeight: "42 lbs", boxDims: '24" x 16" x 17"' }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$18.3 " },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "IT7770",
    name: "Fleece Short 8.8 oz",
    code: "IT7770",
    slug: "fleece-short",
    category: "Fleece Shorts",
    group: "Apparel",
    material: "70% Cotton / 30% Polyester Fleece (8.8 oz / 280 GSM)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 18.3,
    originalPrice: 18.3,
    image: "assets/assets/images/products/shorts/IT7770/7770-black-01.webp",
    featureImage: "assets/assets/images/products/shorts/IT7770/7770-feature.webp",
    description: "Midweight 8.8oz fleece short (style 7770) in 70/30 cotton-poly blend. Men's sizing with a relaxed fit, elasticated waistband, and durable cotton face for printing and embroidery.",
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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/shorts/IT7770/7770-black-01.webp" },
        { name: "Heather Charcoal", hex: "#5A5A5A", image: "assets/assets/images/products/shorts/IT7770/7770-heather-charcoal-01.webp" },
        { name: "Gold Yellow", hex: "#F5C518", image: "assets/assets/images/products/shorts/IT7770/7770-gold-yellow-01.webp" },
        { name: "Heather Grey", hex: "#B0B0B0", image: "assets/assets/images/products/shorts/IT7770/7770-heather-grey-01.webp" },
        { name: "Kelly Green", hex: "#1B8A4C", image: "assets/assets/images/products/shorts/IT7770/7770-kelly-green-01.webp" },
        { name: "Maroon Burgundy", hex: "#5A1A2B", image: "assets/assets/images/products/shorts/IT7770/7770-maroon-burgundy-01.webp" },
        { name: "Navy Blue", hex: "#1B2A4A", image: "assets/assets/images/products/shorts/IT7770/7770-navy-01.webp" },
        { name: "Olive", hex: "#5A6242", image: "assets/assets/images/products/shorts/IT7770/7770-olive-01.webp" },
        { name: "Orange", hex: "#F26522", image: "assets/assets/images/products/shorts/IT7770/7770-orange-01.webp" },
        { name: "Light Pink", hex: "#F4C7CE", image: "assets/assets/images/products/shorts/IT7770/7770-light-pink-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/shorts/IT7770/7770-red-01.webp" },
        { name: "Royal", hex: "#1E3FBF", image: "assets/assets/images/products/shorts/IT7770/7770-royal-01.webp" },
        { name: "Sand", hex: "#D9C7A8", image: "assets/assets/images/products/shorts/IT7770/7770-sand-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/shorts/IT7770/7770-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/shorts/IT7770/7770-black-01.webp",
        "assets/assets/images/products/shorts/IT7770/7770-heather-charcoal-01.webp",
        "assets/assets/images/products/shorts/IT7770/7770-gold-yellow-01.webp",
        "assets/assets/images/products/shorts/IT7770/7770-heather-grey-01.webp",
        "assets/assets/images/products/shorts/IT7770/7770-kelly-green-01.webp",
        "assets/assets/images/products/shorts/IT7770/7770-maroon-burgundy-01.webp",
        "assets/assets/images/products/shorts/IT7770/7770-navy-01.webp",
        "assets/assets/images/products/shorts/IT7770/7770-olive-01.webp",
        "assets/assets/images/products/shorts/IT7770/7770-orange-01.webp",
        "assets/assets/images/products/shorts/IT7770/7770-light-pink-01.webp",
        "assets/assets/images/products/shorts/IT7770/7770-red-01.webp",
        "assets/assets/images/products/shorts/IT7770/7770-royal-01.webp",
        "assets/assets/images/products/shorts/IT7770/7770-sand-01.webp",
        "assets/assets/images/products/shorts/IT7770/7770-white-01.webp"
    ],

    specs: {
        itemNo: "IT7770",
        styleNumber: "7770",
        season: "Core",
        weight: "8.8 oz (280 GSM)",
        material: "70% Cotton, 30% Polyester Fleece",
        yarn: "Cotton-Dominant Face",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "S", waistRelaxed: '15"', waistExtended: '17"', waistbandHeight: '2"' },
            { size: "M", waistRelaxed: '16"', waistExtended: '18"', waistbandHeight: '2"' },
            { size: "L", waistRelaxed: '17"', waistExtended: '19"', waistbandHeight: '2"' },
            { size: "XL", waistRelaxed: '18"', waistExtended: '20"', waistbandHeight: '2"' },
            { size: "2XL", waistRelaxed: '19"', waistExtended: '21"', waistbandHeight: '2"' },
            { size: "3XL", waistRelaxed: '20"', waistExtended: '22"', waistbandHeight: '2"' },
            { size: "4XL", waistRelaxed: '21"', waistExtended: '23"', waistbandHeight: '2"' },
            { size: "5XL", waistRelaxed: '22"', waistExtended: '24"', waistbandHeight: '2"' }
        ],

        packagingOptions: [
            { type: "X-Small", qtyPerBox: "24 pcs", boxWeight: "23 lbs", boxDims: '22" x 15" x 13"' },
            { type: "Small", qtyPerBox: "24 pcs", boxWeight: "25 lbs", boxDims: '22" x 15" x 13"' },
            { type: "Medium", qtyPerBox: "24 pcs", boxWeight: "27 lbs", boxDims: '22" x 15" x 13"' },
            { type: "Large", qtyPerBox: "24 pcs", boxWeight: "30 lbs", boxDims: '22" x 15" x 13"' },
            { type: "X-Large", qtyPerBox: "24 pcs", boxWeight: "32 lbs", boxDims: '24" x 15" x 15"' },
            { type: "2X-Large", qtyPerBox: "24 pcs", boxWeight: "34 lbs", boxDims: '24" x 15" x 15"' },
            { type: "3X-Large", qtyPerBox: "24 pcs", boxWeight: "36 lbs", boxDims: '24" x 15" x 15"' }
        ],

        additionalInfo: {
            paragraph: "Midweight 8.8 oz fleece short in a 70/30 cotton-poly blend. Men's sizing with a relaxed fit, elasticated waistband with extended sizing, and a durable cotton face ideal for screen printing and embroidery.",
            label: "Tear Away",
            colors: "S-5XL in Black, Heather Charcoal, Gold/Yellow, Heather Grey, Kelly Green, Maroon Burgundy, Navy Blue, Olive, Orange, Light Pink, Red, Royal, Sand and White.",
            packing: "2 dozen per case",
            garmentSpecs: [
                { size: "S", waistRelaxed: '15"', waistExtended: '17"', waistbandHeight: '2"' },
                { size: "M", waistRelaxed: '16"', waistExtended: '18"', waistbandHeight: '2"' },
                { size: "L", waistRelaxed: '17"', waistExtended: '19"', waistbandHeight: '2"' },
                { size: "XL", waistRelaxed: '18"', waistExtended: '20"', waistbandHeight: '2"' },
                { size: "2XL", waistRelaxed: '19"', waistExtended: '21"', waistbandHeight: '2"' },
                { size: "3XL", waistRelaxed: '20"', waistExtended: '22"', waistbandHeight: '2"' },
                { size: "4XL", waistRelaxed: '21"', waistExtended: '23"', waistbandHeight: '2"' },
                { size: "5XL", waistRelaxed: '22"', waistExtended: '24"', waistbandHeight: '2"' }
            ]
        }
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$18.30" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "IT600MR",
    name: "Russel Athletic 100% Ringspun Cotton T-Shirt 6.0 Oz",
    code: "IT600MR",
    slug: "russel-athletic-ringspun-cotton-tshirt",
    category: "T-Shirts",
    group: "Apparel",

    material: "100% Ringspun Cotton (6.0 oz)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 4.4,
    originalPrice: 4.4,
    image: "assets/assets/images/products/T-shirts/IT600MR/600MR-black-01.webp",
    featureImage: "assets/assets/images/products/T-shirts/IT600MR/600MR-feature.webp",
    description: "Russel Athletic 100% ringspun cotton t-shirt (style 600MR) in 6.0 oz. A heavier-weight blank with a smooth print surface, built for screen printing, DTG, and embroidery.",
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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/T-shirts/IT600MR/600MR-black-01.webp" },
        { name: "Heather Grey", hex: "#B0B0B0", image: "assets/assets/images/products/T-shirts/IT600MR/600MR-heathergray-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/T-shirts/IT600MR/600MR-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/T-shirts/IT600MR/600MR-white-01.webp",
        "assets/assets/images/products/T-shirts/IT600MR/600MR-heathergray-01.webp",
        "assets/assets/images/products/T-shirts/IT600MR/600MR-black-01.webp"
    ],

    specs: {
        itemNo: "IT600MR",
        styleNumber: "600MR",
        season: "Core",
        weight: "6.0 oz",
        material: "100% Ringspun Cotton",
        yarn: "Ringspun Cotton",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "S", chest: '18"', bodyLength: '28"' },
            { size: "M", chest: '20"', bodyLength: '29"' },
            { size: "L", chest: '22"', bodyLength: '30"' },
            { size: "XL", chest: '24"', bodyLength: '31"' },
            { size: "2XL", chest: '26"', bodyLength: '32"' },
            { size: "3XL", chest: '28"', bodyLength: '33"' },
            { size: "4XL", chest: '30"', bodyLength: '34"' },
            { size: "5XL", chest: '32"', bodyLength: '35"' }
        ],

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$4.40" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "IT1001",
    name: "100% Cotton 4.5 oz T-Shirt (30 Single Ringspun)",
    code: "IT1001",
    slug: "cotton-ringspun-tshirt",
    category: "T-Shirts",
    group: "Apparel",

    material: "100% Cotton (4.5 oz, 30-Singles Ringspun)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 4.44,
    originalPrice: 4.44,
    image: "assets/assets/images/products/T-shirts/IT1001/1001-heathergray-01.webp",
    featureImage: "assets/assets/images/products/T-shirts/IT1001/1001-feature.webp",
    description: "100% cotton 4.5 oz t-shirt using only 30 single ringspun cotton for a great feel and superior print face. Ideal for screen printing and DTG.",
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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/T-shirts/IT1001/1001-black-01.webp" },
        { name: "Heather Grey", hex: "#B0B0B0", image: "assets/assets/images/products/T-shirts/IT1001/1001-heathergray-01.webp" },
        { name: "Navy", hex: "#1B2A4A", image: "assets/assets/images/products/T-shirts/IT1001/1001-navy-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/T-shirts/IT1001/1001-red-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/T-shirts/IT1001/1001-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/T-shirts/IT1001/1001-white-01.webp",
        "assets/assets/images/products/T-shirts/IT1001/1001-black-01.webp",
        "assets/assets/images/products/T-shirts/IT1001/1001-heathergray-01.webp",
        "assets/assets/images/products/T-shirts/IT1001/1001-navy-01.webp",
        "assets/assets/images/products/T-shirts/IT1001/1001-red-01.webp"
    ],

    specs: {
        itemNo: "IT1001",
        styleNumber: "1001",
        season: "Core",
        weight: "4.5 oz (153 GSM)",
        material: "100% Cotton",
        yarn: "30-Singles Ringspun Cotton",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "S", chest: '18"', bodyLength: '28"' },
            { size: "M", chest: '20"', bodyLength: '29"' },
            { size: "L", chest: '22"', bodyLength: '30"' },
            { size: "XL", chest: '24"', bodyLength: '31"' },
            { size: "2XL", chest: '26"', bodyLength: '32"' },
            { size: "3XL", chest: '28"', bodyLength: '33"' },
            { size: "4XL", chest: '30"', bodyLength: '34"' },
            { size: "5XL", chest: '32"', bodyLength: '35"' }
        ],

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$4.44" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "IT3903R",
    name: "Fruit of the Loom HD Cotton T-Shirt - 3930R",
    code: "IT3903R",
    slug: "fruit-of-the-loom-hd-cotton-tshirt",
    category: "T-Shirts",
    group: "Apparel",

    material: "100% Cotton (HD Cotton)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 4.4,
    originalPrice: 4.4,
    image: "assets/assets/images/products/T-shirts/IT3930R/3930R-burgundy-01.webp",
    featureImage: "assets/assets/images/products/T-shirts/IT3930R/3930R-feature.webp",
    description: "Fruit of the Loom HD Cotton t-shirt (style 3930R). A durable, high-density cotton blank with a smooth print surface built for screen printing, DTG, and embroidery.",
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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/T-shirts/IT3930R/3930R-black-01.webp" },
        { name: "Burgundy", hex: "#800020", image: "assets/assets/images/products/T-shirts/IT3930R/3930R-burgundy-01.webp" },
        { name: "Charcoal", hex: "#36454F", image: "assets/assets/images/products/T-shirts/IT3930R/3930R-charcoal-01.webp" },
        { name: "Heather Grey", hex: "#B0B0B0", image: "assets/assets/images/products/T-shirts/IT3930R/3930R-heathergray-01.webp" }
    ],

    images: [
        "assets/assets/images/products/T-shirts/IT3930R/3930R-black-01.webp",
        "assets/assets/images/products/T-shirts/IT3930R/3930R-burgundy-01.webp",
        "assets/assets/images/products/T-shirts/IT3930R/3930R-charcoal-01.webp",
        "assets/assets/images/products/T-shirts/IT3930R/3930R-heathergray-01.webp"
    ],

    specs: {
        itemNo: "IT3903R",
        styleNumber: "3930R",
        season: "Core",
        weight: "5.0 oz (170 GSM)",
        material: "100% Cotton",
        yarn: "HD Cotton",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "S", chest: '18"', bodyLength: '28"' },
            { size: "M", chest: '20"', bodyLength: '29"' },
            { size: "L", chest: '22"', bodyLength: '30"' },
            { size: "XL", chest: '24"', bodyLength: '31"' },
            { size: "2XL", chest: '26"', bodyLength: '32"' },
            { size: "3XL", chest: '28"', bodyLength: '33"' },
            { size: "4XL", chest: '30"', bodyLength: '34"' },
            { size: "5XL", chest: '32"', bodyLength: '35"' }
        ],

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$4.40" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "IT8801",
    name: "Fleece Joggers Pant 8.8 oz",
    code: "IT8801",
    slug: "fleece-jogger-pant",
    category: "Joggers/Sweatpants",
    group: "Apparel",
    material: "70% Cotton / 30% Polyester Fleece (8.8 oz / 290 GSM)",
    size: 'XS - 5XL',
    imprint: "N/A",
    price: 19.4,
    originalPrice: 19.4,
    image: "assets/assets/images/products/pants/IT8801/8801-orange-01.webp",
    featureImage: "assets/assets/images/products/pants/IT8801/8801-feature.webp",
    description: "Midweight 8.8oz fleece jogger pant (style 8801) in 70/30 cotton-poly blend. Unisex sizing with a tapered leg, cuffed rib bottoms, and an elasticated waistband with drawstring for adjustable fit.",
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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/pants/IT8801/8801-black-01.webp" },
        { name: "Chocolate", hex: "#3B2417", image: "assets/assets/images/products/pants/IT8801/8801-chocolate-01.webp" },
        { name: "Cream Beige", hex: "#EFE4D0", image: "assets/assets/images/products/pants/IT8801/8801-cream-beige-01.webp" },
        { name: "Gold Yellow", hex: "#F5C518", image: "assets/assets/images/products/pants/IT8801/8801-gold-yellow-01.webp" },
        { name: "Heather Charcoal", hex: "#5A5A5A", image: "assets/assets/images/products/pants/IT8801/8801-heather-charcoal-01.webp" },
        { name: "Heather Grey", hex: "#B0B0B0", image: "assets/assets/images/products/pants/IT8801/8801-heather-grey-01.webp" },
        { name: "Kelly Green", hex: "#1B8A4C", image: "assets/assets/images/products/pants/IT8801/8801-kelly-green-01.webp" },
        { name: "Light Pink", hex: "#F4C7CE", image: "assets/assets/images/products/pants/IT8801/8801-light-pink-01.webp" },
        { name: "Maroon Burgundy", hex: "#5A1A2B", image: "assets/assets/images/products/pants/IT8801/8801-maroon-burgundy-01.webp" },
        { name: "Natural", hex: "#EFE9D8", image: "assets/assets/images/products/pants/IT8801/8801-natural-01.webp" },
        { name: "Navy", hex: "#1B2A4A", image: "assets/assets/images/products/pants/IT8801/8801-navy-01.webp" },
        { name: "New Navy", hex: "#1B2A4A", image: "assets/assets/images/products/pants/IT8801/8801-new-navy-01.webp" },
        { name: "Olive", hex: "#5A6242", image: "assets/assets/images/products/pants/IT8801/8801-olive-01.webp" },
        { name: "Orange", hex: "#F26522", image: "assets/assets/images/products/pants/IT8801/8801-orange-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/pants/IT8801/8801-red-01.webp" },
        { name: "Royal", hex: "#1E3FBF", image: "assets/assets/images/products/pants/IT8801/8801-royal-01.webp" },
        { name: "Sage", hex: "#A9B79A", image: "assets/assets/images/products/pants/IT8801/8801-sage-01.webp" },
        { name: "Sand", hex: "#D9C7A8", image: "assets/assets/images/products/pants/IT8801/8801-sand-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/pants/IT8801/8801-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/pants/IT8801/8801-black-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-chocolate-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-cream-beige-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-gold-yellow-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-heather-charcoal-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-heather-grey-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-kelly-green-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-light-pink-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-maroon-burgundy-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-natural-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-navy-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-new-navy-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-olive-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-orange-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-red-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-royal-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-sage-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-sand-01.webp",
        "assets/assets/images/products/pants/IT8801/8801-white-01.webp"
    ],

    specs: {
        itemNo: "IT8801",
        styleNumber: "8801",
        season: "Core",
        weight: "8.8 oz (290 GSM)",
        material: "70% Cotton, 30% Polyester Fleece",
        yarn: "Cotton-Dominant Face",
        sizes: "XS to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "XS", waistRelaxed: '14"', waistExtended: '16"', waistbandHeight: '2"' },
            { size: "S", waistRelaxed: '15"', waistExtended: '17"', waistbandHeight: '2"' },
            { size: "M", waistRelaxed: '16"', waistExtended: '18"', waistbandHeight: '2"' },
            { size: "L", waistRelaxed: '17"', waistExtended: '19"', waistbandHeight: '2"' },
            { size: "XL", waistRelaxed: '18"', waistExtended: '20"', waistbandHeight: '2"' },
            { size: "2XL", waistRelaxed: '19"', waistExtended: '21"', waistbandHeight: '2"' },
            { size: "3XL", waistRelaxed: '20"', waistExtended: '22"', waistbandHeight: '2"' },
            { size: "4XL", waistRelaxed: '21"', waistExtended: '23"', waistbandHeight: '2"' },
            { size: "5XL", waistRelaxed: '22"', waistExtended: '24"', waistbandHeight: '2"' }
        ],

        packagingOptions: [
            { type: "X-Small", qtyPerBox: "24 pcs", boxWeight: "23 lbs", boxDims: '23" x 13" x 17"' },
            { type: "Small", qtyPerBox: "24 pcs", boxWeight: "25 lbs", boxDims: '23" x 13" x 17"' },
            { type: "Medium", qtyPerBox: "24 pcs", boxWeight: "27 lbs", boxDims: '23" x 13" x 17"' },
            { type: "Large", qtyPerBox: "24 pcs", boxWeight: "28 lbs", boxDims: '24" x 15" x 18"' },
            { type: "X-Large", qtyPerBox: "24 pcs", boxWeight: "30 lbs", boxDims: '24" x 15" x 18"' },
            { type: "2X-Large", qtyPerBox: "24 pcs", boxWeight: "32 lbs", boxDims: '24" x 15" x 18"' },
            { type: "3X-Large", qtyPerBox: "24 pcs", boxWeight: "34 lbs", boxDims: '24" x 15" x 18"' },
            { type: "4X-Large", qtyPerBox: "24 pcs", boxWeight: "38 lbs", boxDims: '24" x 15" x 18"' }
        ],

        additionalInfo: {
            paragraph: "Midweight 8.8 oz fleece jogger pant in a 70/30 cotton-poly blend. Unisex sizing with a tapered leg, cuffed rib bottoms, and an elasticated waistband with drawstring for adjustable fit.",
            label: "Tear Away",
            colors: "XS-5XL in Black, Heather Grey, New Heather Charcoal, Gold/Yellow, Maroon Burgundy, Navy Blue, Olive, Kelly Green, Light Pink, Red, Royal, Sand, Sage, and White.",
            packing: "2 dozen per case",
            garmentSpecs: [
                { size: "XS", waistRelaxed: '14"', waistExtended: '16"', waistbandHeight: '2"' },
                { size: "S", waistRelaxed: '15"', waistExtended: '17"', waistbandHeight: '2"' },
                { size: "M", waistRelaxed: '16"', waistExtended: '18"', waistbandHeight: '2"' },
                { size: "L", waistRelaxed: '17"', waistExtended: '19"', waistbandHeight: '2"' },
                { size: "XL", waistRelaxed: '18"', waistExtended: '20"', waistbandHeight: '2"' },
                { size: "2XL", waistRelaxed: '19"', waistExtended: '21"', waistbandHeight: '2"' },
                { size: "3XL", waistRelaxed: '20"', waistExtended: '22"', waistbandHeight: '2"' },
                { size: "4XL", waistRelaxed: '21"', waistExtended: '23"', waistbandHeight: '2"' },
                { size: "5XL", waistRelaxed: '22"', waistExtended: '24"', waistbandHeight: '2"' }
            ]
        }
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$19.40" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "ITPNTS",
    name: "Sweatpants 7.7 oz 50/50 Cotton/Poly",
    code: "ITPNTS",
    group: "Apparel",
    slug: "sweatpants-50-50",
    category: "Joggers/Sweatpants",
    material: "50% Cotton / 50% Polyester (7.7 oz)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 11.0,
    originalPrice: 11.0,
    image: "assets/assets/images/products/pants/ITPNTS/zjswpnts-navy-01.webp",
    featureImage: "assets/assets/images/products/pants/ITPNTS/zjswpnts-feature.webp",
    description: "Sweatpants (style ZJSWPNTS) in a 50/50 cotton-poly blend (7.7 oz). Without drawstrings and without side/back pockets. A clean, classic silhouette ready for screen printing and embroidery.",
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
        { name: "Navy", hex: "#1B2A4A", image: "assets/assets/images/products/pants/ITPNTS/zjswpnts-navy-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/pants/ITPNTS/zjswpnts-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/pants/ITPNTS/zjswpnts-navy-01.webp",
        "assets/assets/images/products/pants/ITPNTS/zjswpnts-white-01.webp"
    ],

    specs: {
        itemNo: "ITPNTS",
        styleNumber: "ZJSWPNTS",
        season: "Core",
        weight: "7.7 oz",
        material: "50% Cotton, 50% Polyester",
        yarn: "Cotton-Poly Blend",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "S", waist: '28-30"', inseam: '30"' },
            { size: "M", waist: '31-33"', inseam: '31"' },
            { size: "L", waist: '34-36"', inseam: '32"' },
            { size: "XL", waist: '37-39"', inseam: '33"' },
            { size: "2XL", waist: '40-42"', inseam: '33"' },
            { size: "3XL", waist: '43-45"', inseam: '34"' },
            { size: "4XL", waist: '46-48"', inseam: '34"' },
            { size: "5XL", waist: '49-51"', inseam: '34"' }
        ],

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$11.00" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "ITSCNSS",
    name: "Crewneck Sweatshirt 7.7 oz 50/50",
    code: "ITSCNSS",
    slug: "crewneck-sweatshirt",
    category: "Crewneck Sweatshirts",
    group: "Apparel",
    material: "50% Cotton / 50% Polyester (7.7 oz)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 11.1,
    originalPrice: 11.1,
    image: "assets/assets/images/products/sweatshirts/ITSCNSS/ITSCNSS-navyblue-01.webp",
    featureImage: "assets/assets/images/products/sweatshirts/ITSCNSS/ITSCNSS-feature.webp",
    description: "Crewneck sweatshirt in a 50/50 cotton-poly blend (7.7 oz). A classic silhouette with a smooth print surface, ready for screen printing, embroidery, and everyday wear.",
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
        { name: "Navy Blue", hex: "#1B2A4A", image: "assets/assets/images/products/sweatshirts/ITSCNSS/ITSCNSS-navyblue-01.webp" }
    ],

    images: [
        "assets/assets/images/products/sweatshirts/ITSCNSS/ITSCNSS-navyblue-01.webp"
    ],

    specs: {
        itemNo: "ITSCNSS",
        styleNumber: "ZJLSCNSS",
        season: "Core",
        weight: "7.7 oz",
        material: "50% Cotton, 50% Polyester",
        yarn: "Cotton-Poly Blend",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "S", chest: '20"', bodyLength: '26"' },
            { size: "M", chest: '22"', bodyLength: '27"' },
            { size: "L", chest: '24"', bodyLength: '28"' },
            { size: "XL", chest: '26"', bodyLength: '29"' },
            { size: "2XL", chest: '28"', bodyLength: '30"' },
            { size: "3XL", chest: '30"', bodyLength: '31"' },
            { size: "4XL", chest: '32"', bodyLength: '32"' },
            { size: "5XL", chest: '34"', bodyLength: '33"' }
        ],

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$11.10" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "IA1000",
    name: "Signature Blend Tee",
    code: "IA1000",
    slug: "signature-blend-tee",
    category: "T-Shirts",
    group: "Apparel",
    material: "60% Ring-spun Combed Cotton / 40% Polyester (4.3 oz / 145 GSM)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 5.73,
    originalPrice: 5.73,
    image: "assets/assets/images/products/T-shirts/IA1000/IA1000-royal_01.webp",
    featureImage: "assets/assets/images/products/T-shirts/IA1000/IA1000-feature.webp",
    description: "The Signature Blend Tee offers a perfect blend of comfort and durability. Crafted from premium 60% ring-spun combed cotton and 40% polyester fabric, this 4.3 oz (145 GSM) tee is ideal for everyday wear and customization. Its unisex regular fit ensures suitability for all body types, making it a versatile addition to any wardrobe.",
    popular: false,

    // ✅ OPTION A: STANDOUT FLAGS
    standout: true,
    standoutBadge: "PREMIUM APPAREL",
    standoutAccent: "#D4AF37",

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
        { name: "Oatmeal Heather", hex: "#E8DCC4", image: "assets/assets/images/products/T-shirts/IA1000/IA1000-oatmeal_heather_01.webp" },
        { name: "Sports Grey", hex: "#B0B0B0", image: "assets/assets/images/products/T-shirts/IA1000/IA1000-sports_grey_01.webp" },
        { name: "Charcoal Heather", hex: "#4A4A4A", image: "assets/assets/images/products/T-shirts/IA1000/IA1000-charcoal_heather_01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/T-shirts/IA1000/IA1000-red_01.webp" },
        { name: "Royal", hex: "#1E3FBF", image: "assets/assets/images/products/T-shirts/IA1000/IA1000-royal_01.webp" }
    ],

    images: [
        "assets/assets/images/products/T-shirts/IA1000/IA1000-royal_01.webp",
        "assets/assets/images/products/T-shirts/IA1000/IA1000-oatmeal_heather_01.webp",
        "assets/assets/images/products/T-shirts/IA1000/IA1000-sports_grey_01.webp",
        "assets/assets/images/products/T-shirts/IA1000/IA1000-charcoal_heather_01.webp",
        "assets/assets/images/products/T-shirts/IA1000/IA1000-red_01.webp"
    ],

    specs: {
        itemNo: "IA1000",
        styleNumber: "1000",
        season: "Core",
        weight: "4.3 oz (145 GSM)",
        material: "60% Cotton, 40% Polyester",
        yarn: "Ring-spun Combed Cotton",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",


        // ✅ ADDITIONAL INFO TAB KE LIYE SIZE CHART
        sizeChart: [
            { size: "S", chest: '18"', bodyLength: '28"' },
            { size: "M", chest: '20"', bodyLength: '29"' },
            { size: "L", chest: '22"', bodyLength: '30"' },
            { size: "XL", chest: '24"', bodyLength: '31"' },
            { size: "2XL", chest: '26"', bodyLength: '32"' },
            { size: "3XL", chest: '28"', bodyLength: '33"' },
            { size: "4XL", chest: '30"', bodyLength: '34"' },
            { size: "5XL", chest: '32"', bodyLength: '35"' }
        ],

        fabricNotes: {
            standard: "100% Cotton – All colors except Heather Gray, Charcoal Heather, and Sport Grey.",
            heathers: "Heather Gray & Charcoal Heather: 60% Cotton / 40% Polyester.",
            sportGrey: "Sport Grey: 90% Cotton / 10% Viscose.",
            construction: "Tubular"
        },

        // ✅ PACKAGING INFO
        packagingOptions: [
            {
                type: "Small",
                qtyPerBox: "72 pcs",
                boxWeight: "23.78 lbs",
                boxDims: '19.5" x 15" x 9"'
            },
            {
                type: "Medium",
                qtyPerBox: "72 pcs",
                boxWeight: "24.50 lbs",
                boxDims: '20.5" x 15.5" x 9"'
            },
            {
                type: "Large",
                qtyPerBox: "72 pcs",
                boxWeight: "29.40 lbs",
                boxDims: '22.5" x 16" x 9"'
            },
            {
                type: "X-Large",
                qtyPerBox: "72 pcs",
                boxWeight: "33.12 lbs",
                boxDims: '23.5" x 16.5" x 9"'
            },
            {
                type: "2X-Large",
                qtyPerBox: "72 pcs",
                boxWeight: "36.10 lbs",
                boxDims: '25" x 17.5" x 9"'
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - L", price: "$5.73" },
            upsizeCharges: [
                { size: "XL", charge: "$0.60" },
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.80" },
                { size: "4XL", charge: "$4.09" },
                { size: "5XL", charge: "$6.62" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "XL", charge: 0.60 },
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.80 },
            { size: "4XL", charge: 4.09 },
            { size: "5XL", charge: 6.62 }
        ]
    }
},
{
    id: "ITY5501",
    name: "Youth 8.8oz Fleece Jogger Pant",
    code: "ITY5501",
    slug: "youth-fleece-jogger-pant",
    category: "Joggers/Sweatpants",
    group: "Apparel",
    material: "70% Cotton / 30% Polyester Fleece (8.8 oz / 298 GSM)",
    size: 'XS - 5XL',
    imprint: "N/A",
    price: 7.75,
    originalPrice: 7.75,
    image: "assets/assets/images/products/pants/ITY5501/Y5501-black-01.webp",
    featureImage: "assets/assets/images/products/pants/ITY5501/Y5501-feature.webp",
    description: "Youth-sized 8.8oz blank fleece jogger pants (style Y5501) in 70/30 cotton-poly. Sized for kids with a tapered fit for schools, teams, and youth programs.",
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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/pants/ITY5501/Y5501-black-01.webp" },
        { name: "Heather Grey", hex: "#B0B0B0", image: "assets/assets/images/products/pants/ITY5501/Y5501-heather-grey-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/pants/ITY5501/Y5501-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/pants/ITY5501/Y5501-black-01.webp",
        "assets/assets/images/products/pants/ITY5501/Y5501-heather-grey-01.webp",
        "assets/assets/images/products/pants/ITY5501/Y5501-white-01.webp"
    ],

    specs: {
        itemNo: "ITY5501",
        styleNumber: "Y5501",
        season: "Core",
        weight: "8.8 oz (298 GSM)",
        material: "70% Cotton, 30% Polyester Fleece",
        yarn: "Cotton-Dominant Face",
        sizes: "XS to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "XS", chest: '9.8"', bodyLength: '23.6"' },
            { size: "S", chest: '10.6"', bodyLength: '26.4"' },
            { size: "M", chest: '11.4"', bodyLength: '29.1"' },
            { size: "L", chest: '12.2"', bodyLength: '31.9"' },
            { size: "XL", chest: '13"', bodyLength: '34.6"' },
            { size: "2XL", chest: '13.8"', bodyLength: '37.4"' },
            { size: "3XL", chest: '14.6"', bodyLength: '40.2"' },
            { size: "4XL", chest: '15.4"', bodyLength: '43"' },
            { size: "5XL", chest: '16.2"', bodyLength: '45.8"' }
        ],

        decoration: {
            screenPrint: "Excellent – Fleece face holds ink cleanly. Scale artwork to youth panels",
            dtg: "Good – Adjust ink volume for smaller print area on youth sizing",
            embroidery: "Fair – Small logos only. Firm stabilizer needed on soft fleece",
            heatTransfer: "Good – Ideal for names and numbers on youth team programs",
            sublimation: "Not Recommended – 70/30 cotton-poly blend blocks dye transfer"
        },

        // ✅ Packaging Info
        packagingOptions: "Call for details",

        additionalInfo: {
            paragraph: "Constructed from 8.8 oz (298 GSM) 70/30 cotton-poly fleece (the same fabric as the adult 8801), the Y5501 ensures hand-feel parity across adult and youth set programs. The regular-fit cut features a tapered leg with cuffed rib bottoms scaled to youth proportions. An elasticated waist with drawstring provides adjustable fit, with a key safety detail: sizes XS, S, and M ship without the drawstring to meet children's safety standards. Off-seam pockets keep thigh panels flat for decoration, and the tear-away label supports fast private-label rebranding. Care: machine wash cold with like colors, tumble dry low.",
            label: "Tear Away",
            colors: "XS-5XL in Black, Heather Grey, and White.",
            packing: "2 dozen per case",
            garmentSpecs: [
                { size: "XS", chest: '25 cm', bodyLength: '60 cm' },
                { size: "S", chest: '27 cm', bodyLength: '67 cm' },
                { size: "M", chest: '29 cm', bodyLength: '74 cm' },
                { size: "L", chest: '31 cm', bodyLength: '81 cm' },
                { size: "XL", chest: '33 cm', bodyLength: '88 cm' },
                { size: "2XL", chest: '35 cm', bodyLength: '95 cm' },
                { size: "3XL", chest: '37 cm', bodyLength: '102 cm' },
                { size: "4XL", chest: '39 cm', bodyLength: '109 cm' },
                { size: "5XL", chest: '41 cm', bodyLength: '116 cm' }
            ]
        }
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$7.75" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "ITCMFL",
    name: "Camouflage Fleece Jogger Pant 8.8 oz",
    code: "ITCMFL",
    slug: "camouflage-fleece-jogger-pant",
    category: "Joggers/Sweatpants",
    group: "Apparel",

    material: "70% Cotton / 30% Polyester Fleece (8.8 oz / 290 GSM)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 19.9,
    originalPrice: 19.9,
    image: "assets/assets/images/products/pants/ITCMFL/8801cmfl-camouflage-01.webp",
    featureImage: "assets/assets/images/products/pants/ITCMFL/8801cmfl-camouflage-feature.webp",
    description: "Camouflage fleece jogger pant (style 8801CMFL) in 70/30 cotton-poly blend. Tapered leg with cuffed rib bottoms and an elasticated waistband with drawstring for adjustable fit.",
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
        { name: "Camouflage", hex: "#5A6242", image: "assets/assets/images/products/pants/ITCMFL/8801cmfl-camoflage-01.webp" }
    ],

    images: [
        "assets/assets/images/products/pants/ITCMFL/8801cmfl-camouflage-01.webp"
    ],

    specs: {
        itemNo: "ITCMFL",
        styleNumber: "8801CMFL",
        season: "Core",
        weight: "8.8 oz (290 GSM)",
        material: "70% Cotton, 30% Polyester Fleece",
        yarn: "Cotton-Dominant Face",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "S", waistRelaxed: '15"', waistExtended: '17"', waistbandHeight: '2"' },
            { size: "M", waistRelaxed: '16"', waistExtended: '18"', waistbandHeight: '2"' },
            { size: "L", waistRelaxed: '17"', waistExtended: '19"', waistbandHeight: '2"' },
            { size: "XL", waistRelaxed: '18"', waistExtended: '20"', waistbandHeight: '2"' },
            { size: "2XL", waistRelaxed: '19"', waistExtended: '21"', waistbandHeight: '2"' },
            { size: "3XL", waistRelaxed: '20"', waistExtended: '22"', waistbandHeight: '2"' },
            { size: "4XL", waistRelaxed: '21"', waistExtended: '23"', waistbandHeight: '2"' },
            { size: "5XL", waistRelaxed: '22"', waistExtended: '24"', waistbandHeight: '2"' }
        ],

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$19.90" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "IA1003",
    name: "Vantage V-Neck Tee",
    code: "IA1003",
    slug: "vantage-v-neck-tee",
    category: "T-Shirts",
    group: "Apparel",
    material: "100% Cotton (4.3 oz) – Heathers: 60/40 Cotton/Poly",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 6.33,
    originalPrice: 6.33,
    image: "assets/assets/images/products/T-shirts/IA1003/IA1003-white-01.webp",
    featureImage: "assets/assets/images/products/T-shirts/IA1003/IA1003-feature.webp",
    description: "Elevated everyday essential — the Vantage V-Neck Tee delivers a clean, modern silhouette with a 4.3 oz combed cotton face that takes ink and thread beautifully. Built for customization, ready for daily wear.",
    popular: false,

    standout: true,
    standoutBadge: "PREMIUM APPAREL",
    standoutAccent: "#D4AF37",

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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/T-shirts/IA1003/IA1003-black-01.webp" },
        { name: "Sports Grey", hex: "#B0B0B0", image: "assets/assets/images/products/T-shirts/IA1003/IA1003-sports-grey-01.webp" },
        { name: "Dust", hex: "#E8DCC4", image: "assets/assets/images/products/T-shirts/IA1003/IA1003-dust-01.webp" },
        { name: "Pink", hex: "#F4C7CE", image: "assets/assets/images/products/T-shirts/IA1003/IA1003-pink-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/T-shirts/IA1003/IA1003-white-01.webp" },
        { name: "Navy", hex: "#1B2A4A", image: "assets/assets/images/products/T-shirts/IA1003/IA1003-navy-01.webp" }
    ],

    images: [
        "assets/assets/images/products/T-shirts/IA1003/IA1003-white-01.webp",
        "assets/assets/images/products/T-shirts/IA1003/IA1003-black-01.webp",
        "assets/assets/images/products/T-shirts/IA1003/IA1003-sports-grey-01.webp",
        "assets/assets/images/products/T-shirts/IA1003/IA1003-dust-01.webp",
        "assets/assets/images/products/T-shirts/IA1003/IA1003-pink-01.webp",
        "assets/assets/images/products/T-shirts/IA1003/IA1003-navy-01.webp"
    ],

    specs: {
        itemNo: "IA1003",
        styleNumber: "1003",
        season: "Core",
        weight: "4.3 oz (145 GSM)",
        material: "100% Cotton",
        yarn: "Combed Cotton",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",


        sizeChart: [
            { size: "S", chest: '18"', bodyLength: '28"' },
            { size: "M", chest: '20"', bodyLength: '29"' },
            { size: "L", chest: '22"', bodyLength: '30"' },
            { size: "XL", chest: '24"', bodyLength: '31"' },
            { size: "2XL", chest: '26"', bodyLength: '32"' },
            { size: "3XL", chest: '28"', bodyLength: '33"' },
            { size: "4XL", chest: '30"', bodyLength: '34"' },
            { size: "5XL", chest: '32"', bodyLength: '35"' }
        ],

        fabricNotes: {
            standard: "100% Cotton – All colors except Heather Gray, Charcoal Heather, and Sport Grey.",
            heathers: "Heather Gray & Charcoal Heather: 60% Cotton / 40% Polyester.",
            sportGrey: "Sport Grey: 90% Cotton / 10% Viscose."
        },

        packagingOptions: [
            {
                type: "Small",
                qtyPerBox: "72 pcs",
                boxWeight: "23.78 lbs",
                boxDims: '19.5" x 15" x 9"'
            },
            {
                type: "Medium",
                qtyPerBox: "72 pcs",
                boxWeight: "24.50 lbs",
                boxDims: '20.5" x 15.5" x 9"'
            },
            {
                type: "Large",
                qtyPerBox: "72 pcs",
                boxWeight: "29.40 lbs",
                boxDims: '22.5" x 16" x 9"'
            },
            {
                type: "X-Large",
                qtyPerBox: "72 pcs",
                boxWeight: "33.12 lbs",
                boxDims: '23.5" x 16.5" x 9"'
            },
            {
                type: "2X-Large",
                qtyPerBox: "72 pcs",
                boxWeight: "36.10 lbs",
                boxDims: '25" x 17.5" x 9"'
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - L", price: "$6.33" },
            upsizeCharges: [
                { size: "XL", charge: "$0.60" },
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.80" },
                { size: "4XL", charge: "$4.09" },
                { size: "5XL", charge: "$6.62" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "XL", charge: 0.60 },
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.80 },
            { size: "4XL", charge: 4.09 },
            { size: "5XL", charge: 6.62 }
        ]
    }
},
{
    id: "ITZJHSS",
    name: "Full Zip Hoodie 7.7 oz 50/50 Cotton/Poly",
    code: "ITZJHSS",
    slug: "full-zip-hoodie-50-50",
    category: "Full Zip Hoodies",
    group: "Apparel",

    material: "50% Cotton / 50% Polyester (7.7 oz)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 11.0,
    originalPrice: 11.0,
    image: "assets/assets/images/products/hoodies/ITZJHSS/zjhss-nay.webp",
    featureImage: "assets/assets/images/products/hoodies/ITZJHSS/zjhss-feature.webp",
    description: "Full zip hoodie (style ZJHSS) in a 50/50 cotton-poly blend (7.7 oz) without drawstrings. Classic silhouette ready for screen printing and embroidery.",
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
        { name: "Navy", hex: "#1B2A4A", image: "assets/assets/images/products/hoodies/ITZJHSS/zjhss-nay.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/hoodies/ITZJHSS/zjhss-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/hoodies/ITZJHSS/zjhss-nay.webp",
        "assets/assets/images/products/hoodies/ITZJHSS/zjhss-white-01.webp"
    ],

    specs: {
        itemNo: "ITZJHSS",
        styleNumber: "ZJHSS",
        season: "Core",
        weight: "7.7 oz",
        material: "50% Cotton, 50% Polyester",
        yarn: "Cotton-Poly Blend",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "S", chest: '20"', bodyLength: '26"' },
            { size: "M", chest: '22"', bodyLength: '27"' },
            { size: "L", chest: '24"', bodyLength: '28"' },
            { size: "XL", chest: '26"', bodyLength: '29"' },
            { size: "2XL", chest: '28"', bodyLength: '30"' },
            { size: "3XL", chest: '30"', bodyLength: '31"' },
            { size: "4XL", chest: '32"', bodyLength: '32"' },
            { size: "5XL", chest: '34"', bodyLength: '33"' }
        ],

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$11.00" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "ITT180",
    name: "Ringspun Cotton Tank Top 5.5 oz",
    code: "ITT180",
    slug: "ringspun-cotton-tank-top",
    category: "Tank Tops",
    group: "Apparel",
    material: "100% Ringspun Cotton (5.5 oz, 20 Singles)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 3.2,
    originalPrice: 3.2,
    image: "assets/assets/images/products/tanktops/ITT180/tt180-black-01.webp",
    featureImage: "assets/assets/images/products/tanktops/ITT180/tt180-feature.webp",
    description: "The TT180 tank is updated with a modern fit, featuring a rounded neck and designed with superior ring-spun cotton that acts as a blank canvas for printing. 5.5 oz., 100% ringspun cotton, 20 singles. Side seams, retail fit, Unisex sizing.",
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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/tanktops/ITT180/tt180-black-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/tanktops/ITT180/tt180-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/tanktops/ITT180/tt180-black-01.webp",
        "assets/assets/images/products/tanktops/ITT180/tt180-white-01.webp"
    ],

    specs: {
        itemNo: "ITT180",
        styleNumber: "TT180",
        season: "Core",
        weight: "5.5 oz",
        material: "100% Ringspun Cotton",
        yarn: "20 Singles Ringspun Cotton",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",
        origin: "USA",

        sizeChart: [
            { size: "S", chest: '18"', bodyLength: '28"' },
            { size: "M", chest: '20"', bodyLength: '29"' },
            { size: "L", chest: '22"', bodyLength: '30"' },
            { size: "XL", chest: '24"', bodyLength: '31"' },
            { size: "2XL", chest: '26"', bodyLength: '32"' },
            { size: "3XL", chest: '28"', bodyLength: '33"' },
            { size: "4XL", chest: '30"', bodyLength: '34"' },
            { size: "5XL", chest: '32"', bodyLength: '35"' }
        ],

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - XL", price: "$3.20" },
            upsizeCharges: [
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.90" },
                { size: "4XL", charge: "$4.10" },
                { size: "5XL", charge: "$6.85" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.90 },
            { size: "4XL", charge: 4.10 },
            { size: "5XL", charge: 6.85 }
        ]
    }
},
{
    id: "IA1004",
    name: "Vantage Long Sleeve Tee",
    code: "IA1004",
    slug: "vantage-long-sleeve-tee",
    category: "T-Shirts",
    group: "Apparel",
    material: "100% Cotton (4.3 oz) – Heathers: 60/40 Cotton/Poly",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 8.36,
    originalPrice: 8.36,
    image: "assets/assets/images/products/T-shirts/IA1004/IA1004-neon-yellow-01.webp",
    featureImage: "assets/assets/images/products/T-shirts/IA1004/IA1004-feature.webp",
    description: "Layer-ready staple — the Vantage Long Sleeve Tee brings a refined 4.3 oz combed cotton face to a classic long-sleeve silhouette. Built to print, built to last.",
    popular: false,

    standout: true,
    standoutBadge: "PREMIUM APPAREL",
    standoutAccent: "#D4AF37",

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
        { name: "Baby Pink", hex: "#F4C7CE", image: "assets/assets/images/products/T-shirts/IA1004/IA1004-baby-pink-01.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/T-shirts/IA1004/IA1004-black-01.webp" },
        { name: "Charcoal", hex: "#4A4A4A", image: "assets/assets/images/products/T-shirts/IA1004/IA1004-charcoal-01.webp" },
        { name: "Dust", hex: "#E8DCC4", image: "assets/assets/images/products/T-shirts/IA1004/IA1004-dust-01.webp" },
        { name: "Navy", hex: "#1B2A4A", image: "assets/assets/images/products/T-shirts/IA1004/IA1004-navy-01.webp" },
        { name: "Neon Orange", hex: "#FF6B1A", image: "assets/assets/images/products/T-shirts/IA1004/IA1004-neon-orange-01.webp" },
        { name: "Neon Yellow", hex: "#E8FF00", image: "assets/assets/images/products/T-shirts/IA1004/IA1004-neon-yellow-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/T-shirts/IA1004/IA1004-red-01.webp" },
        { name: "Royal", hex: "#1E3FBF", image: "assets/assets/images/products/T-shirts/IA1004/IA1004-royal-01.webp" },
        { name: "Sports Grey", hex: "#B0B0B0", image: "assets/assets/images/products/T-shirts/IA1004/IA1004-sports-grey-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/T-shirts/IA1004/IA1004-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/T-shirts/IA1004/IA1004-white-01.webp",
        "assets/assets/images/products/T-shirts/IA1004/IA1004-black-01.webp",
        "assets/assets/images/products/T-shirts/IA1004/IA1004-baby-pink-01.webp",
        "assets/assets/images/products/T-shirts/IA1004/IA1004-charcoal-01.webp",
        "assets/assets/images/products/T-shirts/IA1004/IA1004-dust-01.webp",
        "assets/assets/images/products/T-shirts/IA1004/IA1004-navy-01.webp",
        "assets/assets/images/products/T-shirts/IA1004/IA1004-neon-orange-01.webp",
        "assets/assets/images/products/T-shirts/IA1004/IA1004-neon-yellow-01.webp",
        "assets/assets/images/products/T-shirts/IA1004/IA1004-red-01.webp",
        "assets/assets/images/products/T-shirts/IA1004/IA1004-royal-01.webp",
        "assets/assets/images/products/T-shirts/IA1004/IA1004-sports-grey-01.webp"
    ],

    specs: {
        itemNo: "IA1004",
        styleNumber: "1004",
        season: "Core",
        weight: "4.3 oz (145 GSM)",
        material: "100% Cotton",
        yarn: "Combed Cotton",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",

        sizeChart: [
            { size: "S", chest: '18"', bodyLength: '28"' },
            { size: "M", chest: '20"', bodyLength: '29"' },
            { size: "L", chest: '22"', bodyLength: '30"' },
            { size: "XL", chest: '24"', bodyLength: '31"' },
            { size: "2XL", chest: '26"', bodyLength: '32"' },
            { size: "3XL", chest: '28"', bodyLength: '33"' },
            { size: "4XL", chest: '30"', bodyLength: '34"' },
            { size: "5XL", chest: '32"', bodyLength: '35"' }
        ],

        fabricNotes: {
            standard: "100% Cotton – All colors except Heather Gray, Charcoal Heather, and Sport Grey.",
            heathers: "Heather Gray & Charcoal Heather: 60% Cotton / 40% Polyester.",
            sportGrey: "Sport Grey: 90% Cotton / 10% Viscose.",
            construction: "Tubular"
        },

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - L", price: "$8.36" },
            upsizeCharges: [
                { size: "XL", charge: "$0.60" },
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.80" },
                { size: "4XL", charge: "$4.09" },
                { size: "5XL", charge: "$6.62" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "XL", charge: 0.60 },
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.80 },
            { size: "4XL", charge: 4.09 },
            { size: "5XL", charge: 6.62 }
        ]
    }
},
{
    id: "IA1005",
    name: "Sculpt Fitted Tee",
    code: "IA1005",
    slug: "sculpt-fitted-tee",
    category: "T-Shirts",
    group: "Apparel",
    material: "100% Cotton (4.3 oz) – Heathers: 60/40 Cotton/Poly",
    size: 'S - 3XL',
    imprint: "N/A",
    price: 4.42,
    originalPrice: 4.42,
    image: "assets/assets/images/products/T-shirts/IA1005/IA1005-burgundy-01.webp",
    featureImage: "assets/assets/images/products/T-shirts/IA1005/IA1005-feature.webp",
    description: "Tailored to move — the Sculpt Fitted Tee is cut for a flattering women's silhouette in a smooth 4.3 oz combed cotton blend. Made to print, made to fit.",
    popular: false,

    standout: true,
    standoutBadge: "PREMIUM APPAREL",
    standoutAccent: "#D4AF37",

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
        { name: "Baby Pink", hex: "#F4C7CE", image: "assets/assets/images/products/T-shirts/IA1005/IA1005-baby-pink-01.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/T-shirts/IA1005/IA1005-black-01.webp" },
        { name: "Burgundy", hex: "#5A1A2B", image: "assets/assets/images/products/T-shirts/IA1005/IA1005-burgundy-01.webp" },
        { name: "Charcoal Heather", hex: "#4A4A4A", image: "assets/assets/images/products/T-shirts/IA1005/IA1005-charcoal-heather-01.webp" },
        { name: "Hot Pink", hex: "#E91E8C", image: "assets/assets/images/products/T-shirts/IA1005/IA1005-hot-pink-01.webp" },
        { name: "Navy", hex: "#1B2A4A", image: "assets/assets/images/products/T-shirts/IA1005/IA1005-navy-01.webp" },
        { name: "Purple", hex: "#5B2A8C", image: "assets/assets/images/products/T-shirts/IA1005/IA1005-purple-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/T-shirts/IA1005/IA1005-red-01.webp" },
        { name: "Royal", hex: "#1E3FBF", image: "assets/assets/images/products/T-shirts/IA1005/IA1005-royal-01.webp" },
        { name: "Sports Grey", hex: "#B0B0B0", image: "assets/assets/images/products/T-shirts/IA1005/IA1005-sports-grey-01.webp" },
        { name: "Turquoise", hex: "#40E0D0", image: "assets/assets/images/products/T-shirts/IA1005/IA1005-turquoise-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/T-shirts/IA1005/IA1005-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/T-shirts/IA1005/IA1005-white-01.webp",
        "assets/assets/images/products/T-shirts/IA1005/IA1005-baby-pink-01.webp",
        "assets/assets/images/products/T-shirts/IA1005/IA1005-black-01.webp",
        "assets/assets/images/products/T-shirts/IA1005/IA1005-burgundy-01.webp",
        "assets/assets/images/products/T-shirts/IA1005/IA1005-charcoal-heather-01.webp",
        "assets/assets/images/products/T-shirts/IA1005/IA1005-hot-pink-01.webp",
        "assets/assets/images/products/T-shirts/IA1005/IA1005-navy-01.webp",
        "assets/assets/images/products/T-shirts/IA1005/IA1005-purple-01.webp",
        "assets/assets/images/products/T-shirts/IA1005/IA1005-red-01.webp",
        "assets/assets/images/products/T-shirts/IA1005/IA1005-royal-01.webp",
        "assets/assets/images/products/T-shirts/IA1005/IA1005-sports-grey-01.webp",
        "assets/assets/images/products/T-shirts/IA1005/IA1005-turquoise-01.webp"
    ],

    specs: {
        itemNo: "IA1005",
        styleNumber: "1005",
        season: "Core",
        weight: "4.3 oz (145 GSM)",
        material: "100% Cotton",
        yarn: "Combed Cotton",
        sizes: "S to 3XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",

        sizeChart: [
            { size: "S", chest: '16"', bodyLength: '25"' },
            { size: "M", chest: '17"', bodyLength: '26"' },
            { size: "L", chest: '18"', bodyLength: '27"' },
            { size: "XL", chest: '19.5"', bodyLength: '28"' },
            { size: "2XL", chest: '21"', bodyLength: '29"' },
            { size: "3XL", chest: '22.5"', bodyLength: '30"' }
        ],

        fabricNotes: {
            standard: "100% Cotton – All colors except Heather Gray, Charcoal Heather, and Sport Grey.",
            heathers: "Heather Gray & Charcoal Heather: 60% Cotton / 40% Polyester.",
            sportGrey: "Sport Grey: 90% Cotton / 10% Viscose."
        },

        packagingOptions: [
            {
                type: "Small",
                qtyPerBox: "72 pcs",
                boxWeight: "23.78 lbs",
                boxDims: '19.5" x 15" x 9"'
            },
            {
                type: "Medium",
                qtyPerBox: "72 pcs",
                boxWeight: "24.50 lbs",
                boxDims: '20.5" x 15.5" x 9"'
            },
            {
                type: "Large",
                qtyPerBox: "72 pcs",
                boxWeight: "29.40 lbs",
                boxDims: '22.5" x 16" x 9"'
            },
            {
                type: "X-Large",
                qtyPerBox: "72 pcs",
                boxWeight: "33.12 lbs",
                boxDims: '23.5" x 16.5" x 9"'
            },
            {
                type: "2X-Large",
                qtyPerBox: "72 pcs",
                boxWeight: "36.10 lbs",
                boxDims: '25" x 17.5" x 9"'
            }
        ]
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - L", price: "$4.42" },
            upsizeCharges: [
                { size: "XL", charge: "$0.60" },
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.80" },
                { size: "4XL", charge: "$4.09" },
                { size: "5XL", charge: "$6.62" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "XL", charge: 0.60 },
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.80 }
        ]
    }
},
{
    id: "IA1007",
    name: "Sprout Youth Tee",
    code: "IA1007",
    slug: "sprout-youth-tee",
    category: "T-Shirts",
    group: "Apparel",
    material: "100% Cotton (4.3 oz) – Heathers: 60/40 Cotton/Poly",
    size: 'XS - XL',
    imprint: "N/A",
    price: 4.67,
    originalPrice: 4.67,
    image: "assets/assets/images/products/T-shirts/IA1007/IA1007-navy-01.webp",
    featureImage: "assets/assets/images/products/T-shirts/IA1007/IA1007-feature.webp",
    description: "Built for the next generation — the Sprout Youth Tee brings a soft 4.3 oz combed cotton face to a kid-sized silhouette. Ready for school prints, team graphics, and everyday play.",
    popular: false,

    standout: true,
    standoutBadge: "PREMIUM APPAREL",
    standoutAccent: "#D4AF37",

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
        { name: "Baby Pink", hex: "#F4C7CE", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-baby-pink-01.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-black-01.webp" },
        { name: "Burgundy", hex: "#5A1A2B", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-burgundy-01.webp" },
        { name: "Charcoal Heather", hex: "#4A4A4A", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-charcoal-heather-01.webp" },
        { name: "Dust", hex: "#E8DCC4", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-dust-01.webp" },
        { name: "Gold", hex: "#D4AF37", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-gold-01.webp" },
        { name: "Heather Grey", hex: "#B0B0B0", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-heather-grey-01.webp" },
        { name: "Hot Pink", hex: "#E91E8C", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-hot-pink-01.webp" },
        { name: "Mint", hex: "#B8E8D8", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-mint-01.webp" },
        { name: "Moss Green", hex: "#5A6242", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-moss-green-01.webp" },
        { name: "Navy", hex: "#1B2A4A", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-navy-01.webp" },
        { name: "Orange", hex: "#F26522", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-orange-01.webp" },
        { name: "Pacific Blue", hex: "#4A90C2", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-pacific-blue-01.webp" },
        { name: "Purple", hex: "#5B2A8C", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-purple-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-red-01.webp" },
        { name: "Royal", hex: "#1E3FBF", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-royal-01.webp" },
        { name: "Turquoise", hex: "#40E0D0", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-turquoise-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/T-shirts/IA1007/IA1007-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/T-shirts/IA1007/IA1007-white-01.webp",
        "assets/assets/images/products/T-shirts/IA1007/IA1007-baby-pink-01.webp",
        "assets/assets/images/products/T-shirts/IA1007/IA1007-black-01.webp",
        "assets/assets/images/products/T-shirts/IA1007/IA1007-burgundy-01.webp",
        "assets/assets/images/products/T-shirts/IA1007/IA1007-charcoal-heather-01.webp",
        "assets/assets/images/products/T-shirts/IA1007/IA1007-dust-01.webp",
        "assets/assets/images/products/T-shirts/IA1007/IA1007-gold-01.webp",
        "assets/assets/images/products/T-shirts/IA1007/IA1007-heather-grey-01.webp",
        "assets/assets/images/products/T-shirts/IA1007/IA1007-hot-pink-01.webp",
        "assets/assets/images/products/T-shirts/IA1007/IA1007-mint-01.webp",
        "assets/assets/images/products/T-shirts/IA1007/IA1007-moss-green-01.webp",
        "assets/assets/images/products/T-shirts/IA1007/IA1007-navy-01.webp",
        "assets/assets/images/products/T-shirts/IA1007/IA1007-orange-01.webp",
        "assets/assets/images/products/T-shirts/IA1007/IA1007-pacific-blue-01.webp",
        "assets/assets/images/products/T-shirts/IA1007/IA1007-purple-01.webp",
        "assets/assets/images/products/T-shirts/IA1007/IA1007-red-01.webp",
        "assets/assets/images/products/T-shirts/IA1007/IA1007-royal-01.webp",
        "assets/assets/images/products/T-shirts/IA1007/IA1007-turquoise-01.webp"
    ],

    specs: {
        itemNo: "IA1007",
        styleNumber: "1007",
        season: "Core",
        weight: "4.3 oz (145 GSM)",
        material: "100% Cotton",
        yarn: "Combed Cotton",
        sizes: "XS to XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",

        sizeChart: [
            { size: "XS", chest: '14"', bodyLength: '18"' },
            { size: "S", chest: '15"', bodyLength: '20"' },
            { size: "M", chest: '16"', bodyLength: '22"' },
            { size: "L", chest: '17"', bodyLength: '24"' },
            { size: "XL", chest: '18"', bodyLength: '26"' }
        ],

        fabricNotes: {
            standard: "100% Cotton – All colors except Heather Gray, Charcoal Heather, and Sport Grey.",
            heathers: "Heather Gray & Charcoal Heather: 60% Cotton / 40% Polyester.",
            sportGrey: "Sport Grey: 90% Cotton / 10% Viscose.",
            construction: "Tubular"
        },

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "XS - XL", price: "$4.67" },
            upsizeCharges: [
                { size: "XL", charge: "$0.60" },
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.80" },
                { size: "4XL", charge: "$4.09" },
                { size: "5XL", charge: "$6.62" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "XL", charge: 0.60 },
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.80 },
            { size: "4XL", charge: 4.09 },
            { size: "5XL", charge: 6.62 }
        ]
    }
},
{
    id: "IA1010",
    name: "Velocity Performance Tee",
    code: "IA1010",
    slug: "velocity-performance-tee",
    category: "T-Shirts",
    group: "Apparel",
    material: "100% Polyester (4.3 oz)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 6.56,
    originalPrice: 6.56,
    image: "assets/assets/images/products/T-shirts/IA1010/IA1010-moss-green-01.webp",
    featureImage: "assets/assets/images/products/T-shirts/IA1010/IA1010-feature.webp",
    description: "Engineered for movement — the Velocity Performance Tee is spun from 100% polyester with a 4.3 oz hand feel that wicks, breathes, and holds vibrant color. Built for training, teamwear, and high-energy events.",
    popular: false,

    standout: true,
    standoutBadge: "PREMIUM APPAREL",
    standoutAccent: "#D4AF37",

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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/T-shirts/IA1010/IA1010-black-01.webp" },
        { name: "Grey", hex: "#B0B0B0", image: "assets/assets/images/products/T-shirts/IA1010/IA1010-grey-01.webp" },
        { name: "Moss Green", hex: "#5A6242", image: "assets/assets/images/products/T-shirts/IA1010/IA1010-moss-green-01.webp" },
        { name: "Navy", hex: "#1B2A4A", image: "assets/assets/images/products/T-shirts/IA1010/IA1010-navy-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/T-shirts/IA1010/IA1010-red-01.webp" },
        { name: "Royal", hex: "#1E3FBF", image: "assets/assets/images/products/T-shirts/IA1010/IA1010-royal-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/T-shirts/IA1010/IA1010-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/T-shirts/IA1010/IA1010-white-01.webp",
        "assets/assets/images/products/T-shirts/IA1010/IA1010-black-01.webp",
        "assets/assets/images/products/T-shirts/IA1010/IA1010-grey-01.webp",
        "assets/assets/images/products/T-shirts/IA1010/IA1010-moss-green-01.webp",
        "assets/assets/images/products/T-shirts/IA1010/IA1010-navy-01.webp",
        "assets/assets/images/products/T-shirts/IA1010/IA1010-red-01.webp",
        "assets/assets/images/products/T-shirts/IA1010/IA1010-royal-01.webp"
    ],

    specs: {
        itemNo: "IA1010",
        styleNumber: "1010",
        season: "Core",
        weight: "4.3 oz (145 GSM)",
        material: "100% Polyester",
        yarn: "Performance Polyester",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",

        sizeChart: [
            { size: "S", chest: '18"', bodyLength: '28"' },
            { size: "M", chest: '20"', bodyLength: '29"' },
            { size: "L", chest: '22"', bodyLength: '30"' },
            { size: "XL", chest: '24"', bodyLength: '31"' },
            { size: "2XL", chest: '26"', bodyLength: '32"' },
            { size: "3XL", chest: '28"', bodyLength: '33"' },
            { size: "4XL", chest: '30"', bodyLength: '34"' },
            { size: "5XL", chest: '32"', bodyLength: '35"' }
        ],

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - L", price: "$6.56" },
            upsizeCharges: [
                { size: "XL", charge: "$0.60" },
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.80" },
                { size: "4XL", charge: "$4.09" },
                { size: "5XL", charge: "$6.62" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "XL", charge: 0.60 },
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.80 },
            { size: "4XL", charge: 4.09 },
            { size: "5XL", charge: 6.62 }
        ]
    }
},
{
    id: "IA1133",
    name: "Rebel Crop Tee",
    code: "IA1133",
    slug: "rebel-crop-tee",
    category: "T-Shirts",
    group: "Apparel",
    material: "100% Cotton (4.3 oz) – Heathers: 60/40 Cotton/Poly",
    size: 'XS - XL',
    imprint: "N/A",
    price: 5.56,
    originalPrice: 5.56,
    image: "assets/assets/images/products/T-shirts/IA1133/IA1133-white-01.webp",
    featureImage: "assets/assets/images/products/T-shirts/IA1133/IA1133-feature.webp",
    description: "Streetwear energy in a cropped silhouette — the Rebel Crop Tee is cut from the same soft, breathable 4.3 oz jersey as our signature blanks. Relaxed fit, elevated attitude.",
    popular: false,

    standout: true,
    standoutBadge: "PREMIUM APPAREL",
    standoutAccent: "#D4AF37",

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
        { name: "Baby Pink", hex: "#F4C7CE", image: "assets/assets/images/products/T-shirts/IA1133/IA1133-baby-pink-01.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/T-shirts/IA1133/IA1133-black-01.webp" },
        { name: "Dust", hex: "#E8DCC4", image: "assets/assets/images/products/T-shirts/IA1133/IA1133-dust-01.webp" },
        { name: "Powder Blue", hex: "#B8D8E8", image: "assets/assets/images/products/T-shirts/IA1133/IA1133-powder-blue-01.webp" },
        { name: "Sports Grey", hex: "#B0B0B0", image: "assets/assets/images/products/T-shirts/IA1133/IA1133-sports-grey-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/T-shirts/IA1133/IA1133-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/T-shirts/IA1133/IA1133-white-01.webp",
        "assets/assets/images/products/T-shirts/IA1133/IA1133-baby-pink-01.webp",
        "assets/assets/images/products/T-shirts/IA1133/IA1133-black-01.webp",
        "assets/assets/images/products/T-shirts/IA1133/IA1133-dust-01.webp",
        "assets/assets/images/products/T-shirts/IA1133/IA1133-powder-blue-01.webp",
        "assets/assets/images/products/T-shirts/IA1133/IA1133-sports-grey-01.webp"
    ],

    specs: {
        itemNo: "IA1133",
        styleNumber: "1133",
        season: "Core",
        weight: "4.3 oz (145 GSM)",
        material: "100% Cotton",
        yarn: "Jersey Knit",
        sizes: "XS to XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",

        sizeChart: [
            { size: "XS", chest: '16"', bodyLength: '19"' },
            { size: "S", chest: '17"', bodyLength: '20"' },
            { size: "M", chest: '18"', bodyLength: '21"' },
            { size: "L", chest: '19"', bodyLength: '22"' },
            { size: "XL", chest: '20"', bodyLength: '23"' }
        ],

        fabricNotes: {
            standard: "100% Cotton – All colors except Heather Gray, Charcoal Heather, and Sport Grey.",
            heathers: "Heather Gray & Charcoal Heather: 60% Cotton / 40% Polyester.",
            sportGrey: "Sport Grey: 90% Cotton / 10% Viscose."
        },

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "XS - XL", price: "$5.56" },
            upsizeCharges: [
                { size: "XL", charge: "$0.60" },
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.80" },
                { size: "4XL", charge: "$4.09" },
                { size: "5XL", charge: "$6.62" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "XL", charge: 0.60 },
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.80 },
            { size: "4XL", charge: 4.09 },
            { size: "5XL", charge: 6.62 }
        ]
    }
},
{
    id: "IA1450",
    name: "Monolith Heavyweight Tee",
    code: "IA1450",
    slug: "monolith-heavyweight-tee",
    category: "T-Shirts",
    group: "Apparel",
    material: "100% Cotton (6.5 oz)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 8.89,
    originalPrice: 8.89,
    image: "assets/assets/images/products/T-shirts/IA1450/IA1450-white-01.webp",
    featureImage: "assets/assets/images/products/T-shirts/IA1450/IA1450-feature.webp",
    description: "Built like a cornerstone — the Monolith Heavyweight Tee uses premium 6.5 oz cotton for a substantial, luxury hand feel that holds its shape and never feels thin. Structured drape, reinforced seams, and a smooth print-ready face make it the perfect canvas for custom work or everyday wear.",
    popular: false,

    standout: true,
    standoutBadge: "PREMIUM APPAREL",
    standoutAccent: "#D4AF37",

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
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/T-shirts/IA1450/IA1450-white-01.webp" },
        { name: "Sports Grey", hex: "#B0B0B0", image: "assets/assets/images/products/T-shirts/IA1450/IA1450-sports-grey-01.webp" },
        { name: "Navy", hex: "#1B2A4A", image: "assets/assets/images/products/T-shirts/IA1450/IA1450-navy-01.webp" },
        { name: "Charcoal", hex: "#4A4A4A", image: "assets/assets/images/products/T-shirts/IA1450/IA1450-charcoal-01.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/T-shirts/IA1450/IA1450-black-01.webp" }
    ],

    images: [
        "assets/assets/images/products/T-shirts/IA1450/IA1450-white-01.webp",
        "assets/assets/images/products/T-shirts/IA1450/IA1450-sports-grey-01.webp",
        "assets/assets/images/products/T-shirts/IA1450/IA1450-navy-01.webp",
        "assets/assets/images/products/T-shirts/IA1450/IA1450-charcoal-01.webp",
        "assets/assets/images/products/T-shirts/IA1450/IA1450-black-01.webp"
    ],

    specs: {
        itemNo: "IA1450",
        styleNumber: "1450",
        season: "Core",
        weight: "6.5 oz (220 GSM)",
        material: "100% Cotton",
        yarn: "Heavyweight Cotton",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",

        sizeChart: [
            { size: "S", chest: '18"', bodyLength: '28"' },
            { size: "M", chest: '20"', bodyLength: '29"' },
            { size: "L", chest: '22"', bodyLength: '30"' },
            { size: "XL", chest: '24"', bodyLength: '31"' },
            { size: "2XL", chest: '26"', bodyLength: '32"' },
            { size: "3XL", chest: '28"', bodyLength: '33"' },
            { size: "4XL", chest: '30"', bodyLength: '34"' },
            { size: "5XL", chest: '32"', bodyLength: '35"' }
        ],

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - L", price: "$8.89" },
            upsizeCharges: [
                { size: "XL", charge: "$0.60" },
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.80" },
                { size: "4XL", charge: "$4.09" },
                { size: "5XL", charge: "$6.62" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "XL", charge: 0.60 },
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.80 },
            { size: "4XL", charge: 4.09 },
            { size: "5XL", charge: 6.62 }
        ]
    }
},
{
    id: "IA5000",
    name: "Vintage Dye Premium Tee",
    code: "IA5000",
    slug: "vintage-dye-premium-tee",
    category: "T-Shirts",
    group: "Apparel",
    material: "100% Cotton (6.0 oz / 200 GSM, Side Seam)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 10.00,
    originalPrice: 10.00,
    image: "assets/assets/images/products/T-shirts/IA5000/IA5000-black-01.webp",
    featureImage: "assets/assets/images/products/T-shirts/IA5000/IA5000-feature.webp",
    description: "Each piece tells its own story — the Vintage Dye Premium Tee is cut from 6 oz side-seam cotton and treated with a unique garment over-dye process that gives every shirt a one-of-a-kind character. Expect slight variations in color and shade; they're not flaws, they're the signature.",
    popular: false,

    standout: true,
    standoutBadge: "PREMIUM APPAREL",
    standoutAccent: "#D4AF37",

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
        { name: "Denim Sapphire", hex: "#1E3FBF", image: "assets/assets/images/products/T-shirts/IA5000/IA5000-denim-sapphire-01.webp" },
        { name: "Ferrari Red", hex: "#D42B2B", image: "assets/assets/images/products/T-shirts/IA5000/IA5000-ferrari-red-01.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/T-shirts/IA5000/IA5000-black-01.webp" },
        { name: "Wash Denim", hex: "#7A9BC4", image: "assets/assets/images/products/T-shirts/IA5000/IA5000-wash-denim-01.webp" },
        { name: "Blue Horizon", hex: "#4A90C2", image: "assets/assets/images/products/T-shirts/IA5000/IA5000-blue-horizon-01.webp" },
        { name: "Grey", hex: "#B0B0B0", image: "assets/assets/images/products/T-shirts/IA5000/IA5000-grey-01.webp" },
        { name: "Jade", hex: "#00A86B", image: "assets/assets/images/products/T-shirts/IA5000/IA5000-jade-01.webp" }
    ],

    images: [
        "assets/assets/images/products/T-shirts/IA5000/IA5000-black-01.webp",
        "assets/assets/images/products/T-shirts/IA5000/IA5000-denim-sapphire-01.webp",
        "assets/assets/images/products/T-shirts/IA5000/IA5000-ferrari-red-01.webp",
        "assets/assets/images/products/T-shirts/IA5000/IA5000-wash-denim-01.webp",
        "assets/assets/images/products/T-shirts/IA5000/IA5000-blue-horizon-01.webp",
        "assets/assets/images/products/T-shirts/IA5000/IA5000-grey-01.webp",
        "assets/assets/images/products/T-shirts/IA5000/IA5000-jade-01.webp"
    ],

    specs: {
        itemNo: "IA5000",
        styleNumber: "5000",
        season: "Core",
        weight: "6.0 oz (200 GSM)",
        material: "100% Cotton",
        yarn: "Side Seam Cotton",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",

        sizeChart: [
            { size: "S", chest: '18"', bodyLength: '28"' },
            { size: "M", chest: '20"', bodyLength: '29"' },
            { size: "L", chest: '22"', bodyLength: '30"' },
            { size: "XL", chest: '24"', bodyLength: '31"' },
            { size: "2XL", chest: '26"', bodyLength: '32"' },
            { size: "3XL", chest: '28"', bodyLength: '33"' },
            { size: "4XL", chest: '30"', bodyLength: '34"' },
            { size: "5XL", chest: '32"', bodyLength: '35"' }
        ],

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - L", price: "$10.00" },
            upsizeCharges: [
                { size: "XL", charge: "$0.60" },
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.80" },
                { size: "4XL", charge: "$4.09" },
                { size: "5XL", charge: "$6.62" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "XL", charge: 0.60 },
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.80 },
            { size: "4XL", charge: 4.09 },
            { size: "5XL", charge: 6.62 }
        ]
    }
},
{
    id: "IA5001",
    name: "Terra Mineral Wash Tee",
    code: "IA5001",
    slug: "terra-mineral-wash-tee",
    category: "T-Shirts",
    group: "Apparel",
    material: "100% Cotton (6.0 oz / 200 GSM, Side Seam)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 10.67,
    originalPrice: 10.67,
    image: "assets/assets/images/products/T-shirts/IA5001/IA5001-earth-01.webp",
    featureImage: "assets/assets/images/products/T-shirts/IA5001/IA5001-feature.webp",
    description: "Earthy, textured, and unmistakably yours — the Terra Mineral Wash Tee is built on a 6 oz side-seam cotton base and finished with a mineral wash that gives every piece a soft, lived-in character. Subtle shade variations from lot to lot are part of the process, not a defect.",
    popular: false,

    standout: true,
    standoutBadge: "PREMIUM APPAREL",
    standoutAccent: "#D4AF37",

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
        { name: "Earth", hex: "#8B6F47", image: "assets/assets/images/products/T-shirts/IA5001/IA5001-earth-01.webp" },
        { name: "Denim", hex: "#1E3FBF", image: "assets/assets/images/products/T-shirts/IA5001/IA5001-denim-01.webp" },
        { name: "Grey", hex: "#B0B0B0", image: "assets/assets/images/products/T-shirts/IA5001/IA5001-grey-01.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/T-shirts/IA5001/IA5001-black-01.webp" }
    ],

    images: [
        "assets/assets/images/products/T-shirts/IA5001/IA5001-black-01.webp",
        "assets/assets/images/products/T-shirts/IA5001/IA5001-earth-01.webp",
        "assets/assets/images/products/T-shirts/IA5001/IA5001-denim-01.webp",
        "assets/assets/images/products/T-shirts/IA5001/IA5001-grey-01.webp"
    ],

    specs: {
        itemNo: "IA5001",
        styleNumber: "5001",
        season: "Core",
        weight: "6.0 oz (200 GSM)",
        material: "100% Cotton",
        yarn: "Side Seam Cotton",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",

        sizeChart: [
            { size: "S", chest: '18"', bodyLength: '28"' },
            { size: "M", chest: '20"', bodyLength: '29"' },
            { size: "L", chest: '22"', bodyLength: '30"' },
            { size: "XL", chest: '24"', bodyLength: '31"' },
            { size: "2XL", chest: '26"', bodyLength: '32"' },
            { size: "3XL", chest: '28"', bodyLength: '33"' },
            { size: "4XL", chest: '30"', bodyLength: '34"' },
            { size: "5XL", chest: '32"', bodyLength: '35"' }
        ],

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - L", price: "$10.67" },
            upsizeCharges: [
                { size: "XL", charge: "$0.60" },
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.80" },
                { size: "4XL", charge: "$4.09" },
                { size: "5XL", charge: "$6.62" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "XL", charge: 0.60 },
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.80 },
            { size: "4XL", charge: 4.09 },
            { size: "5XL", charge: 6.62 }
        ]
    }
},
{
    id: "IA8001",
    name: "Tactical Elite Performance Polo",
    code: "IA8001",
    slug: "tactical-elite-performance-polo",
    category: "Polos",
    group: "Apparel",
    material: "100% Polyester (5.2 oz)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 13.33,
    originalPrice: 13.33,
    image: "assets/assets/images/products/T-shirts/IA8001/IA8001-royal-01.webp",
    featureImage: "assets/assets/images/products/T-shirts/IA8001/IA8001-feature.webp",
    description: "Field-tested, boardroom-ready — the Tactical Elite Performance Polo is built from 5.2 oz performance polyester with advanced moisture-wicking, anti-odor technology, and UPF 40+ sun protection. Whether you're on the course or on the clock, it delivers breathable, uncompromised performance all day.",
    popular: false,

    standout: true,
    standoutBadge: "PREMIUM APPAREL",
    standoutAccent: "#D4AF37",

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
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/T-shirts/IA8001/IA8001-red-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/T-shirts/IA8001/IA8001-white-01.webp" },
        { name: "Grey", hex: "#B0B0B0", image: "assets/assets/images/products/T-shirts/IA8001/IA8001-grey-01.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/T-shirts/IA8001/IA8001-black-01.webp" },
        { name: "Royal", hex: "#1E3FBF", image: "assets/assets/images/products/T-shirts/IA8001/IA8001-royal-01.webp" },
        { name: "Moss Green", hex: "#5A6242", image: "assets/assets/images/products/T-shirts/IA8001/IA8001-moss-green-01.webp" },
        { name: "Navy", hex: "#1B2A4A", image: "assets/assets/images/products/T-shirts/IA8001/IA8001-navy-01.webp" }
    ],

    images: [
        "assets/assets/images/products/T-shirts/IA8001/IA8001-black-01.webp",
        "assets/assets/images/products/T-shirts/IA8001/IA8001-red-01.webp",
        "assets/assets/images/products/T-shirts/IA8001/IA8001-white-01.webp",
        "assets/assets/images/products/T-shirts/IA8001/IA8001-grey-01.webp",
        "assets/assets/images/products/T-shirts/IA8001/IA8001-royal-01.webp",
        "assets/assets/images/products/T-shirts/IA8001/IA8001-moss-green-01.webp",
        "assets/assets/images/products/T-shirts/IA8001/IA8001-navy-01.webp"
    ],

    specs: {
        itemNo: "IA8001",
        styleNumber: "8001",
        season: "Core",
        weight: "5.2 oz",
        material: "100% Polyester",
        yarn: "Performance Polyester",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",

        sizeChart: [
            { size: "S", chest: '18"', bodyLength: '28"' },
            { size: "M", chest: '20"', bodyLength: '29"' },
            { size: "L", chest: '22"', bodyLength: '30"' },
            { size: "XL", chest: '24"', bodyLength: '31"' },
            { size: "2XL", chest: '26"', bodyLength: '32"' },
            { size: "3XL", chest: '28"', bodyLength: '33"' },
            { size: "4XL", chest: '30"', bodyLength: '34"' },
            { size: "5XL", chest: '32"', bodyLength: '35"' }
        ],

        features: {
            moistureWicking: "Advanced moisture-wicking technology pulls sweat to surface for rapid evaporation",
            odorResistance: "Premium anti-odor technology prevents growth of odor-causing bacteria",
            sunProtection: "UPF 40+ sun protection shields from UVA and UVB rays"
        },

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - L", price: "$13.33" },
            upsizeCharges: [
                { size: "XL", charge: "$0.60" },
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.80" },
                { size: "4XL", charge: "$4.09" },
                { size: "5XL", charge: "$6.62" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "XL", charge: 0.60 },
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.80 },
            { size: "4XL", charge: 4.09 },
            { size: "5XL", charge: 6.62 }
        ]
    }
},
{
    id: "IA1122",
    name: "Bloom Crop Hoodie",
    code: "IA1122",
    slug: "bloom-crop-hoodie",
    category: "Hoodies",
    group: "Apparel",
    material: "60% Cotton / 40% Polyester Fleece (7.8 oz)",
    size: 'XS - XL',
    imprint: "N/A",
    price: 13.33,
    originalPrice: 13.33,
    image: "assets/assets/images/products/hoodies/IA1122/IA1122-dust-01.webp",
    featureImage: "assets/assets/images/products/hoodies/IA1122/IA1122-feature.webp",
    description: "Soft fleece, cropped cut, everyday cool — the Bloom Crop Hoodie pairs a cozy 7.8 oz cotton-poly blend with a relaxed silhouette made for layering. Designed for girls who move fast and dress smart.",
    popular: false,

    standout: true,
    standoutBadge: "PREMIUM APPAREL",
    standoutAccent: "#D4AF37",

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
        { name: "Dust", hex: "#E8DCC4", image: "assets/assets/images/products/hoodies/IA1122/IA1122-dust-01.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/hoodies/IA1122/IA1122-black-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/hoodies/IA1122/IA1122-red-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/hoodies/IA1122/IA1122-white-01.webp" }
    ],

    images: [
        "assets/assets/images/products/hoodies/IA1122/IA1122-white-01.webp",
        "assets/assets/images/products/hoodies/IA1122/IA1122-dust-01.webp",
        "assets/assets/images/products/hoodies/IA1122/IA1122-black-01.webp",
        "assets/assets/images/products/hoodies/IA1122/IA1122-red-01.webp"
    ],

    specs: {
        itemNo: "IA1122",
        styleNumber: "1122",
        season: "Core",
        weight: "7.8 oz (264 GSM)",
        material: "60% Cotton / 40% Polyester Fleece",
        yarn: "Fleece",
        sizes: "XS to XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",

        sizeChart: [
            { size: "XS", chest: '14"', bodyLength: '17"' },
            { size: "S", chest: '15"', bodyLength: '18"' },
            { size: "M", chest: '16"', bodyLength: '19"' },
            { size: "L", chest: '17"', bodyLength: '20"' },
            { size: "XL", chest: '18"', bodyLength: '21"' }
        ],

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "XS - XL", price: "$13.33" },
            upsizeCharges: [
                { size: "XL", charge: "$0.60" },
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.80" },
                { size: "4XL", charge: "$4.09" },
                { size: "5XL", charge: "$6.62" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "XL", charge: 0.60 },
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.80 },
            { size: "4XL", charge: 4.09 },
            { size: "5XL", charge: 6.62 }
        ]
    }
},
{
    id: "IA2011",
    name: "Meridian Fleece Hoodie",
    code: "IA2011",
    slug: "meridian-fleece-hoodie",
    category: "Hoodies",
    group: "Apparel",
    material: "60% Cotton / 40% Polyester Fleece (8.4 oz)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 19.00,
    originalPrice: 19.00,
    image: "assets/assets/images/products/hoodies/IA2011/IA2011-royal-01.webp",
    featureImage: "assets/assets/images/products/hoodies/IA2011/IA2011-feature.webp",
    description: "Warmth, meet durability — the Meridian Fleece Hoodie is built from an 8.4 oz cotton-poly blend with a soft brushed interior and a relaxed unisex fit. Designed for layering, made to last through cold seasons and high-volume decoration.",
    popular: false,

    standout: true,
    standoutBadge: "PREMIUM APPAREL",
    standoutAccent: "#D4AF37",

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
        { name: "Charcoal Heather", hex: "#4A4A4A", image: "assets/assets/images/products/hoodies/IA2011/IA2011-charcoal-heather-01.webp" },
        { name: "Sports Grey", hex: "#B0B0B0", image: "assets/assets/images/products/hoodies/IA2011/IA2011-sports-grey-01.webp" },
        { name: "Dust", hex: "#E8DCC4", image: "assets/assets/images/products/hoodies/IA2011/IA2011-dust-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/hoodies/IA2011/IA2011-red-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/hoodies/IA2011/IA2011-white-01.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/hoodies/IA2011/IA2011-black-01.webp" },
        { name: "Royal Blue", hex: "#1E3FBF", image: "assets/assets/images/products/hoodies/IA2011/IA2011-royal-blue-01.webp" },
        { name: "Navy", hex: "#1B2A4A", image: "assets/assets/images/products/hoodies/IA2011/IA2011-navy-01.webp" }
    ],

    images: [
        "assets/assets/images/products/hoodies/IA2011/IA2011-white-01.webp",
        "assets/assets/images/products/hoodies/IA2011/IA2011-black-01.webp",
        "assets/assets/images/products/hoodies/IA2011/IA2011-charcoal-heather-01.webp",
        "assets/assets/images/products/hoodies/IA2011/IA2011-sports-grey-01.webp",
        "assets/assets/images/products/hoodies/IA2011/IA2011-dust-01.webp",
        "assets/assets/images/products/hoodies/IA2011/IA2011-red-01.webp",
        "assets/assets/images/products/hoodies/IA2011/IA2011-royal-blue-01.webp",
        "assets/assets/images/products/hoodies/IA2011/IA2011-navy-01.webp"
    ],

    specs: {
        itemNo: "IA2011",
        styleNumber: "2011",
        season: "Core",
        weight: "8.4 oz",
        material: "60% Cotton / 40% Polyester Fleece",
        yarn: "Fleece",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",

        sizeChart: [
            { size: "S", chest: '20"', bodyLength: '26"' },
            { size: "M", chest: '22"', bodyLength: '27"' },
            { size: "L", chest: '24"', bodyLength: '28"' },
            { size: "XL", chest: '26"', bodyLength: '29"' },
            { size: "2XL", chest: '28"', bodyLength: '30"' },
            { size: "3XL", chest: '30"', bodyLength: '31"' },
            { size: "4XL", chest: '32"', bodyLength: '32"' },
            { size: "5XL", chest: '34"', bodyLength: '33"' }
        ],

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - L", price: "$19.00" },
            upsizeCharges: [
                { size: "XL", charge: "$0.60" },
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.80" },
                { size: "4XL", charge: "$4.09" },
                { size: "5XL", charge: "$6.62" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "XL", charge: 0.60 },
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.80 },
            { size: "4XL", charge: 4.09 },
            { size: "5XL", charge: 6.62 }
        ]
    }
},
{
    id: "IA2013",
    name: "Meridian Fleece Crew",
    code: "IA2013",
    slug: "meridian-fleece-crew",
    category: "Crewneck Sweatshirts",
    group: "Apparel",
    material: "60% Cotton / 40% Polyester Fleece (8.4 oz)",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 22.22,
    originalPrice: 22.22,
    image: "assets/assets/images/products/sweatshirts/IA2013/IA2013-irish-green-01.webp",
    featureImage: "assets/assets/images/products/sweatshirts/IA2013/IA2013-feature.webp",
    description: "Warmth with a clean finish — the Meridian Fleece Crew is built on the same trusted 8.4 oz cotton-poly fleece as our hoodies, cut into a classic crewneck silhouette. Soft brushed interior, durable construction, and ready for layering or standalone wear.",
    popular: false,

    standout: true,
    standoutBadge: "PREMIUM APPAREL",
    standoutAccent: "#D4AF37",

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
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/sweatshirts/IA2013/IA2013-white-01.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/sweatshirts/IA2013/IA2013-black-01.webp" },
        { name: "Charcoal Heather", hex: "#4A4A4A", image: "assets/assets/images/products/sweatshirts/IA2013/IA2013-charcoal-heather-01.webp" },
        { name: "Sports Grey", hex: "#B0B0B0", image: "assets/assets/images/products/sweatshirts/IA2013/IA2013-sports-grey-01.webp" },
        { name: "Dust", hex: "#E8DCC4", image: "assets/assets/images/products/sweatshirts/IA2013/IA2013-dust-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/sweatshirts/IA2013/IA2013-red-01.webp" },
        { name: "Royal Blue", hex: "#1E3FBF", image: "assets/assets/images/products/sweatshirts/IA2013/IA2013-royal-blue-01.webp" },
        { name: "Navy", hex: "#1B2A4A", image: "assets/assets/images/products/sweatshirts/IA2013/IA2013-navy-01.webp" },
        { name: "Moss Green", hex: "#5A6242", image: "assets/assets/images/products/sweatshirts/IA2013/IA2013-moss-green-01.webp" },
        { name: "Maroon", hex: "#5A1A2B", image: "assets/assets/images/products/sweatshirts/IA2013/IA2013-maroon-01.webp" }
    ],

    images: [
        "assets/assets/images/products/sweatshirts/IA2013/IA2013-white-01.webp",
        "assets/assets/images/products/sweatshirts/IA2013/IA2013-black-01.webp",
        "assets/assets/images/products/sweatshirts/IA2013/IA2013-charcoal-heather-01.webp",
        "assets/assets/images/products/sweatshirts/IA2013/IA2013-sports-grey-01.webp",
        "assets/assets/images/products/sweatshirts/IA2013/IA2013-dust-01.webp",
        "assets/assets/images/products/sweatshirts/IA2013/IA2013-red-01.webp",
        "assets/assets/images/products/sweatshirts/IA2013/IA2013-royal-blue-01.webp",
        "assets/assets/images/products/sweatshirts/IA2013/IA2013-navy-01.webp",
        "assets/assets/images/products/sweatshirts/IA2013/IA2013-moss-green-01.webp",
        "assets/assets/images/products/sweatshirts/IA2013/IA2013-maroon-01.webp"
    ],

    specs: {
        itemNo: "IA2013",
        styleNumber: "2013",
        season: "Core",
        weight: "8.4 oz",
        material: "60% Cotton / 40% Polyester Fleece",
        yarn: "Fleece",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",

        sizeChart: [
            { size: "S", chest: '20"', bodyLength: '26"' },
            { size: "M", chest: '22"', bodyLength: '27"' },
            { size: "L", chest: '24"', bodyLength: '28"' },
            { size: "XL", chest: '26"', bodyLength: '29"' },
            { size: "2XL", chest: '28"', bodyLength: '30"' },
            { size: "3XL", chest: '30"', bodyLength: '31"' },
            { size: "4XL", chest: '32"', bodyLength: '32"' },
            { size: "5XL", chest: '34"', bodyLength: '33"' }
        ],

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - L", price: "$22.22" },
            upsizeCharges: [
                { size: "XL", charge: "$0.60" },
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.80" },
                { size: "4XL", charge: "$4.09" },
                { size: "5XL", charge: "$6.62" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "XL", charge: 0.60 },
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.80 },
            { size: "4XL", charge: 4.09 },
            { size: "5XL", charge: 6.62 }
        ]
    }
},
{
    id: "IA11001",
    name: "Ember Burnout Hoodie",
    code: "IA11001",
    slug: "ember-burnout-hoodie",
    category: "Hoodies",
    group: "Apparel",
    material: "60% Cotton / 40% Polyester Fleece (9.0 oz)",
    size: 'S - 3XL',
    imprint: "N/A",
    price: 21.11,
    originalPrice: 21.11,
    image: "assets/assets/images/products/hoodies/IA11001/IA11001-black-01.webp",
    featureImage: "assets/assets/images/products/hoodies/IA11001/IA11001-feature.webp",
    description: "Made to fade — the Ember Burnout Hoodie pairs a warm 9 oz cotton-poly fleece with a unique burnout finish that gives every piece a soft, lived-in look. Durable construction, relaxed unisex fit, and ready for custom decoration.",
    popular: false,

    standout: true,
    standoutBadge: "PREMIUM APPAREL",
    standoutAccent: "#D4AF37",

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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/hoodies/IA11001/IA11001-black-01.webp" },
        { name: "Denim", hex: "#1E3FBF", image: "assets/assets/images/products/hoodies/IA11001/IA11001-denim-01.webp" }
    ],

    images: [
        "assets/assets/images/products/hoodies/IA11001/IA11001-black-01.webp",
        "assets/assets/images/products/hoodies/IA11001/IA11001-denim-01.webp"
    ],

    specs: {
        itemNo: "IA11001",
        styleNumber: "11001",
        season: "Core",
        weight: "9.0 oz",
        material: "60% Cotton / 40% Polyester Fleece",
        yarn: "Burnout Fleece",
        sizes: "S to 3XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",

        sizeChart: [
            { size: "S", chest: '20"', bodyLength: '26"' },
            { size: "M", chest: '22"', bodyLength: '27"' },
            { size: "L", chest: '24"', bodyLength: '28"' },
            { size: "XL", chest: '26"', bodyLength: '29"' },
            { size: "2XL", chest: '28"', bodyLength: '30"' },
            { size: "3XL", chest: '30"', bodyLength: '31"' }
        ],

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - L", price: "$21.11" },
            upsizeCharges: [
                { size: "XL", charge: "$0.60" },
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.80" },
                { size: "4XL", charge: "$4.09" },
                { size: "5XL", charge: "$6.62" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "XL", charge: 0.60 },
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.80 },
            { size: "4XL", charge: 4.09 },
            { size: "5XL", charge: 6.62 }
        ]
    }
},
{
    id: "IA11005",
    name: "Nantucket Fleece Hoodie",
    code: "IA11005",
    slug: "nantucket-fleece-hoodie",
    category: "Hoodies",
    group: "Apparel",
    material: "60% Cotton / 40% Polyester Fleece (9.0 oz)",
    size: 'S - 3XL',
    imprint: "N/A",
    price: 21.11,
    originalPrice: 21.11,
    image: "assets/assets/images/products/hoodies/IA11005/IA11005-black-01.webp",
    featureImage: "assets/assets/images/products/hoodies/IA11005/IA11005-feature.webp",
    description: "Coastal-inspired and built for warmth — the Nantucket Fleece Hoodie is cut from a substantial 9 oz cotton-poly blend with a soft brushed interior. Relaxed unisex fit, durable construction, and a classic Salt & Pepper or Black finish that layers effortlessly.",
    popular: false,

    standout: true,
    standoutBadge: "PREMIUM APPAREL",
    standoutAccent: "#D4AF37",

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
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/hoodies/IA11005/IA11005-black-01.webp" },
        { name: "Salt & Pepper", hex: "#B8B8B8", image: "assets/assets/images/products/hoodies/IA11005/IA11005-salt-and-pepper-01.webp" }
    ],

    images: [
        "assets/assets/images/products/hoodies/IA11005/IA11005-black-01.webp",
        "assets/assets/images/products/hoodies/IA11005/IA11005-salt-and-pepper-01.webp"
    ],

    specs: {
        itemNo: "IA11005",
        styleNumber: "11005",
        season: "Core",
        weight: "9.0 oz",
        material: "60% Cotton / 40% Polyester Fleece",
        yarn: "Brushed Fleece",
        sizes: "S to 3XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",

        sizeChart: [
            { size: "S", chest: '20"', bodyLength: '26"' },
            { size: "M", chest: '22"', bodyLength: '27"' },
            { size: "L", chest: '24"', bodyLength: '28"' },
            { size: "XL", chest: '26"', bodyLength: '29"' },
            { size: "2XL", chest: '28"', bodyLength: '30"' },
            { size: "3XL", chest: '30"', bodyLength: '31"' }
        ],

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - L", price: "$21.11" },
            upsizeCharges: [
                { size: "XL", charge: "$0.60" },
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.80" },
                { size: "4XL", charge: "$4.09" },
                { size: "5XL", charge: "$6.62" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "XL", charge: 0.60 },
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.80 },
            { size: "4XL", charge: 4.09 },
            { size: "5XL", charge: 6.62 }
        ]
    }
}, {
    id: "IA1001",
    name: "Signature Premium Tee",
    code: "IA1001",
    slug: "signature-premium-tee",
    category: "T-Shirts",
    group: "Apparel",
    material: "100% Cotton (4.3 oz) – Heathers: 60/40 Cotton/Poly",
    size: 'S - 5XL',
    imprint: "N/A",
    price: 5.73,
    originalPrice: 5.73,
    image: "assets/assets/images/products/T-shirts/IA1001/IA1001-peach-01.webp",
    featureImage: "assets/assets/images/products/T-shirts/IA1001/IA1001-feature.webp",
    description: "Everyday luxury, refined — the Signature Premium Tee is spun from ring-spun combed cotton and finished with an enzyme wash for a smooth, lived-in softness that only gets better with every wash. A wardrobe staple built to last.",
    popular: false,

    standout: true,
    standoutBadge: "PREMIUM APPAREL",
    standoutAccent: "#D4AF37",

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

        { name: "Brown", hex: "#5A3825", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-brown-01.webp" },
        { name: "Moss Green", hex: "#5A6242", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-moss-green-01.webp" },
        { name: "Gold", hex: "#D4AF37", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-gold-01.webp" },
        { name: "Camo", hex: "#4B5320", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-camo-01.webp" },
        { name: "Black", hex: "#000000", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-black-01.webp" },
        { name: "Yellow", hex: "#FFFF00", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-yellow-01.webp" },
        { name: "Pacific Blue", hex: "#4A90C2", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-pacific-blue-01.webp" },
        { name: "Purple", hex: "#5B2A8C", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-purple-01.webp" },
        { name: "Turquoise", hex: "#40E0D0", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-turquoise-01.webp" },
        { name: "Sawana Brown", hex: "#8B6F47", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-sawana-brown-01.webp" },
        { name: "Texas Orange", hex: "#D2551E", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-texas-orange-01.webp" },
        { name: "Dust", hex: "#E8DCC4", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-dust-01.webp" },
        { name: "Kelly Green", hex: "#1B8A4C", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-kelly-green-01.webp" },
        { name: "Mustard", hex: "#D4A72C", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-mustard-01.webp" },
        { name: "Royal", hex: "#1E3FBF", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-royal-01.webp" },
        { name: "Rust", hex: "#B7410E", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-rust-01.webp" },
        { name: "Lavender", hex: "#B57EDC", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-lavender-01.webp" },
        { name: "Pure Navy", hex: "#1B2A4A", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-pure-navy-01.webp" },
        { name: "Decadent Chocolate", hex: "#3B2417", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-decadent-chocolate-01.webp" },
        { name: "Baby Pink", hex: "#F4C7CE", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-baby-pink-01.webp" },
        { name: "Burgundy", hex: "#5A1A2B", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-burgundy-01.webp" },
        { name: "Peach", hex: "#FFCBA4", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-peach-01.webp" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-white-01.webp" },
        { name: "Orange", hex: "#F26522", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-orange-01.webp" },
        { name: "Military Green", hex: "#5A6242", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-military-green-01.webp" },
        { name: "Hot Pink", hex: "#E91E8C", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-hot-pink-01.webp" },
        { name: "Mint", hex: "#B8E8D8", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-mint-01.webp" },
        { name: "Coral", hex: "#FF7F50", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-coral-01.webp" },
        { name: "Lime Green", hex: "#32CD32", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-lime-green-01.webp" },
        { name: "Red", hex: "#D42B2B", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-red-01.webp" },
        { name: "Sports Grey", hex: "#B0B0B0", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-sports-grey-01.webp" },
        { name: "Maroon", hex: "#5A1A2B", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-maroon-01.webp" },
        { name: "Charcoal Heather", hex: "#4A4A4A", image: "assets/assets/images/products/T-shirts/IA1001/IA1001-charcoal-heather-01.webp" }
    ],

    images: [
        "assets/assets/images/products/T-shirts/IA1001/IA1001-white-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-black-01.webp",

        "assets/assets/images/products/T-shirts/IA1001/IA1001-brown-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-moss-green-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-gold-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-camo-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-yellow-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-pacific-blue-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-purple-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-turquoise-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-sawana-brown-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-texas-orange-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-dust-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-kelly-green-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-mustard-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-royal-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-rust-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-lavender-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-pure-navy-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-decadent-chocolate-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-baby-pink-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-burgundy-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-peach-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-orange-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-military-green-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-hot-pink-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-mint-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-coral-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-lime-green-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-red-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-sports-grey-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-maroon-01.webp",
        "assets/assets/images/products/T-shirts/IA1001/IA1001-charcoal-heather-01.webp"
    ],

    specs: {
        itemNo: "IA1001",
        styleNumber: "1001",
        season: "Core",
        weight: "4.3 oz (145 GSM)",
        material: "100% Cotton",
        yarn: "Ring-spun Combed Cotton",
        sizes: "S to 5XL",
        minimumOrder: "No minimum on stock colors",
        shipping: "Ships the same day when paid by 12 PM PT",
        label: "Tear Away",

        sizeChart: [
            { size: "S", chest: '18"', bodyLength: '28"' },
            { size: "M", chest: '20"', bodyLength: '29"' },
            { size: "L", chest: '22"', bodyLength: '30"' },
            { size: "XL", chest: '24"', bodyLength: '31"' },
            { size: "2XL", chest: '26"', bodyLength: '32"' },
            { size: "3XL", chest: '28"', bodyLength: '33"' },
            { size: "4XL", chest: '30"', bodyLength: '34"' },
            { size: "5XL", chest: '32"', bodyLength: '35"' }
        ],

        fabricNotes: {
            standard: "100% Cotton – All colors except Heather Gray, Charcoal Heather, and Sport Grey.",
            heathers: "Heather Gray & Charcoal Heather: 60% Cotton / 40% Polyester.",
            sportGrey: "Sport Grey: 90% Cotton / 10% Viscose.",
            construction: "Tubular"
        },

        packagingOptions: "Call for details"
    },

    pricing: {
        blank: {
            label: "BLANK PRICING (USD)",
            basePrice: { label: "S - L", price: "$5.73" },
            upsizeCharges: [
                { size: "XL", charge: "$0.60" },
                { size: "2XL", charge: "$0.90" },
                { size: "3XL", charge: "$1.80" },
                { size: "4XL", charge: "$4.09" },
                { size: "5XL", charge: "$6.62" }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 2 to 3 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        upsizeCharges: [
            { size: "XL", charge: 0.60 },
            { size: "2XL", charge: 0.90 },
            { size: "3XL", charge: 1.80 },
            { size: "4XL", charge: 4.09 },
            { size: "5XL", charge: 6.62 }
        ]
    }
},
{
    id: "is100",
    name: "Mesh Pocket Drawstring Backpack",
    code: "IS100",
    slug: "mesh-pocket-drawstring-backpack",
    category: "Drawstring Bags",
    material: "210D Polyester",
    size: '14"W x 16.5"H',
    imprint: '7"W x 6"H',
    price: 30.00,
    originalPrice: 45.00,
    image: "assets/assets/images/products/drawstring-bags/IS100/IS100-lime.webp",
    description: "Lightweight 210D polyester drawstring backpack with a zippered front pocket and mesh side panels. Cinch closure with rope cord handles makes it easy to carry, while the mesh sides add ventilation and a sporty look. Ideal for gyms, schools, promotional events, and everyday use.",

    popular: false,

    colors: [
        { name: "Black", hex: "#1C1C1C", image: "assets/assets/images/products/drawstring-bags/IS100/IS100-black.webp" },
        { name: "Grey", hex: "#808080", image: "assets/assets/images/products/drawstring-bags/IS100/IS100-grey.webp" },
        { name: "Lime", hex: "#84CC16", image: "assets/assets/images/products/drawstring-bags/IS100/IS100-lime.webp" },
        { name: "Navy", hex: "#1E2E4A", image: "assets/assets/images/products/drawstring-bags/IS100/IS100-navy.webp" },
        { name: "Red", hex: "#C62828", image: "assets/assets/images/products/drawstring-bags/IS100/IS100-red.webp" },
        { name: "Royal", hex: "#2455A4", image: "assets/assets/images/products/drawstring-bags/IS100/IS100-royal.webp" },
        { name: "Teal", hex: "#008C95", image: "assets/assets/images/products/drawstring-bags/IS100/IS100-teal.webp" }
    ],

    images: [
        "assets/assets/images/products/drawstring-bags/IS100/IS100-lime.webp",
        "assets/assets/images/products/drawstring-bags/IS100/IS100-black.webp",
        "assets/assets/images/products/drawstring-bags/IS100/IS100-grey.webp",
        "assets/assets/images/products/drawstring-bags/IS100/IS100-navy.webp",
        "assets/assets/images/products/drawstring-bags/IS100/IS100-royal.webp",
        "assets/assets/images/products/drawstring-bags/IS100/IS100-teal.webp"
    ],

    specs: {
        itemNo: "IS100",
        gusset: "Bottom: No Side: No",
        weight: "210D",
        material: "210D Polyester",
        handle: "Drawstring Cinch Closure. Rope Cord",

        packagingOptions: [
            {
                type: "Printed Large Box",
                qtyPerBox: "350 pcs",
                boxWeight: "44 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "125 pcs",
                boxWeight: "17 lbs",
                boxDims: '8" x 16" x 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "COLOR", prices: ["$3.49", "$3.40", "$3.30", "$3.22", "$3.10"] },
                { label: "ADD LOCATION", prices: ["$0.62", "$0.62", "$0.62", "$0.62", "$0.62"] },
                { label: "ADD COLOR", prices: ["$0.52", "$0.52", "$0.52", "$0.52", "$0.52"] }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days after Art Approval",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$37.50 (V)"
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "COLOR", prices: ["$6.56", "$6.06", "$5.78", "$5.35", "$4.98"] },
                { label: "ADD LOCATION", prices: ["$1.68", "$1.68", "$1.68", "$1.68", "$1.68"] }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-9 Business Days after art approval",
            rush: "Yes",
            imprintArea: '6.5"W x 5.5"H',
            setupCharge: "$112.50 (V)"
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "COLOR", prices: ["$2.65"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        setupCharge: "$56.25 (V) - Spot printing",
        setupChargeTransfer: "$112.50 (V) - Heat Transfer",
        repeatSetup: "$37.50 (V)",
        pmsMatch: "$56.25 (V)",
        lessThanMinimum: "Call for pricing",
        colorChangeFee: "$18.75 (V)",
        sampleProof: "Contact for pricing"
    }
},
{
    id: "is128",
    name: "Showstopping Sparkle Glitter Bag - Large",
    code: "IS128",
    slug: "showstopping-sparkle-glitter-bag-large",
    category: "Non-Woven Bags",
    material: "Non-Woven, Laminated",
    size: '17"W x 13"H x 5"D',
    imprint: '10"W x 8"H',
    price: 2.76,
    originalPrice: 50.00,
    image: "assets/assets/images/products/non-woven/IS128/IS128-Silver.jpg",
    description: "Make your brand sparkle with this laminated 120 GSM glitter bag featuring full side and bottom gussets and 22-inch self handles. The shimmering finish catches the eye at trade shows, retail counters, and promotional events, while the roomy 17\" x 13\" x 5\" body carries groceries, gifts, and giveaways with ease.",

    popular: false,

    colors: [
        { name: "Gold", hex: "#D4AF37", image: "assets/assets/images/products/non-woven/IS128/IS128-Gold.jpg" },
        { name: "Pewter Grey", hex: "#8A8D8F", image: "assets/assets/images/products/non-woven/IS128/IS128-Pewter Grey.jpg" },
        { name: "Silver", hex: "#C0C0C0", image: "assets/assets/images/products/non-woven/IS128/IS128-Silver.jpg" }
    ],

    images: [
        "assets/assets/images/products/non-woven/IS128/IS128-Silver.jpg",
        "assets/assets/images/products/non-woven/IS128/IS128-Gold.jpg",
        "assets/assets/images/products/non-woven/IS128/IS128-Pewter Grey.jpg"
    ],

    specs: {
        itemNo: "IS128",
        gusset: "Bottom: Yes Side: Yes",
        weight: "120 GSM",
        material: "Non-Woven, Laminated",
        handle: '22" self handles',
        
        packagingOptions: [
            {
                type: "Printed Large Box",
                qtyPerBox: "150 pcs",
                boxWeight: "25 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "75 pcs",
                boxWeight: "13 lbs",
                boxDims: '8" x 16" x 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "COLOR",        prices: ["$4.09", "$3.99", "$3.88", "$3.78", "$3.64"] },
                { label: "ADD LOCATION", prices: ["$0.62", "$0.62", "$0.62", "$0.62", "$0.62"] }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days after Art Approval",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$37.50 (V)"
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "COLOR", prices: ["$2.76"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        setupCharge: "$56.25 (V)",
        repeatSetup: "$37.50 (V)",
        pmsMatch: "$56.25 (V)",
        lessThanMinimum: "Call for pricing",
        colorChangeFee: "$18.75 (V)",
        sampleProof: "Contact for pricing",
        artworkCharges: "$75.00 (V) / Hour"
    }
},
{
    id: "is132",
    name: "Mesh Beach Bag",
    code: "IS132",
    slug: "mesh-beach-bag",
    category: "Tote Bags",
    material: "Cotton Canvas",
    size: '20"W x 15"H x 5"D',
    imprint: '14"W x 6"H',
    price: 3.81,
    originalPrice: 50.00,
    image: "assets/assets/images/products/tote-bags/IS132/IS132-Natural.jpg",
    description: "Built for sun, sand, and everything in between — this 7 oz cotton canvas beach tote features a breathable mesh top panel that lets sand fall through and keeps wet items ventilated. With a roomy 20\" x 15\" x 5\" body, a bottom gusset for extra capacity, and 22-inch self handles, it's the perfect carry-all for beach days, pool trips, farmers markets, and weekend getaways.",

    popular: false,

    colors: [
        { name: "Natural", hex: "#F5F0E1", image: "assets/assets/images/products/tote-bags/IS132/IS132-Natural.jpg" }
    ],

    images: [
        "assets/assets/images/products/tote-bags/IS132/IS132-Natural.jpg"
    ],

    specs: {
        itemNo: "IS132",
        gusset: "Bottom: Yes Side: No",
        weight: "7 OZ",
        material: "Cotton Canvas",
        handle: '22" Self Handles',
        decoratedIn: "USA",
        packagingOptions: [
            {
                type: "Printed Large Box",
                qtyPerBox: "175 pcs",
                boxWeight: "39 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "75 pcs",
                boxWeight: "18 lbs",
                boxDims: '8" x 16" x 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "NATURAL",      prices: ["$4.79", "$4.68", "$4.54", "$4.43", "$4.27"] },
                { label: "ADD LOCATION", prices: ["$0.62", "$0.62", "$0.62", "$0.62", "$0.62"] },
                { label: "ADD COLOR",    prices: ["$0.52", "$0.52", "$0.52", "$0.52", "$0.52"] }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days after Art Approval",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$37.50 (V)"
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "COLOR",        prices: ["$8.06", "$7.45", "$7.10", "$6.59", "$6.14"] },
                { label: "ADD LOCATION", prices: ["$1.68", "$1.68", "$1.68", "$1.68", "$1.68"] }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-9 Business Days after art approval",
            rush: "Yes",
            imprintArea: '14"W x 6"H',
            setupCharge: "$112.50 (V)"
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "NATURAL", prices: ["$3.81"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        setupCharge: "$56.25 - Spot Printing (V)",
        setupChargeTransfer: "$112.50 - Heat Transfer (V)",
        repeatSetup: "$37.50 (V)",
        pmsMatch: "$56.25 (V)",
        lessThanMinimum: "Call for pricing",
        colorChangeFee: "$18.75 (V)",
        sampleProof: "Contact for pricing",
        artworkCharges: "$75.00 (V) / Hour"
    }
},

{
    id: "is134",
    name: "Laminated Gift Tote",
    code: "IS134",
    slug: "laminated-gift-tote",
    category: "Non-Woven Bags",
    material: "Non-Woven, Laminated",
    size: '9"W x 12"H x 4.5"D',
    imprint: '6"W x 6"H',
    price: 1.83,
    originalPrice: 50.00,
    image: "assets/assets/images/products/non-woven/IS134/IS134-Black.jpg",
    description: "Polished and practical — this matte-finish 105 GSM laminated non-woven tote pairs a sophisticated look with everyday durability. Contrasting side and bottom gussets add a subtle design detail, while X-reinforced self handles deliver extra strength where it matters. Sized at 9\" x 12\" x 4.5\", it's ideal for gift packaging, boutique retail, cosmetic promotions, and event giveaways.",

    popular: false,

    colors: [
        { name: "Black", hex: "#1C1C1C", image: "assets/assets/images/products/non-woven/IS134/IS134-Black.jpg" },
        { name: "Grey", hex: "#808080", image: "assets/assets/images/products/non-woven/IS134/IS134-Grey.jpg" },
        { name: "Red", hex: "#C62828", image: "assets/assets/images/products/non-woven/IS134/IS134-Red.jpg" },
        { name: "Royal", hex: "#2455A4", image: "assets/assets/images/products/non-woven/IS134/IS134-Royal.jpg" },
        { name: "Teal", hex: "#008C95", image: "assets/assets/images/products/non-woven/IS134/IS134-Teal.jpg" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/non-woven/IS134/IS134-White.jpg" }
    ],

    images: [
        "assets/assets/images/products/non-woven/IS134/IS134-Black.jpg",
        "assets/assets/images/products/non-woven/IS134/IS134-Grey.jpg",
        "assets/assets/images/products/non-woven/IS134/IS134-Red.jpg",
        "assets/assets/images/products/non-woven/IS134/IS134-Royal.jpg",
        "assets/assets/images/products/non-woven/IS134/IS134-Teal.jpg",
        "assets/assets/images/products/non-woven/IS134/IS134-White.jpg"
    ],

    specs: {
        itemNo: "IS134",
        gusset: "Bottom: Yes Side: Yes",
        weight: "105 GSM",
        material: "Non-Woven, Laminated",
        handle: '16" Self Handles',
        decoratedIn: "USA",
        packagingOptions: [
            {
                type: "Printed Large Box",
                qtyPerBox: "200 pcs",
                boxWeight: "24 lbs",
                boxDims: '20" x 16" x 16"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "COLOR",        prices: ["$3.07", "$3.00", "$2.91", "$2.84", "$2.73"] },
                { label: "ADD LOCATION", prices: ["$0.62", "$0.62", "$0.62", "$0.62", "$0.62"] }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days after Art Approval",
            setupCharge: "$56.25 - Spot Printing (V)",
            repeatSetup: "$37.50 (V)"
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "COLOR", prices: ["$1.83"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        setupCharge: "$56.25 (V)",
        repeatSetup: "$37.50 (V)",
        pmsMatch: "$56.25 (V)",
        lessThanMinimum: "Call for pricing",
        colorChangeFee: "$18.75 (V)",
        sampleProof: "Contact for pricing",
        artworkCharges: "$75.00 (V) / Hour"
    }
},
{
    id: "is135",
    name: "Laminated Gift Tote",
    code: "IS135",
    slug: "laminated-gift-tote-large",
    category: "Non-Woven Bags",
    material: "Non-Woven, Laminated",
    size: '16"W x 14"H x 6"D',
    imprint: '10"W x 8"H',
    price: 2.23,
    originalPrice: 50.00,
    image: "assets/assets/images/products/non-woven/IS135/IS135_White-White.jpg",
    description: "A larger take on our bestselling gift tote — this matte-finish 105 GSM laminated non-woven bag pairs a sophisticated look with real carrying capacity. The 16\" x 14\" x 6\" body with contrasting side and bottom gussets and X-reinforced 20-inch self handles makes it ideal for retail packaging, promotional gift sets, trade show giveaways, and event swag that needs to impress.",

    popular: false,

    colors: [
        { name: "Black", hex: "#1C1C1C", image: "assets/assets/images/products/non-woven/IS135/IS135_Black-White.jpg" },
        { name: "White", hex: "#FFFFFF", image: "assets/assets/images/products/non-woven/IS135/IS135_White-White.jpg" }
    ],

    images: [
        "assets/assets/images/products/non-woven/IS135/IS135_Black-White.jpg",
        "assets/assets/images/products/non-woven/IS135/IS135_White-White.jpg"
    ],

    specs: {
        itemNo: "IS135",
        gusset: "Bottom: Yes Side: Yes",
        weight: "105 GSM",
        material: "Non-Woven, Laminated",
        handle: '20" Self Handles',
        packagingOptions: [
            {
                type: "Printed Large Box",
                qtyPerBox: "150 pcs",
                boxWeight: "24 lbs",
                boxDims: '20" x 16" x 16"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "COLOR",        prices: ["$3.50", "$3.41", "$3.31", "$3.23", "$3.12"] },
                { label: "ADD LOCATION", prices: ["$0.62", "$0.62", "$0.62", "$0.62", "$0.62"] }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days after Art Approval",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$37.50 (V)"
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "COLOR", prices: ["$2.23"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        setupCharge: "$56.25 (V)- Spot Printing",
        repeatSetup: "$37.50 (V)",
        pmsMatch: "$56.25 (V)",
        lessThanMinimum: "Call for pricing",
        colorChangeFee: "$18.75 (V)",
        sampleProof: "Contact for pricing",
        artworkCharges: "$75.00 (V) / Hour"
    }
},
{
    id: "is121",
    name: "18 oz. Nautical Cotton Canvas Boat Bag",
    code: "IS121",
    slug: "nautical-cotton-canvas-boat-bag",
    category: "Tote Bags",
    material: "100% Cotton Canvas",
    size: '19.75"W x 13.25"H x 7"D',
    imprint: '4.5"W x 6"H',
    price: 11.41,
    originalPrice: 50.00,
    image: "assets/assets/images/products/tote-bags/IS121/IS121-Natural-Black.jpg",
    description: "Built for the long haul — this 18 oz cotton canvas boat bag delivers the rugged durability of a classic nautical tote with a natural canvas body and contrasting colored trim. The roomy 19.75\" x 13.25\" x 7\" main compartment, front slip pocket, reinforced 24-inch self handles, and bottom gusset make it perfect for boat days, weekend trips, farmers markets, and premium promotional programs that demand a heavyweight feel.",

    popular: false,

    colors: [
        { name: "Natural-Black", hex: "#F5F0E1", image: "assets/assets/images/products/tote-bags/IS121/IS121-Natural-Black.jpg" },
        { name: "Natural-Navy Blue", hex: "#1E2E4A", image: "assets/assets/images/products/tote-bags/IS121/IS121-Natural-Navy Blue.jpg" },
        { name: "Natural-Red", hex: "#C62828", image: "assets/assets/images/products/tote-bags/IS121/IS121-Natural-Red.jpg" }
    ],

    images: [
        "assets/assets/images/products/tote-bags/IS121/IS121-Natural-Black.jpg",
        "assets/assets/images/products/tote-bags/IS121/IS121-Natural-Navy Blue.jpg",
        "assets/assets/images/products/tote-bags/IS121/IS121-Natural-Red.jpg"
    ],

    specs: {
        itemNo: "IS121",
        gusset: "Bottom: Yes Side: No",
        weight: "18 oz",
        material: "100% Cotton Canvas",
        handle: '24" Reinforced Self Handles',
        decoratedIn: "USA",
        packagingOptions: [
            {
                type: "Printed Large Box",
                qtyPerBox: "50 pcs",
                boxWeight: "45 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "20 pcs",
                boxWeight: "19 lbs",
                boxDims: '8" x 16" x 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "COLOR",        prices: ["$13.30", "$12.97", "$12.59", "$12.29", "$11.85"] },
                { label: "ADD LOCATION", prices: ["$0.62", "$0.62", "$0.62", "$0.62", "$0.62"] },
                { label: "ADD COLOR",    prices: ["$0.52", "$0.52", "$0.52", "$0.52", "$0.52"] }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days after Art Approval",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$37.50 (V)"
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "COLOR",        prices: ["$17.77", "$16.52", "$15.69", "$14.65", "$13.73"] },
                { label: "ADD LOCATION", prices: ["$1.68", "$1.68", "$1.68", "$1.68", "$1.68"] }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-9 Business Days after art approval",
            rush: "Yes",
            imprintArea: '4"W x 5.5"H',
            setupCharge: "$125.00 (V)"
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "COLOR", prices: ["$11.41"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        setupCharge: "$56.25-Spot Printing (V)",
        setupChargeTransfer: "$125.00-Heat Transfer (V)",
        repeatSetup: "$37.50 (V)",
        pmsMatch: "$56.25 (V)",
        lessThanMinimum: "Call for pricing",
        colorChangeFee: "$18.75 (V)",
        sampleProof: "Contact for pricing",
        artworkCharges: "$75.00 (V) / Hour"
    }
},
{
    id: "is101",
    name: "Two Tone Poly Drawstring Backpack With Zipper",
    code: "IS101",
    slug: "two-tone-poly-drawstring-backpack-with-zipper",
    category: "Drawstring Bags",
    material: "210D Polyester",
    size: '13"W x 16.75"H',
    imprint: '8"W x 5"H',
    price: 2.30,
    originalPrice: 50.00,
    image: "assets/assets/images/products/drawstring-bags/IS101/IS101-Lime Green-Black.jpg",
    description: "Sporty and functional — this 210D polyester two-tone drawstring backpack pairs a classic cinch silhouette with a front angled zipper pocket and a rubberized headphone port. The rope cord drawstrings double as shoulder straps, making it a lightweight, hands-free carry for gyms, schools, festivals, and promotional giveaways that need to stand out with bold color blocking.",

    popular: false,

    colors: [
        { name: "Lime Green-Black", hex: "#84CC16", image: "assets/assets/images/products/drawstring-bags/IS101/IS101-Lime Green-Black.jpg" },
        { name: "Orange-Black", hex: "#F97316", image: "assets/assets/images/products/drawstring-bags/IS101/IS101-Orange-Black.jpg" },
        { name: "Red-Black", hex: "#C62828", image: "assets/assets/images/products/drawstring-bags/IS101/IS101-Red-Black.jpg" },
        { name: "Royal Blue-Black", hex: "#2455A4", image: "assets/assets/images/products/drawstring-bags/IS101/IS101-Royal Blue-Black.jpg" }
    ],

    images: [
        "assets/assets/images/products/drawstring-bags/IS101/IS101-Lime Green-Black.jpg",
        "assets/assets/images/products/drawstring-bags/IS101/IS101-Orange-Black.jpg",
        "assets/assets/images/products/drawstring-bags/IS101/IS101-Red-Black.jpg",
        "assets/assets/images/products/drawstring-bags/IS101/IS101-Royal Blue-Black.jpg"
    ],

    specs: {
        itemNo: "IS101",
        gusset: "Bottom: No Side: No",
        weight: "210D",
        material: "210D Polyester",
        handle: "Drawstring Cinch Closure, Rope Cord",
      
        packagingOptions: [
            {
                type: "Printed Large Box",
                qtyPerBox: "400 pcs",
                boxWeight: "50 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "150 pcs",
                boxWeight: "21 lbs",
                boxDims: '8" x 16" x 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "COLOR",        prices: ["$3.08", "$3.01", "$2.92", "$2.85", "$2.74"] },
                { label: "ADD LOCATION", prices: ["$0.62", "$0.62", "$0.62", "$0.62", "$0.62"] },
                { label: "ADD COLOR",    prices: ["$0.52", "$0.52", "$0.52", "$0.52", "$0.52"] }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days after Art Approval",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$37.50 (V)"
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "COLOR",        prices: ["$6.10", "$5.63", "$5.37", "$4.97", "$4.62"] },
                { label: "ADD LOCATION", prices: ["$1.68", "$1.68", "$1.68", "$1.68", "$1.68"] }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-9 Business Days after art approval",
            rush: "Yes",
            imprintArea: '7.5"W x 4.5"H',
            setupCharge: "$112.50 (V)"
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "COLOR", prices: ["$2.30"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        setupCharge: "$56.25-Spot Printing (V)",
        setupChargeTransfer: "$112.50-Heat Transfer (V)",
        repeatSetup: "$37.50 (V)",
        pmsMatch: "$56.25 (V)",
        lessThanMinimum: "Call for pricing",
        colorChangeFee: "$18.75 (V)",
        sampleProof: "Contact for pricing",
        artworkCharges: "$75.00 (V) / Hour"
    }
},
{
    id: "is102",
    name: "Two Tone Drawstring Cinch Bag",
    code: "IS102",
    slug: "two-tone-drawstring-cinch-bag",
    category: "Drawstring Bags",
    material: "Polyester, Non Woven",
    size: '13"W x 16.5"H',
    imprint: '8"W x 5"H',
    price: 2.57,
    originalPrice: 50.00,
    image: "assets/assets/images/products/drawstring-bags/IS102/IS102-Red-Grey.jpg",
    description: "A two-tone drawstring cinch bag that blends 300D polyester durability with an 80 GSM non-woven body. The angled front zipper pocket and built-in headphone port make it a practical everyday carry for gyms, schools, festivals, and promotional programs looking for a modern, sporty look.",

    popular: false,

    colors: [
        { name: "Red-Grey", hex: "#C62828", image: "assets/assets/images/products/drawstring-bags/IS102/IS102-Red-Grey.jpg" },
        { name: "Royal Blue-Grey", hex: "#2455A4", image: "assets/assets/images/products/drawstring-bags/IS102/IS102-Royal Blue-Grey.jpg" }
    ],

    images: [
        "assets/assets/images/products/drawstring-bags/IS102/IS102-Red-Grey.jpg",
        "assets/assets/images/products/drawstring-bags/IS102/IS102-Royal Blue-Grey.jpg"
    ],

    specs: {
        itemNo: "IS102",
        gusset: "Bottom: No Side: No",
        weight: "300D / 80 GSM",
        material: "Polyester, Non Woven",
        handle: "Drawstring Cinch Closure. Rope Cord",
   
        packagingOptions: [
            {
                type: "Printed Large Box",
                qtyPerBox: "200 pcs",
                boxWeight: "29 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "100 pcs",
                boxWeight: "15 lbs",
                boxDims: '8" x 16" x 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "COLOR",        prices: ["$3.38", "$3.30", "$3.20", "$3.12", "$3.01"] },
                { label: "ADD LOCATION", prices: ["$0.62", "$0.62", "$0.62", "$0.62", "$0.62"] },
                { label: "ADD COLOR",    prices: ["$0.52", "$0.52", "$0.52", "$0.52", "$0.52"] }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days after Art Approval",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$37.50 (V)"
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "COLOR",        prices: ["$6.44", "$5.95", "$5.67", "$5.25", "$4.88"] },
                { label: "ADD LOCATION", prices: ["$1.68", "$1.68", "$1.68", "$1.68", "$1.68"] }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-9 Business Days after art approval",
            rush: "Yes",
            imprintArea: '7.5"W x 4.5"H',
            setupCharge: "$112.50 (V)"
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "COLOR", prices: ["$2.57"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        setupCharge: "$56.25 (V) - Spot printing",
        setupChargeTransfer: "$112.50 (V) - Heat Transfer",
        repeatSetup: "$37.50 (V)",
        pmsMatch: "$56.25 (V)",
        lessThanMinimum: "Call for pricing",
        colorChangeFee: "$18.75 (V)",
        sampleProof: "Contact for pricing",
        artworkCharges: "$75.00 (V) / Hour"
    }
},
{
    id: "is104",
    name: "Modern Affordable Contrasting Sports Pack",
    code: "IS104",
    slug: "modern-affordable-contrasting-sports-pack",
    category: "Drawstring Bags",
    material: "210D Polyester",
    size: '14"W x 17.75"H',
    imprint: '7"W x 7"H',
    price: 2.41,
    originalPrice: 50.00,
    image: "assets/assets/images/products/drawstring-bags/IS104/IS104-Black-Black.jpg",
    description: "A budget-friendly sports pack that doesn't compromise on features — this 210D polyester drawstring bag includes a front zipper pocket and a built-in headphone port, making it ideal for students, gym-goers, and promotional giveaways. The contrasting two-tone design adds visual pop while the rope cord drawstrings double as shoulder straps for hands-free carrying.",

    popular: false,

    colors: [
        { name: "Black-Black", hex: "#1C1C1C", image: "assets/assets/images/products/drawstring-bags/IS104/IS104-Black-Black.jpg" },
        { name: "Kelly Green-Black", hex: "#1B8A4C", image: "assets/assets/images/products/drawstring-bags/IS104/IS104-Kelly Green-Black.jpg" },
        { name: "Red-Black", hex: "#C62828", image: "assets/assets/images/products/drawstring-bags/IS104/IS104-Red-Black.jpg" },
        { name: "Royal Blue-Black", hex: "#2455A4", image: "assets/assets/images/products/drawstring-bags/IS104/IS104-Royal Blue-Black.jpg" },
        { name: "Yellow-Black", hex: "#FACC15", image: "assets/assets/images/products/drawstring-bags/IS104/IS104-Yellow-Black.jpg" }
    ],

    images: [
        "assets/assets/images/products/drawstring-bags/IS104/IS104-Black-Black.jpg",
        "assets/assets/images/products/drawstring-bags/IS104/IS104-Kelly Green-Black.jpg",
        "assets/assets/images/products/drawstring-bags/IS104/IS104-Red-Black.jpg",
        "assets/assets/images/products/drawstring-bags/IS104/IS104-Royal Blue-Black.jpg",
        "assets/assets/images/products/drawstring-bags/IS104/IS104-Yellow-Black.jpg"
    ],

    specs: {
        itemNo: "IS104",
        gusset: "Bottom: No Side: No",
        weight: "210D",
        material: "210D Polyester",
        handle: "Drawstring Cinch Closure. Rope Cord",
        decoratedIn: "USA",
        packagingOptions: [
            {
                type: "Printed Large Box",
                qtyPerBox: "400 pcs",
                boxWeight: "48 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "175 pcs",
                boxWeight: "22 lbs",
                boxDims: '8" x 16" x 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "COLOR",        prices: ["$3.20", "$3.12", "$3.03", "$2.96", "$2.85"] },
                { label: "ADD LOCATION", prices: ["$0.62", "$0.62", "$0.62", "$0.62", "$0.62"] },
                { label: "ADD COLOR",    prices: ["$0.52", "$0.52", "$0.52", "$0.52", "$0.52"] }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days after Art Approval",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$37.50 (V)"
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "COLOR",        prices: ["$6.24", "$5.76", "$5.49", "$5.08", "$4.73"] },
                { label: "ADD LOCATION", prices: ["$1.68", "$1.68", "$1.68", "$1.68", "$1.68"] }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-9 Business Days after art approval",
            rush: "Yes",
            imprintArea: '6.5"W x 6.5"H',
            setupCharge: "$112.50 (V)"
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "COLOR", prices: ["$2.41"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        setupCharge: "$56.25 (V) - Spot printing",
        setupChargeTransfer: "$112.50 (V) - Heat Transfer",
        repeatSetup: "$37.50 (V)",
        pmsMatch: "$56.25 (V)",
        lessThanMinimum: "Call for pricing",
        colorChangeFee: "$18.75 (V)",
        sampleProof: "Contact for pricing",
        artworkCharges: "$75.00 (V) / Hour"
    }
},
{
    id: "is105",
    name: "Nylon Backpack",
    code: "IS105",
    slug: "nylon-backpack",
    category: "Non-Woven Bags",
    material: "210D Polyester",
    size: '12"W x 16.5"H x 5"D',
    imprint: '7"W x 4.5"H',
    price: 5.58,
    originalPrice: 50.00,
    image: "assets/assets/images/products/non-woven/IS105/IS105-Black.jpg",
    description: "A practical everyday backpack built from durable 210D polyester with adjustable web shoulder straps and a convenient top carry handle. The front zippered pocket and side mesh pocket keep essentials organized, while the gusseted 12\" x 16.5\" x 5\" main body offers real carrying capacity for school, work, travel, and promotional programs.",

    popular: false,

    colors: [
        { name: "Black", hex: "#1C1C1C", image: "assets/assets/images/products/non-woven/IS105/IS105-Black.jpg" },
        { name: "Kelly Green", hex: "#1B8A4C", image: "assets/assets/images/products/non-woven/IS105/IS105-Kelly Green.jpg" },
        { name: "Orange", hex: "#F97316", image: "assets/assets/images/products/non-woven/IS105/IS105-Orange.jpg" },
        { name: "Red", hex: "#C62828", image: "assets/assets/images/products/non-woven/IS105/IS105-Red.jpg" },
        { name: "Royal Blue", hex: "#2455A4", image: "assets/assets/images/products/non-woven/IS105/IS105-Royal Blue.jpg" }
    ],

    images: [
        "assets/assets/images/products/non-woven/IS105/IS105-Black.jpg",
        "assets/assets/images/products/non-woven/IS105/IS105-Kelly Green.jpg",
        "assets/assets/images/products/non-woven/IS105/IS105-Orange.jpg",
        "assets/assets/images/products/non-woven/IS105/IS105-Red.jpg",
        "assets/assets/images/products/non-woven/IS105/IS105-Royal Blue.jpg"
    ],

    specs: {
        itemNo: "IS105",
        gusset: "Bottom: Yes Side: Yes",
        weight: "210D",
        material: "210D Polyester",
        handle: "Adjustable Web Shoulder Strap And Carry Handle",
        decoratedIn: "USA",
        packagingOptions: [
            {
                type: "Printed Large Box",
                qtyPerBox: "150 pcs",
                boxWeight: "32 lbs",
                boxDims: '16" x 16" x 20"'
            },
            {
                type: "Printed Medium Box",
                qtyPerBox: "50 pcs",
                boxWeight: "11 lbs",
                boxDims: '8" x 16" x 20"'
            }
        ]
    },

    pricing: {
        spot: {
            label: "SPOT PRINTING PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "COLOR",        prices: ["$6.76", "$6.60", "$6.41", "$6.25", "$6.03"] },
                { label: "ADD LOCATION", prices: ["$0.62", "$0.62", "$0.62", "$0.62", "$0.62"] },
                { label: "ADD COLOR",    prices: ["$0.52", "$0.52", "$0.52", "$0.52", "$0.52"] }
            ],
            priceIncludes: "1 Color, 1 Location",
            leadTime: "5-7 Business Days after Art Approval",
            setupCharge: "$56.25 (V)",
            repeatSetup: "$37.50 (V)"
        },
        transfer: {
            label: "HEAT TRANSFER PRICING (USD)",
            quantities: [100, 250, 500, 1000, 2500],
            rows: [
                { label: "COLOR",        prices: ["$10.31", "$9.56", "$9.09", "$8.46", "$7.90"] },
                { label: "ADD LOCATION", prices: ["$1.68", "$1.68", "$1.68", "$1.68", "$1.68"] }
            ],
            priceIncludes: "Heat Transfer, 1 Location",
            leadTime: "7-9 Business Days after art approval",
            rush: "Yes",
            imprintArea: '6.5"W x 4"H (On Pocket OR Above Pocket)',
            setupCharge: "$112.50 (V)"
        },
        blank: {
            label: "BLANK PRICING (USD)",
            rows: [
                { label: "COLOR", prices: ["$5.58"] }
            ],
            priceIncludes: "Blank",
            leadTime: "Within 1 to 2 Business Days",
            moq: "No minimums. Can order as little as one piece."
        }
    },

    additionalCharges: {
        setupCharge: "$56.25 (V) - Spot printing",
        setupChargeTransfer: "$112.50 (V) - Heat Transfer",
        repeatSetup: "$37.50 (V)",
        pmsMatch: "$56.25 (V)",
        lessThanMinimum: "Call for pricing",
        colorChangeFee: "$18.75 (V)",
        sampleProof: "Contact for pricing",
        artworkCharges: "$75.00 (V) / Hour"
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
 * Generate a template webp for a specific color
 */
function generateTemplatewebp(colorName, product, imprintArea) {
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
        }, 'image/webp');
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

        // Generate webp for each color
        for (let i = 0; i < colors.length; i++) {
            const color = colors[i];
            const blob = await generateTemplatewebp(color.name, product, templateData.imprintArea);
            const fileName = `${product.code}_${color.name.replace(/\s+/g, '_')}_template.webp`;
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
    // ✅ Priority 1: Same group (Apparel ke liye)
    if (currentProduct.group) {
        const sameGroup = allProducts.filter(p =>
            p.id !== currentProduct.id &&
            p.group === currentProduct.group
        );

        // Same group ke andar same category wale pehle
        const sameCategory = sameGroup.filter(p => p.category === currentProduct.category);
        const otherInGroup = sameGroup.filter(p => p.category !== currentProduct.category);

        let related = [...sameCategory, ...otherInGroup];

        if (related.length >= limit) {
            return related.slice(0, limit);
        }

        // Agar group mein kam hain toh material match karo (group ke andar)
        const sameMaterial = sameGroup.filter(p =>
            p.material === currentProduct.material &&
            !related.some(r => r.id === p.id)
        );
        related = [...related, ...sameMaterial];

        if (related.length >= limit) {
            return related.slice(0, limit);
        }

        // Phir bhi kam hain toh baaki products se fill karo
        const others = allProducts.filter(p =>
            p.id !== currentProduct.id &&
            !related.some(r => r.id === p.id)
        );
        related = [...related, ...others];
        return related.slice(0, limit);
    }

    // ✅ Priority 2: Bags/Blankets ke liye purana logic (category → material → others)
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
        // ✅ Case 1: basePrice + upsizeCharges (T-shirts, Tank Tops, Hoodies)
        if (product.pricing && product.pricing.blank && product.pricing.blank.basePrice) {
            const priceStr = product.pricing.blank.basePrice.price;
            const priceNum = parseFloat(String(priceStr).replace(/[$,]/g, ''));
            if (!isNaN(priceNum) && priceNum > 0) {
                return priceNum * 0.6;
            }
        }

        // ✅ Case 2: blank.rows (bags, blankets)
        if (product.pricing && product.pricing.blank && product.pricing.blank.rows) {
            const naturalRow = product.pricing.blank.rows.find(row =>
                row.label.toUpperCase().includes('NATURAL')
            );
            const targetRow = naturalRow || product.pricing.blank.rows[0];
            if (targetRow && targetRow.prices && targetRow.prices.length > 0) {
                const priceNum = parseFloat(String(targetRow.prices[0]).replace(/[$,]/g, ''));
                if (!isNaN(priceNum) && priceNum > 0) {
                    return priceNum * 0.6;
                }
            }
        }

        // ✅ Case 3: spot printing cheapest
        if (product.pricing && product.pricing.spot && product.pricing.spot.rows) {
            let minPrice = Infinity;
            product.pricing.spot.rows.forEach(row => {
                row.prices.forEach(price => {
                    const num = parseFloat(String(price).replace(/[$,]/g, ''));
                    if (!isNaN(num) && num < minPrice) minPrice = num;
                });
            });
            if (minPrice !== Infinity) return minPrice;
        }

        // ✅ Case 4: Final fallback
        const fallback = parseFloat(String(product.price || 0).replace(/[$,]/g, ''));
        return isNaN(fallback) ? 0 : fallback;
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
                                    $${(product.minPrice || 0).toFixed(2)}                                
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

        // ============================================================
        // HEADER RENDER
        // ============================================================
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

        // ============================================================
        // ✅ BLANK TAB (Center aligned - jaise Blankets page par)
        // ============================================================
        if (isBlank) {
            // 1. Blank Pricing Rows (bags, blankets)
            if (data.rows) {
                data.rows.forEach((row) => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td class="font-medium text-brand-textSecondary">${row.label}</td>
                        <td class="text-brand-text font-semibold">${row.prices[0]}</td>
                        <td class="text-brand-textSecondary">R</td>
                    `;
                    pricingBody.appendChild(tr);
                });
            }

            // 2. Base Price (T-shirts, hoodies)
            if (data.basePrice) {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td class="font-medium text-brand-textSecondary">${data.basePrice.label}</td>
                    <td class="text-brand-text font-semibold">${data.basePrice.price}</td>
                    <td class="text-brand-textSecondary">R</td>
                `;
                pricingBody.appendChild(tr);
            }

            // 3. Upsize Charges (T-shirts, hoodies)
            if (data.upsizeCharges) {
                const headingTr = document.createElement('tr');
                headingTr.innerHTML = `
                    <td colspan="3" class="pt-4 pb-2">
                        <span class="text-[11px] font-bold text-brand-crimson uppercase tracking-wider">Upsize Charges</span>
                    </td>
                `;
                pricingBody.appendChild(headingTr);

                data.upsizeCharges.forEach(u => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td class="font-medium text-brand-textSecondary pl-4">${u.size}</td>
                        <td class="text-brand-text">${u.charge}</td>
                        <td class="text-brand-textSecondary">V</td>
                    `;
                    pricingBody.appendChild(tr);
                });
            }

            // ✅ Setup aur Repeat containers ko hide karo
            const setupContainer = document.getElementById('setup-charge-container');
            const repeatContainer = document.getElementById('repeat-setup-container');
            if (setupContainer) setupContainer.style.display = 'none';
            if (repeatContainer) repeatContainer.style.display = 'none';

            // ✅ Grid ko CENTER karo
            adjustInfoGrid();

            return; // ✅ Blank ke liye yahan ruk jao
        }

        // ============================================================
        // ✅ SPOT / TRANSFER TAB (Normal rendering)
        // ============================================================
        if (data.rows) {
            data.rows.forEach((row, index) => {
                const tr = document.createElement('tr');
                const isExtraRow = index >= 2; // ADD LOCATION, ADD COLOR

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

                // ✅ Extra rows ke liye class (View More ke liye)
                if (isExtraRow) {
                    tr.className = 'pricing-extra-row';
                }

                pricingBody.appendChild(tr);
            });
        }

        // ============================================================
        // ✅ SPOT / TRANSFER GRID - Center aligned, no empty space
        // ============================================================
        const infoGrid = document.getElementById('dynamic-info-grid');
        if (infoGrid) {
            const setupContainer = document.getElementById('setup-charge-container');
            const repeatContainer = document.getElementById('repeat-setup-container');

            // Setup aur Repeat ko show karo (agar product mein hide nahi hai)
            if (setupContainer) setupContainer.style.display = 'flex';
            if (repeatContainer) {
                repeatContainer.style.display = product.hideImprint ? 'none' : 'flex';
            }

            // ✅ Grid ko CENTER karo
            adjustInfoGrid();
        }
    }
    function renderSpecsTable(selectedColor) {
        const s = product.specs || {
            itemNo: product.code,
            gusset: "N/A",
            weight: "N/A",
            material: "N/A",
            handle: "N/A"
            // ❌ origin hata diya - ab fallback nahi hoga
        };

        // ✅ Origin value - agar nahi hai to null rahega (row hide ho jayegi)
        const originValue = s.origin || s.decoratedIn || null;

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

        // ✅ Origin row condition - sirf tab show hoga jab origin ya decoratedIn ho
        const originRow = originValue ? `
        <div class="flex">
            <div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">COUNTRY OF ORIGIN</div>
            <div class="w-1/2 p-3 font-medium text-brand-text">${originValue}</div>
        </div>
    ` : '';

        // ============================================================
        // ✅ SKU / GTIN / PMS ROWS — Sirf Blankets (ABW) ke liye
        // ============================================================
        let colorInfoRows = '';
        if (product.category === "Blankets" && selectedColor) {

            const gtinVal = selectedColor.gtin || 'N/A';
            const pmsVal = selectedColor.pms || 'N/A';

            colorInfoRows = `
            <div class="flex border-b border-r border-brand-border">
                <div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">COLOR</div>
                <div class="w-1/2 p-3 font-medium text-brand-text">${selectedColor.name}</div>
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
        ${originRow}
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

        // ✅ OPTION A: STANDOUT THEME (SIRF BADGE + IMAGE BORDER)
        if (product.standout) {
            // 1. Badge insert karo (title ke upar)
            const titleContainer = productTitle.parentElement;
            if (titleContainer && !document.getElementById('standoutBadge')) {
                const badge = document.createElement('div');
                badge.id = 'standoutBadge';
                badge.className = 'standout-badge';
                badge.innerHTML = `
                <i class="fa-solid fa-crown"></i>
                ${product.standoutBadge || 'PREMIUM APPAREL'}
            `;
                titleContainer.insertBefore(badge, productTitle);
            }

            // 2. Main image pe golden border
            if (mainImage) {
                mainImage.classList.add('standout-image');
            }
        }
    }

    function renderAdditionalCharges() {
        const chargesTab = document.getElementById('tab-charges');
        if (!chargesTab) return;

        // ✅ AGAR hideCharges TRUE HAI TOH KUCH BHI RENDER NA KARO
        if (product.hideCharges) {
            chargesTab.innerHTML = '';  // ya 'No charges info'
            return;
        }

        const charges = product.additionalCharges || {};
        const hasCharges = Object.keys(charges).length > 0;

        if (hasCharges) {
            chargesTab.innerHTML = `
            <div class="space-y-2 text-sm text-brand-textSecondary">
                ${charges.pmsMatch ? `<p><strong>PMS Match:</strong> ${charges.pmsMatch}</p>` : ''}
                ${charges.setupCharge ? `<p><strong>Setup Charge:</strong> ${charges.setupCharge}</p>` : ''}
                ${charges.setupChargeTransfer ? `<p><strong>Setup Charge:</strong> ${charges.setupChargeTransfer}</p>` : ''}
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

        // ============================================================
        // ✅ CASE 1: packagingOptions ARRAY (W965, W968, W973, etc.)
        // ============================================================
        if (Array.isArray(s.packagingOptions) && s.packagingOptions.length > 0) {
            let html = `<div class="space-y-4 text-sm text-brand-textSecondary">`;
            s.packagingOptions.forEach(option => {
                html += `
                <div class="border border-brand-border rounded-lg p-3">
                    ${option.type ? `<p class="font-semibold text-brand-text">${option.type}</p>` : ''}
                    ${option.qtyPerBox && option.qtyPerBox !== 'N/A' ? `<p><strong>Qty Per Box:</strong> ${option.qtyPerBox}</p>` : ''}
                    ${option.boxWeight && option.boxWeight !== 'N/A' ? `<p><strong>Box Weight:</strong> ${option.boxWeight}</p>` : ''}
                    ${option.boxDims && option.boxDims !== 'N/A' ? `<p><strong>Box Dims:</strong> ${option.boxDims}</p>` : ''}
                    ${option.cartonVolume && option.cartonVolume !== 'N/A' ? `<p><strong>Carton Volume:</strong> ${option.cartonVolume}</p>` : ''}
                    ${option.pieceWeight && option.pieceWeight !== 'N/A' ? `<p><strong>Piece Weight:</strong> ${option.pieceWeight}</p>` : ''}
                    ${option.note ? `<p class="text-xs italic mt-2">${option.note}</p>` : ''}
                </div>
            `;
            });
            html += `</div>`;
            packagingTab.innerHTML = html;
            return;
        }

        // ============================================================
        // ✅ CASE 2: packagingOptions STRING (ITSCNSS: "Call for details")
        // ============================================================
        if (typeof s.packagingOptions === 'string' && s.packagingOptions.trim() !== '') {
            packagingTab.innerHTML = `
            <div class="border border-brand-border rounded-lg p-4 text-sm text-brand-textSecondary text-center">
                <p class="font-medium text-brand-text">${s.packagingOptions}</p>
            </div>
        `;
            return;
        }

        // ============================================================
        // ✅ CASE 3: boxQuantity / boxWeight / boxDims direct fields
        // (IB29, MQIB6000, IDS125700, IB800, W956, MQIB, IDS4500, etc.)
        // ============================================================
        if (s.boxQuantity || s.boxWeight || s.boxDims) {
            packagingTab.innerHTML = `
            <div class="border border-brand-border rounded-lg p-3 text-sm text-brand-textSecondary">
                <p class="font-semibold text-brand-text mb-2">Standard Packaging</p>
                ${s.boxQuantity ? `<p><strong>Qty Per Box:</strong> ${s.boxQuantity}</p>` : ''}
                ${s.boxWeight ? `<p><strong>Box Weight:</strong> ${s.boxWeight}</p>` : ''}
                ${s.boxDims ? `<p><strong>Box Dims:</strong> ${s.boxDims}</p>` : ''}
            </div>
        `;
            return;
        }

        // ============================================================
        // ✅ CASE 4: Fabric/garment specs (T-shirts, hoodies, apparel)
        // (IT1003, IT1005, IT3130, IT5001, IT5108, IT5109, IT15001, ITP280, ITY300, ITCR280)
        // ============================================================
        if (s.fabricWeight || s.fabric || s.sizes || s.minimumOrder || s.weight || s.material || s.sizeChart) {
            let html = `<div class="space-y-2 text-sm text-brand-textSecondary">`;
            if (s.fabricWeight) html += `<p><strong>Fabric weight:</strong> ${s.fabricWeight}</p>`;
            if (s.weight) html += `<p><strong>Weight:</strong> ${s.weight}</p>`;
            if (s.fabric) html += `<p><strong>Fabric:</strong> ${s.fabric}</p>`;
            if (s.material) html += `<p><strong>Material:</strong> ${s.material}</p>`;
            if (s.yarn) html += `<p><strong>Yarn:</strong> ${s.yarn}</p>`;
            if (s.sizes) html += `<p><strong>Sizes:</strong> ${s.sizes}</p>`;
            if (s.minimumOrder) html += `<p><strong>Minimum order:</strong> ${s.minimumOrder}</p>`;
            if (s.shipping) html += `<p><strong>Shipping:</strong> ${s.shipping}</p>`;
            if (s.label) html += `<p><strong>Label:</strong> ${s.label}</p>`;
            if (s.packing) html += `<p><strong>Packing:</strong> ${s.packing}</p>`;
            if (s.origin) html += `<p><strong>Origin:</strong> ${s.origin}</p>`;

            // ✅ SIZE CHART
            if (s.sizeChart && s.sizeChart.length > 0) {
                html += `<div class="mt-4"><p class="font-semibold text-brand-text mb-2">Size Chart (inches)</p>`;
                html += `<table class="w-full text-xs border-collapse"><thead><tr class="bg-brand-bg/30">`;
                html += `<th class="p-2 border border-brand-border text-left">Size</th>`;
                html += `<th class="p-2 border border-brand-border text-left">Chest</th>`;
                html += `<th class="p-2 border border-brand-border text-left">Body Length</th>`;
                html += `</tr></thead><tbody>`;
                s.sizeChart.forEach(row => {
                    html += `<tr><td class="p-2 border border-brand-border">${row.size}</td>`;
                    html += `<td class="p-2 border border-brand-border">${row.chest}</td>`;
                    html += `<td class="p-2 border border-brand-border">${row.bodyLength}</td></tr>`;
                });
                html += `</tbody></table></div>`;
            }

            // ✅ DECORATION INFO
            if (s.decoration) {
                html += `<div class="mt-4"><p class="font-semibold text-brand-text mb-2">Decoration</p>`;
                Object.entries(s.decoration).forEach(([key, value]) => {
                    html += `<p><strong>${key}:</strong> ${value}</p>`;
                });
                html += `</div>`;
            }

            html += `</div>`;
            packagingTab.innerHTML = html;
            return;
        }

        // ============================================================
        // ✅ CASE 5: Kuch bhi nahi
        // ============================================================
        packagingTab.innerHTML = `<p class="text-sm text-brand-textSecondary">No packaging information available.</p>`;
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
                        setTimeout(adjustInfoGrid, 10);
                }
            });
        });

        const firstTab = container.querySelector('button');
        if (firstTab) {
            firstTab.click();
        }

        // ✅ Grid adjust karo tab change hone pe
        setTimeout(adjustInfoGrid, 50);
    }

    // ============================================================
    // ✅ DYNAMIC GRID ADJUSTMENT
    // ============================================================
          function adjustInfoGrid() {
        const grid = document.getElementById('dynamic-info-grid');
        if (!grid) return;

        const setupContainer = document.getElementById('setup-charge-container');
        const repeatContainer = document.getElementById('repeat-setup-container');

        // ✅ Visible items count karo
        let visibleCount = 2; // Price Includes + Lead Time (always visible)

        if (setupContainer && setupContainer.style.display !== 'none') visibleCount++;
        if (repeatContainer && repeatContainer.style.display !== 'none') visibleCount++;

        // ✅ Grid ko center karo — har case mein
        if (visibleCount === 2) {
            grid.className = 'grid grid-cols-2 gap-3 sm:gap-6 justify-center max-w-lg mx-auto';
        } else if (visibleCount === 3) {
            grid.className = 'grid grid-cols-3 gap-3 sm:gap-4 justify-center max-w-2xl mx-auto';
        } else {
            grid.className = 'grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 justify-center';
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