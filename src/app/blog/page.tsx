import type { Metadata } from "next";
import { BlogClientContent } from "./BlogClientContent";

export const metadata: Metadata = {
  title: "MADRock Fitness Journal – Artikel Latihan & Nutrisi Berbasis Sains",
  description:
    "Baca artikel evidence-based tentang biomekanika latihan beban, strategi nutrisi, protokol pemulihan, dan suplemen dari Coach Ahmad Hudzaifah.",
  keywords: [
    "Artikel Fitness Indonesia",
    "Latihan Beban",
    "Nutrisi Atlet",
    "Science-based Training",
    "Hypertrophy",
    "Fat Loss",
    "Protokol Suplemen",
    "Ahmad Hudzaifah Blog",
  ],
  openGraph: {
    title: "MADRock Fitness Journal – Artikel Latihan & Nutrisi Berbasis Sains",
    description:
      "Artikel evidence-based tentang biomekanika latihan, strategi nutrisi, dan pemulihan optimal dari Coach Ahmad Hudzaifah.",
    url: "https://mad-rock.vercel.app/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MADRock Fitness Journal",
    description: "Artikel latihan dan nutrisi berbasis sains oleh Coach Ahmad Hudzaifah.",
  },
};

export default function BlogPage() {
  return <BlogClientContent />;
}
