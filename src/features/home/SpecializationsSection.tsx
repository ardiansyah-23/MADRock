"use client";

import { Zap, Weight, Mountain, BookOpen } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { useLanguage } from "@/components/common/LanguageProvider";

export function SpecializationsSection() {
  const { lang } = useLanguage();

  const specs = [
    {
      icon: Zap,
      title: lang === "id" ? "Speed Climbing" : "Speed Climbing",
      description:
        lang === "id"
          ? "Spesialisasi utama sejak 2022. Pengembangan program speed climbing mencakup periodisasi latihan, pengembangan power dan kecepatan reaksi, serta teknik start kompetitif untuk level pelajar hingga elite PON."
          : "Primary specialization since 2022. Speed climbing program development covering periodized training, power and reaction speed, and competitive start technique from student to PON elite level.",
      tags: ["Lead", "Speed", "Boulder", "PON"],
    },
    {
      icon: Weight,
      title: lang === "id" ? "Strength & Conditioning" : "Strength & Conditioning",
      description:
        lang === "id"
          ? "S&C Coach untuk berbagai cabang olahraga: panjat tebing, tinju, surfing, panahan. Merancang program kekuatan dan kondisi fisik spesifik yang mendukung performa atlet tanpa mengorbankan teknik utama."
          : "S&C Coach for multiple sports: climbing, boxing, surfing, archery. Designs sport-specific strength and conditioning programs that support athlete performance without sacrificing technical skills.",
      tags: ["Boxing", "Surfing", "Archery", "Multi-Sport"],
    },
    {
      icon: Mountain,
      title: lang === "id" ? "Pengembangan Atlet Muda" : "Youth Athlete Development",
      description:
        lang === "id"
          ? "Melatih atlet usia 4–8 tahun di Nusa Climb Jakarta, atlet SMA di Otista Climbing Lab, hingga mahasiswa di program PPOP DKI Jakarta. Fondasi teknis yang kuat untuk generasi panjat tebing berikutnya."
          : "Coaching athletes aged 4–8 at Nusa Climb Jakarta, high school athletes at Otista Climbing Lab, to university students in DKI Jakarta's PPOP program. Building the next generation of Indonesian climbers.",
      tags: ["Kids 4–8yr", "High School", "University", "PPOP DKI"],
    },
    {
      icon: BookOpen,
      title: lang === "id" ? "Edukasi & Konten" : "Education & Content",
      description:
        lang === "id"
          ? "Melalui platform Training by MAD dan Instagram @ahmadhudzaifaah (10K+ followers), Ahmad mendiseminasikan ilmu strength training dan kepelatihan yang benar kepada komunitas olahraga Indonesia secara luas."
          : "Through Training by MAD platform and Instagram @ahmadhudzaifaah (10K+ followers), Ahmad disseminates correct strength training and coaching knowledge to Indonesia's sports community.",
      tags: ["Instagram", "E-Book", "Webinar", "10K+ Followers"],
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={lang === "id" ? "SPESIALISASI & KEAHLIAN" : "SPECIALIZATIONS"}
          subtitle={
            lang === "id"
              ? "Metodologi berbasis sains yang diaplikasikan lintas cabang olahraga dan level atlet."
              : "Science-based methodology applied across sports disciplines and athlete levels."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specs.map((spec, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-emerald-300 transition-all duration-300 group h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <spec.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold font-spartan text-slate-900 uppercase mb-3">
                  {spec.title}
                </h4>
                <p className="text-sm text-slate-700 font-medium leading-relaxed flex-1">
                  {spec.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                  {spec.tags.map((tag, t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-[10px] font-mono font-extrabold uppercase bg-slate-50 text-slate-600 border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
