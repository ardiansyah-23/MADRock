"use client";

import Image from "next/image";
import { Star, Quote, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export function TestimonialsSection() {
  const reviews = [
    {
      name: "Brandon Hayes",
      role: "CEO & Executive",
      rating: 5,
      date: "Verified Google Review",
      review: "MADRock is the only coaching platform that actually understands busy schedules. Down 22lbs of fat in 12 weeks while increasing my deadlift by 60lbs. Worth every single penny.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Sarah Jenkins",
      role: "Crossfit Athlete",
      rating: 5,
      date: "Verified Google Review",
      review: "The AI Meal Planner and custom macro guidance completely changed how I fuel my sessions. My recovery has skyrocketed and my body composition looks insane.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthopedic Surgeon",
      rating: 5,
      date: "Verified Client",
      review: "As a physician, I evaluate programs through an evidence-based lens. Coach Marcus's periodization and biomechanics instruction are elite level.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-mad-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ATHLETE REVIEWS"
          title="WHAT OUR CLIENTS SAY"
          subtitle="Real reviews from real members who transformed their lives with MADRock."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <ScrollReveal key={idx} delay={0.15 * idx}>
              <div className="p-8 rounded-3xl bg-mad-bg border border-white/10 flex flex-col justify-between h-full hover:border-mad-lime/40 transition-colors">
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-mad-lime">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-mad-lime" />
                    ))}
                  </div>

                  <p className="text-sm text-mad-gray leading-relaxed italic">
                    "{item.review}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-mad-lime/40">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base font-spartan uppercase">
                      {item.name}
                    </h4>
                    <span className="text-xs text-mad-gray block">{item.role}</span>
                    <span className="text-[10px] text-mad-lime font-mono flex items-center gap-1 mt-0.5">
                      <CheckCircle className="w-3 h-3" />
                      {item.date}
                    </span>
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
