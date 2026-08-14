"use client";

import { TrendingUp, ArrowUp } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { useLanguage } from "@/components/common/LanguageProvider";

export function AthletesAchievements() {
  const { lang } = useLanguage();

  const athletes = [
    {
      category: lang === "id" ? "Atlet Putra" : "Male Athletes",
      before: { label: lang === "id" ? "Sebelum" : "Before", range: "5.98 – 10.00s" },
      after: { label: lang === "id" ? "Setelah" : "After", range: "5.23 – 5.57s" },
      improvement: "~0.75s",
      color: "text-blue-400",
      barBefore: 75,
      barAfter: 55,
    },
    {
      category: lang === "id" ? "Atlet Putri" : "Female Athletes",
      before: { label: lang === "id" ? "Sebelum" : "Before", range: "9.51 – 11.35s" },
      after: { label: lang === "id" ? "Setelah" : "After", range: "8.25 – 9.15s" },
      improvement: "~1.3s",
      color: "text-rose-400",
      barBefore: 88,
      barAfter: 68,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={lang === "id" ? "HASIL PENGEMBANGAN ATLET" : "ATHLETE DEVELOPMENT RESULTS"}
          subtitle={
            lang === "id"
              ? "Data performa 7 atlet speed climbing yang dikembangkan selama 2 tahun bersama Ahmad Hudzaifah."
              : "Performance data of 7 speed climbing athletes developed over 2 years with Ahmad Hudzaifah."
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Key metrics */}
          <ScrollReveal>
            <div className="space-y-4 lg:col-span-1">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm text-center">
                <div className="text-5xl font-black font-spartan text-emerald-600">
                  <AnimatedCounter end={7} suffix="+" decimals={0} />
                </div>
                <p className="text-slate-600 font-extrabold text-xs font-mono uppercase tracking-wider mt-2">
                  {lang === "id" ? "Atlet Speed Climbing" : "Speed Climbing Athletes"}
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm text-center">
                <div className="text-5xl font-black font-spartan text-slate-900">
                  <AnimatedCounter end={2} suffix={lang === "id" ? " Thn" : " Yrs"} decimals={0} />
                </div>
                <p className="text-slate-600 font-extrabold text-xs font-mono uppercase tracking-wider mt-2">
                  {lang === "id" ? "Durasi Program" : "Program Duration"}
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 shadow-sm text-center">
                <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-slate-900 font-extrabold text-sm">
                  {lang === "id" ? "Peningkatan signifikan waktu tempuh speed wall 10m" : "Significant improvement in 10m speed wall time"}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Performance comparison bars */}
          <div className="lg:col-span-2 space-y-6">
            {athletes.map((athlete, idx) => (
              <ScrollReveal key={idx} delay={0.15 * idx}>
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-slate-900 font-black font-spartan uppercase text-lg">{athlete.category}</h4>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300">
                      <ArrowUp className="w-3 h-3 text-emerald-700" />
                      <span className="text-emerald-700 text-xs font-mono font-extrabold">{athlete.improvement} faster</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Before */}
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-slate-500 font-bold text-xs font-mono uppercase">{athlete.before.label}</span>
                        <span className="text-slate-500 font-extrabold text-xs font-mono">{athlete.before.range}</span>
                      </div>
                      <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-slate-400"
                          style={{ width: `${athlete.barBefore}%` }}
                        />
                      </div>
                    </div>

                    {/* After */}
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-emerald-600 text-xs font-mono uppercase font-extrabold">{athlete.after.label}</span>
                        <span className="text-emerald-600 text-xs font-mono font-extrabold">{athlete.after.range}</span>
                      </div>
                      <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-emerald-500 transition-all duration-1000"
                          style={{ width: `${athlete.barAfter}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Notable achievement */}
            <ScrollReveal delay={0.3}>
              <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 shadow-sm">
                <p className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-extrabold mb-2">
                  {lang === "id" ? "PENCAPAIAN TERBAIK" : "TOP ACHIEVEMENT"}
                </p>
                <h4 className="text-slate-900 font-black font-spartan uppercase text-lg">
                  Arya Arsyendi Putra
                </h4>
                <p className="text-slate-700 font-medium text-sm mt-1">
                  {lang === "id"
                    ? "Medali Emas Speed Climbing di Pekan Olahraga Nasional (PON) 2024"
                    : "Gold Medal Speed Climbing at National Sports Week (PON) 2024"}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
