"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useLanguage } from "@/components/common/LanguageProvider";
import {
  Calculator,
  Flame,
  Scale,
  Droplet,
  Dumbbell,
  Zap,
  Activity,
  Heart,
  HeartPulse,
} from "lucide-react";

export default function ToolsPage() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<
    "tdee" | "protein" | "macro" | "water" | "1rm" | "ideal-weight" | "body-fat" | "hr-zones" | "bmi"
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

  // Body Fat specific
  const [waistStr, setWaistStr] = useState("82");
  const [neckStr, setNeckStr] = useState("38");
  const [hipStr, setHipStr] = useState("95");

  // Parsed Numbers
  const weight = parseFloat(weightStr) || 0;
  const height = parseFloat(heightStr) || 0;
  const age = parseFloat(ageStr) || 0;
  const liftWeight = parseFloat(liftWeightStr) || 0;
  const reps = parseFloat(repsStr) || 0;
  const waist = parseFloat(waistStr) || 0;
  const neck = parseFloat(neckStr) || 0;
  const hip = parseFloat(hipStr) || 0;

  // Validation Flags
  const isInputValid = weight > 0 && height > 0 && age > 0;
  const is1rmValid = liftWeight > 0 && reps > 0;
  const isBodyFatValid = height > 0 && waist > 0 && neck > 0 && (gender === "male" || hip > 0);

  // Clean Leading Zero Helper
  const handleCleanInput = (val: string, setter: (s: string) => void) => {
    const cleaned = val.replace(/^0+(?=\d)/, "");
    setter(cleaned);
  };

  // 1. TDEE & BMR Calculations
  const bmr = isInputValid
    ? (gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161)
    : 0;

  const tdee = isInputValid ? Math.round(bmr * activity) : 0;

  let targetCalories = tdee;
  if (isInputValid) {
    if (goal === "cut") targetCalories = Math.round(tdee * 0.8);
    if (goal === "bulk") targetCalories = Math.round(tdee * 1.15);
  }

  // 2. Protein Target
  const proteinGrams = isInputValid ? Math.round(weight * 2.2) : 0;

  // 3. Macro Split
  const fatGrams = isInputValid ? Math.round((targetCalories * 0.25) / 9) : 0;
  const carbGrams = isInputValid ? Math.round((targetCalories - (proteinGrams * 4 + fatGrams * 9)) / 4) : 0;

  // 4. Water Target (Liters)
  const waterLiters = isInputValid ? (weight * 0.035 + (activity > 1.4 ? 0.8 : 0.4)).toFixed(1) : "0.0";

  // 5. 1RM Epley Formula
  const oneRepMax = is1rmValid ? Math.round(liftWeight * (1 + reps / 30)) : 0;

  // 6. Ideal Weight (Hamwi Formula)
  const heightInchesOver5ft = Math.max(0, (height / 2.54) - 60);
  const idealWeightKg = height > 0
    ? Math.round(
        gender === "male"
          ? 48 + 2.7 * heightInchesOver5ft
          : 45.5 + 2.2 * heightInchesOver5ft
      )
    : 0;

  // 7. Body Fat % (US Navy Formula)
  let bodyFatPct = 0;
  if (isBodyFatValid && waist > neck) {
    if (gender === "male") {
      const denom = 1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height);
      bodyFatPct = Math.round(495 / denom - 450);
    } else {
      const denom = 1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height);
      bodyFatPct = Math.round(495 / denom - 450);
    }
  }
  bodyFatPct = Math.max(3, Math.min(50, bodyFatPct));

  // 8. Max Heart Rate & Training Zones (Tanaka Formula)
  const maxHR = age > 0 ? Math.round(208 - 0.7 * age) : 0;
  const zone2Min = Math.round(maxHR * 0.6);
  const zone2Max = Math.round(maxHR * 0.7);

  // 9. BMI & Health Category
  const heightM = height / 100;
  const bmi = isInputValid && heightM > 0 ? (weight / (heightM * heightM)).toFixed(1) : "0.0";

  const getBmiCategory = (val: number) => {
    if (val <= 0) return lang === "id" ? "Masukkan Parameter" : "Enter Parameters";
    if (val < 18.5) return lang === "id" ? "Kekurangan Berat Badan" : "Underweight";
    if (val < 25) return lang === "id" ? "Berat Badan Ideal Optimal" : "Optimal Healthy Weight";
    if (val < 30) return lang === "id" ? "Kelebihan Berat Badan" : "Overweight";
    return lang === "id" ? "Obesitas" : "Obese";
  };

  const toolsList = [
    { id: "tdee", label: lang === "id" ? "1. TDEE & Kalori" : "1. TDEE & Calories", icon: Flame },
    { id: "protein", label: lang === "id" ? "2. Target Protein" : "2. Protein Target", icon: Zap },
    { id: "macro", label: lang === "id" ? "3. Pembagian Makro" : "3. Macro Split", icon: Activity },
    { id: "water", label: lang === "id" ? "4. Asupan Air" : "4. Water Intake", icon: Droplet },
    { id: "1rm", label: lang === "id" ? "5. Estimasi 1RM" : "5. 1 Rep Max (1RM)", icon: Dumbbell },
    { id: "ideal-weight", label: lang === "id" ? "6. Berat Ideal" : "6. Ideal Weight", icon: Scale },
    { id: "body-fat", label: lang === "id" ? "7. Kadar Lemak %" : "7. Body Fat %", icon: HeartPulse },
    { id: "hr-zones", label: lang === "id" ? "8. Zona Detak Jantung" : "8. Heart Rate Zones", icon: Heart },
    { id: "bmi", label: lang === "id" ? "9. Skor BMI" : "9. BMI & Risk Score", icon: Calculator },
  ];

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t("tools_header_badge")}
          title={t("tools_header_title")}
          subtitle={t("tools_header_subtitle")}
        />

        {/* Tools Tabs - Exactly 9 Interactive Calculators */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {toolsList.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs font-bold uppercase transition-all ${
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
                {lang === "id" ? "PARAMETER INPUT" : "INPUT PARAMETERS"}
              </h3>

              {activeTab === "1rm" ? (
                <>
                  <div>
                    <label className="text-xs font-mono text-mad-gray uppercase block mb-1">
                      {lang === "id" ? "Beban Angkatan (KG)" : "Lift Weight (KG)"}
                    </label>
                    <input
                      type="number"
                      value={liftWeightStr}
                      placeholder="e.g. 100"
                      onChange={(e) => handleCleanInput(e.target.value, setLiftWeightStr)}
                      className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-mad-lime font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-mad-gray uppercase block mb-1">
                      {lang === "id" ? "Jumlah Repetisi" : "Repetitions Performed"}
                    </label>
                    <input
                      type="number"
                      value={repsStr}
                      placeholder="e.g. 5"
                      onChange={(e) => handleCleanInput(e.target.value, setRepsStr)}
                      className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-mad-lime font-mono"
                    />
                  </div>
                </>
              ) : activeTab === "body-fat" ? (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-mono text-mad-gray uppercase block mb-1">
                        {lang === "id" ? "Jenis Kelamin" : "Gender"}
                      </label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value as any)}
                        className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                      >
                        <option value="male">{lang === "id" ? "Pria" : "Male"}</option>
                        <option value="female">{lang === "id" ? "Wanita" : "Female"}</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-mad-gray uppercase block mb-1">
                        {lang === "id" ? "Tinggi (CM)" : "Height (CM)"}
                      </label>
                      <input
                        type="number"
                        value={heightStr}
                        placeholder="e.g. 175"
                        onChange={(e) => handleCleanInput(e.target.value, setHeightStr)}
                        className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-mono text-mad-gray uppercase block mb-1">
                        {lang === "id" ? "Lingkar Pinggang (CM)" : "Waist (CM)"}
                      </label>
                      <input
                        type="number"
                        value={waistStr}
                        placeholder="e.g. 82"
                        onChange={(e) => handleCleanInput(e.target.value, setWaistStr)}
                        className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-mad-gray uppercase block mb-1">
                        {lang === "id" ? "Lingkar Leher (CM)" : "Neck (CM)"}
                      </label>
                      <input
                        type="number"
                        value={neckStr}
                        placeholder="e.g. 38"
                        onChange={(e) => handleCleanInput(e.target.value, setNeckStr)}
                        className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                      />
                    </div>
                  </div>

                  {gender === "female" && (
                    <div>
                      <label className="text-xs font-mono text-mad-gray uppercase block mb-1">
                        {lang === "id" ? "Lingkar Pinggul (CM)" : "Hip (CM)"}
                      </label>
                      <input
                        type="number"
                        value={hipStr}
                        placeholder="e.g. 95"
                        onChange={(e) => handleCleanInput(e.target.value, setHipStr)}
                        className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                      />
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-mono text-mad-gray uppercase block mb-1">
                        {lang === "id" ? "Jenis Kelamin" : "Gender"}
                      </label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value as any)}
                        className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                      >
                        <option value="male">{lang === "id" ? "Pria" : "Male"}</option>
                        <option value="female">{lang === "id" ? "Wanita" : "Female"}</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-mad-gray uppercase block mb-1">
                        {lang === "id" ? "Usia (Tahun)" : "Age"}
                      </label>
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
                      <label className="text-xs font-mono text-mad-gray uppercase block mb-1">
                        {lang === "id" ? "Berat Badan (KG)" : "Weight (KG)"}
                      </label>
                      <input
                        type="number"
                        value={weightStr}
                        placeholder="e.g. 75"
                        onChange={(e) => handleCleanInput(e.target.value, setWeightStr)}
                        className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-mad-gray uppercase block mb-1">
                        {lang === "id" ? "Tinggi Badan (CM)" : "Height (CM)"}
                      </label>
                      <input
                        type="number"
                        value={heightStr}
                        placeholder="e.g. 175"
                        onChange={(e) => handleCleanInput(e.target.value, setHeightStr)}
                        className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                      />
                    </div>
                  </div>

                  {activeTab !== "hr-zones" && activeTab !== "bmi" && (
                    <div>
                      <label className="text-xs font-mono text-mad-gray uppercase block mb-1">
                        {lang === "id" ? "Target Bentuk Tubuh" : "Physique Goal"}
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: "cut", label: lang === "id" ? "Bakar Lemak" : "Fat Loss" },
                          { id: "maintain", label: lang === "id" ? "Stabil" : "Maintain" },
                          { id: "bulk", label: lang === "id" ? "Bentuk Otot" : "Build Muscle" },
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
                  )}
                </>
              )}
            </div>

            {/* Calculated Output Box */}
            <div className="rounded-3xl bg-mad-bg border border-mad-lime/30 p-8 space-y-6 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-mad-lime/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs font-mono text-mad-lime uppercase tracking-widest block">
                {lang === "id" ? "ESTIMASI KALKULASI SAINS" : "CALCULATED ESTIMATE"}
              </span>

              {activeTab === "tdee" && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-mad-gray uppercase block">
                      {lang === "id" ? "Target Kalori Harian" : "Daily Calorie Target"}
                    </span>
                    <span className="text-5xl font-black font-spartan text-mad-lime">{targetCalories}</span>
                    <span className="text-xs text-mad-gray block mt-1">kcal / {lang === "id" ? "hari" : "day"}</span>
                  </div>
                  <div className="pt-4 border-t border-white/10 text-xs text-mad-gray space-y-1">
                    <p>BMR {lang === "id" ? "Dasar:" : "Base:"} <strong className="text-white">{Math.round(bmr)} kcal</strong></p>
                    <p>TDEE {lang === "id" ? "Maintenance:" : "Maintenance:"} <strong className="text-white">{tdee} kcal</strong></p>
                  </div>
                </div>
              )}

              {activeTab === "protein" && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-mad-gray uppercase block">
                      {lang === "id" ? "Protein Harian Optimal" : "Optimal Daily Protein"}
                    </span>
                    <span className="text-5xl font-black font-spartan text-mad-lime">{proteinGrams}g</span>
                    <span className="text-xs text-mad-gray block mt-1">
                      {lang === "id" ? "berdasarkan 2.2g per kg berat badan" : "based on 2.2g per kg bodyweight"}
                    </span>
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
                    <span className="text-[10px] font-mono text-mad-lime uppercase block">
                      {lang === "id" ? "Karbo" : "Carbs"}
                    </span>
                    <span className="text-xl font-bold font-spartan text-white">{carbGrams}g</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-mad-surface border border-white/10">
                    <span className="text-[10px] font-mono text-mad-lime uppercase block">
                      {lang === "id" ? "Lemak" : "Fat"}
                    </span>
                    <span className="text-xl font-bold font-spartan text-white">{fatGrams}g</span>
                  </div>
                </div>
              )}

              {activeTab === "water" && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-mad-gray uppercase block">
                      {lang === "id" ? "Target Hidrasi Air" : "Hydration Target"}
                    </span>
                    <span className="text-5xl font-black font-spartan text-sky-400">{waterLiters} L</span>
                    <span className="text-xs text-mad-gray block mt-1">
                      {lang === "id" ? "Liter air per hari" : "Liters of water daily"}
                    </span>
                  </div>
                </div>
              )}

              {activeTab === "1rm" && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-mad-gray uppercase block">
                      {lang === "id" ? "Estimasi 1 Rep Max" : "Estimated 1 Rep Max"}
                    </span>
                    <span className="text-5xl font-black font-spartan text-mad-lime">{oneRepMax} KG</span>
                    <span className="text-xs text-mad-gray block mt-1">
                      {lang === "id" ? "Formula Epley Standar" : "Epley Formula Standard"}
                    </span>
                  </div>
                  <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-[11px] text-mad-gray">
                    <p>80% 1RM: <strong className="text-white">{Math.round(oneRepMax * 0.8)}kg</strong></p>
                    <p>85% 1RM: <strong className="text-white">{Math.round(oneRepMax * 0.85)}kg</strong></p>
                    <p>90% 1RM: <strong className="text-white">{Math.round(oneRepMax * 0.9)}kg</strong></p>
                  </div>
                </div>
              )}

              {activeTab === "ideal-weight" && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-mad-gray uppercase block">
                      {lang === "id" ? "Estimasi Berat Ideal Atletis" : "Est. Ideal Athletic Weight"}
                    </span>
                    <span className="text-5xl font-black font-spartan text-mad-lime">{idealWeightKg} KG</span>
                    <span className="text-xs text-mad-gray block mt-1">
                      {lang === "id" ? "Standar Atletis Hamwi" : "Hamwi Athletic Standard"}
                    </span>
                  </div>
                </div>
              )}

              {activeTab === "body-fat" && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-mad-gray uppercase block">
                      {lang === "id" ? "Estimasi Kadar Lemak %" : "Estimated Body Fat %"}
                    </span>
                    <span className="text-5xl font-black font-spartan text-mad-lime">{bodyFatPct}%</span>
                    <span className="text-xs text-mad-gray block mt-1">
                      {lang === "id" ? "Metode US Navy Algorithm" : "US Navy Method Algorithm"}
                    </span>
                  </div>
                </div>
              )}

              {activeTab === "hr-zones" && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-mad-gray uppercase block">
                      {lang === "id" ? "Estimasi Detak Jantung Max" : "Estimated Max Heart Rate"}
                    </span>
                    <span className="text-5xl font-black font-spartan text-rose-500">{maxHR} BPM</span>
                    <span className="text-xs text-mad-gray block mt-1">
                      {lang === "id" ? "Rentang Aerobik Zona 2:" : "Zone 2 Aerobic Range:"}{" "}
                      <strong className="text-mad-lime font-mono">{zone2Min} - {zone2Max} BPM</strong>
                    </span>
                  </div>
                </div>
              )}

              {activeTab === "bmi" && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-mad-gray uppercase block">
                      {lang === "id" ? "Indeks Massa Tubuh (BMI)" : "Body Mass Index (BMI)"}
                    </span>
                    <span className="text-5xl font-black font-spartan text-mad-lime">{bmi}</span>
                    <span className="text-xs text-mad-gray block mt-1">
                      {lang === "id" ? "Kategori:" : "Category:"}{" "}
                      <strong className="text-white">{getBmiCategory(parseFloat(bmi))}</strong>
                    </span>
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
