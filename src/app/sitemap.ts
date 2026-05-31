import type { MetadataRoute } from "next";
import { productSlugs } from "@/data/products";

const siteUrl = "https://www.dholisatifabrics.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...productSlugs.map((slug) => ({
      url: `${siteUrl}/products/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
