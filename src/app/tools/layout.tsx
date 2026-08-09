import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "9 Free Scientific Fitness Calculators: TDEE, Protein, 1RM, Body Fat | MADRock",
  description:
    "Instant accurate formulas to calculate TDEE maintenance calories, daily protein targets, macro splits, 1RM lift estimations, US Navy body fat %, and Zone 2 heart rate ranges.",
  keywords: [
    "TDEE Calculator",
    "Protein Intake Calculator",
    "Macro Split Calculator",
    "1RM Epley Calculator",
    "US Navy Body Fat Calculator",
    "Heart Rate Zone Calculator",
  ],
  openGraph: {
    title: "9 Free Scientific Fitness Calculators | MADRock",
    description: "Suite of 9 precision formula tools built to optimize your diet, macros, body fat, and 1RM.",
    url: "https://madrock.fit/tools",
  },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
