"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Quote, Trophy, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageProvider";

export function TransformationsClientContent() {
  const { lang, t } = useLanguage();

  const transformations = [
    {
      name: "Alex Rivera",
      age: 32,
      duration: lang === "id" ? "16 Minggu" : "16 Weeks",
      lost: lang === "id" ? "-12.5 kg Lemak" : "28 lbs Fat",
      gained: lang === "id" ? "+2.7 kg Otot" : "+6 lbs Muscle",
      story:
        lang === "id"
          ? "Saya mencoba aplikasi gym generik selama 3 tahun tanpa progres. Perhitungan makro kustom dan struktur angkatan compound MADRock mengubah fisik saya secara total."
          : "I tried generic gym apps for 3 years with zero progress. MADRock's custom macro breakdown and heavy compound structure transformed my body completely.",
      beforeImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Marcus Vance",
      age: 28,
      duration: lang === "id" ? "12 Minggu" : "12 Weeks",
      lost: lang === "id" ? "-8 kg Lemak" : "18 lbs Fat",
      gained: lang === "id" ? "+3.6 kg Otot" : "+8 lbs Muscle",
      story:
        lang === "id"
          ? "Coach Ahmad membenahi cidera bahu saya, mengatur makro defisit, dan membantu saya mencetak rekor Squat 180kg dengan kadar lemak di bawah 10%."
          : "Coach Ahmad fixed my shoulder impingement, dialed in my cutting macros, and helped me hit a 405lb squat while staying under 10% body fat.",
      beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Daniel Kim",
      age: 35,
      duration: lang === "id" ? "24 Minggu" : "24 Weeks",
      lost: lang === "id" ? "-19 kg Lemak" : "42 lbs Fat",
      gained: lang === "id" ? "+5.4 kg Otot" : "+12 lbs Muscle",
      story:
        lang === "id"
          ? "Sebagai lead engineer yang bekerja 60 jam seminggu, saya pikir saya tidak punya waktu. Latihan terstruktur 45 menit masuk ke jadwal saya dengan sangat pas."
          : "As a tech lead working 60 hours a week, I thought I didn't have time. The 45-minute optimized workouts fit my calendar effortlessly.",
      beforeImg: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=600&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t("trans_header_badge")}
          title={t("trans_header_title")}
          subtitle={t("trans_header_subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {transformations.map((item, idx) => (
            <ScrollReveal key={idx} delay={0.15 * idx}>
              <div className="rounded-3xl bg-mad-surface border border-slate-900/10 p-6 flex flex-col justify-between space-y-6 hover:border-mad-lime/40 transition-all duration-300">
                {/* Images Comparison */}
                <div className="grid grid-cols-2 gap-3 relative rounded-2xl overflow-hidden border border-slate-900/10 bg-mad-bg p-2">
                  <div className="relative h-56 rounded-xl overflow-hidden">
                    <Image
                      src={item.beforeImg}
                      alt={`${item.name} Before`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-mad-bg/80 text-[10px] font-mono text-mad-gray uppercase font-bold">
                      {lang === "id" ? "SEBELUM" : "BEFORE"}
                    </div>
                  </div>

                  <div className="relative h-56 rounded-xl overflow-hidden">
                    <Image
                      src={item.afterImg}
                      alt={`${item.name} After`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-mad-lime text-mad-bg text-[10px] font-mono uppercase font-black">
                      {lang === "id" ? "SESUDAH" : "AFTER"}
                    </div>
                  </div>
                </div>

                {/* Stats Pill */}
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-3 rounded-xl bg-mad-bg border border-slate-900/5">
                    <span className="text-[10px] font-mono text-mad-lime uppercase block">
                      {lang === "id" ? "Penurunan Lemak" : "Fat Loss"}
                    </span>
                    <span className="text-slate-900 font-extrabold text-sm font-spartan">{item.lost}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-mad-bg border border-slate-900/5">
                    <span className="text-[10px] font-mono text-mad-lime uppercase block">
                      {lang === "id" ? "Pertumbuhan Otot" : "Muscle Gain"}
                    </span>
                    <span className="text-slate-900 font-extrabold text-sm font-spartan">{item.gained}</span>
                  </div>
                </div>

                {/* Story */}
                <div className="space-y-3">
                  <Quote className="w-6 h-6 text-mad-lime opacity-40" />
                  <p className="text-xs text-mad-gray leading-relaxed italic">
                    &ldquo;{item.story}&rdquo;
                  </p>
                </div>

                {/* Client Info */}
                <div className="pt-4 border-t border-slate-900/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-slate-900 font-bold text-base font-spartan uppercase">
                      {item.name}, {item.age} {lang === "id" ? "Tahun" : "Yrs"}
                    </h4>
                    <span className="text-[11px] text-mad-gray font-mono">
                      {lang === "id" ? "Durasi Program:" : "Program Duration:"} {item.duration}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-mad-lime/10 border border-mad-lime/30 flex items-center justify-center text-mad-lime">
                    <Trophy className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Box */}
        <div className="p-10 rounded-3xl bg-mad-surface border border-mad-lime/30 text-center space-y-6 max-w-3xl mx-auto">
          <h3 className="text-3xl font-black font-spartan uppercase text-slate-900">
            {lang === "id" ? "SIAP MENJADI KISAH SUKSES BERIKUTNYA?" : "READY TO BE OUR NEXT SUCCESS STORY?"}
          </h3>
          <p className="text-sm text-mad-gray max-w-lg mx-auto">
            {lang === "id"
              ? "Jadwalkan konsultasi Anda sekarang dan dapatkan program periodisasi kustom dari Head Coach Ahmad."
              : "Book your consultation now and get your custom periodized program built by Head Coach Ahmad."}
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider hover:bg-mad-lime-hover"
          >
            <span>{lang === "id" ? "MULAI TRANSFORMASI ANDA" : "START YOUR TRANSFORMATION"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
