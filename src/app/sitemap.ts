import type { MetadataRoute } from "next";
import { products, productSlugs } from "@/data/products";

const siteUrl = "https://www.dholisatifabrics.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/logo.jpeg`],
    },
    ...productSlugs.map((slug) => {
      const product = products[slug];
      return {
        url: `${siteUrl}/products/${slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
        images: product?.hero?.src ? [`${siteUrl}${product.hero.src}`] : undefined,
      };
    }),
  ];
}
