"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageProvider";

export default function FAQPage() {
  const { lang, t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: lang === "id" ? "Bagaimana cara kerja kepelatihan 1-on-1 MADRock?" : "How does MADRock 1-on-1 coaching work?",
      a:
        lang === "id"
          ? "Setelah mendaftar, Anda akan ditugaskan seorang Head Coach dedicated. Kami melakukan konsultasi video awal untuk meninjau latihan, diet, riwayat cedera, dan target Anda. Anda mendapatkan program latihan kustom, target makro, dan evaluasi video mingguan."
          : "Upon signing up, you will be assigned a dedicated Head Coach. We conduct an initial video consultation to review your current training, diet, injury history, and goals. You get a customized workout program, macro targets, and weekly video check-ins.",
    },
    {
      q: lang === "id" ? "Apakah MADRock cocok untuk pemula?" : "Is MADRock suitable for beginners?",
      a:
        lang === "id"
          ? "Ya! Setiap protokol di-periodisasi sesuai pengalaman latihan Anda. Pemula berfokus pada menguasai biomekanika gerakan angkatan compound dan membangun kebiasaan nutrisi yang berkelanjutan."
          : "Yes! Every protocol is periodized for your exact training experience. Beginners focus on mastering fundamental compound lifting biomechanics and building sustainable nutrition habits.",
    },
    {
      q: lang === "id" ? "Peralatan apa yang saya butuhkan untuk ikutan program?" : "What equipment do I need for the programs?",
      a:
        lang === "id"
          ? "Kami menyediakan program untuk akses gym komersial lengkap, gym rumah powerlifting, hingga peralatan minimal dumbbell atau bodyweight."
          : "We offer programs for full commercial gym access, powerlifting home gyms, and minimal dumbbell/bodyweight setups.",
    },
    {
      q: lang === "id" ? "Bagaimana rencana makan dipersonalisasi?" : "How are meal plans customized?",
      a:
        lang === "id"
          ? "Pelatih Anda mengkalkulasi BMR, TDEE, dan pembagian makro presisi Anda (Protein, Karbohidrat, Lemak) berdasarkan target Anda (Fat Loss, Hipertrofi, Rekomposisi). Anda juga mendapatkan akses ke AI Meal Planner kami."
          : "Your coach calculates your precise BMR, TDEE, and macro breakdown (Protein, Carbs, Fats) based on your goal (Fat Loss, Hypertrophy, Recomp). You also get access to our AI Meal Planner.",
    },
    {
      q: lang === "id" ? "Bisakah saya membatalkan keanggotaan kapan saja?" : "Can I cancel my membership anytime?",
      a:
        lang === "id"
          ? "Ya. Semua paket keanggotaan bebas kontrak dan fleksibel. Anda dapat mejedakan atau membatalkan kapan saja langsung dari dashboard member Anda."
          : "Yes. All membership plans are non-contract and flexible. You can pause or cancel anytime directly from your member dashboard.",
    },
  ];

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={lang === "id" ? "SEGALA HAL YANG PERLU ANDA KETAHUI" : "EVERYTHING YOU NEED TO KNOW"}
          subtitle={
            lang === "id"
              ? "Jawaban jelas mengenai protokol kepelatihan, ketentuan keanggotaan, dan pendekatan latihan kami."
              : "Clear answers regarding our coaching protocols, membership terms, and training approach."
          }
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="rounded-2xl bg-mad-surface border border-slate-900/10 overflow-hidden">
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 uppercase font-spartan text-lg hover:text-mad-lime transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-mad-lime shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-mad-lime transition-transform duration-300 ${openIdx === idx ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {openIdx === idx && (
                  <div className="px-6 pb-6 text-sm text-mad-gray leading-relaxed border-t border-slate-900/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
