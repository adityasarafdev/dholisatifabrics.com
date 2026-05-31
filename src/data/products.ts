export type ProductHighlight = {
  icon: string;
  label: string;
  description?: string;
};

export type ProductUseCase = {
  label: string;
  icon: string;
};

export type ProductCustomization = {
  icon: string;
  label: string;
};

export type Product = {
  slug: string;
  title: string;
  shortDescription: string;
  tagline: string;
  heroBadges: string[];
  hero: { src: string; alt: string };
  intro: string;
  highlights: ProductHighlight[];
  features: ProductHighlight[];
  uses: ProductUseCase[];
  colors?: { hex: string; label: string }[];
  sizes?: string[];
  gsm?: string[];
  customization?: ProductCustomization[];
  footerTagline: string;
  theme: "cream" | "navy" | "dark" | "white";
};

const defaultHighlights: ProductHighlight[] = [
  { icon: "shield", label: "Strong & Durable", description: "Built to last with superior quality." },
  { icon: "feather", label: "Lightweight", description: "Easy to carry, everywhere." },
  { icon: "recycle", label: "Reusable & Washable", description: "Use it again and again." },
  { icon: "leaf", label: "Sustainable", description: "Better for you, better for Earth." },
];

const defaultCustomization: ProductCustomization[] = [
  { icon: "palette", label: "Colour" },
  { icon: "printer", label: "Printing" },
  { icon: "pencil", label: "Design" },
  { icon: "bag", label: "Handle" },
  { icon: "ruler", label: "Size" },
];

export const products: Record<string, Product> = {
  "non-woven-bag": {
    slug: "non-woven-bag",
    title: "Non Woven Bags",
    shortDescription: "Durable non-woven carry bags for retail and promotions.",
    tagline: "Premium",
    heroBadges: ["Strong", "Stylish", "Sustainable"],
    hero: { src: "/products/non-woven-bag.jpg", alt: "Non Woven Bag" },
    intro:
      "Smart choice for your brand. Better choice for our planet. Our non-woven bags are crafted from high-quality non-woven fabric for long-lasting use, with excellent print quality for your branding.",
    highlights: [
      { icon: "shield", label: "Durable & Reliable", description: "Made from high-quality non-woven fabric for long-lasting use." },
      { icon: "leaf", label: "Eco-Friendly", description: "Reusable, recyclable & a sustainable alternative to plastic bags." },
      { icon: "feather", label: "Lightweight & Strong", description: "Easy to carry yet strong enough to handle everyday needs." },
      { icon: "recycle", label: "Reusable & Washable", description: "Use it again and again. Easy to maintain." },
    ],
    features: [],
    uses: [
      { icon: "shoppingBag", label: "Retail & Shopping" },
      { icon: "gift", label: "Gifting & Events" },
      { icon: "building", label: "Corporate Use" },
      { icon: "graduation", label: "Educational" },
      { icon: "globe", label: "Eco-Conscious" },
      { icon: "megaphone", label: "Promotional" },
    ],
    colors: [
      { hex: "#dc2626", label: "Red" },
      { hex: "#f97316", label: "Orange" },
      { hex: "#eab308", label: "Yellow" },
      { hex: "#16a34a", label: "Green" },
      { hex: "#0ea5e9", label: "Sky" },
      { hex: "#1d4ed8", label: "Blue" },
      { hex: "#7c3aed", label: "Purple" },
      { hex: "#db2777", label: "Pink" },
      { hex: "#000000", label: "Black" },
      { hex: "#6b7280", label: "Grey" },
      { hex: "#ffffff", label: "White" },
      { hex: "#fef3c7", label: "Cream" },
    ],
    sizes: ["Small", "Medium", "Large", "Extra Large"],
    customization: defaultCustomization,
    footerTagline: "Carry Your Brand With Pride. Choose Smart. Choose Sustainable.",
    theme: "cream",
  },

  "non-woven-fabric-roll": {
    slug: "non-woven-fabric-roll",
    title: "Non Woven Rolls",
    shortDescription: "Non-woven fabric rolls for printing and branding.",
    tagline: "Premium Quality",
    heroBadges: ["Strong", "Durable", "Reliable", "Eco-Friendly"],
    hero: { src: "/products/non-woven-fabric-roll.jpg", alt: "Non Woven Fabric Roll" },
    intro:
      "Our Non Woven Rolls are made from 100% pure virgin polypropylene using advanced technology to deliver superior strength, flexibility, and performance for a wide range of applications.",
    highlights: [
      { icon: "leaf", label: "Eco-Friendly" },
      { icon: "shield", label: "Strong & Durable" },
      { icon: "feather", label: "Lightweight" },
      { icon: "wind", label: "Breathable & Soft" },
      { icon: "droplet", label: "Moisture Resistant" },
    ],
    features: [
      { icon: "check", label: "Made from 100% Pure Virgin Polypropylene (PP)" },
      { icon: "check", label: "Spunbonded Non-Woven Fabric" },
      { icon: "check", label: "Uniform Thickness and Consistent Quality" },
      { icon: "check", label: "High Tensile Strength & Elongation" },
      { icon: "check", label: "Smooth Finish & Soft Texture" },
      { icon: "check", label: "Lightweight, Flexible & Durable" },
      { icon: "check", label: "Moisture Resistant & Quick Dry" },
      { icon: "check", label: "Chemical & Corrosion Resistant" },
      { icon: "check", label: "Eco-Friendly, Recyclable & Reusable" },
      { icon: "check", label: "Available in All Colours" },
      { icon: "check", label: "Custom Width, Length & GSM Available" },
    ],
    uses: [
      { icon: "shoppingBag", label: "Shopping Bags" },
      { icon: "tractor", label: "Agriculture Cover" },
      { icon: "sprout", label: "Garden & Plant Protection" },
      { icon: "package", label: "Packaging" },
      { icon: "heart", label: "Medical & Health Care" },
      { icon: "home", label: "Home Textile" },
      { icon: "party", label: "Events & Decoration" },
      { icon: "factory", label: "Industrial Application" },
      { icon: "shieldCheck", label: "Mask & PPE Material" },
      { icon: "shoe", label: "Shoe & Garment Lining" },
      { icon: "car", label: "Automotive Interiors" },
      { icon: "flask", label: "Filter & Insulation" },
    ],
    colors: [
      { hex: "#ffffff", label: "White" },
      { hex: "#000000", label: "Black" },
      { hex: "#6b7280", label: "Grey" },
      { hex: "#92400e", label: "Brown" },
      { hex: "#22c55e", label: "Green" },
      { hex: "#eab308", label: "Yellow" },
      { hex: "#f97316", label: "Orange" },
      { hex: "#dc2626", label: "Red" },
      { hex: "#db2777", label: "Pink" },
      { hex: "#7c3aed", label: "Purple" },
      { hex: "#1d4ed8", label: "Royal Blue" },
      { hex: "#60a5fa", label: "Light Blue" },
      { hex: "#0e7490", label: "Sea Green" },
      { hex: "#166534", label: "Dark Green" },
    ],
    gsm: ["40 GSM", "50 GSM", "60 GSM", "70 GSM", "80 GSM", "100 GSM", "120 GSM", "140 GSM", "160 GSM"],
    sizes: ["2 ft (24 in)", "4 ft (48 in)", "6 ft (72 in)", "8 ft (96 in)"],
    footerTagline: "Strong Fabric. Stronger Solutions.",
    theme: "white",
  },

  "bopp-bag": {
    slug: "bopp-bag",
    title: "BOPP Bags",
    shortDescription: "BOPP laminated bags with high-quality prints and strength.",
    tagline: "Premium Packaging Solutions",
    heroBadges: ["Food Products", "Wire Nails", "Industrial Materials"],
    hero: { src: "/products/bopp-bag.jpg", alt: "BOPP Bag" },
    intro:
      "BOPP (Biaxially Oriented Polypropylene) laminated bags provide exceptional print clarity and durability with a glossy finish. Ideal for premium retail packaging, food products, and industrial materials.",
    highlights: [
      { icon: "shield", label: "Strong & Durable" },
      { icon: "droplet", label: "Waterproof Laminated" },
      { icon: "printer", label: "Custom Printed" },
      { icon: "ruler", label: "Available in All Sizes" },
    ],
    features: [],
    uses: [
      { icon: "wheat", label: "Sattu" },
      { icon: "wheat", label: "Flour & Grains" },
      { icon: "leaf", label: "Pulses" },
      { icon: "flame", label: "Spices" },
      { icon: "sprout", label: "Rice & Seeds" },
      { icon: "tractor", label: "Animal Feed" },
      { icon: "package", label: "Dry Food Products" },
      { icon: "wrench", label: "Wire Nails" },
      { icon: "cog", label: "Hardware Items" },
      { icon: "construction", label: "Cement Products" },
      { icon: "hardhat", label: "Construction Materials" },
    ],
    sizes: ["Small", "Medium", "Large", "Custom"],
    customization: defaultCustomization,
    footerTagline: "Premium Packaging. Built for Performance.",
    theme: "navy",
  },

  "hdpe-bag-sacks": {
    slug: "hdpe-bag-sacks",
    title: "HDPE Bags & Sacks",
    shortDescription: "Heavy-duty HDPE bags and sacks for industrial packaging.",
    tagline: "Stronger By Nature",
    heroBadges: ["High Strength", "Moisture Resistant", "Tear & Puncture Resistant"],
    hero: { src: "/products/hdpe-bag-sacks.jpg", alt: "HDPE Bags & Sacks" },
    intro:
      "Premium quality HDPE bags and sacks engineered for strength, durability, and safe storage of a wide range of materials. Trusted for packaging — preferred for performance.",
    highlights: [
      { icon: "shield", label: "High Strength", description: "Engineered to carry heavy loads reliably." },
      { icon: "droplet", label: "Moisture Resistant", description: "Keeps contents dry and protected." },
      { icon: "shield", label: "Tear & Puncture Resistant", description: "Withstands rough handling and transport." },
      { icon: "recycle", label: "Reusable & Eco-Friendly", description: "Built to last across multiple uses." },
    ],
    features: [],
    uses: [
      { icon: "sprout", label: "Fertilizer — Urea, DAP, NPK, Bio-Fertilizer" },
      { icon: "wrench", label: "Wire Nails & Hardware" },
      { icon: "construction", label: "Cement & Building Materials" },
      { icon: "flame", label: "Spices — Chilli, Turmeric, Coriander, Masala" },
      { icon: "tractor", label: "Agriculture — Seeds, Grains, Pulses" },
      { icon: "flask", label: "Chemicals & Industries" },
      { icon: "package", label: "Clothing & Textiles" },
    ],
    sizes: ["12×20 in", "16×24 in", "20×30 in", "24×36 in", "30×40 in", "36×48 in", "40×60 in", "Jumbo (FIBC)"],
    customization: defaultCustomization,
    footerTagline: "Trusted for Packaging. Preferred for Performance.",
    theme: "navy",
  },

  "hdpe-rolls": {
    slug: "hdpe-rolls",
    title: "HDPE Rolls",
    shortDescription: "Premium HDPE rolls for packaging and protection.",
    tagline: "Strength. Protection. Trust.",
    heroBadges: ["Premium Quality", "Strong & Durable", "Water Resistant", "Eco Friendly"],
    hero: { src: "/products/hdpe-rolls.jpg", alt: "HDPE Roll" },
    intro:
      "Premium HDPE rolls for packaging and protection. From HDPE rolls, strong and durable HDPE bags and sacks can be made for multi-purpose use.",
    highlights: [
      { icon: "award", label: "Premium Quality", description: "Made from high-quality virgin HDPE material." },
      { icon: "shield", label: "Strong & Durable", description: "High tensile strength and excellent durability." },
      { icon: "droplet", label: "Water Resistant", description: "Protects from moisture, dust, rust, and harsh environments." },
      { icon: "leaf", label: "Eco Friendly", description: "100% recyclable and environment-friendly material." },
    ],
    features: [],
    uses: [
      { icon: "wrench", label: "Iron Rod Wrap & Cover" },
      { icon: "package", label: "Bag & Sack Manufacturing" },
      { icon: "factory", label: "Industrial Packaging" },
      { icon: "construction", label: "Construction Protection" },
    ],
    colors: [
      { hex: "#ffffff", label: "White" },
      { hex: "#16a34a", label: "Green" },
      { hex: "#eab308", label: "Yellow" },
      { hex: "#db2777", label: "Pink" },
    ],
    sizes: ["12 in", "18 in", "24 in", "36 in", "48 in", "60 in", "Custom"],
    gsm: ["50 Micron", "100 Micron", "200 Micron", "300 Micron", "500 Micron", "Custom"],
    footerTagline: "Manufactured With Precision. Delivered With Quality.",
    theme: "navy",
  },

  "hdpe-tarpaulin": {
    slug: "hdpe-tarpaulin",
    title: "HDPE Tarpaulin",
    shortDescription: "HDPE tarpaulin for industrial cover and protection.",
    tagline: "Built to Protect. Made to Last.",
    heroBadges: ["100% Waterproof", "UV Resistant", "Tear Resistant", "Extra Strong"],
    hero: { src: "/products/hdpe-tarpaulin.jpg", alt: "HDPE Tarpaulin" },
    intro:
      "Heavy-duty HDPE tarpaulin made from high-density polyethylene virgin material. Laminated woven fabric with LDPE coating on both sides — waterproof, rot-proof, UV-stabilized for long life.",
    highlights: [
      { icon: "droplet", label: "100% Waterproof" },
      { icon: "sun", label: "UV Resistant" },
      { icon: "shield", label: "Tear Resistant" },
      { icon: "feather", label: "Lightweight" },
      { icon: "recycle", label: "Reusable & Eco-Friendly" },
    ],
    features: [
      { icon: "check", label: "Made from High Density Polyethylene (HDPE) Virgin Material" },
      { icon: "check", label: "Laminated / Woven Fabric" },
      { icon: "check", label: "LDPE Coated on Both Sides" },
      { icon: "check", label: "Waterproof & Rot Proof" },
      { icon: "check", label: "UV Stabilized for Long Life" },
      { icon: "check", label: "Tear & Puncture Resistant" },
      { icon: "check", label: "Strong Sealed Edges for Extra Strength" },
      { icon: "check", label: "Suitable for All Weather Conditions" },
    ],
    uses: [
      { icon: "truck", label: "Truck & Cargo Cover" },
      { icon: "hardhat", label: "Construction Site Cover" },
      { icon: "home", label: "Temporary Roofing" },
      { icon: "package", label: "Goods Storage Cover" },
      { icon: "tractor", label: "Agriculture Cover" },
      { icon: "factory", label: "Industrial Application" },
      { icon: "cog", label: "Machine & Equipment Cover" },
      { icon: "party", label: "Event & Weather Protection" },
    ],
    colors: [
      { hex: "#dc2626", label: "Red" },
      { hex: "#f97316", label: "Orange" },
      { hex: "#eab308", label: "Yellow" },
      { hex: "#9ca3af", label: "Silver" },
      { hex: "#1d4ed8", label: "Blue" },
      { hex: "#ffffff", label: "White" },
      { hex: "#e5e7eb", label: "Transparent" },
    ],
    sizes: ["6×9 ft", "9×12 ft", "15×18 ft", "20×30 ft", "30×40 ft", "Custom"],
    gsm: ["70 GSM", "90 GSM", "120 GSM", "150 GSM", "170 GSM", "200 GSM", "250 GSM"],
    footerTagline: "Durable. Reliable. Multipurpose.",
    theme: "navy",
  },

  "delivery-cargo-bags": {
    slug: "delivery-cargo-bags",
    title: "Delivery Cargo Bags",
    shortDescription: "Extra-large cargo bags for e-commerce, courier, and logistics.",
    tagline: "Bigger Bag. Better Delivery.",
    heroBadges: ["Heavy Duty", "Safe & Secure", "XL Capacity"],
    hero: { src: "/products/delivery-cargo-bags.jpg", alt: "Delivery Cargo Bag" },
    intro:
      "Extra-large delivery cargo bag designed to carry huge shipments safely and securely. Built strong for heavy loads and repeated use — one bag, many parcels, zero worries.",
    highlights: [
      { icon: "package", label: "Extra Spacious", description: "Huge storage capacity for bulk orders." },
      { icon: "shield", label: "Strong & Durable", description: "Heavy-duty fabric for long-lasting use." },
      { icon: "droplet", label: "Water Resistant", description: "Strong zipper closure for secure delivery." },
      { icon: "recycle", label: "Reusable & Eco-Friendly", description: "Comfortable handles, easy carrying." },
    ],
    features: [],
    uses: [
      { icon: "send", label: "Courier Services" },
      { icon: "shoppingBag", label: "E-Commerce Deliveries" },
      { icon: "shoppingBag", label: "Retail & Wholesale" },
      { icon: "truck", label: "Logistics & Distribution" },
    ],
    colors: [
      { hex: "#ffffff", label: "White" },
      { hex: "#db2777", label: "Pink" },
      { hex: "#16a34a", label: "Green" },
      { hex: "#eab308", label: "Yellow" },
    ],
    sizes: ["Standard", "Large", "Extra Large", "Custom"],
    customization: defaultCustomization,
    footerTagline: "Carry More. Deliver More.",
    theme: "navy",
  },

  "ldpe-sheets": {
    slug: "ldpe-sheets",
    title: "LDPE Sheets",
    shortDescription: "Strong, flexible LDPE sheets for industrial and commercial use.",
    tagline: "Built to Protect. Made to Last.",
    heroBadges: ["Strong", "Flexible", "Reliable"],
    hero: { src: "/products/ldpe-sheets.jpg", alt: "LDPE Sheet" },
    intro:
      "High-quality LDPE sheets for multiple industrial and commercial applications. LDPE (Low Density Polyethylene) sheets are flexible, lightweight, and highly durable — with excellent chemical resistance, moisture protection, and UV stability.",
    highlights: [
      { icon: "shield", label: "Strong & Durable" },
      { icon: "droplet", label: "Water Resistant" },
      { icon: "feather", label: "Lightweight & Flexible" },
      { icon: "recycle", label: "Reusable & Eco Friendly" },
    ],
    features: [
      { icon: "check", label: "Made from high-quality LDPE material" },
      { icon: "check", label: "Excellent chemical resistance" },
      { icon: "check", label: "Moisture protection and UV stability" },
      { icon: "check", label: "Tear & puncture resistant for long life" },
      { icon: "check", label: "Available in all standard and custom sizes" },
      { icon: "check", label: "Different thickness options on request" },
    ],
    uses: [
      { icon: "truck", label: "Truck & Cargo Cover" },
      { icon: "hardhat", label: "Construction Site Cover" },
      { icon: "home", label: "Temporary Roofing" },
      { icon: "package", label: "Goods Storage Cover" },
      { icon: "tractor", label: "Agriculture Cover" },
      { icon: "factory", label: "Industrial Application" },
      { icon: "cog", label: "Machine & Equipment Cover" },
      { icon: "party", label: "Event & Weather Protection" },
      { icon: "home", label: "Home & Roof Protection" },
      { icon: "construction", label: "Sand, Cement & Material Cover" },
    ],
    sizes: ["Standard", "Custom"],
    footerTagline: "Waterproof. Tear Resistant. Lightweight & Easy to Handle.",
    theme: "navy",
  },

  "packaging-pouches": {
    slug: "packaging-pouches",
    title: "Packaging Pouches",
    shortDescription: "High-quality packaging pouches for food and consumer products.",
    tagline: "Strong • Safe • Stylish",
    heroBadges: ["Premium Quality", "Custom Printing", "Food Grade Material"],
    hero: { src: "/products/packaging-pouches.jpg", alt: "Packaging Pouch" },
    intro:
      "High-quality packaging pouches designed to protect, preserve, and promote your products. Perfect for every packaging need — with custom print, window options, and food-grade materials.",
    highlights: [
      { icon: "shield", label: "Strong & Durable" },
      { icon: "shieldCheck", label: "Food Grade & Safe Material" },
      { icon: "printer", label: "Custom Print Available" },
      { icon: "send", label: "Fast & Reliable Delivery" },
    ],
    features: [],
    uses: [
      { icon: "wheat", label: "Namkeen & Snacks" },
      { icon: "flame", label: "Spices & Masalas" },
      { icon: "sprout", label: "Pulses & Grains" },
      { icon: "package", label: "Tea, Coffee & Sugar" },
      { icon: "gift", label: "Sweets & Bakery" },
      { icon: "flask", label: "Detergents & Powders" },
    ],
    customization: defaultCustomization,
    footerTagline: "We Pack Your Trust in Every Pouch.",
    theme: "navy",
  },

  "bag-closer-thread": {
    slug: "bag-closer-thread",
    title: "Bag Closer Thread",
    shortDescription: "Premium spun polyester bag closer thread for high-speed machines.",
    tagline: "Premium Quality",
    heroBadges: ["Stronger Stitching", "Smooth Performance", "Reliable Closure"],
    hero: { src: "/products/bag-closer-thread.jpg", alt: "Bag Closer Thread" },
    intro:
      "Premium 100% spun polyester bag closer thread, designed for high-speed bag-closing machines. Best for PP woven bags, rice bags, flour bags, and feed bags — delivering strong stitching and secure closure.",
    highlights: [
      { icon: "shield", label: "Super Strength" },
      { icon: "sparkles", label: "High-Speed Machine Friendly" },
      { icon: "package", label: "Bag Closer Application" },
      { icon: "award", label: "Premium Quality" },
      { icon: "checkCircle", label: "Reliable Performance" },
    ],
    features: [],
    uses: [
      { icon: "package", label: "PP Woven Bag Closing" },
      { icon: "wheat", label: "Rice & Flour Bags" },
      { icon: "tractor", label: "Feed Bags" },
      { icon: "factory", label: "Industrial Packaging" },
    ],
    sizes: ["No. 30 / 2000 mtr", "Custom Spool Length"],
    footerTagline: "Specially Designed for Bag Closing & Industrial Packaging Applications.",
    theme: "white",
  },

  "pp-bag": {
    slug: "pp-bag",
    title: "PP Bags",
    shortDescription: "Polypropylene bags for bulk, agriculture, and industrial use.",
    tagline: "Versatile & Cost-Effective",
    heroBadges: ["Agriculture", "Food Packaging", "Industrial"],
    hero: { src: "/products/pp-bag.jpg", alt: "PP Bag" },
    intro:
      "Polypropylene bags are versatile and cost-effective solutions for various industries. Suitable for agriculture, food packaging, and industrial applications.",
    highlights: defaultHighlights,
    features: [],
    uses: [
      { icon: "tractor", label: "Agriculture" },
      { icon: "wheat", label: "Food Packaging" },
      { icon: "factory", label: "Industrial" },
      { icon: "package", label: "Bulk Storage" },
    ],
    customization: defaultCustomization,
    footerTagline: "Built for Bulk. Designed for Business.",
    theme: "navy",
  },

  "canvas-tarpaulin": {
    slug: "canvas-tarpaulin",
    title: "Canvas Tarpaulin",
    shortDescription: "Heavy-duty canvas tarps for cover and transport.",
    tagline: "100% Waterproof",
    heroBadges: ["Heavy Duty", "UV Resistant", "Tear Resistant", "Long Lasting"],
    hero: { src: "/products/canvas-tarpaulin.jpg", alt: "Canvas Tarpaulin" },
    intro:
      "Advanced waterproof coating ensures complete protection from rain or shine. Built for extreme conditions with reinforced edges for long-lasting performance.",
    highlights: [
      { icon: "droplet", label: "100% Waterproof", description: "Complete Protection Rain or Shine" },
      { icon: "shield", label: "Heavy Duty & Tear Resistant", description: "Built for Extreme Conditions" },
      { icon: "sun", label: "UV & Weather Resistant", description: "Long Lasting Performance" },
      { icon: "truck", label: "Ideal for Heavy Load Trucks", description: "Secure Cover for Heavy Cargo" },
    ],
    features: [],
    uses: [
      { icon: "truck", label: "Truck Covers" },
      { icon: "package", label: "Goods Transport" },
      { icon: "layers", label: "Heavy Load Covers" },
      { icon: "truck", label: "Trailer Covers" },
      { icon: "warehouse", label: "Warehouse Covers" },
      { icon: "factory", label: "Industrial Covers" },
      { icon: "cog", label: "Machine Covers" },
    ],
    sizes: ["As per customisation"],
    footerTagline: "Superior Protection. Maximum Strength. Built for the Toughest Jobs.",
    theme: "dark",
  },

  "shade-net-construction-net": {
    slug: "shade-net-construction-net",
    title: "Shade Net (Construction Net)",
    shortDescription: "Protective construction shade nets for sites and scaffolding.",
    tagline: "Site Safety. Sun Protection.",
    heroBadges: ["UV Protection", "Durable", "Breathable"],
    hero: { src: "/products/shade-net-construction-net.jpg", alt: "Shade Net" },
    intro:
      "Professional-grade shade nets for construction sites and scaffolding applications. Provides protection from sun, wind, and debris while maintaining visibility.",
    highlights: defaultHighlights,
    features: [],
    uses: [
      { icon: "hardhat", label: "Construction Sites" },
      { icon: "sprout", label: "Nurseries" },
      { icon: "tractor", label: "Agriculture" },
      { icon: "home", label: "Balconies & Patios" },
    ],
    footerTagline: "Safety First. Built for Every Site.",
    theme: "navy",
  },

  "loop-handle-bag": {
    slug: "loop-handle-bag",
    title: "Loop Handle Bags",
    shortDescription: "Loop-handle carry bags for retail durability and comfort.",
    tagline: "Carry With Comfort",
    heroBadges: ["Reinforced Handle", "Comfortable", "Reusable"],
    hero: { src: "/products/loop-handle-bag.jpg", alt: "Loop Handle Bag" },
    intro:
      "Comfortable loop-handle bags with reinforced handles for durability even with heavy loads. Perfect for grocery stores, boutiques, and retail outlets.",
    highlights: defaultHighlights,
    features: [],
    uses: [
      { icon: "shoppingBag", label: "Retail" },
      { icon: "package", label: "Grocery" },
      { icon: "gift", label: "Gifting" },
      { icon: "party", label: "Events" },
    ],
    customization: defaultCustomization,
    footerTagline: "Comfort in Every Carry.",
    theme: "cream",
  },

  "d-w-cut-bag": {
    slug: "d-w-cut-bag",
    title: "D & W Cut Bags",
    shortDescription: "D-cut and W-cut non-woven bags ready for branding.",
    tagline: "Precision Cut. Ready to Brand.",
    heroBadges: ["D-Cut", "W-Cut", "Custom Branding"],
    hero: { src: "/products/d-w-cut-bag.jpg", alt: "D & W Cut Bag" },
    intro:
      "Precision-cut D-cut and W-cut non-woven bags ready for your custom branding. Unique handle designs that provide comfort and style.",
    highlights: defaultHighlights,
    features: [],
    uses: [
      { icon: "shoppingBag", label: "Retail" },
      { icon: "party", label: "Events" },
      { icon: "megaphone", label: "Promotions" },
    ],
    customization: defaultCustomization,
    footerTagline: "Your Brand. Cut to Perfection.",
    theme: "cream",
  },

  "printed-mask": {
    slug: "printed-mask",
    title: "Printed Masks",
    shortDescription: "Printed face masks for events and promotions.",
    tagline: "Brand Awareness in Every Breath",
    heroBadges: ["Custom Print", "Breathable", "Comfortable"],
    hero: { src: "/products/printed-mask.jpg", alt: "Printed Mask" },
    intro:
      "Custom-printed face masks perfect for events, promotions, and brand awareness campaigns. Made from comfortable, breathable materials with high-quality printing.",
    highlights: defaultHighlights,
    features: [],
    uses: [
      { icon: "party", label: "Events" },
      { icon: "megaphone", label: "Promotions" },
      { icon: "building", label: "Corporate" },
    ],
    footerTagline: "Wear Your Brand With Pride.",
    theme: "white",
  },

  "jute-bags": {
    slug: "jute-bags",
    title: "Jute Bags",
    shortDescription: "Eco-forward jute bags for merchandising and gifting.",
    tagline: "Natural. Sustainable. Stylish.",
    heroBadges: ["Eco-Friendly", "Natural Fiber", "Reusable"],
    hero: { src: "/products/jute-bags.jpg", alt: "Jute Bag" },
    intro:
      "Eco-friendly jute bags combining sustainability with style. Made from natural fiber — perfect for environmentally conscious businesses and gifting.",
    highlights: defaultHighlights,
    features: [],
    uses: [
      { icon: "gift", label: "Gifting" },
      { icon: "shoppingBag", label: "Merchandising" },
      { icon: "party", label: "Events" },
      { icon: "globe", label: "Eco-Brands" },
    ],
    customization: defaultCustomization,
    footerTagline: "Naturally Strong. Sustainably Yours.",
    theme: "cream",
  },

  "cotton-canvas-conveyor-belt": {
    slug: "cotton-canvas-conveyor-belt",
    title: "Cotton Canvas Conveyor Belt",
    shortDescription: "Durable cotton canvas conveyor belts for industrial use.",
    tagline: "Built for the Long Haul",
    heroBadges: ["Heavy Duty", "Industrial Grade", "Long Life"],
    hero: { src: "/products/cotton-canvas-conveyor-belt.jpg", alt: "Cotton Canvas Conveyor Belt" },
    intro:
      "Strong cotton canvas conveyor belts designed for industrial and commercial applications. Engineered for conveyor systems and machinery.",
    highlights: defaultHighlights,
    features: [],
    uses: [
      { icon: "factory", label: "Industrial" },
      { icon: "cog", label: "Machinery" },
      { icon: "package", label: "Material Handling" },
    ],
    footerTagline: "Moving Industry Forward.",
    theme: "dark",
  },

  "plastic-tarpaulin": {
    slug: "plastic-tarpaulin",
    title: "Plastic Tarpaulin",
    shortDescription: "Waterproof plastic tarpaulins for cover and protection.",
    tagline: "Reliable Weather Protection",
    heroBadges: ["Waterproof", "UV Resistant", "Lightweight"],
    hero: { src: "/products/plastic-tarpaulin.jpg", alt: "Plastic Tarpaulin" },
    intro:
      "Waterproof plastic tarpaulins providing reliable protection against rain, sun, and weather. Ideal for construction sites, vehicles, and outdoor storage.",
    highlights: defaultHighlights,
    features: [],
    uses: [
      { icon: "truck", label: "Vehicle Covers" },
      { icon: "hardhat", label: "Construction" },
      { icon: "package", label: "Storage" },
      { icon: "home", label: "Outdoor" },
    ],
    sizes: ["6×9 ft", "9×12 ft", "12×18 ft", "Custom"],
    footerTagline: "Weather-Tough. Worry-Free.",
    theme: "navy",
  },

  "cotton-canvas-bag": {
    slug: "cotton-canvas-bag",
    title: "Cotton Canvas Bags",
    shortDescription: "Strong cotton canvas bags for daily and retail use.",
    tagline: "Everyday Strength. Effortless Style.",
    heroBadges: ["Durable", "Reusable", "Natural"],
    hero: { src: "/products/cotton-canvas-bag.jpg", alt: "Cotton Canvas Bag" },
    intro:
      "Durable cotton canvas bags perfect for daily use and retail applications. Excellent strength and longevity for shopping, travel, and everyday carry.",
    highlights: defaultHighlights,
    features: [],
    uses: [
      { icon: "shoppingBag", label: "Retail" },
      { icon: "plane", label: "Travel" },
      { icon: "gift", label: "Gifting" },
      { icon: "party", label: "Events" },
    ],
    customization: defaultCustomization,
    footerTagline: "Carry the Classic.",
    theme: "cream",
  },

  "hessian-cloth": {
    slug: "hessian-cloth",
    title: "Hessian Cloth",
    shortDescription: "Hessian cloth rolls for packaging and industrial needs.",
    tagline: "Natural. Breathable. Versatile.",
    heroBadges: ["Eco-Friendly", "Biodegradable", "Strong"],
    hero: { src: "/products/hessian-cloth.jpg", alt: "Hessian Cloth" },
    intro:
      "Natural hessian cloth rolls suitable for packaging, wrapping, and various industrial applications. Eco-friendly, breathable, and biodegradable.",
    highlights: defaultHighlights,
    features: [],
    uses: [
      { icon: "tractor", label: "Agriculture" },
      { icon: "package", label: "Packaging" },
      { icon: "palette", label: "Craft" },
      { icon: "shield", label: "Protective Wrap" },
    ],
    footerTagline: "Nature's Wrap. Industry's Choice.",
    theme: "cream",
  },

  "nylon-threads": {
    slug: "nylon-threads",
    title: "Nylon Threads",
    shortDescription: "Nylon threads for stitching and reinforcement.",
    tagline: "Strength in Every Stitch",
    heroBadges: ["High Strength", "Wear Resistant", "Industrial"],
    hero: { src: "/products/nylon-threads.jpg", alt: "Nylon Threads" },
    intro:
      "High-strength nylon threads for stitching and reinforcement. Excellent durability and resistance to wear and tear for bag manufacturing and industrial sewing.",
    highlights: defaultHighlights,
    features: [],
    uses: [
      { icon: "bag", label: "Bag Manufacturing" },
      { icon: "chair", label: "Upholstery" },
      { icon: "factory", label: "Industrial Sewing" },
    ],
    footerTagline: "Built to Hold. Made to Last.",
    theme: "white",
  },

  "polypropylene-niwar": {
    slug: "polypropylene-niwar",
    title: "Polypropylene Niwar",
    shortDescription: "Polypropylene niwar for webbing and support.",
    tagline: "Flexible. Strong. Reliable.",
    heroBadges: ["High Strength", "Flexible", "Custom Width"],
    hero: { src: "/products/polypropylene-niwar.jpg", alt: "Polypropylene Niwar" },
    intro:
      "Polypropylene niwar webbing strips for handles, straps, and support structures. Excellent strength and flexibility for bag handles and luggage straps.",
    highlights: defaultHighlights,
    features: [],
    uses: [
      { icon: "bag", label: "Bag Handles" },
      { icon: "luggage", label: "Luggage Straps" },
      { icon: "link", label: "Webbing" },
      { icon: "factory", label: "Reinforcement" },
    ],
    footerTagline: "Hold Strong. Carry On.",
    theme: "navy",
  },
};

export const productSlugs = Object.keys(products);
