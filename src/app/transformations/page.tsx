"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Quote, Trophy, ArrowRight, CheckCircle } from "lucide-react";

export default function TransformationsPage() {
  const transformations = [
    {
      name: "Alex Rivera",
      age: 32,
      duration: "16 Weeks",
      lost: "28 lbs Fat",
      gained: "+6 lbs Muscle",
      story: "I tried generic gym apps for 3 years with zero progress. MADRock's custom macro breakdown and heavy compound structure transformed my body completely.",
      beforeImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Marcus Vance",
      age: 28,
      duration: "12 Weeks",
      lost: "18 lbs Fat",
      gained: "+8 lbs Muscle",
      story: "Coach Marcus fixed my shoulder impingement, dialed in my cutting macros, and helped me hit a 405lb squat while staying under 10% body fat.",
      beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Daniel Kim",
      age: 35,
      duration: "24 Weeks",
      lost: "42 lbs Fat",
      gained: "+12 lbs Muscle",
      story: "As a tech lead working 60 hours a week, I thought I didn't have time. The 45-minute optimized workouts fit my calendar effortlessly.",
      beforeImg: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=600&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="PROVEN RESULTS"
          title="CLIENT TRANSFORMATIONS"
          subtitle="Real before and after results achieved by athletes following our periodized coaching protocols."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {transformations.map((item, idx) => (
            <ScrollReveal key={idx} delay={0.15 * idx}>
              <div className="rounded-3xl bg-mad-surface border border-white/10 p-6 flex flex-col justify-between space-y-6 hover:border-mad-lime/40 transition-all duration-300">
                {/* Images Comparison */}
                <div className="grid grid-cols-2 gap-3 relative rounded-2xl overflow-hidden border border-white/10 bg-mad-bg p-2">
                  <div className="relative h-56 rounded-xl overflow-hidden">
                    <Image
                      src={item.beforeImg}
                      alt={`${item.name} Before`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-mad-bg/80 text-[10px] font-mono text-mad-gray uppercase font-bold">
                      BEFORE
                    </div>
                  </div>

                  <div className="relative h-56 rounded-xl overflow-hidden">
                    <Image
                      src={item.afterImg}
                      alt={`${item.name} After`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-mad-lime text-mad-bg text-[10px] font-mono uppercase font-black">
                      AFTER
                    </div>
                  </div>
                </div>

                {/* Stats Pill */}
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-3 rounded-xl bg-mad-bg border border-white/5">
                    <span className="text-[10px] font-mono text-mad-lime uppercase block">Fat Loss</span>
                    <span className="text-white font-extrabold text-sm font-spartan">{item.lost}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-mad-bg border border-white/5">
                    <span className="text-[10px] font-mono text-mad-lime uppercase block">Muscle Gain</span>
                    <span className="text-white font-extrabold text-sm font-spartan">{item.gained}</span>
                  </div>
                </div>

                {/* Story */}
                <div className="space-y-3">
                  <Quote className="w-6 h-6 text-mad-lime opacity-40" />
                  <p className="text-xs text-mad-gray leading-relaxed italic">
                    "{item.story}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-base font-spartan uppercase">
                      {item.name}, {item.age}
                    </h4>
                    <span className="text-[11px] text-mad-gray font-mono">
                      Program Duration: {item.duration}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-mad-lime/10 border border-mad-lime/30 flex items-center justify-center text-mad-lime">
                    <Trophy className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Box */}
        <div className="p-10 rounded-3xl bg-mad-surface border border-mad-lime/30 text-center space-y-6 max-w-3xl mx-auto">
          <h3 className="text-3xl font-black font-spartan uppercase text-white">
            READY TO BE OUR NEXT SUCCESS STORY?
          </h3>
          <p className="text-sm text-mad-gray max-w-lg mx-auto">
            Book your consultation now and get your custom periodized program built by Head Coach Marcus.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider hover:bg-mad-lime-hover shadow-xl shadow-mad-lime/20"
          >
            <span>START YOUR TRANSFORMATION</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
