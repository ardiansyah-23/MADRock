"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mountain, Users, Trophy, Star } from "lucide-react";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { useLanguage } from "@/components/common/LanguageProvider";

export function HeroSection() {
  const { lang } = useLanguage();

  const stats = [
    {
      value: 7,
      suffix: "+",
      label: lang === "id" ? "Atlet Speed Climbing" : "Speed Climbing Athletes",
      icon: Users,
    },
    {
      value: 15,
      suffix: "/16",
      label: lang === "id" ? "Kuota Kualifikasi PON" : "PON Qualification Quota",
      icon: Trophy,
    },
    {
      value: 10,
      suffix: "K+",
      label: lang === "id" ? "Followers Edukasi" : "Education Followers",
      icon: Star,
    },
    {
      value: 7,
      suffix: "+",
      label: lang === "id" ? "Tahun Kepelatihan" : "Years Coaching",
      icon: Mountain,
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-mad-bg">
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2103&auto=format&fit=crop"
          alt="Speed Climbing Wall Background"
          fill
          priority
          className="object-cover object-center opacity-10 filter blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mad-bg via-mad-bg/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-mad-bg via-transparent to-transparent" />
        {/* Neon accent glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-mad-lime/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Side Content */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={0.05}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mad-lime/30 bg-mad-lime/10 text-mad-lime text-xs font-mono uppercase tracking-widest">
                <Mountain className="w-3.5 h-3.5" />
                {lang === "id" ? "S&C Coach · Speed Climbing · Training by MAD" : "S&C Coach · Speed Climbing · Training by MAD"}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-spartan tracking-tight text-white leading-[1.02]">
                {lang === "id" ? (
                  <>BANGUN ATLET <br /><span className="text-mad-lime">TERBAIK ANDA</span></>
                ) : (
                  <>BUILD YOUR <br /><span className="text-mad-lime">BEST ATHLETE</span></>
                )}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-sm sm:text-base lg:text-lg text-mad-gray max-w-xl leading-relaxed">
                {lang === "id"
                  ? "Ahmad Hudzaifah. S&C Coach & Pelatih Speed Climbing Indonesia. Head Coach PON 2024 DKI Jakarta. Metodologi berbasis sains untuk atlet pelajar hingga elite."
                  : "Ahmad Hudzaifah. S&C Coach & Speed Climbing Indonesia. Head Coach PON 2024 DKI Jakarta. Science-based methodology for student to elite athletes."}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://wa.me/62XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl text-sm font-extrabold bg-mad-lime text-mad-bg hover:bg-mad-lime-hover transition-all duration-300 shadow-lg shadow-mad-lime/20"
                >
                  <span>{lang === "id" ? "Mulai Kepelatihan" : "Start Coaching"}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold glass-card border border-white/10 text-white hover:border-mad-lime/40 transition-all duration-300"
                >
                  <span>{lang === "id" ? "Booking Konsultasi" : "Book Consultation"}</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side Image Card */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={0.15}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-mad-surface shadow-2xl shadow-black/40">
                  <div className="relative h-[380px] sm:h-[450px] lg:h-[480px] w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1000&auto=format&fit=crop"
                      alt="Ahmad Hudzaifah — S&C Coach & Speed Climbing Indonesia"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mad-surface/70 via-transparent to-transparent" />
                  </div>

                  {/* Floating Coach Badge */}
                  <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-2xl glass-panel border border-white/10 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-mad-lime flex items-center justify-center text-mad-bg shrink-0 font-black text-lg font-spartan">
                      AH
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wide">
                        Ahmad Hudzaifah
                      </h4>
                      <p className="text-[11px] text-mad-lime font-semibold font-mono">
                        S&C Coach · Speed Climbing · Founder Training by MAD
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating credential badge */}
                <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl glass-panel border border-mad-lime/30 text-mad-lime font-mono text-[10px] font-bold uppercase tracking-wider shadow-lg">
                  {lang === "id" ? "PON 2024 Head Coach" : "PON 2024 Head Coach"}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Statistics Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={0.05 * index}>
                <div className="p-4 rounded-2xl glass-card border border-white/10 hover:border-mad-lime/40 transition-all duration-300 group">
                  <stat.icon className="w-5 h-5 text-mad-lime mx-auto mb-2 opacity-90" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-spartan text-white">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={0}
                    />
                  </div>
                  <p className="text-xs text-mad-gray uppercase tracking-wider font-semibold mt-1">
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
