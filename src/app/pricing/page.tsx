import type { Metadata } from "next";
import { PricingClientContent } from "./PricingClientContent";

export const metadata: Metadata = {
  title: "Harga & Paket Coaching – Starter, Professional 1-on-1 & Elite",
  description:
    "Lihat paket harga coaching MADRock: Starter Protocol (Rp 1.2jt/bln), Professional 1-on-1 (Rp 2.9jt/bln), dan Elite Performance (Rp 5.2jt/bln). Garansi kepuasan 30 hari.",
  keywords: [
    "Harga Personal Trainer Online Indonesia",
    "Biaya Coaching Ahmad Hudzaifah",
    "Paket Fitness Indonesia",
    "Personal Trainer Murah Indonesia",
    "Online Coaching Harga",
    "MADRock Pricing",
  ],
  openGraph: {
    title: "Harga & Paket Coaching | Training by MAD",
    description:
      "Pilih paket coaching yang sesuai budget: Starter, Professional 1-on-1, dan Elite Performance. Garansi kepuasan 30 hari.",
    url: "https://mad-rock.vercel.app/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harga Coaching | Training by MAD",
    description: "Paket coaching fitness berbasis sains mulai Rp 1.2jt/bulan.",
  },
};

export default function PricingPage() {
  return <PricingClientContent />;
}
