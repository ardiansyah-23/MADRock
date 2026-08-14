import type { Metadata } from "next";
import { ToolsClientContent } from "./ToolsClientContent";

export const metadata: Metadata = {
  title: "Kalkulator Fitness – TDEE, BMR, Makro, 1RM & BMI Gratis",
  description:
    "Hitung TDEE, BMR, target protein, pembagian makro, asupan air, estimasi 1RM, berat ideal, kadar lemak, zona detak jantung, dan BMI secara gratis. Kalkulator fitness berbasis sains oleh MADRock.",
  keywords: [
    "Kalkulator TDEE Indonesia",
    "Kalkulator BMR",
    "Kalkulator Makro Gratis",
    "Kalkulator 1RM",
    "Kalkulator BMI Indonesia",
    "Kadar Lemak Tubuh",
    "Target Protein Harian",
    "Fitness Calculator Indonesia",
  ],
  openGraph: {
    title: "Kalkulator Fitness Gratis – TDEE, Makro, 1RM & BMI | Training by MAD",
    description:
      "9 kalkulator fitness gratis berbasis sains: TDEE, BMR, target protein, makro, air, 1RM, berat ideal, kadar lemak, dan BMI.",
    url: "https://mad-rock.vercel.app/tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalkulator Fitness Gratis | Training by MAD",
    description: "TDEE, Makro, 1RM, BMI – 9 kalkulator fitness gratis berbasis sains.",
  },
};

export default function ToolsPage() {
  return <ToolsClientContent />;
}
