import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Athlete Coach: Workout Split & Macro Generator | MADRock",
  description:
    "Generate custom periodized workout splits, precision macro meal protocols, or chat 24/7 with MADRock AI fitness algorithms for instant biomechanics guidance.",
  keywords: [
    "AI Fitness Coach",
    "AI Workout Generator",
    "AI Nutrition Plan",
    "Fitness Chatbot",
    "Progressive Overload AI",
  ],
  openGraph: {
    title: "AI Athlete Coach: Workout Split & Macro Generator | MADRock",
    description: "Generate custom periodized workout splits, precision macro meal protocols, or chat 24/7 with AI.",
    url: "https://madrock.fit/ai-coach",
  },
};

export default function AICoachLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
