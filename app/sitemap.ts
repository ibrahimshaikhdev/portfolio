import type { MetadataRoute } from "next";

const siteUrl = "https://portfolio-ibrahimshaikh.vercel.app";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/projects", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/experience", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/education", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/skills", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/bio", priority: 0.6, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
