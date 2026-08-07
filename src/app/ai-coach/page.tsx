"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Sparkles, Bot, Send, Dumbbell, Utensils, Zap, CheckCircle2 } from "lucide-react";

export default function AICoachPage() {
  const [activeMode, setActiveMode] = useState<"chat" | "workout" | "meal">("chat");

  // Chat state
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Welcome to MADRock AI Coach! I am powered by Google Gemini fitness algorithms. How can I help you optimize your training, nutrition, or recovery today?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  // Generator states
  const [goal, setGoal] = useState("Muscle Building");
  const [experience, setExperience] = useState("Intermediate");
  const [trainingDays, setTrainingDays] = useState(4);
  const [generatedPlan, setGeneratedPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    const userMsg = inputMessage;
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInputMessage("");

    // Simulated AI response
    setTimeout(() => {
      let reply = "Based on progressive overload principles: Focus on 8-12 rep ranges with RPE 8-9 on compound lifts like squats and incline presses. Make sure your post-workout meal contains 35g of whey/protein and 50g fast-digesting carbs.";
      if (userMsg.toLowerCase().includes("creatine")) {
        reply = "Creatine Monohydrate is one of the most thoroughly researched supplements. Take 5g daily consistently at any time. It increases intramuscular phosphocreatine stores, boosting ATP production for explosive power and cell hydration.";
      }
      setMessages((prev) => [...prev, { sender: "ai", text: reply }]);
    }, 1000);
  };

  const handleGeneratePlan = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGeneratedPlan(
        `### MADRock ${trainingDays}-Day Custom Protocol (${goal})
- **Day 1: Upper Body Heavy** (Bench Press 4x6, Bent-Over Rows 4x8, Incline DB Press 3x10)
- **Day 2: Lower Body Power** (Squats 4x6, Romanian Deadlifts 3x8, Leg Press 3x12)
- **Day 3: Rest & Active Recovery** (Light mobility & 10k steps)
- **Day 4: Push / Hypertrophy** (Overhead Press 4x8, Dips 3xAMRAP, Cable Flyes 3x15)
- **Day 5: Pull / Arms** (Weighted Pull-ups 4x6, Cable Rows 3x10, Incline DB Curls 4x12)`
      );
    }, 1500);
  };

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ARTIFICIAL INTELLIGENCE"
          title="MADROCK AI ATHLETE COACH"
          subtitle="Generate instant custom workouts, macro meal plans, or chat 24/7 with our trained fitness AI."
        />

        {/* Mode Selector */}
        <div className="flex justify-center gap-3 mb-10">
          {[
            { id: "chat", label: "24/7 AI Coach Chat", icon: Bot },
            { id: "workout", label: "AI Workout Generator", icon: Dumbbell },
            { id: "meal", label: "AI Meal Generator", icon: Utensils },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id as any)}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-xs uppercase transition-all ${
                activeMode === mode.id
                  ? "bg-mad-lime text-mad-bg shadow-xl shadow-mad-lime/20"
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
          <div className="max-w-3xl mx-auto rounded-3xl bg-mad-surface border border-white/10 overflow-hidden flex flex-col h-[580px] shadow-2xl">
            {/* Header */}
            <div className="p-4 bg-mad-surface-2 border-b border-white/10 flex items-center gap-3">
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

            {/* Messages */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-lg p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      m.sender === "user"
                        ? "bg-mad-lime text-mad-bg font-medium"
                        : "bg-mad-bg text-mad-gray border border-white/10"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-mad-surface-2 border-t border-white/10 flex gap-2">
              <input
                type="text"
                placeholder="Ask about workout split, protein powder, or recovery..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 bg-mad-bg border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-mad-gray focus:outline-none focus:border-mad-lime"
              />
              <button
                onClick={handleSendMessage}
                className="px-5 bg-mad-lime text-mad-bg rounded-xl font-bold hover:bg-mad-lime-hover transition-colors flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* AI Generator Interface */}
        {(activeMode === "workout" || activeMode === "meal") && (
          <div className="max-w-3xl mx-auto rounded-3xl bg-mad-surface border border-white/10 p-8 space-y-6">
            <h3 className="text-xl font-bold font-spartan text-white uppercase border-b border-white/10 pb-3">
              {activeMode === "workout" ? "WORKOUT PROTOCOL GENERATOR" : "CUSTOM MEAL PLAN GENERATOR"}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Primary Goal</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime"
                >
                  <option value="Fat Loss">Fat Loss</option>
                  <option value="Muscle Building">Muscle Building</option>
                  <option value="Body Recomposition">Body Recomposition</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Experience Level</label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
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
                  className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                />
              </div>
            </div>

            <button
              onClick={handleGeneratePlan}
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider hover:bg-mad-lime-hover shadow-lg transition-all"
            >
              {loading ? "GENERATING WITH AI..." : "GENERATE PROTOCOL NOW"}
            </button>

            {generatedPlan && (
              <div className="p-6 rounded-2xl bg-mad-bg border border-mad-lime/30 text-xs font-mono whitespace-pre-line leading-relaxed text-mad-lime">
                {generatedPlan}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
