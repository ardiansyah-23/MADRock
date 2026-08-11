"use client";

import Image from "next/image";
import { GraduationCap, Award, CheckCircle2, Instagram, Linkedin } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { useLanguage } from "@/components/common/LanguageProvider";

export function AboutSection() {
  const { lang } = useLanguage();

  const certs = [
    {
      title: "Sports Performance Specialist L1",
      org: "FIBA",
    },
    {
      title: lang === "id" ? "Pelatih Fisik Level 1 Nasional" : "National Physical Coach Level 1",
      org: "LANKOR",
    },
    {
      title: lang === "id" ? "Pelatih Panjat Tebing Level 1 Nasional" : "National Climbing Coach Level 1",
      org: lang === "id" ? "Kemenpora RI" : "Ministry of Youth & Sports RI",
    },
  ];

  const achievements = [
    {
      value: "2021",
      label: lang === "id" ? "Medali Emas Nasional" : "National Gold Medal",
    },
    {
      value: "PON 2024",
      label: lang === "id" ? "Head Coach Tim DKI" : "DKI Head Coach",
    },
    {
      value: "15/16",
      label: lang === "id" ? "Kuota Kualifikasi PON" : "PON Qualification Quota",
    },
    {
      value: "POMNAS 2025",
      label: lang === "id" ? "Medali Perunggu" : "Bronze Medal",
    },
  ];

  return (
    <section className="py-24 bg-mad-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={lang === "id" ? "TENTANG AHMAD HUDZAIFAH" : "ABOUT AHMAD HUDZAIFAH"}
          subtitle={
            lang === "id"
              ? "Strength & Conditioning Coach dan Pelatih Speed Climbing berpengalaman dari Jakarta."
              : "Experienced Strength & Conditioning Coach and Speed Climbing Coach from Jakarta."
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="right">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-mad-surface shadow-2xl shadow-black/30">
                <div className="relative h-[520px] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1000&auto=format&fit=crop"
                    alt="Ahmad Hudzaifah — Strength & Conditioning Coach"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mad-surface/60 via-transparent to-transparent" />
                </div>

                <div className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-mad-lime/30">
                  {lang === "id" ? "UNJ 2013–2018" : "UNJ 2013–2018"}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-4">
                <a
                  href="https://www.instagram.com/ahmadhudzaifaah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl glass-card border border-white/10 text-mad-gray hover:text-mad-lime hover:border-mad-lime/30 transition-all text-xs font-mono font-bold uppercase"
                >
                  <Instagram className="w-4 h-4" />
                  @ahmadhudzaifaah
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmadhudzaifah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl glass-card border border-white/10 text-mad-gray hover:text-mad-lime hover:border-mad-lime/30 transition-all text-xs font-mono font-bold uppercase"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Story */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal>
              <p className="text-xs font-mono uppercase tracking-widest text-mad-lime mb-2">
                {lang === "id" ? "LATAR BELAKANG" : "BACKGROUND"}
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-spartan text-white">
                {lang === "id"
                  ? '"GLORY LIKE PREPARATION"'
                  : '"GLORY LIKE PREPARATION"'}
              </h3>
              <p className="text-mad-gray text-base leading-relaxed mt-4">
                {lang === "id"
                  ? "Lulusan Pendidikan Olahraga Universitas Negeri Jakarta (2013–2018). Sejak 2019, Ahmad telah membangun karier kepelatihannya mulai dari Dispora DKI Jakarta, KONI DKI, hingga mendirikan platform edukasi Training by MAD. Pendekatannya: periodisasi latihan berbasis sains yang disesuaikan dengan kemampuan atlet, bukan program seragam."
                  : "Graduate of Sports Education at Universitas Negeri Jakarta (2013–2018). Since 2019, Ahmad has built his coaching career from Dispora DKI Jakarta, KONI DKI, to founding the Training by MAD education platform. His approach: science-based periodization training tailored to each athlete's ability."}
              </p>
            </ScrollReveal>

            {/* Key Achievements Grid */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {achievements.map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl glass-card border border-white/10 text-center">
                    <span className="text-mad-lime font-spartan font-black text-lg block leading-tight">{item.value}</span>
                    <span className="text-mad-gray font-mono text-[10px] uppercase block mt-1">{item.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Certifications */}
            <ScrollReveal delay={0.3}>
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-widest text-mad-gray mb-3 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-mad-lime" />
                  {lang === "id" ? "SERTIFIKASI PROFESIONAL" : "PROFESSIONAL CERTIFICATIONS"}
                </p>
                <ul className="space-y-2.5">
                  {certs.map((cert, i) => (
                    <li key={i} className="flex items-center gap-3 p-3.5 rounded-2xl glass-card border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-mad-lime shrink-0" />
                      <div>
                        <span className="text-white text-sm font-bold block">{cert.title}</span>
                        <span className="text-mad-gray text-[11px] font-mono">{cert.org}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="p-5 rounded-2xl glass-card border border-white/10 flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-mad-lime shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold text-sm">
                    {lang === "id" ? "Universitas Negeri Jakarta" : "State University of Jakarta"}
                  </p>
                  <p className="text-mad-gray text-xs mt-0.5">
                    {lang === "id" ? "S1 Pendidikan Olahraga · 2013–2018" : "Bachelor of Sports Education · 2013–2018"}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
