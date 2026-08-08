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
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-mad-bg">
      {/* Ambient Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu">
        <Image
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop"
          alt="MADRock Fitness Gym Ambient Background"
          fill
          priority
          className="object-cover object-center opacity-20 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mad-bg via-mad-bg/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-mad-bg via-mad-bg/75 to-transparent" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mad-lime/10 rounded-full blur-3xl will-change-transform transform-gpu" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-mad-lime/15 rounded-full blur-3xl will-change-transform transform-gpu" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="down" delay={0.05}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mad-lime/10 border border-mad-lime/30 text-mad-lime text-xs font-semibold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 fill-mad-lime" />
                <span>{t("hero_badge")}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase font-spartan tracking-tight text-white leading-[0.95]">
                {t("hero_title_1")} <br />
                <span className="text-mad-lime">{t("hero_title_2")}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-base sm:text-lg lg:text-xl text-mad-gray max-w-xl font-normal leading-relaxed">
                {t("hero_subtitle")}
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/login"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-extrabold bg-mad-lime text-mad-bg hover:bg-mad-lime-hover transition-all duration-300 shadow-xl shadow-mad-lime/20 hover:scale-[1.02] active:scale-[0.98] transform-gpu"
                >
                  <span>{t("hero_cta_primary")}</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-base font-bold bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-mad-lime/50 transition-all duration-300 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transform-gpu"
                >
                  <Calendar className="w-5 h-5 text-mad-lime" />
                  <span>{t("hero_cta_secondary")}</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Quick Badges */}
            <ScrollReveal delay={0.25}>
              <div className="pt-4 flex items-center gap-6 text-xs text-mad-gray font-medium">
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

          {/* Right Side Image Card */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={0.15}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-mad-lime/30 via-transparent to-mad-lime/20 blur-xl opacity-60 pointer-events-none transform-gpu" />

                <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-mad-surface shadow-2xl transform-gpu">
                  <div className="relative h-[480px] sm:h-[540px] w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
                      alt="Head Coach Ahmad Hudzaifah"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-top hover:scale-105 transition-transform duration-500 transform-gpu"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mad-bg via-transparent to-transparent opacity-90" />
                  </div>

                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-mad-lime flex items-center justify-center text-mad-bg shrink-0 font-black text-xl">
                      AH
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wide">
                        Coach Ahmad Hudzaifah
                      </h4>
                      <p className="text-xs text-mad-lime font-medium">
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
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={0.05 * index}>
                <div className="p-4 rounded-2xl glass-card border border-white/5 hover:border-mad-lime/30 transition-all duration-300 transform-gpu">
                  <stat.icon className="w-6 h-6 text-mad-lime mx-auto mb-2 opacity-80" />
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-spartan text-white">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-mad-gray uppercase tracking-wider font-semibold mt-1">
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
