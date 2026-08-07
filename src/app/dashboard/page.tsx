"use client";

import { SectionHeader } from "@/components/common/SectionHeader";
import { Dumbbell, Utensils, Flame, Activity, Trophy, Calendar, CheckCircle2, TrendingUp, User } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* User Welcome Banner */}
        <div className="rounded-3xl bg-mad-surface border border-white/10 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-mad-lime text-mad-bg flex items-center justify-center font-black text-2xl font-spartan">
              MR
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black font-spartan text-white uppercase">
                WELCOME BACK, ATHLETE
              </h1>
              <p className="text-xs text-mad-lime font-mono uppercase mt-0.5">
                Current Program: 12-Week Hypertrophy Protocol • Week 4, Day 2
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-mad-bg border border-white/10 text-xs font-mono text-mad-gray">
              Streak: <strong className="text-mad-lime">14 Days 🔥</strong>
            </div>
          </div>
        </div>

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
    </main>
  );
}
