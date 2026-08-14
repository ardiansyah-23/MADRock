import type { Metadata } from "next";
import { ProgramsClientContent } from "./ProgramsClientContent";

export const metadata: Metadata = {
  title: "Program Latihan – Fat Loss, Hypertrophy & Powerbuilding",
  description:
    "Pilih program latihan periodisasi kustom: Fat Loss Masterclass, Hypertrophy Muscle Build, Body Recomposition, Powerbuilding, Home Workout, dan 1-on-1 Elite Coaching oleh Coach Ahmad Hudzaifah.",
  keywords: [
    "Program Latihan Indonesia",
    "Fat Loss Program",
    "Hypertrophy Program",
    "Body Recomposition",
    "Powerbuilding Indonesia",
    "Home Workout Program",
    "1-on-1 Coaching Ahmad Hudzaifah",
    "Program Gym Indonesia",
  ],
  openGraph: {
    title: "Program Latihan – Fat Loss, Hypertrophy & Powerbuilding | Training by MAD",
    description:
      "Pilih program latihan periodisasi kustom dari Coach Ahmad Hudzaifah. Fat Loss, Hypertrophy, Rekomposisi, hingga Elite 1-on-1 Coaching.",
    url: "https://mad-rock.vercel.app/programs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Program Latihan | Training by MAD",
    description: "Program latihan periodisasi berbasis sains oleh Coach Ahmad Hudzaifah.",
  },
};

export default function ProgramsPage() {
  return <ProgramsClientContent />;
}
