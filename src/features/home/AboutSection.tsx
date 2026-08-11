"use client";

import Image from "next/image";
import { CheckCircle2, Brain, Clock, Utensils, Activity, Target } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { useLanguage } from "@/components/common/LanguageProvider";

export function AboutSection() {
  const { lang } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: lang === "id" ? "Protokol Berbasis Sains" : "Science Based Protocol",
      description:
        lang === "id"
          ? "Tanpa tebak-menebak. Setiap struktur latihan dan nutrisi didukung riset sains olahraga dan biomekanika."
          : "No guesswork. Every workout and meal structure is backed by sports science research and biomechanics.",
    },
    {
      icon: Target,
      title: lang === "id" ? "Kepelatihan 1-on-1 VIP" : "Personal 1-on-1 Coaching",
      description:
        lang === "id"
          ? "Akses langsung ke pelatih kepala dedicated untuk evaluasi gerakan harian, umpan balik form, dan penyesuaian program."
          : "Direct access to your dedicated head coach for daily accountability, form feedback, and adjustments.",
    },
    {
      icon: Clock,
      title: lang === "id" ? "Jadwal Fleksibel" : "Flexible Schedule",
      description:
        lang === "id"
          ? "Program dirancang menyesuaikan dengan jadwal kerja padat, gaya hidup travel, atau ketersediaan alat gym."
          : "Workouts engineered around your busy career, travel lifestyle, or home equipment availability.",
    },
    {
      icon: Utensils,
      title: lang === "id" ? "Panduan Nutrisi Presisi" : "Precision Nutrition Guide",
      description:
        lang === "id"
          ? "Kerangka makronutrisi kustom dan rencana makan lezat yang disesuaikan dengan selera dan profil metabolik Anda."
          : "Custom macro frameworks and easy delicious meal plans tailored to your exact taste and metabolic profile.",
    },
    {
      icon: Activity,
      title: lang === "id" ? "Pelacakan Progres Lanjutan" : "Advanced Progress Tracking",
      description:
        lang === "id"
          ? "Analisis detail berat badan, % kadar lemak, volume angkatan, dan dashboard komparasi foto transformasi."
          : "Detailed analytics for weight, body fat %, lift volume, and visual photo comparison dashboard.",
    },
  ];

  return (
    <section className="py-24 bg-mad-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={lang === "id" ? "DIRANCANG UNTUK HASIL NYATA" : "ENGINEERED FOR REAL RESULTS"}
          subtitle={
            lang === "id"
              ? "Menggabungkan prinsip performa atlet elit dengan kepelatihan gaya hidup yang dipersonalisasi."
              : "Combining elite athletic performance principles with personalized lifestyle coaching."
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Coach Image */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="right">
              <div className="relative rounded-3xl overflow-hidden border border-slate-900/15 bg-mad-surface shadow-2xl">
                <div className="relative h-[520px] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1000&auto=format&fit=crop"
                    alt="Coaching Philosophy"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase tracking-wider">
                  CSCS & CPT CERTIFIED
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Story & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-spartan text-slate-900">
                {lang === "id"
                  ? '"FITNES BUKAN SOLUSI 12-MINGGU SERBA INSTAN. INI ADALAH ARSITEKTUR PERFORMA HIDUP ANDA."'
                  : '"FITNESS IS NOT A 12-WEEK QUICK FIX. IT IS YOUR LIFE PERFORMANCE ARCHITECTURE."'}
              </h3>
              <p className="text-mad-gray text-base leading-relaxed mt-4">
                {lang === "id"
                  ? "Selama lebih dari 8+ tahun, saya telah membantu ratusan profesional, pengusaha, dan atlet mengubah bentuk fisik mereka. Filosofi saya sederhana: eliminasi gerakan tak berguna, kuasai compound movement, optimalkan pemulihan, dan bangun kebiasaan nutrisi yang berkelanjutan."
                  : "Over the past 8+ years, I’ve transformed hundreds of busy professionals, entrepreneurs, and athletes. My philosophy is simple: eliminate fluff, master compound movements, optimize recovery, and build sustainable nutritional habits."}
              </p>
            </ScrollReveal>

            {/* Achievements & Badges */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-mad-surface border border-slate-900/10">
                  <span className="text-mad-lime font-mono text-xs uppercase block">
                    {lang === "id" ? "Pengalaman" : "Experience"}
                  </span>
                  <span className="text-slate-900 font-bold text-lg font-spartan">8+ {lang === "id" ? "Tahun" : "Years"}</span>
                </div>
                <div className="p-4 rounded-2xl bg-mad-surface border border-slate-900/10">
                  <span className="text-mad-lime font-mono text-xs uppercase block">
                    {lang === "id" ? "Sertifikasi" : "Certifications"}
                  </span>
                  <span className="text-slate-900 font-bold text-lg font-spartan">NSCA & NASM</span>
                </div>
                <div className="p-4 rounded-2xl bg-mad-surface border border-slate-900/10">
                  <span className="text-mad-lime font-mono text-xs uppercase block">
                    {lang === "id" ? "Transformasi" : "Transformations"}
                  </span>
                  <span className="text-slate-900 font-bold text-lg font-spartan">600+ {lang === "id" ? "Klien" : "Clients"}</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <ul className="space-y-3 pt-2 text-sm text-mad-gray">
                {[
                  lang === "id"
                    ? "Program kekuatan & hipertrofi periodisasi kustom"
                    : "Personalized periodized strength & hypertrophy programs",
                  lang === "id"
                    ? "Integrasi analisis darah komprehensif & biofeedback"
                    : "Comprehensive bloodwork & biofeedback analysis integration",
                  lang === "id"
                    ? "Evaluasi video form latihan & evaluasi mingguan 1-on-1"
                    : "Weekly 1-on-1 video call check-ins & form critique",
                  lang === "id"
                    ? "Akses dashboard mobile app & dukungan AI Coach"
                    : "Exclusive mobile app dashboard & AI coach support",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-mad-lime shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="p-8 rounded-3xl glass-card glass-card-hover border border-slate-900/10 relative group">
                <div className="w-14 h-14 rounded-2xl bg-mad-lime/10 border border-mad-lime/30 flex items-center justify-center text-mad-lime mb-6 group-hover:bg-mad-lime group-hover:text-mad-bg transition-colors duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold font-spartan text-slate-900 uppercase mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-mad-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
