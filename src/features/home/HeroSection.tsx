"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Star, ShieldCheck, Flame, Users, Trophy } from "lucide-react";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { useLanguage } from "@/components/common/LanguageProvider";

export function HeroSection() {
  const { t } = useLanguage();

  const stats = [
    {
      value: 600,
      suffix: "+",
      label: t("hero_stat_1"),
      icon: Users,
    },
    {
      value: 98,
      suffix: "%",
      label: t("hero_stat_2"),
      icon: ShieldCheck,
    },
    {
      value: 5,
      suffix: "+",
      label: t("hero_stat_3"),
      icon: Trophy,
    },
    {
      value: 4.9,
      suffix: "★",
      decimals: 1,
      label: "Average Rating",
      icon: Star,
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-mad-bg">
      {/* Ambient Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu">
        <Image
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop"
          alt="MADRock Fitness Gym Ambient Background"
          fill
          priority
          className="object-cover object-center opacity-15 filter blur-[1px]"
        />
        {/* Dark Ambient Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-mad-bg via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-mad-bg via-transparent to-transparent" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/15 rounded-full blur-3xl will-change-transform transform-gpu" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-lime-500/20 rounded-full blur-3xl will-change-transform transform-gpu" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6">
            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase font-spartan tracking-tight text-slate-900 leading-[1.02]">
                {t("hero_title_1")} <br />
                <span className="text-mad-lime">{t("hero_title_2")}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                {t("hero_subtitle")}
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/login"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl text-sm font-extrabold bg-mad-lime text-white hover:bg-mad-lime-hover transition-all duration-300 shadow-xl shadow-lime-600/20 hover:scale-[1.02] active:scale-[0.98] transform-gpu"
                >
                  <span className="keep-white text-white font-extrabold">{t("hero_cta_primary")}</span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold bg-white border border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-mad-lime transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98] transform-gpu"
                >
                  <Calendar className="w-4 h-4 text-mad-lime" />
                  <span>{t("hero_cta_secondary")}</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Quick Badges */}
            <ScrollReveal delay={0.25}>
              <div className="pt-2 flex items-center gap-6 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-mad-lime animate-pulse" />
                  <span>100% Customized Plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-mad-lime animate-pulse" />
                  <span>24/7 Coach Access</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side Image Card - RICH DARK GRADIENT OVERLAY */}
          <div className="lg:col-span-5 xl:col-span-5 relative">
            <ScrollReveal direction="left" delay={0.15}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-lime-500/30 via-transparent to-lime-500/20 blur-xl opacity-70 pointer-events-none transform-gpu" />

                <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-2xl transform-gpu">
                  <div className="relative h-[380px] sm:h-[450px] lg:h-[480px] w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
                      alt="Head Coach Ahmad Hudzaifah"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-top hover:scale-105 transition-transform duration-500 transform-gpu"
                    />
                    {/* STRICTLY DARK VIGNETTE GRADIENT (BLACK TO TRANSPARENT) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                  </div>

                  {/* Floating Overlay Badge on Dark Gradient */}
                  <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/20 flex items-center gap-3.5 shadow-2xl">
                    <div className="w-10 h-10 rounded-xl bg-mad-lime flex items-center justify-center text-white shrink-0 font-black text-lg shadow-md">
                      AH
                    </div>
                    <div>
                      <h4 className="text-white keep-white font-bold text-xs sm:text-sm uppercase tracking-wide">
                        Coach Ahmad Hudzaifah
                      </h4>
                      <p className="text-[11px] text-lime-400 font-semibold">
                        Head Strength & Recomp Specialist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Statistics Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={0.05 * index}>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-mad-lime transition-all duration-300 shadow-sm transform-gpu">
                  <stat.icon className="w-5 h-5 text-mad-lime mx-auto mb-2 opacity-90" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-spartan text-slate-900">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  </div>
                  <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold mt-1">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
