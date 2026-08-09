"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Zap, Sparkles, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter Protocol",
      priceMonthly: 79,
      priceYearly: 65,
      description: "Essential science-backed training & nutrition tools for self-directed athletes.",
      features: [
        "Full Access to Workout Library (100+ exercises)",
        "Structured 12-Week Training Program",
        "Macro & Calorie Calculator Dashboard",
        "AI Workout & Meal Generator (10/mo)",
        "Community Discord Access",
      ],
      cta: "SELECT STARTER",
      highlighted: false,
    },
    {
      name: "Professional 1-on-1",
      priceMonthly: 199,
      priceYearly: 169,
      description: "Our flagship VIP 1-on-1 coaching program with direct coach accountability.",
      badge: "MOST POPULAR: TOP RESULTS",
      features: [
        "EVERYTHING IN STARTER",
        "Dedicated Personal Head Coach",
        "100% Custom Periodized Program",
        "Custom Weekly Macro & Meal Plan",
        "Weekly Video Form Analysis & Call",
        "Unlimited AI Coach Chat Access",
        "Visual Photo Progress Tracker",
        "Direct WhatsApp / In-App Messaging",
      ],
      cta: "START 1-ON-1 COACHING",
      highlighted: true,
    },
    {
      name: "Elite Performance",
      priceMonthly: 349,
      priceYearly: 299,
      description: "Complete concierge coaching including bloodwork analysis & competition prep.",
      features: [
        "EVERYTHING IN PROFESSIONAL",
        "Bi-Weekly 1-on-1 Zoom Coaching Sessions",
        "Bloodwork & Biofeedback Optimization",
        "Supplement & Recovery Protocols",
        "Priority 24/7 VIP Communication",
        "Free MADRock Merchandise & Gear",
      ],
      cta: "APPLY FOR ELITE",
      highlighted: false,
    },
  ];

  return (
    <section className="py-24 bg-mad-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="INVEST IN YOURSELF"
          title="TRANSPARENT MEMBERSHIP PLANS"
          subtitle="No contracts. Cancel anytime. Choose the level of guidance you need to reach your peak physique."
        />

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="p-1.5 rounded-full bg-mad-surface border border-white/10 flex items-center gap-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                billingCycle === "monthly"
                  ? "bg-mad-lime text-mad-bg shadow-md"
                  : "text-mad-gray hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase transition-all flex items-center gap-1.5 ${
                billingCycle === "yearly"
                  ? "bg-mad-lime text-mad-bg shadow-md"
                  : "text-mad-gray hover:text-white"
              }`}
            >
              <span>Yearly (Save 20%)</span>
              <span className="px-1.5 py-0.5 rounded-full bg-white/20 text-[9px]">20% OFF</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly;

            return (
              <ScrollReveal key={idx} delay={0.15 * idx}>
                <div
                  className={`rounded-3xl p-8 flex flex-col justify-between h-full relative transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-mad-surface border-2 border-mad-lime shadow-2xl shadow-mad-lime/15 lg:-translate-y-4"
                      : "bg-mad-surface/60 border border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-mad-lime text-mad-bg font-extrabold text-[10px] uppercase tracking-wider shadow-lg whitespace-nowrap">
                      {plan.badge}
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-black font-spartan text-white uppercase">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-mad-gray mt-1 leading-relaxed">
                        {plan.description}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-1 py-4 border-y border-white/10">
                      <span className="text-5xl font-black font-spartan text-white">
                        ${price}
                      </span>
                      <span className="text-xs font-mono text-mad-gray uppercase">/ month</span>
                    </div>

                    <ul className="space-y-3.5 text-xs text-mad-gray">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-mad-lime shrink-0 mt-0.5" />
                          <span className={feature.startsWith("EVERYTHING") ? "font-bold text-white uppercase" : ""}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <Link
                      href="/booking"
                      className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl font-extrabold text-xs uppercase tracking-wider transition-all ${
                        plan.highlighted
                          ? "bg-mad-lime text-mad-bg hover:bg-mad-lime-hover shadow-xl shadow-mad-lime/20"
                          : "bg-white/10 text-white hover:bg-mad-lime hover:text-mad-bg border border-white/15"
                      }`}
                    >
                      <span>{plan.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
