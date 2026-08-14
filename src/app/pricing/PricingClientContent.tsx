"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { useLanguage } from "@/components/common/LanguageProvider";

export function PricingClientContent() {
  const { lang, t } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const plans = [
    {
      name: "Starter Protocol",
      priceMonthly: 1200000,
      priceYearly: 950000,
      description:
        lang === "id"
          ? "Alat ukur nutrisi & latihan berbasis sains esensial untuk atlet mandiri."
          : "Essential science-backed training & nutrition tools for self-directed athletes.",
      features: [
        lang === "id" ? "Akses Penuh Perpustakaan Latihan (100+ gerakan)" : "Full Access to Workout Library (100+ exercises)",
        lang === "id" ? "Program Latihan Periodisasi 12-Minggu" : "Structured 12-Week Training Program",
        lang === "id" ? "Dashboard Kalkulator Makro & Kalori" : "Macro & Calorie Calculator Dashboard",
        lang === "id" ? "Generator Latihan & Makan AI (10/bln)" : "AI Workout & Meal Generator (10/mo)",
        lang === "id" ? "Akses Komunitas Atlet Discord" : "Community Discord Access",
      ],
      cta: lang === "id" ? "PILIH STARTER" : "SELECT STARTER",
      highlighted: false,
    },
    {
      name: "Professional 1-on-1",
      priceMonthly: 2900000,
      priceYearly: 2500000,
      description:
        lang === "id"
          ? "Program kepelatihan VIP 1-on-1 andalan kami dengan bimbingan & evaluasi langsung pelatih kepala."
          : "Our flagship VIP 1-on-1 coaching program with direct coach accountability.",
      badge: lang === "id" ? "TERPOPULER: HASIL MAKSIMAL" : "MOST POPULAR: TOP RESULTS",
      features: [
        lang === "id" ? "SEMUA FITUR DI PAKET STARTER" : "EVERYTHING IN STARTER",
        lang === "id" ? "Pelatih Kepala Dedicated Ahmad Hudzaifah" : "Dedicated Head Coach Ahmad Hudzaifah",
        lang === "id" ? "100% Program Periodisasi Kustom" : "100% Custom Periodized Program",
        lang === "id" ? "Rencana Makan & Makro Mingguan Kustom" : "Custom Weekly Macro & Meal Plan",
        lang === "id" ? "Analisis Form Video & Panggilan Mingguan" : "Weekly Video Form Analysis & Call",
        lang === "id" ? "Akses Chat AI Coach Tanpa Batas" : "Unlimited AI Coach Chat Access",
        lang === "id" ? "Tracker Progres Foto Visual" : "Visual Photo Progress Tracker",
        lang === "id" ? "Pesan Langsung WhatsApp / Dalam Aplikasi" : "Direct WhatsApp / In-App Messaging",
      ],
      cta: lang === "id" ? "MULAI KEPEALTIHAN 1-ON-1" : "START 1-ON-1 COACHING",
      highlighted: true,
    },
    {
      name: "Elite Performance",
      priceMonthly: 5200000,
      priceYearly: 4500000,
      description:
        lang === "id"
          ? "Kepelatihan privat komprehensif termasuk analisis laboratorium darah & optimasi biofeedback."
          : "Complete concierge coaching including bloodwork analysis & competition prep.",
      features: [
        lang === "id" ? "SEMUA FITUR DI PAKET PROFESSIONAL" : "EVERYTHING IN PROFESSIONAL",
        lang === "id" ? "Sesi Panggilan Zoom 1-on-1 Dwi-Mingguan" : "Bi-Weekly 1-on-1 Zoom Coaching Sessions",
        lang === "id" ? "Optimasi Analisis Darah & Biofeedback" : "Bloodwork & Biofeedback Optimization",
        lang === "id" ? "Protokol Suplemen & Pemulihan Fisik" : "Supplement & Recovery Protocols",
        lang === "id" ? "Komunikasi VIP Prioritas 24/7" : "Priority 24/7 VIP Communication",
        lang === "id" ? "Merchandise & Merchandise MADRock Gratis" : "Free MADRock Merchandise & Gear",
      ],
      cta: lang === "id" ? "DAFTAR PAKET ELITE" : "APPLY FOR ELITE",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      q: lang === "id" ? "Apakah ada kontrak jangka panjang atau biaya pembatalan?" : "Is there a long-term contract or cancellation fee?",
      a:
        lang === "id"
          ? "Tidak ada! Semua paket MADRock berlaku bulan-ke-bulan. Anda dapat mejedakan atau membatalkan langganan kapan saja dengan satu klik dari dashboard atlet Anda."
          : "No! All MADRock plans are month-to-month. You can pause or cancel your subscription anytime with one click from your athlete dashboard.",
    },
    {
      q: lang === "id" ? "Bagaimana cara kerja evaluasi mingguan kepelatihan 1-on-1?" : "How does the 1-on-1 coaching check-in work?",
      a:
        lang === "id"
          ? "Setiap minggu, Anda mengirimkan rekaman video angkatan dan catatan berat badan. Coach Ahmad Hudzaifah secara pribadi mengevaluasi biomekanika gerakan Anda dan menyesuaikan beban/makro secara presisi."
          : "Every week, you submit your lift video recordings and body weight log. Coach Ahmad Hudzaifah personally reviews your form biomechanics and adjusts your reps/macros accordingly.",
    },
    {
      q: lang === "id" ? "Bagaimana jika saya seorang pemula tanpa pengalaman gym?" : "What if I am a beginner with no gym experience?",
      a:
        lang === "id"
          ? "Program kami melayani seluruh tingkat pengalaman dari pemula total (0-1 tahun) hingga atlet kekuatan berpengalaman. Program kustom Anda dimulai dari garis dasar fitnes Anda saat ini."
          : "Our programs cater to all levels from absolute beginner (0-1 yrs) to competitive strength athletes. Your custom plan starts at your current fitness baseline.",
    },
    {
      q: lang === "id" ? "Bisakah saya mengganti paket atau pelatih nanti?" : "Can I switch coaches or plans later?",
      a:
        lang === "id"
          ? "Ya! Anda dapat melakukan upgrade, downgrade, atau meminta transisi paket kapan saja langsung di dalam dashboard member Anda."
          : "Yes! You can upgrade, downgrade, or request a plan transition anytime directly inside your member dashboard.",
    },
  ];

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeader
          badge={t("price_header_badge")}
          title={t("price_header_title")}
          subtitle={t("price_header_subtitle")}
        />

        {/* Billing Toggle */}
        <div className="flex justify-center">
          <div className="p-1.5 rounded-full bg-mad-surface border border-slate-900/10 flex items-center gap-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase transition-all ${billingCycle === "monthly"
                  ? "bg-mad-lime text-mad-bg font-extrabold"
                  : "text-mad-gray hover:text-slate-900"
                }`}
            >
              {t("price_monthly")}
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase transition-all flex items-center gap-2 ${billingCycle === "yearly"
                  ? "bg-mad-lime text-mad-bg font-extrabold"
                  : "text-mad-gray hover:text-slate-900"
                }`}
            >
              <span>{t("price_yearly")}</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly;

            return (
              <ScrollReveal key={idx} delay={0.15 * idx}>
                <div
                  className={`rounded-3xl p-8 flex flex-col justify-between h-full relative transition-all duration-300 ${plan.highlighted
                      ? "bg-mad-surface border-2 border-mad-lime lg:-translate-y-4"
                      : "bg-mad-surface/60 border border-slate-900/10 hover:border-slate-900/20"
                    }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-mad-lime text-mad-bg font-extrabold text-[10px] uppercase tracking-wider whitespace-nowrap">
                      {plan.badge}
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-black font-spartan text-slate-900 uppercase">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-mad-gray mt-1 leading-relaxed">
                        {plan.description}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-1 py-4 border-y border-slate-900/10">
                      <span className="text-5xl font-black font-spartan text-slate-900">
                        Rp {price.toLocaleString("id-ID")}
                      </span>
                      <span className="text-xs font-mono text-mad-gray uppercase">
                        {lang === "id" ? "/ bulan" : "/ month"}
                      </span>
                    </div>

                    <ul className="space-y-3.5 text-xs text-mad-gray">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-mad-lime shrink-0 mt-0.5" />
                          <span className={feature.startsWith("EVERYTHING") || feature.startsWith("SEMUA") ? "font-bold text-slate-900 uppercase" : ""}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <Link
                      href="/booking"
                      className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl font-extrabold text-xs uppercase tracking-wider transition-all ${plan.highlighted
                          ? "bg-mad-lime text-mad-bg hover:bg-mad-lime-hover"
                          : "bg-slate-900/10 text-white hover:bg-mad-lime hover:text-mad-bg border border-slate-900/15"
                        }`}
                    >
                      <span>{plan.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* 100% Satisfaction Guarantee Bar */}
        <div className="rounded-3xl bg-mad-surface border border-slate-900/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-mad-lime/10 border border-mad-lime/30 flex items-center justify-center text-mad-lime shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-spartan text-slate-900 uppercase">{t("price_guarantee_title")}</h4>
              <p className="text-xs text-mad-gray">{t("price_guarantee_desc")}</p>
            </div>
          </div>

          <Link
            href="/booking"
            className="px-6 py-3 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase whitespace-nowrap"
          >
            {lang === "id" ? "MULAI TANPA RISIKO" : "GET STARTED RISK-FREE"}
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto space-y-6 pt-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black font-spartan uppercase text-slate-900">
              {lang === "id" ? "PERTANYAAN SERING DIAJUKAN (FAQ)" : "FREQUENTLY ASKED QUESTIONS"}
            </h3>
            <p className="text-xs text-mad-gray">
              {lang === "id"
                ? "Punya pertanyaan seputar harga atau opsi kepelatihan kami?"
                : "Have questions about our pricing or coaching options?"}
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-mad-surface border border-slate-900/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-4 uppercase font-spartan"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-mad-lime transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-mad-gray leading-relaxed border-t border-slate-900/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
