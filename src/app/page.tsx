import { HeroSection } from "@/features/home/HeroSection";
import { TrustedBrands } from "@/features/home/TrustedBrands";
import { AboutSection } from "@/features/home/AboutSection";
import { ProgramsSection } from "@/features/home/ProgramsSection";
import { FeaturedVideo } from "@/features/home/FeaturedVideo";
import { TransformationSection } from "@/features/home/TransformationSection";
import { CoachesSection } from "@/features/home/CoachesSection";
import { FitnessToolsSection } from "@/features/home/FitnessToolsSection";
import { PricingSection } from "@/features/home/PricingSection";
import { TestimonialsSection } from "@/features/home/TestimonialsSection";
import { CTASection } from "@/features/home/CTASection";

export const metadata = {
  title: "MADRock — Premium Fitness Coaching Platform | Train. Focus. Become.",
  description:
    "Science-based premium coaching designed to help you build muscle, lose fat, improve strength and become your best version. Features custom workouts, AI meal plans, and 1-on-1 coaching.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-mad-bg text-white overflow-hidden">
      <HeroSection />
      <TrustedBrands />
      <AboutSection />
      <ProgramsSection />
      <FeaturedVideo />
      <TransformationSection />
      <CoachesSection />
      <FitnessToolsSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
