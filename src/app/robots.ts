import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://tillemtekstil.com",
    sitemap: "https://tillemtekstil.com/sitemap.xml",
  };
}
