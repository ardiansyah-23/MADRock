import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "12-Week Periodized Training Programs: Build Muscle & Shred Fat | MADRock",
  description:
    "Explore scientific 12-week weightlifting splits engineered for progressive overload, maximum mechanical tension, and rapid physique transformation without injury.",
  keywords: [
    "Periodized Training Split",
    "Hypertrophy Program",
    "Fat Loss Masterclass",
    "Body Recomposition Split",
    "Powerbuilding Program",
    "MADRock Fitness",
  ],
  openGraph: {
    title: "Periodized Training Programs: Build Muscle & Shred Fat | MADRock",
    description: "Scientific weightlifting splits engineered for maximum mechanical tension and rapid physique transformation.",
    url: "https://madrock.fit/programs",
  },
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
