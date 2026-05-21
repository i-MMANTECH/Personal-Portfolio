import type { MetadataRoute } from "next";

const BASE_URL = "https://emmanuelaro.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/work/nativetalk-ticketing`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
