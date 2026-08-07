"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Star, ShieldCheck, Flame, Users, Trophy } from "lucide-react";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export function HeroSection() {
  const stats = [
    {
      value: 600,
      suffix: "+",
      label: "Happy Clients",
      icon: Users,
    },
    {
      value: 98,
      suffix: "%",
      label: "Success Rate",
      icon: ShieldCheck,
    },
    {
      value: 5,
      suffix: "+",
      label: "Years Experience",
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
      {/* Dark overlay & Ambient Glow Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop"
          alt="MADRock Fitness Gym Ambient Background"
          fill
          priority
          className="object-cover object-center opacity-25 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mad-bg via-mad-bg/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-mad-bg via-mad-bg/70 to-transparent" />
        
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mad-lime/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-mad-lime/15 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mad-lime/10 border border-mad-lime/30 text-mad-lime text-xs font-semibold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 fill-mad-lime" />
                <span>MADROCK PREMIUM COACHING</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase font-spartan tracking-tight text-white leading-[0.95]">
                Train Hard. <br />
                Stay Focused. <br />
                <span className="text-mad-lime">Become Unstoppable.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-base sm:text-lg lg:text-xl text-mad-gray max-w-xl font-normal leading-relaxed">
                Science-based coaching designed to help you build muscle, lose fat, improve strength and become your absolute best version.
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/booking"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-extrabold bg-mad-lime text-mad-bg hover:bg-mad-lime-hover transition-all duration-300 shadow-xl shadow-mad-lime/25 hover:scale-[1.03]"
                >
                  <span>START TRAINING</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-base font-bold bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-mad-lime/50 transition-all duration-300 backdrop-blur-md"
                >
                  <Calendar className="w-5 h-5 text-mad-lime" />
                  <span>Book Consultation</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Quick Badges */}
            <ScrollReveal delay={0.5}>
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
            <ScrollReveal direction="left" delay={0.3}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative Frame */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-mad-lime/40 via-transparent to-mad-lime/20 blur-xl opacity-70" />

                <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-mad-surface shadow-2xl">
                  <div className="relative h-[480px] sm:h-[540px] w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
                      alt="Head Coach MADRock Fitness"
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mad-bg via-transparent to-transparent opacity-90" />
                  </div>

                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-mad-lime flex items-center justify-center text-mad-bg shrink-0 font-black text-xl">
                      MR
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wide">
                        Coach Marcus Rock
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
              <ScrollReveal key={index} delay={0.1 * index}>
                <div className="p-4 rounded-2xl glass-card border border-white/5 hover:border-mad-lime/30 transition-colors">
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
