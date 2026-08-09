import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions: Coaching Protocols & Terms | MADRock",
  description:
    "Clear answers regarding MADRock 1-on-1 coaching check-ins, periodized program customization, membership terms, and 14-day refund policy.",
  keywords: ["MADRock FAQ", "Coaching Questions", "1-on-1 Personal Trainer FAQ", "Membership Terms"],
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
