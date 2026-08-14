import type { Metadata } from "next";
import { ContactClientContent } from "./ContactClientContent";

export const metadata: Metadata = {
  title: "Kontak – Hubungi Coach Ahmad Hudzaifah",
  description:
    "Hubungi Training by MAD untuk pertanyaan seputar program coaching, kemitraan perusahaan, atau konsultasi awal. Kami merespons dalam 24 jam kerja.",
  keywords: [
    "Kontak Coach Ahmad Hudzaifah",
    "Daftar Program Latihan",
    "Konsultasi Fitness Indonesia",
    "MADRock Contact",
  ],
  openGraph: {
    title: "Kontak | Training by MAD",
    description: "Hubungi Coach Ahmad Hudzaifah untuk pertanyaan seputar program coaching dan kemitraan.",
    url: "https://mad-rock.vercel.app/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClientContent />;
}
