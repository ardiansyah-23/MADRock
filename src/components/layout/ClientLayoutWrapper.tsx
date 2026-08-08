"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboardRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/admin");

  if (isDashboardRoute) {
    // Standalone Dashboard Workplace
    return <main className="min-h-screen bg-mad-bg text-white">{children}</main>;
  }

  // Public Website Layout
  return (
    <>
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
}
