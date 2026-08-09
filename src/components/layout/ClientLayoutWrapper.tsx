"use client";

import { usePathname } from "next/navigation";
import { LanguageProvider } from "@/components/common/LanguageProvider";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboardRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/admin");

  return (
    <ThemeProvider>
      <LanguageProvider>
        {isDashboardRoute ? (
          // Standalone Dashboard Workplace
          <main className="min-h-screen bg-mad-bg text-mad-text">{children}</main>
        ) : (
          // Public Website Layout
          <>
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </>
        )}
      </LanguageProvider>
    </ThemeProvider>
  );
}

