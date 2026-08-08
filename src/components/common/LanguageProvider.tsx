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
    nav_workouts: "Latihan",
    nav_features: "Fitur",
    nav_pricing: "Harga",
    nav_blog: "Jurnal Science",
    nav_ai_coach: "AI Coach",
    nav_start_training: "MULAI LATIHAN",
    nav_dashboard: "Dashboard Member",
    nav_admin: "Konsol Admin",

    // Hero Section
    hero_badge: "METODE HIPERTROFI & SAINS FISIK REKOMPOSISI",
    hero_title_1: "LATIHAN DENGAN PRESI SAINS.",
    hero_title_2: "BENTUK FISIK IMPIANMU.",
    hero_subtitle:
      "Program kepelatihan beban berbasis sains sports biomechanics untuk membentuk otot, membakar lemak tubuh, dan membangun performa fisik tanpa cedera.",
    hero_cta_primary: "MULAI LATIHAN SEKARANG",
    hero_cta_secondary: "Jelajahi Program 12-Minggu",
    hero_stat_1: "Atlet Berhasil",
    hero_stat_2: "Tingkat Keberhasilan",
    hero_stat_3: "Pelatih VIP Dedicated",

    // Common
    search_placeholder: "Cari latihan, artikel, atau makanan...",
    log_out: "Keluar",
    back_to_home: "Kembali ke Web Utama",
  },
  en: {
    // Navbar
    nav_home: "Home",
    nav_programs: "Programs",
    nav_workouts: "Workouts",
    nav_features: "Features",
    nav_pricing: "Pricing",
    nav_blog: "Blog Journal",
    nav_ai_coach: "AI Coach",
    nav_start_training: "START TRAINING",
    nav_dashboard: "Member Dashboard",
    nav_admin: "Admin Console",

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

    // Common
    search_placeholder: "Search workouts, articles, or meals...",
    log_out: "Log Out",
    back_to_home: "Back to Main Web",
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
