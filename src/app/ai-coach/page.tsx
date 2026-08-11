"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  Sparkles,
  Bot,
  Send,
  Dumbbell,
  Utensils,
  Check,
  Copy,
  Calendar,
  RefreshCw,
} from "lucide-react";
import { useLanguage } from "@/components/common/LanguageProvider";

export default function AICoachPage() {
  const { lang, t } = useLanguage();
  const [activeMode, setActiveMode] = useState<"workout" | "meal" | "chat">("workout");

  // Chat state
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text:
        lang === "id"
          ? "Asisten AI MADRock aktif. Masukkan split latihan, pertanyaan progressive overload, atau target makro harian Anda untuk mendapatkan panduan biomekanika instan."
          : "MADRock AI Assistant active. Enter your training split, progressive overload questions, or daily macro targets to get instant biomechanics guidance.",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Generator states
  const [goal, setGoal] = useState("Muscle Building");
  const [experience, setExperience] = useState("Intermediate");
  const [dietaryApproach, setDietaryApproach] = useState("High Protein Standard");
  const [trainingDays, setTrainingDays] = useState(4);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Dynamic Workout Generator Helper Functions
  const generateDynamicWorkout = (days: number, userGoal: string, exp: string) => {
    const pool = [
      {
        dayName: lang === "id" ? "Tubuh Atas Kekuatan Berat" : "Upper Body Heavy Strength",
        focus: `Mechanical Tension • ${exp} Level`,
        exercises: [
          { name: "Barbell Bench Press", sets: "4 Sets x 6 Reps", rpe: "RPE 8", rest: "3 Mins" },
          { name: "Bent-Over Barbell Row", sets: "4 Sets x 8 Reps", rpe: "RPE 8", rest: "2 Mins" },
          { name: "Incline Dumbbell Press", sets: "3 Sets x 10 Reps", rpe: "RPE 9", rest: "2 Mins" },
          { name: "Wide-Grip Lat Pulldown", sets: "3 Sets x 12 Reps", rpe: "RPE 9", rest: "90 Secs" },
        ],
      },
      {
        dayName: lang === "id" ? "Tubuh Bawah Power & Squat" : "Lower Body Power & Drive",
        focus: "Quad & Posterior Chain Focus",
        exercises: [
          { name: "Barbell Back Squat", sets: "4 Sets x 6 Reps", rpe: "RPE 8.5", rest: "3 Mins" },
          { name: "Romanian Deadlift", sets: "3 Sets x 8 Reps", rpe: "RPE 8", rest: "2.5 Mins" },
          { name: "45-Degree Leg Press", sets: "3 Sets x 12 Reps", rpe: "RPE 9", rest: "90 Secs" },
          { name: "Standing Calf Raises", sets: "4 Sets x 15 Reps", rpe: "RPE 10", rest: "60 Secs" },
        ],
      },
      {
        dayName: lang === "id" ? "Pemulihan Aktif & Mobilitas" : "Active Recovery & CNS Reset",
        focus: "Joint Hydration & Mobility",
        exercises: [
          { name: "Incline Treadmill Walk", sets: "35 Mins", rpe: "RPE 5", rest: "N/A" },
          { name: "Full Body Dynamic Mobility Routine", sets: "20 Mins", rpe: "RPE 3", rest: "N/A" },
          { name: "Foam Rolling & Myofascial Release", sets: "15 Mins", rpe: "RPE 2", rest: "N/A" },
          { name: "Sauna / Hydrotherapy", sets: "15 Mins", rpe: "RPE 2", rest: "N/A" },
        ],
      },
      {
        dayName: lang === "id" ? "Push & Hipertrofi Bahu" : "Push & Deltoid Hypertrophy",
        focus: "Chest, Shoulders & Triceps",
        exercises: [
          { name: "Standing Military Press", sets: "4 Sets x 8 Reps", rpe: "RPE 8", rest: "2.5 Mins" },
          { name: "Weighted Bodyweight Dips", sets: "3 Sets x 10 Reps", rpe: "RPE 9", rest: "2 Mins" },
          { name: "Cable Lateral Raises", sets: "4 Sets x 15 Reps", rpe: "RPE 9.5", rest: "60 Secs" },
          { name: "Tricep Rope Pushdown", sets: "3 Sets x 12 Reps", rpe: "RPE 9", rest: "60 Secs" },
        ],
      },
      {
        dayName: lang === "id" ? "Pull & Volume Lengan" : "Pull & Arm Volume",
        focus: "Lats, Rhomboids & Biceps",
        exercises: [
          { name: "Weighted Pull-Ups", sets: "4 Sets x 6 Reps", rpe: "RPE 8.5", rest: "2.5 Mins" },
          { name: "Seated Cable Row (Neutral Grip)", sets: "3 Sets x 10 Reps", rpe: "RPE 8.5", rest: "2 Mins" },
          { name: "Incline Dumbbell Bicep Curl", sets: "4 Sets x 12 Reps", rpe: "RPE 9", rest: "60 Secs" },
          { name: "Face Pulls (Rear Delts)", sets: "4 Sets x 15 Reps", rpe: "RPE 9.5", rest: "60 Secs" },
        ],
      },
      {
        dayName: lang === "id" ? "Posterior Chain & Perut" : "Posterior Chain & Core Conditioning",
        focus: "Hamstrings, Glutes & Abs",
        exercises: [
          { name: "Conventional Deadlift", sets: "3 Sets x 5 Reps", rpe: "RPE 8.5", rest: "3.5 Mins" },
          { name: "Bulgarian Split Squats", sets: "3 Sets x 10 Reps/leg", rpe: "RPE 9", rest: "2 Mins" },
          { name: "Hanging Leg Raises", sets: "4 Sets x 15 Reps", rpe: "RPE 9.5", rest: "60 Secs" },
          { name: "Cable Woodchoppers & Rotation", sets: "3 Sets x 15 Reps", rpe: "RPE 9", rest: "60 Secs" },
        ],
      },
      {
        dayName: lang === "id" ? "Kondisikan Fisik Total" : "Full Body Metabolic Conditioning",
        focus: `High Density • ${userGoal}`,
        exercises: [
          { name: "Dumbbell Thrusters", sets: "4 Sets x 12 Reps", rpe: "RPE 9", rest: "90 Secs" },
          { name: "Kettlebell Swings", sets: "4 Sets x 20 Reps", rpe: "RPE 9", rest: "60 Secs" },
          { name: "Rowing Ergometer Sprints", sets: "5 Rounds x 250m", rpe: "RPE 9.5", rest: "90 Secs" },
          { name: "Farmer's Heavy Carries", sets: "4 Sets x 50 Meters", rpe: "RPE 9", rest: "60 Secs" },
        ],
      },
    ];

    return pool.slice(0, days).map((item, idx) => ({
      dayTitle: lang === "id" ? `Hari ${idx + 1}: ${item.dayName}` : `Day ${idx + 1}: ${item.dayName}`,
      focus: item.focus,
      exercises: item.exercises,
    }));
  };

  // Dynamic Meal Generator Helper Function
  const generateDynamicMeal = (userGoal: string, diet: string) => {
    return [
      {
        meal: lang === "id" ? "Makan 1: Sarapan Anabolik" : "Meal 1: Anabolic Breakfast",
        time: "08:00 AM",
        calories: userGoal === "Fat Loss" ? "420 kcal" : "620 kcal",
        macros: userGoal === "Fat Loss" ? "42g P • 35g C • 10g F" : "48g P • 75g C • 14g F",
        items: [
          diet === "Plant-Based Vegan" ? "Tofu Scramble with Spinach & Turmeric" : "4 Whole Eggs + 2 Egg Whites",
          "Organic Rolled Oats with Wild Berries",
          "Black Coffee or Organic Green Tea",
        ],
      },
      {
        meal: lang === "id" ? "Makan 2: Pre-Workout Fuel" : "Meal 2: Pre-Workout Fuel Bowl",
        time: "12:30 PM",
        calories: userGoal === "Fat Loss" ? "510 kcal" : "740 kcal",
        macros: userGoal === "Fat Loss" ? "50g P • 50g C • 9g F" : "55g P • 85g C • 16g F",
        items: [
          diet === "Plant-Based Vegan" ? "Seitan Steak Strips" : "200g Grilled Chicken Breast",
          "Jasmine Rice & Black Beans",
          "Steamed Broccoli & Extra Virgin Olive Oil",
        ],
      },
      {
        meal: lang === "id" ? "Makan 3: Post-Workout Recovery" : "Meal 3: Post-Workout Recovery",
        time: "05:30 PM",
        calories: userGoal === "Fat Loss" ? "480 kcal" : "680 kcal",
        macros: userGoal === "Fat Loss" ? "45g P • 45g C • 12g F" : "52g P • 70g C • 18g F",
        items: [
          diet === "Plant-Based Vegan" ? "Tempeh Grain Bowl with Avocado" : "200g Wild Salmon Fillet",
          "Baked Sweet Potato Mash",
          "MADRock Plant / Whey Protein Shake",
        ],
      },
      {
        meal: lang === "id" ? "Makan 4: Nutrisi Malam" : "Meal 4: Night Time Casein Reset",
        time: "09:30 PM",
        calories: "320 kcal",
        macros: "35g P • 15g C • 10g F",
        items: [
          diet === "Plant-Based Vegan" ? "Organic Soy Greek-style Yogurt" : "200g Low-Fat Greek Yogurt",
          "Raw Almonds & Dark Cocoa Shavings",
          "5g Creatine Monohydrate",
        ],
      },
    ];
  };

  // Protocols state
  const [workoutProtocol, setWorkoutProtocol] = useState<any[] | null>(() =>
    generateDynamicWorkout(4, "Muscle Building", "Intermediate")
  );

  const [mealProtocol, setMealProtocol] = useState<any[] | null>(() =>
    generateDynamicMeal("Muscle Building", "High Protein Standard")
  );

  const handleSendMessage = (customMsg?: string) => {
    const textToSend = customMsg || inputMessage;
    if (!textToSend.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: textToSend }]);
    if (!customMsg) setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      let reply =
        lang === "id"
          ? "Berdasarkan biomekanika progressive overload: Pastikan Anda mencatat beban dan repetisi setiap minggu. Pertahankan RPE di angka 8-9 untuk angkatan compound utama dan lakukan repetisi mendekati failure (RPE 9.5-10) pada latihan isolasi."
          : "Based on progressive overload biomechanics: Ensure you log load and reps weekly. Keep RPE at 8-9 for primary compound movements and take reps to near failure (RPE 9.5-10) on isolation exercises.";

      const lower = textToSend.toLowerCase();
      if (lower.includes("creatine") || lower.includes("kreatin")) {
        reply =
          lang === "id"
            ? "Protokol Kreatin Monohidrat: Konsumsi 5g setiap hari secara konsisten. Ini meningkatkan cadangan fosfokreatin otot, memberi energi ATP ekstra untuk repetisi eksplosif."
            : "Creatine Monohydrate protocol: Take 5g daily consistently. It increases intramuscular phosphocreatine stores, giving your muscles extra ATP energy for explosive reps.";
      } else if (lower.includes("protein")) {
        reply =
          lang === "id"
            ? "Target Protein Optimal: Targetkan 1.6g hingga 2.2g protein per kg berat badan setiap hari. Bagi asupan Anda menjadi 3-5 porsi makan berjarak 3-4 jam."
            : "Optimal Protein Target: Aim for 1.6g to 2.2g of protein per kg of bodyweight daily. Divide your intake into 3-5 meals spaced 3-4 hours apart.";
      } else if (lower.includes("split")) {
        reply =
          lang === "id"
            ? "Rekomendasi Split: Untuk 4 hari latihan per minggu, Upper/Lower split sangat ideal untuk kekuatan dan hipertrofi."
            : "Recommended Split: For 4 days/week training, an Upper/Lower split works best for strength and hypertrophy.";
      }

      setIsTyping(false);
      setMessages((prev) => [...prev, { sender: "ai", text: reply }]);
    }, 1000);
  };

  const handleGeneratePlan = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (activeMode === "workout") {
        setWorkoutProtocol(generateDynamicWorkout(trainingDays, goal, experience));
      } else {
        setMealProtocol(generateDynamicMeal(goal, dietaryApproach));
      }
    }, 1000);
  };

  const handleCopyProtocol = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickPrompts = [
    lang === "id" ? "Asupan Protein Optimal untuk Atlet 80kg" : "Optimal Protein Intake for 80kg Athlete",
    lang === "id" ? "Protokol Konsumsi Kreatin Terbaik" : "Best Creatine Timing & Loading Protocol",
    lang === "id" ? "Cara Mengatasi Stagnasi Bench Press" : "How to Fix Plateaus on Bench Press",
    lang === "id" ? "Upper/Lower vs Push/Pull/Legs Split" : "Upper/Lower vs Push/Pull/Legs Split",
  ];

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-slate-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={lang === "id" ? "AI COACH ATLET MADROCK" : "MADROCK AI ATHLETE COACH"}
          subtitle={
            lang === "id"
              ? "Buat split latihan periodisasi kustom, protokol nutrisi makro presisi, atau konsultasi 24/7 dengan algoritma AI kami."
              : "Generate custom periodized workout splits, precision macro meal protocols, or chat 24/7 with our AI fitness algorithms."
          }
        />

        {/* Mode Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { id: "workout", label: lang === "id" ? "AI Generator Latihan" : "AI Workout Generator", icon: Dumbbell },
            { id: "meal", label: lang === "id" ? "AI Meal Planner" : "AI Meal Planner", icon: Utensils },
            { id: "chat", label: lang === "id" ? "Chat AI Fitnes 24/7" : "24/7 AI Fitness Chat", icon: Bot },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id as any)}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-xs uppercase transition-all ${activeMode === mode.id
                ? "bg-mad-lime text-mad-bg font-extrabold"
                : "bg-mad-surface text-mad-gray border border-slate-900/10 hover:text-slate-900"
                }`}
            >
              <mode.icon className="w-4 h-4" />
              <span>{mode.label}</span>
            </button>
          ))}
        </div>

        {/* AI Chat Interface */}
        {activeMode === "chat" && (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Quick Prompt Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="px-4 py-2 rounded-xl bg-mad-surface border border-slate-900/10 text-xs text-mad-gray hover:text-mad-lime hover:border-mad-lime/40 transition-all font-mono"
                >
                  ⚡ {prompt}
                </button>
              ))}
            </div>

            <div className="rounded-3xl bg-mad-surface border border-slate-900/10 overflow-hidden flex flex-col h-[580px] shadow-2xl">
              {/* Header */}
              <div className="p-4 bg-mad-surface-2 border-b border-slate-900/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-mad-lime/10 border border-mad-lime/30 flex items-center justify-center text-mad-lime">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold font-spartan text-slate-900 uppercase text-base">MADRock AI Intelligence</h4>
                    <span className="text-[10px] font-mono text-mad-lime uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-mad-lime animate-pulse" />
                      Gemini Fitness Engine Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Messages Container */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className="flex items-start gap-3 max-w-xl">
                      {m.sender === "ai" && (
                        <div className="w-8 h-8 rounded-lg bg-mad-lime/10 border border-mad-lime/30 flex items-center justify-center text-mad-lime shrink-0">
                          <Bot className="w-4 h-4" />
                        </div>
                      )}

                      <div
                        className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${m.sender === "user"
                          ? "bg-mad-lime text-mad-bg font-semibold rounded-tr-none shadow-lg"
                          : "bg-mad-bg text-mad-gray border border-slate-900/10 rounded-tl-none"
                          }`}
                      >
                        {m.text}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-xs text-mad-lime font-mono animate-pulse">
                    <Bot className="w-4 h-4" />
                    <span>AI Coach is analyzing response...</span>
                  </div>
                )}
              </div>

              {/* Input Bar */}
              <div className="p-4 bg-mad-surface-2 border-t border-slate-900/10 flex gap-2">
                <input
                  type="text"
                  placeholder={
                    lang === "id"
                      ? "Tanyakan seputar split latihan, suplemen, atau pemulihan..."
                      : "Ask about workout split, protein powder, or recovery..."
                  }
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 bg-mad-bg border border-slate-900/10 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-mad-gray focus:outline-none focus:border-mad-lime font-mono"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="px-6 bg-mad-lime text-mad-bg rounded-xl font-extrabold text-xs uppercase hover:bg-mad-lime-hover transition-colors flex items-center justify-center gap-1"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* AI Generator Interface */}
        {(activeMode === "workout" || activeMode === "meal") && (
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Input Form Card */}
            <div className="rounded-3xl bg-mad-surface border border-slate-900/10 p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-900/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-mad-lime/10 border border-mad-lime/30 flex items-center justify-center text-mad-lime">
                    {activeMode === "workout" ? <Dumbbell className="w-5 h-5" /> : <Utensils className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase">
                      {activeMode === "workout"
                        ? (lang === "id" ? "GENERATOR PROTOKOL LATIHAN AI" : "WORKOUT PROTOCOL GENERATOR")
                        : (lang === "id" ? "GENERATOR RENCANA MAKAN AI" : "CUSTOM MEAL PLAN GENERATOR")}
                    </h3>
                    <span className="text-[10px] font-mono text-mad-gray">
                      {lang === "id" ? "PILIH PARAMETER ANDA" : "SELECT YOUR PARAMETERS"}
                    </span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-mad-lime/10 border border-mad-lime/30 text-mad-lime text-[10px] font-mono font-bold uppercase">
                  AI ALGORITHMS ACTIVE
                </span>
              </div>

              {/* Workout Parameters */}
              {activeMode === "workout" ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="text-xs font-mono text-mad-gray uppercase block mb-2">
                      {lang === "id" ? "Target Utama" : "Primary Goal"}
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-mad-lime font-mono"
                    >
                      <option value="Fat Loss">{lang === "id" ? "Fat Loss (Bakar Lemak)" : "Fat Loss"}</option>
                      <option value="Muscle Building">{lang === "id" ? "Otot & Hipertrofi" : "Muscle Building"}</option>
                      <option value="Body Recomposition">{lang === "id" ? "Rekomposisi Tubuh" : "Body Recomposition"}</option>
                      <option value="Strength Power">{lang === "id" ? "Kekuatan Puncak" : "Strength & Power"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-mad-gray uppercase block mb-2">
                      {lang === "id" ? "Tingkat Pengalaman" : "Experience Level"}
                    </label>
                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-mad-lime font-mono"
                    >
                      <option value="Beginner">{lang === "id" ? "Pemula (0-1 tahun)" : "Beginner (0-1 yrs)"}</option>
                      <option value="Intermediate">{lang === "id" ? "Menengah (1-3 tahun)" : "Intermediate (1-3 yrs)"}</option>
                      <option value="Advanced">{lang === "id" ? "Mahir (3+ tahun)" : "Advanced (3+ yrs)"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-mad-gray uppercase block mb-2">
                      {lang === "id" ? "Hari Latihan:" : "Training Days:"}{" "}
                      <strong className="text-mad-lime font-mono">
                        {trainingDays} {lang === "id" ? "Hari/Mgg" : "Days/Wk"}
                      </strong>
                    </label>
                    <div className="flex gap-1.5">
                      {[3, 4, 5, 6, 7].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setTrainingDays(num)}
                          className={`flex-1 py-2.5 rounded-xl text-xs font-bold font-mono transition-all ${trainingDays === num
                            ? "bg-mad-lime text-mad-bg font-extrabold shadow-md"
                            : "bg-mad-bg text-mad-gray border border-slate-900/10 hover:text-slate-900"
                            }`}
                        >
                          {num}D
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Meal Planner Parameters */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono text-mad-gray uppercase block mb-2">
                      {lang === "id" ? "Target Utama" : "Primary Goal"}
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-mad-lime font-mono"
                    >
                      <option value="Fat Loss">{lang === "id" ? "Fat Loss (Bakar Lemak)" : "Fat Loss"}</option>
                      <option value="Muscle Building">{lang === "id" ? "Otot & Hipertrofi" : "Muscle Building"}</option>
                      <option value="Body Recomposition">{lang === "id" ? "Rekomposisi Tubuh" : "Body Recomposition"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-mad-gray uppercase block mb-2">
                      {lang === "id" ? "Pendekatan Diet" : "Dietary Approach"}
                    </label>
                    <select
                      value={dietaryApproach}
                      onChange={(e) => setDietaryApproach(e.target.value)}
                      className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-mad-lime font-mono"
                    >
                      <option value="High Protein Standard">High Protein Standard</option>
                      <option value="Ketogenic Low-Carb">Ketogenic Low-Carb</option>
                      <option value="Flexible Macro (IIFYM)">Flexible Macro (IIFYM)</option>
                      <option value="Plant-Based Vegan">Plant-Based Vegan</option>
                    </select>
                  </div>
                </div>
              )}

              <button
                onClick={handleGeneratePlan}
                disabled={loading}
                className="w-full py-4.5 rounded-2xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider hover:bg-mad-lime-hover transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>{lang === "id" ? "MEMBENTUK PROTOKOL..." : "GENERATING PROTOCOL..."}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>
                      {activeMode === "workout"
                        ? lang === "id"
                          ? `PROSES PROTOKOL ${trainingDays} HARI LATIHAN`
                          : `GENERATE ${trainingDays}-DAY WORKOUT PROTOCOL`
                        : lang === "id"
                          ? "PROSES PROTOKOL NUTRISI SEKARANG"
                          : "GENERATE NUTRITION PROTOCOL NOW"}
                    </span>
                  </>
                )}
              </button>
            </div>

            {/* Structured Visual Workout Protocol Cards */}
            {activeMode === "workout" && workoutProtocol && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 border-b border-slate-900/10">
                  <div>
                    <h3 className="text-2xl font-black font-spartan text-slate-900 uppercase tracking-tight">
                      {lang === "id"
                        ? `CETAK BIRU LATIHAN AI (${workoutProtocol.length} HARI)`
                        : `GENERATED WORKOUT BLUEPRINT (${workoutProtocol.length} DAYS)`}
                    </h3>
                    <p className="text-xs text-mad-lime font-mono mt-1">
                      {goal} Protocol • {experience} Level • {workoutProtocol.length} Days Built
                    </p>
                  </div>

                  <button
                    onClick={handleCopyProtocol}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-mad-surface border border-slate-900/10 text-xs font-mono text-slate-900 hover:text-mad-lime hover:border-mad-lime/40 transition-all"
                  >
                    {copied ? <Check className="w-4 h-4 text-mad-lime" /> : <Copy className="w-4 h-4 text-mad-lime" />}
                    <span>
                      {copied
                        ? (lang === "id" ? "TERSALIN KE CLIPBOARD" : "COPIED TO CLIPBOARD")
                        : (lang === "id" ? "SALIN CETAK BIRU" : "COPY BLUEPRINT")}
                    </span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {workoutProtocol.map((dayBlock, dIdx) => (
                    <div
                      key={dIdx}
                      className="rounded-3xl bg-mad-surface border border-slate-900/10 p-6 space-y-4 hover:border-mad-lime/40 transition-all flex flex-col justify-start h-auto"
                    >
                      <div className="pb-3 border-b border-slate-900/10 flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <h4 className="font-black font-spartan text-lg text-slate-900 uppercase leading-snug">
                            {dayBlock.dayTitle}
                          </h4>
                          <span className="text-[11px] text-mad-lime font-mono uppercase block font-semibold">
                            {dayBlock.focus}
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-xl bg-mad-lime/10 border border-mad-lime/30 flex items-center justify-center text-mad-lime shrink-0">
                          <Calendar className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        {dayBlock.exercises.map((ex: any, eIdx: number) => (
                          <div
                            key={eIdx}
                            className="p-3.5 rounded-xl bg-mad-bg border border-slate-900/5 flex items-center justify-between text-xs"
                          >
                            <div className="space-y-0.5">
                              <strong className="text-slate-900 font-bold block">{ex.name}</strong>
                              <span className="text-mad-gray font-mono text-[11px]">{ex.sets}</span>
                            </div>
                            <div className="text-right shrink-0 ml-3">
                              <span className="px-2.5 py-0.5 rounded-md bg-mad-lime/10 border border-mad-lime/30 text-mad-lime font-mono text-[10px] font-bold block">
                                {ex.rpe}
                              </span>
                              <span className="text-[10px] text-mad-gray font-mono block mt-1">
                                Rest: {ex.rest}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Structured Visual Meal Plan Cards */}
            {activeMode === "meal" && mealProtocol && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 border-b border-slate-900/10">
                  <div>
                    <h3 className="text-2xl font-black font-spartan text-slate-900 uppercase tracking-tight">
                      {lang === "id" ? "PROTOKOL NUTRISI TERBENTUK" : "GENERATED NUTRITION PROTOCOL"}
                    </h3>
                    <p className="text-xs text-mad-lime font-mono mt-1">
                      Daily Macro & Meal Breakdown for {goal} ({dietaryApproach})
                    </p>
                  </div>

                  <button
                    onClick={handleCopyProtocol}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-mad-surface border border-slate-900/10 text-xs font-mono text-slate-900 hover:text-mad-lime hover:border-mad-lime/40 transition-all"
                  >
                    {copied ? <Check className="w-4 h-4 text-mad-lime" /> : <Copy className="w-4 h-4 text-mad-lime" />}
                    <span>
                      {copied
                        ? (lang === "id" ? "TERSALIN KE CLIPBOARD" : "COPIED TO CLIPBOARD")
                        : (lang === "id" ? "SALIN RENCANA MAKAN" : "COPY NUTRITION PLAN")}
                    </span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {mealProtocol.map((mBlock, mIdx) => (
                    <div
                      key={mIdx}
                      className="rounded-3xl bg-mad-surface border border-slate-900/10 p-6 space-y-4 hover:border-mad-lime/40 transition-all flex flex-col justify-start h-auto"
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-slate-900/10">
                        <div>
                          <h4 className="font-black font-spartan text-lg text-slate-900 uppercase">
                            {mBlock.meal}
                          </h4>
                          <span className="text-[10px] text-mad-lime font-mono uppercase block mt-1 font-semibold">
                            Target: {mBlock.calories} • {mBlock.macros}
                          </span>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg bg-mad-bg border border-slate-900/10 text-xs font-mono text-mad-gray shrink-0">
                          {mBlock.time}
                        </span>
                      </div>

                      <ul className="space-y-2 text-xs text-mad-gray">
                        {mBlock.items.map((item: string, iIdx: number) => (
                          <li key={iIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-mad-lime shrink-0" />
                            <span className="text-slate-900 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
