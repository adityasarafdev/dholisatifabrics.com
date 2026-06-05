"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { ProductIcon } from "@/components/ProductIcon";

const productCategories = [
  { title: "Non Woven Bag", description: "Durable non-woven carry bags for retail and promotions.", slug: "non-woven-bag" },
  { title: "Non Woven Fabric Roll", description: "Non-woven fabric rolls for printing and branding.", slug: "non-woven-fabric-roll" },
  { title: "BOPP Bag", description: "BOPP laminated bags with high-quality prints and strength.", slug: "bopp-bag" },
  { title: "HDPE Bags & Sacks", description: "Heavy-duty HDPE bags and sacks for industrial packaging.", slug: "hdpe-bag-sacks" },
  { title: "HDPE Rolls", description: "Premium HDPE rolls for packaging and protection.", slug: "hdpe-rolls" },
  { title: "HDPE Tarpaulin", description: "HDPE tarpaulin for industrial cover and protection.", slug: "hdpe-tarpaulin" },
  { title: "PP Bag", description: "Polypropylene bags for bulk, agriculture, and industrial use.", slug: "pp-bag" },
  { title: "Canvas Tarpaulin", description: "Heavy-duty canvas tarps for cover and transport.", slug: "canvas-tarpaulin" },
  { title: "Plastic Tarpaulin", description: "Waterproof plastic tarpaulins for cover and protection.", slug: "plastic-tarpaulin" },
  { title: "Shade Net", description: "Protective construction shade nets for sites and scaffolding.", slug: "shade-net-construction-net" },
  { title: "Loop Handle Bag", description: "Loop-handle carry bags for retail durability and comfort.", slug: "loop-handle-bag" },
  { title: "D & W Cut Bag", description: "D-cut and W-cut non-woven bags ready for branding.", slug: "d-w-cut-bag" },
  { title: "Printed Mask", description: "Printed face masks for events and promotions.", slug: "printed-mask" },
  { title: "Jute Bags", description: "Eco-forward jute bags for merchandising and gifting.", slug: "jute-bags" },
  { title: "Cotton Canvas Conveyor Belt", description: "Durable cotton canvas conveyor belts for industrial use.", slug: "cotton-canvas-conveyor-belt" },
  { title: "Cotton Canvas Bag", description: "Strong cotton canvas bags for daily and retail use.", slug: "cotton-canvas-bag" },
  { title: "Hessian Cloth", description: "Hessian cloth rolls for packaging and industrial needs.", slug: "hessian-cloth" },
  { title: "Delivery Cargo Bags", description: "Extra-large cargo bags for e-commerce, courier, and logistics.", slug: "delivery-cargo-bags" },
  { title: "Packaging Pouches", description: "High-quality packaging pouches for food and consumer products.", slug: "packaging-pouches" },
  { title: "LDPE Sheets", description: "Strong, flexible LDPE sheets for industrial and commercial use.", slug: "ldpe-sheets" },
  { title: "Polypropylene Niwar", description: "Polypropylene niwar for webbing and support.", slug: "polypropylene-niwar" },
  { title: "Bag Closer Thread", description: "Premium spun polyester bag closer thread for high-speed machines.", slug: "bag-closer-thread" },
  { title: "Nylon Threads", description: "Nylon threads for stitching and reinforcement.", slug: "nylon-threads" },
];

const whatsappUrl =
  "https://wa.me/9661870000?text=Hi%2C%20I%27m%20interested%20in%20your%20products.";

const siteUrl = "https://www.dholisatifabrics.com";
const siteName = "Shree Dholi Sati Fabrics";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}#business`,
  name: siteName,
  legalName: siteName,
  image: `${siteUrl}/logo.jpeg`,
  logo: `${siteUrl}/logo.jpeg`,
  url: siteUrl,
  telephone: ["+91-9661870000", "+91-7903082781"],
  email: "dholisatifabrics89@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.5954,
    longitude: 85.1481,
  },
  taxID: "10BLDPS1721F1ZP",
  vatID: "10BLDPS1721F1ZP",
  priceRange: "₹₹",
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Non-Woven Bags",
    "HDPE & LDPE Sheets",
    "Tarpaulin Manufacturing",
    "BOPP Bags",
    "Jute Bags",
    "Packaging Pouches",
    "Industrial Threads",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  inLanguage: "en-IN",
  publisher: { "@id": `${siteUrl}#business` },
};

const heroMetrics = [
  { value: "17+", label: "Product categories" },
  { value: "Bulk", label: "Manufacturing ready" },
  { value: "Fast", label: "Sampling turnaround" },
];

const trustStrip = [
  { icon: "mapPin", label: "Patna, Bihar — Pan-India shipping" },
  { icon: "award", label: "Established manufacturer" },
  { icon: "handshake", label: "Custom & bulk orders" },
  { icon: "checkCircle", label: "Quality inspected" },
];

const capabilities = [
  { icon: "ruler", title: "Custom sizing", description: "Tailored sizes, GSM options, lamination, and handle styles to match your application." },
  { icon: "printer", title: "Multi-color printing", description: "Ready-stock multi-color printing for campaigns, brand activation, and packaging." },
  { icon: "shield", title: "Reinforced stitching", description: "Industrial threads and reinforced seams engineered for load-bearing bags." },
  { icon: "droplet", title: "Weather-resistant", description: "Tarpaulins and covers built for outdoor logistics and industrial use." },
  { icon: "sparkles", title: "Rapid sampling", description: "Fast sample turnaround to validate print layouts and materials before scale." },
  { icon: "factory", title: "Bulk manufacturing", description: "End-to-end production with quality inspection at every stage." },
];

const processSteps = [
  { icon: "clipboard", title: "Consult", description: "Share your requirements — sizes, GSM, print specs, quantities. We'll advise on the best material fit." },
  { icon: "packageOpen", title: "Sample", description: "Approve samples with your branding and materials. Fast turnaround so you can validate quickly." },
  { icon: "factory", title: "Manufacture", description: "Production runs at our facility with quality inspection at every step." },
  { icon: "send", title: "Deliver", description: "Securely packed and shipped pan-India. Bulk-ready logistics for predictable supply." },
];

export default function Home() {
  const [expandedImage, setExpandedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const handleImageClick = (product: { title: string; slug: string }) => {
    setExpandedImage({
      src: `/products/${product.slug}.jpg`,
      title: product.title,
    });
  };

  const closeModal = () => setExpandedImage(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && expandedImage) setExpandedImage(null);
    };

    if (expandedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [expandedImage]);

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.navLogo}>
            <Image src="/logo.jpeg" alt="Shree Dholi Sati Fabrics" width={36} height={36} className={styles.logoImage} />
            <span className={styles.navBrandName}>Shree Dholi Sati Fabrics</span>
          </Link>
          <div className={styles.navRight}>
            <a
              href="/catalogue.pdf"
              download
              className={styles.navButtonOutline}
            >
              <ProductIcon name="download" size={16} strokeWidth={1.8} />
              <span className={styles.navButtonLabel}>Download Catalogue</span>
              <span className={styles.navButtonLabelShort}>Catalogue</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.navButton}
              aria-label="Message us on WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className={styles.navButtonText}>WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      <main className={styles.inner}>
        {/* HERO */}
        <section id="hero" className={styles.hero}>
          <div className={styles.heroBackdrop} aria-hidden="true" />
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <div className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowDot} aria-hidden="true" />
                Manufacturing & Printing
              </div>
              <h1 className={styles.heroTitle}>
                Reliable bags, tarpaulins, and materials for your business.
              </h1>
              <p className={styles.heroLead}>
                We manufacture and print high-strength bags, tarpaulins, and non-woven rolls for retail, logistics, and industrial use — at bulk scale, with fast sampling.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryCta} href="#products">
                  View products
                  <span aria-hidden="true">→</span>
                </a>
                <a className={styles.secondaryCta} href={whatsappUrl} target="_blank" rel="noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Talk on WhatsApp
                </a>
              </div>
              <div className={styles.heroMetrics}>
                {heroMetrics.map((m) => (
                  <div key={m.label} className={styles.metric}>
                    <div className={styles.metricValue}>{m.value}</div>
                    <div className={styles.metricLabel}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroVisualThumb}>
                <Image
                  src="/products/bopp-bag.jpg"
                  alt="BOPP Bag"
                  width={480}
                  height={480}
                  className={styles.heroVisualImage}
                  priority
                />
              </div>
              <div className={styles.heroVisualThumb}>
                <Image
                  src="/products/packaging-pouches.jpg"
                  alt="Packaging Pouches"
                  width={480}
                  height={480}
                  className={styles.heroVisualImage}
                  priority
                />
              </div>
              <div className={styles.heroVisualThumb}>
                <Image src="/products/non-woven-bag.jpg" alt="Non Woven Bag" width={480} height={480} className={styles.heroVisualImage} />
              </div>
              <div className={styles.heroVisualThumb}>
                <Image src="/products/jute-bags.jpg" alt="Jute Bag" width={480} height={480} className={styles.heroVisualImage} />
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className={styles.trustStrip}>
          {trustStrip.map((t) => (
            <div key={t.label} className={styles.trustItem}>
              <span className={styles.trustIcon}>
                <ProductIcon name={t.icon} size={16} strokeWidth={1.8} />
              </span>
              <span className={styles.trustLabel}>{t.label}</span>
            </div>
          ))}
        </section>

        {/* PRODUCTS */}
        <section id="products" className={styles.section}>
          <header className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>
              <span className={styles.sectionNumber}>01</span>
              <span className={styles.sectionEyebrow}>Products</span>
            </div>
            <div>
              <h2 className={styles.sectionTitle}>Reliable products for daily use</h2>
              <p className={styles.sectionLead}>
                Practical bags, rolls, tarpaulins, and materials made to perform and stay professional.
              </p>
            </div>
          </header>

          <div className={styles.productGrid}>
            {productCategories.map((product) => (
              <article key={product.slug} className={styles.productCard}>
                <button
                  type="button"
                  className={styles.productImageWrapper}
                  onClick={() => handleImageClick(product)}
                  aria-label={`Preview ${product.title}`}
                >
                  <Image
                    src={`/products/${product.slug}.jpg`}
                    alt={product.title}
                    width={640}
                    height={640}
                    sizes="(max-width: 760px) 50vw, (max-width: 1000px) 33vw, 25vw"
                    className={styles.productImage}
                    unoptimized
                  />
                </button>
                <div className={styles.productBody}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <p className={styles.productDescription}>{product.description}</p>
                  <Link href={`/products/${product.slug}`} className={styles.productLink}>
                    View details
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className={styles.section}>
          <header className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>
              <span className={styles.sectionNumber}>02</span>
              <span className={styles.sectionEyebrow}>How we work</span>
            </div>
            <div>
              <h2 className={styles.sectionTitle}>From conversation to delivery</h2>
              <p className={styles.sectionLead}>
                A simple, predictable process. We keep things transparent at every stage so your supply stays reliable.
              </p>
            </div>
          </header>

          <div className={styles.processGrid}>
            {processSteps.map((step, i) => (
              <div key={step.title} className={styles.processCard}>
                <div className={styles.processCardTop}>
                  <span className={styles.processNumber}>{(i + 1).toString().padStart(2, "0")}</span>
                  <span className={styles.processIcon}>
                    <ProductIcon name={step.icon} size={20} />
                  </span>
                </div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className={styles.section}>
          <header className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>
              <span className={styles.sectionNumber}>03</span>
              <span className={styles.sectionEyebrow}>Capabilities</span>
            </div>
            <div>
              <h2 className={styles.sectionTitle}>Manufacturing & printing, end to end</h2>
              <p className={styles.sectionLead}>
                Quality control built into every stage — from raw material to finished print, your supply stays reliable and your brand stays sharp.
              </p>
            </div>
          </header>

          <div className={styles.capabilityGrid}>
            {capabilities.map((c) => (
              <div key={c.title} className={styles.capabilityCard}>
                <span className={styles.capabilityIcon}>
                  <ProductIcon name={c.icon} size={22} />
                </span>
                <h3 className={styles.capabilityTitle}>{c.title}</h3>
                <p className={styles.capabilityDescription}>{c.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA STRIP */}
        <section className={styles.ctaStrip}>
          <div className={styles.ctaStripPattern} aria-hidden="true" />
          <div className={styles.ctaStripContent}>
            <div className={styles.ctaStripEyebrow}>
              <span className={styles.ctaStripDot} aria-hidden="true" />
              Ready to manufacture
            </div>
            <h2 className={styles.ctaStripTitle}>Let&apos;s talk about your order.</h2>
            <p className={styles.ctaStripLead}>
              Samples, custom sizes, multi-color printing, bulk shipments. Send us a message and we&apos;ll get back to you the same day.
            </p>
            <div className={styles.ctaStripActions}>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.ctaStripPrimary}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Message on WhatsApp
              </a>
              <a href="mailto:dholisatifabrics89@gmail.com" className={styles.ctaStripSecondary}>
                Email us
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className={styles.section}>
          <header className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>
              <span className={styles.sectionNumber}>04</span>
              <span className={styles.sectionEyebrow}>Contact</span>
            </div>
            <div>
              <h2 className={styles.sectionTitle}>Get in touch</h2>
              <p className={styles.sectionLead}>
                Talk to us about samples, custom sizes, printing, and bulk orders.
              </p>
            </div>
          </header>

          <div className={styles.contactGrid}>
            <div className={styles.contactDetails}>
              <div className={styles.contactBlock}>
                <div className={styles.contactLabel}>WhatsApp</div>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.contactValue}>
                  Message us on WhatsApp
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className={styles.contactBlock}>
                <div className={styles.contactLabel}>Email</div>
                <a href="mailto:dholisatifabrics89@gmail.com" className={styles.contactValue}>
                  dholisatifabrics89@gmail.com
                </a>
              </div>
              <div className={styles.contactBlock}>
                <div className={styles.contactLabel}>Phone</div>
                <a href="tel:+919661870000" className={styles.contactValue}>+91 96618 70000</a>
                <a href="tel:+917903082781" className={styles.contactValue}>+91 79030 82781</a>
              </div>
              <div className={styles.contactBlock}>
                <div className={styles.contactLabel}>Compliance & Registration</div>
                <div className={styles.complianceRow}>
                  <span className={styles.complianceKey}>GSTIN</span>
                  <span className={styles.complianceValue}>10BLDPS1721F1ZP</span>
                  <span className={styles.complianceCheck} title="GST registered" aria-label="GST registered">
                    <ProductIcon name="checkCircle" size={14} strokeWidth={2.4} />
                  </span>
                </div>
                <div className={styles.complianceRow}>
                  <span className={styles.complianceKey}>PAN</span>
                  <span className={styles.complianceValue}>BLDPS1721F</span>
                </div>
                <div className={styles.complianceRow}>
                  <span className={styles.complianceKey}>Entity</span>
                  <span className={styles.complianceValue}>Proprietorship · Bihar, India</span>
                </div>
              </div>
            </div>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57572.553974751805!2d85.14813961617837!3d25.59545676802641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5f834e65de9b%3A0x34e0d8a7f8c5caf4!2sShree%20Dholi%20Sati%20Fabrics!5e0!3m2!1sen!2sin!4v1766150485587!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Dholi Sati Fabrics location"
              />
            </div>
          </div>
        </section>

        <footer className={styles.pageFooter}>
          <div className={styles.footerBrand}>
            <Image src="/logo.jpeg" alt="Shree Dholi Sati Fabrics" width={36} height={36} className={styles.logoImage} />
            <div>
              <div className={styles.footerBrandName}>Shree Dholi Sati Fabrics</div>
              <div className={styles.footerBrandTagline}>
                Industrial bags, tarpaulins, non-woven rolls, and printing.
              </div>
            </div>
          </div>
          <div className={styles.footerCopyright}>
            © {new Date().getFullYear()} Shree Dholi Sati Fabrics. All rights reserved.
          </div>
        </footer>
      </main>

      {expandedImage && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <button className={styles.closeButton} onClick={closeModal} aria-label="Close preview" type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Image src={expandedImage.src} alt={expandedImage.title} width={1200} height={1200} className={styles.modalImage} unoptimized />
          </div>
        </div>
      )}
    </div>
  );
}
