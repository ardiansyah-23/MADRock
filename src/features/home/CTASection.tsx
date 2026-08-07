"use client";

import Link from "next/link";
import { ArrowRight, Flame, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export function CTASection() {
  return (
    <section className="py-24 bg-mad-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-mad-surface via-mad-surface-2 to-mad-surface border border-mad-lime/40 p-10 sm:p-16 text-center space-y-8 shadow-2xl">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-mad-lime/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mad-lime/10 border border-mad-lime/30 text-mad-lime text-xs font-semibold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 fill-mad-lime" />
              <span>YOUR TRANSFORMATION STARTS TODAY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase font-spartan text-white tracking-tight max-w-4xl mx-auto leading-none">
              STOP WASTING TIME IN THE GYM. <br />
              <span className="text-mad-lime">START BUILDING YOUR LEGACY.</span>
            </h2>

            <p className="text-base sm:text-lg text-mad-gray max-w-2xl mx-auto leading-relaxed">
              Join over 600+ athletes who turned their physique dreams into reality. Get your custom coaching strategy now.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
              <Link
                href="/booking"
                className="group inline-flex items-center gap-3 px-9 py-4.5 rounded-2xl text-base font-extrabold bg-mad-lime text-mad-bg hover:bg-mad-lime-hover transition-all duration-300 shadow-xl shadow-mad-lime/25 hover:scale-105"
              >
                <span>START YOUR TRANSFORMATION</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-8 py-4.5 rounded-2xl text-base font-bold bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-all duration-300"
              >
                <span>Try Free Fitness Calculators</span>
              </Link>
            </div>

            <div className="pt-6 flex justify-center items-center gap-6 text-xs text-mad-gray">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-mad-lime" />
                <span>No long term commitments</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-mad-lime" />
                <span>Instant App Access</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
