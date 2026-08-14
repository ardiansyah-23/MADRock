import type { Metadata } from "next";
import { AICoachClientContent } from "./AICoachClientContent";

export const metadata: Metadata = {
  title: "AI Coach – Generator Latihan & Nutrisi Cerdas MADRock",
  description:
    "Buat split latihan periodisasi kustom, protokol nutrisi makro presisi, atau tanya jawab 24/7 dengan AI Coach MADRock. Teknologi AI untuk performa atletik optimal.",
  keywords: [
    "AI Fitness Coach Indonesia",
    "Generator Latihan AI",
    "AI Meal Planner Indonesia",
    "Chat Fitness AI",
    "Program Latihan Otomatis",
    "MADRock AI Coach",
  ],
  openGraph: {
    title: "AI Coach – Generator Latihan & Nutrisi | Training by MAD",
    description:
      "Generator split latihan dan meal plan berbasis AI. Tanya jawab 24/7 tentang fitness, nutrisi, dan suplemen.",
    url: "https://mad-rock.vercel.app/ai-coach",
    type: "website",
  },
};

export default function AICoachPage() {
  return <AICoachClientContent />;
}
