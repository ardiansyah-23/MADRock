import type { Metadata } from "next";
import { FaqClientContent } from "./FaqClientContent";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does MADRock 1-on-1 coaching work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upon signing up, you will be assigned a dedicated Head Coach. We conduct an initial video consultation to review your current training, diet, injury history, and goals. You get a customized workout program, macro targets, and weekly video check-ins.",
      },
    },
    {
      "@type": "Question",
      name: "Is MADRock suitable for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Every protocol is periodized for your exact training experience. Beginners focus on mastering fundamental compound lifting biomechanics and building sustainable nutrition habits.",
      },
    },
    {
      "@type": "Question",
      name: "What equipment do I need for the programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer programs for full commercial gym access, powerlifting home gyms, and minimal dumbbell/bodyweight setups.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my membership anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All membership plans are non-contract and flexible. You can pause or cancel anytime directly from your member dashboard.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "FAQ – Pertanyaan Seputar Coaching & Program MADRock",
  description:
    "Jawaban lengkap tentang cara kerja coaching 1-on-1 MADRock, peralatan yang dibutuhkan, personalisasi rencana makan, dan kebijakan pembatalan keanggotaan.",
  keywords: [
    "FAQ Personal Trainer Indonesia",
    "Cara Kerja Coaching MADRock",
    "Pertanyaan Fitness Coach",
    "Kebijakan Keanggotaan MADRock",
  ],
  openGraph: {
    title: "FAQ – Pertanyaan Seputar Coaching MADRock",
    description: "Temukan jawaban atas pertanyaan tentang program coaching, keanggotaan, dan metodologi Training by MAD.",
    url: "https://mad-rock.vercel.app/faq",
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqClientContent />
    </>
  );
}
