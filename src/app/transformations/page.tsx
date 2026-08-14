import type { Metadata } from "next";
import { TransformationsClientContent } from "./TransformationsClientContent";

export const metadata: Metadata = {
  title: "Hasil Transformasi Atlet – Bukti Nyata Program MADRock",
  description:
    "Lihat hasil transformasi nyata atlet MADRock: penurunan lemak, peningkatan massa otot, dan peningkatan performa dalam 12-24 minggu program coaching Coach Ahmad Hudzaifah.",
  keywords: [
    "Hasil Coaching Fitness Indonesia",
    "Transformasi Tubuh Indonesia",
    "Sebelum Sesudah Gym",
    "Bukti Program Latihan",
    "Testimoni Coach Ahmad Hudzaifah",
    "Fat Loss Sukses",
  ],
  openGraph: {
    title: "Hasil Transformasi Atlet | Training by MAD",
    description:
      "Lihat hasil nyata atlet MADRock: penurunan lemak dan peningkatan massa otot dalam 12-24 minggu coaching.",
    url: "https://mad-rock.vercel.app/transformations",
    type: "website",
  },
};

export default function TransformationsPage() {
  return <TransformationsClientContent />;
}
