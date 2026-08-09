import type { Metadata } from "next";
import "./globals.css";
import { ClientLayoutWrapper } from "@/components/layout/ClientLayoutWrapper";

export const metadata: Metadata = {
  title: {
    default: "MADRock: Premium Fitness Coaching Platform",
    template: "%s | MADRock Fitness",
  },
  description:
    "Science-based premium coaching designed to help you build muscle, lose fat, improve strength and become your best version.",
  keywords: [
    "Fitness Coaching",
    "Personal Trainer",
    "Hypertrophy Program",
    "Fat Loss Protocol",
    "Body Recomposition",
    "AI Meal Planner",
    "MADRock Fitness",
  ],
  authors: [{ name: "Coach Ahmad Hudzaifah" }],
  openGraph: {
    title: "MADRock: Premium Fitness Coaching Platform",
    description: "Train. Focus. Become Unstoppable.",
    url: "https://madrock.vercel.app",
    siteName: "MADRock Fitness",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "MADRock Premium Fitness Coaching",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('madrock-theme');
                  if (!saved || saved === 'dark') {
                    localStorage.setItem('madrock-theme', 'light');
                    saved = 'light';
                  }
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add(saved);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-mad-bg text-mad-text antialiased min-h-screen flex flex-col justify-between">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
