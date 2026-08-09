import type { Metadata } from "next";
import { HeroSection } from "@/features/home/HeroSection";
import { TrustedBrands } from "@/features/home/TrustedBrands";
import { AboutSection } from "@/features/home/AboutSection";
import { FeaturedVideo } from "@/features/home/FeaturedVideo";
import { CoachesSection } from "@/features/home/CoachesSection";
import { PricingSection } from "@/features/home/PricingSection";
import { TestimonialsSection } from "@/features/home/TestimonialsSection";
import { CTASection } from "@/features/home/CTASection";

export const metadata: Metadata = {
  title: "MADRock: Science-Based Fitness Coaching & AI Meal Planner",
  description:
    "Build lean muscle and shred body fat without extreme diets. Certified 1-on-1 personal coaching, 12-week periodized workout splits, and AI nutrition generators.",
  keywords: [
    "Fitness Coaching",
    "Personal Trainer Online",
    "Hypertrophy Program",
    "Fat Loss Protocol",
    "Body Recomposition",
    "AI Meal Planner",
    "Workout Biomechanics",
    "MADRock Fitness",
  ],
  openGraph: {
    title: "MADRock: Science-Based Fitness Coaching & AI Meal Planner",
    description:
      "Build lean muscle and shred body fat without extreme diets. Certified 1-on-1 personal coaching, periodized splits, and AI meal generators.",
    url: "https://mad-rock.vercel.app",
    siteName: "MADRock Fitness Coaching",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "MADRock Premium Science-Based Fitness Coaching",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MADRock: Science-Based Fitness Coaching & AI Meal Planner",
    description: "Build lean muscle and shred body fat without extreme diets.",
    images: ["https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "MADRock Performance Coaching",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    "@id": "https://mad-rock.vercel.app",
    url: "https://mad-rock.vercel.app",
    telephone: "+18005557625",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "742 Evergreen Athletic Plaza, Suite 400",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US",
    },
    description:
      "Evidence-based bodybuilding biomechanics coaching designed to help you gain muscle, shred fat, and maximize human strength safely.",
  };

  return (
    <main className="min-h-screen bg-mad-bg text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustedBrands />
      <AboutSection />
      <FeaturedVideo />
      <CoachesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
