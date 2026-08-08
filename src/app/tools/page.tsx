"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Calculator, Flame, Scale, Droplet, Dumbbell, Zap, Activity } from "lucide-react";

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<
    "tdee" | "protein" | "macro" | "water" | "1rm" | "ideal-weight" | "body-fat"
  >("tdee");

  // String state inputs to prevent zero-display and leading zero bugs
  const [weightStr, setWeightStr] = useState("75");
  const [heightStr, setHeightStr] = useState("175");
  const [ageStr, setAgeStr] = useState("25");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [activity, setActivity] = useState(1.55);
  const [goal, setGoal] = useState<"cut" | "maintain" | "bulk">("cut");

  // 1RM specific
  const [liftWeightStr, setLiftWeightStr] = useState("100");
  const [repsStr, setRepsStr] = useState("5");

  // Parsed Numbers
  const weight = parseFloat(weightStr) || 0;
  const height = parseFloat(heightStr) || 0;
  const age = parseFloat(ageStr) || 0;
  const liftWeight = parseFloat(liftWeightStr) || 0;
  const reps = parseFloat(repsStr) || 0;

  // Clean Leading Zero Helper
  const handleCleanInput = (val: string, setter: (s: string) => void) => {
    // Strip leading zeros if followed by another digit (e.g. "058" -> "58")
    const cleaned = val.replace(/^0+(?=\d)/, "");
    setter(cleaned);
  };

  // Calculations
  const bmr =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

  const tdee = Math.round(bmr * activity);

  let targetCalories = tdee;
  if (goal === "cut") targetCalories = Math.round(tdee * 0.8);
  if (goal === "bulk") targetCalories = Math.round(tdee * 1.15);

  const proteinGrams = Math.round(weight * 2.2);
  const fatGrams = Math.round((targetCalories * 0.25) / 9);
  const carbGrams = Math.round((targetCalories - (proteinGrams * 4 + fatGrams * 9)) / 4);

  // Water (Liters)
  const waterLiters = (weight * 0.035 + (activity > 1.4 ? 0.8 : 0.4)).toFixed(1);

  // 1RM Epley Formula
  const oneRepMax = Math.round(liftWeight * (1 + reps / 30));

  // Ideal Weight (Hamwi Formula)
  const heightInchesOver5ft = Math.max(0, (height / 2.54) - 60);
  const idealWeightKg = Math.round(
    gender === "male"
      ? 48 + 2.7 * heightInchesOver5ft
      : 45.5 + 2.2 * heightInchesOver5ft
  );

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SCIENTIFIC FITNESS TOOLS"
          title="ACCURATE ATHLETIC CALCULATORS"
          subtitle="Precision formula tools built to optimize your diet, macro breakdown, and strength metrics."
        />

        {/* Tools Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "tdee", label: "TDEE & Calories", icon: Flame },
            { id: "protein", label: "Protein Target", icon: Zap },
            { id: "macro", label: "Macro Split", icon: Activity },
            { id: "water", label: "Water Intake", icon: Droplet },
            { id: "1rm", label: "1 Rep Max (1RM)", icon: Dumbbell },
            { id: "ideal-weight", label: "Ideal Weight", icon: Scale },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold uppercase transition-all ${
                activeTab === tab.id
                  ? "bg-mad-lime text-mad-bg shadow-lg shadow-mad-lime/20 font-extrabold"
                  : "bg-mad-surface text-mad-gray border border-white/10 hover:text-white"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Main Calculator Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-mad-surface border border-white/10 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Input Controls */}
            <div className="space-y-5">
              <h3 className="text-xl font-bold font-spartan text-white uppercase border-b border-white/10 pb-3">
                INPUT PARAMETERS
              </h3>

              {activeTab !== "1rm" ? (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Gender</label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value as any)}
                        className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Age</label>
                      <input
                        type="number"
                        value={ageStr}
                        placeholder="e.g. 25"
                        onChange={(e) => handleCleanInput(e.target.value, setAgeStr)}
                        className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Weight (KG)</label>
                      <input
                        type="number"
                        value={weightStr}
                        placeholder="e.g. 75"
                        onChange={(e) => handleCleanInput(e.target.value, setWeightStr)}
                        className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Height (CM)</label>
                      <input
                        type="number"
                        value={heightStr}
                        placeholder="e.g. 175"
                        onChange={(e) => handleCleanInput(e.target.value, setHeightStr)}
                        className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Physique Goal</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "cut", label: "Fat Loss" },
                        { id: "maintain", label: "Maintain" },
                        { id: "bulk", label: "Build Muscle" },
                      ].map((g) => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => setGoal(g.id as any)}
                          className={`py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                            goal === g.id
                              ? "bg-mad-lime text-mad-bg font-extrabold"
                              : "bg-mad-bg text-mad-gray border border-white/10 hover:text-white"
                          }`}
                        >
                          {g.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Lift Weight (KG)</label>
                    <input
                      type="number"
                      value={liftWeightStr}
                      placeholder="e.g. 100"
                      onChange={(e) => handleCleanInput(e.target.value, setLiftWeightStr)}
                      className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-mad-lime font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Repetitions Performed</label>
                    <input
                      type="number"
                      value={repsStr}
                      placeholder="e.g. 5"
                      onChange={(e) => handleCleanInput(e.target.value, setRepsStr)}
                      className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-mad-lime font-mono"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Calculated Output Box */}
            <div className="rounded-3xl bg-mad-bg border border-mad-lime/30 p-8 space-y-6 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-mad-lime/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs font-mono text-mad-lime uppercase tracking-widest block">
                CALCULATED ESTIMATE
              </span>

              {activeTab === "tdee" && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-mad-gray uppercase block">Daily Calorie Target</span>
                    <span className="text-5xl font-black font-spartan text-mad-lime">{targetCalories}</span>
                    <span className="text-xs text-mad-gray block mt-1">kcal / day</span>
                  </div>
                  <div className="pt-4 border-t border-white/10 text-xs text-mad-gray space-y-1">
                    <p>Base BMR: <strong className="text-white">{Math.round(bmr)} kcal</strong></p>
                    <p>TDEE Maintenance: <strong className="text-white">{tdee} kcal</strong></p>
                  </div>
                </div>
              )}

              {activeTab === "protein" && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-mad-gray uppercase block">Optimal Daily Protein</span>
                    <span className="text-5xl font-black font-spartan text-mad-lime">{proteinGrams}g</span>
                    <span className="text-xs text-mad-gray block mt-1">based on 2.2g per kg bodyweight</span>
                  </div>
                </div>
              )}

              {activeTab === "macro" && (
                <div className="grid grid-cols-3 gap-2 text-center pt-2">
                  <div className="p-3 rounded-2xl bg-mad-surface border border-white/10">
                    <span className="text-[10px] font-mono text-mad-lime uppercase block">Protein</span>
                    <span className="text-xl font-bold font-spartan text-white">{proteinGrams}g</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-mad-surface border border-white/10">
                    <span className="text-[10px] font-mono text-mad-lime uppercase block">Carbs</span>
                    <span className="text-xl font-bold font-spartan text-white">{carbGrams}g</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-mad-surface border border-white/10">
                    <span className="text-[10px] font-mono text-mad-lime uppercase block">Fat</span>
                    <span className="text-xl font-bold font-spartan text-white">{fatGrams}g</span>
                  </div>
                </div>
              )}

              {activeTab === "water" && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-mad-gray uppercase block">Hydration Target</span>
                    <span className="text-5xl font-black font-spartan text-sky-400">{waterLiters} L</span>
                    <span className="text-xs text-mad-gray block mt-1">Liters of water daily</span>
                  </div>
                </div>
              )}

              {activeTab === "1rm" && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-mad-gray uppercase block">Estimated 1 Rep Max</span>
                    <span className="text-5xl font-black font-spartan text-mad-lime">{oneRepMax} KG</span>
                    <span className="text-xs text-mad-gray block mt-1">Epley Formula Standard</span>
                  </div>
                </div>
              )}

              {activeTab === "ideal-weight" && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-mad-gray uppercase block">Est. Ideal Athletic Weight</span>
                    <span className="text-5xl font-black font-spartan text-mad-lime">{idealWeightKg} KG</span>
                    <span className="text-xs text-mad-gray block mt-1">Hamwi Athletic Standard</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
