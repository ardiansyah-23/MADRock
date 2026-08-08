"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, Zap, Scale, Flame, Activity } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export function FitnessToolsSection() {
  // Mini BMI & Calorie Calculator state - Using String State to avoid leading zero bugs
  const [gender, setGender] = useState<"male" | "female">("male");
  const [weightStr, setWeightStr] = useState("75");
  const [heightStr, setHeightStr] = useState("175");
  const [ageStr, setAgeStr] = useState("25");
  const [activity, setActivity] = useState<number>(1.55);

  const weight = parseFloat(weightStr) || 0;
  const height = parseFloat(heightStr) || 0;
  const age = parseFloat(ageStr) || 0;

  const handleCleanInput = (val: string, setter: (s: string) => void) => {
    const cleaned = val.replace(/^0+(?=\d)/, "");
    setter(cleaned);
  };

  // Calculations
  const heightM = height / 100;
  const bmi = heightM > 0 ? weight / (heightM * heightM) : 0;

  // BMR (Mifflin-St Jeor)
  const bmr =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

  const tdee = Math.round(bmr * activity);
  const protein = Math.round(weight * 2.2);

  const getBmiCategory = (bmiValue: number) => {
    if (bmiValue < 18.5) return { category: "Underweight", color: "text-amber-400" };
    if (bmiValue < 25) return { category: "Optimal Healthy Weight", color: "text-mad-lime" };
    if (bmiValue < 30) return { category: "Overweight", color: "text-amber-400" };
    return { category: "Obese", color: "text-rose-500" };
  };

  const bmiData = getBmiCategory(bmi);

  return (
    <section className="py-24 bg-mad-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FREE FITNESS CALCULATORS"
          title="CALCULATE YOUR NUMBERS"
          subtitle="Instant precision metrics for BMI, TDEE maintenance calories, and daily protein targets."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Calculator Form */}
          <div className="lg:col-span-7 rounded-3xl bg-mad-bg border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-mad-lime" />
                <span className="font-spartan font-bold text-white uppercase text-lg">
                  QUICK METABOLIC ESTIMATOR
                </span>
              </div>
              <span className="text-xs text-mad-gray font-mono">SCIENTIFIC ALGORITHMS</span>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Gender */}
              <div>
                <label className="text-xs font-mono text-mad-gray uppercase block mb-1.5">Gender</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setGender("male")}
                    className={`py-2.5 rounded-xl text-xs font-bold uppercase transition-all ${
                      gender === "male"
                        ? "bg-mad-lime text-mad-bg font-extrabold"
                        : "bg-mad-surface text-mad-gray border border-white/10"
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender("female")}
                    className={`py-2.5 rounded-xl text-xs font-bold uppercase transition-all ${
                      gender === "female"
                        ? "bg-mad-lime text-mad-bg font-extrabold"
                        : "bg-mad-surface text-mad-gray border border-white/10"
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="text-xs font-mono text-mad-gray uppercase block mb-1.5">Age (Years)</label>
                <input
                  type="number"
                  value={ageStr}
                  placeholder="e.g. 25"
                  onChange={(e) => handleCleanInput(e.target.value, setAgeStr)}
                  className="w-full bg-mad-surface border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                />
              </div>

              {/* Weight */}
              <div>
                <label className="text-xs font-mono text-mad-gray uppercase block mb-1.5">Weight (KG)</label>
                <input
                  type="number"
                  value={weightStr}
                  placeholder="e.g. 75"
                  onChange={(e) => handleCleanInput(e.target.value, setWeightStr)}
                  className="w-full bg-mad-surface border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                />
              </div>

              {/* Height */}
              <div>
                <label className="text-xs font-mono text-mad-gray uppercase block mb-1.5">Height (CM)</label>
                <input
                  type="number"
                  value={heightStr}
                  placeholder="e.g. 175"
                  onChange={(e) => handleCleanInput(e.target.value, setHeightStr)}
                  className="w-full bg-mad-surface border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                />
              </div>
            </div>

            {/* Activity Level */}
            <div>
              <label className="text-xs font-mono text-mad-gray uppercase block mb-1.5">Activity Level</label>
              <select
                value={activity}
                onChange={(e) => setActivity(Number(e.target.value))}
                className="w-full bg-mad-surface border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
              >
                <option value={1.2}>Sedentary (Office Job)</option>
                <option value={1.375}>Lightly Active (1-3 days/wk)</option>
                <option value={1.55}>Moderately Active (3-5 days/wk)</option>
                <option value={1.725}>Very Active (6-7 days hard training)</option>
              </select>
            </div>
          </div>

          {/* Live Calculated Results */}
          <div className="lg:col-span-5 rounded-3xl bg-mad-bg border border-mad-lime/30 p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-mad-lime/10 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-xl font-bold font-spartan text-white uppercase border-b border-white/10 pb-3">
              YOUR METABOLIC PROFILE
            </h3>

            <div className="space-y-4">
              {/* BMI Card */}
              <div className="p-4 rounded-2xl bg-mad-surface border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-mad-gray font-mono block">BODY MASS INDEX (BMI)</span>
                  <span className={`text-xs font-bold ${bmiData.color}`}>{bmiData.category}</span>
                </div>
                <span className="text-3xl font-black font-spartan text-white">{bmi.toFixed(1)}</span>
              </div>

              {/* TDEE Card */}
              <div className="p-4 rounded-2xl bg-mad-surface border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-mad-gray font-mono block">DAILY CALORIES (TDEE)</span>
                  <span className="text-xs text-mad-lime font-bold">Maintenance Target</span>
                </div>
                <span className="text-3xl font-black font-spartan text-mad-lime">{tdee} kcal</span>
              </div>

              {/* Protein Target */}
              <div className="p-4 rounded-2xl bg-mad-surface border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-mad-gray font-mono block">DAILY PROTEIN TARGET</span>
                  <span className="text-xs text-mad-gray">Optimal Muscle Synthesis</span>
                </div>
                <span className="text-3xl font-black font-spartan text-white">{protein}g</span>
              </div>
            </div>

            <Link
              href="/tools"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider shadow-lg hover:bg-mad-lime-hover transition-all"
            >
              <span>ACCESS ALL 9 CALCULATORS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
