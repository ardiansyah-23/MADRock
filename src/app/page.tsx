import type { Metadata } from "next";
import { HeroSection } from "@/features/home/HeroSection";
import { TrustedBrands } from "@/features/home/TrustedBrands";
import { AboutSection } from "@/features/home/AboutSection";
import { FeaturedVideo } from "@/features/home/FeaturedVideo";
import { CareerTimeline } from "@/features/home/CareerTimeline";
import { SpecializationsSection } from "@/features/home/SpecializationsSection";
import { AthletesAchievements } from "@/features/home/AthletesAchievements";
import { PricingSection } from "@/features/home/PricingSection";
import { TestimonialsSection } from "@/features/home/TestimonialsSection";
import { CTASection } from "@/features/home/CTASection";

export const metadata: Metadata = {
  title: "Training by MAD | Ahmad Hudzaifah — S&C Coach & Speed Climbing Indonesia",
  description:
    "Pelatih Strength & Conditioning dan Speed Climbing Indonesia. Head Coach PON 2024 DKI Jakarta. Founder Training by MAD. Metodologi berbasis sains untuk atlet elite dan pemula.",
  keywords: [
    "Ahmad Hudzaifah",
    "Training by MAD",
    "Strength Conditioning Coach Indonesia",
    "Speed Climbing Coach",
    "KONI DKI Jakarta",
    "PON 2024 Panjat Tebing",
    "Pelatih Panjat Tebing",
    "S&C Coach",
    "Sport Climbing",
  ],
  openGraph: {
    title: "Training by MAD | Ahmad Hudzaifah — S&C Coach & Speed Climbing Indonesia",
    description:
      "Pelatih Strength & Conditioning dan Speed Climbing Indonesia. Head Coach PON 2024 DKI Jakarta. Founder Training by MAD.",
    url: "https://mad-rock.vercel.app",
    siteName: "Training by MAD",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Ahmad Hudzaifah - Training by MAD",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Training by MAD | Ahmad Hudzaifah",
    description: "Pelatih S&C dan Speed Climbing Indonesia. Founder Training by MAD.",
    images: ["https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ahmad Hudzaifah",
    jobTitle: "Strength and Conditioning Coach & Sport Climbing Coach",
    description:
      "Pelatih Strength & Conditioning dan Speed Climbing Indonesia. Head Coach PON 2024 DKI Jakarta. Founder Training by MAD.",
    "@id": "https://mad-rock.vercel.app",
    url: "https://mad-rock.vercel.app",
    sameAs: [
      "https://www.instagram.com/ahmadhudzaifaah",
      "https://www.linkedin.com/in/ahmadhudzaifah",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universitas Negeri Jakarta",
    },
    knowsAbout: [
      "Strength and Conditioning",
      "Speed Climbing",
      "Sport Climbing",
      "Athletic Performance",
      "Periodization Training",
    ],
  };

  return (
    <main className="min-h-screen bg-mad-bg text-mad-text overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustedBrands />
      <AboutSection />
      <FeaturedVideo />
      <CareerTimeline />
      <SpecializationsSection />
      <AthletesAchievements />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}

