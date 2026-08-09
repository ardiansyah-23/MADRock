import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HD Exercise Library & Muscle Biomechanics Database | MADRock",
  description:
    "Anatomically-guided weightlifting technique guides. Learn proper execution cues, target muscle activation, and common form mistakes for compound movements.",
  keywords: [
    "Exercise Library",
    "Weightlifting Biomechanics",
    "Bench Press Form",
    "Squat Mechanics",
    "Lat Pulldown Execution",
    "Target Muscle Anatomy",
  ],
  openGraph: {
    title: "HD Exercise Library & Muscle Biomechanics Database | MADRock",
    description: "Anatomically-guided weightlifting technique guides to maximize mechanical tension stimulation.",
    url: "https://madrock.fit/workout-library",
  },
};

export default function WorkoutLibraryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
