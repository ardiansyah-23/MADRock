import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Science Journal: Weightlifting Biomechanics & Nutrition Articles | MADRock",
  description:
    "Evidence-based articles on hypertrophy biomechanics, protein timing, progressive overload strategy, and recovery science written by certified coaches.",
  keywords: [
    "Fitness Journal",
    "Sports Science Blog",
    "Hypertrophy Biomechanics",
    "Creatine Supplementation Guide",
    "Recovery Science Articles",
  ],
  openGraph: {
    title: "Sports Science Journal | MADRock",
    description: "Evidence-based articles on weightlifting biomechanics, nutrition protocols, and recovery science.",
    url: "https://mad-rock.vercel.app/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
