import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Meal Planner & Precision Macro Recipe Generator | MADRock",
  description:
    "Design high-protein meal plans tailored to your exact caloric target, protein intake, and dietary approach for cutting, bulking, or body recomposition.",
  keywords: [
    "AI Meal Planner",
    "High Protein Recipes",
    "Macro Calculator Meal Plan",
    "Cutting Diet Protocol",
    "Bulking Meal Prep",
    "Body Recomposition Diet",
  ],
  openGraph: {
    title: "AI Meal Planner & Precision Macro Recipe Generator | MADRock",
    description: "Calculate exact caloric targets and generate calculated high-protein recipes.",
    url: "https://mad-rock.vercel.app/meal-planner",
  },
};

export default function MealPlannerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
