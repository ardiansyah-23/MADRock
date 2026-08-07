"use client";

import { Award, ShieldCheck, Dumbbell, Zap, HeartPulse, Sparkles } from "lucide-react";

export function TrustedBrands() {
  const partners = [
    { name: "ELEIKO SPORT", category: "Gym Partner" },
    { name: "ROGUE FITNESS", category: "Equipment" },
    { name: "OPTIMUM NUTRITION", category: "Nutrition" },
    { name: "WHOOP STRAP", category: "Performance" },
    { name: "NSCA CERTIFIED", category: "Certification" },
    { name: "HYROX COMMUNITY", category: "Sports" },
    { name: "MYPROTEIN LABS", category: "Supplements" },
    { name: "GYMSHARK TEAM", category: "Apparel" },
  ];

  return (
    <section className="py-12 bg-mad-surface/80 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs uppercase font-mono tracking-widest text-mad-gray">
          TRUSTED BY INDUSTRY LEADERS & CERTIFIED ORGANIZATIONS
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {partners.concat(partners).map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl glass-card border border-white/5 shrink-0 hover:border-mad-lime/40 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-mad-lime/10 flex items-center justify-center text-mad-lime group-hover:bg-mad-lime group-hover:text-mad-bg transition-colors">
                <Dumbbell className="w-4 h-4" />
              </div>
              <div>
                <span className="font-spartan font-extrabold text-base tracking-wider text-white uppercase block">
                  {partner.name}
                </span>
                <span className="text-[10px] text-mad-gray uppercase tracking-widest block font-mono">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
