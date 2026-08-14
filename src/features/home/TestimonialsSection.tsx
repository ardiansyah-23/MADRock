"use client";

import Image from "next/image";
import { Star, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { useLanguage } from "@/components/common/LanguageProvider";

export function TestimonialsSection() {
  const { lang, t } = useLanguage();

  const reviews = [
    {
      name: "Brandon Hayes",
      role: lang === "id" ? "CEO & Eksekutif" : "CEO & Executive",
      rating: 5,
      date: lang === "id" ? "Ulasan Google Terverifikasi" : "Verified Google Review",
      review:
        lang === "id"
          ? "MADRock adalah satu-satunya platform kepelatihan yang memahami kesibukan saya. Turun 10kg lemak dalam 12 minggu sambil menaikkan angkatan deadlift 27kg. Sepadan dengan setiap rupiah."
          : "MADRock is the only coaching platform that understands busy schedules. Down 22lbs of fat in 12 weeks while increasing my deadlift by 60lbs. Worth every single penny.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Sarah Jenkins",
      role: lang === "id" ? "Atlet Fitnes" : "Crossfit Athlete",
      rating: 5,
      date: lang === "id" ? "Ulasan Google Terverifikasi" : "Verified Google Review",
      review:
        lang === "id"
          ? "AI Meal Planner dan panduan makro kustom mengubah total cara saya mengisi bahan bakar latihan. Pemulihan saya meningkat pesat dan bentuk fisik saya terlihat luar biasa."
          : "The AI Meal Planner and custom macro guidance completely changed how I fuel my sessions. My recovery has skyrocketed and my body composition looks insane.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Dr. Michael Chen",
      role: lang === "id" ? "Dokter Spesialis Ortopedi" : "Orthopedic Surgeon",
      rating: 5,
      date: lang === "id" ? "Klien Terverifikasi" : "Verified Client",
      review:
        lang === "id"
          ? "Sebagai seorang dokter, saya mengevaluasi program melalui kacamata berbasis bukti sains. Periodisasi dan panduan biomekanika Coach Ahmad berada di level elit."
          : "As a physician, I evaluate programs through an evidence-based lens. Coach Ahmad's periodization and biomechanics instruction are elite level.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-mad-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={lang === "id" ? "APA KATA KLIEN KAMI" : "WHAT OUR CLIENTS SAY"}
          subtitle={
            lang === "id"
              ? "Ulasan nyata dari member nyata yang mengubah hidup dan fisik mereka bersama MADRock."
              : "Real reviews from real members who transformed their lives with MADRock."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <ScrollReveal key={idx} delay={0.15 * idx}>
              <div className="p-8 rounded-3xl bg-mad-bg border border-slate-900/10 flex flex-col justify-between h-full hover:border-slate-400 transition-colors">
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-mad-lime">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-mad-lime" />
                    ))}
                  </div>

                  <p className="text-sm text-mad-gray leading-relaxed italic">
                    "{item.review}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-900/10 flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-mad-lime/40">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-base font-spartan uppercase">
                      {item.name}
                    </h4>
                    <span className="text-xs text-mad-gray block">{item.role}</span>
                    <span className="text-[10px] text-mad-lime font-mono flex items-center gap-1 mt-0.5">
                      <CheckCircle className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
