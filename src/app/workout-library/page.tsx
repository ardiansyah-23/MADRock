import type { Metadata } from "next";
import { WorkoutLibraryClientContent } from "./WorkoutLibraryClientContent";

export const metadata: Metadata = {
  title: "Perpustakaan Latihan – Teknik Gerakan Gym yang Benar",
  description:
    "Pelajari teknik gerakan gym yang benar: Barbell Bench Press, Squat, Deadlift, Lat Pulldown, dan lebih dari 100 gerakan lainnya dengan panduan biomekanika dari Coach Ahmad Hudzaifah.",
  keywords: [
    "Cara Benar Bench Press",
    "Teknik Squat yang Benar",
    "Cara Deadlift Indonesia",
    "Perpustakaan Latihan Gym",
    "Gerakan Gym Benar",
    "Workout Library Indonesia",
    "Biomekanika Latihan",
  ],
  openGraph: {
    title: "Perpustakaan Latihan – Teknik Gerakan Gym yang Benar | Training by MAD",
    description:
      "Panduan teknik 100+ gerakan gym dengan biomekanika yang benar, kesalahan umum, dan petunjuk eksekusi dari Coach Ahmad Hudzaifah.",
    url: "https://mad-rock.vercel.app/workout-library",
    type: "website",
  },
};

export default function WorkoutLibraryPage() {
  return <WorkoutLibraryClientContent />;
}
