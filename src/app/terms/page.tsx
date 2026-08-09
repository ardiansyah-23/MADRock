"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ArrowLeft, Scale, CheckCircle2, AlertTriangle, HelpCircle } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageProvider";

export default function TermsPage() {
  const { lang } = useLanguage();

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-mad-gray hover:text-mad-lime uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === "id" ? "Kembali ke Beranda" : "Back to Home"}</span>
        </Link>

        <SectionHeader
          badge={lang === "id" ? "SYARAT & KETENTUAN" : "TERMS OF SERVICE"}
          title="MADROCK TERMS & CONDITIONS"
          subtitle={
            lang === "id"
              ? "Ketentuan layanan penggunaan platform kepelatihan fitness dan program bimbingan MADRock."
              : "Terms and conditions governing the use of MADRock fitness coaching platform and programs."
          }
        />

        <div className="rounded-3xl bg-mad-surface border border-white/10 p-8 sm:p-10 space-y-8 text-mad-gray leading-relaxed text-sm">
          <div className="space-y-3 border-b border-white/10 pb-6">
            <h3 className="text-xl font-bold font-spartan text-white uppercase flex items-center gap-2">
              <Scale className="w-5 h-5 text-mad-lime" />
              <span>{lang === "id" ? "1. Persetujuan & Penerimaan Syarat" : "1. Agreement & Acceptance"}</span>
            </h3>
            <p>
              {lang === "id"
                ? "Dengan mengakes platform MADRock, membeli program kepelatihan, atau menggunakan alat interaktif kami, Anda setuju untuk mematuhi syarat dan ketentuan ini. Jika Anda tidak menyetujui ketentuan ini, mohon untuk tidak melanjutkan penggunaan platform."
                : "By accessing MADRock platform, purchasing coaching programs, or using our interactive tools, you agree to comply with these terms. If you do not agree to these terms, please discontinue platform access."}
            </p>
          </div>

          <div className="space-y-3 border-b border-white/10 pb-6">
            <h3 className="text-xl font-bold font-spartan text-white uppercase flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-mad-lime" />
              <span>{lang === "id" ? "2. Disclaimer Medis & Kesehatan" : "2. Medical & Health Disclaimer"}</span>
            </h3>
            <p>
              {lang === "id"
                ? "Protokol latihan dan rekomendasi nutrisi MADRock dirancang untuk orang dewasa sehat. Konsultasikan dengan dokter atau profesional medis sebelum memulai program latihan beban intensitas tinggi atau perubahan pola makan. Anda bertanggung jawab penuh atas kondisi fisik Anda saat berlatih."
                : "MADRock workout protocols and nutrition recommendations are designed for healthy adults. Consult a licensed physician prior to beginning any high-intensity weight training program or dietary modification. You assume full risk for your physical performance during workouts."}
            </p>
          </div>

          <div className="space-y-3 border-b border-white/10 pb-6">
            <h3 className="text-xl font-bold font-spartan text-white uppercase flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-mad-lime" />
              <span>{lang === "id" ? "3. Jaminan 14-Hari Uang Kembali" : "3. 14-Day Money-Back Guarantee"}</span>
            </h3>
            <p>
              {lang === "id"
                ? "Kami memberikan jaminan 100% pengembalian uang dalam 14 hari pertama untuk seluruh paket keanggotaan kepelatihan. Jika Anda tidak merasa puas dengan protokol yang diberikan dalam 14 hari pertama, hubungi support@madrock.fit untuk mendapatkan pengembalian uang penuh."
                : "We offer a 100% full 14-day money-back guarantee for all coaching memberships. If you are not satisfied with your protocol within the first 14 days, contact support@madrock.fit to receive an immediate refund."}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold font-spartan text-white uppercase flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-mad-lime" />
              <span>{lang === "id" ? "4. Hak Kekayaan Intelektual" : "4. Intellectual Property Rights"}</span>
            </h3>
            <p>
              {lang === "id"
                ? "Seluruh program periodisasi, panduan biomekanika, dan algoritma AI di MADRock adalah hak kekayaan intelektual yang dilindungi. Pendistribusian ulang atau penjualan kembali panduan program MADRock tanpa izin adalah dilarang keras."
                : "All periodization splits, biomechanics guides, and proprietary AI algorithms on MADRock are protected intellectual property. Redistribution or unauthorized reselling of MADRock program guides is strictly prohibited."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
