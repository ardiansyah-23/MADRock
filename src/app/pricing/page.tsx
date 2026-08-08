"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Zap, Sparkles, ArrowRight, ShieldCheck, HelpCircle, ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
      badge: "MOST POPULAR — TOP RESULTS",
      features: [
        "EVERYTHING IN STARTER",
        "Dedicated Head Coach Ahmad Hudzaifah",
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

  const faqs = [
    {
      q: "Is there a long-term contract or cancellation fee?",
      a: "No! All MADRock plans are month-to-month. You can pause or cancel your subscription anytime with one click from your athlete dashboard.",
    },
    {
      q: "How does the 1-on-1 coaching check-in work?",
      a: "Every week, you submit your lift video recordings and body weight log. Coach Ahmad Hudzaifah personally reviews your form biomechanics and adjusts your reps/macros accordingly.",
    },
    {
      q: "What if I am a beginner with no gym experience?",
      a: "Our programs cater to all levels from absolute beginner (0-1 yrs) to competitive strength athletes. Your custom plan starts at your current fitness baseline.",
    },
    {
      q: "Can I switch coaches or plans later?",
      a: "Yes! You can upgrade, downgrade, or request a plan transition anytime directly inside your member dashboard.",
    },
  ];

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeader
          badge="INVEST IN YOUR PEAK PHYSIQUE"
          title="TRANSPARENT MEMBERSHIP PLANS"
          subtitle="No contracts. Cancel anytime. Choose the level of science-based guidance you need to reach your goals."
        />

        {/* Billing Toggle */}
        <div className="flex justify-center">
          <div className="p-1.5 rounded-full bg-mad-surface border border-white/10 flex items-center gap-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase transition-all ${
                billingCycle === "monthly"
                  ? "bg-mad-lime text-mad-bg shadow-md font-extrabold"
                  : "text-mad-gray hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase transition-all flex items-center gap-2 ${
                billingCycle === "yearly"
                  ? "bg-mad-lime text-mad-bg shadow-md font-extrabold"
                  : "text-mad-gray hover:text-white"
              }`}
            >
              <span>Yearly (Save 20%)</span>
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px]">20% OFF</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
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

        {/* 100% Satisfaction Guarantee Bar */}
        <div className="rounded-3xl bg-mad-surface border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-mad-lime/10 border border-mad-lime/30 flex items-center justify-center text-mad-lime shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-spartan text-white uppercase">14-DAY MONEY-BACK GUARANTEE</h4>
              <p className="text-xs text-mad-gray">If you don't feel completely satisfied with your personalized protocol in the first 14 days, get a 100% full refund.</p>
            </div>
          </div>

          <Link
            href="/booking"
            className="px-6 py-3 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase whitespace-nowrap shadow-lg"
          >
            GET STARTED RISK-FREE
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto space-y-6 pt-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black font-spartan uppercase text-white">FREQUENTLY ASKED QUESTIONS</h3>
            <p className="text-xs text-mad-gray">Have questions about our pricing or coaching options?</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-mad-surface border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left font-bold text-sm text-white flex items-center justify-between gap-4 uppercase font-spartan"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-mad-lime transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-mad-gray leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
