"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does MADRock 1-on-1 coaching work?",
      a: "Upon signing up, you will be assigned a dedicated Head Coach. We conduct an initial video consultation to review your current training, diet, injury history, and goals. You get a customized workout program, macro targets, and weekly video check-ins.",
    },
    {
      q: "Is MADRock suitable for beginners?",
      a: "Yes! Every protocol is periodized for your exact training experience. Beginners focus on mastering fundamental compound lifting biomechanics and building sustainable nutrition habits.",
    },
    {
      q: "What equipment do I need for the programs?",
      a: "We offer programs for full commercial gym access, powerlifting home gyms, and minimal dumbbell/bodyweight setups.",
    },
    {
      q: "How are meal plans customized?",
      a: "Your coach calculates your precise BMR, TDEE, and macro breakdown (Protein, Carbs, Fats) based on your goal (Fat Loss, Hypertrophy, Recomp). You also get access to our AI Meal Planner.",
    },
    {
      q: "Can I cancel my membership anytime?",
      a: "Yes. All membership plans are non-contract and flexible. You can pause or cancel anytime directly from your member dashboard.",
    },
  ];

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FREQUENTLY ASKED QUESTIONS"
          title="EVERYTHING YOU NEED TO KNOW"
          subtitle="Clear answers regarding our coaching protocols, membership terms, and training approach."
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="rounded-2xl bg-mad-surface border border-white/10 overflow-hidden">
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white uppercase font-spartan text-lg hover:text-mad-lime transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-mad-lime shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-mad-lime transition-transform duration-300 ${
                      openIdx === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIdx === idx && (
                  <div className="px-6 pb-6 text-sm text-mad-gray leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
