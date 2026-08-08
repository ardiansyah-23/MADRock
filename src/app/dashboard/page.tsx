"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dumbbell,
  Utensils,
  Flame,
  Activity,
  Trophy,
  Calendar,
  CheckCircle2,
  TrendingUp,
  User,
  Plus,
  Sparkles,
  ChevronRight,
  Clock,
  Award,
  BarChart3,
  ShieldCheck,
  Check,
} from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "workouts" | "nutrition" | "coaching">("overview");

  // State for logged workout items
  const [loggedSets, setLoggedSets] = useState<{ [key: number]: boolean }>({
    0: true,
  });

  const toggleSetCompleted = (index: number) => {
    setLoggedSets((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* User Welcome Banner */}
        <div className="rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-mad-lime/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-4 z-10">
            <div className="w-16 h-16 rounded-2xl bg-mad-lime text-mad-bg flex items-center justify-center font-black text-2xl font-spartan shadow-lg shadow-mad-lime/20 shrink-0">
              MR
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full bg-mad-lime/10 border border-mad-lime/30 text-mad-lime font-mono text-[10px] font-bold uppercase">
                  VIP ATHLETE MEMBER
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black font-spartan text-white uppercase mt-1">
                WELCOME BACK, ATHLETE
              </h1>
              <p className="text-xs text-mad-gray font-mono mt-0.5">
                Current Protocol: <strong className="text-white">12-Week Hypertrophy Masterclass</strong> • Week 4, Day 2
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 z-10">
            <div className="px-4 py-2.5 rounded-2xl bg-mad-bg border border-white/10 text-xs font-mono text-mad-gray flex items-center gap-2">
              <Flame className="w-4 h-4 text-mad-lime fill-mad-lime" />
              <span>Streak: <strong className="text-mad-lime">14 Days 🔥</strong></span>
            </div>

            <Link
              href="/ai-coach"
              className="px-5 py-2.5 rounded-2xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase flex items-center gap-2 hover:bg-mad-lime-hover transition-all shadow-lg shadow-mad-lime/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Coach Assistant</span>
            </Link>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
          {[
            { id: "overview", label: "Dashboard Overview", icon: Activity },
            { id: "workouts", label: "My Workout Tracker", icon: Dumbbell },
            { id: "nutrition", label: "My Nutrition Targets", icon: Utensils },
            { id: "coaching", label: "1-on-1 Coaching & Sessions", icon: Calendar },
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

        {/* Overview Tab Content */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Top Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-mad-surface border border-white/10 space-y-1">
                <span className="text-[11px] text-mad-gray font-mono uppercase">Daily Calories</span>
                <div className="text-2xl font-black font-spartan text-mad-lime">2,450 / 2,600</div>
                <div className="w-full h-1.5 rounded-full bg-mad-bg overflow-hidden mt-2">
                  <div className="w-[94%] h-full bg-mad-lime" />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-mad-surface border border-white/10 space-y-1">
                <span className="text-[11px] text-mad-gray font-mono uppercase">Protein Consumed</span>
                <div className="text-2xl font-black font-spartan text-white">165g / 180g</div>
                <div className="w-full h-1.5 rounded-full bg-mad-bg overflow-hidden mt-2">
                  <div className="w-[90%] h-full bg-mad-lime" />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-mad-surface border border-white/10 space-y-1">
                <span className="text-[11px] text-mad-gray font-mono uppercase">Current Weight</span>
                <div className="text-2xl font-black font-spartan text-white">78.4 KG</div>
                <span className="text-[10px] text-emerald-400 font-mono">-1.2 kg this month</span>
              </div>

              <div className="p-5 rounded-2xl bg-mad-surface border border-white/10 space-y-1">
                <span className="text-[11px] text-mad-gray font-mono uppercase">Next Session</span>
                <div className="text-lg font-bold font-spartan text-white">Tomorrow, 10 AM</div>
                <span className="text-[10px] text-mad-lime font-mono">1-on-1 with Coach Marcus</span>
              </div>
            </div>

            {/* Dashboard Grid Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Today's Workout */}
              <div className="lg:col-span-7 rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h3 className="text-xl font-bold font-spartan text-white uppercase flex items-center gap-2">
                    <Dumbbell className="w-5 h-5 text-mad-lime" />
                    <span>TODAY'S WORKOUT PROTOCOL</span>
                  </h3>
                  <span className="text-xs text-mad-lime font-mono uppercase font-bold">Chest & Triceps Power</span>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Incline Barbell Bench Press", sets: "4 Sets x 6-8 Reps", weight: "85 KG" },
                    { name: "Flat Dumbbell Press", sets: "3 Sets x 10 Reps", weight: "32 KG" },
                    { name: "Weighted Dips", sets: "3 Sets x 10 Reps", weight: "+15 KG" },
                    { name: "Cable Tricep Rope Pushdown", sets: "4 Sets x 12 Reps", weight: "35 KG" },
                  ].map((ex, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-mad-bg border border-white/5 flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-bold text-sm font-spartan">{ex.name}</h4>
                        <span className="text-xs text-mad-gray font-mono">{ex.sets}</span>
                      </div>
                      <span className="text-xs text-mad-lime font-mono font-bold bg-mad-lime/10 px-3 py-1 rounded-lg">
                        {ex.weight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Today's Meals */}
              <div className="lg:col-span-5 rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-6">
                <h3 className="text-xl font-bold font-spartan text-white uppercase border-b border-white/10 pb-4 flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-mad-lime" />
                  <span>TODAY'S MEAL TARGETS</span>
                </h3>

                <div className="space-y-3">
                  {[
                    { meal: "Meal 1: Oats & Whey", cals: "520 kcal", protein: "40g P" },
                    { meal: "Meal 2: Chicken & Rice", cals: "680 kcal", protein: "50g P" },
                    { meal: "Meal 3: Salmon & Asparagus", cals: "610 kcal", protein: "45g P" },
                    { meal: "Meal 4: Casein & Almonds", cals: "350 kcal", protein: "30g P" },
                  ].map((m, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-mad-bg border border-white/5 flex items-center justify-between text-xs">
                      <span className="text-white font-semibold">{m.meal}</span>
                      <div className="flex gap-2">
                        <span className="text-mad-gray font-mono">{m.cals}</span>
                        <span className="text-mad-lime font-mono font-bold">{m.protein}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Workouts Tab Content */}
        {activeTab === "workouts" && (
          <div className="rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold font-spartan text-white uppercase">
                  ACTIVE LOG: UPPER BODY HYPERTROPHY
                </h3>
                <p className="text-xs text-mad-gray font-mono mt-1">Week 4 • Day 2 • Progressive Overload Focus</p>
              </div>

              <span className="px-3 py-1 rounded-full bg-mad-lime/10 border border-mad-lime/30 text-mad-lime font-mono text-xs font-bold">
                COMPLETED: {Object.keys(loggedSets).filter(k => loggedSets[Number(k)]).length} / 4 EXERCISES
              </span>
            </div>

            <div className="space-y-4">
              {[
                { name: "Barbell Incline Press", target: "4 Sets x 8 Reps", weight: "85 KG", rpe: "RPE 8" },
                { name: "Weighted Chest Dips", target: "3 Sets x 10 Reps", weight: "+15 KG", rpe: "RPE 9" },
                { name: "Standing Overhead Press", target: "4 Sets x 8 Reps", weight: "55 KG", rpe: "RPE 8.5" },
                { name: "Cable Lateral Raises", target: "4 Sets x 15 Reps", weight: "12.5 KG", rpe: "RPE 9.5" },
              ].map((ex, idx) => {
                const isDone = !!loggedSets[idx];
                return (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                      isDone
                        ? "bg-mad-lime/5 border-mad-lime/40"
                        : "bg-mad-bg border-white/10"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold font-spartan text-lg text-white uppercase">{ex.name}</h4>
                        {isDone && <CheckCircle2 className="w-4 h-4 text-mad-lime" />}
                      </div>
                      <p className="text-xs text-mad-gray font-mono">
                        Target: {ex.target} • Working Weight: <strong className="text-mad-lime">{ex.weight}</strong>
                      </p>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                      <span className="px-3 py-1 rounded-lg bg-mad-surface text-xs font-mono text-mad-gray">
                        {ex.rpe}
                      </span>
                      <button
                        onClick={() => toggleSetCompleted(idx)}
                        className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase font-mono transition-all ${
                          isDone
                            ? "bg-mad-lime text-mad-bg font-extrabold"
                            : "bg-mad-surface text-white border border-white/10 hover:border-mad-lime"
                        }`}
                      >
                        {isDone ? "✓ COMPLETED" : "MARK COMPLETE"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Nutrition Tab Content */}
        {activeTab === "nutrition" && (
          <div className="rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold font-spartan text-white uppercase">
                  NUTRITION & MACRO PLANNER
                </h3>
                <p className="text-xs text-mad-lime font-mono mt-1">Goal: Lean Muscle Gain • Target: 2,600 kcal/day</p>
              </div>

              <Link
                href="/meal-planner"
                className="px-4 py-2 rounded-xl bg-mad-lime/10 border border-mad-lime/30 text-mad-lime text-xs font-mono font-bold uppercase hover:bg-mad-lime/20 transition-all"
              >
                Open Meal Generator →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-mad-bg border border-white/10 space-y-2">
                <span className="text-xs font-mono text-mad-gray uppercase">Protein (Target: 180g)</span>
                <div className="text-3xl font-black font-spartan text-mad-lime">165g</div>
                <div className="w-full h-2 rounded-full bg-mad-surface overflow-hidden">
                  <div className="w-[91%] h-full bg-mad-lime" />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-mad-bg border border-white/10 space-y-2">
                <span className="text-xs font-mono text-mad-gray uppercase">Carbohydrates (Target: 310g)</span>
                <div className="text-3xl font-black font-spartan text-white">290g</div>
                <div className="w-full h-2 rounded-full bg-mad-surface overflow-hidden">
                  <div className="w-[93%] h-full bg-white" />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-mad-bg border border-white/10 space-y-2">
                <span className="text-xs font-mono text-mad-gray uppercase">Dietary Fats (Target: 65g)</span>
                <div className="text-3xl font-black font-spartan text-white">58g</div>
                <div className="w-full h-2 rounded-full bg-mad-surface overflow-hidden">
                  <div className="w-[89%] h-full bg-amber-400" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Coaching Tab Content */}
        {activeTab === "coaching" && (
          <div className="rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold font-spartan text-white uppercase">
                  1-ON-1 COACHING SESSIONS
                </h3>
                <p className="text-xs text-mad-gray font-mono mt-1">Assigned Coach: Marcus Rock</p>
              </div>

              <Link
                href="/booking"
                className="px-5 py-2.5 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase hover:bg-mad-lime-hover transition-all"
              >
                Book New Session
              </Link>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-mad-bg border border-mad-lime/30 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 rounded bg-mad-lime/10 text-mad-lime font-mono text-[10px] font-bold uppercase">
                    CONFIRMED UPCOMING
                  </span>
                  <h4 className="font-bold text-white text-base">Weekly Technique & Form Video Review</h4>
                  <p className="text-xs text-mad-gray font-mono">Tomorrow at 10:00 AM • Zoom Video Call</p>
                </div>
                <Link
                  href="/booking"
                  className="px-4 py-2 rounded-xl bg-mad-surface border border-white/10 text-xs font-mono text-white hover:text-mad-lime"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
