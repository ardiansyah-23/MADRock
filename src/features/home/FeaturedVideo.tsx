"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, Dumbbell, Zap, HeartPulse, Apple, Brain } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export function FeaturedVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const tags = [
    { label: "Strength", icon: Dumbbell, color: "text-mad-lime" },
    { label: "Mobility", icon: Zap, color: "text-amber-400" },
    { label: "Recovery", icon: HeartPulse, color: "text-emerald-400" },
    { label: "Nutrition", icon: Apple, color: "text-rose-400" },
    { label: "Mindset", icon: Brain, color: "text-sky-400" },
  ];

  return (
    <section className="py-24 bg-mad-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FEATURED WORKOUT DEMO"
          title="EXPERIENCE THE TRAINING INTENSITY"
          subtitle="Watch how Coach Marcus breaks down biomechanics and execution for peak athletic performance."
        />

        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-mad-surface shadow-2xl group max-w-5xl mx-auto">
            {/* Video Thumbnail */}
            <div className="relative h-[380px] sm:h-[500px] lg:h-[580px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2000&auto=format&fit=crop"
                alt="MADRock Workout Demonstration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-mad-lime text-mad-bg flex items-center justify-center shadow-2xl shadow-mad-lime/40 hover:scale-110 transition-transform duration-300 group/btn"
                  aria-label="Play video"
                >
                  <Play className="w-10 h-10 ml-1 fill-mad-bg stroke-none" />
                </button>
                <span className="mt-4 text-xs font-mono tracking-widest text-white uppercase font-bold bg-mad-bg/80 px-4 py-1.5 rounded-full border border-white/10">
                  WATCH WORKOUT BREAKDOWN (3:45)
                </span>
              </div>

              {/* Floating Pillars / Tags */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-center gap-3">
                {tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 rounded-2xl glass-panel border border-white/15 text-xs font-bold text-white uppercase tracking-wider backdrop-blur-xl"
                  >
                    <tag.icon className={`w-4 h-4 ${tag.color}`} />
                    <span>{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Modal Video Player Placeholder */}
        {isPlaying && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl bg-mad-surface rounded-3xl overflow-hidden border border-white/20">
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-mad-bg/80 text-white hover:text-mad-lime border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-video w-full flex items-center justify-center bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="MADRock Workout Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
