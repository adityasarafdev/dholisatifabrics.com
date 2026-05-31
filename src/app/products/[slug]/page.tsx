import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { products, productSlugs } from "@/data/products";
import { ProductIcon } from "@/components/ProductIcon";

const siteUrl = "https://www.dholisatifabrics.com";
const siteName = "Shree Dholi Sati Fabrics";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug];
  if (!product) return {};
  const url = `${siteUrl}/products/${slug}`;
  return {
    title: product.title,
    description: product.intro,
    keywords: [
      product.title,
      ...product.heroBadges,
      ...product.uses.map((u) => u.label),
      "manufacturer",
      "Patna",
      "Bihar",
      "India",
    ],
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      type: "website",
      url,
      title: `${product.title} — ${siteName}`,
      description: product.intro,
      siteName,
      images: [
        {
          url: product.hero.src,
          width: 720,
          height: 720,
          alt: product.hero.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} — ${siteName}`,
      description: product.intro,
      images: [product.hero.src],
    },
  };
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products[slug];

  if (!product) {
    notFound();
  }

  const hasOptions = Boolean(
    product.colors?.length ||
      product.sizes?.length ||
      product.gsm?.length ||
      product.customization?.length,
  );

  const sections: { key: string; title: string }[] = [];
  if (product.highlights.length > 0) sections.push({ key: "highlights", title: "Why this product" });
  if (product.features.length > 0) sections.push({ key: "features", title: "Specifications" });
  if (product.uses.length > 0) sections.push({ key: "uses", title: "Applications" });
  if (hasOptions) sections.push({ key: "options", title: "Options & Customisation" });

  const sectionNumber = (key: string) =>
    pad(sections.findIndex((s) => s.key === key) + 1);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.intro,
    image: `${siteUrl}${product.hero.src}`,
    url: `${siteUrl}/products/${slug}`,
    brand: { "@type": "Brand", name: siteName },
    manufacturer: {
      "@type": "Organization",
      name: siteName,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Patna",
        addressRegion: "Bihar",
        addressCountry: "IN",
      },
    },
    category: "Industrial Bags & Materials",
    additionalProperty: [
      ...(product.sizes ? [{ "@type": "PropertyValue", name: "Sizes", value: product.sizes.join(", ") }] : []),
      ...(product.gsm ? [{ "@type": "PropertyValue", name: "GSM", value: product.gsm.join(", ") }] : []),
      ...(product.colors ? [{ "@type": "PropertyValue", name: "Colours", value: product.colors.map((c) => c.label).join(", ") }] : []),
    ],
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          <span aria-hidden="true">←</span> Back to products
        </Link>

        <article className={styles.catalogue}>
          <section className={styles.hero}>
            <div className={styles.heroText}>
              <div className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowDot} aria-hidden="true" />
                {product.tagline}
              </div>
              <h1 className={styles.heroTitle}>{product.title}</h1>
              <p className={styles.heroIntro}>{product.intro}</p>
              {product.heroBadges.length > 0 && (
                <div className={styles.heroBadges}>
                  {product.heroBadges.map((badge, i) => (
                    <span key={i} className={styles.heroBadge}>
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.heroImage}>
              <Image
                src={product.hero.src}
                alt={product.hero.alt}
                width={640}
                height={640}
                priority
              />
            </div>
          </section>

          {product.highlights.length > 0 && (
            <section className={styles.section}>
              <header className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>{sectionNumber("highlights")}</span>
                <h2 className={styles.sectionTitle}>Why this product</h2>
              </header>
              <div className={styles.highlights}>
                {product.highlights.map((h, i) => (
                  <div key={i} className={styles.highlightCard}>
                    <span className={styles.highlightIcon}>
                      <ProductIcon name={h.icon} size={20} />
                    </span>
                    <div className={styles.highlightBody}>
                      <span className={styles.highlightLabel}>{h.label}</span>
                      {h.description && (
                        <span className={styles.highlightDescription}>{h.description}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {product.features.length > 0 && (
            <section className={styles.section}>
              <header className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>{sectionNumber("features")}</span>
                <h2 className={styles.sectionTitle}>Specifications</h2>
              </header>
              <ul className={styles.featuresList}>
                {product.features.map((f, i) => (
                  <li key={i} className={styles.featureItem}>
                    <span className={styles.featureCheck}>
                      <ProductIcon name={f.icon} size={14} strokeWidth={2.5} />
                    </span>
                    <span>{f.label}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {product.uses.length > 0 && (
            <section className={styles.section}>
              <header className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>{sectionNumber("uses")}</span>
                <h2 className={styles.sectionTitle}>Applications</h2>
              </header>
              <div className={styles.usesGrid}>
                {product.uses.map((u, i) => (
                  <div key={i} className={styles.useCard}>
                    <span className={styles.useIcon}>
                      <ProductIcon name={u.icon} size={22} />
                    </span>
                    <span className={styles.useLabel}>{u.label}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {hasOptions && (
            <section className={styles.section}>
              <header className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>{sectionNumber("options")}</span>
                <h2 className={styles.sectionTitle}>Options & Customisation</h2>
              </header>
              <div className={styles.options}>
                {product.colors && product.colors.length > 0 && (
                  <div className={styles.optionBlock}>
                    <h3 className={styles.optionTitle}>Available Colours</h3>
                    <div className={styles.colorGrid}>
                      {product.colors.map((c, i) => (
                        <div
                          key={i}
                          className={styles.colorSwatch}
                          style={{ background: c.hex }}
                          title={c.label}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {product.sizes && product.sizes.length > 0 && (
                  <div className={styles.optionBlock}>
                    <h3 className={styles.optionTitle}>Available Sizes</h3>
                    <div className={styles.sizeGrid}>
                      {product.sizes.map((s, i) => (
                        <span key={i} className={styles.sizeChip}>{s}</span>
                      ))}
                    </div>
                  </div>
                )}

                {product.gsm && product.gsm.length > 0 && (
                  <div className={styles.optionBlock}>
                    <h3 className={styles.optionTitle}>GSM Options</h3>
                    <div className={styles.sizeGrid}>
                      {product.gsm.map((g, i) => (
                        <span key={i} className={styles.gsmChip}>{g}</span>
                      ))}
                    </div>
                  </div>
                )}

                {product.customization && product.customization.length > 0 && (
                  <div className={styles.optionBlock}>
                    <h3 className={styles.optionTitle}>Custom Made</h3>
                    <div className={styles.customGrid}>
                      {product.customization.map((c, i) => (
                        <div key={i} className={styles.customItem}>
                          <span className={styles.customIcon}>
                            <ProductIcon name={c.icon} size={18} />
                          </span>
                          <span>{c.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          <footer className={styles.cataloguefooter}>
            <p className={styles.footerTagline}>{product.footerTagline}</p>
          </footer>
        </article>
      </div>
    </div>
  );
}
