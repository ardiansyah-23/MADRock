import type { Metadata } from "next";
import { BlogDetailClient } from "./BlogDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug).replace(/-/g, " ");
  const title = decodedSlug.charAt(0).toUpperCase() + decodedSlug.slice(1);

  return {
    title: `${title} | MADRock Fitness Journal`,
    description: `Baca artikel fitness evidence-based: ${title}. Panduan latihan beban, nutrisi, dan pemulihan dari Coach Ahmad Hudzaifah.`,
    openGraph: {
      title: `${title} | MADRock Fitness Journal`,
      description: `Artikel fitness berbasis sains dari Coach Ahmad Hudzaifah – Training by MAD.`,
      url: `https://mad-rock.vercel.app/blog/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | MADRock`,
      description: `Artikel fitness dari Coach Ahmad Hudzaifah.`,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  return <BlogDetailClient slug={slug} />;
}
