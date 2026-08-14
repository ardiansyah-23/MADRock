"use client";

import Link from "next/link";
import { Check, ArrowRight, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { useLanguage } from "@/components/common/LanguageProvider";

export function PricingSection() {
  const { lang } = useLanguage();

  const plans = [
    {
      name: lang === "id" ? "S&C Online Coaching" : "S&C Online Coaching",
      price: 1500000,
      description:
        lang === "id"
          ? "Program latihan Strength & Conditioning berbasis sains, dirancang khusus untuk atlet atau individu aktif."
          : "Science-based Strength & Conditioning program, designed for athletes or active individuals.",
      features: [
        lang === "id" ? "Program periodisasi S&C kustom 12 minggu" : "12-week custom S&C periodization program",
        lang === "id" ? "Panduan teknik gerakan & form" : "Movement & form technique guide",
        lang === "id" ? "Update program bulanan" : "Monthly program updates",
        lang === "id" ? "Akses grup komunitas" : "Community group access",
        lang === "id" ? "Review progres via chat" : "Progress review via chat",
      ],
      cta: lang === "id" ? "MULAI S&C COACHING" : "START S&C COACHING",
      highlighted: false,
      href: "/booking",
    },
    {
      name: lang === "id" ? "Speed Climbing Coaching" : "Speed Climbing Coaching",
      price: 2500000,
      badge: lang === "id" ? "SPESIALISASI UTAMA" : "MAIN SPECIALIZATION",
      description:
        lang === "id"
          ? "Program kepelatihan speed climbing intensif untuk atlet pelajar hingga persiapan kompetisi nasional."
          : "Intensive speed climbing coaching for student athletes to national competition preparation.",
      features: [
        lang === "id" ? "Program speed climbing periodisasi kustom" : "Custom speed climbing periodization program",
        lang === "id" ? "Teknik start & wall run spesifik" : "Specific start technique & wall run",
        lang === "id" ? "Pengembangan power & kecepatan reaksi" : "Power development & reaction speed",
        lang === "id" ? "Video analysis form & teknik" : "Form & technique video analysis",
        lang === "id" ? "Konsultasi 1-on-1 langsung" : "Direct 1-on-1 consultation",
        lang === "id" ? "Persiapan kompetisi (POPDA, PON, POMNAS)" : "Competition prep (POPDA, PON, POMNAS)",
      ],
      cta: lang === "id" ? "DAFTAR SPEED CLIMBING" : "JOIN SPEED CLIMBING",
      highlighted: true,
      href: "/booking",
    },
    {
      name: lang === "id" ? "E-Book & Webinar" : "E-Book & Webinar",
      price: 250000,
      description:
        lang === "id"
          ? "Akses materi edukasi strength training dan kepelatihan dari Training by MAD. Cocok untuk self-learner."
          : "Access strength training and coaching education materials from Training by MAD. Perfect for self-learners.",
      features: [
        lang === "id" ? "E-Book prinsip dasar S&C" : "S&C fundamentals E-Book",
        lang === "id" ? "Rekaman webinar eksklusif" : "Exclusive webinar recordings",
        lang === "id" ? "Panduan periodisasi pemula" : "Beginner periodization guide",
        lang === "id" ? "Akses materi baru bulanan" : "Monthly new material access",
      ],
      cta: lang === "id" ? "DAPATKAN MATERI" : "GET MATERIALS",
      highlighted: false,
      href: "https://www.instagram.com/ahmadhudzaifaah",
    },
  ];

  return (
    <section className="py-24 bg-mad-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={lang === "id" ? "PAKET KEPELATIHAN" : "COACHING PACKAGES"}
          subtitle={
            lang === "id"
              ? "Pilih program yang sesuai dengan tujuan dan level atletmu."
              : "Choose the program that matches your goals and athletic level."
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <ScrollReveal key={idx} delay={0.15 * idx}>
              <div
                className={`rounded-3xl p-8 flex flex-col justify-between h-full relative transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-white border-2 border-mad-lime shadow-xl shadow-mad-lime/10 lg:-translate-y-4"
                    : "bg-white border border-slate-200 hover:border-mad-lime/30 shadow-sm"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-mad-lime text-white font-extrabold text-[10px] uppercase tracking-wider shadow-lg whitespace-nowrap">
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

                  <div className="flex items-baseline gap-1 py-4 border-y border-slate-200">
                    <span className="text-5xl font-black font-spartan text-slate-900">
                      Rp {plan.price.toLocaleString("id-ID")}
                    </span>
                    <span className="text-xs font-mono text-mad-gray uppercase">
                      {lang === "id" ? "/ bulan" : "/ month"}
                    </span>
                  </div>

                  <ul className="space-y-3.5 text-xs text-mad-gray">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-mad-lime shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  {plan.href.startsWith("http") ? (
                    <a
                      href={plan.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl font-extrabold text-xs uppercase tracking-wider transition-all ${
                        plan.highlighted
                          ? "bg-mad-lime text-white hover:bg-mad-lime-hover shadow-xl shadow-mad-lime/20"
                          : "bg-slate-50 text-slate-700 hover:bg-mad-lime hover:text-white border border-slate-200 hover:border-mad-lime"
                      }`}
                    >
                      <span>{plan.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      href={plan.href}
                      className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl font-extrabold text-xs uppercase tracking-wider transition-all ${
                        plan.highlighted
                          ? "bg-mad-lime text-white hover:bg-mad-lime-hover shadow-xl shadow-mad-lime/20"
                          : "bg-slate-50 text-slate-700 hover:bg-mad-lime hover:text-white border border-slate-200 hover:border-mad-lime"
                      }`}
                    >
                      <span>{plan.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-slate-900 font-bold font-spartan uppercase">
                {lang === "id" ? "Tidak yakin paket mana yang cocok?" : "Not sure which package fits?"}
              </p>
              <p className="text-mad-gray text-xs mt-1">
                {lang === "id" ? "Chat langsung untuk konsultasi gratis." : "Chat directly for a free consultation."}
              </p>
            </div>
            <a
              href="https://wa.me/62XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-mad-lime text-white font-extrabold text-xs uppercase tracking-wider hover:bg-mad-lime-hover transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              {lang === "id" ? "Konsultasi Gratis" : "Free Consultation"}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
