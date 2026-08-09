import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Athlete Physique Transformations: Before & After Proof | MADRock",
  description:
    "See real before and after transformation results from 600+ athletes who built muscle, shredded body fat, and hit peak strength with MADRock periodized coaching.",
  keywords: [
    "Fitness Transformations",
    "Body Recomposition Before After",
    "Fat Loss Proof",
    "Muscle Building Results",
    "MADRock Client Proof",
  ],
  openGraph: {
    title: "Athlete Physique Transformations: Before & After Proof | MADRock",
    description: "Real before and after results achieved by athletes following our periodized coaching protocols.",
    url: "https://madrock.fit/transformations",
  },
};

export default function TransformationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
