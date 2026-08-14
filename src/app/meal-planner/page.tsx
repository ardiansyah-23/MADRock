import type { Metadata } from "next";
import { MealPlannerClientContent } from "./MealPlannerClientContent";

export const metadata: Metadata = {
  title: "Meal Planner – Rencana Makan Tinggi Protein untuk Atlet",
  description:
    "Temukan resep dan rencana makan tinggi protein untuk fat loss, bulking, dan rekomposisi tubuh. Makanan sehat atlet dengan rincian makro kalori dari MADRock.",
  keywords: [
    "Meal Planner Atlet Indonesia",
    "Rencana Makan Tinggi Protein",
    "Makanan Fat Loss Indonesia",
    "Menu Diet Gym Indonesia",
    "AI Meal Planner",
    "Resep Sehat Atlet",
    "Meal Prep Fitness",
  ],
  openGraph: {
    title: "Meal Planner – Rencana Makan Atlet | Training by MAD",
    description:
      "Rencana makan tinggi protein dengan rincian kalori & makro untuk fat loss, bulking, dan rekomposisi tubuh.",
    url: "https://mad-rock.vercel.app/meal-planner",
    type: "website",
  },
};

export default function MealPlannerPage() {
  return <MealPlannerClientContent />;
}
