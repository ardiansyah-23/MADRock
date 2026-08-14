"use client";

import { ArrowRight, MessageCircle, Instagram } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { useLanguage } from "@/components/common/LanguageProvider";

export function CTASection() {
  const { lang } = useLanguage();

  return (
    <section className="py-24 bg-mad-bg relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-mad-lime/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm p-10 sm:p-16 text-center space-y-8">
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-[0.03]"
              style={{backgroundImage: "linear-gradient(rgba(15,23,42,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.1) 1px, transparent 1px)", backgroundSize: "40px 40px"}}
            />

            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mad-lime/10 border border-mad-lime/30 text-mad-lime text-xs font-mono uppercase tracking-widest">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{lang === "id" ? "MULAI PERJALANAN ANDA" : "START YOUR JOURNEY"}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase font-spartan text-slate-900 tracking-tight max-w-4xl mx-auto leading-none">
                {lang === "id" ? "SIAP LATIHAN" : "READY TO TRAIN"} <br />
                <span className="text-mad-lime">
                  {lang === "id" ? "DENGAN BENAR?" : "THE RIGHT WAY?"}
                </span>
              </h2>

              <p className="text-base sm:text-lg text-mad-gray max-w-2xl mx-auto leading-relaxed">
                {lang === "id"
                  ? "Konsultasi langsung dengan Ahmad Hudzaifah. Program S&C dan Speed Climbing berbasis sains, dirancang khusus untuk kebutuhanmu."
                  : "Direct consultation with Ahmad Hudzaifah. Science-based S&C and Speed Climbing programs, designed specifically for your needs."}
              </p>

              <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
                <a
                  href="https://wa.me/62XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-9 py-4 rounded-2xl text-base font-extrabold bg-mad-lime text-white hover:bg-mad-lime-hover transition-all duration-300 shadow-xl shadow-mad-lime/25 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{lang === "id" ? "CHAT DI WHATSAPP" : "CHAT ON WHATSAPP"}</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="https://www.instagram.com/ahmadhudzaifaah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold bg-white border border-slate-200 text-slate-800 hover:border-mad-lime/40 shadow-sm transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 text-mad-lime" />
                  <span>@ahmadhudzaifaah</span>
                </a>
              </div>

              <p className="text-xs text-mad-gray font-mono">
                {lang === "id" ? "Respon dalam 24 jam · Konsultasi awal gratis" : "Response within 24 hours · Free initial consultation"}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
