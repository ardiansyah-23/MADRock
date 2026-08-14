import type { Metadata } from "next";
import "./globals.css";
import { ClientLayoutWrapper } from "@/components/layout/ClientLayoutWrapper";

const BASE_URL = "https://mad-rock.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Training by MAD | Ahmad Hudzaifah – S&C Coach Indonesia",
    template: "%s | Training by MAD",
  },
  description:
    "Platform kepelatihan Strength & Conditioning berbasis sains oleh Coach Ahmad Hudzaifah. Head Coach PON 2024 DKI Jakarta, Speed Climbing & Fitness Coach Indonesia.",
  keywords: [
    "Ahmad Hudzaifah",
    "Training by MAD",
    "Strength Conditioning Coach Indonesia",
    "Speed Climbing Coach",
    "Personal Trainer Online Indonesia",
    "Hypertrophy Program",
    "Fat Loss Protocol",
    "AI Meal Planner",
    "MADRock Fitness",
    "PON 2024 Panjat Tebing",
  ],
  authors: [{ name: "Ahmad Hudzaifah" }],
  openGraph: {
    title: "Training by MAD | Ahmad Hudzaifah – S&C Coach Indonesia",
    description:
      "Pelatih Strength & Conditioning dan Speed Climbing Indonesia. Head Coach PON 2024 DKI Jakarta. Metodologi berbasis sains untuk atlet elite dan pemula.",
    url: BASE_URL,
    siteName: "Training by MAD",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Ahmad Hudzaifah – Training by MAD",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Training by MAD | Ahmad Hudzaifah",
    description: "Pelatih S&C dan Speed Climbing Indonesia. Founder Training by MAD.",
    images: ["https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mad-rock.vercel.app/#ahmad",
      name: "Ahmad Hudzaifah",
      jobTitle: "Strength & Conditioning Coach",
      description:
        "Head Coach PON 2024 DKI Jakarta (Speed Climbing & Fitness). Pendiri Training by MAD. Pelatih S&C berbasis sains untuk atlet elite dan umum.",
      url: "https://mad-rock.vercel.app",
      sameAs: ["https://www.instagram.com/ahmadhudzaifah"],
    },
    {
      "@type": "Organization",
      "@id": "https://mad-rock.vercel.app/#org",
      name: "Training by MAD",
      url: "https://mad-rock.vercel.app",
      logo: "https://mad-rock.vercel.app/logo.png",
      founder: { "@id": "https://mad-rock.vercel.app/#ahmad" },
      description:
        "Platform coaching Strength & Conditioning berbasis sains di Indonesia. Melayani atlet elite dan umum melalui program periodisasi, nutrisi, dan metodologi evidence-based.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-mad-bg text-mad-text antialiased min-h-screen flex flex-col justify-between">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
