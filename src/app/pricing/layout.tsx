import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent Coaching Membership Plans & 14-Day Guarantee | MADRock",
  description:
    "No long-term contracts. Cancel anytime. Choose the level of 1-on-1 personal coaching, AI meal planning, and periodized training splits you need.",
  keywords: [
    "Personal Trainer Cost",
    "Fitness Coaching Membership",
    "VIP 1-on-1 Coaching",
    "14-Day Money Back Guarantee",
    "MADRock Membership",
  ],
  openGraph: {
    title: "Transparent Membership Plans & 14-Day Guarantee | MADRock",
    description: "No long-term contracts. Choose the level of science-backed guidance you need.",
    url: "https://madrock.fit/pricing",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
