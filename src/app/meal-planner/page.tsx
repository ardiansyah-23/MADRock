"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Utensils, Flame, Clock, Check, ChevronRight, Sparkles } from "lucide-react";

export default function MealPlannerPage() {
  const [selectedGoal, setSelectedGoal] = useState("All");

  const categories = [
    "All", "High Protein", "Cutting Deficit", "Bulking Surplus", "Low Carb", "Vegetarian"
  ];

  const meals = [
    {
      id: "grilled-salmon-asparagus",
      title: "Wild Salmon & Garlic Asparagus",
      category: "High Protein",
      calories: 580,
      protein: "48g",
      carbs: "22g",
      fat: "24g",
      prepTime: "20 Mins",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
      ingredients: [
        "200g Wild Alaskan Salmon Fillet",
        "150g Fresh Asparagus Spears",
        "1 tbsp Extra Virgin Olive Oil",
        "1 Lemon (Juiced & Zested)",
        "Garlic Powder, Sea Salt, Cracked Black Pepper",
      ],
      steps: [
        "Season salmon fillet with sea salt, pepper, and garlic powder.",
        "Heat olive oil in a skillet over medium-high heat.",
        "Pan-sear salmon skin-side down for 4 minutes, flip and cook 3 minutes.",
        "Sauté asparagus in same pan for 5 minutes with lemon juice.",
      ],
    },
    {
      id: "steak-sweet-potato",
      title: "Grass-Fed Sirloin & Sweet Potato Mash",
      category: "Bulking Surplus",
      calories: 740,
      protein: "58g",
      carbs: "65g",
      fat: "22g",
      prepTime: "25 Mins",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
      ingredients: [
        "250g Top Sirloin Steak",
        "200g Baked Sweet Potato",
        "1 tbsp Grass-fed Butter",
        "Steamed Broccoli Florets",
      ],
      steps: [
        "Bake sweet potato at 200°C for 40 minutes, mash with butter.",
        "Sear sirloin in hot cast-iron skillet for 3 minutes per side for medium-rare.",
        "Rest steak for 5 minutes before slicing against the grain.",
      ],
    },
    {
      id: "chicken-quinoa-bowl",
      title: "Chipotle Chicken & Quinoa Fuel Bowl",
      category: "Cutting Deficit",
      calories: 490,
      protein: "52g",
      carbs: "45g",
      fat: "10g",
      prepTime: "15 Mins",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
      ingredients: [
        "180g Grilled Chicken Breast",
        "100g Cooked Organic Quinoa",
        "Black Beans & Pico De Gallo",
        "Sliced Avocado (30g)",
      ],
      steps: [
        "Grill seasoned chicken breast with chipotle spices until internal temp reaches 74°C.",
        "Layer cooked quinoa, black beans, and salsa in bowl.",
        "Top with sliced chicken breast and fresh avocado.",
      ],
    },
    {
      id: "whey-oatmeal-power-bowl",
      title: "Anabolic Berry & Whey Protein Oats",
      category: "High Protein",
      calories: 420,
      protein: "42g",
      carbs: "50g",
      fat: "8g",
      prepTime: "8 Mins",
      image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?q=80&w=800&auto=format&fit=crop",
      ingredients: [
        "60g Rolled Oats",
        "1 Scoop MADRock Isolate Whey Protein",
        "100g Mixed Wild Berries",
        "1 tbsp Chia Seeds",
      ],
      steps: [
        "Cook oats with water or almond milk in microwave for 90 seconds.",
        "Stir in whey protein isolate thoroughly after cooking.",
        "Top with fresh blueberries, raspberries, and chia seeds.",
      ],
    },
  ];

  const filteredMeals = meals.filter(
    (m) => selectedGoal === "All" || m.category === selectedGoal
  );

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="NUTRITION & MACROS"
          title="PRECISION MEAL PLANNER & RECIPES"
          subtitle="Fuel your workouts with calculated high-protein recipes tailored for cutting, bulking, and body recomposition."
        />

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedGoal(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase transition-all ${
                selectedGoal === cat
                  ? "bg-mad-lime text-mad-bg shadow-lg font-extrabold"
                  : "bg-mad-surface text-mad-gray border border-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMeals.map((meal, idx) => (
            <ScrollReveal key={meal.id} delay={0.1 * idx}>
              <div className="rounded-3xl bg-mad-surface border border-white/10 overflow-hidden hover:border-mad-lime/40 transition-all duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-0">
                  {/* Image */}
                  <div className="sm:col-span-5 relative h-64 sm:h-auto min-h-[220px]">
                    <Image
                      src={meal.image}
                      alt={meal.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-mad-bg/80 text-mad-lime font-mono text-[10px] uppercase font-bold border border-white/10">
                      {meal.category}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="sm:col-span-7 p-6 space-y-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold font-spartan text-white uppercase">
                        {meal.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-mad-gray mt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-mad-lime" />
                          {meal.prepTime}
                        </span>
                      </div>
                    </div>

                    {/* Macros breakdown */}
                    <div className="grid grid-cols-4 gap-1 text-center p-3 rounded-2xl bg-mad-bg border border-white/5">
                      <div>
                        <span className="text-[9px] font-mono text-mad-gray block">CALORIES</span>
                        <span className="text-sm font-bold font-spartan text-mad-lime">{meal.calories}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-mad-gray block">PROTEIN</span>
                        <span className="text-sm font-bold font-spartan text-white">{meal.protein}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-mad-gray block">CARBS</span>
                        <span className="text-sm font-bold font-spartan text-white">{meal.carbs}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-mad-gray block">FAT</span>
                        <span className="text-sm font-bold font-spartan text-white">{meal.fat}</span>
                      </div>
                    </div>

                    {/* Ingredients list */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-mad-lime uppercase font-bold block">Key Ingredients:</span>
                      <ul className="text-xs text-mad-gray space-y-1">
                        {meal.ingredients.slice(0, 3).map((ing, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-mad-lime" />
                            <span>{ing}</span>
                          </li>
                        ))}
                      </ul>
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
