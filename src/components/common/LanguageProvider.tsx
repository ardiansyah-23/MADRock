"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "id" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  id: {
    // Navbar
    nav_home: "Beranda",
    nav_programs: "Program",
    nav_workouts: "Workout",
    nav_features: "Fitur",
    nav_pricing: "Harga",
    nav_blog: "Blog",
    nav_ai_coach: "AI Coach",
    nav_start_training: "MULAI LATIHAN",
    nav_dashboard: "Portal Member",
    nav_admin: "Konsol Admin",

    // Dropdown Features
    feat_meal_planner: "Meal Planner",
    feat_meal_desc: "Rencana nutrisi kustom & resep makro harian",
    feat_transformations: "Transformasi Klien",
    feat_trans_desc: "Bukti nyata sebelum & sesudah dari program kami",
    feat_calculators: "Kalkulator Fitnes",
    feat_calc_desc: "9 kalkulator kebugaran ilmiah interaktif",

    // Hero Section
    hero_badge: "METODE REKOMPOSISI TUBUH BERBASIS SAINS OLAHRAGA",
    hero_title_1: "LATIHAN DENGAN PRESISI SAINS.",
    hero_title_2: "BENTUK FISIK IMPIAN ANDA.",
    hero_subtitle:
      "Program kepelatihan beban berbasis sains biomekanika olahraga untuk membangun massa otot, membakar lemak membandel, dan meningkatkan kekuatan fisik secara optimal dan aman.",
    hero_cta_primary: "MULAI SEKARANG",
    hero_cta_secondary: "Jelajahi Program 12 Minggu",
    hero_stat_1: "Klien Mentransformasi Fisik",
    hero_stat_2: "Tingkat Keberhasilan Klien",
    hero_stat_3: "Pelatih VIP Bersertifikat",

    // Programs Page
    prog_header_badge: "KATALOG KEPELATIHAN PRESISI",
    prog_header_title: "PROGRAM LATIHAN PERIODISASI",
    prog_header_subtitle: "Protokol latihan ilmiah yang dirancang untuk mempercepat pertumbuhan otot, pembakaran lemak optimal, dan peningkatan kekuatan puncak.",
    prog_cta: "PILIH PROGRAM INI",

    // Workouts Page
    work_header_badge: "DATABASE BIOMEKANIKA GERAKAN",
    work_header_title: "PERPUSTAKAAN GERAKAN LATIHAN",
    work_header_subtitle: "Panduan teknis eksekusi gerakan berbasis anatomi untuk mengoptimalkan stimulasi otot secara maksimal dan aman dari cedera.",

    // Meal Planner Page
    meal_header_badge: "GENERATOR NUTRISI & MAKRO AI",
    meal_header_title: "PERENCANA NUTRISI KUSTOM",
    meal_header_subtitle: "Rancang rencana makan presisi tinggi yang disesuaikan dengan kebutuhan kalori harian, target protein, dan gaya hidup Anda.",
    meal_button_generate: "BUAT RENCANA MAKANAN SEKARANG",

    // Transformations Page
    trans_header_badge: "BUKTI NYATA PERKEMBANGAN KLIEN",
    trans_header_title: "GALERI TRANSFORMASI FISIK",
    trans_header_subtitle: "Lihat bukti nyata bagaimana protokol berbasis sains kami membantu lebih dari 600 klien mencapai bentuk tubuh ideal mereka.",

    // Tools / Calculators Page
    tools_header_badge: "9 ALAT INTERAKTIF OLAHRAGA ILMIAH",
    tools_header_title: "KALKULATOR KEBUTUHAN FISIK",
    tools_header_subtitle: "Hitung TDEE, kebutuhan protein, target makro harian, estimasi 1RM, dan kadar lemak tubuh secara akurat.",

    // Pricing Page
    price_header_badge: "INVESTASI TERBAIK UNTUK TUBUH ANDA",
    price_header_title: "PAKET KEANGGOTAAN TRANSPARAN",
    price_header_subtitle: "Tanpa kontrak yang mengikat. Batalkan kapan saja. Pilih tingkat bimbingan kepelatihan sesuai kebutuhan Anda.",
    price_monthly: "Penagihan Bulanan",
    price_yearly: "Tahunan (Hemat 20%)",
    price_guarantee_title: "GARANSI 100% UANGA KEMBALI 14 HARI",
    price_guarantee_desc: "Jika Anda tidak merasakan perkembangan atau kurang puas dengan program kami dalam 14 hari pertama, kami kembalikan investasi Anda 100%.",

    // AI Coach Assistant Page
    ai_header_badge: "ASISTEN KEPELATIHAN AI REAL-TIME",
    ai_header_title: "MADROCK AI COACH ASSISTANT",
    ai_header_subtitle: "Konsultasikan teknik gerakan, perhitungan kalori makro, dan strategi beban progresif (progressive overload) 24/7.",

    // Common UI Text
    search_placeholder: "Cari gerakan latihan, artikel, atau makanan...",
    log_out: "Keluar",
    back_to_home: "Kembali ke Beranda Utama",
    quick_demo_user: "Login Demo Member (Atlet)",
    quick_demo_admin: "Login Demo Admin (Pelatih)",
    footer_rights: "Hak Cipta Dilindungi Undang-Undang.",
  },
  en: {
    // Navbar
    nav_home: "Home",
    nav_programs: "Programs",
    nav_workouts: "Workouts",
    nav_features: "Features",
    nav_pricing: "Pricing",
    nav_blog: "Blog",
    nav_ai_coach: "AI Coach",
    nav_start_training: "START TRAINING",
    nav_dashboard: "Member Dashboard",
    nav_admin: "Admin Console",

    // Dropdown Features
    feat_meal_planner: "Meal Planner",
    feat_meal_desc: "Custom macro plans & recipes",
    feat_transformations: "Transformations",
    feat_trans_desc: "Client before & after results",
    feat_calculators: "Calculators",
    feat_calc_desc: "9 interactive fitness tools",

    // Hero Section
    hero_badge: "SCIENCE-BASED RECOMPOSITION PROTOCOLS",
    hero_title_1: "TRAIN WITH SCIENTIFIC PRECISION.",
    hero_title_2: "BUILD YOUR PEAK PHYSIQUE.",
    hero_subtitle:
      "Evidence-based bodybuilding biomechanics coaching designed to help you gain muscle, shred fat, and maximize human strength safely.",
    hero_cta_primary: "START TRAINING NOW",
    hero_cta_secondary: "Explore 12-Week Programs",
    hero_stat_1: "Athletes Transformed",
    hero_stat_2: "Success Rate",
    hero_stat_3: "Dedicated VIP Coaches",

    // Programs Page
    prog_header_badge: "PRECISION COACHING CATALOG",
    prog_header_title: "PERIODIZED TRAINING PROGRAMS",
    prog_header_subtitle: "Scientific weight training protocols engineered for maximum hypertrophy, fat loss, and peak strength.",
    prog_cta: "SELECT THIS PROGRAM",

    // Workouts Page
    work_header_badge: "MUSCLE BIOMECHANICS DATABASE",
    work_header_title: "EXERCISE LIBRARY",
    work_header_subtitle: "Anatomically-guided weightlifting technique guides to maximize mechanical tension stimulation.",

    // Meal Planner Page
    meal_header_badge: "AI NUTRITION & MACRO GENERATOR",
    meal_header_title: "CUSTOM MEAL PLANNER",
    meal_header_subtitle: "Design high-precision meal plans tailored to your exact caloric target, protein intake, and lifestyle.",
    meal_button_generate: "GENERATE MEAL PLAN NOW",

    // Transformations Page
    trans_header_badge: "CLIENT PROOF & RESULTS",
    trans_header_title: "ATHLETE PHYSIQUE TRANSFORMATIONS",
    trans_header_subtitle: "See how MADRock scientific protocols helped over 600+ athletes dramatically reshape their physiques.",

    // Tools / Calculators Page
    tools_header_badge: "9 INTERACTIVE SPORTS SCIENCE TOOLS",
    tools_header_title: "PRECISION FITNESS CALCULATORS",
    tools_header_subtitle: "Accurately compute TDEE, protein targets, macro splits, 1RM estimations, and body fat percentage.",

    // Pricing Page
    price_header_badge: "INVEST IN YOUR PEAK PHYSIQUE",
    price_header_title: "TRANSPARENT MEMBERSHIP PLANS",
    price_header_subtitle: "No long-term contracts. Cancel anytime. Choose the level of science-backed guidance you need.",
    price_monthly: "Monthly Billing",
    price_yearly: "Yearly (Save 20%)",
    price_guarantee_title: "14-DAY MONEY-BACK GUARANTEE",
    price_guarantee_desc: "If you don't feel completely satisfied with your personalized protocol in the first 14 days, get a 100% full refund.",

    // AI Coach Assistant Page
    ai_header_badge: "REAL-TIME AI COACHING ASSISTANT",
    ai_header_title: "MADROCK AI COACH ASSISTANT",
    ai_header_subtitle: "Ask anything about weightlifting biomechanics, macro calculation, and progressive overload strategy 24/7.",

    // Common UI Text
    search_placeholder: "Search workouts, articles, or meals...",
    log_out: "Log Out",
    back_to_home: "Back to Main Web",
    quick_demo_user: "Demo Login User (Athlete)",
    quick_demo_admin: "Demo Login Admin (Coach)",
    footer_rights: "All Rights Reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("id");

  useEffect(() => {
    const savedLang = (localStorage.getItem("madrock_lang") as Language) || "id";
    setLangState(savedLang);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("madrock_lang", newLang);
  };

  const toggleLang = () => {
    const nextLang = lang === "id" ? "en" : "id";
    setLang(nextLang);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations["en"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
