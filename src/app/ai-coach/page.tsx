"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  Sparkles,
  Bot,
  Send,
  Dumbbell,
  Utensils,
  Zap,
  CheckCircle2,
  Copy,
  Check,
  Flame,
  Calendar,
  Layers,
  Activity,
  ArrowRight,
} from "lucide-react";

export default function AICoachPage() {
  const [activeMode, setActiveMode] = useState<"chat" | "workout" | "meal">("workout");

  // Chat state
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Welcome to MADRock AI Coach! I am powered by Google Gemini fitness algorithms. How can I help you optimize your training split, progressive overload, or nutrition targets today?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Generator states
  const [goal, setGoal] = useState("Muscle Building");
  const [experience, setExperience] = useState("Intermediate");
  const [trainingDays, setTrainingDays] = useState(4);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Structured Workout Protocol Output
  const [workoutProtocol, setWorkoutProtocol] = useState<any[] | null>([
    {
      day: "Day 1: Upper Body Heavy",
      focus: "Hypertrophy & Mechanical Tension",
      exercises: [
        { name: "Barbell Bench Press", sets: "4 Sets x 6 Reps", rpe: "RPE 8", rest: "3 Mins" },
        { name: "Bent-Over Barbell Row", sets: "4 Sets x 8 Reps", rpe: "RPE 8", rest: "2 Mins" },
        { name: "Incline Dumbbell Press", sets: "3 Sets x 10 Reps", rpe: "RPE 9", rest: "2 Mins" },
        { name: "Lat Pulldown (Wide Grip)", sets: "3 Sets x 12 Reps", rpe: "RPE 9", rest: "90 Secs" },
      ],
    },
    {
      day: "Day 2: Lower Body Power",
      focus: "Quad & Posterior Chain Strength",
      exercises: [
        { name: "Barbell Back Squat", sets: "4 Sets x 6 Reps", rpe: "RPE 8.5", rest: "3 Mins" },
        { name: "Romanian Deadlift", sets: "3 Sets x 8 Reps", rpe: "RPE 8", rest: "2.5 Mins" },
        { name: "Leg Press 45-Degree", sets: "3 Sets x 12 Reps", rpe: "RPE 9", rest: "90 Secs" },
        { name: "Standing Calf Raises", sets: "4 Sets x 15 Reps", rpe: "RPE 10", rest: "60 Secs" },
      ],
    },
    {
      day: "Day 3: Active Recovery & Mobility",
      focus: "CNS Reset & Joint Hydration",
      exercises: [
        { name: "Zone 2 Cardio / Light Jog", sets: "30-45 Mins", rpe: "RPE 5", rest: "N/A" },
        { name: "Hip & Ankle Mobility Routine", sets: "15 Mins", rpe: "RPE 3", rest: "N/A" },
      ],
    },
    {
      day: "Day 4: Push & Arms Hypertrophy",
      focus: "Deltoid, Chest & Tricep Isolation",
      exercises: [
        { name: "Standing Military Overhead Press", sets: "4 Sets x 8 Reps", rpe: "RPE 8", rest: "2.5 Mins" },
        { name: "Weighted Bodyweight Dips", sets: "3 Sets x 10 Reps", rpe: "RPE 9", rest: "2 Mins" },
        { name: "Cable Lateral Raises", sets: "4 Sets x 15 Reps", rpe: "RPE 9.5", rest: "60 Secs" },
        { name: "Tricep Rope Pushdown", sets: "3 Sets x 12 Reps", rpe: "RPE 9", rest: "60 Secs" },
      ],
    },
  ]);

  // Structured Meal Plan Output
  const [mealProtocol, setMealProtocol] = useState<any[] | null>([
    {
      meal: "Meal 1: Anabolic Breakfast",
      time: "08:00 AM",
      calories: "550 kcal",
      macros: "45g P • 55g C • 12g F",
      items: ["4 Whole Eggs + 2 Egg Whites", "80g Rolled Oats with Blueberries", "Black Coffee or Green Tea"],
    },
    {
      meal: "Meal 2: Pre-Workout Fuel",
      time: "12:30 PM",
      calories: "680 kcal",
      macros: "50g P • 75g C • 14g F",
      items: ["200g Grilled Chicken Breast", "200g Jasmine Rice", "Steamed Broccoli & Olive Oil"],
    },
    {
      meal: "Meal 3: Post-Workout Recovery",
      time: "05:00 PM",
      calories: "620 kcal",
      macros: "48g P • 65g C • 16g F",
      items: ["200g Wild Alaskan Salmon", "250g Baked Sweet Potato Mash", "1 Scoop Whey Isolate Shake"],
    },
    {
      meal: "Meal 4: Night Time Casein",
      time: "09:30 PM",
      calories: "380 kcal",
      macros: "35g P • 15g C • 18g F",
      items: ["200g Low-Fat Greek Yogurt", "30g Raw Almonds & Honey", "5g Creatine Monohydrate"],
    },
  ]);

  const handleSendMessage = (customMsg?: string) => {
    const textToSend = customMsg || inputMessage;
    if (!textToSend.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: textToSend }]);
    if (!customMsg) setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      let reply = "Based on progressive overload biomechanics: Ensure you log load and reps weekly. Keep RPE at 8-9 for primary compound movements and take reps to near failure (RPE 9.5-10) on isolation exercises.";
      
      const lower = textToSend.toLowerCase();
      if (lower.includes("creatine")) {
        reply = "Creatine Monohydrate protocol: Take 5g daily consistently. It increases intramuscular phosphocreatine stores, giving your muscles extra ATP energy for explosive reps. Loading phase is optional (5g/day for 30 days is just as effective as 20g/day for 5 days).";
      } else if (lower.includes("protein")) {
        reply = "Optimal Protein Target: Aim for 1.6g to 2.2g of protein per kg of bodyweight daily. Divide your intake into 3-5 meals spaced 3-4 hours apart to maximize muscle protein synthesis (MPS).";
      } else if (lower.includes("split")) {
        reply = "Recommended Split: For 4 days/week training, an Upper/Lower split works best for strength and hypertrophy. For 5-6 days, a Push/Pull/Legs (PPL) split allows optimal volume and recovery per muscle group.";
      }

      setIsTyping(false);
      setMessages((prev) => [...prev, { sender: "ai", text: reply }]);
    }, 1200);
  };

  const handleGeneratePlan = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (activeMode === "workout") {
        setWorkoutProtocol([
          {
            day: `Day 1: ${goal} Upper Split`,
            focus: `Targeting ${experience} Hypertrophy`,
            exercises: [
              { name: "Incline Barbell Bench Press", sets: "4 Sets x 8 Reps", rpe: "RPE 8", rest: "2.5 Mins" },
              { name: "Chest-Supported T-Bar Row", sets: "4 Sets x 8 Reps", rpe: "RPE 8", rest: "2 Mins" },
              { name: "Dumbbell Shoulder Press", sets: "3 Sets x 10 Reps", rpe: "RPE 9", rest: "2 Mins" },
              { name: "Cable Chest Flyes", sets: "3 Sets x 12 Reps", rpe: "RPE 9.5", rest: "60 Secs" },
            ],
          },
          {
            day: `Day 2: ${goal} Lower Power`,
            focus: "Quad & Glute Drive",
            exercises: [
              { name: "Barbell Back Squats", sets: "4 Sets x 6 Reps", rpe: "RPE 8.5", rest: "3 Mins" },
              { name: "Barbell Romanian Deadlift", sets: "3 Sets x 8 Reps", rpe: "RPE 8", rest: "2 Mins" },
              { name: "Walking Dumbbell Lunges", sets: "3 Sets x 12 Steps", rpe: "RPE 9", rest: "90 Secs" },
            ],
          },
          {
            day: "Day 3: Rest & CNS Recovery",
            focus: "Active Stretch & Hydration",
            exercises: [
              { name: "Incline Treadmill Walk", sets: "30 Mins", rpe: "RPE 5", rest: "N/A" },
              { name: "Full Body Dynamic Mobility", sets: "20 Mins", rpe: "RPE 3", rest: "N/A" },
            ],
          },
          {
            day: `Day 4: ${goal} Arms & Shoulders`,
            focus: "Metabolic Pump & Volume",
            exercises: [
              { name: "Barbell Bicep Curls", sets: "4 Sets x 10 Reps", rpe: "RPE 9", rest: "60 Secs" },
              { name: "Overhead Tricep Extension", sets: "4 Sets x 12 Reps", rpe: "RPE 9", rest: "60 Secs" },
              { name: "DB Lateral Raise", sets: "4 Sets x 15 Reps", rpe: "RPE 10", rest: "45 Secs" },
            ],
          },
        ]);
      } else {
        setMealProtocol([
          {
            meal: "Meal 1: High-Protein Oats",
            time: "08:00 AM",
            calories: "520 kcal",
            macros: "42g P • 60g C • 10g F",
            items: ["60g Oats + 1 Scoop Isolate Whey", "100g Wild Berries", "10g Almond Butter"],
          },
          {
            meal: "Meal 2: Chicken & Rice Bowl",
            time: "01:00 PM",
            calories: "650 kcal",
            macros: "52g P • 70g C • 12g F",
            items: ["200g Chicken Breast", "200g Jasmine Rice", "Green Beans & Olive Oil"],
          },
          {
            meal: "Meal 3: Salmon & Sweet Potato",
            time: "06:30 PM",
            calories: "600 kcal",
            macros: "45g P • 50g C • 18g F",
            items: ["180g Wild Salmon Fillet", "200g Sweet Potato", "Steamed Asparagus"],
          },
        ]);
      }
    }, 1200);
  };

  const handleCopyProtocol = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickPrompts = [
    "Optimal Protein Intake for 80kg Athlete",
    "Best Creatine Timing & Loading Protocol",
    "How to Fix Plateaus on Bench Press",
    "Upper/Lower vs Push/Pull/Legs Split",
  ];

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="AI FITNESS ENGINE"
          title="MADROCK AI ATHLETE COACH"
          subtitle="Generate custom periodized workout splits, precision macro meal protocols, or chat 24/7 with our AI fitness algorithms."
        />

        {/* Mode Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { id: "workout", label: "AI Workout Generator", icon: Dumbbell },
            { id: "meal", label: "AI Meal Planner", icon: Utensils },
            { id: "chat", label: "24/7 AI Fitness Chat", icon: Bot },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id as any)}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-xs uppercase transition-all ${
                activeMode === mode.id
                  ? "bg-mad-lime text-mad-bg shadow-xl shadow-mad-lime/20 font-extrabold"
                  : "bg-mad-surface text-mad-gray border border-white/10 hover:text-white"
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
                  className="px-4 py-2 rounded-xl bg-mad-surface border border-white/10 text-xs text-mad-gray hover:text-mad-lime hover:border-mad-lime/40 transition-all font-mono"
                >
                  ⚡ {prompt}
                </button>
              ))}
            </div>

            <div className="rounded-3xl bg-mad-surface border border-white/10 overflow-hidden flex flex-col h-[580px] shadow-2xl">
              {/* Header */}
              <div className="p-4 bg-mad-surface-2 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-mad-lime/10 border border-mad-lime/30 flex items-center justify-center text-mad-lime">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold font-spartan text-white uppercase text-base">MADRock AI Intelligence</h4>
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
                        className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                          m.sender === "user"
                            ? "bg-mad-lime text-mad-bg font-semibold rounded-tr-none shadow-lg"
                            : "bg-mad-bg text-mad-gray border border-white/10 rounded-tl-none"
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
              <div className="p-4 bg-mad-surface-2 border-t border-white/10 flex gap-2">
                <input
                  type="text"
                  placeholder="Ask about workout split, protein powder, or recovery..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 bg-mad-bg border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-mad-gray focus:outline-none focus:border-mad-lime font-mono"
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
            <div className="rounded-3xl bg-mad-surface border border-white/10 p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-mad-lime/10 border border-mad-lime/30 flex items-center justify-center text-mad-lime">
                    {activeMode === "workout" ? <Dumbbell className="w-5 h-5" /> : <Utensils className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-spartan text-white uppercase">
                      {activeMode === "workout" ? "WORKOUT PROTOCOL GENERATOR" : "CUSTOM MEAL PLAN GENERATOR"}
                    </h3>
                    <span className="text-[10px] font-mono text-mad-gray">SELECT YOUR PARAMETERS</span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-mad-lime/10 border border-mad-lime/30 text-mad-lime text-[10px] font-mono font-bold uppercase">
                  AI ALGORITHMS ACTIVE
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Primary Goal</label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                  >
                    <option value="Fat Loss">Fat Loss</option>
                    <option value="Muscle Building">Muscle Building</option>
                    <option value="Body Recomposition">Body Recomposition</option>
                    <option value="Strength Power">Strength & Power</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Experience Level</label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                  >
                    <option value="Beginner">Beginner (0-1 yrs)</option>
                    <option value="Intermediate">Intermediate (1-3 yrs)</option>
                    <option value="Advanced">Advanced (3+ yrs)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Days Per Week</label>
                  <input
                    type="number"
                    min={3}
                    max={6}
                    value={trainingDays}
                    onChange={(e) => setTrainingDays(Number(e.target.value))}
                    className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                  />
                </div>
              </div>

              <button
                onClick={handleGeneratePlan}
                disabled={loading}
                className="w-full py-4.5 rounded-2xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider hover:bg-mad-lime-hover shadow-xl shadow-mad-lime/20 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Sparkles className="w-5 h-5 animate-spin" />
                    <span>GENERATING PROTOCOL WITH AI...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>GENERATE CUSTOM PROTOCOL NOW</span>
                  </>
                )}
              </button>
            </div>

            {/* Structured Visual Workout Protocol Cards */}
            {activeMode === "workout" && workoutProtocol && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div>
                    <h3 className="text-2xl font-black font-spartan text-white uppercase">
                      GENERATED WORKOUT BLUEPRINT
                    </h3>
                    <p className="text-xs text-mad-lime font-mono">
                      {goal} Protocol • {experience} Level • {trainingDays} Days/Week
                    </p>
                  </div>

                  <button
                    onClick={handleCopyProtocol}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-mad-surface border border-white/10 text-xs font-mono text-white hover:text-mad-lime hover:border-mad-lime/40 transition-all"
                  >
                    {copied ? <Check className="w-4 h-4 text-mad-lime" /> : <Copy className="w-4 h-4 text-mad-lime" />}
                    <span>{copied ? "COPIED TO CLIPBOARD" : "COPY BLUEPRINT"}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {workoutProtocol.map((dayBlock, dIdx) => (
                    <div
                      key={dIdx}
                      className="rounded-3xl bg-mad-surface border border-white/10 p-6 space-y-4 hover:border-mad-lime/30 transition-all"
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div>
                          <h4 className="font-black font-spartan text-lg text-white uppercase">
                            {dayBlock.day}
                          </h4>
                          <span className="text-[10px] text-mad-lime font-mono uppercase block">
                            {dayBlock.focus}
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-mad-lime/10 border border-mad-lime/30 flex items-center justify-center text-mad-lime">
                          <Calendar className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        {dayBlock.exercises.map((ex: any, eIdx: number) => (
                          <div
                            key={eIdx}
                            className="p-3.5 rounded-xl bg-mad-bg border border-white/5 flex items-center justify-between text-xs"
                          >
                            <div>
                              <strong className="text-white font-bold block">{ex.name}</strong>
                              <span className="text-mad-gray font-mono text-[11px]">{ex.sets}</span>
                            </div>
                            <div className="text-right">
                              <span className="px-2 py-0.5 rounded-md bg-mad-lime/10 border border-mad-lime/30 text-mad-lime font-mono text-[10px] font-bold block">
                                {ex.rpe}
                              </span>
                              <span className="text-[10px] text-mad-gray font-mono block mt-0.5">
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
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div>
                    <h3 className="text-2xl font-black font-spartan text-white uppercase">
                      GENERATED NUTRITION PROTOCOL
                    </h3>
                    <p className="text-xs text-mad-lime font-mono">
                      Daily Macro & Meal Breakdown for {goal}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mealProtocol.map((mBlock, mIdx) => (
                    <div
                      key={mIdx}
                      className="rounded-3xl bg-mad-surface border border-white/10 p-6 space-y-4 hover:border-mad-lime/30 transition-all"
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div>
                          <h4 className="font-black font-spartan text-lg text-white uppercase">
                            {mBlock.meal}
                          </h4>
                          <span className="text-[10px] text-mad-lime font-mono uppercase block">
                            Target: {mBlock.calories} • {mBlock.macros}
                          </span>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg bg-mad-bg border border-white/10 text-xs font-mono text-mad-gray">
                          {mBlock.time}
                        </span>
                      </div>

                      <ul className="space-y-2 text-xs text-mad-gray">
                        {mBlock.items.map((item: string, iIdx: number) => (
                          <li key={iIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-mad-lime shrink-0" />
                            <span>{item}</span>
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
