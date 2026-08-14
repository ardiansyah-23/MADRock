"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Clock } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageProvider";

export function MealPlannerClientContent() {
  const { lang, t } = useLanguage();
  const [selectedGoal, setSelectedGoal] = useState("All");

  const categories = [
    "All", "High Protein", "Cutting Deficit", "Bulking Surplus", "Low Carb", "Vegetarian"
  ];

  const getCategoryLabel = (cat: string) => {
    if (lang === "id") {
      switch (cat) {
        case "All": return "Semua";
        case "High Protein": return "Tinggi Protein";
        case "Cutting Deficit": return "Defisit Kalori";
        case "Bulking Surplus": return "Surplus Massa Otot";
        case "Low Carb": return "Rendah Karbo";
        case "Vegetarian": return "Vegetarian";
        default: return cat;
      }
    }
    return cat;
  };

  const meals = [
    {
      id: "grilled-salmon-asparagus",
      title: lang === "id" ? "Salmon Liar & Asparagus Bawang Putih" : "Wild Salmon & Garlic Asparagus",
      category: "High Protein",
      calories: 580,
      protein: "48g",
      carbs: "22g",
      fat: "24g",
      prepTime: lang === "id" ? "20 Menit" : "20 Mins",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
      ingredients: [
        lang === "id" ? "200g Fillet Salmon Liar Alaska" : "200g Wild Alaskan Salmon Fillet",
        lang === "id" ? "150g Batang Asparagus Segar" : "150g Fresh Asparagus Spears",
        lang === "id" ? "1 sdm Minyak Zaitun Extra Virgin" : "1 tbsp Extra Virgin Olive Oil",
        lang === "id" ? "1 Jeruk Lemon (Perasan & Parutan)" : "1 Lemon (Juiced & Zested)",
        lang === "id" ? "Bubuk Bawang Putih, Garam Laut, Lada Hitam" : "Garlic Powder, Sea Salt, Cracked Black Pepper",
      ],
    },
    {
      id: "steak-sweet-potato",
      title: lang === "id" ? "Sirloin Grass-Fed & Tumbukan Ubi Manis" : "Grass-Fed Sirloin & Sweet Potato Mash",
      category: "Bulking Surplus",
      calories: 740,
      protein: "58g",
      carbs: "65g",
      fat: "22g",
      prepTime: lang === "id" ? "25 Menit" : "25 Mins",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
      ingredients: [
        lang === "id" ? "250g Daging Steak Top Sirloin" : "250g Top Sirloin Steak",
        lang === "id" ? "200g Ubi Manis Panggang" : "200g Baked Sweet Potato",
        lang === "id" ? "1 sdm Mentega Grass-fed" : "1 tbsp Grass-fed Butter",
        lang === "id" ? "Brokoli Kukus Segar" : "Steamed Broccoli Florets",
      ],
    },
    {
      id: "chicken-quinoa-bowl",
      title: lang === "id" ? "Mangkok Ayam Chipotle & Quinoa" : "Chipotle Chicken & Quinoa Fuel Bowl",
      category: "Cutting Deficit",
      calories: 490,
      protein: "52g",
      carbs: "45g",
      fat: "10g",
      prepTime: lang === "id" ? "15 Menit" : "15 Mins",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
      ingredients: [
        lang === "id" ? "180g Dada Ayam Panggang" : "180g Grilled Chicken Breast",
        lang === "id" ? "100g Quinoa Organik Matang" : "100g Cooked Organic Quinoa",
        lang === "id" ? "Kacang Hitam & Salsa Pico De Gallo" : "Black Beans & Pico De Gallo",
        lang === "id" ? "Potongan Alpukat Segar (30g)" : "Sliced Avocado (30g)",
      ],
    },
    {
      id: "whey-oatmeal-power-bowl",
      title: lang === "id" ? "Oatmeal Anabolik Buah Beri & Whey Protein" : "Anabolic Berry & Whey Protein Oats",
      category: "High Protein",
      calories: 420,
      protein: "42g",
      carbs: "50g",
      fat: "8g",
      prepTime: lang === "id" ? "8 Menit" : "8 Mins",
      image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?q=80&w=800&auto=format&fit=crop",
      ingredients: [
        lang === "id" ? "60g Oat Utuh Organik" : "60g Rolled Oats",
        lang === "id" ? "1 Scoop MADRock Whey Isolate" : "1 Scoop MADRock Isolate Whey Protein",
        lang === "id" ? "100g Campuran Buah Beri Liar" : "100g Mixed Wild Berries",
        lang === "id" ? "1 sdm Biji Chia (Chia Seeds)" : "1 tbsp Chia Seeds",
      ],
    },
  ];

  const filteredMeals = meals.filter(
    (m) => selectedGoal === "All" || m.category === selectedGoal
  );

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t("meal_header_title")}
          subtitle={t("meal_header_subtitle")}
        />

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedGoal(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase transition-all ${selectedGoal === cat
                  ? "bg-mad-lime text-mad-bg font-extrabold"
                  : "bg-mad-surface text-mad-gray border border-slate-900/10 hover:text-slate-900"
                }`}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMeals.map((meal, idx) => (
            <ScrollReveal key={meal.id} delay={0.1 * idx}>
              <div className="rounded-3xl bg-mad-surface border border-slate-900/10 overflow-hidden hover:border-mad-lime/40 transition-all duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-0">
                  {/* Image */}
                  <div className="sm:col-span-5 relative h-64 sm:h-auto min-h-[220px]">
                    <Image
                      src={meal.image}
                      alt={meal.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-mad-bg/80 text-mad-lime font-mono text-[10px] uppercase font-bold border border-slate-900/10">
                      {getCategoryLabel(meal.category)}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="sm:col-span-7 p-6 space-y-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase">
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
                    <div className="grid grid-cols-4 gap-1 text-center p-3 rounded-2xl bg-mad-bg border border-slate-900/5">
                      <div>
                        <span className="text-[9px] font-mono text-mad-gray block">
                          {lang === "id" ? "KALORI" : "CALORIES"}
                        </span>
                        <span className="text-sm font-bold font-spartan text-mad-lime">{meal.calories}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-mad-gray block">PROTEIN</span>
                        <span className="text-sm font-bold font-spartan text-slate-900">{meal.protein}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-mad-gray block">KARBO</span>
                        <span className="text-sm font-bold font-spartan text-slate-900">{meal.carbs}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-mad-gray block">LEMAK</span>
                        <span className="text-sm font-bold font-spartan text-slate-900">{meal.fat}</span>
                      </div>
                    </div>

                    {/* Ingredients list */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-mad-lime uppercase font-bold block">
                        {lang === "id" ? "Bahan-bahan Utama:" : "Key Ingredients:"}
                      </span>
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
