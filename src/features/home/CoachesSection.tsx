"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Award, Calendar, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export function CoachesSection() {
  const coaches = [
    {
      name: "Ahmad Hudzaifah",
      role: "Head Coach & Founder",
      specialization: "Hypertrophy & Strength Biomechanics",
      experience: "8+ Years",
      rating: "5.0",
      reviews: 240,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Elena Vance",
      role: "Nutrition & Fat Loss Specialist",
      specialization: "Metabolic Recomposition & Macros",
      experience: "6+ Years",
      rating: "4.9",
      reviews: 185,
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "David Vance",
      role: "Mobility & Powerlifting Coach",
      specialization: "Compound Power & Injury Rehab",
      experience: "7+ Years",
      rating: "4.9",
      reviews: 160,
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-mad-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ELITE COACHING TEAM"
          title="LEARN FROM THE BEST"
          subtitle="Certified specialists dedicated to building your physique with science and discipline."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coaches.map((coach, idx) => (
            <ScrollReveal key={idx} delay={0.15 * idx}>
              <div className="group rounded-3xl bg-mad-surface border border-white/10 overflow-hidden hover:border-mad-lime/50 transition-all duration-300">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-panel border border-white/15 flex items-center gap-1 text-xs text-white font-bold">
                    <Star className="w-3.5 h-3.5 fill-mad-lime text-mad-lime" />
                    <span>{coach.rating} ({coach.reviews})</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-black font-spartan text-white uppercase">
                      {coach.name}
                    </h3>
                    <p className="text-xs text-mad-lime font-mono uppercase tracking-wider mt-0.5">
                      {coach.role}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-mad-gray">
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span>Specialization:</span>
                      <span className="text-white font-medium">{coach.specialization}</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span>Experience:</span>
                      <span className="text-white font-medium">{coach.experience}</span>
                    </div>
                  </div>

                  <Link
                    href="/booking"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-mad-lime/10 text-mad-lime hover:bg-mad-lime hover:text-mad-bg font-extrabold text-xs uppercase tracking-wider border border-mad-lime/30 transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>BOOK 1-ON-1 SESSION</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
