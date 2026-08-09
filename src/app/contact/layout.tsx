import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact MADRock Headquarters: 1-on-1 VIP Coaching Inquiry",
  description:
    "Get in touch with MADRock head coaches for private 1-on-1 coaching inquiries, corporate wellness programs, or technical platform assistance.",
  keywords: ["Contact MADRock", "Personal Trainer Inquiry", "MADRock Support", "Coaching Consultation"],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
