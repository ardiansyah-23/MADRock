"use client";

import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useLanguage } from "@/components/common/LanguageProvider";
import { Trophy, Medal, Users, Target } from "lucide-react";

export function CareerTimeline() {
  const { lang } = useLanguage();

  const timeline = [
    {
      period: "2019 – 2022",
      org: lang === "id" ? "Dispora DKI Jakarta" : "Dispora DKI Jakarta",
      role: lang === "id" ? "Head Coach Panjat Tebing Mahasiswa" : "Student Climbing Head Coach",
      achievement: lang === "id" ? "Medali Emas Kompetisi Nasional 2021" : "National Gold Medal 2021",
      icon: Trophy,
      color: "text-amber-400",
      bg: "bg-amber-400/10 border-amber-400/30",
    },
    {
      period: "Jul 2022 – Des 2024",
      org: "KONI DKI Jakarta",
      role: lang === "id" ? "Head Sport Climbing Coach — PON 2024" : "Head Sport Climbing Coach — PON 2024",
      achievement: lang === "id" ? "Arya Arsyendi Putra: Medali Emas Speed PON 2024 · 15/16 Kuota Kualifikasi" : "Arya Arsyendi Putra: Speed Gold PON 2024 · 15/16 Qualification Quota",
      icon: Medal,
      color: "text-mad-lime",
      bg: "bg-mad-lime/10 border-mad-lime/30",
    },
    {
      period: "Nov 2023 – Mei 2024",
      org: "ABB Brotherhood",
      role: lang === "id" ? "S&C Coach Tim Tinju Profesional" : "S&C Coach Professional Boxing Team",
      achievement: lang === "id" ? "Ekspansi kepelatihan ke cabang tinju" : "Coaching expansion to boxing",
      icon: Target,
      color: "text-blue-400",
      bg: "bg-blue-400/10 border-blue-400/30",
    },
    {
      period: "Okt 2024 – Sekarang",
      org: "Training by MAD",
      role: lang === "id" ? "Founder & S&C Coach" : "Founder & S&C Coach",
      achievement: lang === "id" ? "10.000+ followers edukasi Instagram · E-book & Webinar" : "10K+ Instagram education followers · E-book & Webinar",
      icon: Users,
      color: "text-rose-400",
      bg: "bg-rose-400/10 border-rose-400/30",
    },
    {
      period: "Jan – Des 2025",
      org: lang === "id" ? "Dispora DKI Jakarta" : "Dispora DKI Jakarta",
      role: lang === "id" ? "Head Sport Climbing Coach — POMNAS 2025" : "Head Sport Climbing Coach — POMNAS 2025",
      achievement: lang === "id" ? "Medali Perunggu POMNAS 2025" : "Bronze Medal POMNAS 2025",
      icon: Medal,
      color: "text-amber-400",
      bg: "bg-amber-400/10 border-amber-400/30",
    },
    {
      period: "Apr 2026 – Sekarang",
      org: lang === "id" ? "Otista Climbing Lab · KONI Depok" : "Otista Climbing Lab · KONI Depok",
      role: lang === "id" ? "Sport Climbing Coach · S&C Coach Multi-Cabang" : "Sport Climbing Coach · Multi-Sport S&C Coach",
      achievement: lang === "id" ? "Medali Emas Kompetisi Antar Sekolah Jakarta Timur · Surfing, Boxing, Archery Depok" : "Gold Medal East Jakarta Inter-School · Surfing, Boxing, Archery Depok",
      icon: Trophy,
      color: "text-mad-lime",
      bg: "bg-mad-lime/10 border-mad-lime/30",
    },
  ];

  return (
    <section className="py-24 bg-mad-surface/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={lang === "id" ? "PERJALANAN KARIER" : "CAREER TIMELINE"}
          subtitle={
            lang === "id"
              ? "Lebih dari 7 tahun membangun atlet di berbagai level dan cabang olahraga Indonesia."
              : "Over 7 years building athletes across levels and disciplines in Indonesian sports."
          }
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx}>
                <div className="relative flex flex-col md:flex-row gap-4 md:gap-8 pl-0 md:pl-20">
                  {/* Icon circle on the line */}
                  <div className={`hidden md:flex absolute left-4 top-6 w-9 h-9 rounded-full border ${item.bg} items-center justify-center shrink-0 z-10`}>
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>

                  <div className="flex-1 p-5 rounded-2xl glass-card border border-white/10 hover:border-white/20 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <span className="text-xs font-mono text-mad-gray uppercase tracking-wider">{item.period}</span>
                        <h4 className="text-white font-bold text-base font-spartan uppercase mt-0.5">{item.org}</h4>
                        <p className={`text-xs font-mono ${item.color} mt-0.5`}>{item.role}</p>
                      </div>
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${item.bg} shrink-0 self-start`}>
                        <item.icon className={`w-3 h-3 ${item.color}`} />
                        <span className={`text-[10px] font-bold uppercase ${item.color}`}>
                          {idx === timeline.length - 1 || idx === 3 ? (lang === "id" ? "Aktif" : "Active") : (lang === "id" ? "Selesai" : "Completed")}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-mad-gray leading-relaxed border-t border-white/5 pt-2 mt-2">
                      {item.achievement}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
