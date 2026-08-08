"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Dumbbell, Menu, X, Sparkles, User, ArrowRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", href: "/programs" },
    { name: "Workouts", href: "/workout-library" },
    { name: "Meal Planner", href: "/meal-planner" },
    { name: "Calculators", href: "/tools" },
    { name: "Transformations", href: "/transformations" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-mad-bg/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-mad-lime flex items-center justify-center text-mad-bg transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-lg shadow-mad-lime/20">
              <Dumbbell className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-spartan font-black text-2xl tracking-tighter text-white uppercase leading-none">
                MAD<span className="text-mad-lime">ROCK</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-mad-gray uppercase">
                PREMIUM COACHING
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Direct Clickable Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-mad-gray hover:text-mad-lime transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/ai-coach"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-mad-lime bg-mad-lime/10 border border-mad-lime/30 rounded-full hover:bg-mad-lime/20 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Coach</span>
            </Link>

            <Link
              href="/dashboard"
              className="p-2 text-mad-gray hover:text-white transition-colors"
              title="User Dashboard"
            >
              <User className="w-5 h-5" />
            </Link>

            <Link
              href="/booking"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-mad-lime text-mad-bg hover:bg-mad-lime-hover transition-all duration-300 shadow-md shadow-mad-lime/20 hover:scale-[1.02]"
            >
              <span>START TRAINING</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-mad-surface text-white border border-white/10 hover:text-mad-lime transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-mad-bg/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white hover:text-mad-lime transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/ai-coach"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-mad-lime/10 text-mad-lime border border-mad-lime/30 font-semibold text-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>AI Coach Feature</span>
              </Link>

              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-mad-surface text-white border border-white/10 font-semibold text-sm"
              >
                <User className="w-4 h-4" />
                <span>Member Dashboard</span>
              </Link>

              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider"
              >
                <span>Start Training Now</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
