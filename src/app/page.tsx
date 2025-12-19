"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

const productCategories = [
  {
    title: "Non Woven Bag",
    description: "Durable non-woven carry bags for retail and promotions.",
    abbreviation: "NW",
    slug: "non-woven-bag",
  },
  {
    title: "Non Woven Fabric Roll",
    description: "Non-woven fabric rolls for printing and branding.",
    abbreviation: "NW",
    slug: "non-woven-fabric-roll",
  },
  {
    title: "BOPP Bag",
    description: "BOPP laminated bags with high-quality prints and strength.",
    abbreviation: "BP",
    slug: "bopp-bag",
  },
  {
    title: "HDPE Bag & Roll",
    description: "HDPE bags and rolls for heavy-duty packaging and storage.",
    abbreviation: "HD",
    slug: "hdpe-bag-roll",
  },
  {
    title: "PP Bag",
    description: "Polypropylene bags for bulk, agriculture, and industrial use.",
    abbreviation: "PP",
    slug: "pp-bag",
  },
  {
    title: "Canvas Tarpaulin",
    description: "Heavy-duty canvas tarps for cover and transport.",
    abbreviation: "CT",
    slug: "canvas-tarpaulin",
  },
  {
    title: "Shade Net (Construction Net)",
    description: "Protective construction shade nets for sites and scaffolding.",
    abbreviation: "SN",
    slug: "shade-net-construction-net",
  },
  {
    title: "Loop Handle Bag",
    description: "Loop-handle carry bags for retail durability and comfort.",
    abbreviation: "LH",
    slug: "loop-handle-bag",
  },
  {
    title: "D & W Cut Bag",
    description: "D-cut and W-cut non-woven bags ready for branding.",
    abbreviation: "DW",
    slug: "d-w-cut-bag",
  },
  {
    title: "Printed Mask",
    description: "Printed face masks for events and promotions.",
    abbreviation: "PM",
    slug: "printed-mask",
  },
  {
    title: "Jute Bags",
    description: "Eco-forward jute bags for merchandising and gifting.",
    abbreviation: "JB",
    slug: "jute-bags",
  },
  {
    title: "Cotton Canvas Conveyor Belt",
    description: "Durable cotton canvas conveyor belts for industrial and commercial use.",
    abbreviation: "CB",
    slug: "cotton-canvas-conveyor-belt",
  },
  {
    title: "Plastic Tarpaulin",
    description: "Waterproof plastic tarpaulins for cover and protection.",
    abbreviation: "PT",
    slug: "plastic-tarpaulin",
  },
  {
    title: "Cotton Canvas Bag",
    description: "Strong cotton canvas bags for daily and retail use.",
    abbreviation: "CC",
    slug: "cotton-canvas-bag",
  },
  {
    title: "Hessian Cloth",
    description: "Hessian cloth rolls for packaging and industrial needs.",
    abbreviation: "HC",
    slug: "hessian-cloth",
  },
  {
    title: "Nylon Threads",
    description: "Nylon threads for stitching and reinforcement.",
    abbreviation: "TN",
    slug: "nylon-threads",
  },
  {
    title: "Polypropylene Niwar",
    description: "Polypropylene niwar for webbing and support.",
    abbreviation: "PN",
    slug: "polypropylene-niwar",
  },
];

const whatsappUrl =
  "https://wa.me/9661870000?text=Hi%2C%20I%27m%20interested%20in%20your%20products.";

type FooterLink = 
  | { label: string; href: string; isLink?: boolean }
  | { label: string; href: string; value: string; isLink?: boolean; secondPhone?: string; secondPhoneHref?: string };

const footerLinks: Array<{
  title: string;
  links: FooterLink[];
}> = [
  {
    title: "Products",
    links: [
      { label: "Shopping & carry bags", href: "#products" },
      { label: "Non-woven rolls", href: "#products" },
      { label: "Tarpaulins", href: "#products" },
      { label: "Printing materials", href: "#products" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "WhatsApp", href: whatsappUrl, isLink: true },
      { label: "Email", href: "mailto:dholisatifabrics89@gmail.com", value: "dholisatifabrics89@gmail.com" },
      { label: "Call", href: "tel:+919661870000", value: "+91 96618 70000", secondPhone: "79030 82781", secondPhoneHref: "tel:7903082781" },
    ],
  },
];

export default function Home() {
  const [expandedImage, setExpandedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const handleImageClick = (product: { title: string; abbreviation: string; slug: string }) => {
    const imagePath = `/products/${product.slug}.jpg`;
    setExpandedImage({
      src: imagePath,
      title: product.title,
    });
  };

  const closeModal = () => {
    setExpandedImage(null);
  };

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && expandedImage) {
        setExpandedImage(null);
      }
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
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.navLogo}>
            <Image
              src="/logo.jpeg"
              alt="Shree Dholi Sati Fabrics Logo"
              width={40}
              height={40}
              className={styles.logoImage}
            />
            <span className={styles.navBrandName}>Shree Dholi Sati Fabrics</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#products" className={styles.navLink}>Product Catalogue</a>
            <a href="#manufacturing" className={styles.navLink}>Manufacturing</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.navButton}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </nav>
      <div className={styles.inner}>
        <header id="hero" className={styles.hero}>
          <div className={styles.heroHeader}>
            <Image
              src="/logo.jpeg"
              alt="Shree Dholi Sati Fabrics Logo"
              width={56}
              height={56}
              className={styles.logoImage}
            />
            <div className={styles.companyName}>Shree Dholi Sati Fabrics</div>
          </div>
          <h1>Reliable Bags, Tarpaulins, And Materials For Your Business</h1>
          <p className={styles.lead}>
            We manufacture and print high-strength bags, tarpaulins, and
            non-woven rolls for retail, logistics, and industrial use.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#products">
              View products
            </a>
            <a
              className={styles.secondary}
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.pill}>Custom printing</span>
            <span className={styles.pill}>Bulk manufacturing</span>
            <span className={styles.pill}>Fast sampling</span>
          </div>
        </header>

        <section id="products" className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Products</p>
              <h2>Reliable products for daily use</h2>
              <p className={styles.sectionLead}>
                Practical bags, rolls, tarps, and materials made to perform and
                stay professional.
              </p>
            </div>
          </div>
          <div className={styles.grid}>
            {productCategories.map((product) => {
              const imagePathJpg = `/products/${product.slug}.jpg`;
              const imagePathJpeg = `/products/${product.slug}.jpeg`;
              const placeholderImage = `https://via.placeholder.com/400x400/3b7dd8/ffffff?text=${encodeURIComponent(product.abbreviation)}`;
              
              return (
                <div key={product.title} className={styles.card}>
                  <div 
                    className={styles.cardImageWrapper}
                    onClick={() => handleImageClick(product)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleImageClick(product);
                      }
                    }}
                    aria-label={`View larger image of ${product.title}`}
                  >
                    <Image
                      src={imagePathJpg}
                      alt={product.title}
                      width={140}
                      height={140}
                      className={styles.productImage}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//Z"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src.includes('.jpg') && !target.src.includes('placeholder')) {
                          target.src = imagePathJpeg;
                        } else {
                          target.src = placeholderImage;
                        }
                      }}
                      unoptimized
                    />
                  </div>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <Link href={`/products/${product.slug}`} className={styles.learnMoreButton}>
                    Learn more
                  </Link>
                </div>
              );
            })}
          </div>
          
          {expandedImage && (
            <div className={styles.modalOverlay} onClick={closeModal}>
              <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className={styles.closeButton}
                  onClick={closeModal}
                  aria-label="Close image"
                >
                  ×
                </button>
                <div className={styles.modalImageWrapper}>
                  <Image
                    src={expandedImage.src}
                    alt={expandedImage.title}
                    width={1200}
                    height={1200}
                    className={styles.modalImage}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//Z"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const productSlug = expandedImage.src.split('/').pop()?.replace('.jpg', '') || '';
                      const product = productCategories.find(p => p.slug === productSlug);
                      if (product) {
                        // Try .jpeg extension
                        if (target.src.includes('.jpg') && !target.src.includes('placeholder')) {
                          target.src = `/products/${product.slug}.jpeg`;
                        } else {
                          target.src = `https://via.placeholder.com/1200x1200/3b7dd8/ffffff?text=${encodeURIComponent(product.abbreviation)}`;
                        }
                      }
                    }}
                    unoptimized
                  />
                </div>
                <p className={styles.modalTitle}>{expandedImage.title}</p>
              </div>
            </div>
          )}
        </section>

        <section id="manufacturing" className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Manufacturing & printing</p>
              <h2>Quality control built in</h2>
              <p className={styles.sectionLead}>
                End-to-end production with inspection at every step to keep your
                brand sharp and your supply reliable.
              </p>
            </div>
          </div>
          <div className={styles.listCard}>
            <ul className={styles.list}>
              <li>Custom sizes, GSM options, lamination, and handle styles.</li>
              <li>Multi-color printing ready stock for campaigns and branding.</li>
              <li>Reinforced stitching and industrial threads for load-bearing bags.</li>
              <li>Weather-resistant tarpaulins for outdoor and logistics use.</li>
              <li>Rapid sampling to approve print layouts and materials.</li>
            </ul>
          </div>
        </section>

        <footer id="contact" className={styles.footer}>
          <div className={styles.footerHeader}>
            <h3 className={styles.footerTitle}>Contact</h3>
            <p className={styles.footerSubtitle}>Connect with us for quality products and reliable service</p>
          </div>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <div className={styles.logoMark}>
                <Image
                  src="/logo.jpeg"
                  alt="Shree Dholi Sati Fabrics Logo"
                  width={52}
                  height={52}
                  className={styles.logoImage}
                />
              </div>
              <div>
                <p className={styles.brandName}>Shree Dholi Sati Fabrics</p>
                <p className={styles.brandTagline}>
                  Industrial bags, tarpaulins, non-woven rolls, and printing.
                </p>
              </div>
            </div>
            <div className={styles.footerGrid}>
              {footerLinks.map((group) => (
                <div key={group.title} className={styles.footerColumn}>
                  <p className={styles.footerHeading}>{group.title}</p>
                  <ul className={styles.footerList}>
                    {group.links.map((item, index) => (
                      <li key={`${item.label}-${index}`}>
                        {'isLink' in item && item.isLink ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={
                              item.href.startsWith("http")
                                ? "noreferrer"
                                : undefined
                            }
                          >
                            {item.label}
                          </a>
                        ) : (
                          <div className={styles.contactItem}>
                            <span className={styles.contactLabel}>{item.label}</span>
                            <div className={styles.contactValues}>
                              {'value' in item && (
                                <>
                                  <a href={item.href} className={styles.contactValue}>
                                    {item.value}
                                  </a>
                                  {item.secondPhone && (
                                    <>
                                      <span className={styles.contactSeparator}>|</span>
                                      <a href={item.secondPhoneHref} className={styles.contactValue}>
                                        {item.secondPhone}
                                      </a>
                                    </>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.mapSection}>
            <h4 className={styles.mapTitle}>Find Us</h4>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57572.553974751805!2d85.14813961617837!3d25.59545676802641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5f834e65de9b%3A0x34e0d8a7f8c5caf4!2sShree%20Dholi%20Sati%20Fabrics!5e0!3m2!1sen!2sin!4v1766150485587!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapIframe}
                title="Shree Dholi Sati Fabrics Location"
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
