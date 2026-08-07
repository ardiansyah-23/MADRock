"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Dumbbell, Search, Play, AlertCircle, Target, Gauge } from "lucide-react";

export default function WorkoutLibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All", "Chest", "Back", "Shoulders", "Legs", "Arms", "Core", "Cardio", "Mobility", "Stretching"
  ];

  const exercises = [
    {
      id: "barbell-bench-press",
      title: "Barbell Bench Press",
      category: "Chest",
      muscles: "Pectoralis Major, Anterior Deltoids, Triceps",
      difficulty: "Intermediate",
      equipment: "Barbell & Flat Bench",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
      instructions: "Drive feet into floor, retract scapula, lower bar smoothly to mid-sternum, press upward explosively.",
      mistakes: "Flaring elbows out to 90 degrees, bouncing bar off ribcage.",
    },
    {
      id: "barbell-squat",
      title: "Barbell Back Squat",
      category: "Legs",
      muscles: "Quadriceps, Gluteus Maximus, Hamstrings, Core",
      difficulty: "Advanced",
      equipment: "Squat Rack & Barbell",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
      instructions: "Set bar on upper traps, break at hips and knees simultaneously, achieve parallel depth, drive up through midfoot.",
      mistakes: "Knees caving inward (valgus), rounding lower lumbar spine at bottom.",
    },
    {
      id: "lat-pulldown",
      title: "Wide-Grip Lat Pulldown",
      category: "Back",
      muscles: "Latissimus Dorsi, Teres Major, Rhomboids, Biceps",
      difficulty: "Beginner",
      equipment: "Cable Machine & Lat Bar",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
      instructions: "Grip bar slightly wider than shoulder width, lean back 10 degrees, pull bar down to upper chest while driving elbows down.",
      mistakes: "Swinging momentum from lower back, pulling bar behind neck.",
    },
    {
      id: "overhead-press",
      title: "Standing Military Press",
      category: "Shoulders",
      muscles: "Anterior & Lateral Deltoids, Triceps, Upper Chest",
      difficulty: "Intermediate",
      equipment: "Barbell",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
      instructions: "Stand shoulder-width apart, brace glutes and core, press bar vertically clearing chin, lock out overhead.",
      mistakes: "Excessive arching of lower back, pushing bar forward instead of vertical.",
    },
    {
      id: "incline-dumbbell-curl",
      title: "Incline Dumbbell Curl",
      category: "Arms",
      muscles: "Biceps Brachii (Long Head Stretch)",
      difficulty: "Intermediate",
      equipment: "Adjustable Bench & Dumbbells",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
      instructions: "Set bench to 45 degrees, allow arms to hang fully extended, curl weight while keeping upper arms stationary.",
      mistakes: "Swinging shoulders forward to cut off stretch at bottom.",
    },
    {
      id: "hanging-leg-raise",
      title: "Hanging Strict Leg Raise",
      category: "Core",
      muscles: "Rectus Abdominis, Iliopsoas, Obliques",
      difficulty: "Advanced",
      equipment: "Pull-Up Bar",
      image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop",
      instructions: "Hang with dead grip, flex pelvis upward, raise straight legs until parallel to floor without swinging body.",
      mistakes: "Kicking legs using momentum instead of contracting abs.",
    },
  ];

  const filteredExercises = exercises.filter((ex) => {
    const matchesCategory = selectedCategory === "All" || ex.category === selectedCategory;
    const matchesSearch =
      ex.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ex.muscles.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="EXERCISE DATABASE"
          title="HD WORKOUT & BIOMECHANICS LIBRARY"
          subtitle="Explore precise execution cues, muscle targeted anatomy, and common mistakes for top compound exercises."
        />

        {/* Search & Category Filter */}
        <div className="space-y-6 mb-12">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-mad-gray" />
            <input
              type="text"
              placeholder="Search exercise by name or muscle group (e.g. Biceps, Squat)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-mad-surface border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-mad-gray focus:outline-none focus:border-mad-lime font-mono"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                  selectedCategory === cat
                    ? "bg-mad-lime text-mad-bg shadow-md"
                    : "bg-mad-surface text-mad-gray border border-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Exercise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExercises.map((exercise, idx) => (
            <ScrollReveal key={exercise.id} delay={0.1 * idx}>
              <div className="rounded-3xl bg-mad-surface border border-white/10 overflow-hidden hover:border-mad-lime/40 transition-all duration-300 flex flex-col h-full">
                <div className="relative h-56 w-full">
                  <Image
                    src={exercise.image}
                    alt={exercise.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-mad-bg/80 text-mad-lime font-mono text-[10px] uppercase font-bold border border-white/10">
                    {exercise.category}
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-mad-lime text-mad-bg font-extrabold text-[10px] uppercase">
                    {exercise.difficulty}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-spartan text-white uppercase">
                      {exercise.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-mad-lime font-mono mt-1">
                      <Target className="w-3.5 h-3.5" />
                      <span>{exercise.muscles}</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-mad-gray pt-3 border-t border-white/10">
                    <div>
                      <strong className="text-white block uppercase text-[10px] font-mono">Execution:</strong>
                      <p>{exercise.instructions}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-mad-bg border border-rose-500/20 text-rose-300">
                      <div className="flex items-center gap-1.5 font-bold uppercase text-[10px] text-rose-400 mb-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Common Mistakes</span>
                      </div>
                      <p className="text-[11px]">{exercise.mistakes}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
