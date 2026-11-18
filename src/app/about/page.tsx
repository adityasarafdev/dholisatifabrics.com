import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import about from "./page.module.css";
import { products, productSlugs } from "@/data/products";
import { ProductIcon } from "@/components/ProductIcon";
import { QuoteButton } from "@/components/QuoteForm";
import { whatsappLink } from "@/lib/contact";

const siteUrl = "https://www.dholisatifabrics.com";
const siteName = "Shree Dholi Sati Fabrics";

const description =
  "Shree Dholi Sati Fabrics is a Patna, Bihar based manufacturer and supplier of industrial bags, tarpaulins, non-woven rolls, HDPE/LDPE materials and printed packaging, shipping across India.";

export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: `${siteUrl}/about`,
    title: `About Us — ${siteName}`,
    description,
    siteName,
    images: [{ url: "/logo.jpeg", width: 750, height: 750, alt: siteName }],
  },
};

const quoteOptions = productSlugs.map((slug) => ({ slug, title: products[slug].title }));

const whatsappUrl = whatsappLink("Hi, I'd like to know more about your business.");

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${siteUrl}/about`,
  name: `About ${siteName}`,
  description,
  inLanguage: "en-IN",
  mainEntity: { "@id": `${siteUrl}#business` },
};

const facts = [
  { value: `${productSlugs.length}+`, label: "Product categories" },
  { value: "Pan-India", label: "Shipping" },
  { value: "Mon to Sat", label: "9 AM to 7 PM" },
];

const values = [
  { icon: "shieldCheck", title: "Quality first", description: "Every batch is checked for strength, finish and print before it leaves our facility." },
  { icon: "handshake", title: "Honest dealing", description: "Clear pricing, realistic timelines and straight answers, whether the order is small or bulk." },
  { icon: "ruler", title: "Made to your spec", description: "Sizes, GSM, lamination, handles and printing tailored to how you will actually use the product." },
  { icon: "truck", title: "Dependable supply", description: "Stock and production planned so repeat orders arrive on time, every time." },
];

const industries = [
  { icon: "shoppingBag", label: "Retail & shops" },
  { icon: "wheat", label: "Agriculture & grain" },
  { icon: "truck", label: "Logistics & courier" },
  { icon: "construction", label: "Construction" },
  { icon: "utensils", label: "Food & FMCG" },
  { icon: "factory", label: "Industrial units" },
  { icon: "gift", label: "Events & promotions" },
  { icon: "warehouse", label: "Warehousing" },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.navLogo}>
            <Image src="/logo.jpeg" alt="Shree Dholi Sati Fabrics" width={36} height={36} className={styles.logoImage} />
            <span className={styles.navBrandName}>Shree Dholi Sati Fabrics</span>
          </Link>
          <div className={styles.navRight}>
            <Link href="/#products" className={styles.navButtonOutline}>
              Products
            </Link>
            <QuoteButton className={styles.navButton} productOptions={quoteOptions}>
              <span className={styles.navQuoteIcon}>
                <ProductIcon name="clipboard" size={16} strokeWidth={1.8} />
              </span>
              Get Quote
            </QuoteButton>
          </div>
        </div>
      </nav>

      <main className={styles.inner}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroBackdrop} aria-hidden="true" />
          <div className={about.heroText}>
            <div className={styles.heroEyebrow}>
              <span className={styles.heroEyebrowDot} aria-hidden="true" />
              About us
            </div>
            <h1 className={styles.heroTitle}>
              Packaging and covering materials, made in Patna for businesses across India.
            </h1>
            <p className={styles.heroLead}>
              Shree Dholi Sati Fabrics manufactures, prints and supplies bags, tarpaulins, non-woven rolls,
              HDPE and LDPE materials, labels and packaging machines. We work with shops, traders, farms,
              factories and brands that need dependable material at a fair price.
            </p>
            <div className={styles.heroMetrics}>
              {facts.map((f) => (
                <div key={f.label} className={styles.metric}>
                  <div className={styles.metricValue}>{f.value}</div>
                  <div className={styles.metricLabel}>{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>
              <span className={styles.sectionNumber}>01</span>
              <span className={styles.sectionEyebrow}>Who we are</span>
            </div>
            <h2 className={styles.sectionTitle}>A business built on repeat customers</h2>
          </header>

          <div className={about.storyGrid}>
            <div className={about.storyText}>
              <p>
                Businesses in Bihar should not have to look far for strong, well-made bags and covers. From our
                base in Patna we produce and source a wide range of packaging and covering materials, and ship
                them across the country.
              </p>
              <p>
                Most of our customers come back to us, and many come through word of mouth. That happens
                because we listen to what the product needs to do, suggest the right material and GSM, share
                samples before bulk production, and deliver what we promised.
              </p>
              <p>
                From a single printed carry bag order to regular truckloads of HDPE sacks and tarpaulins, every
                order gets the same attention.
              </p>
            </div>

            <dl className={about.factList}>
              <div className={about.factRow}>
                <dt>Based in</dt>
                <dd>Patna, Bihar, India</dd>
              </div>
              <div className={about.factRow}>
                <dt>Business type</dt>
                <dd>Manufacturer, printer & supplier</dd>
              </div>
              <div className={about.factRow}>
                <dt>Entity</dt>
                <dd>Proprietorship</dd>
              </div>
              <div className={about.factRow}>
                <dt>GSTIN</dt>
                <dd>10BLDPS1721F1ZP</dd>
              </div>
              <div className={about.factRow}>
                <dt>IEC</dt>
                <dd>BLDPS1721F</dd>
              </div>
              <div className={about.factRow}>
                <dt>Languages</dt>
                <dd>Hindi, English</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* VALUES */}
        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>
              <span className={styles.sectionNumber}>02</span>
              <span className={styles.sectionEyebrow}>What we stand for</span>
            </div>
            <div>
              <h2 className={styles.sectionTitle}>How we work with you</h2>
              <p className={styles.sectionLead}>
                The things our customers count on us for, order after order.
              </p>
            </div>
          </header>

          <div className={`${styles.capabilityGrid} ${about.valueGrid}`}>
            {values.map((v) => (
              <div key={v.title} className={styles.capabilityCard}>
                <span className={styles.capabilityIcon}>
                  <ProductIcon name={v.icon} size={22} />
                </span>
                <h3 className={styles.capabilityTitle}>{v.title}</h3>
                <p className={styles.capabilityDescription}>{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>
              <span className={styles.sectionNumber}>03</span>
              <span className={styles.sectionEyebrow}>Who we serve</span>
            </div>
            <div>
              <h2 className={styles.sectionTitle}>Trusted across industries</h2>
              <p className={styles.sectionLead}>
                Our materials carry, cover and protect goods for a wide range of businesses.
              </p>
            </div>
          </header>

          <div className={about.industryGrid}>
            {industries.map((i) => (
              <div key={i.label} className={about.industryItem}>
                <span className={styles.trustIcon}>
                  <ProductIcon name={i.icon} size={16} strokeWidth={1.8} />
                </span>
                <span className={styles.trustLabel}>{i.label}</span>
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
              Work with us
            </div>
            <h2 className={styles.ctaStripTitle}>Tell us what you need.</h2>
            <p className={styles.ctaStripLead}>
              Share your sizes, quantities and printing needs. We&apos;ll suggest the right material and send a quote.
            </p>
            <div className={styles.ctaStripActions}>
              <QuoteButton className={styles.ctaStripPrimary} productOptions={quoteOptions}>
                Get a quote
                <span aria-hidden="true">→</span>
              </QuoteButton>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.ctaStripSecondary}>
                Message on WhatsApp
              </a>
              <Link href="/#contact" className={styles.ctaStripSecondary}>
                Contact details
                <span aria-hidden="true">→</span>
              </Link>
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
          {/* The year can differ between the static build and the visitor's clock. */}
          <div className={styles.footerCopyright} suppressHydrationWarning>
            © {new Date().getFullYear()} Shree Dholi Sati Fabrics. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
