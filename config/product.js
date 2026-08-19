 // ============================================================
        // HAMBURGER MENU
        // ============================================================
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const hamburgerIcon = document.getElementById('hamburgerIcon');

        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            hamburgerIcon.classList.toggle('fa-bars');
            hamburgerIcon.classList.toggle('fa-xmark');
        });

        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                hamburgerIcon.classList.add('fa-bars');
                hamburgerIcon.classList.remove('fa-xmark');
            });
        });

        // ============================================================
        // NOTIFICATION FUNCTION
        // ============================================================
        function showNotification(message, type = 'success') {
            // Simple alert for now - you can make it fancy later
            alert(message);
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
        }, {
            id: "mqib6000",
            name: "Cotton Tote Bag Natural Body with Color Handles",
            code: "MQIB6000",
            slug: "cotton-tote-natural-color-handles",
            category: "Tote Bags",
            material: "Cotton",
            size: '15"W x 16"H',
            imprint: '10"W x 12"H',
            price: 30.00,
            image: "assets/assets/images/products/tote-bags/MQIB6000/MQT6000_main.webp",
            description: "6oz. 100% cotton tote bag with natural body and color handles. Perfect for promotional events, trade shows, and everyday use. Durable construction with reinforced stitching.",
            popular: true,
            colors: [
                { name: "Army", hex: "#4B5320", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_army.webp" },
                { name: "Azalea", hex: "#FF69B4", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_azalea.webp" },
                { name: "Black", hex: "#000000", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_black.webp" },
                { name: "Carolina-Blue", hex: "#99BADD", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_carolina_blue.webp" },
                { name: "Chocolate", hex: "#3D2314", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_chocolate.webp" },
                { name: "Forest-Green", hex: "#228B22", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_forest_green.webp" },
                { name: "Gold", hex: "#FFD700", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_gold.webp" },
                { name: "Hot-Pink", hex: "#FF69B4", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_hot_pink.webp" },
                { name: "Kelly", hex: "#4CBB17", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_kelly.webp" },
                { name: "Lavender", hex: "#B57EDC", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_lavender.webp" },
                { name: "Light-Pink", hex: "#FFB6C1", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_light_pink.webp" },
                { name: "Lime", hex: "#32CD32", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_lime.webp" },
                { name: "Maroon", hex: "#800000", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_maroon.webp" },
                { name: "Navy", hex: "#000080", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_navy.webp" },
                { name: "Orange", hex: "#FFA500", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_orange.webp" },
                { name: "Purple", hex: "#800080", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_purple.webp" },
                { name: "Red", hex: "#FF0000", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_red.webp" },
                { name: "Royal", hex: "#4169E1", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_royal.webp" },
                { name: "Sapphire", hex: "#0F52BA", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_sapphire.webp" },
                { name: "Texas-Orange", hex: "#FF8C00", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_texas_orange.webp" },
                { name: "Turquoise", hex: "#40E0D0", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_turqoise.webp" },
                { name: "Yellow", hex: "#FFFF00", image: "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_yellow.webp" }
            ],
            images: [
                "assets/assets/images/products/tote-bags/MQT6000/MQT6000_main.webp",
                "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_army.webp",
                "assets/assets/images/products/tote-bags/MQT6000/MQIB6000_black.webp"
            ],
            specs: {
                itemNo: "MQIB6000",
                gusset: "Bottom: No Side: No",
                weight: "6oz",
                material: "100% Cotton",
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
                        { label: "NATURAL", prices: ["$3.69", "$2.77", "$2.60", "$2.44", "$2.24", "$2.13"] },
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
                material: "100% Cotton",
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
        }, {
            id: "w956",
            name: "Non-Woven Convention Bag",
            code: "W956",
            slug: "non-woven-convention-bag",
            category: "Non-Woven Bags",
            material: "Non-Woven",
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
        }, {
            id: "w975",
            name: "Econo Tote Bag",
            code: "W975",
            slug: "econo-tote-bag",
            category: "Tote Bags",
            material: "Non-Woven",
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
                material: "Non-Woven",
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
        }];

        const productTemplates = {
            'ib611': {
                colors: [
                    { name: 'Black', image: 'assets/assets/images/products/tote-bags/IB611/IB611_black.webp' },
                    { name: 'Chocolate', image: 'assets/assets/images/products/tote-bags/IB611/IB611_chocolate.webp' },
                    { name: 'Light-Pink', image: 'assets/assets/images/products/tote-bags/IB611/IB611_light_pink.webp' },
                    { name: 'Lime', image: 'assets/assets/images/products/tote-bags/IB611/IB611_lime.webp' },
                    { name: 'Natural', image: 'assets/assets/images/products/tote-bags/IB611/IB611_natural.webp' },
                    { name: 'Navy', image: 'assets/assets/images/products/tote-bags/IB611/IB611_navy.webp' },
                    { name: 'Red', image: 'assets/assets/images/products/tote-bags/IB611/IB611_red.webp' },
                    { name: 'Royal', image: 'assets/assets/images/products/tote-bags/IB611/IB611_royal.webp' },
                    { name: 'White', image: 'assets/assets/images/products/tote-bags/IB611/IB611_white.webp' },
                    { name: 'Yellow', image: 'assets/assets/images/products/tote-bags/IB611/IB611_yellow.webp' }
                ],
                imprintArea: '12"W x 10"H',
                bwTemplate: 'N/A',
                downloadAll: '#'
            },
            'ib29': {
                colors: [
                    { name: 'Natural', image: 'assets/assets/images/products/tote-bags/IB29/IB29_natural.webp' },
                    { name: 'Black', image: 'assets/assets/images/products/tote-bags/IB29/IB29_black.webp' },
                    { name: 'Navy', image: 'assets/assets/images/products/tote-bags/IB29/IB29_navy.webp' },
                    { name: 'Red', image: 'assets/assets/images/products/tote-bags/IB29/IB29_red.webp' },
                    { name: 'Royal', image: 'assets/assets/images/products/tote-bags/IB29/IB29_royal.webp' }
                ],
                imprintArea: '5"W x 7"H',
                bwTemplate: 'N/A',
                downloadAll: '#'
            },
            'mqib6000': {
                colors: [
                    { name: 'Army', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_army.webp' },
                    { name: 'Azalea', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_azalea.webp' },
                    { name: 'Black', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_black.webp' },
                    { name: 'Carolina-Blue', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_carolina_blue.webp' },
                    { name: 'Chocolate', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_chocolate.webp' },
                    { name: 'Forest-Green', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_forest_green.webp' },
                    { name: 'Gold', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_gold.webp' },
                    { name: 'Hot-Pink', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_hot_pink.webp' },
                    { name: 'Kelly', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_kelly.webp' },
                    { name: 'Lavender', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_lavender.webp' },
                    { name: 'Light-Pink', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_light_pink.webp' },
                    { name: 'Lime', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_lime.webp' },
                    { name: 'Maroon', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_maroon.webp' },
                    { name: 'Navy', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_navy.webp' },
                    { name: 'Orange', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_orange.webp' },
                    { name: 'Purple', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_purple.webp' },
                    { name: 'Red', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_red.webp' },
                    { name: 'Royal', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_royal.webp' },
                    { name: 'Sapphire', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_sapphire.webp' },
                    { name: 'Texas-Orange', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_texas_orange.webp' },
                    { name: 'Turquoise', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_turqoise.webp' },
                    { name: 'Yellow', image: 'assets/assets/images/products/tote-bags/MQT6000/MQIB6000_yellow.webp' }
                ],
                imprintArea: '10"W x 12"H',
                bwTemplate: 'N/A',
                downloadAll: '#'
            },
            'mqib': {
                colors: [
                    { name: 'Army', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_army.webp' },
                    { name: 'Azalea', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_azalea.webp' },
                    { name: 'Black', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_black.webp' },
                    { name: 'Carolina-Blue', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_carolina_blue.webp' },
                    { name: 'Chocolate', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_chocolate.webp' },
                    { name: 'Dark-Grey', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_dark_grey.webp' },
                    { name: 'Forest-Green', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_forest_green.webp' },
                    { name: 'Gold', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_gold.webp' },
                    { name: 'Hot-Pink', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_hot_pink.webp' },
                    { name: 'Kelly', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_kelly.webp' },
                    { name: 'Lavender', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_lavender.webp' },
                    { name: 'Light-Grey', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_light_grey.webp' },
                    { name: 'Light-Pink', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_light_pink.webp' },
                    { name: 'Lime', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_lime.webp' },
                    { name: 'Maroon', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_maroon.webp' },
                    { name: 'Natural', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_natural.webp' },
                    { name: 'Navy', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_navy.webp' },
                    { name: 'Orange', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_orange.webp' },
                    { name: 'Purple', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_purple.webp' },
                    { name: 'Red', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_red.webp' },
                    { name: 'Royal', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_royal.webp' },
                    { name: 'Sapphire', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_sapphire.webp' },
                    { name: 'Texas-Orange', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_texas_orange.webp' },
                    { name: 'Turquoise', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_turqoise.webp' },
                    { name: 'White', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_white.webp' },
                    { name: 'Yellow', image: 'assets/assets/images/products/tote-bags/MQIB/MQIB_yellow.webp' }
                ],
                imprintArea: '10"W x 8"H',
                bwTemplate: 'N/A',
                downloadAll: '#'
            },
            'ib800': {
                colors: [
                    { name: 'Army', image: 'assets/assets/images/products/tote-bags/IB800/IB800_army.webp' },
                    { name: 'Azalea', image: 'assets/assets/images/products/tote-bags/IB800/IB800_azalea.webp' },
                    { name: 'Black', image: 'assets/assets/images/products/tote-bags/IB800/IB800_black.webp' },
                    { name: 'Carolina-Blue', image: 'assets/assets/images/products/tote-bags/IB800/IB800_carolina_blue.webp' },
                    { name: 'Chocolate', image: 'assets/assets/images/products/tote-bags/IB800/IB800_chocolate.webp' },
                    { name: 'Dark-Grey', image: 'assets/assets/images/products/tote-bags/IB800/IB800_dark_grey.webp' },
                    { name: 'Forest-Green', image: 'assets/assets/images/products/tote-bags/IB800/IB800_forest_green.webp' },
                    { name: 'Gold', image: 'assets/assets/images/products/tote-bags/IB800/IB800_gold.webp' },
                    { name: 'Hot-Pink', image: 'assets/assets/images/products/tote-bags/IB800/IB800_hot_pink.webp' },
                    { name: 'Kelly', image: 'assets/assets/images/products/tote-bags/IB800/IB800_kelly.webp' },
                    { name: 'Lavender', image: 'assets/assets/images/products/tote-bags/IB800/IB800_lavender.webp' },
                    { name: 'Light-Grey', image: 'assets/assets/images/products/tote-bags/IB800/IB800_light_grey.webp' },
                    { name: 'Light-Pink', image: 'assets/assets/images/products/tote-bags/IB800/IB800_light_pink.webp' },
                    { name: 'Lime', image: 'assets/assets/images/products/tote-bags/IB800/IB800_lime.webp' },
                    { name: 'Maroon', image: 'assets/assets/images/products/tote-bags/IB800/IB800_maroon.webp' },
                    { name: 'Natural', image: 'assets/assets/images/products/tote-bags/IB800/IB800_natural.webp' },
                    { name: 'Navy', image: 'assets/assets/images/products/tote-bags/IB800/IB800_navy.webp' },
                    { name: 'Purple', image: 'assets/assets/images/products/tote-bags/IB800/IB800_purple.webp' },
                    { name: 'Red', image: 'assets/assets/images/products/tote-bags/IB800/IB800_red.webp' },
                    { name: 'Royal', image: 'assets/assets/images/products/tote-bags/IB800/IB800_royal.webp' },
                    { name: 'Sapphire', image: 'assets/assets/images/products/tote-bags/IB800/IB800_sapphire.webp' },
                    { name: 'Texas-Orange', image: 'assets/assets/images/products/tote-bags/IB800/IB800_texas_orange.webp' },
                    { name: 'Turquoise', image: 'assets/assets/images/products/tote-bags/IB800/IB800_turqoise.webp' },
                    { name: 'White', image: 'assets/assets/images/products/tote-bags/IB800/IB800_white.webp' },
                    { name: 'Yellow', image: 'assets/assets/images/products/tote-bags/IB800/IB800_yellow.webp' }
                ],
                imprintArea: '10"W x 12"H',
                bwTemplate: 'N/A',
                downloadAll: '#'
            },
            'w956': {
                colors: [
                    { name: 'Black', image: 'assets/assets/images/products/non-woven/W956/W956_black.webp' },
                    { name: 'Grey', image: 'assets/assets/images/products/non-woven/W956/W956_grey.webp' },
                    { name: 'Hunter-Green', image: 'assets/assets/images/products/non-woven/W956/W956_hunter_green.webp' },
                    { name: 'Ivory', image: 'assets/assets/images/products/non-woven/W956/W956_ivory.webp' },
                    { name: 'Kelly', image: 'assets/assets/images/products/non-woven/W956/W956_kelly.webp' },
                    { name: 'Navy', image: 'assets/assets/images/products/non-woven/W956/W956_navy.webp' },
                    { name: 'Orange', image: 'assets/assets/images/products/non-woven/W956/W956_orange.webp' },
                    { name: 'Purple', image: 'assets/assets/images/products/non-woven/W956/W956_purple.webp' },
                    { name: 'Red', image: 'assets/assets/images/products/non-woven/W956/W956_red.webp' },
                    { name: 'Royal', image: 'assets/assets/images/products/non-woven/W956/W956_royal.webp' },
                    { name: 'White', image: 'assets/assets/images/products/non-woven/W956/W956_white.webp' },
                    { name: 'Yellow', image: 'assets/assets/images/products/non-woven/W956/W956_yellow.webp' }
                ],
                imprintArea: '10"W x 10"H',
                bwTemplate: 'N/A',
                downloadAll: '#'
            },
            'w975': {
                colors: [
                    { name: 'Black', image: 'assets/assets/images/products/non-woven/W975/W975_black.webp' },
                    { name: 'Burgundy', image: 'assets/assets/images/products/non-woven/W975/W975_burgundy.webp' },
                    { name: 'Hunter-Green', image: 'assets/assets/images/products/non-woven/W975/W975_hunter_green.webp' },
                    { name: 'Ivory', image: 'assets/assets/images/products/non-woven/W975/W975_ivory.webp' },
                    { name: 'Kelly', image: 'assets/assets/images/products/non-woven/W975/W975_kelly.webp' },
                    { name: 'Navy', image: 'assets/assets/images/products/non-woven/W975/W975_navy.webp' },
                    { name: 'Orange', image: 'assets/assets/images/products/non-woven/W975/W975_orange.webp' },
                    { name: 'Purple', image: 'assets/assets/images/products/non-woven/W975/W975_purple.webp' },
                    { name: 'Red', image: 'assets/assets/images/products/non-woven/W975/W975_red.webp' },
                    { name: 'Royal', image: 'assets/assets/images/products/non-woven/W975/W975_royal.webp' },
                    { name: 'White', image: 'assets/assets/images/products/non-woven/W975/W975_white.webp' },
                    { name: 'Yellow', image: 'assets/assets/images/products/non-woven/W975/W975_yellow.webp' }
                ],
                imprintArea: '10"W x 8"H',
                bwTemplate: 'N/A',
                downloadAll: '#'
            },
            'iwb201': {
                colors: [
                    { name: 'Natural', image: 'assets/assets/images/products/bottle-bags/IWB201/IWB201_natural.webp' },
                    { name: 'Black', image: 'assets/assets/images/products/bottle-bags/IWB201/IWB201-black.webp' }
                ],
                imprintArea: '3"W x 6"H',
                bwTemplate: 'N/A',
                downloadAll: '#'
            }
        };

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
        async function downloadSingleTemplate(colorName, product) {
            try {
                const templateData = productTemplates[product.id] || {
                    imprintArea: product.imprint || 'N/A'
                };

                const blob = await generateTemplatePNG(colorName, product, templateData.imprintArea);

                const link = document.createElement('a');
                link.download = `${product.code}_${colorName.replace(/\s+/g, '_')}_template.png`;
                link.href = URL.createObjectURL(blob);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Clean up
                setTimeout(() => URL.revokeObjectURL(link.href), 1000);

                showNotification(`✅ ${colorName} color template has been downloaded`);
            } catch (error) {
                console.error('Download error:', error);
                showNotification('Error Download Template ' + error.message);
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

            // Get template data for this product
            const templateData = productTemplates[product.id] || {
                colors: product.colors.map(c => ({ name: c.name, image: c.image || product.image })),
                imprintArea: product.imprint || 'N/A',
                bwTemplate: 'N/A',
                downloadAll: '#'
            };

            document.getElementById('templatesImprintArea').textContent = templateData.imprintArea;
            document.getElementById('bwTemplateStatus').textContent = templateData.bwTemplate || 'N/A';

            // Populate table with images
            const tbody = document.getElementById('templatesTableBody');
            tbody.innerHTML = '';

            templateData.colors.forEach(color => {
                const tr = document.createElement('tr');
                tr.className = 'border-b border-brand-border hover:bg-brand-bg/20 transition-colors';
                tr.innerHTML = `
                <td class="p-3">
                    <div class="flex items-center gap-3">
                        <img src="${color.image}" alt="${color.name}" 
                             class="w-10 h-10 object-contain rounded border border-brand-border"
                             onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Crect width=%2240%22 height=%2240%22 fill=%22%23f3f4f6%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-family=%22Arial%22 font-size=%2212%22 fill=%22%239ca3af%22 text-anchor=%22middle%22 dy=%22.3em%22%3ENo%20Image%3C/text%3E%3C/svg%3E'">
                        <span class="text-brand-text font-medium">${color.name}</span>
                    </div>
                </td>
                <td class="p-3 text-center">
                    <a href="#" class="text-brand-crimson hover:underline text-sm flex items-center justify-center gap-1 download-template-btn" 
                       data-color="${color.name}">
                        <i class="fa-regular fa-file-image"></i> Download PNG
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
                    formData.append("asi_number", document.getElementById("quotationAsi").value);
                    formData.append("item", document.getElementById("quotationItem").value);
                    formData.append("item_qty", document.getElementById("quotationItemQty").value);
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
                        formData.append("item_qty", document.getElementById('mockupItemQty').value);
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
    submitBtn.addEventListener('click', async function(e) {
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

                // HEADER RENDER - Sirf 6 columns (extra columns nahi)
                if (thead) {
                    thead.style.display = isBlank ? 'none' : '';
                    if (!isBlank) {
                        const quantities = data.quantities || [];
                        let html = `<tr style="color: #C81F45 !important; text-transform: uppercase; letter-spacing: 0.05em;">
                <th style="color: #C81F45 !important; text-align: left;">Quantity</th>`;

                        // Sirf pehle 6 columns
                        for (let i = 0; i < 6 && i < quantities.length; i++) {
                            html += `<th id="p-qty-${i + 1}" style="color: #C81F45 !important;">${quantities[i]}</th>`;
                        }

                        html += `<th style="color: #C81F45 !important;"></th></tr>`;
                        thead.innerHTML = html;
                    }
                }

                // BODY RENDER
                pricingBody.innerHTML = '';

                // Pehli 2 rows (NATURAL, COLOR) - hamesha dikhengi
                // Baaki rows (ADD LOCATION, ADD COLOR) - hidden initially
                data.rows.forEach((row, index) => {
                    const tr = document.createElement('tr');

                    // Agar yeh 3rd ya 4th row hai (ADD LOCATION, ADD COLOR)
                    const isExtraRow = index >= 2;

                    let html = `<td class="font-medium text-brand-textSecondary">${row.label}</td>`;

                    // Sirf 6 prices (extra columns nahi)
                    for (let i = 0; i < 6 && i < row.prices.length; i++) {
                        html += `<td class="text-brand-text">${row.prices[i]}</td>`;
                    }

                    if (row.label.includes('ADD LOCATION') || row.label.includes('ADD COLOR')) {
                        html += `<td class="text-brand-textSecondary">V</td>`;
                    } else {
                        html += `<td class="text-brand-textSecondary">R</td>`;
                    }
                    tr.innerHTML = html;

                    // Extra rows ko hide karein
                    if (isExtraRow) {
                        tr.className = 'pricing-extra-row';
                    }

                    pricingBody.appendChild(tr);
                });
            }
            function renderSpecsTable() {
                const s = product.specs || { itemNo: product.code, gusset: "Bottom: Yes Side: No", weight: "12oz", material: "100% Cotton", handle: "24\"", origin: "Pakistan" };
                specsTable.innerHTML = `
                <div class="flex border-b border-r border-brand-border"><div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">ITEM NO</div><div class="w-1/2 p-3 font-medium text-brand-text">${s.itemNo}</div></div>
                <div class="flex border-b border-brand-border"><div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">GUSSET</div><div class="w-1/2 p-3 font-medium text-brand-text">${s.gusset}</div></div>
                <div class="flex border-b border-r border-brand-border"><div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">QUALITY WEIGHT</div><div class="w-1/2 p-3 font-medium text-brand-text">${s.weight}</div></div>
                <div class="flex border-b border-brand-border"><div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">QUALITY MATERIAL</div><div class="w-1/2 p-3 font-medium text-brand-text">${s.material}</div></div>
                <div class="flex border-r border-brand-border"><div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">HANDLE SIZE</div><div class="w-1/2 p-3 font-medium text-brand-text">${s.handle}</div></div>
                <div class="flex"><div class="w-1/2 p-3 text-brand-textSecondary uppercase tracking-wider bg-brand-bg/30">COUNTRY OF ORIGIN</div><div class="w-1/2 p-3 font-medium text-brand-text">${s.origin}</div></div>
            `;
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
                        </div>
                    `;
                    });
                    html += `</div>`;
                    packagingTab.innerHTML = html;
                    return;
                }

                if (s.boxQuantity || s.boxWeight || s.boxDims || s.origin) {
                    packagingTab.innerHTML = `
                    <div class="space-y-2 text-sm text-brand-textSecondary">
                        ${s.boxQuantity ? `<p><strong>Quantity Per Box:</strong> ${s.boxQuantity}</p>` : ''}
                        ${s.boxWeight ? `<p><strong>Box Weight:</strong> ${s.boxWeight}</p>` : ''}
                        ${s.boxDims ? `<p><strong>Box Dims:</strong> ${s.boxDims}</p>` : ''}
                        ${s.origin ? `<p><strong>Country of Origin:</strong> ${s.origin}</p>` : ''}
                    </div>
                `;
                } else {
                    packagingTab.innerHTML = `<p class="text-sm text-brand-textSecondary">No packaging information available for this product.</p>`;
                }
            }

            function initTabs() {
                const tabs = document.querySelectorAll('#info-tabs .tab-btn');
                const contents = {
                    description: document.getElementById('tab-description'),
                    charges: document.getElementById('tab-charges'),
                    packaging: document.getElementById('tab-packaging'),
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
                            contents[key].classList.add('hidden');
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
                const tabs = document.querySelectorAll('#printing-tabs button');
                const viewMoreBtn = document.getElementById('viewMorePricingBtn');

                const methodInfo = {
                    spot: {
                        leadTime: '5-7 Business Days',
                        leadLabel: 'Production Time',
                        setupCharge: '$56.25 (V)',
                        repeatSetup: '$25.00 (V)',
                        showRepeatSetup: true,
                        showSetupCharge: true,
                        priceIncludes: '1 Color, 1 Location',
                        showViewMore: true  // <-- SIRF SPOT MEIN SHOW
                    },
                    transfer: {
                        leadTime: '7-10 Business Days',
                        leadLabel: 'Production Time',
                        setupCharge: 'Free',
                        repeatSetup: '$30.00 (V)',
                        showRepeatSetup: false,
                        showSetupCharge: true,
                        priceIncludes: 'Heat Transfer, 1 Location',
                        showViewMore: false  // <-- CHHUPAO
                    },
                    blank: {
                        leadTime: '3-5 Business Days',
                        leadLabel: 'Lead Time',
                        setupCharge: 'No Setup Fee',
                        repeatSetup: 'No Setup Fee',
                        showRepeatSetup: false,
                        showSetupCharge: false,
                        priceIncludes: 'Blank Product Only',
                        showViewMore: false  // <-- CHHUPAO
                    }
                };

                tabs.forEach(tab => {
                    tab.addEventListener('click', () => {
                        const method = tab.dataset.method;
                        currentMethod = method;

                        // Tab style update
                        tabs.forEach(t => {
                            t.className = 'border border-brand-border hover:border-brand-text/20 text-brand-textSecondary hover:text-brand-text transition-colors py-2.5 text-xs font-semibold rounded tracking-wider';
                        });
                        tab.className = 'border border-brand-crimson bg-brand-crimson/10 text-brand-crimson py-2.5 text-xs font-semibold rounded tracking-wider';

                        renderPricing(method);

                        const info = methodInfo[method];
                        if (info) {
                            document.getElementById('dynamic-lead-label').textContent = info.leadLabel;
                            document.getElementById('dynamic-lead-time').textContent = info.leadTime;
                            document.getElementById('dynamic-setup-charge').textContent = info.setupCharge;
                            document.getElementById('dynamic-repeat-setup').textContent = info.repeatSetup;
                            document.getElementById('dynamic-price-includes').textContent = info.priceIncludes;

                            // Setup Charge Hide/Show
                            const setupContainer = document.getElementById('setup-charge-container');
                            if (setupContainer) {
                                setupContainer.style.display = info.showSetupCharge ? 'flex' : 'none';
                            }

                            // Repeat Setup Hide/Show
                            const repeatContainer = document.getElementById('repeat-setup-container');
                            if (repeatContainer) {
                                repeatContainer.style.display = info.showRepeatSetup ? 'flex' : 'none';
                            }

                            // VIEW MORE BUTTON - SIRF SPOT MEIN
                            if (viewMoreBtn) {
                                if (info.showViewMore) {
                                    viewMoreBtn.style.display = 'block';
                                } else {
                                    viewMoreBtn.style.display = 'none';
                                    // Reset expanded state
                                    pricingExpanded = false;
                                    document.querySelectorAll('.pricing-extra-col').forEach(col => {
                                        col.classList.remove('show');
                                    });
                                    viewMoreBtn.innerHTML = 'VIEW MORE PRICING <i class="fa-solid fa-chevron-down ml-1"></i>';
                                }
                            }
                        }
                    });
                });
            }

            function init() {
                currentQuotationProduct = product;
                currentMockupProduct = product;
                currentFreightProduct = product;

                renderMainInfo();
                renderThumbnails();
                renderColors();
                renderSpecsTable();
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
            }

            init();

        })();