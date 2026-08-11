"use client";

import { Mountain } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageProvider";

export function TrustedBrands() {
  const { lang } = useLanguage();

  const institutions = [
    { name: "KONI DKI Jakarta", category: lang === "id" ? "Induk Olahraga" : "Sports Committee" },
    { name: "Dispora DKI Jakarta", category: lang === "id" ? "Pemerintah" : "Government" },
    { name: "FPTI", category: lang === "id" ? "Federasi Panjat Tebing" : "Climbing Federation" },
    { name: "KONI Kota Depok", category: lang === "id" ? "Induk Olahraga" : "Sports Committee" },
    { name: "Nusa Climb Jakarta", category: lang === "id" ? "Climbing Gym" : "Climbing Gym" },
    { name: "Otista Climbing Lab", category: lang === "id" ? "Climbing Gym" : "Climbing Gym" },
    { name: "ABB Brotherhood", category: lang === "id" ? "Tim Tinju" : "Boxing Team" },
    { name: "Training by MAD", category: lang === "id" ? "Platform Edukasi" : "Education Platform" },
  ];

  return (
    <section className="py-12 bg-mad-surface/40 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs uppercase font-mono tracking-widest text-mad-gray font-bold">
          {lang === "id"
            ? "INSTITUSI & ORGANISASI TEMPAT BERKARYA"
            : "INSTITUTIONS & ORGANIZATIONS"}
        </p>
      </div>

      {/* Infinite Scroll */}
      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
          {institutions.concat(institutions).map((inst, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl glass-card border border-white/5 shrink-0 hover:border-mad-lime/30 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-mad-lime/10 flex items-center justify-center text-mad-lime group-hover:bg-mad-lime group-hover:text-mad-bg transition-colors">
                <Mountain className="w-4 h-4" />
              </div>
              <div>
                <span className="font-spartan font-black text-base tracking-wider text-white uppercase block">
                  {inst.name}
                </span>
                <span className="text-[10px] text-mad-gray uppercase tracking-widest block font-mono">
                  {inst.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
