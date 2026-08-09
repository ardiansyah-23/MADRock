"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { useLanguage } from "@/components/common/LanguageProvider";

export function CoachesSection() {
  const { lang } = useLanguage();

  const coaches = [
    {
      name: "Ahmad Hudzaifah",
      role: lang === "id" ? "Head Coach & Pendiri" : "Head Coach & Founder",
      specialization: lang === "id" ? "Biomekanika Hipertrofi & Kekuatan" : "Hypertrophy & Strength Biomechanics",
      experience: lang === "id" ? "8+ Tahun" : "8+ Years",
      rating: "5.0",
      reviews: 240,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Elena Vance",
      role: lang === "id" ? "Spesialis Nutrisi & Fat Loss" : "Nutrition & Fat Loss Specialist",
      specialization: lang === "id" ? "Rekomposisi Metabolik & Makro" : "Metabolic Recomposition & Macros",
      experience: lang === "id" ? "6+ Tahun" : "6+ Years",
      rating: "4.9",
      reviews: 185,
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "David Vance",
      role: lang === "id" ? "Pelatih Mobilitas & Powerlifting" : "Mobility & Powerlifting Coach",
      specialization: lang === "id" ? "Kekuatan Compound & Rehabilitasi" : "Compound Power & Injury Rehab",
      experience: lang === "id" ? "7+ Tahun" : "7+ Years",
      rating: "4.9",
      reviews: 160,
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-mad-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={lang === "id" ? "TIM KEPELATIHAN ELIT" : "ELITE COACHING TEAM"}
          title={lang === "id" ? "BIMBINGAN DARI AHLI TERBAIK" : "LEARN FROM THE BEST"}
          subtitle={
            lang === "id"
              ? "Spesialis tersertifikasi yang didedikasikan untuk membangun bentuk fisik Anda dengan sains dan disiplin."
              : "Certified specialists dedicated to building your physique with science and discipline."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coaches.map((coach, idx) => (
            <ScrollReveal key={idx} delay={0.15 * idx}>
              <div className="group rounded-3xl bg-mad-surface border border-white/10 overflow-hidden hover:border-mad-lime/50 transition-all duration-300">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-slate-900 text-white border border-slate-700 shadow-xl flex items-center gap-1.5 text-xs font-bold z-10">
                    <Star className="w-3.5 h-3.5 fill-lime-400 text-lime-400" />
                    <span className="keep-white text-white">{coach.rating} ({coach.reviews})</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-black font-spartan text-white uppercase">
                      {coach.name}
                    </h3>
                    <p className="text-xs text-mad-lime font-mono uppercase tracking-wider mt-0.5">
                      {coach.role}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-mad-gray">
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span>{lang === "id" ? "Spesialisasi:" : "Specialization:"}</span>
                      <span className="text-white font-medium">{coach.specialization}</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span>{lang === "id" ? "Pengalaman:" : "Experience:"}</span>
                      <span className="text-white font-medium">{coach.experience}</span>
                    </div>
                  </div>

                  <Link
                    href="/booking"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-mad-lime/10 text-mad-lime hover:bg-mad-lime hover:text-mad-bg font-extrabold text-xs uppercase tracking-wider border border-mad-lime/30 transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{lang === "id" ? "BOOKING SESI 1-ON-1" : "BOOK 1-ON-1 SESSION"}</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
