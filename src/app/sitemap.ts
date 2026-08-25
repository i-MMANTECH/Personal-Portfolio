import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

const BASE_URL = "https://emmanuelaro.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Dynamically generate all case study URLs from the projects data
  const caseStudyUrls: MetadataRoute.Sitemap = projects
    .filter((p) => p.links.caseStudy)
    .map((p) => ({
      url: `${BASE_URL}${p.links.caseStudy}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    }));

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudyUrls,
  ];
}
