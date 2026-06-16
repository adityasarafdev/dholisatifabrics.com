import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shree Dholi Sati Fabrics",
    short_name: "Dholi Sati Fabrics",
    description:
      "Manufacturer of industrial bags, tarpaulins, non-woven rolls, HDPE/LDPE sheets, jute bags and printed packaging in Patna, Bihar.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f7f7f5",
    theme_color: "#f7f7f5",
    orientation: "portrait",
    lang: "en-IN",
    categories: ["business", "shopping", "manufacturing"],
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png", purpose: "any" },
    ],
  };
}
