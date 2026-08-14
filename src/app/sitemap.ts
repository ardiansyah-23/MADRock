import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mad-rock.vercel.app";

  const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "",                  priority: 1.0,  freq: "daily"   },
    { path: "/programs",         priority: 0.9,  freq: "weekly"  },
    { path: "/pricing",          priority: 0.9,  freq: "weekly"  },
    { path: "/blog",             priority: 0.85, freq: "daily"   },
    { path: "/transformations",  priority: 0.85, freq: "weekly"  },
    { path: "/tools",            priority: 0.8,  freq: "weekly"  },
    { path: "/workout-library",  priority: 0.8,  freq: "weekly"  },
    { path: "/meal-planner",     priority: 0.8,  freq: "weekly"  },
    { path: "/ai-coach",         priority: 0.75, freq: "monthly" },
    { path: "/contact",          priority: 0.7,  freq: "monthly" },
    { path: "/faq",              priority: 0.7,  freq: "monthly" },
    { path: "/privacy",          priority: 0.3,  freq: "yearly"  },
    { path: "/terms",            priority: 0.3,  freq: "yearly"  },
  ];

  return routes.map(({ path, priority, freq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }));
}
