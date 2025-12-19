import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

// Product data - matching the slugs from the main page
const productData: Record<string, { title: string; description: string; content: string }> = {
  "non-woven-bag": {
    title: "Non Woven Bag",
    description: "Durable non-woven carry bags for retail and promotions.",
    content: "Our non-woven bags are crafted with high-quality materials to ensure durability and strength. Perfect for retail stores, promotional events, and everyday use. These bags offer excellent print quality for your branding needs and are available in various sizes and handle styles.",
  },
  "non-woven-fabric-roll": {
    title: "Non Woven Fabric Roll",
    description: "Non-woven fabric rolls for printing and branding.",
    content: "Premium non-woven fabric rolls ideal for custom printing and branding applications. Available in multiple GSM options and widths to suit your specific requirements. These rolls are perfect for creating custom bags, covers, and promotional materials.",
  },
  "bopp-bag": {
    title: "BOPP Bag",
    description: "BOPP laminated bags with high-quality prints and strength.",
    content: "BOPP (Biaxially Oriented Polypropylene) laminated bags provide exceptional print clarity and durability. These bags feature a glossy finish that enhances your brand's visual appeal. Ideal for premium retail packaging and promotional use.",
  },
  "hdpe-bag-roll": {
    title: "HDPE Bag & Roll",
    description: "HDPE bags and rolls for heavy-duty packaging and storage.",
    content: "Heavy-duty HDPE (High-Density Polyethylene) bags and rolls designed for industrial and commercial applications. These bags offer superior strength and resistance, making them perfect for packaging heavy items, agricultural products, and bulk materials.",
  },
  "pp-bag": {
    title: "PP Bag",
    description: "Polypropylene bags for bulk, agriculture, and industrial use.",
    content: "Polypropylene bags are versatile and cost-effective solutions for various industries. Suitable for agriculture, food packaging, and industrial applications. These bags are available in multiple sizes and can be customized with printing options.",
  },
  "canvas-tarpaulin": {
    title: "Canvas Tarpaulin",
    description: "Heavy-duty canvas tarps for cover and transport.",
    content: "Durable canvas tarpaulins designed to withstand harsh weather conditions. Perfect for covering construction materials, vehicles, and outdoor equipment. Made from high-quality canvas material with reinforced edges for long-lasting performance.",
  },
  "shade-net-construction-net": {
    title: "Shade Net (Construction Net)",
    description: "Protective construction shade nets for sites and scaffolding.",
    content: "Professional-grade shade nets for construction sites and scaffolding applications. These nets provide protection from sun, wind, and debris while maintaining visibility. Available in various densities and sizes to meet construction safety requirements.",
  },
  "loop-handle-bag": {
    title: "Loop Handle Bag",
    description: "Loop-handle carry bags for retail durability and comfort.",
    content: "Comfortable loop-handle bags designed for retail and shopping applications. The reinforced handles ensure durability even with heavy loads. These bags are perfect for grocery stores, boutiques, and retail outlets, offering both functionality and style.",
  },
  "d-w-cut-bag": {
    title: "D & W Cut Bag",
    description: "D-cut and W-cut non-woven bags ready for branding.",
    content: "Precision-cut D-cut and W-cut non-woven bags that are ready for your custom branding. These bags feature unique handle designs that provide comfort and style. Perfect for retail stores, events, and promotional campaigns.",
  },
  "printed-mask": {
    title: "Printed Mask",
    description: "Printed face masks for events and promotions.",
    content: "Custom-printed face masks perfect for events, promotions, and brand awareness campaigns. Made from comfortable, breathable materials with high-quality printing. Available in various sizes and designs to match your branding requirements.",
  },
  "jute-bags": {
    title: "Jute Bags",
    description: "Eco-forward jute bags for merchandising and gifting.",
    content: "Eco-friendly jute bags that combine sustainability with style. These natural fiber bags are perfect for environmentally conscious businesses and make excellent gift bags. Available in various sizes and can be customized with printing or embroidery.",
  },
  "cotton-canvas-conveyor-belt": {
    title: "Cotton Canvas Conveyor Belt",
    description: "Durable cotton canvas conveyor belts for industrial and commercial use.",
    content: "Strong cotton canvas conveyor belts designed for industrial and commercial applications. These belts offer excellent durability and are specifically engineered for conveyor systems, machinery, and various industrial uses. Available in multiple widths and lengths to suit your specific conveyor requirements.",
  },
  "plastic-tarpaulin": {
    title: "Plastic Tarpaulin",
    description: "Waterproof plastic tarpaulins for cover and protection.",
    content: "Waterproof plastic tarpaulins that provide reliable protection against rain, sun, and other weather elements. Ideal for covering construction sites, vehicles, equipment, and outdoor storage. Available in various thicknesses and sizes.",
  },
  "cotton-canvas-bag": {
    title: "Cotton Canvas Bag",
    description: "Strong cotton canvas bags for daily and retail use.",
    content: "Durable cotton canvas bags perfect for daily use and retail applications. These bags offer excellent strength and longevity, making them ideal for shopping, travel, and everyday carry needs. Available in multiple sizes and can be customized with printing.",
  },
  "hessian-cloth": {
    title: "Hessian Cloth",
    description: "Hessian cloth rolls for packaging and industrial needs.",
    content: "Natural hessian cloth rolls suitable for packaging, wrapping, and various industrial applications. This eco-friendly material is strong, breathable, and biodegradable. Perfect for agricultural packaging, craft projects, and protective wrapping.",
  },
  "nylon-threads": {
    title: "Nylon Threads",
    description: "Nylon threads for stitching and reinforcement.",
    content: "High-strength nylon threads designed for stitching and reinforcement applications. These threads offer excellent durability and resistance to wear and tear. Perfect for bag manufacturing, upholstery, and industrial sewing applications.",
  },
  "polypropylene-niwar": {
    title: "Polypropylene Niwar",
    description: "Polypropylene niwar for webbing and support.",
    content: "Polypropylene niwar (webbing) strips ideal for creating handles, straps, and support structures. These strips offer excellent strength and flexibility, making them perfect for bag handles, luggage straps, and various reinforcement applications.",
  },
};

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productData[slug];

  if (!product) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Back to products
        </Link>
        <div className={styles.content}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.productContent}>
            <p>{product.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
