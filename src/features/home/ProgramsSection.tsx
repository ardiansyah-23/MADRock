"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Gauge, Flame, Dumbbell, Zap, Target } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export function ProgramsSection() {
  const programs = [
    {
      title: "Fat Loss Masterclass",
      category: "Cutting Protocol",
      description: "Accelerated metabolic conditioning paired with calorie deficit optimization to strip body fat while preserving lean tissue.",
      duration: "12 Weeks",
      difficulty: "Intermediate - Advanced",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
      badge: "Most Popular",
    },
    {
      title: "Hypertrophy Muscle Build",
      category: "Mass Building",
      description: "High-volume periodized weightlifting targeted at progressive overload, muscle fiber recruitment, and maximum growth.",
      duration: "16 Weeks",
      difficulty: "All Levels",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Body Recomposition",
      category: "Shred & Build",
      description: "Simultaneously drop body fat percentage while increasing strength and lean muscle mass with macro cycling.",
      duration: "12 Weeks",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Max Strength & Power",
      category: "Powerbuilding",
      description: "Focus on heavy compound lifts (Squat, Bench, Deadlift) engineered to build explosive raw strength and joint resilience.",
      duration: "10 Weeks",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Home & Minimal Equipment",
      category: "Dumbbell & Calisthenics",
      description: "High-intensity home workout system designed for busy professionals requiring minimal gear and maximum efficiency.",
      duration: "8 Weeks",
      difficulty: "Beginner - Intermediate",
      image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "1-on-1 Elite Coaching",
      category: "Custom Tailored",
      description: "Comprehensive private coaching with weekly video analysis, 24/7 direct messaging, and customized macro management.",
      duration: "Ongoing",
      difficulty: "Personalized",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
      badge: "VIP Access",
    },
  ];

  return (
    <section className="py-24 bg-mad-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="COACHING PROGRAMS"
          title="TRANSFORM YOUR PHYSIQUE"
          subtitle="Choose the exact protocol built for your fitness level, lifestyle, and physique goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="group rounded-3xl overflow-hidden bg-mad-bg border border-slate-900/10 hover:border-mad-lime/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-mad-lime/10 flex flex-col h-full">
                {/* Image Header */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mad-bg via-mad-bg/40 to-transparent" />

                  {program.badge && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-mad-lime text-mad-bg font-extrabold text-[11px] uppercase tracking-wider shadow-lg">
                      {program.badge}
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-mono text-mad-lime uppercase tracking-widest block mb-1">
                      {program.category}
                    </span>
                    <h3 className="text-2xl font-black font-spartan text-slate-900 uppercase leading-tight">
                      {program.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-6">
                  <p className="text-sm text-mad-gray leading-relaxed">
                    {program.description}
                  </p>

                  <div className="pt-4 border-t border-slate-900/10 space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-xs text-mad-gray">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-mad-lime" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-mad-lime" />
                        <span>{program.difficulty}</span>
                      </div>
                    </div>

                    <Link
                      href="/booking"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-mad-surface hover:bg-mad-lime text-slate-900 hover:text-mad-bg font-extrabold text-sm uppercase tracking-wider border border-slate-900/10 hover:border-mad-lime transition-all duration-300 group/btn"
                    >
                      <span>VIEW PROGRAM</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
