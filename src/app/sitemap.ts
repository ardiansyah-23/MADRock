import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mad-rock.vercel.app";

  const routes = [
    "",
    "/programs",
    "/workout-library",
    "/meal-planner",
    "/pricing",
    "/tools",
    "/transformations",
    "/ai-coach",
    "/blog",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
