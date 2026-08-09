"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Clock, Gauge, ArrowRight, CheckCircle2, Flame, Filter, Sparkles, X } from "lucide-react";

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProgram, setSelectedProgram] = useState<any>(null);

  const categories = ["All", "Cutting Protocol", "Mass Building", "Shred & Build", "Powerbuilding", "Home Workout", "Custom Tailored"];

  const programs = [
    {
      id: "fat-loss-masterclass",
      title: "Fat Loss Masterclass",
      category: "Cutting Protocol",
      description: "Accelerated metabolic conditioning paired with calorie deficit optimization to strip body fat while preserving lean muscle mass.",
      duration: "12 Weeks",
      difficulty: "Intermediate - Advanced",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
      badge: "Most Popular",
      price: "$199",
      features: [
        "100% Periodized Cutting Training Split",
        "Custom Calorie & Macro Deficit Structure",
        "Weekly Biofeedback & Cardio Adjustments",
        "High-Protein Recipe & Meal Prep Guide",
        "24/7 AI Coach Access in Mobile App",
      ],
    },
    {
      id: "hypertrophy-muscle-build",
      title: "Hypertrophy Muscle Build",
      category: "Mass Building",
      description: "High-volume periodized weightlifting targeted at progressive overload, maximum mechanical tension, and rapid muscle growth.",
      duration: "16 Weeks",
      difficulty: "All Levels",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop",
      badge: "High Growth",
      price: "$249",
      features: [
        "4 to 5 Day Compound Weightlifting Split",
        "Surplus Macro Framework for Lean Mass",
        "Form Video Analysis from Head Coach",
        "Supplement & Intra-Workout Protocol",
        "Progressive Overload Tracking Dashboard",
      ],
    },
    {
      id: "body-recomposition",
      title: "Body Recomposition",
      category: "Shred & Build",
      description: "Simultaneously drop body fat percentage while increasing strength and lean muscle mass using carb cycling algorithms.",
      duration: "12 Weeks",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
      price: "$219",
      features: [
        "Calorie & Carb Cycling Protocol",
        "Compound Strength + HIIT Conditioning",
        "Weekly Measurements & Body Fat Analysis",
        "Custom Refeed & High-Carb Days",
        "Direct Messaging with Dedicated Coach",
      ],
    },
    {
      id: "max-strength-power",
      title: "Max Strength & Power",
      category: "Powerbuilding",
      description: "Focus on heavy compound lifts (Squat, Bench Press, Deadlift) engineered to build explosive raw strength and joint resilience.",
      duration: "10 Weeks",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop",
      price: "$229",
      features: [
        "RPE & Percentage-Based Periodization",
        "Bar Path & Biomechanics Assessment",
        "Deload Weeks & Max Single Testing Protocol",
        "Joint Care & Mobility Routine",
      ],
    },
    {
      id: "home-minimal-equipment",
      title: "Home & Minimal Equipment",
      category: "Home Workout",
      description: "High-intensity home workout system designed for busy professionals requiring minimal gear and maximum physical efficiency.",
      duration: "8 Weeks",
      difficulty: "Beginner - Intermediate",
      image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000&auto=format&fit=crop",
      price: "$149",
      features: [
        "Dumbbell & Bodyweight Conditioning",
        "30 to 45 Minute Time-Efficient Workouts",
        "No Heavy Squat Rack Required",
        "Travel-Friendly Calisthenics Routines",
      ],
    },
    {
      id: "elite-1-on-1-coaching",
      title: "1-on-1 Elite Concierge Coaching",
      category: "Custom Tailored",
      description: "Comprehensive private coaching with weekly video analysis, 24/7 direct messaging, and fully customized macro management.",
      duration: "Ongoing",
      difficulty: "Personalized",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
      badge: "VIP Access",
      price: "$349/mo",
      features: [
        "100% Customized Training & Diet Blueprint",
        "Direct WhatsApp / Call Access to Coach Marcus",
        "Bi-Weekly 1-on-1 Video Strategy Call",
        "Bloodwork & Biofeedback Optimization",
        "Priority VIP Mobile Dashboard Features",
      ],
    },
  ];

  const filteredPrograms = programs.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="TRAINING PROTOCOLS"
          title="COACHING & TRAINING PROGRAMS"
          subtitle="Engineered for peak performance, physique transformations, and long-term athletic sustainability."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase transition-all ${
                activeCategory === cat
                  ? "bg-mad-lime text-mad-bg shadow-lg shadow-mad-lime/20 font-extrabold"
                  : "bg-mad-surface text-mad-gray border border-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program, idx) => (
            <ScrollReveal key={program.id} delay={0.1 * idx}>
              <div className="group rounded-3xl bg-mad-surface border border-white/10 overflow-hidden hover:border-mad-lime/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-mad-lime/10 flex flex-col h-full">
                {/* Image Header */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {program.badge && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-mad-lime text-mad-bg font-black text-[10px] uppercase tracking-wider shadow-lg">
                      {program.badge}
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-mono text-mad-lime uppercase tracking-widest block mb-1">
                      {program.category}
                    </span>
                    <h3 className="text-2xl font-black font-spartan text-white uppercase leading-tight">
                      {program.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-6">
                  <p className="text-xs text-mad-gray leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[10px] font-mono text-mad-lime uppercase block font-bold">Key Included Features:</span>
                    {program.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-mad-gray">
                        <CheckCircle2 className="w-3.5 h-3.5 text-mad-lime shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono text-mad-gray uppercase block">Investment</span>
                      <span className="text-2xl font-black font-spartan text-white">{program.price}</span>
                    </div>

                    <button
                      onClick={() => setSelectedProgram(program)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase tracking-wider hover:bg-mad-lime-hover transition-all"
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedProgram && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
            <div className="relative w-full max-w-2xl bg-mad-surface rounded-3xl border border-white/20 p-8 space-y-6 overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-mad-bg text-white hover:text-mad-lime border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono text-mad-lime uppercase tracking-widest">
                  {selectedProgram.category} • {selectedProgram.duration}
                </span>
                <h2 className="text-3xl font-black font-spartan uppercase text-white">
                  {selectedProgram.title}
                </h2>
              </div>

              <p className="text-sm text-mad-gray leading-relaxed">
                {selectedProgram.description}
              </p>

              <div className="space-y-3 p-5 rounded-2xl bg-mad-bg border border-white/10">
                <h4 className="text-xs font-mono text-white font-bold uppercase tracking-wider mb-2">
                  FULL PROTOCOL INCLUSIONS:
                </h4>
                {selectedProgram.features.map((feat: string, i: number) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-mad-gray">
                    <CheckCircle2 className="w-4 h-4 text-mad-lime shrink-0" />
                    <span className="text-white font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <span className="text-xs font-mono text-mad-gray uppercase block">Total Price</span>
                  <span className="text-3xl font-black font-spartan text-mad-lime">{selectedProgram.price}</span>
                </div>

                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-mad-lime text-mad-bg font-black text-sm uppercase tracking-wider hover:bg-mad-lime-hover shadow-xl shadow-mad-lime/30"
                >
                  <span>START THIS PROGRAM NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
