"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageProvider";

export default function ProgramsPage() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProgram, setSelectedProgram] = useState<any>(null);

  const categories = [
    "All",
    "Cutting Protocol",
    "Mass Building",
    "Shred & Build",
    "Powerbuilding",
    "Home Workout",
    "Custom Tailored",
  ];

  const getCategoryLabel = (cat: string) => {
    if (lang === "id") {
      switch (cat) {
        case "All": return "Semua";
        case "Cutting Protocol": return "Protokol Defisit (Cutting)";
        case "Mass Building": return "Pembentukan Massa (Bulking)";
        case "Shred & Build": return "Bakar Lemak & Bentuk Otot";
        case "Powerbuilding": return "Powerbuilding";
        case "Home Workout": return "Latihan di Rumah";
        case "Custom Tailored": return "Desain Kustom Pribadi";
        default: return cat;
      }
    }
    return cat;
  };

  const getDifficultyLabel = (diff: string) => {
    if (lang === "id") {
      switch (diff) {
        case "Intermediate - Advanced": return "Menengah - Mahir";
        case "All Levels": return "Semua Tingkatan";
        case "Intermediate": return "Menengah";
        case "Advanced": return "Mahir";
        case "Beginner - Intermediate": return "Pemula - Menengah";
        case "Personalized": return "Dipersonalisasi";
        default: return diff;
      }
    }
    return diff;
  };

  const programs = [
    {
      id: "fat-loss-masterclass",
      title: lang === "id" ? "Fat Loss Masterclass" : "Fat Loss Masterclass",
      category: "Cutting Protocol",
      description:
        lang === "id"
          ? "Kondisi metabolik dipercepat yang dipadukan dengan optimasi defisit kalori untuk membakar lemak tubuh sambil mempertahankan massa otot."
          : "Accelerated metabolic conditioning paired with calorie deficit optimization to strip body fat while preserving lean muscle mass.",
      duration: lang === "id" ? "12 Minggu" : "12 Weeks",
      difficulty: "Intermediate - Advanced",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
      badge: lang === "id" ? "Terpopuler" : "Most Popular",
      price: "Rp 1.500.000",
      features: [
        lang === "id" ? "100% Split Latihan Defisit Periodisasi" : "100% Periodized Cutting Training Split",
        lang === "id" ? "Struktur Defisit Kalori & Makro Kustom" : "Custom Calorie & Macro Deficit Structure",
        lang === "id" ? "Penyesuaian Kardio & Biofeedback Mingguan" : "Weekly Biofeedback & Cardio Adjustments",
        lang === "id" ? "Panduan Resep Tinggi Protein & Meal Prep" : "High-Protein Recipe & Meal Prep Guide",
        lang === "id" ? "Akses AI Coach 24/7 di Aplikasi Mobile" : "24/7 AI Coach Access in Mobile App",
      ],
    },
    {
      id: "hypertrophy-muscle-build",
      title: lang === "id" ? "Hipertrofi & Pembentukan Otot" : "Hypertrophy Muscle Build",
      category: "Mass Building",
      description:
        lang === "id"
          ? "Latihan beban periodisasi volume tinggi yang ditargetkan untuk progressive overload, tegangan mekanis maksimum, dan pertumbuhan otot pesat."
          : "High-volume periodized weightlifting targeted at progressive overload, maximum mechanical tension, and rapid muscle growth.",
      duration: lang === "id" ? "16 Minggu" : "16 Weeks",
      difficulty: "All Levels",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop",
      badge: lang === "id" ? "Pertumbuhan Maksimal" : "High Growth",
      price: "Rp 2.500.000",
      features: [
        lang === "id" ? "Split Latihan Beban 4-5 Hari Seminggu" : "4 to 5 Day Compound Weightlifting Split",
        lang === "id" ? "Kerangka Makro Surplus Massa Otot Kering" : "Surplus Macro Framework for Lean Mass",
        lang === "id" ? "Analisis Video Form Latihan dari Head Coach" : "Form Video Analysis from Head Coach",
        lang === "id" ? "Protokol Suplemen & Intra-Workout" : "Supplement & Intra-Workout Protocol",
        lang === "id" ? "Dashboard Pelacakan Progressive Overload" : "Progressive Overload Tracking Dashboard",
      ],
    },
    {
      id: "body-recomposition",
      title: lang === "id" ? "Rekomposisi Tubuh" : "Body Recomposition",
      category: "Shred & Build",
      description:
        lang === "id"
          ? "Secara bersamaan menurunkan persentase lemak tubuh sekaligus meningkatkan kekuatan dan massa otot kering menggunakan algoritma carb cycling."
          : "Simultaneously drop body fat percentage while increasing strength and lean muscle mass using carb cycling algorithms.",
      duration: lang === "id" ? "12 Minggu" : "12 Weeks",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
      price: "Rp 2.000.000",
      features: [
        lang === "id" ? "Protokol Carb & Calorie Cycling" : "Calorie & Carb Cycling Protocol",
        lang === "id" ? "Kekuatan Compound + Kondisikan HIIT" : "Compound Strength + HIIT Conditioning",
        lang === "id" ? "Pengukuran Mingguan & Analisis Lemak Tubuh" : "Weekly Measurements & Body Fat Analysis",
        lang === "id" ? "Hari Karbohidrat Tinggi & Refeed Kustom" : "Custom Refeed & High-Carb Days",
        lang === "id" ? "Pesan Langsung dengan Pelatih Dedicated" : "Direct Messaging with Dedicated Coach",
      ],
    },
    {
      id: "max-strength-power",
      title: lang === "id" ? "Kekuatan Puncak & Power" : "Max Strength & Power",
      category: "Powerbuilding",
      description:
        lang === "id"
          ? "Fokus pada angkatan berat compound (Squat, Bench Press, Deadlift) yang dirancang untuk membangun kekuatan eksplosif dan ketahanan sendi."
          : "Focus on heavy compound lifts (Squat, Bench Press, Deadlift) engineered to build explosive raw strength and joint resilience.",
      duration: lang === "id" ? "10 Minggu" : "10 Weeks",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop",
      price: "Rp 2.200.000",
      features: [
        lang === "id" ? "Periodisasi Berbasis RPE & Persentase" : "RPE & Percentage-Based Periodization",
        lang === "id" ? "Penilaian Biomekanika & Bar Path" : "Bar Path & Biomechanics Assessment",
        lang === "id" ? "Minggu Deload & Protokol Tes 1RM" : "Deload Weeks & Max Single Testing Protocol",
        lang === "id" ? "Rutin Mobilitas & Perawatan Sendi" : "Joint Care & Mobility Routine",
      ],
    },
    {
      id: "home-minimal-equipment",
      title: lang === "id" ? "Latihan Rumah & Peralatan Minimal" : "Home & Minimal Equipment",
      category: "Home Workout",
      description:
        lang === "id"
          ? "Sistem latihan rumah intensitas tinggi yang dirancang untuk profesional sibuk dengan alat minimal dan efisiensi fisik maksimal."
          : "High-intensity home workout system designed for busy professionals requiring minimal gear and maximum physical efficiency.",
      duration: lang === "id" ? "8 Minggu" : "8 Weeks",
      difficulty: "Beginner - Intermediate",
      image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000&auto=format&fit=crop",
      price: "Rp 1.250.000",
      features: [
        lang === "id" ? "Kondisikan Dumbbell & Bodyweight" : "Dumbbell & Bodyweight Conditioning",
        lang === "id" ? "Sesi Efisien Waktu 30-45 Menit" : "30 to 45 Minute Time-Efficient Workouts",
        lang === "id" ? "Tanpa Perlu Squat Rack Berat" : "No Heavy Squat Rack Required",
        lang === "id" ? "Rutin Kalistenik Ramah Travel" : "Travel-Friendly Calisthenics Routines",
      ],
    },
    {
      id: "elite-1-on-1-coaching",
      title: lang === "id" ? "Bimbingan Privasi VIP 1-on-1" : "1-on-1 Elite Concierge Coaching",
      category: "Custom Tailored",
      description:
        lang === "id"
          ? "Kepelatihan privat komprehensif dengan analisis video mingguan, pesan langsung 24/7, dan manajemen makro yang dipersonalisasi penuh."
          : "Comprehensive private coaching with weekly video analysis, 24/7 direct messaging, and fully customized macro management.",
      duration: lang === "id" ? "Berkelanjutan" : "Ongoing",
      difficulty: "Personalized",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
      badge: "Akses VIP",
      price: "Rp 4.500.000/bln",
      features: [
        lang === "id" ? "100% Cetak Biru Latihan & Diet Kustom" : "100% Customized Training & Diet Blueprint",
        lang === "id" ? "Akses WhatsApp & Telepon Langsung ke Head Coach" : "Direct WhatsApp / Call Access to Head Coach",
        lang === "id" ? "Panggilan Video Strategi 1-on-1 Dwi-Mingguan" : "Bi-Weekly 1-on-1 Video Strategy Call",
        lang === "id" ? "Optimasi Analisis Darah & Biofeedback" : "Bloodwork & Biofeedback Optimization",
        lang === "id" ? "Fitur Prioritas Dashboard Mobile VIP" : "Priority VIP Mobile Dashboard Features",
      ],
    },
  ];

  const filteredPrograms = programs.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t("prog_header_title")}
          subtitle={t("prog_header_subtitle")}
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase transition-all ${activeCategory === cat
                  ? "bg-mad-lime text-mad-bg font-extrabold"
                  : "bg-mad-surface text-mad-gray border border-slate-900/10 hover:text-slate-900"
                }`}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program, idx) => (
            <ScrollReveal key={program.id} delay={0.1 * idx}>
              <div className="group rounded-3xl bg-mad-surface border border-slate-900/10 overflow-hidden hover:border-mad-lime/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                {/* Image Header */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {program.badge && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-slate-900 font-extrabold text-[10px] uppercase tracking-wider border border-slate-900/20 z-10">
                      <span className="keep-white text-white">{program.badge}</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-5">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-mad-lime font-bold uppercase tracking-widest block">
                      {getCategoryLabel(program.category)}
                    </span>
                    <h3 className="text-2xl font-black font-spartan text-slate-900 uppercase leading-tight">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-xs text-mad-gray leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-900/10">
                    <span className="text-[10px] font-mono text-mad-lime uppercase block font-bold">
                      {lang === "id" ? "Fitur Utama Termasuk:" : "Key Included Features:"}
                    </span>
                    {program.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-mad-gray">
                        <CheckCircle2 className="w-3.5 h-3.5 text-mad-lime shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-900/10 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono text-mad-gray uppercase block">
                        {lang === "id" ? "Investasi" : "Investment"}
                      </span>
                      <span className="text-2xl font-black font-spartan text-slate-900">{program.price}</span>
                    </div>

                    <button
                      onClick={() => setSelectedProgram(program)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase tracking-wider hover:bg-mad-lime-hover transition-all"
                    >
                      <span>{lang === "id" ? "LIHAT DETAIL" : "VIEW DETAILS"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedProgram && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
            <div className="relative w-full max-w-2xl bg-mad-surface rounded-3xl border border-slate-900/20 p-8 space-y-6 overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-mad-bg text-slate-900 hover:text-mad-lime border border-slate-900/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono text-mad-lime uppercase tracking-widest">
                  {getCategoryLabel(selectedProgram.category)} • {selectedProgram.duration} • {getDifficultyLabel(selectedProgram.difficulty)}
                </span>
                <h2 className="text-3xl font-black font-spartan uppercase text-slate-900">
                  {selectedProgram.title}
                </h2>
              </div>

              <p className="text-sm text-mad-gray leading-relaxed">
                {selectedProgram.description}
              </p>

              <div className="space-y-3 p-5 rounded-2xl bg-mad-bg border border-slate-900/10">
                <h4 className="text-xs font-mono text-slate-900 font-bold uppercase tracking-wider mb-2">
                  {lang === "id" ? "SELURUH FITUR PROTOKOL:" : "FULL PROTOCOL INCLUSIONS:"}
                </h4>
                {selectedProgram.features.map((feat: string, i: number) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-mad-lime shrink-0" />
                    <span className="text-slate-900 font-semibold">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-900/10">
                <div>
                  <span className="text-xs font-mono text-mad-gray uppercase block">
                    {lang === "id" ? "Total Harga" : "Total Price"}
                  </span>
                  <span className="text-3xl font-black font-spartan text-mad-lime">{selectedProgram.price}</span>
                </div>

                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-mad-lime text-mad-bg font-black text-sm uppercase tracking-wider hover:bg-mad-lime-hover"
                >
                  <span>{t("prog_cta")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
