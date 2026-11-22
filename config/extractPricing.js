
const fs = require("fs");
const products = require("./productData.js");

const result = products
  .filter(p => p.code?.startsWith("IBTM"))
  .map(p => {
    const cleanPricing = {};

    for (const [method, data] of Object.entries(p.pricing || {})) {
      const {
        priceIncludes,
        leadTime,
        moq,
        setupCharge,
        repeatSetup,
        ...remainingPricing
      } = data;

      cleanPricing[method] = remainingPricing;
    }

    return {
      code: p.code,
      pricing: cleanPricing
    };
  });

fs.writeFileSync(
  "ibtm-pricing.json",
  JSON.stringify(result, null, 2)
);

console.log(`Successfully extracted ${result.length} IBTM products!`);
